import React, { useEffect } from 'react';
import { pageTitle } from '../../helper';
import Cta from '../Cta';
import FunFact from '../FunFact';
import NabcoPageHeading from '../NabcoPageHeading';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import TeamSlider from '../Slider/TeamSlider';
import Spacing from '../Spacing';
import LogoBlack from "../../scss/images/logo-black.png"
import NabcoBG from "../../scss/images/nabco-bg.jpg"
import TestimonialSliderDark from "../Slider/TestimonialSliderDark"
import Timer from "../Widget/Timer";
import NabcoHotel1 from "../../scss/images/home-2-01-470x590.jpg"
import NabcoHotel2 from "../../scss/images/home-2-02-270x257.jpg"
import Button from '../Button';
import Sponsors from '../../scss/images/sponsors-black.png'
import LogoList from '../LogoList';



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
      <NabcoPageHeading
        title="About Us"
        bgSrc={NabcoBG}
        pageLinkText="About Us"
      />
      {/* End Page Heading Section */}

      {/* Start About Section */}

      <Div className="cs-light_gray_bg ">
        <Spacing lg="75" md="55" />
        <Div className="container">
          <Div className="row justify-content-center">
            <Div className="col-xl-5 col-lg-7 mb-5 ">
              <Div className="container text-center">
                <h1 class="h1-nabco wow fadeScale text-black" data-caption-animate="fadeInUp" data-caption-delay="100"
                  data-caption-duration="900">NABCO 2024</h1>
                <h4 class="h4-nabco text-spacing-200 text-black wow fadeInUp " data-wow-delay=".8s" data-caption-animate="fadeInUp"
                  data-caption-delay="300" data-caption-duration="900"> Leadership Summit & Retreat
                </h4>
                <Spacing lg="5" md="5" />
                <h4 class="h4-nabco-date wow fadeInUp text-black " data-wow-delay=".8s" data-caption-animate="fadeInUp"
                data-caption-delay="300" data-caption-duration="900"> April 25-27 2024 | Miami, FL
                </h4>
              </Div>
              <Spacing lg="15" md="15" />
              <p className="cs-m0 text-black mb-2">
                Headquartered in Washington, DC, NABCO has emerged as one of the most influential caucuses in the nation’s capital advocating before federal policymakers on behalf of African-American officials. NABCO hosts meetings, webinars, discussions, networking events, and scholarship fundraisers.
              </p>
              {/* <Button className="mb-5" btnLink='https://book.passkey.com/gt/219688193?gtid=76fd8ac91e19f2e8f1958d298994d193' btnText="Book Now" /> */}
              <div class="row justify-content-center p-3">

                <div class="col-md-8 col-lg-12">
                  <a href='https://book.passkey.com/gt/219688193?gtid=76fd8ac91e19f2e8f1958d298994d193' >
                  <div class="wrap">
              
                    <div class="text-wrap vcenter">
                      <h2 class="mbr-fonts-style mbr-bold mbr-section-title3 display-5">InterContinental Miami <br/> Hotel Booking </h2>
                    </div>
                  </div>
                  </a>
                </div>
              </div>
              <div class="row justify-content-center p-3">

                <div class="col-md-8 col-lg-12">
                <a href='https://www.eventbrite.com/e/nabco-2024-leadership-summit-retreat-tickets-851677740047?aff=oddtdtcreator' >

                  <div class="wrap">
                 
                    <div class="text-wrap vcenter">
                      <h2 class="mbr-fonts-style mbr-bold mbr-section-title3 display-5">NABC0 2024 <br />  REGISTRATION TICKET</h2>
                    </div>
                  </div>
                  </a>
                </div>
              </div>
            </Div>
            <Div className="col-lg-5 offset-xl-2">
              <div class="images-box">
                <div class="images-box-item images-box-item-right">
                  <div class="wow fadeScale"><img src={NabcoHotel1} alt="" width="470" height="590" />
                  </div>
                </div>
                <div class="images-box-item images-box-item-left">
                  <div class="wow fadeScale"><img src={NabcoHotel2} alt="" width="270" height="257" />
                  </div>
                </div>
              </div>

            </Div>
          </Div>


        </Div>


        <TestimonialSliderDark />


      </Div>




      <Div className="container">

        <h4 class="h4-nabco-gray text-spacing-200 text-center wow fadeScale text-gray pt-5" data-caption-animate="fadeInUp" data-caption-delay="100"
          data-caption-duration="900"> </h4>
        <h2 class="h2-nabco-gray text-center  wow fadeInUp " data-wow-delay=".8s" data-caption-animate="fadeInUp"
          data-caption-delay="300" data-caption-duration="900"> Our Sponsors
        </h2>
        <Spacing lg="50" md="80" />

        <LogoList />
      </Div>
      <Spacing lg="150" md="80" />



      {/* End CTA Section */}
    </>
  );
}
