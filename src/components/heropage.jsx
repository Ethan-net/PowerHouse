import '../App.css'
import bulbimg from '../assets/images/bulbimg.png'
import solarIcon from '../assets/images/rb_84909.png'
import { Carousel } from "flowbite-react";

export default function Heropage() {
  return (
    <div className='hero flex justify-between'>
      
      <div className='bg-red-500/80 h-[70vh] rounded-lg  my-auto flex flex-col justify-center items-center mx-auto'>
        <div className=' m-5'>
        <h1 className=' usecase text-6xl text-white'>Solar System Solution</h1>
        <p className='text-black font-bold my-10  '> Practical renewable energy technology that reduces costs and helps the environment</p>
        </div>
        <button className='quoteBut bg-black text-white mx-auto justify-center p-5 rounded-2xl my-5 text-xs hover:duration-700 hover:transition'>Get Started</button>
      </div>
      <img src= '' alt="" />
    </div>
  )
}
