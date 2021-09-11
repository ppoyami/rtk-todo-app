export default function FormLayout({ children, className }) {
  return <form className={`self-stretch ${className}`}>{children}</form>;
}
