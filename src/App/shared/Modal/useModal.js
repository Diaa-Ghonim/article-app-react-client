

import { useState } from 'react';

export default function useModal() {

  const [isModal, setIsModal] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [modalRoute, setModalRoute] = useState('');

  const toggleModal = () => {
    setIsModal(!isModal)
  }

  const hideModal = () => {
    setIsModal(false);
  }

  const addModalContent = (content) => {
    if (content) setModalContent(content);
  }

  const addModalRoute = (route) => {
    if (route) setModalRoute(route);
  }

  return {
    isModal, toggleModal, hideModal, modalContent, addModalContent, modalRoute, addModalRoute
  };
}
