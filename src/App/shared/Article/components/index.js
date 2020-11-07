import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Address from './Header';
import Body from './Body';
import Actions from './Footer';
import ArticleActionError from './ArticleActionError';
import Style from './style.module.scss';
import { clearArticleActionError } from '../actions';

export default ({ article }) => {
  const dispatch = useDispatch();
  const articleActionError = useSelector(state => state.articleActionError);
  const { errorMsg, articleId } = articleActionError;
  console.log('ttt');
  if (errorMsg) {
    setTimeout(() => {
      dispatch(clearArticleActionError())
    }, 5000);
  }
  return (
    <div className={Style.articleWrapper}>
      <div className={Style.articleContainer}>
        <Address article={article} />
        <Body article={article} />
        <Actions article={article} />
        {article.id === articleId && errorMsg ? <ArticleActionError errorMsg={errorMsg} /> : ''}
      </div>
    </div >
  );
}

