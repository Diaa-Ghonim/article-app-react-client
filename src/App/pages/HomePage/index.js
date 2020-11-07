import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import PropTypes from 'prop-types'
import { FeedArticles } from '../../features/feedArticles';
import Sidebar from '../../shared/Sidebar';
import './style.scss';

export default function Index() {

  const mainUser = useSelector(state => state.mainUser);
  const { isAuthenticate } = mainUser;

  useEffect(() => {
    document.title = 'Home';
    console.log('useEffect in home');
    return () => {

    }
  }, [])
  return (
    <div className='main-container-holder'>
      {!isAuthenticate ? '' : <div className='sidebar-holder'>
        <Sidebar />
      </div>}
      <div className='content-holder'>
        <FeedArticles />
      </div>
    </div>
  );
}

