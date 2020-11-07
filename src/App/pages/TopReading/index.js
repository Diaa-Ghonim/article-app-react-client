import React from 'react';
import { TopReadingArticles } from '../../features/topReadingArticles';

export default function index() {
  return (
    <div className='main-container-holder'>
      <div className='content-holder'>
        <TopReadingArticles />
      </div>
    </div>
  );
}

