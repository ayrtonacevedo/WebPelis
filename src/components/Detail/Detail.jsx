import React,{useEffect, useState} from "react";
import s from './Detail.css'
import Card from "../Card/Card";
import { useParams } from 'react-router-dom';
import CardDetail from '../CardDetail/cardDetail'
import axios from "axios";
import CardActors from "../CardActors/CardActors";
import Footer from "../Footer/Footer";



const Detail = () => {

  // Código de tu componente

const [detail, setDetail]=useState()
const [actors, setActors]=useState([])
const [director, setDirector] = useState('');
const [writer, setWriter] = useState('');
const API_KEY = '30ea27f9fbbeb2bc86bc0344f2aec446';
const URL_IMAGE='https://image.tmdb.org/t/p/original'
const {id}=useParams()


const getMovieDetails = async () => {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`);
    const data = await response.json(); 
    setDetail(data)
    console.log(data);

     // Aquí puedes acceder a los detalles de la película en el objeto 'data'
console.log(id)

  } catch (error) {
    console.log(error);
  }
};

const getMovieActors = async()=>{
  try{
    const response= await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`)
    const cast=response.data.cast;
    setActors(cast)
    console.log(cast)
    console.log(response.data)

  
  }catch(error){
    console.log(error)
  }
 
}

useEffect(()=>{
    getMovieDetails();
    getMovieActors();
  },[id])


    return (
      // Contenido JSX del componente
    
        <div className="container-detail">
        <div className="movie-detail">
        {detail
        ? 
        <CardDetail key={detail.id} backdrop_path={detail.backdrop_path}
        poster_path={detail.poster_path}
        title={detail.title}
        lanzamiento={detail.release_date.slice(0,4)}
        genres={detail.genres.map((g)=>g.name).join(', ')}
        runtime={detail.runtime}
        vote_average={detail.vote_average}
        overview={detail.overview}
        fecha_lanzamiento={detail.release_date}
        director={director}
        writing={writer}
        />
        :null
        }
        </div>
        <div className="movie-actors">
          <h2>Reparto Principal</h2>
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
  