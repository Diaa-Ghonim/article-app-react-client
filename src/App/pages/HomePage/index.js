import React,{useEffect} from 'react';
// import PropTypes from 'prop-types'
import FollowersArticles from '../../components/Article/articleComponents/FollowersArticle';
import Sidebar from '../../shared/Sidebar';
import './style.scss';


export default function Index() {
  useEffect(() => {
    document.title = 'Home';
    console.log('useEffect in home');
    return () => {
      
    }
  }, [])
   return (
     <div className='main-container-holder'>
       <div className='sidebar-holder'>
         <Sidebar />
       </div>
       <div className='content-holder'>
         
         <FollowersArticles />
       </div>
     </div>
   );
}

