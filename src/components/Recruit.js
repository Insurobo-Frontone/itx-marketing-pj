import React from "react";             
import styled from "styled-components";
import visual from "../img/main/recruitVisual.png";

const Recruit = () => {
  return (
    <>
      <Container>
        <Center>
          <h2 className="section-title">
            <strong style={{color:"#C22229"}}>R</strong>
            e<strong>C</strong>
            r<strong>UIT</strong> 
            <span>&nbsp;ITX Marketing</span>
          </h2>
          <Line></Line>
          <P_TAG>ITX 마케팅과 함께할 다양한 분야의 전문가를 기다립니다.</P_TAG>
          <ImageContainter>
            <img src={visual} alt="ITX 인재채용" />
          </ImageContainter>
          <BoxContainer></BoxContainer>
        </Center>
      </Container>
    </>
  );
};

export default Recruit;

const Container = styled.div`
  width: 100%;
  height: 107.9rem;
`;

const Center = styled.div`
  padding-top: 15.6%;
  padding-left: 7.8%;
  padding-bottom: 25px;

  > .section-title{
    font-size: 3rem;
    font-family: 'GoyangDeogyang';
    color: #1A1A1A;
    > span {
      font-family: 'GoyangIlsan';
      display: inline-block;
      font-weight: 300;
    }
  }
`;

const Line = styled.div`
  height: 0.15rem;
  background-color: #1a1a1a;
  margin-top: 25px;
`;

const ImageContainter = styled.div`
  position: absolute;
  padding-left: 26%;
`;

const P_TAG = styled.p`
  position: absolute;
  z-index: 2;
  font-size: 1.25rem;
  padding-top: 25px;
  color: #444444;
`;

const BoxContainer = styled.div`
  position: relative;
  top: 45.5rem;
  left: 8.45rem;
  background-color: #f8f8f8;
  height: 733px;
  border-top-left-radius: 18.325rem;
  border-bottom-left-radius: 18.325rem;
`;
