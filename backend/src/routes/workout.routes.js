import express from "express"
import { deleteWorkout, getWorkouts, logWorkout, updateWorkout } from "../controllers/workout.controller";

const router = express.Router();

router.post("/log-workout",logWorkout);
router.get("/get-workouts",getWorkouts);
router.put("/update-workout",updateWorkout);
router.delete("/delete-workout",deleteWorkout);


export default router;