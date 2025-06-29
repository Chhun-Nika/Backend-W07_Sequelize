import { Router } from "express";
import { getAttendanceSummary } from "../controllers/studentController.js";

const studentRouter = Router();
studentRouter.get("/:id/attendance", getAttendanceSummary);

export default studentRouter;