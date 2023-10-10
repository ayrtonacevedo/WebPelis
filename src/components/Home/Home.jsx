import React, { useEffect, useState } from "react";
import "../Home/Home.css";
import axios from "axios";
import Card from "../Card/Card";
import { WiDirectionUp } from "react-icons/wi";
import { Link } from "react-router-dom";
import Spinner from "../Spiner/Spinner";
import Paginacion from "./Paginado";

const Home = () => {
  const API_KEY = "30ea27f9fbbeb2bc86bc0344f2aec446";
  const API_URL = "https://api.themoviedb.org/3";

  const [movies, setMovies] = useState([]);
  // filtro por genero
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");

  const URL_IMAGE = "https://image.tmdb.org/t/p/original";
  // todo paginacion
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const fetchMovies = async () => {
    try {
      const response = await axios.get(
        `${API_URL}/movie/popular?api_key=${API_KEY}&page=${currentPage}&with_genres=${selectedGenre}`
      );
      const results = response.data.results;

      if (currentPage === 1) {
        setMovies(results);
      } else {
        // setMovies((prevMovies) => [...prevMovies, ...results]);
        setMovies(results);
      }

      setTotalPage(response.data.total_pages);
      // verifica si todas las imagenes han cargado
    } catch (error) {
      console.log(error);
    }
    console.log(movies);
  };

  const getGenres = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`
      );
      const results = response.data.genres;
      setGenres(results);
    } catch (error) {
      console.log(error);
    }
  };
  // Define la funcion para cargar mas peliculas y avanzar a la siguiente pagina.
  const loadMoreMovies = () => {
    setCurrentPage((prevPage) => prevPage + 1);
    window.scrollTo({ top: 0, behavior: "smooth" }); // Desplazar hacia arriba suavemente
  };

  //Define la funcion para retroceder a la pagina anterior
  const prevMovies = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
      window.scrollTo({ top: 0, behavior: "smooth" }); // Desplazar hacia arriba suavemente
    }
  };
  // Define la funcion para ir a una pagina especifica
  const goToPage = (pageNumber) => {
    // Verifica que el numero de pagina este dentro de los limitis.
    if (pageNumber >= 1 && pageNumber <= totalPage) {
      setCurrentPage(pageNumber);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  useEffect(() => {
    fetchMovies();
    getGenres();
  }, [currentPage, selectedGenre]);

  return (
    <div>
      <div className="container">
        {movies && movies[0] ? (
          <div className="cards">
            {movies.map((movie) => (
              <Link to={`/detail/${movie.id}`} key={movie.id}>
                <Card
                  // key={movie.id}
                  title={movie.title}
                  image={`${URL_IMAGE + movie.poster_path}`}
                  description={movie.overview}
                />
              </Link>
            ))}
          </div>
        ) : (
          <Spinner />
        )}

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="scroll-to-top-button"
        >
          <WiDirectionUp />
        </button>

        <div className="form-container-home">
          <div className="filter-container">
            <label htmlFor="genreSelect">Seleccione un genero:</label>
            <select
              id="genreSelect"
              onChange={(e) => setSelectedGenre(e.target.value)}
              value={selectedGenre}
            >
              <option value="">Todos los generos</option>
              {genres.map((genre) => (
                <option value={genre.id}>{genre.name}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <Paginacion
        currentPage={currentPage}
        totalPage={totalPage}
        loadMoreMovies={loadMoreMovies}
        prevMovies={prevMovies}
        goToPage={goToPage}
      />
    </div>
  );
};

export default Home;
