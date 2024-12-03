import React, { useContext } from "react";
import LayoutCard from "../components/LayoutCard";
import { layout } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { WebContext } from "../context/WebContext";

const Layout = () => {
  const navigate = useNavigate();
  const {products} = useContext(WebContext)

  const layout = products.filter((l) => l.category === "layout")
  
  return (
    <div className="my-5 mx-4 sm:mx-[10%]">
      <h1 className="text-3xl sm:text-4xl font-medium p-2 text-secondary">
        Top Layout
      </h1>
      <div className=" grid grid-cols-1 sm:grid-cols-4 gap-8 min-h-screen">
        {layout.map((item, index) => (
          <LayoutCard
            key={index}
            onClick={() => navigate(`/layout/${item._id}`)}
            title={item.name}
            img_scr={item.image}
            description = {item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Layout;
