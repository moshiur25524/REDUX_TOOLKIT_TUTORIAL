import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../Features/Books/BookSlice";
import CounterReducer from "../Features/Counter/CounterSlice";
import PostReducer from "../Features/Posts/PostSlice";

const store = configureStore({
    reducer: {
        counter: CounterReducer,
        posts: PostReducer,
        books: bookReducer
    }
})

export default store;