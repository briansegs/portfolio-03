const ContactForm = () => {
  return (
    <div className="w-1/2">
      <form id="contact" className="flex flex-col justify-between p-4">
        <div className="flex justify-between gap-6">
          <div className="h-[66px]">
            <input
              className="w-full border-b-2 border-black px-3 pt-2 text-2xl tracking-[-0.5px]"
              type="text"
              placeholder="Name"
            />
            <p className="hidden font-primary font-semibold text-primary">
              Warning text
            </p>
          </div>

          <div className="h-[66px]">
            <input
              className="w-full border-b-2 border-black px-3 pt-2 text-2xl tracking-[-0.5px]"
              type="email"
              placeholder="Email"
            />
            <p className="hidden font-primary font-semibold text-primary">
              Warning text
            </p>
          </div>
        </div>

        <div className="h-[66px]">
          <input
            type="text"
            placeholder="Subject"
            className="w-full border-b-2 border-black px-3 pt-2 text-2xl tracking-[-0.5px]"
          />
          <p className="hidden font-primary font-semibold text-primary">
            Warning text
          </p>
        </div>

        <div className="h-[351px]">
          <textarea
            placeholder="Message"
            className="min-h-80 w-full rounded-sm  border-b-2 border-black px-3 pt-2 text-2xl tracking-[-0.5px] ring-secondary ring-offset-white placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
          />
          <p className="hidden font-primary font-semibold text-primary">
            Warning text
          </p>
        </div>

        <button
          type="submit"
          className="rounded-md bg-black p-[12px] font-primary text-xl font-bold capitalize tracking-[-0.4px] text-white transition duration-200 hover:-translate-y-1 hover:translate-x-1 hover:bg-black hover:drop-shadow-[-4px_4px_0_rgba(248,113,113,1)]"
        >
          Send message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
