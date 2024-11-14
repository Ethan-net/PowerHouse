import React from 'react'
import logo from '../assets/icons/powerlogo.png'
import '../App.css'

export default function Logo() {
  return (
    <div className='flex gap-4'>
        <img className='animate-ping w-8' src={logo} alt="" />
      <h1 className='logotitle'>Powerhouse</h1>
    </div>
  )
}
