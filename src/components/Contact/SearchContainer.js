import React,{ useReducer, useState } from 'react'
import styled from 'styled-components'
import Map from './Map';
import SearchGuide from './SearchGuide';
import MapData from './mapData.json';

import searchIcon from '../../img/common/searchIcon.svg';

const Container = styled.section`
  padding: 3% 8.333333333333333% 10%;

  @media(max-width: 700px) {
    padding: 8.5% 6.2% 10%;
  }
`;

const Search = styled.div`
  margin: 0 6.3% 2.8%;
  padding: 0 1%;
  border-bottom: 2px solid #444444;
  .inputForm{
    display: flex;
    align-items: center;
  }
   input {
    width: 100%;
    height: 48px;
  }
  input::placeholder{
    color: #C4C4C4; 
  }
   button {
    background-image: url(${searchIcon});
    background-repeat: no-repeat;
    background-size: contain;
    width: 25px;
    height: 25px;
  }
  @media(max-width: 700px) {
    margin: 0 2%;
 
    .inputForm{
      width: 100%;
      justify-content: center;
      align-items: center;
    }

    input {
    width: 100%;
    height: 40px;
    }
    input::placeholder{
    font-size: 0.625rem;
    }
    button{
      width: 18px;
      height: 18px;
    }
  }
`;

const SearchResult = styled.div`
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
const SearchContainer = () => {
 const [text, setText] = useState('');

 const [teamPrint, setTeamPrint] = useState(false);
 const [team2Print, setTeam2rint] = useState(false);
 const [namePrint, setNamePrint] = useState(false);

 const teamKeyword = '사업단'
 const team2Keyword = '보험플러스'
 const nameKeyword = MapData.item.name;

  const handleChange = (e) => {
     setText(e.target.value)

     if (text === teamKeyword) {
      setTeamPrint(!teamPrint)
     } 
     else if (text === team2Keyword) {
      setTeam2rint(!team2Print)
     }
     else if (text === nameKeyword) {
      setNamePrint(!namePrint);
     }
  }

  const wordList = MapData.item.filter(
    items => (items.team === teamKeyword))

  const word2List = MapData.item.filter(
    items => (items.team === team2Keyword))

  const nameList = MapData.item.filter(
    items => (items.name === nameKeyword))
  return (
    <Container>
      <Search>
        <div className="inputForm">
          <input
            type="text"
            placeholder="본부, 사업단, 지점명, 보험플러스 점포명 입력"
            onChange={handleChange}
            onKeyPress={handleChange}
            value={text}
            name="inputs"
          />
          <button 
            type="button"
            onClick={handleChange}
          />
        </div>
      </Search>
      <SearchGuide />
      <SearchResult>
        <table>
          <thead>
            <tr>
              {teamPrint && (
                <th>{teamKeyword}</th>
              )}
              {team2Print && (
                <th>{team2Keyword}</th>
              )}
              {namePrint && (
                <th>{nameKeyword}</th>
              )}
              <th>주소</th>
              <th>전화번호</th>
            </tr>
          </thead>
          <tbody>
          {teamPrint && wordList.map((item) => (
          <tr key={item.index}>
            <td>{item.name}</td>
            <td>{item.address}</td>
            <td>{item.tel}</td>
          </tr>
          ))}
          {team2Print && word2List.map((item) => (
          <tr key={item.index}>
            <td>{item.name}</td>
            <td>{item.address}</td>
            <td>{item.tel}</td>
          </tr>
          ))}
          {namePrint && nameList.map((item) => (
          <tr key={item.index}>
            <td>{item.name}</td>
            <td>{item.address}</td>
            <td>{item.tel}</td>
          </tr>
          ))}
          </tbody>
        </table>
    </SearchResult>
      
      <Map />
    </Container>
  )
}

export default SearchContainer;
