import { _ as _objectWithoutProperties, c as classNames, a as _defineProperty, b as _extends, I as Icon, d as _typeof } from '../Icon-shared.js';
import PropTypes from 'prop-types';
import React, { useCallback, useRef, useEffect } from 'react';

function useThrottleFn(fn, delay) {
  var _useRef = useRef({
    fn: fn,
    timer: null
  }),
      current = _useRef.current;

  useEffect(function () {
    current.fn = fn;
  }, [fn]);
  useEffect(function () {
    return function () {
      if (current.timer) {
        clearTimeout(current.timer);
        current.timer = null;
      }
    };
  }, []);
  return useCallback(function () {
    if (!current.timer) {
      var _current$fn;

      current.timer = setTimeout(function () {
        current.timer = null;
      }, delay);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      (_current$fn = current.fn).call.apply(_current$fn, [this].concat(args));
    }
  }, []);
}

function insertSpace(child, needInserted) {
  var rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
  var isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
  if (child == null) return;

  if (_typeof(child).toLocaleLowerCase() === 'string') {
    var space = needInserted ? ' ' : '';
    var newChild = child;
    if (isTwoCNChar(child)) newChild = child.split('').join(space);
    return /*#__PURE__*/React.createElement("span", null, newChild);
  }

  return child;
}

function Button(props) {
  var _classNames;

  var children = props.children,
      htmlType = props.htmlType,
      theme = props.theme,
      autoInsertSpace = props.autoInsertSpace,
      danger = props.danger,
      disabled = props.disabled,
      loading = props.loading,
      icon = props.icon,
      block = props.block,
      onClick = props.onClick,
      rest = _objectWithoutProperties(props, ["children", "htmlType", "theme", "autoInsertSpace", "danger", "disabled", "loading", "icon", "block", "onClick"]);

  var typeForIcon = '';
  var isLoading = false;

  if (loading) {
    typeForIcon = 'loading';
    isLoading = true;
  }

  if (loading === false && icon !== '') typeForIcon = icon;
  var classes = classNames('practical-button-reset', 'practical-button-default', (_classNames = {}, _defineProperty(_classNames, "practical-button-".concat(theme), theme !== 'default'), _defineProperty(_classNames, 'practical-button-danger', danger), _defineProperty(_classNames, 'practical-button-loading', isLoading), _defineProperty(_classNames, 'practical-button-block', block), _classNames));
  var handleClick = useThrottleFn(function (e) {
    if (isLoading || disabled) {
      e.preventDefault();
      return;
    }

    var dataset = e.target.dataset;
    if (e.target.tagName.toLocaleLowerCase() !== 'button') dataset = e.target.parentNode.dataset;
    onClick && onClick(e, dataset);
  }, 500);
  return (
    /*#__PURE__*/
    // eslint-disable-next-line react/button-has-type
    React.createElement("button", _extends({
      className: classes,
      type: htmlType,
      disabled: disabled
    }, rest, {
      onClick: handleClick
    }), typeForIcon ? /*#__PURE__*/React.createElement(Icon, {
      style: {
        marginRight: isLoading ? 0 : 4
      },
      type: typeForIcon,
      spin: isLoading
    }) : null, !isLoading && React.Children.map(children, function (child) {
      return insertSpace(child, autoInsertSpace);
    }))
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

  /** 将按钮宽度调整为其父宽度的选项 */
  block: PropTypes.bool,

  /** 和 <Icon /> 组件 type 参数一致 */
  icon: PropTypes.string,

  /** 点击按钮时的回调 | (event, dataset) => void | dataset 参数为 data-attributes 传递的参数 */
  onClick: PropTypes.func
};

export { Button };
