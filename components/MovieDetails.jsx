import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./MovieDetails.css";
import {API_KEY }from '../request.jsx'
import axios from "../axios.jsx";
const MovieDetails = () => {
  const { state } = useLocation();
  const movie = state?.movie;
  // console.log(movie);
  const baseUrl = "https://image.tmdb.org/t/p/original/";
  // console.log(movie.id);

  const [casts, setCasts] = useState([]);
  const [trail,setTrail]=useState([]);
  useEffect(() => {
    async function fetchCasts() {
      const request = await axios.get(
        `https://api.themoviedb.org/3/movie/${movie.id}/credits?api_key=${API_KEY}`
      );
      // console.log(request.data.cast);
      setCasts(request.data.cast);
      return request;
    }
    fetchCasts();
  }, [movie.id]);

  useEffect(()=>{
    async function fetchTrailer(){
      const trailer=await axios.get(
        `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${API_KEY}&language=en-US`
      );
      setTrail(trailer.data.results)
      console.log(trailer);
    }
    fetchTrailer();
  },[movie.id])


  const handlePlayClick = () => {
    // Scroll to the bottom of the page
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div >
      <section className="movie_page" style={{
        background:`url(${baseUrl}${movie.poster_path})`,
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        height:'90vh',
        
      }}>
        <div className="movie_Image_div" >
          <img className="movie_image" src={`${baseUrl}${movie.poster_path}`} />
        </div>
        <div className="movie_details">
          <h3>{movie.title ? movie.title : movie.name}</h3>
          <h4>{movie.overview}</h4>
          <p >
              <span style={{ color: "yellow",fontSize:"30px" }}>&#9733;</span>{movie.vote_average}/10
          </p>
          <br />
          <button onClick={handlePlayClick}>Play</button>
        </div>
      </section>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          
          gap:"40px",
          flexWrap: "wrap",
          background:"transparent"
        }}
      >
        <h3 style={{width:"100%",height:"30px",fontSize:"30px",position:"relative", background:"transparent"}}>Cast</h3>
        {casts.slice(0, 6).map((actor) => {
          return (
            <div key={actor.cast_id} style={{ background:"transparent"}} >
              
              <img
                
                src={`${baseUrl}${actor.profile_path}`}
                style={{ width: "100px", height: "100px", borderRadius: "50%", background:"transparent" }}
              />
              <p style={{ color: "white" }}>{actor.character}</p>
            </div>
          );
        })}
      </div>
      {
        trail.slice(0,1).map((teaser)=>{
          return(
            <iframe
      key={teaser.key}
      width="100%"
      height='400'
      // align-item="centre"
      src={`https://www.youtube.com/embed/${teaser.key}`}
    ></iframe>
          )
        })
      }
    </div>
  );
};

export default MovieDetails;
