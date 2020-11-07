import React, { useState, useEffect, useRef, useCallback } from 'react';
import './style.scss';
import ReactHtmlParser from 'react-html-parser';

export default function Index({ article }) {
  
  const [isShowmore, setIsShowmore] = useState(false);
  const [isArticleLong, setIsArticleLong] = useState(false);

  /**
   * i can use ref and use effect here also
   */
  const measuredRef = useCallback(
    (node) => {
      console.log('callback');
      if (node !== null) {
        if (node.getBoundingClientRect().height >= 200) {
        setIsArticleLong(true);
      }
      }
    },
    [],
  );
  
  return (
      <>
        <div className='article-content' >
          <div className='article-text-wrapper'>
            <div
              className='article-text'
              data-with-readmore={isShowmore}
              ref={measuredRef}
            >
              {ReactHtmlParser(article.content)}              
            </div>
          
            {isArticleLong ? (
              <div className='read-article'>
                <span
                  onClick={() => setIsShowmore(!isShowmore)}
                >
                  {isShowmore ? 'less more' : 'show more'}
                </span>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      </>
    );
}
