"use client";

import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <section className="xl:padding-x ">
      <div className="max-container min-h-screen w-full ">
        <div className="padding flex flex-col items-center">
          <Skeleton className="my-6  h-[70px] w-80 pb-8 pt-6 max-sm:mt-10 max-sm:h-[58px]" />
          <>
            <div className="flex gap-4 max-sm:flex-col max-sm:items-center">
              {[1, 2, 3, 4, 5].map((key, index) => (
                <Skeleton key={key + index} className="h-8 w-36" />
              ))}
            </div>

            <div className="mt-7 flex w-full items-center justify-between">
              <Skeleton className="size-[56px] rounded-full max-sm:hidden" />

              <Skeleton className=" min-h-[598px] w-3/4 rounded-md  max-sm:w-full" />

              <Skeleton className="size-[56px] rounded-full max-sm:hidden" />
            </div>
          </>
        </div>
      </div>
    </section>
  );
};

export default Loading;
