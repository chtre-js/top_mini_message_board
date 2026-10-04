const { Router } = require("express");
const newRouter = Router();
const { addMessagesPost } = require("../controllers/messageController");

newRouter.get("/", (req, res) => {
  res.render("form");
})

newRouter.post("/", addMessagesPost);

module.exports = newRouter;
