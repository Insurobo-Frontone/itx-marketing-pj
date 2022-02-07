import React from 'react';
import Layout from '../Layouts/Layout';
import PlatFormBanner from '../components/PlatForm/PlatFormBanner';
import PlatFormMenu from '../components/PlatForm/PlatFormMenu';
import { useLocation } from "react-router-dom";
import Personal from '../components/PlatForm/Personal';
import InsuPlus from '../components/PlatForm/InsuPlus';
import Market from '../components/PlatForm/Market';
import Corporation from '../components/PlatForm/Corporation';

const PlatForm = () => {
  const location = useLocation();

  return (
    <Layout>
      <PlatFormBanner />
      <PlatFormMenu />
      {location.search === '?insuplus' ? (<InsuPlus />) 
      : location.search === '?market' ? (<Market />) 
      : location.search === '?corperation' ? (<Corporation />)
      : (<Personal />)
      }

    </Layout>
  )
};
export default PlatForm;