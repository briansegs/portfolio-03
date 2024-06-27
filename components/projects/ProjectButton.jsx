import Link from "next/link";

const ProjectButton = ({ href, icon, styles }) => (
  <Link href={href} target="_blank">
    <button
      className={`flex size-10 cursor-pointer items-center justify-center rounded-xl text-3xl text-white sm:size-14 sm:text-[40px] ${styles}`}
    >
      {icon}
    </button>
  </Link>
);

export default ProjectButton;
