import { login } from "../controllers/loginController.js";

export default async function loginRoutes(server) {
    server.post("/login", login);
  }
  