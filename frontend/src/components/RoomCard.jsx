import React from 'react'

const RoomCard = ({img_src,title,onClick}) => {
  return (
    <div onClick={onClick} className='cursor-pointer max-w-lg mb-2 mt-5 flex flex-col items-start justify-center gap-2 px-3 py-4 shadow-2xl rounded-lg'>
      <img src={img_src} alt="" className='w-full rounded-lg' />
      <p className='text-xl sm:text-4xl text-primary font-semibold'>{title}</p>
      <p className='text-base sm:text-xl text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit quasi minima fugiat maxime aliquid, asperiores dicta, quibusdam consequuntur et </p>
    </div>
  )
}

export default RoomCard
