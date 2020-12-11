import React from 'react'
import Style from '../style.module.scss';

export default function index({ errorMsg }) {
  return (
    <div>
      <div className={Style.actionError}>
        {errorMsg}
      </div>
    </div>
  )
}
