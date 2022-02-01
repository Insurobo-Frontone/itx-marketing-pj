import React from "react";
import styled from "styled-components";

import TopBox from "./TopBox";
import TitleBox from "../TitleBox";






const PlatFormMenu = () => {
  return (
    <>
      <Container>
        <BannerContain>
          <TopBox/>
          <TitleBox title="Business" left="0" list4="Platform" />
        </BannerContain>
      </Container>


    </>
  );
};

export default PlatFormMenu;

const BannerContain = styled.div`
  position: relative;
`;

const Container = styled.div`
  padding-top: 140px;
  padding-bottom: 140px;
`;
