import supabase from "../supabaseConfig.js";
export async function getStudents(request, reply) {
  try {
    const { data, error } = await supabase.from("userStudent").select();
    if (error) {
      throw error;
    }
    return reply.code(200).send(JSON.stringify(data));
  } catch (err) {
    return reply.code(500).send(err);
  }
}
export async function getStudent(request, reply) {
  try {
    const { data, error } = await supabase
      .from("userStudent")
      .select(`
        id,
        studentId,
        course(
          id,
          name
        ),
        semester,
        period,
        user(
          firstName,
          lastName
        )
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

export async function postStudent(request, reply) {
  var response;
  try {
    const { data, error } = await supabase
      .from("userStudent")
      .insert(request.body);
    if (error) {
      throw error;
    }
    reply.code(200).send({ data, error });
  } catch (err) {
    reply.code(500).send(err);
  }
}

export async function updateStudent(request, reply) {
  try {
    var id = request.params.params;
    const { data, error } = await supabase
      .from("userStudent")
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

export async function deleteStudent(request, reply) {
  try {
    var id = request.params.params;
    const { data, error } = await supabase
      .from("userStudent")
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

export async function getStudentCourses(request, reply) {
  try {
    const { data, error } = await supabase.from("studentCourse").select();
    if (error) {
      throw error;
    }
    return reply.code(200).send(JSON.stringify(data));
  } catch (err) {
    return reply.code(500).send(err);
  }
}
export async function getStudentCourse(request, reply) {
  try {
    const { data, error } = await supabase
      .from("studentCourse")
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

export async function postStudentCourse(request, reply) {
  var response;
  try {
    const { data, error } = await supabase
      .from("studentCourse")
      .insert(request.body);
    if (error) {
      throw error;
    }
    reply.code(200).send({ data, error });
  } catch (err) {
    reply.code(500).send(err);
  }
}

export async function updateStudentCourse(request, reply) {
  try {
    var id = request.params.params;
    const { data, error } = await supabase
      .from("studentCourse")
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

export async function deleteStudentCourse(request, reply) {
  try {
    var id = request.params.params;
    const { data, error } = await supabase
      .from("studentCourse")
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
