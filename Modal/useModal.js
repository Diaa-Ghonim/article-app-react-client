

import { useState } from 'react'

export default function useModal() {

  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const handleModal = () => {
    setModal(!modal)
  }

  const handleModalContent = (content) => {
    if (content) {
      setModalContent(content);
    }
  }


  return { modal, handleModal, modalContent, handleModalContent };
}
