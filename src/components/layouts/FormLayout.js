export default function FormLayout({ children, className, ...rest }) {
  return (
    <form {...rest} className={`self-stretch ${className}`}>
      {children}
    </form>
  );
}
