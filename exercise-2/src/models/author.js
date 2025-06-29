import { DataTypes } from "sequelize";
import sequelize from "../db/database.js";

// Exercise 2:
// TODO - Create the model Author
const Author = sequelize.define('Author', {
    name: DataTypes.STRING,
    birthYear: DataTypes.INTEGER
})

// TODO - Export the model User
export default Author;
