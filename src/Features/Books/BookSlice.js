import { createSlice } from "@reduxjs/toolkit";

const initialBooks = {
    books: [
        { id: 1, name: 'Love Bangladesh', author: 'Moshiur Rahman' },
        { id: 2, name: 'Love Borishal', author: 'Sayma Rahman' },
        { id: 3, name: 'Love Dhaka', author: 'Nahid Shikder' },
    ]
}


export const bookSlice = createSlice({
    name: 'books',
    initialState: initialBooks,
    reducers: {
        showBooks: (state) => state,
        addBooks: (state, action) => {
            state.books.push(action.payload)
        },
        deleteBook: (state, action) => {
            const id = action.payload
            state.books = state.books.filter(book => book.id !== id)
        },
    }
})

export const { showBooks, addBooks, deleteBook } = bookSlice.actions;
export default bookSlice.reducer