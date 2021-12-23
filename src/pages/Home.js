import React from 'react';
import Business from '../components/Business';
import MainBanner from '../components/MainBanner';
import Layout from '../Layouts/Layout'
import Recruit from '../components/Recruit'
import NewsMarketing from '../components/NewsMarketing';


const Home = () => {
  return (
      <Layout>
        <MainBanner />
        <Business />
        <Recruit />
        <NewsMarketing />
      </Layout>
  )
}

export default Home;
