

import React from 'react';

const style = {
  fill: 'red',
  height: '24px',
  width: '24px',
  position: 'absolute',
  top: '39px',
  right: '5px',
}

export default (props) => {
  return (
    <svg className={props.className} viewBox="0 0 24 24" ><path d="M0 0h24v24H0z" fill="none" /><circle cx="12" cy="19" r="2" /><path d="M10 3h4v12h-4z" /></svg>
  )
}