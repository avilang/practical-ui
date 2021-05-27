import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import './style/checkbox.scss';

function Checkbox(props) {
  const { children, checked, indeterminate, disabled, onChange, ...rest } = props;
  const classes = classNames('practical-checkbox', {
    'practical-checkbox-checked': checked,
    'practical-checkbox-disabled': disabled,
    'practical-checkbox-indeterminate': checked === false && indeterminate
  });
  const handleChange = (e) => {
    if (disabled) return;
    onChange && onChange(e, e.target.checked);
  };

  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className={classes} {...rest}>
      <span className="practical-checkbox-sign">
        <input type="checkbox" checked={checked} onChange={handleChange} />
      </span>
      {children && <span className="practical-checkbox-text">{children}</span>}
    </label>
  );
}

Checkbox.displayName = 'PracticalUi.Checkbox';
Checkbox.defaultProps = {
  checked: false,
  disabled: false,
  indeterminate: false
};
Checkbox.propTypes = {
  /** 指定当前是否选中 */
  checked: PropTypes.bool,
  /** 失效状态 */
  disabled: PropTypes.bool,
  /** 设置 indeterminate 状态，只负责样式控制 */
  indeterminate: PropTypes.bool,
  /** 变化时回调函数 */
  onChange: PropTypes.func
};

export default Checkbox;
