import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const MovieDetail = () => {
  const { id } = useParams();
  const movie = useSelector((state) =>
    state.movies.movies.find((movie) => movie.id === Number(id))
  );

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div>
      <img src={movie.Poster} alt={movie.Title} />
      <h2>{movie.Title}</h2>
      <p>{movie.Year}</p>
      <p>{movie.Type}</p>
      <p>{movie.rating}</p>
    </div>
  );
};

export default MovieDetail;



