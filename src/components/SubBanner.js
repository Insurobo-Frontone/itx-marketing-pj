import React from 'react'
import styled from 'styled-components';
import linkBtn from "../img/common/halfArrow.svg";

const Container = styled.div`

`;
const GrayBox = styled.div`

`;
const TextWrap = styled.div`

`;
const ImagWrpa = styled.div`

`;
const LinkWrap = styled.ul`
  display: flex;
>li::after {
  content: '';
  display: block;
  width: 230px;
  height: 12px;
  background-image: url(${linkBtn});
  background-size: contain;
  background-repeat: no-repeat;
}
`;
const SubBanner = (props) => {
  return (
    <Container>
      <GrayBox>
        <div>
          <TextWrap>
            <p>{props.modifier}</p>
            <h2>아이티엑스마케팅</h2>
          </TextWrap>
          <ImagWrpa>
            <img src={props.image} alt="아이티엑스마케팅"/>
          </ImagWrpa>
        </div>
        <LinkWrap>
          <li><a href="#part1">{props.link1}</a></li>
          <li><a href="#part2">{props.link2}</a></li>
          <li><a href="#part3">{props.link3}</a></li>
        </LinkWrap>
      </GrayBox>
      

    </Container>
  )
}

export default SubBanner;
