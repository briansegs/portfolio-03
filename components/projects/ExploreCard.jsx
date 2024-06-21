"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/constants/motion";

import { RxGithubLogo } from "react-icons/rx";
import { LuMonitor } from "react-icons/lu";

const ExploreCard = ({ id, imgUrl, title, index, active, handleClick }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className={`relative ${active === id ? "flex-[10] lg:flex-[3.5]" : "flex-[2] lg:flex-[0.5]"} flex h-[700px] min-w-[170px] items-center justify-center transition-[flex] duration-[0.7s] ease-out`}
    onMouseEnter={() => handleClick(id)}
  >
    <Image
      src={imgUrl}
      alt={title}
      className="absolute size-full rounded-md object-cover"
    />
    {active !== id ? (
      <h3 className="absolute z-0 font-primary text-base font-bold tracking-[-0.4px] text-white sm:text-2xl lg:bottom-20 lg:origin-[0,0] lg:-rotate-90">
        {title}
      </h3>
    ) : (
      <div className="absolute bottom-0 w-full flex-col justify-start rounded-b-md bg-[rgba(0,0,0,0.5)] p-8">
        <div className="flex gap-4">
          <div className="mb-[16px] flex size-[60px] cursor-pointer items-center justify-center rounded-xl bg-white/20 text-white backdrop-blur-sm">
            <RxGithubLogo className="size-2/3 object-contain" />
          </div>

          <div className="mb-[16px] flex size-[60px] cursor-pointer items-center justify-center rounded-xl bg-white/20 text-white backdrop-blur-sm">
            <LuMonitor className="size-2/3 object-contain" />
          </div>
        </div>

        <p className="font-primary text-lg font-bold tracking-[-0.4px] text-white">
          Check out the code
        </p>
        <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl">
          {title}
        </h2>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
