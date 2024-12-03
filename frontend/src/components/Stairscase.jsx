import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
// import { stairs } from '../assets/assets'
import ProductCard from './ProductCard'
import { WebContext } from '../context/WebContext'

const Stairscase = () => {
    const navigate = useNavigate()
    const {products} = useContext(WebContext)

    const stairs = products.filter((stair) => stair.category === "stairs")
    console.log(stairs);
    
  return (
    <div className='mx-4 sm:mx-[4%] grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8'>
        {
            stairs.map((item,index)=>(
                <ProductCard onClick={() => navigate(`${item._id}`)}  key={index} img_src={item.image} title={item.name} />
            ))
        }
    </div>
  )
}

export default Stairscase
