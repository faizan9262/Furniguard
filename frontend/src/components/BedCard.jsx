import React from 'react'

const BedCard = ({img_src,title,className , onClick}) => {
  return (
    <div className='mx-10 sm:mx-[10%] pt-5 mt-10'>
      <div onClick={onClick} className={`cursor-pointer h-[570px] rounded-2xl mt-10 flex flex-col items-center justify-center text-center max-w-sm bg-white px-6 py-4 mb-5 ${className}`}>
        <img src={img_src} alt="" className='w-full rounded-2xl -translate-y-16  hover:translate-y-0 transition-all duration-700' />
        <p className=' text-xl sm:text-4xl text-primary font-medium'>{title}</p>
        <p className=' text-base sm:text-xl font-light text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt molestiae magni laborum totam labore deleniti eius inventore minus obcaecati adipisci.</p>
      </div>
    </div>
  )
}

export default BedCard
