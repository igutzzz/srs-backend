import supabase from "../supabaseConfig.js";
export async function getCourses(request, reply) {
  try {
    const { data, error } = await supabase.from("course").select();
    if (error) {
      throw error;
    }
    return reply.code(200).send(JSON.stringify(data));
  } catch (err) {
    return reply.code(500).send(err);
  }
}


export async function getCourse(request, reply) {
    try {
      const { data, error } = await supabase
        .from("course")
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
  
  export async function postCourse(request, reply) {
    var response;
    try {
      const { data, error } = await supabase.from("course").insert(request.body);
      if (error) {
        throw error;
      }
      reply.code(200).send({ data, error });
    } catch (err) {
      reply.code(500).send(err);
    }
  }
  
  export async function updateCourse(request, reply) {
    try {
      var id = request.params.params;
      const { data, error } = await supabase
        .from("course")
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
  
  export async function deleteCourse(request, reply) {
    try {
      var id = request.params.params;
      const { data, error } = await supabase
        .from("course")
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
