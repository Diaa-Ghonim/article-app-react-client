import './style.scss';
import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveArticle, removeSaveArticle } from '../../../actions';
import { SignIn } from '../../../../../../features/auth';
import { modalContext } from '../../../../../../shared/Modal/ModalProvider';
import { useHistory } from 'react-router-dom';

export default function SvgDislike({ article }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const { toggleModal, addModalContent, addModalRoute } = useContext(
    modalContext
  );
  const { isAuthenticate, user } = useSelector((state) => state.mainUser);

  const isSave = article.saves.find((userObj) => userObj.id === user.id);

  const handleSaveArticle = () => {
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

    if (!isSave) {
      dispatch(saveArticle(article.id));
    } else {
      dispatch(removeSaveArticle(article.id));
    }
  };

  return (
    <div className='svg-holder'>
      <div>
        <svg
          onClick={handleSaveArticle}
          id='save-btn'
          className={isSave ? 'svg-fill' : ''}
          viewBox='0 0 24 24'
          preserveAspectRatio='xMidYMid meet'
          focusable='false'
        >
          <g>
            <path d='M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z'></path>
          </g>
        </svg>
      </div>
    </div>
  );
}
