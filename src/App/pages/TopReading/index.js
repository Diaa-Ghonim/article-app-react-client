import React from 'react';
// import PropTypes from 'prop-types'
// import Article from '../../components/Article/articleComponents/Article';
import TopReadingArticles from '../../components/TopReading/TopReadingArticles';

export default function index() {
  return (
    <div className='main-container-holder'>
      <div className='content-holder'>
        <TopReadingArticles />
      </div>
    </div>
  );
}

