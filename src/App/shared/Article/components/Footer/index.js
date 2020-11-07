import React, { useMemo } from 'react';
import { SvgLike, SvgDislike, SvgSave, SvgShare } from '../Svgs';
import './style.scss';


export default ({ article }) => {
  return (
    <>
      <div className='article-actions'>
        <SvgLike article={article} />
        <SvgDislike article={article} />
        <SvgShare article={article} />
        <SvgSave article={article} />
      </div>
    </>
  )
}
