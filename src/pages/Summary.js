import React from 'react';
import styled from 'styled-components';
import Layout from '../Layouts/Layout';
import Visual from '../components/Visual';
import History from '../components/Summary/History';
import ManageIdea from '../components/Summary/ManageIdea';


const Summary = () => {
 
  return (
    <Layout>
      <Visual />
      <History />
      <ManageIdea />
    </Layout>
  )
};



export default Summary;
