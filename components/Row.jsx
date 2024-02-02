import React, { useEffect, useState } from 'react'
import axios from '../axios'
import './Row.css'
// import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import MovieDetails from './MovieDetails'
const Row = ({title,fetchUrl,islargeRow}) => {
    const [movie,setMovie]=useState([]);
    const baseUrl="https://image.tmdb.org/t/p/original/"
    useEffect(()=>{
        async function fetchData(){
            const request=await axios.get(fetchUrl);
            setMovie(request.data.results)
            return request
        }
        fetchData()
    },[fetchUrl])

    const navigate = useNavigate();
    function handleClicked(movie){
      navigate(`/movie/${movie.id}`, { state: { movie } });
    }
  return (
    <div className='row'>
      <h1>{title}</h1>
      <div className='row__posters'>
        {
            movie.map((movie)=>{
                return(
                    <img className={`row__poster ${islargeRow && "row__posterLarge"}`} key={movie.id}  
                    src={`${baseUrl}${islargeRow ? movie.poster_path:movie.backdrop_path}`}
                     alt={movie.original_title} onClick={()=>handleClicked(movie)} />
                )
            })
        }
      </div>
    </div>
  )
}

export default Row
