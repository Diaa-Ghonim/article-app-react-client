import React, { Component } from 'react';
import Address from './Address';
import Body from './Body';
import Actions from './Actions';
import './style.scss';
export default class Article extends Component {
  componentDidUpdate() {
    // console.log('update');
  }
  render() {
    // console.log(this.props.data, 'from article');
    return (
      <div className='article-wrapper'>
        <div className='article-container'>
          <Address data={this.props.data} />
          <Body data={this.props.data} />
          <Actions data={this.props.data} />
        </div>
      </div>
    );
  }
}
