import {solarProducts} from '../components/product'
import Nav from '../components/Nav'
import '../App.css'
import { useState } from 'react'
import { useEffect } from 'react';
import Productitem from '../components/productitem';



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
      <input className='mt-32 border-[1px] rounded-md py-1.5 px-2 border-slate-300 ml-20 w-[50%] ' type="text" value={search} onChange={(e) => Setsearch(e.target.value)} placeholder='search product Brand, type, capacity' />
    
    <div className='gap-5 flex flex-wrap justify-center'>
      {[...searchFilter]
        .sort(() => Math.random() - 0.5) // Shuffle the array
        .map((item, index) => (

        <Productitem key={item.id}  item={item} index={index}></Productitem>
        ))}
    </div>
    </div>
  )
}
