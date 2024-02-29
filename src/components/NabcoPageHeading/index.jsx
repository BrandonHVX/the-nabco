import React from 'react';
import { Link } from 'react-router-dom';
import Div from '../Div';
import Sponsors from '../../scss/images/sponsors-white.png'
import Timer from '../Widget/Timer'
import MiamiBG from '../../scss/images/bg-parallax-02-1894x1950.jpg'
import Spacing from '../Spacing';



export default function PageHeading({ title, bgSrc, pageLinkText }) {
  return (
    <Div
      className="cs-nabco-page_heading cs-style1 cs-center text-center cs-bg "
      style={{ backgroundImage: `url(${MiamiBG})` }}
    >
       <Div className="container text-center p-5">
        <h1 class="h1-nabco-title wow fadeScale " data-caption-animate="fadeInUp" data-caption-delay="100"
                data-caption-duration="900">NABCO 2024</h1>
              <h4 class="h4-nabco text-spacing-200  wow fadeInUp " data-wow-delay=".8s" data-caption-animate="fadeInUp"
                data-caption-delay="300" data-caption-duration="900"> Leadership Summit & Retreat
                </h4>
                <Spacing lg="5" md="5" />
                <h4 class="h4-nabco-date wow fadeInUp " data-wow-delay=".8s" data-caption-animate="fadeInUp"
                data-caption-delay="300" data-caption-duration="900"> April 25-27 2024 | Miami, FL
                </h4>
                <img class="img-opacity" width="400" src={Sponsors} />

 

        
    
      </Div>
    </Div>
  );
}
