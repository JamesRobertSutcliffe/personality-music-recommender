import { query } from "../../../src/db/db";
import { createMockUser } from "./user.spec";
import {
  addLikedSong,
  getLikedSongs,
  removeLikedSong,
} from "../../../src/db/dal/likedSong";

describe("Liked songs table", () => {
  let userId: number;

  beforeEach(async () => {
    const newUser = await createMockUser();
    userId = newUser.id as number;
  });

  describe("addLikedSong()", () => {
    it("adds a new liked song to a user", async () => {
      const previousLikedSongs = await query("SELECT * FROM liked_songs");

      const songId = 1;
      await addLikedSong(userId, songId);

      const updatedLikedSongs = await query("SELECT * FROM liked_songs");

      expect(updatedLikedSongs.rowCount).toBe(previousLikedSongs.rowCount + 1);
    });
  });

  describe("getLikedSongs()", () => {
    beforeEach(async () => {
      await addLikedSong(userId, 1);
      await addLikedSong(userId, 2);
    });

    it("returns the liked songs associated with the user id", async () => {
      const userLikedSongs = await getLikedSongs(userId);

      expect(userLikedSongs.rowCount).toBe(2);
      expect(userLikedSongs.rows[0]).toMatchObject({ song_id: 1 });
      expect(userLikedSongs.rows[1]).toMatchObject({ song_id: 2 });
    });
  });

  describe("removeLikedSong()", () => {
    beforeEach(async () => {
      const songId = 2;
      await addLikedSong(userId, songId);
    });

    it("removes a liked song", async () => {
      let likedSongs = await getLikedSongs(userId);
      expect(likedSongs.rowCount).toBe(1);

      const songId = 2;
      await removeLikedSong(userId, songId);

      likedSongs = await getLikedSongs(userId);
      expect(likedSongs.rowCount).toBe(0);
    });
  });
});
