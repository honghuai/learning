/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "../";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _vue = __webpack_require__(1);

	var _vue2 = _interopRequireDefault(_vue);

	var _app = __webpack_require__(2);

	var _app2 = _interopRequireDefault(_app);

	var _search = __webpack_require__(9);

	var _search2 = _interopRequireDefault(_search);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*通过app.vue取一个部件叫App，并且将模板镶嵌在app元素中。*/
	new _vue2.default({
	    el: "#app",
	    data: {
	        lists: ["年龄2", "性别2", "爱好2"]
	    },
	    components: {
	        App: _app2.default, Search: _search2.default
	    }
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/*!
	 * Vue.js v2.1.6
	 * (c) 2014-2016 Evan You
	 * Released under the MIT License.
	 */
	(function (global, factory) {
	   true ? module.exports = factory() :
	  typeof define === 'function' && define.amd ? define(factory) :
	  (global.Vue = factory());
	}(this, (function () { 'use strict';

	/*  */

	/**
	 * Convert a value to a string that is actually rendered.
	 */
	function _toString (val) {
	  return val == null
	    ? ''
	    : typeof val === 'object'
	      ? JSON.stringify(val, null, 2)
	      : String(val)
	}

	/**
	 * Convert a input value to a number for persistence.
	 * If the conversion fails, return original string.
	 */
	function toNumber (val) {
	  var n = parseFloat(val, 10);
	  return (n || n === 0) ? n : val
	}

	/**
	 * Make a map and return a function for checking if a key
	 * is in that map.
	 */
	function makeMap (
	  str,
	  expectsLowerCase
	) {
	  var map = Object.create(null);
	  var list = str.split(',');
	  for (var i = 0; i < list.length; i++) {
	    map[list[i]] = true;
	  }
	  return expectsLowerCase
	    ? function (val) { return map[val.toLowerCase()]; }
	    : function (val) { return map[val]; }
	}

	/**
	 * Check if a tag is a built-in tag.
	 */
	var isBuiltInTag = makeMap('slot,component', true);

	/**
	 * Remove an item from an array
	 */
	function remove$1 (arr, item) {
	  if (arr.length) {
	    var index = arr.indexOf(item);
	    if (index > -1) {
	      return arr.splice(index, 1)
	    }
	  }
	}

	/**
	 * Check whether the object has the property.
	 */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	function hasOwn (obj, key) {
	  return hasOwnProperty.call(obj, key)
	}

	/**
	 * Check if value is primitive
	 */
	function isPrimitive (value) {
	  return typeof value === 'string' || typeof value === 'number'
	}

	/**
	 * Create a cached version of a pure function.
	 */
	function cached (fn) {
	  var cache = Object.create(null);
	  return function cachedFn (str) {
	    var hit = cache[str];
	    return hit || (cache[str] = fn(str))
	  }
	}

	/**
	 * Camelize a hyphen-delmited string.
	 */
	var camelizeRE = /-(\w)/g;
	var camelize = cached(function (str) {
	  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
	});

	/**
	 * Capitalize a string.
	 */
	var capitalize = cached(function (str) {
	  return str.charAt(0).toUpperCase() + str.slice(1)
	});

	/**
	 * Hyphenate a camelCase string.
	 */
	var hyphenateRE = /([^-])([A-Z])/g;
	var hyphenate = cached(function (str) {
	  return str
	    .replace(hyphenateRE, '$1-$2')
	    .replace(hyphenateRE, '$1-$2')
	    .toLowerCase()
	});

	/**
	 * Simple bind, faster than native
	 */
	function bind$1 (fn, ctx) {
	  function boundFn (a) {
	    var l = arguments.length;
	    return l
	      ? l > 1
	        ? fn.apply(ctx, arguments)
	        : fn.call(ctx, a)
	      : fn.call(ctx)
	  }
	  // record original fn length
	  boundFn._length = fn.length;
	  return boundFn
	}

	/**
	 * Convert an Array-like object to a real Array.
	 */
	function toArray (list, start) {
	  start = start || 0;
	  var i = list.length - start;
	  var ret = new Array(i);
	  while (i--) {
	    ret[i] = list[i + start];
	  }
	  return ret
	}

	/**
	 * Mix properties into target object.
	 */
	function extend (to, _from) {
	  for (var key in _from) {
	    to[key] = _from[key];
	  }
	  return to
	}

	/**
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 */
	function isObject (obj) {
	  return obj !== null && typeof obj === 'object'
	}

	/**
	 * Strict object type check. Only returns true
	 * for plain JavaScript objects.
	 */
	var toString = Object.prototype.toString;
	var OBJECT_STRING = '[object Object]';
	function isPlainObject (obj) {
	  return toString.call(obj) === OBJECT_STRING
	}

	/**
	 * Merge an Array of Objects into a single Object.
	 */
	function toObject (arr) {
	  var res = {};
	  for (var i = 0; i < arr.length; i++) {
	    if (arr[i]) {
	      extend(res, arr[i]);
	    }
	  }
	  return res
	}

	/**
	 * Perform no operation.
	 */
	function noop () {}

	/**
	 * Always return false.
	 */
	var no = function () { return false; };

	/**
	 * Return same value
	 */
	var identity = function (_) { return _; };

	/**
	 * Generate a static keys string from compiler modules.
	 */
	function genStaticKeys (modules) {
	  return modules.reduce(function (keys, m) {
	    return keys.concat(m.staticKeys || [])
	  }, []).join(',')
	}

	/**
	 * Check if two values are loosely equal - that is,
	 * if they are plain objects, do they have the same shape?
	 */
	function looseEqual (a, b) {
	  /* eslint-disable eqeqeq */
	  return a == b || (
	    isObject(a) && isObject(b)
	      ? JSON.stringify(a) === JSON.stringify(b)
	      : false
	  )
	  /* eslint-enable eqeqeq */
	}

	function looseIndexOf (arr, val) {
	  for (var i = 0; i < arr.length; i++) {
	    if (looseEqual(arr[i], val)) { return i }
	  }
	  return -1
	}

	/*  */

	var config = {
	  /**
	   * Option merge strategies (used in core/util/options)
	   */
	  optionMergeStrategies: Object.create(null),

	  /**
	   * Whether to suppress warnings.
	   */
	  silent: false,

	  /**
	   * Whether to enable devtools
	   */
	  devtools: "development" !== 'production',

	  /**
	   * Error handler for watcher errors
	   */
	  errorHandler: null,

	  /**
	   * Ignore certain custom elements
	   */
	  ignoredElements: null,

	  /**
	   * Custom user key aliases for v-on
	   */
	  keyCodes: Object.create(null),

	  /**
	   * Check if a tag is reserved so that it cannot be registered as a
	   * component. This is platform-dependent and may be overwritten.
	   */
	  isReservedTag: no,

	  /**
	   * Check if a tag is an unknown element.
	   * Platform-dependent.
	   */
	  isUnknownElement: no,

	  /**
	   * Get the namespace of an element
	   */
	  getTagNamespace: noop,

	  /**
	   * Parse the real tag name for the specific platform.
	   */
	  parsePlatformTagName: identity,

	  /**
	   * Check if an attribute must be bound using property, e.g. value
	   * Platform-dependent.
	   */
	  mustUseProp: no,

	  /**
	   * List of asset types that a component can own.
	   */
	  _assetTypes: [
	    'component',
	    'directive',
	    'filter'
	  ],

	  /**
	   * List of lifecycle hooks.
	   */
	  _lifecycleHooks: [
	    'beforeCreate',
	    'created',
	    'beforeMount',
	    'mounted',
	    'beforeUpdate',
	    'updated',
	    'beforeDestroy',
	    'destroyed',
	    'activated',
	    'deactivated'
	  ],

	  /**
	   * Max circular updates allowed in a scheduler flush cycle.
	   */
	  _maxUpdateCount: 100
	};

	/*  */

	/**
	 * Check if a string starts with $ or _
	 */
	function isReserved (str) {
	  var c = (str + '').charCodeAt(0);
	  return c === 0x24 || c === 0x5F
	}

	/**
	 * Define a property.
	 */
	function def (obj, key, val, enumerable) {
	  Object.defineProperty(obj, key, {
	    value: val,
	    enumerable: !!enumerable,
	    writable: true,
	    configurable: true
	  });
	}

	/**
	 * Parse simple path.
	 */
	var bailRE = /[^\w.$]/;
	function parsePath (path) {
	  if (bailRE.test(path)) {
	    return
	  } else {
	    var segments = path.split('.');
	    return function (obj) {
	      for (var i = 0; i < segments.length; i++) {
	        if (!obj) { return }
	        obj = obj[segments[i]];
	      }
	      return obj
	    }
	  }
	}

	/*  */
	/* globals MutationObserver */

	// can we use __proto__?
	var hasProto = '__proto__' in {};

	// Browser environment sniffing
	var inBrowser = typeof window !== 'undefined';
	var UA = inBrowser && window.navigator.userAgent.toLowerCase();
	var isIE = UA && /msie|trident/.test(UA);
	var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
	var isEdge = UA && UA.indexOf('edge/') > 0;
	var isAndroid = UA && UA.indexOf('android') > 0;
	var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);

	// this needs to be lazy-evaled because vue may be required before
	// vue-server-renderer can set VUE_ENV
	var _isServer;
	var isServerRendering = function () {
	  if (_isServer === undefined) {
	    /* istanbul ignore if */
	    if (!inBrowser && typeof global !== 'undefined') {
	      // detect presence of vue-server-renderer and avoid
	      // Webpack shimming the process
	      _isServer = global['process'].env.VUE_ENV === 'server';
	    } else {
	      _isServer = false;
	    }
	  }
	  return _isServer
	};

	// detect devtools
	var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

	/* istanbul ignore next */
	function isNative (Ctor) {
	  return /native code/.test(Ctor.toString())
	}

	/**
	 * Defer a task to execute it asynchronously.
	 */
	var nextTick = (function () {
	  var callbacks = [];
	  var pending = false;
	  var timerFunc;

	  function nextTickHandler () {
	    pending = false;
	    var copies = callbacks.slice(0);
	    callbacks.length = 0;
	    for (var i = 0; i < copies.length; i++) {
	      copies[i]();
	    }
	  }

	  // the nextTick behavior leverages the microtask queue, which can be accessed
	  // via either native Promise.then or MutationObserver.
	  // MutationObserver has wider support, however it is seriously bugged in
	  // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
	  // completely stops working after triggering a few times... so, if native
	  // Promise is available, we will use it:
	  /* istanbul ignore if */
	  if (typeof Promise !== 'undefined' && isNative(Promise)) {
	    var p = Promise.resolve();
	    var logError = function (err) { console.error(err); };
	    timerFunc = function () {
	      p.then(nextTickHandler).catch(logError);
	      // in problematic UIWebViews, Promise.then doesn't completely break, but
	      // it can get stuck in a weird state where callbacks are pushed into the
	      // microtask queue but the queue isn't being flushed, until the browser
	      // needs to do some other work, e.g. handle a timer. Therefore we can
	      // "force" the microtask queue to be flushed by adding an empty timer.
	      if (isIOS) { setTimeout(noop); }
	    };
	  } else if (typeof MutationObserver !== 'undefined' && (
	    isNative(MutationObserver) ||
	    // PhantomJS and iOS 7.x
	    MutationObserver.toString() === '[object MutationObserverConstructor]'
	  )) {
	    // use MutationObserver where native Promise is not available,
	    // e.g. PhantomJS IE11, iOS7, Android 4.4
	    var counter = 1;
	    var observer = new MutationObserver(nextTickHandler);
	    var textNode = document.createTextNode(String(counter));
	    observer.observe(textNode, {
	      characterData: true
	    });
	    timerFunc = function () {
	      counter = (counter + 1) % 2;
	      textNode.data = String(counter);
	    };
	  } else {
	    // fallback to setTimeout
	    /* istanbul ignore next */
	    timerFunc = function () {
	      setTimeout(nextTickHandler, 0);
	    };
	  }

	  return function queueNextTick (cb, ctx) {
	    var _resolve;
	    callbacks.push(function () {
	      if (cb) { cb.call(ctx); }
	      if (_resolve) { _resolve(ctx); }
	    });
	    if (!pending) {
	      pending = true;
	      timerFunc();
	    }
	    if (!cb && typeof Promise !== 'undefined') {
	      return new Promise(function (resolve) {
	        _resolve = resolve;
	      })
	    }
	  }
	})();

	var _Set;
	/* istanbul ignore if */
	if (typeof Set !== 'undefined' && isNative(Set)) {
	  // use native Set when available.
	  _Set = Set;
	} else {
	  // a non-standard Set polyfill that only works with primitive keys.
	  _Set = (function () {
	    function Set () {
	      this.set = Object.create(null);
	    }
	    Set.prototype.has = function has (key) {
	      return this.set[key] === true
	    };
	    Set.prototype.add = function add (key) {
	      this.set[key] = true;
	    };
	    Set.prototype.clear = function clear () {
	      this.set = Object.create(null);
	    };

	    return Set;
	  }());
	}

	var warn = noop;
	var formatComponentName;

	{
	  var hasConsole = typeof console !== 'undefined';

	  warn = function (msg, vm) {
	    if (hasConsole && (!config.silent)) {
	      console.error("[Vue warn]: " + msg + " " + (
	        vm ? formatLocation(formatComponentName(vm)) : ''
	      ));
	    }
	  };

	  formatComponentName = function (vm) {
	    if (vm.$root === vm) {
	      return 'root instance'
	    }
	    var name = vm._isVue
	      ? vm.$options.name || vm.$options._componentTag
	      : vm.name;
	    return (
	      (name ? ("component <" + name + ">") : "anonymous component") +
	      (vm._isVue && vm.$options.__file ? (" at " + (vm.$options.__file)) : '')
	    )
	  };

	  var formatLocation = function (str) {
	    if (str === 'anonymous component') {
	      str += " - use the \"name\" option for better debugging messages.";
	    }
	    return ("\n(found in " + str + ")")
	  };
	}

	/*  */


	var uid$1 = 0;

	/**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 */
	var Dep = function Dep () {
	  this.id = uid$1++;
	  this.subs = [];
	};

	Dep.prototype.addSub = function addSub (sub) {
	  this.subs.push(sub);
	};

	Dep.prototype.removeSub = function removeSub (sub) {
	  remove$1(this.subs, sub);
	};

	Dep.prototype.depend = function depend () {
	  if (Dep.target) {
	    Dep.target.addDep(this);
	  }
	};

	Dep.prototype.notify = function notify () {
	  // stablize the subscriber list first
	  var subs = this.subs.slice();
	  for (var i = 0, l = subs.length; i < l; i++) {
	    subs[i].update();
	  }
	};

	// the current target watcher being evaluated.
	// this is globally unique because there could be only one
	// watcher being evaluated at any time.
	Dep.target = null;
	var targetStack = [];

	function pushTarget (_target) {
	  if (Dep.target) { targetStack.push(Dep.target); }
	  Dep.target = _target;
	}

	function popTarget () {
	  Dep.target = targetStack.pop();
	}

	/*
	 * not type checking this file because flow doesn't play well with
	 * dynamically accessing methods on Array prototype
	 */

	var arrayProto = Array.prototype;
	var arrayMethods = Object.create(arrayProto);[
	  'push',
	  'pop',
	  'shift',
	  'unshift',
	  'splice',
	  'sort',
	  'reverse'
	]
	.forEach(function (method) {
	  // cache original method
	  var original = arrayProto[method];
	  def(arrayMethods, method, function mutator () {
	    var arguments$1 = arguments;

	    // avoid leaking arguments:
	    // http://jsperf.com/closure-with-arguments
	    var i = arguments.length;
	    var args = new Array(i);
	    while (i--) {
	      args[i] = arguments$1[i];
	    }
	    var result = original.apply(this, args);
	    var ob = this.__ob__;
	    var inserted;
	    switch (method) {
	      case 'push':
	        inserted = args;
	        break
	      case 'unshift':
	        inserted = args;
	        break
	      case 'splice':
	        inserted = args.slice(2);
	        break
	    }
	    if (inserted) { ob.observeArray(inserted); }
	    // notify change
	    ob.dep.notify();
	    return result
	  });
	});

	/*  */

	var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

	/**
	 * By default, when a reactive property is set, the new value is
	 * also converted to become reactive. However when passing down props,
	 * we don't want to force conversion because the value may be a nested value
	 * under a frozen data structure. Converting it would defeat the optimization.
	 */
	var observerState = {
	  shouldConvert: true,
	  isSettingProps: false
	};

	/**
	 * Observer class that are attached to each observed
	 * object. Once attached, the observer converts target
	 * object's property keys into getter/setters that
	 * collect dependencies and dispatches updates.
	 */
	var Observer = function Observer (value) {
	  this.value = value;
	  this.dep = new Dep();
	  this.vmCount = 0;
	  def(value, '__ob__', this);
	  if (Array.isArray(value)) {
	    var augment = hasProto
	      ? protoAugment
	      : copyAugment;
	    augment(value, arrayMethods, arrayKeys);
	    this.observeArray(value);
	  } else {
	    this.walk(value);
	  }
	};

	/**
	 * Walk through each property and convert them into
	 * getter/setters. This method should only be called when
	 * value type is Object.
	 */
	Observer.prototype.walk = function walk (obj) {
	  var keys = Object.keys(obj);
	  for (var i = 0; i < keys.length; i++) {
	    defineReactive$$1(obj, keys[i], obj[keys[i]]);
	  }
	};

	/**
	 * Observe a list of Array items.
	 */
	Observer.prototype.observeArray = function observeArray (items) {
	  for (var i = 0, l = items.length; i < l; i++) {
	    observe(items[i]);
	  }
	};

	// helpers

	/**
	 * Augment an target Object or Array by intercepting
	 * the prototype chain using __proto__
	 */
	function protoAugment (target, src) {
	  /* eslint-disable no-proto */
	  target.__proto__ = src;
	  /* eslint-enable no-proto */
	}

	/**
	 * Augment an target Object or Array by defining
	 * hidden properties.
	 */
	/* istanbul ignore next */
	function copyAugment (target, src, keys) {
	  for (var i = 0, l = keys.length; i < l; i++) {
	    var key = keys[i];
	    def(target, key, src[key]);
	  }
	}

	/**
	 * Attempt to create an observer instance for a value,
	 * returns the new observer if successfully observed,
	 * or the existing observer if the value already has one.
	 */
	function observe (value) {
	  if (!isObject(value)) {
	    return
	  }
	  var ob;
	  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
	    ob = value.__ob__;
	  } else if (
	    observerState.shouldConvert &&
	    !isServerRendering() &&
	    (Array.isArray(value) || isPlainObject(value)) &&
	    Object.isExtensible(value) &&
	    !value._isVue
	  ) {
	    ob = new Observer(value);
	  }
	  return ob
	}

	/**
	 * Define a reactive property on an Object.
	 */
	function defineReactive$$1 (
	  obj,
	  key,
	  val,
	  customSetter
	) {
	  var dep = new Dep();

	  var property = Object.getOwnPropertyDescriptor(obj, key);
	  if (property && property.configurable === false) {
	    return
	  }

	  // cater for pre-defined getter/setters
	  var getter = property && property.get;
	  var setter = property && property.set;

	  var childOb = observe(val);
	  Object.defineProperty(obj, key, {
	    enumerable: true,
	    configurable: true,
	    get: function reactiveGetter () {
	      var value = getter ? getter.call(obj) : val;
	      if (Dep.target) {
	        dep.depend();
	        if (childOb) {
	          childOb.dep.depend();
	        }
	        if (Array.isArray(value)) {
	          dependArray(value);
	        }
	      }
	      return value
	    },
	    set: function reactiveSetter (newVal) {
	      var value = getter ? getter.call(obj) : val;
	      /* eslint-disable no-self-compare */
	      if (newVal === value || (newVal !== newVal && value !== value)) {
	        return
	      }
	      /* eslint-enable no-self-compare */
	      if ("development" !== 'production' && customSetter) {
	        customSetter();
	      }
	      if (setter) {
	        setter.call(obj, newVal);
	      } else {
	        val = newVal;
	      }
	      childOb = observe(newVal);
	      dep.notify();
	    }
	  });
	}

	/**
	 * Set a property on an object. Adds the new property and
	 * triggers change notification if the property doesn't
	 * already exist.
	 */
	function set$1 (obj, key, val) {
	  if (Array.isArray(obj)) {
	    obj.length = Math.max(obj.length, key);
	    obj.splice(key, 1, val);
	    return val
	  }
	  if (hasOwn(obj, key)) {
	    obj[key] = val;
	    return
	  }
	  var ob = obj.__ob__;
	  if (obj._isVue || (ob && ob.vmCount)) {
	    "development" !== 'production' && warn(
	      'Avoid adding reactive properties to a Vue instance or its root $data ' +
	      'at runtime - declare it upfront in the data option.'
	    );
	    return
	  }
	  if (!ob) {
	    obj[key] = val;
	    return
	  }
	  defineReactive$$1(ob.value, key, val);
	  ob.dep.notify();
	  return val
	}

	/**
	 * Delete a property and trigger change if necessary.
	 */
	function del (obj, key) {
	  var ob = obj.__ob__;
	  if (obj._isVue || (ob && ob.vmCount)) {
	    "development" !== 'production' && warn(
	      'Avoid deleting properties on a Vue instance or its root $data ' +
	      '- just set it to null.'
	    );
	    return
	  }
	  if (!hasOwn(obj, key)) {
	    return
	  }
	  delete obj[key];
	  if (!ob) {
	    return
	  }
	  ob.dep.notify();
	}

	/**
	 * Collect dependencies on array elements when the array is touched, since
	 * we cannot intercept array element access like property getters.
	 */
	function dependArray (value) {
	  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
	    e = value[i];
	    e && e.__ob__ && e.__ob__.dep.depend();
	    if (Array.isArray(e)) {
	      dependArray(e);
	    }
	  }
	}

	/*  */

	/**
	 * Option overwriting strategies are functions that handle
	 * how to merge a parent option value and a child option
	 * value into the final value.
	 */
	var strats = config.optionMergeStrategies;

	/**
	 * Options with restrictions
	 */
	{
	  strats.el = strats.propsData = function (parent, child, vm, key) {
	    if (!vm) {
	      warn(
	        "option \"" + key + "\" can only be used during instance " +
	        'creation with the `new` keyword.'
	      );
	    }
	    return defaultStrat(parent, child)
	  };
	}

	/**
	 * Helper that recursively merges two data objects together.
	 */
	function mergeData (to, from) {
	  if (!from) { return to }
	  var key, toVal, fromVal;
	  var keys = Object.keys(from);
	  for (var i = 0; i < keys.length; i++) {
	    key = keys[i];
	    toVal = to[key];
	    fromVal = from[key];
	    if (!hasOwn(to, key)) {
	      set$1(to, key, fromVal);
	    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
	      mergeData(toVal, fromVal);
	    }
	  }
	  return to
	}

	/**
	 * Data
	 */
	strats.data = function (
	  parentVal,
	  childVal,
	  vm
	) {
	  if (!vm) {
	    // in a Vue.extend merge, both should be functions
	    if (!childVal) {
	      return parentVal
	    }
	    if (typeof childVal !== 'function') {
	      "development" !== 'production' && warn(
	        'The "data" option should be a function ' +
	        'that returns a per-instance value in component ' +
	        'definitions.',
	        vm
	      );
	      return parentVal
	    }
	    if (!parentVal) {
	      return childVal
	    }
	    // when parentVal & childVal are both present,
	    // we need to return a function that returns the
	    // merged result of both functions... no need to
	    // check if parentVal is a function here because
	    // it has to be a function to pass previous merges.
	    return function mergedDataFn () {
	      return mergeData(
	        childVal.call(this),
	        parentVal.call(this)
	      )
	    }
	  } else if (parentVal || childVal) {
	    return function mergedInstanceDataFn () {
	      // instance merge
	      var instanceData = typeof childVal === 'function'
	        ? childVal.call(vm)
	        : childVal;
	      var defaultData = typeof parentVal === 'function'
	        ? parentVal.call(vm)
	        : undefined;
	      if (instanceData) {
	        return mergeData(instanceData, defaultData)
	      } else {
	        return defaultData
	      }
	    }
	  }
	};

	/**
	 * Hooks and param attributes are merged as arrays.
	 */
	function mergeHook (
	  parentVal,
	  childVal
	) {
	  return childVal
	    ? parentVal
	      ? parentVal.concat(childVal)
	      : Array.isArray(childVal)
	        ? childVal
	        : [childVal]
	    : parentVal
	}

	config._lifecycleHooks.forEach(function (hook) {
	  strats[hook] = mergeHook;
	});

	/**
	 * Assets
	 *
	 * When a vm is present (instance creation), we need to do
	 * a three-way merge between constructor options, instance
	 * options and parent options.
	 */
	function mergeAssets (parentVal, childVal) {
	  var res = Object.create(parentVal || null);
	  return childVal
	    ? extend(res, childVal)
	    : res
	}

	config._assetTypes.forEach(function (type) {
	  strats[type + 's'] = mergeAssets;
	});

	/**
	 * Watchers.
	 *
	 * Watchers hashes should not overwrite one
	 * another, so we merge them as arrays.
	 */
	strats.watch = function (parentVal, childVal) {
	  /* istanbul ignore if */
	  if (!childVal) { return parentVal }
	  if (!parentVal) { return childVal }
	  var ret = {};
	  extend(ret, parentVal);
	  for (var key in childVal) {
	    var parent = ret[key];
	    var child = childVal[key];
	    if (parent && !Array.isArray(parent)) {
	      parent = [parent];
	    }
	    ret[key] = parent
	      ? parent.concat(child)
	      : [child];
	  }
	  return ret
	};

	/**
	 * Other object hashes.
	 */
	strats.props =
	strats.methods =
	strats.computed = function (parentVal, childVal) {
	  if (!childVal) { return parentVal }
	  if (!parentVal) { return childVal }
	  var ret = Object.create(null);
	  extend(ret, parentVal);
	  extend(ret, childVal);
	  return ret
	};

	/**
	 * Default strategy.
	 */
	var defaultStrat = function (parentVal, childVal) {
	  return childVal === undefined
	    ? parentVal
	    : childVal
	};

	/**
	 * Validate component names
	 */
	function checkComponents (options) {
	  for (var key in options.components) {
	    var lower = key.toLowerCase();
	    if (isBuiltInTag(lower) || config.isReservedTag(lower)) {
	      warn(
	        'Do not use built-in or reserved HTML elements as component ' +
	        'id: ' + key
	      );
	    }
	  }
	}

	/**
	 * Ensure all props option syntax are normalized into the
	 * Object-based format.
	 */
	function normalizeProps (options) {
	  var props = options.props;
	  if (!props) { return }
	  var res = {};
	  var i, val, name;
	  if (Array.isArray(props)) {
	    i = props.length;
	    while (i--) {
	      val = props[i];
	      if (typeof val === 'string') {
	        name = camelize(val);
	        res[name] = { type: null };
	      } else {
	        warn('props must be strings when using array syntax.');
	      }
	    }
	  } else if (isPlainObject(props)) {
	    for (var key in props) {
	      val = props[key];
	      name = camelize(key);
	      res[name] = isPlainObject(val)
	        ? val
	        : { type: val };
	    }
	  }
	  options.props = res;
	}

	/**
	 * Normalize raw function directives into object format.
	 */
	function normalizeDirectives (options) {
	  var dirs = options.directives;
	  if (dirs) {
	    for (var key in dirs) {
	      var def = dirs[key];
	      if (typeof def === 'function') {
	        dirs[key] = { bind: def, update: def };
	      }
	    }
	  }
	}

	/**
	 * Merge two option objects into a new one.
	 * Core utility used in both instantiation and inheritance.
	 */
	function mergeOptions (
	  parent,
	  child,
	  vm
	) {
	  {
	    checkComponents(child);
	  }
	  normalizeProps(child);
	  normalizeDirectives(child);
	  var extendsFrom = child.extends;
	  if (extendsFrom) {
	    parent = typeof extendsFrom === 'function'
	      ? mergeOptions(parent, extendsFrom.options, vm)
	      : mergeOptions(parent, extendsFrom, vm);
	  }
	  if (child.mixins) {
	    for (var i = 0, l = child.mixins.length; i < l; i++) {
	      var mixin = child.mixins[i];
	      if (mixin.prototype instanceof Vue$3) {
	        mixin = mixin.options;
	      }
	      parent = mergeOptions(parent, mixin, vm);
	    }
	  }
	  var options = {};
	  var key;
	  for (key in parent) {
	    mergeField(key);
	  }
	  for (key in child) {
	    if (!hasOwn(parent, key)) {
	      mergeField(key);
	    }
	  }
	  function mergeField (key) {
	    var strat = strats[key] || defaultStrat;
	    options[key] = strat(parent[key], child[key], vm, key);
	  }
	  return options
	}

	/**
	 * Resolve an asset.
	 * This function is used because child instances need access
	 * to assets defined in its ancestor chain.
	 */
	function resolveAsset (
	  options,
	  type,
	  id,
	  warnMissing
	) {
	  /* istanbul ignore if */
	  if (typeof id !== 'string') {
	    return
	  }
	  var assets = options[type];
	  // check local registration variations first
	  if (hasOwn(assets, id)) { return assets[id] }
	  var camelizedId = camelize(id);
	  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
	  var PascalCaseId = capitalize(camelizedId);
	  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
	  // fallback to prototype chain
	  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
	  if ("development" !== 'production' && warnMissing && !res) {
	    warn(
	      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
	      options
	    );
	  }
	  return res
	}

	/*  */

	function validateProp (
	  key,
	  propOptions,
	  propsData,
	  vm
	) {
	  var prop = propOptions[key];
	  var absent = !hasOwn(propsData, key);
	  var value = propsData[key];
	  // handle boolean props
	  if (isBooleanType(prop.type)) {
	    if (absent && !hasOwn(prop, 'default')) {
	      value = false;
	    } else if (value === '' || value === hyphenate(key)) {
	      value = true;
	    }
	  }
	  // check default value
	  if (value === undefined) {
	    value = getPropDefaultValue(vm, prop, key);
	    // since the default value is a fresh copy,
	    // make sure to observe it.
	    var prevShouldConvert = observerState.shouldConvert;
	    observerState.shouldConvert = true;
	    observe(value);
	    observerState.shouldConvert = prevShouldConvert;
	  }
	  {
	    assertProp(prop, key, value, vm, absent);
	  }
	  return value
	}

	/**
	 * Get the default value of a prop.
	 */
	function getPropDefaultValue (vm, prop, key) {
	  // no default, return undefined
	  if (!hasOwn(prop, 'default')) {
	    return undefined
	  }
	  var def = prop.default;
	  // warn against non-factory defaults for Object & Array
	  if (isObject(def)) {
	    "development" !== 'production' && warn(
	      'Invalid default value for prop "' + key + '": ' +
	      'Props with type Object/Array must use a factory function ' +
	      'to return the default value.',
	      vm
	    );
	  }
	  // the raw prop value was also undefined from previous render,
	  // return previous default value to avoid unnecessary watcher trigger
	  if (vm && vm.$options.propsData &&
	    vm.$options.propsData[key] === undefined &&
	    vm[key] !== undefined) {
	    return vm[key]
	  }
	  // call factory function for non-Function types
	  return typeof def === 'function' && prop.type !== Function
	    ? def.call(vm)
	    : def
	}

	/**
	 * Assert whether a prop is valid.
	 */
	function assertProp (
	  prop,
	  name,
	  value,
	  vm,
	  absent
	) {
	  if (prop.required && absent) {
	    warn(
	      'Missing required prop: "' + name + '"',
	      vm
	    );
	    return
	  }
	  if (value == null && !prop.required) {
	    return
	  }
	  var type = prop.type;
	  var valid = !type || type === true;
	  var expectedTypes = [];
	  if (type) {
	    if (!Array.isArray(type)) {
	      type = [type];
	    }
	    for (var i = 0; i < type.length && !valid; i++) {
	      var assertedType = assertType(value, type[i]);
	      expectedTypes.push(assertedType.expectedType);
	      valid = assertedType.valid;
	    }
	  }
	  if (!valid) {
	    warn(
	      'Invalid prop: type check failed for prop "' + name + '".' +
	      ' Expected ' + expectedTypes.map(capitalize).join(', ') +
	      ', got ' + Object.prototype.toString.call(value).slice(8, -1) + '.',
	      vm
	    );
	    return
	  }
	  var validator = prop.validator;
	  if (validator) {
	    if (!validator(value)) {
	      warn(
	        'Invalid prop: custom validator check failed for prop "' + name + '".',
	        vm
	      );
	    }
	  }
	}

	/**
	 * Assert the type of a value
	 */
	function assertType (value, type) {
	  var valid;
	  var expectedType = getType(type);
	  if (expectedType === 'String') {
	    valid = typeof value === (expectedType = 'string');
	  } else if (expectedType === 'Number') {
	    valid = typeof value === (expectedType = 'number');
	  } else if (expectedType === 'Boolean') {
	    valid = typeof value === (expectedType = 'boolean');
	  } else if (expectedType === 'Function') {
	    valid = typeof value === (expectedType = 'function');
	  } else if (expectedType === 'Object') {
	    valid = isPlainObject(value);
	  } else if (expectedType === 'Array') {
	    valid = Array.isArray(value);
	  } else {
	    valid = value instanceof type;
	  }
	  return {
	    valid: valid,
	    expectedType: expectedType
	  }
	}

	/**
	 * Use function string name to check built-in types,
	 * because a simple equality check will fail when running
	 * across different vms / iframes.
	 */
	function getType (fn) {
	  var match = fn && fn.toString().match(/^\s*function (\w+)/);
	  return match && match[1]
	}

	function isBooleanType (fn) {
	  if (!Array.isArray(fn)) {
	    return getType(fn) === 'Boolean'
	  }
	  for (var i = 0, len = fn.length; i < len; i++) {
	    if (getType(fn[i]) === 'Boolean') {
	      return true
	    }
	  }
	  /* istanbul ignore next */
	  return false
	}



	var util = Object.freeze({
		defineReactive: defineReactive$$1,
		_toString: _toString,
		toNumber: toNumber,
		makeMap: makeMap,
		isBuiltInTag: isBuiltInTag,
		remove: remove$1,
		hasOwn: hasOwn,
		isPrimitive: isPrimitive,
		cached: cached,
		camelize: camelize,
		capitalize: capitalize,
		hyphenate: hyphenate,
		bind: bind$1,
		toArray: toArray,
		extend: extend,
		isObject: isObject,
		isPlainObject: isPlainObject,
		toObject: toObject,
		noop: noop,
		no: no,
		identity: identity,
		genStaticKeys: genStaticKeys,
		looseEqual: looseEqual,
		looseIndexOf: looseIndexOf,
		isReserved: isReserved,
		def: def,
		parsePath: parsePath,
		hasProto: hasProto,
		inBrowser: inBrowser,
		UA: UA,
		isIE: isIE,
		isIE9: isIE9,
		isEdge: isEdge,
		isAndroid: isAndroid,
		isIOS: isIOS,
		isServerRendering: isServerRendering,
		devtools: devtools,
		nextTick: nextTick,
		get _Set () { return _Set; },
		mergeOptions: mergeOptions,
		resolveAsset: resolveAsset,
		get warn () { return warn; },
		get formatComponentName () { return formatComponentName; },
		validateProp: validateProp
	});

	/* not type checking this file because flow doesn't play well with Proxy */

	var initProxy;

	{
	  var allowedGlobals = makeMap(
	    'Infinity,undefined,NaN,isFinite,isNaN,' +
	    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
	    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
	    'require' // for Webpack/Browserify
	  );

	  var warnNonPresent = function (target, key) {
	    warn(
	      "Property or method \"" + key + "\" is not defined on the instance but " +
	      "referenced during render. Make sure to declare reactive data " +
	      "properties in the data option.",
	      target
	    );
	  };

	  var hasProxy =
	    typeof Proxy !== 'undefined' &&
	    Proxy.toString().match(/native code/);

	  if (hasProxy) {
	    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta');
	    config.keyCodes = new Proxy(config.keyCodes, {
	      set: function set (target, key, value) {
	        if (isBuiltInModifier(key)) {
	          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
	          return false
	        } else {
	          target[key] = value;
	          return true
	        }
	      }
	    });
	  }

	  var hasHandler = {
	    has: function has (target, key) {
	      var has = key in target;
	      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
	      if (!has && !isAllowed) {
	        warnNonPresent(target, key);
	      }
	      return has || !isAllowed
	    }
	  };

	  var getHandler = {
	    get: function get (target, key) {
	      if (typeof key === 'string' && !(key in target)) {
	        warnNonPresent(target, key);
	      }
	      return target[key]
	    }
	  };

	  initProxy = function initProxy (vm) {
	    if (hasProxy) {
	      // determine which proxy handler to use
	      var options = vm.$options;
	      var handlers = options.render && options.render._withStripped
	        ? getHandler
	        : hasHandler;
	      vm._renderProxy = new Proxy(vm, handlers);
	    } else {
	      vm._renderProxy = vm;
	    }
	  };
	}

	/*  */


	var queue = [];
	var has$1 = {};
	var circular = {};
	var waiting = false;
	var flushing = false;
	var index = 0;

	/**
	 * Reset the scheduler's state.
	 */
	function resetSchedulerState () {
	  queue.length = 0;
	  has$1 = {};
	  {
	    circular = {};
	  }
	  waiting = flushing = false;
	}

	/**
	 * Flush both queues and run the watchers.
	 */
	function flushSchedulerQueue () {
	  flushing = true;

	  // Sort queue before flush.
	  // This ensures that:
	  // 1. Components are updated from parent to child. (because parent is always
	  //    created before the child)
	  // 2. A component's user watchers are run before its render watcher (because
	  //    user watchers are created before the render watcher)
	  // 3. If a component is destroyed during a parent component's watcher run,
	  //    its watchers can be skipped.
	  queue.sort(function (a, b) { return a.id - b.id; });

	  // do not cache length because more watchers might be pushed
	  // as we run existing watchers
	  for (index = 0; index < queue.length; index++) {
	    var watcher = queue[index];
	    var id = watcher.id;
	    has$1[id] = null;
	    watcher.run();
	    // in dev build, check and stop circular updates.
	    if ("development" !== 'production' && has$1[id] != null) {
	      circular[id] = (circular[id] || 0) + 1;
	      if (circular[id] > config._maxUpdateCount) {
	        warn(
	          'You may have an infinite update loop ' + (
	            watcher.user
	              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
	              : "in a component render function."
	          ),
	          watcher.vm
	        );
	        break
	      }
	    }
	  }

	  // devtool hook
	  /* istanbul ignore if */
	  if (devtools && config.devtools) {
	    devtools.emit('flush');
	  }

	  resetSchedulerState();
	}

	/**
	 * Push a watcher into the watcher queue.
	 * Jobs with duplicate IDs will be skipped unless it's
	 * pushed when the queue is being flushed.
	 */
	function queueWatcher (watcher) {
	  var id = watcher.id;
	  if (has$1[id] == null) {
	    has$1[id] = true;
	    if (!flushing) {
	      queue.push(watcher);
	    } else {
	      // if already flushing, splice the watcher based on its id
	      // if already past its id, it will be run next immediately.
	      var i = queue.length - 1;
	      while (i >= 0 && queue[i].id > watcher.id) {
	        i--;
	      }
	      queue.splice(Math.max(i, index) + 1, 0, watcher);
	    }
	    // queue the flush
	    if (!waiting) {
	      waiting = true;
	      nextTick(flushSchedulerQueue);
	    }
	  }
	}

	/*  */

	var uid$2 = 0;

	/**
	 * A watcher parses an expression, collects dependencies,
	 * and fires callback when the expression value changes.
	 * This is used for both the $watch() api and directives.
	 */
	var Watcher = function Watcher (
	  vm,
	  expOrFn,
	  cb,
	  options
	) {
	  if ( options === void 0 ) options = {};

	  this.vm = vm;
	  vm._watchers.push(this);
	  // options
	  this.deep = !!options.deep;
	  this.user = !!options.user;
	  this.lazy = !!options.lazy;
	  this.sync = !!options.sync;
	  this.expression = expOrFn.toString();
	  this.cb = cb;
	  this.id = ++uid$2; // uid for batching
	  this.active = true;
	  this.dirty = this.lazy; // for lazy watchers
	  this.deps = [];
	  this.newDeps = [];
	  this.depIds = new _Set();
	  this.newDepIds = new _Set();
	  // parse expression for getter
	  if (typeof expOrFn === 'function') {
	    this.getter = expOrFn;
	  } else {
	    this.getter = parsePath(expOrFn);
	    if (!this.getter) {
	      this.getter = function () {};
	      "development" !== 'production' && warn(
	        "Failed watching path: \"" + expOrFn + "\" " +
	        'Watcher only accepts simple dot-delimited paths. ' +
	        'For full control, use a function instead.',
	        vm
	      );
	    }
	  }
	  this.value = this.lazy
	    ? undefined
	    : this.get();
	};

	/**
	 * Evaluate the getter, and re-collect dependencies.
	 */
	Watcher.prototype.get = function get () {
	  pushTarget(this);
	  var value = this.getter.call(this.vm, this.vm);
	  // "touch" every property so they are all tracked as
	  // dependencies for deep watching
	  if (this.deep) {
	    traverse(value);
	  }
	  popTarget();
	  this.cleanupDeps();
	  return value
	};

	/**
	 * Add a dependency to this directive.
	 */
	Watcher.prototype.addDep = function addDep (dep) {
	  var id = dep.id;
	  if (!this.newDepIds.has(id)) {
	    this.newDepIds.add(id);
	    this.newDeps.push(dep);
	    if (!this.depIds.has(id)) {
	      dep.addSub(this);
	    }
	  }
	};

	/**
	 * Clean up for dependency collection.
	 */
	Watcher.prototype.cleanupDeps = function cleanupDeps () {
	    var this$1 = this;

	  var i = this.deps.length;
	  while (i--) {
	    var dep = this$1.deps[i];
	    if (!this$1.newDepIds.has(dep.id)) {
	      dep.removeSub(this$1);
	    }
	  }
	  var tmp = this.depIds;
	  this.depIds = this.newDepIds;
	  this.newDepIds = tmp;
	  this.newDepIds.clear();
	  tmp = this.deps;
	  this.deps = this.newDeps;
	  this.newDeps = tmp;
	  this.newDeps.length = 0;
	};

	/**
	 * Subscriber interface.
	 * Will be called when a dependency changes.
	 */
	Watcher.prototype.update = function update () {
	  /* istanbul ignore else */
	  if (this.lazy) {
	    this.dirty = true;
	  } else if (this.sync) {
	    this.run();
	  } else {
	    queueWatcher(this);
	  }
	};

	/**
	 * Scheduler job interface.
	 * Will be called by the scheduler.
	 */
	Watcher.prototype.run = function run () {
	  if (this.active) {
	    var value = this.get();
	      if (
	        value !== this.value ||
	      // Deep watchers and watchers on Object/Arrays should fire even
	      // when the value is the same, because the value may
	      // have mutated.
	      isObject(value) ||
	      this.deep
	    ) {
	      // set new value
	      var oldValue = this.value;
	      this.value = value;
	      if (this.user) {
	        try {
	          this.cb.call(this.vm, value, oldValue);
	        } catch (e) {
	          /* istanbul ignore else */
	          if (config.errorHandler) {
	            config.errorHandler.call(null, e, this.vm);
	          } else {
	            "development" !== 'production' && warn(
	              ("Error in watcher \"" + (this.expression) + "\""),
	              this.vm
	            );
	            throw e
	          }
	        }
	      } else {
	        this.cb.call(this.vm, value, oldValue);
	      }
	    }
	  }
	};

	/**
	 * Evaluate the value of the watcher.
	 * This only gets called for lazy watchers.
	 */
	Watcher.prototype.evaluate = function evaluate () {
	  this.value = this.get();
	  this.dirty = false;
	};

	/**
	 * Depend on all deps collected by this watcher.
	 */
	Watcher.prototype.depend = function depend () {
	    var this$1 = this;

	  var i = this.deps.length;
	  while (i--) {
	    this$1.deps[i].depend();
	  }
	};

	/**
	 * Remove self from all dependencies' subscriber list.
	 */
	Watcher.prototype.teardown = function teardown () {
	    var this$1 = this;

	  if (this.active) {
	    // remove self from vm's watcher list
	    // this is a somewhat expensive operation so we skip it
	    // if the vm is being destroyed or is performing a v-for
	    // re-render (the watcher list is then filtered by v-for).
	    if (!this.vm._isBeingDestroyed && !this.vm._vForRemoving) {
	      remove$1(this.vm._watchers, this);
	    }
	    var i = this.deps.length;
	    while (i--) {
	      this$1.deps[i].removeSub(this$1);
	    }
	    this.active = false;
	  }
	};

	/**
	 * Recursively traverse an object to evoke all converted
	 * getters, so that every nested property inside the object
	 * is collected as a "deep" dependency.
	 */
	var seenObjects = new _Set();
	function traverse (val) {
	  seenObjects.clear();
	  _traverse(val, seenObjects);
	}

	function _traverse (val, seen) {
	  var i, keys;
	  var isA = Array.isArray(val);
	  if ((!isA && !isObject(val)) || !Object.isExtensible(val)) {
	    return
	  }
	  if (val.__ob__) {
	    var depId = val.__ob__.dep.id;
	    if (seen.has(depId)) {
	      return
	    }
	    seen.add(depId);
	  }
	  if (isA) {
	    i = val.length;
	    while (i--) { _traverse(val[i], seen); }
	  } else {
	    keys = Object.keys(val);
	    i = keys.length;
	    while (i--) { _traverse(val[keys[i]], seen); }
	  }
	}

	/*  */

	function initState (vm) {
	  vm._watchers = [];
	  initProps(vm);
	  initMethods(vm);
	  initData(vm);
	  initComputed(vm);
	  initWatch(vm);
	}

	var isReservedProp = { key: 1, ref: 1, slot: 1 };

	function initProps (vm) {
	  var props = vm.$options.props;
	  if (props) {
	    var propsData = vm.$options.propsData || {};
	    var keys = vm.$options._propKeys = Object.keys(props);
	    var isRoot = !vm.$parent;
	    // root instance props should be converted
	    observerState.shouldConvert = isRoot;
	    var loop = function ( i ) {
	      var key = keys[i];
	      /* istanbul ignore else */
	      {
	        if (isReservedProp[key]) {
	          warn(
	            ("\"" + key + "\" is a reserved attribute and cannot be used as component prop."),
	            vm
	          );
	        }
	        defineReactive$$1(vm, key, validateProp(key, props, propsData, vm), function () {
	          if (vm.$parent && !observerState.isSettingProps) {
	            warn(
	              "Avoid mutating a prop directly since the value will be " +
	              "overwritten whenever the parent component re-renders. " +
	              "Instead, use a data or computed property based on the prop's " +
	              "value. Prop being mutated: \"" + key + "\"",
	              vm
	            );
	          }
	        });
	      }
	    };

	    for (var i = 0; i < keys.length; i++) loop( i );
	    observerState.shouldConvert = true;
	  }
	}

	function initData (vm) {
	  var data = vm.$options.data;
	  data = vm._data = typeof data === 'function'
	    ? data.call(vm)
	    : data || {};
	  if (!isPlainObject(data)) {
	    data = {};
	    "development" !== 'production' && warn(
	      'data functions should return an object:\n' +
	      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
	      vm
	    );
	  }
	  // proxy data on instance
	  var keys = Object.keys(data);
	  var props = vm.$options.props;
	  var i = keys.length;
	  while (i--) {
	    if (props && hasOwn(props, keys[i])) {
	      "development" !== 'production' && warn(
	        "The data property \"" + (keys[i]) + "\" is already declared as a prop. " +
	        "Use prop default value instead.",
	        vm
	      );
	    } else {
	      proxy(vm, keys[i]);
	    }
	  }
	  // observe data
	  observe(data);
	  data.__ob__ && data.__ob__.vmCount++;
	}

	var computedSharedDefinition = {
	  enumerable: true,
	  configurable: true,
	  get: noop,
	  set: noop
	};

	function initComputed (vm) {
	  var computed = vm.$options.computed;
	  if (computed) {
	    for (var key in computed) {
	      var userDef = computed[key];
	      if (typeof userDef === 'function') {
	        computedSharedDefinition.get = makeComputedGetter(userDef, vm);
	        computedSharedDefinition.set = noop;
	      } else {
	        computedSharedDefinition.get = userDef.get
	          ? userDef.cache !== false
	            ? makeComputedGetter(userDef.get, vm)
	            : bind$1(userDef.get, vm)
	          : noop;
	        computedSharedDefinition.set = userDef.set
	          ? bind$1(userDef.set, vm)
	          : noop;
	      }
	      Object.defineProperty(vm, key, computedSharedDefinition);
	    }
	  }
	}

	function makeComputedGetter (getter, owner) {
	  var watcher = new Watcher(owner, getter, noop, {
	    lazy: true
	  });
	  return function computedGetter () {
	    if (watcher.dirty) {
	      watcher.evaluate();
	    }
	    if (Dep.target) {
	      watcher.depend();
	    }
	    return watcher.value
	  }
	}

	function initMethods (vm) {
	  var methods = vm.$options.methods;
	  if (methods) {
	    for (var key in methods) {
	      vm[key] = methods[key] == null ? noop : bind$1(methods[key], vm);
	      if ("development" !== 'production' && methods[key] == null) {
	        warn(
	          "method \"" + key + "\" has an undefined value in the component definition. " +
	          "Did you reference the function correctly?",
	          vm
	        );
	      }
	    }
	  }
	}

	function initWatch (vm) {
	  var watch = vm.$options.watch;
	  if (watch) {
	    for (var key in watch) {
	      var handler = watch[key];
	      if (Array.isArray(handler)) {
	        for (var i = 0; i < handler.length; i++) {
	          createWatcher(vm, key, handler[i]);
	        }
	      } else {
	        createWatcher(vm, key, handler);
	      }
	    }
	  }
	}

	function createWatcher (vm, key, handler) {
	  var options;
	  if (isPlainObject(handler)) {
	    options = handler;
	    handler = handler.handler;
	  }
	  if (typeof handler === 'string') {
	    handler = vm[handler];
	  }
	  vm.$watch(key, handler, options);
	}

	function stateMixin (Vue) {
	  // flow somehow has problems with directly declared definition object
	  // when using Object.defineProperty, so we have to procedurally build up
	  // the object here.
	  var dataDef = {};
	  dataDef.get = function () {
	    return this._data
	  };
	  {
	    dataDef.set = function (newData) {
	      warn(
	        'Avoid replacing instance root $data. ' +
	        'Use nested data properties instead.',
	        this
	      );
	    };
	  }
	  Object.defineProperty(Vue.prototype, '$data', dataDef);

	  Vue.prototype.$set = set$1;
	  Vue.prototype.$delete = del;

	  Vue.prototype.$watch = function (
	    expOrFn,
	    cb,
	    options
	  ) {
	    var vm = this;
	    options = options || {};
	    options.user = true;
	    var watcher = new Watcher(vm, expOrFn, cb, options);
	    if (options.immediate) {
	      cb.call(vm, watcher.value);
	    }
	    return function unwatchFn () {
	      watcher.teardown();
	    }
	  };
	}

	function proxy (vm, key) {
	  if (!isReserved(key)) {
	    Object.defineProperty(vm, key, {
	      configurable: true,
	      enumerable: true,
	      get: function proxyGetter () {
	        return vm._data[key]
	      },
	      set: function proxySetter (val) {
	        vm._data[key] = val;
	      }
	    });
	  }
	}

	/*  */

	var VNode = function VNode (
	  tag,
	  data,
	  children,
	  text,
	  elm,
	  context,
	  componentOptions
	) {
	  this.tag = tag;
	  this.data = data;
	  this.children = children;
	  this.text = text;
	  this.elm = elm;
	  this.ns = undefined;
	  this.context = context;
	  this.functionalContext = undefined;
	  this.key = data && data.key;
	  this.componentOptions = componentOptions;
	  this.child = undefined;
	  this.parent = undefined;
	  this.raw = false;
	  this.isStatic = false;
	  this.isRootInsert = true;
	  this.isComment = false;
	  this.isCloned = false;
	  this.isOnce = false;
	};

	var createEmptyVNode = function () {
	  var node = new VNode();
	  node.text = '';
	  node.isComment = true;
	  return node
	};

	function createTextVNode (val) {
	  return new VNode(undefined, undefined, undefined, String(val))
	}

	// optimized shallow clone
	// used for static nodes and slot nodes because they may be reused across
	// multiple renders, cloning them avoids errors when DOM manipulations rely
	// on their elm reference.
	function cloneVNode (vnode) {
	  var cloned = new VNode(
	    vnode.tag,
	    vnode.data,
	    vnode.children,
	    vnode.text,
	    vnode.elm,
	    vnode.context,
	    vnode.componentOptions
	  );
	  cloned.ns = vnode.ns;
	  cloned.isStatic = vnode.isStatic;
	  cloned.key = vnode.key;
	  cloned.isCloned = true;
	  return cloned
	}

	function cloneVNodes (vnodes) {
	  var res = new Array(vnodes.length);
	  for (var i = 0; i < vnodes.length; i++) {
	    res[i] = cloneVNode(vnodes[i]);
	  }
	  return res
	}

	/*  */

	var activeInstance = null;

	function initLifecycle (vm) {
	  var options = vm.$options;

	  // locate first non-abstract parent
	  var parent = options.parent;
	  if (parent && !options.abstract) {
	    while (parent.$options.abstract && parent.$parent) {
	      parent = parent.$parent;
	    }
	    parent.$children.push(vm);
	  }

	  vm.$parent = parent;
	  vm.$root = parent ? parent.$root : vm;

	  vm.$children = [];
	  vm.$refs = {};

	  vm._watcher = null;
	  vm._inactive = false;
	  vm._isMounted = false;
	  vm._isDestroyed = false;
	  vm._isBeingDestroyed = false;
	}

	function lifecycleMixin (Vue) {
	  Vue.prototype._mount = function (
	    el,
	    hydrating
	  ) {
	    var vm = this;
	    vm.$el = el;
	    if (!vm.$options.render) {
	      vm.$options.render = createEmptyVNode;
	      {
	        /* istanbul ignore if */
	        if (vm.$options.template && vm.$options.template.charAt(0) !== '#') {
	          warn(
	            'You are using the runtime-only build of Vue where the template ' +
	            'option is not available. Either pre-compile the templates into ' +
	            'render functions, or use the compiler-included build.',
	            vm
	          );
	        } else {
	          warn(
	            'Failed to mount component: template or render function not defined.',
	            vm
	          );
	        }
	      }
	    }
	    callHook(vm, 'beforeMount');
	    vm._watcher = new Watcher(vm, function () {
	      vm._update(vm._render(), hydrating);
	    }, noop);
	    hydrating = false;
	    // manually mounted instance, call mounted on self
	    // mounted is called for render-created child components in its inserted hook
	    if (vm.$vnode == null) {
	      vm._isMounted = true;
	      callHook(vm, 'mounted');
	    }
	    return vm
	  };

	  Vue.prototype._update = function (vnode, hydrating) {
	    var vm = this;
	    if (vm._isMounted) {
	      callHook(vm, 'beforeUpdate');
	    }
	    var prevEl = vm.$el;
	    var prevVnode = vm._vnode;
	    var prevActiveInstance = activeInstance;
	    activeInstance = vm;
	    vm._vnode = vnode;
	    // Vue.prototype.__patch__ is injected in entry points
	    // based on the rendering backend used.
	    if (!prevVnode) {
	      // initial render
	      vm.$el = vm.__patch__(
	        vm.$el, vnode, hydrating, false /* removeOnly */,
	        vm.$options._parentElm,
	        vm.$options._refElm
	      );
	    } else {
	      // updates
	      vm.$el = vm.__patch__(prevVnode, vnode);
	    }
	    activeInstance = prevActiveInstance;
	    // update __vue__ reference
	    if (prevEl) {
	      prevEl.__vue__ = null;
	    }
	    if (vm.$el) {
	      vm.$el.__vue__ = vm;
	    }
	    // if parent is an HOC, update its $el as well
	    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
	      vm.$parent.$el = vm.$el;
	    }
	    if (vm._isMounted) {
	      callHook(vm, 'updated');
	    }
	  };

	  Vue.prototype._updateFromParent = function (
	    propsData,
	    listeners,
	    parentVnode,
	    renderChildren
	  ) {
	    var vm = this;
	    var hasChildren = !!(vm.$options._renderChildren || renderChildren);
	    vm.$options._parentVnode = parentVnode;
	    vm.$vnode = parentVnode; // update vm's placeholder node without re-render
	    if (vm._vnode) { // update child tree's parent
	      vm._vnode.parent = parentVnode;
	    }
	    vm.$options._renderChildren = renderChildren;
	    // update props
	    if (propsData && vm.$options.props) {
	      observerState.shouldConvert = false;
	      {
	        observerState.isSettingProps = true;
	      }
	      var propKeys = vm.$options._propKeys || [];
	      for (var i = 0; i < propKeys.length; i++) {
	        var key = propKeys[i];
	        vm[key] = validateProp(key, vm.$options.props, propsData, vm);
	      }
	      observerState.shouldConvert = true;
	      {
	        observerState.isSettingProps = false;
	      }
	      vm.$options.propsData = propsData;
	    }
	    // update listeners
	    if (listeners) {
	      var oldListeners = vm.$options._parentListeners;
	      vm.$options._parentListeners = listeners;
	      vm._updateListeners(listeners, oldListeners);
	    }
	    // resolve slots + force update if has children
	    if (hasChildren) {
	      vm.$slots = resolveSlots(renderChildren, parentVnode.context);
	      vm.$forceUpdate();
	    }
	  };

	  Vue.prototype.$forceUpdate = function () {
	    var vm = this;
	    if (vm._watcher) {
	      vm._watcher.update();
	    }
	  };

	  Vue.prototype.$destroy = function () {
	    var vm = this;
	    if (vm._isBeingDestroyed) {
	      return
	    }
	    callHook(vm, 'beforeDestroy');
	    vm._isBeingDestroyed = true;
	    // remove self from parent
	    var parent = vm.$parent;
	    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
	      remove$1(parent.$children, vm);
	    }
	    // teardown watchers
	    if (vm._watcher) {
	      vm._watcher.teardown();
	    }
	    var i = vm._watchers.length;
	    while (i--) {
	      vm._watchers[i].teardown();
	    }
	    // remove reference from data ob
	    // frozen object may not have observer.
	    if (vm._data.__ob__) {
	      vm._data.__ob__.vmCount--;
	    }
	    // call the last hook...
	    vm._isDestroyed = true;
	    callHook(vm, 'destroyed');
	    // turn off all instance listeners.
	    vm.$off();
	    // remove __vue__ reference
	    if (vm.$el) {
	      vm.$el.__vue__ = null;
	    }
	    // invoke destroy hooks on current rendered tree
	    vm.__patch__(vm._vnode, null);
	  };
	}

	function callHook (vm, hook) {
	  var handlers = vm.$options[hook];
	  if (handlers) {
	    for (var i = 0, j = handlers.length; i < j; i++) {
	      handlers[i].call(vm);
	    }
	  }
	  vm.$emit('hook:' + hook);
	}

	/*  */

	var hooks = { init: init, prepatch: prepatch, insert: insert, destroy: destroy$1 };
	var hooksToMerge = Object.keys(hooks);

	function createComponent (
	  Ctor,
	  data,
	  context,
	  children,
	  tag
	) {
	  if (!Ctor) {
	    return
	  }

	  var baseCtor = context.$options._base;
	  if (isObject(Ctor)) {
	    Ctor = baseCtor.extend(Ctor);
	  }

	  if (typeof Ctor !== 'function') {
	    {
	      warn(("Invalid Component definition: " + (String(Ctor))), context);
	    }
	    return
	  }

	  // async component
	  if (!Ctor.cid) {
	    if (Ctor.resolved) {
	      Ctor = Ctor.resolved;
	    } else {
	      Ctor = resolveAsyncComponent(Ctor, baseCtor, function () {
	        // it's ok to queue this on every render because
	        // $forceUpdate is buffered by the scheduler.
	        context.$forceUpdate();
	      });
	      if (!Ctor) {
	        // return nothing if this is indeed an async component
	        // wait for the callback to trigger parent update.
	        return
	      }
	    }
	  }

	  // resolve constructor options in case global mixins are applied after
	  // component constructor creation
	  resolveConstructorOptions(Ctor);

	  data = data || {};

	  // extract props
	  var propsData = extractProps(data, Ctor);

	  // functional component
	  if (Ctor.options.functional) {
	    return createFunctionalComponent(Ctor, propsData, data, context, children)
	  }

	  // extract listeners, since these needs to be treated as
	  // child component listeners instead of DOM listeners
	  var listeners = data.on;
	  // replace with listeners with .native modifier
	  data.on = data.nativeOn;

	  if (Ctor.options.abstract) {
	    // abstract components do not keep anything
	    // other than props & listeners
	    data = {};
	  }

	  // merge component management hooks onto the placeholder node
	  mergeHooks(data);

	  // return a placeholder vnode
	  var name = Ctor.options.name || tag;
	  var vnode = new VNode(
	    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
	    data, undefined, undefined, undefined, context,
	    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children }
	  );
	  return vnode
	}

	function createFunctionalComponent (
	  Ctor,
	  propsData,
	  data,
	  context,
	  children
	) {
	  var props = {};
	  var propOptions = Ctor.options.props;
	  if (propOptions) {
	    for (var key in propOptions) {
	      props[key] = validateProp(key, propOptions, propsData);
	    }
	  }
	  // ensure the createElement function in functional components
	  // gets a unique context - this is necessary for correct named slot check
	  var _context = Object.create(context);
	  var h = function (a, b, c, d) { return createElement(_context, a, b, c, d, true); };
	  var vnode = Ctor.options.render.call(null, h, {
	    props: props,
	    data: data,
	    parent: context,
	    children: children,
	    slots: function () { return resolveSlots(children, context); }
	  });
	  if (vnode instanceof VNode) {
	    vnode.functionalContext = context;
	    if (data.slot) {
	      (vnode.data || (vnode.data = {})).slot = data.slot;
	    }
	  }
	  return vnode
	}

	function createComponentInstanceForVnode (
	  vnode, // we know it's MountedComponentVNode but flow doesn't
	  parent, // activeInstance in lifecycle state
	  parentElm,
	  refElm
	) {
	  var vnodeComponentOptions = vnode.componentOptions;
	  var options = {
	    _isComponent: true,
	    parent: parent,
	    propsData: vnodeComponentOptions.propsData,
	    _componentTag: vnodeComponentOptions.tag,
	    _parentVnode: vnode,
	    _parentListeners: vnodeComponentOptions.listeners,
	    _renderChildren: vnodeComponentOptions.children,
	    _parentElm: parentElm || null,
	    _refElm: refElm || null
	  };
	  // check inline-template render functions
	  var inlineTemplate = vnode.data.inlineTemplate;
	  if (inlineTemplate) {
	    options.render = inlineTemplate.render;
	    options.staticRenderFns = inlineTemplate.staticRenderFns;
	  }
	  return new vnodeComponentOptions.Ctor(options)
	}

	function init (
	  vnode,
	  hydrating,
	  parentElm,
	  refElm
	) {
	  if (!vnode.child || vnode.child._isDestroyed) {
	    var child = vnode.child = createComponentInstanceForVnode(
	      vnode,
	      activeInstance,
	      parentElm,
	      refElm
	    );
	    child.$mount(hydrating ? vnode.elm : undefined, hydrating);
	  } else if (vnode.data.keepAlive) {
	    // kept-alive components, treat as a patch
	    var mountedNode = vnode; // work around flow
	    prepatch(mountedNode, mountedNode);
	  }
	}

	function prepatch (
	  oldVnode,
	  vnode
	) {
	  var options = vnode.componentOptions;
	  var child = vnode.child = oldVnode.child;
	  child._updateFromParent(
	    options.propsData, // updated props
	    options.listeners, // updated listeners
	    vnode, // new parent vnode
	    options.children // new children
	  );
	}

	function insert (vnode) {
	  if (!vnode.child._isMounted) {
	    vnode.child._isMounted = true;
	    callHook(vnode.child, 'mounted');
	  }
	  if (vnode.data.keepAlive) {
	    vnode.child._inactive = false;
	    callHook(vnode.child, 'activated');
	  }
	}

	function destroy$1 (vnode) {
	  if (!vnode.child._isDestroyed) {
	    if (!vnode.data.keepAlive) {
	      vnode.child.$destroy();
	    } else {
	      vnode.child._inactive = true;
	      callHook(vnode.child, 'deactivated');
	    }
	  }
	}

	function resolveAsyncComponent (
	  factory,
	  baseCtor,
	  cb
	) {
	  if (factory.requested) {
	    // pool callbacks
	    factory.pendingCallbacks.push(cb);
	  } else {
	    factory.requested = true;
	    var cbs = factory.pendingCallbacks = [cb];
	    var sync = true;

	    var resolve = function (res) {
	      if (isObject(res)) {
	        res = baseCtor.extend(res);
	      }
	      // cache resolved
	      factory.resolved = res;
	      // invoke callbacks only if this is not a synchronous resolve
	      // (async resolves are shimmed as synchronous during SSR)
	      if (!sync) {
	        for (var i = 0, l = cbs.length; i < l; i++) {
	          cbs[i](res);
	        }
	      }
	    };

	    var reject = function (reason) {
	      "development" !== 'production' && warn(
	        "Failed to resolve async component: " + (String(factory)) +
	        (reason ? ("\nReason: " + reason) : '')
	      );
	    };

	    var res = factory(resolve, reject);

	    // handle promise
	    if (res && typeof res.then === 'function' && !factory.resolved) {
	      res.then(resolve, reject);
	    }

	    sync = false;
	    // return in case resolved synchronously
	    return factory.resolved
	  }
	}

	function extractProps (data, Ctor) {
	  // we are only extracting raw values here.
	  // validation and default values are handled in the child
	  // component itself.
	  var propOptions = Ctor.options.props;
	  if (!propOptions) {
	    return
	  }
	  var res = {};
	  var attrs = data.attrs;
	  var props = data.props;
	  var domProps = data.domProps;
	  if (attrs || props || domProps) {
	    for (var key in propOptions) {
	      var altKey = hyphenate(key);
	      checkProp(res, props, key, altKey, true) ||
	      checkProp(res, attrs, key, altKey) ||
	      checkProp(res, domProps, key, altKey);
	    }
	  }
	  return res
	}

	function checkProp (
	  res,
	  hash,
	  key,
	  altKey,
	  preserve
	) {
	  if (hash) {
	    if (hasOwn(hash, key)) {
	      res[key] = hash[key];
	      if (!preserve) {
	        delete hash[key];
	      }
	      return true
	    } else if (hasOwn(hash, altKey)) {
	      res[key] = hash[altKey];
	      if (!preserve) {
	        delete hash[altKey];
	      }
	      return true
	    }
	  }
	  return false
	}

	function mergeHooks (data) {
	  if (!data.hook) {
	    data.hook = {};
	  }
	  for (var i = 0; i < hooksToMerge.length; i++) {
	    var key = hooksToMerge[i];
	    var fromParent = data.hook[key];
	    var ours = hooks[key];
	    data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours;
	  }
	}

	function mergeHook$1 (one, two) {
	  return function (a, b, c, d) {
	    one(a, b, c, d);
	    two(a, b, c, d);
	  }
	}

	/*  */

	function mergeVNodeHook (def, hookKey, hook, key) {
	  key = key + hookKey;
	  var injectedHash = def.__injected || (def.__injected = {});
	  if (!injectedHash[key]) {
	    injectedHash[key] = true;
	    var oldHook = def[hookKey];
	    if (oldHook) {
	      def[hookKey] = function () {
	        oldHook.apply(this, arguments);
	        hook.apply(this, arguments);
	      };
	    } else {
	      def[hookKey] = hook;
	    }
	  }
	}

	/*  */

	function updateListeners (
	  on,
	  oldOn,
	  add,
	  remove$$1,
	  vm
	) {
	  var name, cur, old, fn, event, capture, once;
	  for (name in on) {
	    cur = on[name];
	    old = oldOn[name];
	    if (!cur) {
	      "development" !== 'production' && warn(
	        "Invalid handler for event \"" + name + "\": got " + String(cur),
	        vm
	      );
	    } else if (!old) {
	      once = name.charAt(0) === '~'; // Prefixed last, checked first
	      event = once ? name.slice(1) : name;
	      capture = event.charAt(0) === '!';
	      event = capture ? event.slice(1) : event;
	      if (Array.isArray(cur)) {
	        add(event, (cur.invoker = arrInvoker(cur)), once, capture);
	      } else {
	        if (!cur.invoker) {
	          fn = cur;
	          cur = on[name] = {};
	          cur.fn = fn;
	          cur.invoker = fnInvoker(cur);
	        }
	        add(event, cur.invoker, once, capture);
	      }
	    } else if (cur !== old) {
	      if (Array.isArray(old)) {
	        old.length = cur.length;
	        for (var i = 0; i < old.length; i++) { old[i] = cur[i]; }
	        on[name] = old;
	      } else {
	        old.fn = cur;
	        on[name] = old;
	      }
	    }
	  }
	  for (name in oldOn) {
	    if (!on[name]) {
	      once = name.charAt(0) === '~'; // Prefixed last, checked first
	      event = once ? name.slice(1) : name;
	      capture = event.charAt(0) === '!';
	      event = capture ? event.slice(1) : event;
	      remove$$1(event, oldOn[name].invoker, capture);
	    }
	  }
	}

	function arrInvoker (arr) {
	  return function (ev) {
	    var arguments$1 = arguments;

	    var single = arguments.length === 1;
	    for (var i = 0; i < arr.length; i++) {
	      single ? arr[i](ev) : arr[i].apply(null, arguments$1);
	    }
	  }
	}

	function fnInvoker (o) {
	  return function (ev) {
	    var single = arguments.length === 1;
	    single ? o.fn(ev) : o.fn.apply(null, arguments);
	  }
	}

	/*  */

	function normalizeChildren (children) {
	  return isPrimitive(children)
	    ? [createTextVNode(children)]
	    : Array.isArray(children)
	      ? normalizeArrayChildren(children)
	      : undefined
	}

	function normalizeArrayChildren (children, nestedIndex) {
	  var res = [];
	  var i, c, last;
	  for (i = 0; i < children.length; i++) {
	    c = children[i];
	    if (c == null || typeof c === 'boolean') { continue }
	    last = res[res.length - 1];
	    //  nested
	    if (Array.isArray(c)) {
	      res.push.apply(res, normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i)));
	    } else if (isPrimitive(c)) {
	      if (last && last.text) {
	        last.text += String(c);
	      } else if (c !== '') {
	        // convert primitive to vnode
	        res.push(createTextVNode(c));
	      }
	    } else {
	      if (c.text && last && last.text) {
	        res[res.length - 1] = createTextVNode(last.text + c.text);
	      } else {
	        // default key for nested array children (likely generated by v-for)
	        if (c.tag && c.key == null && nestedIndex != null) {
	          c.key = "__vlist" + nestedIndex + "_" + i + "__";
	        }
	        res.push(c);
	      }
	    }
	  }
	  return res
	}

	/*  */

	function getFirstComponentChild (children) {
	  return children && children.filter(function (c) { return c && c.componentOptions; })[0]
	}

	/*  */

	// wrapper function for providing a more flexible interface
	// without getting yelled at by flow
	function createElement (
	  context,
	  tag,
	  data,
	  children,
	  needNormalization,
	  alwaysNormalize
	) {
	  if (Array.isArray(data) || isPrimitive(data)) {
	    needNormalization = children;
	    children = data;
	    data = undefined;
	  }
	  if (alwaysNormalize) { needNormalization = true; }
	  return _createElement(context, tag, data, children, needNormalization)
	}

	function _createElement (
	  context,
	  tag,
	  data,
	  children,
	  needNormalization
	) {
	  if (data && data.__ob__) {
	    "development" !== 'production' && warn(
	      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
	      'Always create fresh vnode data objects in each render!',
	      context
	    );
	    return createEmptyVNode()
	  }
	  if (!tag) {
	    // in case of component :is set to falsy value
	    return createEmptyVNode()
	  }
	  // support single function children as default scoped slot
	  if (Array.isArray(children) &&
	      typeof children[0] === 'function') {
	    data = data || {};
	    data.scopedSlots = { default: children[0] };
	    children.length = 0;
	  }
	  if (needNormalization) {
	    children = normalizeChildren(children);
	  }
	  var vnode, ns;
	  if (typeof tag === 'string') {
	    var Ctor;
	    ns = config.getTagNamespace(tag);
	    if (config.isReservedTag(tag)) {
	      // platform built-in elements
	      vnode = new VNode(
	        config.parsePlatformTagName(tag), data, children,
	        undefined, undefined, context
	      );
	    } else if ((Ctor = resolveAsset(context.$options, 'components', tag))) {
	      // component
	      vnode = createComponent(Ctor, data, context, children, tag);
	    } else {
	      // unknown or unlisted namespaced elements
	      // check at runtime because it may get assigned a namespace when its
	      // parent normalizes children
	      ns = tag === 'foreignObject' ? 'xhtml' : ns;
	      vnode = new VNode(
	        tag, data, children,
	        undefined, undefined, context
	      );
	    }
	  } else {
	    // direct component options / constructor
	    vnode = createComponent(tag, data, context, children);
	  }
	  if (vnode) {
	    if (ns) { applyNS(vnode, ns); }
	    return vnode
	  } else {
	    return createEmptyVNode()
	  }
	}

	function applyNS (vnode, ns) {
	  vnode.ns = ns;
	  if (vnode.children) {
	    for (var i = 0, l = vnode.children.length; i < l; i++) {
	      var child = vnode.children[i];
	      if (child.tag && !child.ns) {
	        applyNS(child, ns);
	      }
	    }
	  }
	}

	/*  */

	function initRender (vm) {
	  vm.$vnode = null; // the placeholder node in parent tree
	  vm._vnode = null; // the root of the child tree
	  vm._staticTrees = null;
	  var parentVnode = vm.$options._parentVnode;
	  var renderContext = parentVnode && parentVnode.context;
	  vm.$slots = resolveSlots(vm.$options._renderChildren, renderContext);
	  vm.$scopedSlots = {};
	  // bind the createElement fn to this instance
	  // so that we get proper render context inside it.
	  // args order: tag, data, children, needNormalization, alwaysNormalize
	  // internal version is used by render functions compiled from templates
	  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
	  // normalization is always applied for the public version, used in
	  // user-written render functions.
	  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };
	  if (vm.$options.el) {
	    vm.$mount(vm.$options.el);
	  }
	}

	function renderMixin (Vue) {
	  Vue.prototype.$nextTick = function (fn) {
	    return nextTick(fn, this)
	  };

	  Vue.prototype._render = function () {
	    var vm = this;
	    var ref = vm.$options;
	    var render = ref.render;
	    var staticRenderFns = ref.staticRenderFns;
	    var _parentVnode = ref._parentVnode;

	    if (vm._isMounted) {
	      // clone slot nodes on re-renders
	      for (var key in vm.$slots) {
	        vm.$slots[key] = cloneVNodes(vm.$slots[key]);
	      }
	    }

	    if (_parentVnode && _parentVnode.data.scopedSlots) {
	      vm.$scopedSlots = _parentVnode.data.scopedSlots;
	    }

	    if (staticRenderFns && !vm._staticTrees) {
	      vm._staticTrees = [];
	    }
	    // set parent vnode. this allows render functions to have access
	    // to the data on the placeholder node.
	    vm.$vnode = _parentVnode;
	    // render self
	    var vnode;
	    try {
	      vnode = render.call(vm._renderProxy, vm.$createElement);
	    } catch (e) {
	      /* istanbul ignore else */
	      if (config.errorHandler) {
	        config.errorHandler.call(null, e, vm);
	      } else {
	        {
	          warn(("Error when rendering " + (formatComponentName(vm)) + ":"));
	        }
	        throw e
	      }
	      // return previous vnode to prevent render error causing blank component
	      vnode = vm._vnode;
	    }
	    // return empty vnode in case the render function errored out
	    if (!(vnode instanceof VNode)) {
	      if ("development" !== 'production' && Array.isArray(vnode)) {
	        warn(
	          'Multiple root nodes returned from render function. Render function ' +
	          'should return a single root node.',
	          vm
	        );
	      }
	      vnode = createEmptyVNode();
	    }
	    // set parent
	    vnode.parent = _parentVnode;
	    return vnode
	  };

	  // toString for mustaches
	  Vue.prototype._s = _toString;
	  // convert text to vnode
	  Vue.prototype._v = createTextVNode;
	  // number conversion
	  Vue.prototype._n = toNumber;
	  // empty vnode
	  Vue.prototype._e = createEmptyVNode;
	  // loose equal
	  Vue.prototype._q = looseEqual;
	  // loose indexOf
	  Vue.prototype._i = looseIndexOf;

	  // render static tree by index
	  Vue.prototype._m = function renderStatic (
	    index,
	    isInFor
	  ) {
	    var tree = this._staticTrees[index];
	    // if has already-rendered static tree and not inside v-for,
	    // we can reuse the same tree by doing a shallow clone.
	    if (tree && !isInFor) {
	      return Array.isArray(tree)
	        ? cloneVNodes(tree)
	        : cloneVNode(tree)
	    }
	    // otherwise, render a fresh tree.
	    tree = this._staticTrees[index] = this.$options.staticRenderFns[index].call(this._renderProxy);
	    markStatic(tree, ("__static__" + index), false);
	    return tree
	  };

	  // mark node as static (v-once)
	  Vue.prototype._o = function markOnce (
	    tree,
	    index,
	    key
	  ) {
	    markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
	    return tree
	  };

	  function markStatic (tree, key, isOnce) {
	    if (Array.isArray(tree)) {
	      for (var i = 0; i < tree.length; i++) {
	        if (tree[i] && typeof tree[i] !== 'string') {
	          markStaticNode(tree[i], (key + "_" + i), isOnce);
	        }
	      }
	    } else {
	      markStaticNode(tree, key, isOnce);
	    }
	  }

	  function markStaticNode (node, key, isOnce) {
	    node.isStatic = true;
	    node.key = key;
	    node.isOnce = isOnce;
	  }

	  // filter resolution helper
	  Vue.prototype._f = function resolveFilter (id) {
	    return resolveAsset(this.$options, 'filters', id, true) || identity
	  };

	  // render v-for
	  Vue.prototype._l = function renderList (
	    val,
	    render
	  ) {
	    var ret, i, l, keys, key;
	    if (Array.isArray(val)) {
	      ret = new Array(val.length);
	      for (i = 0, l = val.length; i < l; i++) {
	        ret[i] = render(val[i], i);
	      }
	    } else if (typeof val === 'number') {
	      ret = new Array(val);
	      for (i = 0; i < val; i++) {
	        ret[i] = render(i + 1, i);
	      }
	    } else if (isObject(val)) {
	      keys = Object.keys(val);
	      ret = new Array(keys.length);
	      for (i = 0, l = keys.length; i < l; i++) {
	        key = keys[i];
	        ret[i] = render(val[key], key, i);
	      }
	    }
	    return ret
	  };

	  // renderSlot
	  Vue.prototype._t = function (
	    name,
	    fallback,
	    props
	  ) {
	    var scopedSlotFn = this.$scopedSlots[name];
	    if (scopedSlotFn) { // scoped slot
	      return scopedSlotFn(props || {}) || fallback
	    } else {
	      var slotNodes = this.$slots[name];
	      // warn duplicate slot usage
	      if (slotNodes && "development" !== 'production') {
	        slotNodes._rendered && warn(
	          "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
	          "- this will likely cause render errors.",
	          this
	        );
	        slotNodes._rendered = true;
	      }
	      return slotNodes || fallback
	    }
	  };

	  // apply v-bind object
	  Vue.prototype._b = function bindProps (
	    data,
	    tag,
	    value,
	    asProp
	  ) {
	    if (value) {
	      if (!isObject(value)) {
	        "development" !== 'production' && warn(
	          'v-bind without argument expects an Object or Array value',
	          this
	        );
	      } else {
	        if (Array.isArray(value)) {
	          value = toObject(value);
	        }
	        for (var key in value) {
	          if (key === 'class' || key === 'style') {
	            data[key] = value[key];
	          } else {
	            var hash = asProp || config.mustUseProp(tag, key)
	              ? data.domProps || (data.domProps = {})
	              : data.attrs || (data.attrs = {});
	            hash[key] = value[key];
	          }
	        }
	      }
	    }
	    return data
	  };

	  // check v-on keyCodes
	  Vue.prototype._k = function checkKeyCodes (
	    eventKeyCode,
	    key,
	    builtInAlias
	  ) {
	    var keyCodes = config.keyCodes[key] || builtInAlias;
	    if (Array.isArray(keyCodes)) {
	      return keyCodes.indexOf(eventKeyCode) === -1
	    } else {
	      return keyCodes !== eventKeyCode
	    }
	  };
	}

	function resolveSlots (
	  children,
	  context
	) {
	  var slots = {};
	  if (!children) {
	    return slots
	  }
	  var defaultSlot = [];
	  var name, child;
	  for (var i = 0, l = children.length; i < l; i++) {
	    child = children[i];
	    // named slots should only be respected if the vnode was rendered in the
	    // same context.
	    if ((child.context === context || child.functionalContext === context) &&
	        child.data && (name = child.data.slot)) {
	      var slot = (slots[name] || (slots[name] = []));
	      if (child.tag === 'template') {
	        slot.push.apply(slot, child.children);
	      } else {
	        slot.push(child);
	      }
	    } else {
	      defaultSlot.push(child);
	    }
	  }
	  // ignore single whitespace
	  if (defaultSlot.length && !(
	    defaultSlot.length === 1 &&
	    (defaultSlot[0].text === ' ' || defaultSlot[0].isComment)
	  )) {
	    slots.default = defaultSlot;
	  }
	  return slots
	}

	/*  */

	function initEvents (vm) {
	  vm._events = Object.create(null);
	  // init parent attached events
	  var listeners = vm.$options._parentListeners;
	  var add = function (event, fn, once) {
	    once ? vm.$once(event, fn) : vm.$on(event, fn);
	  };
	  var remove$$1 = bind$1(vm.$off, vm);
	  vm._updateListeners = function (listeners, oldListeners) {
	    updateListeners(listeners, oldListeners || {}, add, remove$$1, vm);
	  };
	  if (listeners) {
	    vm._updateListeners(listeners);
	  }
	}

	function eventsMixin (Vue) {
	  Vue.prototype.$on = function (event, fn) {
	    var vm = this;(vm._events[event] || (vm._events[event] = [])).push(fn);
	    return vm
	  };

	  Vue.prototype.$once = function (event, fn) {
	    var vm = this;
	    function on () {
	      vm.$off(event, on);
	      fn.apply(vm, arguments);
	    }
	    on.fn = fn;
	    vm.$on(event, on);
	    return vm
	  };

	  Vue.prototype.$off = function (event, fn) {
	    var vm = this;
	    // all
	    if (!arguments.length) {
	      vm._events = Object.create(null);
	      return vm
	    }
	    // specific event
	    var cbs = vm._events[event];
	    if (!cbs) {
	      return vm
	    }
	    if (arguments.length === 1) {
	      vm._events[event] = null;
	      return vm
	    }
	    // specific handler
	    var cb;
	    var i = cbs.length;
	    while (i--) {
	      cb = cbs[i];
	      if (cb === fn || cb.fn === fn) {
	        cbs.splice(i, 1);
	        break
	      }
	    }
	    return vm
	  };

	  Vue.prototype.$emit = function (event) {
	    var vm = this;
	    var cbs = vm._events[event];
	    if (cbs) {
	      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
	      var args = toArray(arguments, 1);
	      for (var i = 0, l = cbs.length; i < l; i++) {
	        cbs[i].apply(vm, args);
	      }
	    }
	    return vm
	  };
	}

	/*  */

	var uid = 0;

	function initMixin (Vue) {
	  Vue.prototype._init = function (options) {
	    var vm = this;
	    // a uid
	    vm._uid = uid++;
	    // a flag to avoid this being observed
	    vm._isVue = true;
	    // merge options
	    if (options && options._isComponent) {
	      // optimize internal component instantiation
	      // since dynamic options merging is pretty slow, and none of the
	      // internal component options needs special treatment.
	      initInternalComponent(vm, options);
	    } else {
	      vm.$options = mergeOptions(
	        resolveConstructorOptions(vm.constructor),
	        options || {},
	        vm
	      );
	    }
	    /* istanbul ignore else */
	    {
	      initProxy(vm);
	    }
	    // expose real self
	    vm._self = vm;
	    initLifecycle(vm);
	    initEvents(vm);
	    callHook(vm, 'beforeCreate');
	    initState(vm);
	    callHook(vm, 'created');
	    initRender(vm);
	  };
	}

	function initInternalComponent (vm, options) {
	  var opts = vm.$options = Object.create(vm.constructor.options);
	  // doing this because it's faster than dynamic enumeration.
	  opts.parent = options.parent;
	  opts.propsData = options.propsData;
	  opts._parentVnode = options._parentVnode;
	  opts._parentListeners = options._parentListeners;
	  opts._renderChildren = options._renderChildren;
	  opts._componentTag = options._componentTag;
	  opts._parentElm = options._parentElm;
	  opts._refElm = options._refElm;
	  if (options.render) {
	    opts.render = options.render;
	    opts.staticRenderFns = options.staticRenderFns;
	  }
	}

	function resolveConstructorOptions (Ctor) {
	  var options = Ctor.options;
	  if (Ctor.super) {
	    var superOptions = Ctor.super.options;
	    var cachedSuperOptions = Ctor.superOptions;
	    var extendOptions = Ctor.extendOptions;
	    if (superOptions !== cachedSuperOptions) {
	      // super option changed
	      Ctor.superOptions = superOptions;
	      extendOptions.render = options.render;
	      extendOptions.staticRenderFns = options.staticRenderFns;
	      extendOptions._scopeId = options._scopeId;
	      options = Ctor.options = mergeOptions(superOptions, extendOptions);
	      if (options.name) {
	        options.components[options.name] = Ctor;
	      }
	    }
	  }
	  return options
	}

	function Vue$3 (options) {
	  if ("development" !== 'production' &&
	    !(this instanceof Vue$3)) {
	    warn('Vue is a constructor and should be called with the `new` keyword');
	  }
	  this._init(options);
	}

	initMixin(Vue$3);
	stateMixin(Vue$3);
	eventsMixin(Vue$3);
	lifecycleMixin(Vue$3);
	renderMixin(Vue$3);

	/*  */

	function initUse (Vue) {
	  Vue.use = function (plugin) {
	    /* istanbul ignore if */
	    if (plugin.installed) {
	      return
	    }
	    // additional parameters
	    var args = toArray(arguments, 1);
	    args.unshift(this);
	    if (typeof plugin.install === 'function') {
	      plugin.install.apply(plugin, args);
	    } else {
	      plugin.apply(null, args);
	    }
	    plugin.installed = true;
	    return this
	  };
	}

	/*  */

	function initMixin$1 (Vue) {
	  Vue.mixin = function (mixin) {
	    this.options = mergeOptions(this.options, mixin);
	  };
	}

	/*  */

	function initExtend (Vue) {
	  /**
	   * Each instance constructor, including Vue, has a unique
	   * cid. This enables us to create wrapped "child
	   * constructors" for prototypal inheritance and cache them.
	   */
	  Vue.cid = 0;
	  var cid = 1;

	  /**
	   * Class inheritance
	   */
	  Vue.extend = function (extendOptions) {
	    extendOptions = extendOptions || {};
	    var Super = this;
	    var SuperId = Super.cid;
	    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
	    if (cachedCtors[SuperId]) {
	      return cachedCtors[SuperId]
	    }
	    var name = extendOptions.name || Super.options.name;
	    {
	      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
	        warn(
	          'Invalid component name: "' + name + '". Component names ' +
	          'can only contain alphanumeric characters and the hyphen, ' +
	          'and must start with a letter.'
	        );
	      }
	    }
	    var Sub = function VueComponent (options) {
	      this._init(options);
	    };
	    Sub.prototype = Object.create(Super.prototype);
	    Sub.prototype.constructor = Sub;
	    Sub.cid = cid++;
	    Sub.options = mergeOptions(
	      Super.options,
	      extendOptions
	    );
	    Sub['super'] = Super;
	    // allow further extension/mixin/plugin usage
	    Sub.extend = Super.extend;
	    Sub.mixin = Super.mixin;
	    Sub.use = Super.use;
	    // create asset registers, so extended classes
	    // can have their private assets too.
	    config._assetTypes.forEach(function (type) {
	      Sub[type] = Super[type];
	    });
	    // enable recursive self-lookup
	    if (name) {
	      Sub.options.components[name] = Sub;
	    }
	    // keep a reference to the super options at extension time.
	    // later at instantiation we can check if Super's options have
	    // been updated.
	    Sub.superOptions = Super.options;
	    Sub.extendOptions = extendOptions;
	    // cache constructor
	    cachedCtors[SuperId] = Sub;
	    return Sub
	  };
	}

	/*  */

	function initAssetRegisters (Vue) {
	  /**
	   * Create asset registration methods.
	   */
	  config._assetTypes.forEach(function (type) {
	    Vue[type] = function (
	      id,
	      definition
	    ) {
	      if (!definition) {
	        return this.options[type + 's'][id]
	      } else {
	        /* istanbul ignore if */
	        {
	          if (type === 'component' && config.isReservedTag(id)) {
	            warn(
	              'Do not use built-in or reserved HTML elements as component ' +
	              'id: ' + id
	            );
	          }
	        }
	        if (type === 'component' && isPlainObject(definition)) {
	          definition.name = definition.name || id;
	          definition = this.options._base.extend(definition);
	        }
	        if (type === 'directive' && typeof definition === 'function') {
	          definition = { bind: definition, update: definition };
	        }
	        this.options[type + 's'][id] = definition;
	        return definition
	      }
	    };
	  });
	}

	/*  */

	var patternTypes = [String, RegExp];

	function matches (pattern, name) {
	  if (typeof pattern === 'string') {
	    return pattern.split(',').indexOf(name) > -1
	  } else {
	    return pattern.test(name)
	  }
	}

	var KeepAlive = {
	  name: 'keep-alive',
	  abstract: true,
	  props: {
	    include: patternTypes,
	    exclude: patternTypes
	  },
	  created: function created () {
	    this.cache = Object.create(null);
	  },
	  render: function render () {
	    var vnode = getFirstComponentChild(this.$slots.default);
	    if (vnode && vnode.componentOptions) {
	      var opts = vnode.componentOptions;
	      // check pattern
	      var name = opts.Ctor.options.name || opts.tag;
	      if (name && (
	        (this.include && !matches(this.include, name)) ||
	        (this.exclude && matches(this.exclude, name))
	      )) {
	        return vnode
	      }
	      var key = vnode.key == null
	        // same constructor may get registered as different local components
	        // so cid alone is not enough (#3269)
	        ? opts.Ctor.cid + (opts.tag ? ("::" + (opts.tag)) : '')
	        : vnode.key;
	      if (this.cache[key]) {
	        vnode.child = this.cache[key].child;
	      } else {
	        this.cache[key] = vnode;
	      }
	      vnode.data.keepAlive = true;
	    }
	    return vnode
	  },
	  destroyed: function destroyed () {
	    var this$1 = this;

	    for (var key in this.cache) {
	      var vnode = this$1.cache[key];
	      callHook(vnode.child, 'deactivated');
	      vnode.child.$destroy();
	    }
	  }
	};

	var builtInComponents = {
	  KeepAlive: KeepAlive
	};

	/*  */

	function initGlobalAPI (Vue) {
	  // config
	  var configDef = {};
	  configDef.get = function () { return config; };
	  {
	    configDef.set = function () {
	      warn(
	        'Do not replace the Vue.config object, set individual fields instead.'
	      );
	    };
	  }
	  Object.defineProperty(Vue, 'config', configDef);
	  Vue.util = util;
	  Vue.set = set$1;
	  Vue.delete = del;
	  Vue.nextTick = nextTick;

	  Vue.options = Object.create(null);
	  config._assetTypes.forEach(function (type) {
	    Vue.options[type + 's'] = Object.create(null);
	  });

	  // this is used to identify the "base" constructor to extend all plain-object
	  // components with in Weex's multi-instance scenarios.
	  Vue.options._base = Vue;

	  extend(Vue.options.components, builtInComponents);

	  initUse(Vue);
	  initMixin$1(Vue);
	  initExtend(Vue);
	  initAssetRegisters(Vue);
	}

	initGlobalAPI(Vue$3);

	Object.defineProperty(Vue$3.prototype, '$isServer', {
	  get: isServerRendering
	});

	Vue$3.version = '2.1.6';

	/*  */

	// attributes that should be using props for binding
	var acceptValue = makeMap('input,textarea,option,select');
	var mustUseProp = function (tag, attr) {
	  return (
	    (attr === 'value' && acceptValue(tag)) ||
	    (attr === 'selected' && tag === 'option') ||
	    (attr === 'checked' && tag === 'input') ||
	    (attr === 'muted' && tag === 'video')
	  )
	};

	var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

	var isBooleanAttr = makeMap(
	  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
	  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
	  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
	  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
	  'required,reversed,scoped,seamless,selected,sortable,translate,' +
	  'truespeed,typemustmatch,visible'
	);

	var xlinkNS = 'http://www.w3.org/1999/xlink';

	var isXlink = function (name) {
	  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
	};

	var getXlinkProp = function (name) {
	  return isXlink(name) ? name.slice(6, name.length) : ''
	};

	var isFalsyAttrValue = function (val) {
	  return val == null || val === false
	};

	/*  */

	function genClassForVnode (vnode) {
	  var data = vnode.data;
	  var parentNode = vnode;
	  var childNode = vnode;
	  while (childNode.child) {
	    childNode = childNode.child._vnode;
	    if (childNode.data) {
	      data = mergeClassData(childNode.data, data);
	    }
	  }
	  while ((parentNode = parentNode.parent)) {
	    if (parentNode.data) {
	      data = mergeClassData(data, parentNode.data);
	    }
	  }
	  return genClassFromData(data)
	}

	function mergeClassData (child, parent) {
	  return {
	    staticClass: concat(child.staticClass, parent.staticClass),
	    class: child.class
	      ? [child.class, parent.class]
	      : parent.class
	  }
	}

	function genClassFromData (data) {
	  var dynamicClass = data.class;
	  var staticClass = data.staticClass;
	  if (staticClass || dynamicClass) {
	    return concat(staticClass, stringifyClass(dynamicClass))
	  }
	  /* istanbul ignore next */
	  return ''
	}

	function concat (a, b) {
	  return a ? b ? (a + ' ' + b) : a : (b || '')
	}

	function stringifyClass (value) {
	  var res = '';
	  if (!value) {
	    return res
	  }
	  if (typeof value === 'string') {
	    return value
	  }
	  if (Array.isArray(value)) {
	    var stringified;
	    for (var i = 0, l = value.length; i < l; i++) {
	      if (value[i]) {
	        if ((stringified = stringifyClass(value[i]))) {
	          res += stringified + ' ';
	        }
	      }
	    }
	    return res.slice(0, -1)
	  }
	  if (isObject(value)) {
	    for (var key in value) {
	      if (value[key]) { res += key + ' '; }
	    }
	    return res.slice(0, -1)
	  }
	  /* istanbul ignore next */
	  return res
	}

	/*  */

	var namespaceMap = {
	  svg: 'http://www.w3.org/2000/svg',
	  math: 'http://www.w3.org/1998/Math/MathML',
	  xhtml: 'http://www.w3.org/1999/xhtml'
	};

	var isHTMLTag = makeMap(
	  'html,body,base,head,link,meta,style,title,' +
	  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
	  'div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,' +
	  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
	  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
	  'embed,object,param,source,canvas,script,noscript,del,ins,' +
	  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
	  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
	  'output,progress,select,textarea,' +
	  'details,dialog,menu,menuitem,summary,' +
	  'content,element,shadow,template'
	);

	// this map is intentionally selective, only covering SVG elements that may
	// contain child elements.
	var isSVG = makeMap(
	  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,' +
	  'font-face,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
	  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
	  true
	);

	var isPreTag = function (tag) { return tag === 'pre'; };

	var isReservedTag = function (tag) {
	  return isHTMLTag(tag) || isSVG(tag)
	};

	function getTagNamespace (tag) {
	  if (isSVG(tag)) {
	    return 'svg'
	  }
	  // basic support for MathML
	  // note it doesn't support other MathML elements being component roots
	  if (tag === 'math') {
	    return 'math'
	  }
	}

	var unknownElementCache = Object.create(null);
	function isUnknownElement (tag) {
	  /* istanbul ignore if */
	  if (!inBrowser) {
	    return true
	  }
	  if (isReservedTag(tag)) {
	    return false
	  }
	  tag = tag.toLowerCase();
	  /* istanbul ignore if */
	  if (unknownElementCache[tag] != null) {
	    return unknownElementCache[tag]
	  }
	  var el = document.createElement(tag);
	  if (tag.indexOf('-') > -1) {
	    // http://stackoverflow.com/a/28210364/1070244
	    return (unknownElementCache[tag] = (
	      el.constructor === window.HTMLUnknownElement ||
	      el.constructor === window.HTMLElement
	    ))
	  } else {
	    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
	  }
	}

	/*  */

	/**
	 * Query an element selector if it's not an element already.
	 */
	function query (el) {
	  if (typeof el === 'string') {
	    var selector = el;
	    el = document.querySelector(el);
	    if (!el) {
	      "development" !== 'production' && warn(
	        'Cannot find element: ' + selector
	      );
	      return document.createElement('div')
	    }
	  }
	  return el
	}

	/*  */

	function createElement$1 (tagName, vnode) {
	  var elm = document.createElement(tagName);
	  if (tagName !== 'select') {
	    return elm
	  }
	  if (vnode.data && vnode.data.attrs && 'multiple' in vnode.data.attrs) {
	    elm.setAttribute('multiple', 'multiple');
	  }
	  return elm
	}

	function createElementNS (namespace, tagName) {
	  return document.createElementNS(namespaceMap[namespace], tagName)
	}

	function createTextNode (text) {
	  return document.createTextNode(text)
	}

	function createComment (text) {
	  return document.createComment(text)
	}

	function insertBefore (parentNode, newNode, referenceNode) {
	  parentNode.insertBefore(newNode, referenceNode);
	}

	function removeChild (node, child) {
	  node.removeChild(child);
	}

	function appendChild (node, child) {
	  node.appendChild(child);
	}

	function parentNode (node) {
	  return node.parentNode
	}

	function nextSibling (node) {
	  return node.nextSibling
	}

	function tagName (node) {
	  return node.tagName
	}

	function setTextContent (node, text) {
	  node.textContent = text;
	}

	function setAttribute (node, key, val) {
	  node.setAttribute(key, val);
	}


	var nodeOps = Object.freeze({
		createElement: createElement$1,
		createElementNS: createElementNS,
		createTextNode: createTextNode,
		createComment: createComment,
		insertBefore: insertBefore,
		removeChild: removeChild,
		appendChild: appendChild,
		parentNode: parentNode,
		nextSibling: nextSibling,
		tagName: tagName,
		setTextContent: setTextContent,
		setAttribute: setAttribute
	});

	/*  */

	var ref = {
	  create: function create (_, vnode) {
	    registerRef(vnode);
	  },
	  update: function update (oldVnode, vnode) {
	    if (oldVnode.data.ref !== vnode.data.ref) {
	      registerRef(oldVnode, true);
	      registerRef(vnode);
	    }
	  },
	  destroy: function destroy (vnode) {
	    registerRef(vnode, true);
	  }
	};

	function registerRef (vnode, isRemoval) {
	  var key = vnode.data.ref;
	  if (!key) { return }

	  var vm = vnode.context;
	  var ref = vnode.child || vnode.elm;
	  var refs = vm.$refs;
	  if (isRemoval) {
	    if (Array.isArray(refs[key])) {
	      remove$1(refs[key], ref);
	    } else if (refs[key] === ref) {
	      refs[key] = undefined;
	    }
	  } else {
	    if (vnode.data.refInFor) {
	      if (Array.isArray(refs[key]) && refs[key].indexOf(ref) < 0) {
	        refs[key].push(ref);
	      } else {
	        refs[key] = [ref];
	      }
	    } else {
	      refs[key] = ref;
	    }
	  }
	}

	/**
	 * Virtual DOM patching algorithm based on Snabbdom by
	 * Simon Friis Vindum (@paldepind)
	 * Licensed under the MIT License
	 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
	 *
	 * modified by Evan You (@yyx990803)
	 *

	/*
	 * Not type-checking this because this file is perf-critical and the cost
	 * of making flow understand it is not worth it.
	 */

	var emptyNode = new VNode('', {}, []);

	var hooks$1 = ['create', 'activate', 'update', 'remove', 'destroy'];

	function isUndef (s) {
	  return s == null
	}

	function isDef (s) {
	  return s != null
	}

	function sameVnode (vnode1, vnode2) {
	  return (
	    vnode1.key === vnode2.key &&
	    vnode1.tag === vnode2.tag &&
	    vnode1.isComment === vnode2.isComment &&
	    !vnode1.data === !vnode2.data
	  )
	}

	function createKeyToOldIdx (children, beginIdx, endIdx) {
	  var i, key;
	  var map = {};
	  for (i = beginIdx; i <= endIdx; ++i) {
	    key = children[i].key;
	    if (isDef(key)) { map[key] = i; }
	  }
	  return map
	}

	function createPatchFunction (backend) {
	  var i, j;
	  var cbs = {};

	  var modules = backend.modules;
	  var nodeOps = backend.nodeOps;

	  for (i = 0; i < hooks$1.length; ++i) {
	    cbs[hooks$1[i]] = [];
	    for (j = 0; j < modules.length; ++j) {
	      if (modules[j][hooks$1[i]] !== undefined) { cbs[hooks$1[i]].push(modules[j][hooks$1[i]]); }
	    }
	  }

	  function emptyNodeAt (elm) {
	    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
	  }

	  function createRmCb (childElm, listeners) {
	    function remove$$1 () {
	      if (--remove$$1.listeners === 0) {
	        removeElement(childElm);
	      }
	    }
	    remove$$1.listeners = listeners;
	    return remove$$1
	  }

	  function removeElement (el) {
	    var parent = nodeOps.parentNode(el);
	    // element may have already been removed due to v-html
	    if (parent) {
	      nodeOps.removeChild(parent, el);
	    }
	  }

	  var inPre = 0;
	  function createElm (vnode, insertedVnodeQueue, parentElm, refElm, nested) {
	    vnode.isRootInsert = !nested; // for transition enter check
	    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
	      return
	    }

	    var data = vnode.data;
	    var children = vnode.children;
	    var tag = vnode.tag;
	    if (isDef(tag)) {
	      {
	        if (data && data.pre) {
	          inPre++;
	        }
	        if (
	          !inPre &&
	          !vnode.ns &&
	          !(config.ignoredElements && config.ignoredElements.indexOf(tag) > -1) &&
	          config.isUnknownElement(tag)
	        ) {
	          warn(
	            'Unknown custom element: <' + tag + '> - did you ' +
	            'register the component correctly? For recursive components, ' +
	            'make sure to provide the "name" option.',
	            vnode.context
	          );
	        }
	      }
	      vnode.elm = vnode.ns
	        ? nodeOps.createElementNS(vnode.ns, tag)
	        : nodeOps.createElement(tag, vnode);
	      setScope(vnode);

	      /* istanbul ignore if */
	      {
	        createChildren(vnode, children, insertedVnodeQueue);
	        if (isDef(data)) {
	          invokeCreateHooks(vnode, insertedVnodeQueue);
	        }
	        insert(parentElm, vnode.elm, refElm);
	      }

	      if ("development" !== 'production' && data && data.pre) {
	        inPre--;
	      }
	    } else if (vnode.isComment) {
	      vnode.elm = nodeOps.createComment(vnode.text);
	      insert(parentElm, vnode.elm, refElm);
	    } else {
	      vnode.elm = nodeOps.createTextNode(vnode.text);
	      insert(parentElm, vnode.elm, refElm);
	    }
	  }

	  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
	    var i = vnode.data;
	    if (isDef(i)) {
	      var isReactivated = isDef(vnode.child) && i.keepAlive;
	      if (isDef(i = i.hook) && isDef(i = i.init)) {
	        i(vnode, false /* hydrating */, parentElm, refElm);
	      }
	      // after calling the init hook, if the vnode is a child component
	      // it should've created a child instance and mounted it. the child
	      // component also has set the placeholder vnode's elm.
	      // in that case we can just return the element and be done.
	      if (isDef(vnode.child)) {
	        initComponent(vnode, insertedVnodeQueue);
	        if (isReactivated) {
	          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
	        }
	        return true
	      }
	    }
	  }

	  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
	    var i;
	    // hack for #4339: a reactivated component with inner transition
	    // does not trigger because the inner node's created hooks are not called
	    // again. It's not ideal to involve module-specific logic in here but
	    // there doesn't seem to be a better way to do it.
	    var innerNode = vnode;
	    while (innerNode.child) {
	      innerNode = innerNode.child._vnode;
	      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
	        for (i = 0; i < cbs.activate.length; ++i) {
	          cbs.activate[i](emptyNode, innerNode);
	        }
	        insertedVnodeQueue.push(innerNode);
	        break
	      }
	    }
	    // unlike a newly created component,
	    // a reactivated keep-alive component doesn't insert itself
	    insert(parentElm, vnode.elm, refElm);
	  }

	  function insert (parent, elm, ref) {
	    if (parent) {
	      if (ref) {
	        nodeOps.insertBefore(parent, elm, ref);
	      } else {
	        nodeOps.appendChild(parent, elm);
	      }
	    }
	  }

	  function createChildren (vnode, children, insertedVnodeQueue) {
	    if (Array.isArray(children)) {
	      for (var i = 0; i < children.length; ++i) {
	        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true);
	      }
	    } else if (isPrimitive(vnode.text)) {
	      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(vnode.text));
	    }
	  }

	  function isPatchable (vnode) {
	    while (vnode.child) {
	      vnode = vnode.child._vnode;
	    }
	    return isDef(vnode.tag)
	  }

	  function invokeCreateHooks (vnode, insertedVnodeQueue) {
	    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
	      cbs.create[i$1](emptyNode, vnode);
	    }
	    i = vnode.data.hook; // Reuse variable
	    if (isDef(i)) {
	      if (i.create) { i.create(emptyNode, vnode); }
	      if (i.insert) { insertedVnodeQueue.push(vnode); }
	    }
	  }

	  function initComponent (vnode, insertedVnodeQueue) {
	    if (vnode.data.pendingInsert) {
	      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
	    }
	    vnode.elm = vnode.child.$el;
	    if (isPatchable(vnode)) {
	      invokeCreateHooks(vnode, insertedVnodeQueue);
	      setScope(vnode);
	    } else {
	      // empty component root.
	      // skip all element-related modules except for ref (#3455)
	      registerRef(vnode);
	      // make sure to invoke the insert hook
	      insertedVnodeQueue.push(vnode);
	    }
	  }

	  // set scope id attribute for scoped CSS.
	  // this is implemented as a special case to avoid the overhead
	  // of going through the normal attribute patching process.
	  function setScope (vnode) {
	    var i;
	    if (isDef(i = vnode.context) && isDef(i = i.$options._scopeId)) {
	      nodeOps.setAttribute(vnode.elm, i, '');
	    }
	    if (isDef(i = activeInstance) &&
	        i !== vnode.context &&
	        isDef(i = i.$options._scopeId)) {
	      nodeOps.setAttribute(vnode.elm, i, '');
	    }
	  }

	  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
	    for (; startIdx <= endIdx; ++startIdx) {
	      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm);
	    }
	  }

	  function invokeDestroyHook (vnode) {
	    var i, j;
	    var data = vnode.data;
	    if (isDef(data)) {
	      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
	      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
	    }
	    if (isDef(i = vnode.children)) {
	      for (j = 0; j < vnode.children.length; ++j) {
	        invokeDestroyHook(vnode.children[j]);
	      }
	    }
	  }

	  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
	    for (; startIdx <= endIdx; ++startIdx) {
	      var ch = vnodes[startIdx];
	      if (isDef(ch)) {
	        if (isDef(ch.tag)) {
	          removeAndInvokeRemoveHook(ch);
	          invokeDestroyHook(ch);
	        } else { // Text node
	          nodeOps.removeChild(parentElm, ch.elm);
	        }
	      }
	    }
	  }

	  function removeAndInvokeRemoveHook (vnode, rm) {
	    if (rm || isDef(vnode.data)) {
	      var listeners = cbs.remove.length + 1;
	      if (!rm) {
	        // directly removing
	        rm = createRmCb(vnode.elm, listeners);
	      } else {
	        // we have a recursively passed down rm callback
	        // increase the listeners count
	        rm.listeners += listeners;
	      }
	      // recursively invoke hooks on child component root node
	      if (isDef(i = vnode.child) && isDef(i = i._vnode) && isDef(i.data)) {
	        removeAndInvokeRemoveHook(i, rm);
	      }
	      for (i = 0; i < cbs.remove.length; ++i) {
	        cbs.remove[i](vnode, rm);
	      }
	      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
	        i(vnode, rm);
	      } else {
	        rm();
	      }
	    } else {
	      removeElement(vnode.elm);
	    }
	  }

	  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
	    var oldStartIdx = 0;
	    var newStartIdx = 0;
	    var oldEndIdx = oldCh.length - 1;
	    var oldStartVnode = oldCh[0];
	    var oldEndVnode = oldCh[oldEndIdx];
	    var newEndIdx = newCh.length - 1;
	    var newStartVnode = newCh[0];
	    var newEndVnode = newCh[newEndIdx];
	    var oldKeyToIdx, idxInOld, elmToMove, refElm;

	    // removeOnly is a special flag used only by <transition-group>
	    // to ensure removed elements stay in correct relative positions
	    // during leaving transitions
	    var canMove = !removeOnly;

	    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
	      if (isUndef(oldStartVnode)) {
	        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
	      } else if (isUndef(oldEndVnode)) {
	        oldEndVnode = oldCh[--oldEndIdx];
	      } else if (sameVnode(oldStartVnode, newStartVnode)) {
	        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
	        oldStartVnode = oldCh[++oldStartIdx];
	        newStartVnode = newCh[++newStartIdx];
	      } else if (sameVnode(oldEndVnode, newEndVnode)) {
	        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
	        oldEndVnode = oldCh[--oldEndIdx];
	        newEndVnode = newCh[--newEndIdx];
	      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
	        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
	        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
	        oldStartVnode = oldCh[++oldStartIdx];
	        newEndVnode = newCh[--newEndIdx];
	      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
	        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
	        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
	        oldEndVnode = oldCh[--oldEndIdx];
	        newStartVnode = newCh[++newStartIdx];
	      } else {
	        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
	        idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : null;
	        if (isUndef(idxInOld)) { // New element
	          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
	          newStartVnode = newCh[++newStartIdx];
	        } else {
	          elmToMove = oldCh[idxInOld];
	          /* istanbul ignore if */
	          if ("development" !== 'production' && !elmToMove) {
	            warn(
	              'It seems there are duplicate keys that is causing an update error. ' +
	              'Make sure each v-for item has a unique key.'
	            );
	          }
	          if (sameVnode(elmToMove, newStartVnode)) {
	            patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
	            oldCh[idxInOld] = undefined;
	            canMove && nodeOps.insertBefore(parentElm, newStartVnode.elm, oldStartVnode.elm);
	            newStartVnode = newCh[++newStartIdx];
	          } else {
	            // same key but different element. treat as new element
	            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
	            newStartVnode = newCh[++newStartIdx];
	          }
	        }
	      }
	    }
	    if (oldStartIdx > oldEndIdx) {
	      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
	      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
	    } else if (newStartIdx > newEndIdx) {
	      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
	    }
	  }

	  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
	    if (oldVnode === vnode) {
	      return
	    }
	    // reuse element for static trees.
	    // note we only do this if the vnode is cloned -
	    // if the new node is not cloned it means the render functions have been
	    // reset by the hot-reload-api and we need to do a proper re-render.
	    if (vnode.isStatic &&
	        oldVnode.isStatic &&
	        vnode.key === oldVnode.key &&
	        (vnode.isCloned || vnode.isOnce)) {
	      vnode.elm = oldVnode.elm;
	      vnode.child = oldVnode.child;
	      return
	    }
	    var i;
	    var data = vnode.data;
	    var hasData = isDef(data);
	    if (hasData && isDef(i = data.hook) && isDef(i = i.prepatch)) {
	      i(oldVnode, vnode);
	    }
	    var elm = vnode.elm = oldVnode.elm;
	    var oldCh = oldVnode.children;
	    var ch = vnode.children;
	    if (hasData && isPatchable(vnode)) {
	      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
	      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
	    }
	    if (isUndef(vnode.text)) {
	      if (isDef(oldCh) && isDef(ch)) {
	        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
	      } else if (isDef(ch)) {
	        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
	        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
	      } else if (isDef(oldCh)) {
	        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
	      } else if (isDef(oldVnode.text)) {
	        nodeOps.setTextContent(elm, '');
	      }
	    } else if (oldVnode.text !== vnode.text) {
	      nodeOps.setTextContent(elm, vnode.text);
	    }
	    if (hasData) {
	      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
	    }
	  }

	  function invokeInsertHook (vnode, queue, initial) {
	    // delay insert hooks for component root nodes, invoke them after the
	    // element is really inserted
	    if (initial && vnode.parent) {
	      vnode.parent.data.pendingInsert = queue;
	    } else {
	      for (var i = 0; i < queue.length; ++i) {
	        queue[i].data.hook.insert(queue[i]);
	      }
	    }
	  }

	  var bailed = false;
	  // list of modules that can skip create hook during hydration because they
	  // are already rendered on the client or has no need for initialization
	  var isRenderedModule = makeMap('attrs,style,class,staticClass,staticStyle,key');

	  // Note: this is a browser-only function so we can assume elms are DOM nodes.
	  function hydrate (elm, vnode, insertedVnodeQueue) {
	    {
	      if (!assertNodeMatch(elm, vnode)) {
	        return false
	      }
	    }
	    vnode.elm = elm;
	    var tag = vnode.tag;
	    var data = vnode.data;
	    var children = vnode.children;
	    if (isDef(data)) {
	      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
	      if (isDef(i = vnode.child)) {
	        // child component. it should have hydrated its own tree.
	        initComponent(vnode, insertedVnodeQueue);
	        return true
	      }
	    }
	    if (isDef(tag)) {
	      if (isDef(children)) {
	        // empty element, allow client to pick up and populate children
	        if (!elm.hasChildNodes()) {
	          createChildren(vnode, children, insertedVnodeQueue);
	        } else {
	          var childrenMatch = true;
	          var childNode = elm.firstChild;
	          for (var i$1 = 0; i$1 < children.length; i$1++) {
	            if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue)) {
	              childrenMatch = false;
	              break
	            }
	            childNode = childNode.nextSibling;
	          }
	          // if childNode is not null, it means the actual childNodes list is
	          // longer than the virtual children list.
	          if (!childrenMatch || childNode) {
	            if ("development" !== 'production' &&
	                typeof console !== 'undefined' &&
	                !bailed) {
	              bailed = true;
	              console.warn('Parent: ', elm);
	              console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
	            }
	            return false
	          }
	        }
	      }
	      if (isDef(data)) {
	        for (var key in data) {
	          if (!isRenderedModule(key)) {
	            invokeCreateHooks(vnode, insertedVnodeQueue);
	            break
	          }
	        }
	      }
	    }
	    return true
	  }

	  function assertNodeMatch (node, vnode) {
	    if (vnode.tag) {
	      return (
	        vnode.tag.indexOf('vue-component') === 0 ||
	        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
	      )
	    } else {
	      return _toString(vnode.text) === node.data
	    }
	  }

	  return function patch (oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
	    if (!vnode) {
	      if (oldVnode) { invokeDestroyHook(oldVnode); }
	      return
	    }

	    var elm, parent;
	    var isInitialPatch = false;
	    var insertedVnodeQueue = [];

	    if (!oldVnode) {
	      // empty mount (likely as component), create new root element
	      isInitialPatch = true;
	      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
	    } else {
	      var isRealElement = isDef(oldVnode.nodeType);
	      if (!isRealElement && sameVnode(oldVnode, vnode)) {
	        // patch existing root node
	        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
	      } else {
	        if (isRealElement) {
	          // mounting to a real element
	          // check if this is server-rendered content and if we can perform
	          // a successful hydration.
	          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute('server-rendered')) {
	            oldVnode.removeAttribute('server-rendered');
	            hydrating = true;
	          }
	          if (hydrating) {
	            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
	              invokeInsertHook(vnode, insertedVnodeQueue, true);
	              return oldVnode
	            } else {
	              warn(
	                'The client-side rendered virtual DOM tree is not matching ' +
	                'server-rendered content. This is likely caused by incorrect ' +
	                'HTML markup, for example nesting block-level elements inside ' +
	                '<p>, or missing <tbody>. Bailing hydration and performing ' +
	                'full client-side render.'
	              );
	            }
	          }
	          // either not server-rendered, or hydration failed.
	          // create an empty node and replace it
	          oldVnode = emptyNodeAt(oldVnode);
	        }

	        // replacing existing element
	        elm = oldVnode.elm;
	        parent = nodeOps.parentNode(elm);
	        createElm(vnode, insertedVnodeQueue, parent, nodeOps.nextSibling(elm));

	        if (vnode.parent) {
	          // component root element replaced.
	          // update parent placeholder node element, recursively
	          var ancestor = vnode.parent;
	          while (ancestor) {
	            ancestor.elm = vnode.elm;
	            ancestor = ancestor.parent;
	          }
	          if (isPatchable(vnode)) {
	            for (var i = 0; i < cbs.create.length; ++i) {
	              cbs.create[i](emptyNode, vnode.parent);
	            }
	          }
	        }

	        if (parent !== null) {
	          removeVnodes(parent, [oldVnode], 0, 0);
	        } else if (isDef(oldVnode.tag)) {
	          invokeDestroyHook(oldVnode);
	        }
	      }
	    }

	    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
	    return vnode.elm
	  }
	}

	/*  */

	var directives = {
	  create: updateDirectives,
	  update: updateDirectives,
	  destroy: function unbindDirectives (vnode) {
	    updateDirectives(vnode, emptyNode);
	  }
	};

	function updateDirectives (oldVnode, vnode) {
	  if (oldVnode.data.directives || vnode.data.directives) {
	    _update(oldVnode, vnode);
	  }
	}

	function _update (oldVnode, vnode) {
	  var isCreate = oldVnode === emptyNode;
	  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
	  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

	  var dirsWithInsert = [];
	  var dirsWithPostpatch = [];

	  var key, oldDir, dir;
	  for (key in newDirs) {
	    oldDir = oldDirs[key];
	    dir = newDirs[key];
	    if (!oldDir) {
	      // new directive, bind
	      callHook$1(dir, 'bind', vnode, oldVnode);
	      if (dir.def && dir.def.inserted) {
	        dirsWithInsert.push(dir);
	      }
	    } else {
	      // existing directive, update
	      dir.oldValue = oldDir.value;
	      callHook$1(dir, 'update', vnode, oldVnode);
	      if (dir.def && dir.def.componentUpdated) {
	        dirsWithPostpatch.push(dir);
	      }
	    }
	  }

	  if (dirsWithInsert.length) {
	    var callInsert = function () {
	      for (var i = 0; i < dirsWithInsert.length; i++) {
	        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
	      }
	    };
	    if (isCreate) {
	      mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', callInsert, 'dir-insert');
	    } else {
	      callInsert();
	    }
	  }

	  if (dirsWithPostpatch.length) {
	    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'postpatch', function () {
	      for (var i = 0; i < dirsWithPostpatch.length; i++) {
	        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
	      }
	    }, 'dir-postpatch');
	  }

	  if (!isCreate) {
	    for (key in oldDirs) {
	      if (!newDirs[key]) {
	        // no longer present, unbind
	        callHook$1(oldDirs[key], 'unbind', oldVnode);
	      }
	    }
	  }
	}

	var emptyModifiers = Object.create(null);

	function normalizeDirectives$1 (
	  dirs,
	  vm
	) {
	  var res = Object.create(null);
	  if (!dirs) {
	    return res
	  }
	  var i, dir;
	  for (i = 0; i < dirs.length; i++) {
	    dir = dirs[i];
	    if (!dir.modifiers) {
	      dir.modifiers = emptyModifiers;
	    }
	    res[getRawDirName(dir)] = dir;
	    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
	  }
	  return res
	}

	function getRawDirName (dir) {
	  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
	}

	function callHook$1 (dir, hook, vnode, oldVnode) {
	  var fn = dir.def && dir.def[hook];
	  if (fn) {
	    fn(vnode.elm, dir, vnode, oldVnode);
	  }
	}

	var baseModules = [
	  ref,
	  directives
	];

	/*  */

	function updateAttrs (oldVnode, vnode) {
	  if (!oldVnode.data.attrs && !vnode.data.attrs) {
	    return
	  }
	  var key, cur, old;
	  var elm = vnode.elm;
	  var oldAttrs = oldVnode.data.attrs || {};
	  var attrs = vnode.data.attrs || {};
	  // clone observed objects, as the user probably wants to mutate it
	  if (attrs.__ob__) {
	    attrs = vnode.data.attrs = extend({}, attrs);
	  }

	  for (key in attrs) {
	    cur = attrs[key];
	    old = oldAttrs[key];
	    if (old !== cur) {
	      setAttr(elm, key, cur);
	    }
	  }
	  // #4391: in IE9, setting type can reset value for input[type=radio]
	  /* istanbul ignore if */
	  if (isIE9 && attrs.value !== oldAttrs.value) {
	    setAttr(elm, 'value', attrs.value);
	  }
	  for (key in oldAttrs) {
	    if (attrs[key] == null) {
	      if (isXlink(key)) {
	        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
	      } else if (!isEnumeratedAttr(key)) {
	        elm.removeAttribute(key);
	      }
	    }
	  }
	}

	function setAttr (el, key, value) {
	  if (isBooleanAttr(key)) {
	    // set attribute for blank value
	    // e.g. <option disabled>Select one</option>
	    if (isFalsyAttrValue(value)) {
	      el.removeAttribute(key);
	    } else {
	      el.setAttribute(key, key);
	    }
	  } else if (isEnumeratedAttr(key)) {
	    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
	  } else if (isXlink(key)) {
	    if (isFalsyAttrValue(value)) {
	      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
	    } else {
	      el.setAttributeNS(xlinkNS, key, value);
	    }
	  } else {
	    if (isFalsyAttrValue(value)) {
	      el.removeAttribute(key);
	    } else {
	      el.setAttribute(key, value);
	    }
	  }
	}

	var attrs = {
	  create: updateAttrs,
	  update: updateAttrs
	};

	/*  */

	function updateClass (oldVnode, vnode) {
	  var el = vnode.elm;
	  var data = vnode.data;
	  var oldData = oldVnode.data;
	  if (!data.staticClass && !data.class &&
	      (!oldData || (!oldData.staticClass && !oldData.class))) {
	    return
	  }

	  var cls = genClassForVnode(vnode);

	  // handle transition classes
	  var transitionClass = el._transitionClasses;
	  if (transitionClass) {
	    cls = concat(cls, stringifyClass(transitionClass));
	  }

	  // set the class
	  if (cls !== el._prevClass) {
	    el.setAttribute('class', cls);
	    el._prevClass = cls;
	  }
	}

	var klass = {
	  create: updateClass,
	  update: updateClass
	};

	/*  */

	var target;

	function add$1 (event, handler, once, capture) {
	  if (once) {
	    var oldHandler = handler;
	    handler = function (ev) {
	      remove$2(event, handler, capture);
	      arguments.length === 1
	        ? oldHandler(ev)
	        : oldHandler.apply(null, arguments);
	    };
	  }
	  target.addEventListener(event, handler, capture);
	}

	function remove$2 (event, handler, capture) {
	  target.removeEventListener(event, handler, capture);
	}

	function updateDOMListeners (oldVnode, vnode) {
	  if (!oldVnode.data.on && !vnode.data.on) {
	    return
	  }
	  var on = vnode.data.on || {};
	  var oldOn = oldVnode.data.on || {};
	  target = vnode.elm;
	  updateListeners(on, oldOn, add$1, remove$2, vnode.context);
	}

	var events = {
	  create: updateDOMListeners,
	  update: updateDOMListeners
	};

	/*  */

	function updateDOMProps (oldVnode, vnode) {
	  if (!oldVnode.data.domProps && !vnode.data.domProps) {
	    return
	  }
	  var key, cur;
	  var elm = vnode.elm;
	  var oldProps = oldVnode.data.domProps || {};
	  var props = vnode.data.domProps || {};
	  // clone observed objects, as the user probably wants to mutate it
	  if (props.__ob__) {
	    props = vnode.data.domProps = extend({}, props);
	  }

	  for (key in oldProps) {
	    if (props[key] == null) {
	      elm[key] = '';
	    }
	  }
	  for (key in props) {
	    cur = props[key];
	    // ignore children if the node has textContent or innerHTML,
	    // as these will throw away existing DOM nodes and cause removal errors
	    // on subsequent patches (#3360)
	    if (key === 'textContent' || key === 'innerHTML') {
	      if (vnode.children) { vnode.children.length = 0; }
	      if (cur === oldProps[key]) { continue }
	    }
	    if (key === 'value') {
	      // store value as _value as well since
	      // non-string values will be stringified
	      elm._value = cur;
	      // avoid resetting cursor position when value is the same
	      var strCur = cur == null ? '' : String(cur);
	      if (!elm.composing && (
	        (document.activeElement !== elm && elm.value !== strCur) ||
	        isValueChanged(vnode, strCur)
	      )) {
	        elm.value = strCur;
	      }
	    } else {
	      elm[key] = cur;
	    }
	  }
	}

	function isValueChanged (vnode, newVal) {
	  var value = vnode.elm.value;
	  var modifiers = vnode.elm._vModifiers; // injected by v-model runtime
	  if ((modifiers && modifiers.number) || vnode.elm.type === 'number') {
	    return toNumber(value) !== toNumber(newVal)
	  }
	  if (modifiers && modifiers.trim) {
	    return value.trim() !== newVal.trim()
	  }
	  return value !== newVal
	}

	var domProps = {
	  create: updateDOMProps,
	  update: updateDOMProps
	};

	/*  */

	var parseStyleText = cached(function (cssText) {
	  var res = {};
	  var listDelimiter = /;(?![^(]*\))/g;
	  var propertyDelimiter = /:(.+)/;
	  cssText.split(listDelimiter).forEach(function (item) {
	    if (item) {
	      var tmp = item.split(propertyDelimiter);
	      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
	    }
	  });
	  return res
	});

	// merge static and dynamic style data on the same vnode
	function normalizeStyleData (data) {
	  var style = normalizeStyleBinding(data.style);
	  // static style is pre-processed into an object during compilation
	  // and is always a fresh object, so it's safe to merge into it
	  return data.staticStyle
	    ? extend(data.staticStyle, style)
	    : style
	}

	// normalize possible array / string values into Object
	function normalizeStyleBinding (bindingStyle) {
	  if (Array.isArray(bindingStyle)) {
	    return toObject(bindingStyle)
	  }
	  if (typeof bindingStyle === 'string') {
	    return parseStyleText(bindingStyle)
	  }
	  return bindingStyle
	}

	/**
	 * parent component style should be after child's
	 * so that parent component's style could override it
	 */
	function getStyle (vnode, checkChild) {
	  var res = {};
	  var styleData;

	  if (checkChild) {
	    var childNode = vnode;
	    while (childNode.child) {
	      childNode = childNode.child._vnode;
	      if (childNode.data && (styleData = normalizeStyleData(childNode.data))) {
	        extend(res, styleData);
	      }
	    }
	  }

	  if ((styleData = normalizeStyleData(vnode.data))) {
	    extend(res, styleData);
	  }

	  var parentNode = vnode;
	  while ((parentNode = parentNode.parent)) {
	    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
	      extend(res, styleData);
	    }
	  }
	  return res
	}

	/*  */

	var cssVarRE = /^--/;
	var importantRE = /\s*!important$/;
	var setProp = function (el, name, val) {
	  /* istanbul ignore if */
	  if (cssVarRE.test(name)) {
	    el.style.setProperty(name, val);
	  } else if (importantRE.test(val)) {
	    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
	  } else {
	    el.style[normalize(name)] = val;
	  }
	};

	var prefixes = ['Webkit', 'Moz', 'ms'];

	var testEl;
	var normalize = cached(function (prop) {
	  testEl = testEl || document.createElement('div');
	  prop = camelize(prop);
	  if (prop !== 'filter' && (prop in testEl.style)) {
	    return prop
	  }
	  var upper = prop.charAt(0).toUpperCase() + prop.slice(1);
	  for (var i = 0; i < prefixes.length; i++) {
	    var prefixed = prefixes[i] + upper;
	    if (prefixed in testEl.style) {
	      return prefixed
	    }
	  }
	});

	function updateStyle (oldVnode, vnode) {
	  var data = vnode.data;
	  var oldData = oldVnode.data;

	  if (!data.staticStyle && !data.style &&
	      !oldData.staticStyle && !oldData.style) {
	    return
	  }

	  var cur, name;
	  var el = vnode.elm;
	  var oldStaticStyle = oldVnode.data.staticStyle;
	  var oldStyleBinding = oldVnode.data.style || {};

	  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
	  var oldStyle = oldStaticStyle || oldStyleBinding;

	  var style = normalizeStyleBinding(vnode.data.style) || {};

	  vnode.data.style = style.__ob__ ? extend({}, style) : style;

	  var newStyle = getStyle(vnode, true);

	  for (name in oldStyle) {
	    if (newStyle[name] == null) {
	      setProp(el, name, '');
	    }
	  }
	  for (name in newStyle) {
	    cur = newStyle[name];
	    if (cur !== oldStyle[name]) {
	      // ie9 setting to null has no effect, must use empty string
	      setProp(el, name, cur == null ? '' : cur);
	    }
	  }
	}

	var style = {
	  create: updateStyle,
	  update: updateStyle
	};

	/*  */

	/**
	 * Add class with compatibility for SVG since classList is not supported on
	 * SVG elements in IE
	 */
	function addClass (el, cls) {
	  /* istanbul ignore if */
	  if (!cls || !cls.trim()) {
	    return
	  }

	  /* istanbul ignore else */
	  if (el.classList) {
	    if (cls.indexOf(' ') > -1) {
	      cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); });
	    } else {
	      el.classList.add(cls);
	    }
	  } else {
	    var cur = ' ' + el.getAttribute('class') + ' ';
	    if (cur.indexOf(' ' + cls + ' ') < 0) {
	      el.setAttribute('class', (cur + cls).trim());
	    }
	  }
	}

	/**
	 * Remove class with compatibility for SVG since classList is not supported on
	 * SVG elements in IE
	 */
	function removeClass (el, cls) {
	  /* istanbul ignore if */
	  if (!cls || !cls.trim()) {
	    return
	  }

	  /* istanbul ignore else */
	  if (el.classList) {
	    if (cls.indexOf(' ') > -1) {
	      cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); });
	    } else {
	      el.classList.remove(cls);
	    }
	  } else {
	    var cur = ' ' + el.getAttribute('class') + ' ';
	    var tar = ' ' + cls + ' ';
	    while (cur.indexOf(tar) >= 0) {
	      cur = cur.replace(tar, ' ');
	    }
	    el.setAttribute('class', cur.trim());
	  }
	}

	/*  */

	var hasTransition = inBrowser && !isIE9;
	var TRANSITION = 'transition';
	var ANIMATION = 'animation';

	// Transition property/event sniffing
	var transitionProp = 'transition';
	var transitionEndEvent = 'transitionend';
	var animationProp = 'animation';
	var animationEndEvent = 'animationend';
	if (hasTransition) {
	  /* istanbul ignore if */
	  if (window.ontransitionend === undefined &&
	    window.onwebkittransitionend !== undefined) {
	    transitionProp = 'WebkitTransition';
	    transitionEndEvent = 'webkitTransitionEnd';
	  }
	  if (window.onanimationend === undefined &&
	    window.onwebkitanimationend !== undefined) {
	    animationProp = 'WebkitAnimation';
	    animationEndEvent = 'webkitAnimationEnd';
	  }
	}

	var raf = (inBrowser && window.requestAnimationFrame) || setTimeout;
	function nextFrame (fn) {
	  raf(function () {
	    raf(fn);
	  });
	}

	function addTransitionClass (el, cls) {
	  (el._transitionClasses || (el._transitionClasses = [])).push(cls);
	  addClass(el, cls);
	}

	function removeTransitionClass (el, cls) {
	  if (el._transitionClasses) {
	    remove$1(el._transitionClasses, cls);
	  }
	  removeClass(el, cls);
	}

	function whenTransitionEnds (
	  el,
	  expectedType,
	  cb
	) {
	  var ref = getTransitionInfo(el, expectedType);
	  var type = ref.type;
	  var timeout = ref.timeout;
	  var propCount = ref.propCount;
	  if (!type) { return cb() }
	  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
	  var ended = 0;
	  var end = function () {
	    el.removeEventListener(event, onEnd);
	    cb();
	  };
	  var onEnd = function (e) {
	    if (e.target === el) {
	      if (++ended >= propCount) {
	        end();
	      }
	    }
	  };
	  setTimeout(function () {
	    if (ended < propCount) {
	      end();
	    }
	  }, timeout + 1);
	  el.addEventListener(event, onEnd);
	}

	var transformRE = /\b(transform|all)(,|$)/;

	function getTransitionInfo (el, expectedType) {
	  var styles = window.getComputedStyle(el);
	  var transitioneDelays = styles[transitionProp + 'Delay'].split(', ');
	  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
	  var transitionTimeout = getTimeout(transitioneDelays, transitionDurations);
	  var animationDelays = styles[animationProp + 'Delay'].split(', ');
	  var animationDurations = styles[animationProp + 'Duration'].split(', ');
	  var animationTimeout = getTimeout(animationDelays, animationDurations);

	  var type;
	  var timeout = 0;
	  var propCount = 0;
	  /* istanbul ignore if */
	  if (expectedType === TRANSITION) {
	    if (transitionTimeout > 0) {
	      type = TRANSITION;
	      timeout = transitionTimeout;
	      propCount = transitionDurations.length;
	    }
	  } else if (expectedType === ANIMATION) {
	    if (animationTimeout > 0) {
	      type = ANIMATION;
	      timeout = animationTimeout;
	      propCount = animationDurations.length;
	    }
	  } else {
	    timeout = Math.max(transitionTimeout, animationTimeout);
	    type = timeout > 0
	      ? transitionTimeout > animationTimeout
	        ? TRANSITION
	        : ANIMATION
	      : null;
	    propCount = type
	      ? type === TRANSITION
	        ? transitionDurations.length
	        : animationDurations.length
	      : 0;
	  }
	  var hasTransform =
	    type === TRANSITION &&
	    transformRE.test(styles[transitionProp + 'Property']);
	  return {
	    type: type,
	    timeout: timeout,
	    propCount: propCount,
	    hasTransform: hasTransform
	  }
	}

	function getTimeout (delays, durations) {
	  /* istanbul ignore next */
	  while (delays.length < durations.length) {
	    delays = delays.concat(delays);
	  }

	  return Math.max.apply(null, durations.map(function (d, i) {
	    return toMs(d) + toMs(delays[i])
	  }))
	}

	function toMs (s) {
	  return Number(s.slice(0, -1)) * 1000
	}

	/*  */

	function enter (vnode, toggleDisplay) {
	  var el = vnode.elm;

	  // call leave callback now
	  if (el._leaveCb) {
	    el._leaveCb.cancelled = true;
	    el._leaveCb();
	  }

	  var data = resolveTransition(vnode.data.transition);
	  if (!data) {
	    return
	  }

	  /* istanbul ignore if */
	  if (el._enterCb || el.nodeType !== 1) {
	    return
	  }

	  var css = data.css;
	  var type = data.type;
	  var enterClass = data.enterClass;
	  var enterActiveClass = data.enterActiveClass;
	  var appearClass = data.appearClass;
	  var appearActiveClass = data.appearActiveClass;
	  var beforeEnter = data.beforeEnter;
	  var enter = data.enter;
	  var afterEnter = data.afterEnter;
	  var enterCancelled = data.enterCancelled;
	  var beforeAppear = data.beforeAppear;
	  var appear = data.appear;
	  var afterAppear = data.afterAppear;
	  var appearCancelled = data.appearCancelled;

	  // activeInstance will always be the <transition> component managing this
	  // transition. One edge case to check is when the <transition> is placed
	  // as the root node of a child component. In that case we need to check
	  // <transition>'s parent for appear check.
	  var context = activeInstance;
	  var transitionNode = activeInstance.$vnode;
	  while (transitionNode && transitionNode.parent) {
	    transitionNode = transitionNode.parent;
	    context = transitionNode.context;
	  }

	  var isAppear = !context._isMounted || !vnode.isRootInsert;

	  if (isAppear && !appear && appear !== '') {
	    return
	  }

	  var startClass = isAppear ? appearClass : enterClass;
	  var activeClass = isAppear ? appearActiveClass : enterActiveClass;
	  var beforeEnterHook = isAppear ? (beforeAppear || beforeEnter) : beforeEnter;
	  var enterHook = isAppear ? (typeof appear === 'function' ? appear : enter) : enter;
	  var afterEnterHook = isAppear ? (afterAppear || afterEnter) : afterEnter;
	  var enterCancelledHook = isAppear ? (appearCancelled || enterCancelled) : enterCancelled;

	  var expectsCSS = css !== false && !isIE9;
	  var userWantsControl =
	    enterHook &&
	    // enterHook may be a bound method which exposes
	    // the length of original fn as _length
	    (enterHook._length || enterHook.length) > 1;

	  var cb = el._enterCb = once(function () {
	    if (expectsCSS) {
	      removeTransitionClass(el, activeClass);
	    }
	    if (cb.cancelled) {
	      if (expectsCSS) {
	        removeTransitionClass(el, startClass);
	      }
	      enterCancelledHook && enterCancelledHook(el);
	    } else {
	      afterEnterHook && afterEnterHook(el);
	    }
	    el._enterCb = null;
	  });

	  if (!vnode.data.show) {
	    // remove pending leave element on enter by injecting an insert hook
	    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', function () {
	      var parent = el.parentNode;
	      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
	      if (pendingNode &&
	          pendingNode.context === vnode.context &&
	          pendingNode.tag === vnode.tag &&
	          pendingNode.elm._leaveCb) {
	        pendingNode.elm._leaveCb();
	      }
	      enterHook && enterHook(el, cb);
	    }, 'transition-insert');
	  }

	  // start enter transition
	  beforeEnterHook && beforeEnterHook(el);
	  if (expectsCSS) {
	    addTransitionClass(el, startClass);
	    addTransitionClass(el, activeClass);
	    nextFrame(function () {
	      removeTransitionClass(el, startClass);
	      if (!cb.cancelled && !userWantsControl) {
	        whenTransitionEnds(el, type, cb);
	      }
	    });
	  }

	  if (vnode.data.show) {
	    toggleDisplay && toggleDisplay();
	    enterHook && enterHook(el, cb);
	  }

	  if (!expectsCSS && !userWantsControl) {
	    cb();
	  }
	}

	function leave (vnode, rm) {
	  var el = vnode.elm;

	  // call enter callback now
	  if (el._enterCb) {
	    el._enterCb.cancelled = true;
	    el._enterCb();
	  }

	  var data = resolveTransition(vnode.data.transition);
	  if (!data) {
	    return rm()
	  }

	  /* istanbul ignore if */
	  if (el._leaveCb || el.nodeType !== 1) {
	    return
	  }

	  var css = data.css;
	  var type = data.type;
	  var leaveClass = data.leaveClass;
	  var leaveActiveClass = data.leaveActiveClass;
	  var beforeLeave = data.beforeLeave;
	  var leave = data.leave;
	  var afterLeave = data.afterLeave;
	  var leaveCancelled = data.leaveCancelled;
	  var delayLeave = data.delayLeave;

	  var expectsCSS = css !== false && !isIE9;
	  var userWantsControl =
	    leave &&
	    // leave hook may be a bound method which exposes
	    // the length of original fn as _length
	    (leave._length || leave.length) > 1;

	  var cb = el._leaveCb = once(function () {
	    if (el.parentNode && el.parentNode._pending) {
	      el.parentNode._pending[vnode.key] = null;
	    }
	    if (expectsCSS) {
	      removeTransitionClass(el, leaveActiveClass);
	    }
	    if (cb.cancelled) {
	      if (expectsCSS) {
	        removeTransitionClass(el, leaveClass);
	      }
	      leaveCancelled && leaveCancelled(el);
	    } else {
	      rm();
	      afterLeave && afterLeave(el);
	    }
	    el._leaveCb = null;
	  });

	  if (delayLeave) {
	    delayLeave(performLeave);
	  } else {
	    performLeave();
	  }

	  function performLeave () {
	    // the delayed leave may have already been cancelled
	    if (cb.cancelled) {
	      return
	    }
	    // record leaving element
	    if (!vnode.data.show) {
	      (el.parentNode._pending || (el.parentNode._pending = {}))[vnode.key] = vnode;
	    }
	    beforeLeave && beforeLeave(el);
	    if (expectsCSS) {
	      addTransitionClass(el, leaveClass);
	      addTransitionClass(el, leaveActiveClass);
	      nextFrame(function () {
	        removeTransitionClass(el, leaveClass);
	        if (!cb.cancelled && !userWantsControl) {
	          whenTransitionEnds(el, type, cb);
	        }
	      });
	    }
	    leave && leave(el, cb);
	    if (!expectsCSS && !userWantsControl) {
	      cb();
	    }
	  }
	}

	function resolveTransition (def$$1) {
	  if (!def$$1) {
	    return
	  }
	  /* istanbul ignore else */
	  if (typeof def$$1 === 'object') {
	    var res = {};
	    if (def$$1.css !== false) {
	      extend(res, autoCssTransition(def$$1.name || 'v'));
	    }
	    extend(res, def$$1);
	    return res
	  } else if (typeof def$$1 === 'string') {
	    return autoCssTransition(def$$1)
	  }
	}

	var autoCssTransition = cached(function (name) {
	  return {
	    enterClass: (name + "-enter"),
	    leaveClass: (name + "-leave"),
	    appearClass: (name + "-enter"),
	    enterActiveClass: (name + "-enter-active"),
	    leaveActiveClass: (name + "-leave-active"),
	    appearActiveClass: (name + "-enter-active")
	  }
	});

	function once (fn) {
	  var called = false;
	  return function () {
	    if (!called) {
	      called = true;
	      fn();
	    }
	  }
	}

	function _enter (_, vnode) {
	  if (!vnode.data.show) {
	    enter(vnode);
	  }
	}

	var transition = inBrowser ? {
	  create: _enter,
	  activate: _enter,
	  remove: function remove (vnode, rm) {
	    /* istanbul ignore else */
	    if (!vnode.data.show) {
	      leave(vnode, rm);
	    } else {
	      rm();
	    }
	  }
	} : {};

	var platformModules = [
	  attrs,
	  klass,
	  events,
	  domProps,
	  style,
	  transition
	];

	/*  */

	// the directive module should be applied last, after all
	// built-in modules have been applied.
	var modules = platformModules.concat(baseModules);

	var patch$1 = createPatchFunction({ nodeOps: nodeOps, modules: modules });

	/**
	 * Not type checking this file because flow doesn't like attaching
	 * properties to Elements.
	 */

	var modelableTagRE = /^input|select|textarea|vue-component-[0-9]+(-[0-9a-zA-Z_-]*)?$/;

	/* istanbul ignore if */
	if (isIE9) {
	  // http://www.matts411.com/post/internet-explorer-9-oninput/
	  document.addEventListener('selectionchange', function () {
	    var el = document.activeElement;
	    if (el && el.vmodel) {
	      trigger(el, 'input');
	    }
	  });
	}

	var model = {
	  inserted: function inserted (el, binding, vnode) {
	    {
	      if (!modelableTagRE.test(vnode.tag)) {
	        warn(
	          "v-model is not supported on element type: <" + (vnode.tag) + ">. " +
	          'If you are working with contenteditable, it\'s recommended to ' +
	          'wrap a library dedicated for that purpose inside a custom component.',
	          vnode.context
	        );
	      }
	    }
	    if (vnode.tag === 'select') {
	      var cb = function () {
	        setSelected(el, binding, vnode.context);
	      };
	      cb();
	      /* istanbul ignore if */
	      if (isIE || isEdge) {
	        setTimeout(cb, 0);
	      }
	    } else if (vnode.tag === 'textarea' || el.type === 'text') {
	      el._vModifiers = binding.modifiers;
	      if (!binding.modifiers.lazy) {
	        if (!isAndroid) {
	          el.addEventListener('compositionstart', onCompositionStart);
	          el.addEventListener('compositionend', onCompositionEnd);
	        }
	        /* istanbul ignore if */
	        if (isIE9) {
	          el.vmodel = true;
	        }
	      }
	    }
	  },
	  componentUpdated: function componentUpdated (el, binding, vnode) {
	    if (vnode.tag === 'select') {
	      setSelected(el, binding, vnode.context);
	      // in case the options rendered by v-for have changed,
	      // it's possible that the value is out-of-sync with the rendered options.
	      // detect such cases and filter out values that no longer has a matching
	      // option in the DOM.
	      var needReset = el.multiple
	        ? binding.value.some(function (v) { return hasNoMatchingOption(v, el.options); })
	        : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, el.options);
	      if (needReset) {
	        trigger(el, 'change');
	      }
	    }
	  }
	};

	function setSelected (el, binding, vm) {
	  var value = binding.value;
	  var isMultiple = el.multiple;
	  if (isMultiple && !Array.isArray(value)) {
	    "development" !== 'production' && warn(
	      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
	      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
	      vm
	    );
	    return
	  }
	  var selected, option;
	  for (var i = 0, l = el.options.length; i < l; i++) {
	    option = el.options[i];
	    if (isMultiple) {
	      selected = looseIndexOf(value, getValue(option)) > -1;
	      if (option.selected !== selected) {
	        option.selected = selected;
	      }
	    } else {
	      if (looseEqual(getValue(option), value)) {
	        if (el.selectedIndex !== i) {
	          el.selectedIndex = i;
	        }
	        return
	      }
	    }
	  }
	  if (!isMultiple) {
	    el.selectedIndex = -1;
	  }
	}

	function hasNoMatchingOption (value, options) {
	  for (var i = 0, l = options.length; i < l; i++) {
	    if (looseEqual(getValue(options[i]), value)) {
	      return false
	    }
	  }
	  return true
	}

	function getValue (option) {
	  return '_value' in option
	    ? option._value
	    : option.value
	}

	function onCompositionStart (e) {
	  e.target.composing = true;
	}

	function onCompositionEnd (e) {
	  e.target.composing = false;
	  trigger(e.target, 'input');
	}

	function trigger (el, type) {
	  var e = document.createEvent('HTMLEvents');
	  e.initEvent(type, true, true);
	  el.dispatchEvent(e);
	}

	/*  */

	// recursively search for possible transition defined inside the component root
	function locateNode (vnode) {
	  return vnode.child && (!vnode.data || !vnode.data.transition)
	    ? locateNode(vnode.child._vnode)
	    : vnode
	}

	var show = {
	  bind: function bind (el, ref, vnode) {
	    var value = ref.value;

	    vnode = locateNode(vnode);
	    var transition = vnode.data && vnode.data.transition;
	    var originalDisplay = el.__vOriginalDisplay =
	      el.style.display === 'none' ? '' : el.style.display;
	    if (value && transition && !isIE9) {
	      vnode.data.show = true;
	      enter(vnode, function () {
	        el.style.display = originalDisplay;
	      });
	    } else {
	      el.style.display = value ? originalDisplay : 'none';
	    }
	  },
	  update: function update (el, ref, vnode) {
	    var value = ref.value;
	    var oldValue = ref.oldValue;

	    /* istanbul ignore if */
	    if (value === oldValue) { return }
	    vnode = locateNode(vnode);
	    var transition = vnode.data && vnode.data.transition;
	    if (transition && !isIE9) {
	      vnode.data.show = true;
	      if (value) {
	        enter(vnode, function () {
	          el.style.display = el.__vOriginalDisplay;
	        });
	      } else {
	        leave(vnode, function () {
	          el.style.display = 'none';
	        });
	      }
	    } else {
	      el.style.display = value ? el.__vOriginalDisplay : 'none';
	    }
	  }
	};

	var platformDirectives = {
	  model: model,
	  show: show
	};

	/*  */

	// Provides transition support for a single element/component.
	// supports transition mode (out-in / in-out)

	var transitionProps = {
	  name: String,
	  appear: Boolean,
	  css: Boolean,
	  mode: String,
	  type: String,
	  enterClass: String,
	  leaveClass: String,
	  enterActiveClass: String,
	  leaveActiveClass: String,
	  appearClass: String,
	  appearActiveClass: String
	};

	// in case the child is also an abstract component, e.g. <keep-alive>
	// we want to recursively retrieve the real component to be rendered
	function getRealChild (vnode) {
	  var compOptions = vnode && vnode.componentOptions;
	  if (compOptions && compOptions.Ctor.options.abstract) {
	    return getRealChild(getFirstComponentChild(compOptions.children))
	  } else {
	    return vnode
	  }
	}

	function extractTransitionData (comp) {
	  var data = {};
	  var options = comp.$options;
	  // props
	  for (var key in options.propsData) {
	    data[key] = comp[key];
	  }
	  // events.
	  // extract listeners and pass them directly to the transition methods
	  var listeners = options._parentListeners;
	  for (var key$1 in listeners) {
	    data[camelize(key$1)] = listeners[key$1].fn;
	  }
	  return data
	}

	function placeholder (h, rawChild) {
	  return /\d-keep-alive$/.test(rawChild.tag)
	    ? h('keep-alive')
	    : null
	}

	function hasParentTransition (vnode) {
	  while ((vnode = vnode.parent)) {
	    if (vnode.data.transition) {
	      return true
	    }
	  }
	}

	var Transition = {
	  name: 'transition',
	  props: transitionProps,
	  abstract: true,
	  render: function render (h) {
	    var this$1 = this;

	    var children = this.$slots.default;
	    if (!children) {
	      return
	    }

	    // filter out text nodes (possible whitespaces)
	    children = children.filter(function (c) { return c.tag; });
	    /* istanbul ignore if */
	    if (!children.length) {
	      return
	    }

	    // warn multiple elements
	    if ("development" !== 'production' && children.length > 1) {
	      warn(
	        '<transition> can only be used on a single element. Use ' +
	        '<transition-group> for lists.',
	        this.$parent
	      );
	    }

	    var mode = this.mode;

	    // warn invalid mode
	    if ("development" !== 'production' &&
	        mode && mode !== 'in-out' && mode !== 'out-in') {
	      warn(
	        'invalid <transition> mode: ' + mode,
	        this.$parent
	      );
	    }

	    var rawChild = children[0];

	    // if this is a component root node and the component's
	    // parent container node also has transition, skip.
	    if (hasParentTransition(this.$vnode)) {
	      return rawChild
	    }

	    // apply transition data to child
	    // use getRealChild() to ignore abstract components e.g. keep-alive
	    var child = getRealChild(rawChild);
	    /* istanbul ignore if */
	    if (!child) {
	      return rawChild
	    }

	    if (this._leaving) {
	      return placeholder(h, rawChild)
	    }

	    var key = child.key = child.key == null || child.isStatic
	      ? ("__v" + (child.tag + this._uid) + "__")
	      : child.key;
	    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
	    var oldRawChild = this._vnode;
	    var oldChild = getRealChild(oldRawChild);

	    // mark v-show
	    // so that the transition module can hand over the control to the directive
	    if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
	      child.data.show = true;
	    }

	    if (oldChild && oldChild.data && oldChild.key !== key) {
	      // replace old child transition data with fresh one
	      // important for dynamic transitions!
	      var oldData = oldChild.data.transition = extend({}, data);

	      // handle transition mode
	      if (mode === 'out-in') {
	        // return placeholder node and queue update when leave finishes
	        this._leaving = true;
	        mergeVNodeHook(oldData, 'afterLeave', function () {
	          this$1._leaving = false;
	          this$1.$forceUpdate();
	        }, key);
	        return placeholder(h, rawChild)
	      } else if (mode === 'in-out') {
	        var delayedLeave;
	        var performLeave = function () { delayedLeave(); };
	        mergeVNodeHook(data, 'afterEnter', performLeave, key);
	        mergeVNodeHook(data, 'enterCancelled', performLeave, key);
	        mergeVNodeHook(oldData, 'delayLeave', function (leave) {
	          delayedLeave = leave;
	        }, key);
	      }
	    }

	    return rawChild
	  }
	};

	/*  */

	// Provides transition support for list items.
	// supports move transitions using the FLIP technique.

	// Because the vdom's children update algorithm is "unstable" - i.e.
	// it doesn't guarantee the relative positioning of removed elements,
	// we force transition-group to update its children into two passes:
	// in the first pass, we remove all nodes that need to be removed,
	// triggering their leaving transition; in the second pass, we insert/move
	// into the final disired state. This way in the second pass removed
	// nodes will remain where they should be.

	var props = extend({
	  tag: String,
	  moveClass: String
	}, transitionProps);

	delete props.mode;

	var TransitionGroup = {
	  props: props,

	  render: function render (h) {
	    var tag = this.tag || this.$vnode.data.tag || 'span';
	    var map = Object.create(null);
	    var prevChildren = this.prevChildren = this.children;
	    var rawChildren = this.$slots.default || [];
	    var children = this.children = [];
	    var transitionData = extractTransitionData(this);

	    for (var i = 0; i < rawChildren.length; i++) {
	      var c = rawChildren[i];
	      if (c.tag) {
	        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
	          children.push(c);
	          map[c.key] = c
	          ;(c.data || (c.data = {})).transition = transitionData;
	        } else {
	          var opts = c.componentOptions;
	          var name = opts
	            ? (opts.Ctor.options.name || opts.tag)
	            : c.tag;
	          warn(("<transition-group> children must be keyed: <" + name + ">"));
	        }
	      }
	    }

	    if (prevChildren) {
	      var kept = [];
	      var removed = [];
	      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
	        var c$1 = prevChildren[i$1];
	        c$1.data.transition = transitionData;
	        c$1.data.pos = c$1.elm.getBoundingClientRect();
	        if (map[c$1.key]) {
	          kept.push(c$1);
	        } else {
	          removed.push(c$1);
	        }
	      }
	      this.kept = h(tag, null, kept);
	      this.removed = removed;
	    }

	    return h(tag, null, children)
	  },

	  beforeUpdate: function beforeUpdate () {
	    // force removing pass
	    this.__patch__(
	      this._vnode,
	      this.kept,
	      false, // hydrating
	      true // removeOnly (!important, avoids unnecessary moves)
	    );
	    this._vnode = this.kept;
	  },

	  updated: function updated () {
	    var children = this.prevChildren;
	    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
	    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
	      return
	    }

	    // we divide the work into three loops to avoid mixing DOM reads and writes
	    // in each iteration - which helps prevent layout thrashing.
	    children.forEach(callPendingCbs);
	    children.forEach(recordPosition);
	    children.forEach(applyTranslation);

	    // force reflow to put everything in position
	    var f = document.body.offsetHeight; // eslint-disable-line

	    children.forEach(function (c) {
	      if (c.data.moved) {
	        var el = c.elm;
	        var s = el.style;
	        addTransitionClass(el, moveClass);
	        s.transform = s.WebkitTransform = s.transitionDuration = '';
	        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
	          if (!e || /transform$/.test(e.propertyName)) {
	            el.removeEventListener(transitionEndEvent, cb);
	            el._moveCb = null;
	            removeTransitionClass(el, moveClass);
	          }
	        });
	      }
	    });
	  },

	  methods: {
	    hasMove: function hasMove (el, moveClass) {
	      /* istanbul ignore if */
	      if (!hasTransition) {
	        return false
	      }
	      if (this._hasMove != null) {
	        return this._hasMove
	      }
	      addTransitionClass(el, moveClass);
	      var info = getTransitionInfo(el);
	      removeTransitionClass(el, moveClass);
	      return (this._hasMove = info.hasTransform)
	    }
	  }
	};

	function callPendingCbs (c) {
	  /* istanbul ignore if */
	  if (c.elm._moveCb) {
	    c.elm._moveCb();
	  }
	  /* istanbul ignore if */
	  if (c.elm._enterCb) {
	    c.elm._enterCb();
	  }
	}

	function recordPosition (c) {
	  c.data.newPos = c.elm.getBoundingClientRect();
	}

	function applyTranslation (c) {
	  var oldPos = c.data.pos;
	  var newPos = c.data.newPos;
	  var dx = oldPos.left - newPos.left;
	  var dy = oldPos.top - newPos.top;
	  if (dx || dy) {
	    c.data.moved = true;
	    var s = c.elm.style;
	    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
	    s.transitionDuration = '0s';
	  }
	}

	var platformComponents = {
	  Transition: Transition,
	  TransitionGroup: TransitionGroup
	};

	/*  */

	// install platform specific utils
	Vue$3.config.isUnknownElement = isUnknownElement;
	Vue$3.config.isReservedTag = isReservedTag;
	Vue$3.config.getTagNamespace = getTagNamespace;
	Vue$3.config.mustUseProp = mustUseProp;

	// install platform runtime directives & components
	extend(Vue$3.options.directives, platformDirectives);
	extend(Vue$3.options.components, platformComponents);

	// install platform patch function
	Vue$3.prototype.__patch__ = inBrowser ? patch$1 : noop;

	// wrap mount
	Vue$3.prototype.$mount = function (
	  el,
	  hydrating
	) {
	  el = el && inBrowser ? query(el) : undefined;
	  return this._mount(el, hydrating)
	};

	// devtools global hook
	/* istanbul ignore next */
	setTimeout(function () {
	  if (config.devtools) {
	    if (devtools) {
	      devtools.emit('init', Vue$3);
	    } else if (
	      "development" !== 'production' &&
	      inBrowser && !isEdge && /Chrome\/\d+/.test(window.navigator.userAgent)
	    ) {
	      console.log(
	        'Download the Vue Devtools for a better development experience:\n' +
	        'https://github.com/vuejs/vue-devtools'
	      );
	    }
	  }
	}, 0);

	/*  */

	// check whether current browser encodes a char inside attribute values
	function shouldDecode (content, encoded) {
	  var div = document.createElement('div');
	  div.innerHTML = "<div a=\"" + content + "\">";
	  return div.innerHTML.indexOf(encoded) > 0
	}

	// #3663
	// IE encodes newlines inside attribute values while other browsers don't
	var shouldDecodeNewlines = inBrowser ? shouldDecode('\n', '&#10;') : false;

	/*  */

	var decoder;

	function decode (html) {
	  decoder = decoder || document.createElement('div');
	  decoder.innerHTML = html;
	  return decoder.textContent
	}

	/*  */

	var isUnaryTag = makeMap(
	  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
	  'link,meta,param,source,track,wbr',
	  true
	);

	// Elements that you can, intentionally, leave open
	// (and which close themselves)
	var canBeLeftOpenTag = makeMap(
	  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source',
	  true
	);

	// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
	// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
	var isNonPhrasingTag = makeMap(
	  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
	  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
	  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
	  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
	  'title,tr,track',
	  true
	);

	/**
	 * Not type-checking this file because it's mostly vendor code.
	 */

	/*!
	 * HTML Parser By John Resig (ejohn.org)
	 * Modified by Juriy "kangax" Zaytsev
	 * Original code by Erik Arvidsson, Mozilla Public License
	 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
	 */

	// Regular Expressions for parsing tags and attributes
	var singleAttrIdentifier = /([^\s"'<>/=]+)/;
	var singleAttrAssign = /(?:=)/;
	var singleAttrValues = [
	  // attr value double quotes
	  /"([^"]*)"+/.source,
	  // attr value, single quotes
	  /'([^']*)'+/.source,
	  // attr value, no quotes
	  /([^\s"'=<>`]+)/.source
	];
	var attribute = new RegExp(
	  '^\\s*' + singleAttrIdentifier.source +
	  '(?:\\s*(' + singleAttrAssign.source + ')' +
	  '\\s*(?:' + singleAttrValues.join('|') + '))?'
	);

	// could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
	// but for Vue templates we can enforce a simple charset
	var ncname = '[a-zA-Z_][\\w\\-\\.]*';
	var qnameCapture = '((?:' + ncname + '\\:)?' + ncname + ')';
	var startTagOpen = new RegExp('^<' + qnameCapture);
	var startTagClose = /^\s*(\/?)>/;
	var endTag = new RegExp('^<\\/' + qnameCapture + '[^>]*>');
	var doctype = /^<!DOCTYPE [^>]+>/i;
	var comment = /^<!--/;
	var conditionalComment = /^<!\[/;

	var IS_REGEX_CAPTURING_BROKEN = false;
	'x'.replace(/x(.)?/g, function (m, g) {
	  IS_REGEX_CAPTURING_BROKEN = g === '';
	});

	// Special Elements (can contain anything)
	var isScriptOrStyle = makeMap('script,style', true);
	var hasLang = function (attr) { return attr.name === 'lang' && attr.value !== 'html'; };
	var isSpecialTag = function (tag, isSFC, stack) {
	  if (isScriptOrStyle(tag)) {
	    return true
	  }
	  if (isSFC && stack.length === 1) {
	    // top-level template that has no pre-processor
	    if (tag === 'template' && !stack[0].attrs.some(hasLang)) {
	      return false
	    } else {
	      return true
	    }
	  }
	  return false
	};

	var reCache = {};

	var ltRE = /&lt;/g;
	var gtRE = /&gt;/g;
	var nlRE = /&#10;/g;
	var ampRE = /&amp;/g;
	var quoteRE = /&quot;/g;

	function decodeAttr (value, shouldDecodeNewlines) {
	  if (shouldDecodeNewlines) {
	    value = value.replace(nlRE, '\n');
	  }
	  return value
	    .replace(ltRE, '<')
	    .replace(gtRE, '>')
	    .replace(ampRE, '&')
	    .replace(quoteRE, '"')
	}

	function parseHTML (html, options) {
	  var stack = [];
	  var expectHTML = options.expectHTML;
	  var isUnaryTag$$1 = options.isUnaryTag || no;
	  var index = 0;
	  var last, lastTag;
	  while (html) {
	    last = html;
	    // Make sure we're not in a script or style element
	    if (!lastTag || !isSpecialTag(lastTag, options.sfc, stack)) {
	      var textEnd = html.indexOf('<');
	      if (textEnd === 0) {
	        // Comment:
	        if (comment.test(html)) {
	          var commentEnd = html.indexOf('-->');

	          if (commentEnd >= 0) {
	            advance(commentEnd + 3);
	            continue
	          }
	        }

	        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
	        if (conditionalComment.test(html)) {
	          var conditionalEnd = html.indexOf(']>');

	          if (conditionalEnd >= 0) {
	            advance(conditionalEnd + 2);
	            continue
	          }
	        }

	        // Doctype:
	        var doctypeMatch = html.match(doctype);
	        if (doctypeMatch) {
	          advance(doctypeMatch[0].length);
	          continue
	        }

	        // End tag:
	        var endTagMatch = html.match(endTag);
	        if (endTagMatch) {
	          var curIndex = index;
	          advance(endTagMatch[0].length);
	          parseEndTag(endTagMatch[0], endTagMatch[1], curIndex, index);
	          continue
	        }

	        // Start tag:
	        var startTagMatch = parseStartTag();
	        if (startTagMatch) {
	          handleStartTag(startTagMatch);
	          continue
	        }
	      }

	      var text = (void 0), rest$1 = (void 0), next = (void 0);
	      if (textEnd > 0) {
	        rest$1 = html.slice(textEnd);
	        while (
	          !endTag.test(rest$1) &&
	          !startTagOpen.test(rest$1) &&
	          !comment.test(rest$1) &&
	          !conditionalComment.test(rest$1)
	        ) {
	          // < in plain text, be forgiving and treat it as text
	          next = rest$1.indexOf('<', 1);
	          if (next < 0) { break }
	          textEnd += next;
	          rest$1 = html.slice(textEnd);
	        }
	        text = html.substring(0, textEnd);
	        advance(textEnd);
	      }

	      if (textEnd < 0) {
	        text = html;
	        html = '';
	      }

	      if (options.chars && text) {
	        options.chars(text);
	      }
	    } else {
	      var stackedTag = lastTag.toLowerCase();
	      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
	      var endTagLength = 0;
	      var rest = html.replace(reStackedTag, function (all, text, endTag) {
	        endTagLength = endTag.length;
	        if (stackedTag !== 'script' && stackedTag !== 'style' && stackedTag !== 'noscript') {
	          text = text
	            .replace(/<!--([\s\S]*?)-->/g, '$1')
	            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
	        }
	        if (options.chars) {
	          options.chars(text);
	        }
	        return ''
	      });
	      index += html.length - rest.length;
	      html = rest;
	      parseEndTag('</' + stackedTag + '>', stackedTag, index - endTagLength, index);
	    }

	    if (html === last && options.chars) {
	      options.chars(html);
	      break
	    }
	  }

	  // Clean up any remaining tags
	  parseEndTag();

	  function advance (n) {
	    index += n;
	    html = html.substring(n);
	  }

	  function parseStartTag () {
	    var start = html.match(startTagOpen);
	    if (start) {
	      var match = {
	        tagName: start[1],
	        attrs: [],
	        start: index
	      };
	      advance(start[0].length);
	      var end, attr;
	      while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
	        advance(attr[0].length);
	        match.attrs.push(attr);
	      }
	      if (end) {
	        match.unarySlash = end[1];
	        advance(end[0].length);
	        match.end = index;
	        return match
	      }
	    }
	  }

	  function handleStartTag (match) {
	    var tagName = match.tagName;
	    var unarySlash = match.unarySlash;

	    if (expectHTML) {
	      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
	        parseEndTag('', lastTag);
	      }
	      if (canBeLeftOpenTag(tagName) && lastTag === tagName) {
	        parseEndTag('', tagName);
	      }
	    }

	    var unary = isUnaryTag$$1(tagName) || tagName === 'html' && lastTag === 'head' || !!unarySlash;

	    var l = match.attrs.length;
	    var attrs = new Array(l);
	    for (var i = 0; i < l; i++) {
	      var args = match.attrs[i];
	      // hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
	      if (IS_REGEX_CAPTURING_BROKEN && args[0].indexOf('""') === -1) {
	        if (args[3] === '') { delete args[3]; }
	        if (args[4] === '') { delete args[4]; }
	        if (args[5] === '') { delete args[5]; }
	      }
	      var value = args[3] || args[4] || args[5] || '';
	      attrs[i] = {
	        name: args[1],
	        value: decodeAttr(
	          value,
	          options.shouldDecodeNewlines
	        )
	      };
	    }

	    if (!unary) {
	      stack.push({ tag: tagName, attrs: attrs });
	      lastTag = tagName;
	      unarySlash = '';
	    }

	    if (options.start) {
	      options.start(tagName, attrs, unary, match.start, match.end);
	    }
	  }

	  function parseEndTag (tag, tagName, start, end) {
	    var pos;
	    if (start == null) { start = index; }
	    if (end == null) { end = index; }

	    // Find the closest opened tag of the same type
	    if (tagName) {
	      var needle = tagName.toLowerCase();
	      for (pos = stack.length - 1; pos >= 0; pos--) {
	        if (stack[pos].tag.toLowerCase() === needle) {
	          break
	        }
	      }
	    } else {
	      // If no tag name is provided, clean shop
	      pos = 0;
	    }

	    if (pos >= 0) {
	      // Close all the open elements, up the stack
	      for (var i = stack.length - 1; i >= pos; i--) {
	        if (options.end) {
	          options.end(stack[i].tag, start, end);
	        }
	      }

	      // Remove the open elements from the stack
	      stack.length = pos;
	      lastTag = pos && stack[pos - 1].tag;
	    } else if (tagName.toLowerCase() === 'br') {
	      if (options.start) {
	        options.start(tagName, [], true, start, end);
	      }
	    } else if (tagName.toLowerCase() === 'p') {
	      if (options.start) {
	        options.start(tagName, [], false, start, end);
	      }
	      if (options.end) {
	        options.end(tagName, start, end);
	      }
	    }
	  }
	}

	/*  */

	function parseFilters (exp) {
	  var inSingle = false;
	  var inDouble = false;
	  var inTemplateString = false;
	  var inRegex = false;
	  var curly = 0;
	  var square = 0;
	  var paren = 0;
	  var lastFilterIndex = 0;
	  var c, prev, i, expression, filters;

	  for (i = 0; i < exp.length; i++) {
	    prev = c;
	    c = exp.charCodeAt(i);
	    if (inSingle) {
	      if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
	    } else if (inDouble) {
	      if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
	    } else if (inTemplateString) {
	      if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
	    } else if (inRegex) {
	      if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
	    } else if (
	      c === 0x7C && // pipe
	      exp.charCodeAt(i + 1) !== 0x7C &&
	      exp.charCodeAt(i - 1) !== 0x7C &&
	      !curly && !square && !paren
	    ) {
	      if (expression === undefined) {
	        // first filter, end of expression
	        lastFilterIndex = i + 1;
	        expression = exp.slice(0, i).trim();
	      } else {
	        pushFilter();
	      }
	    } else {
	      switch (c) {
	        case 0x22: inDouble = true; break         // "
	        case 0x27: inSingle = true; break         // '
	        case 0x60: inTemplateString = true; break // `
	        case 0x28: paren++; break                 // (
	        case 0x29: paren--; break                 // )
	        case 0x5B: square++; break                // [
	        case 0x5D: square--; break                // ]
	        case 0x7B: curly++; break                 // {
	        case 0x7D: curly--; break                 // }
	      }
	      if (c === 0x2f) { // /
	        var j = i - 1;
	        var p = (void 0);
	        // find first non-whitespace prev char
	        for (; j >= 0; j--) {
	          p = exp.charAt(j);
	          if (p !== ' ') { break }
	        }
	        if (!p || !/[\w$]/.test(p)) {
	          inRegex = true;
	        }
	      }
	    }
	  }

	  if (expression === undefined) {
	    expression = exp.slice(0, i).trim();
	  } else if (lastFilterIndex !== 0) {
	    pushFilter();
	  }

	  function pushFilter () {
	    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
	    lastFilterIndex = i + 1;
	  }

	  if (filters) {
	    for (i = 0; i < filters.length; i++) {
	      expression = wrapFilter(expression, filters[i]);
	    }
	  }

	  return expression
	}

	function wrapFilter (exp, filter) {
	  var i = filter.indexOf('(');
	  if (i < 0) {
	    // _f: resolveFilter
	    return ("_f(\"" + filter + "\")(" + exp + ")")
	  } else {
	    var name = filter.slice(0, i);
	    var args = filter.slice(i + 1);
	    return ("_f(\"" + name + "\")(" + exp + "," + args)
	  }
	}

	/*  */

	var defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g;
	var regexEscapeRE = /[-.*+?^${}()|[\]/\\]/g;

	var buildRegex = cached(function (delimiters) {
	  var open = delimiters[0].replace(regexEscapeRE, '\\$&');
	  var close = delimiters[1].replace(regexEscapeRE, '\\$&');
	  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
	});

	function parseText (
	  text,
	  delimiters
	) {
	  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
	  if (!tagRE.test(text)) {
	    return
	  }
	  var tokens = [];
	  var lastIndex = tagRE.lastIndex = 0;
	  var match, index;
	  while ((match = tagRE.exec(text))) {
	    index = match.index;
	    // push text token
	    if (index > lastIndex) {
	      tokens.push(JSON.stringify(text.slice(lastIndex, index)));
	    }
	    // tag token
	    var exp = parseFilters(match[1].trim());
	    tokens.push(("_s(" + exp + ")"));
	    lastIndex = index + match[0].length;
	  }
	  if (lastIndex < text.length) {
	    tokens.push(JSON.stringify(text.slice(lastIndex)));
	  }
	  return tokens.join('+')
	}

	/*  */

	function baseWarn (msg) {
	  console.error(("[Vue parser]: " + msg));
	}

	function pluckModuleFunction (
	  modules,
	  key
	) {
	  return modules
	    ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
	    : []
	}

	function addProp (el, name, value) {
	  (el.props || (el.props = [])).push({ name: name, value: value });
	}

	function addAttr (el, name, value) {
	  (el.attrs || (el.attrs = [])).push({ name: name, value: value });
	}

	function addDirective (
	  el,
	  name,
	  rawName,
	  value,
	  arg,
	  modifiers
	) {
	  (el.directives || (el.directives = [])).push({ name: name, rawName: rawName, value: value, arg: arg, modifiers: modifiers });
	}

	function addHandler (
	  el,
	  name,
	  value,
	  modifiers,
	  important
	) {
	  // check capture modifier
	  if (modifiers && modifiers.capture) {
	    delete modifiers.capture;
	    name = '!' + name; // mark the event as captured
	  }
	  if (modifiers && modifiers.once) {
	    delete modifiers.once;
	    name = '~' + name; // mark the event as once
	  }
	  var events;
	  if (modifiers && modifiers.native) {
	    delete modifiers.native;
	    events = el.nativeEvents || (el.nativeEvents = {});
	  } else {
	    events = el.events || (el.events = {});
	  }
	  var newHandler = { value: value, modifiers: modifiers };
	  var handlers = events[name];
	  /* istanbul ignore if */
	  if (Array.isArray(handlers)) {
	    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
	  } else if (handlers) {
	    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
	  } else {
	    events[name] = newHandler;
	  }
	}

	function getBindingAttr (
	  el,
	  name,
	  getStatic
	) {
	  var dynamicValue =
	    getAndRemoveAttr(el, ':' + name) ||
	    getAndRemoveAttr(el, 'v-bind:' + name);
	  if (dynamicValue != null) {
	    return parseFilters(dynamicValue)
	  } else if (getStatic !== false) {
	    var staticValue = getAndRemoveAttr(el, name);
	    if (staticValue != null) {
	      return JSON.stringify(staticValue)
	    }
	  }
	}

	function getAndRemoveAttr (el, name) {
	  var val;
	  if ((val = el.attrsMap[name]) != null) {
	    var list = el.attrsList;
	    for (var i = 0, l = list.length; i < l; i++) {
	      if (list[i].name === name) {
	        list.splice(i, 1);
	        break
	      }
	    }
	  }
	  return val
	}

	var len;
	var str;
	var chr;
	var index$1;
	var expressionPos;
	var expressionEndPos;

	/**
	 * parse directive model to do the array update transform. a[idx] = val => $$a.splice($$idx, 1, val)
	 *
	 * for loop possible cases:
	 *
	 * - test
	 * - test[idx]
	 * - test[test1[idx]]
	 * - test["a"][idx]
	 * - xxx.test[a[a].test1[idx]]
	 * - test.xxx.a["asa"][test1[idx]]
	 *
	 */

	function parseModel (val) {
	  str = val;
	  len = str.length;
	  index$1 = expressionPos = expressionEndPos = 0;

	  if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
	    return {
	      exp: val,
	      idx: null
	    }
	  }

	  while (!eof()) {
	    chr = next();
	    /* istanbul ignore if */
	    if (isStringStart(chr)) {
	      parseString(chr);
	    } else if (chr === 0x5B) {
	      parseBracket(chr);
	    }
	  }

	  return {
	    exp: val.substring(0, expressionPos),
	    idx: val.substring(expressionPos + 1, expressionEndPos)
	  }
	}

	function next () {
	  return str.charCodeAt(++index$1)
	}

	function eof () {
	  return index$1 >= len
	}

	function isStringStart (chr) {
	  return chr === 0x22 || chr === 0x27
	}

	function parseBracket (chr) {
	  var inBracket = 1;
	  expressionPos = index$1;
	  while (!eof()) {
	    chr = next();
	    if (isStringStart(chr)) {
	      parseString(chr);
	      continue
	    }
	    if (chr === 0x5B) { inBracket++; }
	    if (chr === 0x5D) { inBracket--; }
	    if (inBracket === 0) {
	      expressionEndPos = index$1;
	      break
	    }
	  }
	}

	function parseString (chr) {
	  var stringQuote = chr;
	  while (!eof()) {
	    chr = next();
	    if (chr === stringQuote) {
	      break
	    }
	  }
	}

	/*  */

	var dirRE = /^v-|^@|^:/;
	var forAliasRE = /(.*?)\s+(?:in|of)\s+(.*)/;
	var forIteratorRE = /\((\{[^}]*\}|[^,]*),([^,]*)(?:,([^,]*))?\)/;
	var bindRE = /^:|^v-bind:/;
	var onRE = /^@|^v-on:/;
	var argRE = /:(.*)$/;
	var modifierRE = /\.[^.]+/g;

	var decodeHTMLCached = cached(decode);

	// configurable state
	var warn$1;
	var platformGetTagNamespace;
	var platformMustUseProp;
	var platformIsPreTag;
	var preTransforms;
	var transforms;
	var postTransforms;
	var delimiters;

	/**
	 * Convert HTML string to AST.
	 */
	function parse (
	  template,
	  options
	) {
	  warn$1 = options.warn || baseWarn;
	  platformGetTagNamespace = options.getTagNamespace || no;
	  platformMustUseProp = options.mustUseProp || no;
	  platformIsPreTag = options.isPreTag || no;
	  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
	  transforms = pluckModuleFunction(options.modules, 'transformNode');
	  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');
	  delimiters = options.delimiters;
	  var stack = [];
	  var preserveWhitespace = options.preserveWhitespace !== false;
	  var root;
	  var currentParent;
	  var inVPre = false;
	  var inPre = false;
	  var warned = false;
	  parseHTML(template, {
	    expectHTML: options.expectHTML,
	    isUnaryTag: options.isUnaryTag,
	    shouldDecodeNewlines: options.shouldDecodeNewlines,
	    start: function start (tag, attrs, unary) {
	      // check namespace.
	      // inherit parent ns if there is one
	      var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

	      // handle IE svg bug
	      /* istanbul ignore if */
	      if (isIE && ns === 'svg') {
	        attrs = guardIESVGBug(attrs);
	      }

	      var element = {
	        type: 1,
	        tag: tag,
	        attrsList: attrs,
	        attrsMap: makeAttrsMap(attrs),
	        parent: currentParent,
	        children: []
	      };
	      if (ns) {
	        element.ns = ns;
	      }

	      if (isForbiddenTag(element) && !isServerRendering()) {
	        element.forbidden = true;
	        "development" !== 'production' && warn$1(
	          'Templates should only be responsible for mapping the state to the ' +
	          'UI. Avoid placing tags with side-effects in your templates, such as ' +
	          "<" + tag + ">."
	        );
	      }

	      // apply pre-transforms
	      for (var i = 0; i < preTransforms.length; i++) {
	        preTransforms[i](element, options);
	      }

	      if (!inVPre) {
	        processPre(element);
	        if (element.pre) {
	          inVPre = true;
	        }
	      }
	      if (platformIsPreTag(element.tag)) {
	        inPre = true;
	      }
	      if (inVPre) {
	        processRawAttrs(element);
	      } else {
	        processFor(element);
	        processIf(element);
	        processOnce(element);
	        processKey(element);

	        // determine whether this is a plain element after
	        // removing structural attributes
	        element.plain = !element.key && !attrs.length;

	        processRef(element);
	        processSlot(element);
	        processComponent(element);
	        for (var i$1 = 0; i$1 < transforms.length; i$1++) {
	          transforms[i$1](element, options);
	        }
	        processAttrs(element);
	      }

	      function checkRootConstraints (el) {
	        if ("development" !== 'production' && !warned) {
	          if (el.tag === 'slot' || el.tag === 'template') {
	            warned = true;
	            warn$1(
	              "Cannot use <" + (el.tag) + "> as component root element because it may " +
	              'contain multiple nodes:\n' + template
	            );
	          }
	          if (el.attrsMap.hasOwnProperty('v-for')) {
	            warned = true;
	            warn$1(
	              'Cannot use v-for on stateful component root element because ' +
	              'it renders multiple elements:\n' + template
	            );
	          }
	        }
	      }

	      // tree management
	      if (!root) {
	        root = element;
	        checkRootConstraints(root);
	      } else if (!stack.length) {
	        // allow root elements with v-if, v-else-if and v-else
	        if (root.if && (element.elseif || element.else)) {
	          checkRootConstraints(element);
	          addIfCondition(root, {
	            exp: element.elseif,
	            block: element
	          });
	        } else if ("development" !== 'production' && !warned) {
	          warned = true;
	          warn$1(
	            "Component template should contain exactly one root element:" +
	            "\n\n" + template + "\n\n" +
	            "If you are using v-if on multiple elements, " +
	            "use v-else-if to chain them instead."
	          );
	        }
	      }
	      if (currentParent && !element.forbidden) {
	        if (element.elseif || element.else) {
	          processIfConditions(element, currentParent);
	        } else if (element.slotScope) { // scoped slot
	          currentParent.plain = false;
	          var name = element.slotTarget || 'default';(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
	        } else {
	          currentParent.children.push(element);
	          element.parent = currentParent;
	        }
	      }
	      if (!unary) {
	        currentParent = element;
	        stack.push(element);
	      }
	      // apply post-transforms
	      for (var i$2 = 0; i$2 < postTransforms.length; i$2++) {
	        postTransforms[i$2](element, options);
	      }
	    },

	    end: function end () {
	      // remove trailing whitespace
	      var element = stack[stack.length - 1];
	      var lastNode = element.children[element.children.length - 1];
	      if (lastNode && lastNode.type === 3 && lastNode.text === ' ') {
	        element.children.pop();
	      }
	      // pop stack
	      stack.length -= 1;
	      currentParent = stack[stack.length - 1];
	      // check pre state
	      if (element.pre) {
	        inVPre = false;
	      }
	      if (platformIsPreTag(element.tag)) {
	        inPre = false;
	      }
	    },

	    chars: function chars (text) {
	      if (!currentParent) {
	        if ("development" !== 'production' && !warned && text === template) {
	          warned = true;
	          warn$1(
	            'Component template requires a root element, rather than just text:\n\n' + template
	          );
	        }
	        return
	      }
	      // IE textarea placeholder bug
	      /* istanbul ignore if */
	      if (isIE &&
	          currentParent.tag === 'textarea' &&
	          currentParent.attrsMap.placeholder === text) {
	        return
	      }
	      text = inPre || text.trim()
	        ? decodeHTMLCached(text)
	        // only preserve whitespace if its not right after a starting tag
	        : preserveWhitespace && currentParent.children.length ? ' ' : '';
	      if (text) {
	        var expression;
	        if (!inVPre && text !== ' ' && (expression = parseText(text, delimiters))) {
	          currentParent.children.push({
	            type: 2,
	            expression: expression,
	            text: text
	          });
	        } else {
	          currentParent.children.push({
	            type: 3,
	            text: text
	          });
	        }
	      }
	    }
	  });
	  return root
	}

	function processPre (el) {
	  if (getAndRemoveAttr(el, 'v-pre') != null) {
	    el.pre = true;
	  }
	}

	function processRawAttrs (el) {
	  var l = el.attrsList.length;
	  if (l) {
	    var attrs = el.attrs = new Array(l);
	    for (var i = 0; i < l; i++) {
	      attrs[i] = {
	        name: el.attrsList[i].name,
	        value: JSON.stringify(el.attrsList[i].value)
	      };
	    }
	  } else if (!el.pre) {
	    // non root node in pre blocks with no attributes
	    el.plain = true;
	  }
	}

	function processKey (el) {
	  var exp = getBindingAttr(el, 'key');
	  if (exp) {
	    if ("development" !== 'production' && el.tag === 'template') {
	      warn$1("<template> cannot be keyed. Place the key on real elements instead.");
	    }
	    el.key = exp;
	  }
	}

	function processRef (el) {
	  var ref = getBindingAttr(el, 'ref');
	  if (ref) {
	    el.ref = ref;
	    el.refInFor = checkInFor(el);
	  }
	}

	function processFor (el) {
	  var exp;
	  if ((exp = getAndRemoveAttr(el, 'v-for'))) {
	    var inMatch = exp.match(forAliasRE);
	    if (!inMatch) {
	      "development" !== 'production' && warn$1(
	        ("Invalid v-for expression: " + exp)
	      );
	      return
	    }
	    el.for = inMatch[2].trim();
	    var alias = inMatch[1].trim();
	    var iteratorMatch = alias.match(forIteratorRE);
	    if (iteratorMatch) {
	      el.alias = iteratorMatch[1].trim();
	      el.iterator1 = iteratorMatch[2].trim();
	      if (iteratorMatch[3]) {
	        el.iterator2 = iteratorMatch[3].trim();
	      }
	    } else {
	      el.alias = alias;
	    }
	  }
	}

	function processIf (el) {
	  var exp = getAndRemoveAttr(el, 'v-if');
	  if (exp) {
	    el.if = exp;
	    addIfCondition(el, {
	      exp: exp,
	      block: el
	    });
	  } else {
	    if (getAndRemoveAttr(el, 'v-else') != null) {
	      el.else = true;
	    }
	    var elseif = getAndRemoveAttr(el, 'v-else-if');
	    if (elseif) {
	      el.elseif = elseif;
	    }
	  }
	}

	function processIfConditions (el, parent) {
	  var prev = findPrevElement(parent.children);
	  if (prev && prev.if) {
	    addIfCondition(prev, {
	      exp: el.elseif,
	      block: el
	    });
	  } else {
	    warn$1(
	      "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
	      "used on element <" + (el.tag) + "> without corresponding v-if."
	    );
	  }
	}

	function addIfCondition (el, condition) {
	  if (!el.ifConditions) {
	    el.ifConditions = [];
	  }
	  el.ifConditions.push(condition);
	}

	function processOnce (el) {
	  var once = getAndRemoveAttr(el, 'v-once');
	  if (once != null) {
	    el.once = true;
	  }
	}

	function processSlot (el) {
	  if (el.tag === 'slot') {
	    el.slotName = getBindingAttr(el, 'name');
	    if ("development" !== 'production' && el.key) {
	      warn$1(
	        "`key` does not work on <slot> because slots are abstract outlets " +
	        "and can possibly expand into multiple elements. " +
	        "Use the key on a wrapping element instead."
	      );
	    }
	  } else {
	    var slotTarget = getBindingAttr(el, 'slot');
	    if (slotTarget) {
	      el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
	    }
	    if (el.tag === 'template') {
	      el.slotScope = getAndRemoveAttr(el, 'scope');
	    }
	  }
	}

	function processComponent (el) {
	  var binding;
	  if ((binding = getBindingAttr(el, 'is'))) {
	    el.component = binding;
	  }
	  if (getAndRemoveAttr(el, 'inline-template') != null) {
	    el.inlineTemplate = true;
	  }
	}

	function processAttrs (el) {
	  var list = el.attrsList;
	  var i, l, name, rawName, value, arg, modifiers, isProp;
	  for (i = 0, l = list.length; i < l; i++) {
	    name = rawName = list[i].name;
	    value = list[i].value;
	    if (dirRE.test(name)) {
	      // mark element as dynamic
	      el.hasBindings = true;
	      // modifiers
	      modifiers = parseModifiers(name);
	      if (modifiers) {
	        name = name.replace(modifierRE, '');
	      }
	      if (bindRE.test(name)) { // v-bind
	        name = name.replace(bindRE, '');
	        value = parseFilters(value);
	        isProp = false;
	        if (modifiers) {
	          if (modifiers.prop) {
	            isProp = true;
	            name = camelize(name);
	            if (name === 'innerHtml') { name = 'innerHTML'; }
	          }
	          if (modifiers.camel) {
	            name = camelize(name);
	          }
	        }
	        if (isProp || platformMustUseProp(el.tag, name)) {
	          addProp(el, name, value);
	        } else {
	          addAttr(el, name, value);
	        }
	      } else if (onRE.test(name)) { // v-on
	        name = name.replace(onRE, '');
	        addHandler(el, name, value, modifiers);
	      } else { // normal directives
	        name = name.replace(dirRE, '');
	        // parse arg
	        var argMatch = name.match(argRE);
	        if (argMatch && (arg = argMatch[1])) {
	          name = name.slice(0, -(arg.length + 1));
	        }
	        addDirective(el, name, rawName, value, arg, modifiers);
	        if ("development" !== 'production' && name === 'model') {
	          checkForAliasModel(el, value);
	        }
	      }
	    } else {
	      // literal attribute
	      {
	        var expression = parseText(value, delimiters);
	        if (expression) {
	          warn$1(
	            name + "=\"" + value + "\": " +
	            'Interpolation inside attributes has been removed. ' +
	            'Use v-bind or the colon shorthand instead. For example, ' +
	            'instead of <div id="{{ val }}">, use <div :id="val">.'
	          );
	        }
	      }
	      addAttr(el, name, JSON.stringify(value));
	    }
	  }
	}

	function checkInFor (el) {
	  var parent = el;
	  while (parent) {
	    if (parent.for !== undefined) {
	      return true
	    }
	    parent = parent.parent;
	  }
	  return false
	}

	function parseModifiers (name) {
	  var match = name.match(modifierRE);
	  if (match) {
	    var ret = {};
	    match.forEach(function (m) { ret[m.slice(1)] = true; });
	    return ret
	  }
	}

	function makeAttrsMap (attrs) {
	  var map = {};
	  for (var i = 0, l = attrs.length; i < l; i++) {
	    if ("development" !== 'production' && map[attrs[i].name] && !isIE) {
	      warn$1('duplicate attribute: ' + attrs[i].name);
	    }
	    map[attrs[i].name] = attrs[i].value;
	  }
	  return map
	}

	function findPrevElement (children) {
	  var i = children.length;
	  while (i--) {
	    if (children[i].tag) { return children[i] }
	  }
	}

	function isForbiddenTag (el) {
	  return (
	    el.tag === 'style' ||
	    (el.tag === 'script' && (
	      !el.attrsMap.type ||
	      el.attrsMap.type === 'text/javascript'
	    ))
	  )
	}

	var ieNSBug = /^xmlns:NS\d+/;
	var ieNSPrefix = /^NS\d+:/;

	/* istanbul ignore next */
	function guardIESVGBug (attrs) {
	  var res = [];
	  for (var i = 0; i < attrs.length; i++) {
	    var attr = attrs[i];
	    if (!ieNSBug.test(attr.name)) {
	      attr.name = attr.name.replace(ieNSPrefix, '');
	      res.push(attr);
	    }
	  }
	  return res
	}

	function checkForAliasModel (el, value) {
	  var _el = el;
	  while (_el) {
	    if (_el.for && _el.alias === value) {
	      warn$1(
	        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
	        "You are binding v-model directly to a v-for iteration alias. " +
	        "This will not be able to modify the v-for source array because " +
	        "writing to the alias is like modifying a function local variable. " +
	        "Consider using an array of objects and use v-model on an object property instead."
	      );
	    }
	    _el = _el.parent;
	  }
	}

	/*  */

	var isStaticKey;
	var isPlatformReservedTag;

	var genStaticKeysCached = cached(genStaticKeys$1);

	/**
	 * Goal of the optimizer: walk the generated template AST tree
	 * and detect sub-trees that are purely static, i.e. parts of
	 * the DOM that never needs to change.
	 *
	 * Once we detect these sub-trees, we can:
	 *
	 * 1. Hoist them into constants, so that we no longer need to
	 *    create fresh nodes for them on each re-render;
	 * 2. Completely skip them in the patching process.
	 */
	function optimize (root, options) {
	  if (!root) { return }
	  isStaticKey = genStaticKeysCached(options.staticKeys || '');
	  isPlatformReservedTag = options.isReservedTag || no;
	  // first pass: mark all non-static nodes.
	  markStatic(root);
	  // second pass: mark static roots.
	  markStaticRoots(root, false);
	}

	function genStaticKeys$1 (keys) {
	  return makeMap(
	    'type,tag,attrsList,attrsMap,plain,parent,children,attrs' +
	    (keys ? ',' + keys : '')
	  )
	}

	function markStatic (node) {
	  node.static = isStatic(node);
	  if (node.type === 1) {
	    // do not make component slot content static. this avoids
	    // 1. components not able to mutate slot nodes
	    // 2. static slot content fails for hot-reloading
	    if (
	      !isPlatformReservedTag(node.tag) &&
	      node.tag !== 'slot' &&
	      node.attrsMap['inline-template'] == null
	    ) {
	      return
	    }
	    for (var i = 0, l = node.children.length; i < l; i++) {
	      var child = node.children[i];
	      markStatic(child);
	      if (!child.static) {
	        node.static = false;
	      }
	    }
	  }
	}

	function markStaticRoots (node, isInFor) {
	  if (node.type === 1) {
	    if (node.static || node.once) {
	      node.staticInFor = isInFor;
	    }
	    // For a node to qualify as a static root, it should have children that
	    // are not just static text. Otherwise the cost of hoisting out will
	    // outweigh the benefits and it's better off to just always render it fresh.
	    if (node.static && node.children.length && !(
	      node.children.length === 1 &&
	      node.children[0].type === 3
	    )) {
	      node.staticRoot = true;
	      return
	    } else {
	      node.staticRoot = false;
	    }
	    if (node.children) {
	      for (var i = 0, l = node.children.length; i < l; i++) {
	        markStaticRoots(node.children[i], isInFor || !!node.for);
	      }
	    }
	    if (node.ifConditions) {
	      walkThroughConditionsBlocks(node.ifConditions, isInFor);
	    }
	  }
	}

	function walkThroughConditionsBlocks (conditionBlocks, isInFor) {
	  for (var i = 1, len = conditionBlocks.length; i < len; i++) {
	    markStaticRoots(conditionBlocks[i].block, isInFor);
	  }
	}

	function isStatic (node) {
	  if (node.type === 2) { // expression
	    return false
	  }
	  if (node.type === 3) { // text
	    return true
	  }
	  return !!(node.pre || (
	    !node.hasBindings && // no dynamic bindings
	    !node.if && !node.for && // not v-if or v-for or v-else
	    !isBuiltInTag(node.tag) && // not a built-in
	    isPlatformReservedTag(node.tag) && // not a component
	    !isDirectChildOfTemplateFor(node) &&
	    Object.keys(node).every(isStaticKey)
	  ))
	}

	function isDirectChildOfTemplateFor (node) {
	  while (node.parent) {
	    node = node.parent;
	    if (node.tag !== 'template') {
	      return false
	    }
	    if (node.for) {
	      return true
	    }
	  }
	  return false
	}

	/*  */

	var fnExpRE = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;
	var simplePathRE = /^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/;

	// keyCode aliases
	var keyCodes = {
	  esc: 27,
	  tab: 9,
	  enter: 13,
	  space: 32,
	  up: 38,
	  left: 37,
	  right: 39,
	  down: 40,
	  'delete': [8, 46]
	};

	var modifierCode = {
	  stop: '$event.stopPropagation();',
	  prevent: '$event.preventDefault();',
	  self: 'if($event.target !== $event.currentTarget)return;',
	  ctrl: 'if(!$event.ctrlKey)return;',
	  shift: 'if(!$event.shiftKey)return;',
	  alt: 'if(!$event.altKey)return;',
	  meta: 'if(!$event.metaKey)return;'
	};

	function genHandlers (events, native) {
	  var res = native ? 'nativeOn:{' : 'on:{';
	  for (var name in events) {
	    res += "\"" + name + "\":" + (genHandler(name, events[name])) + ",";
	  }
	  return res.slice(0, -1) + '}'
	}

	function genHandler (
	  name,
	  handler
	) {
	  if (!handler) {
	    return 'function(){}'
	  } else if (Array.isArray(handler)) {
	    return ("[" + (handler.map(function (handler) { return genHandler(name, handler); }).join(',')) + "]")
	  } else if (!handler.modifiers) {
	    return fnExpRE.test(handler.value) || simplePathRE.test(handler.value)
	      ? handler.value
	      : ("function($event){" + (handler.value) + "}")
	  } else {
	    var code = '';
	    var keys = [];
	    for (var key in handler.modifiers) {
	      if (modifierCode[key]) {
	        code += modifierCode[key];
	      } else {
	        keys.push(key);
	      }
	    }
	    if (keys.length) {
	      code = genKeyFilter(keys) + code;
	    }
	    var handlerCode = simplePathRE.test(handler.value)
	      ? handler.value + '($event)'
	      : handler.value;
	    return 'function($event){' + code + handlerCode + '}'
	  }
	}

	function genKeyFilter (keys) {
	  return ("if(" + (keys.map(genFilterCode).join('&&')) + ")return;")
	}

	function genFilterCode (key) {
	  var keyVal = parseInt(key, 10);
	  if (keyVal) {
	    return ("$event.keyCode!==" + keyVal)
	  }
	  var alias = keyCodes[key];
	  return ("_k($event.keyCode," + (JSON.stringify(key)) + (alias ? ',' + JSON.stringify(alias) : '') + ")")
	}

	/*  */

	function bind$2 (el, dir) {
	  el.wrapData = function (code) {
	    return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + (dir.modifiers && dir.modifiers.prop ? ',true' : '') + ")")
	  };
	}

	var baseDirectives = {
	  bind: bind$2,
	  cloak: noop
	};

	/*  */

	// configurable state
	var warn$2;
	var transforms$1;
	var dataGenFns;
	var platformDirectives$1;
	var staticRenderFns;
	var onceCount;
	var currentOptions;

	function generate (
	  ast,
	  options
	) {
	  // save previous staticRenderFns so generate calls can be nested
	  var prevStaticRenderFns = staticRenderFns;
	  var currentStaticRenderFns = staticRenderFns = [];
	  var prevOnceCount = onceCount;
	  onceCount = 0;
	  currentOptions = options;
	  warn$2 = options.warn || baseWarn;
	  transforms$1 = pluckModuleFunction(options.modules, 'transformCode');
	  dataGenFns = pluckModuleFunction(options.modules, 'genData');
	  platformDirectives$1 = options.directives || {};
	  var code = ast ? genElement(ast) : '_c("div")';
	  staticRenderFns = prevStaticRenderFns;
	  onceCount = prevOnceCount;
	  return {
	    render: ("with(this){return " + code + "}"),
	    staticRenderFns: currentStaticRenderFns
	  }
	}

	function genElement (el) {
	  if (el.staticRoot && !el.staticProcessed) {
	    return genStatic(el)
	  } else if (el.once && !el.onceProcessed) {
	    return genOnce(el)
	  } else if (el.for && !el.forProcessed) {
	    return genFor(el)
	  } else if (el.if && !el.ifProcessed) {
	    return genIf(el)
	  } else if (el.tag === 'template' && !el.slotTarget) {
	    return genChildren(el) || 'void 0'
	  } else if (el.tag === 'slot') {
	    return genSlot(el)
	  } else {
	    // component or element
	    var code;
	    if (el.component) {
	      code = genComponent(el.component, el);
	    } else {
	      var data = el.plain ? undefined : genData(el);

	      var children = el.inlineTemplate ? null : genChildren(el, true);
	      code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
	    }
	    // module transforms
	    for (var i = 0; i < transforms$1.length; i++) {
	      code = transforms$1[i](el, code);
	    }
	    return code
	  }
	}

	// hoist static sub-trees out
	function genStatic (el) {
	  el.staticProcessed = true;
	  staticRenderFns.push(("with(this){return " + (genElement(el)) + "}"));
	  return ("_m(" + (staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
	}

	// v-once
	function genOnce (el) {
	  el.onceProcessed = true;
	  if (el.if && !el.ifProcessed) {
	    return genIf(el)
	  } else if (el.staticInFor) {
	    var key = '';
	    var parent = el.parent;
	    while (parent) {
	      if (parent.for) {
	        key = parent.key;
	        break
	      }
	      parent = parent.parent;
	    }
	    if (!key) {
	      "development" !== 'production' && warn$2(
	        "v-once can only be used inside v-for that is keyed. "
	      );
	      return genElement(el)
	    }
	    return ("_o(" + (genElement(el)) + "," + (onceCount++) + (key ? ("," + key) : "") + ")")
	  } else {
	    return genStatic(el)
	  }
	}

	function genIf (el) {
	  el.ifProcessed = true; // avoid recursion
	  return genIfConditions(el.ifConditions.slice())
	}

	function genIfConditions (conditions) {
	  if (!conditions.length) {
	    return '_e()'
	  }

	  var condition = conditions.shift();
	  if (condition.exp) {
	    return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions)))
	  } else {
	    return ("" + (genTernaryExp(condition.block)))
	  }

	  // v-if with v-once should generate code like (a)?_m(0):_m(1)
	  function genTernaryExp (el) {
	    return el.once ? genOnce(el) : genElement(el)
	  }
	}

	function genFor (el) {
	  var exp = el.for;
	  var alias = el.alias;
	  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
	  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';
	  el.forProcessed = true; // avoid recursion
	  return "_l((" + exp + ")," +
	    "function(" + alias + iterator1 + iterator2 + "){" +
	      "return " + (genElement(el)) +
	    '})'
	}

	function genData (el) {
	  var data = '{';

	  // directives first.
	  // directives may mutate the el's other properties before they are generated.
	  var dirs = genDirectives(el);
	  if (dirs) { data += dirs + ','; }

	  // key
	  if (el.key) {
	    data += "key:" + (el.key) + ",";
	  }
	  // ref
	  if (el.ref) {
	    data += "ref:" + (el.ref) + ",";
	  }
	  if (el.refInFor) {
	    data += "refInFor:true,";
	  }
	  // pre
	  if (el.pre) {
	    data += "pre:true,";
	  }
	  // record original tag name for components using "is" attribute
	  if (el.component) {
	    data += "tag:\"" + (el.tag) + "\",";
	  }
	  // module data generation functions
	  for (var i = 0; i < dataGenFns.length; i++) {
	    data += dataGenFns[i](el);
	  }
	  // attributes
	  if (el.attrs) {
	    data += "attrs:{" + (genProps(el.attrs)) + "},";
	  }
	  // DOM props
	  if (el.props) {
	    data += "domProps:{" + (genProps(el.props)) + "},";
	  }
	  // event handlers
	  if (el.events) {
	    data += (genHandlers(el.events)) + ",";
	  }
	  if (el.nativeEvents) {
	    data += (genHandlers(el.nativeEvents, true)) + ",";
	  }
	  // slot target
	  if (el.slotTarget) {
	    data += "slot:" + (el.slotTarget) + ",";
	  }
	  // scoped slots
	  if (el.scopedSlots) {
	    data += (genScopedSlots(el.scopedSlots)) + ",";
	  }
	  // inline-template
	  if (el.inlineTemplate) {
	    var inlineTemplate = genInlineTemplate(el);
	    if (inlineTemplate) {
	      data += inlineTemplate + ",";
	    }
	  }
	  data = data.replace(/,$/, '') + '}';
	  // v-bind data wrap
	  if (el.wrapData) {
	    data = el.wrapData(data);
	  }
	  return data
	}

	function genDirectives (el) {
	  var dirs = el.directives;
	  if (!dirs) { return }
	  var res = 'directives:[';
	  var hasRuntime = false;
	  var i, l, dir, needRuntime;
	  for (i = 0, l = dirs.length; i < l; i++) {
	    dir = dirs[i];
	    needRuntime = true;
	    var gen = platformDirectives$1[dir.name] || baseDirectives[dir.name];
	    if (gen) {
	      // compile-time directive that manipulates AST.
	      // returns true if it also needs a runtime counterpart.
	      needRuntime = !!gen(el, dir, warn$2);
	    }
	    if (needRuntime) {
	      hasRuntime = true;
	      res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:\"" + (dir.arg) + "\"") : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
	    }
	  }
	  if (hasRuntime) {
	    return res.slice(0, -1) + ']'
	  }
	}

	function genInlineTemplate (el) {
	  var ast = el.children[0];
	  if ("development" !== 'production' && (
	    el.children.length > 1 || ast.type !== 1
	  )) {
	    warn$2('Inline-template components must have exactly one child element.');
	  }
	  if (ast.type === 1) {
	    var inlineRenderFns = generate(ast, currentOptions);
	    return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
	  }
	}

	function genScopedSlots (slots) {
	  return ("scopedSlots:{" + (Object.keys(slots).map(function (key) { return genScopedSlot(key, slots[key]); }).join(',')) + "}")
	}

	function genScopedSlot (key, el) {
	  return key + ":function(" + (String(el.attrsMap.scope)) + "){" +
	    "return " + (el.tag === 'template'
	      ? genChildren(el) || 'void 0'
	      : genElement(el)) + "}"
	}

	function genChildren (el, checkSkip) {
	  var children = el.children;
	  if (children.length) {
	    var el$1 = children[0];
	    // optimize single v-for
	    if (children.length === 1 &&
	        el$1.for &&
	        el$1.tag !== 'template' &&
	        el$1.tag !== 'slot') {
	      return genElement(el$1)
	    }
	    return ("[" + (children.map(genNode).join(',')) + "]" + (checkSkip
	        ? canSkipNormalization(children) ? '' : ',true'
	        : ''))
	  }
	}

	function canSkipNormalization (children) {
	  for (var i = 0; i < children.length; i++) {
	    var el = children[i];
	    if (needsNormalization(el) ||
	        (el.if && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
	      return false
	    }
	  }
	  return true
	}

	function needsNormalization (el) {
	  return el.for || el.tag === 'template' || el.tag === 'slot'
	}

	function genNode (node) {
	  if (node.type === 1) {
	    return genElement(node)
	  } else {
	    return genText(node)
	  }
	}

	function genText (text) {
	  return ("_v(" + (text.type === 2
	    ? text.expression // no need for () because already wrapped in _s()
	    : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
	}

	function genSlot (el) {
	  var slotName = el.slotName || '"default"';
	  var children = genChildren(el);
	  return ("_t(" + slotName + (children ? ("," + children) : '') + (el.attrs ? ((children ? '' : ',null') + ",{" + (el.attrs.map(function (a) { return ((camelize(a.name)) + ":" + (a.value)); }).join(',')) + "}") : '') + ")")
	}

	// componentName is el.component, take it as argument to shun flow's pessimistic refinement
	function genComponent (componentName, el) {
	  var children = el.inlineTemplate ? null : genChildren(el, true);
	  return ("_c(" + componentName + "," + (genData(el)) + (children ? ("," + children) : '') + ")")
	}

	function genProps (props) {
	  var res = '';
	  for (var i = 0; i < props.length; i++) {
	    var prop = props[i];
	    res += "\"" + (prop.name) + "\":" + (transformSpecialNewlines(prop.value)) + ",";
	  }
	  return res.slice(0, -1)
	}

	// #3895, #4268
	function transformSpecialNewlines (text) {
	  return text
	    .replace(/\u2028/g, '\\u2028')
	    .replace(/\u2029/g, '\\u2029')
	}

	/*  */

	/**
	 * Compile a template.
	 */
	function compile$1 (
	  template,
	  options
	) {
	  var ast = parse(template.trim(), options);
	  optimize(ast, options);
	  var code = generate(ast, options);
	  return {
	    ast: ast,
	    render: code.render,
	    staticRenderFns: code.staticRenderFns
	  }
	}

	/*  */

	// operators like typeof, instanceof and in are allowed
	var prohibitedKeywordRE = new RegExp('\\b' + (
	  'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
	  'super,throw,while,yield,delete,export,import,return,switch,default,' +
	  'extends,finally,continue,debugger,function,arguments'
	).split(',').join('\\b|\\b') + '\\b');
	// check valid identifier for v-for
	var identRE = /[A-Za-z_$][\w$]*/;
	// strip strings in expressions
	var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

	// detect problematic expressions in a template
	function detectErrors (ast) {
	  var errors = [];
	  if (ast) {
	    checkNode(ast, errors);
	  }
	  return errors
	}

	function checkNode (node, errors) {
	  if (node.type === 1) {
	    for (var name in node.attrsMap) {
	      if (dirRE.test(name)) {
	        var value = node.attrsMap[name];
	        if (value) {
	          if (name === 'v-for') {
	            checkFor(node, ("v-for=\"" + value + "\""), errors);
	          } else {
	            checkExpression(value, (name + "=\"" + value + "\""), errors);
	          }
	        }
	      }
	    }
	    if (node.children) {
	      for (var i = 0; i < node.children.length; i++) {
	        checkNode(node.children[i], errors);
	      }
	    }
	  } else if (node.type === 2) {
	    checkExpression(node.expression, node.text, errors);
	  }
	}

	function checkFor (node, text, errors) {
	  checkExpression(node.for || '', text, errors);
	  checkIdentifier(node.alias, 'v-for alias', text, errors);
	  checkIdentifier(node.iterator1, 'v-for iterator', text, errors);
	  checkIdentifier(node.iterator2, 'v-for iterator', text, errors);
	}

	function checkIdentifier (ident, type, text, errors) {
	  if (typeof ident === 'string' && !identRE.test(ident)) {
	    errors.push(("- invalid " + type + " \"" + ident + "\" in expression: " + text));
	  }
	}

	function checkExpression (exp, text, errors) {
	  try {
	    new Function(("return " + exp));
	  } catch (e) {
	    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
	    if (keywordMatch) {
	      errors.push(
	        "- avoid using JavaScript keyword as property name: " +
	        "\"" + (keywordMatch[0]) + "\" in expression " + text
	      );
	    } else {
	      errors.push(("- invalid expression: " + text));
	    }
	  }
	}

	/*  */

	function transformNode (el, options) {
	  var warn = options.warn || baseWarn;
	  var staticClass = getAndRemoveAttr(el, 'class');
	  if ("development" !== 'production' && staticClass) {
	    var expression = parseText(staticClass, options.delimiters);
	    if (expression) {
	      warn(
	        "class=\"" + staticClass + "\": " +
	        'Interpolation inside attributes has been removed. ' +
	        'Use v-bind or the colon shorthand instead. For example, ' +
	        'instead of <div class="{{ val }}">, use <div :class="val">.'
	      );
	    }
	  }
	  if (staticClass) {
	    el.staticClass = JSON.stringify(staticClass);
	  }
	  var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
	  if (classBinding) {
	    el.classBinding = classBinding;
	  }
	}

	function genData$1 (el) {
	  var data = '';
	  if (el.staticClass) {
	    data += "staticClass:" + (el.staticClass) + ",";
	  }
	  if (el.classBinding) {
	    data += "class:" + (el.classBinding) + ",";
	  }
	  return data
	}

	var klass$1 = {
	  staticKeys: ['staticClass'],
	  transformNode: transformNode,
	  genData: genData$1
	};

	/*  */

	function transformNode$1 (el, options) {
	  var warn = options.warn || baseWarn;
	  var staticStyle = getAndRemoveAttr(el, 'style');
	  if (staticStyle) {
	    /* istanbul ignore if */
	    {
	      var expression = parseText(staticStyle, options.delimiters);
	      if (expression) {
	        warn(
	          "style=\"" + staticStyle + "\": " +
	          'Interpolation inside attributes has been removed. ' +
	          'Use v-bind or the colon shorthand instead. For example, ' +
	          'instead of <div style="{{ val }}">, use <div :style="val">.'
	        );
	      }
	    }
	    el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
	  }

	  var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
	  if (styleBinding) {
	    el.styleBinding = styleBinding;
	  }
	}

	function genData$2 (el) {
	  var data = '';
	  if (el.staticStyle) {
	    data += "staticStyle:" + (el.staticStyle) + ",";
	  }
	  if (el.styleBinding) {
	    data += "style:(" + (el.styleBinding) + "),";
	  }
	  return data
	}

	var style$1 = {
	  staticKeys: ['staticStyle'],
	  transformNode: transformNode$1,
	  genData: genData$2
	};

	var modules$1 = [
	  klass$1,
	  style$1
	];

	/*  */

	var warn$3;

	function model$1 (
	  el,
	  dir,
	  _warn
	) {
	  warn$3 = _warn;
	  var value = dir.value;
	  var modifiers = dir.modifiers;
	  var tag = el.tag;
	  var type = el.attrsMap.type;
	  {
	    var dynamicType = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
	    if (tag === 'input' && dynamicType) {
	      warn$3(
	        "<input :type=\"" + dynamicType + "\" v-model=\"" + value + "\">:\n" +
	        "v-model does not support dynamic input types. Use v-if branches instead."
	      );
	    }
	  }
	  if (tag === 'select') {
	    genSelect(el, value, modifiers);
	  } else if (tag === 'input' && type === 'checkbox') {
	    genCheckboxModel(el, value, modifiers);
	  } else if (tag === 'input' && type === 'radio') {
	    genRadioModel(el, value, modifiers);
	  } else {
	    genDefaultModel(el, value, modifiers);
	  }
	  // ensure runtime directive metadata
	  return true
	}

	function genCheckboxModel (
	  el,
	  value,
	  modifiers
	) {
	  if ("development" !== 'production' &&
	    el.attrsMap.checked != null) {
	    warn$3(
	      "<" + (el.tag) + " v-model=\"" + value + "\" checked>:\n" +
	      "inline checked attributes will be ignored when using v-model. " +
	      'Declare initial values in the component\'s data option instead.'
	    );
	  }
	  var number = modifiers && modifiers.number;
	  var valueBinding = getBindingAttr(el, 'value') || 'null';
	  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
	  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
	  addProp(el, 'checked',
	    "Array.isArray(" + value + ")" +
	      "?_i(" + value + "," + valueBinding + ")>-1" +
	      ":_q(" + value + "," + trueValueBinding + ")"
	  );
	  addHandler(el, 'change',
	    "var $$a=" + value + "," +
	        '$$el=$event.target,' +
	        "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
	    'if(Array.isArray($$a)){' +
	      "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
	          '$$i=_i($$a,$$v);' +
	      "if($$c){$$i<0&&(" + value + "=$$a.concat($$v))}" +
	      "else{$$i>-1&&(" + value + "=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}" +
	    "}else{" + value + "=$$c}",
	    null, true
	  );
	}

	function genRadioModel (
	    el,
	    value,
	    modifiers
	) {
	  if ("development" !== 'production' &&
	    el.attrsMap.checked != null) {
	    warn$3(
	      "<" + (el.tag) + " v-model=\"" + value + "\" checked>:\n" +
	      "inline checked attributes will be ignored when using v-model. " +
	      'Declare initial values in the component\'s data option instead.'
	    );
	  }
	  var number = modifiers && modifiers.number;
	  var valueBinding = getBindingAttr(el, 'value') || 'null';
	  valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
	  addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
	  addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
	}

	function genDefaultModel (
	  el,
	  value,
	  modifiers
	) {
	  {
	    if (el.tag === 'input' && el.attrsMap.value) {
	      warn$3(
	        "<" + (el.tag) + " v-model=\"" + value + "\" value=\"" + (el.attrsMap.value) + "\">:\n" +
	        'inline value attributes will be ignored when using v-model. ' +
	        'Declare initial values in the component\'s data option instead.'
	      );
	    }
	    if (el.tag === 'textarea' && el.children.length) {
	      warn$3(
	        "<textarea v-model=\"" + value + "\">:\n" +
	        'inline content inside <textarea> will be ignored when using v-model. ' +
	        'Declare initial values in the component\'s data option instead.'
	      );
	    }
	  }

	  var type = el.attrsMap.type;
	  var ref = modifiers || {};
	  var lazy = ref.lazy;
	  var number = ref.number;
	  var trim = ref.trim;
	  var event = lazy || (isIE && type === 'range') ? 'change' : 'input';
	  var needCompositionGuard = !lazy && type !== 'range';
	  var isNative = el.tag === 'input' || el.tag === 'textarea';

	  var valueExpression = isNative
	    ? ("$event.target.value" + (trim ? '.trim()' : ''))
	    : trim ? "(typeof $event === 'string' ? $event.trim() : $event)" : "$event";
	  valueExpression = number || type === 'number'
	    ? ("_n(" + valueExpression + ")")
	    : valueExpression;

	  var code = genAssignmentCode(value, valueExpression);
	  if (isNative && needCompositionGuard) {
	    code = "if($event.target.composing)return;" + code;
	  }

	  // inputs with type="file" are read only and setting the input's
	  // value will throw an error.
	  if ("development" !== 'production' &&
	      type === 'file') {
	    warn$3(
	      "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
	      "File inputs are read only. Use a v-on:change listener instead."
	    );
	  }

	  addProp(el, 'value', isNative ? ("_s(" + value + ")") : ("(" + value + ")"));
	  addHandler(el, event, code, null, true);
	  if (trim || number || type === 'number') {
	    addHandler(el, 'blur', '$forceUpdate()');
	  }
	}

	function genSelect (
	    el,
	    value,
	    modifiers
	) {
	  {
	    el.children.some(checkOptionWarning);
	  }

	  var number = modifiers && modifiers.number;
	  var assignment = "Array.prototype.filter" +
	    ".call($event.target.options,function(o){return o.selected})" +
	    ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
	    "return " + (number ? '_n(val)' : 'val') + "})" +
	    (el.attrsMap.multiple == null ? '[0]' : '');

	  var code = genAssignmentCode(value, assignment);
	  addHandler(el, 'change', code, null, true);
	}

	function checkOptionWarning (option) {
	  if (option.type === 1 &&
	    option.tag === 'option' &&
	    option.attrsMap.selected != null) {
	    warn$3(
	      "<select v-model=\"" + (option.parent.attrsMap['v-model']) + "\">:\n" +
	      'inline selected attributes on <option> will be ignored when using v-model. ' +
	      'Declare initial values in the component\'s data option instead.'
	    );
	    return true
	  }
	  return false
	}

	function genAssignmentCode (value, assignment) {
	  var modelRs = parseModel(value);
	  if (modelRs.idx === null) {
	    return (value + "=" + assignment)
	  } else {
	    return "var $$exp = " + (modelRs.exp) + ", $$idx = " + (modelRs.idx) + ";" +
	      "if (!Array.isArray($$exp)){" +
	        value + "=" + assignment + "}" +
	      "else{$$exp.splice($$idx, 1, " + assignment + ")}"
	  }
	}

	/*  */

	function text (el, dir) {
	  if (dir.value) {
	    addProp(el, 'textContent', ("_s(" + (dir.value) + ")"));
	  }
	}

	/*  */

	function html (el, dir) {
	  if (dir.value) {
	    addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"));
	  }
	}

	var directives$1 = {
	  model: model$1,
	  text: text,
	  html: html
	};

	/*  */

	var cache = Object.create(null);

	var baseOptions = {
	  expectHTML: true,
	  modules: modules$1,
	  staticKeys: genStaticKeys(modules$1),
	  directives: directives$1,
	  isReservedTag: isReservedTag,
	  isUnaryTag: isUnaryTag,
	  mustUseProp: mustUseProp,
	  getTagNamespace: getTagNamespace,
	  isPreTag: isPreTag
	};

	function compile$$1 (
	  template,
	  options
	) {
	  options = options
	    ? extend(extend({}, baseOptions), options)
	    : baseOptions;
	  return compile$1(template, options)
	}

	function compileToFunctions (
	  template,
	  options,
	  vm
	) {
	  var _warn = (options && options.warn) || warn;
	  // detect possible CSP restriction
	  /* istanbul ignore if */
	  {
	    try {
	      new Function('return 1');
	    } catch (e) {
	      if (e.toString().match(/unsafe-eval|CSP/)) {
	        _warn(
	          'It seems you are using the standalone build of Vue.js in an ' +
	          'environment with Content Security Policy that prohibits unsafe-eval. ' +
	          'The template compiler cannot work in this environment. Consider ' +
	          'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
	          'templates into render functions.'
	        );
	      }
	    }
	  }
	  var key = options && options.delimiters
	    ? String(options.delimiters) + template
	    : template;
	  if (cache[key]) {
	    return cache[key]
	  }
	  var res = {};
	  var compiled = compile$$1(template, options);
	  res.render = makeFunction(compiled.render);
	  var l = compiled.staticRenderFns.length;
	  res.staticRenderFns = new Array(l);
	  for (var i = 0; i < l; i++) {
	    res.staticRenderFns[i] = makeFunction(compiled.staticRenderFns[i]);
	  }
	  {
	    if (res.render === noop || res.staticRenderFns.some(function (fn) { return fn === noop; })) {
	      _warn(
	        "failed to compile template:\n\n" + template + "\n\n" +
	        detectErrors(compiled.ast).join('\n') +
	        '\n\n',
	        vm
	      );
	    }
	  }
	  return (cache[key] = res)
	}

	function makeFunction (code) {
	  try {
	    return new Function(code)
	  } catch (e) {
	    return noop
	  }
	}

	/*  */

	var idToTemplate = cached(function (id) {
	  var el = query(id);
	  return el && el.innerHTML
	});

	var mount = Vue$3.prototype.$mount;
	Vue$3.prototype.$mount = function (
	  el,
	  hydrating
	) {
	  el = el && query(el);

	  /* istanbul ignore if */
	  if (el === document.body || el === document.documentElement) {
	    "development" !== 'production' && warn(
	      "Do not mount Vue to <html> or <body> - mount to normal elements instead."
	    );
	    return this
	  }

	  var options = this.$options;
	  // resolve template/el and convert to render function
	  if (!options.render) {
	    var template = options.template;
	    if (template) {
	      if (typeof template === 'string') {
	        if (template.charAt(0) === '#') {
	          template = idToTemplate(template);
	          /* istanbul ignore if */
	          if ("development" !== 'production' && !template) {
	            warn(
	              ("Template element not found or is empty: " + (options.template)),
	              this
	            );
	          }
	        }
	      } else if (template.nodeType) {
	        template = template.innerHTML;
	      } else {
	        {
	          warn('invalid template option:' + template, this);
	        }
	        return this
	      }
	    } else if (el) {
	      template = getOuterHTML(el);
	    }
	    if (template) {
	      var ref = compileToFunctions(template, {
	        warn: warn,
	        shouldDecodeNewlines: shouldDecodeNewlines,
	        delimiters: options.delimiters
	      }, this);
	      var render = ref.render;
	      var staticRenderFns = ref.staticRenderFns;
	      options.render = render;
	      options.staticRenderFns = staticRenderFns;
	    }
	  }
	  return mount.call(this, el, hydrating)
	};

	/**
	 * Get outerHTML of elements, taking care
	 * of SVG elements in IE as well.
	 */
	function getOuterHTML (el) {
	  if (el.outerHTML) {
	    return el.outerHTML
	  } else {
	    var container = document.createElement('div');
	    container.appendChild(el.cloneNode(true));
	    return container.innerHTML
	  }
	}

	Vue$3.compile = compileToFunctions;

	return Vue$3;

	})));

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(3)
	__vue_script__ = __webpack_require__(7)
	__vue_template__ = __webpack_require__(8)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "F:\\vue-webpack\\src\\vue\\app.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(4);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.0.23.1@css-loader/index.js!./../../node_modules/.7.5.3@vue-loader/lib/style-rewriter.js?id=_v-201acafa&file=app.vue!./../../node_modules/.7.5.3@vue-loader/lib/selector.js?type=style&index=0!./app.vue", function() {
				var newContent = require("!!./../../node_modules/.0.23.1@css-loader/index.js!./../../node_modules/.7.5.3@vue-loader/lib/style-rewriter.js?id=_v-201acafa&file=app.vue!./../../node_modules/.7.5.3@vue-loader/lib/selector.js?type=style&index=0!./app.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "\r\n    .msg{\r\n        color: #999;\r\n    }\r\n", ""]);

	// exports


/***/ },
/* 5 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template>
	//     <div class="msg">
	//         {{msg}}
	//         <button @click.prevent="increment">触发{{count}}</button>
	//         <ol>
	//             <li v-for="list in lists">{{list}}</li>
	//         </ol>
	//     </div>
	// </template>
	//
	// <script type="es6">
	exports.default = {
	    data: function data() {
	        return {
	            count: 0,
	            msg: "Hi vue and webpack1",
	            lists: ["年龄", "性别", "爱好", "专业技能", "心理学", "哲学x8"]
	        };
	    },

	    methods: {
	        increment: function increment() {
	            this.count++;
	        }
	    }
	};
	// </script>
	//
	// <style>
	//     .msg{
	//         color: #999;
	//     }
	// </style>

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "\r\n    <div class=\"msg\">\r\n        {{msg}}\r\n        <button @click.prevent=\"increment\">触发{{count}}</button>\r\n        <ol>\r\n            <li v-for=\"list in lists\">{{list}}</li>\r\n        </ol>\r\n    </div>\r\n";

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(10)
	__vue_script__ = __webpack_require__(13)
	__vue_template__ = __webpack_require__(14)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "F:\\vue-webpack\\src\\vue\\search.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(11);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.0.23.1@css-loader/index.js!./../../node_modules/.7.5.3@vue-loader/lib/style-rewriter.js?id=_v-c600fc94&file=search.vue!./../../node_modules/.7.5.3@vue-loader/lib/selector.js?type=style&index=0!./search.vue", function() {
				var newContent = require("!!./../../node_modules/.0.23.1@css-loader/index.js!./../../node_modules/.7.5.3@vue-loader/lib/style-rewriter.js?id=_v-c600fc94&file=search.vue!./../../node_modules/.7.5.3@vue-loader/lib/selector.js?type=style&index=0!./search.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports
	exports.i(__webpack_require__(12), "");

	// module
	exports.push([module.id, "\r\n    .wrap{\r\n        width: 400px;\r\n        margin:0 auto;\r\n    }\r\n", ""]);

	// exports


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "/*!\n * Bootstrap v3.3.7 (http://getbootstrap.com)\n * Copyright 2011-2016 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n *//*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\nhtml {\n    font-family: sans-serif;\n    -webkit-text-size-adjust: 100%;\n    -ms-text-size-adjust: 100%\n}\n\nbody {\n    margin: 0\n}\n\narticle, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section, summary {\n    display: block\n}\n\naudio, canvas, progress, video {\n    display: inline-block;\n    vertical-align: baseline\n}\n\naudio:not([controls]) {\n    display: none;\n    height: 0\n}\n\n[hidden], template {\n    display: none\n}\n\na {\n    background-color: transparent\n}\n\na:active, a:hover {\n    outline: 0\n}\n\nabbr[title] {\n    border-bottom: 1px dotted\n}\n\nb, strong {\n    font-weight: 700\n}\n\ndfn {\n    font-style: italic\n}\n\nh1 {\n    margin: .67em 0;\n    font-size: 2em\n}\n\nmark {\n    color: #000;\n    background: #ff0\n}\n\nsmall {\n    font-size: 80%\n}\n\nsub, sup {\n    position: relative;\n    font-size: 75%;\n    line-height: 0;\n    vertical-align: baseline\n}\n\nsup {\n    top: -.5em\n}\n\nsub {\n    bottom: -.25em\n}\n\nimg {\n    border: 0\n}\n\nsvg:not(:root) {\n    overflow: hidden\n}\n\nfigure {\n    margin: 1em 40px\n}\n\nhr {\n    height: 0;\n    -webkit-box-sizing: content-box;\n    -moz-box-sizing: content-box;\n    box-sizing: content-box\n}\n\npre {\n    overflow: auto\n}\n\ncode, kbd, pre, samp {\n    font-family: monospace, monospace;\n    font-size: 1em\n}\n\nbutton, input, optgroup, select, textarea {\n    margin: 0;\n    font: inherit;\n    color: inherit\n}\n\nbutton {\n    overflow: visible\n}\n\nbutton, select {\n    text-transform: none\n}\n\nbutton, html input[type=button], input[type=reset], input[type=submit] {\n    -webkit-appearance: button;\n    cursor: pointer\n}\n\nbutton[disabled], html input[disabled] {\n    cursor: default\n}\n\nbutton::-moz-focus-inner, input::-moz-focus-inner {\n    padding: 0;\n    border: 0\n}\n\ninput {\n    line-height: normal\n}\n\ninput[type=checkbox], input[type=radio] {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n    padding: 0\n}\n\ninput[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button {\n    height: auto\n}\n\ninput[type=search] {\n    -webkit-box-sizing: content-box;\n    -moz-box-sizing: content-box;\n    box-sizing: content-box;\n    -webkit-appearance: textfield\n}\n\ninput[type=search]::-webkit-search-cancel-button, input[type=search]::-webkit-search-decoration {\n    -webkit-appearance: none\n}\n\nfieldset {\n    padding: .35em .625em .75em;\n    margin: 0 2px;\n    border: 1px solid silver\n}\n\nlegend {\n    padding: 0;\n    border: 0\n}\n\ntextarea {\n    overflow: auto\n}\n\noptgroup {\n    font-weight: 700\n}\n\ntable {\n    border-spacing: 0;\n    border-collapse: collapse\n}\n\ntd, th {\n    padding: 0\n}\n\n/*! Source: https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css */\n@media print {\n    *, :after, :before {\n        color: #000 !important;\n        text-shadow: none !important;\n        background: 0 0 !important;\n        -webkit-box-shadow: none !important;\n        box-shadow: none !important\n    }\n\n    a, a:visited {\n        text-decoration: underline\n    }\n\n    a[href]:after {\n        content: \" (\" attr(href) \")\"\n    }\n\n    abbr[title]:after {\n        content: \" (\" attr(title) \")\"\n    }\n\n    a[href^=\"javascript:\"]:after, a[href^=\"#\"]:after {\n        content: \"\"\n    }\n\n    blockquote, pre {\n        border: 1px solid #999;\n        page-break-inside: avoid\n    }\n\n    thead {\n        display: table-header-group\n    }\n\n    img, tr {\n        page-break-inside: avoid\n    }\n\n    img {\n        max-width: 100% !important\n    }\n\n    h2, h3, p {\n        orphans: 3;\n        widows: 3\n    }\n\n    h2, h3 {\n        page-break-after: avoid\n    }\n\n    .navbar {\n        display: none\n    }\n\n    .btn > .caret, .dropup > .btn > .caret {\n        border-top-color: #000 !important\n    }\n\n    .label {\n        border: 1px solid #000\n    }\n\n    .table {\n        border-collapse: collapse !important\n    }\n\n    .table td, .table th {\n        background-color: #fff !important\n    }\n\n    .table-bordered td, .table-bordered th {\n        border: 1px solid #ddd !important\n    }\n}\n\n@font-face {\n    font-family: 'Glyphicons Halflings';\n    /*src: url(../fonts/glyphicons-halflings-regular.eot);*/\n    /*src: url(../fonts/glyphicons-halflings-regular.eot?#iefix) format('embedded-opentype'), url(../fonts/glyphicons-halflings-regular.woff) format('woff'), url(../fonts/glyphicons-halflings-regular.ttf) format('truetype'), url(../fonts/glyphicons-halflings-regular.svg#glyphicons_halflingsregular) format('svg')*/\n}\n\n.glyphicon {\n    position: relative;\n    top: 1px;\n    display: inline-block;\n    font-family: 'Glyphicons Halflings';\n    font-style: normal;\n    font-weight: 400;\n    line-height: 1;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale\n}\n\n.glyphicon-asterisk:before {\n    content: \"*\"\n}\n\n.glyphicon-plus:before {\n    content: \"+\"\n}\n\n.glyphicon-eur:before, .glyphicon-euro:before {\n    content: \"\\20AC\"\n}\n\n.glyphicon-minus:before {\n    content: \"\\2212\"\n}\n\n.glyphicon-cloud:before {\n    content: \"\\2601\"\n}\n\n.glyphicon-envelope:before {\n    content: \"\\2709\"\n}\n\n.glyphicon-pencil:before {\n    content: \"\\270F\"\n}\n\n.glyphicon-glass:before {\n    content: \"\\E001\"\n}\n\n.glyphicon-music:before {\n    content: \"\\E002\"\n}\n\n.glyphicon-search:before {\n    content: \"\\E003\"\n}\n\n.glyphicon-heart:before {\n    content: \"\\E005\"\n}\n\n.glyphicon-star:before {\n    content: \"\\E006\"\n}\n\n.glyphicon-star-empty:before {\n    content: \"\\E007\"\n}\n\n.glyphicon-user:before {\n    content: \"\\E008\"\n}\n\n.glyphicon-film:before {\n    content: \"\\E009\"\n}\n\n.glyphicon-th-large:before {\n    content: \"\\E010\"\n}\n\n.glyphicon-th:before {\n    content: \"\\E011\"\n}\n\n.glyphicon-th-list:before {\n    content: \"\\E012\"\n}\n\n.glyphicon-ok:before {\n    content: \"\\E013\"\n}\n\n.glyphicon-remove:before {\n    content: \"\\E014\"\n}\n\n.glyphicon-zoom-in:before {\n    content: \"\\E015\"\n}\n\n.glyphicon-zoom-out:before {\n    content: \"\\E016\"\n}\n\n.glyphicon-off:before {\n    content: \"\\E017\"\n}\n\n.glyphicon-signal:before {\n    content: \"\\E018\"\n}\n\n.glyphicon-cog:before {\n    content: \"\\E019\"\n}\n\n.glyphicon-trash:before {\n    content: \"\\E020\"\n}\n\n.glyphicon-home:before {\n    content: \"\\E021\"\n}\n\n.glyphicon-file:before {\n    content: \"\\E022\"\n}\n\n.glyphicon-time:before {\n    content: \"\\E023\"\n}\n\n.glyphicon-road:before {\n    content: \"\\E024\"\n}\n\n.glyphicon-download-alt:before {\n    content: \"\\E025\"\n}\n\n.glyphicon-download:before {\n    content: \"\\E026\"\n}\n\n.glyphicon-upload:before {\n    content: \"\\E027\"\n}\n\n.glyphicon-inbox:before {\n    content: \"\\E028\"\n}\n\n.glyphicon-play-circle:before {\n    content: \"\\E029\"\n}\n\n.glyphicon-repeat:before {\n    content: \"\\E030\"\n}\n\n.glyphicon-refresh:before {\n    content: \"\\E031\"\n}\n\n.glyphicon-list-alt:before {\n    content: \"\\E032\"\n}\n\n.glyphicon-lock:before {\n    content: \"\\E033\"\n}\n\n.glyphicon-flag:before {\n    content: \"\\E034\"\n}\n\n.glyphicon-headphones:before {\n    content: \"\\E035\"\n}\n\n.glyphicon-volume-off:before {\n    content: \"\\E036\"\n}\n\n.glyphicon-volume-down:before {\n    content: \"\\E037\"\n}\n\n.glyphicon-volume-up:before {\n    content: \"\\E038\"\n}\n\n.glyphicon-qrcode:before {\n    content: \"\\E039\"\n}\n\n.glyphicon-barcode:before {\n    content: \"\\E040\"\n}\n\n.glyphicon-tag:before {\n    content: \"\\E041\"\n}\n\n.glyphicon-tags:before {\n    content: \"\\E042\"\n}\n\n.glyphicon-book:before {\n    content: \"\\E043\"\n}\n\n.glyphicon-bookmark:before {\n    content: \"\\E044\"\n}\n\n.glyphicon-print:before {\n    content: \"\\E045\"\n}\n\n.glyphicon-camera:before {\n    content: \"\\E046\"\n}\n\n.glyphicon-font:before {\n    content: \"\\E047\"\n}\n\n.glyphicon-bold:before {\n    content: \"\\E048\"\n}\n\n.glyphicon-italic:before {\n    content: \"\\E049\"\n}\n\n.glyphicon-text-height:before {\n    content: \"\\E050\"\n}\n\n.glyphicon-text-width:before {\n    content: \"\\E051\"\n}\n\n.glyphicon-align-left:before {\n    content: \"\\E052\"\n}\n\n.glyphicon-align-center:before {\n    content: \"\\E053\"\n}\n\n.glyphicon-align-right:before {\n    content: \"\\E054\"\n}\n\n.glyphicon-align-justify:before {\n    content: \"\\E055\"\n}\n\n.glyphicon-list:before {\n    content: \"\\E056\"\n}\n\n.glyphicon-indent-left:before {\n    content: \"\\E057\"\n}\n\n.glyphicon-indent-right:before {\n    content: \"\\E058\"\n}\n\n.glyphicon-facetime-video:before {\n    content: \"\\E059\"\n}\n\n.glyphicon-picture:before {\n    content: \"\\E060\"\n}\n\n.glyphicon-map-marker:before {\n    content: \"\\E062\"\n}\n\n.glyphicon-adjust:before {\n    content: \"\\E063\"\n}\n\n.glyphicon-tint:before {\n    content: \"\\E064\"\n}\n\n.glyphicon-edit:before {\n    content: \"\\E065\"\n}\n\n.glyphicon-share:before {\n    content: \"\\E066\"\n}\n\n.glyphicon-check:before {\n    content: \"\\E067\"\n}\n\n.glyphicon-move:before {\n    content: \"\\E068\"\n}\n\n.glyphicon-step-backward:before {\n    content: \"\\E069\"\n}\n\n.glyphicon-fast-backward:before {\n    content: \"\\E070\"\n}\n\n.glyphicon-backward:before {\n    content: \"\\E071\"\n}\n\n.glyphicon-play:before {\n    content: \"\\E072\"\n}\n\n.glyphicon-pause:before {\n    content: \"\\E073\"\n}\n\n.glyphicon-stop:before {\n    content: \"\\E074\"\n}\n\n.glyphicon-forward:before {\n    content: \"\\E075\"\n}\n\n.glyphicon-fast-forward:before {\n    content: \"\\E076\"\n}\n\n.glyphicon-step-forward:before {\n    content: \"\\E077\"\n}\n\n.glyphicon-eject:before {\n    content: \"\\E078\"\n}\n\n.glyphicon-chevron-left:before {\n    content: \"\\E079\"\n}\n\n.glyphicon-chevron-right:before {\n    content: \"\\E080\"\n}\n\n.glyphicon-plus-sign:before {\n    content: \"\\E081\"\n}\n\n.glyphicon-minus-sign:before {\n    content: \"\\E082\"\n}\n\n.glyphicon-remove-sign:before {\n    content: \"\\E083\"\n}\n\n.glyphicon-ok-sign:before {\n    content: \"\\E084\"\n}\n\n.glyphicon-question-sign:before {\n    content: \"\\E085\"\n}\n\n.glyphicon-info-sign:before {\n    content: \"\\E086\"\n}\n\n.glyphicon-screenshot:before {\n    content: \"\\E087\"\n}\n\n.glyphicon-remove-circle:before {\n    content: \"\\E088\"\n}\n\n.glyphicon-ok-circle:before {\n    content: \"\\E089\"\n}\n\n.glyphicon-ban-circle:before {\n    content: \"\\E090\"\n}\n\n.glyphicon-arrow-left:before {\n    content: \"\\E091\"\n}\n\n.glyphicon-arrow-right:before {\n    content: \"\\E092\"\n}\n\n.glyphicon-arrow-up:before {\n    content: \"\\E093\"\n}\n\n.glyphicon-arrow-down:before {\n    content: \"\\E094\"\n}\n\n.glyphicon-share-alt:before {\n    content: \"\\E095\"\n}\n\n.glyphicon-resize-full:before {\n    content: \"\\E096\"\n}\n\n.glyphicon-resize-small:before {\n    content: \"\\E097\"\n}\n\n.glyphicon-exclamation-sign:before {\n    content: \"\\E101\"\n}\n\n.glyphicon-gift:before {\n    content: \"\\E102\"\n}\n\n.glyphicon-leaf:before {\n    content: \"\\E103\"\n}\n\n.glyphicon-fire:before {\n    content: \"\\E104\"\n}\n\n.glyphicon-eye-open:before {\n    content: \"\\E105\"\n}\n\n.glyphicon-eye-close:before {\n    content: \"\\E106\"\n}\n\n.glyphicon-warning-sign:before {\n    content: \"\\E107\"\n}\n\n.glyphicon-plane:before {\n    content: \"\\E108\"\n}\n\n.glyphicon-calendar:before {\n    content: \"\\E109\"\n}\n\n.glyphicon-random:before {\n    content: \"\\E110\"\n}\n\n.glyphicon-comment:before {\n    content: \"\\E111\"\n}\n\n.glyphicon-magnet:before {\n    content: \"\\E112\"\n}\n\n.glyphicon-chevron-up:before {\n    content: \"\\E113\"\n}\n\n.glyphicon-chevron-down:before {\n    content: \"\\E114\"\n}\n\n.glyphicon-retweet:before {\n    content: \"\\E115\"\n}\n\n.glyphicon-shopping-cart:before {\n    content: \"\\E116\"\n}\n\n.glyphicon-folder-close:before {\n    content: \"\\E117\"\n}\n\n.glyphicon-folder-open:before {\n    content: \"\\E118\"\n}\n\n.glyphicon-resize-vertical:before {\n    content: \"\\E119\"\n}\n\n.glyphicon-resize-horizontal:before {\n    content: \"\\E120\"\n}\n\n.glyphicon-hdd:before {\n    content: \"\\E121\"\n}\n\n.glyphicon-bullhorn:before {\n    content: \"\\E122\"\n}\n\n.glyphicon-bell:before {\n    content: \"\\E123\"\n}\n\n.glyphicon-certificate:before {\n    content: \"\\E124\"\n}\n\n.glyphicon-thumbs-up:before {\n    content: \"\\E125\"\n}\n\n.glyphicon-thumbs-down:before {\n    content: \"\\E126\"\n}\n\n.glyphicon-hand-right:before {\n    content: \"\\E127\"\n}\n\n.glyphicon-hand-left:before {\n    content: \"\\E128\"\n}\n\n.glyphicon-hand-up:before {\n    content: \"\\E129\"\n}\n\n.glyphicon-hand-down:before {\n    content: \"\\E130\"\n}\n\n.glyphicon-circle-arrow-right:before {\n    content: \"\\E131\"\n}\n\n.glyphicon-circle-arrow-left:before {\n    content: \"\\E132\"\n}\n\n.glyphicon-circle-arrow-up:before {\n    content: \"\\E133\"\n}\n\n.glyphicon-circle-arrow-down:before {\n    content: \"\\E134\"\n}\n\n.glyphicon-globe:before {\n    content: \"\\E135\"\n}\n\n.glyphicon-wrench:before {\n    content: \"\\E136\"\n}\n\n.glyphicon-tasks:before {\n    content: \"\\E137\"\n}\n\n.glyphicon-filter:before {\n    content: \"\\E138\"\n}\n\n.glyphicon-briefcase:before {\n    content: \"\\E139\"\n}\n\n.glyphicon-fullscreen:before {\n    content: \"\\E140\"\n}\n\n.glyphicon-dashboard:before {\n    content: \"\\E141\"\n}\n\n.glyphicon-paperclip:before {\n    content: \"\\E142\"\n}\n\n.glyphicon-heart-empty:before {\n    content: \"\\E143\"\n}\n\n.glyphicon-link:before {\n    content: \"\\E144\"\n}\n\n.glyphicon-phone:before {\n    content: \"\\E145\"\n}\n\n.glyphicon-pushpin:before {\n    content: \"\\E146\"\n}\n\n.glyphicon-usd:before {\n    content: \"\\E148\"\n}\n\n.glyphicon-gbp:before {\n    content: \"\\E149\"\n}\n\n.glyphicon-sort:before {\n    content: \"\\E150\"\n}\n\n.glyphicon-sort-by-alphabet:before {\n    content: \"\\E151\"\n}\n\n.glyphicon-sort-by-alphabet-alt:before {\n    content: \"\\E152\"\n}\n\n.glyphicon-sort-by-order:before {\n    content: \"\\E153\"\n}\n\n.glyphicon-sort-by-order-alt:before {\n    content: \"\\E154\"\n}\n\n.glyphicon-sort-by-attributes:before {\n    content: \"\\E155\"\n}\n\n.glyphicon-sort-by-attributes-alt:before {\n    content: \"\\E156\"\n}\n\n.glyphicon-unchecked:before {\n    content: \"\\E157\"\n}\n\n.glyphicon-expand:before {\n    content: \"\\E158\"\n}\n\n.glyphicon-collapse-down:before {\n    content: \"\\E159\"\n}\n\n.glyphicon-collapse-up:before {\n    content: \"\\E160\"\n}\n\n.glyphicon-log-in:before {\n    content: \"\\E161\"\n}\n\n.glyphicon-flash:before {\n    content: \"\\E162\"\n}\n\n.glyphicon-log-out:before {\n    content: \"\\E163\"\n}\n\n.glyphicon-new-window:before {\n    content: \"\\E164\"\n}\n\n.glyphicon-record:before {\n    content: \"\\E165\"\n}\n\n.glyphicon-save:before {\n    content: \"\\E166\"\n}\n\n.glyphicon-open:before {\n    content: \"\\E167\"\n}\n\n.glyphicon-saved:before {\n    content: \"\\E168\"\n}\n\n.glyphicon-import:before {\n    content: \"\\E169\"\n}\n\n.glyphicon-export:before {\n    content: \"\\E170\"\n}\n\n.glyphicon-send:before {\n    content: \"\\E171\"\n}\n\n.glyphicon-floppy-disk:before {\n    content: \"\\E172\"\n}\n\n.glyphicon-floppy-saved:before {\n    content: \"\\E173\"\n}\n\n.glyphicon-floppy-remove:before {\n    content: \"\\E174\"\n}\n\n.glyphicon-floppy-save:before {\n    content: \"\\E175\"\n}\n\n.glyphicon-floppy-open:before {\n    content: \"\\E176\"\n}\n\n.glyphicon-credit-card:before {\n    content: \"\\E177\"\n}\n\n.glyphicon-transfer:before {\n    content: \"\\E178\"\n}\n\n.glyphicon-cutlery:before {\n    content: \"\\E179\"\n}\n\n.glyphicon-header:before {\n    content: \"\\E180\"\n}\n\n.glyphicon-compressed:before {\n    content: \"\\E181\"\n}\n\n.glyphicon-earphone:before {\n    content: \"\\E182\"\n}\n\n.glyphicon-phone-alt:before {\n    content: \"\\E183\"\n}\n\n.glyphicon-tower:before {\n    content: \"\\E184\"\n}\n\n.glyphicon-stats:before {\n    content: \"\\E185\"\n}\n\n.glyphicon-sd-video:before {\n    content: \"\\E186\"\n}\n\n.glyphicon-hd-video:before {\n    content: \"\\E187\"\n}\n\n.glyphicon-subtitles:before {\n    content: \"\\E188\"\n}\n\n.glyphicon-sound-stereo:before {\n    content: \"\\E189\"\n}\n\n.glyphicon-sound-dolby:before {\n    content: \"\\E190\"\n}\n\n.glyphicon-sound-5-1:before {\n    content: \"\\E191\"\n}\n\n.glyphicon-sound-6-1:before {\n    content: \"\\E192\"\n}\n\n.glyphicon-sound-7-1:before {\n    content: \"\\E193\"\n}\n\n.glyphicon-copyright-mark:before {\n    content: \"\\E194\"\n}\n\n.glyphicon-registration-mark:before {\n    content: \"\\E195\"\n}\n\n.glyphicon-cloud-download:before {\n    content: \"\\E197\"\n}\n\n.glyphicon-cloud-upload:before {\n    content: \"\\E198\"\n}\n\n.glyphicon-tree-conifer:before {\n    content: \"\\E199\"\n}\n\n.glyphicon-tree-deciduous:before {\n    content: \"\\E200\"\n}\n\n.glyphicon-cd:before {\n    content: \"\\E201\"\n}\n\n.glyphicon-save-file:before {\n    content: \"\\E202\"\n}\n\n.glyphicon-open-file:before {\n    content: \"\\E203\"\n}\n\n.glyphicon-level-up:before {\n    content: \"\\E204\"\n}\n\n.glyphicon-copy:before {\n    content: \"\\E205\"\n}\n\n.glyphicon-paste:before {\n    content: \"\\E206\"\n}\n\n.glyphicon-alert:before {\n    content: \"\\E209\"\n}\n\n.glyphicon-equalizer:before {\n    content: \"\\E210\"\n}\n\n.glyphicon-king:before {\n    content: \"\\E211\"\n}\n\n.glyphicon-queen:before {\n    content: \"\\E212\"\n}\n\n.glyphicon-pawn:before {\n    content: \"\\E213\"\n}\n\n.glyphicon-bishop:before {\n    content: \"\\E214\"\n}\n\n.glyphicon-knight:before {\n    content: \"\\E215\"\n}\n\n.glyphicon-baby-formula:before {\n    content: \"\\E216\"\n}\n\n.glyphicon-tent:before {\n    content: \"\\26FA\"\n}\n\n.glyphicon-blackboard:before {\n    content: \"\\E218\"\n}\n\n.glyphicon-bed:before {\n    content: \"\\E219\"\n}\n\n.glyphicon-apple:before {\n    content: \"\\F8FF\"\n}\n\n.glyphicon-erase:before {\n    content: \"\\E221\"\n}\n\n.glyphicon-hourglass:before {\n    content: \"\\231B\"\n}\n\n.glyphicon-lamp:before {\n    content: \"\\E223\"\n}\n\n.glyphicon-duplicate:before {\n    content: \"\\E224\"\n}\n\n.glyphicon-piggy-bank:before {\n    content: \"\\E225\"\n}\n\n.glyphicon-scissors:before {\n    content: \"\\E226\"\n}\n\n.glyphicon-bitcoin:before {\n    content: \"\\E227\"\n}\n\n.glyphicon-btc:before {\n    content: \"\\E227\"\n}\n\n.glyphicon-xbt:before {\n    content: \"\\E227\"\n}\n\n.glyphicon-yen:before {\n    content: \"\\A5\"\n}\n\n.glyphicon-jpy:before {\n    content: \"\\A5\"\n}\n\n.glyphicon-ruble:before {\n    content: \"\\20BD\"\n}\n\n.glyphicon-rub:before {\n    content: \"\\20BD\"\n}\n\n.glyphicon-scale:before {\n    content: \"\\E230\"\n}\n\n.glyphicon-ice-lolly:before {\n    content: \"\\E231\"\n}\n\n.glyphicon-ice-lolly-tasted:before {\n    content: \"\\E232\"\n}\n\n.glyphicon-education:before {\n    content: \"\\E233\"\n}\n\n.glyphicon-option-horizontal:before {\n    content: \"\\E234\"\n}\n\n.glyphicon-option-vertical:before {\n    content: \"\\E235\"\n}\n\n.glyphicon-menu-hamburger:before {\n    content: \"\\E236\"\n}\n\n.glyphicon-modal-window:before {\n    content: \"\\E237\"\n}\n\n.glyphicon-oil:before {\n    content: \"\\E238\"\n}\n\n.glyphicon-grain:before {\n    content: \"\\E239\"\n}\n\n.glyphicon-sunglasses:before {\n    content: \"\\E240\"\n}\n\n.glyphicon-text-size:before {\n    content: \"\\E241\"\n}\n\n.glyphicon-text-color:before {\n    content: \"\\E242\"\n}\n\n.glyphicon-text-background:before {\n    content: \"\\E243\"\n}\n\n.glyphicon-object-align-top:before {\n    content: \"\\E244\"\n}\n\n.glyphicon-object-align-bottom:before {\n    content: \"\\E245\"\n}\n\n.glyphicon-object-align-horizontal:before {\n    content: \"\\E246\"\n}\n\n.glyphicon-object-align-left:before {\n    content: \"\\E247\"\n}\n\n.glyphicon-object-align-vertical:before {\n    content: \"\\E248\"\n}\n\n.glyphicon-object-align-right:before {\n    content: \"\\E249\"\n}\n\n.glyphicon-triangle-right:before {\n    content: \"\\E250\"\n}\n\n.glyphicon-triangle-left:before {\n    content: \"\\E251\"\n}\n\n.glyphicon-triangle-bottom:before {\n    content: \"\\E252\"\n}\n\n.glyphicon-triangle-top:before {\n    content: \"\\E253\"\n}\n\n.glyphicon-console:before {\n    content: \"\\E254\"\n}\n\n.glyphicon-superscript:before {\n    content: \"\\E255\"\n}\n\n.glyphicon-subscript:before {\n    content: \"\\E256\"\n}\n\n.glyphicon-menu-left:before {\n    content: \"\\E257\"\n}\n\n.glyphicon-menu-right:before {\n    content: \"\\E258\"\n}\n\n.glyphicon-menu-down:before {\n    content: \"\\E259\"\n}\n\n.glyphicon-menu-up:before {\n    content: \"\\E260\"\n}\n\n* {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box\n}\n\n:after, :before {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box\n}\n\nhtml {\n    font-size: 10px;\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0)\n}\n\nbody {\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    font-size: 14px;\n    line-height: 1.42857143;\n    color: #333;\n    background-color: #fff\n}\n\nbutton, input, select, textarea {\n    font-family: inherit;\n    font-size: inherit;\n    line-height: inherit\n}\n\na {\n    color: #337ab7;\n    text-decoration: none\n}\n\n/*a:focus, a:hover {\n    color: #23527c;\n    text-decoration: underline\n}*/\n\na:focus {\n    outline: 5px auto -webkit-focus-ring-color;\n    outline-offset: -2px\n}\n\nfigure {\n    margin: 0\n}\n\nimg {\n    vertical-align: middle\n}\n\n.carousel-inner > .item > a > img, .carousel-inner > .item > img, .img-responsive, .thumbnail a > img, .thumbnail > img {\n    display: block;\n    max-width: 100%;\n    height: auto\n}\n\n.img-rounded {\n    border-radius: 6px\n}\n\n.img-thumbnail {\n    display: inline-block;\n    max-width: 100%;\n    height: auto;\n    padding: 4px;\n    line-height: 1.42857143;\n    background-color: #fff;\n    border: 1px solid #ddd;\n    border-radius: 4px;\n    -webkit-transition: all .2s ease-in-out;\n    -o-transition: all .2s ease-in-out;\n    transition: all .2s ease-in-out\n}\n\n.img-circle {\n    border-radius: 50%\n}\n\nhr {\n    margin-top: 20px;\n    margin-bottom: 20px;\n    border: 0;\n    border-top: 1px solid #eee\n}\n\n.sr-only {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    margin: -1px;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    border: 0\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n    position: static;\n    width: auto;\n    height: auto;\n    margin: 0;\n    overflow: visible;\n    clip: auto\n}\n\n[role=button] {\n    cursor: pointer\n}\n\n.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {\n    font-family: inherit;\n    font-weight: 500;\n    line-height: 1.1;\n    color: inherit\n}\n\n.h1 .small, .h1 small, .h2 .small, .h2 small, .h3 .small, .h3 small, .h4 .small, .h4 small, .h5 .small, .h5 small, .h6 .small, .h6 small, h1 .small, h1 small, h2 .small, h2 small, h3 .small, h3 small, h4 .small, h4 small, h5 .small, h5 small, h6 .small, h6 small {\n    font-weight: 400;\n    line-height: 1;\n    color: #777\n}\n\n.h1, .h2, .h3, h1, h2, h3 {\n    margin-top: 20px;\n    margin-bottom: 10px\n}\n\n.h1 .small, .h1 small, .h2 .small, .h2 small, .h3 .small, .h3 small, h1 .small, h1 small, h2 .small, h2 small, h3 .small, h3 small {\n    font-size: 65%\n}\n\n.h4, .h5, .h6, h4, h5, h6 {\n    margin-top: 10px;\n    margin-bottom: 10px\n}\n\n.h4 .small, .h4 small, .h5 .small, .h5 small, .h6 .small, .h6 small, h4 .small, h4 small, h5 .small, h5 small, h6 .small, h6 small {\n    font-size: 75%\n}\n\n.h1, h1 {\n    font-size: 36px\n}\n\n.h2, h2 {\n    font-size: 30px\n}\n\n.h3, h3 {\n    font-size: 24px\n}\n\n.h4, h4 {\n    font-size: 18px\n}\n\n.h5, h5 {\n    font-size: 14px\n}\n\n.h6, h6 {\n    font-size: 12px\n}\n\np {\n    margin: 0 0 10px\n}\n\n.lead {\n    margin-bottom: 20px;\n    font-size: 16px;\n    font-weight: 300;\n    line-height: 1.4\n}\n\n@media (min-width: 768px) {\n    .lead {\n        font-size: 21px\n    }\n}\n\n.small, small {\n    font-size: 85%\n}\n\n.mark, mark {\n    padding: .2em;\n    background-color: #fcf8e3\n}\n\n.text-left {\n    text-align: left\n}\n\n.text-right {\n    text-align: right\n}\n\n.text-center {\n    text-align: center\n}\n\n.text-justify {\n    text-align: justify\n}\n\n.text-nowrap {\n    white-space: nowrap\n}\n\n.text-lowercase {\n    text-transform: lowercase\n}\n\n.text-uppercase {\n    text-transform: uppercase\n}\n\n.text-capitalize {\n    text-transform: capitalize\n}\n\n.text-muted {\n    color: #777\n}\n\n.text-primary {\n    color: #337ab7\n}\n\na.text-primary:focus, a.text-primary:hover {\n    color: #286090\n}\n\n.text-success {\n    color: #3c763d\n}\n\na.text-success:focus, a.text-success:hover {\n    color: #2b542c\n}\n\n.text-info {\n    color: #31708f\n}\n\na.text-info:focus, a.text-info:hover {\n    color: #245269\n}\n\n.text-warning {\n    color: #8a6d3b\n}\n\na.text-warning:focus, a.text-warning:hover {\n    color: #66512c\n}\n\n.text-danger {\n    color: #a94442\n}\n\na.text-danger:focus, a.text-danger:hover {\n    color: #843534\n}\n\n.bg-primary {\n    color: #fff;\n    background-color: #337ab7\n}\n\na.bg-primary:focus, a.bg-primary:hover {\n    background-color: #286090\n}\n\n.bg-success {\n    background-color: #dff0d8\n}\n\na.bg-success:focus, a.bg-success:hover {\n    background-color: #c1e2b3\n}\n\n.bg-info {\n    background-color: #d9edf7\n}\n\na.bg-info:focus, a.bg-info:hover {\n    background-color: #afd9ee\n}\n\n.bg-warning {\n    background-color: #fcf8e3\n}\n\na.bg-warning:focus, a.bg-warning:hover {\n    background-color: #f7ecb5\n}\n\n.bg-danger {\n    background-color: #f2dede\n}\n\na.bg-danger:focus, a.bg-danger:hover {\n    background-color: #e4b9b9\n}\n\n.page-header {\n    padding-bottom: 9px;\n    margin: 40px 0 20px;\n    border-bottom: 1px solid #eee\n}\n\nol, ul {\n    margin-top: 0;\n    margin-bottom: 10px\n}\n\nol ol, ol ul, ul ol, ul ul {\n    margin-bottom: 0\n}\n\n.list-unstyled {\n    padding-left: 0;\n    list-style: none\n}\n\n.list-inline {\n    padding-left: 0;\n    margin-left: -5px;\n    list-style: none\n}\n\n.list-inline > li {\n    display: inline-block;\n    padding-right: 5px;\n    padding-left: 5px\n}\n\ndl {\n    margin-top: 0;\n    margin-bottom: 20px\n}\n\ndd, dt {\n    line-height: 1.42857143\n}\n\ndt {\n    font-weight: 700\n}\n\ndd {\n    margin-left: 0\n}\n\n@media (min-width: 768px) {\n    .dl-horizontal dt {\n        float: left;\n        width: 160px;\n        overflow: hidden;\n        clear: left;\n        text-align: right;\n        text-overflow: ellipsis;\n        white-space: nowrap\n    }\n\n    .dl-horizontal dd {\n        margin-left: 180px\n    }\n}\n\nabbr[data-original-title], abbr[title] {\n    cursor: help;\n    border-bottom: 1px dotted #777\n}\n\n.initialism {\n    font-size: 90%;\n    text-transform: uppercase\n}\n\nblockquote {\n    padding: 10px 20px;\n    margin: 0 0 20px;\n    font-size: 17.5px;\n    border-left: 5px solid #eee\n}\n\nblockquote ol:last-child, blockquote p:last-child, blockquote ul:last-child {\n    margin-bottom: 0\n}\n\nblockquote .small, blockquote footer, blockquote small {\n    display: block;\n    font-size: 80%;\n    line-height: 1.42857143;\n    color: #777\n}\n\nblockquote .small:before, blockquote footer:before, blockquote small:before {\n    content: '\\2014   \\A0'\n}\n\n.blockquote-reverse, blockquote.pull-right {\n    padding-right: 15px;\n    padding-left: 0;\n    text-align: right;\n    border-right: 5px solid #eee;\n    border-left: 0\n}\n\n.blockquote-reverse .small:before, .blockquote-reverse footer:before, .blockquote-reverse small:before, blockquote.pull-right .small:before, blockquote.pull-right footer:before, blockquote.pull-right small:before {\n    content: ''\n}\n\n.blockquote-reverse .small:after, .blockquote-reverse footer:after, .blockquote-reverse small:after, blockquote.pull-right .small:after, blockquote.pull-right footer:after, blockquote.pull-right small:after {\n    content: '\\A0   \\2014'\n}\n\naddress {\n    margin-bottom: 20px;\n    font-style: normal;\n    line-height: 1.42857143\n}\n\ncode, kbd, pre, samp {\n    font-family: Menlo, Monaco, Consolas, \"Courier New\", monospace\n}\n\ncode {\n    padding: 2px 4px;\n    font-size: 90%;\n    color: #c7254e;\n    background-color: #f9f2f4;\n    border-radius: 4px\n}\n\nkbd {\n    padding: 2px 4px;\n    font-size: 90%;\n    color: #fff;\n    background-color: #333;\n    border-radius: 3px;\n    -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .25);\n    box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .25)\n}\n\nkbd kbd {\n    padding: 0;\n    font-size: 100%;\n    font-weight: 700;\n    -webkit-box-shadow: none;\n    box-shadow: none\n}\n\npre {\n    display: block;\n    padding: 9.5px;\n    margin: 0 0 10px;\n    font-size: 13px;\n    line-height: 1.42857143;\n    color: #333;\n    word-break: break-all;\n    word-wrap: break-word;\n    background-color: #f5f5f5;\n    border: 1px solid #ccc;\n    border-radius: 4px\n}\n\npre code {\n    padding: 0;\n    font-size: inherit;\n    color: inherit;\n    white-space: pre-wrap;\n    background-color: transparent;\n    border-radius: 0\n}\n\n.pre-scrollable {\n    max-height: 340px;\n    overflow-y: scroll\n}\n\n.container {\n    padding-right: 15px;\n    padding-left: 15px;\n    margin-right: auto;\n    margin-left: auto\n}\n\n@media (min-width: 768px) {\n    .container {\n        width: 750px\n    }\n}\n\n@media (min-width: 992px) {\n    .container {\n        width: 970px\n    }\n}\n\n@media (min-width: 1200px) {\n    .container {\n        width: 1170px\n    }\n}\n\n.container-fluid {\n    padding-right: 15px;\n    padding-left: 15px;\n    margin-right: auto;\n    margin-left: auto\n}\n\n.row {\n    margin-right: -15px;\n    margin-left: -15px\n}\n\n.col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-xs-1, .col-xs-10, .col-xs-11, .col-xs-12, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9 {\n    position: relative;\n    min-height: 1px;\n    padding-right: 15px;\n    padding-left: 15px\n}\n\n.col-xs-1, .col-xs-10, .col-xs-11, .col-xs-12, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9 {\n    float: left\n}\n\n.col-xs-12 {\n    width: 100%\n}\n\n.col-xs-11 {\n    width: 91.66666667%\n}\n\n.col-xs-10 {\n    width: 83.33333333%\n}\n\n.col-xs-9 {\n    width: 75%\n}\n\n.col-xs-8 {\n    width: 66.66666667%\n}\n\n.col-xs-7 {\n    width: 58.33333333%\n}\n\n.col-xs-6 {\n    width: 50%\n}\n\n.col-xs-5 {\n    width: 41.66666667%\n}\n\n.col-xs-4 {\n    width: 33.33333333%\n}\n\n.col-xs-3 {\n    width: 25%\n}\n\n.col-xs-2 {\n    width: 16.66666667%\n}\n\n.col-xs-1 {\n    width: 8.33333333%\n}\n\n.col-xs-pull-12 {\n    right: 100%\n}\n\n.col-xs-pull-11 {\n    right: 91.66666667%\n}\n\n.col-xs-pull-10 {\n    right: 83.33333333%\n}\n\n.col-xs-pull-9 {\n    right: 75%\n}\n\n.col-xs-pull-8 {\n    right: 66.66666667%\n}\n\n.col-xs-pull-7 {\n    right: 58.33333333%\n}\n\n.col-xs-pull-6 {\n    right: 50%\n}\n\n.col-xs-pull-5 {\n    right: 41.66666667%\n}\n\n.col-xs-pull-4 {\n    right: 33.33333333%\n}\n\n.col-xs-pull-3 {\n    right: 25%\n}\n\n.col-xs-pull-2 {\n    right: 16.66666667%\n}\n\n.col-xs-pull-1 {\n    right: 8.33333333%\n}\n\n.col-xs-pull-0 {\n    right: auto\n}\n\n.col-xs-push-12 {\n    left: 100%\n}\n\n.col-xs-push-11 {\n    left: 91.66666667%\n}\n\n.col-xs-push-10 {\n    left: 83.33333333%\n}\n\n.col-xs-push-9 {\n    left: 75%\n}\n\n.col-xs-push-8 {\n    left: 66.66666667%\n}\n\n.col-xs-push-7 {\n    left: 58.33333333%\n}\n\n.col-xs-push-6 {\n    left: 50%\n}\n\n.col-xs-push-5 {\n    left: 41.66666667%\n}\n\n.col-xs-push-4 {\n    left: 33.33333333%\n}\n\n.col-xs-push-3 {\n    left: 25%\n}\n\n.col-xs-push-2 {\n    left: 16.66666667%\n}\n\n.col-xs-push-1 {\n    left: 8.33333333%\n}\n\n.col-xs-push-0 {\n    left: auto\n}\n\n.col-xs-offset-12 {\n    margin-left: 100%\n}\n\n.col-xs-offset-11 {\n    margin-left: 91.66666667%\n}\n\n.col-xs-offset-10 {\n    margin-left: 83.33333333%\n}\n\n.col-xs-offset-9 {\n    margin-left: 75%\n}\n\n.col-xs-offset-8 {\n    margin-left: 66.66666667%\n}\n\n.col-xs-offset-7 {\n    margin-left: 58.33333333%\n}\n\n.col-xs-offset-6 {\n    margin-left: 50%\n}\n\n.col-xs-offset-5 {\n    margin-left: 41.66666667%\n}\n\n.col-xs-offset-4 {\n    margin-left: 33.33333333%\n}\n\n.col-xs-offset-3 {\n    margin-left: 25%\n}\n\n.col-xs-offset-2 {\n    margin-left: 16.66666667%\n}\n\n.col-xs-offset-1 {\n    margin-left: 8.33333333%\n}\n\n.col-xs-offset-0 {\n    margin-left: 0\n}\n\n@media (min-width: 768px) {\n    .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9 {\n        float: left\n    }\n\n    .col-sm-12 {\n        width: 100%\n    }\n\n    .col-sm-11 {\n        width: 91.66666667%\n    }\n\n    .col-sm-10 {\n        width: 83.33333333%\n    }\n\n    .col-sm-9 {\n        width: 75%\n    }\n\n    .col-sm-8 {\n        width: 66.66666667%\n    }\n\n    .col-sm-7 {\n        width: 58.33333333%\n    }\n\n    .col-sm-6 {\n        width: 50%\n    }\n\n    .col-sm-5 {\n        width: 41.66666667%\n    }\n\n    .col-sm-4 {\n        width: 33.33333333%\n    }\n\n    .col-sm-3 {\n        width: 25%\n    }\n\n    .col-sm-2 {\n        width: 16.66666667%\n    }\n\n    .col-sm-1 {\n        width: 8.33333333%\n    }\n\n    .col-sm-pull-12 {\n        right: 100%\n    }\n\n    .col-sm-pull-11 {\n        right: 91.66666667%\n    }\n\n    .col-sm-pull-10 {\n        right: 83.33333333%\n    }\n\n    .col-sm-pull-9 {\n        right: 75%\n    }\n\n    .col-sm-pull-8 {\n        right: 66.66666667%\n    }\n\n    .col-sm-pull-7 {\n        right: 58.33333333%\n    }\n\n    .col-sm-pull-6 {\n        right: 50%\n    }\n\n    .col-sm-pull-5 {\n        right: 41.66666667%\n    }\n\n    .col-sm-pull-4 {\n        right: 33.33333333%\n    }\n\n    .col-sm-pull-3 {\n        right: 25%\n    }\n\n    .col-sm-pull-2 {\n        right: 16.66666667%\n    }\n\n    .col-sm-pull-1 {\n        right: 8.33333333%\n    }\n\n    .col-sm-pull-0 {\n        right: auto\n    }\n\n    .col-sm-push-12 {\n        left: 100%\n    }\n\n    .col-sm-push-11 {\n        left: 91.66666667%\n    }\n\n    .col-sm-push-10 {\n        left: 83.33333333%\n    }\n\n    .col-sm-push-9 {\n        left: 75%\n    }\n\n    .col-sm-push-8 {\n        left: 66.66666667%\n    }\n\n    .col-sm-push-7 {\n        left: 58.33333333%\n    }\n\n    .col-sm-push-6 {\n        left: 50%\n    }\n\n    .col-sm-push-5 {\n        left: 41.66666667%\n    }\n\n    .col-sm-push-4 {\n        left: 33.33333333%\n    }\n\n    .col-sm-push-3 {\n        left: 25%\n    }\n\n    .col-sm-push-2 {\n        left: 16.66666667%\n    }\n\n    .col-sm-push-1 {\n        left: 8.33333333%\n    }\n\n    .col-sm-push-0 {\n        left: auto\n    }\n\n    .col-sm-offset-12 {\n        margin-left: 100%\n    }\n\n    .col-sm-offset-11 {\n        margin-left: 91.66666667%\n    }\n\n    .col-sm-offset-10 {\n        margin-left: 83.33333333%\n    }\n\n    .col-sm-offset-9 {\n        margin-left: 75%\n    }\n\n    .col-sm-offset-8 {\n        margin-left: 66.66666667%\n    }\n\n    .col-sm-offset-7 {\n        margin-left: 58.33333333%\n    }\n\n    .col-sm-offset-6 {\n        margin-left: 50%\n    }\n\n    .col-sm-offset-5 {\n        margin-left: 41.66666667%\n    }\n\n    .col-sm-offset-4 {\n        margin-left: 33.33333333%\n    }\n\n    .col-sm-offset-3 {\n        margin-left: 25%\n    }\n\n    .col-sm-offset-2 {\n        margin-left: 16.66666667%\n    }\n\n    .col-sm-offset-1 {\n        margin-left: 8.33333333%\n    }\n\n    .col-sm-offset-0 {\n        margin-left: 0\n    }\n}\n\n@media (min-width: 992px) {\n    .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9 {\n        float: left\n    }\n\n    .col-md-12 {\n        width: 100%\n    }\n\n    .col-md-11 {\n        width: 91.66666667%\n    }\n\n    .col-md-10 {\n        width: 83.33333333%\n    }\n\n    .col-md-9 {\n        width: 75%\n    }\n\n    .col-md-8 {\n        width: 66.66666667%\n    }\n\n    .col-md-7 {\n        width: 58.33333333%\n    }\n\n    .col-md-6 {\n        width: 50%\n    }\n\n    .col-md-5 {\n        width: 41.66666667%\n    }\n\n    .col-md-4 {\n        width: 33.33333333%\n    }\n\n    .col-md-3 {\n        width: 25%\n    }\n\n    .col-md-2 {\n        width: 16.66666667%\n    }\n\n    .col-md-1 {\n        width: 8.33333333%\n    }\n\n    .col-md-pull-12 {\n        right: 100%\n    }\n\n    .col-md-pull-11 {\n        right: 91.66666667%\n    }\n\n    .col-md-pull-10 {\n        right: 83.33333333%\n    }\n\n    .col-md-pull-9 {\n        right: 75%\n    }\n\n    .col-md-pull-8 {\n        right: 66.66666667%\n    }\n\n    .col-md-pull-7 {\n        right: 58.33333333%\n    }\n\n    .col-md-pull-6 {\n        right: 50%\n    }\n\n    .col-md-pull-5 {\n        right: 41.66666667%\n    }\n\n    .col-md-pull-4 {\n        right: 33.33333333%\n    }\n\n    .col-md-pull-3 {\n        right: 25%\n    }\n\n    .col-md-pull-2 {\n        right: 16.66666667%\n    }\n\n    .col-md-pull-1 {\n        right: 8.33333333%\n    }\n\n    .col-md-pull-0 {\n        right: auto\n    }\n\n    .col-md-push-12 {\n        left: 100%\n    }\n\n    .col-md-push-11 {\n        left: 91.66666667%\n    }\n\n    .col-md-push-10 {\n        left: 83.33333333%\n    }\n\n    .col-md-push-9 {\n        left: 75%\n    }\n\n    .col-md-push-8 {\n        left: 66.66666667%\n    }\n\n    .col-md-push-7 {\n        left: 58.33333333%\n    }\n\n    .col-md-push-6 {\n        left: 50%\n    }\n\n    .col-md-push-5 {\n        left: 41.66666667%\n    }\n\n    .col-md-push-4 {\n        left: 33.33333333%\n    }\n\n    .col-md-push-3 {\n        left: 25%\n    }\n\n    .col-md-push-2 {\n        left: 16.66666667%\n    }\n\n    .col-md-push-1 {\n        left: 8.33333333%\n    }\n\n    .col-md-push-0 {\n        left: auto\n    }\n\n    .col-md-offset-12 {\n        margin-left: 100%\n    }\n\n    .col-md-offset-11 {\n        margin-left: 91.66666667%\n    }\n\n    .col-md-offset-10 {\n        margin-left: 83.33333333%\n    }\n\n    .col-md-offset-9 {\n        margin-left: 75%\n    }\n\n    .col-md-offset-8 {\n        margin-left: 66.66666667%\n    }\n\n    .col-md-offset-7 {\n        margin-left: 58.33333333%\n    }\n\n    .col-md-offset-6 {\n        margin-left: 50%\n    }\n\n    .col-md-offset-5 {\n        margin-left: 41.66666667%\n    }\n\n    .col-md-offset-4 {\n        margin-left: 33.33333333%\n    }\n\n    .col-md-offset-3 {\n        margin-left: 25%\n    }\n\n    .col-md-offset-2 {\n        margin-left: 16.66666667%\n    }\n\n    .col-md-offset-1 {\n        margin-left: 8.33333333%\n    }\n\n    .col-md-offset-0 {\n        margin-left: 0\n    }\n}\n\n@media (min-width: 1200px) {\n    .col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9 {\n        float: left\n    }\n\n    .col-lg-12 {\n        width: 100%\n    }\n\n    .col-lg-11 {\n        width: 91.66666667%\n    }\n\n    .col-lg-10 {\n        width: 83.33333333%\n    }\n\n    .col-lg-9 {\n        width: 75%\n    }\n\n    .col-lg-8 {\n        width: 66.66666667%\n    }\n\n    .col-lg-7 {\n        width: 58.33333333%\n    }\n\n    .col-lg-6 {\n        width: 50%\n    }\n\n    .col-lg-5 {\n        width: 41.66666667%\n    }\n\n    .col-lg-4 {\n        width: 33.33333333%\n    }\n\n    .col-lg-3 {\n        width: 25%\n    }\n\n    .col-lg-2 {\n        width: 16.66666667%\n    }\n\n    .col-lg-1 {\n        width: 8.33333333%\n    }\n\n    .col-lg-pull-12 {\n        right: 100%\n    }\n\n    .col-lg-pull-11 {\n        right: 91.66666667%\n    }\n\n    .col-lg-pull-10 {\n        right: 83.33333333%\n    }\n\n    .col-lg-pull-9 {\n        right: 75%\n    }\n\n    .col-lg-pull-8 {\n        right: 66.66666667%\n    }\n\n    .col-lg-pull-7 {\n        right: 58.33333333%\n    }\n\n    .col-lg-pull-6 {\n        right: 50%\n    }\n\n    .col-lg-pull-5 {\n        right: 41.66666667%\n    }\n\n    .col-lg-pull-4 {\n        right: 33.33333333%\n    }\n\n    .col-lg-pull-3 {\n        right: 25%\n    }\n\n    .col-lg-pull-2 {\n        right: 16.66666667%\n    }\n\n    .col-lg-pull-1 {\n        right: 8.33333333%\n    }\n\n    .col-lg-pull-0 {\n        right: auto\n    }\n\n    .col-lg-push-12 {\n        left: 100%\n    }\n\n    .col-lg-push-11 {\n        left: 91.66666667%\n    }\n\n    .col-lg-push-10 {\n        left: 83.33333333%\n    }\n\n    .col-lg-push-9 {\n        left: 75%\n    }\n\n    .col-lg-push-8 {\n        left: 66.66666667%\n    }\n\n    .col-lg-push-7 {\n        left: 58.33333333%\n    }\n\n    .col-lg-push-6 {\n        left: 50%\n    }\n\n    .col-lg-push-5 {\n        left: 41.66666667%\n    }\n\n    .col-lg-push-4 {\n        left: 33.33333333%\n    }\n\n    .col-lg-push-3 {\n        left: 25%\n    }\n\n    .col-lg-push-2 {\n        left: 16.66666667%\n    }\n\n    .col-lg-push-1 {\n        left: 8.33333333%\n    }\n\n    .col-lg-push-0 {\n        left: auto\n    }\n\n    .col-lg-offset-12 {\n        margin-left: 100%\n    }\n\n    .col-lg-offset-11 {\n        margin-left: 91.66666667%\n    }\n\n    .col-lg-offset-10 {\n        margin-left: 83.33333333%\n    }\n\n    .col-lg-offset-9 {\n        margin-left: 75%\n    }\n\n    .col-lg-offset-8 {\n        margin-left: 66.66666667%\n    }\n\n    .col-lg-offset-7 {\n        margin-left: 58.33333333%\n    }\n\n    .col-lg-offset-6 {\n        margin-left: 50%\n    }\n\n    .col-lg-offset-5 {\n        margin-left: 41.66666667%\n    }\n\n    .col-lg-offset-4 {\n        margin-left: 33.33333333%\n    }\n\n    .col-lg-offset-3 {\n        margin-left: 25%\n    }\n\n    .col-lg-offset-2 {\n        margin-left: 16.66666667%\n    }\n\n    .col-lg-offset-1 {\n        margin-left: 8.33333333%\n    }\n\n    .col-lg-offset-0 {\n        margin-left: 0\n    }\n}\n\ntable {\n    background-color: transparent\n}\n\ncaption {\n    padding-top: 8px;\n    padding-bottom: 8px;\n    color: #777;\n    text-align: left\n}\n\nth {\n    text-align: left\n}\n\n.table {\n    width: 100%;\n    max-width: 100%;\n    margin-bottom: 20px\n}\n\n.table > tbody > tr > td, .table > tbody > tr > th, .table > tfoot > tr > td, .table > tfoot > tr > th, .table > thead > tr > td, .table > thead > tr > th {\n    padding: 8px;\n    line-height: 1.42857143;\n    vertical-align: top;\n    border-top: 1px solid #ddd\n}\n\n.table > thead > tr > th {\n    vertical-align: bottom;\n    border-bottom: 2px solid #ddd\n}\n\n.table > caption + thead > tr:first-child > td, .table > caption + thead > tr:first-child > th, .table > colgroup + thead > tr:first-child > td, .table > colgroup + thead > tr:first-child > th, .table > thead:first-child > tr:first-child > td, .table > thead:first-child > tr:first-child > th {\n    border-top: 0\n}\n\n.table > tbody + tbody {\n    border-top: 2px solid #ddd\n}\n\n.table .table {\n    background-color: #fff\n}\n\n.table-condensed > tbody > tr > td, .table-condensed > tbody > tr > th, .table-condensed > tfoot > tr > td, .table-condensed > tfoot > tr > th, .table-condensed > thead > tr > td, .table-condensed > thead > tr > th {\n    padding: 5px\n}\n\n.table-bordered {\n    border: 1px solid #ddd\n}\n\n.table-bordered > tbody > tr > td, .table-bordered > tbody > tr > th, .table-bordered > tfoot > tr > td, .table-bordered > tfoot > tr > th, .table-bordered > thead > tr > td, .table-bordered > thead > tr > th {\n    border: 1px solid #ddd\n}\n\n.table-bordered > thead > tr > td, .table-bordered > thead > tr > th {\n    border-bottom-width: 2px\n}\n\n.table-striped > tbody > tr:nth-of-type(odd) {\n    background-color: #f9f9f9\n}\n\n.table-hover > tbody > tr:hover {\n    background-color: #f5f5f5\n}\n\ntable col[class*=col-] {\n    position: static;\n    display: table-column;\n    float: none\n}\n\ntable td[class*=col-], table th[class*=col-] {\n    position: static;\n    display: table-cell;\n    float: none\n}\n\n.table > tbody > tr.active > td, .table > tbody > tr.active > th, .table > tbody > tr > td.active, .table > tbody > tr > th.active, .table > tfoot > tr.active > td, .table > tfoot > tr.active > th, .table > tfoot > tr > td.active, .table > tfoot > tr > th.active, .table > thead > tr.active > td, .table > thead > tr.active > th, .table > thead > tr > td.active, .table > thead > tr > th.active {\n    background-color: #f5f5f5\n}\n\n.table-hover > tbody > tr.active:hover > td, .table-hover > tbody > tr.active:hover > th, .table-hover > tbody > tr:hover > .active, .table-hover > tbody > tr > td.active:hover, .table-hover > tbody > tr > th.active:hover {\n    background-color: #e8e8e8\n}\n\n.table > tbody > tr.success > td, .table > tbody > tr.success > th, .table > tbody > tr > td.success, .table > tbody > tr > th.success, .table > tfoot > tr.success > td, .table > tfoot > tr.success > th, .table > tfoot > tr > td.success, .table > tfoot > tr > th.success, .table > thead > tr.success > td, .table > thead > tr.success > th, .table > thead > tr > td.success, .table > thead > tr > th.success {\n    background-color: #dff0d8\n}\n\n.table-hover > tbody > tr.success:hover > td, .table-hover > tbody > tr.success:hover > th, .table-hover > tbody > tr:hover > .success, .table-hover > tbody > tr > td.success:hover, .table-hover > tbody > tr > th.success:hover {\n    background-color: #d0e9c6\n}\n\n.table > tbody > tr.info > td, .table > tbody > tr.info > th, .table > tbody > tr > td.info, .table > tbody > tr > th.info, .table > tfoot > tr.info > td, .table > tfoot > tr.info > th, .table > tfoot > tr > td.info, .table > tfoot > tr > th.info, .table > thead > tr.info > td, .table > thead > tr.info > th, .table > thead > tr > td.info, .table > thead > tr > th.info {\n    background-color: #d9edf7\n}\n\n.table-hover > tbody > tr.info:hover > td, .table-hover > tbody > tr.info:hover > th, .table-hover > tbody > tr:hover > .info, .table-hover > tbody > tr > td.info:hover, .table-hover > tbody > tr > th.info:hover {\n    background-color: #c4e3f3\n}\n\n.table > tbody > tr.warning > td, .table > tbody > tr.warning > th, .table > tbody > tr > td.warning, .table > tbody > tr > th.warning, .table > tfoot > tr.warning > td, .table > tfoot > tr.warning > th, .table > tfoot > tr > td.warning, .table > tfoot > tr > th.warning, .table > thead > tr.warning > td, .table > thead > tr.warning > th, .table > thead > tr > td.warning, .table > thead > tr > th.warning {\n    background-color: #fcf8e3\n}\n\n.table-hover > tbody > tr.warning:hover > td, .table-hover > tbody > tr.warning:hover > th, .table-hover > tbody > tr:hover > .warning, .table-hover > tbody > tr > td.warning:hover, .table-hover > tbody > tr > th.warning:hover {\n    background-color: #faf2cc\n}\n\n.table > tbody > tr.danger > td, .table > tbody > tr.danger > th, .table > tbody > tr > td.danger, .table > tbody > tr > th.danger, .table > tfoot > tr.danger > td, .table > tfoot > tr.danger > th, .table > tfoot > tr > td.danger, .table > tfoot > tr > th.danger, .table > thead > tr.danger > td, .table > thead > tr.danger > th, .table > thead > tr > td.danger, .table > thead > tr > th.danger {\n    background-color: #f2dede\n}\n\n.table-hover > tbody > tr.danger:hover > td, .table-hover > tbody > tr.danger:hover > th, .table-hover > tbody > tr:hover > .danger, .table-hover > tbody > tr > td.danger:hover, .table-hover > tbody > tr > th.danger:hover {\n    background-color: #ebcccc\n}\n\n.table-responsive {\n    min-height: .01%;\n    overflow-x: auto\n}\n\n@media screen and (max-width: 767px) {\n    .table-responsive {\n        width: 100%;\n        margin-bottom: 15px;\n        overflow-y: hidden;\n        -ms-overflow-style: -ms-autohiding-scrollbar;\n        border: 1px solid #ddd\n    }\n\n    .table-responsive > .table {\n        margin-bottom: 0\n    }\n\n    .table-responsive > .table > tbody > tr > td, .table-responsive > .table > tbody > tr > th, .table-responsive > .table > tfoot > tr > td, .table-responsive > .table > tfoot > tr > th, .table-responsive > .table > thead > tr > td, .table-responsive > .table > thead > tr > th {\n        white-space: nowrap\n    }\n\n    .table-responsive > .table-bordered {\n        border: 0\n    }\n\n    .table-responsive > .table-bordered > tbody > tr > td:first-child, .table-responsive > .table-bordered > tbody > tr > th:first-child, .table-responsive > .table-bordered > tfoot > tr > td:first-child, .table-responsive > .table-bordered > tfoot > tr > th:first-child, .table-responsive > .table-bordered > thead > tr > td:first-child, .table-responsive > .table-bordered > thead > tr > th:first-child {\n        border-left: 0\n    }\n\n    .table-responsive > .table-bordered > tbody > tr > td:last-child, .table-responsive > .table-bordered > tbody > tr > th:last-child, .table-responsive > .table-bordered > tfoot > tr > td:last-child, .table-responsive > .table-bordered > tfoot > tr > th:last-child, .table-responsive > .table-bordered > thead > tr > td:last-child, .table-responsive > .table-bordered > thead > tr > th:last-child {\n        border-right: 0\n    }\n\n    .table-responsive > .table-bordered > tbody > tr:last-child > td, .table-responsive > .table-bordered > tbody > tr:last-child > th, .table-responsive > .table-bordered > tfoot > tr:last-child > td, .table-responsive > .table-bordered > tfoot > tr:last-child > th {\n        border-bottom: 0\n    }\n}\n\nfieldset {\n    min-width: 0;\n    padding: 0;\n    margin: 0;\n    border: 0\n}\n\nlegend {\n    display: block;\n    width: 100%;\n    padding: 0;\n    margin-bottom: 20px;\n    font-size: 21px;\n    line-height: inherit;\n    color: #333;\n    border: 0;\n    border-bottom: 1px solid #e5e5e5\n}\n\nlabel {\n    display: inline-block;\n    max-width: 100%;\n    margin-bottom: 5px;\n    font-weight: 700\n}\n\ninput[type=search] {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box\n}\n\ninput[type=checkbox], input[type=radio] {\n    margin: 4px 0 0;\n    margin-top: 1px \\9;\n    line-height: normal\n}\n\ninput[type=file] {\n    display: block\n}\n\ninput[type=range] {\n    display: block;\n    width: 100%\n}\n\nselect[multiple], select[size] {\n    height: auto\n}\n\ninput[type=file]:focus, input[type=checkbox]:focus, input[type=radio]:focus {\n    outline: 5px auto -webkit-focus-ring-color;\n    outline-offset: -2px\n}\n\noutput {\n    display: block;\n    padding-top: 7px;\n    font-size: 14px;\n    line-height: 1.42857143;\n    color: #555\n}\n\n.form-control {\n    display: block;\n    width: 100%;\n    height: 34px;\n    padding: 6px 12px;\n    font-size: 14px;\n    line-height: 1.42857143;\n    color: #555;\n    background-color: #fff;\n    background-image: none;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n    -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;\n    -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s\n}\n\n.form-control:focus {\n    border-color: #66afe9;\n    outline: 0;\n    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, .6);\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, .6)\n}\n\n.form-control::-moz-placeholder {\n    color: #999;\n    opacity: 1\n}\n\n.form-control:-ms-input-placeholder {\n    color: #999\n}\n\n.form-control::-webkit-input-placeholder {\n    color: #999\n}\n\n.form-control::-ms-expand {\n    background-color: transparent;\n    border: 0\n}\n\n.form-control[disabled], .form-control[readonly], fieldset[disabled] .form-control {\n    background-color: #eee;\n    opacity: 1\n}\n\n.form-control[disabled], fieldset[disabled] .form-control {\n    cursor: not-allowed\n}\n\ntextarea.form-control {\n    height: auto\n}\n\ninput[type=search] {\n    -webkit-appearance: none\n}\n\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n    input[type=date].form-control, input[type=time].form-control, input[type=datetime-local].form-control, input[type=month].form-control {\n        line-height: 34px\n    }\n\n    .input-group-sm input[type=date], .input-group-sm input[type=time], .input-group-sm input[type=datetime-local], .input-group-sm input[type=month], input[type=date].input-sm, input[type=time].input-sm, input[type=datetime-local].input-sm, input[type=month].input-sm {\n        line-height: 30px\n    }\n\n    .input-group-lg input[type=date], .input-group-lg input[type=time], .input-group-lg input[type=datetime-local], .input-group-lg input[type=month], input[type=date].input-lg, input[type=time].input-lg, input[type=datetime-local].input-lg, input[type=month].input-lg {\n        line-height: 46px\n    }\n}\n\n.form-group {\n    margin-bottom: 15px\n}\n\n.checkbox, .radio {\n    position: relative;\n    display: block;\n    margin-top: 10px;\n    margin-bottom: 10px\n}\n\n.checkbox label, .radio label {\n    min-height: 20px;\n    padding-left: 20px;\n    margin-bottom: 0;\n    font-weight: 400;\n    cursor: pointer\n}\n\n.checkbox input[type=checkbox], .checkbox-inline input[type=checkbox], .radio input[type=radio], .radio-inline input[type=radio] {\n    position: absolute;\n    margin-top: 4px \\9;\n    margin-left: -20px\n}\n\n.checkbox + .checkbox, .radio + .radio {\n    margin-top: -5px\n}\n\n.checkbox-inline, .radio-inline {\n    position: relative;\n    display: inline-block;\n    padding-left: 20px;\n    margin-bottom: 0;\n    font-weight: 400;\n    vertical-align: middle;\n    cursor: pointer\n}\n\n.checkbox-inline + .checkbox-inline, .radio-inline + .radio-inline {\n    margin-top: 0;\n    margin-left: 10px\n}\n\nfieldset[disabled] input[type=checkbox], fieldset[disabled] input[type=radio], input[type=checkbox].disabled, input[type=checkbox][disabled], input[type=radio].disabled, input[type=radio][disabled] {\n    cursor: not-allowed\n}\n\n.checkbox-inline.disabled, .radio-inline.disabled, fieldset[disabled] .checkbox-inline, fieldset[disabled] .radio-inline {\n    cursor: not-allowed\n}\n\n.checkbox.disabled label, .radio.disabled label, fieldset[disabled] .checkbox label, fieldset[disabled] .radio label {\n    cursor: not-allowed\n}\n\n.form-control-static {\n    min-height: 34px;\n    padding-top: 7px;\n    padding-bottom: 7px;\n    margin-bottom: 0\n}\n\n.form-control-static.input-lg, .form-control-static.input-sm {\n    padding-right: 0;\n    padding-left: 0\n}\n\n.input-sm {\n    height: 30px;\n    padding: 5px 10px;\n    font-size: 12px;\n    line-height: 1.5;\n    border-radius: 3px\n}\n\nselect.input-sm {\n    height: 30px;\n    line-height: 30px\n}\n\nselect[multiple].input-sm, textarea.input-sm {\n    height: auto\n}\n\n.form-group-sm .form-control {\n    height: 30px;\n    padding: 5px 10px;\n    font-size: 12px;\n    line-height: 1.5;\n    border-radius: 3px\n}\n\n.form-group-sm select.form-control {\n    height: 30px;\n    line-height: 30px\n}\n\n.form-group-sm select[multiple].form-control, .form-group-sm textarea.form-control {\n    height: auto\n}\n\n.form-group-sm .form-control-static {\n    height: 30px;\n    min-height: 32px;\n    padding: 6px 10px;\n    font-size: 12px;\n    line-height: 1.5\n}\n\n.input-lg {\n    height: 46px;\n    padding: 10px 16px;\n    font-size: 18px;\n    line-height: 1.3333333;\n    border-radius: 6px\n}\n\nselect.input-lg {\n    height: 46px;\n    line-height: 46px\n}\n\nselect[multiple].input-lg, textarea.input-lg {\n    height: auto\n}\n\n.form-group-lg .form-control {\n    height: 46px;\n    padding: 10px 16px;\n    font-size: 18px;\n    line-height: 1.3333333;\n    border-radius: 6px\n}\n\n.form-group-lg select.form-control {\n    height: 46px;\n    line-height: 46px\n}\n\n.form-group-lg select[multiple].form-control, .form-group-lg textarea.form-control {\n    height: auto\n}\n\n.form-group-lg .form-control-static {\n    height: 46px;\n    min-height: 38px;\n    padding: 11px 16px;\n    font-size: 18px;\n    line-height: 1.3333333\n}\n\n.has-feedback {\n    position: relative\n}\n\n.has-feedback .form-control {\n    padding-right: 42.5px\n}\n\n.form-control-feedback {\n    position: absolute;\n    top: 0;\n    right: 0;\n    z-index: 2;\n    display: block;\n    width: 34px;\n    height: 34px;\n    line-height: 34px;\n    text-align: center;\n    pointer-events: none\n}\n\n.form-group-lg .form-control + .form-control-feedback, .input-group-lg + .form-control-feedback, .input-lg + .form-control-feedback {\n    width: 46px;\n    height: 46px;\n    line-height: 46px\n}\n\n.form-group-sm .form-control + .form-control-feedback, .input-group-sm + .form-control-feedback, .input-sm + .form-control-feedback {\n    width: 30px;\n    height: 30px;\n    line-height: 30px\n}\n\n.has-success .checkbox, .has-success .checkbox-inline, .has-success .control-label, .has-success .help-block, .has-success .radio, .has-success .radio-inline, .has-success.checkbox label, .has-success.checkbox-inline label, .has-success.radio label, .has-success.radio-inline label {\n    color: #3c763d\n}\n\n.has-success .form-control {\n    border-color: #3c763d;\n    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075)\n}\n\n.has-success .form-control:focus {\n    border-color: #2b542c;\n    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #67b168;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #67b168\n}\n\n.has-success .input-group-addon {\n    color: #3c763d;\n    background-color: #dff0d8;\n    border-color: #3c763d\n}\n\n.has-success .form-control-feedback {\n    color: #3c763d\n}\n\n.has-warning .checkbox, .has-warning .checkbox-inline, .has-warning .control-label, .has-warning .help-block, .has-warning .radio, .has-warning .radio-inline, .has-warning.checkbox label, .has-warning.checkbox-inline label, .has-warning.radio label, .has-warning.radio-inline label {\n    color: #8a6d3b\n}\n\n.has-warning .form-control {\n    border-color: #8a6d3b;\n    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075)\n}\n\n.has-warning .form-control:focus {\n    border-color: #66512c;\n    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #c0a16b;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #c0a16b\n}\n\n.has-warning .input-group-addon {\n    color: #8a6d3b;\n    background-color: #fcf8e3;\n    border-color: #8a6d3b\n}\n\n.has-warning .form-control-feedback {\n    color: #8a6d3b\n}\n\n.has-error .checkbox, .has-error .checkbox-inline, .has-error .control-label, .has-error .help-block, .has-error .radio, .has-error .radio-inline, .has-error.checkbox label, .has-error.checkbox-inline label, .has-error.radio label, .has-error.radio-inline label {\n    color: #a94442\n}\n\n.has-error .form-control {\n    border-color: #a94442;\n    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075)\n}\n\n.has-error .form-control:focus {\n    border-color: #843534;\n    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #ce8483;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #ce8483\n}\n\n.has-error .input-group-addon {\n    color: #a94442;\n    background-color: #f2dede;\n    border-color: #a94442\n}\n\n.has-error .form-control-feedback {\n    color: #a94442\n}\n\n.has-feedback label ~ .form-control-feedback {\n    top: 25px\n}\n\n.has-feedback label.sr-only ~ .form-control-feedback {\n    top: 0\n}\n\n.help-block {\n    display: block;\n    margin-top: 5px;\n    margin-bottom: 10px;\n    color: #737373\n}\n\n@media (min-width: 768px) {\n    .form-inline .form-group {\n        display: inline-block;\n        margin-bottom: 0;\n        vertical-align: middle\n    }\n\n    .form-inline .form-control {\n        display: inline-block;\n        width: auto;\n        vertical-align: middle\n    }\n\n    .form-inline .form-control-static {\n        display: inline-block\n    }\n\n    .form-inline .input-group {\n        display: inline-table;\n        vertical-align: middle\n    }\n\n    .form-inline .input-group .form-control, .form-inline .input-group .input-group-addon, .form-inline .input-group .input-group-btn {\n        width: auto\n    }\n\n    .form-inline .input-group > .form-control {\n        width: 100%\n    }\n\n    .form-inline .control-label {\n        margin-bottom: 0;\n        vertical-align: middle\n    }\n\n    .form-inline .checkbox, .form-inline .radio {\n        display: inline-block;\n        margin-top: 0;\n        margin-bottom: 0;\n        vertical-align: middle\n    }\n\n    .form-inline .checkbox label, .form-inline .radio label {\n        padding-left: 0\n    }\n\n    .form-inline .checkbox input[type=checkbox], .form-inline .radio input[type=radio] {\n        position: relative;\n        margin-left: 0\n    }\n\n    .form-inline .has-feedback .form-control-feedback {\n        top: 0\n    }\n}\n\n.form-horizontal .checkbox, .form-horizontal .checkbox-inline, .form-horizontal .radio, .form-horizontal .radio-inline {\n    padding-top: 7px;\n    margin-top: 0;\n    margin-bottom: 0\n}\n\n.form-horizontal .checkbox, .form-horizontal .radio {\n    min-height: 27px\n}\n\n.form-horizontal .form-group {\n    margin-right: -15px;\n    margin-left: -15px\n}\n\n@media (min-width: 768px) {\n    .form-horizontal .control-label {\n        padding-top: 7px;\n        margin-bottom: 0;\n        text-align: right\n    }\n}\n\n.form-horizontal .has-feedback .form-control-feedback {\n    right: 15px\n}\n\n@media (min-width: 768px) {\n    .form-horizontal .form-group-lg .control-label {\n        padding-top: 11px;\n        font-size: 18px\n    }\n}\n\n@media (min-width: 768px) {\n    .form-horizontal .form-group-sm .control-label {\n        padding-top: 6px;\n        font-size: 12px\n    }\n}\n\n.btn {\n    display: inline-block;\n    padding: 6px 12px;\n    margin-bottom: 0;\n    font-size: 14px;\n    font-weight: 400;\n    line-height: 1.42857143;\n    text-align: center;\n    white-space: nowrap;\n    vertical-align: middle;\n    -ms-touch-action: manipulation;\n    touch-action: manipulation;\n    cursor: pointer;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    background-image: none;\n    border: 1px solid transparent;\n    border-radius: 4px\n}\n\n.btn.active.focus, .btn.active:focus, .btn.focus, .btn:active.focus, .btn:active:focus, .btn:focus {\n    outline: 5px auto -webkit-focus-ring-color;\n    outline-offset: -2px\n}\n\n.btn.focus, .btn:focus, .btn:hover {\n    color: #333;\n    text-decoration: none\n}\n\n.btn.active, .btn:active {\n    background-image: none;\n    outline: 0;\n    -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);\n    box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125)\n}\n\n.btn.disabled, .btn[disabled], fieldset[disabled] .btn {\n    cursor: not-allowed;\n    filter: alpha(opacity=65);\n    -webkit-box-shadow: none;\n    box-shadow: none;\n    opacity: .65\n}\n\na.btn.disabled, fieldset[disabled] a.btn {\n    pointer-events: none\n}\n\n.btn-default {\n    color: #333;\n    background-color: #fff;\n    border-color: #ccc\n}\n\n.btn-default.focus, .btn-default:focus {\n    color: #333;\n    background-color: #e6e6e6;\n    border-color: #8c8c8c\n}\n\n.btn-default:hover {\n    color: #333;\n    background-color: #e6e6e6;\n    border-color: #adadad\n}\n\n.btn-default.active, .btn-default:active, .open > .dropdown-toggle.btn-default {\n    color: #333;\n    background-color: #e6e6e6;\n    border-color: #adadad\n}\n\n.btn-default.active.focus, .btn-default.active:focus, .btn-default.active:hover, .btn-default:active.focus, .btn-default:active:focus, .btn-default:active:hover, .open > .dropdown-toggle.btn-default.focus, .open > .dropdown-toggle.btn-default:focus, .open > .dropdown-toggle.btn-default:hover {\n    color: #333;\n    background-color: #d4d4d4;\n    border-color: #8c8c8c\n}\n\n.btn-default.active, .btn-default:active, .open > .dropdown-toggle.btn-default {\n    background-image: none\n}\n\n.btn-default.disabled.focus, .btn-default.disabled:focus, .btn-default.disabled:hover, .btn-default[disabled].focus, .btn-default[disabled]:focus, .btn-default[disabled]:hover, fieldset[disabled] .btn-default.focus, fieldset[disabled] .btn-default:focus, fieldset[disabled] .btn-default:hover {\n    background-color: #fff;\n    border-color: #ccc\n}\n\n.btn-default .badge {\n    color: #fff;\n    background-color: #333\n}\n\n.btn-primary {\n    color: #fff;\n    background-color: #337ab7;\n    border-color: #2e6da4\n}\n\n.btn-primary.focus, .btn-primary:focus {\n    color: #fff;\n    background-color: #286090;\n    border-color: #122b40\n}\n\n.btn-primary:hover {\n    color: #fff;\n    background-color: #286090;\n    border-color: #204d74\n}\n\n.btn-primary.active, .btn-primary:active, .open > .dropdown-toggle.btn-primary {\n    color: #fff;\n    background-color: #286090;\n    border-color: #204d74\n}\n\n.btn-primary.active.focus, .btn-primary.active:focus, .btn-primary.active:hover, .btn-primary:active.focus, .btn-primary:active:focus, .btn-primary:active:hover, .open > .dropdown-toggle.btn-primary.focus, .open > .dropdown-toggle.btn-primary:focus, .open > .dropdown-toggle.btn-primary:hover {\n    color: #fff;\n    background-color: #204d74;\n    border-color: #122b40\n}\n\n.btn-primary.active, .btn-primary:active, .open > .dropdown-toggle.btn-primary {\n    background-image: none\n}\n\n.btn-primary.disabled.focus, .btn-primary.disabled:focus, .btn-primary.disabled:hover, .btn-primary[disabled].focus, .btn-primary[disabled]:focus, .btn-primary[disabled]:hover, fieldset[disabled] .btn-primary.focus, fieldset[disabled] .btn-primary:focus, fieldset[disabled] .btn-primary:hover {\n    background-color: #337ab7;\n    border-color: #2e6da4\n}\n\n.btn-primary .badge {\n    color: #337ab7;\n    background-color: #fff\n}\n\n.btn-success {\n    color: #fff;\n    background-color: #5cb85c;\n    border-color: #4cae4c\n}\n\n.btn-success.focus, .btn-success:focus {\n    color: #fff;\n    background-color: #449d44;\n    border-color: #255625\n}\n\n.btn-success:hover {\n    color: #fff;\n    background-color: #449d44;\n    border-color: #398439\n}\n\n.btn-success.active, .btn-success:active, .open > .dropdown-toggle.btn-success {\n    color: #fff;\n    background-color: #449d44;\n    border-color: #398439\n}\n\n.btn-success.active.focus, .btn-success.active:focus, .btn-success.active:hover, .btn-success:active.focus, .btn-success:active:focus, .btn-success:active:hover, .open > .dropdown-toggle.btn-success.focus, .open > .dropdown-toggle.btn-success:focus, .open > .dropdown-toggle.btn-success:hover {\n    color: #fff;\n    background-color: #398439;\n    border-color: #255625\n}\n\n.btn-success.active, .btn-success:active, .open > .dropdown-toggle.btn-success {\n    background-image: none\n}\n\n.btn-success.disabled.focus, .btn-success.disabled:focus, .btn-success.disabled:hover, .btn-success[disabled].focus, .btn-success[disabled]:focus, .btn-success[disabled]:hover, fieldset[disabled] .btn-success.focus, fieldset[disabled] .btn-success:focus, fieldset[disabled] .btn-success:hover {\n    background-color: #5cb85c;\n    border-color: #4cae4c\n}\n\n.btn-success .badge {\n    color: #5cb85c;\n    background-color: #fff\n}\n\n.btn-info {\n    color: #fff;\n    background-color: #5bc0de;\n    border-color: #46b8da\n}\n\n.btn-info.focus, .btn-info:focus {\n    color: #fff;\n    background-color: #31b0d5;\n    border-color: #1b6d85\n}\n\n.btn-info:hover {\n    color: #fff;\n    background-color: #31b0d5;\n    border-color: #269abc\n}\n\n.btn-info.active, .btn-info:active, .open > .dropdown-toggle.btn-info {\n    color: #fff;\n    background-color: #31b0d5;\n    border-color: #269abc\n}\n\n.btn-info.active.focus, .btn-info.active:focus, .btn-info.active:hover, .btn-info:active.focus, .btn-info:active:focus, .btn-info:active:hover, .open > .dropdown-toggle.btn-info.focus, .open > .dropdown-toggle.btn-info:focus, .open > .dropdown-toggle.btn-info:hover {\n    color: #fff;\n    background-color: #269abc;\n    border-color: #1b6d85\n}\n\n.btn-info.active, .btn-info:active, .open > .dropdown-toggle.btn-info {\n    background-image: none\n}\n\n.btn-info.disabled.focus, .btn-info.disabled:focus, .btn-info.disabled:hover, .btn-info[disabled].focus, .btn-info[disabled]:focus, .btn-info[disabled]:hover, fieldset[disabled] .btn-info.focus, fieldset[disabled] .btn-info:focus, fieldset[disabled] .btn-info:hover {\n    background-color: #5bc0de;\n    border-color: #46b8da\n}\n\n.btn-info .badge {\n    color: #5bc0de;\n    background-color: #fff\n}\n\n.btn-warning {\n    color: #fff;\n    background-color: #f0ad4e;\n    border-color: #eea236\n}\n\n.btn-warning.focus, .btn-warning:focus {\n    color: #fff;\n    background-color: #ec971f;\n    border-color: #985f0d\n}\n\n.btn-warning:hover {\n    color: #fff;\n    background-color: #ec971f;\n    border-color: #d58512\n}\n\n.btn-warning.active, .btn-warning:active, .open > .dropdown-toggle.btn-warning {\n    color: #fff;\n    background-color: #ec971f;\n    border-color: #d58512\n}\n\n.btn-warning.active.focus, .btn-warning.active:focus, .btn-warning.active:hover, .btn-warning:active.focus, .btn-warning:active:focus, .btn-warning:active:hover, .open > .dropdown-toggle.btn-warning.focus, .open > .dropdown-toggle.btn-warning:focus, .open > .dropdown-toggle.btn-warning:hover {\n    color: #fff;\n    background-color: #d58512;\n    border-color: #985f0d\n}\n\n.btn-warning.active, .btn-warning:active, .open > .dropdown-toggle.btn-warning {\n    background-image: none\n}\n\n.btn-warning.disabled.focus, .btn-warning.disabled:focus, .btn-warning.disabled:hover, .btn-warning[disabled].focus, .btn-warning[disabled]:focus, .btn-warning[disabled]:hover, fieldset[disabled] .btn-warning.focus, fieldset[disabled] .btn-warning:focus, fieldset[disabled] .btn-warning:hover {\n    background-color: #f0ad4e;\n    border-color: #eea236\n}\n\n.btn-warning .badge {\n    color: #f0ad4e;\n    background-color: #fff\n}\n\n.btn-danger {\n    color: #fff;\n    background-color: #d9534f;\n    border-color: #d43f3a\n}\n\n.btn-danger.focus, .btn-danger:focus {\n    color: #fff;\n    background-color: #c9302c;\n    border-color: #761c19\n}\n\n.btn-danger:hover {\n    color: #fff;\n    background-color: #c9302c;\n    border-color: #ac2925\n}\n\n.btn-danger.active, .btn-danger:active, .open > .dropdown-toggle.btn-danger {\n    color: #fff;\n    background-color: #c9302c;\n    border-color: #ac2925\n}\n\n.btn-danger.active.focus, .btn-danger.active:focus, .btn-danger.active:hover, .btn-danger:active.focus, .btn-danger:active:focus, .btn-danger:active:hover, .open > .dropdown-toggle.btn-danger.focus, .open > .dropdown-toggle.btn-danger:focus, .open > .dropdown-toggle.btn-danger:hover {\n    color: #fff;\n    background-color: #ac2925;\n    border-color: #761c19\n}\n\n.btn-danger.active, .btn-danger:active, .open > .dropdown-toggle.btn-danger {\n    background-image: none\n}\n\n.btn-danger.disabled.focus, .btn-danger.disabled:focus, .btn-danger.disabled:hover, .btn-danger[disabled].focus, .btn-danger[disabled]:focus, .btn-danger[disabled]:hover, fieldset[disabled] .btn-danger.focus, fieldset[disabled] .btn-danger:focus, fieldset[disabled] .btn-danger:hover {\n    background-color: #d9534f;\n    border-color: #d43f3a\n}\n\n.btn-danger .badge {\n    color: #d9534f;\n    background-color: #fff\n}\n\n.btn-link {\n    font-weight: 400;\n    color: #337ab7;\n    border-radius: 0\n}\n\n.btn-link, .btn-link.active, .btn-link:active, .btn-link[disabled], fieldset[disabled] .btn-link {\n    background-color: transparent;\n    -webkit-box-shadow: none;\n    box-shadow: none\n}\n\n.btn-link, .btn-link:active, .btn-link:focus, .btn-link:hover {\n    border-color: transparent\n}\n\n.btn-link:focus, .btn-link:hover {\n    color: #23527c;\n    text-decoration: underline;\n    background-color: transparent\n}\n\n.btn-link[disabled]:focus, .btn-link[disabled]:hover, fieldset[disabled] .btn-link:focus, fieldset[disabled] .btn-link:hover {\n    color: #777;\n    text-decoration: none\n}\n\n.btn-group-lg > .btn, .btn-lg {\n    padding: 10px 16px;\n    font-size: 18px;\n    line-height: 1.3333333;\n    border-radius: 6px\n}\n\n.btn-group-sm > .btn, .btn-sm {\n    padding: 5px 10px;\n    font-size: 12px;\n    line-height: 1.5;\n    border-radius: 3px\n}\n\n.btn-group-xs > .btn, .btn-xs {\n    padding: 1px 5px;\n    font-size: 12px;\n    line-height: 1.5;\n    border-radius: 3px\n}\n\n.btn-block {\n    display: block;\n    width: 100%\n}\n\n.btn-block + .btn-block {\n    margin-top: 5px\n}\n\ninput[type=button].btn-block, input[type=reset].btn-block, input[type=submit].btn-block {\n    width: 100%\n}\n\n.fade {\n    opacity: 0;\n    -webkit-transition: opacity .15s linear;\n    -o-transition: opacity .15s linear;\n    transition: opacity .15s linear\n}\n\n.fade.in {\n    opacity: 1\n}\n\n.collapse {\n    display: none\n}\n\n.collapse.in {\n    display: block\n}\n\ntr.collapse.in {\n    display: table-row\n}\n\ntbody.collapse.in {\n    display: table-row-group\n}\n\n.collapsing {\n    position: relative;\n    height: 0;\n    overflow: hidden;\n    -webkit-transition-timing-function: ease;\n    -o-transition-timing-function: ease;\n    transition-timing-function: ease;\n    -webkit-transition-duration: .35s;\n    -o-transition-duration: .35s;\n    transition-duration: .35s;\n    -webkit-transition-property: height, visibility;\n    -o-transition-property: height, visibility;\n    transition-property: height, visibility\n}\n\n.caret {\n    display: inline-block;\n    width: 0;\n    height: 0;\n    margin-left: 2px;\n    vertical-align: middle;\n    border-top: 4px dashed;\n    border-top: 4px solid \\9;\n    border-right: 4px solid transparent;\n    border-left: 4px solid transparent\n}\n\n.dropdown, .dropup {\n    position: relative\n}\n\n.dropdown-toggle:focus {\n    outline: 0\n}\n\n.dropdown-menu {\n    position: absolute;\n    top: 100%;\n    left: 0;\n    z-index: 1000;\n    display: none;\n    float: left;\n    min-width: 160px;\n    padding: 5px 0;\n    margin: 2px 0 0;\n    font-size: 14px;\n    text-align: left;\n    list-style: none;\n    background-color: #fff;\n    -webkit-background-clip: padding-box;\n    background-clip: padding-box;\n    border: 1px solid #ccc;\n    border: 1px solid rgba(0, 0, 0, .15);\n    border-radius: 4px;\n    -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, .175);\n    box-shadow: 0 6px 12px rgba(0, 0, 0, .175)\n}\n\n.dropdown-menu.pull-right {\n    right: 0;\n    left: auto\n}\n\n.dropdown-menu .divider {\n    height: 1px;\n    margin: 9px 0;\n    overflow: hidden;\n    background-color: #e5e5e5\n}\n\n.dropdown-menu > li > a {\n    display: block;\n    padding: 3px 20px;\n    clear: both;\n    font-weight: 400;\n    line-height: 1.42857143;\n    color: #333;\n    white-space: nowrap\n}\n\n.dropdown-menu > li > a:focus, .dropdown-menu > li > a:hover {\n    color: #262626;\n    text-decoration: none;\n    background-color: #f5f5f5\n}\n\n.dropdown-menu > .active > a, .dropdown-menu > .active > a:focus, .dropdown-menu > .active > a:hover {\n    color: #fff;\n    text-decoration: none;\n    background-color: #337ab7;\n    outline: 0\n}\n\n.dropdown-menu > .disabled > a, .dropdown-menu > .disabled > a:focus, .dropdown-menu > .disabled > a:hover {\n    color: #777\n}\n\n.dropdown-menu > .disabled > a:focus, .dropdown-menu > .disabled > a:hover {\n    text-decoration: none;\n    cursor: not-allowed;\n    background-color: transparent;\n    background-image: none;\n    filter: progid:DXImageTransform.Microsoft.gradient(enabled=false)\n}\n\n.open > .dropdown-menu {\n    display: block\n}\n\n.open > a {\n    outline: 0\n}\n\n.dropdown-menu-right {\n    right: 0;\n    left: auto\n}\n\n.dropdown-menu-left {\n    right: auto;\n    left: 0\n}\n\n.dropdown-header {\n    display: block;\n    padding: 3px 20px;\n    font-size: 12px;\n    line-height: 1.42857143;\n    color: #777;\n    white-space: nowrap\n}\n\n.dropdown-backdrop {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 990\n}\n\n.pull-right > .dropdown-menu {\n    right: 0;\n    left: auto\n}\n\n.dropup .caret, .navbar-fixed-bottom .dropdown .caret {\n    content: \"\";\n    border-top: 0;\n    border-bottom: 4px dashed;\n    border-bottom: 4px solid \\9\n}\n\n.dropup .dropdown-menu, .navbar-fixed-bottom .dropdown .dropdown-menu {\n    top: auto;\n    bottom: 100%;\n    margin-bottom: 2px\n}\n\n@media (min-width: 768px) {\n    .navbar-right .dropdown-menu {\n        right: 0;\n        left: auto\n    }\n\n    .navbar-right .dropdown-menu-left {\n        right: auto;\n        left: 0\n    }\n}\n\n.btn-group, .btn-group-vertical {\n    position: relative;\n    display: inline-block;\n    vertical-align: middle\n}\n\n.btn-group-vertical > .btn, .btn-group > .btn {\n    position: relative;\n    float: left\n}\n\n.btn-group-vertical > .btn.active, .btn-group-vertical > .btn:active, .btn-group-vertical > .btn:focus, .btn-group-vertical > .btn:hover, .btn-group > .btn.active, .btn-group > .btn:active, .btn-group > .btn:focus, .btn-group > .btn:hover {\n    z-index: 2\n}\n\n.btn-group .btn + .btn, .btn-group .btn + .btn-group, .btn-group .btn-group + .btn, .btn-group .btn-group + .btn-group {\n    margin-left: -1px\n}\n\n.btn-toolbar {\n    margin-left: -5px\n}\n\n.btn-toolbar .btn, .btn-toolbar .btn-group, .btn-toolbar .input-group {\n    float: left\n}\n\n.btn-toolbar > .btn, .btn-toolbar > .btn-group, .btn-toolbar > .input-group {\n    margin-left: 5px\n}\n\n.btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {\n    border-radius: 0\n}\n\n.btn-group > .btn:first-child {\n    margin-left: 0\n}\n\n.btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle) {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0\n}\n\n.btn-group > .btn:last-child:not(:first-child), .btn-group > .dropdown-toggle:not(:first-child) {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0\n}\n\n.btn-group > .btn-group {\n    float: left\n}\n\n.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {\n    border-radius: 0\n}\n\n.btn-group > .btn-group:first-child:not(:last-child) > .btn:last-child, .btn-group > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0\n}\n\n.btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0\n}\n\n.btn-group .dropdown-toggle:active, .btn-group.open .dropdown-toggle {\n    outline: 0\n}\n\n.btn-group > .btn + .dropdown-toggle {\n    padding-right: 8px;\n    padding-left: 8px\n}\n\n.btn-group > .btn-lg + .dropdown-toggle {\n    padding-right: 12px;\n    padding-left: 12px\n}\n\n.btn-group.open .dropdown-toggle {\n    -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);\n    box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125)\n}\n\n.btn-group.open .dropdown-toggle.btn-link {\n    -webkit-box-shadow: none;\n    box-shadow: none\n}\n\n.btn .caret {\n    margin-left: 0\n}\n\n.btn-lg .caret {\n    border-width: 5px 5px 0;\n    border-bottom-width: 0\n}\n\n.dropup .btn-lg .caret {\n    border-width: 0 5px 5px\n}\n\n.btn-group-vertical > .btn, .btn-group-vertical > .btn-group, .btn-group-vertical > .btn-group > .btn {\n    display: block;\n    float: none;\n    width: 100%;\n    max-width: 100%\n}\n\n.btn-group-vertical > .btn-group > .btn {\n    float: none\n}\n\n.btn-group-vertical > .btn + .btn, .btn-group-vertical > .btn + .btn-group, .btn-group-vertical > .btn-group + .btn, .btn-group-vertical > .btn-group + .btn-group {\n    margin-top: -1px;\n    margin-left: 0\n}\n\n.btn-group-vertical > .btn:not(:first-child):not(:last-child) {\n    border-radius: 0\n}\n\n.btn-group-vertical > .btn:first-child:not(:last-child) {\n    border-top-left-radius: 4px;\n    border-top-right-radius: 4px;\n    border-bottom-right-radius: 0;\n    border-bottom-left-radius: 0\n}\n\n.btn-group-vertical > .btn:last-child:not(:first-child) {\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 4px;\n    border-bottom-left-radius: 4px\n}\n\n.btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn {\n    border-radius: 0\n}\n\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .btn:last-child, .btn-group-vertical > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n    border-bottom-right-radius: 0;\n    border-bottom-left-radius: 0\n}\n\n.btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child {\n    border-top-left-radius: 0;\n    border-top-right-radius: 0\n}\n\n.btn-group-justified {\n    display: table;\n    width: 100%;\n    table-layout: fixed;\n    border-collapse: separate\n}\n\n.btn-group-justified > .btn, .btn-group-justified > .btn-group {\n    display: table-cell;\n    float: none;\n    width: 1%\n}\n\n.btn-group-justified > .btn-group .btn {\n    width: 100%\n}\n\n.btn-group-justified > .btn-group .dropdown-menu {\n    left: auto\n}\n\n[data-toggle=buttons] > .btn input[type=checkbox], [data-toggle=buttons] > .btn input[type=radio], [data-toggle=buttons] > .btn-group > .btn input[type=checkbox], [data-toggle=buttons] > .btn-group > .btn input[type=radio] {\n    position: absolute;\n    clip: rect(0, 0, 0, 0);\n    pointer-events: none\n}\n\n.input-group {\n    position: relative;\n    display: table;\n    border-collapse: separate\n}\n\n.input-group[class*=col-] {\n    float: none;\n    padding-right: 0;\n    padding-left: 0\n}\n\n.input-group .form-control {\n    position: relative;\n    z-index: 2;\n    float: left;\n    width: 100%;\n    margin-bottom: 0\n}\n\n.input-group .form-control:focus {\n    z-index: 3\n}\n\n.input-group-lg > .form-control, .input-group-lg > .input-group-addon, .input-group-lg > .input-group-btn > .btn {\n    height: 46px;\n    padding: 10px 16px;\n    font-size: 18px;\n    line-height: 1.3333333;\n    border-radius: 6px\n}\n\nselect.input-group-lg > .form-control, select.input-group-lg > .input-group-addon, select.input-group-lg > .input-group-btn > .btn {\n    height: 46px;\n    line-height: 46px\n}\n\nselect[multiple].input-group-lg > .form-control, select[multiple].input-group-lg > .input-group-addon, select[multiple].input-group-lg > .input-group-btn > .btn, textarea.input-group-lg > .form-control, textarea.input-group-lg > .input-group-addon, textarea.input-group-lg > .input-group-btn > .btn {\n    height: auto\n}\n\n.input-group-sm > .form-control, .input-group-sm > .input-group-addon, .input-group-sm > .input-group-btn > .btn {\n    height: 30px;\n    padding: 5px 10px;\n    font-size: 12px;\n    line-height: 1.5;\n    border-radius: 3px\n}\n\nselect.input-group-sm > .form-control, select.input-group-sm > .input-group-addon, select.input-group-sm > .input-group-btn > .btn {\n    height: 30px;\n    line-height: 30px\n}\n\nselect[multiple].input-group-sm > .form-control, select[multiple].input-group-sm > .input-group-addon, select[multiple].input-group-sm > .input-group-btn > .btn, textarea.input-group-sm > .form-control, textarea.input-group-sm > .input-group-addon, textarea.input-group-sm > .input-group-btn > .btn {\n    height: auto\n}\n\n.input-group .form-control, .input-group-addon, .input-group-btn {\n    display: table-cell\n}\n\n.input-group .form-control:not(:first-child):not(:last-child), .input-group-addon:not(:first-child):not(:last-child), .input-group-btn:not(:first-child):not(:last-child) {\n    border-radius: 0\n}\n\n.input-group-addon, .input-group-btn {\n    width: 1%;\n    white-space: nowrap;\n    vertical-align: middle\n}\n\n.input-group-addon {\n    padding: 6px 12px;\n    font-size: 14px;\n    font-weight: 400;\n    line-height: 1;\n    color: #555;\n    text-align: center;\n    background-color: #eee;\n    border: 1px solid #ccc;\n    border-radius: 4px\n}\n\n.input-group-addon.input-sm {\n    padding: 5px 10px;\n    font-size: 12px;\n    border-radius: 3px\n}\n\n.input-group-addon.input-lg {\n    padding: 10px 16px;\n    font-size: 18px;\n    border-radius: 6px\n}\n\n.input-group-addon input[type=checkbox], .input-group-addon input[type=radio] {\n    margin-top: 0\n}\n\n.input-group .form-control:first-child, .input-group-addon:first-child, .input-group-btn:first-child > .btn, .input-group-btn:first-child > .btn-group > .btn, .input-group-btn:first-child > .dropdown-toggle, .input-group-btn:last-child > .btn-group:not(:last-child) > .btn, .input-group-btn:last-child > .btn:not(:last-child):not(.dropdown-toggle) {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0\n}\n\n.input-group-addon:first-child {\n    border-right: 0\n}\n\n.input-group .form-control:last-child, .input-group-addon:last-child, .input-group-btn:first-child > .btn-group:not(:first-child) > .btn, .input-group-btn:first-child > .btn:not(:first-child), .input-group-btn:last-child > .btn, .input-group-btn:last-child > .btn-group > .btn, .input-group-btn:last-child > .dropdown-toggle {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0\n}\n\n.input-group-addon:last-child {\n    border-left: 0\n}\n\n.input-group-btn {\n    position: relative;\n    font-size: 0;\n    white-space: nowrap\n}\n\n.input-group-btn > .btn {\n    position: relative\n}\n\n.input-group-btn > .btn + .btn {\n    margin-left: -1px\n}\n\n.input-group-btn > .btn:active, .input-group-btn > .btn:focus, .input-group-btn > .btn:hover {\n    z-index: 2\n}\n\n.input-group-btn:first-child > .btn, .input-group-btn:first-child > .btn-group {\n    margin-right: -1px\n}\n\n.input-group-btn:last-child > .btn, .input-group-btn:last-child > .btn-group {\n    z-index: 2;\n    margin-left: -1px\n}\n\n.nav {\n    padding-left: 0;\n    margin-bottom: 0;\n    list-style: none\n}\n\n.nav > li {\n    position: relative;\n    display: block\n}\n\n.nav > li > a {\n    position: relative;\n    display: block;\n    padding: 10px 15px\n}\n\n.nav > li > a:focus, .nav > li > a:hover {\n    text-decoration: none;\n    background-color: #eee\n}\n\n.nav > li.disabled > a {\n    color: #777\n}\n\n.nav > li.disabled > a:focus, .nav > li.disabled > a:hover {\n    color: #777;\n    text-decoration: none;\n    cursor: not-allowed;\n    background-color: transparent\n}\n\n.nav .open > a, .nav .open > a:focus, .nav .open > a:hover {\n    background-color: #eee;\n    border-color: #337ab7\n}\n\n.nav .nav-divider {\n    height: 1px;\n    margin: 9px 0;\n    overflow: hidden;\n    background-color: #e5e5e5\n}\n\n.nav > li > a > img {\n    max-width: none\n}\n\n.nav-tabs {\n    border-bottom: 1px solid #ddd\n}\n\n.nav-tabs > li {\n    float: left;\n    margin-bottom: -1px\n}\n\n.nav-tabs > li > a {\n    margin-right: 2px;\n    line-height: 1.42857143;\n    border: 1px solid transparent;\n    border-radius: 4px 4px 0 0\n}\n\n.nav-tabs > li > a:hover {\n    border-color: #eee #eee #ddd\n}\n\n.nav-tabs > li.active > a, .nav-tabs > li.active > a:focus, .nav-tabs > li.active > a:hover {\n    color: #555;\n    cursor: default;\n    background-color: #fff;\n    border: 1px solid #ddd;\n    border-bottom-color: transparent\n}\n\n.nav-tabs.nav-justified {\n    width: 100%;\n    border-bottom: 0\n}\n\n.nav-tabs.nav-justified > li {\n    float: none\n}\n\n.nav-tabs.nav-justified > li > a {\n    margin-bottom: 5px;\n    text-align: center\n}\n\n.nav-tabs.nav-justified > .dropdown .dropdown-menu {\n    top: auto;\n    left: auto\n}\n\n@media (min-width: 768px) {\n    .nav-tabs.nav-justified > li {\n        display: table-cell;\n        width: 1%\n    }\n\n    .nav-tabs.nav-justified > li > a {\n        margin-bottom: 0\n    }\n}\n\n.nav-tabs.nav-justified > li > a {\n    margin-right: 0;\n    border-radius: 4px\n}\n\n.nav-tabs.nav-justified > .active > a, .nav-tabs.nav-justified > .active > a:focus, .nav-tabs.nav-justified > .active > a:hover {\n    border: 1px solid #ddd\n}\n\n@media (min-width: 768px) {\n    .nav-tabs.nav-justified > li > a {\n        border-bottom: 1px solid #ddd;\n        border-radius: 4px 4px 0 0\n    }\n\n    .nav-tabs.nav-justified > .active > a, .nav-tabs.nav-justified > .active > a:focus, .nav-tabs.nav-justified > .active > a:hover {\n        border-bottom-color: #fff\n    }\n}\n\n.nav-pills > li {\n    float: left\n}\n\n.nav-pills > li > a {\n    border-radius: 4px\n}\n\n.nav-pills > li + li {\n    margin-left: 2px\n}\n\n.nav-pills > li.active > a, .nav-pills > li.active > a:focus, .nav-pills > li.active > a:hover {\n    color: #fff;\n    background-color: #337ab7\n}\n\n.nav-stacked > li {\n    float: none\n}\n\n.nav-stacked > li + li {\n    margin-top: 2px;\n    margin-left: 0\n}\n\n.nav-justified {\n    width: 100%\n}\n\n.nav-justified > li {\n    float: none\n}\n\n.nav-justified > li > a {\n    margin-bottom: 5px;\n    text-align: center\n}\n\n.nav-justified > .dropdown .dropdown-menu {\n    top: auto;\n    left: auto\n}\n\n@media (min-width: 768px) {\n    .nav-justified > li {\n        display: table-cell;\n        width: 1%\n    }\n\n    .nav-justified > li > a {\n        margin-bottom: 0\n    }\n}\n\n.nav-tabs-justified {\n    border-bottom: 0\n}\n\n.nav-tabs-justified > li > a {\n    margin-right: 0;\n    border-radius: 4px\n}\n\n.nav-tabs-justified > .active > a, .nav-tabs-justified > .active > a:focus, .nav-tabs-justified > .active > a:hover {\n    border: 1px solid #ddd\n}\n\n@media (min-width: 768px) {\n    .nav-tabs-justified > li > a {\n        border-bottom: 1px solid #ddd;\n        border-radius: 4px 4px 0 0\n    }\n\n    .nav-tabs-justified > .active > a, .nav-tabs-justified > .active > a:focus, .nav-tabs-justified > .active > a:hover {\n        border-bottom-color: #fff\n    }\n}\n\n.tab-content > .tab-pane {\n    display: none\n}\n\n.tab-content > .active {\n    display: block\n}\n\n.nav-tabs .dropdown-menu {\n    margin-top: -1px;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0\n}\n\n.navbar {\n    position: relative;\n    min-height: 50px;\n    margin-bottom: 20px;\n    border: 1px solid transparent\n}\n\n@media (min-width: 768px) {\n    .navbar {\n        border-radius: 4px\n    }\n}\n\n@media (min-width: 768px) {\n    .navbar-header {\n        float: left\n    }\n}\n\n.navbar-collapse {\n    padding-right: 15px;\n    padding-left: 15px;\n    overflow-x: visible;\n    -webkit-overflow-scrolling: touch;\n    border-top: 1px solid transparent;\n    -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1);\n    box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1)\n}\n\n.navbar-collapse.in {\n    overflow-y: auto\n}\n\n@media (min-width: 768px) {\n    .navbar-collapse {\n        width: auto;\n        border-top: 0;\n        -webkit-box-shadow: none;\n        box-shadow: none\n    }\n\n    .navbar-collapse.collapse {\n        display: block !important;\n        height: auto !important;\n        padding-bottom: 0;\n        overflow: visible !important\n    }\n\n    .navbar-collapse.in {\n        overflow-y: visible\n    }\n\n    .navbar-fixed-bottom .navbar-collapse, .navbar-fixed-top .navbar-collapse, .navbar-static-top .navbar-collapse {\n        padding-right: 0;\n        padding-left: 0\n    }\n}\n\n.navbar-fixed-bottom .navbar-collapse, .navbar-fixed-top .navbar-collapse {\n    max-height: 340px\n}\n\n@media (max-device-width: 480px) and (orientation: landscape) {\n    .navbar-fixed-bottom .navbar-collapse, .navbar-fixed-top .navbar-collapse {\n        max-height: 200px\n    }\n}\n\n.container-fluid > .navbar-collapse, .container-fluid > .navbar-header, .container > .navbar-collapse, .container > .navbar-header {\n    margin-right: -15px;\n    margin-left: -15px\n}\n\n@media (min-width: 768px) {\n    .container-fluid > .navbar-collapse, .container-fluid > .navbar-header, .container > .navbar-collapse, .container > .navbar-header {\n        margin-right: 0;\n        margin-left: 0\n    }\n}\n\n.navbar-static-top {\n    z-index: 1000;\n    border-width: 0 0 1px\n}\n\n@media (min-width: 768px) {\n    .navbar-static-top {\n        border-radius: 0\n    }\n}\n\n.navbar-fixed-bottom, .navbar-fixed-top {\n    position: fixed;\n    right: 0;\n    left: 0;\n    z-index: 1030\n}\n\n@media (min-width: 768px) {\n    .navbar-fixed-bottom, .navbar-fixed-top {\n        border-radius: 0\n    }\n}\n\n.navbar-fixed-top {\n    top: 0;\n    border-width: 0 0 1px\n}\n\n.navbar-fixed-bottom {\n    bottom: 0;\n    margin-bottom: 0;\n    border-width: 1px 0 0\n}\n\n.navbar-brand {\n    float: left;\n    height: 50px;\n    padding: 15px 15px;\n    font-size: 18px;\n    line-height: 20px\n}\n\n.navbar-brand:focus, .navbar-brand:hover {\n    text-decoration: none\n}\n\n.navbar-brand > img {\n    display: block\n}\n\n@media (min-width: 768px) {\n    .navbar > .container .navbar-brand, .navbar > .container-fluid .navbar-brand {\n        margin-left: -15px\n    }\n}\n\n.navbar-toggle {\n    position: relative;\n    float: right;\n    padding: 9px 10px;\n    margin-top: 8px;\n    margin-right: 15px;\n    margin-bottom: 8px;\n    background-color: transparent;\n    background-image: none;\n    border: 1px solid transparent;\n    border-radius: 4px\n}\n\n.navbar-toggle:focus {\n    outline: 0\n}\n\n.navbar-toggle .icon-bar {\n    display: block;\n    width: 22px;\n    height: 2px;\n    border-radius: 1px\n}\n\n.navbar-toggle .icon-bar + .icon-bar {\n    margin-top: 4px\n}\n\n@media (min-width: 768px) {\n    .navbar-toggle {\n        display: none\n    }\n}\n\n.navbar-nav {\n    margin: 7.5px -15px\n}\n\n.navbar-nav > li > a {\n    padding-top: 10px;\n    padding-bottom: 10px;\n    line-height: 20px\n}\n\n@media (max-width: 767px) {\n    .navbar-nav .open .dropdown-menu {\n        position: static;\n        float: none;\n        width: auto;\n        margin-top: 0;\n        background-color: transparent;\n        border: 0;\n        -webkit-box-shadow: none;\n        box-shadow: none\n    }\n\n    .navbar-nav .open .dropdown-menu .dropdown-header, .navbar-nav .open .dropdown-menu > li > a {\n        padding: 5px 15px 5px 25px\n    }\n\n    .navbar-nav .open .dropdown-menu > li > a {\n        line-height: 20px\n    }\n\n    .navbar-nav .open .dropdown-menu > li > a:focus, .navbar-nav .open .dropdown-menu > li > a:hover {\n        background-image: none\n    }\n}\n\n@media (min-width: 768px) {\n    .navbar-nav {\n        float: left;\n        margin: 0\n    }\n\n    .navbar-nav > li {\n        float: left\n    }\n\n    .navbar-nav > li > a {\n        padding-top: 15px;\n        padding-bottom: 15px\n    }\n}\n\n.navbar-form {\n    padding: 10px 15px;\n    margin-top: 8px;\n    margin-right: -15px;\n    margin-bottom: 8px;\n    margin-left: -15px;\n    border-top: 1px solid transparent;\n    border-bottom: 1px solid transparent;\n    -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1), 0 1px 0 rgba(255, 255, 255, .1);\n    box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1), 0 1px 0 rgba(255, 255, 255, .1)\n}\n\n@media (min-width: 768px) {\n    .navbar-form .form-group {\n        display: inline-block;\n        margin-bottom: 0;\n        vertical-align: middle\n    }\n\n    .navbar-form .form-control {\n        display: inline-block;\n        width: auto;\n        vertical-align: middle\n    }\n\n    .navbar-form .form-control-static {\n        display: inline-block\n    }\n\n    .navbar-form .input-group {\n        display: inline-table;\n        vertical-align: middle\n    }\n\n    .navbar-form .input-group .form-control, .navbar-form .input-group .input-group-addon, .navbar-form .input-group .input-group-btn {\n        width: auto\n    }\n\n    .navbar-form .input-group > .form-control {\n        width: 100%\n    }\n\n    .navbar-form .control-label {\n        margin-bottom: 0;\n        vertical-align: middle\n    }\n\n    .navbar-form .checkbox, .navbar-form .radio {\n        display: inline-block;\n        margin-top: 0;\n        margin-bottom: 0;\n        vertical-align: middle\n    }\n\n    .navbar-form .checkbox label, .navbar-form .radio label {\n        padding-left: 0\n    }\n\n    .navbar-form .checkbox input[type=checkbox], .navbar-form .radio input[type=radio] {\n        position: relative;\n        margin-left: 0\n    }\n\n    .navbar-form .has-feedback .form-control-feedback {\n        top: 0\n    }\n}\n\n@media (max-width: 767px) {\n    .navbar-form .form-group {\n        margin-bottom: 5px\n    }\n\n    .navbar-form .form-group:last-child {\n        margin-bottom: 0\n    }\n}\n\n@media (min-width: 768px) {\n    .navbar-form {\n        width: auto;\n        padding-top: 0;\n        padding-bottom: 0;\n        margin-right: 0;\n        margin-left: 0;\n        border: 0;\n        -webkit-box-shadow: none;\n        box-shadow: none\n    }\n}\n\n.navbar-nav > li > .dropdown-menu {\n    margin-top: 0;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0\n}\n\n.navbar-fixed-bottom .navbar-nav > li > .dropdown-menu {\n    margin-bottom: 0;\n    border-top-left-radius: 4px;\n    border-top-right-radius: 4px;\n    border-bottom-right-radius: 0;\n    border-bottom-left-radius: 0\n}\n\n.navbar-btn {\n    margin-top: 8px;\n    margin-bottom: 8px\n}\n\n.navbar-btn.btn-sm {\n    margin-top: 10px;\n    margin-bottom: 10px\n}\n\n.navbar-btn.btn-xs {\n    margin-top: 14px;\n    margin-bottom: 14px\n}\n\n.navbar-text {\n    margin-top: 15px;\n    margin-bottom: 15px\n}\n\n@media (min-width: 768px) {\n    .navbar-text {\n        float: left;\n        margin-right: 15px;\n        margin-left: 15px\n    }\n}\n\n@media (min-width: 768px) {\n    .navbar-left {\n        float: left !important\n    }\n\n    .navbar-right {\n        float: right !important;\n        margin-right: -15px\n    }\n\n    .navbar-right ~ .navbar-right {\n        margin-right: 0\n    }\n}\n\n.navbar-default {\n    background-color: #f8f8f8;\n    border-color: #e7e7e7\n}\n\n.navbar-default .navbar-brand {\n    color: #777\n}\n\n.navbar-default .navbar-brand:focus, .navbar-default .navbar-brand:hover {\n    color: #5e5e5e;\n    background-color: transparent\n}\n\n.navbar-default .navbar-text {\n    color: #777\n}\n\n.navbar-default .navbar-nav > li > a {\n    color: #777\n}\n\n.navbar-default .navbar-nav > li > a:focus, .navbar-default .navbar-nav > li > a:hover {\n    color: #333;\n    background-color: transparent\n}\n\n.navbar-default .navbar-nav > .active > a, .navbar-default .navbar-nav > .active > a:focus, .navbar-default .navbar-nav > .active > a:hover {\n    color: #555;\n    background-color: #e7e7e7\n}\n\n.navbar-default .navbar-nav > .disabled > a, .navbar-default .navbar-nav > .disabled > a:focus, .navbar-default .navbar-nav > .disabled > a:hover {\n    color: #ccc;\n    background-color: transparent\n}\n\n.navbar-default .navbar-toggle {\n    border-color: #ddd\n}\n\n.navbar-default .navbar-toggle:focus, .navbar-default .navbar-toggle:hover {\n    background-color: #ddd\n}\n\n.navbar-default .navbar-toggle .icon-bar {\n    background-color: #888\n}\n\n.navbar-default .navbar-collapse, .navbar-default .navbar-form {\n    border-color: #e7e7e7\n}\n\n.navbar-default .navbar-nav > .open > a, .navbar-default .navbar-nav > .open > a:focus, .navbar-default .navbar-nav > .open > a:hover {\n    color: #555;\n    background-color: #e7e7e7\n}\n\n@media (max-width: 767px) {\n    .navbar-default .navbar-nav .open .dropdown-menu > li > a {\n        color: #777\n    }\n\n    .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus, .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover {\n        color: #333;\n        background-color: transparent\n    }\n\n    .navbar-default .navbar-nav .open .dropdown-menu > .active > a, .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus, .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover {\n        color: #555;\n        background-color: #e7e7e7\n    }\n\n    .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a, .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:focus, .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:hover {\n        color: #ccc;\n        background-color: transparent\n    }\n}\n\n.navbar-default .navbar-link {\n    color: #777\n}\n\n.navbar-default .navbar-link:hover {\n    color: #333\n}\n\n.navbar-default .btn-link {\n    color: #777\n}\n\n.navbar-default .btn-link:focus, .navbar-default .btn-link:hover {\n    color: #333\n}\n\n.navbar-default .btn-link[disabled]:focus, .navbar-default .btn-link[disabled]:hover, fieldset[disabled] .navbar-default .btn-link:focus, fieldset[disabled] .navbar-default .btn-link:hover {\n    color: #ccc\n}\n\n.navbar-inverse {\n    background-color: #222;\n    border-color: #080808\n}\n\n.navbar-inverse .navbar-brand {\n    color: #9d9d9d\n}\n\n.navbar-inverse .navbar-brand:focus, .navbar-inverse .navbar-brand:hover {\n    color: #fff;\n    background-color: transparent\n}\n\n.navbar-inverse .navbar-text {\n    color: #9d9d9d\n}\n\n.navbar-inverse .navbar-nav > li > a {\n    color: #9d9d9d\n}\n\n.navbar-inverse .navbar-nav > li > a:focus, .navbar-inverse .navbar-nav > li > a:hover {\n    color: #fff;\n    background-color: transparent\n}\n\n.navbar-inverse .navbar-nav > .active > a, .navbar-inverse .navbar-nav > .active > a:focus, .navbar-inverse .navbar-nav > .active > a:hover {\n    color: #fff;\n    background-color: #080808\n}\n\n.navbar-inverse .navbar-nav > .disabled > a, .navbar-inverse .navbar-nav > .disabled > a:focus, .navbar-inverse .navbar-nav > .disabled > a:hover {\n    color: #444;\n    background-color: transparent\n}\n\n.navbar-inverse .navbar-toggle {\n    border-color: #333\n}\n\n.navbar-inverse .navbar-toggle:focus, .navbar-inverse .navbar-toggle:hover {\n    background-color: #333\n}\n\n.navbar-inverse .navbar-toggle .icon-bar {\n    background-color: #fff\n}\n\n.navbar-inverse .navbar-collapse, .navbar-inverse .navbar-form {\n    border-color: #101010\n}\n\n.navbar-inverse .navbar-nav > .open > a, .navbar-inverse .navbar-nav > .open > a:focus, .navbar-inverse .navbar-nav > .open > a:hover {\n    color: #fff;\n    background-color: #080808\n}\n\n@media (max-width: 767px) {\n    .navbar-inverse .navbar-nav .open .dropdown-menu > .dropdown-header {\n        border-color: #080808\n    }\n\n    .navbar-inverse .navbar-nav .open .dropdown-menu .divider {\n        background-color: #080808\n    }\n\n    .navbar-inverse .navbar-nav .open .dropdown-menu > li > a {\n        color: #9d9d9d\n    }\n\n    .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:focus, .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:hover {\n        color: #fff;\n        background-color: transparent\n    }\n\n    .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a, .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:focus, .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:hover {\n        color: #fff;\n        background-color: #080808\n    }\n\n    .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a, .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:focus, .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:hover {\n        color: #444;\n        background-color: transparent\n    }\n}\n\n.navbar-inverse .navbar-link {\n    color: #9d9d9d\n}\n\n.navbar-inverse .navbar-link:hover {\n    color: #fff\n}\n\n.navbar-inverse .btn-link {\n    color: #9d9d9d\n}\n\n.navbar-inverse .btn-link:focus, .navbar-inverse .btn-link:hover {\n    color: #fff\n}\n\n.navbar-inverse .btn-link[disabled]:focus, .navbar-inverse .btn-link[disabled]:hover, fieldset[disabled] .navbar-inverse .btn-link:focus, fieldset[disabled] .navbar-inverse .btn-link:hover {\n    color: #444\n}\n\n.breadcrumb {\n    padding: 8px 15px;\n    margin-bottom: 20px;\n    list-style: none;\n    background-color: #f5f5f5;\n    border-radius: 4px\n}\n\n.breadcrumb > li {\n    display: inline-block\n}\n\n.breadcrumb > li + li:before {\n    padding: 0 5px;\n    color: #ccc;\n    content: \"/\\A0\"\n}\n\n.breadcrumb > .active {\n    color: #777\n}\n\n.pagination {\n    display: inline-block;\n    padding-left: 0;\n    margin: 20px 0;\n    border-radius: 4px\n}\n\n.pagination > li {\n    display: inline\n}\n\n.pagination > li > a, .pagination > li > span {\n    position: relative;\n    float: left;\n    padding: 6px 12px;\n    margin-left: -1px;\n    line-height: 1.42857143;\n    color: #337ab7;\n    text-decoration: none;\n    background-color: #fff;\n    border: 1px solid #ddd\n}\n\n.pagination > li:first-child > a, .pagination > li:first-child > span {\n    margin-left: 0;\n    border-top-left-radius: 4px;\n    border-bottom-left-radius: 4px\n}\n\n.pagination > li:last-child > a, .pagination > li:last-child > span {\n    border-top-right-radius: 4px;\n    border-bottom-right-radius: 4px\n}\n\n.pagination > li > a:focus, .pagination > li > a:hover, .pagination > li > span:focus, .pagination > li > span:hover {\n    z-index: 2;\n    color: #23527c;\n    background-color: #eee;\n    border-color: #ddd\n}\n\n.pagination > .active > a, .pagination > .active > a:focus, .pagination > .active > a:hover, .pagination > .active > span, .pagination > .active > span:focus, .pagination > .active > span:hover {\n    z-index: 3;\n    color: #fff;\n    cursor: default;\n    background-color: #337ab7;\n    border-color: #337ab7\n}\n\n.pagination > .disabled > a, .pagination > .disabled > a:focus, .pagination > .disabled > a:hover, .pagination > .disabled > span, .pagination > .disabled > span:focus, .pagination > .disabled > span:hover {\n    color: #777;\n    cursor: not-allowed;\n    background-color: #fff;\n    border-color: #ddd\n}\n\n.pagination-lg > li > a, .pagination-lg > li > span {\n    padding: 10px 16px;\n    font-size: 18px;\n    line-height: 1.3333333\n}\n\n.pagination-lg > li:first-child > a, .pagination-lg > li:first-child > span {\n    border-top-left-radius: 6px;\n    border-bottom-left-radius: 6px\n}\n\n.pagination-lg > li:last-child > a, .pagination-lg > li:last-child > span {\n    border-top-right-radius: 6px;\n    border-bottom-right-radius: 6px\n}\n\n.pagination-sm > li > a, .pagination-sm > li > span {\n    padding: 5px 10px;\n    font-size: 12px;\n    line-height: 1.5\n}\n\n.pagination-sm > li:first-child > a, .pagination-sm > li:first-child > span {\n    border-top-left-radius: 3px;\n    border-bottom-left-radius: 3px\n}\n\n.pagination-sm > li:last-child > a, .pagination-sm > li:last-child > span {\n    border-top-right-radius: 3px;\n    border-bottom-right-radius: 3px\n}\n\n.pager {\n    padding-left: 0;\n    margin: 20px 0;\n    text-align: center;\n    list-style: none\n}\n\n.pager li {\n    display: inline\n}\n\n.pager li > a, .pager li > span {\n    display: inline-block;\n    padding: 5px 14px;\n    background-color: #fff;\n    border: 1px solid #ddd;\n    border-radius: 15px\n}\n\n.pager li > a:focus, .pager li > a:hover {\n    text-decoration: none;\n    background-color: #eee\n}\n\n.pager .next > a, .pager .next > span {\n    float: right\n}\n\n.pager .previous > a, .pager .previous > span {\n    float: left\n}\n\n.pager .disabled > a, .pager .disabled > a:focus, .pager .disabled > a:hover, .pager .disabled > span {\n    color: #777;\n    cursor: not-allowed;\n    background-color: #fff\n}\n\n.label {\n    display: inline;\n    padding: .2em .6em .3em;\n    font-size: 75%;\n    font-weight: 700;\n    line-height: 1;\n    color: #fff;\n    text-align: center;\n    white-space: nowrap;\n    vertical-align: baseline;\n    border-radius: .25em\n}\n\na.label:focus, a.label:hover {\n    color: #fff;\n    text-decoration: none;\n    cursor: pointer\n}\n\n.label:empty {\n    display: none\n}\n\n.btn .label {\n    position: relative;\n    top: -1px\n}\n\n.label-default {\n    background-color: #777\n}\n\n.label-default[href]:focus, .label-default[href]:hover {\n    background-color: #5e5e5e\n}\n\n.label-primary {\n    background-color: #337ab7\n}\n\n.label-primary[href]:focus, .label-primary[href]:hover {\n    background-color: #286090\n}\n\n.label-success {\n    background-color: #5cb85c\n}\n\n.label-success[href]:focus, .label-success[href]:hover {\n    background-color: #449d44\n}\n\n.label-info {\n    background-color: #5bc0de\n}\n\n.label-info[href]:focus, .label-info[href]:hover {\n    background-color: #31b0d5\n}\n\n.label-warning {\n    background-color: #f0ad4e\n}\n\n.label-warning[href]:focus, .label-warning[href]:hover {\n    background-color: #ec971f\n}\n\n.label-danger {\n    background-color: #d9534f\n}\n\n.label-danger[href]:focus, .label-danger[href]:hover {\n    background-color: #c9302c\n}\n\n.badge {\n    display: inline-block;\n    min-width: 10px;\n    padding: 3px 7px;\n    font-size: 12px;\n    font-weight: 700;\n    line-height: 1;\n    color: #fff;\n    text-align: center;\n    white-space: nowrap;\n    vertical-align: middle;\n    background-color: #777;\n    border-radius: 10px\n}\n\n.badge:empty {\n    display: none\n}\n\n.btn .badge {\n    position: relative;\n    top: -1px\n}\n\n.btn-group-xs > .btn .badge, .btn-xs .badge {\n    top: 0;\n    padding: 1px 5px\n}\n\na.badge:focus, a.badge:hover {\n    color: #fff;\n    text-decoration: none;\n    cursor: pointer\n}\n\n.list-group-item.active > .badge, .nav-pills > .active > a > .badge {\n    color: #337ab7;\n    background-color: #fff\n}\n\n.list-group-item > .badge {\n    float: right\n}\n\n.list-group-item > .badge + .badge {\n    margin-right: 5px\n}\n\n.nav-pills > li > a > .badge {\n    margin-left: 3px\n}\n\n.jumbotron {\n    padding-top: 30px;\n    padding-bottom: 30px;\n    margin-bottom: 30px;\n    color: inherit;\n    background-color: #eee\n}\n\n.jumbotron .h1, .jumbotron h1 {\n    color: inherit\n}\n\n.jumbotron p {\n    margin-bottom: 15px;\n    font-size: 21px;\n    font-weight: 200\n}\n\n.jumbotron > hr {\n    border-top-color: #d5d5d5\n}\n\n.container .jumbotron, .container-fluid .jumbotron {\n    padding-right: 15px;\n    padding-left: 15px;\n    border-radius: 6px\n}\n\n.jumbotron .container {\n    max-width: 100%\n}\n\n@media screen and (min-width: 768px) {\n    .jumbotron {\n        padding-top: 48px;\n        padding-bottom: 48px\n    }\n\n    .container .jumbotron, .container-fluid .jumbotron {\n        padding-right: 60px;\n        padding-left: 60px\n    }\n\n    .jumbotron .h1, .jumbotron h1 {\n        font-size: 63px\n    }\n}\n\n.thumbnail {\n    display: block;\n    padding: 4px;\n    margin-bottom: 20px;\n    line-height: 1.42857143;\n    background-color: #fff;\n    border: 1px solid #ddd;\n    border-radius: 4px;\n    -webkit-transition: border .2s ease-in-out;\n    -o-transition: border .2s ease-in-out;\n    transition: border .2s ease-in-out\n}\n\n.thumbnail a > img, .thumbnail > img {\n    margin-right: auto;\n    margin-left: auto\n}\n\na.thumbnail.active, a.thumbnail:focus, a.thumbnail:hover {\n    border-color: #337ab7\n}\n\n.thumbnail .caption {\n    padding: 9px;\n    color: #333\n}\n\n.alert {\n    padding: 15px;\n    margin-bottom: 20px;\n    border: 1px solid transparent;\n    border-radius: 4px\n}\n\n.alert h4 {\n    margin-top: 0;\n    color: inherit\n}\n\n.alert .alert-link {\n    font-weight: 700\n}\n\n.alert > p, .alert > ul {\n    margin-bottom: 0\n}\n\n.alert > p + p {\n    margin-top: 5px\n}\n\n.alert-dismissable, .alert-dismissible {\n    padding-right: 35px\n}\n\n.alert-dismissable .close, .alert-dismissible .close {\n    position: relative;\n    top: -2px;\n    right: -21px;\n    color: inherit\n}\n\n.alert-success {\n    color: #3c763d;\n    background-color: #dff0d8;\n    border-color: #d6e9c6\n}\n\n.alert-success hr {\n    border-top-color: #c9e2b3\n}\n\n.alert-success .alert-link {\n    color: #2b542c\n}\n\n.alert-info {\n    color: #31708f;\n    background-color: #d9edf7;\n    border-color: #bce8f1\n}\n\n.alert-info hr {\n    border-top-color: #a6e1ec\n}\n\n.alert-info .alert-link {\n    color: #245269\n}\n\n.alert-warning {\n    color: #8a6d3b;\n    background-color: #fcf8e3;\n    border-color: #faebcc\n}\n\n.alert-warning hr {\n    border-top-color: #f7e1b5\n}\n\n.alert-warning .alert-link {\n    color: #66512c\n}\n\n.alert-danger {\n    color: #a94442;\n    background-color: #f2dede;\n    border-color: #ebccd1\n}\n\n.alert-danger hr {\n    border-top-color: #e4b9c0\n}\n\n.alert-danger .alert-link {\n    color: #843534\n}\n\n@-webkit-keyframes progress-bar-stripes {\n    from {\n        background-position: 40px 0\n    }\n    to {\n        background-position: 0 0\n    }\n}\n\n@-o-keyframes progress-bar-stripes {\n    from {\n        background-position: 40px 0\n    }\n    to {\n        background-position: 0 0\n    }\n}\n\n@keyframes progress-bar-stripes {\n    from {\n        background-position: 40px 0\n    }\n    to {\n        background-position: 0 0\n    }\n}\n\n.progress {\n    height: 20px;\n    margin-bottom: 20px;\n    overflow: hidden;\n    background-color: #f5f5f5;\n    border-radius: 4px;\n    -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, .1);\n    box-shadow: inset 0 1px 2px rgba(0, 0, 0, .1)\n}\n\n.progress-bar {\n    float: left;\n    width: 0;\n    height: 100%;\n    font-size: 12px;\n    line-height: 20px;\n    color: #fff;\n    text-align: center;\n    background-color: #337ab7;\n    -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .15);\n    box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .15);\n    -webkit-transition: width .6s ease;\n    -o-transition: width .6s ease;\n    transition: width .6s ease\n}\n\n.progress-bar-striped, .progress-striped .progress-bar {\n    background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n    background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n    background-image: linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n    -webkit-background-size: 40px 40px;\n    background-size: 40px 40px\n}\n\n.progress-bar.active, .progress.active .progress-bar {\n    -webkit-animation: progress-bar-stripes 2s linear infinite;\n    -o-animation: progress-bar-stripes 2s linear infinite;\n    animation: progress-bar-stripes 2s linear infinite\n}\n\n.progress-bar-success {\n    background-color: #5cb85c\n}\n\n.progress-striped .progress-bar-success {\n    background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n    background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n    background-image: linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent)\n}\n\n.progress-bar-info {\n    background-color: #5bc0de\n}\n\n.progress-striped .progress-bar-info {\n    background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n    background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n    background-image: linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent)\n}\n\n.progress-bar-warning {\n    background-color: #f0ad4e\n}\n\n.progress-striped .progress-bar-warning {\n    background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n    background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n    background-image: linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent)\n}\n\n.progress-bar-danger {\n    background-color: #d9534f\n}\n\n.progress-striped .progress-bar-danger {\n    background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n    background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n    background-image: linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent)\n}\n\n.media {\n    margin-top: 15px\n}\n\n.media:first-child {\n    margin-top: 0\n}\n\n.media, .media-body {\n    overflow: hidden;\n    zoom: 1\n}\n\n.media-body {\n    width: 10000px\n}\n\n.media-object {\n    display: block\n}\n\n.media-object.img-thumbnail {\n    max-width: none\n}\n\n.media-right, .media > .pull-right {\n    padding-left: 10px\n}\n\n.media-left, .media > .pull-left {\n    padding-right: 10px\n}\n\n.media-body, .media-left, .media-right {\n    display: table-cell;\n    vertical-align: top\n}\n\n.media-middle {\n    vertical-align: middle\n}\n\n.media-bottom {\n    vertical-align: bottom\n}\n\n.media-heading {\n    margin-top: 0;\n    margin-bottom: 5px\n}\n\n.media-list {\n    padding-left: 0;\n    list-style: none\n}\n\n.list-group {\n    padding-left: 0;\n    margin-bottom: 20px\n}\n\n.list-group-item {\n    position: relative;\n    display: block;\n    padding: 10px 15px;\n    margin-bottom: -1px;\n    background-color: #fff;\n    border: 1px solid #ddd\n}\n\n.list-group-item:first-child {\n    border-top-left-radius: 4px;\n    border-top-right-radius: 4px\n}\n\n.list-group-item:last-child {\n    margin-bottom: 0;\n    border-bottom-right-radius: 4px;\n    border-bottom-left-radius: 4px\n}\n\na.list-group-item, button.list-group-item {\n    color: #555\n}\n\na.list-group-item .list-group-item-heading, button.list-group-item .list-group-item-heading {\n    color: #333\n}\n\na.list-group-item:focus, a.list-group-item:hover, button.list-group-item:focus, button.list-group-item:hover {\n    color: #555;\n    text-decoration: none;\n    background-color: #f5f5f5\n}\n\nbutton.list-group-item {\n    width: 100%;\n    text-align: left\n}\n\n.list-group-item.disabled, .list-group-item.disabled:focus, .list-group-item.disabled:hover {\n    color: #777;\n    cursor: not-allowed;\n    background-color: #eee\n}\n\n.list-group-item.disabled .list-group-item-heading, .list-group-item.disabled:focus .list-group-item-heading, .list-group-item.disabled:hover .list-group-item-heading {\n    color: inherit\n}\n\n.list-group-item.disabled .list-group-item-text, .list-group-item.disabled:focus .list-group-item-text, .list-group-item.disabled:hover .list-group-item-text {\n    color: #777\n}\n\n.list-group-item.active, .list-group-item.active:focus, .list-group-item.active:hover {\n    z-index: 2;\n    color: #fff;\n    background-color: #337ab7;\n    border-color: #337ab7\n}\n\n.list-group-item.active .list-group-item-heading, .list-group-item.active .list-group-item-heading > .small, .list-group-item.active .list-group-item-heading > small, .list-group-item.active:focus .list-group-item-heading, .list-group-item.active:focus .list-group-item-heading > .small, .list-group-item.active:focus .list-group-item-heading > small, .list-group-item.active:hover .list-group-item-heading, .list-group-item.active:hover .list-group-item-heading > .small, .list-group-item.active:hover .list-group-item-heading > small {\n    color: inherit\n}\n\n.list-group-item.active .list-group-item-text, .list-group-item.active:focus .list-group-item-text, .list-group-item.active:hover .list-group-item-text {\n    color: #c7ddef\n}\n\n.list-group-item-success {\n    color: #3c763d;\n    background-color: #dff0d8\n}\n\na.list-group-item-success, button.list-group-item-success {\n    color: #3c763d\n}\n\na.list-group-item-success .list-group-item-heading, button.list-group-item-success .list-group-item-heading {\n    color: inherit\n}\n\na.list-group-item-success:focus, a.list-group-item-success:hover, button.list-group-item-success:focus, button.list-group-item-success:hover {\n    color: #3c763d;\n    background-color: #d0e9c6\n}\n\na.list-group-item-success.active, a.list-group-item-success.active:focus, a.list-group-item-success.active:hover, button.list-group-item-success.active, button.list-group-item-success.active:focus, button.list-group-item-success.active:hover {\n    color: #fff;\n    background-color: #3c763d;\n    border-color: #3c763d\n}\n\n.list-group-item-info {\n    color: #31708f;\n    background-color: #d9edf7\n}\n\na.list-group-item-info, button.list-group-item-info {\n    color: #31708f\n}\n\na.list-group-item-info .list-group-item-heading, button.list-group-item-info .list-group-item-heading {\n    color: inherit\n}\n\na.list-group-item-info:focus, a.list-group-item-info:hover, button.list-group-item-info:focus, button.list-group-item-info:hover {\n    color: #31708f;\n    background-color: #c4e3f3\n}\n\na.list-group-item-info.active, a.list-group-item-info.active:focus, a.list-group-item-info.active:hover, button.list-group-item-info.active, button.list-group-item-info.active:focus, button.list-group-item-info.active:hover {\n    color: #fff;\n    background-color: #31708f;\n    border-color: #31708f\n}\n\n.list-group-item-warning {\n    color: #8a6d3b;\n    background-color: #fcf8e3\n}\n\na.list-group-item-warning, button.list-group-item-warning {\n    color: #8a6d3b\n}\n\na.list-group-item-warning .list-group-item-heading, button.list-group-item-warning .list-group-item-heading {\n    color: inherit\n}\n\na.list-group-item-warning:focus, a.list-group-item-warning:hover, button.list-group-item-warning:focus, button.list-group-item-warning:hover {\n    color: #8a6d3b;\n    background-color: #faf2cc\n}\n\na.list-group-item-warning.active, a.list-group-item-warning.active:focus, a.list-group-item-warning.active:hover, button.list-group-item-warning.active, button.list-group-item-warning.active:focus, button.list-group-item-warning.active:hover {\n    color: #fff;\n    background-color: #8a6d3b;\n    border-color: #8a6d3b\n}\n\n.list-group-item-danger {\n    color: #a94442;\n    background-color: #f2dede\n}\n\na.list-group-item-danger, button.list-group-item-danger {\n    color: #a94442\n}\n\na.list-group-item-danger .list-group-item-heading, button.list-group-item-danger .list-group-item-heading {\n    color: inherit\n}\n\na.list-group-item-danger:focus, a.list-group-item-danger:hover, button.list-group-item-danger:focus, button.list-group-item-danger:hover {\n    color: #a94442;\n    background-color: #ebcccc\n}\n\na.list-group-item-danger.active, a.list-group-item-danger.active:focus, a.list-group-item-danger.active:hover, button.list-group-item-danger.active, button.list-group-item-danger.active:focus, button.list-group-item-danger.active:hover {\n    color: #fff;\n    background-color: #a94442;\n    border-color: #a94442\n}\n\n.list-group-item-heading {\n    margin-top: 0;\n    margin-bottom: 5px\n}\n\n.list-group-item-text {\n    margin-bottom: 0;\n    line-height: 1.3\n}\n\n.panel {\n    margin-bottom: 20px;\n    background-color: #fff;\n    border: 1px solid transparent;\n    border-radius: 4px;\n    -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, .05);\n    box-shadow: 0 1px 1px rgba(0, 0, 0, .05)\n}\n\n.panel-body {\n    padding: 15px\n}\n\n.panel-heading {\n    padding: 10px 15px;\n    border-bottom: 1px solid transparent;\n    border-top-left-radius: 3px;\n    border-top-right-radius: 3px\n}\n\n.panel-heading > .dropdown .dropdown-toggle {\n    color: inherit\n}\n\n.panel-title {\n    margin-top: 0;\n    margin-bottom: 0;\n    font-size: 16px;\n    color: inherit\n}\n\n.panel-title > .small, .panel-title > .small > a, .panel-title > a, .panel-title > small, .panel-title > small > a {\n    color: inherit\n}\n\n.panel-footer {\n    padding: 10px 15px;\n    background-color: #f5f5f5;\n    border-top: 1px solid #ddd;\n    border-bottom-right-radius: 3px;\n    border-bottom-left-radius: 3px\n}\n\n.panel > .list-group, .panel > .panel-collapse > .list-group {\n    margin-bottom: 0\n}\n\n.panel > .list-group .list-group-item, .panel > .panel-collapse > .list-group .list-group-item {\n    border-width: 1px 0;\n    border-radius: 0\n}\n\n.panel > .list-group:first-child .list-group-item:first-child, .panel > .panel-collapse > .list-group:first-child .list-group-item:first-child {\n    border-top: 0;\n    border-top-left-radius: 3px;\n    border-top-right-radius: 3px\n}\n\n.panel > .list-group:last-child .list-group-item:last-child, .panel > .panel-collapse > .list-group:last-child .list-group-item:last-child {\n    border-bottom: 0;\n    border-bottom-right-radius: 3px;\n    border-bottom-left-radius: 3px\n}\n\n.panel > .panel-heading + .panel-collapse > .list-group .list-group-item:first-child {\n    border-top-left-radius: 0;\n    border-top-right-radius: 0\n}\n\n.panel-heading + .list-group .list-group-item:first-child {\n    border-top-width: 0\n}\n\n.list-group + .panel-footer {\n    border-top-width: 0\n}\n\n.panel > .panel-collapse > .table, .panel > .table, .panel > .table-responsive > .table {\n    margin-bottom: 0\n}\n\n.panel > .panel-collapse > .table caption, .panel > .table caption, .panel > .table-responsive > .table caption {\n    padding-right: 15px;\n    padding-left: 15px\n}\n\n.panel > .table-responsive:first-child > .table:first-child, .panel > .table:first-child {\n    border-top-left-radius: 3px;\n    border-top-right-radius: 3px\n}\n\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child, .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child, .panel > .table:first-child > tbody:first-child > tr:first-child, .panel > .table:first-child > thead:first-child > tr:first-child {\n    border-top-left-radius: 3px;\n    border-top-right-radius: 3px\n}\n\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:first-child, .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:first-child, .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:first-child, .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:first-child, .panel > .table:first-child > tbody:first-child > tr:first-child td:first-child, .panel > .table:first-child > tbody:first-child > tr:first-child th:first-child, .panel > .table:first-child > thead:first-child > tr:first-child td:first-child, .panel > .table:first-child > thead:first-child > tr:first-child th:first-child {\n    border-top-left-radius: 3px\n}\n\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:last-child, .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:last-child, .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:last-child, .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:last-child, .panel > .table:first-child > tbody:first-child > tr:first-child td:last-child, .panel > .table:first-child > tbody:first-child > tr:first-child th:last-child, .panel > .table:first-child > thead:first-child > tr:first-child td:last-child, .panel > .table:first-child > thead:first-child > tr:first-child th:last-child {\n    border-top-right-radius: 3px\n}\n\n.panel > .table-responsive:last-child > .table:last-child, .panel > .table:last-child {\n    border-bottom-right-radius: 3px;\n    border-bottom-left-radius: 3px\n}\n\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child, .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child, .panel > .table:last-child > tbody:last-child > tr:last-child, .panel > .table:last-child > tfoot:last-child > tr:last-child {\n    border-bottom-right-radius: 3px;\n    border-bottom-left-radius: 3px\n}\n\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:first-child, .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:first-child, .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:first-child, .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:first-child, .panel > .table:last-child > tbody:last-child > tr:last-child td:first-child, .panel > .table:last-child > tbody:last-child > tr:last-child th:first-child, .panel > .table:last-child > tfoot:last-child > tr:last-child td:first-child, .panel > .table:last-child > tfoot:last-child > tr:last-child th:first-child {\n    border-bottom-left-radius: 3px\n}\n\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:last-child, .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:last-child, .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:last-child, .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:last-child, .panel > .table:last-child > tbody:last-child > tr:last-child td:last-child, .panel > .table:last-child > tbody:last-child > tr:last-child th:last-child, .panel > .table:last-child > tfoot:last-child > tr:last-child td:last-child, .panel > .table:last-child > tfoot:last-child > tr:last-child th:last-child {\n    border-bottom-right-radius: 3px\n}\n\n.panel > .panel-body + .table, .panel > .panel-body + .table-responsive, .panel > .table + .panel-body, .panel > .table-responsive + .panel-body {\n    border-top: 1px solid #ddd\n}\n\n.panel > .table > tbody:first-child > tr:first-child td, .panel > .table > tbody:first-child > tr:first-child th {\n    border-top: 0\n}\n\n.panel > .table-bordered, .panel > .table-responsive > .table-bordered {\n    border: 0\n}\n\n.panel > .table-bordered > tbody > tr > td:first-child, .panel > .table-bordered > tbody > tr > th:first-child, .panel > .table-bordered > tfoot > tr > td:first-child, .panel > .table-bordered > tfoot > tr > th:first-child, .panel > .table-bordered > thead > tr > td:first-child, .panel > .table-bordered > thead > tr > th:first-child, .panel > .table-responsive > .table-bordered > tbody > tr > td:first-child, .panel > .table-responsive > .table-bordered > tbody > tr > th:first-child, .panel > .table-responsive > .table-bordered > tfoot > tr > td:first-child, .panel > .table-responsive > .table-bordered > tfoot > tr > th:first-child, .panel > .table-responsive > .table-bordered > thead > tr > td:first-child, .panel > .table-responsive > .table-bordered > thead > tr > th:first-child {\n    border-left: 0\n}\n\n.panel > .table-bordered > tbody > tr > td:last-child, .panel > .table-bordered > tbody > tr > th:last-child, .panel > .table-bordered > tfoot > tr > td:last-child, .panel > .table-bordered > tfoot > tr > th:last-child, .panel > .table-bordered > thead > tr > td:last-child, .panel > .table-bordered > thead > tr > th:last-child, .panel > .table-responsive > .table-bordered > tbody > tr > td:last-child, .panel > .table-responsive > .table-bordered > tbody > tr > th:last-child, .panel > .table-responsive > .table-bordered > tfoot > tr > td:last-child, .panel > .table-responsive > .table-bordered > tfoot > tr > th:last-child, .panel > .table-responsive > .table-bordered > thead > tr > td:last-child, .panel > .table-responsive > .table-bordered > thead > tr > th:last-child {\n    border-right: 0\n}\n\n.panel > .table-bordered > tbody > tr:first-child > td, .panel > .table-bordered > tbody > tr:first-child > th, .panel > .table-bordered > thead > tr:first-child > td, .panel > .table-bordered > thead > tr:first-child > th, .panel > .table-responsive > .table-bordered > tbody > tr:first-child > td, .panel > .table-responsive > .table-bordered > tbody > tr:first-child > th, .panel > .table-responsive > .table-bordered > thead > tr:first-child > td, .panel > .table-responsive > .table-bordered > thead > tr:first-child > th {\n    border-bottom: 0\n}\n\n.panel > .table-bordered > tbody > tr:last-child > td, .panel > .table-bordered > tbody > tr:last-child > th, .panel > .table-bordered > tfoot > tr:last-child > td, .panel > .table-bordered > tfoot > tr:last-child > th, .panel > .table-responsive > .table-bordered > tbody > tr:last-child > td, .panel > .table-responsive > .table-bordered > tbody > tr:last-child > th, .panel > .table-responsive > .table-bordered > tfoot > tr:last-child > td, .panel > .table-responsive > .table-bordered > tfoot > tr:last-child > th {\n    border-bottom: 0\n}\n\n.panel > .table-responsive {\n    margin-bottom: 0;\n    border: 0\n}\n\n.panel-group {\n    margin-bottom: 20px\n}\n\n.panel-group .panel {\n    margin-bottom: 0;\n    border-radius: 4px\n}\n\n.panel-group .panel + .panel {\n    margin-top: 5px\n}\n\n.panel-group .panel-heading {\n    border-bottom: 0\n}\n\n.panel-group .panel-heading + .panel-collapse > .list-group, .panel-group .panel-heading + .panel-collapse > .panel-body {\n    border-top: 1px solid #ddd\n}\n\n.panel-group .panel-footer {\n    border-top: 0\n}\n\n.panel-group .panel-footer + .panel-collapse .panel-body {\n    border-bottom: 1px solid #ddd\n}\n\n.panel-default {\n    border-color: #ddd\n}\n\n.panel-default > .panel-heading {\n    color: #333;\n    background-color: #f5f5f5;\n    border-color: #ddd\n}\n\n.panel-default > .panel-heading + .panel-collapse > .panel-body {\n    border-top-color: #ddd\n}\n\n.panel-default > .panel-heading .badge {\n    color: #f5f5f5;\n    background-color: #333\n}\n\n.panel-default > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #ddd\n}\n\n.panel-primary {\n    border-color: #337ab7\n}\n\n.panel-primary > .panel-heading {\n    color: #fff;\n    background-color: #337ab7;\n    border-color: #337ab7\n}\n\n.panel-primary > .panel-heading + .panel-collapse > .panel-body {\n    border-top-color: #337ab7\n}\n\n.panel-primary > .panel-heading .badge {\n    color: #337ab7;\n    background-color: #fff\n}\n\n.panel-primary > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #337ab7\n}\n\n.panel-success {\n    border-color: #d6e9c6\n}\n\n.panel-success > .panel-heading {\n    color: #3c763d;\n    background-color: #dff0d8;\n    border-color: #d6e9c6\n}\n\n.panel-success > .panel-heading + .panel-collapse > .panel-body {\n    border-top-color: #d6e9c6\n}\n\n.panel-success > .panel-heading .badge {\n    color: #dff0d8;\n    background-color: #3c763d\n}\n\n.panel-success > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #d6e9c6\n}\n\n.panel-info {\n    border-color: #bce8f1\n}\n\n.panel-info > .panel-heading {\n    color: #31708f;\n    background-color: #d9edf7;\n    border-color: #bce8f1\n}\n\n.panel-info > .panel-heading + .panel-collapse > .panel-body {\n    border-top-color: #bce8f1\n}\n\n.panel-info > .panel-heading .badge {\n    color: #d9edf7;\n    background-color: #31708f\n}\n\n.panel-info > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #bce8f1\n}\n\n.panel-warning {\n    border-color: #faebcc\n}\n\n.panel-warning > .panel-heading {\n    color: #8a6d3b;\n    background-color: #fcf8e3;\n    border-color: #faebcc\n}\n\n.panel-warning > .panel-heading + .panel-collapse > .panel-body {\n    border-top-color: #faebcc\n}\n\n.panel-warning > .panel-heading .badge {\n    color: #fcf8e3;\n    background-color: #8a6d3b\n}\n\n.panel-warning > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #faebcc\n}\n\n.panel-danger {\n    border-color: #ebccd1\n}\n\n.panel-danger > .panel-heading {\n    color: #a94442;\n    background-color: #f2dede;\n    border-color: #ebccd1\n}\n\n.panel-danger > .panel-heading + .panel-collapse > .panel-body {\n    border-top-color: #ebccd1\n}\n\n.panel-danger > .panel-heading .badge {\n    color: #f2dede;\n    background-color: #a94442\n}\n\n.panel-danger > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #ebccd1\n}\n\n.embed-responsive {\n    position: relative;\n    display: block;\n    height: 0;\n    padding: 0;\n    overflow: hidden\n}\n\n.embed-responsive .embed-responsive-item, .embed-responsive embed, .embed-responsive iframe, .embed-responsive object, .embed-responsive video {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    border: 0\n}\n\n.embed-responsive-16by9 {\n    padding-bottom: 56.25%\n}\n\n.embed-responsive-4by3 {\n    padding-bottom: 75%\n}\n\n.well {\n    min-height: 20px;\n    padding: 19px;\n    margin-bottom: 20px;\n    background-color: #f5f5f5;\n    border: 1px solid #e3e3e3;\n    border-radius: 4px;\n    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05);\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05)\n}\n\n.well blockquote {\n    border-color: #ddd;\n    border-color: rgba(0, 0, 0, .15)\n}\n\n.well-lg {\n    padding: 24px;\n    border-radius: 6px\n}\n\n.well-sm {\n    padding: 9px;\n    border-radius: 3px\n}\n\n.close {\n    float: right;\n    font-size: 21px;\n    font-weight: 700;\n    line-height: 1;\n    color: #000;\n    text-shadow: 0 1px 0 #fff;\n    filter: alpha(opacity=20);\n    opacity: .2\n}\n\n.close:focus, .close:hover {\n    color: #000;\n    text-decoration: none;\n    cursor: pointer;\n    filter: alpha(opacity=50);\n    opacity: .5\n}\n\nbutton.close {\n    -webkit-appearance: none;\n    padding: 0;\n    cursor: pointer;\n    background: 0 0;\n    border: 0\n}\n\n.modal-open {\n    overflow: hidden\n}\n\n.modal {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 1050;\n    display: none;\n    overflow: hidden;\n    -webkit-overflow-scrolling: touch;\n    outline: 0\n}\n\n.modal.fade .modal-dialog {\n    -webkit-transition: -webkit-transform .3s ease-out;\n    -o-transition: -o-transform .3s ease-out;\n    transition: transform .3s ease-out;\n    -webkit-transform: translate(0, -25%);\n    -ms-transform: translate(0, -25%);\n    -o-transform: translate(0, -25%);\n    transform: translate(0, -25%)\n}\n\n.modal.in .modal-dialog {\n    -webkit-transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n    transform: translate(0, 0)\n}\n\n.modal-open .modal {\n    overflow-x: hidden;\n    overflow-y: auto\n}\n\n.modal-dialog {\n    position: relative;\n    width: auto;\n    margin: 10px\n}\n\n.modal-content {\n    position: relative;\n    background-color: #fff;\n    -webkit-background-clip: padding-box;\n    background-clip: padding-box;\n    border: 1px solid #999;\n    border: 1px solid rgba(0, 0, 0, .2);\n    border-radius: 6px;\n    outline: 0;\n    -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, .5);\n    box-shadow: 0 3px 9px rgba(0, 0, 0, .5)\n}\n\n.modal-backdrop {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 1040;\n    background-color: #000\n}\n\n.modal-backdrop.fade {\n    filter: alpha(opacity=0);\n    opacity: 0\n}\n\n.modal-backdrop.in {\n    filter: alpha(opacity=50);\n    opacity: .5\n}\n\n.modal-header {\n    padding: 15px;\n    border-bottom: 1px solid #e5e5e5\n}\n\n.modal-header .close {\n    margin-top: -2px\n}\n\n.modal-title {\n    margin: 0;\n    line-height: 1.42857143\n}\n\n.modal-body {\n    position: relative;\n    padding: 15px\n}\n\n.modal-footer {\n    padding: 15px;\n    text-align: right;\n    border-top: 1px solid #e5e5e5\n}\n\n.modal-footer .btn + .btn {\n    margin-bottom: 0;\n    margin-left: 5px\n}\n\n.modal-footer .btn-group .btn + .btn {\n    margin-left: -1px\n}\n\n.modal-footer .btn-block + .btn-block {\n    margin-left: 0\n}\n\n.modal-scrollbar-measure {\n    position: absolute;\n    top: -9999px;\n    width: 50px;\n    height: 50px;\n    overflow: scroll\n}\n\n@media (min-width: 768px) {\n    .modal-dialog {\n        width: 600px;\n        margin: 30px auto\n    }\n\n    .modal-content {\n        -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, .5);\n        box-shadow: 0 5px 15px rgba(0, 0, 0, .5)\n    }\n\n    .modal-sm {\n        width: 300px\n    }\n}\n\n@media (min-width: 992px) {\n    .modal-lg {\n        width: 900px\n    }\n}\n\n.tooltip {\n    position: absolute;\n    z-index: 1070;\n    display: block;\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    font-size: 12px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 1.42857143;\n    text-align: left;\n    text-align: start;\n    text-decoration: none;\n    text-shadow: none;\n    text-transform: none;\n    letter-spacing: normal;\n    word-break: normal;\n    word-spacing: normal;\n    word-wrap: normal;\n    white-space: normal;\n    filter: alpha(opacity=0);\n    opacity: 0;\n    line-break: auto\n}\n\n.tooltip.in {\n    filter: alpha(opacity=90);\n    opacity: .9\n}\n\n.tooltip.top {\n    padding: 5px 0;\n    margin-top: -3px\n}\n\n.tooltip.right {\n    padding: 0 5px;\n    margin-left: 3px\n}\n\n.tooltip.bottom {\n    padding: 5px 0;\n    margin-top: 3px\n}\n\n.tooltip.left {\n    padding: 0 5px;\n    margin-left: -3px\n}\n\n.tooltip-inner {\n    max-width: 200px;\n    padding: 3px 8px;\n    color: #fff;\n    text-align: center;\n    background-color: #000;\n    border-radius: 4px\n}\n\n.tooltip-arrow {\n    position: absolute;\n    width: 0;\n    height: 0;\n    border-color: transparent;\n    border-style: solid\n}\n\n.tooltip.top .tooltip-arrow {\n    bottom: 0;\n    left: 50%;\n    margin-left: -5px;\n    border-width: 5px 5px 0;\n    border-top-color: #000\n}\n\n.tooltip.top-left .tooltip-arrow {\n    right: 5px;\n    bottom: 0;\n    margin-bottom: -5px;\n    border-width: 5px 5px 0;\n    border-top-color: #000\n}\n\n.tooltip.top-right .tooltip-arrow {\n    bottom: 0;\n    left: 5px;\n    margin-bottom: -5px;\n    border-width: 5px 5px 0;\n    border-top-color: #000\n}\n\n.tooltip.right .tooltip-arrow {\n    top: 50%;\n    left: 0;\n    margin-top: -5px;\n    border-width: 5px 5px 5px 0;\n    border-right-color: #000\n}\n\n.tooltip.left .tooltip-arrow {\n    top: 50%;\n    right: 0;\n    margin-top: -5px;\n    border-width: 5px 0 5px 5px;\n    border-left-color: #000\n}\n\n.tooltip.bottom .tooltip-arrow {\n    top: 0;\n    left: 50%;\n    margin-left: -5px;\n    border-width: 0 5px 5px;\n    border-bottom-color: #000\n}\n\n.tooltip.bottom-left .tooltip-arrow {\n    top: 0;\n    right: 5px;\n    margin-top: -5px;\n    border-width: 0 5px 5px;\n    border-bottom-color: #000\n}\n\n.tooltip.bottom-right .tooltip-arrow {\n    top: 0;\n    left: 5px;\n    margin-top: -5px;\n    border-width: 0 5px 5px;\n    border-bottom-color: #000\n}\n\n.popover {\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 1060;\n    display: none;\n    max-width: 276px;\n    padding: 1px;\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 1.42857143;\n    text-align: left;\n    text-align: start;\n    text-decoration: none;\n    text-shadow: none;\n    text-transform: none;\n    letter-spacing: normal;\n    word-break: normal;\n    word-spacing: normal;\n    word-wrap: normal;\n    white-space: normal;\n    background-color: #fff;\n    -webkit-background-clip: padding-box;\n    background-clip: padding-box;\n    border: 1px solid #ccc;\n    border: 1px solid rgba(0, 0, 0, .2);\n    border-radius: 6px;\n    -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, .2);\n    box-shadow: 0 5px 10px rgba(0, 0, 0, .2);\n    line-break: auto\n}\n\n.popover.top {\n    margin-top: -10px\n}\n\n.popover.right {\n    margin-left: 10px\n}\n\n.popover.bottom {\n    margin-top: 10px\n}\n\n.popover.left {\n    margin-left: -10px\n}\n\n.popover-title {\n    padding: 8px 14px;\n    margin: 0;\n    font-size: 14px;\n    background-color: #f7f7f7;\n    border-bottom: 1px solid #ebebeb;\n    border-radius: 5px 5px 0 0\n}\n\n.popover-content {\n    padding: 9px 14px\n}\n\n.popover > .arrow, .popover > .arrow:after {\n    position: absolute;\n    display: block;\n    width: 0;\n    height: 0;\n    border-color: transparent;\n    border-style: solid\n}\n\n.popover > .arrow {\n    border-width: 11px\n}\n\n.popover > .arrow:after {\n    content: \"\";\n    border-width: 10px\n}\n\n.popover.top > .arrow {\n    bottom: -11px;\n    left: 50%;\n    margin-left: -11px;\n    border-top-color: #999;\n    border-top-color: rgba(0, 0, 0, .25);\n    border-bottom-width: 0\n}\n\n.popover.top > .arrow:after {\n    bottom: 1px;\n    margin-left: -10px;\n    content: \" \";\n    border-top-color: #fff;\n    border-bottom-width: 0\n}\n\n.popover.right > .arrow {\n    top: 50%;\n    left: -11px;\n    margin-top: -11px;\n    border-right-color: #999;\n    border-right-color: rgba(0, 0, 0, .25);\n    border-left-width: 0\n}\n\n.popover.right > .arrow:after {\n    bottom: -10px;\n    left: 1px;\n    content: \" \";\n    border-right-color: #fff;\n    border-left-width: 0\n}\n\n.popover.bottom > .arrow {\n    top: -11px;\n    left: 50%;\n    margin-left: -11px;\n    border-top-width: 0;\n    border-bottom-color: #999;\n    border-bottom-color: rgba(0, 0, 0, .25)\n}\n\n.popover.bottom > .arrow:after {\n    top: 1px;\n    margin-left: -10px;\n    content: \" \";\n    border-top-width: 0;\n    border-bottom-color: #fff\n}\n\n.popover.left > .arrow {\n    top: 50%;\n    right: -11px;\n    margin-top: -11px;\n    border-right-width: 0;\n    border-left-color: #999;\n    border-left-color: rgba(0, 0, 0, .25)\n}\n\n.popover.left > .arrow:after {\n    right: 1px;\n    bottom: -10px;\n    content: \" \";\n    border-right-width: 0;\n    border-left-color: #fff\n}\n\n.carousel {\n    position: relative\n}\n\n.carousel-inner {\n    position: relative;\n    width: 100%;\n    overflow: hidden\n}\n\n.carousel-inner > .item {\n    position: relative;\n    display: none;\n    -webkit-transition: .6s ease-in-out left;\n    -o-transition: .6s ease-in-out left;\n    transition: .6s ease-in-out left\n}\n\n.carousel-inner > .item > a > img, .carousel-inner > .item > img {\n    line-height: 1\n}\n\n@media all and (transform-3d),(-webkit-transform-3d) {\n    .carousel-inner > .item {\n        -webkit-transition: -webkit-transform .6s ease-in-out;\n        -o-transition: -o-transform .6s ease-in-out;\n        transition: transform .6s ease-in-out;\n        -webkit-backface-visibility: hidden;\n        backface-visibility: hidden;\n        -webkit-perspective: 1000px;\n        perspective: 1000px\n    }\n\n    .carousel-inner > .item.active.right, .carousel-inner > .item.next {\n        left: 0;\n        -webkit-transform: translate3d(100%, 0, 0);\n        transform: translate3d(100%, 0, 0)\n    }\n\n    .carousel-inner > .item.active.left, .carousel-inner > .item.prev {\n        left: 0;\n        -webkit-transform: translate3d(-100%, 0, 0);\n        transform: translate3d(-100%, 0, 0)\n    }\n\n    .carousel-inner > .item.active, .carousel-inner > .item.next.left, .carousel-inner > .item.prev.right {\n        left: 0;\n        -webkit-transform: translate3d(0, 0, 0);\n        transform: translate3d(0, 0, 0)\n    }\n}\n\n.carousel-inner > .active, .carousel-inner > .next, .carousel-inner > .prev {\n    display: block\n}\n\n.carousel-inner > .active {\n    left: 0\n}\n\n.carousel-inner > .next, .carousel-inner > .prev {\n    position: absolute;\n    top: 0;\n    width: 100%\n}\n\n.carousel-inner > .next {\n    left: 100%\n}\n\n.carousel-inner > .prev {\n    left: -100%\n}\n\n.carousel-inner > .next.left, .carousel-inner > .prev.right {\n    left: 0\n}\n\n.carousel-inner > .active.left {\n    left: -100%\n}\n\n.carousel-inner > .active.right {\n    left: 100%\n}\n\n.carousel-control {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    width: 15%;\n    font-size: 20px;\n    color: #fff;\n    text-align: center;\n    text-shadow: 0 1px 2px rgba(0, 0, 0, .6);\n    background-color: rgba(0, 0, 0, 0);\n    filter: alpha(opacity=50);\n    opacity: .5\n}\n\n.carousel-control.left {\n    background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, .5) 0, rgba(0, 0, 0, .0001) 100%);\n    background-image: -o-linear-gradient(left, rgba(0, 0, 0, .5) 0, rgba(0, 0, 0, .0001) 100%);\n    background-image: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, .5)), to(rgba(0, 0, 0, .0001)));\n    background-image: linear-gradient(to right, rgba(0, 0, 0, .5) 0, rgba(0, 0, 0, .0001) 100%);\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1);\n    background-repeat: repeat-x\n}\n\n.carousel-control.right {\n    right: 0;\n    left: auto;\n    background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, .0001) 0, rgba(0, 0, 0, .5) 100%);\n    background-image: -o-linear-gradient(left, rgba(0, 0, 0, .0001) 0, rgba(0, 0, 0, .5) 100%);\n    background-image: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, .0001)), to(rgba(0, 0, 0, .5)));\n    background-image: linear-gradient(to right, rgba(0, 0, 0, .0001) 0, rgba(0, 0, 0, .5) 100%);\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1);\n    background-repeat: repeat-x\n}\n\n.carousel-control:focus, .carousel-control:hover {\n    color: #fff;\n    text-decoration: none;\n    filter: alpha(opacity=90);\n    outline: 0;\n    opacity: .9\n}\n\n.carousel-control .glyphicon-chevron-left, .carousel-control .glyphicon-chevron-right, .carousel-control .icon-next, .carousel-control .icon-prev {\n    position: absolute;\n    top: 50%;\n    z-index: 5;\n    display: inline-block;\n    margin-top: -10px\n}\n\n.carousel-control .glyphicon-chevron-left, .carousel-control .icon-prev {\n    left: 50%;\n    margin-left: -10px\n}\n\n.carousel-control .glyphicon-chevron-right, .carousel-control .icon-next {\n    right: 50%;\n    margin-right: -10px\n}\n\n.carousel-control .icon-next, .carousel-control .icon-prev {\n    width: 20px;\n    height: 20px;\n    font-family: serif;\n    line-height: 1\n}\n\n.carousel-control .icon-prev:before {\n    content: '\\2039'\n}\n\n.carousel-control .icon-next:before {\n    content: '\\203A'\n}\n\n.carousel-indicators {\n    position: absolute;\n    bottom: 10px;\n    left: 50%;\n    z-index: 15;\n    width: 60%;\n    padding-left: 0;\n    margin-left: -30%;\n    text-align: center;\n    list-style: none\n}\n\n.carousel-indicators li {\n    display: inline-block;\n    width: 10px;\n    height: 10px;\n    margin: 1px;\n    text-indent: -999px;\n    cursor: pointer;\n    background-color: #000 \\9;\n    background-color: rgba(0, 0, 0, 0);\n    border: 1px solid #fff;\n    border-radius: 10px\n}\n\n.carousel-indicators .active {\n    width: 12px;\n    height: 12px;\n    margin: 0;\n    background-color: #fff\n}\n\n.carousel-caption {\n    position: absolute;\n    right: 15%;\n    bottom: 20px;\n    left: 15%;\n    z-index: 10;\n    padding-top: 20px;\n    padding-bottom: 20px;\n    color: #fff;\n    text-align: center;\n    text-shadow: 0 1px 2px rgba(0, 0, 0, .6)\n}\n\n.carousel-caption .btn {\n    text-shadow: none\n}\n\n@media screen and (min-width: 768px) {\n    .carousel-control .glyphicon-chevron-left, .carousel-control .glyphicon-chevron-right, .carousel-control .icon-next, .carousel-control .icon-prev {\n        width: 30px;\n        height: 30px;\n        margin-top: -10px;\n        font-size: 30px\n    }\n\n    .carousel-control .glyphicon-chevron-left, .carousel-control .icon-prev {\n        margin-left: -10px\n    }\n\n    .carousel-control .glyphicon-chevron-right, .carousel-control .icon-next {\n        margin-right: -10px\n    }\n\n    .carousel-caption {\n        right: 20%;\n        left: 20%;\n        padding-bottom: 30px\n    }\n\n    .carousel-indicators {\n        bottom: 20px\n    }\n}\n\n.btn-group-vertical > .btn-group:after, .btn-group-vertical > .btn-group:before, .btn-toolbar:after, .btn-toolbar:before, .clearfix:after, .clearfix:before, .container-fluid:after, .container-fluid:before, .container:after, .container:before, .dl-horizontal dd:after, .dl-horizontal dd:before, .form-horizontal .form-group:after, .form-horizontal .form-group:before, .modal-footer:after, .modal-footer:before, .modal-header:after, .modal-header:before, .nav:after, .nav:before, .navbar-collapse:after, .navbar-collapse:before, .navbar-header:after, .navbar-header:before, .navbar:after, .navbar:before, .pager:after, .pager:before, .panel-body:after, .panel-body:before, .row:after, .row:before {\n    display: table;\n    content: \" \"\n}\n\n.btn-group-vertical > .btn-group:after, .btn-toolbar:after, .clearfix:after, .container-fluid:after, .container:after, .dl-horizontal dd:after, .form-horizontal .form-group:after, .modal-footer:after, .modal-header:after, .nav:after, .navbar-collapse:after, .navbar-header:after, .navbar:after, .pager:after, .panel-body:after, .row:after {\n    clear: both\n}\n\n.center-block {\n    display: block;\n    margin-right: auto;\n    margin-left: auto\n}\n\n.pull-right {\n    float: right !important\n}\n\n.pull-left {\n    float: left !important\n}\n\n.hide {\n    display: none !important\n}\n\n.show {\n    display: block !important\n}\n\n.invisible {\n    visibility: hidden\n}\n\n.text-hide {\n    font: 0/0 a;\n    color: transparent;\n    text-shadow: none;\n    background-color: transparent;\n    border: 0\n}\n\n.hidden {\n    display: none !important\n}\n\n.affix {\n    position: fixed\n}\n\n@-ms-viewport {\n    width: device-width\n}\n\n.visible-lg, .visible-md, .visible-sm, .visible-xs {\n    display: none !important\n}\n\n.visible-lg-block, .visible-lg-inline, .visible-lg-inline-block, .visible-md-block, .visible-md-inline, .visible-md-inline-block, .visible-sm-block, .visible-sm-inline, .visible-sm-inline-block, .visible-xs-block, .visible-xs-inline, .visible-xs-inline-block {\n    display: none !important\n}\n\n@media (max-width: 767px) {\n    .visible-xs {\n        display: block !important\n    }\n\n    table.visible-xs {\n        display: table !important\n    }\n\n    tr.visible-xs {\n        display: table-row !important\n    }\n\n    td.visible-xs, th.visible-xs {\n        display: table-cell !important\n    }\n}\n\n@media (max-width: 767px) {\n    .visible-xs-block {\n        display: block !important\n    }\n}\n\n@media (max-width: 767px) {\n    .visible-xs-inline {\n        display: inline !important\n    }\n}\n\n@media (max-width: 767px) {\n    .visible-xs-inline-block {\n        display: inline-block !important\n    }\n}\n\n@media (min-width: 768px) and (max-width: 991px) {\n    .visible-sm {\n        display: block !important\n    }\n\n    table.visible-sm {\n        display: table !important\n    }\n\n    tr.visible-sm {\n        display: table-row !important\n    }\n\n    td.visible-sm, th.visible-sm {\n        display: table-cell !important\n    }\n}\n\n@media (min-width: 768px) and (max-width: 991px) {\n    .visible-sm-block {\n        display: block !important\n    }\n}\n\n@media (min-width: 768px) and (max-width: 991px) {\n    .visible-sm-inline {\n        display: inline !important\n    }\n}\n\n@media (min-width: 768px) and (max-width: 991px) {\n    .visible-sm-inline-block {\n        display: inline-block !important\n    }\n}\n\n@media (min-width: 992px) and (max-width: 1199px) {\n    .visible-md {\n        display: block !important\n    }\n\n    table.visible-md {\n        display: table !important\n    }\n\n    tr.visible-md {\n        display: table-row !important\n    }\n\n    td.visible-md, th.visible-md {\n        display: table-cell !important\n    }\n}\n\n@media (min-width: 992px) and (max-width: 1199px) {\n    .visible-md-block {\n        display: block !important\n    }\n}\n\n@media (min-width: 992px) and (max-width: 1199px) {\n    .visible-md-inline {\n        display: inline !important\n    }\n}\n\n@media (min-width: 992px) and (max-width: 1199px) {\n    .visible-md-inline-block {\n        display: inline-block !important\n    }\n}\n\n@media (min-width: 1200px) {\n    .visible-lg {\n        display: block !important\n    }\n\n    table.visible-lg {\n        display: table !important\n    }\n\n    tr.visible-lg {\n        display: table-row !important\n    }\n\n    td.visible-lg, th.visible-lg {\n        display: table-cell !important\n    }\n}\n\n@media (min-width: 1200px) {\n    .visible-lg-block {\n        display: block !important\n    }\n}\n\n@media (min-width: 1200px) {\n    .visible-lg-inline {\n        display: inline !important\n    }\n}\n\n@media (min-width: 1200px) {\n    .visible-lg-inline-block {\n        display: inline-block !important\n    }\n}\n\n@media (max-width: 767px) {\n    .hidden-xs {\n        display: none !important\n    }\n}\n\n@media (min-width: 768px) and (max-width: 991px) {\n    .hidden-sm {\n        display: none !important\n    }\n}\n\n@media (min-width: 992px) and (max-width: 1199px) {\n    .hidden-md {\n        display: none !important\n    }\n}\n\n@media (min-width: 1200px) {\n    .hidden-lg {\n        display: none !important\n    }\n}\n\n.visible-print {\n    display: none !important\n}\n\n@media print {\n    .visible-print {\n        display: block !important\n    }\n\n    table.visible-print {\n        display: table !important\n    }\n\n    tr.visible-print {\n        display: table-row !important\n    }\n\n    td.visible-print, th.visible-print {\n        display: table-cell !important\n    }\n}\n\n.visible-print-block {\n    display: none !important\n}\n\n@media print {\n    .visible-print-block {\n        display: block !important\n    }\n}\n\n.visible-print-inline {\n    display: none !important\n}\n\n@media print {\n    .visible-print-inline {\n        display: inline !important\n    }\n}\n\n.visible-print-inline-block {\n    display: none !important\n}\n\n@media print {\n    .visible-print-inline-block {\n        display: inline-block !important\n    }\n}\n\n@media print {\n    .hidden-print {\n        display: none !important\n    }\n}\n/*# sourceMappingURL=bootstrap.min.css.map */", ""]);

	// exports


/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template>
	//     <div class="wrap list-group">
	//         <a href="#" class="list-group-item active">
	//             CRM项目基础UI界面
	//         </a>
	//         <a href="javascript:;"class="list-group-item" v-for="item in items">{{item}}</a>
	//     </div>
	// </template>
	// <script type="es6">
	exports.default = {
	    data: function data() {
	        return {
	            items: ["登录界面", "编辑界面", "新建界面", "测试界面"]
	        };
	    }
	};
	// </script>
	// <style>
	//     @import "./../js/bootstrap/bootstrap.min.css";
	//
	//     .wrap{
	//         width: 400px;
	//         margin:0 auto;
	//     }
	// </style>

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = "\r\n    <div class=\"wrap list-group\">\r\n        <a href=\"#\" class=\"list-group-item active\">\r\n            CRM项目基础UI界面\r\n        </a>\r\n        <a href=\"javascript:;\"class=\"list-group-item\" v-for=\"item in items\">{{item}}</a>\r\n    </div>\r\n";

/***/ }
/******/ ]);