import PropTypes from 'prop-types'; // ES6

export default function Input({ type, onChange, value, label, name }) {
  return (
    <div className="mb-5">
      {label && (
        <label htmlFor="input" className="block capitalize font-bold mb-1">
          {label}
        </label>
      )}
      <input
        id="input"
        name={name}
        className="input-border"
        type={type}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

Input.defaultProps = {
  label: null,
  type: 'text',
  onChange: () => {},
  value: '',
};

Input.propTypes = {
  type: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
};
