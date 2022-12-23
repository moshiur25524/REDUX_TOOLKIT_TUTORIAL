import { createSlice } from "@reduxjs/toolkit";

const initialBooks = [
    {id:1, name:'Love Bangladesh', author: 'Moshiur Rahman'},
    {id:2, name:'Love Borishal', author: 'Sayma Rahman'},
    {id:3, name:'Love Dhaka', author: 'Nahid Shikder'},
]


export const bookSlice = createSlice({
    name: 'books',
    initialState: initialBooks,
    reducers: {
        showBooks: (state) => state ,
    }
})

export const {showBooks} = bookSlice.actions;
export default bookSlice.reducer