import React from 'react';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  function checkLogin(){
    if(localStorage.getItem("token")){
      navigate(`/movie/${movie.id}`);
      return;
    }
    navigate("/login");
    
  }
  return (
    <div className="movie-card" onClick={()=>{checkLogin()}}>
      <img src={movie.Poster} alt={movie.Title} className="movie-image" />
      <h3 className="movie-name">{movie.Title}</h3>
      <p className="movie-year">{movie.Year}</p>
      <p className="movie-type">{movie.Type}</p>
      <p className="movie-rating">{movie.rating}</p>
    </div>
  );
};

export default MovieCard;
