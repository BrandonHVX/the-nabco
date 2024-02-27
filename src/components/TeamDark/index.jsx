import React from 'react'
import { Icon } from '@iconify/react';
import './team.scss'
import { Link } from 'react-router-dom';
import Div from '../Div';

export default function Team({memberImage, memberName, memberDesignation, memberSocial}) {
  return (


   
    <Div className="cs-team cs-style1 ">
        <Div className="cs-member_thumb">
          <img src={memberImage} alt={memberName} width="100px" />
      
        </Div>
        <Div className="cs-member_info text-black">
          <h2 className="cs-member_name text-black">{memberName}</h2>
          <Div className="cs-member_designation">{memberDesignation}</Div>
        </Div>
        <Div className="cs-member_social cs-primary_color">
          {memberSocial.linkedin && (
            <Link to={memberSocial.linkedin}>
              <Icon icon="fa6-brands:linkedin-in" />                   
            </Link>
          )}
          {memberSocial.twitter && (
            <Link to={memberSocial.twitter}>
              <Icon icon="fa-brands:twitter" />                                        
            </Link>
          )}
          {memberSocial.youtube && (
            <Link to={memberSocial.youtube}>
              <Icon icon="fa-brands:youtube" />                     
            </Link>
          )}
          {memberSocial.facebook && (
            <Link to={memberSocial.facebook}>
              <Icon icon="fa-brands:facebook-f" />                    
            </Link>
          )}
        </Div>
      </Div>
  )
}