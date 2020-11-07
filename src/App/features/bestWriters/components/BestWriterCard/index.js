
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import Style from './style.module.scss';
import FollowBtn from '../../../../shared/FollowBtn';

export default class index extends Component {
  render() {
    const { bestWriter } = this.props
    return (
      <div>
        <div className={Style.userInfoWrapper}>
          <div className={Style.userInfoContainer}>
            <div className={Style.userImageContainer}>
              <div className={Style.userImageParent}>
                <NavLink to={`/${bestWriter.username}`}>
                  <div
                    className={Style.userImage}
                    style={{ backgroundImage: `url(${bestWriter.profImage})` }}
                  >
                  </div>
                </NavLink>
              </div>
            </div>
            <div className={Style.userDetailsContainer}>
              <div className={Style.userDetails}>
                <div>
                  <NavLink to={`/${bestWriter.username}`}>
                    {bestWriter.name}
                  </NavLink>
                </div>
                <p>{`@${bestWriter.username}`}</p>

                <p>* rate : {bestWriter.rate} </p>
              </div>
            </div>
            <div className={Style.followBtnContainer}>
              <FollowBtn followCallback={() => console.log('follow')} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
