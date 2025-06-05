import React from 'react';
import { Route, Routes } from 'react-router-dom'
import UserLogin from './pages/userLogin';
import UserSignup from './pages/userSignup';
import CaptainLogin from './pages/captainLogin';
import CaptainSignup from './pages/captainSignup';
import Start from './pages/start';
import Home from './pages/Home';


const App = () => {

  return (
    <div>
     <Routes> 
        <Route path='/' element={<Start/>} />
        <Route path='/Login' element={<UserLogin/>}/>
        <Route path='/Signup' element={<UserSignup/>}/>
        <Route path='/captain-Signup' element={<CaptainSignup/>}/>
        <Route path='/captain-Login' element={<CaptainLogin/>}/>
        <Route path='/home' element={<Home/>}/> 
        </Routes>
    </div>
  )
}

export default App