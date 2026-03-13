import nodemailer from "nodemailer";
import path from "path";

const filePath = path.join(process.cwd(), "src/assets/AbhishekSingh.pdf");

const emailList = [ "singhabhi13070@gmail.com",'sharmaanuraguim@gmail.com','help@sayhey.co.in'];

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USERR,
        pass: process.env.EMAIL_PASSS, // App password
      },
    });

    // await transporter.sendMail({
    //   from: `"${name}" <${email}>`,
    // //   to: "avinashy@observancegroup.com",
    //   to: "abhi210137@gmail.com",
    // //   to: "info@observancegroup.com",
    //   subject: "New Contact Form Submission",
    //   html: `
    //     <h2>New Message from Website</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Phone:</strong> ${phone}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${message}</p>
    //   `,
    // });
    for (const mail of emailList) {
      await transporter.sendMail({
        from: `"Abhishek Singh" <${process.env.EMAIL_USERR}>`,
        to: mail,
        subject: "Application for React Native Developer (Freelancer)",

        html: `
    <p>Dear Hiring Team,</p>

    <p>I hope you are doing well.</p>

    <p>I came across your post regarding the opening for a <b>React Native Developer (Freelancer)</b> at Slash Star and would like to apply for the opportunity.</p>

    <p>I have around 2 year of experience in React Native development and have worked on building mobile applications with features such as API integration, video feeds, camera functionality, in-app purchases, and deep linking. I am passionate about developing high-quality mobile applications and continuously improving my skills.</p>

    <p>Please find my CV attached for your review. I would be happy to discuss how my experience and skills can contribute to your team.</p>

    <p>Thank you for your time and consideration.</p>

    <p>
      Best regards,<br/>
      Abhishek Singh<br/>
      React Native Developer
    </p>
  `,

        attachments: [
          {
            filename: "Abhishek_Singh_Resume.pdf",
            path: filePath, // local path of your resume
          },
        ],
      });
    }

    return Response.json({ success: true });
  } catch (error) {
    console.log(error);
    return Response.json({ success: false });
  }
}
