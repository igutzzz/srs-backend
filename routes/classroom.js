import {
  getClassrooms,
  getClassroom,
  postClassroom,
  updateClassroom,
  deleteClassroom,
  getClassroomsWeb,
} from "../controllers/classroomController.js";

export default async function classroomRoutes(server) {
  server.get("/classroomsWeb", getClassroomsWeb);
  server.get("/classrooms", getClassrooms);
  server.get("/classroom/:params", getClassroom);
  server.post("/classroom", postClassroom);
  server.put("/classroom/:params", updateClassroom);
  server.delete("/classroom/:params", deleteClassroom);
}
