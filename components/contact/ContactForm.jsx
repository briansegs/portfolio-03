"use client";

import { useState, useEffect } from "react";
import Loading from "../Loading";
import {
  ContactButton,
  ContactInput,
  ContactTextarea,
  isInvalidValue,
} from ".";
import { sendContactForm } from "@/lib/api";

import { useToast } from "@/components/ui/use-toast";
import { FaCircleCheck, FaCircleExclamation } from "react-icons/fa6";

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
        description: (
          <div className="inline-flex items-center gap-2 font-primary text-2xl font-bold capitalize tracking-[-0.4px]">
            <FaCircleCheck className="text-3xl" /> <p>Message sent.</p>
          </div>
        ),
      });
    } catch (error) {
      console.log(error.message);

      setState((prev) => ({
        ...prev,
        isLoading: false,
      }));

      toast({
        variant: "destructive",
        description: (
          <div className="inline-flex items-center gap-2 font-primary font-bold  tracking-[-0.4px]">
            <FaCircleExclamation className="text-3xl" />
            <div>
              <p className="text-xl ">Uh oh! Something went wrong.</p>
              <p className="text-lg capitalize opacity-90 ">{error.message}</p>
            </div>
          </div>
        ),
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
