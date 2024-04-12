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
                                                                                <img src={Roof} class="mx-auto d-block mb-1 addcartimg" />
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-8 col-lg-9 col-xl-10">
                                                                        <div class="cartviewprice d-block">
                                                                            <span class="amt">Welcome to Miami Rooftop Party</span>

                                                                        </div>
                                                                        <div class="seller d-block">
                                                                            <span>Hosted By:</span>
                                                                            <br />
                                                                            <span>Commissioner Kionne McGhee, Mayor Daniella Levine Cava, Luther Campbell, Congresswoman Frederica Wilson, Chairman Oliver Gilbert III & David Whitaker</span>

                                                                        </div>
                                                                        <div class="d-block text-truncate mb-1">
                                                                            <a href="cateview.php" class="cartproname">8:00pm-11:00pm</a>
                                                                        </div>


                                                                    </div>
                                                                </div>

                                                            </div>
                                                            <div class="col-lg-3 ml-lg-auto align-self-start mt-2 mt-lg-0">
                                                                <div class="row">
                                                                    <div class="prostatus">
                                                                        <span class="del-time"><span> InterContinental Hotel  Rooftop </span></span>
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
                    <Tab 

                        eventKey="profile" title="Day 2: April 26">
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
                                                                            <img src={Ballroom} class="mx-auto d-block mb-1 addcartimg" />
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-8 col-lg-9 col-xl-10">
                                                                        <div class="cartviewprice d-block">
                                                                            <span class="amt">NABCO 2024 Leadership Summit & Retreat</span>

                                                                        </div>
                                                                        <div class="seller d-block">
                                                                            <span>Hosted By: NABCO President </span>
                                                                            <br />
                                                                            <span>Commissioner Kionne McGhee</span>

                                                                        </div>
                                                                        <div class="d-block text-truncate mb-1">
                                                                            <a href="cateview.php" class="cartproname">8:30am-12:00pm</a>
                                                                        </div>


                                                                    </div>
                                                                </div>

                                                            </div>
                                                            <div class="col-lg-3 ml-lg-auto align-self-start mt-2 mt-lg-0">
                                                                <div class="row">
                                                                    <div class="prostatus">
                                                                        <span class="del-time"><span> InterContinental Hotel  Bayfront Ballroom (1st Level) </span></span>
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
                                                                                <img src={Urban}  class="mx-auto d-block mb-1 addcartimg" />
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-8 col-lg-9 col-xl-10">
                                                                        <div class="cartviewprice d-block">
                                                                            <span class="amt">Cocktails & Conversation</span>

                                                                        </div>
                                                                        <div class="seller d-block">
                                                                            <span>Special Guest Speaker </span>
                                                                            <br />
                                                                            <span>District Attorney, Fani Willis</span>

                                                                        </div>
                                                                        <div class="d-block text-truncate mb-1">
                                                                            <a href="cateview.php" class="cartproname">8:00pm – 11pm</a>
                                                                        </div>


                                                                    </div>
                                                                </div>

                                                            </div>
                                                            <div class="col-lg-3 ml-lg-auto align-self-start mt-2 mt-lg-0">
                                                                <div class="row">
                                                                    <div class="prostatus">
                                                                        <span class="del-time"><span> The Urban Miami (1000 NW 2nd Avenue, Miami, FL 33136) </span></span>
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
                                                    <img src={Ballroom} class="mx-auto d-block mb-1 addcartimg" />
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-8 col-lg-9 col-xl-10">
                                            <div class="cartviewprice d-block">
                                                <span class="amt">NABCO 2024 Disscussion Panel: Power, Politics & People</span>

                                            </div>
                                            <div class="seller d-block">
                                                <span>Moderator: </span>
                                                <br />
                                                <span>Commissioner Kionne McGhee</span>

                                            </div>
                                            <div class="d-block text-truncate mb-1">
                                                <a href="cateview.php" class="cartproname">8:30am-12:00pm</a>
                                            </div>


                                        </div>
                                    </div>

                                </div>
                                <div class="col-lg-3 ml-lg-auto align-self-start mt-2 mt-lg-0">
                                    <div class="row">
                                        <div class="prostatus">
                                            <span class="del-time"><span> InterContinental Hotel Bayfront Ballroom (1st Level) </span></span>
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
                                                    <img src={Ballroom} class="mx-auto d-block mb-1 addcartimg" />
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-8 col-lg-9 col-xl-10">
                                            <div class="cartviewprice d-block">
                                                <span class="amt">Saturday Night Live: Farewell Party</span>

                                            </div>
                                            <div class="seller d-block">
                                                <span>Special Guest Speaker </span>
                                                <br />
                                                <span>Journalist, Jeff Johnson | Power, Politics & People/The Importance on Voting</span>

                                            </div>
                                            <div class="d-block text-truncate mb-1">
                                                <a href="cateview.php" class="cartproname">8:00pm – 11pm</a>
                                            </div>


                                        </div>
                                    </div>

                                </div>
                                <div class="col-lg-3 ml-lg-auto align-self-start mt-2 mt-lg-0">
                                    <div class="row">
                                        <div class="prostatus">
                                        <span class="del-time"><span> InterContinental Hotel Bayfront Ballroom (1st Level) </span></span>
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
