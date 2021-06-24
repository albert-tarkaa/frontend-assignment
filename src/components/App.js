import React from 'react';
import MoviesContextPovider from '../contexts/moviesContext';
import ModalContextProvider from '../contexts/modalContext';
import Header from './Header';
import Movies from './Movies';

const App = () => {
  
  return (
    <MoviesContextPovider>
      <main className='main-container'>
        <Header />
        <section className='description'>
          <p>Most Recent Movies</p>
        </section>
        <section className='container'>
          <Movies />
        </section>
      </main>
    </MoviesContextPovider>
  );
};

export default App;
