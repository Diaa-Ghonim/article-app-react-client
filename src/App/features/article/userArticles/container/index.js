import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserArticles } from '../actionsCreator';
import ShowListArticles from '../../../../shared/ShowListOfArticles';

export default React.memo((props) => {
  const { username } = props;
  const dispatch = useDispatch();
  const userArticlesState = useSelector(state => state.userArticles);
  const { articles, isLoading, error } = userArticlesState;


  useEffect(() => {
    dispatch(getUserArticles(username));

  }, [dispatch, username]);

  return (
    <ShowListArticles
      articles={articles}
      isLoading={isLoading}
      error={error}
      tryLoadingAgain={() => getUserArticles(username)}
    />
  )
})
