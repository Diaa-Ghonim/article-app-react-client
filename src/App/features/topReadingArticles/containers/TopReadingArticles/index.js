import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTopReading } from '../../actionsCreator';
import ShowListOfArticles from '../../../../shared/ShowListOfArticles';


export default () => {
  const dispatch = useDispatch();
  const topReadingState = useSelector(state => state.topReading);
  const { articles, isLoading, error } = topReadingState;

  useEffect(() => {
    dispatch(getTopReading());
  }, []);


  return (
    <ShowListOfArticles
      articles={articles}
      isLoading={isLoading}
      error={error}
      tryLoadingAgain={getTopReading}
    />
  )
}
