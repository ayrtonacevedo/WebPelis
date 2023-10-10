import React from "react";
import './Card.css'
 const Card=({title, image, description})=>{
return(
<figure className="card">
    <img src={image} alt="imagen" className="card_image"/>
    <figcaption className="card_body">
        <h2 className="card_title">{title}</h2>
        {/* <p className="card_description"></p> */}
    </figcaption>
</figure>    
)

 }
 export default Card;