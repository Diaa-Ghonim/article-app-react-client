import React from 'react';
import { useSelector } from 'react-redux';

import { HomeSvg, ProfileSvg, CreateArticleSvg } from './SvgComponents';

import { Ul, Li, Span, StyledNavLink } from './style';


export default function Index() {

  const stopPropagation = (e) => {
    e.stopPropagation();
  }

  const mainUser = useSelector(state => state.mainUser);
  const { isAuthenticate, user } = mainUser;

  return (
    <>
      <Ul >
        <Li>
          <StyledNavLink activeClassName='active' to='/home'>
            <HomeSvg stopPropagation={stopPropagation} />
            <Span>Home</Span>
          </StyledNavLink>
        </Li>
        {
          !isAuthenticate ? '' : <>
            <Li className='profile-list'>
              <StyledNavLink to={`/${user.username}`}>
                <ProfileSvg stopPropagation={stopPropagation} />
                <Span>{user.name}</Span>
              </StyledNavLink>
            </Li>

            <Li className='create-article-list'>
              <StyledNavLink to='/create-article'>
                <CreateArticleSvg stopPropagation={stopPropagation} />
                <Span>Write Article</Span>
              </StyledNavLink>
            </Li>
          </>
        }
      </Ul>
    </>
  );
}


