import { Button } from "./ui/button";

const ButtonDark = ({ title }) => {
  return (
    <Button className="button bg-black text-white transition duration-200 hover:-translate-y-1 hover:translate-x-1 hover:bg-black hover:drop-shadow-[-3px_3px_0_rgba(248,113,113,1)]">
      {title}
    </Button>
  );
};

export default ButtonDark;
