import React from 'react'
import Styles from './style.module.scss';

export default function index() {
  return (
    <div>
      <div className={Styles.notFound}>
        <div className={Styles.notFoundMsg}> Not Found </div>
      </div>
    </div>
  );
}
