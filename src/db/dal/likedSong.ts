import { executeSingleResultQuery } from "./utils";
import { query } from "../db";

/**
 * Adds a song to a user's liked_songs.
 *
 * @param userId - The user's ID.
 * @param songId - The song's ID.
 * @returns The favorite record.
 */
export async function addLikedSong(userId: number, songId: number) {
  const insertLikedSongQuery = `
    INSERT INTO liked_songs (user_id, song_id)
    VALUES(\$1, \$2)
    RETURNING *`;

  const favorite = await executeSingleResultQuery(insertLikedSongQuery, [
    userId,
    songId,
  ]);
  return favorite;
}

/**
 * Retrieves a user's favorite songs.
 *
 * @param userId - The user's ID.
 * @returns A list of favorite songs.
 */
export async function getLikedSongs(userId: number) {
  const getUserLikedSongsQuery = `
    SELECT * FROM liked_songs
    WHERE user_id = \$1
  `;

  const userLikedSongs = query(getUserLikedSongsQuery, [userId]);
  return userLikedSongs;
}

/**
 * Removes a liked song from a user's liked_songs.
 *
 * @param userId - The user's ID.
 * @param songId - The song's ID to be removed.
 * @returns The removed song's ID.
 */
export async function removeLikedSong(userId: number, songId: number) {
  const removeLikedSongQuery = `
    DELETE FROM liked_songs
    WHERE user_id = \$1 AND song_id = \$2
    RETURNING song_id
`;

  const removedSongId = await executeSingleResultQuery(removeLikedSongQuery, [
    userId,
    songId,
  ]);
  return removedSongId;
}
