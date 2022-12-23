import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './Pages/Home/Home';
import Header from './Shared/Header';
import CounterView from './Features/Counter/CounterView'
import PostView from './Features/Posts/PostView'
import BooksView from './Features/Books/BooksView'
import AddBooks from './Features/Books/AddBooks'
import NotFound from './Pages/NotFound/NotFound'
import EditBooks from './Features/Books/EditBooks';

function App() {
  return (
    <div className="App">
      <h1 className='bg-secondary text-white'>Welcome to Redux Toolkit</h1>
      <Header />
     <main>
     <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/counter' element={<CounterView />} />
        <Route path='/posts' element={<PostView />} />
        <Route path='/books' element={<BooksView />} />
        <Route path='/edit-book' element={<EditBooks />} />
        <Route path='/addBooks' element={<AddBooks />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
     </main>


    </div>
  );
}

export default App;
