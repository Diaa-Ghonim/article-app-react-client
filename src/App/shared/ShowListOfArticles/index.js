
import React, { useMemo } from 'react';
import Loading from '../../shared/Loading';
import ListOfArticles from '../../shared/ListOfArticles';
import ShowError from '../ShowError';
import TryLoadingAgain from '../TryLoadingAgain';


export default ({ articles, isLoading, error, tryLoadingAgain }) => {
  return useMemo(() => (
    <div>
      {isLoading ? (
        <Loading />
      ) : error.isError ? (
        <>
          <ShowError errorMsg={error.msg}
          />
          <TryLoadingAgain tryLoadingAgain={tryLoadingAgain}
          />
        </>
      ) : (
            <>
              <ListOfArticles articles={articles} />
            </>
          )}
    </div>
  ), [articles, isLoading, error, tryLoadingAgain])
}
