export default function Input({ type, onChange, label, ...rest }) {
  return (
    <div className="mb-5">
      {label && (
        <label className="block capitalize font-bold mb-1">{label}</label>
      )}
      <input
        className="input-border"
        type={type}
        onChange={onChange}
        {...rest}
      />
    </div>
  );
}

Input.defaultProps = {
  label: null,
  type: 'text',
  onChange: () => {},
};
