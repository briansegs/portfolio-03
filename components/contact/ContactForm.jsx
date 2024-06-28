"use client";

import { ContactButton, ContactInput, ContactTextarea } from ".";

const ContactForm = () => {
  return (
    <form
      id="contact"
      className="mx-0 my-auto flex w-2/5 flex-col justify-between p-4"
    >
      <div className="flex justify-between gap-6">
        <ContactInput
          type="text"
          placeholder="Name"
          warning="Warning text"
          onchange={() => {}}
        />

        <ContactInput
          type="email"
          placeholder="Email"
          warning="Warning text"
          onchange={() => {}}
        />
      </div>

      <ContactInput
        type="text"
        placeholder="Subject"
        warning="Warning text"
        onchange={() => {}}
      />

      <ContactTextarea warning="Warning text" onchange={() => {}} />

      <ContactButton disabled={false} />
    </form>
  );
};

export default ContactForm;
