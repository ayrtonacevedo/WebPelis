import React from "react";
import { Link } from "react-router-dom";
import "./Inicio.css";

const Inicio = () => {
  return (
    <div className="main">
      <div className="navbar">
        <h2>
          Movie<span>Prime</span>
        </h2>
        <a href="/login">
          <button type="button" className="btn-login">
            Login
          </button>
        </a>
      </div>
      <div className="centro">
        <h1>Unlimited movies, TV shows, and more ...</h1>
        <h2>Watch anywhere.</h2>
        <a href="/home">Get Started → </a>
      </div>
    </div>
  );
};

export default Inicio;
