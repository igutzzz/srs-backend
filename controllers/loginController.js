import supabase from "../supabaseConfig.js";
import nodemailer from "nodemailer";
import bcrypt from "bcrypt";
export async function login(request, reply) {
  var response;
  try {
    const { data, error } = await supabase
      .from("user")
      .select("id, userType, password")
      .eq("email", request.body.email);

    bcrypt.compare(
      request.body.password,
      data.password,
      async (err, result) => {
        if (err) {
          reply.code(400).send(
            JSON.stringify({
              message: "Email e/ou senha estão incorretos!",
            })
          );
          return;
        }
        const loginToken = [
          {
            id: data[0].id,
            userType: data[0].userType,
          },
        ];
        reply.code(200).send(JSON.stringify(loginToken));
      }
    );

    if (error) {
      throw error;
    }
  } catch (err) {
    reply.code(500).send(err);
  }
}

export async function forgotPassword(request, reply) {
  var response;
  try {
    const { email } = request.body;
    const { data, error } = await supabase
      .from("user")
      .select("id")
      .eq("email", email);

    if (data.length > 0) {
      reply.code(200).send(JSON.stringify(email));
    } else {
      reply.code(400).send(
        JSON.stringify({
          message: "Esse email não existe!",
        })
      );
    }

    // const transporter = nodemailer.createTransport({
    //   host: 'smtp.gmail.com',
    //   port: 587,
    //   secure: false,
    //   auth: {
    //     user: process.env.AUTHUSEREMAIL,
    //     pass: process.env.AUTHPASSEMAIL,
    //   },
    // });

    // // Defina o email de origem e destino
    // const remetente = process.env.AUTHUSEREMAIL;
    // const destinatario = email;

    // const mailOptions = {
    //   from: remetente,
    //   to: destinatario,
    //   subject: 'Recuperação de senha',
    //   // subject: 'Assunto do Email',
    //   text: '',
    //   html: emailTemplate(cliente.name, token),
    // };

    // await transporter.sendMail(mailOptions);
    // return 'Link de redefinição de senha enviado com sucesso!';

    if (error) {
      throw error;
    }
  } catch (err) {
    reply.code(500).send(err);
  }
}
