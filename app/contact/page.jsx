import React from "react";

const page = () => (
  <section className="xl:padding-x">
    <div className="max-container min-h-screen w-full">
      <div className="flex flex-col px-8 py-12 sm:py-24 xl:px-0">
        <h1 className="pt-6 font-primary text-[7.5vw] font-black tracking-[-1px] max-sm:mt-10 sm:text-[6vw] sm:tracking-[-2.5px] xl:text-[5vw] xl:tracking-[-3px] ">
          Thanks for stopping by,
        </h1>

        <h1 className="text-right font-primary text-[7.5vw] font-black leading-[30px] tracking-[-1px] sm:text-[6vw] sm:leading-[60px] sm:tracking-[-2.5px] xl:text-[5vw] xl:tracking-[-3px]">
          let&apos;s get in touch!
        </h1>
      </div>

      <div className="flex gap-12">
        <div className="grid w-fit grid-cols-2 grid-rows-2 gap-6">
          <div className="size-72 border border-black"></div>
          <div className="size-72 border border-black"></div>
          <div className="size-72 border border-black"></div>
          <div className="size-72 border border-black"></div>
        </div>

        <div>
          <form id="contact" className="flex flex-col">
            <div>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
            </div>

            <input type="text" placeholder="Subject" />
            <input type="textarea" placeholder="Message" />
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default page;
