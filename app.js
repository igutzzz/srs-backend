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

const server = fastify();
const corsOptions = {
  credentials: true,
  //mudar para a url do sistema
  origin: /localhost\:5173/,
};

// Config CORS/Body
server.register(fastifyCors, corsOptions);
server.register(fastifyFormbody);

//Register routes
const routes = [
  { plugin: userRoutes },
  { plugin: teacherRoutes },
  { plugin: studentRoutes },
  { plugin: schoolRoutes },
  { plugin: reservationRoutes },
  { plugin: courseRoutes },
  { plugin: classroomRoutes },
  { plugin: classRoutes },
];

server.register(routes);

server.listen({
  port: process.env.PORT || 3200,
});
