import React, { useState, useEffect } from "react";
import "./cardDetail.css";
import { Link } from "react-router-dom";
import { AiTwotoneStar } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";
import YouTube from "react-youtube";
import { useParams } from "react-router-dom";
import axios from "axios";

const MovieCard = ({
  backdrop_path,
  poster_path,
  title,
  lanzamiento,
  genres,
  runtime,
  vote_average,
  overview,
  director,
  writing,
  fecha_lanzamiento,
}) => {
  const URL_IMAGE = "https://image.tmdb.org/t/p/original";
  const imageURL = `https://image.tmdb.org/t/p/original${backdrop_path}`;
  // Variables de estado para el trailer
  const API_KEY = "30ea27f9fbbeb2bc86bc0344f2aec446";
  const API_URL = "https://api.themoviedb.org/3";
  const [trailer, setTrailer] = useState(null);
  const [playing, setPlaying] = useState(false);
  const { id } = useParams();

  const trailerMovie = async () => {
    const { data } = await axios.get(`${API_URL}/movie/${id}`, {
      params: {
        api_key: API_KEY,
        append_to_response: "videos",
      },
    });
    if (data.videos && data.videos.results) {
      const trailer = data.videos.results.find(
        (vid) => vid.name === "Official Trailer"
      );
      setTrailer(trailer ? trailer : data.videos.results[0]);
    }
    console.log(trailer);
  };
  useEffect(() => {
    trailerMovie();
  }, [id]);

  return (
    <div className="card">
      <div
        className="card-background"
        style={{ backgroundImage: `url(${imageURL})` }}
      >
        <div className="card-details">
          <Link to="/home">
            <button className="close-button">x</button>
          </Link>
          <div className="card-poster">
            <img src={`${URL_IMAGE + poster_path}`} alt={title} />
          </div>
          <div className="card-content">
            <h2 className="card-title">
              {title} ({lanzamiento})
            </h2>
            <p className="card-release-date">
              <strong>Release date:</strong> {fecha_lanzamiento}
            </p>
            <p className="card-genre">
              <strong>Gender:</strong> {genres}
            </p>
            <p className="card-runtime">
              <strong>Duration:</strong> {runtime} minutos
            </p>
            <p className="card-rating">
              {/* <strong>Calificación:</strong>  */}
              <AiTwotoneStar size={20} style={{ color: "yellow" }} />
              <span className="vote-average"> {vote_average.toFixed(2)}</span>
              {trailer ? (
                <button
                  className="btn-trailer"
                  onClick={() => setPlaying(true)}
                >
                  <FaPlay size={15} />
                  Play trailer
                </button>
              ) : null}
            </p>
            <p className="card-overview">{overview}</p>
            {/* <p className="card-crew">
            <strong>Director:</strong>
          </p>
          <p className="card-crew">
            <strong>Escritor:</strong> 
          </p> */}
          </div>
        </div>
      </div>
      {playing && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={() => setPlaying(false)}>
              X
            </button>
            {trailer && (
              <YouTube
                videoId={trailer.key}
                className="youtube"
                opts={{
                  width: "100%",
                  height: "100%",
                  playerVars: {
                    autoplay: 1,
                    controls: 0,
                    cc_load_policy: 0,
                    fs: 0,
                    iv_load_policy: 0,
                    modestbranding: 0,
                    rel: 0,
                    showinfo: 0,
                  },
                }}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
