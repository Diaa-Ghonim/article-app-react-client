import React, { Component } from 'react';
import './style.scss';

import { connect } from 'react-redux';
import { getBestWriters } from '../actions';
import Loading from '../../../shared/Loading';
import TryLoadingAgain from '../../../shared/TryLoadingAgain';
import { NavLink } from 'react-router-dom';

export class index extends Component {
  componentDidMount() {
    this.props.getBestWriters();
  }

  render() {
    return (
      <div className='best-writers-container common'>
        <div className='header common'>
          <h1>Best writers</h1>
        </div>
        {this.props.isLoading ? (
          <Loading />
        ) : this.props.error.isError ? (
          <div>
            <TryLoadingAgain tryAgainCallback={this.props.getBestWriters} />
          </div>
        ) : (
          <div className='best-writers-content'>
            {this.props.bestWriters.slice(0, 10).map((bestWriter) => {
              return (
                <div key={bestWriter.id} className='content common'>
                  {' '}
                  <NavLink to={`/${bestWriter.username}`}>{bestWriter.name}</NavLink>{' '}
                </div>
              );
            })}

            <div className='showmore common'>
              <NavLink to='/best-writers'>show more</NavLink>
            </div>
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
