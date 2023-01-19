import React, { useEffect } from "react";
import Aos from 'aos'
import "aos/dist/aos.css"

const QueroSection = () => {
  useEffect(() => {
    Aos.init({})
  },[])
  const allsandal = [
    {
        id: "1",
        nama: "QUERO",
        image: "/quero1.png",
        color: "FF43A8",
    },
    {
        id: "2",
        nama: "QUERO",
        image: "/quero2.png",
        color: "bg-indigo-600",
    },
    {
        id: "3",
        nama: "Quero",
        image: "/quero3.png",
        color: "bg-red-600",
    },
    {
        id: "4",
        nama: "QUERO",
        image: "/quero4.png",
        color: "bg-fuchsia-600",
    },
    {
        id: "5",
        nama: "QUERO",
        image: "/quero5.png",
        color: "bg-gray-500",
    },
    {
        id: "6",
        nama: "QUERO",
        image: "/quero6.png",
        color: "FF43A8",
    },
]
  return (
    <div id="quero" className="max-w-[1280px] flex flex-col">
      <div data-aos="fade-down" data-aos-delay="50" className="title-quero text-center p-4">
        <h2 className="text-xl tracking-wider primary-color">ALL</h2>
        <h1 className="text-6xl tracking-widest primary-color font-bold">
          QUERO
        </h1>
      </div>
      <div className="cards-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center h-full p-4 gap-8">
        {allsandal.map((item, idx)=>{
          const {id, nama, image} = item;
          return (
            <div data-aos="fade-down" data-aos-delay="100" key={idx} className="card relative w-[275px] h-[300px] flex flex-col p-2 justify-center shadow-md overflow-hidden rounded-xl">
            <div className="background absolute z-10 bg-gradient-to-br from-[#0D7A7F] to-cyan-300  h-[70%] -left-10 -right-10 -top-8 -rotate-12" />
            <div className="title flex-1 z-20 flex items-center text-white text-5xl absolute top-10 left-4 font-semibold tracking-wider">
              {nama}
              <br /> #{id}
            </div>
            <div className="image flex-1 flex items-end z-20">
              <img className="drop-shadow-xl" src={image} alt="sandal" />
            </div>
          </div>
          )
        })}
      </div>
    </div>
  );
};

export default QueroSection;
