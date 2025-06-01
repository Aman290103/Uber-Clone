import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import UserLogin from './pages/userLogin';
import UserSignup from './pages/userSignup';
import CaptainLogin from './pages/captainLogin';
import CaptainSignup from './pages/captainSignup';

const App = () => {
  return (
    <div>
     <Routes> 
        <Route path='/' element={<Home/>} />
        <Route path='/Login' element={<UserLogin/>}/>
        <Route path='/Signup' element={<UserSignup/>}/>
        <Route path='/captain-Signup' element={<CaptainSignup/>}/>
        <Route path='/captain-Login' element={<CaptainLogin/>}/>
     </Routes>
    </div>
  )
}

export default App