import React from "react";
import styled from "styled-components";
import Highfive from "../../img/sub/Highfive.svg";

import SubBanner from "../SubBanner";

const Container = styled.section`
`;


const Fp = () => {
  return (
    <Container>
      <SubBanner 
        modifier="FP가 주인인 회사" 
        image={Highfive}
        link1='교육지원'
        link2='DB지원'
        link3='전산지원'
      />
    </Container>
  );
}

export default Fp;



