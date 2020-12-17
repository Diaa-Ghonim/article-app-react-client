import React, { useState } from 'react'
import Style from './style.module.scss';

export default function ({ unfollowCallback }) {
  const [isHover, setIsHover] = useState(false);
  return (
    <div>
      <button
        className={Style.followBtn}
        onClick={unfollowCallback}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {
          isHover ? 'Unfollow' : 'Following'
        }
      </button>
    </div>
  )
}
