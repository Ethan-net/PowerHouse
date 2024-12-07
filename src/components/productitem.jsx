import React from 'react'
import { Link } from 'react-router-dom'

export default function Productitem({ item, index }) {
    return (
        <div>

            <div className='mt-10 flex   mx-auto gap-5 w-[90%] '>

                <div className=' hover:scale-110 ease-in-out hover:duration-700 colunm items-center rounded-xl  border-[1px] w-80' key={`product-${index + 1}`}>
                    <img className='productImg rounded-t-2xl w-[10vmin] h-[30vmin]' src={item.image} alt="" />
                    <div className='mb-3 p-4 '>
                        <div>
                            <h1 className='font-bold'>{item.name} </h1>
                            <h2>{item.model}</h2>
                            <p>{item.capacity}</p>
                        </div>
                        <Link to='productdetails' key={item.id} state={{ item }}>
                            <button className='hover:bg-red-500 hover:text-white shadow-md p-2 bg-slate-100 text-sm '>More Details</button>
                        </Link>
                    </div>

                </div>
            </div>

        </div>
    )
}
