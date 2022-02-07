import React from "react";
import styled from "styled-components";

const Title = styled.h2`
  border-bottom: 3px solid #1a1a1a;
  font-size: 2.5rem;
  color: #1A1A1A;
  padding: 8.07% 0 0.7% 0;

  > strong {
      color: #C22229;
  }
  > span {
      font-family: 'GoyangIlsan';
      font-weight: 400;
  }
  > .small {
    font-size: 1.5rem;
  }
  @media (max-width: 700px) {
    padding: 20% 0 4.8% 0;
    border-bottom: 2px solid #1a1a1a;
    font-size: 1.25rem;
    > span {
      white-space: pre;
    }
  }
`;

const SectionTitle = ({children}) => {
  return (
    <Title>
      {children}
    </Title>
  );
};

export default SectionTitle;