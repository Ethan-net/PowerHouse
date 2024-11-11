import {solarProducts} from '../components/product'
import Nav from '../components/Nav'



export default function Products() {


  return (
    <div>
        <Nav/>
        <div>
          {solarProducts.map((item)=>(
            <div>{item.name} <img src={item.image} alt="" /> </div>
          ))}
        </div>
      
    </div>
  )
}
