import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Article from '../Article';
import { getArticle } from '../../actions';
import Loading from '../../../../shared/Loading';
// import Style from './style.module.scss';

export class index extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }

  componentDidMount() {
    this.props.getArticle(this.props.params);
  }
  render() {
    console.log(this.props, 'from list');

    return (
      <div className='main-container-holder'>
        {this.props.isLoading ? (
          <div>
            {' '}
            <Loading />{' '}
          </div>
        ) : this.props.error.isError ? (
          <div>{this.props.error.msg}</div>
        ) : (
          Object.keys(this.props.article).length > 0 ?(
            <div className='content-holder'>
              <Article data={this.props.article} />
            </div>
          ):''
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    article: state.articles.article,
    isLoading: state.articles.isLoading,
    error: state.articles.error,
  };
};

const mapDispatchToProps = {
  getArticle,
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
