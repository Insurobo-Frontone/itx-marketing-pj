import React, { useState } from 'react'
import Layout from '../../Layouts/Layout'
import styled from 'styled-components';
import GroupChart from './GroupChart';
import banner1 from '../../img/sub/contactVisual1.png';
import banner2 from '../../img/sub/contactVisual2.png';


const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 4.7% 13.54166666666667% 2.1%;

  > ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
    
    > li {
      width: 25%;
      text-align: center;
      border: 1px solid #C4C4C4;
      border-right-width: 0;
      color: #767676;
  
      &.active{
        border: 2px solid #B8292D;
        border-right-width: 2px;
        color: #B8292D;
        font-family: 'GoyangDeogyang';
      }
      > a {
        display: block;
        line-height: 3.5rem;
        
      }
      :last-child {
        border-right-width: 1px;
      }
      :last-child.active {
        border-right-width: 2px;
      }
    }
  }
`;

const ContactBanner = styled.section`
  position: relative;
  padding-top: 52.09%;
  background-repeat: no-repeat;
  background-position: 0 70%;
  background-size: 100%;
  /* background-image: url(${banner1}); */
`;
const TabContent = styled.div`
  
  .block{
    display: block;
  }
  .hidden{
    display: none;
  }
`;
const ContactTab = () => {
  const [openTab, setOpenTab] = useState(1);

  return (
    <Layout>
      <ContactBanner style={{
        backgroundImage: openTab === 1 ? `url(${banner1})` :  `url(${banner2})`
      }}>

      </ContactBanner>
      <NavContainer>
      <ul>
        <li className={openTab === 1 ? 'active' : '' }>
          <a
            onClick={(e) => {
            e.preventDefault();
              setOpenTab(1);
            }}
            data-toggle="tab"
            href="#cont1"
            role="tablist"
          >조직도</a>
        </li>
        <li className={openTab === 2 ? 'active' : '' }>
          <a
           onClick={(e) => {
            e.preventDefault();
              setOpenTab(2)}}
            data-toggle="tab"
            href="#cont2"
            role="tablist"
          >사업단 & FP 찾기</a>
        </li>
      </ul>
    </NavContainer>
    <TabContent>
      <div className={openTab === 1 ? 'block' : 'hidden'} id="#cont1">
        <GroupChart />
      </div>
      <div className={openTab === 2 ? 'block' : 'hidden'} id="#cont2">
      </div>
    </TabContent>
    </Layout>
  )
}

export default ContactTab
