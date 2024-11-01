import pool from "./pool.js";

export async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

export async function postAMessage(text, username, date) {
  const query = `
    INSERT INTO messages (text, username, added)
    VALUES ($1, $2, $3)
  `;
  await pool.query(query, [text, username, date]);
}
