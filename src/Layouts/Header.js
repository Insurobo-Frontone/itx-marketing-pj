import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import whitelogo from '../img/common/whitelogo.svg';
import listicon from '../img/common/listIcon.svg';
import blacklogo from '../img/common/blacklogo.svg';
import togglebtn from '../img/common/toggle_btn.svg';
import togglebtnblack from '../img/common/toggle_btn_black.svg';
import closebtn from '../img/common/closebtn.svg';

const Headers =  styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 30;
  font-size: 1rem;
  width: 100%;
  height: 100px;
  background-color: ${props => (props.isOpen ? '#FFFFFF' : 'transparent')};
  color: ${props => (props.isOpen ? '#323232' : '#FFFFFF')};
  &.change_header{
    color:${props => (props.className ? '#323232' : '#FFFFFF')};
    background-color: ${props => (props.className ? '#FFFFFF' : 'transparent')};
  }
  
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

  @media (max-width: 700px) {
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0 20px;
  }
`;
const Logo = styled.h2`
  display: flex;
  height: 100%;
  padding-right: 18.51851851851852%;
  margin-right: 3.5%;
  z-index: 31;
  background-image: url(${whitelogo});
  background-repeat: no-repeat;
  background-position: left center;
  background-size: contain;
  @media (max-width: 700px) {
    padding-right: 0;
    margin-right: 0;
    width: 124px;
    order: 1;
    background-image: url(${props => props.isOpen ? blacklogo : whitelogo});
  }
  &.change_header{
    background-image: url(${props => props.className ? blacklogo : whitelogo});
  }
  &.show {
    background-image: url(${blacklogo});
  }


`;

const Lnb = styled.div`
  width: 100%;
  @media (max-width: 700px) {
    display: ${props => (props.isOpen ? 'block' : 'none')};
    order: 3;
  }
  
> nav {
  position: relative;
  z-index: 30;
  /* overflow: scroll; */
}
> nav:hover + div {
  height: 610px;
  opacity: 1;
  @media (max-width: 700px){
    height: 100%;
  }
}
 > nav + div {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 0;
  opacity: 0;
  background: #FFFFFF;
  transition: all 0.3s;
  z-index: 29;
  @media (max-width: 700px){
    position: fixed;
    height: 100%;
    opacity: 1;
  }
}
> nav > .main-menu {
  display: flex;
  justify-content: space-between;
  height: 100px;
  overflow: hidden;

  @media (max-width: 700px){
    display: block;
    height: 100%;
  }
}

 > nav > .main-menu:hover{
  color: #323232;
  overflow: visible;
}

 > nav > .main-menu > li{
  position: relative;
  width: 14%;
  text-align: center;
  line-height: 100px;
  white-space: nowrap;
  flex-grow: 1;
  cursor: pointer;

  @media (max-width: 700px){
    line-height: 22.26px;
    padding: 29px 0;
    color: #323232;
    font-size: 1.25rem;

    &.active > .sub-menu{
      display: block;
    }
  }
}
> nav > .main-menu > li:hover::after {
  width: 100%;
  @media (max-width: 700px) {
    content: none;
  }
}
 > nav > .main-menu > li::after {
  content: "";
  display: block;
  position: absolute;
  top: 100%;
  width: 0;
  height: 3px;
  background-color: #C22229;
  transition: all 0.4s;
  margin-top: 1px;
  @media (max-width: 700px){
    display: none;
  }
}
 > nav > .main-menu > li > .sub-menu {
  position: absolute;
  width: 100%;
  z-index: 99;
  opacity: 1;
  transition: all 0.3s;
  color: #444444;

  @media (max-width: 700px){
    position: relative;
    text-align: start;
    width: 100%;
    transition: max-height 0.6s ease;
    padding-top: 26px;
    display: none;
  }
}
 > nav > .main-menu:hover > li > .sub-menu {
  opacity: 1;
  @media (max-width: 700px){
    
  }
}
 > nav > .main-menu > li > .sub-menu > li {
  line-height: 22.26px;
  padding: 1.5rem 0;
  position: relative;

  @media (max-width: 700px) {
    line-height: 15px;
    padding: 10px 0;
    font-size: 0.9375rem;
  }
}
.sub-menu-dropdown {
  text-align: start;
  line-height: 30px;
  font-size: 15px;
  padding-left: 35%;
}
.sub-menu-dropdown > li {
  display: flex;
  align-items: center;
}
.sub-menu-dropdown > li::before {
  content: '';
  display: flex;
  justify-content: flex-start;
  padding-right: 11px;
  width: 8px;
  height: 8px;
  background-image: url(${listicon});
  background-repeat: no-repeat;
  background-position: left;
  background-size: contain;
}
`;
const ToggleBtn = styled.div`
  width: 40px;
  height: 70px;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  display: none;
  z-index: 30;
  &.change_header{
    background-image: url(${props => props.isOpen ? closebtn : togglebtnblack});
  }
  @media (max-width: 700px) {
    order: 2;
    display: block;
    background-image: url(${props => props.isOpen ? closebtn : togglebtn});
    
  }
