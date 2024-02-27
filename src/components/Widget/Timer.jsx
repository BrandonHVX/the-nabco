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
import TestimonialSlider from "../Slider/TestimonialSlider"



export const Timer = () => {

  // timer
  var timer;

  var compareDate = new Date();
  compareDate.setDate(compareDate.getDate() + 59);

  timer = setInterval(function () {
      timeBetweenDates(compareDate);
  }, 1000);

  function timeBetweenDates(toDate) {
      var dateEntered = toDate;
      var now = new Date();
      var difference = dateEntered.getTime() - now.getTime();

      if (difference <= 0) {

          // Timer done
          clearInterval(timer);

      } else {

          var seconds = Math.floor(difference / 1000);
          var minutes = Math.floor(seconds / 60);
          var hours = Math.floor(minutes / 60);
          var days = Math.floor(hours / 24);

          hours %= 24;
          minutes %= 60;
          seconds %= 60;

          const daysElemement = document.querySelector('#days');
          if( daysElemement != undefined ) {
              daysElemement.innerHTML = days;
          }
          
          const hoursElemement = document.querySelector('#hours');
          if ( hoursElemement != undefined ) {
              hoursElemement.innerHTML = hours;
          }

          const minutesElemement = document.querySelector('#minutes');
          if ( minutesElemement != undefined ) {
              minutesElemement.innerHTML = minutes;
          }
          
          const secondsElemement = document.querySelector('#seconds');
          if ( secondsElemement != undefined ) {
              secondsElemement.innerHTML = seconds;
          }
      }
  }
}

export default function AboutPage() {
  pageTitle('About');
  const TimerModule = () => {
    useEffect(() => {
        Timer();
    }, []);

    return (
        <>
        {/* timer */}
        <div className=' countdown countdown-rect'>
        <div className='countdown-block'>
        <div className='countdown-wrap'>
        <div id="timer" className="mil-timer mil-mb-90">
            <div className="mil-timer-item">
                <span id="days" className="mil-timer-number">00</span>
                <h6 className="mil-text-xs mil-upper mil-light">days</h6>
            </div>
            <div className="mil-timer-item">
                <span id="hours" className="mil-timer-number">00</span>
                <h6 className="mil-text-xs mil-upper mil-light">hours</h6>
            </div>
            <div className="mil-timer-item">
                <span id="minutes" className="mil-timer-number">00</span>
                <h6 className="mil-text-xs mil-upper mil-light">minutes</h6>
            </div>
            <div className="mil-timer-item">
                <span id="seconds" className="mil-timer-number">00</span>
                <h6 className="mil-text-xs mil-upper mil-light">seconds</h6>
            </div>
            </div>
            </div>
        </div>
        </div>
        {/* timer end */}
        </>
    );
};
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
   

      <TimerModule/>
   
  
    </>
  );
}
