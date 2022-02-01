import React from 'react';
import Layout from '../Layouts/Layout';
import PlatFormBanner from '../components/PlatForm/PlatFormBanner';
import PlatFormMenu from '../components/PlatForm/PlatFormMenu';

const PlatForm = () => {
  return (
    <Layout>
      <PlatFormBanner />
      <PlatFormMenu />

    </Layout>
  )
};
export default PlatForm;