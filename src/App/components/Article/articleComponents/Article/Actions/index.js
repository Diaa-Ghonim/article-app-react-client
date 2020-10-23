import React, { Component } from 'react';
import { SvgLike, SvgDislike, SvgSave, SvgShare } from './Svgs';
import './style.scss';

export default class index extends Component {
  render() {
    return (
      <>
        <div className='article-actions'>
          <SvgLike data={this.props.data}/>
          <SvgDislike data={this.props.data}/>
          <SvgShare data={this.props.data}/>
          <SvgSave data={this.props.data}/>
        </div>
      </>
    );
  }
}
