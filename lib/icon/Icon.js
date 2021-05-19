import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../_fonts/icomoon-practical-v1.0/style.css';
import './style/icon.scss';

function Icon(props) {
  const { type, style, spin } = props;
  const classes = classNames('practical-sign', {
    [`practical-icon-${type}`]: true,
    'practical-sign-spin': spin
  });

  return <span className={classes} style={style} />;
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

export default Icon;
