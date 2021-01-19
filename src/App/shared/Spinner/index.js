import React from 'react';
import Styles from './style.module.scss';
export default function index() {
  return (
    <div className={Styles.ParentLoading}>
      <div className={Styles.loading}></div>
    </div>
  );
}
