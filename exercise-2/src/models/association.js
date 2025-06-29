import Author from "./author.js";
import Book from "./book.js";
import sequelize from "../db/database.js";

export async function createAssociation(params) {
    Author.hasMany(Book);
    Book.belongsTo(Author);

    await sequelize.sync();
}