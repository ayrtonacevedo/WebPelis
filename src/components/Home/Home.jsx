import React, { useEffect, useState } from 'react'
import '../Home/Home.css'
import axios from 'axios'
import Card from '../Card/Card'
const Home = () => {
  const API_URL='https://api.themoviedb.org/3'
  const API_KEY='30ea27f9fbbeb2bc86bc0344f2aec446'
  const IMAGE_PATH='https://image.tmdb.org/t/p/original'
  const URL_IMAGE='https://image.tmdb.org/t/p/original'


  const[movies,setMovies]=useState([])
  const [searchKey, setSearchKey]=('')



  // const fechMovies= async(searchKey)=>{
  //   const type =searchKey ?'search' : 'discover'
  //   const {data: { resultado },
  // }=await axios.get(`${API_URL}/${type}/movie`,{
  //     params:{
  //       api_key:API_KEY,
  //       query:searchKey,
  //     },
  //   });
  //   setMovies(resultado)
  // }
function get() {
  axios.get('https://api.themoviedb.org/3/movie/popular?api_key=30ea27f9fbbeb2bc86bc0344f2aec446')
  .then(response => {
    setMovies(response.data.results);
    console.log(movies)
  })
  .catch(error => {
    console.log(error);
  });
}

  useEffect(()=>{
    // fechMovies();
    get()
  },[])



  return (
    <div className='container'>
      {/* {movies.map((movie)=>(
        <div key={movie.id} className=''>
          <img src={`${URL_IMAGE + movie.poster_path}`}alt='' height={200} width={200}/>
          <h4 className=''>{movie.title}</h4>
        </div>
      ))} */}
      {movies.map((movie)=>
      <Card title={movie.title} image={`${URL_IMAGE + movie.poster_path}`} key={movie.id}/>
      )}
    </div>
  )
}

export default Home
