import DataTypes from 'sequelize'
import sequelize from '../db/database.js'

const AttendenceRecord = sequelize.define('AttendenceRecord', {
    date: DataTypes.DATEONLY,
    status: DataTypes.ENUM('Present', 'Absent')
})

export default AttendenceRecord;