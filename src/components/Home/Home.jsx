import React, { useEffect, useState } from 'react'
import '../Home/Home.css'
import axios from 'axios'
import Card from '../Card/Card'
import { FaSearch } from 'react-icons/fa';
import { WiDirectionUp } from 'react-icons/wi';
import { Link } from 'react-router-dom';
import Spinner from '../Spiner/Spinner';


const Home = () => {

  const API_KEY='30ea27f9fbbeb2bc86bc0344f2aec446'
  const API_URL='https://api.themoviedb.org/3'

  const[movies,setMovies]=useState([])

  const [trailer, setTrailer]=useState(null)
  const [movie, setMovie]=useState([])
  const [playing, setPlaying]=useState(false)

  const [currentPage, setCurrentPage]=useState(1)
  const [totalPage, setTotalPage]=useState(0)

  
  
  
  const URL_IMAGE='https://image.tmdb.org/t/p/original'


 

  const fetchMovies = async () => {
    try {
      const response = await axios.get(
        `${API_URL}/movie/popular?api_key=${API_KEY}&page=${currentPage}`
      );
      const results = response.data.results;
  
      if (currentPage === 1) {
        setMovies(results);
      } else {
        setMovies((prevMovies) => [...prevMovies, ...results]);
      }
  
      setTotalPage(response.data.total_pages);
    } catch (error) {
      console.log(error);
    }
  };
  

  


    

  const loadMoreMovies = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };
  
   

  
  
  
  


  useEffect(()=>{
    fetchMovies()
  },[currentPage])
  


  return (
    <div className='container'>
      {movies && movies[0] 
        ?<div className='cards'>
        {movies.map((movie)=>
          <Link to={`/detail/${movie.id}`}> 
            <Card key={movie.id} title={movie.title} image={`${URL_IMAGE + movie.poster_path}`} description={movie.overview} /></Link>
        )}
              {currentPage < totalPage &&(
                <button onClick={loadMoreMovies} className='maspelis'>Load more movies</button>
              )}
        </div> 
        :<Spinner/>}
        <div className='form-container'>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="scroll-to-top-button"><WiDirectionUp/></button>
        </div>
    </div>
  )
}

export default Home
