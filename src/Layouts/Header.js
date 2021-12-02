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
    & > li {
    position: relative;
    > ul {

    }
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
          <li>
            Business
            <ul>
              <li>
              <Link to='/platform'>플랫폼</Link>
                <ul>
                  <li>병원라운지</li>
                  <li>보험플러스</li>
                  <li>Market</li>
                </ul>
              </li>
              <li>
                <Link to='/?service=busi'>서비스</Link>
                <ul>
                  <li>보장분석</li>
                  <li>보험비교</li>
                  <li>기업컨설팅</li>
                </ul>
              </li>
              <li><Link to='/invest'>3분 재태크</Link></li>
              <li><Link to='/?apply=busi'>상담신청</Link></li>
            </ul>
          </li>
          <li>
            상속증여연구소
            <ul>
              <li><Link to='/inherit'>연구소 소개</Link></li>
              <li><Link to='/?service=inherit'>서비스</Link></li>
              <li><Link to='/?experts=inherit'>전문가 그룹</Link></li>
              <li><Link to='/?process=inherit'>프로세스</Link></li>
              <li><Link to='/?apply=inherit'>상담신청</Link></li>
            </ul>
          </li>
          <li>
            기업컨설팅
            <ul>
              <li><Link to='/consulting'>컨설팅 소개</Link></li>
              <li><Link to='/?service=consult'>서비스</Link></li>
              <li><Link to='/?experts=consult'>전문가 그룹</Link></li>
              <li><Link to='/?process=consult'>프로세스</Link></li>
              <li><Link to='/?apply=consult'>상담신청</Link></li>
            </ul>
          </li>
          <li><Link to='/runnig'>러닝센터</Link></li>
          <li><Link to='/store'>지점 찾기</Link></li>
        </ul>
      </Nav>
    </HeaderWrap>
  )
}

export default Header
