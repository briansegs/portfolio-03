import Link from "next/link";

const ProjectButton = ({ href, icon }) => (
  <Link href={href} target="_blank">
    <button className="flex size-10 cursor-pointer items-center justify-center rounded-xl bg-white/20 text-3xl text-white backdrop-blur-sm hover:bg-white/30 sm:size-14 sm:text-[40px]">
      {icon}
    </button>
  </Link>
);

export default ProjectButton;
