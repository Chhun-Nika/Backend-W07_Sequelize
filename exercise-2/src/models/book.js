import { DataTypes } from "sequelize";
import sequelize from "../db/database.js";

// Exercise 2:
// TODO - create the model Book
const Book = sequelize.define('Book', {
    title: DataTypes.STRING,
    publicationYear: DataTypes.INTEGER,
    pages: DataTypes.INTEGER
})

export default Book;