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
  const { children, type, theme, style, autoInsertSpace, danger, disabled } = props;

  const classes = classNames('practical-button-reset', 'practical-button-default', {
    [`practical-button-${theme}`]: theme !== 'default',
    'practical-button-danger': danger
  });

  return (
    // eslint-disable-next-line react/button-has-type
    <button className={classes} type={type} disabled={disabled} style={style}>
      {React.Children.map(children, (child) => insertSpace(child, autoInsertSpace))}
    </button>
  );
}

Button.displayName = 'PracticalUi.Button';
Button.defaultProps = {
  type: 'button',
  theme: 'default',
  style: {},
  autoInsertSpace: true,
  danger: false,
  disabled: false
};
Button.propTypes = {
  /** 设置 button 原生的 type 值 */
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  /** 设置按钮类型 */
  theme: PropTypes.oneOf(['default', 'primary', 'secondary', 'dashed']),
  /** 行内样式 */
  style: PropTypes.object,
  /** 是否在按钮内(文本按钮除外)只有两个汉字时自动添加空格 */
  autoInsertSpace: PropTypes.bool,
  /** 设置危险按钮 */
  danger: PropTypes.bool,
  /** 按钮失效状态 */
  disabled: PropTypes.bool
};

export default Button;
