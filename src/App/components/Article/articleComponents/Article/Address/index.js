import React, { Component } from 'react'
// import './style.scss';
import { NavLink } from 'react-router-dom';
import Style from './style.module.scss';
import Dropdown from './dropdown';

export default class Address extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      dropped: false,
      
    }
    this.dropdown = React.createRef();
    this.showDropdown = React.createRef();
  }
  
  toggleDropdown = (e)=> {
    this.setState((state, props) => {
      return {dropped: !state.dropped}
    })
  }

  componentDidMount() {
    document.addEventListener('click', (e) => {
      this.hideDropdown(e);
    })
  }

  hideDropdown(e) {
    if (
      this.dropdown.current &&
      !this.dropdown.current.contains(e.target) &&
      !this.showDropdown.current.contains(e.target)
    ) {
      this.setState((state, props) => {
        return { dropped: false };
      });
    } else if (
      this.dropdown.current &&
      this.dropdown.current.contains(e.target) &&
      (e.target.tagName === 'LI' || e.target.tagName === 'A')
    ) {
      this.setState((state, props) => {
        return { dropped: false };
      });
    }

  }
  
  render() {
    
    const { id, title,ownerUsername, ownerName, dateOfCreate, } = this.props.data;
    return (
      <>
        <div className={Style.addressAndDeleteContainer}>
          <div className={Style.address}><h1>
            <NavLink
              to={`/${ownerUsername}/${id}`}
            >
              {' '}
              {title}{' '}
            </NavLink>
          </h1></div>
          <div className={Style.deleteIconContainer} ref={this.showDropdown}>
            <div >
              <svg  viewBox="0 0 24 24" onClick={this.toggleDropdown}>
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
              </svg>
            </div>
            {this.state.dropped ? <div ref={this.dropdown}> <Dropdown data={this.props.data} /> </div> : ''}
          </div>
        </div>
        <div className={Style.writenBy}>
          <div>
            <span> Writen By </span>
            <NavLink
              to={`/${ownerName}`}
            >
              <b> {ownerName} </b>
            </NavLink>
            <span> at </span>
            <span className={Style.articleDate}> {dateOfCreate} </span>
          </div>
        </div>
      </>
    );
  }
}
