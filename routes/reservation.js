import {
  getReservations,
  getReservation,
  postReservation,
  updateReservation,
  deleteReservation,
  getReservationsByTeacherIdByDate,
  getReservationsByCourseIdByDate,
  getAllReservations,
  postReservationByTeacherId,
} from "../controllers/reservationController.js";

export default async function reservationRoutes(server) {
  server.get("/reservations", getReservations);
  server.get("/allReservations", getAllReservations);
  server.get("/reservation/:params", getReservation);
  server.get("/reservations/:teacherId/:date", getReservationsByTeacherIdByDate);
  server.get("/reservations/course/:courseId/:date", getReservationsByCourseIdByDate);
  server.post("/reservation", postReservation);
  server.post("/reservation/:params", postReservationByTeacherId);
  server.put("/reservation/:params", updateReservation);
  server.delete("/reservation/:params", deleteReservation);
}
