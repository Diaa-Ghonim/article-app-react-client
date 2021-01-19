import React from 'react';
import useModal from './useModal';
import Modal from './Modal';

const modalContext = React.createContext({});
const { Provider } = modalContext;

function ModalProvider({ children }) {
  let {
    isModal,
    toggleModal,
    hideModal,
    modalContent,
    addModalContent,
    modalRoute,
    addModalRoute,
  } = useModal();
  let value = {
    isModal,
    toggleModal,
    hideModal,
    modalContent,
    addModalContent,
    addModalRoute,
  };
  // useMemo(() => {
  if (isModal) {
    document.body.style.marginRight = '17px';
    document.body.style.overflowY = 'hidden';
  } else {
    document.body.style.marginRight = '0px';
    document.body.style.overflowY = 'scroll';
  }
  console.log(value);
  // }, [isModal]);
  return (
    <Provider value={value}>
      {children}
      {isModal ? <Modal modalRoute={modalRoute} /> : ''}
    </Provider>
  );
}

export { ModalProvider, modalContext };
