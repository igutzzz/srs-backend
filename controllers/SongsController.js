import supabase from "../supabaseConfig.js";
export async function getSongs(request, reply) {
  try {
    const { data, error } = await supabase.from("songs").select();
    if (error) {
      throw error;
    }
    return reply.code(200).send(JSON.stringify(data));
  } catch (err) {
    return reply.code(500).send(err);
  }
}

export async function getSong(request, reply) {
  try {
    const { data, error } = await supabase
      .from("songs")
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

export async function postSong(request, reply) {
  var response;
  try {
    const { data, error } = await supabase.from("songs").insert(request.body);
    if (error) {
      throw error;
    }
    reply.code(200).send({ data, error });
  } catch (err) {
    reply.code(500).send(err);
  }
}

export async function updateSong(request, reply) {
  try {
    var id = request.params.params;
    const { data, error } = await supabase
      .from("songs")
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

export async function deleteSong(request, reply) {
  try {
    var id = request.params.params;
    const { data, error } = await supabase
      .from("songs")
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
