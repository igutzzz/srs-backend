import {
  getSchools,
  getSchool,
  postSchool,
  updateSchool,
  deleteSchool,
} from "../controllers/schoolController.js";

export default async function schoolRoutes(server) {
  server.get("/", getSchools);
  server.get("/school/:params", getSchool);
  server.post("/school", postSchool);
  server.put("/school/:params", updateSchool);
  server.delete("/school/:params", deleteSchool);
}
