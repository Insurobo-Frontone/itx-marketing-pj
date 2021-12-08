import React from "react";
import styled from "styled-components";
import sinhansimbol from "../img/main/sinhanSimbol.png";

const NewSinhan = () => {
  return (
    <Container>
      <Component>
        <img src={sinhansimbol} alt="신한생명" />
        <p>2013</p>
        <p>우수보험대리점(주최: 신한생명)</p>
      </Component>
      <Component>
        <img src={sinhansimbol} alt="신한생명" />
        <p>2014</p>
        <p>우수보험대리점(주최: 신한생명)</p>
      </Component>
      <Component>
        <img src={sinhansimbol} alt="신한생명" />
        <p>2017</p>
        <p>우수보험대리점(주최: 신한생명)</p>
      </Component>
    </Container>
  );
};

export default NewSinhan;

const Container = styled.div`
  display: flex;

  height: 5rem;
  display: flex;
`;

const Component = styled.div`
  flex: 1;
  & > p {
    padding-left: 37%;
    margin-bottom: 15px;
    display: inline-block;
  }

  & > img {
    padding-left: 9.9rem;
    position: absolute;
  }
`;
