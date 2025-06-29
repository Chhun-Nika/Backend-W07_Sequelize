import sequelize from "../db/database.js";
import Student from "./student.js";
import Class from "./class.js";
import AttendenceRecord from "./attendanceRecord.js";

export default async function createAssociation(params) {
    
    // student and class
    Class.hasMany(Student)
    Student.belongsTo(Class)

    // student and attendance 
    Student.hasMany(AttendenceRecord)
    AttendenceRecord.belongsTo(Student)

    // class and attendance record 
    Class.hasMany(AttendenceRecord)
    AttendenceRecord.belongsTo(Class)
    
    await sequelize.sync();
}