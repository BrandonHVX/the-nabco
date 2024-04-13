import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination, Navigation } from 'swiper';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import parse from 'html-react-parser';
import 'swiper/css';
import 'swiper/css/pagination';
import Div from '../Div';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Ballroom from '../../scss/images/ballroom.jpg'
import Urban from '../../scss/images/urban.jpg'
import Roof from '../../scss/images/rooftop.jpg'
import Tabs from 'react-bootstrap/Tabs';
import Speaker1 from '../../scss/images/speaker-04-270x303.jpg'
import Rooftop from "../../scss/images/instagram-rooftop.jpg"
import Fani from "../../scss/images/instagram-fani.jpg"
import Panel from "../../scss/images/instagram-panel.jpg"
import Jeff from "../../scss/images/instagram-jeff.jpg"




export default function Schedule({ data }) {
    return (
        <>
    <Div className="speakers-bg container cs-light_gray_bg">

    <h4 class="h4-nabco-gray  text-center text-spacing-200  wow fadeScale text-gray" data-caption-animate="fadeInUp" data-caption-delay="100"
                data-caption-duration="900">Who's Speaking</h4>
<h2 class="h2-nabco-gray text-center  wow fadeInUp " data-wow-delay=".8s" data-caption-animate="fadeInUp"
  data-caption-delay="300" data-caption-duration="900"> NABCO 2024 Schedule
</h2>


            <div className=''>
 

            





                <Tabs
                    defaultActiveKey="home"
                    id="fill-tab-example"
                    className="mb-3 text-black"
                    fill
                >
                    <Tab eventKey="home" title="Day 1: April 25">
                    <div class="container-fluid mt-3 mb-4">

<div class="col-lg-12">
    <div class="row justify-content-center">
        <div class="col-lg-12 px-0 pr-lg-2 mb-2 mb-lg-0">
            <div class="card border-light bg-white card proviewcard shadow-sm">

                <div class="card-body">


                    <div class="col-lg-12 p-3 cardlist">
                        <div class="col-lg-12">
                            <div class="row">
                                <div class="col-lg-8">
                                    <div class="row">
                                        <div class="col-4 col-lg-3 col-xl-2">
                                            <div class="row">
                                                <a href="cateview.php" class="w-100">
                                                <img src={Rooftop} class="mx-auto  mb-1 addcartimg" />
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-8 col-lg-9 col-xl-10">
                                            <div class="cartviewprice d-block">
                                                <span class="amt">Welcome to Miami Rooftop Party</span>

                                            </div>
                                            <div class="prostatus">
                                                                <span class="cartproname"> Thursday, April 25 | 8:00pm – 11:00pm
                                                                
                                                                <br/> InterContinental Hotel Miami Rooftop 
                                                                </span>

                                                               
                                        </div>  
                                            
                                      
                                        


                                        </div>
                                    
                                    </div>

                                </div>

                                <div class="col-lg-4 ml-lg-auto align-self-start mt-2 mt-lg-0">
                                                                <div class="row">
                                                                <div class="seller ">
                                                                <strong>Special Invited Guests </strong>
                                                <br />
                                                <span>NABCO President Commissioner Kionne Mcghee, Mayor Daniella Levine Cava, Luther Campbell, Congresswoman Frederica Wilson, Chairman Oliver Gilbert III & David Whitaker</span>

                                            </div>
                                        
                                                                </div>
                                                            </div>
                          
                            </div>
                        </div>
                    </div>


                </div>


            </div>
        </div>
    </div>
</div>

</div>


                    </Tab>
                    <Tab  eventKey="profile" title="Day 2: April 26">
                        <div class="container-fluid mt-3 mb-4">

                            <div class="col-lg-12">
                                <div class="row justify-content-center">
                                    <div class="col-lg-12 px-0 pr-lg-2 mb-2 mb-lg-0">
                                        <div class="card border-light bg-white card proviewcard shadow-sm">

                                            <div class="card-body">
                                                <div class="col-lg-12 p-3 cardlist">
                                                    <div class="col-lg-12">
                                                        <div class="row">

                                                            <div class="col-lg-8">
                                                                <div class="row">
                                                                    <div class="col-4 col-lg-3 col-xl-2">
                                                                        <div class="row">
                                                                            <a href="cateview.php" class="w-100">
                                                                            <img src={Panel} class="mx-auto  mb-1 addcartimg" />
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-8 col-lg-9 col-xl-10">
                                                                        <div class="cartviewprice d-block">
                                                                            <span class="amt">NABCO 2024 Leadership Summit & Retreat: Politics vs Policy Panel </span>

                                                                        </div>
                                                                        <div class="d-block text-truncate mb-1">
                                                                        <span class="cartproname"> Friday, April 26 | 8:30am – 12pm</span>

                                                                        </div>
                                                                        <div class="prostatus">
                                                                        <span class="del-time"><span> InterContinental Hotel  Bayfront Ballroom (1st Level) </span></span>
                                                                    </div>
                                                                      


                                                                    </div>
                                                                </div>

                                                            </div>

                                                            
                                                            <div class="col-lg-4 ml-lg-auto align-self-start mt-2 mt-lg-0">
                                                                <div class="row">
                                                                <div class="seller d-block">
                                                <span><strong>Moderator:</strong> Bill Diggs</span>
                                                <br />
                                                <span><strong>Featured Panelist:</strong> Rodney Ellis, Mary Estimé-Irvin, Stanley Moore and Victoria Siplin </span>

                                            </div>
                                        
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>



                                                <div class="col-lg-12 p-3 cardlist">
                                                    <div class="col-lg-12">
                                                        <div class="row">

                                                            <div class="col-lg-8">
                                                                <div class="row">
                                                                    <div class="col-4 col-lg-3 col-xl-2">
                                                                        <div class="row">
                                                                            <a href="cateview.php" class="w-100">
                                                                                <img src={Fani}  class="mx-auto  mb-1 addcartimg" />
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-8 col-lg-9 col-xl-10">
                                                                        <div class="cartviewprice d-block">
                                                                            <span class="amt">Cocktails & Conversation with District Attorney Fani Willis</span>

                                                                        </div>
                                                                        <div class="d-block text-truncate mb-1">
                                                                            <span class="cartproname"> Friday, April 26 | 8:00pm – 11:00pm</span>

                                                                        </div>
                                               
                                                                     
                                                                        <div class="prostatus">
                                                                        <span class="del-time"><span> The Urban Miami (1000 NW 2nd Avenue, Miami, FL 33136) </span></span>
                                                                    </div>

                                                                    </div>
                                                                </div>

                                                            </div>
                                                            <div class="col-lg-4 ml-lg-auto align-self-start mt-2 mt-lg-0">
                                                                <div class="row">
                                                                <div class="seller ">
                                                                <strong>Special Invited Guests </strong>
        
                                                <br />
                                                <span> NABCO President Commissioner Kionne McGhee & District Attorney Fani Willis</span>

                                            </div>
                                        
                                                                </div>
                                                            </div>
                                                       
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </Tab>
                    <Tab className="tab-3" eventKey="longer-tab" title="Day 3: April 27">
                    <div class="container-fluid mt-3 mb-4">

<div class="col-lg-12">
    <div class="row justify-content-center">
        <div class="col-lg-12 px-0 pr-lg-2 mb-2 mb-lg-0">
            <div class="card border-light bg-white card proviewcard shadow-sm">

                <div class="card-body">
                    <div class="col-lg-12 p-3 cardlist">
                        <div class="col-lg-12">
                            <div class="row">

                                <div class="col-lg-8">
                                    <div class="row">
                                        <div class="col-4 col-lg-3 col-xl-2">
                                            <div class="row">
                                                <a href="cateview.php" class="w-100">
                                                    <img src={Ballroom} class="mx-auto mb-1 addcartimg" />
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-8 col-lg-9 col-xl-10">
                                            <div class="cartviewprice d-block">
                                                <span class="amt">NABCO 2024 Leadership Summit & Retreat </span>

                                            </div>
                                    
                                            <div class="d-block text-truncate mb-1">
                                                <a href="cateview.php" class="cartproname"> Saturday, April 27 | 8:30am-12:00pm</a>
                                            </div>
                                            <div class="prostatus">
                                            <span class="del-time"><span> InterContinental Hotel Bayfront Ballroom (1st Level) </span></span>
                                        </div>

                                        </div>
                                    </div>

                                </div>
                                <div class="col-lg-3 ml-lg-auto align-self-start mt-2 mt-lg-0">
                                    <div class="row">
                                    <div class="seller ">
                                    <strong> Guest Speakers</strong> 
                                                <br />
                                              <span>  Kneeland Youngblood, Desmond Meade & Freddie Figgers</span>

                                            </div>
                                      
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div class="col-lg-12 p-3 cardlist">
                        <div class="col-lg-12">
                            <div class="row">
                                <div class="col-lg-8">
                                    <div class="row">
                                        <div class="col-4 col-lg-3 col-xl-2">
                                            <div class="row">
                                                <a href="cateview.php" class="w-100">
                                                    <img src={Jeff} class="mx-auto mb-1 addcartimg" />
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-8 col-lg-9 col-xl-10">
                                            <div class="cartviewprice d-block">
                                                <span class="amt">Saturday Night Live: Farewell Party</span>

                                            </div>
                                            <div class="d-block text-truncate mb-1">
                                                <a href="cateview.php" class="cartproname"> Saturday, April 27 | 8:00pm-11:00pm</a>
                                            </div>
                                          
                                            <div class="prostatus">
                                        <span class="del-time"><span> InterContinental Hotel Bayfront Ballroom (1st Level) </span></span>
                                        </div>


                                        </div>
                                    </div>

                                </div>
                                <div class="col-lg-3 ml-lg-auto align-self-start mt-2 mt-lg-0">
                                    <div class="row">
                                    <div class="seller">
                                                <span><strong>Guest Speaker</strong> </span>
                                                <br />
                                                <span>Journalist, Jeff Johnson | Power, Politics & People/The Importance on Voting</span>

                                            </div>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>
</div>

</div>
                    </Tab>

                </Tabs>
            </div>
            </Div>
        </>

    );
}
