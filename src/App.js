import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home'
import Login from './components/Login'
import Protected from './components/Protected'
import Register from './components/Register'
import Cart from './components/Cart'
import './style/App.css'

const App = () => {
  localStorage.setItem("status", true);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Protected Content={Home}/>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/cart" element={<Protected Content={Cart}/>}></Route>
      </Routes>
    </Router>
  )
}

export default App