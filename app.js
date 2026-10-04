process.loadEnvFile();
const express = require("express");
const app = express();
const path = require("node:path");
const newRouter = require("./routes/newRouter");
const { messagesGet } = require("./controllers/messageController");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", messagesGet)

app.use("/new", newRouter);

const PORT = 3000;

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`My first Express app - listening on port ${PORT}!`);
});
