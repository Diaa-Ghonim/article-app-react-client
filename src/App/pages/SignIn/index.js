import React from 'react';
import { SignIn } from '../../features/auth';

export default function Index() {
  return (
    <div className='main-container-holder'>
      <div className='content-holder'>
        <div style={{ paddingTop: '50px' }}>
          <SignIn />
        </div>
      </div>
    </div>
  );
}
