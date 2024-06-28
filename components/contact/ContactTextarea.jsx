const styles =
  "w-full rounded-sm border-b-2 border-black px-3 pt-2 text-2xl tracking-[-0.5px] ring-secondary ring-offset-white placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

const ContactTextarea = ({ warning, onchange, id }) => (
  <div className="h-[351px]">
    <textarea
      id={id}
      placeholder="Message"
      className={`min-h-80 ${styles}`}
      onChange={onchange}
    />
    <p className="hidden font-primary font-semibold text-primary">{warning}</p>
  </div>
);

export default ContactTextarea;
