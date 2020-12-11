

import React, { useContext, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router-dom';
import { modalContext } from './ModalProvider';
import Style from './style.module.scss';

export default function Modal({ modalRoute }) {

  const history = useHistory();
  const {
    // isModal,
    toggleModal,
    // hideModal,
    modalContent
  } = useContext(modalContext);

  function onHideModal(evt) {
    // console.log(evt);
    if (window.innerWidth <= 400) {
      if (modalRoute) {
        toggleModal(); /** also you can use hideModal */
        history.push(modalRoute);
      }
    }
  }

  useEffect(() => {
    window.addEventListener('resize', onHideModal);
    return () => {
      window.removeEventListener('resize', onHideModal);
    }
  }, []);

  // if (isModal) {
  return ReactDOM.createPortal(
    <div className={Style['modal-wrapper']} >
      <div className={Style['modal-container']} onClick={toggleModal} >
        <div className={Style['modal-content-wrapper']}  >
          <div
            className={Style['close-modal-container']}>

            <button
              className={Style['close-button']}
              onClick={toggleModal} >
              close
              </button>

          </div>

          <div
            className={Style['madal-content-container']}
          >
            <div
              className={Style['modal-content']}
              onClick={(e) => { /**console.log(e.target); */ e.stopPropagation() }}

            >
              {modalContent}
            </div>

          </div>
        </div>
      </div>
    </div>,
    document.querySelector('#root')
  )
  // } else {
  //   return ''
  // }
}
