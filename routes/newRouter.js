const { Router } = require("express");
const newRouter = Router();
const messages = require("../models/db.js");

newRouter.get("/", (req, res) => {
  res.render("form");
})

newRouter.post("/", (req, res) => {
  messages.push({text: req.body.message, user: req.body.user, added: new Date()});
  res.redirect("/");
});

module.exports = newRouter;
