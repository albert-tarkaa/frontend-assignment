import React, { useState } from 'react';
import Modal from './Modal';
import logo from '../images/logo.svg';

const MoviesCard = ({
  title,
  overview,
  poster_path,
  name,
  vote_average,
  id,
  release_date,
  first_air_date,
  vote_count,
}) => {
  const [openModal, SetOpenModal] = useState(false);

  const showModal = (e) => {
    e.preventDefault();
    if (openModal) return;
    SetOpenModal(true);
  };

  return (
    <div>
      {openModal ? (
        <Modal
          title={title}
          name={name}
          overview={overview}
          poster_path={poster_path}
          vote_average={vote_average}
          first_air_date={first_air_date}
          release_date={release_date}
          vote_count={vote_count}
          SetOpenModal={SetOpenModal}
          openModal={openModal}
        />
      ) : null}
      <div className='card' onClick={showModal}>
        <div className='card-header'>
          <p className='card-rating'>{vote_average}</p>
          <img
            src={poster_path ? `${process.env.REACT_APP_API_BASE_IMAGE_URL + poster_path}` : logo}
            alt={title ? title : name}
          />
        </div>
        <div className='card-body'>
          <p>{title ? title : name}</p>
        </div>
      </div>
    </div>
  );
};

MoviesCard.defaultProps = {
  vote_average: 0,
};

export default MoviesCard;
