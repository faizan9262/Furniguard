import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import SectionTitle from "../components/SectionTitle";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-stone-100">
      <div className="mx-4 sm:mx-[10%] min-h-screen">
        <h1 className="text-3xl sm:text-4xl font-medium p-2 text-secondary">About Furniguard</h1>
        <div className="flex mx-2  flex-col sm:flex-row gap-5 items-center">
          <div className="w-[50%]">
            <img src={assets.logo} className="w-full" alt="" />
          </div>
          <div className="flex-1 flex flex-col gap-5">
            <p className="text-4xl font-semibold text-primary">
              FurniGuard - The Interior Company
            </p>
            <p className="text-xl font-light text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
              eaque. Labore modi error consequuntur earum minima! Commodi odio,
              adipisci eum aliquid animi nisi eius natus, deserunt velit est
              aspernatur explicabo dolorem hic beatae quidem inventore cum
              dolorum harum? Vel explicabo fugiat atque itaque accusamus eius
              aliquam tempore tempora amet quibusdam!
            </p>
            <button
              onClick={() => navigate("/")}
              className="flex w-1/3 items-center gap-2 bg-primary text-white rounded-full px-5    py-2 text-xl font-medium shadow-md hover:scale-105 transition-all duration-300 hover:bg-secondary"
            >
              Explore More
              <FaArrowRight />
            </button>
          </div>
        </div>
        <div className="flex mx-2  flex-col sm:flex-row gap-5 items-center">
          <div className="flex-1 flex flex-col gap-5">
            <p className="text-4xl font-semibold text-primary">
              FurniGuard - 10 Years of Excellence Service
            </p>
            <p className="text-xl font-light text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
              eaque. Labore modi error consequuntur earum minima! Commodi odio,
              adipisci eum aliquid animi nisi eius natus, deserunt velit est
              aspernatur explicabo dolorem hic beatae quidem inventore cum
              dolorum harum? Vel explicabo fugiat atque itaque accusamus eius
              aliquam tempore tempora amet quibusdam!
            </p>
            <button
              onClick={() => navigate("/")}
              className="flex w-1/3 items-center gap-2 bg-primary text-white rounded-full px-5    py-2 text-xl font-medium shadow-md hover:scale-105 transition-all duration-300 hover:bg-secondary"
            >
              Explore More
              <FaArrowRight />
            </button>
          </div>
          <div className="w-[50%]">
            <img src={assets.tenyears} className="w-full" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
