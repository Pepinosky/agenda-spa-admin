import React from 'react'
import {Route, Routes } from "react-router-dom";
import NavBar from './components/layout/NavBar';
import NotFound from './components/pages/NotFound'
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import { AuthProvider } from './components/context/AuthContext';
function App() {
  return (
    <AuthProvider>
    <>
    <NavBar />
    <Routes>
       <Route element={<NotFound />} />
       <Route path="/" element={<Home />} />
       <Route path="/login" element={<Login />} />
       <Route path="/register" element={<Register />} /> 
    </Routes>
    </>
    </AuthProvider>
  );
}

export default App;
