import jwt from "jsonwebtoken";
import "dotenv/config";
import { User } from "../models/user";

function generateToken(id){
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:'30d'})
}

export const registor = async (req ,res) => {
    try {
        const {email , username , password , gender , dob}= req.body;
        if(!email || !username || !password || !gender || !age){
            return res.status(400).json({message:"Please fill all fields"})
        }
        if(password.length<8){
            return res.status(400).json({message:"Password must be at least 8 characters"})
        }
        const existingEmail = await User.findOne({ email });
        if (existingEmail) {
            return res.status(400).json({ message: "Email already exists" });
        }
        const user = new  User({
            email,
            username,
            password,
            gender,
            dob
        })
        await user.save();
        const token = generateToken(user._id);
        
        res.status(201).json({
            token,
            user:{
                id:user._id,
                email:user.email,
                username:user.username,
                gender:user.gender,
                dob:user.dob,
                createdAt:user.createdAt,
            }
        })  
    } catch (error) {
        console.log("registration error",error);
        res.status(500).json({message:"Internal server error"});  
    }
};
export const login = async (req ,res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "Please fill all fields" });
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        const token = generateToken(user._id);
        res.status(200).json({
            token,
            user: {
                id: user._id,
                email: user.email,
                username: user.username,
                createdAt: user.createdAt,
            }
        })
    } catch (error) {
        console.log("error logging in user: ", error);
        return res.status(500).json({ message: "Internal server error" });
    }
    
};
