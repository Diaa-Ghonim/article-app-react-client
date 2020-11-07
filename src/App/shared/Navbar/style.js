import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
// import { device } from '../../breakPoints';

export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  // color: ${(props) => (props.active ? 'black' : 'white')};
  &.active {
    border-bottom: 2px solid red;
    Svg {
      fill: red;
    }
    Span {
      color: red;
    }
  }
`;

export const NavbarHolder = styled.div`
  width: 100%;
  position: relative;
  min-width: 320px;
  height: 60px;
  // margin-bottom : 10px;
`;

export const NavbarWrapper = styled.div`
  position: fixed;
  min-width: 320px;
  width: 100%;
  z-index: 5;
`;

export const NavbarContainer = styled.div`

  background: white;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.1);
`;
export const NavbarFixed = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  max-width: 1111px;
`;

export const Container = styled.div`
  flex-grow: 1;
  display: flex;
  height: 100%;
`;

export const SearchFormContainer = styled.div`
  flex-grow: 1;
  height: 100%;
  display: flex;
  align-items: center;
  
`;

export const Options = styled.div`
  flex-grow: 1;
  position: relative;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  
`;
export const ShowDropdown = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 15px;
  
`;
export const DropdownContainer = styled.div`
`;
export const Svg = styled.svg`
  display: block;
  height: 30px;
  // fill: rgb(240, 235, 235);
  fill: #444;
  &:hover {
    cursor: pointer;
  }
`;
