import { Router } from "express";
import { verifyJwt } from "../middlewares/auth.js";
import { getAllActivities, bookActivity, getBookingsByUserId, createActivity } from "../controllers/activity.controller.js";

const router = Router();

router.route("/create").post(createActivity);
router.route("/getAllActivities").get(getAllActivities);
router.route("/bookActivity").post(verifyJwt, bookActivity);
router.route("/getBookingsByUserId").get(verifyJwt, getBookingsByUserId);

export default router;