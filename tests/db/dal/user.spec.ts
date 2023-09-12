import {
  IUser,
  createUser,
  updateUser,
  getUser,
} from "../../../src/db/dal/user";
import { query } from "../../../src/db/db";

export async function createMockUser() {
  return await createUser({
    email: "test@pmr.com",
  });
}

describe("User table", () => {
  describe("createUser()", () => {
    it("creates a new user", async () => {
      const getUsers = async () => await query("SELECT * FROM users");
      const previousUsers = await getUsers();
      await createMockUser();
      const currentUsers = await getUsers();

      expect(currentUsers.rowCount).toEqual(previousUsers.rowCount + 1);
    });

    it("creates the user with the correct information", async () => {
      const newUser = await createMockUser();

      expect(newUser).toMatchObject({
        email: "test@pmr.com",
      });
    });
  });

  describe("updateUser()", () => {
    async function testUpdateUser(updates: IUser) {
      const newUser: IUser = await createMockUser();
      const updatedUser = await updateUser(newUser.id as number, updates);

      expect(updatedUser).toMatchObject(updates);
    }

    it("updates only the sid", async () => {
      await testUpdateUser({ sid: "newSid" });
    });

    it("updates only the personality_type", async () => {
      await testUpdateUser({
        personality_type: "intj",
      });
    });

    it("updates multiple table column values", async () => {
      await testUpdateUser({
        personality_type: "intj",
        sid: "newSid",
      });
    });
  });

  describe("getUser()", () => {
    it("gets the user based on the id", async () => {
      const newUser: IUser = await createMockUser();
      const user = await getUser(newUser.email as string);

      expect(user).toHaveProperty("id");
      expect(user).toHaveProperty("personality_type");
      expect(user).toHaveProperty("sid");
      expect(user.email).toBe("test@pmr.com");
    });
  });
});
