import React from "react";
const DesignerCard = ({name,experience,type,profile_img,onClick}) => {
  return (
    <div onClick={onClick} className="cursor-pointer flex flex-col py-2 px-4 shadow-xl rounded-lg gap-3 :h-80">
      <div className="flex gap-4 items-center">
        <div className="w-24 h-24 rounded-full overflow-hidden">
          <img src={profile_img} alt="" className="h-full w-full object-cover"/>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-3xl text-primary font-semibold">{name}</p>
        </div>
      </div>
      <div className="flex gap-3 flex-col">
            <p className="border-2 w-1/2 flex-1 border-secondary text-primary rounded-full px-2 py-1 sm:px-3 bg-slate-100 text-sm sm:text-md font-medium">{type}</p>
            <p className="border-2 w-1/2 flex-1 border-secondary text-primary font-medium rounded-full px-2 py-1 sm:px-3 bg-slate-100 sm:text-md text-sm">{experience} Experience</p>
          </div>
      <div>
        <p className=" text-sm sm:text-md font-light text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid rem
          dolorum voluptate soluta quaerat quasi sit accusamus saepe doloremque,
          cumque minus doloribus exercitationem consectetur incidunt assumenda
          adipisci a sequi. Excepturi!
        </p>
      </div>
    </div>
  );
};

export default DesignerCard;
