import { LoaderCircle } from "lucide-react";

const Loading = () => (
  <div className="flex h-[617px] w-4/5 items-center justify-center gap-2 font-primary text-2xl text-slate-300 sm:h-[541px] xl:w-2/5">
    <LoaderCircle className="size-9 animate-spin" /> Loading...
  </div>
);

export default Loading;
