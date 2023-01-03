import React from "react";
import { useDroppable } from "@dnd-kit/core";
import { rectSortingStrategy, SortableContext } from "@dnd-kit/sortable";

import SortableItem from "./SortableItem";

import "./Droppable.css";

const Droppable = ({ id, items, queueLoaded }) => {
  const { setNodeRef } = useDroppable({ id });

  return (
    <SortableContext id={id} items={items} strategy={rectSortingStrategy} loaded={queueLoaded}>
    <div>
        <h1>{id}</h1>
        <ul className="droppable" ref={setNodeRef}>
            {items.map((item) => (
                <SortableItem key={item} id={item} loaded={queueLoaded}/>
            ))}
        </ul>
    </div>
    </SortableContext>
  );
};

export default Droppable;
