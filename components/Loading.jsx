const LoadingSpinner = () => (
  <div className="size-9 animate-loading rounded-full border-[3px] border-x-slate-400 border-b-slate-400 border-t-white" />
);

const Loading = () => (
  <div className="flex h-[617px] w-4/5 items-center justify-center sm:h-[541px] xl:w-2/5">
    <LoadingSpinner />
  </div>
);

export default Loading;
