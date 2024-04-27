import supabase from "../supabaseConfig.js";
import {
  deleteSong,
  getSongs,
  getSong,
  postSong,
  updateSong,
} from "../controllers/SongsController.js";

export default async function SongRoutes(server) {
  server.get("/", getSongs);
  server.get("/song/:params", getSong);
  server.post("/song", postSong);
  server.put("/song/:params", updateSong);
  server.delete("/song/:params", deleteSong);
}
