import { useEffect, useState } from "react";
import pattern1 from "../assets/pattern1.svg";
import scrolldown from "../assets/scrolldown.svg";
import Aos from 'aos'
import "aos/dist/aos.css"

const HeroSection = () => {
    useEffect(() => {
        Aos.init({})
        setImageSelected("/sandalswipe2.png");
        setColorSelected("bg-indigo-600");
    }, []);

const sandal = [
    {
    id: "1",
    nama: "QUERO",
    image: "/sandalswipe1.png",
    color: "FF43A8",
    },
    {
    id: "2",
    nama: "QUERO",
    image: "/sandalswipe2.png",
    color: "bg-indigo-600",
    },
    {
    id: "3",
    nama: "Quero",
    image: "/sandalswipe3.png",
    color: "bg-red-600",
    },
    {
    id: "4",
    nama: "QUERO",
    image: "/sandalswipe4.png",
    color: "bg-fuchsia-600",
    },
    {
    id: "5",
    nama: "QUERO",
    image: "/sandalswipe5.png",
    color: "bg-gray-500",
    },
    {
    id: "6",
    nama: "QUERO",
    image: "/sandalswipe6.png",
    color: "FF43A8",
    },
];

const [imageSelected, setImageSelected] = useState("");
const [colorSelected, setColorSelected] = useState("");

const handleClick = (images, colors) => {
    setImageSelected(images);
    setColorSelected(colors);
};
return (
    <div id="showcase" className="hero-section h-screen max-w-[1280px] flex flex-col md:flex-row relative">
    <img
        data-aos="fade-down"
        data-aos-delay='350'
        className="absolute bottom-6 right-6 z-10 animate-bounce"
        src={scrolldown}
        alt="scrolldown"
        loading="lazy"
    />
    <div data-aos='fade-right'  className="hero-left__section flex-1 h-screen flex items-center justify-center relative pl-4">
        <div className="circle rounded-full bg-slate-100 opacity-25 translate-y-10 border-t-2  border-white border-solid w-[300px] h-[300px] md:w-[500px]  md:h-[500px] absolute z-[-1]" />
        <div
        className={`circle rounded-full bg- ${colorSelected} w-[300px] h-[300px] md:w-[500px] md:h-[500px] absolute -z-10`}
        />
        <img
        className="max-w-[300px] md:max-w-[500px] md:h-[450px] drop-shadow-lg"
        src={imageSelected}
        alt="Sandal Quero"
        loading="lazy"
        />
    </div>
    <div className="hero-right__section flex-1 h-screen flex flex-col justify-center pl-4 relative">
        <img
        data-aos='fade-left' data-aos-delay='300' data-aos-offset='0'
        className="absolute hidden md:block right-5 -z-10 scale-75 md:scale-100"
        src={pattern1}
        alt="Quero"
        loading="lazy"
        />
        <h2 data-aos='fade-right' data-aos-delay='50' className="text-xl md:text-2xl font-light md:text-[#0D7A7F] text-[#000000] text-left">
        Modern Slipper
        </h2>
        <h1 data-aos='fade-right' data-aos-delay='100' className="text-4xl md:text-6xl font-bold">
        MAKE YOUR DAYS COMFORTABLE
        </h1>
        <div className="slider-slipper">
        <p data-aos='fade-right' data-aos-delay='150' className="text-base md:text-xl">Other Slippers:</p>
        <div data-aos='fade-right' data-aos-delay='200' className="circle-slippers-wrapper flex gap-2 mt-1 ">
            {sandal.slice(1, 5).map((item) => {
            const { image, color } = item;
            return (
                <div
                onClick={() => handleClick(image, color)}
                className={
                    image === imageSelected
                    ? `circle-slipper rounded-full w-[50px] h-[50px] border-2 border-[#0D7A7F] border-solid p-1 flex items-center justify-center cursor-pointer scale-110`
                    : "circle-slipper rounded-full w-[50px] h-[50px] border-2 border-[#0D7A7F] border-solid p-1 flex items-center justify-center cursor-pointer hover:scale-[1.05]"
                }
                key={image}
                >
                <img src={image} alt="Sandal Quero" loading="lazy" />
                </div>
            );
            })}
        </div>
        <div data-aos='fade-right' data-aos-delay='250' data-aos-offset="-1" className="button">
            <button className="px-6 py-3 border-2 border-[#0D7A7F] rounded my-4 bg-[#0D7A7F] text-white">
                <a href="https://shp.ee/67tcjr6">Go Shopping</a>
            </button>
        </div>
        </div>
    </div>
    </div>
);
};

export default HeroSection;
