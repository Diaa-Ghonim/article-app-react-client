import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getTopReading } from '../../actionsCreator';
import ListOfTopReadingTitles from '../../components/ListOfTopReadingTitles';

export default () => {

  const dispatch = useDispatch();
  const topReadingState = useSelector(state => state.topReading);
  const { articles, isLoading, error } = topReadingState;

  useEffect(() => {
    dispatch(getTopReading());
  }, []);

  return (
    <ListOfTopReadingTitles
      articles={articles}
      isLoading={isLoading}
      error={error}
      tryAgainCallback={getTopReading}
    />
  )
}
