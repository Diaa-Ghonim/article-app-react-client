import React from 'react';
import Style from './style.module.scss';
import TryLoadingAgain from './components/TryLoadingAgain';
import { ErrorMessage } from './components/errorMessage';

export default function index({ error, tryLoadingAgain }) {
  // console.log(error, tryLoadingAgain, '=> try again and error');
  if (error.status && error.status === 404) {
    return (
      <div className={Style.errorContainer}>
        <ErrorMessage errorMsg={error.msg} />
      </div>
    );
  }
  return (
    <div className={Style.errorContainer}>
      <ErrorMessage errorMsg={error.msg} />
      <TryLoadingAgain tryLoadingAgain={tryLoadingAgain} />
    </div>
  );
}
