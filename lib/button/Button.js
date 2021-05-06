import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style/button.scss';

function Button(props) {
  const { children, type = 'button' } = props;
  const classes = classNames('practical-button');

  return (
    // eslint-disable-next-line react/button-has-type
    <button className={classes} type={type}>
      {children}
    </button>
  );
}

Button.displayName = 'PracticalUi.Button';
Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset'])
};

export default Button;
