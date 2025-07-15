import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/header'
import Map from './pages/map'
import List from './pages/list'
import { useDispatch } from 'react-redux'
import { getFlights } from './redux/actions'
import Modal from './components/modal'

const App = () => {
 
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFlights());
  }, []);

  return (
  <BrowserRouter >
   <Header />

   <Routes>
    <Route path='/' element={ <Map /> } />
    <Route path='/list' element={ <List /> } />
   </Routes>
    <Modal />
  </BrowserRouter>
  );
};

export default App;