import React from 'react';
import { ListOfTopReadingTitles } from '../../features/article/topReadingArticles';
import { ListOfBestWritersNames } from '../../features/user/bestWriters';
import Styles from './style.module.scss';
import ErrorBoundary from '../ErrorBoundry';

export default (props) => {
  console.log('sidebar');
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
};
