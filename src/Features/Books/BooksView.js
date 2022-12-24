import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteBook } from './BookSlice';

const ShowBooks = () => {
    const dispatch = useDispatch()
    const books = useSelector(state => state.books.books)

    const handleDelete = id => {
        const proceed = window.confirm('Sure to Delete ?')
        if (proceed) {
            dispatch(deleteBook(id))
        }
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
                        books.map(book => {
                            const { id, name, author } = book;
                            return (
                                <tr key={id}>
                                    <td>{id}</td>
                                    <td>{name}</td>
                                    <td>{author}</td>
                                    <td>
                                        <Link to='/edit-book' state={{ id, name, author }}>
                                            <button>Edit</button>
                                        </Link>
                                        <button onClick={() => handleDelete(id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ShowBooks;