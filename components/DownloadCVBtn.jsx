import ButtonBase from "./ButtonBase";

const DownloadCVBtn = ({ dark }) => (
  <ButtonBase
    title={"Download CV"}
    styles={`border-2 bg-transparent px-[20px] py-[14px] text-xl font-extrabold tracking-[-0.4px] ${dark ? "text-black hover:bg-black hover:text-white border-black bg-white" : "text-white hover:bg-white border-white hover:text-black border-white"}`}
  />
);

export default DownloadCVBtn;
