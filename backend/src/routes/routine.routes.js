import express from "express"
import {createRoutine, deleteRoutine, getRoutines, updateRoutine} from "../controllers/routine.controller"
import { ProtectRoute } from "../middleware/auth.middleware";


const router = express.Router();

router.post("/create-routine",ProtectRoute,createRoutine);
router.get("/get-routines",ProtectRoute,getRoutines);
router.put("/update-routine",ProtectRoute,updateRoutine);
router.delete("/delete-routine",ProtectRoute,deleteRoutine);

export default router;