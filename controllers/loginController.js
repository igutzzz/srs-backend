import supabase from "../supabaseConfig.js";

  export async function login(request, reply) {
    var response;
    try {
      const { data, error } = await supabase
      .from("user")
      .select("id, email, password, userType")
      .eq("email", request.body.email)
      .eq("password", request.body.password);

    

      if (error) {
        throw error;
      }

      const loginToken = [
        {
            id: data[0].id,
            userType: data[0].userType
        }
      ];
 

      reply.code(200).send(JSON.stringify(loginToken));
    } catch (err) {
      reply.code(500).send(err);
    }
  }
  
  
