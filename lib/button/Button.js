import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import { useThrottleFn } from '../util';
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
    block,
    text,
    onClick,
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
    'practical-button-loading': isLoading,
    'practical-button-block': block,
    'practical-button-text': text
  });

  const handleClick = useThrottleFn((e) => {
    if (isLoading || disabled) {
      e.preventDefault();
      return;
    }

    let dataset = e.target.dataset;
    if (e.target.tagName.toLocaleLowerCase() !== 'button') dataset = e.target.parentNode.dataset;
    onClick && onClick(e, dataset);
  }, 500);

  return (
    // eslint-disable-next-line react/button-has-type
    <button className={classes} type={htmlType} disabled={disabled} {...rest} onClick={handleClick}>
      {typeForIcon && !text ? (
        <Icon style={{ marginRight: isLoading ? 0 : 4 }} type={typeForIcon} spin={isLoading} />
      ) : null}
      {!isLoading && React.Children.map(children, (child) => insertSpace(child, autoInsertSpace))}
      {isLoading &&
        text &&
        React.Children.map(children, (child) => insertSpace(child, autoInsertSpace))}
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
  block: false,
  text: false,
  icon: ''
};
Button.propTypes = {
  /** ?????? button ????????? type ??? */
  htmlType: PropTypes.oneOf(['button', 'submit', 'reset']),
  /** ?????????????????? */
  theme: PropTypes.oneOf(['default', 'primary', 'secondary', 'dashed']),
  /** ??????????????????(??????????????????)??????????????????????????????????????? */
  autoInsertSpace: PropTypes.bool,
  /** ?????????????????? */
  danger: PropTypes.bool,
  /** ?????????????????? */
  disabled: PropTypes.bool,
  /** ???????????????????????? */
  loading: PropTypes.bool,
  /** ????????????????????????????????????????????? */
  block: PropTypes.bool,
  /** ???????????? */
  text: PropTypes.bool,
  /** ??? <Icon /> ?????? type ???????????? */
  icon: PropTypes.string,
  /** ???????????????????????? | (event, dataset) => void | dataset ????????? data-attributes ??????????????? */
  onClick: PropTypes.func
};

export default Button;
