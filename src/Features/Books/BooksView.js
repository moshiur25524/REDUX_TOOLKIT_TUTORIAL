import React from 'react';
import { useSelector } from 'react-redux';

const ShowBooks = () => {
    const books = useSelector(state => state.books)
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
                                <button>Delete</button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ShowBooks;