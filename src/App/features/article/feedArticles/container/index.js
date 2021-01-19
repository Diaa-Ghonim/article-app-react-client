import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ShowListOfArticles from '../../../../shared/ShowListOfArticles';
import { getFeedArticles, getCommonFeedArticles } from '../actionsCreator';

export default React.memo((props) => {
  const dispatch = useDispatch();
  const feedState = useSelector((state) => state.feed);
  const { articles, isLoading, error } = feedState;
  const { isAuthenticate } = useSelector(({ mainUser }) => mainUser);

  useEffect(() => {
    if (!isAuthenticate) {
      dispatch(getCommonFeedArticles());
    } else {
      dispatch(getFeedArticles());
    }
  }, [isAuthenticate]);

  return (
    <ShowListOfArticles
      articles={articles}
      isLoading={isLoading}
      error={error}
      tryLoadingAgain={() =>
        isAuthenticate ? getFeedArticles() : getCommonFeedArticles()
      }
    />
  );
});