`;
 
const Header = ({ item }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isToggleOn, setToggleOn] = useState(false);
  
  const handleClick = () => {
    setToggleOn(!isToggleOn);
  }

  // 스크롤 EVENT
  const updeateScroll = () => {
    setScrollPosition(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener('scroll', updeateScroll);
  });

  const handleMouseOver = () => {
    const logoChange = document.getElementById('logo');
    logoChange.classList.add('show');
  }
  const handleMouseOut = () => {
    const logoChange = document.getElementById('logo');
    logoChange.classList.remove('show');
  }
  

 const activeMethod = (event) => {
   const current = event.currentTarget;
   const chkActive = current.classList.value.indexOf('active');
   console.log(current);
   closeMothodAll();

   if (chkActive === -1) {
     current.classList.add('active');
   }
 }

 const closeMothodAll = () => {
  let bx = document.getElementsByClassName('main-menu');

  for (let i = 0; i < bx[0].children.length; i++) {
    bx[0].children[i].classList.remove('active');
  }
 }

  return (
    <Headers
      className={scrollPosition > 300 ? 'change_header': null}
      isOpen={isToggleOn}
    >
      <Inner>
        <Logo
          id="logo"
          className=
          {scrollPosition > 300 ? 'change_header': null}
          isOpen={isToggleOn}
        >
        </Logo>
        <Lnb isOpen={isToggleOn}
        >
          <nav>
            <ul
              className="main-menu"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              isOpen={isToggleOn}           
            >
              <li onClick={activeMethod}>ITX Marketing 
                <ul 
                  className="sub-menu">
                  <li><Link to='/summary'>개요</Link></li>
                  <li><Link to='/partners'>제휴사</Link></li>
                  <li><Link to='/recruit'>채용</Link></li>
                  <li><Link to='/contact'>Contact us</Link></li>
                </ul>
              </li>
              <li onClick={activeMethod}>Business
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
              <li onClick={activeMethod}>상속증여연구소
                <ul className="sub-menu">
                  <li><Link to='/inherit'>연구소 소개</Link></li>
                  <li><Link to='/?service=inherit'>서비스</Link></li>
                  <li><Link to='/?experts=inherit'>전문가 그룹</Link></li>
                  <li><Link to='/?process=inherit'>프로세스</Link></li>
                  <li><Link to='/?apply=inherit'>상담신청</Link></li>
                </ul>
              </li>
              <li onClick={activeMethod}>기업컨설팅
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
        </Lnb>
        <ToggleBtn
          className={scrollPosition > 300 ? 'change_header': null}
          onClick={handleClick}
          isOpen={isToggleOn}
        >
        </ToggleBtn>        
      </Inner>
    </Headers>
  )
}

export default Header;
