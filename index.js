import dotenv from "dotenv"
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.routes.js"
import activityRouter from "./routes/activity.routes.js"
import {connectDB} from "./db/dbConfig.js";
dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

connectDB();

app.use(express.json());
app.use(cors({
    origin: "*"
}));
app.use(cookieParser());

app.use("/api/v1/users", authRouter);
app.use("/api/v1/activities", activityRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
