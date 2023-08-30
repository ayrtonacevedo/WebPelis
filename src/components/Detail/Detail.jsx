import React,{useEffect, useState} from "react";
import s from './Detail.css'
import { useParams } from 'react-router-dom';
import CardDetail from '../CardDetail/cardDetail'
import axios from "axios";
import CardActors from "../CardActors/CardActors";
import Footer from "../Footer/Footer";
import Spinner from "../Spiner/Spinner";



const Detail = () => {

const [detail, setDetail]=useState()
const [actors, setActors]=useState([])
const API_KEY = '30ea27f9fbbeb2bc86bc0344f2aec446';
const API_URL='https://api.themoviedb.org/3'
const {id}=useParams()


// Funcion para obtener todo el detalle de la pelicula
const getMovieDetails = async () => {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`);
    const data = await response.json(); 
    setDetail(data)
   

// Aquí puedes acceder a los detalles de la película en el objeto 'data'
// console.log(id)
// console.log(data);

  } catch (error) {
    console.log(error);
  }
};
// Funcion para obtener la lista de actores de la pelicula
const getMovieActors = async()=>{
  try{
    const response= await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`)
    const cast=response.data.cast;
    setActors(cast)
    // console.log(cast)
    // console.log(response.data)

  
  }catch(error){
    console.log(error)
  }
 
}



  // Función para ajustar la posición de desplazamiento al principio de la página
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

useEffect(()=>{
    getMovieDetails();
    getMovieActors();
    scrollToTop();
  },[id])


    return (

        <div className="container-detail">
        <div className="movie-detail">
        {detail 
        ? (
          <>
        <CardDetail key={detail.id} backdrop_path={detail.backdrop_path}
        poster_path={detail.poster_path}
        title={detail.title}
        lanzamiento={detail.release_date.slice(0,4)}
        genres={detail.genres.map((g)=>g.name).join(', ')}
        runtime={detail.runtime}
        vote_average={detail.vote_average}
        overview={detail.overview}
        fecha_lanzamiento={detail.release_date}
        />
          </>
        )
        :<Spinner></Spinner>
        }
        </div>
        <div className="movie-actors">
          <h2>Main Cast</h2>
          <div className="actors-list">
            {actors.map(actor=>(
              <CardActors
              key={actor.id}
              characterName={actor.character}
              actorName={actor.name}
              profilePath={actor.profile_path}/>
            ))}
            </div>
        </div>
        <Footer/>
      </div>
    );
  };
  export default Detail;
  