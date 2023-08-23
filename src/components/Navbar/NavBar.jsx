import React,{useState} from 'react'
import "./NavBar.css"
import {FaBars, FaTimes} from "react-icons/fa"
import {useAuth} from '../../context/authContext'
import { Link, useNavigate } from 'react-router-dom'


const NavBar = () => {

  const[click, setClick]=useState(false)
  const handleClick=()=>setClick(!click)

  const {user, signout}=useAuth()
  const navigate=useNavigate()

  const handleSignOut= async ()=>{
    await signout()
    navigate('/home')
  }



  return (
    <>
    <div className="hero">
        <Link to='/home'><h2 className='logo'>Movie <span>Prime</span></h2></Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li><a href='/home'>Home</a></li>
          <li><a href='/search'>Search</a></li>
          <li><a href='/profile'>Profile</a></li>
          <li><a href='/contact'>Contact Us</a></li>
          <li><a href='/about'>About</a></li>
        </ul> 
        {user 
        ?<button type='button' className='btn-login' onClick={handleSignOut}>Sign Out</button>
        :<a href='/login'><button type='button' className='btn-login'>Login</button></a>  
        }
        <div className='hamgurger' onClick={handleClick}>
          {click 
                  ?(<FaTimes size={20} style={{color:"white"}}/>)
                  :(<FaBars size={20} style={{color:"white"}}/>)
          }
        </div>
    </div>


    </>
  )
}

export default NavBar
