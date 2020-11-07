import React, { Component } from 'react';
import { connect } from 'react-redux';
// import './style.scss';
import { getBestWriters } from '../../actions';
import Loading from '../../../../shared/Loading';
import TryLoadingAgain from '../../../../shared/TryLoadingAgain';
import BestWriterCard from '../BestWriterCard';

export class index extends Component {
  componentDidMount() {
    this.props.getBestWriters();
  }

  render() {
    // console.log(this.props.bestWriters);
    return (
      <div>
        {this.props.isLoading ? (
          <div>
            {' '}
            <Loading />{' '}
          </div>
        ) : this.props.error.isError ? (
          <div>
            <TryLoadingAgain tryAgainCallback={this.props.getBestWriters} />
          </div>
        ) : (
              <div>
                {this.props.bestWriters.map((bestWriter) => {
                  return <BestWriterCard key={bestWriter.id} bestWriter={bestWriter} />;
                })}
              </div>
            )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  bestWriters: state.bestWriters.bestWriters,
  isLoading: state.bestWriters.isLoading,
  error: state.bestWriters.error,
});

const mapDispatchToProps = {
  getBestWriters,
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
