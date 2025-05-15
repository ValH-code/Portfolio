import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Configuration du transporteur d'e-mails
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Vous pouvez utiliser d'autres services comme 'Outlook', 'Yahoo', etc.
      auth: {
        user: process.env.EMAIL_USER, // Votre adresse email
        pass: process.env.EMAIL_PASSWORD, // Votre mot de passe ou mot de passe d'application
      },
    });

    // Options de l'e-mail
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'pro.valentin.hamon@gmail.com', // Votre adresse email où vous souhaitez recevoir les messages
      subject: `Nouveau message de ${name}: ${subject}`,
      replyTo: email,
      html: `
        <div>
          <h2>Nouveau message du formulaire de contact</h2>
          <p><strong>Nom:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Sujet:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        </div>
      `,
    };

    // Envoi de l'e-mail
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'e-mail:', error);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi du message" },
      { status: 500 }
    );
  }
}