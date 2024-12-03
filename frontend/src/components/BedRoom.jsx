import React from 'react'
import BedCard from './BedCard'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const BedRoom = () => {
  const navigate = useNavigate()
  return (
    <div className='grid grid-cols-1 sm:grid-cols-4 bg-gradient-to-r from-[#D1E8D1] via-[#A4D8A8] to-[#6BBF9B] mt-5'>
      <BedCard onClick={() => {navigate('/products/furniture'); window.scroll(0,0)}} title={'Double bed'} img_src={assets.bed1}/>
      <BedCard onClick={() => {navigate('/products/furniture'); window.scroll(0,0)}} title={'Gaming bed'} img_src={assets.bed2}/>
      <BedCard onClick={() => {navigate('/products/furniture'); window.scroll(0,0)}}  title={'Single bed'} img_src={assets.bed3} className="hidden sm:block"/>
      <BedCard onClick={() => {navigate('/products/furniture'); window.scroll(0,0)}}  title={'Comfort bed'} img_src={assets.bed4} className="hidden sm:block"/>
    </div>
  )
}

export default BedRoom
