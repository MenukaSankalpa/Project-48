import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  return (
    <div className='shadow py-4'>
        <div className='container px-4 2x1:px-20 mx--auto flex justify-between item-center'>
            <img src={assets.logo} alt="" />
            <div className='flex gap-4 max-sm:text-xs'>
                <button className='text-gray-600'>Recruiter Login</button>
                <button className='bg-blue-600 text-white px-6 sm:px-9 rounded-full'>Login</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar                 25.33