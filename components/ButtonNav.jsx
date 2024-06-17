import { Button } from "./ui/button";

const ButtonNav = ({ title }) => {
  return (
    <Button className="button bg-transparent text-black hover:bg-secondary">
      {title}
    </Button>
  );
};

export default ButtonNav;
