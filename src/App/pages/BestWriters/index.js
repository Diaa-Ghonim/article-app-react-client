import React from 'react';
// import PropTypes from 'prop-types'
import { BestWritersCards } from '../../features/bestWriters';

export default function index() {
  return (
    <div className='main-container-holder'>
      <div className='content-holder'>
        <BestWritersCards />
      </div>
    </div>
  );
}


