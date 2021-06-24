import React, { createContext, useState, useEffect } from 'react';
export const ModalContext = createContext();

const ModalContextProvider = (props) => {
  const [openModal, SetOpenModal] = useState(false);

  const showModal = (e) => {
    e.preventDefault();
    SetOpenModal(!openModal);
  };

  return <ModalContext.Provider value={{ openModal, SetOpenModal, showModal }}>{props.children}</ModalContext.Provider>;
};

export default ModalContextProvider;
