import supabase from "../supabaseConfig.js";
export async function getSchools(request, reply) {
  try {
    const { data, error } = await supabase.from("school").select();
    if (error) {
      throw error;
    }
    return reply.code(200).send(JSON.stringify(data));
  } catch (err) {
    return reply.code(500).send(err);
  }
}
export async function getSchool(request, reply) {
    try {
      const { data, error } = await supabase
        .from("school")
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
  
  export async function postSchool(request, reply) {
    var response;
    try {
      const { data, error } = await supabase.from("school").insert(request.body);
      if (error) {
        throw error;
      }
      reply.code(200).send({ data, error });
    } catch (err) {
      reply.code(500).send(err);
    }
  }
  
  export async function updateSchool(request, reply) {
    try {
      var id = request.params.params;
      const { data, error } = await supabase
        .from("school")
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
  
  export async function deleteSchool(request, reply) {
    try {
      var id = request.params.params;
      const { data, error } = await supabase
        .from("school")
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
