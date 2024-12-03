import React from 'react'
import Header from '../components/Header.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import Design from '../components/Design.jsx'
import LivingRoom from '../assets/LivingRoom.jsx'
import BedRoom from '../components/BedRoom.jsx'
import Stairs from '../components/Stairs.jsx'

const Home = () => {
  return (
    <>
      <Header />
      <SectionTitle text={'Latest Designs'} />
      <Design />
      <SectionTitle text={'Best Livingroom Designs'}/>
      <LivingRoom />
      <SectionTitle text={'Latest Bedroom Design'} />
      <BedRoom />
      <SectionTitle text={'Beautiful Staicase Designs'} />
      <Stairs />
    </>
  )
}

export default Home
