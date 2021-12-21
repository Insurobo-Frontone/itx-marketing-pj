import React from 'react';
import Layout from '../Layouts/Layout'
import Visual from '../components/Visual';
import History from '../components/Summary/History';
import ManageIdea from '../components/Summary/ManageIdea';
import PressRoom from '../components/Summary/PressRoom';


const Summary = () => {
  return (
    <Layout>
      <Visual />
      <History />
      <ManageIdea />
      <PressRoom />
    </Layout>
  )
};



export default Summary;
