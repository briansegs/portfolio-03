"use client";

import { LoaderCircle } from "lucide-react";
import dynamic from "next/dynamic";

const ExploreCardContainer = dynamic(() => import("./ExploreCardContainer"), {
  ssr: false,
  loading: () => (
    <div className="mt-8 flex min-h-[700px] items-center  justify-center gap-2 font-primary text-4xl text-slate-200">
      <LoaderCircle className="size-14 animate-spin " />
      Loading...
    </div>
  ),
});

export default ExploreCardContainer;
