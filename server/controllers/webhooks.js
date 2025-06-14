import { Webhook } from "svix";
import User  from "../models/User.js";


// API controller function to manage clerk user with database
export const clerkWebhooks = async (req,res) => {
    try {

        // create a Svix instance with clerk webhook secret.
        const whook = new Webhook (process.env.CLERK_WEBHOOK_SECRET);

        console.log("webhook receied:", req.body);
        
        // verifying headers
        await whook.verify(JSON.stringify(req.body), {
            "svix-id": req.headers["svix-id"],
            "svix-timestamp": req.headers["svix-timestamp"],
            "svix-signature": req.headers ["svix-signature"]
        })

        // getting data from request body
        const { data, type } = req.body
        console.log(`event type: ${type}`); 
        
        // switch cases for different events
        switch (type) {
            case 'user.created':{

                const userData = {
                    _id : data.id,
                    email: data.email_addresses[0].email_address,
                    name: data.first_name + " " + data.last_name,
                    image: data.image_url,
                    resume: ''
                }
                await User.create(userData)
                res.json({})
                break;
            }

            case 'user.updated':{

                const userData = {
                    email: data.email_addresses[0].email_address,
                    name: data.first_name + " " + data.last_name,
                    image: data.image_url,
                }
                await User.findByIdAndUpdate(data.id, userData)
                res.json({})
                break;

            }
            
            case 'user.deleted':{

                await User.findByIdAndDelete(data.id)
                res.json({})
                break;

            }
            default :
                break;
        }

    } catch (error) {
        console.log(error.message);
        res.json({success:false, message:'Webhooks Error'})

    }
}

/*
export const clerkWebhooks = async (req,res) => {
    try {
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
        
        console.log("🔔 Webhook received:", req.body);

        await whook.verify(JSON.stringify(req.body), {
            "svix-id": req.headers["svix-id"],
            "svix-timestamp": req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"]
        });

        const { data, type } = req.body;
        console.log(`➡️ Event Type: ${type}`);

        switch (type) {
            case 'user.created': {
                const userData = {
                    _id: data.id,
                    email: data.email_addresses?.[0]?.email_address || '',
                    name: `${data.first_name} ${data.last_name}`,
                    image: data.image_url,
                    resume: ''
                };
                console.log("📦 Creating user:", userData);
                await User.create(userData);
                break;
            }

            case 'user.updated': {
                const userData = {
                    email: data.email_addresses?.[0]?.email_address || '',
                    name: `${data.first_name} ${data.last_name}`,
                    image: data.image_url
                };
                console.log("✏️ Updating user:", userData);
                await User.findByIdAndUpdate(data.id, userData);
                break;
            }

            case 'user.deleted': {
                console.log("🗑 Deleting user ID:", data.id);
                await User.findByIdAndDelete(data.id);
                break;
            }

            default:
                console.log("⚠️ Unhandled event type:", type);
        }

        res.status(200).json({ success: true });

    } catch (error) {
        console.error("❌ Webhook error:", error.message || error);
        res.status(500).json({ success: false, message: "Webhook error" });
    }
};*/
