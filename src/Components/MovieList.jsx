import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies } from '../Redux/MovieReducer/action';
import MovieCard from './MovieCard';
import { useLocation } from 'react-router-dom';

const MovieList = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { movies, isLoading, isError } = useSelector((state) => state.movies);
  const getColumnCount = () => {
    const width = window.innerWidth;
    if (width >= 1400) return 4;
    if (width >= 1130) return 3;
    if (width >= 820) return 2;
    return 1;
  };
  const [columnCount, setColumnCount] = useState(getColumnCount());

  useEffect(() => {
    const queryParams = location.search;
    dispatch(fetchMovies(queryParams));
  }, [dispatch, location.search]);

  useEffect(() => {
    const handleResize = () => setColumnCount(getColumnCount());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const styles = {
    movieGrid: {
      display: 'grid',
      gridTemplateColumns: `repeat(${columnCount}, 1fr)`,
      gap: '16px',
      padding: '16px',
    },
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading movies</div>;
  }

  return (
    <div style={styles.movieGrid} data-testid="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
