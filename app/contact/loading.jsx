import { Skeleton } from "@/components/ui/skeleton";

const frameSize = "size-72";

const Loading = () => {
  return (
    <section className="xl:padding-x">
      <div className="max-container min-h-screen w-full">
        <div className="flex flex-col px-8 py-12 sm:py-24 xl:px-0">
          <div className="mb-1 mt-12">
            <Skeleton className="h-[7.5vw] w-[1000px] pt-6 max-sm:mt-10 sm:h-[6vw] xl:h-[5vw]" />
          </div>

          <div className="flex w-full justify-end">
            <Skeleton className="h-[7.5vw] w-[800px] sm:h-[6vw] xl:h-[5vw]" />
          </div>
        </div>

        <div className="flex flex-col-reverse items-center justify-center gap-16 xl:flex-row xl:gap-12">
          <div className="grid w-fit grid-cols-1 grid-rows-4 gap-12 md:grid-cols-2 md:grid-rows-2 xl:gap-6">
            <div className={`${frameSize}`}>
              <Skeleton className="size-full" />
            </div>
            <div className={`${frameSize}`}>
              <Skeleton className="size-full" />
            </div>
            <div className={`${frameSize}`}>
              <Skeleton className="size-full" />
            </div>
            <div className={`relative ${frameSize}`}>
              <Skeleton className="size-full" />
            </div>
          </div>

          <div className="flex w-4/5 flex-col justify-between gap-10 p-4 xl:w-2/5">
            <Skeleton className="h-[430px] w-full" />

            <Skeleton className="h-[65px] w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Loading;
