import '../App.css'
import bulbimg from '../assets/images/bulbimg.png'
import solarIcon from '../assets/images/rb_84909.png'
import { Carousel } from "flowbite-react";

export default function Heropage() {
  return (
    <div className='hero flex justify-between'>
      
      <div className='flex flex-col justify-center items-center p-20 rotate-90 gap-11 bg-red-500 shadow-inner rounded-full w-96'>
        <div className='-rotate-90 m-5'>
        <h1 className=' usecase text-6xl text-white'>Solar System Market</h1>
        <p>Practical renewable energy technology <br/>that reduces costs and helps the environment</p>
        <button className='quoteBut bg-black text-white p-5 rounded-2xl my-5 text-xs hover:duration-700 hover:transition'>Get Started</button>
        </div>
      </div>
      <img src= '' alt="" />
    </div>
  )
}
