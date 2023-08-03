import React from 'react'
import s from './CardActors.css'
import PerfilImg from '../assets/perfil.webp'

const CardActors=({characterName, actorName, profilePath}) =>{
    const imageURL= profilePath
    ?`https://image.tmdb.org/t/p/w300${profilePath}`
    :PerfilImg;

    return (
      <div className='card-container'>
          <img src={imageURL} alt={characterName} className='image'/>
          <div className='actor-details'>
          <h3 className='character-name'> {actorName}</h3>
          <p className='actor-name'>{characterName} </p>
          </div>    
      </div>
    )
  
}
    


export default CardActors