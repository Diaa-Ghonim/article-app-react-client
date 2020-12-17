import React, { useState, useCallback, useEffect } from 'react';
import './style.scss';
import ReactHtmlParser from 'react-html-parser';
import { useHistory } from 'react-router-dom';

export default function Index({ article: { id, content } }) {

  const [isShowmore, setIsShowmore] = useState(false);
  const [isArticleLong, setIsArticleLong] = useState(false);

  /**
   * i can use ref and use effect here also
   */
  const measuredRef = useCallback(
    (node) => {
      if (node !== null) {
        if (node.getBoundingClientRect().height >= 200) {
          setIsArticleLong(true);
        }
      }
    },
    [],
  );
  const { location: { pathname } } = useHistory();

  useEffect(() => {
    if (pathname.indexOf(id) > -1) {
      console.log('indexof');
      setIsArticleLong(false);
      setIsShowmore(true);
    }

  }, [])
  return (
    <>
      <div className='article-content' >
        <div className='article-text-wrapper'>
          <div
            className='article-text'
            data-with-readmore={isShowmore}
            ref={measuredRef}
          >
            {ReactHtmlParser(content)}
          </div>

          {
            isArticleLong && (
              <div className='read-article' onClick={() => setIsShowmore(!isShowmore)}>
                <span>
                  {
                    isShowmore ? 'less more' : 'show more'
                  }
                </span>
              </div>
            )
          }
        </div>
      </div>
    </>
  );
}
