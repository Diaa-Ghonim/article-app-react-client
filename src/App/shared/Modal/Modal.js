

import React, { useContext, useEffect, useLayoutEffect, useMemo } from 'react';
import ReactDOM from 'react-dom';
import { modalContext } from './ModalProvider';
import Style from './style.module.scss';

export default function Modal() {

  const {
    modal,
    handleModal,
    modalContent
  } = useContext(modalContext);

  useMemo(() => {
    console.log('lay out');
    if (modal) {
      document.body.style.marginRight = '17px';
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.marginRight = '0px';
      document.body.style.overflowY = 'scroll';

    }

  }, [modal])

  if (modal) {
    return ReactDOM.createPortal(
      <div className={Style.teet}>
        <div className={Style.modalOverLay} onClick={handleModal} >
          <div
            className={Style.modalWrapper}
            onClick={(e) => { /**console.log(e.target); */ e.stopPropagation() }}>

            <div
              className={Style.closeModalContainer}>

              <button
                className={Style.closeButton}
                onClick={handleModal} >
                close
            </button>

            </div>

            <div>
              {modalContent}
            </div>

          </div>

        </div>
      </div>,
      document.querySelector('#modal-root')
    )
  } else {
    return ''
  }
}
