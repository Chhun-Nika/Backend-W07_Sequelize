import sequelize from "./db/database.js"; 
import createAssociation from "./models/association.js";
import Class from "./models/class.js";
import AttendanceRecord from "./models/attendanceRecord.js";
import Student from "./models/student.js";
import attendanceRouter from "./routes/attendanceRoutes.js";
import express, { json } from "express";
import classRouter from "./routes/classRoutes.js";
import studentRouter from "./routes/studentRoutes.js";

await createAssociation();

const app = express();
app.use(json());

app.use("/attendance", attendanceRouter);
app.use("/classes", classRouter);
app.use("/students", studentRouter);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
})



// try {

//   // insert data into database
//   // await Class.bulkCreate([
//   //   { className: 'Backend', roomNumber: 101 },
//   //   { className: 'Frontend', roomNumber: 202 },
//   //   { className: 'Computer Science', roomNumber: 303 }
//   // ]);
//   // await Student.bulkCreate([
//   //   { name: 'Alice Johnson', email: 'alice@example.com', dob: '2005-03-12', ClassId: 1 },
//   //   { name: 'Bob Smith', email: 'bob@example.com', dob: '2004-07-21', ClassId: 1 },
//   //   { name: 'Charlie Kim', email: 'charlie@example.com', dob: '2005-11-02', ClassId: 2 },
//   //   { name: 'Dina Lee', email: 'dina@example.com', dob: '2003-01-18', ClassId: 3 }
//   // ]);
//   // await AttendanceRecord.bulkCreate([
//   //   { date: '2025-06-24', status: 'Present', StudentId: 1, ClassId: 1 },
//   //   { date: '2025-06-25', status: 'Absent', StudentId: 1, ClassId: 1 },
//   //   { date: '2025-06-26', status: 'Present', StudentId: 1, ClassId: 1 },
//   //   { date: '2025-06-24', status: 'Absent', StudentId: 2, ClassId: 1 },
//   //   { date: '2025-06-25', status: 'Present', StudentId: 2, ClassId: 1 },
//   //   { date: '2025-06-26', status: 'Present', StudentId: 2, ClassId: 1 },
//   //   { date: '2025-06-24', status: 'Present', StudentId: 3, ClassId: 2 },
//   //   { date: '2025-06-25', status: 'Present', StudentId: 3, ClassId: 2 },
//   //   { date: '2025-06-24', status: 'Present', StudentId: 4, ClassId: 3 },
//   //   { date: '2025-06-25', status: 'Absent', StudentId: 4, ClassId: 3 }
//   // ]);

//   // // mark attendance for a student in a class on a given date
//   // const student = await Student.findOne({ where: {name: "Dina Lee"}});
//   // const cls = await Class.findOne({ where: {className: "Frontend"}});
//   // await AttendanceRecord.create({
//   //   date: '2025-06-17',
//   //   status: 'Present',
//   //   StudentId: student.id,
//   //   ClassId: cls.id
//   // })
  
//   // get attendance for a specific student on a specific date
//   const attendance = await AttendanceRecord.findOne({
//     where: {
//       StudentId: 1,
//       date: '2025-06-24'
//     }
//   })

//   console.log(attendance.status)

//   // list attendance for all students in a class
//   const allStudents = await AttendanceRecord.findAll({
//     where: {classId: 1},
//     include:{
//       model: Student
//     }
//   })

//   allStudents.forEach(e => {
//     console.log(`- ${e.Student.name} - ${e.date} - ${e.status}`)
//   });

//   // get attendance summary for a student
//   const summary = await AttendanceRecord.findAll({
//     where: {StudentId: 2},
//     attributes: ['status', [sequelize.fn('COUNT', sequelize.col('status')), 'count']],
//     group: ['status']
//   })

//   summary.forEach(s => {
//     console.log(`${s.status}: ${s.get('count')}`)
//   });




 
// } catch (error) {
//   console.error("Unable to connect to the database:", error);
// }
