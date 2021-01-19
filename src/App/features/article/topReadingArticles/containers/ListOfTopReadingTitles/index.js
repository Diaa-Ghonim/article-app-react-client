import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTopReading } from '../../actionsCreator';
import ListOfTopReadingTitles from '../../components/ListOfTopReadingTitles';

export default () => {
  const dispatch = useDispatch();
  const { articles, isLoading, error } = useSelector(
    (state) => state.topReading
  );

  useEffect(() => {
    dispatch(getTopReading());
  }, [dispatch]);

  return (
    <ListOfTopReadingTitles
      articles={articles}
      isLoading={isLoading}
      error={error}
      tryLoadingAgain={getTopReading}
    />
  );
};
