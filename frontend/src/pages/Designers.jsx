import React from 'react'
import DesignerCard from '../components/DesignerCard'
import { designers } from '../assets/assets'
import { useNavigate} from 'react-router-dom'


const Designers = () => {
  const navigate = useNavigate()
  return (
    <div className='mx-4 sm:mx-[10%] min-h-screen my-5'>
      <h1 className='text-3xl sm:text-4xl font-medium p-2 text-secondary'>Top Designers</h1>
      <div className=' grid grid-cols-1 sm:grid-cols-3 gap-6 mt-5'>
      {
        designers.map((item,index)=>(
          <DesignerCard key={index} onClick={() => navigate(`/designers/${item.id}`)} name={item.name} type={item.type} profile_img={item.profile_img} experience={item.experience} />
        ))
      }
      </div>
    </div>
  )
}

export default Designers
