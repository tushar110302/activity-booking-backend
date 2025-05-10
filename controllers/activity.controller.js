import { Activity } from "../models/activity.model.js";
import { User } from "../models/user.model.js";

export const getAllActivities = async (req, res) => {
    try {
        const activities = await Activity.find({});

        return res.status(200).json({
            success: true,
            message: "All Activities fetched successfully",
            data: activities
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Activities could not be fetched.",
        })
    }
}

export const createActivity = async (req, res) => {
    try {
        const {title, description, location, dateTime} = req.body;
        if(!title || !description || !location || !dateTime){
            return res.status(400).json({
                success: false,
                message: "Some fields are missing"
            })
        }

        const activity = new Activity({
            title, 
            description, 
            location, 
            dateTime
        });

        await activity.save();
        return res.status(201).json({
            success: true,
            message: "Activity created successfully",
            data: activity
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Activity could not be created.",
        })
    }
}

export const bookActivity = async (req, res) => {
    try {
        const {activityId} = req.body;
        const userId = req.user;
        const activity = await Activity.findById(activityId);
        const user = await User.findById(userId);

        user.bookings.push(activity._id);
        await user.save();

        const updatedUser = await User.findById(userId).select("-password").populate("bookings");

        return res.status(200).json({
            success: true,
            message: "Activity Booked successfully",
            data: updatedUser
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Activity could not be booked.",
        })
    }
}

export const getBookingsByUserId = async (req, res) => {
    try {
        const userId = req.user;
        const user = await User.findById(userId).populate("bookings");
        const userBookings = user.bookings;

        return res.status(200).json({
            success: true, 
            message: "Bookings fetched successfully",
            data: userBookings
        }) 
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Bookings could not be fetched.",
        })
    }
}