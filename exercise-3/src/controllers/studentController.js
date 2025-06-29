import sequelize from "../db/database.js";
import AttendenceRecord from "../models/attendanceRecord.js";

export async function getAttendanceSummary(req, res) {
    const { id } = req.params;

    try {
        const records = await AttendenceRecord.findAll({
            where: {StudentId: id},
            attributes: ['status', [sequelize.fn('COUNT', sequelize.col('status')), 'count']],
            group: ['status']
        })

        res.status(200).json(records);
    } catch (err) {
        res.status(500).json({ error: "Failed to get attendance summary" });
    }
    
}