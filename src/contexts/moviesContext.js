import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const MoviesContext = createContext();

const MoviesContextPovider = (props) => {
  const [movieList, setmovieList] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_DOMAIN}/trending/all/week?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}`)
      .then((response) => setmovieList(response.data.results))
      .catch((error) => console.log(error));
  }, []);

  return <MoviesContext.Provider value={{ movieList, setmovieList }}>{props.children}</MoviesContext.Provider>;
};

export default MoviesContextPovider;
