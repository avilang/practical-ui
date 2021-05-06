import PropTypes from 'prop-types';
import * as React from 'react';
import classNames from 'classnames';
import './style/button.scss';

function insertSpace(child, needInserted) {
  const rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
  const isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);

  if (child == null) return;

  if ((typeof child).toLocaleLowerCase() === 'string') {
    const space = needInserted ? ' ' : '';
    let newChild = child;

    if (isTwoCNChar(child)) newChild = child.split('').join(space);

    return <span>{newChild}</span>;
  }

  return child;
}

function Button(props) {
  const {
    children,
    type = 'button',
    theme = 'default',
    style = {},
    autoInsertSpace = true
  } = props;

  const classes = classNames('practical-button-reset', 'practical-button-default', {
    [`practical-button-${theme}`]: theme !== 'default'
  });

  return (
    // eslint-disable-next-line react/button-has-type
    <button className={classes} type={type} style={style}>
      {React.Children.map(children, (child) => insertSpace(child, autoInsertSpace))}
    </button>
  );
}

Button.displayName = 'PracticalUi.Button';
Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  theme: PropTypes.oneOf(['default', 'primary']),
  autoInsertSpace: PropTypes.bool
};

export default Button;
