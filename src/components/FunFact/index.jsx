import React from 'react'
import Div from '../Div'
import './funfact.scss'
import MGImage from "../../scss/images/about-01-562x588.png"
import SectionHeading from '../SectionHeading'
import Spacing from '../Spacing'
import klm from "../../scss/images/klm-signature.png"



export default function FunFact({variant, title, subtitle, data}) {
  return (
    <Div className={variant ? `cs-funfact_wrap   ${variant}`: 'cs-funfact_wrap'}>
      <Div className="cs-funfact_shape"   />
      <div class="container">
  <div class="row justify-content center">
    <div class="col-lg-5">
    <Div className="cs-funfact_heading">
        <img src={MGImage} width={400} />
        </Div>
    </div>
    <div class="col-lg-6">
    <Div className="">
       
        <SectionHeading
              title=" 'NABCO members stand at the forefront of policymaking' "
              subtitle="GREETINGS FROM OUR PRESIDENT"
              btnLink='/greetings'
              btnText="Read More"
            >

              <Spacing lg="30" md="20" />
              <p className="cs-m0 text-black ">Kionne L. McGhee               
              </p>
              <p className="cs-m1 text-black small-text ">President, National Association of Black County Official             
              </p>
              <Spacing lg="30" md="20" />
              <Div className="cs-separator cs-accent_bg"></Div>

            </SectionHeading>
       
      </Div>
    </div>
   
  </div>
</div>
        
     
  
    </Div>
  )
}
