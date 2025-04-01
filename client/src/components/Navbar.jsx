import React from 'react'
import { assets } from '../assets/assets'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
import  { SignInButton } from "@clerk/clerk-react";
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../context/appContext';




const Navbar = () => {

    const {openSignIn} = useClerk()
    const {user} = useUser()

    const navigate = useNavigate()

    const { setShowRecruiterLogin } = useContext(AppContext)

  return (
    <div className='shadow py-4'>
        <div className='container px-4 2x1:px-20 mx--auto flex justify-between items-center'>
            <img onClick={()=> navigate('/')} className='cursor-pointer' src={assets.logo} alt="" />
            {
              user
              ?<div className='flex items-center gap-3' >
                <Link to={'/applications'}>Applied Jobs</Link>
                <p>|</p>
                <p className='max-sm:hidden'>Hi, {user.firstName+" "+user.lastName}</p>
                <UserButton/>
              </div>
              :<div className='flex gap-4 max-sm:text-xs'>
              <button onClick={ e => setShowRecruiterLogin(true) } className='text-gray-600'>Recruiter Login</button>
              <button onClick={ e => openSignIn()} className='bg-blue-600 text-white px-6 sm:px-9 rounded-full'>Login</button>
            </div>
            } 
            
        </div>
    </div> 
  )
}

export default Navbar