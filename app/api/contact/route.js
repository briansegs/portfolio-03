import { NextResponse } from "next/server";
import { transporter, mailOptions } from "@/constants/nodemailer";
import { Html, isInvalidValue } from "@/components/contact";

const CONTACT_MESSAGE_FIELDS = {
  name: "Name",
  email: "Email",
  subject: "Subject",
  message: "Message",
};

const generateEmailContent = (data) => {
  const stringData = Object.entries(data).reduce(
    (str, [key, value]) =>
      (str += `${CONTACT_MESSAGE_FIELDS[key]}: \n${value} \n \n}`),
    ""
  );

  const htmlData = Object.entries(data).reduce(
    (str, [key, value]) =>
      (str += `<h1 className="font-normal text-left leading-5 text-lg mb-2 p-0">
    ${CONTACT_MESSAGE_FIELDS[key]}
    </h1>
    <p className="font-light text-left leading-5 text-base mb-6 p-0">
    ${value}
    </p>`),
    ""
  );

  return { text: stringData, html: Html(htmlData) };
};

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

    try {
      await transporter.sendMail({
        ...mailOptions,
        ...generateEmailContent(data),
        subject: data.subject,
      });

      return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
      console.log(error);
      return NextResponse.json({ message: error.message }, { status: 400 });
    }
  }

  return NextResponse.json({ message: "Bad Request" }, { status: 400 });
}
