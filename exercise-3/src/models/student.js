import sequelize from "../db/database.js";
import DataTypes from 'sequelize'

const Student = sequelize.define('Student', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    dob: DataTypes.DATE
})

export default Student;