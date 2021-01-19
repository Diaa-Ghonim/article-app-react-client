import React from 'react';

export default (props) => {
  return (
    <svg className={props.className} viewBox='0 0 24 24'>
      <path d='M0 0h24v24H0z' fill='none' />
      <circle cx='12' cy='19' r='2' />
      <path d='M10 3h4v12h-4z' />
    </svg>
  );
};
