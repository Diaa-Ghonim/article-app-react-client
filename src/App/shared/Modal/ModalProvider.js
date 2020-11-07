

import React from 'react'
import useModal from './useModal';
import Modal from './Modal';

const modalContext = React.createContext({});
const { Provider } = modalContext;

function ModalProvider({ children }) {
  const { modal, handleModal, modalContent, handleModalContent } = useModal();
  let value = { modal, handleModal, modalContent, handleModalContent };

  return (
    <Provider value={value}>
      {children}
      <Modal />
    </Provider>
  )
}

export { ModalProvider, modalContext }