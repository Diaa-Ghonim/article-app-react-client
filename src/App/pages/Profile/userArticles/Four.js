import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserArticlesSaved } from '../../../components/UserArticles/actions';
import Loading from '../../../shared/Loading';
// import TryLoadingAgain from '../../../shared/TryLoadingAgain';

import ListOfArticles from '../../../components/Article/articleComponents/ListOfArticles';

export class index extends Component {
  componentDidMount() {
    // console.log(this.props, 'four');
    const { getUserArticlesSaved, username } = this.props;
    getUserArticlesSaved(username);
  }

  componentDidUpdate() {}
  render() {
    const { userArticlesSaved, isLoading, error } = this.props;
    return (
      <div>
        {isLoading ? (
          <Loading />
        ) : error.isError ? (
          <div>{error.msg}</div>
        ) : (
          <div>
            <ListOfArticles articles={userArticlesSaved} />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userArticlesSaved: state.userArticles.userArticlesSaved,

  isLoading: state.userArticles.isLoading,
  error: state.userArticles.error,
  typeOfState: state.userArticles.typeOfState,
});

const mapDispatchToProps = {
  getUserArticlesSaved,
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
