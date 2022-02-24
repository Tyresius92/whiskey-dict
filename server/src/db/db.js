import 'dotenv/config';
const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE,
  port: process.env.DATABASE_PORT,
});

export const query = async (sql, params, callback) =>
  await pool.query(sql, params, callback);

export const fetch = async (sql, params, callback) => {
  const response = await pool.query(sql, params, callback);
  return response.rows[0];
};

export const fetchAll = async (sql, params, callback) => {
  const response = await pool.query(sql, params, callback);
  return response.rows;
};
