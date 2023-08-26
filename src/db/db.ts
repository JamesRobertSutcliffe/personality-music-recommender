import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();
export const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT ? Number(process.env.DB_PORT) : undefined,
  ssl: process.env.DB_SSL ? {
    rejectUnauthorized: false,
  } : false,
});

/**
 * The `query` function is a helper function that executes a SQL query using the provided text and optional parameters.
 *
 * @param {string} text - The SQL query string to execute.
 * @param {any[]} [params] - Optional array of parameter values to substitute in the query.
 * @returns {Promise<any>} - A promise that resolves to the result of the query execution.
 */
export const query = (text: string, params?: any[]) => pool.query(text, params);
