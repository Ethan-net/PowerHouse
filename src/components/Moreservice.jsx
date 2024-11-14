import React from 'react'
import home from '../assets/images/home.svg'
import pannel from '../assets/images/pannelinstall.svg'
import call from '../assets/images/call.svg'
import maintenance from '../assets/images/maintenance.svg'


export default function Moreservice() {
  return (
    <div >
        <section className='flex flex-wrap justify-center gap-10 my-[17vh] mx-auto w-[80%]'>
            <div className=''>
                <img className='mx-auto w-16' src={home} alt="" />
                <h2>Free Home Assessment</h2>
            </div>
            <div>
                <img className='mx-auto w-16' src={pannel} alt="" />
                <h2>Hassle Free Installation</h2>
            </div>
            <div>
                <img className='mx-auto w-16' src={call} alt="" />
                <h2>Customer Support</h2>
            </div>
            <div>
                <img className='mx-auto w-16' src={maintenance} alt="" />
                <h2>2 Year Maintenance Free</h2>
            </div>
        </section>
      
    </div>
  )
}
