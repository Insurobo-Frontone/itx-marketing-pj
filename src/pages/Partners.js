import React from 'react';
import Layout from '../Layouts/Layout';
import Banner from '../components/Banner';
import PartnerCompany from '../components/Partners/PartnerCompany';
import PartnerType from '../components/Partners/PartnerType';

import banner from '../img/sub/partnersVisual.png';
import Illust from '../img/sub/partnersIllust.png';


const Partners = () => {
  return (
 
  <Layout>
    <Banner 
      visual={banner}
      description={'핀테크를 함께 이끌어갈 다양한 분야의\n소중한 파트너를 기다립니다.'}
      illust={Illust}
    />
    <PartnerType />
    <PartnerCompany />
  </Layout>
      
   

  )
};



export default Partners;