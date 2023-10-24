import React from "react";
import { Link } from "react-router-dom";
import "./cardActorDetail.css";
import CardMovieSimilar from "../CardMovieSimilar/CardMovieSimilar";
import CardMovieActors from "../CardMovieActors/CardMovieActors";

const cardActorDetail = ({
  key,
  name,
  image,
  sex,
  birthDate,
  birthPlace,
  biografia,
  movieActor,
}) => {
  const profileImg = `https://image.tmdb.org/t/p/w300${image}`;
  const paragraphs = biografia.split("\n");

  return (
    <div className="card-actor-container">
      <div
        className="card-actor-background"
        style={{ background: "transparent" }}
      >
        <div className="card-actor-detail">
          <Link to="/home">
            <button className="close-button">X</button>
          </Link>
          <div className="izquierda">
            <img src={profileImg} alt={name} />
          </div>
          <div className="derecha">
            <h2 className="name">{name}</h2>
            <p className="birthDate">
              <strong>Birthday</strong>
              {birthDate}
            </p>
            <p className="birthPlace">
              <strong>Place of Birth</strong>
              {birthPlace}
            </p>
            <p className="sex">
              <strong>Gender</strong>
              {sex === 1 ? "Feminine" : "Masculine"}
            </p>
            <div className="biography-content">
              <h3 className="h3">Biography</h3>
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="biography">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="knownFor">
          <h3 className="h3">Known For</h3>

          <div className="knownFor-movies">
            {movieActor &&
              movieActor.map((movie, index) => (
                // <CardMovieSimilar
                //   key={index} // Asegúrate de proporcionar una key única para cada elemento en la lista
                //   title={movie.title}
                //   backdrop_path={movie.poster_path}
                //   id={movie.id}
                // />
                <CardMovieActors
                  title={movie.title}
                  img={movie.poster_path}
                  id={movie.id}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default cardActorDetail;
