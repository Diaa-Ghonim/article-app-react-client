import './style.scss';
import React, { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { modalContext } from '../../../../../shared/Modal/ModalProvider';
import { EditUserInfo, followUser, unfollowUser } from '../../../mainUser';
import FollowBtn from '../../../../../shared/FollowBtn';
import UnfollowBtn from '../../../../../shared/UnfollowBtn';
import { useHistory } from 'react-router-dom';


export default ({ user }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { toggleModal, addModalContent, addModalRoute } = useContext(modalContext);
  const mainUser = useSelector(({ mainUser }) => (mainUser));
  const handleEditButton = () => {
    if (window.innerWidth <= 400) {
      return history.push(`/${user.username}/edit-user`);
    }
    toggleModal();
    addModalRoute(`/${user.username}/edit-user`);
    addModalContent(<EditUserInfo />);
  }



  const isFollowing = mainUser.user.following.find(followed => followed.username === user.username);
  // const label = isFollowing ? 'Following' : 'Follow';
  // const onFollow = (e) => {
  //   isFollowing ? dispatch(unfollowUser(user.username)) : dispatch(followUser(user.username))
  // }
  return (
    <div >
      <div className='user-info-wrapper'>
        <div className='user-info-container'>
          <div className='user-image'>
            <div>
              <div
                style={{ backgroundImage: `url(${process.env.REACT_APP_API_URL}/images/${user.profImage})` }}
              ></div>
            </div>
          </div>
          <div className='user-name'>
            <div>
              <div>{user.name}</div>
            </div>
            {
              mainUser.user.id === user.id ? (
                <div style={{ padding: '10px', display: 'flex', justifyContent: 'center' }}>
                  <div>
                    <button id='edit-btn' onClick={handleEditButton}>edit</button>
                  </div>
                </div>
              ) : (
                  <div style={{ padding: '10px', display: 'flex', justifyContent: 'center' }}>
                    {isFollowing ? (
                      <UnfollowBtn
                        unfollowCallback={() => dispatch(unfollowUser(user.username))}
                      // label={label}
                      />
                    ) : (
                        <FollowBtn
                          followCallback={() => dispatch(followUser(user.username))}
                        // label={label}
                        />
                      )}
                  </div>
                )
            }
          </div>
          <div className='user-info'>
            <p>* born in {user.birthDay}</p>
            <p>* rate : {user.rate} </p>
            <p>* {user.bio} </p>
          </div>
        </div>
      </div>
    </div>
  );
}




