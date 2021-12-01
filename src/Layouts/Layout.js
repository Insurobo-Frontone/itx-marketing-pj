import React from 'react'
import styled from 'styled-components'
import Footer from './Footer'
import Header from './Header'

const Wrap = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
`;
const Layout = ({children}) => {
  return (
    <Wrap>
      <Header />
        {children}
      <Footer />
    </Wrap>
    
      
   
  )
}

export default Layout
