import AttendenceRecord from "../models/attendanceRecord.js";

export async function markAttendance(req, res) {
    // in order to mark the attendance for in a class for a student on a specific date, the url should contain the classId, studentId, date and the status
    const { classId, studentId, date, status } = req.query;
    if (!studentId || !classId || !date || !status) {
        return res.status(400).json({ error: "Missing required fields" });
    }
    try {
        const record = await AttendenceRecord.create({
            date,
            status,
            StudentId: studentId,
            ClassId: classId
        })
        res.status(201).json(record)

    } catch (err) {
        res.status(500).json({ error: 'Failed to mark attendance'})

    }

}

export async function getAttendance(req, res) {
    const { studentId, date } = req.query;
    if (!studentId || !date) {
        return res.status(400).json({ error: "Missing required fields" });
    }
    try {
        const record = await AttendenceRecord.findOne({
            where: {
                date,
                StudentId: studentId
            }
        })
        if(!record) {
            return res.status(404).json({ message: "Attendance not found" });
        }

        res.status(200).json({
            studentId,
            date,
            status: record.status
        })
    } catch (err) {
         res.status(500).json({ error: 'Failed to get attendance'})
    }
}