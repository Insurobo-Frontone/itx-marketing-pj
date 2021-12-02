import React, { Children } from 'react'
import styled from 'styled-components'
import Layout from '../Layouts/Layout'

const Text = styled.p`
  font-size: 50px;
`;
function Summary() {
  return (
    <Layout>
      <Text>Home</Text>
    </Layout>
  )
}

export default Summary
