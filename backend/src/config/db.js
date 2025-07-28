import mongoose from "mongoose"
import "dotenv/config"

export const ConnectDB = async () => {

    try {
       const conn = await mongoose.connect(process.env.mongodb_uri);
       console.log(`Database connected ${conn.connection.host}`)        
    } catch (error) {
        console.log("error while connecting to db: ",error);    
        exit(1);    
    }
}