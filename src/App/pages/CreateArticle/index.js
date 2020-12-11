import React from 'react';
import { CreateArticle } from '../../features/article/createArticle';

class index extends React.Component {
  render() {
    return (
      <div className='main-container-holder'>
        <div className='content-holder'>

          <CreateArticle />

        </div>
      </div>
    );
  }
}

export default index;

