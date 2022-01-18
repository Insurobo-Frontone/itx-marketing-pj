import React from "react";
import styled from "styled-components";
import button from "../../img/sub/platformButton.svg";

const List = [
  {
    id: 1,
    content: "개인영업(FP)",
    image: button,
  },

  {
    id: 2,
    content: "법인영업",
    image: button,
  },

  {
    id: 3,
    content: "보험플러스",
    image: button,
  },

  {
    id: 4,
    content: "DB Market",
    image: button,
  },
];

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
          </li>
          <li>
            <a href={props.id2}>{props.link2}</a>
          </li>
          <li>
            <a href={props.id3}>{props.link3}</a>
          </li>
          <li>
            <a href={props.id4}>{props.link4}</a>
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
    padding: 7.7% 0 21% 15%;
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
  padding-bottom: 116px;
  padding-left: 516px;
  > li {
    width: 210px;
    height: 60px;
    margin-right: 20px;
    background-color: #c22229;
    padding-top: 20px;
    padding-left: 17px;
    color: #ffffff;
  }
`;
