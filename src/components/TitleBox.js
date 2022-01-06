import React from 'react'
import styled from 'styled-components'

const BoxContain = styled.div`
  position: absolute;
  top: 0;
  background-color: #B8292D;
  width: 23.69791666666667%;
  color: #FFFFFF;
  box-shadow: 10px 11px 14px rgba(0, 0, 0, 0.15);
  > h2 {
    line-height: 5.25rem;
    font-family: 'GoyangDeogyang';
    text-align: center;
    border-bottom: 3px solid #FFFFFF;
  }
  ul {
    padding: 18.1% 0 5.8% 8.2%;
    > li {
    line-height: 1.666666666666667rem;
  }
  }
    
`;
const TitleBox = (props) => {
  return (
    <BoxContain
      style={{
        right: `${props.right}`,
        left: `${props.left}`
      }}
    >
      <h2>{props.title}</h2>
      <ul>
        <li>{props.list1}</li>
        <li>{props.list2}</li>
        <li>{props.list3}</li>
        <li>{props.list4}</li>
      </ul>
    </BoxContain>
  )
}

export default TitleBox
