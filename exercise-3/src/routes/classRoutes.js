import {Router} from "express"
import { getAttendanceByClass } from "../controllers/classController.js";

const classRouter = Router();
classRouter.get('/:id/attendance', getAttendanceByClass)


export default classRouter;