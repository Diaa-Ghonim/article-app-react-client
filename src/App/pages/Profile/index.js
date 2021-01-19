import React, { useEffect } from 'react';
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { UserInfoCard, actions } from '../../features/user/user';
import UserArticlesWithMiddleNav from './UserArticlesWithMiddleNav';
import Spinner from '../../shared/Spinner';
import ShowError from '../../shared/ShowError';

export default ({ match }) => {
  const {
    params: { username },
    url,
  } = match;
  const dispatch = useDispatch();
  const { getUser } = actions;
  useEffect(() => {
    dispatch(getUser(username));
  }, [username]);

  const { user, isLoading, error } = useSelector(({ user }) => user);

  return (
    <div className='main-container-holder'>
      <div className='content-holder'>
        <div className='profile-page'>
          {isLoading ? (
            <Spinner />
          ) : error ? (
            <ShowError
              error={error}
              tryLoadingAgain={() => getUser(username)}
            />
          ) : user ? (
            <>
              <div className='user-card-holder'>
                <UserInfoCard user={user} />
              </div>
              <div className='user-articles-with-middle-nav'>
                <UserArticlesWithMiddleNav
                  username={user.username}
                  path={url}
                />
              </div>
            </>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
};
