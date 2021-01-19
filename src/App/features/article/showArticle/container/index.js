import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getArticle } from '../actionsCreator';
import ShowArticle from '../component';

export default ({ params }) => {
  const { username, articleID } = params;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getArticle({ username, articleID }));
  }, [dispatch, username, articleID]);

  const { article, isLoading, error } = useSelector(({ article }) => article);

  return (
    <ShowArticle
      article={article}
      isLoading={isLoading}
      error={error}
      tryLoadingAgain={() => getArticle({ username, articleID })}
    />
  );
};
