import ButtonSocial from "./ButtonSocial";
import Link from "next/link";
import { socialLinks } from "@/constants";

const SocialLinks = () => (
  <>
    {socialLinks.map((social) => (
      <Link target="_blank" href={social.href} key={social.name}>
        <ButtonSocial icon={social.icon} />
      </Link>
    ))}
  </>
);

export default SocialLinks;
