import {Router} from "express"
import { markAttendance, getAttendance } from "../controllers/attendanceController.js";

const attendanceRouter = Router();

// to mark attendance since we need to specify the class and the status before marking it
// http://localhost:4000/attendance?classId=1&studentId=1&date=2025-06-17&status=present 
attendanceRouter.post("/", markAttendance);

// get attendance of a student on a specific date
attendanceRouter.get("/", getAttendance);


export default attendanceRouter;