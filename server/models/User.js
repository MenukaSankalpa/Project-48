import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique:true },
    resume: { type:String },
    image: { type: String, required: true} 
})


const User = mongoose.model('User', userSchema);


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
