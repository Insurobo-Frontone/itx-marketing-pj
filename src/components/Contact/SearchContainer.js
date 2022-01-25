import React from 'react';
import styled from 'styled-components';
import Map from './Map';
import SearchFilter from './SearchFilter';
import SearchGuide from './SearchGuide';
import SearchResult from './SearchResult';


const Container = styled.section`
  padding: 3% 8.333333333333333% 10%;
  
  @media(max-width: 700px) {
    padding: 8.5% 6.2% 10%;
  }
`;

const SearchContainer = () => {
  return (
    <Container>
      <SearchFilter />
      <SearchGuide />
      <SearchResult />
      <Map />
    </Container>
  )
}


export default SearchContainer;
