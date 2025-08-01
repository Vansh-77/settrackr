import { Routine } from "../models/routine";

export const createRoutine = async (req, res) => {
    try {
        const { routineData } = req.body;
        if (!routineData.name || !routineData.workouts) {
            return res.status(400).json({ message: "Please fill all fields" });
        }
        const routine = new Routine({
            userId:req.user._id,
            ...routineData
        });
        await routine.save();
        res.status(201).json({
            message:"routine created successfully",
            routine,
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal server error"});
    }
}
export const getRoutines = async (req, res) => {
    try {
        const page = req.page || 1;
        const limit = req.limit || 5;
        const skip = (page-1)*limit;
        const count = await Routine.countDocuments({userId:req.user._id});
        const totalpages = Math.ceil(count/limit);
        const routines = await Routine.find({userId:res.user._id}).skip(skip).limit(limit).sort({createdAt:-1});
        if(!routines || routines.length===0){
            return res.status(404).json({message:"No routine found"});
        }
        res.status(200).json({
            page,
            count,
            totalpages,
            routines
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal server error"});
    }
}
export const updateRoutine = async (req, res) => {

}
export const deleteRoutine = async (req, res) => {

}