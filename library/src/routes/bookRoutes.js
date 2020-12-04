const express = require("express");
const bookRouter = express.Router();

function router(nav) {
  const books = [
    {
      title: "War and Peace",
      genre: "Historical Fiction",
      author: "Lev Nikolayevich Tolstoy",
      read: false,
    },
    {
      title: "Les Misérables",
      genre: "Historical Fiction",
      author: "Victor Hugo",
      read: false,
    },
    {
      title: "The wind in the Willows",
      genre: "Fantasy",
      author: "Mark Twain",
      read: false,
    },
    {
      title: "Childhood",
      genre: "Biography",
      author: "Lev Nikolayevich Tolstoy",
      read: false,
    },
  ];
  bookRouter.route("/").get((req, res) => {
    res.render("bookListView", {
      nav,
      title: "Libray",
      books,
    });
  });

  bookRouter.route("/:id").get((req, res) => {
    const { id } = req.params;
    res.render("bookView", {
      nav,
      title: "Libray",
      book: books[id],
    });
  });
  return bookRouter;
}

module.exports = router;
