import React, { useEffect } from 'react';
import { pageTitle } from '../../helper';
import Cta from '../Cta';
import FunFact from '../FunFact';
import PageHeading from '../PageHeading';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import TeamSlider from '../Slider/TeamSlider';
import Spacing from '../Spacing';
import LogoBlack from "../../scss/images/logo-black.png"
import NabcoBG from "../../scss/images/nabco-bg.jpg"
import klm from "../../scss/images/klm-signature.png"
import klmphoto from "../../scss/images/single-news-01-770x472.jpg"


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
        title="Greetings"
        bgSrc={NabcoBG}
        pageLinkText="Greetings"
      />
      {/* End Page Heading Section */}
 
      {/* Start About Section */}
      <Spacing lg="100" md="80" />
      <Div className="container  ">
       
      <img className='center-block' src={klmphoto} width={500} />
      <Spacing lg="100" md="80" />
          <SectionHeading
              title="Dear Esteemed Members <br /> and Supporters"
              subtitle="Message from our president"
        
             
            >

              <Spacing lg="30" md="20" />
              <Div className="cs-separator cs-accent_bg"></Div>

              <p className="cs-m0 text-black pt-4">
           

I am deeply honored to extend my heartfelt gratitude to each and every one of you who has dedicated time, effort, and resources to support our shared vision through the National Association of Black County Officials (NABCO).

<br/> 
<Spacing lg="30" md="20" />
Since its inception in 1975, NABCO has served as a beacon of unity, empowerment, and advocacy for African-American elected and appointed county officials across the nation. Our organization has been instrumental in fostering invaluable connections, facilitating information exchange, and championing critical issues affecting our diverse communities.
<br/> 
<Spacing lg="30" md="20" />
From the bustling streets of urban centers to the tranquil landscapes of rural America, NABCO members stand at the forefront of policymaking, representing the voices and aspirations of some of the most vibrant and dynamic populations in our country's counties, boroughs, and parishes.
<br/> 
<Spacing lg="30" md="20" />
Headquartered in the heart of our nation's capital, NABCO has continually elevated its influence, emerging as a powerful force in advocating before federal policymakers on behalf of African-American officials nationwide. Through a myriad of initiatives including meetings, webinars, discussions, networking events, and scholarship fundraisers, we have consistently strived to empower our members and amplify their voices on the issues that matter most.
<br/> 
<Spacing lg="30" md="20" />
As we look towards the future, I am filled with optimism and determination, knowing that together, we will continue to advance our mission and effect positive change in our communities. Whether it be through our participation in NACo's Legislative Conference, Annual Summer Conference, or NOBCO's Economic Development Conference, each gathering serves as a testament to our unwavering commitment to progress and prosperity.
<br/> 
<Spacing lg="30" md="20" />
Once again, I extend my deepest appreciation to all who have contributed to the success and vitality of NABCO. Your dedication and passion inspire us to persevere in our collective pursuit of a brighter tomorrow.
<br />
<Spacing lg="35" md="15" />
With gratitude and warm regards,
<br />
<Spacing lg="15" md="15" />

<img src={klm} width={300}/>
<Spacing lg="15" md="15" />
President, Kionne L. McGhee


<p>Miami-Dade County Commissioner</p>
<br />
<Spacing lg="15" md="15" />

              </p>

           
            </SectionHeading>
           
          </Div>
     
      <Spacing lg="75" md="55" />
      {/* End About Section */}



    </>
  );
}
