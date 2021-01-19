import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Address from './Header';
import Body from './Body';
import Actions from './Footer';
import ArticleActionError from './ArticleActionError';
import Style from './style.module.scss';
import { clearArticleActionError } from '../actions';

export default ({ article }) => {
  const dispatch = useDispatch();
  const articleActionError = useSelector((state) => state.articleActionError);
  const { error, articleID } = articleActionError;
  useEffect(() => {
    let timeOut;
    if (error) {
      timeOut = setTimeout(() => {
        dispatch(clearArticleActionError());
      }, 5000);
    }
    return () => {
      clearTimeout(timeOut);
    };
  }, [error]);

  return (
    <div className={Style.articleWrapper}>
      <div className={Style.articleContainer}>
        <Address article={article} />
        <Body article={article} />
        <Actions article={article} />
        {article.id === articleID && error ? (
          <ArticleActionError errorMsg={error.msg} />
        ) : (
          ''
        )}
      </div>
    </div>
  );
};
