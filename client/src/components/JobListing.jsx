import React, { useContext } from 'react'
import { AppContext } from '../context/appContext'
import { assets } from '../assets/assets'


const JobListing = () => {

    const{isSearched,searchFilter} = useContext(AppContext)

  return (
    <div>
        {/* Sidebar */}
        <div>
            {/* search filter from hero component */}
            {
                isSearched && ( searchFilter.title !== "" || searchFilter.location !== "") && (
                    <>
                        <h3>Current Search</h3>
                        <div>
                            {searchFilter.title && (
                                <span>
                                    {searchFilter.title}
                                    <img className='cursor-pointer' src={assets.cross_icon} alt="" />
                                </span>
                            )}
                            {searchFilter.location && (
                                <span>
                                    {searchFilter.location}  
                                    <img className='cursor-pointer' src={assets.cross_icon} alt="" />                                
                                </span>
                            )}
                        </div>
                    </>
                )
            }
        </div>
    </div>
  )
}

export default JobListing