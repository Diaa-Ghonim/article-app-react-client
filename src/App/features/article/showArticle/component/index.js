import React from 'react'
import { Article } from '../../Article';
import Spinner from '../../../../shared/Spinner';
import ShowError from '../../../../shared/ShowError';

export default ({ article, isLoading, error, tryLoadingAgain }) => {

  if (isLoading) return <Spinner />
  if (error) return <ShowError error={error} tryLoadingAgain={tryLoadingAgain} />;
  if (article) return <Article article={article} />
  else return ''

}