import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { FeedArticles } from '../../features/article/feedArticles';
import Sidebar from '../../shared/Sidebar';
import { useDocumentTitle, useMedia } from '../../customHooks';
// import LazyComponent from '../../../LazyComponent';
import './style.scss';

export default function (props) {
  const { isAuthenticate } = useSelector((state) => state.mainUser);
  useDocumentTitle('Home');
  let isShowSidebar = useMedia('(min-width:650px)');

  return (
    <div className='main-container-holder'>
      {!isAuthenticate ? (
        ''
      ) : (
        <div className='sidebar-holder'>{isShowSidebar ? <Sidebar /> : ''}</div>
      )}
      <div className='content-holder'>
        <FeedArticles />
      </div>
    </div>
  );
}
