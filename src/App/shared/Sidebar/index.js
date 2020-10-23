import React, { Component } from 'react';
import TopReadingTitles from '../../components/TopReading/TopReadingTitles';
import BestWriters from '../../components/BestWriters/BestWritersNames';
import Styles from './style.module.scss';
import ErrorBoundary from '../ErrorBoundry';
// const styles = require('./style.module.scss');

export default class index extends Component {

  render() {
    return (
      <div className={Styles.sidebarContent}>
        <ErrorBoundary>
        <TopReadingTitles /> 
          
        </ErrorBoundary>

        <ErrorBoundary>
        <BestWriters />
        </ErrorBoundary>
        
      </div>
    );
  }
}
