import React, { useEffect, useState } from 'react'
import axios from '../axios';
import requests from '../request';
import './Header.css'
import { useNavigate } from 'react-router-dom';
import img from '../img/Netflix_logo_PMS.png'
const Header = () => {
    const [movie,setMovie]=useState([]);
    useEffect(()=>{
        async function fetchData(){
            const request=await axios.get(requests.fetchTopRated);
            setMovie(request.data.results[Math.ceil(Math.random()*request.data.results.length-1)])
            return request
        }
        fetchData()
    },[])

    const navigate = useNavigate();
    function handleClicked(movie){
      navigate(`/movie/${movie.id}`, { state: { movie } });
    }
    function clickfunction() {
        alert("Movie Added into List")
        
    }

  return (
    <div className='header'>
        <nav className='navbar' style={{height:"60px"}}>
            <img src={img}  />
            <br />
            {/* <a id='a1' href="#">Home</a>
            <a id='a2' href="#">More</a> */}
        </nav>
        <header className='banner' style={{
            background:`url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`, 
            height:'80vh',
            width:'100%',
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            objectFit:'fit',
            // height:"90vh",
            // width:"100%",
        }}>

        <div className='banner__contents'>
            <h1 className='banner__title'>{movie.original_name || movie.name || movie.title}</h1>
            <div className='banner__buttons'>
                <button className='banner__button' onClick={()=>handleClicked(movie)}>Play</button>
                <button className='banner__button' onClick={()=>clickfunction()}>My List</button>
            </div>
            <div className='banner__description'>
                <h2>{movie.overview}</h2>
            </div>
        </div>
            
        </header>
    </div>
  )
}

export default Header
