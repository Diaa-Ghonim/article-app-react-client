
import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getArticle } from '../actionsCreator';
import ShowArticle from '../component';

export default ({ params }) => {
  const { username, articleID } = params;
  const dispatch = useDispatch();
  useEffect(() => {
    handleAction()
  }, []);
  const handleAction = () => {
    dispatch(getArticle({ username, articleID }));

  }
  const articleState = useSelector(state => state.article);
  const { article, isLoading, error } = articleState;

  return (
    <ShowArticle
      article={article}
      isLoading={isLoading}
      error={error}
      tryLoadingAgain={handleAction}
    />
  )
}

