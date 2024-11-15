import React from 'react'
import Logo from './logo'
import instagram from 'https://img.icons8.com/windows/32/instagram-new.png"'

export default function Footer() {
  return (
    <div className='bg-slate-800 py-[10vh]'>
      <div className=''>
        <Logo/>
        <div>
          <img src={instagram} alt=""/>
        </div>
      </div>
    </div>
  )
}
