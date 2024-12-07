import React from 'react'
import Productitem from './productitem'
import { useLocation } from 'react-router'

export default function Productdetals() {
    const location = useLocation();
    const { item } = location.state;
    return (
        <div>
            {
            item &&<Productitem key={item.id} item={item}></Productitem>
            }
        </div>
    )
}
