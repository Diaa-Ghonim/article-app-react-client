
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


export const Container = styled.div`
  position: absolute;
  right: 11px;
  top: 60px;
  z-index: 6;
  // display: ${(props) => (props.dropped ? 'block' : 'none')};

  width: 200px;
  min-height: 200px;
  padding: 5px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: rgba(101, 119, 134, 0.2) 0px 0px 15px,
    rgba(101, 119, 134, 0.15) 0px 0px 3px 1px;

`;

export const Rotate = styled.div`
  width: 13px;
  position: absolute;
  right: 11px;
  height: 13px;
  top: -7px;
  transform: rotate(45deg);
  background-color: white;
  border-top: 1px solid rgba(0, 0, 0, 0.15);
  border-left: 1px solid rgba(0, 0, 0, 0.15);
  transition: all .2s ;
`;

export const Text = styled.div`
  padding: 15px 0px;
  border-bottom : 1px solid #ddd;
  font-size: 16px;
  font-weight: 500;
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
`;

export const Li = styled.li`
  border-bottom: 1px solid #ddd;
  font-size: 0.9375rem;
  text-align: left;
  line-height: 1.3333;
  word-break: break-word;
  font-weight: 500;
  color: #050505;
  transition: all .2s ;
  
  &:hover {
    cursor: pointer;
    background-color: rgb(247, 247, 247);;
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: inherit;
  font-size: inherit;
  display: block;
  padding: 15px;
`;
export const RegisterHolderLists = styled.div``;
export const SignoutHolder = styled.div``;