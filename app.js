import fastify from "fastify";
import fastifyCors from "@fastify/cors";
import fastifyFormbody from "@fastify/formbody";
import SongRoutes from "./routes/songs.js";

const server = fastify();
const corsOptions = {
  credentials: true,
  origin: /localhost\:5173/,
};

// Config CORS/Body
server.register(fastifyCors, corsOptions);
server.register(fastifyFormbody);

server.register(SongRoutes);

server.listen({
  port: process.env.PORT || 3200,
});
