import React from 'react'
import Style from './style.module.scss';
import ArticleName from './Name';
import ArticleShowDropdown from './showDropdown';
import ArticleInfo from './Info';


export default ({ article }) => {

  const {
    id,
    title,
    ownerUsername,
    ownerName,
    dateOfCreate
  } = article;

  return (
    <>
      <div className={Style.address}>
        <ArticleName id={id} ownerUsername={ownerUsername} title={title} />
        <ArticleShowDropdown article={article} />
      </div>
      <div className={Style.info}>
        <ArticleInfo
          ownerName={ownerName}
          ownerUsername={ownerUsername}
          dateOfCreate={dateOfCreate}
        />
      </div>
    </>
  );
}
