import React, { Component } from 'react';
import { HomeSvg, ProfileSvg, CreateArticleSvg } from './SvgComponents';

import { Ul, Li, Span, StyledNavLink } from './style';

export default class index extends Component {

  /**
   * important tip
   * 
   * @param {event} e 
   * 
   * this method to prevent error from react when user double click
   * in any NavLink beacuse i put inside it svgs that react doesn't know it 
   * 
   */
  stopPropagation = (e) => {
    e.stopPropagation();
  }

  render() {
    return (
      <>
        <Ul ref={this.test}>
          <Li>
            <StyledNavLink activeClassName='active' to='/home'>
              <HomeSvg stopPropagation={this.stopPropagation}/>
              <Span>Home</Span>
            </StyledNavLink>
          </Li>
          <Li className='profile-list'>
            <StyledNavLink to='/toaa'>
              <ProfileSvg stopPropagation={this.stopPropagation}/>
              <Span>Profile</Span>
            </StyledNavLink>
          </Li>

          <Li className='create-article-list'>
            <StyledNavLink to='/create-article'>
              <CreateArticleSvg stopPropagation={this.stopPropagation}/>
              <Span>Write Article</Span>
            </StyledNavLink>
          </Li>
        </Ul>
      </>
    );
  }
}
