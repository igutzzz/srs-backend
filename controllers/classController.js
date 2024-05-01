import supabase from "../supabaseConfig.js";
export async function getClasses(request, reply) {
  try {
    const { data, error } = await supabase.from("class").select();
    if (error) {
      throw error;
    }
    return reply.code(200).send(JSON.stringify(data));
  } catch (err) {
    return reply.code(500).send(err);
  }
}
export async function getClass(request, reply) {
    try {
      const { data, error } = await supabase
        .from("class")
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
  
  export async function postClass(request, reply) {
    var response;
    try {
      const { data, error } = await supabase.from("class").insert(request.body);
      if (error) {
        throw error;
      }
      reply.code(200).send({ data, error });
    } catch (err) {
      reply.code(500).send(err);
    }
  }
  
  export async function updateClass(request, reply) {
    try {
      var id = request.params.params;
      const { data, error } = await supabase
        .from("class")
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
  
  export async function deleteClass(request, reply) {
    try {
      var id = request.params.params;
      const { data, error } = await supabase
        .from("class")
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
