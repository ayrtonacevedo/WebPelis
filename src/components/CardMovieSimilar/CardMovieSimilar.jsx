import React from "react";
import "./CardMovieSimilar.css";
import { Link } from "react-router-dom";
import img from "../assets/logo11.png";

const CardMovieSimilar = ({ title, backdrop_path, id }) => {
  const URL_IMAGE = "https://image.tmdb.org/t/p/original";

  function truncateText(text, maxLength) {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    } else {
      return text;
    }
  }

  return (
    <figure className="card-movie-similar">
      <Link to={`/detail/${id}`} key={id} className="no-link-style">
        {backdrop_path ? (
          <img src={`${URL_IMAGE}${backdrop_path}`} alt={title} />
        ) : (
          <img src={img} alt={title} />
        )}
        <h3>{truncateText(title, 20)}</h3>
      </Link>
    </figure>
  );
};

export default CardMovieSimilar;
