const Chip = ({ icon, chipStyles, textStyles, text }) => (
  <div
    className={`flex w-fit items-center gap-2 rounded-md px-[12px] py-[6px] ${chipStyles}`}
  >
    {icon}
    <p
      className={`font-primary text-lg font-bold tracking-[-0.4px] ${textStyles}`}
    >
      {text}
    </p>
  </div>
);

export default Chip;
