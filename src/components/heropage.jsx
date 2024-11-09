import '../App.css'
import bulbimg from '../assets/images/bulbimg.png'

export default function Heropage() {
  return (
    <div className='hero flex justify-between'>
      <div className='flex flex-col justify-center items-center p-20 rotate-45 gap-11 bg-red-300/80 rounded-full w-96'>
        <div className='-rotate-45 m-5'>
        <h1 className=' usecase text-6xl text-white'>Solar System Market</h1>
        <p>Practical renewable energy technology <br/>that reduces costs and helps the environment</p>
        <button className='quoteBut bg-black text-white p-5 rounded-2xl my-5 text-xs hover:duration-700 hover:transition'>Request a Quote</button>
        </div>
      </div>
      {/* <div className='flex '>
        <img className='bulbimg ' src={bulbimg} alt="" />
        <div>
        <h1>Power your House with Clean Energy</h1>
        </div>
      </div> */}
    </div>
  )
}
