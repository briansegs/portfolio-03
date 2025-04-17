const styles =
  "w-full rounded-sm border-b-2 border-black px-3 pt-2 text-2xl tracking-[-0.5px] ring-offset-white placeholder:text-slate-400 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2";

const textareaHeight = "h-[355px] flex flex-col";

const ContactTextarea = ({
  warning,
  handleChange,
  id,
  isInvalid,
  value,
  handleBlur,
  visited,
}) => {
  const showError = () => isInvalid && (visited ? visited[id] : false);

  return (
    <div className={textareaHeight}>
      <textarea
        id={id}
        required
        placeholder="Message"
        className={`min-h-80 ${styles} ${showError() ? "ring-primary" : "ring-secondary"}`}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
      />
      {showError() && (
        <p className="font-primary font-semibold text-primary">{warning}</p>
      )}
    </div>
  );
};
export default ContactTextarea;
