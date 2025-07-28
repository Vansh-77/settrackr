import express from "express"
import "dotenv/config"
import AuthRoutes from "./routes/auth.routes.js"
import { ConnectDB } from "./config/db.js";

const app = express();

app.use("/auth", AuthRoutes);


app.listen(process.env.PORT , ()=>{
    console.log(`server running on port ${process.env.PORT}`)
    ConnectDB();
});


