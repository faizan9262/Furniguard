import React, { useContext } from 'react'
import { WebContext } from '../context/WebContext'

const Profile = () => {
  const {name} = useContext(WebContext)
  console.log(name);
  
  return (
    <div className='min-h-screen mx-4 sm:mx-[10%]'>
      Profile
    </div>
  )
}

export default Profile
