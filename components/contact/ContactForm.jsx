"use client";

import { ContactButton, ContactInput, ContactTextarea } from ".";

const ContactForm = () => {
  return (
    <form
      id="contact"
      className="flex w-4/5 flex-col justify-between p-4 xl:w-2/5"
    >
      <div className="flex flex-col justify-between md:flex-row md:gap-6">
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
