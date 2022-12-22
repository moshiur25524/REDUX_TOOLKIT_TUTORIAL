import { createSlice } from "@reduxjs/toolkit";

export const CounterSlice = createSlice({
    name: 'Counter',
    initialState: {count: 0},
    reducers: {
        increment: state => {
            state.count = state.count + 1
        },
        decrement: state => {
            state.count = state.count - 1
        },
        reset: state => {
            state.count = 0
        },
        increaseByAmount: (state, action) => {
            state.count = state.count + action.payload
        }
    }
})

export const {increment, decrement, reset, increaseByAmount} = CounterSlice.actions;
export default CounterSlice.reducer;

// Steps for Redux-ToolKit

/*
1. Create slice file named counterSlice.js 
2. insert createSlice from redux-toollkit and into the createSlice it has three property= name, initailState, reducers
    -name: will be the name of slice which is Counter
    - initialState: {counter : 0}
    - reducers: to this all kind of reducers will be appear and every property will give us a function
    - now export the counterSlice
    - export default counterSlice.reducer
    - export const {increment, decrement, reset} = counterSlice.actions

3. Create a store.js file and into this, 
*/ 