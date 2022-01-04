import React from 'react'
import styled from 'styled-components'

const BoxContain = styled.div`
  
`;
const TitleBox = (props) => {
  return (
    <BoxContain>
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
