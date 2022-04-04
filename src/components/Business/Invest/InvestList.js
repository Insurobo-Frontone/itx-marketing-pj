import React, { useState } from 'react';
import styled from 'styled-components';
import { Data, getPostByNo } from '../../../data/InvestData';
import HashTag from './HashTag';

import Pagination from './Pagination';
// import { useLocation } from 'react-router-dom';
import InvestTable from './InvestTable';
function InvestList() {
  const [data, setData] = useState({});
  const [postsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = Data.slice(indexOfFirst, indexOfLast);
  
  const detailsRouter = (id) => {
    setData(getPostByNo(id));
  }

  return (
    <Layout>
     <DataList>
        {currentPosts.map(dt => (
          <li key={dt.id}>
            <RouteImage onClick={() => detailsRouter(dt.id)}>
              <img src={dt.img} alt='보험' />
            </RouteImage>
            <h2>{dt.title}</h2>
            <div>
              <p>{dt.hash}</p>
            </div>
          </li>
        ))}
      </DataList>
      <HashWrap>
        <HashTag name='프롬이 보험이야기'/>
        <HashTag name='보험칼럼'/>
        <HashTag name='병원라운지'/>
        <HashTag name='보험플러스'/>
        <HashTag name='재테크'/>
      </HashWrap>
      {/* <Pagination
        postPerPage={postsPerPage}
        totalPosts={Data.length} 
        paginate={setCurrentPage} 

      /> */}
      <InvestTable data={Data} />
      
    </Layout>
  );
}
export default InvestList;

const Layout = styled.div`
  width: 100%;
  padding: 5% 0% 3.1% 0%;

`;

const DataList = styled.ul`
  display: flex;
  justify-content: space-between;
  transform: translateX(-3%);
  > li {
    width: 33%;

    > h2 {
      font-size: 1.25rem;
      white-space: pre;
      padding-top: 5%;
      height: 110px;
    }
    > div {
      display: flex;
      
      > p {
        text-justify: inter-word;
        white-space: pre;
        display: flex;
        align-items: center;
        height: 80px;
      }
    }
  }
`;

const RouteImage = styled.div`
   width: 400px;
   cursor: pointer;
   
`;

const HashWrap = styled.div`
  display: flex;
  padding: 5% 0;
`;