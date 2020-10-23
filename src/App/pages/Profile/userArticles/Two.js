import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserArticlesLiked } from '../../../components/UserArticles/actions';
import Loading from '../../../shared/Loading';
// import TryLoadingAgain from '../../../shared/TryLoadingAgain';

import ListOfArticles from '../../../components/Article/articleComponents/ListOfArticles';

export class index extends Component {
  componentDidMount() {
    // console.log(this.props, 'two');
    const { getUserArticlesLiked, username } = this.props;
    getUserArticlesLiked(username);
  }

  componentDidUpdate() {}
  render() {
    const { userArticlesLiked, isLoading, error } = this.props;
    return (
      <div>
        {isLoading ? (
          <Loading />
        ) : error.isError ? (
          <div>{error.msg}</div>
        ) : (
          <div>
            <ListOfArticles articles={userArticlesLiked} />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userArticlesLiked: state.userArticles.userArticlesLiked,

  isLoading: state.userArticles.isLoading,
  error: state.userArticles.error,
  typeOfState: state.userArticles.typeOfState,
});

const mapDispatchToProps = {
  getUserArticlesLiked,
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
