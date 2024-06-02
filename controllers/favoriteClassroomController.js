import supabase from "../supabaseConfig.js";

export async function getFavoriteClassroom(request, reply) {
    try {
      const { data, error } = await supabase
        .from("favoriteClassroom")
        .select(`
            id,
            classroomId
          )
        `)
        .eq("teacherId", request.params.teacherId)
        .eq("classroomId", request.params.classroomId);
      if (error) {
        throw error;
      }
      return reply.code(200).send(JSON.stringify(data));
    } catch (err) {
      return reply.code(500).send(err);
    }
  }
  
export async function getAllFavoriteClassroom(request, reply) {
    try {
      const { data, error } = await supabase
        .from("favoriteClassroom")
        .select(`
            id,
            classroom(
                id,
                schoolId,
                created_at,
                name,
                floor,
                items
            )
        `)
        .eq("teacherId", request.params.teacherId)
      if (error) {
        throw error;
      }
      return reply.code(200).send(JSON.stringify(data));
    } catch (err) {
      return reply.code(500).send(err);
    }
  }
  
  export async function postFavoriteClassroom(request, reply) {
    var response;
    try {
      const { data, error } = await supabase.from("favoriteClassroom").insert(request.body).select(`
        id
      `);
      if (error) {
        throw error;
      }
      reply.code(200).send({ data, error });
    } catch (err) {
      reply.code(500).send(err);
    }
  }
  
  export async function deleteFavoriteClassroom(request, reply) {
    try {
      var id = request.params.id;
      const { data, error } = await supabase
      .from("favoriteClassroom")
        .delete()
        .eq("id", id)
      if (error) {
        throw error;
      }
      reply.code(200).send(data);
    } catch (err) {
      reply.code(400).send(err);
    }
  }
