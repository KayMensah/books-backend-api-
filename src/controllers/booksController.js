const res = require("express/lib/response");
const BooksModel = require("../models/bookModel");

const getBooksController = async (request, response) => {
  try {
    const books = await BooksModel.find();
    response.json(books);
  } catch (error) {
    console.log(error);
  }
};

const updateBook = async (request, response) => {
  const bookId = request.query.id;
  const updatedInfo = request.body;
  const updatedBook = await bookModel.findByIdAndUpdate(
    bookId,
    {
      $set: updatedInfo,
    },
    { new: true }
  );
  response.send(updateBook);

  //   const Book = request.body;
  //   booksArr.updateBook(book);
};

const postBooksController = async (request, response) => {
  try {
    const book = request.body;
    const newBook = new BooksModel(book);
    console.log(book);

    await newBook.save();

    // response.send(newBook);
    response.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

const deleteBook = (request, response) => {
  const bookId = request.query.id;

  booksArr = booksArr.filter((book) => {
    return book.id != bookId;
  });

  response.send(booksArr);
};

module.exports = {
  getBooksController,
  postBooksController,
  updateBook,
  deleteBook,
};

///////

// const postUsersController = async (request, response) => {
//   try {
//     const user = request.body;
//     const newUser = new userModel(user);

//     await newUser.save();

//     response.send(newUser);
//   } catch (error) {
//     console.log(error);
//   }
// };
