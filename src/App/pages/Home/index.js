import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FeedArticles } from '../../features/article/feedArticles';
import Sidebar from '../../shared/Sidebar';
import './style.scss';

export default function (props) {
  const { isAuthenticate } = useSelector((state) => state.mainUser);

  useEffect(() => {
    document.title = 'Home';
  }, []);

  return (
    <div className='main-container-holder'>
      {!isAuthenticate ? (
        ''
      ) : (
        <div className='sidebar-holder'>
          <Sidebar />
        </div>
      )}
      <div className='content-holder'>
        <FeedArticles />
      </div>
    </div>
  );
}
