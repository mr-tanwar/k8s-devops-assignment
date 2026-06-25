import app from "./app";
import { pool } from "./config/db";

const PORT = Number(process.env.PORT) || 3000;

const initDB = async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS employees (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      role VARCHAR(100) NOT NULL
    )
  `);
  console.log("Database initialized successfully");
};

const start = async () => {
  try {
    await initDB();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("Failed to initialize database:", err);
    process.exit(1);
  }
};

start();
