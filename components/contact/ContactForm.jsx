"use client";

import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import {
  ContactButton,
  ContactInput,
  ContactTextarea,
  isInvalidValue,
  ToastSuccess,
  ToastFail,
} from ".";
import { sendContactForm } from "@/lib/api";
import Loading from "../Loading";

const initValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const initState = { values: initValues };

const ContactForm = () => {
  const [state, setState] = useState(initState);
  const [isClient, setIsClient] = useState(false);
  const { toast } = useToast();

  const { values, isLoading, visited } = state;

  const { name, email, subject, message } = isInvalidValue(values);

  const isInvalidForm =
    name.isInvalid || email.isInvalid || subject.isInvalid || message.isInvalid;

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: { ...prev.values, [target.id]: target.value },
    }));

  const handleBlur = ({ target }) =>
    setState((prev) => ({
      ...prev,
      visited: { ...prev.visited, [target.id]: true },
    }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));

    try {
      await sendContactForm(values);

      setState(initState);

      toast({
        description: <ToastSuccess />,
      });
    } catch (error) {
      console.log(error.message);

      setState((prev) => ({
        ...prev,
        isLoading: false,
      }));

      toast({
        variant: "destructive",
        description: <ToastFail error={error} />,
      });
    }
  };

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
            warning={name.errorMessage}
            isInvalid={name.isInvalid}
            visited={visited}
            value={values.name}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />

          <label htmlFor="email" hidden></label>
          <ContactInput
            id="email"
            type="email"
            placeholder="Email"
            warning={email.errorMessage}
            isInvalid={email.isInvalid}
            visited={visited}
            value={values.email}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
        </div>

        <label htmlFor="subject" hidden></label>
        <ContactInput
          id="subject"
          type="text"
          placeholder="Subject"
          warning={subject.errorMessage}
          isInvalid={subject.isInvalid}
          visited={visited}
          value={values.subject}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />

        <label htmlFor="message" hidden></label>
        <ContactTextarea
          id="message"
          warning={message.errorMessage}
          isInvalid={message.isInvalid}
          visited={visited}
          value={values.message}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />

        <ContactButton
          disabled={isInvalidForm || isLoading}
          isLoading={isLoading}
        />
      </fieldset>
    </form>
  );
};

export default ContactForm;
