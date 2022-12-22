import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../Features/Counter/CounterSlice";

const store = configureStore({
    reducer: {
        counter: CounterReducer
    }
})

export default store;