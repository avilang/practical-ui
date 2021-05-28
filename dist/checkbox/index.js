import { _ as _objectWithoutProperties, c as classNames, b as _extends } from '../index-shared.js';
import PropTypes from 'prop-types';
import React from 'react';

function Checkbox(props) {
  var children = props.children,
      checked = props.checked,
      indeterminate = props.indeterminate,
      disabled = props.disabled,
      onChange = props.onChange,
      rest = _objectWithoutProperties(props, ["children", "checked", "indeterminate", "disabled", "onChange"]);

  var classes = classNames('practical-checkbox', {
    'practical-checkbox-checked': checked,
    'practical-checkbox-disabled': disabled,
    'practical-checkbox-indeterminate': checked === false && indeterminate
  });

  var handleChange = function handleChange(e) {
    if (disabled) return;
    onChange && onChange(e, e.target.checked);
  };

  return (
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    React.createElement("label", _extends({
      className: classes
    }, rest), /*#__PURE__*/React.createElement("span", {
      className: "practical-checkbox-sign"
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: checked,
      onChange: handleChange
    })), children && /*#__PURE__*/React.createElement("span", {
      className: "practical-checkbox-text"
    }, children))
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

  /** 变化时回调函数 | (event, checked) => void | checked 参数为 checkbox 的 checked 状态值 */
  onChange: PropTypes.func
};

export { Checkbox };
