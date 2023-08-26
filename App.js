import React from 'react'
import './App.css'
import Home from './Home';
import Movies from './Movies'
import { Route, Routes } from 'react-router-dom';
import Signin from './Signin';
export default function App() {
  return (
    <>
       <Routes>
        <Route path='/' Component={Home}/>
       <Route path='/movies' Component={Movies}/>
       <Route path='/signin' Component={Signin}/>
      </Routes>
      
    </>
  );
}
