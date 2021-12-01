import React from 'react'
import styled from 'styled-components'
import logo from '../img/logo.png'
import NavLinks from './NavLinks'


const HeaderWrap =  styled.header`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  display: flex;
  align-items: center;
  font-size: 1rem;
  padding: 0 7.8125%;
  width: 100%;
  height: 100px;
  color: #FFFFFF;
  border-bottom: 1px solid #C4C4C4;
`;

const Nav = styled.nav`
  display: flex;
  width: 100%;
  align-items: center;
  padding-right: 4.5%;
  > img {
    margin-right: 4%;
  }
`;

const Header = () => {
  return (
    <HeaderWrap>
      <Nav>
        <img src={logo} alt="아이티엑스마케팅"/>
        <NavLinks />
      </Nav>
    </HeaderWrap>
  )
}

export default Header
