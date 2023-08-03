import React, { useEffect, useState } from 'react'
import '../Home/Home.css'
import axios from 'axios'
import Card from '../Card/Card'
import { FaSearch } from 'react-icons/fa';
import { WiDirectionUp } from 'react-icons/wi';
import { Link } from 'react-router-dom';

const Home = () => {

  const API_KEY='30ea27f9fbbeb2bc86bc0344f2aec446'
  const API_URL='https://api.themoviedb.org/3'

  const[movies,setMovies]=useState([])
  const [searchKey, setSearchKey]=useState('') 
  const [trailer, setTrailer]=useState(null)
  const [movie, setMovie]=useState([])
  const [playing, setPlaying]=useState(false)

  const [currentPage, setCurrentPage]=useState(1)
  const [totalPage, setTotalPage]=useState(0)

  const [currentSearchPage, setCurrentSearchPage] = useState(1);
  const [totalSearchPage, setTotalSearchPage] = useState(0);
  
  
  const URL_IMAGE='https://image.tmdb.org/t/p/original'


 
  const fetchMovies = async (searchKey) => {
    
    try {
      let url = `${API_URL}/movie/popular?api_key=${API_KEY}&page=${currentPage}`;

      if (searchKey) {
        url = `${API_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(searchKey)}&page=${currentSearchPage}`;
       
      }
      
      
      const response = await axios.get(url);
      const results = response.data.results;


      if (searchKey && currentSearchPage === 1) {
       setMovie(results);
    setCurrentSearchPage((prevPage) => prevPage + 1);
    setTotalSearchPage(response.data.total_pages); // Almacenar el total de páginas para la búsqueda
      }
      else if(searchKey && currentSearchPage > 1){
        setMovie((prevMovies) => [...prevMovies, ...results]);
      } 
      else if (!searchKey){
        setMovies((prevMovies) => [...prevMovies, ...results]);
      }
      setTotalPage(response.data.total_pages); 
     
    } catch (error) {
      console.log(error);
    }
  };

  

  // busqueda de peliculas
  const searchMovie = (e) => {
    e.preventDefault();
    const valorInput= document.getElementById('busqueda').value

 if(!valorInput){
      console.log('escribi algo')
    }
     else {
     setMovies([])
     setMovie([])
     setCurrentSearchPage(1)
     setCurrentPage(1)
    fetchMovies(valorInput);
    
     
    }
    
  };
  // input de la busqueda en tiempo real
  const handleSearchInputChange = (e) => {
    setSearchKey(e.target.value);
    console.log(searchKey)
  }; 
  // mas peliculas
  const loadMoreMovies = () => {
    if (searchKey) {
      console.log(currentSearchPage)
      setCurrentSearchPage((prevPage) => prevPage + 1);
      fetchMovies(searchKey);
      console.log(totalSearchPage)
    } else {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };
  
   

  
  
  
  
  // const handleDelete =()=>{
  //  setMovie('')
   
  //   setSearchKey('')
  //   fetchMovies()
   
  // }

  useEffect(()=>{
    fetchMovies()
  },[currentPage,currentSearchPage])
  
 useEffect(()=>{
  setCurrentSearchPage(1)
 },[searchKey])

  return (
    <div className='container'>
      
        {movie[0]
        ?(        <div className='cards'>
        {movie.map((movie)=>
        <Card key={movie.id} title={movie.title} image={`${URL_IMAGE + movie.poster_path}`} description={movie.overview} />
        )}
                {currentSearchPage <= totalSearchPage ?(
            <button onClick={loadMoreMovies} className='maspelis'>Cargar mas peliculas</button>
                  ):<p className='no-results-message'>No hay mas peliculas</p>}
        </div>)
        :<div className='cards'>
        {movies.map((movie)=>
        <Link to={`/detail/${movie.id}`}> 
        <Card key={movie.id} title={movie.title} image={`${URL_IMAGE + movie.poster_path}`} description={movie.overview} /></Link>
        )}
                {currentPage < totalPage &&(
            <button onClick={loadMoreMovies} className='maspelis'>Cargar mas peliculas</button>
          )}
        </div> }
        



      <div className='form-container'>
      {/* <form onSubmit={searchMovie}> */}
        <input type='text' id='busqueda' placeholder='Search' onChange={handleSearchInputChange} className='search-input' />
        <button className='btn-search' onClick={searchMovie}><FaSearch/></button>
      {/* </form> */}
      {/* <button onClick={handleDelete}>x</button> */}
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="scroll-to-top-button"><WiDirectionUp/></button>

    </div>
    </div>
  )
}

export default Home
