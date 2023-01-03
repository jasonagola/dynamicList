import {configureStore} from '@reduxjs/toolkit';

import serviceTicketReducer from './ServiceTicket/serviceTicketSlice'
import queueListReducer from './QueueList/queueListSlice';

const store = configureStore({
    reducer: {
        serviceTicket: serviceTicketReducer,
        queueList: queueListReducer
    }
})

export default store