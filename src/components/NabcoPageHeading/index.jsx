import React from 'react';
import { Link } from 'react-router-dom';
import Div from '../Div';
import Sponsors from '../../scss/images/sponsors-white.png'
import Timer from '../Widget/Timer'

export default function PageHeading({ title, bgSrc, pageLinkText }) {
  return (
    <Div
      className="cs-page_heading cs-style1 cs-center text-center cs-bg "
      style={{ backgroundImage: `url(${bgSrc})` }}
    >
       <Div className="container text-center mt-5">
        <h1 class="h1-nabco-title wow fadeScale text-black" data-caption-animate="fadeInUp" data-caption-delay="100"
                data-caption-duration="900">NABCO 2024</h1>
              <h4 class="h4-nabco text-spacing-200 text-black wow fadeInUp " data-wow-delay=".8s" data-caption-animate="fadeInUp"
                data-caption-delay="300" data-caption-duration="900"> Leadership Summit & Retreat
                </h4>
                <img class="img-opacity" width="400" src={Sponsors} />

 

                <Timer />
        
    
      </Div>
    </Div>
  );
}
