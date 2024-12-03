import React from "react";
import { useParams } from "react-router-dom";
import { designers } from "../assets/assets";
import { FaArrowRight } from "react-icons/fa";

const DesignerDetail = () => {
  const { id } = useParams();
  const designer = designers.find((d) => d.id === id);
  return (
    <>
      {designer ? (
        <div className="min-h-screen mx-4 sm:mx-[10%] flex flex-col justify-center">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-10 mt-5">
            <div className="w-36 sm:w-64">
              <img
                src={designer.profile_img}
                alt={designer.name}
                className="w-full rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col sm:items-start items-center mt-0 sm:mt-10 gap-4">
              <h1 className="text-3xl  sm:text-5xl text-primary font-semibold">
                {designer.name}
              </h1>
              <p className="bg-slate-100 text-primary font-medium rounded-full w-1/2 text-center px-3 py-1 text-xl border-2 border-primary">
                {designer.type}
              </p>
              <p className="bg-slate-100 text-primary font-medium rounded-full px-3 w-64 text-center py-1 text-xl border-2 border-primary">
                Experience: {designer.experience}
              </p>
            </div>
          </div>
          <hr className="mt-4 border-b-2 border-b-primary" />
          <div className="mt-5 flex flex-col gap-4 mb-3">
            <h1 className="text-2xl sm:text-3xl text-secondary font-medium">About {designer.name}</h1>
            <p className="font-light text-gray-600 text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, corporis distinctio quidem odio libero ab nisi eius vero sunt, beatae aperiam. Enim id quis dignissimos aut necessitatibus labore praesentium beatae itaque molestiae molestias, sed rem quam. Atque ad reprehenderit praesentium doloribus. Eveniet saepe quod soluta dolorem minus, sit repellat, magni quidem exercitationem officiis debitis obcaecati, consequuntur voluptate libero itaque nobis nihil accusantium cum sapiente! Blanditiis earum dolores tempora saepe temporibus!</p>
            <button onClick={() => navigate('/register') } className="flex w-36 sm:w-48 items-center gap-2 bg-primary text-white rounded-full px-2 sm:px-5 py-2 text-base sm:text-xl font-medium shadow-md hover:scale-105 transition-all duration-300 hover:bg-secondary">
              Consult Now
              <FaArrowRight />
            </button>
          </div>
        </div>
      ) : (
        <p>Designer not found</p>
      )}
    </>
  );
};

export default DesignerDetail;
