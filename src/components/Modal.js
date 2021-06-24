import React from 'react';
import Backdrop from './Backdrop';
import logo from '../images/logo.svg';
import closeicon from '../images/close-icon.svg';
import moment from 'moment';

const Modal = ({
  title,
  overview,
  poster_path,
  name,
  release_date,
  first_air_date,
  vote_count,
  vote_average,
  SetOpenModal,
  openModal,
}) => {
  const CloseModal = (e) => {
    e.preventDefault();
    SetOpenModal(false);
  };

  return (
    <>
      <Backdrop show={openModal} clicked={CloseModal} />
      <section>
        <div className='modal'>
          <p className='modal-title'>
            <b>{title ? title : name}</b>
          </p>
          <img src={closeicon} className='modal-close' onClick={CloseModal} alt='close' />
          <img
            src={poster_path ? `${process.env.REACT_APP_API_BASE_IMAGE_URL + poster_path}` : logo}
            alt={title ? title : name}
            className='modal-image'
          />

          <div>
            <p style={{ marginBottom: '1rem' }}>
              <b>Release Date: </b>
              {moment(release_date || first_air_date).format('LL')}
            </p>
            <p style={{ marginBottom: '1rem' }}>{overview}</p>
            <p>
              <b>{vote_average}</b>/10 ({vote_count} total votes)
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Modal;
