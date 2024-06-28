"use client";

import { useState, useEffect } from "react";
import Loading from "../Loading";
import { ContactButton, ContactInput, ContactTextarea } from ".";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return <Loading />;

  return (
    <form
      id="contact"
      className="flex w-4/5 flex-col justify-between p-4 xl:w-2/5"
      onSubmit={handleSubmit}
    >
      <fieldset>
        <div className="flex flex-col justify-between md:flex-row md:gap-6">
          <label htmlFor="name" hidden></label>
          <ContactInput
            id="name"
            type="text"
            placeholder="Name"
            warning="Warning text"
            value={name}
            onchange={(e) => setName(e.target.value)}
          />

          <label htmlFor="email" hidden></label>
          <ContactInput
            id="email"
            type="email"
            placeholder="Email"
            warning="Warning text"
            value={email}
            onchange={(e) => setEmail(e.target.value)}
          />
        </div>

        <label htmlFor="subject" hidden></label>
        <ContactInput
          id="subject"
          type="text"
          placeholder="Subject"
          warning="Warning text"
          value={subject}
          onchange={(e) => setSubject(e.target.value)}
        />

        <label htmlFor="message" hidden></label>
        <ContactTextarea
          id="message"
          warning="Warning text"
          value={message}
          onchange={(e) => setMessage(e.target.value)}
        />

        <ContactButton disabled={false} />
      </fieldset>
    </form>
  );
};

export default ContactForm;
