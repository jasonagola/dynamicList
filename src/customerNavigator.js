import React from 'react';
import { updateCustomer } from './features/ServiceTicket/serviceTicketSlice'
import store from './features/store';

const newCustomer = () => {
    const newCustomerObject = {
        customerId: "Trial",
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        phoneNumber: document.getElementById('phoneNumber').value
    }   
console.log(newCustomerObject)
store.dispatch(updateCustomer(newCustomerObject))
}




function CustomerNavigator() {
    

    return (
        <div>
            <div>
                {/* <div className="customerLabels">
                    <label className="customer" placeholder="First Name" htmlFor="firstName">First Name:</label>
                    <label className="customer" htmlFor="lastName">Last Name:</label>
                    <label className="customer" htmlFor="phoneNumber">Phone Number:</label>
                </div> */}
                <div className="customerInputs">
                    <input type="text" id="firstName" name="firstName"  placeholder="First Name"></input>
                    <input type="text" id="lastName" name="lastName" placeholder="Last Name"></input>
                    <input type="text" id="phoneNumber" name="phoneNumber" placeholder="Phone Number"></input>
                </div>
                <button onClick={newCustomer}>Save Customer?????</button>
            
            </div>
        </div>
    )
}

export default CustomerNavigator