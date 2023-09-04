import axios from "axios";
import { BASE_URL } from "../../../../testConfig";

describe("Create a new user", () => {
  it("should create a new user and return the user ID", async () => {
    const response = await axios.post(`${BASE_URL}/api/users`, {
      username: "JohnDoe",
      password: "password123",
      personality_type_id: 1,
    });

    expect(response.status).toBe(201);
    expect(response.data).toHaveProperty("id");
  });
});
