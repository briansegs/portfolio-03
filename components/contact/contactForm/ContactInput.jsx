const styles =
  'w-full rounded-[2px]  border-b-2 border-black px-3 pt-2 text-2xl tracking-[-0.5px] ring-offset-white placeholder:text-slate-400 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2'

const inputHeight = 'h-[68px]'

const ContactInput = ({
  type,
  placeholder,
  warning,
  handleChange,
  id,
  isInvalid,
  value,
  handleBlur,
  visited,
}) => {
  const showError = () => isInvalid && (visited ? visited[id] : false)

  return (
    <div className={inputHeight}>
      <input
        id={id}
        required
        className={`${styles} ${showError() ? 'ring-red-400' : 'ring-blue-100'}`}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
        onBlur={handleBlur}
      />
      {showError() && <p className="font-primary font-semibold text-red-400">{warning}</p>}
    </div>
  )
}

export default ContactInput
