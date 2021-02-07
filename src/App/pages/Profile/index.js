import React, { useEffect } from 'react';
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { UserCard, actions } from '../../features/user/user';
import UserArticlesWithMiddleNav from './UserArticlesWithMiddleNav';
import Spinner from '../../shared/Spinner';
import ShowError from '../../shared/ShowError';
// const OtherComponent = React.lazy(() => import('../../../mod'));
import LazyComponent from '../../../LazyComponent';
import { useDocumentTitle } from '../../customHooks';
export default ({ match }) => {
  const {
    params: { username },
    url,
  } = match;
  const { getUser } = actions;
  const { user, isLoading, error } = useSelector(({ user }) => user);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser(username));
  }, [username]);

  useDocumentTitle(username);

  return (
    <div className='main-container-holder'>
      <div className='content-holder'>
        <div className='profile-page'>
          {/* <LazyComponent asyncComponent={import('../../../mod')} /> */}
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
                <UserCard user={user} />
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
