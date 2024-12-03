import React from "react";
import { assets } from "../assets/assets";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate =  useNavigate();
  return (
    <div
      className="relative bg-cover bg-center h-screen flex justify-center items-center"
      style={{ backgroundImage: `url(${assets.banner})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>

      {/* Content */}
      <div className="relative flex flex-col gap-4  font-semibold z-10">
        <div className="mx-10 sm:mx-[10%] text-2xl md:text-4xl lg:text-6xl text-primary leading-tight lg:leading-tight">
          <p>
            Be Faithful To Your Own Taste,
            <br />
            Because Nothing You Really Like
            <br />
            Is Ever Out Of Style..
          </p>
        </div>

        

        <p className="mx-10 sm:mx-[10%] text-white text-base md:text-xl lg:text-2xl font-light">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
          impedit quidem consequatur, voluptate voluptatibus perferendis modi,
          adipisci ipsum quas sit expedita amet ab, commodi
        </p>
        <div className="mx-10 sm:mx-[10%]">
            <button onClick={() => navigate('/register') } className="flex items-center gap-2 bg-primary text-white rounded-full px-5    py-2 text-xl font-medium shadow-md hover:scale-105 transition-all duration-300 hover:bg-secondary">
              Book Your Session Now
              <FaArrowRight />
            </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
