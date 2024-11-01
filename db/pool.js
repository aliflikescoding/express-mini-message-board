import pg from "pg";
const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Use Railway's connection URL
  ssl: {
    rejectUnauthorized: false, // Optional: required for secure connections
  },
});

export default pool;