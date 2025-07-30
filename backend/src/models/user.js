import mongoose from "mongoose";
import bcrypt from "bcryptjs"

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
    },
    username:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    },
    gender:{
        type:String,
    },
    age:{
        type:Number,
    }
     
},{timestamps:true});

userSchema.pre("save",async function (next) {
    if(this.isModified("password")){
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password,salt);
    }
    next();    
})

export const User = new mongoose.model("User",userSchema);