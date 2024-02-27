import React from 'react'
import { Icon } from '@iconify/react';

export default function ContactInfoWidget({withIcon, title}) {
  return (
    <>
      {title && <h2 className="cs-widget_title text-white">{title}</h2>}
      <ul className="cs-menu_widget cs-style1 cs-mp0">
     
        <li>
          {withIcon?<span className='cs-accent_color'><Icon icon="mdi:envelope" /></span>:''}
          membership@thenabco.org
        </li>
        <li>
          {withIcon?<span className='cs-accent_color'><Icon icon="mdi:map-marker" /></span>:''}
         
111 NW First Street  <br/>Miami, Florida 33128
        </li>
      </ul>
    </>
  )
}
