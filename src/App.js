import React from 'react'
import {
    Routes,
  Route,
} from "react-router-dom";
import Footer from './Components/Footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register';

const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    </Routes>
    <Footer />

    </>
  )
}

export default App