import React from 'react'
import Style from './style.module.scss';

export default function index({ unfollowCallback }) {
  return (
    <div>
      <button className={Style.followBtn} onClick={unfollowCallback}>Following</button>
    </div>
  )
}
