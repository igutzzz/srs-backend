import supabase from "../supabaseConfig.js";
export async function getUsers(request, reply) {
  try {
    const { data, error } = await supabase.from("user").select();
    if (error) {
      throw error;
    }
    return reply.code(200).send(JSON.stringify(data));
  } catch (err) {
    return reply.code(500).send(err);
  }
}
export async function getUser(request, reply) {
    try {
      const { data, error } = await supabase
        .from("user")
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
  
  export async function postUser(request, reply) {
    var response;
    try {
      const { data, error } = await supabase.from("user").insert(request.body);
      if (error) {
        throw error;
      }
      reply.code(200).send({ data, error });
    } catch (err) {
      reply.code(500).send(err);
    }
  }
  
  export async function updateUser(request, reply) {
    try {
      var id = request.params.params;
      const { data, error } = await supabase
        .from("user")
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
  
  export async function deleteUser(request, reply) {
    try {
      var id = request.params.params;
      const { data, error } = await supabase
        .from("user")
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
