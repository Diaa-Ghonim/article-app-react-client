
import React from 'react'
import { SignUp } from '../../features/auth';

export default function index() {
  return (
    <div className='main-container-holder'>
      <div className='content-holder'>
        <div style={{ paddingTop: '25px' }}>
          <SignUp />
        </div>

      </div>
    </div>
  )
}
