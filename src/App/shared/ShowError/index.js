import React from 'react'
import Style from './style.module.scss';

export default function index({ errorMsg, className }) {
  console.log(className, 'classNmae')
  return (
    <div className={className || Style.showError}>
      <div>{errorMsg}</div>
    </div>
  )
}
