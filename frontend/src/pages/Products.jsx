import React, { useContext,useState } from "react";
import { MdKitchen } from "react-icons/md";
import {
  GiSofa,
  GiCeilingLight,
  GiWallLight,
  GiDominoTiles,
  GiBathtub,
  Gi3dStairs,
} from "react-icons/gi";
import { HiCollection } from "react-icons/hi";
import { FaPaintRoller } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import Furniture from "../components/Furniture";
import Ligthing from "../components/Ligthing";
import Kitchen from "../components/Kitchen";
import Flooring from "../components/Flooring";
import Bathroom from "../components/Bathroom";
import Wallpaper from "../components/Wallpaper";
import Textile from "../components/Textile";
import Stairscase from "../components/Stairscase";
import { WebContext } from "../context/WebContext";

const Products = () => {
  const navigate = useNavigate();
  const { category } = useParams();
  const [state,setState] = useState(0); 
  const {products, backendUrl} = useContext(WebContext)

  // console.log(backendUrl);
  
  

  // Mapping category to title
  const getTitle = () => {
    switch (category) {
      case "furniture":
        return "Furniture";
      case "lighting":
        return "Lighting";
      case "stairs":
        return "Staircase";
      case "textile":
        return "Textile";
      case "kitchen":
        return "Kitchen";
      case "flooring":
        return "Flooring";
      case "bathroom":
        return "Bathroom";
      case "wallpaper":
        return "Wallpaper";
      default:
        return "All Products";
    }
  };

  const container = () => {
    switch (category) {
      case "furniture":
        return <Furniture url={backendUrl}  />;
      case "lighting":
        return <Ligthing />;
      case "stairs":
        return <Stairscase />;
      case "textile":
        return <Textile />;
      case "kitchen":
        return <Kitchen />;
      case "flooring":
        return <Flooring />;
      case "bathroom":
        return <Bathroom />;
      case "wallpaper":
        return <Wallpaper />;
      default:
        return (
          <>
            <div className="grid grid-cols-1 gap-4">
              <Furniture/>
              <Ligthing />
              <Stairscase />
              <Textile />
              <Kitchen />
              <Flooring />
              <Bathroom />
              <Wallpaper />
            </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col sm:flex-row">
      <div className="sm:py-4 sm:pl-4 py-2 bg-slate-100 sm:h-screen sm:sticky sm:top-0 sticky top-0">
        <ul className="flex flex-row overflow-y-auto md:flex-col gap-3 text-sm sm:text-xl font-semibold text-white p-1 sm:p-2 shadow-md sm:shadow-none">
          <li
            onClick={()=>setState(0)}
            className="border-2 flex items-center gap-2 shadow-md border-black mb-2 rounded-xl sm:rounded-l-xl bg-secondary px-4 sm:px-10 py-2"
          >
            <HiCollection />
            All
          </li>
          <li
            onClick={() => navigate(`/products/furniture`)}
            className="border-2 flex items-center gap-2 shadow-md border-black mb-2 rounded-xl sm:rounded-l-xl bg-secondary px-4 sm:px-10 py-2"
          >
            <GiSofa />
            Furniture
          </li>
          <li
            onClick={() => navigate("/products/lighting")}
            className="border-2 flex items-center gap-2 shadow-md border-black mb-2 rounded-xl sm:rounded-l-xl bg-secondary px-4 sm:px-10 py-2"
          >
            <GiCeilingLight />
            Lighting
          </li>
          <li
            onClick={() => navigate("/products/stairs")}
            className="border-2 flex items-center gap-2 shadow-md border-black mb-2 rounded-xl sm:rounded-l-xl bg-secondary px-4 sm:px-10 py-2"
          >
            <Gi3dStairs />
            Staircase
          </li>
          <li
            onClick={() => navigate("/products/textile")}
            className="border-2 flex items-center gap-2 shadow-md border-black mb-2 rounded-xl sm:rounded-l-xl bg-secondary px-4 sm:px-10 py-2"
          >
            <GiWallLight />
            Textile
          </li>
          <li
            onClick={() => navigate("/products/kitchen")}
            className="border-2 flex items-center gap-2 shadow-md border-black mb-2 rounded-xl sm:rounded-l-xl bg-secondary px-4 sm:px-10 py-2"
          >
            <MdKitchen />
            Kitchen
          </li>
          <li
            onClick={() => navigate("/products/flooring")}
            className="border-2 flex items-center gap-2 shadow-md border-black mb-2 rounded-xl sm:rounded-l-xl bg-secondary px-4 sm:px-10 py-2"
          >
            <GiDominoTiles />
            Flooring
          </li>
          <li
            onClick={() => navigate("/products/bathroom")}
            className="border-2 flex items-center gap-2 shadow-md border-black mb-2 rounded-xl sm:rounded-l-xl bg-secondary px-4 sm:px-10 py-2"
          >
            <GiBathtub />
            Bathroom
          </li>
          <li
            onClick={() => navigate("/products/wallpaper")}
            className="border-2 flex items-center gap-2 shadow-md border-black mb-2 rounded-xl sm:rounded-l-xl bg-secondary px-4 sm:px-10 py-2"
          >
            <FaPaintRoller />
            Wallpaper
          </li>
        </ul>
      </div>

      {/* Main Content with Title and Product Cards */}
      <div className="flex-1 flex flex-col m-4 sm:overflow-y-auto overflow-y-visible">
        {/* Title */}
        <h1 className="text-xl sm:text-4xl font-semibold text-secondary text-center mb-6">{getTitle()}</h1>

        {/* Product Container */}
        {container()}
      </div>
    </div>
  );
};

export default Products;
