import express from "express"
import {createRoutine, deleteRoutine, getRoutines, updateRoutine} from "../controllers/routine.controller"


const router = express.Router();

router.post("/create-routine",createRoutine);
router.get("/get-routines",getRoutines);
router.put("/update-routine",updateRoutine);
router.delete("/delete-routine",deleteRoutine);

export default router;