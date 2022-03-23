import React from 'react';
import Layout from '../Layouts/Layout';
import PlatFormBanner from '../components/PlatForm/PlatFormBanner';
import PlatFormMenu from '../components/PlatForm/PlatFormMenu';

import Personal from '../components/PlatForm/Personal';
import InsuPlus from '../components/PlatForm/InsuPlus';
import Market from '../components/PlatForm/Market';
import { useLocation } from 'react-router-dom';

const PlatForm = () => {

  const location = useLocation();

  return (
    <Layout>
      <PlatFormBanner />
      <PlatFormMenu />
      {location.pathname === '/platform/insuplus' ? (<InsuPlus />)
      : location.pathname === '/platform/market' ? (<Market />)
      : (<Personal />)
      }
    </Layout>
  )
};
export default PlatForm;