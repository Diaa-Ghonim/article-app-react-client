import React from 'react';
import Styles from './style.module.scss';

export default function index(props) {
  console.log(props);
  return (
    <div>
      <div className={Styles.notFound}>
        <div className={Styles.notFoundMsg}> This Page Not Found !! </div>
      </div>
    </div>
  );
}
