import React, { useState, useEffect } from 'react';
import store from './features/store';
import { API, graphqlOperation } from 'aws-amplify';
import { createBike, deleteBike } from './graphql/mutations';
import { listBikes } from './graphql/queries'

import { updateBike } from './features/ServiceTicket/serviceTicketSlice';
import './NewBike.css'

// async function addBike() {
//     const newBikeObject = {
//         id: Math.floor(Math.random()*10000000),
//         color: document.getElementById("bikeColor").value,
//         make: document.getElementById("bikeMake").value,
//         model: document.getElementById("bikeModel").value
//         }  
//     try {
//         await API.graphql(graphqlOperation(createBike, {input: newBikeObject}))
//     } catch (error) {
//         console.log('error adding bike to database', error)
//     }   
//     // console.log(newBikeObject)
//     }


function BikeNavigator() {
    // const [bikes, setBikes] = useState([])

    // console.log("this is the state" + bikes)

    // const fetchBikes = async () => {
    //     try {
    //         const bikeData = await API.graphql(graphqlOperation(listBikes))
    //         const bikeList = bikeData.data.listBikes.items
    //         setBikes(bikeList)
    //     } catch (error) {
    //         console.log(error)
    //     }   
    // }

    // useEffect(() => {
    //     fetchBikes()
    // }, [bikes])

    // const removeBike = async (idx) => {
    //     try {
    //         const bikeToRemove = bikes[idx];
    //         await API.graphql(graphqlOperation(deleteBike, {input: {id: bikeToRemove.id}}))
    //         console.log(`${bikeToRemove.color} ${bikeToRemove.make} deleted from server`)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    const initialValues = {id: null, color: '', make: '', model: ''}
    const [bikeInfo, setBikeInfo] = useState([initialValues])

    const newBike = () => {
        const newBikeObject = {
                id: Math.floor(Math.random()*10000000),
                color: document.getElementById("bikeColor").value,
                make: document.getElementById("bikeMake").value,
                model: document.getElementById("bikeModel").value
                }  
            // console.log(newBikeObject)
            // setBikeInfo{newBikeObject}
            store.dispatch(updateBike(newBikeObject))
        }

    return (
        <div>
            {/* <div className='bikeList'>
                { bikes.map((bike, idx) => {
                    return (
                        <div className='bikeItem' key={`song${idx}`}>
                            <p>{bike.color}, {bike.make} {bike.model}</p> 
                            <button onClick={() => removeBike(idx)}>Delete</button>
                        </div>
                    )
                })}
            </div> */}
            <div>
                
                    <label htmlFor="bikeColor">Bike Color:</label>
                    <input type="text" id="bikeColor" name="bikeColor"></input>
                    <label htmlFor="bikeMake">Bike Make:</label>
                    <input type="text" id="bikeMake" name="bikeMake"></input>
                    <label htmlFor="bikeModel">Bike Model:</label>
                    <input type="text" id="bikeModel" name="bikeModel"></input>
                    <button onClick={newBike}>Add Bike to Database</button>
                
            </div>
        </div>
    )
}

export default BikeNavigator