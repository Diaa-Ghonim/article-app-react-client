import React from 'react';
import { useDispatch } from 'react-redux';
import Style from './style.module.scss';

export default ({ tryLoadingAgain }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        className={Style.tryAgain}
        onClick={() => dispatch(tryLoadingAgain())}
      >
        Try Again
      </button>
    </div>
  );
};
