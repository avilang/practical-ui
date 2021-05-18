import PropTypes from 'prop-types';

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var classnames = {exports: {}};

/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/

(function (module) {
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if (module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
}(classnames));

var classNames = classnames.exports;

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$1 = "@font-face {\n  font-family: 'icomoon-practical';\n  src:  url('fonts/icomoon-practical.eot?k3ocmb');\n  src:  url('fonts/icomoon-practical.eot?k3ocmb#iefix') format('embedded-opentype'),\n    url('fonts/icomoon-practical.ttf?k3ocmb') format('truetype'),\n    url('fonts/icomoon-practical.woff?k3ocmb') format('woff'),\n    url('fonts/icomoon-practical.svg?k3ocmb#icomoon-practical') format('svg');\n  font-weight: normal;\n  font-style: normal;\n  font-display: block;\n}\n\n[class^=\"practical-icon-\"], [class*=\" practical-icon-\"] {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: 'icomoon-practical' !important;\n  speak: never;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.practical-icon-loading:before {\n  content: \"\\e900\";\n}\n.practical-icon-search:before {\n  content: \"\\e901\";\n}\n";
styleInject(css_248z$1);

var css_248z = "@charset \"UTF-8\";\n/** 颜色 */\n/** 字体颜色 */\n@keyframes iconLoadingCircle {\n  to {\n    transform: rotate(1turn); } }\n\n.practical-sign {\n  display: inline-block; }\n\n.practical-sign-spin {\n  animation: iconLoadingCircle 1s linear infinite; }\n";
styleInject(css_248z);

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

export { Icon as I, _objectWithoutProperties as _, _defineProperty as a, _extends as b, classNames as c, _typeof as d, styleInject as s };
