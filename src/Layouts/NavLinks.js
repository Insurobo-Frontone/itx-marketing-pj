import React from 'react'
import styled from 'styled-components'
import { NavLink } from "react-router-dom";

// const activeStyle = {color: "green"}

const Navbar = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-left: 5.1%;
  
  > li {
    
  }
`;
const NavLinks = () => {
  return (
    <Navbar>
      <li>ITX Marketing</li>
      <li>Business</li>
      <li>상속증여연구소</li>
      <li>기업컨설팅</li>
      <li>러닝센터</li>
      <li>지점 찾기</li>
    </Navbar>
    
  );
}

export default NavLinks;
