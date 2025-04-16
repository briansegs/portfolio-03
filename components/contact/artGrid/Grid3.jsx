import { ImageMedia } from "@/components/ImageMedia";
import Link from "next/link";
import { LuDownload } from "react-icons/lu";
import grid3Image from "@/assets/contact/frame_03.webp";

const Grid3 = () => (
  <div className="grid-frame relative transition duration-200 hover:-translate-y-1 hover:translate-x-1 hover:bg-black hover:drop-shadow-[-5px_5px_0_rgba(0,0,0,1)]">
    <ImageMedia
      src={grid3Image}
      alt="Grid 3 image"
      fill
      className="-z-10 object-contain"
    />

    <Link href={"/Brian Segers Resume.pdf"} target="_blank" download>
      <div className="flex size-full flex-col justify-end p-4 opacity-0 duration-200 hover:opacity-100">
        <div className="flex items-center justify-between text-3xl text-white ">
          <p className="font-primary font-extrabold tracking-[-1px]">
            Download CV
          </p>
          <LuDownload />
        </div>
      </div>
    </Link>
  </div>
);

export default Grid3;
