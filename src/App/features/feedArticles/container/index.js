import React, { Component, memo, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ShowListArticles from '../../../shared/ShowListOfArticles';
import { getFeedArticles } from '../actionsCreator';


export default React.memo((props) => {
  const dispatch = useDispatch();
  const feedState = useSelector(state => state.feed);
  const { articles, isLoading, error } = feedState;


  useEffect(() => {
    dispatch(getFeedArticles());

  }, []);

  return (
    <ShowListArticles
      articles={articles}
      isLoading={isLoading}
      error={error}
      tryLoadingAgain={getFeedArticles}
    />
  )
})
