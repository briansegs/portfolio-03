import { FaCircleExclamation } from "react-icons/fa6";

const ToastFail = ({ error }) => (
  <div className="inline-flex items-center gap-2 font-primary font-bold  tracking-[-0.4px]">
    <FaCircleExclamation className="text-3xl" />
    <div>
      <p className="text-xl ">Uh oh! Something went wrong.</p>
      <p className="text-lg capitalize opacity-90 ">{error.message}</p>
    </div>
  </div>
);

export default ToastFail;
