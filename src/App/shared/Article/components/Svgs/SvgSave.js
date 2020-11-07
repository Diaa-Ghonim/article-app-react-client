import './style.scss';
import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { saveArticle, removeSaveArticle } from '../../actions';
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

  const isSave = article.saves.find(userObj => userObj._id === user.id);

  const handleSaveArticle = () => {
    if (!isAuthenticate) {
      handleModal();
      handleModalContent(<SignUp />)
      return;
    }

    if (!isSave) {
      dispatch(saveArticle(article.id));
    } else {
      dispatch(removeSaveArticle(article.id));
    }
    console.log('hello from dislike article');
  }
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

