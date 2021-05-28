import { c as classNames, a as _defineProperty } from './index-shared.js';
import React from 'react';
import PropTypes from 'prop-types';

function Icon(props) {
  var _classNames;

  var type = props.type,
      style = props.style,
      spin = props.spin;
  var classes = classNames('practical-sign', (_classNames = {}, _defineProperty(_classNames, "practical-icon-".concat(type), true), _defineProperty(_classNames, 'practical-sign-spin', spin), _classNames));
  return /*#__PURE__*/React.createElement("span", {
    className: classes,
    style: style
  });
}

Icon.displayName = 'PracticalUi.Icon';
Icon.defaultProps = {
  style: {},
  spin: false
};
Icon.propTypes = {
  type: PropTypes.string.isRequired,

  /** 设置图标的样式，例如 fontSize 和 color */
  style: PropTypes.object,

  /** 是否有旋转动画 */
  spin: PropTypes.bool
};

export { Icon as I };
