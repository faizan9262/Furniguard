import React from 'react'
import StairCard from './StairCard'
import { assets,} from '../assets/assets'
import { useNavigate } from 'react-router-dom'


const Stairs = () => {
  const navigate = useNavigate()
  return (
    <div className='grid grid-cols-1 sm:grid-cols-4 bg-gradient-to-r from-[#D1E8D1] via-[#A4D8A8] to-[#6BBF9B] mt-5'>
      <StairCard onClick={() => {navigate('products/stairs');window.scroll(0,0)}} img_src={assets.stair1} title={'Wooden Staircase'} />
      <StairCard onClick={() => {navigate('products/stairs');window.scroll(0,0)}} img_src={assets.stair7} title={'Siding Face Staircase'}/>
      <StairCard onClick={() => {navigate('products/stairs');window.scroll(0,0)}} img_src={assets.stair5} title={'Wooden Air Staircase'}/>
      <StairCard onClick={() => {navigate('products/stairs');window.scroll(0,0)}} img_src={assets.stair1} title={'Zig-Zag Metal StairCase'}/>
    </div>
  )
}

export default Stairs
