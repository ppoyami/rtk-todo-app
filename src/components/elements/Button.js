export default function Button({ children, className, ...rest }) {
  return (
    // M: className props로 받는 방법
    <button {...rest} className={`btn-primary ${className}`}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  children: null,
  className: '',
};
