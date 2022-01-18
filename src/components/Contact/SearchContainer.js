import React,{ useReducer } from 'react'
import styled from 'styled-components'
import Map from './Map';
import SearchGuide from './SearchGuide';
import MapList from './MapList';
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
function reducer(state, action) {
  switch (action.type) {
    case '1':
      return { }
    default: 
     return state;
  }
}
const SearchContainer = () => {
  const [state, dispatch] = useReducer(reducer, {value : ''})
  

  
  return (
    <Container>
      <Search>
        <div className="inputForm">
          <input
            value={state.value}
            type="text"
            placeholder="본부, 사업단, 지점명, 보험플러스 점포명 입력"
            onChange={() => dispatch({ type: ''})}
          />
          <button 
            type="button"
            // onClick={handleButton}
          />
        </div>
      </Search>
      <SearchGuide />
      <MapList name={'사업단'} team={'서울본부'} address={'서울시 영등포구 양평로 68, 7층(DN빌딩)'} tel={'02-6925-1027'}/>
      <Map />
    </Container>
  )
}

export default SearchContainer;
