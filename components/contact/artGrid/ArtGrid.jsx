import dynamic from "next/dynamic";
import { Grid2, Grid3, Grid4 } from ".";
import { ImageMedia } from "@/components/ImageMedia";
import grid1Image from "@/assets/contact/frame_01.webp";

const Grid1 = dynamic(() => import("./Grid1"), {
  ssr: false,
  loading: () => null,
});

const frameSize = "size-72";

const ArtGrid = () => (
  <div className="grid w-fit grid-cols-1 grid-rows-4 gap-12 md:grid-cols-2 md:grid-rows-2 xl:gap-6">
    <div className={`${frameSize}`}>
      <div className="grid-frame relative">
        <ImageMedia
          src={grid1Image}
          alt="Grid 1 image"
          fill
          className="-z-10 object-cover"
        />
        <Grid1 />
      </div>
    </div>
    <div className={`${frameSize}`}>
      <Grid2 />
    </div>
    <div className={`${frameSize}`}>
      <Grid3 />
    </div>
    <div className={`relative ${frameSize}`}>
      <Grid4 />
    </div>
  </div>
);

export default ArtGrid;
