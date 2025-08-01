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
        })
        await routine.save();
        res.status(201).json({
            message:"routine created successfully",
            routine
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal server error"});
    }

}
export const getRoutines = async (req, res) => {

}
export const updateRoutine = async (req, res) => {

}
export const deleteRoutine = async (req, res) => {

}