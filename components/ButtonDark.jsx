import ButtonBase from "./ButtonBase";

const ButtonDark = ({ title }) => (
  <ButtonBase
    title={title}
    styles="py-[16px] bg-black px-[22px] text-xl tracking-[-0.4px] text-white transition duration-200 hover:-translate-y-1 hover:translate-x-1 hover:bg-black hover:drop-shadow-[-5px_5px_0_rgba(196,222,255,1)] font-extrabold"
  />
);

export default ButtonDark;
