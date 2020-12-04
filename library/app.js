const express = require("express");
const chalk = require("chalk");
const debug = require("debug")("app");
const morgan = require("morgan");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

const nav = [
  { link: "/books", title: "Book" },
  { link: "/authors", title: "Author" },
];

app.use(morgan("tiny"));
app.use(express.static(path.join(__dirname, "/public/")));
app.use(
  "/css",
  express.static(path.join(__dirname, "/node_modules/boostrap/dist/css"))
);
app.use(
  "/js",
  express.static(path.join(__dirname, "/node_modules/boostrap/dist/js"))
);
app.use(
  "/js",
  express.static(path.join(__dirname, "/node_modules/jquery/dist"))
);
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("index", {
    nav,
    title: "Libray",
  });
});

app.listen(port, () => {
  debug(`listening on port ${chalk.green(port)}`);
  console.log(`listening on port ${chalk.green(port)}`);
});
