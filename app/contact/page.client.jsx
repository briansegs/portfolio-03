"use client";

import dynamic from "next/dynamic";
import Loading from "@/components/Loading";

const ContactForm = dynamic(
  () => import("@/components/contact/contactForm/ContactForm"),
  { ssr: false, loading: () => <Loading /> }
);

export default ContactForm;
