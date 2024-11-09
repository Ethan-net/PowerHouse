import React from 'react'
import image1 from '../assets/images/image1.svg'
import image2 from '../assets/images/image2.svg'
import '../App.css'
import '../index.css'

export default function HeroTwo() {
  return (
    <>
    <div className='herotwo '>
    <h1 className='text-2xl font-bold text-center mb-16 text-red-500'>One time Investment Life Time Saving</h1>
    <div>
      <div  className='aboutcont mb-16'>
        <img src={image1} alt="" />
        <div>
            <h1>About Powerhouse, the Best Solar Company in Nigeria.</h1>
            <p>Powerhouse, a beacon of sustainable energy solutions, stands as the <br/>premier solar company in Nigeria, exemplifying excellence in harnessing<br/> the power of the sun to drive a brighter, cleaner future. With a steadfast<br/> commitment to innovation, reliability, and environmental responsibility<br/>, Powerhouse has emerged as the go-to provider for solar energy solutions in<br/> the region.</p>
        </div>
     </div>
    <div className='aboutcont'>
    <img src={image2} alt="" />
    <p>
    <strong>Customer satisfaction is at the forefront of Powerhouse's mission.</strong> The company<br/> takes pride in providing personalized consultations to understand the unique <br/> requirements of each client, offering bespoke solar solutions that maximize energy<br/> production and minimize environmental impact. <strong>From initial project assessment to<br/> post-installation support, Powerhouse's customer-centric approach ensures a<br/>seamless and satisfying experience for every client.</strong>
    </p>
    </div>
     
    </div>
    </div>
    </>
  )
}
