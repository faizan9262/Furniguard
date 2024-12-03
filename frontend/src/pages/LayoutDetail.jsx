import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { layout} from '../assets/assets';
import {FaArrowRight} from 'react-icons/fa'
import { WebContext } from '../context/WebContext';


const LayoutDetail = () => {
  const {id} = useParams();
  const {products} = useContext(WebContext)
  const layoutDetail = products.find(l => l._id === id)
  return (
    <div className="mx-4 sm:mx-[10%] flex gap-10 min-h-screen items-center">
      <div className="w-[50%] h-96 rounded-lg overflow-hidden shadow-lg">
        <img src={layoutDetail.image} className="w-full h-full object-cover" alt="" />
      </div>
      <div className="flex-1 flex flex-col gap-5">
        <h1 className="text-6xl text-primary">{layoutDetail.name}</h1>
        <p className="text-lg font-light text-gray-600">{layoutDetail.description}</p>
        <p className="text-secondary font-medium text-2xl">Starting From {layoutDetail.price}</p>
        <button className='flex items-center gap-2 justify-center rounded-full bg-primary py-3 text-white hover:scale-105 transition-all duration-300 hover:bg-secondary'>Consult Now <FaArrowRight /></button>
      </div>
    </div>
  )
}

export default LayoutDetail
