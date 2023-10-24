import React, { useEffect, useState, useRef } from "react";
import s from "./Detail.css";
import { useParams } from "react-router-dom";
import CardDetail from "../CardDetail/cardDetail";
import axios from "axios";
import CardActors from "../CardActors/CardActors";
import Footer from "../Footer/Footer";
import Spinner from "../Spiner/Spinner";
import CardMovieSimilar from "../CardMovieSimilar/CardMovieSimilar";
import { Link } from "react-router-dom";

const Detail = () => {
  const [detail, setDetail] = useState();
  const [actors, setActors] = useState([]);
  const API_KEY = "30ea27f9fbbeb2bc86bc0344f2aec446";
  const API_URL = "https://api.themoviedb.org/3";
  const { id } = useParams();
  const [similarMovies, setSimilarMovies] = useState([]);
  const sidebarRef = useRef(null);
  const sidebarRef1 = useRef(null);

  // Funcion para obtener todo el detalle de la pelicula
  const getMovieDetails = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
      );
      const data = await response.json();
      setDetail(data);

      // Aquí puedes acceder a los detalles de la película en el objeto 'data'
      // console.log(id)
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  // Funcion para obtener la lista de actores de la pelicula
  const getMovieActors = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`
      );
      const cast = response.data.cast;
      setActors(cast);
      // console.log(cast)
      // console.log(response.data)
    } catch (error) {
      console.log(error);
    }
  };
  // Funcion para obtener las peliculas similares
  const getSimilarMovies = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}`
      );
      const similarMovies = response.data.results;
      // Puedes hacer algo con la lista de películas similares, como almacenarlas en un estado.
      setSimilarMovies(similarMovies);
      console.log("Movies Similar", similarMovies);
    } catch (error) {
      console.log(error);
    }
  };

  // Función para ajustar la posición de desplazamiento al principio de la página
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  const scroll = () => {
    const sidebarElement = sidebarRef.current;
    if (sidebarElement) {
      sidebarElement.scrollLeft = 0; // Establece la posición inicial en el inicio
    }
  };
  const scroll1 = () => {
    const sidebarElement = sidebarRef1.current;
    if (sidebarElement) {
      sidebarElement.scrollLeft = 0;
    }
  };

  useEffect(() => {
    getMovieDetails();
    getMovieActors();
    getSimilarMovies();
    scrollToTop();

    scroll();
    scroll1();
  }, [id]);

  return (
    <div className="container-detail">
      <div className="movie-detail">
        {detail ? (
          <>
            <CardDetail
              // key={detail.id}
              backdrop_path={detail.backdrop_path}
              poster_path={detail.poster_path}
              title={detail.title}
              lanzamiento={detail.release_date.slice(0, 4)}
              genres={detail.genres.map((g) => g.name).join(", ")}
              runtime={detail.runtime}
              vote_average={detail.vote_average}
              overview={detail.overview}
              fecha_lanzamiento={detail.release_date}
            />
          </>
        ) : (
          <Spinner></Spinner>
        )}
      </div>
      <div className="movie-actors">
        <h2>Main Cast</h2>
        <div className="actors-list" id="scrollContainer" ref={sidebarRef}>
          {actors.map((actor) => (
            <CardActors
              // key={actor.id}
              characterName={actor.character}
              actorName={actor.name}
              profilePath={actor.profile_path}
              id={actor.id}
            />
          ))}
        </div>
      </div>
      {similarMovies[0] ? (
        <div className="movies-similares">
          <h2>Recommendations</h2>
          <div className="actors-list" id="scrollContainer1" ref={sidebarRef1}>
            {similarMovies.map((m) => (
              <CardMovieSimilar
                // key={m.id}
                title={m.title}
                backdrop_path={m.backdrop_path}
                id={m.id}
              />
            ))}
          </div>
        </div>
      ) : null}

      <Footer />
    </div>
  );
};
export default Detail;
