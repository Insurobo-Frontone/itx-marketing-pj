import React from "react";
import styled from "styled-components";
import button from "../../img/sub/platformButton.svg";

const TopBox = (props) => {
  return (
    <Container>
      <GrayBox>
        <div>
          <p>{props.content}</p>
          <p>{props.subContent}</p>
        </div>
        <ListBox>
          <li>
            <a href={props.id1}>{props.link1}</a>
            <img src={button} alt="" />
          </li>
          <li>
            <a href={props.id2}>{props.link2}</a>
            <img src={button} alt="" />
          </li>
          <li>
            <a href={props.id3}>{props.link3}</a>
            <img src={button} alt="" />
          </li>
          <li>
            <a href={props.id4}>{props.link4}</a>
            <img src={button} alt="" />
          </li>
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
    > h2 {
      font-family: "GoyangDeogyang";
      color: #1a1a1a;
      font-size: 2.5rem;
      padding-bottom: 2%;
    }
    p {
      font-size: 1rem;
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
