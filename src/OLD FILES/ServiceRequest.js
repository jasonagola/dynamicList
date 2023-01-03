import React, {useState} from 'react';
import { updateServiceRequest } from '../features/ServiceTicket/serviceTicketSlice';
import store from '../features/store';

function ServiceRequest() {
    const initialValues = {
        request:"", 
        date: (new Date()).toISOString,
        partsRequired: false,
        partsRequest: "",
        status: ""

    }

    const [requestValues, setRequestValues] = useState(initialValues)

    const newRequest = () => {
        const dateOfSubmit = new Date()
        const dateOfSubmitString = dateOfSubmit.toISOString()
        console.log(dateOfSubmit)
        const newRequestObject = {
            request: document.getElementById('request').value,
            date: dateOfSubmitString,
            partsRequired: document.getElementById('partsRequired').checked,
            partsRequest: document.getElementById('partsRequest').value,
            status: ''
        }
    console.log(newRequestObject)
    store.dispatch(updateServiceRequest(newRequestObject))
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setRequestValues({...requestValues, [name]: value})
    }

    return (
        <div id='serviceRequest'>
            <label htmlFor='request'>Customer Requests</label>
            <input type='text' id='request' name='request' value={requestValues.request} onChange={handleChange}></input>
            <label htmlFor='partsRequired'>Parts Required?</label>
            <input type='checkbox' id='partsRequired' name='partsRequired'></input>
            <label htmlFor='partsRequest'>Parts Request Details</label>
            <input type="text" id="partsRequest" name="partsRequest"></input>
            {/* <input list="status">
                <datalist id="status">
                    <option value="Need to Order Parts"
                    <option value="Parts Waiting">
                    <option value="Customer Input Needed">
                    <option value="Complete">
                </datalist> 
            </input> */}
            <button id='newRequestButton' onClick={newRequest}>New Request</button>
        </div>
    )
}

export default ServiceRequest