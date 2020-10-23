

import './style.scss';

import React, { Component } from 'react'

export default class index extends Component {

  
  render() {
    const { user } = this.props;
    // console.log(user);
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
                <button id='edit-btn'>edit</button>
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
}




