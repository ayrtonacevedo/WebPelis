import React from 'react';
import './cardDetail.css'
import { Link } from 'react-router-dom';
import { AiTwotoneStar } from "react-icons/ai";

const MovieCard = ({ backdrop_path, poster_path, title, lanzamiento, genres, runtime, vote_average, overview, director, writing, fecha_lanzamiento }) => {
  
  
  const URL_IMAGE='https://image.tmdb.org/t/p/original'
  const imageURL = `https://image.tmdb.org/t/p/original${backdrop_path}`;


  return (
    <div className="card" >
    <div className="card-background" style={{backgroundImage:`url(${imageURL})`}}>
    <div className="card-details">
    <Link to='/home'>
      <button className='close-button'>x</button>
      </Link>
        <div className="card-poster">
          <img
            src={`${URL_IMAGE + poster_path}`}
            alt={title}
          />
        </div>
        <div className="card-content">
          <h2 className="card-title">{title} ({lanzamiento})</h2>
          <p className="card-release-date">
            <strong>Fecha de lanzamiento:</strong> {fecha_lanzamiento}
          </p>
          <p className="card-genre">
            <strong>Género:</strong> {genres}
          </p>
          <p className="card-runtime">
            <strong>Duración:</strong> {runtime} minutos
          </p>
          <p className="card-rating">
            {/* <strong>Calificación:</strong>  */}
            <AiTwotoneStar size={20} style={{color:"yellow"}}/>
            <span className="vote-average"> {vote_average.toFixed(2)}</span>
           
          </p>
          <p className="card-overview">{overview}</p>
          <p className="card-crew">
            <strong>Director:</strong>
          </p>
          <p className="card-crew">
            <strong>Escritor:</strong> 
          </p>
        </div>
      

    </div>
    </div>



    </div>
  );
};

export default MovieCard;

