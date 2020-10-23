import React from 'react'
import Style from './style.module.scss';

export default function index(props) {
  return (
    <div>
      <button className={Style.tryAgain} onClick={props.tryAgainCallback}>
        {' '}
        try again
      </button>
    </div>
  );
}
