import React from 'react'
import { Article } from '../../../shared/Article';
import Loading from '../../../shared/Loading';
import ShowError from '../../../shared/ShowError';
import TryLoadingAgain from '../../../shared/TryLoadingAgain';

export default ({ article, isLoading, error, tryLoadingAgain }) => {
  return (
    <>
      {
        isLoading ? (
          <Loading />
        ) : error.isError ? (
          <>
            <ShowError errorMsg={error.msg} />
            <TryLoadingAgain tryLoadingAgain={tryLoadingAgain} />
          </>
        ) : (
              article ? (
                <Article article={article} />
              ) : ''
            )
      }
    </>
  );
}