import React, { useContext } from 'react';
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { likeArticle, removeLikeArticle } from '../../../actions';
import { SignIn } from '../../../../../../features/auth';
import { modalContext } from '../../../../../../shared/Modal/ModalProvider';
import { useHistory } from 'react-router-dom';

export default ({ article }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { toggleModal, addModalContent, addModalRoute } = useContext(
    modalContext
  );
  const { isAuthenticate, user } = useSelector((state) => state.mainUser);

  let isLiked = article.likes.find((likedUser) => likedUser.id === user.id);

  const handleLikeArticle = () => {
    if (!isAuthenticate) {
      if (window.innerWidth <= 400) {
        return history.push('/signin');
      } else {
        toggleModal();
        addModalRoute('/signin');
        addModalContent(<SignIn />);
        return;
      }
    }

    if (!isLiked) {
      dispatch(likeArticle(article.id));
    } else {
      dispatch(removeLikeArticle(article.id));
    }
  };

  return (
    <div className='svg-holder'>
      <div>
        <svg
          onClick={handleLikeArticle}
          className={isLiked ? 'svg-fill' : ''}
          viewBox='0 0 24 24'
          focusable='false'
        >
          <g>
            <path d='M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z'></path>
          </g>
        </svg>
      </div>
    </div>
  );
};
