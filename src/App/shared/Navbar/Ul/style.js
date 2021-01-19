import styled from 'styled-components';
import { device } from '../../../breakPoints';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  // color: ${(props) => (props.active ? 'black' : 'white')};
  &.active {
    border-bottom: 2px solid #ec173f;
    Svg {
      // fill: red;
      fill: #ec173f;
    }
    Span {
      // color: red;
      color: #ec173f;
    }
  }
`;
export const Ul = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  list-style-type: none;
`;
/**
 * her i styled list and when hover
 * change color of two children
 * span and svg
 */
export const Li = styled.li`
  // padding: 5px 10px;
  cursor: pointer;
  display: flex;
  &:hover {
    span {
      color: #ec173f;
    }
    svg {
      fill: #ec173f;
    }
  }
`;

export const Span = styled.span`
  // color: rgb(240, 235, 235);
  // color: #333;
  color: #337ab7;
  font-weight: bold;
  padding: 5px;
  @media ${device.tablet} {
    display: none;
  }
`;
