import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique:true },
    resume: { type:String },
    image: { type: String, required: true} 
})

<<<<<<< HEAD
const User = mongoose.model('User', userSchema);
=======
const User = mongoose.model("User", userSchema)
>>>>>>> 1a9fec65b175663161917c071abad90c50251046

export default User; 

/*import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  _id: String,
  name: String,
  email: String,
  image: String,
  resume: String
});

const User = mongoose.model('User', UserSchema);

// Use default export for ES Modules
export default User;*/
