

import './style.scss';

import React, { useContext } from 'react';
import { modalContext } from '../../../../shared/Modal/ModalProvider';
import { EditUserInfo } from '../../../mainUser';

export default ({ user }) => {

  const { handleModal, handleModalContent } = useContext(modalContext);

  const handleEditButton = () => {
    handleModal();
    handleModalContent(<EditUserInfo />);
  }
  return (
    <div >
      <div className='user-info-wrapper'>
        <div className='user-info-container'>
          <div className='user-image'>
            <div>
              <div
                style={{ backgroundImage: `url(${user.profImage})` }}
              ></div>
            </div>
          </div>
          <div className='user-name'>
            <div>
              <div>{user.name}</div>
            </div>
            <div>
              <button id='edit-btn' onClick={handleEditButton}>edit</button>
            </div>
          </div>
          <div className='user-info'>
            <p>* born in {user.birthDay}</p>
            <p>* rate : {user.rate} </p>
            <p>* {user.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
}




