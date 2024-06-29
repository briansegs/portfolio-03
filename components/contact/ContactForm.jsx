"use client";

import { useState, useEffect } from "react";
import Loading from "../Loading";
import { ContactButton, ContactInput, ContactTextarea } from ".";

const initValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const initState = { values: initValues };

const ContactForm = () => {
  const [state, setState] = useState(initState);

  const { values } = state;

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: { ...prev.values, [target.name]: target.value },
    }));

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
            isValid={values.name}
            warning="Warning text"
            value={values.name}
            onchange={(e) => handleChange(e)}
          />

          <label htmlFor="email" hidden></label>
          <ContactInput
            id="email"
            type="email"
            placeholder="Email"
            warning="Warning text"
            value={values.email}
            onchange={(e) => handleChange(e)}
          />
        </div>

        <label htmlFor="subject" hidden></label>
        <ContactInput
          id="subject"
          type="text"
          placeholder="Subject"
          warning="Warning text"
          value={values.subject}
          onchange={(e) => handleChange(e)}
        />

        <label htmlFor="message" hidden></label>
        <ContactTextarea
          id="message"
          warning="Warning text"
          value={values.message}
          onchange={(e) => handleChange(e)}
        />

        <ContactButton disabled={false} />
      </fieldset>
    </form>
  );
};

export default ContactForm;
