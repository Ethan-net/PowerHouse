import Logo from './logo'
import '../App.css'
import { Link } from 'react-router-dom'


export default function Nav() {
  return (
    <div className='nav bg-white shadow-md'>
        <div className='nav_pro flex justify-between  p-7'>
        <Link to="/" >
        <Logo/>
        </Link>

      <div className='flex gap-6 items-center '>
        <Link to="/loadcal">
        <button className='hover:bg-red-600 hover:text-white p-2 rounded-lg text-xs hover:duration-1000 hover:transition'>Load Calculator</button>
        </Link>
        <Link to ="/products" >
        <button className='hover:bg-red-600 hover:text-white p-2 rounded-lg text-xs hover:duration-1000 hover:transition'>Products</button>
        </Link>
        <Link to = "/Bookinspect">
        <button className='hover:bg-red-600 hover:text-white p-2 rounded-lg text-xs hover:duration-1000 hover:transition'>Book Inspection</button>
        </Link>
        <button className='hover:bg-red-600 hover:text-white p-2 rounded-lg text-xs hover:duration-1000 hover:transition' >Blog</button>
        </div>
        <button className='bg-red-500 text-white p-3 rounded-xl text-sm'>Contact us</button>
     </div>

    </div>
  )
}
