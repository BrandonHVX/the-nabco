import { Icon } from '@iconify/react';
import React from 'react';
import Slider from 'react-slick';
import Div from '../Div';
import TeamDark from '../TeamDark';
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
      memberName: 'CONGRESSWOMEN FREDERICA S. WILSON',
      memberDesignation: 'US Congress, Florida District 24',
      memberSocial: {
        linkedin: '/',
        twitter: '/',
        youtube: '/',
        facebook: '/',
      },
    },
    {
      memberImage: Speaker1,
      memberName: 'BILL DIGGS',
      memberDesignation: 'Director, Miami Dade Economic Advocacy Trust',
      memberSocial: {
        linkedin: '/',
        twitter: '/',
        youtube: '/',
        facebook: '/',
      },
    },
    {
      memberImage: Speaker14,
      memberName: 'DESMOND MEADE',
      memberDesignation: 'Executive Director, Florida Rights Restoration Coalition',
      memberSocial: {
        linkedin: '/',
        twitter: '/',
        youtube: '/',
        facebook: '/',
      },
    },
    {
      memberImage: Speaker13,
      memberName: 'MARY ESTIMÉ-IRVIN',
      memberDesignation: 'Vice Mayor, North Miami District 3',
      memberSocial: {
        linkedin: '/',
        twitter: '/',
        youtube: '/',
        facebook: '/',
      },
    },
    {
      memberImage: Speaker5,
      memberName: 'STANLEY MOORE',
      memberDesignation: 'Cook County Commissioner, 4th District',
      memberSocial: {
        linkedin: '/',
        twitter: '/',
        youtube: '/',
        facebook: '/',
      },
    },
    {
      memberImage: Speaker3,
      memberName: 'RODNEY ELLIS',
      memberDesignation: 'Harris County Commissioner, Precinct One',
      memberSocial: {
        linkedin: '/',
        twitter: '/',
        youtube: '/',
        facebook: '/',
      },
    },
    {
      memberImage: Speaker11,
      memberName: 'VICTORIA SIPPLING',
      memberDesignation: 'Vice President, Wendover Housing Partners',
      memberSocial: {
        linkedin: '/',
        twitter: '/',
        youtube: '/',
        facebook: '/',
      },
      
    },
    {
      memberImage: Speaker4,
      memberName: 'ERIC KNOWLES',
      memberDesignation: 'CEO, Miami-Dade Chamber of Commerce',
      memberSocial: {
        linkedin: '/',
        twitter: '/',
        youtube: '/',
        facebook: '/',
      },
      
    },
    {
      memberImage: Speaker2,
      memberName: 'MICHAEL HIGHTOWER',
      memberDesignation: 'Managing Partner, The Collaborative Firm, LLC',
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
    <Div {...settings} className="cs-gap-24 cs-arrow_style2 ">
      {teamData.map((item, index) => (
        <Div >
          <TeamDark
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
