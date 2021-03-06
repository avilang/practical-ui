import { _ as _objectWithoutProperties, c as classNames, a as _defineProperty, b as _extends, d as _typeof } from '../index-shared.js';
import PropTypes from 'prop-types';
import React, { useCallback, useRef, useEffect } from 'react';
import { I as Icon } from '../Icon-shared.js';

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
      text = props.text,
      onClick = props.onClick,
      rest = _objectWithoutProperties(props, ["children", "htmlType", "theme", "autoInsertSpace", "danger", "disabled", "loading", "icon", "block", "text", "onClick"]);

  var typeForIcon = '';
  var isLoading = false;

  if (loading) {
    typeForIcon = 'loading';
    isLoading = true;
  }

  if (loading === false && icon !== '') typeForIcon = icon;
  var classes = classNames('practical-button-reset', 'practical-button-default', (_classNames = {}, _defineProperty(_classNames, "practical-button-".concat(theme), theme !== 'default'), _defineProperty(_classNames, 'practical-button-danger', danger), _defineProperty(_classNames, 'practical-button-loading', isLoading), _defineProperty(_classNames, 'practical-button-block', block), _defineProperty(_classNames, 'practical-button-text', text), _classNames));
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
    }), typeForIcon && !text ? /*#__PURE__*/React.createElement(Icon, {
      style: {
        marginRight: isLoading ? 0 : 4
      },
      type: typeForIcon,
      spin: isLoading
    }) : null, !isLoading && React.Children.map(children, function (child) {
      return insertSpace(child, autoInsertSpace);
    }), isLoading && text && React.Children.map(children, function (child) {
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

export { Button };
