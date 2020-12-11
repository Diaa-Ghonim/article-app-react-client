
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Style from './style.module.scss';
import FollowBtn from '../../../../../shared/FollowBtn';
import UnfollowBtn from '../../../../../shared/UnfollowBtn';
import { followUser, unfollowUser } from '../../../mainUser';

export default ({ bestWriter }) => {
  const dispatch = useDispatch();
  const mainUser = useSelector(({ mainUser }) => (mainUser));
  const isFollowing = mainUser.user.following.find(followed => followed.username === bestWriter.username);
  const isMeBestWriter = mainUser.user.username === bestWriter.username;
  return (
    <div>
      <div className={Style.userInfoWrapper}>
        <div className={Style.userInfoContainer}>
          <div className={Style.userImageContainer}>
            <div className={Style.userImageParent}>
              <NavLink to={`/${bestWriter.username}`}>
                <div
                  className={Style.userImage}
                  style={{ backgroundImage: `url(${process.env.REACT_APP_API_URL}/images/${bestWriter.profImage})` }}
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

            {
              !isMeBestWriter ? (


                isFollowing ? (
                  <UnfollowBtn
                    unfollowCallback={() => dispatch(unfollowUser(bestWriter.username))}
                  />
                ) : (
                    <FollowBtn
                      followCallback={() => dispatch(followUser(bestWriter.username))}
                    />
                  )

              ) : (
                  ''
                )
            }
          </div>

        </div>
      </div>
    </div>
  );
}


