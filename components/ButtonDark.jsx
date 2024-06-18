import ButtonBase from "./ButtonBase";

const ButtonDark = ({ title }) => (
  <ButtonBase
    title={title}
    styles="py-[6px] font-primary capitalize rounded-md bg-black px-[12px] text-lg tracking-[-0.4px] text-white transition duration-200 hover:-translate-y-1 hover:translate-x-1 hover:bg-black hover:drop-shadow-[-3px_3px_0_rgba(248,113,113,1)] font-bold"
  />
);

export default ButtonDark;
