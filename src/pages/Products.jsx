import {solarProducts} from '../components/product'
import Nav from '../components/Nav'
import '../App.css'



export default function Products() {


  return (
    <div>
        <Nav/>
        <div className='mt-10'>
          {solarProducts.map((item)=>(
            <div className='flex items-center' key={item.name}>
              <img className='productImg' src={item.image} alt="" />
              <div> 
              <h1>{item.name} </h1>
              <h2>{item.model}</h2>
              <p>{item.capacity}</p>
              </div>
            </div>
          ))}
        </div>
      
    </div>
  )
}
