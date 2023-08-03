import React from 'react'
import './Slider.css'
import img from '../assets/logo11.png'




const Slider = () => {
  return (
    <div className="main"><img src={img}></img>
      {/* <div className="bg"></div> */}
      <div className="ingresar">
        <h1><a href='/home'>GO!</a></h1>
      </div>
    </div>
  )
}

export default Slider
