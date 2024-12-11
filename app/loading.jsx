import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <>
      <section className="mb-12 sm:mb-24">
        <div className="size-full h-screen px-8 sm:px-16">
          <div className="max-container flex min-h-screen w-full items-center">
            <div className="absolute z-0 flex w-[310px] flex-col sm:w-fit">
              <Skeleton className="ml-0 h-[60px] w-full rounded-xl sm:ml-[-8px] sm:h-[96px] sm:w-[670px]" />

              <div className="my-7 w-full border-t-2 border-white pt-4 sm:w-[500px]">
                <Skeleton className="mb-3 h-7 sm:h-8" />
                <Skeleton className="mb-3 h-7 w-[90%] sm:h-8" />
                <Skeleton className="mb-3 h-7 sm:h-8" />
                <Skeleton className="mb-3 h-7 sm:h-8" />
                <Skeleton className="mb-3  h-7 w-[45%] sm:h-8" />
              </div>

              <div className="flex w-fit items-center gap-4">
                <Skeleton className="h-[60px] w-[174px]" />
                <Skeleton className="h-[60px] w-[115.5px]" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="h-screen w-full" />
      <section className="h-screen w-full" />
      <section className="h-screen w-full" />
    </>
  );
};

export default Loading;
