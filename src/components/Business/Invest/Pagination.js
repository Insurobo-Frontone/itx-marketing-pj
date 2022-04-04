import React, { useState } from 'react';
import styled from "styled-components";


function Pagination({ 
  postPerPage, totalPosts, paginate }) {
  const [active, setActive] = useState(1);
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }

  const activeStyle = (n) => {
    paginate(n);
    setActive(n);
  }

  return (
    <Nav>
      <ButtonUl>
        {pageNumbers.map((number) => (
          <ButtonLi key={number}>
            <Button
              onClick={(n) => activeStyle(number)}
              style={{
                background: active === number ? '#F0F0F0' : '#FFFFFF'
              }}
            >
              {number}
            </Button>
          </ButtonLi>
        ))}
      </ButtonUl>
    </Nav>
  )
}

export default Pagination;

const Nav = styled.div`
  padding: 4.07% 0 6% 0;
  width: 100%;

  ${(props) => props.theme.window.tab} {
    padding: 11% 0;
  }
`;

const Button = styled.button`
  width: 37px;
  height: 40px;
  cursor: pointer;
  color: #444444;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  line-height: 1;
  background: ${props => props.active ? '#F0F0F0' : '#FFFFFF'};
  border: 1px solid #F0F0F0;
  ${(props) => props.theme.window.tab} {
    width: 25px;
    height: 27px;
    font-size: 0.65rem;
  }
`;

const ButtonUl = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;
const ButtonLi = styled.li`
  margin-right: 30px;
  :last-child {
    margin-right: 0;
  }
`;