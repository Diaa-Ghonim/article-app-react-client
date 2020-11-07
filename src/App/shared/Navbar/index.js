import React, { Component } from 'react';
// import './navbar.scss';
import Dropdown from './Dropdown';
// import PropTypes from 'prop-types';
import Ul from './Ul';
import SearchForm from './SearchForm';

import {
  NavbarHolder,
  NavbarWrapper,
  NavbarContainer,
  NavbarFixed,
  Container,
  SearchFormContainer,
  Options,
  ShowDropdown,
  Svg,
  DropdownContainer,
} from './style';

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dropped: false,
    };
    this.showDropdown = React.createRef();
    this.dropdown = React.createRef();
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.hideDropdownWhenClickOutSideIt = this.hideDropdownWhenClickOutSideIt.bind(this);
  }

  static propTypes = {};
  componentDidMount() {
    document.body.addEventListener('click', this.hideDropdownWhenClickOutSideIt);
  }

  componentWillUnmount() {
    document.body.removeEventListener('click', this.hideDropdownWhenClickOutSideIt);
  }

  hideDropdownWhenClickOutSideIt(e) {
    if (
      this.dropdown.current &&
      !this.dropdown.current.contains(e.target) &&
      !this.showDropdown.current.contains(e.target)
    ) {
      this.makeDroppedStateFalse();
    }

  }

  hideDropdownAfterClickedOnListItemOrLink(e) {
    if (e.target.tagName === 'LI' || e.target.tagName === 'A') {
      this.makeDroppedStateFalse()
    }
  }

  toggleDropdown() {
    this.setState((state, props) => {
      return { dropped: !state.dropped };
    });
  }

  makeDroppedStateFalse() {
    this.setState((state, props) => {
      return { dropped: false };
    });
  }

  render() {
    const dropdown = this.state.dropped ? (
      <Dropdown dropped={this.state.dropped} />
    ) : (
        ''
      );

    return (
      <NavbarHolder>
        <NavbarWrapper>
          <NavbarContainer>
            <NavbarFixed>
              <Container>
                <Ul />
              </Container>
              <SearchFormContainer>
                <SearchForm />
              </SearchFormContainer>
              <Options>
                <ShowDropdown
                  ref={this.showDropdown}
                  onClick={this.toggleDropdown}
                >
                  <Svg viewBox='0 0 36 36'>
                    <path d='M2 10h32L18 26 2 10z'></path>
                  </Svg>
                </ShowDropdown>
                <DropdownContainer ref={this.dropdown} onClick={this.hideDropdownAfterClickedOnListItemOrLink.bind(this)}>
                  {dropdown}
                </DropdownContainer>
              </Options>
            </NavbarFixed>
          </NavbarContainer>
        </NavbarWrapper>
      </NavbarHolder>
    );
  }
}
