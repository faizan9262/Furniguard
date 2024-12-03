import React, { useContext } from "react";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";
// import { furniture } from "../assets/assets";
import { WebContext } from "../context/WebContext";

const Furniture = ({url}) => {
  const { products, backendUrl } = useContext(WebContext);
  const navigate = useNavigate();
  const furniture = products.filter((p) => p.category === "furniture")

  return (
    <div className="mx-4 sm:mx-[4%] grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
      {furniture.map((item, index) => (
        <ProductCard
          key={index}
          img_src={item.image}
          title={item.name}
          onClick={() => navigate(`${item._id}`)}
        />
      ))}
    </div>
  );
};

export default Furniture;
