import {
  getUsers,
  getUser,
  postUser,
  updateUser,
  deleteUser,
  getUsersStatus,
  getUsersAguardando,
  updateUserStatusById,
  getUserByEmail,
} from "../controllers/userController.js";

export default async function userRoutes(server) {
  server.get("/users", getUsers);
  server.get("/users/status", getUsersStatus);
  server.get("/users/statusAguardando", getUsersAguardando);
  server.get("/user/:params", getUser);
  server.get("/userEmail/:params", getUserByEmail);
  server.post("/user", postUser);
  server.patch("/user/status/:params", updateUserStatusById);
  server.put("/user/:params", updateUser);
  server.delete("/user/:params", deleteUser);
}
