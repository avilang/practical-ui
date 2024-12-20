/* eslint-disable */
// 基于 https://github.com/cowboy/jquery-throttle-debounce/ 简单做了修改
// 接口文档和用法和原来库一致 连接 https://benalman.com/code/projects/jquery-throttle-debounce/docs/files/jquery-ba-throttle-debounce-js.html

// Since jQuery really isn't required for this plugin, use `jQuery` as the
// namespace only if it already exists, otherwise use the `Cowboy` namespace,
// creating it if necessary.
var _undefined = void(0);
var $ = {},

  // Internal method reference.
  jq_throttle;

// Method: jQuery.throttle
//
// Throttle execution of a function. Especially useful for rate limiting
// execution of handlers on events like resize and scroll. If you want to
// rate-limit execution of a function to a single time, see the
// <jQuery.debounce> method.
//
// In this visualization, | is a throttled-function call and X is the actual
// callback execution:
//
// > Throttled with `no_trailing` specified as false or unspecified:
// > ||||||||||||||||||||||||| (pause) |||||||||||||||||||||||||
// > X    X    X    X    X    X        X    X    X    X    X    X
// >
// > Throttled with `no_trailing` specified as true:
// > ||||||||||||||||||||||||| (pause) |||||||||||||||||||||||||
// > X    X    X    X    X             X    X    X    X    X
//
// Usage:
//
// > var throttled = jQuery.throttle( delay, [ no_trailing, ] callback );
// >
// > jQuery('selector').bind( 'someevent', throttled );
// > jQuery('selector').unbind( 'someevent', throttled );
//
// This also works in jQuery 1.4+:
//
// > jQuery('selector').bind( 'someevent', jQuery.throttle( delay, [ no_trailing, ] callback ) );
// > jQuery('selector').unbind( 'someevent', callback );
//
// Arguments:
//
//  delay - (Number) A zero-or-greater delay in milliseconds. For event
//    callbacks, values around 100 or 250 (or even higher) are most useful.
//  no_trailing - (Boolean) Optional, defaults to false. If no_trailing is
//    true, callback will only execute every `delay` milliseconds while the
//    throttled-function is being called. If no_trailing is false or
//    unspecified, callback will be executed one final time after the last
//    throttled-function call. (After the throttled-function has not been
//    called for `delay` milliseconds, the internal counter is reset)
//  callback - (Function) A function to be executed after delay milliseconds.
//    The `this` context and all arguments are passed through, as-is, to
//    `callback` when the throttled-function is executed.
//
// Returns:
//
//  (Function) A new, throttled, function.

$.throttle = jq_throttle = function( delay, no_trailing, callback, debounce_mode ) {
  // After wrapper has stopped being called, this timeout ensures that
  // `callback` is executed at the proper times in `throttle` and `end`
  // debounce modes.
  var timeout_id,

    // Keep track of the last time `callback` was executed.
    last_exec = 0;

  // `no_trailing` defaults to falsy.
  if ( typeof no_trailing !== 'boolean' ) {
    debounce_mode = callback;
    callback = no_trailing;
    no_trailing = _undefined;
  }

  // The `wrapper` function encapsulates all of the throttling / debouncing
  // functionality and when executed will limit the rate at which `callback`
  // is executed.
  function wrapper() {
    var that = this,
      elapsed = +new Date() - last_exec,
      args = arguments;

    // Execute `callback` and update the `last_exec` timestamp.
    function exec() {
      last_exec = +new Date();
      callback.apply( that, args );
    };

    // If `debounce_mode` is true (at_begin) this is used to clear the flag
    // to allow future `callback` executions.
    function clear() {
      timeout_id = _undefined;
    };

    if ( debounce_mode && !timeout_id ) {
      // Since `wrapper` is being called for the first time and
      // `debounce_mode` is true (at_begin), execute `callback`.
      exec();
    }

    // Clear any existing timeout.
    timeout_id && clearTimeout( timeout_id );

    if ( debounce_mode === _undefined && elapsed > delay ) {
      // In throttle mode, if `delay` time has been exceeded, execute
      // `callback`.
      exec();

    } else if ( no_trailing !== true ) {
      // In trailing throttle mode, since `delay` time has not been
      // exceeded, schedule `callback` to execute `delay` ms after most
      // recent execution.
      //
      // If `debounce_mode` is true (at_begin), schedule `clear` to execute
      // after `delay` ms.
      //
      // If `debounce_mode` is false (at end), schedule `callback` to
      // execute after `delay` ms.
      timeout_id = setTimeout( debounce_mode ? clear : exec, debounce_mode === _undefined ? delay - elapsed : delay );
    }
  };

  // Set the guid of `wrapper` function to the same of original callback, so
  // it can be removed in jQuery 1.4+ .unbind or .die by using the original
  // callback as a reference.
  if ( $.guid ) {
    wrapper.guid = callback.guid = callback.guid || $.guid++;
  }

  // Return the wrapper function.
  return wrapper;
};

// Method: jQuery.debounce
//
// Debounce execution of a function. Debouncing, unlike throttling,
// guarantees that a function is only executed a single time, either at the
// very beginning of a series of calls, or at the very end. If you want to
// simply rate-limit execution of a function, see the <jQuery.throttle>
// method.
//
// In this visualization, | is a debounced-function call and X is the actual
// callback execution:
//
// > Debounced with `at_begin` specified as false or unspecified:
// > ||||||||||||||||||||||||| (pause) |||||||||||||||||||||||||
// >                          X                                 X
// >
// > Debounced with `at_begin` specified as true:
// > ||||||||||||||||||||||||| (pause) |||||||||||||||||||||||||
// > X                                 X
//
// Usage:
//
// > var debounced = jQuery.debounce( delay, [ at_begin, ] callback );
// >
// > jQuery('selector').bind( 'someevent', debounced );
// > jQuery('selector').unbind( 'someevent', debounced );
//
// This also works in jQuery 1.4+:
//
// > jQuery('selector').bind( 'someevent', jQuery.debounce( delay, [ at_begin, ] callback ) );
// > jQuery('selector').unbind( 'someevent', callback );
//
// Arguments:
//
//  delay - (Number) A zero-or-greater delay in milliseconds. For event
//    callbacks, values around 100 or 250 (or even higher) are most useful.
//  at_begin - (Boolean) Optional, defaults to false. If at_begin is false or
//    unspecified, callback will only be executed `delay` milliseconds after
//    the last debounced-function call. If at_begin is true, callback will be
//    executed only at the first debounced-function call. (After the
//    throttled-function has not been called for `delay` milliseconds, the
//    internal counter is reset)
//  callback - (Function) A function to be executed after delay milliseconds.
//    The `this` context and all arguments are passed through, as-is, to
//    `callback` when the debounced-function is executed.
//
// Returns:
//
//  (Function) A new, debounced, function.

$.debounce = function( delay, at_begin, callback ) {
  return callback === _undefined
    ? jq_throttle( delay, at_begin, false )
    : jq_throttle( delay, callback, at_begin !== false );
};

export const debounce = function(callback, delay, at_begin) {
  return $.debounce(delay || 300, at_begin == null ? true : at_begin, callback);
};

export const throttle = function(callback, delay, no_trailing) {
  return $.throttle(delay || 300, no_trailing == null ? false : no_trailing, callback);
}
