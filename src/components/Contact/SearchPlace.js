import React, { useState } from "react";
import styled from "styled-components";
import SearchGuide from "./SearchGuide";
import searchIcon from '../../img/common/searchIcon.svg';
import Map from "./Map";

const SearchBox = styled.div`
  margin: 5% 13.54166666666667% 3%;
  padding: 0 1%;
  border-bottom: 1px solid #444444;
  
  .inputForm{
    display: flex;
  }
   input {
    width: 100%;
    height: 40px;
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
`;

const SearchPlace = () => {
  const [inputText, setInputText] = useState("");
  const [Place, setPlace] = useState("");

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlace(inputText);
    setInputText("");
  };

  return (
    <>
      <SearchBox>
      <form className="inputForm" onSubmit={handleSubmit}>
        <input
          id="keword"
          type="text"
          placeholder="본부, 사업단, 지점명, 보험플러스 점포명 입력"
          onChange={onChange}
          value={inputText}
        />
        <button type="submit" />
      </form>
      </SearchBox>
      <SearchGuide />
      <Map searchPlace={Place} />
    </>
  );
};

export default SearchPlace;