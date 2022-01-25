import React from 'react';
import styled from 'styled-components';
// import mapData from '../../mapData.json';

const Container = styled.div`
   margin: 0 6.3% 3%;
  table {
    border-collapse: collapse;
    width: 100%;
    
    th {
      background-color: #F5F5F5;
      line-height: 50px;
      font-size: 0.8rem;
      color: #323232;
      border-top: 3px solid #323232;
      font-family: 'GoyangDeogyang';
    }
    th:first-child,th:last-child{
      width: 18.21428571428571%;
    }
    th:nth-child(2),td:nth-child(2) {
      border-left: 1px solid #F0F0F0;
      border-right: 1px solid #F0F0F0;
    }
    td {
      height: 70px;
      text-align: center;
      color: #323232;
    }
  }
  @media(max-width: 700px) {
    margin: 0 2% 2.23%;

    table {
      font-size: 0.625rem;
      th {
        font-size: 0.625rem;
      }
      th:nth-child(2),td:nth-child(2) {
        border-left: 0;
        border-right: 0;
        width: 22.8125%;
      }
    }
  }
`;

const SearchResult = (props) => {
  return (
    <Container>
        <table>
          <thead>
            <tr>
              <th>사업단</th>
              <th>주소</th>
              <th>전화번호</th>
            </tr>
          </thead>
          <tbody>
          {/* {props.items.map(({id, name, address, tel}) => (
            <tr key={id}>
              <td>{name}</td>
              <td>{address}</td>
              <td>{tel}</td>
            </tr>
          ))} */}
          </tbody>
        </table>
    </Container>
  );
}

export default SearchResult;
