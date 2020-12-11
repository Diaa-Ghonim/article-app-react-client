import './style.scss';
import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import { modalContext } from '../../../../../../shared/Modal/ModalProvider';
import { SignIn } from '../../../../../../features/auth';
import { useHistory } from 'react-router-dom';

export default function SvgShare({ article }) {
  const history = useHistory();
  const { toggleModal, addModalContent, addModalRoute } = useContext(modalContext);
  const { isAuthenticate } = useSelector(state => state.mainUser);

  const handleShareArticle = () => {
    if (!isAuthenticate) {
      if (window.innerWidth <= 400) {
        return history.push('/signin');

      } else {
        toggleModal();
        addModalRoute('/signin');
        addModalContent(<SignIn />)
        return;
      }
    }
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
