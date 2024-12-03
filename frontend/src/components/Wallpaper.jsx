import React, { useContext } from 'react'
import ProductCard from './ProductCard'
import { useNavigate } from 'react-router-dom'
import { WebContext } from '../context/WebContext'

const Wallpaper = () => {
  const navigate = useNavigate()
  const {products} = useContext(WebContext)

  const wall = products.filter((w) => w.category === "wallpaper")
  return (
    <div className='mx-4 sm:mx-[4%] grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8'>
        {
            wall.map((item,index)=>(
                <ProductCard onClick={() => navigate(`${item._id}`)} key={index} img_src={item.image} title={item.name} />
            ))
        }
    </div>
  )
}

export default Wallpaper
