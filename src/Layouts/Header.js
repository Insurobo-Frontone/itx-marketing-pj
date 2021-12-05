import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../style/Header.css';
// import whitelogo from '../img/whitelogo.svg';
// import listicon from '../img/listIcon.svg';
// import blacklogo from '../img/blacklogo.svg';

const Headers =  styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 30;
  font-size: 1rem;
  width: 100%;
  height: 100px;
  color: ${props => (props.className ? '#444444' : '#FFFFFF')};
  background: ${props => (props.className ? '#FFFFFF' : 'transparent')};
::after{
    width: 100%;
    content: "";
    position: absolute;
    top: 100%;
    height: 1px;
    background-color: #C4C4C4;
    z-index: 30;
}
`;

const Inner = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100px;
  padding: 0 7.8125%;
  align-items: center;
`;

const logoChange = document.getElementById('logo');
 
const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);


  // 스크롤 EVENT
  const updeateScroll = () => {
    setScrollPosition(window.scrollY);

  }
  useEffect(() => {
    window.addEventListener('scroll', updeateScroll);
  });

  // 마우스 호버시 로고 클레스 추가
  const handleMouseOver = () => {
    // const dropDownBg = document.getElementById('dropdown_bg');
    logoChange.classList.add('show');
    // dropDownBg.classList.add('show');
  }
  // 마우스 호버시 로고 클레스 제거
  const handleMouseOut = () => {
    logoChange.classList.remove('show');
  
  }
          
  return (
    <Headers className={scrollPosition > 1080 ? 'change_header': null}>
      <Inner>
        <div 
          id="logo" 
          className={scrollPosition > 1080 ? 'change_header': null}>
        </div>
        <div className="lnb">
          <nav>
            <ul
              className="main-menu toggle"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              <li>ITX Marketing
                <ul className="sub-menu">
                  <li><Link to='/summary'>개요</Link></li>
                  <li><Link to='/partners'>제휴사</Link></li>
                  <li><Link to='/recruit'>채용</Link></li>
                  <li><Link to='/contact'>Contact us</Link></li>
                </ul>
              </li> 
              <li>Business
                <ul className="sub-menu">
                  <li><Link to='/platform'>플랫폼</Link>
                    <ul className="sub-menu-dropdown">
                      <li>병원라운지</li>
                      <li>보험플러스</li>
                      <li>Market</li>
                    </ul>
                  </li>
                  <li><Link to='/?service=busi'>서비스</Link>
                    <ul className="sub-menu-dropdown">
                      <li>보장분석</li>
                      <li>보험비교</li>
                      <li>기업컨설팅</li>
                    </ul>
                  </li>
                  <li><Link to='/invest'>3분 재태크</Link></li>
                  <li><Link to='/?apply=busi'>상담신청</Link></li>
                </ul>
              </li>
              <li>상속증여연구소
                <ul className="sub-menu">
                  <li><Link to='/inherit'>연구소 소개</Link></li>
                  <li><Link to='/?service=inherit'>서비스</Link></li>
                  <li><Link to='/?experts=inherit'>전문가 그룹</Link></li>
                  <li><Link to='/?process=inherit'>프로세스</Link></li>
                  <li><Link to='/?apply=inherit'>상담신청</Link></li>
                </ul>
              </li>
              <li>기업컨설팅
                <ul className="sub-menu">
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
          </nav>
          <div></div>
        </div>
         
          <h2 className="toggle-btn"></h2>        
      </Inner>
    </Headers>
  )
}

export default Header;
