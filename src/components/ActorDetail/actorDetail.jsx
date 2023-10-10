import React, { useEffect, useState } from "react";
import "./actorDetail.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import CardActorDetail from "../CardActorDetail/cardActorDetail.jsx";

function ActorDetail() {
  const API_KEY = "30ea27f9fbbeb2bc86bc0344f2aec446";
  const API_URL = "https://api.themoviedb.org/3";

  const { id } = useParams();

  const [detailActor, setDetailActor] = useState();
  const [moviesActor, setMoviesActor] = useState();

  const getActorDetails = async () => {
    try {
      const actor = await axios.get(
        `${API_URL}/person/${id}?api_key=${API_KEY}`
      );
      const actorData = actor.data;
      setDetailActor(actorData); // Utiliza setDetailActor para asignar el valor
      console.log(actorData);
    } catch (error) {
      console.error("Error al obtener los detalles del actor:", error);
      throw error;
    }
  };

  const actorMovies = async () => {
    try {
      const movies = await axios.get(
        `${API_URL}/person/${id}/movie_credits?api_key=${API_KEY}`
      );
      const data = movies.data;
      setMoviesActor(data.cast);
      const crewTitles = data.cast.map((member) => member.title);

      //console.log(crewTitles);
      //console.log(data.cast);
    } catch (error) {}
  };

  // const prueba = async (query) => {
  //   try {
  //     const prueba = await axios.get(
  //       `${API_URL1}?api_key=${API_KEY}&query=${query}`
  //     );
  //     const pruebaData = prueba.data;
  //     console.log(pruebaData);
  //   } catch (error) {}
  // };

  // const name = detailActor ? detailActor.name : "Tom Cruise";
  useEffect(() => {
    getActorDetails();
    actorMovies();
    // prueba(name);
  }, [id]);

  return (
    <div className="containerActorDetail">
      {detailActor ? (
        <CardActorDetail
          name={detailActor.name}
          image={detailActor.profile_path}
          sex={detailActor.gender}
          birthDate={detailActor.birthday}
          birthPlace={detailActor.place_of_birth}
          biografia={detailActor.biography}
          movieActor={moviesActor}
        />
      ) : (
        <p>espere</p>
      )}
    </div>
  );
}

export default ActorDetail;
