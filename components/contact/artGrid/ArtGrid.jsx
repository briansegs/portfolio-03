import dynamic from "next/dynamic";
import { Grid2, Grid3, Grid4 } from ".";

const Grid1 = dynamic(() => import("./Grid1"), {
  ssr: false,
  loading: () => (
    <div className="grid-frame bg-grid1 bg-contain bg-no-repeat"></div>
  ),
});

const frameSize = "size-72";

const ArtGrid = () => (
  <div className="grid w-fit grid-cols-1 grid-rows-4 gap-12 md:grid-cols-2 md:grid-rows-2 xl:gap-6">
    <div className={`${frameSize}`}>
      <Grid1 />
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
