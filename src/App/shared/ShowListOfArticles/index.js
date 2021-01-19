import React, { useMemo } from 'react';
import Spinner from '../Spinner';
import ListOfArticles from '../../shared/ListOfArticles';
import ShowError from '../ShowError';

export default ({ articles, isLoading, error, tryLoadingAgain }) => {
  // console.log('one ', isLoading);
  return useMemo(() => {
    if (isLoading)
      return (
        <div>
          <Spinner />
        </div>
      );
    if (error)
      return (
        <div>
          <ShowError error={error} tryLoadingAgain={tryLoadingAgain} />
        </div>
      );
    return (
      <div>
        <ListOfArticles articles={articles} />
      </div>
    );
  }, [articles, isLoading, error, tryLoadingAgain]);
};
