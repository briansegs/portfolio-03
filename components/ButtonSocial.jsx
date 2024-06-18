import { Button } from "./ui/button";

const ButtonSocial = ({ icon }) => {
  return (
    <Button className="bg-transparent p-[7px] text-3xl text-black hover:bg-secondary">
      {icon}
    </Button>
  );
};

export default ButtonSocial;
