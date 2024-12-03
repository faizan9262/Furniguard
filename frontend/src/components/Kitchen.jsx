import React, { useContext } from 'react'
// import { kitchen } from '../assets/assets'
import ProductCard from './ProductCard'
import { useNavigate } from 'react-router-dom'
import { WebContext } from '../context/WebContext'

const Kitchen = () => {
  const navigate = useNavigate()
  const {products} = useContext(WebContext)

  const kitchen = products.filter((k) => k.category === "kitchen")
  
  return (
    <div className='mx-4 sm:mx-[4%] grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8'>
      {
        kitchen.map((item,index)=>(
            <ProductCard onClick={() => navigate(`${item._id}`)} key={index} title={item.name} img_src={item.image}/>
        ))
      }
    </div>
  )
}

export default Kitchen
