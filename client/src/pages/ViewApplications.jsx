import React from 'react'
import { assets, viewApplicationsPageData } from '../assets/assets'

const ViewApplications = () => {
  return (
    <div>
      <div>
        <thead>
          <tr>
            <th>#</th>
            <th>User Name</th>
            <th>Job Title</th>
            <th>Location</th>
            <th>Resume</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {viewApplicationsPageData.map((applicant, index)=>(
            <tr>
              <td>{index+1}</td>
              <td>
                <img src={applicant.imgSrc} alt="" />
                <span>{applicant.name}</span>
              </td>
              <td>{applicant.jobTitle}</td>
              <td>{applicant.location}</td>
              <td>
                <a href="" target='_blank'>
                  Resume <img src={assets.resume_download_icon} alt="" />
                </a>
              </td>
              <td>
                <div>
                  
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </div>
    </div>
  ) 
}

export default ViewApplications