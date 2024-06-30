"use client";

import { useState, useEffect } from "react";
import Loading from "../Loading";
import { ContactButton, ContactInput, ContactTextarea } from ".";
import { sendContactForm } from "@/lib/api";

import { useToast } from "@/components/ui/use-toast";
import { FaCircleCheck } from "react-icons/fa6";

const initValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const initState = { values: initValues };

const ContactForm = () => {
  const [state, setState] = useState(initState);
  const { toast } = useToast();

  const { values, isLoading } = state;

  const invalidForm =
    !values.name || !values.email || !values.subject || !values.message;

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: { ...prev.values, [target.id]: target.value },
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
      setState((prev) => ({
        ...prev,
        isLoading: false,
      }));
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: error.message,
      });
    }
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
            isInvalid={!values.name}
            value={values.name}
            onChange={handleChange}
          />

          <label htmlFor="email" hidden></label>
          <ContactInput
            id="email"
            type="email"
            placeholder="Email"
            warning="Warning text"
            isInvalid={!values.email}
            value={values.email}
            onChange={handleChange}
          />
        </div>

        <label htmlFor="subject" hidden></label>
        <ContactInput
          id="subject"
          type="text"
          placeholder="Subject"
          warning="Warning text"
          isInvalid={!values.subject}
          value={values.subject}
          onChange={handleChange}
        />

        <label htmlFor="message" hidden></label>
        <ContactTextarea
          id="message"
          warning="Warning text"
          isInvalid={!values.message}
          value={values.message}
          onChange={handleChange}
        />

        <ContactButton disabled={invalidForm} isLoading={isLoading} />
      </fieldset>
    </form>
  );
};

export default ContactForm;
