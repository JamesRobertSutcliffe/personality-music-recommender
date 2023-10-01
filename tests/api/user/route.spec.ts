import { GET, POST } from "../../../src/app/api/user/route";
import { createMockUser } from "../../../tests/db/dal/user.spec";
import { query } from '../../../src/db/db';

describe("GET Function", () => {
  it("should return 400 if no email is provided", async () => {
    const request = { url: "http://localhost" };
    const result = await GET(request as any);

    expect(result.status).toBe(400);
  });

  it("should return user details if email exists", async () => {
    const mockUser = await createMockUser();
    const request = { url: `http://localhost?email=${mockUser.email}` };

    const result = await GET(request as any);
    const data = JSON.parse(await result.text());

    expect(data.dbUser.email).toBe(mockUser.email);
  });
});

describe("POST Function", () => {
  it("should create a new user if email is new", async () => {
    const request = {
      json: async () => ({
        email: "new99@email.com",
        personality_type: "newType",
      }),
    };

    const result = await POST(request as any);

    if (result) {
      expect(result.status).toBe(200);
    }

    const data = await result.json();
    query(`DELETE FROM users WHERE id=${data.newUser.id}`)
  });
});
