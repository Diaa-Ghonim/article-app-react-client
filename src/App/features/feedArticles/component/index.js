import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFeedArticles } from '../actionsCreator';
import Loading from '../../../shared/Loading';
import ListOfArticles from '../../../shared/ListOfArticles';
import TryAgainLoading from '../../../shared/TryLoadingAgain';

export class index extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }

  componentDidMount() {
    if (!this.props.isFetched) {
      this.props.getFeedArticles();
    }
  }
  render() {
    return (
      <div>
        {this.props.isLoading ? (
          <div>
            {' '}
            <Loading />{' '}
          </div>
        ) : this.props.error.isError ? (
          <div>
            <TryAgainLoading tryAgainCallback={this.props.getArticles} />
          </div>
        ) : (
              <div>
                <ListOfArticles articles={this.props.articles} />
              </div>
            )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    articles: state.feed.articles,
    isLoading: state.feed.isLoading,
    isFetched: state.feed.isFetched,
    error: state.feed.error,
  };
};

const mapDispatchToProps = {
  getFeedArticles,
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
