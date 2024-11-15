import React from 'react'
import Epcservice from '../assets/images/EpcService.svg'
import rooftop from '../assets/images/rooftopsolar.svg'
import groundMounted from '../assets/images/grountMounted.svg'

export default function Expertise() {
  return (
    <div className='bg-[#FFD6C9] py-14'>
      <div className='w-[80%] mx-auto' >
        <h1 className='text-3xl text-red-500 font-bold mb-16 text-center' >Our Expertise</h1>
        <div className='gridExpert md:grid-cols-3 gap-3 lg:grid-cols-3'>
            <div className='hover:scale-110 hover:duration-700'>
                <h2 className='font-bold'>EPC service</h2>
                <div >
                    <img className='w-full' src={Epcservice} alt="" />
                    <div className='bg-white p-4 h-[20vh] rounded-b-xl'>
                        <p className='text-sm' >We offer service from site survey to solar<br/> installation and provide support in<br/> maintaining the system.</p>
                    </div>
                </div>
            </div>
            <div className='hover:scale-110 hover:duration-700'>
                <h2 className='font-bold'> Rooftop Solar Solution</h2>
                <div>
                    <img className='w-full' src={rooftop} alt="" />
                    <div className='bg-white p-4 h-[20vh] rounded-b-xl'>
                        <p className='text-sm' >Have a roof? We provide Solar rooftop<br/> Systems to utilize your roof and generate<br/> your own power.</p>
                    </div>
                </div>
            </div>
            <div className='hover:scale-110 hover:duration-700'>
                <h2 className='font-bold'>Ground Mounted Solution</h2>
                <div>
                    <img className='w-full' src={groundMounted} alt="" />
                    <div className='bg-white p-4 h-[20vh] rounded-b-xl'>
                        <p className='text-sm'>Our dedicated team of engineers provides<br/> ground-mounted Solar Systems solutions to <br/>help in the generation of your own <br/>electricity.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
