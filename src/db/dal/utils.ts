import { query } from "../db";
/**
 * Executes a database query with error handling and returns the first row of the result.
 * @param {string} queryString - The SQL query string with placeholders.
 * @param {any[]} params - An array of query parameters.
 * @returns {Promise<IUser>} The result of the query or null if not found.
 */
export async function executeSingleResultQuery(
  queryString: string,
  params: any[]
) {
  try {
    const result = await query(queryString, params);
    return result.rows[0];
  } catch (error: any) {
    throw new Error(`Database error: ${error.message}`);
  }
}
