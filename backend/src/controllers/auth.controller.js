import jwt from "jsonwebtoken";
import "dotenv/config";
import { User } from "../models/user";

function generatetoken(id){
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:'30d'})
}

export const registor = async (req ,res) => {
    try {
        const {email , username , password , gender , age}= req.body;
        if(!email || !username || !password || !gender || !age){
            return res.status(400).json({message:"Please fill all fields"})
        }
        if(password.length<8){
            return res.status(400).json({message:"Password must be at least 8 characters"})
        }
        const existingEmail = await User.findOne({ email });
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: "Username already exists" });
        }
        if (existingEmail) {
            return res.status(400).json({ message: "Email already exists" });
        }
        const user = new  User({
            email,
            username,
            password,
            gender,
            age
        })
        await user.save();
        const token = generatetoken(user._id);
        
        res.status(201).json({
            token,
            user:{
                email,
                username,
                gender,
                age
            }
        })  
    } catch (error) {
        console.log("registration error",error);
        res.status(500).json({message:"Internal server error"});  
    }
};
export const login = async (req ,res) => {
    
};
