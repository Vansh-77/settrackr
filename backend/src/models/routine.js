import mongoose from "mongoose";

const routineSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    current: { type: Boolean, required: true },
    workouts: [{
        name: { type: String, required: true },
        order: {
            type: Number,
            required: true
        },
        exercises: [{
            name: { type: String, required: true },
            sets: [{
                setnumber: {
                    type: Number,
                    required: true
                },
                reps: {
                    type: Number,
                },
                weight: {
                    type: Number,
                },
            }],
        }]
    }]

}, { timestamps: true });

export const Routine = new mongoose.model("Routine",routineSchema);