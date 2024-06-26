import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import SocialWidget from '../Widget/SocialWidget';
import Newsletter from '../Widget/Newsletter';
import './header.scss';
import ContactInfoWidget from '../Widget/ContactInfoWidgetLight';
import Div from '../Div';
import DropDown from './DropDown';
import Logo from "../../scss/images/logo.png"

export default function Header({ variant }) {
  const [isSticky, setIsSticky] = useState(false);
  const [sideHeaderToggle, setSideHeaderToggle] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    });
  }, []);

  return (
    <>
      <header
        className={`cs-site_header cs-style1 text-uppercase ${
          variant ? variant : ''
        } cs-sticky_header ${isSticky ? 'cs-sticky_header_active' : ''}`}
      >
        <Div className="cs-main_header">
          <Div className="container">
            <Div className="cs-main_header_in">
              <Div className="cs-main_header_left">
                <Link className="cs-site_branding" to="/">
                  <img src={Logo} alt="Logo" />
                </Link>
              </Div>
              <Div className="cs-main_header_center">
                <Div className="cs-nav cs-primary_font cs-medium">
                  <ul
                    className="cs-nav_list"
                    style={{ display: `${mobileToggle ? 'block' : 'none'}` }}
                  >
                    <li className="menu-item-has-children">
                      <NavLink to="/" onClick={() => setMobileToggle(false)}>
                        Home
                      </NavLink>
                 
                    </li>
                    <li>
                      <NavLink
                        to="about"
                        onClick={() => setMobileToggle(false)}
                      >
                        About
                      </NavLink>
                    </li>
                    <li className="menu-item-has-children">
                      <NavLink
                        to="nabco2024"
                        onClick={() => setMobileToggle(false)}
                      >
                       NABCO 2024
                      </NavLink>
               
                    </li>
                    <li className="menu-item-has-children">
                      <NavLink
                        to="contact"
                        onClick={() => setMobileToggle(false)}
                      >
                       Contact
                      </NavLink>
               
                    </li>
              
                
               
                  </ul>
      
                </Div>
              </Div>
              <Div className="cs-main_header_right">
                <Div className="cs-toolbox">
                  <span
                    className="cs-icon_btn"
                    onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
                  >
                    <span className="cs-icon_btn_in">
                      <span />
                      <span />
                      <span />
                      <span />
                    </span>
                  </span>
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </header>

      <Div
        className={
          sideHeaderToggle ? 'cs-side_header active' : 'cs-side_header'
        }
      >
        <button
          className="cs-close"
          onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
        />
        <Div
          className="cs-side_header_overlay"
          onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
        />
        <Div className="cs-side_header_in">
          <Div className="cs-side_header_shape" />
          <Link    onClick={() => setSideHeaderToggle(!sideHeaderToggle)} className="cs-site_branding" to="/">
            <img src={Logo} alt="Logo" />
          </Link>
          
          <Div className="cs-side_header_box">
            <ul className='mobile-menu'>
              <li> <Link  onClick={() => setSideHeaderToggle(!sideHeaderToggle)} className="cs-site_branding" to="/">
                <h2 className="cs-side_header_heading">
                  Home
                  </h2>
              </Link>
              </li>
              <li> <Link onClick={() => setSideHeaderToggle(!sideHeaderToggle)} className="cs-site_branding" to="about">
                <h2 className="cs-side_header_heading">
                  About
                  </h2>
              </Link>
              </li>
              <li> <Link onClick={() => setSideHeaderToggle(!sideHeaderToggle)} className="cs-site_branding" to="nabco2024">
                <h2 className="cs-side_header_heading">
                  Nabco 2024
                  </h2>
              </Link>
              </li>
              <li> <Link onClick={() => setSideHeaderToggle(!sideHeaderToggle)} className="cs-site_branding" to="contact">
                <h2 className="cs-side_header_heading">
                  Contact
                  </h2>
              </Link>
              </li>
            </ul>
         
        
          </Div>
          <Div className="cs-side_header_box">
            <ContactInfoWidget title="Contact Us" withIcon />
          </Div>
       
          <Div className="cs-side_header_box">
            <SocialWidget />
          </Div>
        </Div>
      </Div>
    </>
  );
}
