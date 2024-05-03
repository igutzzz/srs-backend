import {
  getTeachers,
  getTeacher,
  postTeacher,
  updateTeacher,
  deleteTeacher,
} from "../controllers/teacherController.js";

export default async function teacherRoutes(server) {
  server.get("/teachers", getTeachers);
  server.get("/teacher/:params", getTeacher);
  server.post("/teacher", postTeacher);
  server.put("/teacher/:params", updateTeacher);
  server.delete("/teacher/:params", deleteTeacher);
}
