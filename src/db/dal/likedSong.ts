import { executeSingleResultQuery } from "./utils";
import { query } from "../db";

/**
 * Adds a song to a user's liked_songs.
 *
 * @param userEmail - The user's email.
 * @param trackId - The song's ID.
 * @returns The favorite record.
 */
export async function addLikedSong(userEmail: string, trackId: string) {
  const insertLikedSongQuery = `
    INSERT INTO liked_songs (user_email, track_id)
    VALUES(\$1, \$2)
    RETURNING *`;

  const favorite = await executeSingleResultQuery(insertLikedSongQuery, [
    userEmail,
    trackId,
  ]);
  return favorite;
}

/**
 * Retrieves a user's favorite songs.
 *
 * @param userEmail - The user's email.
 * @returns A list of favorite songs.
 */
export async function getLikedSongs(userEmail: string) {
  const getUserLikedSongsQuery = `
    SELECT * FROM liked_songs
    WHERE user_email = \$1
  `;

  const userLikedSongs = query(getUserLikedSongsQuery, [userEmail]);
  return userLikedSongs;
}

/**
 * Removes a liked song from a user's liked_songs.
 *
 * @param userEmail - The user's email.
 * @param trackId - The song's ID to be removed.
 * @returns The removed song's ID.
 */
export async function removeLikedSong(userEmail: string, trackId: string) {
  const removeLikedSongQuery = `
    DELETE FROM liked_songs
    WHERE user_email = \$1 AND track_id = \$2
    RETURNING track_id
`;

  const removedSongId = await executeSingleResultQuery(removeLikedSongQuery, [
    userEmail,
    trackId,
  ]);
  return removedSongId;
}
