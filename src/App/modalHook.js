import React, { useState } from 'react';

export default () => {
  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const handleContent = (content) => {
    setModalContent(content);
  }

  const handleModal = () => {
    setModal(!modal);
  }

  return { modal, modalContent, handleContent, handleModal };
}