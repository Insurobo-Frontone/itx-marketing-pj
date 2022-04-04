import React from 'react';
import styled from 'styled-components';
import HashTag from './HashTag';

function InvestDetail({data}) {
  return (
    <>
      {data ? (
      <Layout>
        <h2>{data.title}</h2>
        <p>{data.hash}</p>
        <img src={data.img} alt={data.title} />
        <div>
          <p>{data.contents}</p>
        </div>
        <KakaoUrlForm>
          <input type='text' placeholder='광고성 배너'/>
          <div>
            <input type='text' placeholder='공유하기'/>
            <input type='text' placeholder='목록'/>
          </div>
          <div>
            <span>키워드</span>
            <HashTag name={data.keyword1} />
            <HashTag name={data.keyword2} />
            <HashTag name={data.keyword3} />
          </div>
        </KakaoUrlForm>
      </Layout>
      ) : null}
    </>
  ); 

}
export default InvestDetail;

const Layout = styled.div`
  width: 53.45679012345679%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > h2 {
   
    white-space: pre;
  }
  > div {
    
    > p {
      white-space: pre;
    }
  }
`;

const KakaoUrlForm = styled.form`

`;