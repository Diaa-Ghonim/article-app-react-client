
import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import Style from '../style.module.scss';
import Dropdown from '../Dropdown';

export default ({ article }) => {

  const [isDropped, setIsDropped] = useState(false);
  let dropdown = useRef();
  let dropdownIconContainer = useRef();

  const mainUser = useSelector(state => state.mainUser);
  const { isAuthenticate } = mainUser;

  useEffect(() => {
    if (isDropped) {
      document.addEventListener('click', hideDropdown);
    }

    return () => {
      document.removeEventListener('click', hideDropdown);

    }
  }, [isDropped]);

  const hideDropdown = (e) => {
    console.log('hide dropdown');

    if (
      dropdown.current &&
      !dropdown.current.contains(e.target) &&
      !dropdownIconContainer.current.contains(e.target)
    ) {
      setIsDropped(false);
    } else if (
      dropdown.current &&
      dropdown.current.contains(e.target) &&
      (e.target.tagName === 'LI' || e.target.tagName === 'A')
    ) {
      setIsDropped(false);
    }

  }

  const handleDropdown = () => {
    if (!isAuthenticate) return;
    setIsDropped(!isDropped)
  }
  return (
    <div className={Style.dropdownIconContainer} ref={dropdownIconContainer}>
      <div >
        <svg viewBox="0 0 24 24" onClick={handleDropdown}>
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
        </svg>
      </div>
      {isDropped ? <div ref={dropdown}> <Dropdown article={article} /> </div> : ''}
    </div>
  )
}
