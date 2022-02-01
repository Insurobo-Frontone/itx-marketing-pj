import React from "react";
import styled from "styled-components";
import { NavLink } from 'react-router-dom';
// import button from "../../img/sub/platformButton.svg";

const TopBox = (props) => {
  return (
    <Container>
      <GrayBox>
        <div>
          <p>아이티엑스마케팅은<br />
            차별화된 다양한 비즈니스 플랫폼을 제공합니다.
          </p>
        </div>

        <ListBox>
          <li><NavLink to='/platform?personal'>개인영업</NavLink></li>
          <li>법인영업</li>
          <li><NavLink to='/platform?insuplus'>보험플러스</NavLink></li>
          <li><NavLink to='/platform?Market'>DB Market</NavLink></li>
        </ListBox>
      </GrayBox>
    </Container>
  );
};

export default TopBox;

const Container = styled.section`
  position: relative;
  padding-left: 12.96875%;
  @media (max-width: 700px) {
    padding-left: 0%;
  }
`;
const GrayBox = styled.div`
  background-color: #f8f8f8;
  > div {
    padding: 7.7% 0 26.15% 15%;
    /* > h2 {
      color: #1a1a1a;
      font-size: 2.5rem;
      padding-bottom: 2%;
    } */
    p {
      font-size: 1.5em;
    }
  }
  @media (max-width: 700px) {
    > div {
      padding: 7.7% 0 7% 7%;
      > h2 {
        font-size: 1.375rem;
      }
      > p {
        font-size: 0.8125rem;
        padding-bottom: 115%;
      }
    }
  }
`;

const ListBox = styled.ul`
  display: flex;
  padding-bottom: 6.04%;
  padding-left: 37%;
  > li {
    padding-top: 1.7%;
    padding-left: 1.5%;
    width: 20%;
    height: 60px;
    margin-right: 20px;
    background-color: #B8292D; 
    color: #ffffff;

    > img {
      display: inline;
      float: right;
      padding-right: 9.27%;
      padding-top: 3.1%;
    }
  }
`;
