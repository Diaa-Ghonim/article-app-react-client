import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import './style.scss';
import { getBestWriters } from '../../actions';
import Spinner from '../../../../../shared/Spinner';
import ShowError from '../../../../../shared/ShowError';
import BestWriterCard from '../BestWriterCard';

export default () => {
  const dispatch = useDispatch();
  const { bestWriters, isLoading, error } = useSelector(
    ({ bestWriters }) => bestWriters
  );

  useEffect(() => {
    dispatch(getBestWriters());
  }, [dispatch]);

  return (
    <div>
      {isLoading ? (
        <div>
          {' '}
          <Spinner />{' '}
        </div>
      ) : error ? (
        <div>
          <ShowError error={error} tryLoadingAgain={getBestWriters} />
        </div>
      ) : (
        <div>
          {bestWriters.map((bestWriter) => {
            return (
              <BestWriterCard key={bestWriter.id} bestWriter={bestWriter} />
            );
          })}
        </div>
      )}
    </div>
  );
};
