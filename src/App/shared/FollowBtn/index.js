
import React from 'react'
import Style from './style.module.scss';

export default function index(props) {
  return (
    <div>
      <button className={Style.followBtn} onClick={props.followCallback}>Follow</button>
    </div>
  )
}
