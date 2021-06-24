import React, { useContext } from 'react';
import MoviesCard from './MoviesCard';
import { MoviesContext } from '../contexts/moviesContext';

const Movies = () => {
  const { movieList } = useContext(MoviesContext);
  return (
    <React.Fragment>
      {movieList.length > 0
        ? movieList.map((movie) => <MoviesCard key={movie.id} {...movie} />)
        : 'Nothing to display, please wait or change your search query'}
    </React.Fragment>
  );
};

export default Movies;
