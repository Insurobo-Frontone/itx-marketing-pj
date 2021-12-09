import React from 'react';
import Business from '../components/Business';
import MainBanner from '../components/MainBanner';
import Layout from '../Layouts/Layout';
import Recruit from '../components/Recruit'
import NewsMarketing from '../components/NewsMarketing';
import NewsSinhan from '../components/NewsSinhan';


const Home = () => {
  return (
    <Layout>
      <MainBanner />
      <Business />
      <Recruit />
      {/* <NewsMarketing />
      <NewsSinhan /> */}
    </Layout>
  )
}

export default Home;
