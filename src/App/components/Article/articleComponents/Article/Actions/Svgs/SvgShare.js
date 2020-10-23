import React, { Component } from 'react'
import './style.scss';

export default class SvgShare extends Component {
  render() {
    return (
      <div className='svg-holder'>
      <div>
          <svg
            id='share-btn'
            viewBox='0 0 24 24'
            preserveAspectRatio='xMidYMid meet'
            focusable='false'
          >
            <g>
              <path d='M11.7333 8.26667V4L19.2 11.4667L11.7333 18.9333V14.56C6.4 14.56 2.66667 16.2667 0 20C1.06667 14.6667 4.26667 9.33333 11.7333 8.26667Z'></path>
            </g>
          </svg>
        </div>
        </div>
    );
  }
}
