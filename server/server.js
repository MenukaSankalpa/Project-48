import './config/instrument.js'
import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import  connectDB  from './config/db.js'
import * as Sentry from "@sentry/node";
import { clerkWebhooks } from './controllers/webhooks.js'
import User from './models/User.js'

 
//Initialize express
const app = express()

//Connect to the database
await connectDB()

//Middlewares
app.use(cors())
app.use(express.json())

// Test DB Route
app.get("/run-db", async (req, res) => {
  try {
    await User.create({
      _id: "manual002",
      name: "Manual User",
      email: "manual@example.com",
      image: "https://example.com/test.png",
      resume: ""
    });
    res.send("Manual test user added.");
  } catch (error) {
    res.status(500).send("Error adding user: " + error.message);
  }
});

//Routes
app.get('/', (req,res)=> res.send("API Working"))
app.get("/debug-sentry", function mainHandler(req, res) {
    throw new Error("My first Sentry error!");
  });
app.post('/webhook', clerkWebhooks)

//Port
const PORT = process.env.PORT || 5000
Sentry.setupExpressErrorHandler(app);

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})