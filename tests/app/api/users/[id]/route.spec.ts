import axios from "axios";
import { BASE_URL } from "../../../../../testConfig";

describe("Update a user", () => {
  it("should update the username of a user", async () => {
    const userId = 1;

    const response = await axios.put(`${BASE_URL}/api/users/${userId}`, {
      username: "NewUsername",
    });

    expect(response.status).toBe(200);
    expect(response.data.userObj.username).toBe("NewUsername");
  });

  it("should update the password of a user", async () => {
    const userId = 1;

    const response = await axios.put(`${BASE_URL}/api/users/${userId}`, {
      password: "NewPassword",
    });

    expect(response.data.userObj.password).toBe("NewPassword");
    expect(response.status).toBe(200);
  });
});
