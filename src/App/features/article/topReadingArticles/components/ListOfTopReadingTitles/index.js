import React from 'react';
import './style.scss';
import Spinner from '../../../../../shared/Spinner';
import { NavLink } from 'react-router-dom';
import ShowError from '../../../../../shared/ShowError';

export default ({ articles, isLoading, error, tryLoadingAgain }) => {

  return (
    <div className='top-reading-container common-top-reading '>
      <div className='header common-top-reading border-common'>
        <h1>Top reading</h1>
      </div>
      {isLoading ? (
        <Spinner />
      ) : error ? (
        <ShowError error={error} tryLoadingAgain={tryLoadingAgain} />
      ) : (
            <div className='top-reading-content'>
              {articles.slice(0, 10).map((article) => {
                return (
                  <div
                    key={article.id}
                    className='content common-top-reading border-common'
                  >
                    {' '}
                    <NavLink to={`/${article.ownerUsername}/${article.id}`}>
                      {' '}
                      {article.title}{' '}
                    </NavLink>{' '}
                  </div>
                );
              })}

              <div className='showmore common-top-reading'>
                <NavLink to='/top-reading'>show more</NavLink>
              </div>
            </div>
          )}
    </div>
  );
}

