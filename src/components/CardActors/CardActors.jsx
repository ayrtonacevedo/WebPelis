import React from "react";
import s from "./CardActors.css";
import PerfilImg from "../assets/perfil.webp";
import { Link } from "react-router-dom";

const CardActors = ({ characterName, actorName, profilePath, id }) => {
  const imageURL = profilePath
    ? `https://image.tmdb.org/t/p/w300${profilePath}`
    : PerfilImg;

  return (
    <div className="card-container">
      <Link to={`/actorDetail/${id}`} key={id} className="no-link-style">
        <img src={imageURL} alt={characterName} className="image" />
        <div className="actor-details">
          <h3 className="character-name"> {actorName}</h3>
          <p className="actor-name">{characterName} </p>
        </div>
      </Link>
    </div>
  );
};

export default CardActors;
