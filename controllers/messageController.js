const db = require("../models/queries");

async function messagesGet(req, res) {
   const messages = await db.getMessages();
   res.render("index", { messages })
}

async function addMessagesPost(req, res) {
  const message = {
    text: req.body.message,
    username: req.body.user
  }
  await db.insertMessage(message);
  res.redirect("/")
}

module.exports = {
  messagesGet,
  addMessagesPost,
}
