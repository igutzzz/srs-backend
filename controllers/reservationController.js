import supabase from "../supabaseConfig.js";
export async function getReservations(request, reply) {
  try {
    const { data, error } = await supabase.from("reservations").select();
    if (error) {
      throw error;
    }
    return reply.code(200).send(JSON.stringify(data));
  } catch (err) {
    return reply.code(500).send(err);
  }
}
export async function getReservation(request, reply) {
    try {
      const { data, error } = await supabase
        .from("reservations")
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
  
  export async function postReservation(request, reply) {
    var response;
    try {
      const { data, error } = await supabase.from("reservations").insert(request.body);
      if (error) {
        throw error;
      }
      reply.code(200).send({ data, error });
    } catch (err) {
      reply.code(500).send(err);
    }
  }
  
  export async function updateReservation(request, reply) {
    try {
      var id = request.params.params;
      const { data, error } = await supabase
        .from("reservations")
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
  
  export async function deleteReservation(request, reply) {
    try {
      var id = request.params.params;
      const { data, error } = await supabase
        .from("reservations")
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
