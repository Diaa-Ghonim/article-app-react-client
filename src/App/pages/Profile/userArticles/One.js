import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getUserArticles,

} from '../../../components/UserArticles/actions';
import Loading from '../../../shared/Loading';
// import TryLoadingAgain from '../../../shared/TryLoadingAgain';

import ListOfArticles from '../../../components/Article/articleComponents/ListOfArticles';

export class index extends Component {
 
  componentDidMount() {
    // console.log(this.props, 'one');
    const { getUserArticles, username } = this.props;
    getUserArticles(username);
  }

  componentDidUpdate() {}
  render() {
    const { userArticles, isLoading, error } = this.props;
    return (
      <div>
        {isLoading ? (
          <Loading />
        ) : error.isError ? (
          <div>{error.msg}</div>
        ) : (
          <div>
            <ListOfArticles articles={userArticles} />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userArticles: state.userArticles.userArticles,

  isLoading: state.userArticles.isLoading,
  error: state.userArticles.error,
  typeOfState: state.userArticles.typeOfState,
});

const mapDispatchToProps = {
  getUserArticles,
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
