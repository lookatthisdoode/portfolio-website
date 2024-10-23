const nodemailer = require("nodemailer");
import dotenv from 'dotenv';
dotenv.config();

const transporter = nodemailer.createTransport({
    host: 'mail.privateemail.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL_LOGIN,
        pass: process.env.EMAIL_PASSWORD
    }
});

export default async function sendMail(props:{name:string, contact:string, message:string}) {
    let emailBody = `
    <h2>New Message from Portfolio Website</h2>
    <p><strong>Name:</strong> ${props.name}</p>
    <p><strong>Contact:</strong> ${props.contact}</p>
    <p><strong>Message:</strong> ${props.message}</p>
    `;
  const info = await transporter.sendMail({
    from: `${process.env.EMAIL_LOGIN}`, // sender address
    to: process.env.EMAIL_RECIEVER, // list of receivers
    subject: "Someone wants some work done", // Subject line
    //text: emailContent, // plain text body
    html: emailBody, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}