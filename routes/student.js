import {
  getStudents,
  getStudent,
  postStudent,
  updateStudent,
  deleteStudent,
} from "../controllers/studentController.js";

export default async function studentRoutes(server) {
  server.get("/", getStudents);
  server.get("/student/:params", getStudent);
  server.post("/student", postStudent);
  server.put("/student/:params", updateStudent);
  server.delete("/student/:params", deleteStudent);
}
