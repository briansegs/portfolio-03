const LoadingSpinner = () => (
  <div className="size-5 animate-loading rounded-full border-[3px] border-x-[#52292991] border-b-[#52292991] border-t-white" />
);

const ContactButton = ({ disabled, isLoading }) => (
  <button
    type="submit"
    disabled={disabled}
    className="flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-black p-[16px] font-primary text-xl font-extrabold capitalize tracking-[-0.4px] text-white ring-offset-white transition duration-200 hover:-translate-y-1 hover:translate-x-1 hover:drop-shadow-[-5px_5px_0_rgba(248,113,113,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-65"
  >
    {isLoading ? <LoadingSpinner /> : "Send message"}
  </button>
);

export default ContactButton;
