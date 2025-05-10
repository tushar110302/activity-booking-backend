import mongoose from "mongoose";

const activitySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }, 
    description: {
        type: String,
        required: true  
    }, 
    location: {
        type: String,
        required: true
    }, 
    dateTime: {
        type: String,
        required: true
    }
}, {timestamps: true });

export const Activity = mongoose.model("Activity", activitySchema);