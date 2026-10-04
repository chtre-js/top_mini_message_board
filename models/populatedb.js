process.loadEnvFile();
const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  text TEXT,
  username TEXT,
  added TIMESTAMP DEFAULT NOW()
);

INSERT INTO messages (text, username) 
VALUES
  ('Some text', 'Lupin')
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.DB_URL,
    ssl: true
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
