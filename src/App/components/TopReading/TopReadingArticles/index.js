import React, { Component } from 'react';
import { connect } from 'react-redux';
// import './style.scss';
import { getTopReading } from '../actions';
import Loading from '../../../shared/Loading';
import ListOfArticles from '../../Article/articleComponents/ListOfArticles';
import TryLoadingAgain from '../../../shared/TryLoadingAgain';

export class index extends Component {
  componentDidMount() {
    this.props.getTopReading();
  }

  render() {
    // console.log(this.props.topReading);
    return (
      <div>
        {this.props.isLoading ? (
          <div>
            {' '}
            <Loading />{' '}
          </div>
        ) : this.props.error.isError ? (
          <div>
            <TryLoadingAgain tryAgainCallback={this.props.getTopReading} />
          </div>
        ) : (
          <div>
            <ListOfArticles articles={this.props.topReading} />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  topReading: state.topReading.topReading,
  isLoading: state.topReading.isLoading,
  error: state.topReading.error,
});

const mapDispatchToProps = {
  getTopReading,
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
