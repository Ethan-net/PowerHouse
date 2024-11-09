import React from 'react'
import '../App.css'
import step1 from '../assets/images/s1.svg'
import step2 from '../assets/images/s2.svg'
import step3 from '../assets/images/s3.svg'
import step4 from '../assets/images/f4.svg'
import step6 from '../assets/images/s5.svg'
import step5 from '../assets/images/s4.svg'

export default function Process() {
  return (
    <div className='process text-center'>
        <h1 className='text-4xl font-medium mt-14'>Installation Process  </h1>
        <div className='step_icon py-32'>
        <div className='flex flex-col text-center gap-5'>
        <img className='items imgform' src={step1} alt="" /> 
            <div className='flex flex-col gap-5'>
            <p>Fill the Site Survey Form</p>
            <h1 className='font-medium text-red-500'>Step 1</h1>
            </div>
        </div>
        <div className='flex flex-col text-center gap-5'>
        <img className='items' src={step2} alt="" />
            <div className='flex flex-col gap-5 write'>
            <p>Request For Site Inspection</p>
            <h1 className='font-medium text-red-500'> Step 2</h1>
            </div>
        </div>
        <div className='flex flex-col text-center gap-5'>
        <img className='items imgform' src={step3} alt="" />
            <div className='flex flex-col gap-5'>
            <p>Get Quotation</p>
            <h1 className='font-medium text-red-500'>Step 3</h1>
            </div>
        </div>
        <div className='flex flex-col text-center gap-5'>
        <img className='items' src={step4} alt="" />
            <div className='flex flex-col gap-5'>    
            <p>Installation</p>
            <h1 className='font-medium text-red-500 '>Step 4</h1>
            </div>
        </div>
        <div className='flex flex-col text-center gap-5'>
        <img className='items' src={step5} alt="" />
            <div className='flex flex-col gap-5'>     
            <p>Inspection</p>
            <h1 className='font-medium text-red-500'>Step 5</h1>
            </div>
        </div>
        <div className='flex flex-col text-center gap-5'>
        <img className='items' src={step6} alt="" />
            <div className='flex flex-col gap-5'>    
            <p>Ready to Use</p>
            <h1 className='font-medium text-red-500'>Step 6</h1>
            </div>
        </div>
        </div>
    </div>
  )
}
