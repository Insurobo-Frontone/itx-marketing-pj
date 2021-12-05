import React, { Children } from 'react'
import styled from 'styled-components'
import Layout from '../Layouts/Layout'
import Test from '../components/Test';

const Text = styled.p`
  font-size: 50px;
`;
function Summary() {
  return (
    <>
    
    <Layout>
      <Test />
    </Layout>
      
    </>

  )
}

export default Summary
