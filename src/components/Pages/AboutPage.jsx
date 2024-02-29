import React, { useEffect } from 'react';
import { pageTitle } from '../../helper';
import Cta from '../Cta';
import FunFact from '../FunFact';
import PageHeading from '../PageHeading';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import TeamSliderBoard from '../Slider/TeamSliderBoard';
import Spacing from '../Spacing';
import LogoBlack from "../../scss/images/logo-black.png"
import NabcoBG from "../../scss/images/nabco-bg.jpg"





export default function AboutPage() {
  pageTitle('About');

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
      {/* Start Page Heading Section */}
      <PageHeading
        title="About Us"
        bgSrc={NabcoBG}
        pageLinkText="About Us"
      />
      {/* End Page Heading Section */}

      {/* Start About Section */}
      <Spacing lg="50" md="80" />

      <Div className="container">
             <img className='center-block' src={LogoBlack } width={500} />
             <Spacing lg="50" md="80" />
          <SectionHeading
              title="Our Story"
              subtitle="National Association of Black County Officials">
    
              <Spacing lg="30" md="20" />
              <Div className="cs-separator cs-accent_bg"></Div>

              <p className="cs-m0 text-black pt-4">
           
              Since its founding in 1975, the National Association of Black County Officials (NABCO has provided a forum for networking, information and resource sharing, and issue advocacy on behalf of African-American elected and appointed county officials. NABCO members serve in major policy roles throughout America’s 3,069 counties, boroughs, and parishes, and represent some of the most diverse populations in America’s rural communities and urban centers.​
<br />
<Spacing lg="15" md="15" />

Headquartered in Washington, DC, NABCO has emerged as one of the most influential caucuses in the nation’s capital advocating before federal policymakers on behalf of African-American officials. NABCO hosts meetings, webinars, discussions, networking events, and scholarship fundraisers. Our largest live gatherings are during NACo's Legislative Conference, Annual Summer Conference and NOBCO's Economic Development Conference (EDC) in selected counties each year.
              </p>

           
            </SectionHeading>
           
          </Div>
     
      <Spacing lg="75" md="55" />
      {/* End About Section */}

      <Div className="container">
      <SectionHeading
              title=" 2024 NABCO Officials"
              subtitle="Board Members">
    
              <Spacing lg="30" md="20" />
              <Div className="cs-separator cs-accent_bg"></Div>

            </SectionHeading>
            </Div>
            <Spacing lg="75" md="55" />

<TeamSliderBoard />



    </>
  );
}
