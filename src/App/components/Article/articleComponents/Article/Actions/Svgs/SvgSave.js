import React, { Component } from 'react';
import './style.scss';

export default class SvgSave extends Component {
  constructor(props) {
    super(props);

    this.state = {
      saved: true,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState((state, props) => {
      return { saved: !state.saved };
    });
  }

  render() {
    return (
      <div className='svg-holder'>
        <div>
          <svg
            onClick={this.toggle}
            id='save-btn'
            className={this.state.saved ? 'svg-fill' : ''}
            viewBox='0 0 24 24'
            preserveAspectRatio='xMidYMid meet'
            focusable='false'
          >
            <g>
              <path d='M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z'></path>
            </g>
          </svg>
        </div>
      </div>
    );
  }
}
