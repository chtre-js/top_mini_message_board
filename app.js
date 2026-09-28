const express = require("express");
const app = express();
const path = require("node:path");
const newRouter = require("./routes/newRouter");
const messages = require("./models/db.js");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index", {messages: messages})
})

app.use("/new", newRouter);

const PORT = 3000;

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`My first Express app - listening on port ${PORT}!`);
});
