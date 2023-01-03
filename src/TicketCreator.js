import React from 'react';
import SearchWindow from './SearchWindow';
import ServiceTicket from './ServiceTicket';
import './TicketCreator.css'


function TicketCreator() {

    return (
        <div id='ticketCreator'>
            <ServiceTicket></ServiceTicket>
            <SearchWindow/>
        </div>
    )
}

export default TicketCreator