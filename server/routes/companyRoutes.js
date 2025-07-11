import express from 'express'
import { ChangeJobApplicationsStatus, changeVisibility, getCompanyData, getCompanyJobApplicants, getCompanyPostedJobs, loginCompany, postJob, registerCompany } from '../controllers/companyController.js'
import upload from '../config/multer.js'

const router = express.Router()

//Register a company
router.post('/register',upload.single('image'), registerCompany)

//company login
router.post('/login', loginCompany)

//get company data 
router.get('/company', getCompanyData)

//Post a job
router.post('/post-job', postJob)

//get application data of company
router.get('/applications', getCompanyJobApplicants)

//get company job list
router.get('/list-jobs', getCompanyPostedJobs)

// change applicants status
router.post('/change-status', ChangeJobApplicationsStatus)

// change application visibility
router.post('/change-visibility', changeVisibility)

export default router