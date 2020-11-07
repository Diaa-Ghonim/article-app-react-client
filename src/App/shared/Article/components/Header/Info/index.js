import React from 'react'
import Style from '../style.module.scss';
import { NavLink } from 'react-router-dom';
export default ({ ownerName, dateOfCreate }) => {
  return (
    <div>
      <span> Writen By </span>
      <NavLink to={`/${ownerName}`} >
        <b> {ownerName} </b>
      </NavLink>
      <span> at </span>
      <span className={Style.articleDate}> {dateOfCreate} </span>
    </div>
  )
}
