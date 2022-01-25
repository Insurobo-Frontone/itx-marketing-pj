import React, { useState } from 'react';
import styled from 'styled-components';
import searchIcon from '../../img/common/searchIcon.svg';
import GroupContext from '../../context/group';

const Wrap = styled.form`
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

const SearchFilter = () => {
  const [searchData, setSearchData] = useState('');
  
  const handleClick = () => {
    
  }

  return (
    <GroupContext>
      {values => (
        <Wrap onSubmit={(e) => e.preventDefault()}>
        <Input
          type="text"
          placeholder='본부, 사업단, 지점명, 보험플러스 점포명 입력'
          onChange={(e) => {setSearchData(e.target.value)}}
        />
        <Button onClick={handleClick} />
      </Wrap>
      )}
    </GroupContext>
  );
}

export default SearchFilter;