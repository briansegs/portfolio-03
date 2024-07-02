import { FaCircleCheck } from "react-icons/fa6";

const ToastSuccess = () => (
  <div className="inline-flex items-center gap-2 font-primary text-2xl font-bold capitalize tracking-[-0.4px]">
    <FaCircleCheck className="text-3xl" /> <p>Message sent.</p>
  </div>
);

export default ToastSuccess;
