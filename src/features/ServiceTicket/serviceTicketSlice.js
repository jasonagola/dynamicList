import {createSlice} from '@reduxjs/toolkit';

const options = {
    name: 'serviceTicket',
    initialState: {
        id: 1000000000,
        customer: { 
            id: 1000000000,
            firstName: "", 
            lastName: "",
            phoneNumber: ""
        },
        serviceRequest: {
            request: "",
            date: "",
            partsRequired: false,
            partsRequest: "",
            status: ""
        },
        bike: {
            id: 1000000000,
            color: "",
            make: "",
            model: ""
        }
    },
    reducers: {
        updateCustomer: (state, action) => {
            const {firstName, lastName, phoneNumber} = action.payload
            return {...state, customer: {firstName: firstName, lastName:lastName, phoneNumber:phoneNumber}}
        },
        updateServiceRequest: (state, action) => {
            const {request, date, partsRequired, partsRequest, status} = action.payload
            return {...state, serviceRequest: {request:request, date:date, partsRequired:partsRequired, partsRequest:partsRequest, status:status}}
        },
        updateBike: (state, action) => {
            const {id, color, make, model} = action.payload
            return {...state, bike: {id:id, color:color, make:make, model:model}}
        },
        createTicketId: (state, action) => {
            const id = action.payload
            return {...state, id:id}
        },
        createCustomerId: (state, action) => {
            const id = action.payload
            return {...state, customer: {...state.customer, id:id}}
        },
        createBikeId: (state, action) => {
            const id = action.payload
            return {...state, bike:{...state.bike, id:id}}
        }
    }
}

export const serviceTicketSlice = createSlice(options)
export const { updateCustomer, updateServiceRequest, updateBike, createTicketId, createBikeId, createCustomerId} = serviceTicketSlice.actions

export default serviceTicketSlice.reducer

export const getCurrentServiceTicket = (state) => {
    const currentServiceTicket = state.serviceTicketSlice
    return currentServiceTicket
}