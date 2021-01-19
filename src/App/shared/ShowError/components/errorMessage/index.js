import React from 'react';
import Style from './style.module.scss';

export const ErrorMessage = ({ errorMsg }) => {
  return (
    <div>
      <p className={Style.errorMessageParagraph}>{errorMsg}</p>
    </div>
  );
};
