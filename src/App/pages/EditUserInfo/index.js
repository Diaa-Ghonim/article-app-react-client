import React from 'react';
import { EditUserInfo } from '../../features/user/mainUser';

export default () => {
  return (
    <div className='main-container-holder'>
      <div className='content-holder'>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <EditUserInfo />
        </div>
      </div>
    </div>
  );
};
