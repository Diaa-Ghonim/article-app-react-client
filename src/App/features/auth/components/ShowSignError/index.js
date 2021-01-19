import React from 'react';
import Style from './style.module.scss';

export default ({ errorMsg }) => {
  return (
    <div className={Style.showError}>
      <div>{errorMsg}</div>
    </div>
  );
};
