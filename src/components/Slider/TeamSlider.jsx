import { Icon } from '@iconify/react';
import React from 'react';
import Slider from 'react-slick';
import Div from '../Div';
import Team from '../Team';
import Speaker1 from "../../scss/images/speaker-01-330x354.jpg"
import Speaker2 from "../../scss/images/speaker-02-330x354.jpg"
import Speaker3 from "../../scss/images/speaker-03-330x354.jpg"
import Speaker4 from "../../scss/images/speaker-04-330x354.jpg"
import Speaker5 from "../../scss/images/speaker-05-330x354.jpg"
import Speaker6 from "../../scss/images/speaker-06-330x354.jpg"
import Speaker7 from "../../scss/images/speaker-07-330x354.jpg"
import Speaker8 from "../../scss/images/speaker-08-330x354.jpg"
import Speaker9 from "../../scss/images/speaker-09-330x354.jpg"
import Speaker10 from "../../scss/images/speaker-10-330x354.jpg"
import Speaker11 from "../../scss/images/speaker-11-330x354.jpg"
import Speaker12 from "../../scss/images/speaker-12-330x354.jpg"
import Speaker13 from "../../scss/images/speaker-13-330x354.jpg"
import Speaker14 from "../../scss/images/speaker-14-330x354.jpg"




export default function TeamSlider() {
  /** Team Member Data **/
  const teamData = [
    {
      memberImage: Speaker12,
      memberName: 'Melon Bulgery',
      memberDesignation: 'Product Designer',
      memberSocial: {
        linkedin: '/',
        twitter: '/',
        youtube: '/',
        facebook: '/',
      },
    },
    {
      memberImage: Speaker1,
      memberName: 'Olinaz Fushi',
      memberDesignation: 'Product Designer',
      memberSocial: {
        linkedin: '/',
        twitter: '/',
        youtube: '/',
        facebook: '/',
      },
    },
    {
      memberImage: Speaker1,
      memberName: 'David Elone',
      memberDesignation: 'React Developer',
      memberSocial: {
        linkedin: '/',
        twitter: '/',
        youtube: '/',
        facebook: '/',
      },
    },
    {
      memberImage: Speaker12,
      memberName: 'Melina Opole',
      memberDesignation: 'WP Developer',
      memberSocial: {
        linkedin: '/',
        twitter: '/',
        youtube: '/',
        facebook: '/',
      },
    },
    {
      memberImage: '/images/member_1.jpeg',
      memberName: 'Melon Bulgery',
      memberDesignation: 'Product Designer',
      memberSocial: {
        linkedin: '/',
        twitter: '/',
        youtube: '/',
        facebook: '/',
      },
    },
  ];
  /** Slider Settings **/
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-prev slick-arrow' + (currentSlide === 0 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
    >
      <Icon icon="bi:arrow-left" />
    </div>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-next slick-arrow' +
        (currentSlide === slideCount - 1 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
    >
      <Icon icon="bi:arrow-right" />
    </div>
  );
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <Div {...settings} className="cs-gap-24 cs-arrow_style2">
      {teamData.map((item, index) => (
        <Div >
          <Team
            memberImage={item.memberImage}
            memberName={item.memberName}
            memberDesignation={item.memberDesignation}
            memberSocial={item.memberSocial}
          />
        </Div>
      ))}
    </Div>
  );
}
