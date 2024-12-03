import React, { useContext } from 'react'
// import { lighting } from '../assets/assets'
import ProductCard from './ProductCard'
import { useNavigate } from 'react-router-dom'
import { WebContext } from '../context/WebContext'

const Ligthing = () => {
  const navigate = useNavigate()
  const {products} = useContext(WebContext)

  const lights = products.filter((light) => light.category === 'lights')
  // console.log(lights);
  return (
    <div className='mx-4 sm:mx-[4%] grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8'>
        {
            lights.map((light,index)=>(
                <ProductCard onClick={() => navigate(`${light._id}`)} key={index} img_src={light.image} title={light.name} />
            ))
        }
    </div>
  )
}

export default Ligthing
