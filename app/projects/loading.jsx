"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { projects } from "@/constants";
import { useState } from "react";

const Loading = () => {
  const [project] = useState(projects[0]);

  return (
    <section className="xl:padding-x ">
      <div className="max-container min-h-screen w-full ">
        <div className="padding flex flex-col items-center">
          <h1 className="pb-8 pt-6 text-6xl tracking-[-2px] text-black max-sm:mt-10 max-sm:text-5xl max-sm:tracking-[-1px]">
            My Projects
          </h1>

          <>
            <div className="flex gap-4 max-sm:flex-col max-sm:items-center">
              {projects.map((p, idx) => (
                <p
                  key={p.id}
                  className={`cursor-pointer font-primary text-xl font-bold tracking-[-0.4px] duration-500 ease-out ${p.id === project.id ? "text-black" : "text-black/40"} hover:text-black`}
                >
                  {p.title}
                </p>
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
