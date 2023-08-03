import React from 'react'
import "./Footer.css"
import { FaGithub } from 'react-icons/fa';
import { FiLinkedin } from 'react-icons/fi';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
   <div className="footer">
    <div className="footer-container">
      <div className="left">
        <Link to='/home'>
    <h2 className='logo'>Movie <span>Prime</span></h2>
        </Link>
      </div>
      <div className="right">
        <ul>Navegation
        <li><a href='/home'>Home</a></li>
          <li><a href='#'>Search</a></li>
          <li><a href='#'>Home3</a></li>
          <li><a href='/contact'>Contact Us</a></li>
          <li><a href='/about'>About</a></li>
          </ul>
          <ul>Usuario
          <li><a href='/login' >Iniciar Sesion</a></li>
          <li><a href='/signUp'>Registrarse</a></li>
          </ul>

      </div>
      <div className="center">
        <h4>About</h4>
        <p>
        Welcome to our movie website! We are passionate about bringing you the best movie recommendations, trailers, and reviews. Our goal is to provide you with a seamless and enjoyable movie-watching experience. Whether you're a movie enthusiast or just looking for something new to watch, we've got you covered. Sit back, relax, and explore the wonderful world of cinema with us!
        </p>
      </div>
    </div>
    <div className="footer-bottom">
      <p>
      Designed and Developed by <a href='https://acevedevelop.vercel.app/'>Ayrton Acevedo</a> | © 2023 | Version 1.0
      </p>
      </div>
   </div>
);
};
    

    

  

export default Footer
