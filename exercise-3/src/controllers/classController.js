import Student from "../models/student.js";
import AttendanceRecord from "../models/attendanceRecord.js";

export async function getAttendanceByClass(req, res) {
    const { id } = req.params;

    try {
        const records = await AttendanceRecord.findAll({
            where: {ClassId: id},
            include: [{ model: Student }]
        })
        res.status(200).json(records);
    } catch (err) {
        res.status(500).json({ error: "Failed to get attendance records" });
    }
    
}