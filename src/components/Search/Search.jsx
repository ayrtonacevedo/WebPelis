import React, { useEffect, useState } from "react";
import Spinner from '../Spiner/Spinner'
import axios from "axios";
import './Search.css'
import Card from "../Card/Card";
import { Link } from "react-router-dom";
import { WiDirectionUp } from 'react-icons/wi';

const Search =()=>{

    const API_KEY='30ea27f9fbbeb2bc86bc0344f2aec446'
    const API_URL='https://api.themoviedb.org/3'
    const URL_IMAGE='https://image.tmdb.org/t/p/original'
    const [searchKey, setSearchKey]=useState('')
    const [movie, setMovie]=useState()
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);


    
    

    useEffect(()=>{
        if(searchKey){
            //Realizar la busqueda solo si hay algo en el input
            const searchMovies = async () =>{
                try{
                    const response = await axios.get(
                        `${API_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(searchKey)}&page=${currentPage}`
                    )
                    setMovie((prevMovies) => [...prevMovies, ...response.data.results]);
                    setTotalPages(response.data.total_pages);
                }catch (error){
                    console.error('Error searching movies:',error)
                }
            }
            //timer para evitar multiples solicitudes
            const delayTimer = setTimeout(searchMovies, 500)
            // limpiar el timer cuando estoy escribiendo
            return () => clearTimeout(delayTimer)
        } else{
            // sino hay termino de busqueda, limpiar los resultados
            setSearchKey('')
            setMovie([])
            setCurrentPage(1)
            setTotalPages(0)
        }
    }, [searchKey, currentPage])

    const handleInputChange=(e)=>{
        setSearchKey(e.target.value)
        setCurrentPage(1)
    }
    const handleLoadMore=()=>{
        if(currentPage < totalPages){
            setCurrentPage((prevPage)=>prevPage+1)
        }
    }


    return(
         <div className="container-search">
                {movie && movie[0]
                ?
                <div className="cards-search">
                        {movie.map((movie)=>
                        <Link to={`/detail/${movie.id}`}> 
                        <Card key={movie.id} title={movie.title} image={`${URL_IMAGE + movie.poster_path}`} description={movie.overview}/></Link> )}
                        {currentPage < totalPages &&(
                            <button className='maspelis-search' onClick={handleLoadMore}>Load More Movies</button>
                        )}  
                </div>
                :<Spinner/>}
                <div className="form-container">
                <input
                type="text"
                className="search-input"
                value={searchKey}
                onChange={handleInputChange}
                placeholder="Search for movies"
                />
                <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="scroll-to-top-button"><WiDirectionUp/></button>
                    
                </div>
            </div>
            
        
    )

}
export default Search