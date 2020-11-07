import React, { Component } from 'react';
import './style.scss';

import { UserInfoCard, actions } from '../../features/user';
import UserArticlesWithMiddleNav from './UserArticlesWithMiddleNav';
import Loading from '../../shared/Loading';
import ShowError from '../../shared/ShowError';

import { connect } from 'react-redux';

export class index extends Component {


  componentDidMount() {
    console.log(this.props);

    // if (!this.props.isFetched) {
    this.props.getUser(this.props.match.params.username);
    // }

  }

  render() {
    const { user, isLoading, error } = this.props;
    const { url } = this.props.match;
    // console.log(this.props, 'prof');
    return (
      <div className='main-container-holder'>
        <div className='content-holder'>
          <div className='profile-page'>
            {isLoading ? (
              <Loading />
            ) : error.isError ? (
              <ShowError errorMsg={error.msg} />
            ) : (
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
                )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.user,
  isLoading: state.user.isLoading,
  isFetched: state.user.isFetched,
  error: state.user.error,
});

const mapDispatchToProps = {
  getUser: actions.getUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(index);

