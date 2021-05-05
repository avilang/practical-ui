import PropTypes from 'prop-types';

function Button(props) {
  const { children, type = 'button' } = props;
  // eslint-disable-next-line react/button-has-type
  return <button type={type}>{children}</button>;
}

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset'])
};

export default Button;
