import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Map from './Map';
import SearchGuide from './SearchGuide';
import SearchResult from './SearchResult';
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
  display: flex;
  align-items: center;

@media(max-width: 700px) {
  margin: 0 2%;
  width: 100%;
  justify-content: center;
  align-items: center;
}
`;

const Input = styled.input`
    width: 100%;
    height: 48px;
  ::placeholder {
    color: #C4C4C4; 
  }
@media(max-width: 700px) {
    width: 100%;
    height: 40px;

  ::placeholder{
    font-size: 0.625rem;
  }
}
`;

const Button = styled.button`
  background-image: url(${searchIcon});
  background-repeat: no-repeat;
  background-size: contain;
  width: 25px;
  height: 25px;
@media(max-width: 700px) {
  width: 18px;
  height: 18px;
}
`;
const SearchMap = () => {
  const [itemList, setItemList] = useState([]);
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  
  useEffect(() => {
    const fetchData = async () => {
      setError("");
      setLoading(true);
      try {
        const result = await axios(`./searchMork.json/search?query=${search}`);
        setItemList(result.data);
        setLoading(false);
        console.log(itemList)
      } catch (error) {
        setError(error)
        console.log('error');
      }
    }
    fetchData();
  },[search])
  return (
      <Container>
        <Search>
          <Input
            type="text"
            placeholder='본부, 사업단, 지점명, 보험플러스 점포명 입력'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onPress={(e) => setSearch(query)}
          />
          <Button onClick={(e) => setSearch(query)} />
        </Search>
        <SearchGuide />
        <SearchResult>

        </SearchResult>
        

        
     
        <Map />
      </Container>

  )
}


export default SearchMap
;
