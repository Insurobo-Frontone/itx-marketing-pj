import React from 'react';
import Footer from '../Layouts/Footer';
import Header from '../Layouts/Header';
import Banner from '../components/Banner';
import PartnerCompany from '../components/Partners/PartnerCompany';
import PartnerType from '../components/Partners/PartnerType';

import banner from '../img/sub/partnersVisual.png';
import Illust from '../img/sub/partnersIllust.svg';


const Partners = () => {
  return (
    <>
    <Header />
      <Banner visual={banner}
        description={'핀테크를 함께 이끌어갈 다양한 분야의\n소중한 파트너를 기다립니다.'}
        illust={Illust}
      />
      <PartnerType />
      <PartnerCompany />
    <Footer />
    </>
  )
};



export default Partners;