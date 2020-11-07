import React from 'react'
import Style from './style.module.scss';

export default ({ tryLoadingAgain }) => {
  console.log('tryloading again component');
  return (
    <div>
      <button className={Style.tryAgain} onClick={tryLoadingAgain}>
        Try Again
      </button>
    </div>
  );
}
