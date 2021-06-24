import React from 'react';

const Backdrop = (props) => {
  return props.show ? <div className='Backdrop'></div> : null;
};

export default Backdrop;
