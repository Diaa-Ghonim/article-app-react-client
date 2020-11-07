import React from 'react';
import { Article } from '../Article';

export default ({ articles }) => {
  return (
    <div>
      <div>
        {articles.map((article) => {
          return <Article key={article.id} article={article} />;
        })}
      </div>
    </div>
  );
}
