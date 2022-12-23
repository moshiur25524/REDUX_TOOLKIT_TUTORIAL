import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBook } from './BookSlice';

const ShowBooks = () => {
    const dispatch = useDispatch()
    const books = useSelector(state => state.books.books)

    const handleDelete = id => {
        dispatch(deleteBook(id))
    }
    return (
        <div>
            <h1>Show Books</h1>
            <table className=''>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Author</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books.map(book => <tr key={book.id}>
                            <td>{book.id}</td>
                            <td>{book.name}</td>
                            <td>{book.author}</td>
                            <td>
                                <button>Edit</button>
                                <button onClick={() => handleDelete(book.id)}>Delete</button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ShowBooks;