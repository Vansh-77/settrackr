import mongoose from "mongoose";

const workoutSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    WorkoutName: {
        type: String,
        required: true,
    },
    exercises: [{
        name: {
            type: String,
            required: true
        },
        // exerciseId: {
        //     type: mongoose.Schema.Types.ObjectId,
        //     ref: "Exercise",
        //     required: true
        // },
        note: {
            type: String,
        },
        sets: [{
            setnumber: {
                type: Number,
                required: true
            },
            reps: {
                type: Number,
                required: true,
            },
            weight: {
                type: Number,
            },
            setNote: {
                type: String,
            }
        }],
    }],
    overallNote: {
        type: String
    },
}, { timestamps: true })

export const Workout = new mongoose.model("Workout", workoutSchema);