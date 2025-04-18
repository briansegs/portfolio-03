const ButtonBase = ({ children, title, styles }) => (
  <button className={`cursor-pointer rounded-lg font-primary capitalize ${styles}`}>
    {title}
    {children}
  </button>
)

export default ButtonBase
