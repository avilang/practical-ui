import PropTypes from 'prop-types';
import * as React from 'react';
import classNames from 'classnames';
import { Icon } from '../icon';
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
    htmlType,
    theme,
    autoInsertSpace,
    danger,
    disabled,
    loading,
    icon,
    ...rest
  } = props;

  let typeForIcon = '';
  let isLoading = false;
  if (loading) {
    typeForIcon = 'loading';
    isLoading = true;
  }
  if (loading === false && icon !== '') typeForIcon = icon;

  const classes = classNames('practical-button-reset', 'practical-button-default', {
    [`practical-button-${theme}`]: theme !== 'default',
    'practical-button-danger': danger,
    'practical-button-loading': isLoading
  });

  return (
    // eslint-disable-next-line react/button-has-type
    <button className={classes} type={htmlType} disabled={disabled} {...rest}>
      {typeForIcon ? (
        <Icon style={{ marginRight: isLoading ? 0 : 4 }} type={typeForIcon} spin={isLoading} />
      ) : null}
      {!isLoading && React.Children.map(children, (child) => insertSpace(child, autoInsertSpace))}
    </button>
  );
}

Button.displayName = 'PracticalUi.Button';
Button.defaultProps = {
  htmlType: 'button',
  theme: 'default',
  autoInsertSpace: true,
  danger: false,
  disabled: false,
  loading: false,
  icon: ''
};
Button.propTypes = {
  /** 设置 button 原生的 type 值 */
  htmlType: PropTypes.oneOf(['button', 'submit', 'reset']),
  /** 设置按钮类型 */
  theme: PropTypes.oneOf(['default', 'primary', 'secondary', 'dashed']),
  /** 是否在按钮内(文本按钮除外)只有两个汉字时自动添加空格 */
  autoInsertSpace: PropTypes.bool,
  /** 设置危险按钮 */
  danger: PropTypes.bool,
  /** 按钮失效状态 */
  disabled: PropTypes.bool,
  /** 设置按钮载入状态 */
  loading: PropTypes.bool,
  /** 和 <Icon /> 组件 type 参数一致 */
  icon: PropTypes.string
};

export default Button;
