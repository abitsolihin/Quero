import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import Aos from 'aos'
import "aos/dist/aos.css"

const Navbar = () => {
    const [isOpen, setOpen] = useState(false)

    useEffect(() => {
        Aos.init({})
      }, [])
    return (
        <nav data-aos="fade-down" className='relative z-10 '>
            <div className={`nav-wrapper inline-flex items-center content-center fixed w-screen duration-200 z-10  py-3 px-8 ${isOpen ? 'bg-white' : 'bg-transparent'}`}>
            <div  className="logo md:flex-none flex-1 flex items-center">
                <a href="" className='font-bold flex items-center justify-center'>
                    <img className='w-[150px]' src={logo} alt="Quero" /></a>
            </div>
            <div className="nav-list flex-1 md:flex items-center justify-center hidden">
                <ul className='flex gap-12'>
                    <li className='navlist-hover'><a className='' href="#showcase">Showcase</a></li>
                    <li className='navlist-hover'><a className='' href="#about">About</a></li>
                    <li className='navlist-hover'><a className='' href="#quero">All Quero</a></li>
                    <li className='navlist-hover'><a className='' href="#testimoni">Testimoni</a></li>
                    <div>
                    <button className="peer block px-3 py-2 transition duration-300 hover:text-slate-900 navlist-hover rounded ">
                        <a className='primary-color' to="/products">Wanna Buy?</a>
                    </button>
                    <div className="hidden peer-hover:flex absolute hover:absolute hover:flex w-[200px] flex-col bg-white rounded drop-shadow-lg h-[170px] overflow-y-scroll scrollbar-hide ">
                        <a className="px-5 py-3 text-slate-400 hover:bg-gray-200 hover:text-slate-900 hover:rounded-t" href="https://shopee.co.id/querostore.id">
                            Shopee
                        </a>
                        <a className="px-5 py-3 text-slate-400 hover:bg-gray-200 hover:text-slate-900 " href="https://tokopedia.link/quero.store">
                            Tokopedia
                        </a>
                        <a className="px-5 py-3 text-slate-400 hover:bg-gray-200 hover:text-slate-900 hover:rounded-b" href="https://www.tiktok.com/@querostore.id">
                            TikTok Shop
                        </a>
                        <a className="px-5 py-3 text-slate-400 hover:bg-gray-200 hover:text-slate-900 hover:rounded-b" href="https://instagram/quero.id">
                            Instagram
                        </a>
                        <a className="px-5 py-3 text-slate-400 hover:bg-gray-200 hover:text-slate-900 hover:rounded-b" href="https://wa.me/message/QZ3C2SET6B24A1">
                            Whatsapp
                        </a>
                    </div>
                </div>
                </ul>
            </div>
            <div className="button absolute md:relative md:flex hidden items-center justify-center">
                <button className='px-6 py-2 border-2 border-[#0D7A7F] rounded text-[#0D7A7F] hover:bg-[#0D7A7F] hover:text-white hover:border-2 duration-200'>
                    <a href="https://shp.ee/67tcjr6">Buy Now!</a>
                </button>
            </div>
            <button onClick={()=> setOpen(!isOpen)} className="hamburger flex-none  items-end justify-center md:hidden cursor-pointer">
                <div className={`h-6 w-6 flex flex-col gap-1 duration-200 ${isOpen ? 'transform rotate-90' : ''}`}>
                <div className={`w-8 h-1 bg-[#0D7A7F] ${isOpen ? 'transform rotate-12 translate-y-1' : ''}`}></div>
                <div className={`w-8 h-1 bg-[#0D7A7F] ${isOpen ? '' : ''}`}></div>
                <div className={`w-8 h-1 bg-[#0D7A7F] ${isOpen ? 'transform -rotate-12 -translate-y-1' : ''}`}></div>
                </div>
            </button>
            </div>
            <div className={`nav-hamburger md:hidden absolute w-full top-[70px]  bg-white duration-300 ${isOpen ? 'transform translate-y-[0]' : 'transform -translate-y-[300px]'}`}>
                <div className="nav-list flex flex-col">
                    <ul className='gap-2 flex items-center flex-col'>
                        <li className=''><a className='' href="#showcase">Showcase</a></li>
                        <li className=''><a className='' href="#about">About</a></li>
                        <li className=''><a className='' href="#quero">All Quero</a></li>
                        <li className=''><a className='' href="#testimoni">Testimoni</a></li>
                        <div className='flex justify-center'>
                        <button className="peer block px-3 py-2 transition duration-300 hover:text-slate-900 navlist-hover rounded ">
                            <a className='primary-color' to="/products">Wanna Buy?</a>
                        </button>
                        <div className="hidden peer-hover:flex absolute hover:absolute hover:flex w-[200px] flex-col bg-white rounded drop-shadow-lg h-[170px] overflow-y-scroll scrollbar-hide ">
                            <a className="px-5 py-3 text-slate-400 hover:bg-gray-200 hover:text-slate-900 hover:rounded-t" href="https://shopee.co.id/querostore.id">
                                Shopee
                            </a>
                            <a className="px-5 py-3 text-slate-400 hover:bg-gray-200 hover:text-slate-900 " href="https://tokopedia.link/quero.store">
                                Tokopedia
                            </a>
                            <a className="px-5 py-3 text-slate-400 hover:bg-gray-200 hover:text-slate-900 hover:rounded-b" href="https://www.tiktok.com/@querostore.id">
                                TikTok Shop
                            </a>
                            <a className="px-5 py-3 text-slate-400 hover:bg-gray-200 hover:text-slate-900 hover:rounded-b" href="https://instagram/quero.id">
                                Instagram
                            </a>
                            <a className="px-5 py-3 text-slate-400 hover:bg-gray-200 hover:text-slate-900 hover:rounded-b" href="https://wa.me/message/QZ3C2SET6B24A1">
                                Whatsapp
                            </a>
                        </div>
                    </div>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar