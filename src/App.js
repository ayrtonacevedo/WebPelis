import React from "react";
import { Route, Routes } from 'react-router-dom';
import Inicio from "./routes/Inicio";
import Home from "./routes/Home";

function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Inicio/>} />    
        <Route path="/home" element={<Home/>}/>
      </Routes>



    </>
  );
}

export default App;
