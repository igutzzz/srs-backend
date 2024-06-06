import { forgotPassword, login } from "../controllers/loginController.js";

export default async function loginRoutes(server) {
    server.post("/login", login);
    server.post("/login/forgotPassword", forgotPassword);
  }
  