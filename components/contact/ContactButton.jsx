const ContactButton = ({ disabled }) => (
  <button
    type="submit"
    disabled={disabled}
    className="whitespace-nowrap rounded-md bg-black p-[12px] font-primary text-xl font-bold capitalize tracking-[-0.4px] text-white  ring-offset-white transition duration-200 hover:-translate-y-1 hover:translate-x-1 hover:drop-shadow-[-4px_4px_0_rgba(248,113,113,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-75"
  >
    Send message
  </button>
);

export default ContactButton;
