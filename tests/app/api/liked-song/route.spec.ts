import { GET, POST, DELETE } from "../../../../src/app/api/liked-song/route";
import { addLikedSong, getLikedSongs } from "../../../../src/db/dal/likedSong";
import { createMockUser } from "../../../../tests/db/dal/user.spec";
import { query } from "../../../../src/db/db";

describe("Liked Songs API", () => {
  beforeEach(
    async () => await query("DELETE FROM liked_songs WHERE track_id='asdf'")
  );

  describe("GET Function", () => {
    it("should return 400 if no email is provided", async () => {
      const request = { url: "http://localhost" };
      const result = await GET(request as any);

      expect(result.status).toBe(400);
    });

    it("should return liked songs list if email exists", async () => {
      const mockUser = await createMockUser();
      const request = { url: `http://localhost/api/liked-songs?user_email=${mockUser.email}` };

      const trackId = "asdf";
      await addLikedSong(mockUser.email as string, trackId);

      const result = await GET(request as any);
      const data = JSON.parse(await result.text());

      expect(data.rowCount).toBe(1);
      expect(data.rows[0]).toMatchObject({
        user_email: mockUser.email,
        track_id: "asdf",
      });
    });
  });

  describe("POST Function", () => {
    it("should add a new track to liked_songs", async () => {
      const newUser = await createMockUser();
      const request = {
        json: async () => ({
          user_email: newUser.email,
          track_id: "asdf",
        }),
      };

      const previousLikedSongs = await getLikedSongs(newUser.email as string)

      const result = await POST(request as any);
      expect(result.status).toBe(201)

      const currentLikedSongs = await getLikedSongs(newUser.email as string)
      expect(currentLikedSongs.rowCount).toBe(previousLikedSongs.rowCount + 1);
    });
  });

  describe("DELETE function", () => {
    it('deletes the liked_song pair from the db',async () => {
      const newUser = await createMockUser();
      const request = {
        json: async () => ({
          user_email: newUser.email,
          track_id: "asdf",
        }),
      };

      const POSTresult = await POST(request as any);
      expect(POSTresult.status).toBe(201)

      const previousLikedSongs = await getLikedSongs(newUser.email as string)
      expect(previousLikedSongs.rowCount).toBe(1);

      const DELETEresult = await DELETE(request as any);
      expect(DELETEresult.status).toBe(200)

      const currentLikedSongs = await getLikedSongs(newUser.email as string)
      expect(currentLikedSongs.rowCount).toBe(0);
    })
  })
});
