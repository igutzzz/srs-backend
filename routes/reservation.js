import {
  getReservations,
  getReservation,
  postReservation,
  updateReservation,
  deleteReservation,
} from "../controllers/reservationController.js";

export default async function reservationRoutes(server) {
  server.get("/reservations", getReservations);
  server.get("/reservation/:params", getReservation);
  server.post("/reservation", postReservation);
  server.put("/reservation/:params", updateReservation);
  server.delete("/reservation/:params", deleteReservation);
}
