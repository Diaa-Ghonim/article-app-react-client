import React from 'react';
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';
import { signOut } from '../../../features/auth';
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

export default function Index() {

  const mainUser = useSelector(state => state.mainUser);
  const { isAuthenticate } = mainUser;
  const dispatch = useDispatch();
  return (
    <>
      <Container>
        <Rotate></Rotate>
        <Text>Options : </Text>
        {
          !isAuthenticate ?
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
            :
            <SignoutHolder>
              <Ul>
                <Li>
                  <StyledNavLink to='/'>Setting</StyledNavLink>
                </Li>

                <Li style={{padding:'10px'}} onClick={() => dispatch(signOut())}>
                  Sign out
                  
                </Li>
              </Ul>
            </SignoutHolder>
        }

      </Container>
    </>
  );

}


