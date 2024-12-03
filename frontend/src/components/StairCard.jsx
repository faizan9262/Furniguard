import React from "react";

const StairCard = ({ title, img_src,onClick }) => {
  return (
    <div className="mx-10 sm:mx-[10%]">
      <div
        onClick={onClick}
        className={`cursor-pointer rounded-2xl mt-10 flex flex-col items-center justify-center text-center max-w-sm bg-white px-6 py-4 mb-5 gap-3`}
      >
        <div className="w-full h-80">
          <img src={img_src} alt="" className="w-full h-full rounded-2xl object-cover" />
        </div>
        <p className="text-xl sm:text-4xl text-primary font-medium">{title}</p>
        <p className="text-base sm:text-xl font-light text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          molestiae magni laborum.
        </p>
      </div>
    </div>
  );
};

export default StairCard;
