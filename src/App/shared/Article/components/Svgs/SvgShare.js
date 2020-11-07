import './style.scss';
import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { modalContext } from '../../../Modal/ModalProvider';
import { SignIn } from '../../../../features/auth';

export default function SvgShare({ article }) {
  const {
    handleModal,
    handleModalContent
  } = useContext(modalContext);

  const mainUser = useSelector(state => state.mainUser);
  const { isAuthenticate } = mainUser;

  const handleShareArticle = () => {
    if (!isAuthenticate) {
      handleModal();
      handleModalContent(<SignIn />)
      return;
    }

    console.log('hello from dislike article');
  }
  return (
    <div className='svg-holder'>
      <div>
        <svg
          id='share-btn'
          viewBox='0 0 24 24'
          preserveAspectRatio='xMidYMid meet'
          focusable='false'
          onClick={handleShareArticle}
        >
          <g>
            <path d='M11.7333 8.26667V4L19.2 11.4667L11.7333 18.9333V14.56C6.4 14.56 2.66667 16.2667 0 20C1.06667 14.6667 4.26667 9.33333 11.7333 8.26667Z'></path>
          </g>
        </svg>
      </div>
    </div>
  );
}
