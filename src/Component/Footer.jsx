import React, { useEffect } from 'react'
import logo from '/logo.png'
import Aos from 'aos'
import "aos/dist/aos.css"

const Footer = () => {
  useEffect(() => {
    Aos.init({})
  },[])
  return (
    <div className='h-[30vh] md:h-[50vh] w-full bg-[#1b8187] flex flex-col'>
      <div className="content flex items-start justify-center flex-1 pt-10 md:p-20 w-full px-4">
        <div className="logo hidden md:flex-1 md:flex items-center justify-center">
          <img className='w-[128px] bg-white p-2 rounded-full' src={logo} alt="" />
        </div>
        <div className="navlink flex-1 flex flex-col justify-center">
          <h1 className='text-xl md:text-2xl text-white'>Links:</h1>
          <ul className='text-white list-disc pl-4 text-sm md:text-base'>
            <li className=''><a href="#showcase">Showcase</a></li>
            <li className=''><a href="#about">About</a></li>
            <li className=''><a href="#quero">All Quero</a></li>
            <li className=''><a href="https://shp.ee/67tcjr6">Wanna Buy?</a></li>
          </ul>
        </div>
        <div className="socials flex-1 flex flex-col justify-center">
        <h1 className='text-xl md:text-2xl text-white'>Social Media:</h1>
          <ul className='text-white list-disc pl-4 text-sm md:text-base'>
            <li className=''><a href="https://instagram.com/quero.id">Instagram</a></li>
            <li className=''><a href="https://wa.me/message/QZ3C2SET6B24A1">Whatsapp</a></li>
            <li className=''><a href="https://www.tiktok.com/@querostore.id">TikTok</a></li>
          </ul>
        </div>
        <div className="buy flex-1 flex flex-col justify-center">
        <h1 className='text-xl md:text-2xl text-white'>Buy Quero:</h1>
          <ul className='text-white list-disc pl-4 text-sm md:text-base'>
            <li className=''><a href="https://shopee.co.id/querostore.id">Shopee</a></li>
            <li className=''><a href="https://www.tiktok.com/@querostore.id">TikTok Shop</a></li>
            <li className=''><a href="https://instagram.com/quero.id">Instagram</a></li>
            <li className=''><a href="https://wa.me/message/QZ3C2SET6B24A1">Whatsapp</a></li>
            <li className=''><a href="https://tokopedia.link/quero.store">Tokopedia</a></li>
          </ul>
        </div>
      </div>
      <div className="copyright flex-none flex justify-center text-white p-2 text-xs text-center">
      <p>Copyright © 2022 - <span className='font-bold'>Quero</span> All rights reserved | Design and Code By <span className='font-bold'><a href="">Abit Solihin</a></span> </p>
      </div>
    </div>
  )
}

export default Footer