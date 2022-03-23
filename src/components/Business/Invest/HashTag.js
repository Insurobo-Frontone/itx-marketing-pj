import React from 'react'
import styled from 'styled-components';


function HashTag({name}) {
  return (
    <HashBox>
      <p># {name}</p>
    </HashBox>
  )
}

export default HashTag;

const HashBox = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 48px;
  background-color: #F8F8F8;
  font-size: 0.75rem;
  padding: 0 2.7%;
  margin-right: 25px;
   > p {
     padding-top: 0;
     font-family: 'GoyangDeogyang';
     line-height: 1.75rem;
   }
   
`;