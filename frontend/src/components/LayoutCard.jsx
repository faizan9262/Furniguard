import React from 'react'
import {assets} from '../assets/assets'

const LayoutCard = ({img_scr,title,onClick,description}) => {
  return (
    <div onClick={onClick} className="cursor-pointer shadow-md flex flex-row sm:flex-col rounded-xl overflow-hidden">
      <div className="w-full max-h-40 sm:max-h-56">
        {/* Use object-cover to maintain the aspect ratio and fit within the container */}
        <img src={img_scr} className="w-full h-full object-cover" alt="Product" />
      </div>
      <div className="w-full p-2 sm:p-4 flex flex-col justify-center gap-3">
        <p className="font-semibold tsxt-xl sm:text-3xl text-primary">{title}</p>
        <p className="text-[10px] sm:text-sm text-gray-600">
          {description}
        </p>
      </div>
    </div>
  )
}

export default LayoutCard
