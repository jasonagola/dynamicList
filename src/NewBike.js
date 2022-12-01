import React, { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';

const submitNewBike = () => {
    const newBikeObject = {
        color: document.getElementById("bikeColor").value,
        make: document.getElementById("bikeMake").value,
        model: document.getElementById("bikeModel").value
    }
    // setNewBike(newBikeObject)
    console.log(newBikeObject)
    }


function NewBikeSubmit() {
    const [bikes, setBikes] = useState([])

    const fetchBikes = async () => {
        try {
            const bikeData = await API.graphql(graphqlOperation(getBikes))
            console.log(bikeData)            
        } catch (error) {
            console.log(error)
        }   
    }

    useEffect(() => {
        getBikes()
    }, [])

    return (
        <div>
            
                <label htmlFor="bikeColor">Bike Color:</label>
                <input type="text" id="bikeColor" name="bikeColor"></input>
                <label htmlFor="bikeMake">Bike Make:</label>
                <input type="text" id="bikeMake" name="bikeMake"></input>
                <label htmlFor="bikeModel">Bike Model:</label>
                <input type="text" id="bikeModel" name="bikeModel"></input>
                <button onClick={submitNewBike}>Add Bike to Database</button>
            
        </div>
    )
}

export default NewBikeSubmit