import { Button } from "./ui/button";

const ButtonNav = ({ title }) => {
  return (
    <Button className="button bg-white text-black hover:bg-blue-50">
      {title}
    </Button>
  );
};

export default ButtonNav;
