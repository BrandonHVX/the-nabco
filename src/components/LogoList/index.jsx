import React from 'react'
import Div from '../Div'
import './logolist.scss'
import Sponsor1 from '../../scss/images/sponsor-01-117x70.png'
import Sponsor3 from '../../scss/images/sponsor-03-119x33.png'

import Sponsor4 from '../../scss/images/sponsor-05-117x70.png'
import Sponsor6 from '../../scss/images/sponsor-06-119x33.png'


export default function LogoList() {
  const partnerLogos = [
    {
      src: Sponsor1, 
      alt:'Partner'
    },
    {
      src: Sponsor3, 
      alt:'Partner'
    },
    {
      src: Sponsor4, 
      alt:'Partner'
    },
    {
      src: Sponsor6, 
      alt:'Partner'
    },
  
  ]
  return (
    <Div className="cs-partner_logo_wrap">
      
      {partnerLogos.map((partnerLogo, index)=><div className="cs-partner_logo" key={index}><img src={partnerLogo.src} alt={partnerLogo.alt} /></div>)}
    </Div>
  )
}
