
import './App.css'
import Home from './pages/home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './pages/login';
import { useState } from 'react';
import Register from './pages/register';

function App() {
  const [isLogin,setLogin]=useState(false);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/'  element={<Home/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path='/login' element={<Login loginStatus={isLogin} setLogin={setLogin} />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
