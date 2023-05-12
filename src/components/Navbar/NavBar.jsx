import React,{useState} from 'react'
import "./NavBar.css"
import {FaBars, FaTimes} from "react-icons/fa"

const NavBar = () => {

  const[click, setClick]=useState(false)
  const handleClick=()=>setClick(!click)



  return (
    <>
    <div className="hero">
      {/* <nav className='nav'> */}
        <h2 className='logo'>Mighty <span>Heroes</span></h2>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li><a href='/home'>Home</a></li>
          <li><a href='#'>About</a></li>
          <li><a href='#'>Home2</a></li>
          <li><a href='#'>Home3</a></li>
          <li><a href='#'>Contact Us</a></li>
          
        </ul> 
        <button type='button'>Log in</button>
        <div className='hamgurger' onClick={handleClick}>
          {click 
                  ?(<FaTimes size={20} style={{color:"white"}}/>)
                  :(<FaBars size={20} style={{color:"white"}}/>)
          }
        </div>
      {/* </nav> */}
    </div>


    </>
  )
}

export default NavBar
