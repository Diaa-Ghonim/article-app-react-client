import React, { Component } from 'react';
// import PropTypes from 'prop-types'
import UserInfoCard from '../../components/User/UserInfoCard';
import UserArticlesWithMiddleNav from './UserArticlesWithMiddleNav';
// import Article from '../../components/Article/articleComponents/Article';
import './style.scss';
import { getUser } from '../../components/User/actions';
import Loading from '../../shared/Loading';
// import TryLoadingAgain from '../../shared/TryLoadingAgain';
import ShowError from '../../shared/ShowError';

import { connect } from 'react-redux';

export  class index extends Component {
 

  componentDidMount() {
    // if (!this.props.isFetched) {
      this.props.getUser(this.props.match.params.username);
    // }
    
  }

  componentDidUpdate() {
    // console.log('update profile');
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
                <div  className='user-card-holder'>
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
  getUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(index);

/**
 * <div id='user-card-holder' className='user-card-holder'>
          
          <UserInfoCard user={user}/>
        </div>
        <div id='middle-nav' className='middle-nav'>
          <MiddleNav username={user.username}/>
        </div>
        <div id='articles-holder' className='articles-holder'>
          <UserArticles path={path}/>
        </div>
 */