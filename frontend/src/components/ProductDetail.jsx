import React,{useContext} from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../assets/assets'
import { FaArrowRight } from 'react-icons/fa'
import { WebContext } from '../context/WebContext'

const ProductDetail = () => {
  const { id } = useParams()

  const {products} = useContext(WebContext)

  const product = products.filter((p)=>p._id===id)[0]
  console.log("Product::",product);
  

 
  if (!product) {
    return <div>Product not found</div>
  }

  return (

    <div className="mx-4 sm:mx-[10%] flex flex-col sm:flex-row gap-10 min-h-screen items-center">
      <div className="w-full mt-3 sm:mt-0 sm:w-[50%] h-96 rounded-lg overflow-hidden shadow-lg">
        <img src={product.image} className="w-full h-full object-cover" alt="" />
      </div>
      <div className="flex-1 flex flex-col gap-2 sm:gap-5">
        <h1 className="text-3xl sm:text-6xl text-primary">{product.name}</h1>
        <p className="text-base sm:text-lg font-light text-gray-600">{product.description}</p>
        <p className='text-secondary text-2xl font-medium'>Staring From {product.price}</p>
        <button className='flex items-center gap-2 justify-center rounded-full bg-primary py-3 text-white hover:scale-105 transition-all duration-300 hover:bg-secondary mb-2 sm:mt-0'>Consult Now <FaArrowRight /></button>
      </div>
    </div>
  )
}

export default ProductDetail
