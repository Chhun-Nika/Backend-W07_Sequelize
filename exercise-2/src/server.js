import sequelize from "./db/database.js"; 
import Author from "./models/author.js"; // 👈 this line is critical
import Book from "./models/book.js";
import { createAssociation } from "./models/association.js";

await createAssociation();

try {
  // TODO - Call sequelize.sync()
  const result = await sequelize.sync();
  // TODO -  Print the result of the sync on console
  console.log(result);

  // const authors = await Author.bulkCreate([
  //     { name: "Ronan The Best", birthYear: 1990 },
  //     { name: "Kim Ang", birthYear: 1995 },
  //     { name: "Hok Tim", birthYear: 2015 }
  // ]);

  // // insert book 
  // await Book.bulkCreate([
  //   { 
  //     title: "Ronan Book 1", 
  //     publicationYear: 2010,
  //     pages: 200,
  //     AuthorId: authors[0].id
  //   },
  //   {
  //     title: "Ronan Book 2",
  //     publicationYear: 2007,
  //     pages: 1000,
  //     AuthorId: authors[0].id
  //   },
  //   {
  //     title: "Kim Ang Book 1",
  //     publicationYear: 2022,
  //     pages: 190,
  //     AuthorId: authors[1].id
  //   },
  //   {
  //     title: "Kim Ang Book 2",
  //     publicationYear: 2017,
  //     pages: 1200,
  //     AuthorId: authors[1].id
  //   },
  //   {
  //     title: "Hok Tim Book 1",
  //     publicationYear: 2009,
  //     pages: 120,
  //     AuthorId: authors[2].id
  //   },
  //   {
  //     title: "Hok Time Book 2",
  //     publicationYear: 2024,
  //     pages: 1008,
  //     AuthorId: authors[2].id
  //   }
  // ])


  // query
    // -	Fetch all books by a given author.
  const books = await Book.findAll({
    where: {AuthorId: 1}
  })
   // - create new book with existing author
  // const author = await Author.findOne({ where: {name: "Kim Ang"} });
  // await author.createBook({
  //   title: "Kim Ang book 3",
  //   publicationYear: 2004,
  //   pages: 1900
  // })

    // - list all authors along with there books;
  const result2 = await Author.findAll({
    include: Book
  })

  // display book by an author
  console.log("-------------------");
  console.log("AuthorId = 1:")
  books.forEach(e => {
    console.log(`- ${e.title}`)
  });
  console.log("-------------------");

  // display all authors along with there books
  result2.forEach(a => {
    console.log(a.name);
    a.Books.forEach(b => {
      console.log(`- ${b.title}`)
    });
  });


} catch (error) {
  console.error("Unable to connect to the database:", error);
} finally {
  await sequelize.close();
}
