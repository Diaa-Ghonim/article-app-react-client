import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import Article from '../Article';
import { getArticles } from '../../actions';
import Loading from '../../../../shared/Loading';
import ListOfArticles from '../ListOfArticles';
import TryAgainLoading from '../../../../shared/TryLoadingAgain';

export class index extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }

  componentDidMount() {
    if (!this.props.isFetched) {
      this.props.getArticles();
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
              <TryAgainLoading tryAgainCallback={this.props.getArticles}/>
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
    articles: state.articles.articles,
    isLoading: state.articles.isLoading,
    isFetched: state.articles.isFetched,
    error: state.articles.error,
  };
};

const mapDispatchToProps = {
  getArticles,
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
