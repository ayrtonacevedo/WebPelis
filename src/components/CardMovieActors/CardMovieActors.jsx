import React from "react";
import "./CardMovieActor.css";
import logo from "./../assets/logo11.png";
import { Link } from "react-router-dom";

function CardMovieActors({ title, img, id }) {
  const imageURL = img ? `https://image.tmdb.org/t/p/w300${img}` : logo;
  return (
    <div className="cardMovieActor">
      <Link to={`/Detail/${id}`} key={id} className="no-link-style">
        <img src={imageURL} alt={title} className="image" />
        <div className="actor-details">
          <h3 className="character-name"> {title}</h3>
        </div>
      </Link>
    </div>
  );
}

export default CardMovieActors;
