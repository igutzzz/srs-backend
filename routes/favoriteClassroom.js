import { deleteFavoriteClassroom, getAllFavoriteClassroom, getFavoriteClassroom, postFavoriteClassroom } from "../controllers/favoriteClassroomController.js";

  export default async function favoriteClassroomRoutes(server) {
    server.get("/favoriteClassroom/:teacherId/:classroomId", getFavoriteClassroom);
    server.get("/favoriteClassroom/:teacherId", getAllFavoriteClassroom);
    server.post("/favoriteClassroom", postFavoriteClassroom);
    server.delete("/favoriteClassroom/:id", deleteFavoriteClassroom);
  }
  