import React from 'react';
import styled from "styled-components";
import SectionTitle from '../PlatForm/SectionTitle';

function EventSection({
  thin, title, img, subTitle,
  disc
}) {


  return (
    <Wrap>
      <SectionTitle>
        <span>{thin}&nbsp;</span>
        {title}
      </SectionTitle>

      <Content>
        <ImgWrap>
          <img src={img} alt={title} />
        </ImgWrap>
        <TextWrap>
          <h2>{subTitle}</h2>
          <p>{disc}</p>
        </TextWrap>
      </Content>
    </Wrap>
  )
}

export default EventSection;

const Wrap = styled.div`
  padding-left: 11.25%;
  width: 100%;
  @media (max-width: 700px) {
    padding-left: 6%;
  }
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6.6% 0 3.6% 0;

  @media (max-width: 700px) {
    padding: 12.5% 8.2% 18% 2.2%;
    flex-direction: column;
  }
`;

const ImgWrap = styled.div`
  width: 45%;

    > img {

      }
`;

const TextWrap = styled.div`
  padding-left: 3.9%;
  width: 55%;
  
  h2 {
    font-size: 1.5rem;
    color: #1A1A1A; 
  }
  p {
    line-height: 2rem;
    padding-top: 4%;
    color: #444444;
    white-space: pre;
  }  

  @media (max-width: 700px) {
    padding-left: 0;
    width: 100%;
  }
`;


