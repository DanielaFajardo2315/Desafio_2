const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

exports.handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers, body: JSON.stringify({ error: 'Método no permitido' }) };
  }

  try {
    const { name, phone, email, message } = JSON.parse(event.body);

    if (!name || !phone || !email) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Nombre, teléfono y correo son requeridos' }),
      };
    }

    await resend.emails.send({
      from: 'onboarding@resend.dev', 
      to: 'danielafajardo2315@gmail.com',     
      reply_to: email,     
      subject: `Nuevo contacto de ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 500px; margin: auto;">
          <h2 style="color: #333;">Nuevo mensaje de contacto</h2>
          <hr/>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Teléfono:</strong> ${phone}</p>
          <p><strong>Correo:</strong> ${email}</p>
          <p><strong>Mensaje:</strong> ${message || 'Sin mensaje'}</p>
          <hr/>
          <small style="color: #999;">Enviado desde el formulario de tu sitio web</small>
        </div>
      `,
    });

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ success: true, message: 'Mensaje enviado correctamente' }),
    };

  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Error al enviar el mensaje' }),
    };
  }
};