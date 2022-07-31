const express = require("express");

const res = require("express/lib/response");

const mongoose = require("mongoose");

const path = require("path");
const {
  postBooksController,
  getBooksController,
} = require("./controllers/booksController");

const server = express();

//middleware definitions
server.use(express.json());
server.use(
  express.urlencoded({
    extended: true,
  })
);
server.use(express.static(path.join(__dirname, "public")));

//create the routes
server.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/books.html"));
});
server.post("/books", postBooksController);

server.get("/form", (req, res) => {
  res.sendFile(path.join(__dirname, "public/addBook.html"));
});
server.get("/getbooks", getBooksController);
mongoose
  .connect(
    "mongodb+srv://KorkorBooks:Kud518men@cluster0.hutul.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    server.listen(3000, () => {
      console.log("connected to the database");
    });
  })
  .catch((e) => {
    console.log(e);
  });
//stert the server here

server.listen(3002, () => {
  console.log("Korkor books server is running on port 3002");
});
