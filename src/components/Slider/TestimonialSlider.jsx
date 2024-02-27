import React, { useState } from 'react';
import Slider from 'react-slick';
import { Icon } from '@iconify/react';
import Testimonial from '../Testimonial';
import Div from '../Div';
import Spacing from '../Spacing';
import TeamSlider from './TeamSlider';
import SectionHeading from '../SectionHeading';
import Sponsors from '../../scss/images/sponsors-white.png'
import Timer from "../Widget/Timer"
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
      <Div className=" cs-shape_wrap_3 cs-parallax ">
   
        <Div className="container text-center">
      

                <Spacing lg="20" md="20" />

        <Spacing lg="85" md="45" />
        <h4 class="h4-nabco text-spacing-200  wow fadeScale" data-caption-animate="fadeInUp" data-caption-delay="100"
                data-caption-duration="900">Who's Speaking</h4>
              <h2 class="h2-nabco  wow fadeInUp " data-wow-delay=".8s" data-caption-animate="fadeInUp"
                data-caption-delay="300" data-caption-duration="900"> Featured Guest Speakers
                </h2>
        
        <TeamSlider />


        <Button btnLink='/nabco2024' btnText="Read More" />

      </Div>
 

        <Spacing lg="130" md="80" />
      </Div>
    </>
  );
}
