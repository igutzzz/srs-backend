import {
  getClasses,
  getClass,
  postClass,
  updateClass,
  deleteClass,
  getClassesByTeacherId,
  getCoursesByClassByTeacherId,
  getClassesByCourseIdByTeacherId,
  getClassesByTeacherIdByWeekDay,
  getClassesByCourseIdByWeekDay
} from "../controllers/classController.js";

export default async function classRoutes(server) {
  server.get("/classes", getClasses);
  server.get("/class/:params", getClass);
  server.get("/classes/:params", getClassesByTeacherId);
  server.get("/classes/:teacherId/:weekDay", getClassesByTeacherIdByWeekDay);
  server.get("/classes/courses/:params", getCoursesByClassByTeacherId);
  server.get("/classes/course/:courseId/:weekDay", getClassesByCourseIdByWeekDay);
  server.get("/classes/courses/:courseId/teacher/:teacherId", getClassesByCourseIdByTeacherId);
  server.post("/class", postClass);
  server.put("/class/:params", updateClass);
  server.delete("/class/:params", deleteClass);
}
