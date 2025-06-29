import DataTypes from 'sequelize';
import sequelize from '../db/database.js';

const Class = sequelize.define('Class', {
    className: DataTypes.STRING,
    roomNumber: DataTypes.INTEGER
})

export default Class;