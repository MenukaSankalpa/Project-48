import Company from "../models/Company";
import bcrypt from 'bcrypt'



//register a new company 
export const registerCompany = async (req,res) => {

    const {name, email, password} = req.body

    const imageFile = req.file;

    if (!name || !email || !password || !imageFile) {
        return res.json({success:false, message: "Missing Details"})
    }

    try {
        const companyExists = await Company.findOne({email})

        if (companyExists) {
            return res.json({success:false, message: 'Company already registered'})
        }

        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)

        

    } catch (error) {
        
    }

}

//company login 
export const loginCompany = async (req,res) => {

}

//get company data
export const getCompanyData = async (req,res) => {

}         

// post a new job
export const postJob = async (req,res) => {

}

// get company job applicants
export const getCompanyJobApplicants = async (req,res) => {

}

// get company posted Jobs
export const getCompanyPostedJobs = async (req,res) => {

}

// change job Appliaction status       
export const ChangeJobApplicationsStatus = async (req, res) => {

}

// change job visibility
export const changeVisibility = async (req, res) => {

} 