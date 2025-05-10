import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
    try {
        const {name, email, password, phone} = req.body;
        if(!name || !email || !password || !phone){
            return res.status(400).json({
                success: false,
                message: "Some fields are missing"
            })
        }

        const userExists = await User.findOne({email});
        if(userExists){
            return res.status(400).json({
                success: false,
                message: "User already exists with this email."
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            name, 
            email, 
            password: hashedPassword,
            phone,
            bookings: []
        });

        await user.save();

        const newUser = await User.findById(user._id).select("-password");

        return res.status(200).json({
            success: true,
            message: "New User Registered Successfully.",
            data: newUser
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "New User Registeration could not be done at the moment.",
        })
    }
}

export const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body;

        if(!email || !password){
            return res.status(400).json({
                success: false,
                message: "Some fields are missing"
            })
        }

        const user = await User.findOne({email});
        if(!user){
            return res.status(404).json({
                success: false,
                message: "No User exists with the given email"
            })
        }

        const check = await bcrypt.compare(password, user.password);
        if(!check){
            return res.status(400).json({
                success: false,
                message: "Invalid Password. Please try again with the correct password."
            })
        }

        const token = jwt.sign({
            _id: user._id,
        }, process.env.JWT_SECRET ,
        {
            expiresIn: "2h"
        });

        const options = {
            httpOnly: true,
            secure: true
        }

        return res
        .cookie("token", token, options)
        .status(200)
        .json({
            success: true,
            message: "User logged in successfully"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "User login failed at the moment.",
        })
    }
}