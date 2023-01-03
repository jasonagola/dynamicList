import React, { useEffect, useState } from "react";
import { id } from "../utils/sampleServiceTicket";
import {format} from 'date-fns'
import store from "../features/store";

import "./Item.css";

const sampleBike = id

const Item = ({ id, dragOverlay, queueLoaded}) => {
  const [bikeInfo, setBikeInfo] = useState('Loading')
  const [loaded, setLoaded] = useState(false)

  // console.log(bikeInfo)

  useEffect(() => {
    if (store.getState.queueList != {}) {
    const refreshedTickets = store.getState().queueList.newQueue
    // console.log(refreshedTickets[id])
    setBikeInfo(refreshedTickets[id])
    setLoaded(true)
    }
    })

  // console.log(serviceTickets)

  const style = {
    cursor: dragOverlay ? "grabbing" : "grab",
  };

if (!loaded) {
  return <div>Loading Item</div>
}
  return (
    <div style={style} className="item">
        <p className="bikeTitle">{bikeInfo.bike.color} {bikeInfo.bike.make} {bikeInfo.bike.model}</p>
        <p className='customerTitle'> {bikeInfo.customer.firstName} {bikeInfo.customer.lastName}</p>
        <p className='dateTitle'>{format(new Date(bikeInfo.serviceRequest.date), 'MM/dd/yyyy')}</p>
        <button className='buttonTitle'>Open Ticket</button>
    </div>
  );
};

export default Item;
