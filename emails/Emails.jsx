import {
  Html,
  Tailwind,
  Text,
  Hr,
  Body,
  Row,
  Container,
  Head,
  Preview,
} from "@react-email/components";

const data = {
  name: "RedMan",
  email: "reddot@wutang.com",
  subject: "Let's make a banger together!",
  message:
    "Bring Method Man and the crew to my studio tomorrow. I have snacks and juice boxes if anyone gets peckish. Any time after daybreak is cool to come by.",
};

const main = {
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const Email = () => {
  const { name, email, subject, message } = data;

  const maxLength = 30;

  const previewText = `New message: ${name} - ${message.length > maxLength ? message.slice(0, maxLength) + "..." : message}`;

  return (
    <Html lang="en">
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-slate-100" style={main}>
          <Container className="mx-auto my-8 flex h-screen w-fit max-w-[950px] justify-center bg-white px-10 py-4">
            <Text className="text-3xl font-bold text-slate-600">
              You have a new message from your{" "}
              <span className=" text-blue-400">Portfolio Website</span>!
            </Text>
            <Hr className="mb-4 w-full border border-solid border-slate-200" />
            {[
              { title: "name", text: name },
              { title: "email", text: email },
              { title: "subject", text: subject },
              { title: "message", text: message },
            ].map((item, i) => {
              return i < 3 ? (
                <Row key={item.title}>
                  <Text className="my-1">
                    <span className="mr-4 h-fit text-lg font-bold capitalize text-blue-600">
                      {item.title}:
                    </span>
                    <span className="text-lg text-slate-800">{item.text}</span>
                  </Text>
                </Row>
              ) : (
                <Row>
                  <Hr className="my-4 w-full border border-solid border-slate-200" />
                  <Text className="mb-0 text-xl font-bold capitalize text-blue-600">
                    {item.title}:
                  </Text>
                  <Text className="text-base text-slate-900">{item.text}</Text>
                </Row>
              );
            })}
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default Email;
