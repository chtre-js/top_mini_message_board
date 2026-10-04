const pool = require("./pool.js");

async function insertMessage(message) {
  await pool.query("INSERT INTO messages (text, username) VALUES ($1, $2)", [message.text, message.username])
}

async function getMessages() {
  const { rows } = await pool.query("SELECT * FROM messages")
  return rows
}

module.exports = {
  insertMessage,
  getMessages,
}
