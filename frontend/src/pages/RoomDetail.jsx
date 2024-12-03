import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { WebContext } from "../context/WebContext";

const RoomDetail = () => {
  const { id } = useParams();
  const {products} =  useContext(WebContext)
  const roomDetail = products.find((r) => r._id=== id);
  console.log(roomDetail);
  
  return (
    <div className="mx-4 sm:mx-[10%] flex gap-10 min-h-screen items-center">
      <div className="w-[60%] rounded-lg overflow-hidden shadow-lg">
        <img src={roomDetail.image} className="w-full" alt="" />
      </div>
      <div className="flex-1 flex flex-col gap-5">
        <h1 className="text-6xl text-primary">{roomDetail.name}</h1>
        <p className="text-lg font-light text-gray-600">{roomDetail.description}</p>
        <p className="text-secondary font-medium text-2xl">Starting From {roomDetail.price}</p>
        <button className='flex items-center gap-2 justify-center rounded-full bg-primary py-3 text-white hover:scale-105 transition-all duration-300 hover:bg-secondary'>Consult Now <FaArrowRight /></button>
      </div>
    </div>
  );
};

export default RoomDetail;
