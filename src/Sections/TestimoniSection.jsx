    import React, { useEffect } from "react";
    import people1 from '../assets/people1.png'
    import people2 from '../assets/people2.png'
    import people3 from '../assets/people3.png'
    import StarRating from "../hooks/Rating";
    import Aos from 'aos'
    import "aos/dist/aos.css"

    import { Swiper, SwiperSlide } from 'swiper/react';

    import 'swiper/css';

    const TestimoniSection = () => {
        useEffect(() => {
            Aos.init({})
        },[])

        const params = {
            breakpoints: {
              320: {
                slidesPerView: 1,
                spaceBetween: 10
              },
              480: {
                slidesPerView: 1,
                spaceBetween: 20
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 30
              }
            }
          }
    return (
        <div id="testimoni" className="h-screen max-2-[1280px] flex flex-col justify-center">
        <div data-aos="fade-down" data-aos-delay="50" className="title-wrapper text-center p-4">
            <h2 className="text-xl tracking-wider primary-color">TESTIMONI</h2>
            <h1 className="text-6xl tracking-widest primary-color font-bold">
            QUERO
            </h1>
        </div>
        <div data-aos='fade-down' data-aos-delay="100" className="slide-wrapper">
        <Swiper {...params} className="h-[400px]"
        spaceBetween={0}
        slidesPerView={2}
        loop={true}
        >
            <SwiperSlide className="card  flex items-center justify-center px-4 ">
                <div className="content-wrapper text-gray-800 text-center shadow-md rounded-md px-20 py-10 h-[300px] w-full">
                <div className="profile-pic flex items-center justify-center ">
                <img className="border-profile rounded-full" src={people1} alt="profilepic" />
                </div>
                <div className="name font-semibold uppercase tracking-wider">
                <h2>Customer 1</h2>
                </div>
                <div className="rating flex justify-center">
                <StarRating rating={5} />
                </div>
                <div className="ulasan">
                <p className="text-[12px] text-gray-600 font-light leading-[16px] py-2">
                    " Mantappp!! Super comfy, design keren, harga okee banget👍 "
                </p>
                </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="card  flex items-center justify-center px-4 ">
                <div className="content-wrapper text-gray-800 text-center shadow-md rounded-md px-20 py-10 h-[300px] w-full">
                <div className="profile-pic flex items-center justify-center">
                <img className="border-profile rounded-full" src={people2} alt="profilepic" />
                </div>
                <div className="name font-semibold uppercase tracking-wider">
                <h2>Customer 2</h2>
                </div>
                <div className="rating flex justify-center">
                <StarRating rating={5} />
                </div>
                <div className="ulasan">
                <p className="text-[12px] text-gray-600 font-light leading-[16px] py-2">
                    " Empuukk bangeettt😍, bahannya enak banget dipake engga licin juga bawahnya dipake jalannya enak bangeettt👍 ajip lah mantap👍👍 "
                </p>
                </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="card  flex items-center justify-center px-4 ">
                <div className="content-wrapper text-gray-800 text-center shadow-md rounded-md px-20 py-10 h-[300px] w-full">
                <div className="profile-pic flex items-center justify-center">
                <img className="border-profile rounded-full" src={people3} alt="profilepic" />
                </div>
                <div className="name font-semibold uppercase tracking-wider">
                <h2>Customer 3</h2>
                </div>
                <div className="rating flex justify-center">
                <StarRating rating={5} />
                </div>
                <div className="ulasan">
                <p className="text-[12px] text-gray-600 font-light leading-[16px] py-2">
                    " Barang gurih, makasi banyak sesuai pesanan "
                </p>
                </div>
                </div>
            </SwiperSlide>
        </Swiper>
        </div>
        </div>
    );
    };

    export default TestimoniSection;
