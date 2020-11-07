import React, { Component, memo, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserArticles } from '../actionsCreator';
import ShowListArticles from '../../../shared/ShowListOfArticles';

export default React.memo((props) => {
  const { username } = props;
  const dispatch = useDispatch();
  const userArticlesState = useSelector(state => state.userArticles);
  const { articles, isLoading, error } = userArticlesState;


  useEffect(() => {
    dispatch(getUserArticles(username));

  }, []);

  return (
    <ShowListArticles
      articles={articles}
      isLoading={isLoading}
      error={error}
      tryLoadingAgain={getUserArticles}
    />
  )
})
