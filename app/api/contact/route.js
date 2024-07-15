import { NextResponse } from "next/server";
import { transporter, mailOptions } from "@/constants/nodemailer";
import { render } from "@react-email/components";
import { isInvalidValue } from "@/components/contact/contactForm";
import Email from "@/emails/Emails";

export async function POST(request) {
  if (request.method === "POST") {
    const data = await request.json();

    const { name, email, subject, message } = isInvalidValue(data);

    const isInvalidForm =
      name.isInvalid ||
      email.isInvalid ||
      subject.isInvalid ||
      message.isInvalid;

    if (isInvalidForm) {
      return NextResponse.json({ message: "Form is invalid" }, { status: 400 });
    }

    const emailHtml = render(<Email data={data} />);

    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: data.subject,
        html: emailHtml,
      });

      return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
      console.log(error);
      return NextResponse.json({ message: error.message }, { status: 400 });
    }
  }

  return NextResponse.json({ message: "Bad Request" }, { status: 400 });
}
