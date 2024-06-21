import Link from "next/link";

const ProjectButton = ({ href, icon }) => (
  <Link href={href} target="_blank">
    <button className="mb-[16px] flex size-14 cursor-pointer items-center justify-center rounded-xl bg-white/20 text-[40px] text-white backdrop-blur-sm hover:bg-white/30">
      {icon}
    </button>
  </Link>
);

export default ProjectButton;
