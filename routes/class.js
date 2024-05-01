import {
  getClasses,
  getClass,
  postClass,
  updateClass,
  deleteClass,
} from "../controllers/classController.js";

export default async function classRoutes(server) {
  server.get("/", getClasses);
  server.get("/class/:params", getClass);
  server.post("/class", postClass);
  server.put("/class/:params", updateClass);
  server.delete("/class/:params", deleteClass);
}
