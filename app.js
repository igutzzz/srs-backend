import fastify from "fastify";
import fastifyCors from "@fastify/cors";
import fastifyFormbody from "@fastify/formbody";

//Routes
import userRoutes from "./routes/user.js";
import teacherRoutes from "./routes/teacher.js";
import studentRoutes from "./routes/student.js";
import schoolRoutes from "./routes/school.js";
import reservationRoutes from "./routes/reservation.js";
import courseRoutes from "./routes/course.js";
import classroomRoutes from "./routes/classroom.js";
import classRoutes from "./routes/class.js";
import loginRoutes from "./routes/login.js";
import favoriteClassroomRoutes from "./routes/favoriteClassroom.js";

const server = fastify();
const port = process.env.PORT || 4000;
const corsOptions = {
  credentials: true,
  //mudar para a url do sistema
  // origin: /localhost\:5173/,
  origin: /localhost\:3000/,
  // origin: /localhost\:4000/,
};

// Config CORS/Body
server.register(fastifyCors, corsOptions);
server.register(fastifyFormbody);

//Register routes
const routes = [
  userRoutes,
  teacherRoutes,
  studentRoutes,
  schoolRoutes,
  reservationRoutes,
  courseRoutes,
  classroomRoutes,
  classRoutes,
  loginRoutes,
  favoriteClassroomRoutes,
];
routes.forEach((route) => {
  server.register(route);
});

server.listen({
  port: port,
  host: '0.0.0.0'
});
