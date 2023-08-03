import React from 'react'
import NavBar from "../components/Navbar/NavBar"
import Footer from "../components/Footer/Footer"
import SignUpC from '../components/Sign up/signUp'

const SignUp = () => {
  return (
    <div>
      <NavBar></NavBar>
      <SignUpC/>
      <Footer></Footer>
    </div>
  )
}

export default SignUp