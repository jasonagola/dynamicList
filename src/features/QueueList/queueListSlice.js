import {createSlice} from '@reduxjs/toolkit'


const options = {
    name: 'queueList',
    initialState: {
    }, 
    reducers: {
        refreshQueue: (state, action) => {
            const newQueue = action.payload
            // console.log(newQueue)
            return {newQueue}
        }

    }
}

export const queueListSlice = createSlice(options)
export const { refreshQueue } = queueListSlice.actions

export default queueListSlice.reducer