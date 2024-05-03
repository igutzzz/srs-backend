import {
  getCourses,
  getCourse,
  postCourse,
  updateCourse,
  deleteCourse,
} from "../controllers/courseController.js";

export default async function courseRoutes(server) {
  server.get("/courses", getCourses);
  server.get("/course/:params", getCourse);
  server.post("/course", postCourse);
  server.put("/course/:params", updateCourse);
  server.delete("/course/:params", deleteCourse);
}
