import {solarProducts} from '../components/product'
import Nav from '../components/Nav'
import '../App.css'
import { useState } from 'react'
import { useEffect } from 'react';



export default function Products() {

  const [search, Setsearch] = useState("");
  const [searchFilter, SetsearchFilter] = useState([])

  useEffect(()=>{
  const lowerCaseSearch = search.toLowerCase();
  const filterResult = solarProducts.filter((item)=>
  item.name?. toLowerCase().includes(lowerCaseSearch) ||
  item.model?.toLowerCase().includes(lowerCaseSearch) ||
  item.capacity?. toLowerCase().includes(lowerCaseSearch) 
 );
 SetsearchFilter(filterResult)
  },[solarProducts, search]);

  return (
    <div>
        <Nav/>

        <input className='mt-32 border-[1px] rounded-md py-1.5 px-2 border-slate-300 ml-20 w-[50%] ' type="text" value={search} onChange={(e)=> Setsearch(e.target.value)} placeholder='search product Brand, type, capacity' />
        <div>
        <div className='mt-10 flex flex-wrap  mx-auto gap-5 w-[90%] justify-center '>
    
          {[...searchFilter]
            .sort(() => Math.random() - 0.5) // Shuffle the array
            .map((item, index) => (
            
            <div className=' hover:scale-110 ease-in-out hover:duration-700 colunm items-center border-[1px] w-80'  key={`product-${index + 1}`}>
              <img className='productImg w-[10vmin] h-[30vmin]' src={item.image} alt="" />
              <div className='mb-3 p-4 '>
                <div> 
              <h1 className='font-bold'>{item.name} </h1>
              <h2>{item.model}</h2>
              <p>{item.capacity}</p>
              </div>
              <button className='hover:bg-red-500 hover:text-white shadow-md p-2 bg-slate-100 text-sm '>More Details</button>
              </div>
            </div>
          ))}
        </div>
        </div>
      
    </div>
  )
}
