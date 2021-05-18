import { s as styleInject, _ as _objectWithoutProperties, c as classNames, a as _defineProperty, b as _extends, I as Icon, d as _typeof } from '../Icon-fc28c3bc.js';
import PropTypes from 'prop-types';
import * as React from 'react';
import { useCallback, useRef, useEffect } from 'react';

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

var css_248z = "@charset \"UTF-8\";\n/** 颜色 */\n/** 字体颜色 */\n.practical-button-reset {\n  margin: 0;\n  overflow: visible;\n  text-transform: none;\n  appearance: button; }\n  .practical-button-reset::-moz-focus-inner {\n    padding: 0;\n    border-style: none; }\n  .practical-button-reset:-moz-focusring {\n    outline: 1px dotted ButtonText; }\n\n.practical-button-default {\n  box-sizing: border-box;\n  display: inline-block;\n  height: 34px;\n  padding: 5px 12px;\n  font-family: inherit;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.5715;\n  color: rgba(0, 0, 0, 0.85);\n  text-align: center;\n  vertical-align: middle;\n  touch-action: manipulation;\n  cursor: pointer;\n  user-select: none;\n  background-color: #fff;\n  border-color: #d9d9d9;\n  border-style: solid;\n  border-width: 1px;\n  border-radius: 2px;\n  outline: none;\n  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1); }\n  .practical-button-default, .practical-button-default:active, .practical-button-default:focus {\n    outline: 0; }\n  .practical-button-default:hover {\n    color: #1890ff;\n    border-color: #1890ff; }\n  .practical-button-default > span {\n    display: inline-block;\n    margin-top: 1px; }\n  .practical-button-default.practical-button-block {\n    width: 100%; }\n  .practical-button-default.practical-button-primary {\n    color: #fff;\n    background-color: #1890ff;\n    border-color: #1890ff; }\n    .practical-button-default.practical-button-primary:hover {\n      background-color: #40a9ff;\n      border-color: #40a9ff; }\n  .practical-button-default.practical-button-secondary {\n    color: #fff;\n    background-color: #52c41a;\n    border-color: #52c41a; }\n    .practical-button-default.practical-button-secondary:hover {\n      background-color: #73d13d;\n      border-color: #73d13d; }\n  .practical-button-default.practical-button-dashed {\n    border-style: dashed; }\n  .practical-button-default.practical-button-danger {\n    color: #f5222d;\n    border-color: #f5222d; }\n    .practical-button-default.practical-button-danger:hover {\n      opacity: 0.7; }\n  .practical-button-default.practical-button-primary.practical-button-danger, .practical-button-default.practical-button-secondary.practical-button-danger {\n    color: #fff;\n    background-color: #f5222d;\n    border-color: #f5222d; }\n  .practical-button-default[disabled], .practical-button-default[disabled]:hover, .practical-button-default[disabled]:focus, .practical-button-default[disabled]:active, .practical-button-default[disabled].practical-button-danger {\n    color: rgba(0, 0, 0, 0.25);\n    cursor: not-allowed;\n    background-color: #f5f5f5;\n    border-color: #d9d9d9; }\n    .practical-button-default[disabled]:hover, .practical-button-default[disabled]:hover:hover, .practical-button-default[disabled]:focus:hover, .practical-button-default[disabled]:active:hover, .practical-button-default[disabled].practical-button-danger:hover {\n      opacity: 1; }\n  .practical-button-default.practical-button-loading {\n    position: relative;\n    pointer-events: none; }\n    .practical-button-default.practical-button-loading::before {\n      position: absolute;\n      top: -1px;\n      right: -1px;\n      bottom: -1px;\n      left: -1px;\n      z-index: 1;\n      pointer-events: none;\n      content: '';\n      background: #fff;\n      border-radius: inherit;\n      opacity: 0.35;\n      transition: opacity 0.2s; }\n";
styleInject(css_248z);

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
