import React from 'react';

const AddBooks = () => {
    const handleAddBook = e =>{
        e.preventDefault()
        const book = {
            name: e.target.name.value,
            author: e.target.author.value
        }
        console.log(book);
    }
    return (
        <div>
            <h1>Add Book</h1>
            <form onSubmit={handleAddBook}>
                <input type="text" name="name" id="" placeholder='Book Name' required /> <br /><br />
                <input type="text" name="author" id="" placeholder='Author Name' required /> <br /><br />
                <input type="submit" value="Add Book" /> <br /><br />
            </form>
        </div>
    );
};

export default AddBooks;