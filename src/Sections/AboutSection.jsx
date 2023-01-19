import React, { useEffect } from 'react'
import aboutimage from "../assets/aboutimage.webp"
import pattern from "../assets/pattern2.svg"
import Aos from 'aos'
import "aos/dist/aos.css"

const AboutSection = () => {
  useEffect(() => {
    Aos.init({})
  },[])
  return (
    <div id='about' className='flex-col flex h-screen max-w-[1280px] px-4 md:px-0'>
      <div data-aos="fade-down" className="title-about flex items-center justify-center flex-col p-4">
        <h2 className='text-xl tracking-wider primary-color'>About</h2>
        <h1 className='font-bold text-6xl tracking-widest primary-color'>QUERO</h1>
      </div>
      <div className="content-wrapper flex flex-col-reverse md:flex-row w-full h-full">
      <div className="left-about__content flex-1 flex flex-col justify-center items-end relative ">
        <img data-aos='fade-right' data-aos-delay='50' className='absolute left-10 hidden md:block' src={pattern} alt="pattern" />
        <h1 data-aos='fade-right' data-aos-delay='100' className='text-3xl md:text-6xl font-bold primary-color font-semiboldx self-start md:self-end'>What Is QUERO?</h1>
        <p data-aos='fade-right' data-aos-delay='150' className='text-base md:text-xl md:w-[465px]'><span className='font-bold'>QUERO</span> adalah sandal modern yang dicirikan oleh desain minimalis yang elegan. Desainnya yang sederhana dan bersih membuatnya cocok untuk digunakan dalam berbagai situasi, baik formal maupun casual. Dapat ditemukan dalam warna-warna netral yang cocok digabungkan dengan berbagai pakaian. Detail desain yang diperhatikan dengan baik, sehingga sandal ini terlihat mewah tanpa terkesan berlebihan. sangat cocok untuk para pecinta minimalis style.</p>
      </div>
      <div data-aos='fade-left' data-aos-delay='200' className="right-about__content flex-1 flex justify-center">
        <img className='w-[300px] md:w-full' src={aboutimage} alt="" />
      </div>
      </div>
    </div>
  )
}

export default AboutSection