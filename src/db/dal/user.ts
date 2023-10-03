import { query } from "../db";
import { executeSingleResultQuery } from "./utils";

export interface IUser {
  id?: number;
  email?: string;
  sid?: string;
  personality_type?: string;
}

/**
 * Creates a new user with the given email.
 * @param {IUser} user - An object containing user information.
 * @param {string} user.email - The email of the user to be created.
 * @returns {Promise<IUser>} The newly created user.
 */
export async function createUser({ email, personality_type }: IUser): Promise<IUser> {
  const insertUserQuery = `
    INSERT INTO users (email, personality_type)
    VALUES (\$1, \$2)
    RETURNING *
  `;

  return executeSingleResultQuery(insertUserQuery, [email, personality_type]);
}

/**
 * Updates a user's information based on their ID.
 * @param {number} userId - The ID of the user to be updated.
 * @param {IUser} updates - An object containing the fields to be updated.
 * @returns {Promise<IUser>} The updated user.
 */
export async function updateUser(
  userId: number,
  updates: IUser
): Promise<IUser> {
  // Create an array of params similar to: ["personality_type = $2", "sid = $3"]
  const setClauses = Object.keys(updates).map(
    (key, index) => `${key} = \$${index + 2}`
  );

  const updateUserQuery = `
    UPDATE users
    SET ${setClauses.join(", ")}
    WHERE id = \$1
    RETURNING *
  `;

  return executeSingleResultQuery(updateUserQuery, [
    userId,
    ...Object.values(updates),
  ]);
}
/**
 * Retrieves a user by their email.
 * @param {string} email - The email of the user to retrieve.
 * @returns {Promise<IUser>} The user with the specified email, or null if not found.
 */
export async function getUser(email: string): Promise<IUser> {
  const getUserQuery = `
    SELECT * FROM users
    WHERE email = \$1
  `;

  return executeSingleResultQuery(getUserQuery, [email]);
}
