import PropTypes from 'prop-types';

export default function Button({ children, className, onClick }) {
  return (
    // M: className props로 받는 방법
    <button
      onClick={onClick}
      type="submit"
      className={`btn-primary ${className}`}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  children: null,
  className: '',
  onClick: () => null,
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
};
