import express from "express"
import "dotenv/config"
import AuthRoutes from "./routes/auth.routes.js"
import RoutineRoutes from "./routes/routine.routes.js"
import WorkoutRoutes from "./routes/workout.routes.js"
import { ConnectDB } from "./config/db.js";

const app = express();

app.use("/auth", AuthRoutes);
app.use("/routine",RoutineRoutes)
app.use("/workout",WorkoutRoutes)


app.listen(process.env.PORT , ()=>{
    console.log(`server running on port ${process.env.PORT}`)
    ConnectDB();
});


