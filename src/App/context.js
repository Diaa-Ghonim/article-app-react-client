import React from 'react';
import useModal from './modalHook';
import SignInPopup from './shared/SignInPopUp';
let ModalContext;
let { Provider } = (ModalContext = React.createContext());

const ModalProvider = ({ children }) => {
  const {
    modal,
    modalContent,
    handleModal,
    handleContent
  } = useModal();

  return (
    <Provider value={{ modal, modalContent, handleModal, handleContent }}>
      <SignInPopup />
      {children}
    </Provider>
  )

}
export { ModalContext, ModalProvider }