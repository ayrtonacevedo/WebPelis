import React from 'react'
import NavBar from "../components/Navbar/NavBar"
import Footer from "../components/Footer/Footer"
import LoginC from '../components/Login/Login'

const Login = () => {
  return (
    <div>
      <NavBar></NavBar>
      <LoginC/>
      <Footer></Footer>
    </div>
  )
}

export default Login