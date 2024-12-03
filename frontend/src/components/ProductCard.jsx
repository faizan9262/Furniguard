import React from "react";

const ProductCard = ({img_src,title,onClick}) => {
  return (
    <div onClick={onClick} className="cursor-pointer shadow-md flex rounded-xl overflow-hidden">
      <div className="w-1/2 max-h-40 sm:max-h-60">
        {/* Use object-cover to maintain the aspect ratio and fit within the container */}
        <img src={img_src} className="w-full h-full object-cover" alt="Product" />
      </div>
      <div className="w-1/2 p-2 sm:p-4 flex flex-col justify-center gap-3">
        <p className="font-semibold tsxt-xl sm:text-3xl text-primary">{title}</p>
        <p className="text-[10px] sm:text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur esse voluptates voluptatum, nam aut facere. Dolorem adipisci perferendis inventore obcaecati?
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
