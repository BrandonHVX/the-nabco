import React, { useState } from 'react';
import Slider from 'react-slick';
import { Icon } from '@iconify/react';
import Testimonial from '../Testimonial';
import Div from '../Div';
import Spacing from '../Spacing';
import TeamSlider from './TeamSlider';
import SectionHeading from '../SectionHeading';
import Sponsors from '../../scss/images/sponsors-white.png'

import Button from '../Button';




export default function TestimonialSlider( title,
  subtitle,
  btnText,
  btnLink,
  scrollDownId,
  socialLinksHeading,
  heroSocialLinks,
  bgImageUrl,) {


  return (
    <>
      <Div className="cs-gradient_bg_1 cs-shape_wrap_3 cs-parallax">
        <Spacing lg="130" md="80" />
        <Div className="container text-center">
        <h1 class="h1-nabco-title wow fadeScale" data-caption-animate="fadeInUp" data-caption-delay="100"
                data-caption-duration="900">NABCO 2024</h1>
              <h4 class="h4-nabco text-spacing-200 wow fadeInUp " data-wow-delay=".8s" data-caption-animate="fadeInUp"
                data-caption-delay="300" data-caption-duration="900"> Leadership Summit & Retreat
                </h4>
                <img class="img-opacity" width="400" src={Sponsors} />



        <Spacing lg="85" md="45" />
        <h4 class="h4-nabco wow fadeScale" data-caption-animate="fadeInUp" data-caption-delay="100"
                data-caption-duration="900">Who's Speaking</h4>
              <h5 class="h5-nabco text-spacing-200 wow fadeInUp " data-wow-delay=".8s" data-caption-animate="fadeInUp"
                data-caption-delay="300" data-caption-duration="900"> Featured Guest Speakers
                </h5>
        
        <TeamSlider />
        <Button btnLink={btnLink} btnText={btnText} />

      </Div>
 

        <Spacing lg="130" md="80" />
      </Div>
    </>
  );
}
