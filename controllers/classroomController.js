import supabase from "../supabaseConfig.js";
export async function getClassrooms(request, reply) {
  try {
    const { data, error } = await supabase.from("classroom").select();
    if (error) {
      throw error;
    }
    return reply.code(200).send(JSON.stringify(data));
  } catch (err) {
    return reply.code(500).send(err);
  }
}
export async function getClassroom(request, reply) {
    try {
      const { data, error } = await supabase
        .from("classroom")
        .select()
        .eq("id", request.params.params);
      if (error) {
        throw error;
      }
      return reply.code(200).send(JSON.stringify(data));
    } catch (err) {
      return reply.code(500).send(err);
    }
  }
  
  export async function postClassroom(request, reply) {
    var response;
    try {
      const { data, error } = await supabase.from("classroom").insert(request.body);
      if (error) {
        throw error;
      }
      reply.code(200).send({ data, error });
    } catch (err) {
      reply.code(500).send(err);
    }
  }
  
  export async function updateClassroom(request, reply) {
    try {
      var id = request.params.params;
      const { data, error } = await supabase
        .from("classroom")
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
  
  export async function deleteClassroom(request, reply) {
    try {
      var id = request.params.params;
      const { data, error } = await supabase
        .from("classroom")
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
