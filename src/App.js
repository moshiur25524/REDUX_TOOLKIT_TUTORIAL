import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './Pages/Home/Home';
import Header from './Shared/Header';
import CounterView from './Features/Counter/CounterView'
import PostView from './Features/Posts/PostView'
import BooksView from './Features/Books/BooksView'
import NotFound from './Pages/NotFound/NotFound'

function App() {
  return (
    <div className="App">
      <h1 className='bg-secondary text-white'>Welcome to Redux Toolkit</h1>
      <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/counter' element={<CounterView/>}/>
      <Route path='/posts' element={<PostView/>}/>
      <Route path='/books' element={<BooksView/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
   

    </div>
  );
}

export default App;
