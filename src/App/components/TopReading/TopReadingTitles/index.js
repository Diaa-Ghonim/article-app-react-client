import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.scss';
import { getTopReading } from '../actions';
import Loading from '../../../shared/Loading';
// import { TopReadingReducer } from '../reducer';
import { NavLink } from 'react-router-dom';
import TryLoadingAgain from '../../../shared/TryLoadingAgain';

export class index extends Component {

  
  componentDidMount() {
    this.props.getTopReading();
  }

  shouldComponentUpdate(prevProp, nextProp) {
    // console.log(prevProp, 'prevProp');
    // console.log(nextProp, 'nextProp');
    return true
  }
  componentDidUpdate() {
    /**
     * when store change if changes in mapState Props  receive new values
     * react redux will compare the values with previos valus by ===
     * and if fields changed or updated , react redux will call componentDidUpdate
     */
  }

  // handleClick = () => console.log('onclick')
  render() {
    // console.log(this.props.children);
    return (
      <div className='top-reading-container common-top-reading '>
        <div className='header common-top-reading border-common'>
          <h1>Top reading</h1>
        </div>
        {this.props.isLoading ? (
          <Loading />
        ) : this.props.error.isError ? (
            <div><TryLoadingAgain tryAgainCallback={this.props.getTopReading}/></div>
        ) : (
          <div className='top-reading-content'>
            {this.props.topReading.slice(0,10).map((article) => {
              return (
                <div
                  key={article.id}
                  className='content common-top-reading border-common'
                >
                  {' '}
                  <NavLink to={`/${article.ownerUsername}/${article.id}`}>
                    {' '}
                    {article.title}{' '}
                  </NavLink>{' '}
                </div>
              );
            })}

            <div className='showmore common-top-reading'>
              <NavLink to='/top-reading'>show more</NavLink>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps, 'for fun ')
  return {
  topReading: state.topReading.topReading,
  isLoading: state.topReading.isLoading,
  error: state.topReading.error,
  /**
   * this for fun with update component
   */
  // articles: state.articles
}
};

const mapDispatchToProps = {
  getTopReading,
};

export default connect(mapStateToProps, mapDispatchToProps)(index);


