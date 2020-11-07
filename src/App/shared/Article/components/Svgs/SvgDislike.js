import './style.scss';
import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { dislikeArticle, removeDislikeArticle } from '../../actions';

import { SignUp } from '../../../../features/auth';
import { modalContext } from '../../../../shared/Modal/ModalProvider';

export default function SvgDislike({ article }) {

  const {
    handleModal,
    handleModalContent
  } = useContext(modalContext);
  const dispatch = useDispatch();
  const mainUser = useSelector(state => state.mainUser);
  const { isAuthenticate, user } = mainUser;
  console.log(mainUser);
  const isDislike = article.dislikes.find(dislikedUser => dislikedUser._id === user.id);

  const handleDislikeArticle = () => {
    if (!isAuthenticate) {
      handleModal();
      handleModalContent(<SignUp />);
      return;
    }

    if (!isDislike) {
      dispatch(dislikeArticle(article.id));
    } else {
      dispatch(removeDislikeArticle(article.id));
    }
  }



  return (
    <div className='svg-holder'>
      <div>
        <svg
          onClick={handleDislikeArticle}
          id='dislike-btn'
          className={isDislike ? 'svg-fill' : ''}
          viewBox='0 0 24 24'
          preserveAspectRatio='xMidYMid meet'
          focusable='false'
        >
          <g>
            <path d='M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z'></path>
          </g>
        </svg>
      </div>
    </div>
  );
}
