import React from "react";
import { Route, Routes } from 'react-router-dom';
import Inicio from "./routes/Inicio";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import Detail from './routes/Detail'
import Login from "./routes/Login";
import {AuthProvider} from './context/authContext'
import SignUp from "./routes/SignUp";
import About from "./routes/About";

function App() {
  return (
    <>
    <AuthProvider>
    <Routes>
        <Route path="/" element={<Inicio/>} />    
        <Route path="/home" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/detail/:id" element={<Detail/>}/>  
        <Route path="/login" element={<Login/>}/>  
        <Route path="/signUp" element={<SignUp/>}/>  
        <Route path="/about" element={<About/>}/>  
        
        
      </Routes>
    </AuthProvider>
      



    </>
  );
}

export default App;
