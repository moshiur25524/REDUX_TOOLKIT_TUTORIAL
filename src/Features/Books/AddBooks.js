import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBooks } from './BookSlice';

const AddBooks = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const numberOfBooks = useSelector(state => state.books.books.length)
    const handleAddBook = e => {
        e.preventDefault()
        const book = {
            id: numberOfBooks + 1,
            name: e.target.name.value,
            author: e.target.author.value
        }
        dispatch(addBooks(book))
        navigate('/books', { repalce: true })
      
        console.log(book);
    }
    return (
        <div>
            
            <h1>Add Book</h1>
            <form onSubmit={handleAddBook}>
                <input type="text" name="name" id="" placeholder='Book Name' required /> <br /><br />
                <input type="text" name="author" id="" placeholder='Author Name' required /> <br /><br />
                <input type="submit" value="Add Book" />
            </form>
        </div>
    );
};

export default AddBooks;