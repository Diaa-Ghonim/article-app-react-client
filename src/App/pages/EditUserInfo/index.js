import React from 'react';
import { EditUser } from '../../features/user/mainUser';

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
          <EditUser />
        </div>
      </div>
    </div>
  );
};
