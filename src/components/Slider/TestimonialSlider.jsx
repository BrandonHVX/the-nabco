import React, { useState } from 'react';
import Slider from 'react-slick';
import { Icon } from '@iconify/react';
import Testimonial from '../Testimonial';
import Div from '../Div';
import Spacing from '../Spacing';
import TeamSlider from './TeamSlider';
import SectionHeading from '../SectionHeading';
import Sponsors from '../../scss/images/sponsors-white.png'






export default function TestimonialSlider() {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const testimonialData = [
    {
      testimonialThumb: '/images/testimonial_1.jpeg',
      testimonialText:
        'I wish I would have thought of it first. Creative agency is the most tech valuable business resource we have ever purchased. Dude your stuff  is the bomb! eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt to the explicabo.',
      avatarName: 'Ahon Monsery',
      avatarDesignation: 'CEO AT TECH',
      ratings: '4',
    },
    {
      testimonialThumb: '/images/testimonial_2.jpeg',
      testimonialText:
        'I wish I would have thought of it first. Creative agency is the most tech valuable business resource we have ever purchased. Dude your stuff  is the bomb! eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt to the explicabo.',
      avatarName: 'Ahon Monsery',
      avatarDesignation: 'CEO AT TECH',
      ratings: '5',
    },
    {
      testimonialThumb: '/images/testimonial_3.jpeg',
      testimonialText:
        'I wish I would have thought of it first. Creative agency is the most tech valuable business resource we have ever purchased. Dude your stuff  is the bomb! eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt to the explicabo.',
      avatarName: 'Ahon Monsery',
      avatarDesignation: 'CEO AT TECH',
      ratings: '4.5',
    },
    {
      testimonialThumb: '/images/testimonial_1.jpeg',
      testimonialText:
        'I wish I would have thought of it first. Creative agency is the most tech valuable business resource we have ever purchased. Dude your stuff  is the bomb! eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt to the explicabo.',
      avatarName: 'Ahon Monsery',
      avatarDesignation: 'CEO AT TECH',
      ratings: '3.5',
    },
  ];


  return (
    <>
      <Div className="cs-gradient_bg_1 cs-shape_wrap_3 cs-parallax">
        <Spacing lg="130" md="80" />
        <Div className="container text-center">
        <h1 class="h1-nabco wow fadeScale" data-caption-animate="fadeInUp" data-caption-delay="100"
                data-caption-duration="900">NABCO 2024</h1>
              <h4 class="h4-nabco text-spacing-200 wow fadeInUp " data-wow-delay=".8s" data-caption-animate="fadeInUp"
                data-caption-delay="300" data-caption-duration="900"> Leadership Summit & Retreat
                </h4>
                <img class="img-opacity" width="400" src={Sponsors} />
        <Spacing lg="85" md="45" />
        <TeamSlider />
      </Div>
 

        <Spacing lg="130" md="80" />
      </Div>
    </>
  );
}
