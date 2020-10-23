import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserArticlesDisliked } from '../../../components/UserArticles/actions';
import Loading from '../../../shared/Loading';
// import TryLoadingAgain from '../../../shared/TryLoadingAgain';

import ListOfArticles from '../../../components/Article/articleComponents/ListOfArticles';

export class index extends Component {
  componentDidMount() {
    // console.log(this.props, 'three');
    const { getUserArticlesDisliked, username } = this.props;
    getUserArticlesDisliked(username);
  }

  componentDidUpdate() {}
  render() {
    const { userArticlesDisliked, isLoading, error } = this.props;
    return (
      <div>
        {isLoading ? (
          <Loading />
        ) : error.isError ? (
          <div>{error.msg}</div>
        ) : (
          <div>
            <ListOfArticles articles={userArticlesDisliked} />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userArticlesDisliked: state.userArticles.userArticlesDisliked,

  isLoading: state.userArticles.isLoading,
  error: state.userArticles.error,
  typeOfState: state.userArticles.typeOfState,
});

const mapDispatchToProps = {
  getUserArticlesDisliked,
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
