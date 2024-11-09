import React from 'react'
import '../App.css'
import CountUp from 'react-countup';

export default function Section() {
  return (
    <div className='sectionUp'>
        <div className='sector'>
        <h1 className='font-bold text-2xl text-white text-center' >"Powerhouse: Illuminating Excellence, Delivering High-Quality
        Projects with Precision and Commitment."</h1>
        <div className='sectionCont'>
            <div>
                <h1 className='text-3xl font-bold'><CountUp end={350} delay={5}  />+</h1>
                <p>Solar System Installed</p>
            </div>
            <div>
                <h1 className='text-3xl font-bold'><CountUp end={1000} delay={5}  />+</h1>
                <p>Rooftop Solar Pannel Installed</p>
            </div>
            <div>
                <h1 className='text-3xl font-bold'><CountUp end={500} delay={5}  />+</h1>
                <p>Happy Customers</p>
            </div>
        </div>
        </div>
      
    </div>
  )
}