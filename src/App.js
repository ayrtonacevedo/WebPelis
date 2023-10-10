import React from "react";
import { Route, Routes } from "react-router-dom";

import Inicio from "./routes/Inicio";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import Detail from "./routes/Detail";
import Login from "./routes/Login";
import { AuthProvider } from "./context/authContext";
import SignUp from "./routes/SignUp";
import About from "./routes/About";
import Search from "./routes/Search";
import Profile from "./routes/Profile";
import NavBar from "./components/Navbar/NavBar";
import Footer from "./components/Footer/Footer";
import DetailActor from "./routes/DetailActors";

function App() {
  return (
    <>
      <AuthProvider>
        {/* <NavBar /> */}
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/about" element={<About />} />
          <Route path="/search" element={<Search />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/actorDetail/:id" element={<DetailActor />} />
        </Routes>
        {/* <Footer /> */}
      </AuthProvider>
    </>
  );
}

export default App;
