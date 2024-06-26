import React from 'react'
import { Icon } from '@iconify/react';

export default function ContactInfoWidget({withIcon, title}) {
  return (
    <>
      {title && <h2 className="cs-widget_title ">{title}</h2>}
      <ul className="cs-menu_widget cs-style1 cs-mp0 text-black">
     
        <li>
          {withIcon?<span className='cs-accent_color'><Icon icon="mdi:envelope" /></span>:''}
         <a href="mailto:membership@thenabco.org"> membership@thenabco.org </a> 
        </li>
        <li>
          {withIcon?<span className='cs-accent_color'><Icon icon="mdi:map-marker" /></span>:''}
         
111 NW First Street  <br/>Miami, Florida 33128
        </li>
      </ul>
    </>
  )
}
