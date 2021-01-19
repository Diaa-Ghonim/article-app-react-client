import React from 'react';
import Style from '../style.module.scss';
import { NavLink } from 'react-router-dom';

export default ({ id, ownerUsername, title }) => {
  return (
    <div className={Style.name}>
      <h1>
        <NavLink to={`/${ownerUsername}/${id}`}>{title}</NavLink>
      </h1>
    </div>
  );
};
