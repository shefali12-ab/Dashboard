
import React, { useState } from 'react'
import SideNav from '@/components/SideNav'
import Profile from '@/components/Profile'
const page = () => {
 
  return (
    <div className='flex'>
      <SideNav/>
      <Profile/>
    </div>
  )
}
export default page