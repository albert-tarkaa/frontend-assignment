import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import logo from '../images/logo.svg';
import { MoviesContext } from '../contexts/moviesContext';

const Header = () => {
  const { setmovieList } = useContext(MoviesContext);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      axios
        .get(
          `${process.env.REACT_APP_API_DOMAIN}/search/movie?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&query=${search}`
        )
        .then((response) => setmovieList(response.data.results))
        .catch((error) => console.log(error));
    }, 2000);
    return () => clearTimeout(delayDebounceFn);
  }, [search]);

  return (
    <nav className='navbar'>
      <img src={logo} alt='Timescale' />
      <input
        type='text'
        name='search'
        placeholder='Search for a movie'
        className='search-box'
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        autoFocus
      />
    </nav>
  );
};

export default Header;
