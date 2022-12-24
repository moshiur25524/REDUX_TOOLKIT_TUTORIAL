import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateBook } from './BookSlice';

const EditBooks = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation()

    console.log(location.state);

    const handleUpdateBook = e => {
        e.preventDefault()
        const book = {
            name: e.target.name.value,
            author: e.target.author.value
        }
        dispatch(updateBook(book))
        navigate('/books', { repalce: true })
    }

    return (
        <div>
            <h1>Edit a Book</h1>
            <form onSubmit={handleUpdateBook}>
                <input type="text" name="name" id="" placeholder='Book Name' required /> <br /><br />
                <input type="text" name="author" id="" placeholder='Author Name' required /> <br /><br />
                <input type="submit" value="Update Book" />
            </form>
        </div>
    );
};

export default EditBooks;