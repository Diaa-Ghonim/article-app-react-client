import React, { useEffect } from 'react';
import './style.scss';

import { useDispatch, useSelector } from 'react-redux';
import { getBestWriters } from '../../actions';
import Spinner from '../../../../../shared/Spinner';
import ShowError from '../../../../../shared/ShowError';
import { NavLink } from 'react-router-dom';

export default () => {
  const dispatch = useDispatch();
  const { bestWriters, isLoading, error } = useSelector(
    ({ bestWriters }) => bestWriters
  );

  useEffect(() => {
    if (bestWriters.length === 0) {
      dispatch(getBestWriters());
    }
  }, [dispatch]);

  return (
    <div className='best-writers-container common'>
      <div className='header common'>
        <h1>Best writers</h1>
      </div>
      {isLoading ? (
        <Spinner />
      ) : error ? (
        <ShowError error={error} tryLoadingAgain={getBestWriters} />
      ) : (
        <div className='best-writers-content'>
          {bestWriters.slice(0, 10).map((bestWriter) => {
            return (
              <div key={bestWriter.id} className='content common'>
                {' '}
                <NavLink to={`/${bestWriter.username}`}>
                  {bestWriter.name}
                </NavLink>{' '}
              </div>
            );
          })}

          <div className='showmore common'>
            <NavLink to='/best-writers'>show more</NavLink>
          </div>
        </div>
      )}
    </div>
  );
};
