import {
  getUsers,
  getUser,
  postUser,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";

export default async function userRoutes(server) {
  server.get("/", getUsers);
  server.get("/user/:params", getUser);
  server.post("/user", postUser);
  server.put("/user/:params", updateUser);
  server.delete("/user/:params", deleteUser);
}
