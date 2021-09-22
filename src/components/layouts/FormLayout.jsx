import PropTypes from 'prop-types';

export default function FormLayout({ children, className, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className={`self-stretch ${className}`}>
      {children}
    </form>
  );
}

FormLayout.defaultProps = {
  className: '',
  onSubmit: e => e.preventDefault(),
};

FormLayout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  className: PropTypes.string,
  onSubmit: PropTypes.func,
};
