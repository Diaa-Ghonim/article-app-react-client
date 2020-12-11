import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserSavedArticles } from '../actionsCreator';
import ShowListArticles from '../../../../shared/ShowListOfArticles';
import { getUserDislikedArticles } from '../../userDislikedArticles/actionsCreator';


export default React.memo((props) => {
  const { username } = props;
  const dispatch = useDispatch();
  const userSavedArticlesState = useSelector(state => state.userSavedArticles);
  const { articles, isLoading, error } = userSavedArticlesState;


  useEffect(() => {
    dispatch(getUserSavedArticles(username));

  }, [dispatch, username]);

  return (
    <ShowListArticles
      articles={articles}
      isLoading={isLoading}
      error={error}
      tryLoadingAgain={() => getUserDislikedArticles(username)}
    />
  )
})
