import React, { Component, memo, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserDislikedArticles } from '../actionsCreator';
import ShowListArticles from '../../../shared/ShowListOfArticles';

export default React.memo((props) => {
  const { username } = props;
  const dispatch = useDispatch();
  const userDislikedArticlesState = useSelector(state => state.userDislikedArticles);
  const { articles, isLoading, error } = userDislikedArticlesState;


  useEffect(() => {
    dispatch(getUserDislikedArticles(username));

  }, []);

  return (
    <ShowListArticles
      articles={articles}
      isLoading={isLoading}
      error={error}
    />
  )
})
