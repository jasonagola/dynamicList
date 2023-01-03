import React, { useEffect, useState } from "react";
import {
  DndContext,
  DragOverlay,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors
} from "@dnd-kit/core";

import { sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import Droppable from "./components/Droppable";
import Item from "./components/Item";
import { arrayMove, insertAtIndex, removeAtIndex } from "./utils/array";

import "./App.css";
import { API, graphqlOperation } from "aws-amplify";
import { listServiceTickets } from "./graphql/queries";
import store from "./features/store";
import { refreshQueue } from "./features/QueueList/queueListSlice";

function Queue() {
  const [serviceTickets, setServiceTickets] = useState({})
  const [queueLoaded, setQueueLoaded] = useState(false)

  const [itemGroups, setItemGroups] = useState({
    "Queue": ["Rockhopper", "Blue State 4130", "3"],
    "Ready for Pickup": ["4", "5", "6"],
    "Parts Waiting": ["7", "8", "9"]
  });

  async function fetchServiceTickets() {
    try { 
    const serviceTicketList = await API.graphql(graphqlOperation(listServiceTickets))
    setServiceTickets(serviceTicketList.data.listServiceTickets.items)
  } catch (error) {
      console.log('Unable to load tickets', error)
  }
}

// const objbefore = serviceTickets
// console.log(objbefore)
// const obj = Object.fromEntries(serviceTickets)
// console.log(obj)

  useEffect(() => {
    fetchServiceTickets()
    }, [])

  useEffect(() => {
    parseServiceTickets()
    const tickets = {}
    Object.values(serviceTickets).forEach((ticket) => {
        return tickets[ticket.id] = ticket
      })
    store.dispatch(refreshQueue(tickets))
    setQueueLoaded(true)
  }, [serviceTickets])

  const parseServiceTickets = () => {
    let itemGroupQueue = []
    let itemGroupPickup = []
    let itemGroupPartsWaiting = []
    Object.values(serviceTickets).forEach((ticket) => {  
      switch (ticket.serviceRequest.status) {
        case "Queue":
          return itemGroupQueue.push([ticket.id])
        case "Ready for Pickup":
          return itemGroupPickup.push([ticket.id])
        case "Waiting for Parts":
          return itemGroupPartsWaiting.push([ticket.id])
      }
    })
    setItemGroups({
      "Queue": itemGroupQueue,
      "Ready for Pickup": itemGroupPickup,
      "Parts Waiting": itemGroupPartsWaiting
    })
  }

  const [activeId, setActiveId] = useState(null);

  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  );

  const handleDragStart = ({ active }) => setActiveId(active.id);

  const handleDragCancel = () => setActiveId(null);

  const handleDragOver = ({ active, over }) => {
    const overId = over?.id;

    if (!overId) {
      return;
    }

    const activeContainer = active.data.current.sortable.containerId;
    const overContainer = over.data.current?.sortable.containerId || over.id;

    if (activeContainer !== overContainer) {
      setItemGroups((itemGroups) => {
        const activeIndex = active.data.current.sortable.index;
        const overIndex =
          over.id in itemGroups
            ? itemGroups[overContainer].length + 1
            : over.data.current.sortable.index;

        return moveBetweenContainers(
          itemGroups,
          activeContainer,
          activeIndex,
          overContainer,
          overIndex,
          active.id
        );
      });
    }
  };

  const handleDragEnd = ({ active, over }) => {
    if (!over) {
      setActiveId(null);
      return;
    }

    if (active.id !== over.id) {
      const activeContainer = active.data.current.sortable.containerId;
      const overContainer = over.data.current?.sortable.containerId || over.id;
      const activeIndex = active.data.current.sortable.index;
      const overIndex =
        over.id in itemGroups
          ? itemGroups[overContainer].length + 1
          : over.data.current.sortable.index;

      setItemGroups((itemGroups) => {
        let newItems;
        if (activeContainer === overContainer) {
          newItems = {
            ...itemGroups,
            [overContainer]: arrayMove(
              itemGroups[overContainer],
              activeIndex,
              overIndex
            )
          };
        } else {
          newItems = moveBetweenContainers(
            itemGroups,
            activeContainer,
            activeIndex,
            overContainer,
            overIndex,
            active.id
          );
        }

        return newItems;
      });
    }

    setActiveId(null);
  };

  const moveBetweenContainers = (
    items,
    activeContainer,
    activeIndex,
    overContainer,
    overIndex,
    item
  ) => {
    return {
      ...items,
      [activeContainer]: removeAtIndex(items[activeContainer], activeIndex),
      [overContainer]: insertAtIndex(items[overContainer], overIndex, item)
    };
  };

  if (!queueLoaded) {
    return <div>Loading Queue!....</div>
  }

  return (
    <DndContext
      sensors={sensors}
      onDragStart={handleDragStart}
      onDragCancel={handleDragCancel}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      <div className="container">
        {Object.keys(itemGroups).map((group) => (
          <Droppable
            id={group}
            items={itemGroups[group]}
            activeId={activeId}
            key={group}
            loaded={queueLoaded}
          >
          </Droppable>
        ))}
      </div>
      <DragOverlay>
        {activeId ? <Item id={activeId} dragOverlay /> : null}
      </DragOverlay>
    </DndContext>
  );
}

export default Queue;
