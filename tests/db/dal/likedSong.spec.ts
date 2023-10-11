import { query } from "../../../src/db/db";
import { createMockUser } from "./user.spec";
import {
  addLikedSong,
  getLikedSongs,
  removeLikedSong,
} from "../../../src/db/dal/likedSong";

describe("Liked songs table", () => {
  let userEmail: string;

  beforeEach(async () => {
    await query("DELETE FROM liked_songs");
    const newUser = await createMockUser();
    userEmail = newUser.email as string;
  });
  afterEach(async () => {
  })
  describe("addLikedSong()", () => {
    it("adds a new liked song to a user", async () => {
      const previousLikedSongs = await query("SELECT * FROM liked_songs");

      const songId = 'asdf';
      await addLikedSong(userEmail, songId);

      const updatedLikedSongs = await query("SELECT * FROM liked_songs");

      expect(updatedLikedSongs.rowCount).toBe(previousLikedSongs.rowCount + 1);
    });
  });

  describe("getLikedSongs()", () => {
    beforeEach(async () => {
      await addLikedSong(userEmail, 'asdf');
    });

    it("returns the liked songs associated with the user id", async () => {
      const userLikedSongs = await getLikedSongs(userEmail);

      expect(userLikedSongs.rowCount).toBe(1);
      expect(userLikedSongs.rows[0]).toMatchObject({ track_id: 'asdf', user_email: userEmail });
    });
  });

  describe("removeLikedSong()", () => {
    beforeEach(async () => {
      const songId = 'asdf';
      await addLikedSong(userEmail, songId);
    });

    it("removes a liked song", async () => {
      let likedSongs = await getLikedSongs(userEmail);
      expect(likedSongs.rowCount).toBe(1);

      const songId = 'asdf';
      await removeLikedSong(userEmail, songId);

      likedSongs = await getLikedSongs(userEmail);
      expect(likedSongs.rowCount).toBe(0);
    });
  });
});
