import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserDislikedArticles } from '../actionsCreator';
import ShowListArticles from '../../../../shared/ShowListOfArticles';

export default React.memo((props) => {
  const { username } = props;
  const dispatch = useDispatch();
  const userDislikedArticlesState = useSelector(
    (state) => state.userDislikedArticles
  );
  const { articles, isLoading, error } = userDislikedArticlesState;

  useEffect(() => {
    dispatch(getUserDislikedArticles(username));
  }, [dispatch, username]);

  return (
    <ShowListArticles
      articles={articles}
      isLoading={isLoading}
      tryLoadingAgain={() => getUserDislikedArticles(username)}
      error={error}
    />
  );
});
