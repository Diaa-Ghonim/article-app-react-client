import React from 'react'
import Style from '../style.module.scss';
import { NavLink } from 'react-router-dom';
export default ({ ownerUsername, ownerName, dateOfCreate }) => {
  return (
    <div>
      <span> Writen By </span>
      <NavLink to={`/${ownerUsername}`} >
        <b> {ownerName} </b>
      </NavLink>
      <span> at </span>
      <span className={Style.articleDate}> {dateOfCreate} </span>
    </div>
  )
}
