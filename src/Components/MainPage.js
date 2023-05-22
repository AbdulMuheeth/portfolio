import React from 'react';
import Footer from './portfolio_sections/Footer';
import Section1 from './portfolio_sections/Section1';
import Section2 from './portfolio_sections/Section2';
import Section3 from './portfolio_sections/Section3';
import Section4 from './portfolio_sections/Section4';
import Section5 from './portfolio_sections/Section5';
import Section6 from './portfolio_sections/Section6';

import './MainPage.css'

const MainPage = () => {
  return (
    <>
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>
        <Section6/>
        <Footer/>
    </>
  )
}

export default MainPage