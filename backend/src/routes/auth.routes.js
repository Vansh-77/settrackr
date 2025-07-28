import express from "express"
import { login, registor } from "../controllers/auth.controller";

const router = express.Router();

router.get("/",(req , res)=>{
    res.status(200).json({ejfs:"dsfsdf"})
});

router.post("/registor",registor);
router.post("/login",login);



export default router;