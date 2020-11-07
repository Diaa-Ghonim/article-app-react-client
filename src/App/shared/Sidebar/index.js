import React, { Component } from 'react';
import { ListOfTopReadingTitles } from '../../features/topReadingArticles';
import { ListOfBestWritersNames } from '../../features/bestWriters';
import Styles from './style.module.scss';
import ErrorBoundary from '../ErrorBoundry';

export default (props) => {
  return (
    <div className={Styles.sidebarContent}>
      <ErrorBoundary>
        <ListOfTopReadingTitles />

      </ErrorBoundary>

      <ErrorBoundary>
        <ListOfBestWritersNames />
      </ErrorBoundary>

    </div>
  );
}
