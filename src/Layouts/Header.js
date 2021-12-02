import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import logo from '../img/logo.png'


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
  > ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-left: 5.1%;
  }
`;


const Header = () => {
  return (
    <HeaderWrap>
      <Nav>
        <img src={logo} alt="아이티엑스마케팅"/>
        <ul>
          <li>
            ITX Marketing
            <ul>
              <li><Link to='/summary'>개요</Link></li>
              <li><Link to='/partners'>제휴사</Link></li>
              <li><Link to='/recruit'>채용</Link></li>
              <li><Link to='/contact'>Contact us</Link></li>
            </ul>
          </li>
          <li>Business</li>
          <li>상속증여연구소</li>
          <li>기업컨설팅</li>
          <li>러닝센터</li>
          <li>지점 찾기</li>
        </ul>
      </Nav>
    </HeaderWrap>
  )
}

export default Header
