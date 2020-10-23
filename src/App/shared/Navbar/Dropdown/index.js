import React, { Component } from 'react';
import {
  Container,
  Rotate,
  Text,
  RegisterHolderLists,
  SignoutHolder,
  Ul,
  Li,
  StyledNavLink
} from './style';

export default class Dropdown extends Component {
  render() {
    // dropped={this.props.dropped}
    return (
      <>
        <Container>
          <Rotate></Rotate>
          <Text>Options : </Text>
          <RegisterHolderLists>
            <Ul>
              <Li>
                <StyledNavLink to='/signin' >
                  Sign in{' '}
                </StyledNavLink>
              </Li>
              <Li>
                <StyledNavLink to='/signup' >
                  Sign up
                </StyledNavLink>
              </Li>
              
            </Ul>
          </RegisterHolderLists>
          <SignoutHolder>
            <Ul>
              <Li>
                <StyledNavLink to='/'>Setting</StyledNavLink>
              </Li>
              <Li>
                <StyledNavLink to='/'>Sign out</StyledNavLink>
              </Li>
            </Ul>
          </SignoutHolder>
        </Container>
      </>
    );
  }
}
