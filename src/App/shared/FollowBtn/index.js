
import React from 'react'
import Style from './style.module.scss';

export default function index({ followCallback }) {
  return (
    <div>
      <button className={Style.followBtn} onClick={followCallback}>Follow</button>
    </div>
  )
}
