import React, { useContext } from "react";
import RoomCard from "../components/RoomCard";
import { useNavigate } from "react-router-dom";
import { WebContext } from "../context/WebContext";

const Rooms = () => {
  const navigate = useNavigate();
  const {products} = useContext(WebContext)

  const rooms = products.filter((r)=> r.category === "livingroom")
  console.log(rooms);
  
  
  return (
    <div className="mx-4 sm:mx-[10%]">
      <h1 className="text-3xl sm:text-4xl font-medium p-2 text-secondary">
        Top Rooms Designs
      </h1>
      <div className=" min-h-screen grid gap-10 grid-cols-1 sm:grid-cols-3">
        {rooms.map((item, index) => (
          <RoomCard
            onClick={() => navigate(`/rooms/${item._id}`)}
            key={index}
            title={item.name}
            img_src={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Rooms;
