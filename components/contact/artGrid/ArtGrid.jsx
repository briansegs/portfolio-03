import { Grid1, Grid2, Grid3, Grid4 } from ".";

const ArtGrid = () => (
  <div className="grid w-fit grid-cols-1 grid-rows-4 gap-12 md:grid-cols-2 md:grid-rows-2 xl:gap-6">
    <div className="size-72 border border-black">
      <Grid1 />
    </div>
    <div className="size-72 border border-black">
      <Grid2 />
    </div>
    <div className="size-72 border border-black transition duration-200 hover:-translate-y-1 hover:translate-x-1 hover:bg-black hover:drop-shadow-[-5px_5px_0_rgba(0,0,0,1)]">
      <Grid3 />
    </div>
    <div className="relative size-72">
      <Grid4 />
    </div>
  </div>
);

export default ArtGrid;
