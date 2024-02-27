import React, { useEffect } from 'react';
import Card from '../Card';
import FunFact from '../FunFact';
import Hero from '../Hero';
import Div from '../Div';
import Button from "../Button";
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';
import Cta from '../Cta';
import LogoList from '../LogoList';
import MovingText from '../MovingText';
import PortfolioSlider from '../Slider/PortfolioSlider';
import PostSlider from '../Slider/PostSlider';
import TestimonialSliderDark from '../Slider/TestimonialSliderDark';
import TeamSlider from '../Slider/TeamSlider';
import VideoModal from '../VideoModal';
import TimelineSlider from '../Slider/TimelineSlider';
import { pageTitle } from '../../helper';
import NabcoBG from "../../scss/images/nabco-bg.jpg"
import NabcoAbout1 from "../../scss/images/home-1-01-470x590.jpg"
import NabcoAbout2 from "../../scss/images/home-1-02-270x257.jpg"
import Timer from "../Widget/Timer";
import NabcoHotel1 from "../../scss/images/home-2-01-470x590.jpg"
import NabcoHotel2  from "../../scss/images/home-2-02-270x257.jpg"
import Sponsors from '../../scss/images/sponsors-white.png'

export default function Home({
  title,
  subtitle,
  btnText,
  btnLink,
  scrollDownId,
  socialLinksHeading,
 
  bgImageUrl,
}) {
  pageTitle('Home');

  // Hero Social Links
  const heroSocialLinks = [
    {
      name: 'Behance',
      links: '/',
    },
    {
      name: 'Twitter',
      links: '/',
    },
  ];

  // FunFact Data
  const funfaceData = [
    {
      title: 'Global Happy Clients',
      factNumber: '40K',
    },
    {
      title: 'Project Completed',
      factNumber: '50K',
    },
    {
      title: 'Team Members',
      factNumber: '245',
    },
    {
      title: 'Digital products',
      factNumber: '550',
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Start Hero Section */}
      <Hero
        title="ADVOCACY ON BEHALF OF AFRICAN-AMERICAN 
        ELECTED AND APPOINTED COUNTY OFFICIALS"
        subtitle="The founding members of NABCO believed it was imperative for African-Americans to have a specific and definable voice at the table where decisions were being made that would ultimately impact their constituents and underserved populations."
        btnText="Get a Quote"
        scrollDownId="#service"
        socialLinksHeading="Follow Us"
        heroSocialLinks={heroSocialLinks}
        bgImageUrl= {NabcoBG}
      />
      {/* End Hero Section */}

      {/* Start FunFact Section */}
<Div id='service'/>
      {/* End FunFact Section */}
      <Spacing  lg="150" md="80" />

      <Div className="container">
        <Div className="row">
          <Div className="col-lg-6">
            <Spacing lg="55" md="30" />
            <SectionHeading
              title="National Association of Black County Officials"
              subtitle="About Us"
              btnLink='/about'
              btnText="Read More">
              <Spacing lg="30" md="20" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="30" md="20" />
              <p className="cs-m0 text-black ">
              Since its founding in 1975, the National Association of Black County Officials NABCO has provided a forum
              for networking, information and resource sharing, and issue advocacy on behalf of African-American elected
              and appointed county officials. NABCO members serve in major policy roles throughout America’s 3,069
              counties, boroughs, and parishes, and represent some of the most diverse populations in America’s rural
              communities and urban centers
              </p>
            </SectionHeading>
            <Spacing lg="0" md="50" />
          </Div>
          <Div className="col-lg-6">
            <Spacing lg="55" md="30" />
            <div class="images-box">
              <div class="images-box-item images-box-item-right">
                <div class="wow fadeScale"><img src={NabcoAbout1} alt="" width="470" height="590" />
                </div>
              </div>
              <div class="images-box-item images-box-item-left">
                <div class="wow fadeScale"><img src={NabcoAbout2}  alt="" width="270" height="257" />
                </div>
              </div>
            </div>
            <Spacing lg="0" md="50" />
          </Div>
          </Div>
          </Div>
      {/* Start Portfolio Section */}
      <Spacing lg="100" md="50" />

      {/* End Portfolio Section */}
      {/* Start Service Section */}
      <Spacing lg="170" md="80" />

      <div className="container">
        <FunFact
          variant="cs-type1"
          title="Our fun fact"
          subtitle="Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis."
          data={funfaceData}
        />
      </div>
   
      {/* Start Team Section */}
      <Spacing lg="145" md="80" />
  
      {/* End Team Section */}

      {/* Start Testimonial Section */}
      <Div className="cs-gradient_bg_1 pt-5">
      <MovingText text=" NABCO 2024 | MIAMI-DADE COUNTY | " />

      <Div className="container text-center ">

        <h1 class="h1-nabco-title wow fadeScale " data-caption-animate="fadeInUp" data-caption-delay="100"
                data-caption-duration="900">NABCO 2024</h1>
              <h4 class="h4-nabco text-spacing-200 wow fadeInUp " data-wow-delay=".8s" data-caption-animate="fadeInUp"
                data-caption-delay="300" data-caption-duration="900"> Leadership Summit & Retreat
                </h4>
                <img class="img-opacity" width="400" src={Sponsors} />
                <Timer />
      </Div>
      <TestimonialSliderDark />

      <MovingText text=" NABCO 2024 | MIAMI-DADE COUNTY | " />
      <Spacing lg="105" md="70" />
      </Div>
      {/* End Testimonial Section */}

      {/* Start Blog Section */}
   
    </>
  );
}
