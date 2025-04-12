import './config/instrument.js'
import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import  connectDB  from './config/db.js'
import * as Sentry from "@sentry/node";

//Initialize express
const app = express()

//Connect to the database
await connectDB()

//Middlewares
app.use(cors())
app.use(express.json())

//Routes
app.get('/', (req,res)=> res.send("API Working"))

//Port
const PORT = process.env.PORT || 5000
Sentry.setupExpressErrorHandler(app);

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})