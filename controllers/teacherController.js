import supabase from "../supabaseConfig.js";
export async function getTeachers(request, reply) {
  try {
    const { data, error } = await supabase.from("userTeacher").select();
    if (error) {
      throw error;
    }
    return reply.code(200).send(JSON.stringify(data));
  } catch (err) {
    return reply.code(500).send(err);
  }
}
export async function getTeacher(request, reply) {
    try {
      const { data, error } = await supabase
        .from("userTeacher")
        .select(`
          id,
          teacherId,
          user(
            firstName,
            lastName
          )
        `)
        .eq("userId", request.params.params);
      if (error) {
        throw error;
      }
      return reply.code(200).send(JSON.stringify(data));
    } catch (err) {
      return reply.code(500).send(err);
    }
  }
  
  export async function postTeacher(request, reply) {
    var response;
    try {
      const { data, error } = await supabase.from("userTeacher").insert(request.body);
      if (error) {
        throw error;
      }
      reply.code(200).send({ data, error });
    } catch (err) {
      reply.code(500).send(err);
    }
  }
  
  export async function updateTeacher(request, reply) {
    try {
      var id = request.params.params;
      const { data, error } = await supabase
        .from("userTeacher")
        .update(request.body)
        .eq("id", id)
        .select();
      if (error) {
        throw error;
      }
      reply.code(200).send(data);
    } catch (err) {
      reply.code(400).send(err);
    }
  }
  
  export async function deleteTeacher(request, reply) {
    try {
      var id = request.params.params;
      const { data, error } = await supabase
        .from("userTeacher")
        .delete()
        .eq("id", id)
        .select();
      if (error) {
        throw error;
      }
      reply.code(200).send(data);
    } catch (err) {
      reply.code(400).send(err);
    }
  }
