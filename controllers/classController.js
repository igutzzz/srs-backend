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
export async function getCoursesByTeacherId(request, reply) {
  try {
    const id = request.params.params;
    const { data, error } = await supabase.from("class")
    .select(`
        courseId
      `)
    .eq("teacherId", id);


  

    if (error) {
      throw error;
    }
    return reply.code(200).send(JSON.stringify(data));
  } catch (err) {
    return reply.code(500).send(err);
  }
} 

export async function getClassesByTeacherId(request, reply) {
  try {
    const { data, error } = await supabase
      .from("class")
      .select()
      .eq("teacherId", request.params.params);
    if (error) {
      throw error;
    }
    return reply.code(200).send(JSON.stringify(data));
  } catch (err) {
    return reply.code(500).send(err);
  }
}

export async function getClassesWebByTeacherId(request, reply) {
  try {
    const { data, error } = await supabase
      .from("class")
      .select(`
          id,
          name
        `)
      .eq("teacherId", request.params.params);
    if (error) {
      throw error;
    }
    return reply.code(200).send(JSON.stringify(data));
  } catch (err) {
    return reply.code(500).send(err);
  }
}

export async function getClassesByTeacherIdByWeekDay(request, reply) {
  try {
    const { data, error } = await supabase
      .from("class")
      .select(`
        id,
        name,
        time,
        userTeacher(
          user(
            firstName,
            lastName
          )
        ),
        classroom(
          name,
          floor
        )
      `)
      .eq("teacherId", request.params.teacherId)
      .eq("weekday", request.params.weekDay)
      .limit(4)
      ;
    if (error) {
      throw error;
    }
    return reply.code(200).send(JSON.stringify(data));
  } catch (err) {
    return reply.code(500).send(err);
  }
}

export async function getClassesByCourseIdByTeacherId(request, reply) {
  try {
    const { data, error } = await supabase
      .from("class")
      .select(`
        id,
        name,
        weekday
      `)
      .eq("courseId", request.params.courseId)
      .eq("teacherId", request.params.teacherId);
    if (error) {
      throw error;
    }
    return reply.code(200).send(JSON.stringify(data));
  } catch (err) {
    return reply.code(500).send(err);
  }
}

export async function getClassesByCourseIdByWeekDay(request, reply) {
  try {
    const { data, error } = await supabase
      .from("class")
      .select(`
        id,
        name,
        time,
        weekday,
        classroom(
          id,
          name,
          floor
        ),
        userTeacher(
          id,
          user(
            firstName,
            lastName
          )
        )
      `)
      .eq("courseId", request.params.courseId)
      .eq("weekday", request.params.weekDay);
    if (error) {
      throw error;
    }
    return reply.code(200).send(JSON.stringify(data));
  } catch (err) {
    return reply.code(500).send(err);
  }
}

export async function getCoursesByClassByTeacherId(request, reply) {
  try {
    const { data, error } = await supabase
      .from("class")
      .select(`
        courseId,
        course(
          id,
          name
        )
      `)
      .eq("teacherId", request.params.params);
    if (error) {
      throw error;
    }
    const uniqueCourses = data.filter((course, index, self) =>
      index === self.findIndex((t) => (
        t.course.id === course.course.id && t.course.name === course.course.name
      ))
    );


    return reply.code(200).send(JSON.stringify(uniqueCourses));
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
