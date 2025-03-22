import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div>
        <div>
            <h2>Over 10,000+ jobs to apply</h2>
            <p>Your Next Big Career Move Start Right Here-Explore the best job opportunity and take the first step toward your future!</p>
            <div>
                <div>
                    <img src={assets.search_icon} alt="" />
                    <input type="text"  placeholder='Search for jobs' className='max-sm:text-xs p-2 rounded outline-none w-full'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero