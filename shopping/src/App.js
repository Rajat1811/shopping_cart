import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Headers from './components/Headers'
import {Routes, Route} from 'react-router-dom'
import CardsDetails from './components/CardsDetails';
import Cards from './components/Cards';
import LoginReg from './components/LoginReg';

const App = () => {
  return (
    <>
     <Headers/>
     <Routes>
        <Route index element={ <Cards/>}/>
        <Route path='/cart/:id' element={ <CardsDetails/>}/>
        <Route path="login" element= {<LoginReg/>}/>
     </Routes>
    </>
  )
}

export default App