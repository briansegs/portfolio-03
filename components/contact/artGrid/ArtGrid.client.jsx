"use client";

import dynamic from "next/dynamic";

const Grid1 = dynamic(() => import("./Grid1"), {
  ssr: false,
  loading: () => null,
});

export default Grid1;
