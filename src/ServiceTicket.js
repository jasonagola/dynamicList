import { API, graphqlOperation } from 'aws-amplify';
import React, {useSelector} from 'react';
import store from './features/store';
import { createServiceTicket } from './graphql/mutations';
import {format} from 'date-fns'
import './ServiceTicket.css'
import { createTicketId, createCustomerId, createBikeId, updateCustomer, updateBike, updateServiceRequest } from './features/ServiceTicket/serviceTicketSlice';

function ServiceTicket() {
    // console.log(store.getState().id)

    async function handleSubmit(e) {
        e.preventDefault()
        const dateOfSubmit = new Date()
        const dateOfSubmitString = dateOfSubmit.toISOString()

        const newCustomerObject = {
            customerId: "Trial",
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            phoneNumber: document.getElementById('phoneNumber').value
        }  

        const newBikeObject = {
            color: document.getElementById("bikeColor").value,
            make: document.getElementById("bikeMake").value,
            model: document.getElementById("bikeModel").value
            }  

            
        const newRequestObject = {
            request: document.getElementById('request').value,
            date: dateOfSubmitString,
            partsRequired: document.getElementById('partsRequired').checked,
            partsRequest: document.getElementById('partsRequest').value,
            status: 'Queue'
        }
        


        store.dispatch(updateCustomer(newCustomerObject))
        store.dispatch(updateBike(newBikeObject))
        store.dispatch(updateServiceRequest(newRequestObject))

        

    
        if (store.getState().serviceTicket.id === 1000000000) {
            const generatedId = format(new Date(), 'MMddyyykkmmssSSS')
            store.dispatch(createTicketId(generatedId))
        } else {
            console.log("Service Ticket already has ID")
        }
        if (store.getState().serviceTicket.customer.id === undefined) {
            const generatedCustomerId = `customer${format(new Date(), 'MMddyyykkmmssSSS')}`
            store.dispatch(createCustomerId(generatedCustomerId))
            console.log("New customer Id created")
        } else {
            console.log("Customer already has ID")
        }
        if (store.getState().serviceTicket.bike.id === undefined) {
            const generatedBikeId = `bike${format(new Date(), 'MMddyyykkmmssSSS')}`
            store.dispatch(createBikeId(generatedBikeId))
        } else {
            console.log("Bike already has ID")
        }

        
        
        
        console.log('Attempting to Submit')
        const serviceTicket = store.getState().serviceTicket

        try {
            await API.graphql(graphqlOperation(createServiceTicket, {input: serviceTicket}))
            console.log('Submission Successful')
        } catch (error) {
            console.log("There is an error")
            console.log(error)
        }
    }


    return (
        <div id='serviceTicket'>
            <h2>New Service Ticket</h2>
            <form onSubmit={handleSubmit}>
                <h4>Customer:</h4>
                <div className="customerInputs">
                    <input type="text" id="firstName" name="firstName"  placeholder="First Name"></input>
                    <input type="text" id="lastName" name="lastName" placeholder="Last Name"></input>
                    <input type="text" id="phoneNumber" name="phoneNumber" placeholder="Phone Number"></input>
                </div>
                    {/* <CustomerNavigator/> */}
                <h4>Bike:</h4>
                <div className="bikeInput">
                    {/* <label htmlFor="bikeColor">Bike Color:</label> */}
                    <input type="text" id="bikeColor" name="bikeColor" placeholder='Bike Color'></input>
                    {/* <label htmlFor="bikeMake">Bike Make:</label> */}
                    <input type="text" id="bikeMake" name="bikeMake" placeholder='Make'></input>
                    {/* <label htmlFor="bikeModel">Bike Model:</label> */}
                    <input type="text" id="bikeModel" name="bikeModel" placeholder='Model'></input>
                </div>
                    {/* <BikeNavigator/> */}
                <h4>Service Requests:</h4>
                    <div className="serviceInput">
                        {/* <label htmlFor='request'>Customer Requests</label> */}
                        <textarea id='request' name='request' placeholder='Customer Requests'></textarea>
                        <label htmlFor='partsRequired'>Parts Required?</label>
                        <input type='checkbox' id='partsRequired' name='partsRequired'></input>
                        {/* <label htmlFor='partsRequest'>Parts Request Details</label> */}
                        <input type="text" id="partsRequest" name="partsRequest" placeholder='Parts Request Details'></input>
                    </div>
                    {/* <ServiceRequest/> */}
                <input type='submit' onSubmit={handleSubmit}></input>
            </form>
            
        </div>
    )
}

export default ServiceTicket