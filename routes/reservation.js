import {
  getReservations,
  getReservation,
  postReservation,
  updateReservation,
  deleteReservation,
  getReservationsByTeacherIdByDate,
  getReservationsByCourseIdByDate,
} from "../controllers/reservationController.js";

export default async function reservationRoutes(server) {
  server.get("/reservations", getReservations);
  server.get("/reservation/:params", getReservation);
  server.get("/reservations/:teacherId/:date", getReservationsByTeacherIdByDate);
  server.get("/reservations/course/:courseId/:date", getReservationsByCourseIdByDate);
  server.post("/reservation", postReservation);
  server.put("/reservation/:params", updateReservation);
  server.delete("/reservation/:params", deleteReservation);
}
