/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(5);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  typeof document.createElement -> undefined
 */
function isStandardBrowserEnv() {
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined' &&
    typeof document.createElement === 'function'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object' && !isArray(obj)) {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.BrowserSpriteSymbol = factory());
}(this, (function () { 'use strict';

var SpriteSymbol = function SpriteSymbol(ref) {
  var id = ref.id;
  var viewBox = ref.viewBox;
  var content = ref.content;

  this.id = id;
  this.viewBox = viewBox;
  this.content = content;
};

/**
 * @return {string}
 */
SpriteSymbol.prototype.stringify = function stringify () {
  return this.content;
};

/**
 * @return {string}
 */
SpriteSymbol.prototype.toString = function toString () {
  return this.stringify();
};

SpriteSymbol.prototype.destroy = function destroy () {
    var this$1 = this;

  ['id', 'viewBox', 'content'].forEach(function (prop) { return delete this$1[prop]; });
};

var arrayFrom = function (arrayLike) {
  return Array.prototype.slice.call(arrayLike, 0);
};

var ua = navigator.userAgent;

var browser = {
  isChrome: /chrome/i.test(ua),
  isFirefox: /firefox/i.test(ua),
  isIE: /msie/i.test(ua),
  isEdge: /edge/i.test(ua)
};

/**
 * @param {string} name
 * @param {*} data
 */

/**
 * @param {string} [url] If not provided - current URL will be used
 * @return {string}
 */

/* global angular */
/**
 * @param {string} eventName
 */

var defaultSelector = 'linearGradient, radialGradient, pattern';

/**
 * @param {Element} svg
 * @param {string} [selector]
 * @return {Element}
 */
var moveGradientsOutsideSymbol = function (svg, selector) {
  if ( selector === void 0 ) selector = defaultSelector;

  arrayFrom(svg.querySelectorAll('symbol')).forEach(function (symbol) {
    arrayFrom(symbol.querySelectorAll(selector)).forEach(function (node) {
      symbol.parentNode.insertBefore(node, symbol);
    });
  });
  return svg;
};

/**
 * @param {Object} attrs
 * @return {string}
 */
var objectToAttrsString = function (attrs) {
  return Object.keys(attrs).map(function (attr) {
    var value = attrs[attr].toString().replace(/"/g, '&quot;');
    return (attr + "=\"" + value + "\"");
  }).join(' ');
};

/**
 * @param {string} content
 * @return {Element}
 */
var parse = function (content) {
  var hasImportNode = !!document.importNode;
  var doc = new DOMParser().parseFromString(content, 'image/svg+xml').documentElement;

  /**
   * Fix for browser which are throwing WrongDocumentError
   * if you insert an element which is not part of the document
   * @see http://stackoverflow.com/a/7986519/4624403
   */
  if (hasImportNode) {
    return document.importNode(doc, true);
  }

  return doc;
};

/**
 * @param {NodeList|Node} nodes
 * @param {boolean} [clone=true]
 * @return {string}
 */

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var namespaces_1 = createCommonjsModule(function (module, exports) {
var namespaces = {
  svg: {
    name: 'xmlns',
    uri: 'http://www.w3.org/2000/svg'
  },
  xlink: {
    name: 'xmlns:xlink',
    uri: 'http://www.w3.org/1999/xlink'
  }
};

exports.default = namespaces;
module.exports = exports.default;
});

/**
 * List of SVG attributes to update url() target in them
 */
var attList = [
  'clipPath',
  'colorProfile',
  'src',
  'cursor',
  'fill',
  'filter',
  'marker',
  'markerStart',
  'markerMid',
  'markerEnd',
  'mask',
  'stroke',
  'style'
];

var attSelector = attList.map(function (attr) { return ("[" + attr + "]"); }).join(',');

/**
 * Update URLs in svg image (like `fill="url(...)"`) and update referencing elements
 * @param {Element} svg
 * @param {NodeList} references
 * @param {string|RegExp} startsWith
 * @param {string} replaceWith
 * @return {void}
 *
 * @example
 * const sprite = document.querySelector('svg.sprite');
 * const usages = document.querySelectorAll('use');
 * updateUrls(sprite, usages, '#', 'prefix#');
 */

var index = createCommonjsModule(function (module, exports) {
(function (root, factory) {
    if (false) {
        undefined(factory);
    } else {
        module.exports = factory();
    }
}(commonjsGlobal, function () {

function isMergeableObject(val) {
    var nonNullObject = val && typeof val === 'object';

    return nonNullObject
        && Object.prototype.toString.call(val) !== '[object RegExp]'
        && Object.prototype.toString.call(val) !== '[object Date]'
}

function emptyTarget(val) {
    return Array.isArray(val) ? [] : {}
}

function cloneIfNecessary(value, optionsArgument) {
    var clone = optionsArgument && optionsArgument.clone === true;
    return (clone && isMergeableObject(value)) ? deepmerge(emptyTarget(value), value, optionsArgument) : value
}

function defaultArrayMerge(target, source, optionsArgument) {
    var destination = target.slice();
    source.forEach(function(e, i) {
        if (typeof destination[i] === 'undefined') {
            destination[i] = cloneIfNecessary(e, optionsArgument);
        } else if (isMergeableObject(e)) {
            destination[i] = deepmerge(target[i], e, optionsArgument);
        } else if (target.indexOf(e) === -1) {
            destination.push(cloneIfNecessary(e, optionsArgument));
        }
    });
    return destination
}

function mergeObject(target, source, optionsArgument) {
    var destination = {};
    if (isMergeableObject(target)) {
        Object.keys(target).forEach(function (key) {
            destination[key] = cloneIfNecessary(target[key], optionsArgument);
        });
    }
    Object.keys(source).forEach(function (key) {
        if (!isMergeableObject(source[key]) || !target[key]) {
            destination[key] = cloneIfNecessary(source[key], optionsArgument);
        } else {
            destination[key] = deepmerge(target[key], source[key], optionsArgument);
        }
    });
    return destination
}

function deepmerge(target, source, optionsArgument) {
    var array = Array.isArray(source);
    var options = optionsArgument || { arrayMerge: defaultArrayMerge };
    var arrayMerge = options.arrayMerge || defaultArrayMerge;

    if (array) {
        return Array.isArray(target) ? arrayMerge(target, source, optionsArgument) : cloneIfNecessary(source, optionsArgument)
    } else {
        return mergeObject(target, source, optionsArgument)
    }
}

deepmerge.all = function deepmergeAll(array, optionsArgument) {
    if (!Array.isArray(array) || array.length < 2) {
        throw new Error('first argument should be an array with at least two elements')
    }

    // we are sure there are at least 2 values, so it is safe to have no initial value
    return array.reduce(function(prev, next) {
        return deepmerge(prev, next, optionsArgument)
    })
};

return deepmerge

}));
});

var svg = namespaces_1.svg;
var xlink = namespaces_1.xlink;

var defaultAttrs = {};
defaultAttrs[svg.name] = svg.uri;
defaultAttrs[xlink.name] = xlink.uri;

/**
 * @param {string} [content]
 * @param {Object} [attributes]
 * @return {string}
 */
var wrapInSvgString = function (content, attributes) {
  if ( content === void 0 ) content = '';

  var attrs = index(defaultAttrs, attributes || {});
  var attrsRendered = objectToAttrsString(attrs);
  return ("<svg " + attrsRendered + ">" + content + "</svg>");
};

var BrowserSpriteSymbol = (function (SpriteSymbol$$1) {
  function BrowserSpriteSymbol () {
    SpriteSymbol$$1.apply(this, arguments);
  }

  if ( SpriteSymbol$$1 ) BrowserSpriteSymbol.__proto__ = SpriteSymbol$$1;
  BrowserSpriteSymbol.prototype = Object.create( SpriteSymbol$$1 && SpriteSymbol$$1.prototype );
  BrowserSpriteSymbol.prototype.constructor = BrowserSpriteSymbol;

  var prototypeAccessors = { isMounted: {} };

  prototypeAccessors.isMounted.get = function () {
    return !!this.node;
  };

  BrowserSpriteSymbol.prototype.destroy = function destroy () {
    if (this.isMounted) {
      this.unmount();
    }
    SpriteSymbol$$1.prototype.destroy.call(this);
  };

  /**
   * @param {Element|string} target
   * @return {Element}
   */
  BrowserSpriteSymbol.prototype.mount = function mount (target) {
    if (this.isMounted) {
      return this.node;
    }

    var mountTarget = typeof target === 'string' ? document.querySelector(target) : target;
    var node = this.render();
    this.node = node;

    mountTarget.appendChild(node);

    // TODO cache moved nodes somewhere and cleanup on destroy()
    if (browser.isFirefox) {
      moveGradientsOutsideSymbol(mountTarget);
    }

    return node;
  };

  /**
   * @return {Element}
   */
  BrowserSpriteSymbol.prototype.render = function render () {
    var content = this.stringify();
    return parse(wrapInSvgString(content)).childNodes[0];
  };

  BrowserSpriteSymbol.prototype.unmount = function unmount () {
    this.node.parentNode.removeChild(this.node);
  };

  Object.defineProperties( BrowserSpriteSymbol.prototype, prototypeAccessors );

  return BrowserSpriteSymbol;
}(SpriteSymbol));

return BrowserSpriteSymbol;

})));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.BrowserSprite = factory());
}(this, (function () { 'use strict';

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var index = createCommonjsModule(function (module, exports) {
(function (root, factory) {
    if (false) {
        undefined(factory);
    } else {
        module.exports = factory();
    }
}(commonjsGlobal, function () {

function isMergeableObject(val) {
    var nonNullObject = val && typeof val === 'object';

    return nonNullObject
        && Object.prototype.toString.call(val) !== '[object RegExp]'
        && Object.prototype.toString.call(val) !== '[object Date]'
}

function emptyTarget(val) {
    return Array.isArray(val) ? [] : {}
}

function cloneIfNecessary(value, optionsArgument) {
    var clone = optionsArgument && optionsArgument.clone === true;
    return (clone && isMergeableObject(value)) ? deepmerge(emptyTarget(value), value, optionsArgument) : value
}

function defaultArrayMerge(target, source, optionsArgument) {
    var destination = target.slice();
    source.forEach(function(e, i) {
        if (typeof destination[i] === 'undefined') {
            destination[i] = cloneIfNecessary(e, optionsArgument);
        } else if (isMergeableObject(e)) {
            destination[i] = deepmerge(target[i], e, optionsArgument);
        } else if (target.indexOf(e) === -1) {
            destination.push(cloneIfNecessary(e, optionsArgument));
        }
    });
    return destination
}

function mergeObject(target, source, optionsArgument) {
    var destination = {};
    if (isMergeableObject(target)) {
        Object.keys(target).forEach(function (key) {
            destination[key] = cloneIfNecessary(target[key], optionsArgument);
        });
    }
    Object.keys(source).forEach(function (key) {
        if (!isMergeableObject(source[key]) || !target[key]) {
            destination[key] = cloneIfNecessary(source[key], optionsArgument);
        } else {
            destination[key] = deepmerge(target[key], source[key], optionsArgument);
        }
    });
    return destination
}

function deepmerge(target, source, optionsArgument) {
    var array = Array.isArray(source);
    var options = optionsArgument || { arrayMerge: defaultArrayMerge };
    var arrayMerge = options.arrayMerge || defaultArrayMerge;

    if (array) {
        return Array.isArray(target) ? arrayMerge(target, source, optionsArgument) : cloneIfNecessary(source, optionsArgument)
    } else {
        return mergeObject(target, source, optionsArgument)
    }
}

deepmerge.all = function deepmergeAll(array, optionsArgument) {
    if (!Array.isArray(array) || array.length < 2) {
        throw new Error('first argument should be an array with at least two elements')
    }

    // we are sure there are at least 2 values, so it is safe to have no initial value
    return array.reduce(function(prev, next) {
        return deepmerge(prev, next, optionsArgument)
    })
};

return deepmerge

}));
});

//      
// An event handler can take an optional event argument
// and should not return a value
                                          
// An array of all currently registered event handlers for a type
                                            
// A map of event types and their corresponding event handlers.
                        
                                   
  

/** Mitt: Tiny (~200b) functional event emitter / pubsub.
 *  @name mitt
 *  @returns {Mitt}
 */
function mitt(all                 ) {
	all = all || Object.create(null);

	return {
		/**
		 * Register an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to listen for, or `"*"` for all events
		 * @param  {Function} handler Function to call in response to given event
		 * @memberOf mitt
		 */
		on: function on(type        , handler              ) {
			(all[type] || (all[type] = [])).push(handler);
		},

		/**
		 * Remove an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to unregister `handler` from, or `"*"`
		 * @param  {Function} handler Handler function to remove
		 * @memberOf mitt
		 */
		off: function off(type        , handler              ) {
			if (all[type]) {
				all[type].splice(all[type].indexOf(handler) >>> 0, 1);
			}
		},

		/**
		 * Invoke all handlers for the given type.
		 * If present, `"*"` handlers are invoked after type-matched handlers.
		 *
		 * @param {String} type  The event type to invoke
		 * @param {Any} [evt]  Any value (object is recommended and powerful), passed to each handler
		 * @memberof mitt
		 */
		emit: function emit(type        , evt     ) {
			(all[type] || []).map(function (handler) { handler(evt); });
			(all['*'] || []).map(function (handler) { handler(type, evt); });
		}
	};
}

var namespaces_1 = createCommonjsModule(function (module, exports) {
var namespaces = {
  svg: {
    name: 'xmlns',
    uri: 'http://www.w3.org/2000/svg'
  },
  xlink: {
    name: 'xmlns:xlink',
    uri: 'http://www.w3.org/1999/xlink'
  }
};

exports.default = namespaces;
module.exports = exports.default;
});

/**
 * @param {Object} attrs
 * @return {string}
 */
var objectToAttrsString = function (attrs) {
  return Object.keys(attrs).map(function (attr) {
    var value = attrs[attr].toString().replace(/"/g, '&quot;');
    return (attr + "=\"" + value + "\"");
  }).join(' ');
};

var svg = namespaces_1.svg;
var xlink = namespaces_1.xlink;

var defaultAttrs = {};
defaultAttrs[svg.name] = svg.uri;
defaultAttrs[xlink.name] = xlink.uri;

/**
 * @param {string} [content]
 * @param {Object} [attributes]
 * @return {string}
 */
var wrapInSvgString = function (content, attributes) {
  if ( content === void 0 ) content = '';

  var attrs = index(defaultAttrs, attributes || {});
  var attrsRendered = objectToAttrsString(attrs);
  return ("<svg " + attrsRendered + ">" + content + "</svg>");
};

var svg$1 = namespaces_1.svg;
var xlink$1 = namespaces_1.xlink;

var defaultConfig = {
  attrs: ( obj = {
    style: ['position: absolute', 'width: 0', 'height: 0'].join('; ')
  }, obj[svg$1.name] = svg$1.uri, obj[xlink$1.name] = xlink$1.uri, obj )
};
var obj;

var Sprite = function Sprite(config) {
  this.config = index(defaultConfig, config || {});
  this.symbols = [];
};

/**
 * Add new symbol. If symbol with the same id exists it will be replaced.
 * @param {SpriteSymbol} symbol
 * @return {boolean} `true` - symbol was added, `false` - replaced
 */
Sprite.prototype.add = function add (symbol) {
  var ref = this;
    var symbols = ref.symbols;
  var existing = this.find(symbol.id);

  if (existing) {
    symbols[symbols.indexOf(existing)] = symbol;
    return false;
  }

  symbols.push(symbol);
  return true;
};

/**
 * Remove symbol & destroy it
 * @param {string} id
 * @return {boolean} `true` - symbol was found & successfully destroyed, `false` - otherwise
 */
Sprite.prototype.remove = function remove (id) {
  var ref = this;
    var symbols = ref.symbols;
  var symbol = this.find(id);

  if (symbol) {
    symbols.splice(symbols.indexOf(symbol), 1);
    symbol.destroy();
    return true;
  }

  return false;
};

/**
 * @param {string} id
 * @return {SpriteSymbol|null}
 */
Sprite.prototype.find = function find (id) {
  return this.symbols.filter(function (s) { return s.id === id; })[0] || null;
};

/**
 * @param {string} id
 * @return {boolean}
 */
Sprite.prototype.has = function has (id) {
  return this.find(id) !== null;
};

/**
 * @return {string}
 */
Sprite.prototype.stringify = function stringify () {
  var ref = this.config;
    var attrs = ref.attrs;
  var stringifiedSymbols = this.symbols.map(function (s) { return s.stringify(); }).join('');
  return wrapInSvgString(stringifiedSymbols, attrs);
};

/**
 * @return {string}
 */
Sprite.prototype.toString = function toString () {
  return this.stringify();
};

Sprite.prototype.destroy = function destroy () {
  this.symbols.forEach(function (s) { return s.destroy(); });
};

var defaultConfig$1 = {
  /**
   * Should following options be automatically configured:
   * - `syncUrlsWithBaseTag`
   * - `locationChangeAngularEmitter`
   * - `moveGradientsOutsideSymbol`
   * @type {boolean}
   */
  autoConfigure: true,

  /**
   * Default mounting selector
   * @type {string}
   */
  mountTo: 'body',

  /**
   * Fix disappearing SVG elements when <base href> exists.
   * Executes when sprite mounted.
   * @see http://stackoverflow.com/a/18265336/796152
   * @see https://github.com/everdimension/angular-svg-base-fix
   * @see https://github.com/angular/angular.js/issues/8934#issuecomment-56568466
   * @type {boolean}
   */
  syncUrlsWithBaseTag: false,

  /**
   * Should sprite listen custom location change event
   * @type {boolean}
   */
  listenLocationChangeEvent: true,

  /**
   * Custom window event name which should be emitted to update sprite urls
   * @type {string}
   */
  locationChangeEvent: 'locationChange',

  /**
   * Emit location change event in Angular automatically
   * @type {boolean}
   */
  locationChangeAngularEmitter: false,

  /**
   * Selector to find symbols usages when updating sprite urls
   * @type {string}
   */
  usagesToUpdate: 'use[*|href]',

  /**
   * Fix Firefox bug when gradients and patterns don't work if they are within a symbol.
   * Executes when sprite is rendered, but not mounted.
   * @see https://bugzilla.mozilla.org/show_bug.cgi?id=306674
   * @see https://bugzilla.mozilla.org/show_bug.cgi?id=353575
   * @see https://bugzilla.mozilla.org/show_bug.cgi?id=1235364
   * @type {boolean}
   */
  moveGradientsOutsideSymbol: false
};

var arrayFrom = function (arrayLike) {
  return Array.prototype.slice.call(arrayLike, 0);
};

var ua = navigator.userAgent;

var browser = {
  isChrome: /chrome/i.test(ua),
  isFirefox: /firefox/i.test(ua),
  isIE: /msie/i.test(ua),
  isEdge: /edge/i.test(ua)
};

/**
 * @param {string} name
 * @param {*} data
 */
var dispatchEvent = function (name, data) {
  var event = document.createEvent('CustomEvent');
  event.initCustomEvent(name, false, false, data);
  window.dispatchEvent(event);
};

/**
 * @param {string} [url] If not provided - current URL will be used
 * @return {string}
 */
var getUrlWithoutFragment = function (url) {
  return (url || window.location.href).split('#')[0];
};

/* global angular */
/**
 * @param {string} eventName
 */
var locationChangeAngularEmitter = function (eventName) {
  angular.module('ng').run(['$rootScope', function ($rootScope) {
    $rootScope.$on('$locationChangeSuccess', function (e, newUrl, oldUrl) {
      dispatchEvent(eventName, { oldUrl: oldUrl, newUrl: newUrl });
    });
  }]);
};

var defaultSelector = 'linearGradient, radialGradient, pattern';

/**
 * @param {Element} svg
 * @param {string} [selector]
 * @return {Element}
 */
var moveGradientsOutsideSymbol = function (svg, selector) {
  if ( selector === void 0 ) selector = defaultSelector;

  arrayFrom(svg.querySelectorAll('symbol')).forEach(function (symbol) {
    arrayFrom(symbol.querySelectorAll(selector)).forEach(function (node) {
      symbol.parentNode.insertBefore(node, symbol);
    });
  });
  return svg;
};

/**
 * @param {string} content
 * @return {Element}
 */
var parse = function (content) {
  var hasImportNode = !!document.importNode;
  var doc = new DOMParser().parseFromString(content, 'image/svg+xml').documentElement;

  /**
   * Fix for browser which are throwing WrongDocumentError
   * if you insert an element which is not part of the document
   * @see http://stackoverflow.com/a/7986519/4624403
   */
  if (hasImportNode) {
    return document.importNode(doc, true);
  }

  return doc;
};

/**
 * @param {NodeList} nodes
 * @param {Function} [matcher]
 * @return {Attr[]}
 */
function selectAttributes(nodes, matcher) {
  var attrs = arrayFrom(nodes).reduce(function (acc, node) {
    if (!node.attributes) {
      return acc;
    }

    var arrayfied = arrayFrom(node.attributes);
    var matched = matcher ? arrayfied.filter(matcher) : arrayfied;
    return acc.concat(matched);
  }, []);

  return attrs;
}

/**
 * @param {NodeList|Node} nodes
 * @param {boolean} [clone=true]
 * @return {string}
 */

var xLinkNS = namespaces_1.xlink.uri;
var xLinkAttrName = 'xlink:href';

// eslint-disable-next-line no-useless-escape
var specialUrlCharsPattern = /[(){}|\\\^~\[\]`"<>]/g;

function encoder(url) {
  return url.replace(specialUrlCharsPattern, function (match) {
    return ("%" + (match[0].charCodeAt(0).toString(16).toUpperCase()));
  });
}

/**
 * @param {NodeList} nodes
 * @param {string} startsWith
 * @param {string} replaceWith
 * @return {NodeList}
 */
function updateReferences(nodes, startsWith, replaceWith) {
  arrayFrom(nodes).forEach(function (node) {
    var href = node.getAttribute(xLinkAttrName);
    if (href && href.indexOf(startsWith) === 0) {
      var newUrl = href.replace(startsWith, replaceWith);
      node.setAttributeNS(xLinkNS, xLinkAttrName, newUrl);
    }
  });

  return nodes;
}

/**
 * List of SVG attributes to update url() target in them
 */
var attList = [
  'clipPath',
  'colorProfile',
  'src',
  'cursor',
  'fill',
  'filter',
  'marker',
  'markerStart',
  'markerMid',
  'markerEnd',
  'mask',
  'stroke',
  'style'
];

var attSelector = attList.map(function (attr) { return ("[" + attr + "]"); }).join(',');

/**
 * Update URLs in svg image (like `fill="url(...)"`) and update referencing elements
 * @param {Element} svg
 * @param {NodeList} references
 * @param {string|RegExp} startsWith
 * @param {string} replaceWith
 * @return {void}
 *
 * @example
 * const sprite = document.querySelector('svg.sprite');
 * const usages = document.querySelectorAll('use');
 * updateUrls(sprite, usages, '#', 'prefix#');
 */
var updateUrls = function (svg, references, startsWith, replaceWith) {
  var startsWithEncoded = encoder(startsWith);
  var replaceWithEncoded = encoder(replaceWith);

  var nodes = svg.querySelectorAll(attSelector);
  var attrs = selectAttributes(nodes, function (ref) {
    var localName = ref.localName;
    var value = ref.value;

    return attList.indexOf(localName) !== -1 && value.indexOf(("url(" + startsWithEncoded)) !== -1;
  });

  attrs.forEach(function (attr) { return attr.value = attr.value.replace(startsWithEncoded, replaceWithEncoded); });
  updateReferences(references, startsWithEncoded, replaceWithEncoded);
};

/**
 * Internal emitter events
 * @enum
 * @private
 */
var Events = {
  MOUNT: 'mount'
};

var BrowserSprite = (function (Sprite$$1) {
  function BrowserSprite(cfg) {
    var this$1 = this;
    if ( cfg === void 0 ) cfg = {};

    Sprite$$1.call(this, index(defaultConfig$1, cfg));

    var emitter = mitt();
    this._emitter = emitter;
    this.node = null;

    var ref = this;
    var config = ref.config;

    if (config.autoConfigure) {
      this._autoConfigure(cfg);
    }

    if (config.syncUrlsWithBaseTag) {
      var baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
      emitter.on(Events.MOUNT, function () { return this$1.updateUrls('#', baseUrl); });
    }

    var handleLocationChange = this._handleLocationChange.bind(this);
    this._handleLocationChange = handleLocationChange;

    // Provide way to update sprite urls externally via dispatching custom window event
    if (config.listenLocationChangeEvent) {
      window.addEventListener(config.locationChangeEvent, handleLocationChange);
    }

    // Emit location change event in Angular automatically
    if (config.locationChangeAngularEmitter) {
      locationChangeAngularEmitter(config.locationChangeEvent);
    }

    if (config.moveGradientsOutsideSymbol) {
      emitter.on(Events.MOUNT, function (node) {
        moveGradientsOutsideSymbol(node);
      });
    }
  }

  if ( Sprite$$1 ) BrowserSprite.__proto__ = Sprite$$1;
  BrowserSprite.prototype = Object.create( Sprite$$1 && Sprite$$1.prototype );
  BrowserSprite.prototype.constructor = BrowserSprite;

  var prototypeAccessors = { isMounted: {} };

  /**
   * @return {boolean}
   */
  prototypeAccessors.isMounted.get = function () {
    return !!this.node;
  };

  /**
   * Automatically configure following options
   * - `syncUrlsWithBaseTag`
   * - `locationChangeAngularEmitter`
   * - `moveGradientsOutsideSymbol`
   * @param {Object} cfg
   * @private
   */
  BrowserSprite.prototype._autoConfigure = function _autoConfigure (cfg) {
    var ref = this;
    var config = ref.config;

    if (typeof cfg.syncUrlsWithBaseTag === 'undefined') {
      config.syncUrlsWithBaseTag = typeof document.getElementsByTagName('base')[0] !== 'undefined';
    }

    if (typeof cfg.locationChangeAngularEmitter === 'undefined') {
      config.locationChangeAngularEmitter = 'angular' in window;
    }

    if (typeof cfg.moveGradientsOutsideSymbol === 'undefined') {
      config.moveGradientsOutsideSymbol = browser.isFirefox;
    }
  };

  /**
   * @param {Event} event
   * @param {Object} event.detail
   * @param {string} event.detail.oldUrl
   * @param {string} event.detail.newUrl
   * @private
   */
  BrowserSprite.prototype._handleLocationChange = function _handleLocationChange (event) {
    var ref = event.detail;
    var oldUrl = ref.oldUrl;
    var newUrl = ref.newUrl;
    this.updateUrls(oldUrl, newUrl);
  };

  /**
   * Add new symbol. If symbol with the same id exists it will be replaced.
   * If sprite already mounted - `symbol.mount(sprite.node)` will be called.
   * @param {BrowserSpriteSymbol} symbol
   * @return {boolean} `true` - symbol was added, `false` - replaced
   */
  BrowserSprite.prototype.add = function add (symbol) {
    var isNewSymbol = Sprite$$1.prototype.add.call(this, symbol);

    if (this.isMounted && isNewSymbol) {
      symbol.mount(this.node);
    }

    return isNewSymbol;
  };

  BrowserSprite.prototype.destroy = function destroy () {
    var ref = this;
    var config = ref.config;
    var symbols = ref.symbols;
    var _emitter = ref._emitter;

    symbols.forEach(function (s) { return s.destroy(); });

    _emitter.off('*');
    window.removeEventListener(config.locationChangeEvent, this._handleLocationChange);

    if (this.isMounted) {
      this.unmount();
    }
  };

  /**
   * @param {Element|string} [target]
   * @param {boolean} [prepend=false]
   * @return {Element} rendered sprite node
   * @fires Events#MOUNT
   */
  BrowserSprite.prototype.mount = function mount (target, prepend) {
    if ( prepend === void 0 ) prepend = false;

    if (this.isMounted) {
      return this.node;
    }

    var mountTarget = target || this.config.mountTo;
    var parent = typeof mountTarget === 'string' ? document.querySelector(mountTarget) : mountTarget;
    var node = this.render();

    if (prepend && parent.childNodes[0]) {
      parent.insertBefore(node, parent.childNodes[0]);
    } else {
      parent.appendChild(node);
    }

    this.node = node;
    this._emitter.emit(Events.MOUNT, node);

    return node;
  };

  /**
   * @return {Element}
   */
  BrowserSprite.prototype.render = function render () {
    return parse(this.stringify());
  };

  /**
   * Detach sprite from the DOM
   */
  BrowserSprite.prototype.unmount = function unmount () {
    this.node.parentNode.removeChild(this.node);
  };

  /**
   * Update URLs in sprite and usage elements
   * @param {string} oldUrl
   * @param {string} newUrl
   * @return {boolean} `true` - URLs was updated, `false` - sprite is not mounted
   */
  BrowserSprite.prototype.updateUrls = function updateUrls$1 (oldUrl, newUrl) {
    if (!this.isMounted) {
      return false;
    }

    var usages = document.querySelectorAll(this.config.usagesToUpdate);

    updateUrls(
      this.node,
      usages,
      ((getUrlWithoutFragment(oldUrl)) + "#"),
      ((getUrlWithoutFragment(newUrl)) + "#")
    );

    return true;
  };

  Object.defineProperties( BrowserSprite.prototype, prototypeAccessors );

  return BrowserSprite;
}(Sprite));

var ready$1 = createCommonjsModule(function (module) {
/*!
  * domready (c) Dustin Diaz 2014 - License MIT
  */
!function (name, definition) {

  { module.exports = definition(); }

}('domready', function () {

  var fns = [], listener
    , doc = document
    , hack = doc.documentElement.doScroll
    , domContentLoaded = 'DOMContentLoaded'
    , loaded = (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(doc.readyState);


  if (!loaded)
  { doc.addEventListener(domContentLoaded, listener = function () {
    doc.removeEventListener(domContentLoaded, listener);
    loaded = 1;
    while (listener = fns.shift()) { listener(); }
  }); }

  return function (fn) {
    loaded ? setTimeout(fn, 0) : fns.push(fn);
  }

});
});

var sprite = new BrowserSprite();

var loadSprite = function () {
  var svg = sprite.mount(document.body, true);

  // :WORKAROUND:
  // IE doesn't evaluate <style> tags in SVGs that are dynamically added to the page.
  // This trick will trigger IE to read and use any existing SVG <style> tags.
  //
  // Reference: https://github.com/iconic/SVGInjector/issues/23
  var ua = window.navigator.userAgent || '';
  if (ua.indexOf('Trident') > 0 || ua.indexOf('Edge/') > 0) {
    var styles = svg.querySelectorAll('style');
    for (var i = 0, l = styles.length; i < l; i += 1) {
      styles[i].textContent += '';
    }
  }
};

if (document.body) {
  loadSprite();
} else {
  ready$1(loadSprite);
}

return sprite;

})));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(16);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var normalizeHeaderName = __webpack_require__(18);

var PROTECTION_PREFIX = /^\)\]\}',?\n/;
var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(7);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(7);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      data = data.replace(PROTECTION_PREFIX, '');
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMehtodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 6 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var settle = __webpack_require__(19);
var buildURL = __webpack_require__(21);
var parseHeaders = __webpack_require__(22);
var isURLSameOrigin = __webpack_require__(23);
var createError = __webpack_require__(8);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(24);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if (process.env.NODE_ENV !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED'));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(25);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        if (request.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(20);

/**
 * Create an Error with the specified message, config, error code, and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 @ @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, response);
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 11 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(13);

var _autocomplete = __webpack_require__(14);

var _autocomplete2 = _interopRequireDefault(_autocomplete);

var _type = __webpack_require__(15);

var _type2 = _interopRequireDefault(_type);

var _map = __webpack_require__(34);

var _map2 = _interopRequireDefault(_map);

var _heart = __webpack_require__(35);

var _heart2 = _interopRequireDefault(_heart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(36);


var input = document.getElementById('address');
var lng = document.getElementById('lng');
var lat = document.getElementById('lat');
var search = document.querySelector('.search');
var map = document.getElementById('map-container');
var hearts = document.querySelectorAll('form.heart');
var heartList = Array.prototype.slice.call(hearts);

(0, _autocomplete2.default)(input, lat, lng);

(0, _type2.default)(search);

(0, _map2.default)(map);

heartList.map(function (heart) {
    heart.addEventListener('click', _heart2.default);
});

/***/ }),
/* 13 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function autocomplete(input, latInput, lngInput) {
    if (!input) return;
    var dropdown = new google.maps.places.Autocomplete(input);

    dropdown.addListener('place_changed', function () {
        var place = dropdown.getPlace();
        latInput.value = place.geometry.location.lat();
        lngInput.value = place.geometry.location.lng();

        console.log(input);

        input.addEventListener('keydown', function (e) {
            if (e.keyCode === 13) e.preventDefault();
        });
    });
}

exports.default = autocomplete;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = type;

var _axios = __webpack_require__(3);

var _axios2 = _interopRequireDefault(_axios);

var _dompurify = __webpack_require__(33);

var _dompurify2 = _interopRequireDefault(_dompurify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function searchResults(stores) {
  return stores.map(function (store) {
    return '\n      <a href="/store/' + store.slug + '" class="search__result">\n        <strong>' + store.name + '</strong>\n      </a>\n    ';
  }).join('');
}

function type(search) {
  if (!search) return;

  var searchInput = document.querySelector("input[name='search']");
  var searchResult = document.querySelector('.search__results');

  searchInput.addEventListener('input', function () {
    var _this = this;

    if (!this.value) {
      searchResult.style.display = 'none';
      return;
    }
    searchResult.style.display = 'block';

    _axios2.default.get('/api/search?q=' + this.value).then(function (res) {
      if (res.data.length) {
        searchResult.innerHTML = _dompurify2.default.sanitize(searchResults(res.data));
        return;
      }
      searchResult.innerHTML = _dompurify2.default.sanitize('<div class="search__result"> No results for ' + _this.value + '</div>');
    }).catch(function (err) {
      return console.error(err);
    });
  });

  searchInput.addEventListener('keyup', function (e) {
    if (![38, 40, 13].includes(e.keyCode)) {
      return;
    }
    var activeClass = 'search__result--active';
    var current = search.querySelector('.' + activeClass);
    var items = search.querySelectorAll('.search__result');
    var next = void 0;
    if (e.keyCode === 40 && current) {
      next = current.nextElementSibling || items[0];
    } else if (e.keyCode === 40) {
      next = items[0];
    } else if (e.keyCode === 38 && current) {
      next = current.previousElementSibling || items[items.length - 1];
    } else if (e.keyCode === 38) {
      next = items[items.length - 1];
    } else if (e.keyCode === 13 && current.href) {
      window.location = current.href;
      return;
    }
    if (current) {
      current.classList.remove(activeClass);
    }
    next.classList.add(activeClass);
  });
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var bind = __webpack_require__(5);
var Axios = __webpack_require__(17);
var defaults = __webpack_require__(4);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(10);
axios.CancelToken = __webpack_require__(31);
axios.isCancel = __webpack_require__(9);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(32);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(4);
var utils = __webpack_require__(0);
var InterceptorManager = __webpack_require__(26);
var dispatchRequest = __webpack_require__(27);
var isAbsoluteURL = __webpack_require__(29);
var combineURLs = __webpack_require__(30);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(8);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response
    ));
  }
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 @ @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.response = response;
  return error;
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      }

      if (!utils.isArray(val)) {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var transformData = __webpack_require__(28);
var isCancel = __webpack_require__(9);
var defaults = __webpack_require__(4);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '');
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(10);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;;(function(factory) {
    'use strict';
    /* global window: false, define: false, module: false */
    var root = typeof window === 'undefined' ? null : window;

    if (true) {
        !(__WEBPACK_AMD_DEFINE_RESULT__ = function(){ return factory(root); }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof module !== 'undefined') {
        module.exports = factory(root);
    } else {
        root.DOMPurify = factory(root);
    }
}(function factory(window) {
    'use strict';

    var DOMPurify = function(window) {
        return factory(window);
    };

    /**
     * Version label, exposed for easier checks
     * if DOMPurify is up to date or not
     */
    DOMPurify.version = '0.8.5';

    /**
     * Array of elements that DOMPurify removed during sanitation.
     * Empty if nothing was removed.
     */
    DOMPurify.removed = [];

    if (!window || !window.document || window.document.nodeType !== 9) {
        // not running in a browser, provide a factory function
        // so that you can pass your own Window
        DOMPurify.isSupported = false;
        return DOMPurify;
    }

    var document = window.document;
    var originalDocument = document;
    var DocumentFragment = window.DocumentFragment;
    var HTMLTemplateElement = window.HTMLTemplateElement;
    var Node = window.Node;
    var NodeFilter = window.NodeFilter;
    var NamedNodeMap = window.NamedNodeMap || window.MozNamedAttrMap;
    var Text = window.Text;
    var Comment = window.Comment;
    var DOMParser = window.DOMParser;

    // As per issue #47, the web-components registry is inherited by a
    // new document created via createHTMLDocument. As per the spec
    // (http://w3c.github.io/webcomponents/spec/custom/#creating-and-passing-registries)
    // a new empty registry is used when creating a template contents owner
    // document, so we use that as our parent document to ensure nothing
    // is inherited.
    if (typeof HTMLTemplateElement === 'function') {
        var template = document.createElement('template');
        if (template.content && template.content.ownerDocument) {
            document = template.content.ownerDocument;
        }
    }
    var implementation = document.implementation;
    var createNodeIterator = document.createNodeIterator;
    var getElementsByTagName = document.getElementsByTagName;
    var createDocumentFragment = document.createDocumentFragment;
    var importNode = originalDocument.importNode;

    var hooks = {};

    /**
     * Expose whether this browser supports running the full DOMPurify.
     */
    DOMPurify.isSupported =
        typeof implementation.createHTMLDocument !== 'undefined' &&
        document.documentMode !== 9;

    /* Add properties to a lookup table */
    var _addToSet = function(set, array) {
        var l = array.length;
        while (l--) {
            if (typeof array[l] === 'string') {
                array[l] = array[l].toLowerCase();
            }
            set[array[l]] = true;
        }
        return set;
    };

    /* Shallow clone an object */
    var _cloneObj = function(object) {
        var newObject = {};
        var property;
        for (property in object) {
            if (object.hasOwnProperty(property)) {
                newObject[property] = object[property];
            }
        }
        return newObject;
    };

    /**
     * We consider the elements and attributes below to be safe. Ideally
     * don't add any new ones but feel free to remove unwanted ones.
     */

    /* allowed element names */
    var ALLOWED_TAGS = null;
    var DEFAULT_ALLOWED_TAGS = _addToSet({}, [

        // HTML
        'a','abbr','acronym','address','area','article','aside','audio','b',
        'bdi','bdo','big','blink','blockquote','body','br','button','canvas',
        'caption','center','cite','code','col','colgroup','content','data',
        'datalist','dd','decorator','del','details','dfn','dir','div','dl','dt',
        'element','em','fieldset','figcaption','figure','font','footer','form',
        'h1','h2','h3','h4','h5','h6','head','header','hgroup','hr','html','i',
        'img','input','ins','kbd','label','legend','li','main','map','mark',
        'marquee','menu','menuitem','meter','nav','nobr','ol','optgroup',
        'option','output','p','pre','progress','q','rp','rt','ruby','s','samp',
        'section','select','shadow','small','source','spacer','span','strike',
        'strong','style','sub','summary','sup','table','tbody','td','template',
        'textarea','tfoot','th','thead','time','tr','track','tt','u','ul','var',
        'video','wbr',

        // SVG
        'svg','altglyph','altglyphdef','altglyphitem','animatecolor',
        'animatemotion','animatetransform','circle','clippath','defs','desc',
        'ellipse','filter','font','g','glyph','glyphref','hkern','image','line',
        'lineargradient','marker','mask','metadata','mpath','path','pattern',
        'polygon','polyline','radialgradient','rect','stop','switch','symbol',
        'text','textpath','title','tref','tspan','view','vkern',

        // SVG Filters
        'feBlend','feColorMatrix','feComponentTransfer','feComposite',
        'feConvolveMatrix','feDiffuseLighting','feDisplacementMap',
        'feFlood','feFuncA','feFuncB','feFuncG','feFuncR','feGaussianBlur',
        'feMerge','feMergeNode','feMorphology','feOffset',
        'feSpecularLighting','feTile','feTurbulence',

        //MathML
        'math','menclose','merror','mfenced','mfrac','mglyph','mi','mlabeledtr',
        'mmuliscripts','mn','mo','mover','mpadded','mphantom','mroot','mrow',
        'ms','mpspace','msqrt','mystyle','msub','msup','msubsup','mtable','mtd',
        'mtext','mtr','munder','munderover',

        //Text
        '#text'
    ]);

    /* Allowed attribute names */
    var ALLOWED_ATTR = null;
    var DEFAULT_ALLOWED_ATTR = _addToSet({}, [

        // HTML
        'accept','action','align','alt','autocomplete','background','bgcolor',
        'border','cellpadding','cellspacing','checked','cite','class','clear','color',
        'cols','colspan','coords','datetime','default','dir','disabled',
        'download','enctype','face','for','headers','height','hidden','high','href',
        'hreflang','id','ismap','label','lang','list','loop', 'low','max',
        'maxlength','media','method','min','multiple','name','noshade','novalidate',
        'nowrap','open','optimum','pattern','placeholder','poster','preload','pubdate',
        'radiogroup','readonly','rel','required','rev','reversed','rows',
        'rowspan','spellcheck','scope','selected','shape','size','span',
        'srclang','start','src','step','style','summary','tabindex','title',
        'type','usemap','valign','value','width','xmlns',

        // SVG
        'accent-height','accumulate','additivive','alignment-baseline',
        'ascent','attributename','attributetype','azimuth','basefrequency',
        'baseline-shift','begin','bias','by','clip','clip-path','clip-rule',
        'color','color-interpolation','color-interpolation-filters','color-profile',
        'color-rendering','cx','cy','d','dx','dy','diffuseconstant','direction',
        'display','divisor','dur','edgemode','elevation','end','fill','fill-opacity',
        'fill-rule','filter','flood-color','flood-opacity','font-family','font-size',
        'font-size-adjust','font-stretch','font-style','font-variant','font-weight',
        'fx', 'fy','g1','g2','glyph-name','glyphref','gradientunits','gradienttransform',
        'image-rendering','in','in2','k','k1','k2','k3','k4','kerning','keypoints',
        'keysplines','keytimes','lengthadjust','letter-spacing','kernelmatrix',
        'kernelunitlength','lighting-color','local','marker-end','marker-mid',
        'marker-start','markerheight','markerunits','markerwidth','maskcontentunits',
        'maskunits','max','mask','mode','min','numoctaves','offset','operator',
        'opacity','order','orient','orientation','origin','overflow','paint-order',
        'path','pathlength','patterncontentunits','patterntransform','patternunits',
        'points','preservealpha','r','rx','ry','radius','refx','refy','repeatcount',
        'repeatdur','restart','result','rotate','scale','seed','shape-rendering',
        'specularconstant','specularexponent','spreadmethod','stddeviation','stitchtiles',
        'stop-color','stop-opacity','stroke-dasharray','stroke-dashoffset','stroke-linecap',
        'stroke-linejoin','stroke-miterlimit','stroke-opacity','stroke','stroke-width',
        'surfacescale','targetx','targety','transform','text-anchor','text-decoration',
        'text-rendering','textlength','u1','u2','unicode','values','viewbox',
        'visibility','vert-adv-y','vert-origin-x','vert-origin-y','word-spacing',
        'wrap','writing-mode','xchannelselector','ychannelselector','x','x1','x2',
        'y','y1','y2','z','zoomandpan',

        // MathML
        'accent','accentunder','bevelled','close','columnsalign','columnlines',
        'columnspan','denomalign','depth','display','displaystyle','fence',
        'frame','largeop','length','linethickness','lspace','lquote',
        'mathbackground','mathcolor','mathsize','mathvariant','maxsize',
        'minsize','movablelimits','notation','numalign','open','rowalign',
        'rowlines','rowspacing','rowspan','rspace','rquote','scriptlevel',
        'scriptminsize','scriptsizemultiplier','selection','separator',
        'separators','stretchy','subscriptshift','supscriptshift','symmetric',
        'voffset',

        // XML
        'xlink:href','xml:id','xlink:title','xml:space','xmlns:xlink'
    ]);

    /* Explicitly forbidden tags (overrides ALLOWED_TAGS/ADD_TAGS) */
    var FORBID_TAGS = null;

    /* Explicitly forbidden attributes (overrides ALLOWED_ATTR/ADD_ATTR) */
    var FORBID_ATTR = null;

    /* Decide if custom data attributes are okay */
    var ALLOW_DATA_ATTR = true;

    /* Decide if unknown protocols are okay */
    var ALLOW_UNKNOWN_PROTOCOLS = false;

    /* Output should be safe for jQuery's $() factory? */
    var SAFE_FOR_JQUERY = false;

    /* Output should be safe for common template engines.
     * This means, DOMPurify removes data attributes, mustaches and ERB
     */
    var SAFE_FOR_TEMPLATES = false;

    /* Specify template detection regex for SAFE_FOR_TEMPLATES mode */
    var MUSTACHE_EXPR = /\{\{[\s\S]*|[\s\S]*\}\}/gm;
    var ERB_EXPR = /<%[\s\S]*|[\s\S]*%>/gm;

    /* Decide if document with <html>... should be returned */
    var WHOLE_DOCUMENT = false;

    /* Decide if a DOM `HTMLBodyElement` should be returned, instead of a html string.
     * If `WHOLE_DOCUMENT` is enabled a `HTMLHtmlElement` will be returned instead
     */
    var RETURN_DOM = false;

    /* Decide if a DOM `DocumentFragment` should be returned, instead of a html string */
    var RETURN_DOM_FRAGMENT = false;

    /* If `RETURN_DOM` or `RETURN_DOM_FRAGMENT` is enabled, decide if the returned DOM
     * `Node` is imported into the current `Document`. If this flag is not enabled the
     * `Node` will belong (its ownerDocument) to a fresh `HTMLDocument`, created by
     * DOMPurify. */
    var RETURN_DOM_IMPORT = false;

    /* Output should be free from DOM clobbering attacks? */
    var SANITIZE_DOM = true;

    /* Keep element content when removing element? */
    var KEEP_CONTENT = true;

    /* Tags to ignore content of when KEEP_CONTENT is true */
    var FORBID_CONTENTS = _addToSet({}, [
        'audio', 'head', 'math', 'script', 'style', 'svg', 'video'
    ]);

    /* Tags that are safe for data: URIs */
    var DATA_URI_TAGS = _addToSet({}, [
        'audio', 'video', 'img', 'source'
    ]);

    /* Attributes safe for values like "javascript:" */
    var URI_SAFE_ATTRIBUTES = _addToSet({}, [
        'alt','class','for','id','label','name','pattern','placeholder',
        'summary','title','value','style','xmlns'
    ]);

    /* Keep a reference to config to pass to hooks */
    var CONFIG = null;

    /* Ideally, do not touch anything below this line */
    /* ______________________________________________ */

    var formElement = document.createElement('form');

    /**
     * _parseConfig
     *
     * @param  optional config literal
     */
    var _parseConfig = function(cfg) {
        /* Shield configuration object from tampering */
        if (typeof cfg !== 'object') {
            cfg = {};
        }

        /* Set configuration parameters */
        ALLOWED_TAGS = 'ALLOWED_TAGS' in cfg ?
            _addToSet({}, cfg.ALLOWED_TAGS) : DEFAULT_ALLOWED_TAGS;
        ALLOWED_ATTR = 'ALLOWED_ATTR' in cfg ?
            _addToSet({}, cfg.ALLOWED_ATTR) : DEFAULT_ALLOWED_ATTR;
        FORBID_TAGS = 'FORBID_TAGS' in cfg ?
            _addToSet({}, cfg.FORBID_TAGS) : {};
        FORBID_ATTR = 'FORBID_ATTR' in cfg ?
            _addToSet({}, cfg.FORBID_ATTR) : {};
        ALLOW_DATA_ATTR     = cfg.ALLOW_DATA_ATTR     !== false; // Default true
        ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false; // Default false
        SAFE_FOR_JQUERY     = cfg.SAFE_FOR_JQUERY     ||  false; // Default false
        SAFE_FOR_TEMPLATES  = cfg.SAFE_FOR_TEMPLATES  ||  false; // Default false
        WHOLE_DOCUMENT      = cfg.WHOLE_DOCUMENT      ||  false; // Default false
        RETURN_DOM          = cfg.RETURN_DOM          ||  false; // Default false
        RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT ||  false; // Default false
        RETURN_DOM_IMPORT   = cfg.RETURN_DOM_IMPORT   ||  false; // Default false
        SANITIZE_DOM        = cfg.SANITIZE_DOM        !== false; // Default true
        KEEP_CONTENT        = cfg.KEEP_CONTENT        !== false; // Default true

        if (SAFE_FOR_TEMPLATES) {
            ALLOW_DATA_ATTR = false;
        }

        if (RETURN_DOM_FRAGMENT) {
            RETURN_DOM = true;
        }

        /* Merge configuration parameters */
        if (cfg.ADD_TAGS) {
            if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) {
                ALLOWED_TAGS = _cloneObj(ALLOWED_TAGS);
            }
            _addToSet(ALLOWED_TAGS, cfg.ADD_TAGS);
        }
        if (cfg.ADD_ATTR) {
            if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) {
                ALLOWED_ATTR = _cloneObj(ALLOWED_ATTR);
            }
            _addToSet(ALLOWED_ATTR, cfg.ADD_ATTR);
        }
        if (cfg.ADD_URI_SAFE_ATTR) {
            _addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR);
        }

        /* Add #text in case KEEP_CONTENT is set to true */
        if (KEEP_CONTENT) { ALLOWED_TAGS['#text'] = true; }

        // Prevent further manipulation of configuration.
        // Not available in IE8, Safari 5, etc.
        if (Object && 'freeze' in Object) { Object.freeze(cfg); }

        CONFIG = cfg;
    };

   /**
     * _forceRemove
     *
     * @param  a DOM node
     */
    var _forceRemove = function(node) {
        DOMPurify.removed.push({element: node});
        try {
            node.parentNode.removeChild(node);
        } catch (e) {
            node.outerHTML = '';
        }
    };

   /**
     * _removeAttribute
     *
     * @param  an Attribute name
     * @param  a DOM node
     */
    var _removeAttribute = function(name, node) {
        DOMPurify.removed.push({
            attribute: node.getAttributeNode(name),
            from: node
        });
        node.removeAttribute(name);
    };

   /**
     * _initDocument
     *
     * @param  a string of dirty markup
     * @return a DOM, filled with the dirty markup
     */
    var _initDocument = function(dirty) {
        /* Create a HTML document using DOMParser */
        var doc, body;
        try {
            doc = new DOMParser().parseFromString(dirty, 'text/html');
        } catch (e) {}

        /* Some browsers throw, some browsers return null for the code above
           DOMParser with text/html support is only in very recent browsers.
           See #159 why the check here is extra-thorough */
        if (!doc || !doc.documentElement) {
            doc = implementation.createHTMLDocument('');
            body = doc.body;
            body.parentNode.removeChild(body.parentNode.firstElementChild);
            body.outerHTML = dirty;
        }

        /* Work on whole document or just its body */
        if (typeof doc.getElementsByTagName === 'function') {
            return doc.getElementsByTagName(
                WHOLE_DOCUMENT ? 'html' : 'body')[0];
        }
        return getElementsByTagName.call(doc,
            WHOLE_DOCUMENT ? 'html' : 'body')[0];
    };

    /**
     * _createIterator
     *
     * @param  document/fragment to create iterator for
     * @return iterator instance
     */
    var _createIterator = function(root) {
        return createNodeIterator.call(root.ownerDocument || root,
            root,
            NodeFilter.SHOW_ELEMENT
            | NodeFilter.SHOW_COMMENT
            | NodeFilter.SHOW_TEXT,
            function() { return NodeFilter.FILTER_ACCEPT; },
            false
        );
    };

    /**
     * _isClobbered
     *
     * @param  element to check for clobbering attacks
     * @return true if clobbered, false if safe
     */
    var _isClobbered = function(elm) {
        if (elm instanceof Text || elm instanceof Comment) {
            return false;
        }
        if (  typeof elm.nodeName !== 'string'
           || typeof elm.textContent !== 'string'
           || typeof elm.removeChild !== 'function'
           || !(elm.attributes instanceof NamedNodeMap)
           || typeof elm.removeAttribute !== 'function'
           || typeof elm.setAttribute !== 'function'
        ) {
            return true;
        }
        return false;
    };

    /**
     * _isNode
     *
     * @param object to check whether it's a DOM node
     * @return true is object is a DOM node
     */
    var _isNode = function(obj) {
        return (
            typeof Node === "object" ? obj instanceof Node : obj
                && typeof obj === "object" && typeof obj.nodeType === "number"
                && typeof obj.nodeName==="string"
        );
    };

    /**
     * _sanitizeElements
     *
     * @protect nodeName
     * @protect textContent
     * @protect removeChild
     *
     * @param   node to check for permission to exist
     * @return  true if node was killed, false if left alive
     */
    var _sanitizeElements = function(currentNode) {
        var tagName, content;
        /* Execute a hook if present */
        _executeHook('beforeSanitizeElements', currentNode, null);

        /* Check if element is clobbered or can clobber */
        if (_isClobbered(currentNode)) {
            _forceRemove(currentNode);
            return true;
        }

        /* Now let's check the element's type and name */
        tagName = currentNode.nodeName.toLowerCase();

        /* Execute a hook if present */
        _executeHook('uponSanitizeElement', currentNode, {
            tagName: tagName,
            allowedTags: ALLOWED_TAGS
        });

        /* Remove element if anything forbids its presence */
        if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
            /* Keep content except for black-listed elements */
            if (KEEP_CONTENT && !FORBID_CONTENTS[tagName]
                    && typeof currentNode.insertAdjacentHTML === 'function') {
                try {
                    currentNode.insertAdjacentHTML('AfterEnd', currentNode.innerHTML);
                } catch (e) {}
            }
            _forceRemove(currentNode);
            return true;
        }

        /* Convert markup to cover jQuery behavior */
        if (SAFE_FOR_JQUERY && !currentNode.firstElementChild &&
                (!currentNode.content || !currentNode.content.firstElementChild) &&
                /</g.test(currentNode.textContent)) {
            DOMPurify.removed.push({element: currentNode.cloneNode()});
            currentNode.innerHTML = currentNode.textContent.replace(/</g, '&lt;');
        }

        /* Sanitize element content to be template-safe */
        if (SAFE_FOR_TEMPLATES && currentNode.nodeType === 3) {
            /* Get the element's text content */
            content = currentNode.textContent;
            content = content.replace(MUSTACHE_EXPR, ' ');
            content = content.replace(ERB_EXPR, ' ');
            if (currentNode.textContent !== content) {
                DOMPurify.removed.push({element: currentNode.cloneNode()});
                currentNode.textContent = content;
            }
        }

        /* Execute a hook if present */
        _executeHook('afterSanitizeElements', currentNode, null);

        return false;
    };

    var DATA_ATTR = /^data-[\-\w.\u00B7-\uFFFF]/;
    var IS_ALLOWED_URI = /^(?:(?:(?:f|ht)tps?|mailto|tel):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i;
    var IS_SCRIPT_OR_DATA = /^(?:\w+script|data):/i;
    /* This needs to be extensive thanks to Webkit/Blink's behavior */
    var ATTR_WHITESPACE = /[\x00-\x20\xA0\u1680\u180E\u2000-\u2029\u205f\u3000]/g;

    /**
     * _sanitizeAttributes
     *
     * @protect attributes
     * @protect nodeName
     * @protect removeAttribute
     * @protect setAttribute
     *
     * @param   node to sanitize
     * @return  void
     */
    var _sanitizeAttributes = function(currentNode) {
        var attr, name, value, lcName, idAttr, attributes, hookEvent, l;
        /* Execute a hook if present */
        _executeHook('beforeSanitizeAttributes', currentNode, null);

        attributes = currentNode.attributes;

        /* Check if we have attributes; if not we might have a text node */
        if (!attributes) { return; }

        hookEvent = {
            attrName: '',
            attrValue: '',
            keepAttr: true,
            allowedAttributes: ALLOWED_ATTR
        };
        l = attributes.length;

        /* Go backwards over all attributes; safely remove bad ones */
        while (l--) {
            attr = attributes[l];
            name = attr.name;
            value = attr.value.trim();
            lcName = name.toLowerCase();

            /* Execute a hook if present */
            hookEvent.attrName = lcName;
            hookEvent.attrValue = value;
            hookEvent.keepAttr = true;
            _executeHook('uponSanitizeAttribute', currentNode, hookEvent );
            value = hookEvent.attrValue;

            /* Remove attribute */
            // Safari (iOS + Mac), last tested v8.0.5, crashes if you try to
            // remove a "name" attribute from an <img> tag that has an "id"
            // attribute at the time.
            if (lcName === 'name'  &&
                    currentNode.nodeName === 'IMG' && attributes.id) {
                idAttr = attributes.id;
                attributes = Array.prototype.slice.apply(attributes);
                _removeAttribute('id', currentNode);
                _removeAttribute(name, currentNode);
                if (attributes.indexOf(idAttr) > l) {
                    currentNode.setAttribute('id', idAttr.value);
                }
            } else {
                // This avoids a crash in Safari v9.0 with double-ids.
                // The trick is to first set the id to be empty and then to
                // remove the attriubute
                if (name === 'id') {
                    currentNode.setAttribute(name, '');
                }
                _removeAttribute(name, currentNode);
            }

            /* Did the hooks approve of the attribute? */
            if (!hookEvent.keepAttr) {
                continue;
            }

            /* Make sure attribute cannot clobber */
            if (SANITIZE_DOM &&
                    (lcName === 'id' || lcName === 'name') &&
                    (value in window || value in document || value in formElement)) {
                continue;
            }

            /* Sanitize attribute content to be template-safe */
            if (SAFE_FOR_TEMPLATES) {
                value = value.replace(MUSTACHE_EXPR, ' ');
                value = value.replace(ERB_EXPR, ' ');
            }

            /* Allow valid data-* attributes: At least one character after "-"
               (https://html.spec.whatwg.org/multipage/dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes)
               XML-compatible (https://html.spec.whatwg.org/multipage/infrastructure.html#xml-compatible and http://www.w3.org/TR/xml/#d0e804)
               We don't need to check the value; it's always URI safe. */
            if (ALLOW_DATA_ATTR && DATA_ATTR.test(lcName)) {
                // This attribute is safe
            }
            /* Otherwise, check the name is permitted */
            else if (!ALLOWED_ATTR[lcName] || FORBID_ATTR[lcName]) {
                continue;
            }
            /* Check value is safe. First, is attr inert? If so, is safe */
            else if (URI_SAFE_ATTRIBUTES[lcName]) {
                // This attribute is safe
            }
            /* Check no script, data or unknown possibly unsafe URI
               unless we know URI values are safe for that attribute */
            else if (IS_ALLOWED_URI.test(value.replace(ATTR_WHITESPACE,''))) {
                // This attribute is safe
            }
            /* Keep image data URIs alive if src is allowed */
            else if (
                lcName === 'src' &&
                value.indexOf('data:') === 0 &&
                DATA_URI_TAGS[currentNode.nodeName.toLowerCase()]) {
                // This attribute is safe
            }
            /* Allow unknown protocols: This provides support for links that
               are handled by protocol handlers which may be unknown ahead of
               time, e.g. fb:, spotify: */
            else if (
                ALLOW_UNKNOWN_PROTOCOLS &&
                !IS_SCRIPT_OR_DATA.test(value.replace(ATTR_WHITESPACE,''))) {
                // This attribute is safe
            }
            /* Check for binary attributes */
            else if (!value) {
                // binary attributes are safe at this point
            }
            /* Anything else, presume unsafe, do not add it back */
            else {
                continue;
            }

            /* Handle invalid data-* attribute set by try-catching it */
            try {
                currentNode.setAttribute(name, value);
                DOMPurify.removed.pop();
            } catch (e) {}
        }

        /* Execute a hook if present */
        _executeHook('afterSanitizeAttributes', currentNode, null);
    };

    /**
     * _sanitizeShadowDOM
     *
     * @param  fragment to iterate over recursively
     * @return void
     */
    var _sanitizeShadowDOM = function(fragment) {
        var shadowNode;
        var shadowIterator = _createIterator(fragment);

        /* Execute a hook if present */
        _executeHook('beforeSanitizeShadowDOM', fragment, null);

        while ( (shadowNode = shadowIterator.nextNode()) ) {
            /* Execute a hook if present */
            _executeHook('uponSanitizeShadowNode', shadowNode, null);

            /* Sanitize tags and elements */
            if (_sanitizeElements(shadowNode)) {
                continue;
            }

            /* Deep shadow DOM detected */
            if (shadowNode.content instanceof DocumentFragment) {
                _sanitizeShadowDOM(shadowNode.content);
            }

            /* Check attributes, sanitize if necessary */
            _sanitizeAttributes(shadowNode);
        }

        /* Execute a hook if present */
        _executeHook('afterSanitizeShadowDOM', fragment, null);
    };

    /**
     * _executeHook
     * Execute user configurable hooks
     *
     * @param  {String} entryPoint  Name of the hook's entry point
     * @param  {Node} currentNode
     */
    var _executeHook = function(entryPoint, currentNode, data) {
        if (!hooks[entryPoint]) { return; }

        hooks[entryPoint].forEach(function(hook) {
            hook.call(DOMPurify, currentNode, data, CONFIG);
        });
    };

    /**
     * sanitize
     * Public method providing core sanitation functionality
     *
     * @param {String|Node} dirty string or DOM node
     * @param {Object} configuration object
     */
    DOMPurify.sanitize = function(dirty, cfg) {
        var body, importedNode, currentNode, oldNode, nodeIterator, returnNode;
        /* Make sure we have a string to sanitize.
           DO NOT return early, as this will return the wrong type if
           the user has requested a DOM object rather than a string */
        if (!dirty) {
            dirty = '<!-->';
        }

        /* Stringify, in case dirty is an object */
        if (typeof dirty !== 'string' && !_isNode(dirty)) {
            if (typeof dirty.toString !== 'function') {
                throw new TypeError('toString is not a function');
            } else {
                dirty = dirty.toString();
            }
        }

        /* Check we can run. Otherwise fall back or ignore */
        if (!DOMPurify.isSupported) {
            if (typeof window.toStaticHTML === 'object'
                || typeof window.toStaticHTML === 'function') {
                if (typeof dirty === 'string') {
                    return window.toStaticHTML(dirty);
                } else if (_isNode(dirty)) {
                    return window.toStaticHTML(dirty.outerHTML);
                }
            }
            return dirty;
        }

        /* Assign config vars */
        _parseConfig(cfg);

        /* Clean up removed elements */
        DOMPurify.removed = [];

        if (dirty instanceof Node) {
            /* If dirty is a DOM element, append to an empty document to avoid
               elements being stripped by the parser */
            body = _initDocument('<!-->');
            importedNode = body.ownerDocument.importNode(dirty, true);
            if (importedNode.nodeType === 1 && importedNode.nodeName === 'BODY') {
                /* Node is already a body, use as is */
                body = importedNode;
            } else {
                body.appendChild( importedNode );
            }
        } else {
            /* Exit directly if we have nothing to do */
            if (!RETURN_DOM && !WHOLE_DOCUMENT && dirty.indexOf('<') === -1) {
                return dirty;
            }

            /* Initialize the document to work on */
            body = _initDocument(dirty);

            /* Check we have a DOM node from the data */
            if (!body) {
                return RETURN_DOM ? null : '';
            }
        }

        /* Get node iterator */
        nodeIterator = _createIterator(body);

        /* Now start iterating over the created document */
        while ( (currentNode = nodeIterator.nextNode()) ) {

            /* Fix IE's strange behavior with manipulated textNodes #89 */
            if (currentNode.nodeType === 3 && currentNode === oldNode) {
                continue;
            }

            /* Sanitize tags and elements */
            if (_sanitizeElements(currentNode)) {
                continue;
            }

            /* Shadow DOM detected, sanitize it */
            if (currentNode.content instanceof DocumentFragment) {
                _sanitizeShadowDOM(currentNode.content);
            }

            /* Check attributes, sanitize if necessary */
            _sanitizeAttributes(currentNode);

            oldNode = currentNode;
        }

        /* Return sanitized string or DOM */
        if (RETURN_DOM) {

            if (RETURN_DOM_FRAGMENT) {
                returnNode = createDocumentFragment.call(body.ownerDocument);

                while (body.firstChild) {
                    returnNode.appendChild(body.firstChild);
                }
            } else {
                returnNode = body;
            }

            if (RETURN_DOM_IMPORT) {
                /* adoptNode() is not used because internal state is not reset
                   (e.g. the past names map of a HTMLFormElement), this is safe
                   in theory but we would rather not risk another attack vector.
                   The state that is cloned by importNode() is explicitly defined
                   by the specs. */
                returnNode = importNode.call(originalDocument, returnNode, true);
            }

            return returnNode;
        }

        return WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;
    };

    /**
     * addHook
     * Public method to add DOMPurify hooks
     *
     * @param {String} entryPoint
     * @param {Function} hookFunction
     */
    DOMPurify.addHook = function(entryPoint, hookFunction) {
        if (typeof hookFunction !== 'function') { return; }
        hooks[entryPoint] = hooks[entryPoint] || [];
        hooks[entryPoint].push(hookFunction);
    };

    /**
     * removeHook
     * Public method to remove a DOMPurify hook at a given entryPoint
     * (pops it from the stack of hooks if more are present)
     *
     * @param {String} entryPoint
     * @return void
     */
    DOMPurify.removeHook = function(entryPoint) {
        if (hooks[entryPoint]) {
            hooks[entryPoint].pop();
        }
    };

    /**
     * removeHooks
     * Public method to remove all DOMPurify hooks at a given entryPoint
     *
     * @param  {String} entryPoint
     * @return void
     */
    DOMPurify.removeHooks = function(entryPoint) {
        if (hooks[entryPoint]) {
            hooks[entryPoint] = [];
        }
    };

    /**
     * removeAllHooks
     * Public method to remove all DOMPurify hooks
     *
     * @return void
     */
    DOMPurify.removeAllHooks = function() {
        hooks = {};
    };

    return DOMPurify;
}));


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = makeMap;

var _axios = __webpack_require__(3);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapOptions = {
  center: {
    lat: 55.7,
    lng: 37.6
  },
  zoom: 10
};

function loadPlaces(map) {
  var lat = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 55.7;
  var lng = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 37.6;

  _axios2.default.get('api/stores/near?lat=' + lat + '&lng=' + lng).then(function (res) {
    var places = res.data;
    console.log(places);
    if (!places) return;

    var bounds = new google.maps.LatLngBounds();
    var infoWindow = new google.maps.InfoWindow();

    var markers = places.map(function (place) {
      var _place$location$coord = _slicedToArray(place.location.coordinates, 2),
          placeLng = _place$location$coord[0],
          placeLat = _place$location$coord[1];

      var position = { lat: placeLat, lng: placeLng };
      bounds.extend(position);
      console.log(position);
      var marker = new google.maps.Marker({ map: map, position: position });
      marker.place = place;
      return marker;
    });

    markers.forEach(function (marker) {
      return marker.addListener('click', function () {
        var html = '<div class="popup">\n              <a href="/store/' + this.place.slug + '">\n                <img src="/uploads/' + (this.place.photo || 'store.png') + '" alt="' + this.place.name + '"/>\n                <p>' + this.place.name + ' - ' + this.place.location.address + '</p>\n              </a>\n            </div>';
        infoWindow.setContent(html);
        infoWindow.open(map, this);
      });
    });

    map.setCenter(bounds.getCenter());
    map.fitBounds(bounds);
  });
}

function makeMap(mapContainer) {
  if (!mapContainer) return;
  var map = new google.maps.Map(mapContainer, mapOptions);
  loadPlaces(map);

  var input = document.querySelector('[name="geolocate"]');
  var autocomplete = new google.maps.places.Autocomplete(input);
  autocomplete.addListener('place_changed', function () {
    var place = autocomplete.getPlace();
    loadPlaces(map, place.geometry.location.lat(), place.geometry.location.lng());
  });
}

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = addHeart;

var _axios = __webpack_require__(3);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addHeart(e) {
    var _this = this;

    e.preventDefault();
    _axios2.default.post(this.action).then(function (res) {
        console.log(_this.heart);
        var isHearted = _this.heart.classList.toggle('heart__button--hearted');
        var count = document.querySelector('.heart-count');
        count.textContent = res.data.hearts.length;
        if (isHearted) {
            _this.heart.classList.add('heart__button--float');
            setTimeout(function () {
                return _this.heart.classList.remove('heart__button--float');
            }, 2400);
        }
    }).catch(console.error);
}

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _add = __webpack_require__(37);

var _add2 = _interopRequireDefault(_add);

var _cog = __webpack_require__(38);

var _cog2 = _interopRequireDefault(_cog);

var _heart = __webpack_require__(39);

var _heart2 = _interopRequireDefault(_heart);

var _logo = __webpack_require__(40);

var _logo2 = _interopRequireDefault(_logo);

var _logout = __webpack_require__(41);

var _logout2 = _interopRequireDefault(_logout);

var _map = __webpack_require__(42);

var _map2 = _interopRequireDefault(_map);

var _pencil = __webpack_require__(43);

var _pencil2 = _interopRequireDefault(_pencil);

var _review = __webpack_require__(44);

var _review2 = _interopRequireDefault(_review);

var _store = __webpack_require__(45);

var _store2 = _interopRequireDefault(_store);

var _store3 = __webpack_require__(46);

var _store4 = _interopRequireDefault(_store3);

var _tag = __webpack_require__(47);

var _tag2 = _interopRequireDefault(_tag);

var _top = __webpack_require__(48);

var _top2 = _interopRequireDefault(_top);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__);


var symbol = new __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default.a({
  "id": "add",
  "use": "add-usage",
  "viewBox": "0 0 100 100",
  "content": "<symbol viewBox=\"0 0 100 100\" id=\"add\"><g transform=\"translate(0,-952.36218)\"><path d=\"M 10.8125 10 A 1.0000999 1.0000999 0 0 0 10 11 L 10 89 A 1.0000999 1.0000999 0 0 0 11 90 L 89 90 A 1.0000999 1.0000999 0 0 0 90 89 L 90 11 A 1.0000999 1.0000999 0 0 0 89 10 L 11 10 A 1.0000999 1.0000999 0 0 0 10.8125 10 z M 12 12 L 88 12 L 88 88 L 12 88 L 12 12 z M 49.875 26.96875 A 1.0000999 1.0000999 0 0 0 49 28 L 49 49 L 28 49 A 1.0000999 1.0000999 0 0 0 27.8125 49 A 1.0043849 1.0043849 0 0 0 28 51 L 49 51 L 49 72 A 1.0000999 1.0000999 0 1 0 51 72 L 51 51 L 72 51 A 1.0000999 1.0000999 0 1 0 72 49 L 51 49 L 51 28 A 1.0000999 1.0000999 0 0 0 49.875 26.96875 z \" transform=\"translate(0,952.36218)\" /></g></symbol>"
});
var result = __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__);


var symbol = new __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default.a({
  "id": "cog",
  "use": "cog-usage",
  "viewBox": "0 0 100 100",
  "content": "<symbol viewBox=\"0 0 100 100\" id=\"cog\"><path d=\"M88.9,58.8c-2.4-2.3-3.7-5.5-3.7-8.8c0-3.3,1.3-6.4,3.7-8.8c0.4-0.4,0.8-0.7,1.3-1.1c0.7-0.5,0.9-1.4,0.7-2.2  c-0.8-2.9-2-5.7-3.4-8.3c-0.4-0.7-1.2-1.1-2-1c-0.7,0.1-1.2,0.1-1.7,0.1c-6.9,0-12.5-5.6-12.5-12.4c0-0.5,0-1.1,0.1-1.7  c0.1-0.8-0.3-1.6-1-2c-2.6-1.4-5.4-2.6-8.3-3.4c-0.8-0.2-1.7,0.1-2.2,0.7c-0.4,0.5-0.8,1-1.1,1.3c-2.4,2.3-5.5,3.6-8.8,3.6  s-6.5-1.3-8.8-3.6c-0.4-0.4-0.7-0.8-1.1-1.3c-0.5-0.7-1.4-0.9-2.2-0.7c-2.9,0.9-5.7,2-8.3,3.4c-0.7,0.4-1.1,1.2-1,2  c0.1,0.7,0.1,1.2,0.1,1.7c0,6.9-5.6,12.4-12.5,12.4c-0.5,0-1.1,0-1.7-0.1c-0.8-0.1-1.6,0.3-2,1c-1.4,2.6-2.6,5.4-3.4,8.3  c-0.2,0.8,0,1.7,0.7,2.2c0.6,0.4,1,0.8,1.3,1.1c4.9,4.8,4.9,12.7,0,17.6c-0.4,0.4-0.8,0.7-1.3,1.1c-0.7,0.5-0.9,1.4-0.7,2.2  c0.9,2.9,2,5.7,3.4,8.3c0.4,0.7,1.2,1.1,2,1c0.7-0.1,1.2-0.1,1.7-0.1c6.9,0,12.5,5.6,12.5,12.4c0,0.5,0,1.1-0.1,1.7  c-0.1,0.8,0.3,1.6,1,2c2.6,1.4,5.4,2.6,8.3,3.4c0.8,0.2,1.7,0,2.2-0.7c0.4-0.5,0.8-1,1.1-1.3c2.4-2.3,5.5-3.6,8.8-3.6  s6.5,1.3,8.8,3.6c0.4,0.4,0.7,0.8,1.1,1.3c0.4,0.5,1,0.8,1.6,0.8c0.2,0,0.4,0,0.6-0.1c2.9-0.9,5.7-2,8.3-3.4c0.7-0.4,1.1-1.2,1-2  c-0.1-0.7-0.1-1.2-0.1-1.7c0-6.9,5.6-12.4,12.5-12.4c0.5,0,1.1,0,1.7,0.1c0.8,0.1,1.6-0.3,2-1c1.4-2.6,2.6-5.4,3.4-8.3  c0.2-0.8,0-1.7-0.7-2.2C89.7,59.5,89.2,59.2,88.9,58.8z M84.6,67.3c-0.3,0-0.6,0-0.9,0c-9.1,0-16.5,7.4-16.5,16.4c0,0.3,0,0.6,0,0.9  c-1.6,0.8-3.3,1.5-5.1,2.1c-0.2-0.2-0.4-0.4-0.6-0.6c-3.1-3.1-7.2-4.8-11.6-4.8s-8.5,1.7-11.6,4.8c-0.2,0.2-0.4,0.4-0.6,0.6  c-1.7-0.6-3.4-1.3-5.1-2.1c0-0.3,0-0.6,0-0.9c0-9.1-7.4-16.4-16.5-16.4c-0.3,0-0.6,0-0.9,0c-0.8-1.6-1.5-3.3-2.1-5.1  c0.2-0.2,0.4-0.4,0.6-0.6c6.4-6.4,6.4-16.8,0-23.3c-0.2-0.2-0.4-0.4-0.6-0.6c0.6-1.7,1.3-3.4,2.1-5.1c0.3,0,0.6,0,0.9,0  c9.1,0,16.5-7.4,16.5-16.4c0-0.3,0-0.6,0-0.9c1.6-0.8,3.3-1.5,5.1-2.1c0.2,0.2,0.4,0.4,0.6,0.6c3.1,3.1,7.2,4.8,11.6,4.8  s8.5-1.7,11.6-4.8c0.2-0.2,0.4-0.4,0.6-0.6c1.7,0.6,3.4,1.3,5.1,2.1c0,0.3,0,0.6,0,0.9c0,9.1,7.4,16.4,16.5,16.4c0.3,0,0.6,0,0.9,0  c0.8,1.6,1.5,3.3,2.1,5.1c-0.2,0.2-0.4,0.4-0.6,0.6c-3.1,3.1-4.8,7.2-4.8,11.6s1.7,8.5,4.8,11.6c0.2,0.2,0.4,0.4,0.6,0.6  C86.1,64,85.4,65.7,84.6,67.3z M50,26.2c-13.1,0-23.8,10.7-23.8,23.8S36.9,73.8,50,73.8S73.8,63.1,73.8,50S63.1,26.2,50,26.2z   M50,69.8c-10.9,0-19.8-8.9-19.8-19.8c0-10.9,8.9-19.8,19.8-19.8S69.8,39.1,69.8,50C69.8,60.9,60.9,69.8,50,69.8z\" /></symbol>"
});
var result = __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__);


var symbol = new __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default.a({
  "id": "heart",
  "use": "heart-usage",
  "viewBox": "0 0 100 90",
  "content": "<symbol class=\"icon icon-heart\" viewBox=\"0 0 100 90\" id=\"heart\"><path style=\"text-indent:0;text-transform:none;block-progression:tb\" d=\"M28.2166 11.004c-6.1854 0-12.3682 2.342-17.0938 7-9.4512 9.316-9.4396 24.49 0 33.8125l36.75 36.3126a3.0003 3.0003 0 0 0 4.2188 0C64.3563 76.04 76.608 63.9685 88.8728 51.879c9.4512-9.3158 9.4512-24.5278 0-33.8437-9.4512-9.3158-24.7362-9.316-34.1875 0L50.029 22.629l-4.7187-4.625c-4.7256-4.658-10.9084-7-17.0937-7zm0 5.9688c4.6526 0 9.296 1.7847 12.875 5.3125l6.8124 6.6875a3.0003 3.0003 0 0 0 4.2188 0l6.7812-6.6563c7.1582-7.0557 18.592-7.0555 25.75 0 7.158 7.0556 7.158 18.2258 0 25.2813-11.5562 11.391-23.1 22.7655-34.6562 34.1563L15.3416 47.5666c-7.1536-7.0647-7.158-18.2257 0-25.2812 3.579-3.5278 8.2223-5.3125 12.875-5.3125z\" overflow=\"visible\" color=\"#000\" /></symbol>"
});
var result = __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__);


var symbol = new __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default.a({
  "id": "logo",
  "use": "logo-usage",
  "viewBox": "0 0 606 239",
  "content": "<symbol viewBox=\"0 0 606 239\" id=\"logo\"><defs><filter x=\"-50%\" y=\"-50%\" width=\"200%\" height=\"200%\" filterUnits=\"objectBoundingBox\" id=\"logo_a\"><feOffset dx=\"1\" dy=\"1\" in=\"SourceAlpha\" result=\"shadowOffsetOuter1\"></feOffset><feColorMatrix values=\"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.323001585 0\" in=\"shadowOffsetOuter1\" result=\"shadowMatrixOuter1\"></feColorMatrix><feMerge><feMergeNode in=\"shadowMatrixOuter1\"></feMergeNode><feMergeNode in=\"SourceGraphic\"></feMergeNode></feMerge></filter></defs><g filter=\"url(#logo_a)\" fill=\"#FFF\" fill-rule=\"evenodd\"><path d=\"M292.595 40.128c4.368 0 10.08-.56 16.352-1.344-1.792 6.944-5.376 17.024-8.512 25.536-8.176 22.512-12.208 34.384-14.672 43.68 3.36 5.488 7.392 8.624 12.544 9.408 2.016-12.656 5.264-25.536 11.76-45.36 3.36-10.192 9.408-26.544 13.664-35.056 4.928-.56 9.856-.896 14.56-.896 2.688 0 6.832.224 10.64.56-1.232-6.832-3.248-11.312-8.736-11.312-3.92 0-29.568 3.136-44.912 3.136-5.04 0-9.072-.336-10.976-1.232-.56 1.12-1.008 3.136-1.008 4.256 0 4.816 3.36 8.624 9.296 8.624zm39.2862 65.968c.112 2.352 2.464 7.28 3.472 7.28.56 0 1.68-1.12 2.128-2.128 6.72-15.792 18.592-32.144 29.232-40.096 1.568-1.232 3.92-2.688 4.368-2.688.112 0 .448.336.448.448-7.28 14.672-12.656 28.784-12.656 33.152 0 3.472 3.024 7.056 6.048 7.056 2.352 0 10.864-4.032 10.864-5.152 0-.336-.112-.672-.784-1.792-.336 0-1.68.896-3.92.896-1.456 0-1.792-.448-1.792-1.904 0-6.048 11.76-26.88 20.944-36.96-3.36-4.256-8.288-7.056-12.208-7.056-6.832 0-17.696 9.296-31.92 27.44 2.688-10.752 6.16-19.04 11.872-30.24 5.264-10.304 14.56-22.512 25.76-33.936-2.576-2.8-9.408-5.376-14.112-5.376-10.192 11.648-20.384 28.784-26.432 44.576-6.832 17.584-11.312 35.952-11.312 46.48zm94.5022-43.344c-3.248 6.72-7.728 15.12-10.864 20.384-8.064 13.44-13.44 19.712-17.808 20.608-1.008-.336-1.568-1.12-1.568-2.688 0-13.776 14.672-33.6 26.656-35.504-.336-2.8-5.376-8.064-8.4-8.848-12.096.672-28.224 23.52-28.224 40.208 0 7.728 3.808 13.328 9.296 13.552 6.944-1.12 16.8-12.32 22.848-25.984-2.8 7.28-4.256 13.328-4.256 17.472 0 5.6 2.016 8.288 6.048 8.288 2.24 0 5.488-.896 7.28-2.016-2.016-1.12-2.912-4.032-2.912-8.176 0-7.616 4.144-20.832 10.192-33.376.112-1.456-5.152-3.92-8.288-3.92zm22.934 2.352c-5.712 13.776-9.856 28.896-9.856 36.176 0 5.264 8.512 11.648 15.904 11.872 2.464-.224 10.528-5.6 12.208-8.176-.112-.448-.448-1.12-.784-1.68-3.136 2.464-7.28 4.256-11.76 4.816-2.352-.336-3.696-2.128-3.696-5.488 0-9.184 4.48-23.744 11.872-38.08 5.152-.112 9.744-.896 13.328-2.24 0-1.232-.56-2.464-1.232-3.136-3.136.336-6.272.448-9.184.448 3.696-6.272 6.496-10.64 10.976-16.24-1.456-1.68-8.624-4.032-11.648-4.032-2.464 1.344-8.96 10.976-13.44 19.824-3.024-.112-6.608-.448-10.528-.672 0 2.016.784 5.712 1.456 6.608h6.384zm40.8543-13.888c8.624-5.6 13.776-16.016 16.24-29.456-1.904-3.696-8.624-6.608-15.68-7.056 1.008 4.256 1.344 8.176 1.344 11.872 0 8.288-1.904 15.232-3.696 20.384 0 1.568.896 3.472 1.792 4.256zm39.734 12.208c-.896-3.472-9.52-12.208-12.88-13.104-7.84 1.68-14.784 10.304-14.784 18.256 0 6.272 3.472 12.768 3.472 20.384-12.992.896-23.072 10.528-23.072 21.952 1.232 4.144 6.384 8.4 10.64 8.736 11.984-1.232 19.264-9.296 19.264-21.728 0-1.792-.112-2.912-.112-4.032 0-1.68.56-1.904 7.504-3.472.224-.224.448-.896.448-1.456 0-.56 0-.672-.112-.896-2.352 0-4.704.112-7.84.224-.112-.224-.112-.448-.112-1.344 0-14.336 3.248-22.064 9.184-22.064 1.568 0 2.688 1.568 2.688 3.696 0 1.792-1.792 5.152-1.792 6.048.112 1.008.56 1.568 1.456 1.68 2.352 0 5.712-7.168 6.048-12.88zm-36.96 51.072c-1.456-1.008-2.24-2.352-2.24-4.032 0-5.152 9.632-14.896 15.456-15.68 0 7.728-6.048 16.8-13.216 19.712zM76.6455 91.512c-.224-.896-.336-1.904-.336-5.04 0-17.808 11.872-58.352 20.384-71.904.896 25.872 3.024 46.928 9.184 71.904 1.568 3.136 7.504 4.928 14.336 4.928.448 0 1.008 0 1.456-.112-.112-.112-.112-.224-.112-.336.336-17.92 14.896-76.272 29.12-82.096-1.68-3.248-6.496-6.832-9.744-7.392-5.6.672-16.912 37.52-24.08 73.472-4.592-16.128-5.376-31.472-5.376-47.712 0-8.176.56-16.128 1.232-19.712-.672-2.016-13.328-6.944-17.472-6.944l.784 4.704c-9.856 14-30.24 64.288-30.24 77.84 0 4.032 2.352 5.824 10.864 8.4zm74.2302-4.592c17.92-3.808 30.8-19.824 30.8-38.528 0-7.168-1.904-10.528-5.936-10.528-.672 0-1.344.112-2.016.112-2.24-3.92-4.704-6.72-7.056-7.952-3.472 0-7.504 1.568-11.536 4.592-10.528 7.728-18.256 22.176-18.256 34.16 0 10.08 5.488 17.248 14 18.144zm5.712-35.28c3.696-4.816 8.96-9.632 15.456-11.536 1.008 1.568 1.456 3.696 1.456 7.504 0 17.472-9.744 31.808-23.072 34.72-1.456-.448-2.912-4.368-2.912-7.952 0-5.936 3.92-15.904 9.072-22.736zm29.318 26.768c0 4.368 1.904 7.392 6.608 8.848 4.704-6.384 6.832-10.304 12.544-17.92 2.8-3.584 8.736-10.976 11.088-12.096-.224 2.464-.672 4.368-2.352 10.976-.896 3.584-1.232 6.384-1.232 10.752 0 4.144 2.464 7.168 5.936 7.168 3.136 0 11.648-9.296 17.248-15.344 13.776-14.784 20.048-23.632 21.504-40.208-.448-.336-1.344-.56-2.464-.56-2.576 0-6.272.896-7.168 2.128-2.8 14.672-4.144 20.16-9.856 28.896-4.592 7.056-12.208 15.792-13.552 16.352 2.016-10.752 5.376-33.824 10.192-39.984-.336-1.792-4.704-2.464-7.616-2.464-.784 0-1.456 0-1.904.112-2.912 2.912-3.92 6.944-4.816 9.632-1.232 3.472-2.128 5.824-6.832 10.192-3.36 3.136-7.952 8.736-12.88 15.232 1.68-11.088 2.688-26.32 11.424-33.376-.56-1.68-4.48-2.8-7.728-2.8-6.048 0-10.304 4.032-12.208 10.976-2.912 10.528-5.936 27.552-5.936 33.488z\" /><path d=\"M2.552 211.472c6.396 13.612 19.516 20.992 37.392 20.992 39.032 0 73.144-38.212 73.144-80.852 0-31.324-24.764-52.644-59.696-52.644-27.716 0-48.544 13.448-52.808 33.62 1.312 6.724 6.068 11.48 10.988 13.12 5.084-17.384 15.252-29.192 28.864-34.768-4.592 15.416-28.208 78.556-37.884 100.532zm57.892-104.304c23.78 0 38.868 13.12 38.868 35.588 0 40.344-29.684 75.44-65.272 75.44-5.084 0-9.676-.492-12.628-1.476 0-6.232 5.248-21.648 17.712-49.364 9.84-21.812 20.828-43.132 24.272-47.888-2.296-2.132-9.02-6.56-18.532-10.004 4.756-1.476 10.004-2.296 15.58-2.296zm111.768 44.936c-4.428-5.576-9.184-8.692-14.104-9.348-21.648 0-46.248 31.652-46.248 58.548 0 13.12 8.856 23.452 23.944 25.092 10.332-2.296 22.96-11.644 32.8-24.6-.82-.984-1.64-1.804-2.788-2.788-6.888 7.38-18.204 19.188-30.012 19.188-6.232 0-7.544-7.544-7.544-13.12 0-1.476.164-2.952.164-4.264 27.88-11.152 42.148-21.812 43.788-48.708zm-11.316 5.412c-.82 14.924-13.776 28.372-31.16 37.064 5.248-20.336 19.188-35.424 31.16-37.064zm11.968 53.14c0 6.278 1.314 11.826 3.066 12.994 1.314.876 3.504 3.212 3.942 4.234.584 1.314 2.774 2.482 5.402 2.774-.146-.73-.146-.876-.146-4.234 0-12.264 4.38-31.244 12.556-54.02 9.636-26.718 20.586-46.428 35.77-64.386-1.606-2.482-11.68-8.322-16.352-9.198-10.074 12.264-20.586 34.018-32.558 66.722-7.446 20.44-11.68 36.646-11.68 45.114zm34.2168-3.118c0 10.974 11.718 15.81 13.578 15.81 1.116 0 1.116-1.674 1.116-6.138.186-5.394 2.976-13.392 5.58-20.274 6.324-16.368 9.672-29.574 21.018-42.222-4.836-7.254-13.206-11.346-17.298-12.276-11.16 5.58-16.554 24.924-17.67 29.76-4.836 22.32-6.324 31.062-6.324 35.34zm35.526-80.724c0 2.046 2.604 4.464 5.58 5.022 1.86-4.092 15.438-20.646 21.018-25.854-3.72-5.58-16.74-13.02-22.506-13.02-3.162 7.998-5.766 20.088-5.766 24.366 0 2.046.93 4.836 2.232 6.138-.372 1.488-.558 2.604-.558 3.348zm1.041 64.322c0 17.22 11.644 32.308 26.076 33.62 7.38-1.312 20.828-10.66 28.044-19.68 0-.984-.82-2.624-1.64-3.28-10.168 7.544-21.976 13.284-28.372 14.104-3.936-1.804-5.904-7.052-5.904-15.908 0-13.94 5.084-27.06 14.432-37.556 6.068-6.724 13.448-11.316 17.712-11.316 2.46 0 3.772 1.64 3.772 4.756 0 5.412-3.608 11.48-10.988 18.204 1.804 2.624 4.756 4.428 7.38 4.428 6.232 0 12.464-9.84 12.464-19.844 0-10.496-6.396-16.4-17.712-16.4-22.96 0-45.264 24.108-45.264 48.872zm63.06 17.876c0 9.676 10.332 13.94 11.972 13.94.984 0 .984-1.476.984-5.412.164-4.756 2.624-11.808 4.92-17.876 5.576-14.432 8.528-26.076 18.532-37.228-4.264-6.396-11.644-10.004-15.252-10.824-9.84 4.92-14.596 21.976-15.58 26.24-4.264 19.68-5.576 27.388-5.576 31.16zm31.324-71.176c0 1.804 2.296 3.936 4.92 4.428 1.64-3.608 13.612-18.204 18.532-22.796-3.28-4.92-14.76-11.48-19.844-11.48-2.788 7.052-5.084 17.712-5.084 21.484 0 1.804.82 4.264 1.968 5.412-.328 1.312-.492 2.296-.492 2.952zm21.568 87.904c26.24-5.576 45.1-29.028 45.1-56.416 0-10.496-2.788-15.416-8.692-15.416-.984 0-1.968.164-2.952.164-3.28-5.74-6.888-9.84-10.332-11.644-5.084 0-10.988 2.296-16.892 6.724-15.416 11.316-26.732 32.472-26.732 50.02 0 14.76 8.036 25.256 20.5 26.568zm8.364-51.66c5.412-7.052 13.12-14.104 22.632-16.892 1.476 2.296 2.132 5.412 2.132 10.988 0 25.584-14.268 46.576-33.784 50.84-2.132-.656-4.264-6.396-4.264-11.644 0-8.692 5.74-23.288 13.284-33.292zm84.216 42.312c5.084 3.444 12.628 6.396 15.58 6.396 0 0 .656-.164.656-.656 0-2.132-3.608-5.74-3.608-15.088 0-17.22 12.628-35.588 20.664-54.776-1.968-2.46-9.84-5.248-15.58-5.248-7.38 7.052-10.824 16.564-12.792 21.976-3.608 9.676-11.644 19.68-16.072 25.748-9.02 12.3-13.448 17.712-16.728 19.024-.328-.328-1.148-1.312-1.148-2.952 0-5.74 4.756-20.664 6.888-25.584 9.84-23.288 18.86-35.752 20.828-37.884-3.28-3.772-10.824-5.084-14.596-5.084-13.776 10.004-25.42 37.72-29.356 54.284-.984 4.592-1.312 7.872-1.312 13.94 1.804 7.708 10.988 12.464 17.876 12.792 1.476-.164 4.264-2.132 7.052-5.084 3.608-4.264 15.416-21.156 17.22-20.992-.492 1.476-.82 3.444-.82 5.904 0 3.772 1.148 9.84 5.248 13.284zm87.988-61.664c-1.312-5.084-13.94-17.876-18.86-19.188-11.48 2.46-21.648 15.088-21.648 26.732 0 9.184 5.084 18.696 5.084 29.848-19.024 1.312-33.784 15.416-33.784 32.144 1.804 6.068 9.348 12.3 15.58 12.792 17.548-1.804 28.208-13.612 28.208-31.816 0-2.624-.164-4.264-.164-5.904 0-2.46.82-2.788 10.988-5.084.328-.328.656-1.312.656-2.132 0-.82 0-.984-.164-1.312-3.444 0-6.888.164-11.48.328-.164-.328-.164-.656-.164-1.968 0-20.992 4.756-32.308 13.448-32.308 2.296 0 3.936 2.296 3.936 5.412 0 2.624-2.624 7.544-2.624 8.856.164 1.476.82 2.296 2.132 2.46 3.444 0 8.364-10.496 8.856-18.86zm-54.12 74.784c-2.132-1.476-3.28-3.444-3.28-5.904 0-7.544 14.104-21.812 22.632-22.96 0 11.316-8.856 24.6-19.352 28.864zm56.828-40.344c0 9.676 4.592 11.316 10.004 12.792 7.052-39.524 29.356-76.916 51.824-95.448-.984-5.412-11.316-14.76-18.204-16.236-12.792 9.348-43.624 80.852-43.624 98.892zm-3.608 43.46c6.56 0 8.856-10.004 13.94-15.58-2.952-5.248-10.168-10.332-16.236-10.332-4.92 0-7.708 12.628-7.708 18.04 0 2.296 4.92 7.872 10.004 7.872z\" /></g></symbol>"
});
var result = __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__);


var symbol = new __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default.a({
  "id": "logout",
  "use": "logout-usage",
  "viewBox": "0 0 100 100",
  "content": "<symbol viewBox=\"0 0 100 100\" id=\"logout\"><g display=\"none\"><g display=\"inline\"><path d=\"M75.309,56.443c3.066-2.032,6.133-4.065,9.199-6.098c-1.578-3.884-2.939-7.923-4.518-11.81    c-2.975,2.272-5.949,4.543-8.925,6.814C72.548,49,73.825,52.794,75.309,56.443z\" /><path d=\"M66.109,62.539c1.385,3.415,2.961,6.694,5.104,9.57c3.185-1.812,6.366-3.624,9.551-5.437    c-2.29-3.074-3.975-6.58-5.455-10.229C72.241,58.475,69.175,60.508,66.109,62.539z\" /><path d=\"M90.314,61.235c-3.184,1.812-6.366,3.624-9.551,5.438c2.29,3.072,5.188,5.714,9.097,7.635    c3.38-1.649,6.761-3.297,10.14-4.944C95.838,67.318,92.755,64.507,90.314,61.235z\" /><path d=\"M71.213,72.109c-3.184,1.813-6.368,3.625-9.553,5.438c-1.994-2.677-3.46-5.731-4.752-8.909    c3.066-2.034,6.136-4.064,9.201-6.099c-1.387-3.414-2.584-6.963-3.971-10.377c-2.975,2.271-5.949,4.542-8.924,6.813    c-1.291-3.18-2.757-6.232-4.753-8.911c2.858-2.49,5.716-4.981,8.574-7.471c-2.144-2.876-4.854-5.346-8.511-7.144    c2.661-2.655,5.324-5.309,7.988-7.965c3.907,1.922,6.804,4.562,9.095,7.636c2.858-2.491,5.716-4.981,8.574-7.473    c-2.438-3.271-5.522-6.082-9.685-8.127l-3.244,0.028c-2.662,2.656-5.324,5.312-7.987,7.967c-2.662,2.655-5.325,5.31-7.986,7.965    c-2.662,2.654-5.325,5.31-7.986,7.965c3.403,1.673,5.927,3.973,7.922,6.649c1.996,2.676,3.462,5.73,4.753,8.909    c1.29,3.179,2.403,6.484,3.694,9.662c1.291,3.181,2.758,6.232,4.753,8.909s4.518,4.977,7.923,6.648l3.246-0.029    c3.379-1.647,6.759-3.296,10.136-4.943C76.066,77.456,73.355,74.984,71.213,72.109z\" /><path d=\"M65.608,35.121c-2.856,2.491-5.716,4.981-8.572,7.473c2.142,2.875,3.717,6.155,5.103,9.568    c2.977-2.271,5.951-4.542,8.927-6.812C69.585,41.699,67.9,38.194,65.608,35.121z\" /></g><path display=\"inline\" d=\"M1.406,72.664c1.005,1.004,2.031,1.607,2.294,1.346l55.78-55.781c0.263-0.261-0.34-1.29-1.346-2.294   c-1.004-1.004-2.03-1.606-2.292-1.344L0.062,70.371C-0.201,70.631,0.401,71.66,1.406,72.664z\" /></g><g display=\"none\"><path display=\"inline\" d=\"M95.933,40.134h-3.947c-1.169-6.55-3.687-11.883-8.151-11.883H8.965C2.348,28.251,0,39.967,0,50   s2.348,21.749,8.965,21.749h74.869c4.465,0,6.982-5.333,8.151-11.884h3.947c3.003,0,4.067-5.314,4.067-9.865   C100,45.449,98.936,40.134,95.933,40.134z M4.374,39.365c0.701-3.231,1.71-5.693,2.89-6.916h0.025h0.253H85.51h0.025   c1.181,1.223,2.189,3.684,2.891,6.916H4.374z M92.616,45.175c-0.081-1.055-0.193-2.105-0.332-3.136h4.409h0.011   c0.536,0.554,0.992,1.671,1.31,3.136H92.616z\" /></g><g display=\"none\"><path display=\"inline\" d=\"M98.943,73.272c0.58,0,1.056-0.476,1.056-1.056v-4.219c0-0.58-0.476-1.055-1.056-1.055H28.402   c-0.704,1.555-2.261,2.643-4.079,2.643c-1.817,0-3.375-1.088-4.079-2.643h-3.57l-0.618,0.618   c-3.498,3.497-5.424,8.146-5.424,13.093c0,4.947,1.927,9.599,5.424,13.095l0.618,0.619h3.495c0.664-1.647,2.27-2.813,4.154-2.813   c1.885,0,3.491,1.166,4.154,2.813h70.468c0.578,0,1.055-0.476,1.055-1.056v-4.22c0-0.579-0.477-1.055-1.055-1.055h-4.34   c-1.334-2.205-2.049-4.74-2.049-7.385c0-2.643,0.715-5.177,2.049-7.383h4.338V73.272z M23.536,88.04h-4.085   c-1.614-2.111-2.488-4.682-2.488-7.385c0-2.701,0.874-5.271,2.489-7.383h4.084h66.34c-0.491,1.132-0.87,2.311-1.13,3.525H61.425   c-0.873,0-1.582,0.709-1.582,1.582s0.709,1.582,1.582,1.582h26.948c-0.008,0.231-0.036,0.461-0.036,0.692   c0,2.585,0.538,5.084,1.539,7.384h-66.34V88.04z\" /><path display=\"inline\" d=\"M98.943,11.961c0.58,0,1.056-0.476,1.056-1.056V6.687c0-0.58-0.476-1.055-1.056-1.055H28.402   c-0.704,1.555-2.261,2.642-4.079,2.642c-1.817,0-3.375-1.087-4.079-2.642h-3.57L16.057,6.25c-3.497,3.498-5.424,8.147-5.424,13.095   c0,4.946,1.927,9.598,5.424,13.095l0.618,0.618h3.495c0.664-1.647,2.27-2.813,4.154-2.813c1.885,0,3.491,1.166,4.154,2.813h70.468   c0.578,0,1.055-0.476,1.055-1.056v-4.219c0-0.58-0.477-1.055-1.055-1.055h-4.34c-1.334-2.206-2.049-4.739-2.049-7.384   c0-2.644,0.715-5.179,2.049-7.384H98.943z M23.536,26.729h-4.085c-1.614-2.112-2.488-4.682-2.488-7.384   c0-2.703,0.874-5.271,2.489-7.384h4.084h66.34c-0.491,1.13-0.87,2.312-1.13,3.525H61.425c-0.873,0-1.582,0.708-1.582,1.582   s0.709,1.582,1.582,1.582h26.948c-0.008,0.231-0.036,0.46-0.036,0.692c0,2.585,0.538,5.083,1.539,7.385L23.536,26.729   L23.536,26.729z\" /><path display=\"inline\" d=\"M83.973,57.386c-1.334-2.205-2.049-4.74-2.049-7.384c0-2.645,0.715-5.179,2.049-7.384h4.34   c0.58,0,1.055-0.476,1.055-1.056v-4.218c0-0.58-0.475-1.056-1.055-1.056H17.846c-0.663,1.646-2.27,2.812-4.154,2.812   c-1.883,0-3.49-1.166-4.153-2.812H6.043l-0.618,0.618C1.927,40.403,0,45.055,0,50c0,4.946,1.927,9.599,5.425,13.096l0.618,0.617   h3.57c0.704-1.556,2.261-2.643,4.079-2.643c1.817,0,3.375,1.087,4.079,2.643h70.542c0.58,0,1.056-0.475,1.056-1.055v-4.22   c0-0.58-0.476-1.056-1.056-1.056h-4.34V57.386z M79.243,42.619c-1.001,2.3-1.539,4.799-1.539,7.383   c0,0.233,0.028,0.463,0.036,0.693H50.792c-0.874,0-1.582,0.709-1.582,1.582c0,0.874,0.708,1.582,1.582,1.582h27.321   c0.26,1.215,0.638,2.396,1.13,3.526H12.902H8.818c-1.615-2.112-2.489-4.681-2.489-7.384s0.874-5.272,2.488-7.384h4.084   L79.243,42.619L79.243,42.619z\" /></g><g><path d=\"M84.904,43.786c-1.282-1.974-3.249-3.328-5.538-3.815c-0.6-0.127-1.212-0.191-1.821-0.191c-1.35,0-2.642,0.317-3.803,0.879   c0.164-1.933-0.308-3.859-1.387-5.52c-1.282-1.974-3.249-3.329-5.538-3.815c-0.599-0.127-1.211-0.192-1.82-0.192   c-1.152,0-2.261,0.235-3.285,0.651l4.499-21.165c0.486-2.289,0.049-4.637-1.233-6.61S61.729,0.68,59.44,0.194   c-2.29-0.487-4.637-0.048-6.61,1.233c-1.973,1.282-3.329,3.249-3.815,5.538l-8.978,42.236L31.06,6.964   c-0.486-2.289-1.842-4.256-3.815-5.538c-1.974-1.282-4.323-1.719-6.611-1.233c-2.289,0.486-4.255,1.841-5.538,3.815   c-1.282,1.974-1.719,4.321-1.233,6.61l9.734,45.797l-0.199,3.604c-2.782,1.268-4.837,3.956-5.187,7.075   c-0.005,0.04-0.01,0.081-0.014,0.122c-0.026,0.271-0.044,0.542-0.044,0.817c0,0.1,0.006,0.211,0.013,0.329   c0.001,0.029,0.004,0.061,0.006,0.091c0.02,0.256,0.054,0.551,0.103,0.878c0.002,0.019,0.005,0.037,0.008,0.057   c0.372,2.489,1.46,6.751,2.148,9.327c1.476,5.582,3.224,11.515,3.78,13.383c1.404,4.431,6.144,7.9,10.792,7.9h31.181   c4.575,0,9.555-3.3,11.338-7.514l2.219-5.244c1.567-3.706,2.843-9.995,2.843-14.018v-6.11l3.554-16.718   C86.623,48.107,86.186,45.76,84.904,43.786z M66.04,34.987c2.722,0.578,4.464,3.263,3.886,5.984l-4.189,19.707   c-1.379-0.902-3.024-1.432-4.793-1.432h-5.219l4.33-20.374c0.493-2.315,2.571-3.996,4.942-3.996   C65.345,34.877,65.696,34.914,66.04,34.987z M17.526,9.841c-0.278-1.311-0.026-2.658,0.71-3.792s1.865-1.914,3.176-2.192   c1.312-0.28,2.658-0.026,3.793,0.711c1.135,0.737,1.914,1.864,2.192,3.175l9.957,46.846c0.184,0.865,0.947,1.483,1.831,1.483h1.703   c0.884,0,1.647-0.618,1.832-1.483l9.958-46.846c0.578-2.721,3.266-4.466,5.984-3.886c2.722,0.578,4.465,3.263,3.886,5.984   l-5.684,26.741c-0.2,0.483-0.36,0.988-0.472,1.513l-4.496,21.151H27.191l0.159-2.871c0.009-0.166-0.004-0.331-0.038-0.493   L17.526,9.841z M76.292,85.783l-2.219,5.244c-1.199,2.834-4.812,5.229-7.89,5.229H35.002c-3.006,0-6.314-2.421-7.212-5.255   c-1.436-4.829-3.401-11.778-4.659-16.833c-0.68-2.764-1.234-5.312-1.234-6.133c0-2.64,2.405-5.045,5.046-5.045h34   c2.783,0,5.046,2.264,5.046,5.045c0,2.783-2.263,5.047-5.046,5.047H40.778c-0.37,0-0.731,0.108-1.039,0.314l-5.188,3.458   c-0.861,0.573-1.093,1.735-0.52,2.596c0.574,0.86,1.734,1.094,2.596,0.52l4.716-3.144h19.599c2.889,0,5.447-1.407,7.051-3.562   c1.079,0.932,2.393,1.62,3.883,1.938c0.6,0.127,1.213,0.191,1.821,0.191c1.891,0,3.67-0.619,5.131-1.672   C78.731,77.285,77.61,82.666,76.292,85.783z M82.474,49.618l-3.833,18.034c-0.491,2.315-2.57,3.996-4.942,3.996   c-0.348,0-0.699-0.037-1.042-0.11c-1.286-0.273-2.35-1.021-3.058-2.018c0.083-0.484,0.136-0.978,0.136-1.485   c0-1.253-0.268-2.442-0.743-3.522l3.612-16.993c0.492-2.315,2.57-3.996,4.941-3.996c0.348,0,0.7,0.037,1.043,0.11   C81.31,44.212,83.053,46.897,82.474,49.618z\" /></g><g display=\"none\"><path display=\"inline\" d=\"M90.767,40.015H100v-8.826h-9.249c-0.488-2.093-1.317-4.055-2.423-5.826l6.546-6.545l-6.241-6.24   l-6.552,6.552c-1.77-1.1-3.729-1.924-5.82-2.41V7.455h-8.824v9.265c-2.092,0.485-4.052,1.31-5.823,2.411l-6.549-6.55l-6.239,6.241   l6.543,6.543c-1.107,1.772-1.936,3.735-2.425,5.829h-9.241v8.826h9.229c0.486,2.1,1.312,4.07,2.419,5.848l-6.522,6.522l6.241,6.24   l6.518-6.519c1.778,1.111,3.75,1.942,5.854,2.432v9.21h8.823v-9.212c2.104-0.49,4.075-1.322,5.854-2.434l6.518,6.52l6.241-6.24   l-6.526-6.526C89.454,44.082,90.281,42.114,90.767,40.015z M71.85,44.456c-4.875,0-8.826-3.952-8.826-8.824   c0-4.875,3.951-8.826,8.826-8.826c4.874,0,8.823,3.951,8.823,8.826C80.673,40.503,76.724,44.456,71.85,44.456z\" /><path display=\"inline\" d=\"M47.064,68.806h9.233V59.98h-9.249c-0.488-2.093-1.318-4.054-2.423-5.825l6.546-6.545l-6.24-6.24   l-6.553,6.552c-1.77-1.1-3.729-1.924-5.82-2.41v-9.265h-8.824v9.265c-2.093,0.485-4.052,1.31-5.823,2.411l-6.55-6.55l-6.239,6.241   l6.543,6.542c-1.107,1.772-1.936,3.735-2.425,5.829H0v8.825h9.229c0.486,2.101,1.313,4.07,2.419,5.848l-6.522,6.524l6.241,6.238   l6.518-6.517c1.779,1.11,3.75,1.941,5.855,2.43v9.211h8.824v-9.213c2.103-0.489,4.075-1.32,5.854-2.433l6.518,6.519l6.24-6.239   l-6.526-6.526C45.752,72.874,46.579,70.906,47.064,68.806z M28.147,73.248c-4.875,0-8.826-3.952-8.826-8.825   c0-4.875,3.952-8.825,8.826-8.825c4.874,0,8.823,3.95,8.823,8.825C36.97,69.296,33.021,73.248,28.147,73.248z\" /></g><g display=\"none\"><g display=\"inline\"><polygon points=\"57.387,45.69 15.997,87.077 13.064,91.936 14.444,93.316 19.306,90.386 60.693,48.999   \" /></g><g display=\"inline\"><path d=\"M97.542,8.841c-3.146-3.144-8.073-3.336-11.218-0.193L62.127,32.845c-0.278,0.28-0.278,0.729,0,1.01    c0.821,0.823,0.821,2.152,0,2.973c-0.818,0.82-2.151,0.823-2.974,0.001c-0.278-0.28-0.729-0.28-1.01-0.001l-2.787,2.788    c-0.229,0.233-0.258,0.58-0.102,0.853l10.659,10.661c0.275,0.156,0.623,0.128,0.855-0.103l2.787-2.787    c0.277-0.279,0.275-0.73-0.003-1.01c-0.821-0.821-0.821-2.155,0-2.976c0.819-0.821,2.154-0.818,2.975,0    c0.276,0.281,0.729,0.281,1.009,0l24.197-24.193C100.881,16.914,100.688,11.988,97.542,8.841z\" /></g><path display=\"inline\" d=\"M86.777,80.44L58.422,54.1l-9.92,9.919l27.217,27.239c3.003,3.124,7.813,3.124,10.937,0.121   C89.662,88.253,89.781,83.445,86.777,80.44z M84.011,88.73c-1.56,1.686-4.085,1.446-5.77-0.12c-1.44-1.441-1.44-4.083,0-5.645   c1.685-1.566,4.21-1.566,5.77,0C85.574,84.527,85.574,87.291,84.011,88.73z\" /><path display=\"inline\" d=\"M42.37,57.879l9.689-9.688L33.302,30.767c-2.762-3.003-3.487-4.205-2.762-7.693   c0.843-3.847,0.169-10.907-6.372-14.669C16.649,4.08,9.02,8.045,9.02,8.045L8.42,9.008c0,0,6.733,4.448,7.574,4.928   c0.961,0.603,3.845,3.846,0.358,9.017c-3.368,5.171-7.091,3.485-8.173,2.646c-0.841-0.482-7.574-4.811-7.574-4.811l-0.599,0.962   c0,0-0.483,9.016,6.968,13.825c3.486,2.282,7.216,2.282,9.861,1.322c2.645-0.841,4.565,0.122,7.813,3.246L42.37,57.879z\" /></g><g display=\"none\"><g display=\"inline\"><polygon points=\"28.757,57.483 30.274,56.608 43.45,48.974 43.476,48.988 68.326,34.647 68.32,22.36 7.493,57.449 82.193,100     92.475,94.07 73.438,83.138   \" /><polygon points=\"70.426,35.858 70.439,64.348 80.993,70.359 80.96,0 6.462,42.973 6.468,55.615 70.418,18.728   \" /><polygon points=\"83.093,73.972 70.441,66.764 70.44,66.771 68.167,65.468 43.483,51.406 32.962,57.479 93.538,92.26 93.497,6.007     83.059,0.014   \" /></g></g><g display=\"none\"><path display=\"inline\" d=\"M86.207,14.803L71.403,0h-57.61v94.827c0,2.948,3.706,5.173,8.62,5.173c4.915,0,8.621-2.225,8.621-5.173   l0,0V19.68l10.345,10.345v64.803l0,0c0,2.948,3.706,5.173,8.621,5.173c4.914,0,8.62-2.225,8.62-5.173V13.793H27.586v76.848   c-1.423-0.621-3.196-0.985-5.173-0.985c-1.975,0-3.749,0.364-5.172,0.985V3.448h51.725v91.379c0,2.948,3.705,5.173,8.62,5.173   c4.914,0,8.621-2.225,8.621-5.173l0,0V14.803z M55.172,90.641c-1.423-0.621-3.197-0.985-5.172-0.985   c-1.977,0-3.75,0.364-5.173,0.985V31.034h10.345V90.641z M50,96.552c-3.338,0-5.173-1.296-5.173-1.725s1.835-1.724,5.173-1.724   s5.172,1.295,5.172,1.724S53.338,96.552,50,96.552z M55.172,27.586H43.817L33.473,17.241h21.699V27.586z M22.413,93.104   c3.338,0,5.173,1.295,5.173,1.724s-1.835,1.725-5.173,1.725s-5.172-1.296-5.172-1.725S19.075,93.104,22.413,93.104z M82.759,16.231   v74.409c-1.423-0.621-3.197-0.985-5.173-0.985s-3.75,0.364-5.172,0.985V5.886L82.759,16.231z M77.586,96.552   c-3.338,0-5.172-1.296-5.172-1.725s1.834-1.724,5.172-1.724c3.337,0,5.173,1.295,5.173,1.724S80.923,96.552,77.586,96.552z\" /></g><g display=\"none\"><path display=\"inline\" d=\"M79.386,25.958V1.88h-0.002L78.299,0h-2.17l-1.087,1.88l0,0v1.864c-16.669,1.309-33.416,1.309-50.085,0   V1.88l0,0L23.871,0h-2.17l-1.085,1.88h-0.002v24.078h-6.08v3.379h6.08V44.3L46.93,70.615l-9.845,9.844h-9.883v3.379h6.505   L21.176,96.369v0.001l-0.562,2.095L22.15,100l2.096-0.562v0.002l15.603-15.602h20.304l15.603,15.602v-0.002L77.85,100l1.536-1.535   l-0.562-2.095v-0.001L66.293,83.838h6.504v-3.379h-9.883l-9.844-9.844L79.386,44.3V29.337h6.08v-3.379H79.386z M75.042,26v3.337   v10.64c-16.278,5.275-33.806,5.275-50.085,0v-10.64V26C41.626,27.31,58.373,27.31,75.042,26z M56.773,80.459H43.227L50,73.686   L56.773,80.459z M50,67.545l-6.626-6.627h13.253L50,67.545z M41.443,58.987L27.706,45.25c14.571,4.158,30.017,4.158,44.588,0   L58.557,58.987H41.443z\" /></g><g display=\"none\"><path display=\"inline\" d=\"M97.756,84.123L71.173,57.54c3.723-5.822,5.916-12.712,5.916-20.119C77.089,16.787,60.302,0,39.667,0   C19.033,0,2.244,16.787,2.244,37.421c0,20.634,16.789,37.427,37.423,37.427c5.039,0,9.84-1.015,14.231-2.829L81.88,100   L97.756,84.123z M19.085,37.421c0-11.348,9.234-20.58,20.582-20.58s20.58,9.232,20.58,20.58c0,11.354-9.232,20.586-20.58,20.586   S19.085,48.775,19.085,37.421z\" /></g><g display=\"none\"><path display=\"inline\" d=\"M96.792,44.66L55.341,3.208c-1.426-1.422-3.323-2.207-5.342-2.207c-2.018,0-3.915,0.785-5.338,2.207   L3.209,44.66C1.783,46.085,1,47.98,1,50.003c0,2.016,0.783,3.915,2.209,5.336L44.66,96.791c1.424,1.426,3.321,2.208,5.338,2.208   c2.019,0,3.919-0.782,5.342-2.208L96.792,55.34C99.737,52.398,99.737,47.605,96.792,44.66z M37.743,71.233   c-0.565,0.554-1.097,1.074-1.602,1.577l-7.232-7.232c0.55-0.547,1.107-1.094,1.694-1.664c5.147-5.021,11.313-11.036,13.477-23.072   c-0.525,0.124-1.023,0.265-1.486,0.423l-1.936,0.667c-4.069,1.405-5.402-0.346-2.965-3.891l7.864-11.442l0.002-0.003l4.43-6.447   l4.429,6.451l7.863,11.442c2.436,3.542,1.104,5.296-2.966,3.891l-1.932-0.667c-0.463-0.158-0.963-0.299-1.486-0.423   c2.164,12.036,8.329,18.05,13.479,23.072c0.587,0.57,1.144,1.117,1.69,1.664l-7.229,7.232c-0.507-0.503-1.04-1.023-1.604-1.577   c-3.787-3.693-8.635-8.419-12.246-15.729C46.379,62.814,41.532,67.54,37.743,71.233z\" /></g><g display=\"none\"><g display=\"inline\"><path d=\"M79.839,79.279h10.223v-4.418L100,84.805l-9.938,9.945v-4.418H65.902C71.252,87.594,75.977,83.822,79.839,79.279z\" /><path d=\"M41.186,21.016c-14.209,2.013-25.159,14.241-25.159,28.987c0,10.114,5.157,19.046,12.971,24.31H13.153    c-5.123-6.766-8.178-15.189-8.178-24.31c0-20.647,15.606-37.713,35.631-40.047l-5.248,5.242L41.186,21.016z\" /><path d=\"M5.532,84.805l-5.521-5.525h45.298c16.14,0,29.282-13.131,29.282-29.276c0-14.451-10.529-26.482-24.307-28.851v3.99    l-9.95-9.944l9.95-9.947V9.99c19.899,2.459,35.358,19.457,35.358,40.013c0,22.237-18.094,40.329-40.333,40.329H0L5.532,84.805z\" /></g></g><g display=\"none\"><g display=\"inline\"><path d=\"M44.426,57.316l9.258,9.255v10.276h10.273l3.012,3.011v10.274h9.867V100h23.163V87.111L57.314,44.424    c5.975-11.451,4.157-25.91-5.459-35.528c-11.861-11.861-31.094-11.861-42.959,0c-11.861,11.865-11.861,31.098,0,42.96    C18.513,61.473,32.975,63.291,44.426,57.316z M18.113,18.114c3.761-3.755,9.851-3.755,13.607,0c3.761,3.759,3.761,9.851,0,13.606    c-3.757,3.759-9.847,3.759-13.607,0C14.359,27.964,14.359,21.873,18.113,18.114z\" /></g></g><g display=\"none\"><g display=\"inline\"><path d=\"M50.001,23.267c-11.727,0-21.229,9.501-21.229,21.224c0,2.919,0.591,5.698,1.656,8.23l0,0l9.56,27.857h19.575l9.67-27.146    c1.268-2.72,1.994-5.742,1.994-8.941C71.228,32.768,61.725,23.267,50.001,23.267z\" /><rect x=\"47.79\" width=\"4.416\" height=\"17.32\" /><rect x=\"23.254\" y=\"11.299\" transform=\"matrix(0.4999 0.8661 -0.8661 0.4999 27.6569 -20.886)\" width=\"17.321\" height=\"4.414\" /><rect x=\"10.015\" y=\"24.536\" transform=\"matrix(-0.8659 -0.5002 0.5002 -0.8659 21.4697 59.2448)\" width=\"17.32\" height=\"4.417\" /><polygon points=\"87.724,20.505 72.725,29.164 74.928,32.989 89.929,24.324   \" /><rect x=\"65.876\" y=\"4.846\" transform=\"matrix(0.8663 0.4995 -0.4995 0.8663 15.8505 -32.2056)\" width=\"4.42\" height=\"17.321\" /><rect x=\"40.714\" y=\"83.219\" width=\"17.323\" height=\"3.835\" /><rect x=\"40.714\" y=\"89.69\" width=\"17.323\" height=\"3.836\" /><rect x=\"43.635\" y=\"96.164\" width=\"11.479\" height=\"3.836\" /></g></g><g display=\"none\"><polygon display=\"inline\" points=\"37.383,23.535 19.355,23.535 37.383,5.507  \" /><path display=\"inline\" d=\"M41.891,1v27.042H14.849V99h70.303V1H41.891z M73.71,85.063H26.289v-5.799H73.71V85.063z M73.71,68.761   H26.289v-5.799H73.71V68.761z M73.71,52.028H26.289V46.23H73.71V52.028z\" /></g><g display=\"none\"><g display=\"inline\"><path d=\"M80.41,34.472c-15.332-9.239-25.794-11.5-30.109-9.805c-1.785,0.7-3.566,2.992-5.411,6.049    c-1.917,3.172-3.299,7.986-2.865,10.057c0.255,1.21,3.564,9.105,22.279,19.545c12.187,6.795,21.861,8.521,23.553,7.955    c1.721-0.568,4.078-1.847,7.265-6.301C98.068,57.852,99,53.188,99,51.402C99,49.623,92.82,41.95,80.41,34.472z M94.797,52.549    c-1.719,3.059-14.131-1.523-21.77-5.728c-7.643-4.203-23.853-15.219-20.053-19.289c2.672-2.866,13.938,0.764,26.162,8.403    C91.361,43.574,96.518,49.496,94.797,52.549z\" /><path d=\"M48.677,53.545c-2.624,0.997-9.263,2.157-17.522,2.157c-9.201,0-24.491-2.157-24.491-8.403    c0-7.249,22.567-10.217,32.607-9.214c0.096-0.717,0.334-1.767,0.334-1.767s-1.576-0.191-4.677-0.191    c-22.68,0-30.223,6.444-31.799,8.784c-1.576,2.34-2.102,7.399-2.102,10.218c0,2.819-0.61,8.516,3.917,13.467    c5.107,5.584,16.614,7.256,26.02,7.256c9.405,0,16.232-0.764,25.924-5.254c0.56-1.297,0.572-2.695,0.572-3.244    C57.461,62.003,51.686,54.555,48.677,53.545z\" /></g></g><g display=\"none\"><path display=\"inline\" d=\"M90.479,35.714h-2.864L77.364,18.627c-0.644-1.076-2.208-1.96-3.462-1.96H26.099   c-1.261,0-2.822,0.885-3.467,1.96l-10.25,17.087H9.518C4.281,35.714,0,40.002,0,45.238v2.679v23.812h9.518v11.604h14.293V71.729   h52.373v11.604h14.295V71.729H100V47.917v-2.679C100,40.002,95.715,35.714,90.479,35.714z M26.808,21.958h46.384l9.69,16.143   c-4.514,1.35-14.438,3.438-32.624,3.438c-18.292,0-28.457-2.136-33.103-3.507L26.808,21.958z M16.666,59.523   c-3.941,0-7.148-3.196-7.148-7.14c0-3.945,3.207-7.146,7.148-7.146c3.948,0,7.146,3.2,7.146,7.146   C23.812,56.327,20.614,59.523,16.666,59.523z M66.666,60.579H33.331c-0.579,0-1.055-0.471-1.055-1.056   c0-0.587,0.476-1.055,1.055-1.055h33.335c0.578,0,1.056,0.468,1.056,1.055C67.722,60.108,67.244,60.579,66.666,60.579z    M66.666,55.819H33.331c-0.579,0-1.055-0.474-1.055-1.057c0-0.584,0.476-1.059,1.055-1.059h33.335c0.578,0,1.056,0.475,1.056,1.059   C67.722,55.346,67.244,55.819,66.666,55.819z M83.334,59.523c-3.952,0-7.149-3.196-7.149-7.14c0-3.945,3.197-7.146,7.149-7.146   c3.948,0,7.146,3.2,7.146,7.146C90.479,56.327,87.282,59.523,83.334,59.523z\" /></g><g display=\"none\"><g display=\"inline\"><g><path d=\"M77.547,69.98V41.969c-1.656,0.146-3.432,0.279-5.328,0.397v29.553C74.137,71.342,75.92,70.693,77.547,69.98z\" /></g><g><path d=\"M25.553,42.202V71.12c6.612,2.348,15.182,3.769,24.552,3.769c2.221,0,4.393-0.084,6.51-0.235V42.94     c-2.123,0.033-4.293,0.051-6.51,0.051C40.869,42.991,32.359,42.696,25.553,42.202z\" /></g><g><g><path d=\"M17.899,38.676c7.445,0.959,19.451,1.542,32.206,1.542c12.612,0,24.538-0.572,31.993-1.513      c0.545-4.557,2.662-7.591,5.533-7.744C83.752,13.81,68.43,1,50.105,1C31.771,1,16.443,13.823,12.574,30.987      C15.331,31.274,17.363,34.245,17.899,38.676z M66.18,9.963c1.211-1.251,4.48-0.05,7.303,2.68      c2.824,2.731,4.133,5.961,2.922,7.214c-1.209,1.25-4.48,0.049-7.305-2.682C66.277,14.444,64.969,11.214,66.18,9.963z\" /></g></g><g><g><path d=\"M75.035,73.897c-5.184,1.769-11.473,3.025-18.373,3.522c-0.35,0.023-0.691,0.056-1.041,0.075      c-0.248,0.016-0.5,0.022-0.746,0.035c-0.701,0.036-1.404,0.071-2.117,0.092c-0.037,0.001-0.074,0.001-0.109,0.003      c-0.873,0.023-1.756,0.036-2.646,0.037c-0.89-0.001-1.773-0.014-2.646-0.037c-0.036-0.002-0.074-0.002-0.111-0.003      c-0.714-0.021-1.416-0.056-2.117-0.092c-0.247-0.013-0.499-0.02-0.745-0.035c-0.351-0.02-0.693-0.052-1.042-0.075      c-6.901-0.497-13.189-1.754-18.373-3.522c-4-1.395-7.365-3.133-9.927-5.136l-0.309-0.076      c2.482,10.095,9.561,18.531,16.084,23.998c2.366,2.295,4.904,4.15,7.549,5.204c0.179,0.092,0.369,0.205,0.539,0.291      c1.631,0.558,6.367,0.832,11.096,0.821c4.73,0.011,9.464-0.264,11.095-0.821c0.17-0.086,0.361-0.199,0.539-0.291      c2.645-1.054,5.184-2.909,7.549-5.204c6.525-5.467,13.604-13.903,16.086-23.998l-0.311,0.076      C82.398,70.765,79.033,72.503,75.035,73.897z M46.334,91.596c0,0.512-0.414,0.926-0.923,0.926s-0.924-0.414-0.924-0.926v-4.833      c0-0.511,0.415-0.925,0.924-0.925s0.923,0.414,0.923,0.925V91.596z M50.929,92.993c0,0.513-0.415,0.927-0.924,0.927      c-0.51,0-0.924-0.414-0.924-0.927v-6.581c0-0.509,0.415-0.924,0.924-0.924c0.509,0,0.924,0.415,0.924,0.924V92.993z       M55.523,91.596c0,0.512-0.416,0.926-0.924,0.926c-0.51,0-0.924-0.414-0.924-0.926v-4.833c0-0.511,0.414-0.925,0.924-0.925      c0.508,0,0.924,0.414,0.924,0.925V91.596z\" /></g></g><g><g><path d=\"M87.854,33.705c-1.723,0-3.121,3.312-3.121,7.396c0,0.013,0.002,0.021,0.002,0.034c-0.748,0.118-1.576,0.23-2.451,0.339      v25.958c3.602-2.411,5.688-5.255,5.688-8.307c0,0,3.004-15.327,3.004-18.024C90.975,37.016,89.576,33.705,87.854,33.705z       M88.07,41.508c-0.334,0-0.605-0.776-0.605-1.734s0.271-1.733,0.605-1.733c0.336,0,0.607,0.776,0.607,1.733      S88.406,41.508,88.07,41.508z\" /></g></g><g><g><path d=\"M20.352,68.867V41.75c-1.918-0.199-3.635-0.415-5.085-0.647c0-0.001,0-0.001,0-0.001c0-4.084-1.398-7.396-3.121-7.396      c-1.723,0-3.12,3.312-3.12,7.396c0,3.14,3.213,18.024,3.213,18.024C12.239,62.805,15.276,66.186,20.352,68.867z M11.882,41.508      c-0.334,0-0.606-0.776-0.606-1.734s0.272-1.733,0.606-1.733s0.607,0.776,0.607,1.733S12.216,41.508,11.882,41.508z\" /></g></g></g></g><g display=\"none\"><g display=\"inline\"><path d=\"M70.002,0H30c-3.684,0-6.666,2.981-6.666,6.667v86.667c0,3.686,2.981,6.667,6.666,6.667h40    c3.685,0,6.666-2.981,6.666-6.667V6.667C76.668,2.981,73.687,0,70.002,0z M43.229,6.042h13.542c1.211,0,2.188,0.983,2.188,2.188    c0,1.211-0.977,2.188-2.188,2.188H43.229c-1.211,0-2.188-0.977-2.188-2.188C41.042,7.024,42.019,6.042,43.229,6.042z     M50.001,93.743c-2.982,0-5.404-2.422-5.404-5.41c0-2.981,2.421-5.403,5.404-5.403s5.404,2.422,5.404,5.403    C55.405,91.321,52.983,93.743,50.001,93.743z M69.663,78.334H30.338v-62.5h39.323v62.5H69.663z\" /></g></g><g display=\"none\"><g display=\"inline\"><path d=\"M72.411,3.139c-1.412-1.171-3.168-1.711-4.703-2.084C64.725,0.328,53.238,0,50.161,0h-0.322    c-3.077,0-14.562,0.328-17.546,1.055c-1.536,0.373-3.295,0.913-4.702,2.084c-1.708,1.417-2.573,3.5-2.573,6.199v81.593    c0,5.494,4.404,7.077,6.294,7.504C33.398,98.902,38.288,100,49.8,100H50.2c11.512,0,16.402-1.098,18.489-1.565    c1.89-0.427,6.295-2.01,6.295-7.504V9.338C74.983,6.64,74.118,4.556,72.411,3.139z M66.542,5.617c1.321,0,2.392,1.067,2.392,2.395    c0,1.321-1.07,2.396-2.392,2.396s-2.394-1.076-2.394-2.396C64.148,6.685,65.227,5.617,66.542,5.617z M40.745,7.018h17.674    c0.58,0,1.038,0.462,1.038,1.035s-0.458,1.035-1.038,1.035H40.745c-0.579,0-1.038-0.465-1.038-1.035    C39.708,7.48,40.167,7.018,40.745,7.018z M53.923,94.332c-1.001,0.241-3.073,0.271-3.974,0.271c-0.107,0-0.197-0.003-0.265-0.003    s-0.161,0.003-0.266,0.003c-0.897,0-2.973-0.029-3.975-0.271c-1.345-0.326-1.762-1.825-1.762-2.335c0-0.357,0-1.304,1.432-1.304    h4.41h0.322h4.41c1.43,0,1.43,0.946,1.43,1.304C55.685,92.507,55.269,94.006,53.923,94.332z M68.634,86.117h-37.54V14.056H68.63    v72.062H68.634z\" /></g></g><g display=\"none\"><path display=\"inline\" d=\"M67.951,28.871v22.05l-22.052-22.05v25.746h-7.043V0h-9.231v54.616h-7.047V0h-9.23v54.616H6.304V100   h87.384V54.616h0.008L67.951,28.871z M89.581,65.962H75.942v-7.239h13.639V65.962z M54.096,70.064h13.642v7.243H54.096V70.064z    M45.892,77.308H32.253v-7.243h13.638V77.308z M54.096,65.962v-7.239h13.642v7.239H54.096z M45.892,58.723v7.239H32.253v-7.239   H45.892z M24.048,58.723v7.239H10.411v-7.239H24.048z M10.411,70.064h13.638v7.243H10.411V70.064z M75.942,77.308v-7.243h13.639   v7.243H75.942z\" /></g><g display=\"none\"><g display=\"inline\"><path d=\"M12.962,48.147V100h74.076V48.147H12.962z M53.704,76.751v12.137h-7.409V76.751c-2.202-1.288-3.704-3.646-3.704-6.381    c0-4.087,3.313-7.407,7.41-7.407c4.087,0,7.407,3.32,7.407,7.407C57.408,73.104,55.903,75.463,53.704,76.751z\" /><path d=\"M35.18,25.93c0.04-3.1-0.003-14.815,14.813-14.815c14.821,0,14.771,11.762,14.814,14.815v11.11h11.118V25.926    c0,0-0.007-25.926-25.925-25.926C24.077,0,24.07,25.926,24.07,25.926V37.04h11.11V25.93z\" /></g></g></symbol>"
});
var result = __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__);


var symbol = new __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default.a({
  "id": "map",
  "use": "map-usage",
  "viewBox": "0 0 100 100",
  "content": "<symbol viewBox=\"0 0 100 100\" id=\"map\"><g transform=\"translate(0,-952.36218)\"><path d=\"M 50 7 C 34.547861 7 22 19.54786 22 35 C 22 40.57041 23.638151 45.76226 26.4375 50.125 L 41.8125 74.09375 C 40.231164 74.53008 38.773343 75.075874 37.5 75.75 C 34.237716 77.4771 32 80.0043 32 83 C 32 85.9957 34.237716 88.5229 37.5 90.25 C 40.762284 91.9771 45.162521 93 50 93 C 54.837479 93 59.237716 91.9771 62.5 90.25 C 65.762284 88.5229 68 85.9957 68 83 C 68 80.0043 65.762284 77.4771 62.5 75.75 C 61.230445 75.077879 59.763012 74.531175 58.1875 74.09375 L 73.5625 50.125 C 76.361854 45.76236 78 40.57042 78 35 C 78 19.54786 65.452139 7 50 7 z M 50 9 C 64.371261 9 76 20.62874 76 35 C 76 40.17818 74.476246 44.9774 71.875 49.03125 L 50 83.125 L 28.125 49.03125 C 25.523749 44.9773 24 40.17819 24 35 C 24 20.62874 35.628739 9 50 9 z M 50 24 C 43.9367 24 39 28.9368 39 35 C 39 41.0632 43.9367 46 50 46 C 56.0633 46 61 41.0632 61 35 C 61 28.9368 56.0633 24 50 24 z M 50 26 C 54.9824 26 59 30.0176 59 35 C 59 39.9824 54.9824 44 50 44 C 45.0176 44 41 39.9824 41 35 C 41 30.0176 45.0176 26 50 26 z M 42.96875 75.875 L 49.15625 85.53125 A 1.0001 1.0001 0 0 0 50.84375 85.53125 L 57.03125 75.875 C 58.732044 76.302949 60.27775 76.851118 61.5625 77.53125 C 64.453006 79.06155 66 81.0251 66 83 C 66 84.9748 64.453006 86.93855 61.5625 88.46875 C 58.671994 89.99905 54.55136 91 50 91 C 45.44864 91 41.328006 89.99905 38.4375 88.46875 C 35.546994 86.93855 34 84.9748 34 83 C 34 81.0251 35.546994 79.06155 38.4375 77.53125 C 39.723065 76.850687 41.266195 76.303105 42.96875 75.875 z \" transform=\"translate(0,952.36218)\" /></g></symbol>"
});
var result = __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__);


var symbol = new __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default.a({
  "id": "pencil",
  "use": "pencil-usage",
  "viewBox": "0 0 100 100",
  "content": "<symbol viewBox=\"0 0 100 100\" id=\"pencil\"><g><path d=\"M88.5,23.6L76.4,11.5c-1-1-2.3-1.5-3.7-1.5c-1.4,0-2.7,0.5-3.7,1.5l-8,8l19.5,19.5l8-8C90.5,29,90.5,25.7,88.5,23.6z    M86.4,29l-6,6L65,19.5l6-6c0.9-0.9,2.5-0.9,3.4,0l12.1,12.1C87.4,26.6,87.4,28.1,86.4,29z\" /><path d=\"M55.1,25.4L11.9,68.6c-0.7,0.7-1.1,1.6-1.1,2.6l-0.7,16c0,0.8,0.2,1.5,0.8,2c0.5,0.5,1.2,0.8,1.9,0.8c0,0,0.1,0,0.1,0   l16-0.7c1,0,1.9-0.5,2.6-1.1l43.2-43.2L55.1,25.4z M62.7,37L21.9,77.9l-7.6-7.6l40.8-40.8L62.7,37z M13.5,73.6l12.9,12.9l-13.5,0.6   L13.5,73.6z M29.7,85.7l-5.8-5.8l40.8-40.8l5.8,5.8L29.7,85.7z\" /></g></symbol>"
});
var result = __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__);


var symbol = new __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default.a({
  "id": "review",
  "use": "review-usage",
  "viewBox": "0 0 100 100",
  "content": "<symbol viewBox=\"0 0 100 100\" id=\"review\"><title>Artboard</title><desc>Created with Sketch.</desc><g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"><g stroke=\"#ffffff\" stroke-width=\"4.5\"><g transform=\"translate(5.000000, 10.000000)\"><path d=\"M82.7031209,0.82 L7.70136256,0.82 C3.55882358,0.82 0.204,4.17834017 0.204,8.32087915 L0.204,57.0924182 C0.204,61.2349572 3.56234017,64.5932974 7.70136256,64.5932974 L60.3376303,64.5932974 L75.1987251,79.4543922 L75.1987251,64.5932974 L82.7031209,64.5932974 C86.8456598,64.5932974 90.204,61.2349572 90.204,57.0924182 L90.204,8.32087915 C90.204,4.17834017 86.8456598,0.82 82.7031209,0.82 L82.7031209,0.82 Z M30.5556587,36.467638 C28.4843892,36.467638 26.8069774,34.7902262 26.8069774,32.7189567 C26.8069774,30.6476873 28.4843892,28.9702755 30.5556587,28.9702755 C32.6269281,28.9702755 34.3043399,30.6512038 34.3043399,32.7189567 C34.3043399,34.7867096 32.6269281,36.467638 30.5556587,36.467638 L30.5556587,36.467638 Z M45.2022417,36.467638 C43.1309722,36.467638 41.4535604,34.7902262 41.4535604,32.7189567 C41.4535604,30.6476873 43.1309722,28.9702755 45.2022417,28.9702755 C47.2735112,28.9702755 48.950923,30.6512038 48.950923,32.7189567 C48.950923,34.7867096 47.2735112,36.467638 45.2022417,36.467638 L45.2022417,36.467638 Z M60.2004834,36.467638 C58.1292139,36.467638 56.4518021,34.7902262 56.4518021,32.7189567 C56.4518021,30.6476873 58.1292139,28.9702755 60.2004834,28.9702755 C62.2717529,28.9702755 63.9491647,30.6512038 63.9491647,32.7189567 C63.9491647,34.7867096 62.2717529,36.467638 60.2004834,36.467638 L60.2004834,36.467638 Z\" /></g></g></g></symbol>"
});
var result = __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__);


var symbol = new __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default.a({
  "id": "store",
  "use": "store-usage",
  "viewBox": "0 0 512 512",
  "content": "<symbol viewBox=\"0 0 512 512\" id=\"store\"><g><path d=\"M469,493.6V188c35.5-10.9,43.7-45,37.7-68.9L475.3,2H36.7L5.2,119.3C-0.7,143,7.9,177.1,43,188v305.6H2V510h508v-16.4H469z    M452.6,174.1c-22.6,0-41-18.4-41-41v-32.8h73.1l6.2,22.9C496.7,144,483.9,174.1,452.6,174.1z M116.7,100.3h81.9v32.8   c0,22.6-18.4,41-41,41c-22.6,0-41-18.4-41-41V100.3z M215,100.3H297v32.8c0,22.6-18.4,41-41,41c-22.6,0-41-18.4-41-41V100.3z    M313.4,100.3h81.9v32.8c0,22.6-18.4,41-41,41c-22.6,0-41-18.4-41-41V100.3z M49.3,18.4h413.5l17.6,65.5H31.7L49.3,18.4z    M21.1,123.4l6.2-23.1h73.1v32.8c0,22.6-18.4,41-41,41C28,174.1,15.3,143.1,21.1,123.4z M297,493.6v-213h114.7v213H297z    M452.6,493.6h-24.6V264.2H280.6v229.4H59.4V190.5c20.8,0,39.1-11.2,49.2-27.8c10,16.7,28.3,27.8,49.2,27.8   c20.8,0,39.1-11.2,49.2-27.8c10,16.7,28.3,27.8,49.2,27.8c20.8,0,39.1-11.2,49.2-27.8c10,16.7,28.3,27.8,49.2,27.8   c20.8,0,39.1-11.2,49.2-27.8c10,16.7,28.3,27.8,49.2,27.8V493.6z\" /><path d=\"M83.9,469h163.9V305.2H83.9V469z M100.3,395.3h57.4v57.4h-57.4V395.3z M174.1,452.6v-57.4h57.4v57.4H174.1z M231.4,378.9   h-57.4v-57.4h57.4V378.9z M157.7,321.5v57.4h-57.4v-57.4H157.7z\" /><rect x=\"165.9\" y=\"231.4\" width=\"16.4\" height=\"16.4\" /><rect x=\"133.1\" y=\"231.4\" width=\"16.4\" height=\"16.4\" /><rect x=\"198.6\" y=\"231.4\" width=\"16.4\" height=\"16.4\" /></g></symbol>"
});
var result = __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__);


var symbol = new __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default.a({
  "id": "store2",
  "use": "store2-usage",
  "viewBox": "0 0 73 73",
  "content": "<symbol viewBox=\"0 0 73 73\" id=\"store2\"><g><path d=\"M72.5,14.3c0-0.6-0.3-1.2-0.8-1.6L55.4,0.9c-0.3-0.2-0.8-0.4-1.2-0.4H18.7c-0.4,0-0.8,0.1-1.2,0.4L1.3,12.7   c-0.5,0.4-0.8,1-0.8,1.6c0,0,0,7.2,0,7.2c0,1.8,0.6,3.5,1.7,4.8v44.2c0,1.1,0.9,2,2,2h64.6c1.1,0,2-0.9,2-2V26.3   c1.1-1.3,1.7-3,1.7-4.8C72.5,21.5,72.5,14.3,72.5,14.3z M53.6,4.5l10.8,7.8H60l-7.2-7.8H53.6z M57.2,16.3v5.2c0,2-1.6,3.7-3.7,3.7   c-2,0-3.7-1.6-3.7-3.7v-5.2H57.2z M47.5,4.5l7.2,7.8h-5.5l-3.6-7.8H47.5z M38.5,4.5h2.6l3.6,7.8h-6.2V4.5z M38.5,16.3h7.3v5.2   c0,2-1.6,3.7-3.7,3.7c-2,0-3.7-1.6-3.7-3.7V16.3z M31.9,4.5h2.6v7.8h-6.2L31.9,4.5z M34.5,16.3v5.2c0,2-1.6,3.7-3.7,3.7   c-2,0-3.7-1.6-3.7-3.7v-5.2H34.5z M25.5,4.5h1.9l-3.6,7.8h-5.5L25.5,4.5z M23.2,16.3v5.2c0,2-1.6,3.7-3.7,3.7c-2,0-3.7-1.6-3.7-3.7   v-5.2H23.2z M19.4,4.5h0.7L13,12.3H8.6L19.4,4.5z M4.5,21.5v-5.2h7.3v5.2c0,2-1.6,3.7-3.7,3.7C6.1,25.2,4.5,23.5,4.5,21.5z    M31.9,68.5H15.4V36h16.5V68.5z M66.8,68.5H35.9V34c0-1.1-0.9-2-2-2H13.4c-1.1,0-2,0.9-2,2v34.5H6.2V28.9c0.6,0.2,1.3,0.3,2,0.3   c2.2,0,4.3-1,5.7-2.5c1.4,1.5,3.4,2.5,5.7,2.5c2.2,0,4.3-1,5.7-2.5c1.4,1.5,3.4,2.5,5.7,2.5s4.3-1,5.7-2.5c1.4,1.5,3.4,2.5,5.7,2.5   c2.2,0,4.3-1,5.7-2.5c1.4,1.5,3.4,2.5,5.7,2.5c2.2,0,4.3-1,5.7-2.5c1.4,1.5,3.4,2.5,5.7,2.5c0.7,0,1.3-0.1,2-0.3V68.5z M68.5,21.5   c0,2-1.6,3.7-3.7,3.7c-2,0-3.7-1.6-3.7-3.7v-5.2h7.3V21.5z\" /><path d=\"M60.6,37.4H42.4c-1.1,0-2,0.9-2,2v15.2c0,1.1,0.9,2,2,2h18.2c1.1,0,2-0.9,2-2V39.4C62.6,38.3,61.7,37.4,60.6,37.4z    M58.6,52.6H44.4V41.4h14.2V52.6z\" /></g></symbol>"
});
var result = __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__);


var symbol = new __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default.a({
  "id": "tag",
  "use": "tag-usage",
  "viewBox": "0 0 100 100",
  "content": "<symbol viewBox=\"0 0 100 100\" id=\"tag\"><g transform=\"translate(0,-952.36218)\"><path d=\"m 54.8125,7 c -0.18921,0.042608 -0.365332,0.1416772 -0.5,0.28125 l -46,45 C 7.5375676,53.03935 7,54.17005 7,55.53125 c 0,1.2696 0.5135071,2.38845 1.28125,3.15625 l 33,33 C 41.977442,92.3838 42.892757,93 44,93 c 1.153753,0 2.030793,-0.65315 2.6875,-1.28125 l 46,-44 C 92.882438,47.534195 92.997986,47.268435 93,47 L 93,8 C 92.999948,7.4764155 92.523584,7.0000524 92,7 L 55,7 c -0.06232,-0.00587 -0.125184,-0.00587 -0.1875,0 z M 55.375,9 91,9 91,46.5625 45.3125,90.25 C 44.833047,90.7086 44.336967,91 44,91 43.616523,91 43.213258,90.77585 42.71875,90.28125 l -33,-33 C 9.3388329,56.90135 9,56.22075 9,55.53125 9,54.66915 9.2948524,54.0716 9.6875,53.6875 z M 75,17 c -4.406435,0 -8,3.59357 -8,8 0,4.40644 3.593566,8 8,8 4.406435,0 8,-3.59356 8,-8 0,-4.40643 -3.593565,-8 -8,-8 z m 0,2 c 3.325554,0 6,2.67445 6,6 0,3.32555 -2.674445,6 -6,6 -3.325554,0 -6,-2.67445 -6,-6 0,-3.32555 2.674446,-6 6,-6 z\" transform=\"translate(0,952.36218)\" marker=\"none\" visibility=\"visible\" display=\"inline\" overflow=\"visible\" /></g></symbol>"
});
var result = __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__);


var symbol = new __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default.a({
  "id": "top",
  "use": "top-usage",
  "viewBox": "0 0 62 62",
  "content": "<symbol viewBox=\"0 0 62 62\" id=\"top\"><g><g><path d=\"M31,39.1c-1.9,0-3.8-0.5-5.5-1.5C17.2,32.7,12,23.7,12,14V0h38v14c0,9.6-5.2,18.7-13.5,23.6C34.8,38.6,32.9,39.1,31,39.1z     M14,2v12c0,8.9,4.8,17.3,12.5,21.8c2.8,1.6,6.2,1.6,9,0C43.2,31.3,48,23,48,14V2H14z\" /></g><g><path d=\"M43,54H19v-6h24V54z M21,52h20v-2H21V52z\" /></g><g><path d=\"M45,62H17V52h28V62z M19,60h24v-6H19V60z\" /></g><g><path d=\"M35,50h-8V36.2l1.3,0.4c1.8,0.6,3.6,0.6,5.4,0l1.3-0.4V50z M29,48h4v-9.1c-1.3,0.2-2.7,0.2-4,0V48z\" /></g><g><g><path d=\"M19.9,30.7L16.6,29C7.6,24.3,2,15.1,2,5V4h12v10c0,4.8,1.4,9.5,3.9,13.6L19.9,30.7z M4,6c0.3,7.8,4.2,14.9,10.4,19.3     C12.8,21.8,12,17.9,12,14V6H4z\" /></g><g><path d=\"M42.1,30.7l2-3.1C46.6,23.5,48,18.8,48,14V4h12v1c0,10.1-5.6,19.3-14.6,24L42.1,30.7z M50,6v8c0,3.9-0.8,7.8-2.5,11.3     C53.8,20.9,57.7,13.8,58,6H50z\" /></g></g><g><path d=\"M39.3,29.2l-8.3-6l-8.3,6l3.2-9.7l-8.3-6h10.2L31,3.8l3.2,9.7h10.2l-8.3,6L39.3,29.2z M31,20.7l4.5,3.2l-1.7-5.2l4.5-3.2    h-5.5L31,10.2l-1.7,5.2h-5.5l4.5,3.2L26.5,24L31,20.7z\" /></g></g></symbol>"
});
var result = __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwLmJ1bmRsZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBmZGM3NTIwNGZlYTlhN2FiMmNkMiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdmctYmFrZXItcnVudGltZS9icm93c2VyLXN5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3ZnLXNwcml0ZS1sb2FkZXIvcnVudGltZS9icm93c2VyLXNwcml0ZS5idWlsZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9kZWZhdWx0cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYmluZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYWRhcHRlcnMveGhyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9jcmVhdGVFcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9pc0NhbmNlbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWwuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vcHVibGljL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvc3R5bGUvc3R5bGUuc3R5bCIsIndlYnBhY2s6Ly8vcHVibGljL2pzL21vZHVsZXMvYXV0b2NvbXBsZXRlLmpzIiwid2VicGFjazovLy9wdWJsaWMvanMvbW9kdWxlcy90eXBlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYXhpb3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9zZXR0bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2VuaGFuY2VFcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnVpbGRVUkwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3BhcnNlSGVhZGVycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idG9hLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb29raWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9JbnRlcmNlcHRvck1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2Rpc3BhdGNoUmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvdHJhbnNmb3JtRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29tYmluZVVSTHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsVG9rZW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3NwcmVhZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG9tcHVyaWZ5L3NyYy9wdXJpZnkuanMiLCJ3ZWJwYWNrOi8vL3B1YmxpYy9qcy9tb2R1bGVzL21hcC5qcyIsIndlYnBhY2s6Ly8vcHVibGljL2pzL21vZHVsZXMvaGVhcnQuanMiLCJ3ZWJwYWNrOi8vL3B1YmxpYy9qcy9zdmcuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlcy9pY29ucy9hZGQuc3ZnIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZXMvaWNvbnMvY29nLnN2ZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2VzL2ljb25zL2hlYXJ0LnN2ZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2VzL2ljb25zL2xvZ28uc3ZnIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZXMvaWNvbnMvbG9nb3V0LnN2ZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2VzL2ljb25zL21hcC5zdmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlcy9pY29ucy9wZW5jaWwuc3ZnIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZXMvaWNvbnMvcmV2aWV3LnN2ZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2VzL2ljb25zL3N0b3JlLnN2ZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2VzL2ljb25zL3N0b3JlMi5zdmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlcy9pY29ucy90YWcuc3ZnIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZXMvaWNvbnMvdG9wLnN2ZyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxMik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZmRjNzUyMDRmZWE5YTdhYjJjZDIiLCIndXNlIHN0cmljdCc7XG5cbnZhciBiaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2JpbmQnKTtcblxuLypnbG9iYWwgdG9TdHJpbmc6dHJ1ZSovXG5cbi8vIHV0aWxzIGlzIGEgbGlicmFyeSBvZiBnZW5lcmljIGhlbHBlciBmdW5jdGlvbnMgbm9uLXNwZWNpZmljIHRvIGF4aW9zXG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXkodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXIodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEFycmF5QnVmZmVyXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGb3JtRGF0YVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEZvcm1EYXRhLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGb3JtRGF0YSh2YWwpIHtcbiAgcmV0dXJuICh0eXBlb2YgRm9ybURhdGEgIT09ICd1bmRlZmluZWQnKSAmJiAodmFsIGluc3RhbmNlb2YgRm9ybURhdGEpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXJWaWV3KHZhbCkge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcpICYmIChBcnJheUJ1ZmZlci5pc1ZpZXcpKSB7XG4gICAgcmVzdWx0ID0gQXJyYXlCdWZmZXIuaXNWaWV3KHZhbCk7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gKHZhbCkgJiYgKHZhbC5idWZmZXIpICYmICh2YWwuYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJpbmdcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmluZywgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyaW5nKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3N0cmluZyc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBOdW1iZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIE51bWJlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTnVtYmVyKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ251bWJlcic7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgdW5kZWZpbmVkXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHZhbHVlIGlzIHVuZGVmaW5lZCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gT2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gT2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IG51bGwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBEYXRlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBEYXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNEYXRlKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBEYXRlXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGaWxlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGaWxlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGaWxlKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGaWxlXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBCbG9iXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBCbG9iLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNCbG9iKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBCbG9iXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRnVuY3Rpb24sIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyZWFtXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJlYW0sIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N0cmVhbSh2YWwpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHZhbCkgJiYgaXNGdW5jdGlvbih2YWwucGlwZSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVUkxTZWFyY2hQYXJhbXModmFsKSB7XG4gIHJldHVybiB0eXBlb2YgVVJMU2VhcmNoUGFyYW1zICE9PSAndW5kZWZpbmVkJyAmJiB2YWwgaW5zdGFuY2VvZiBVUkxTZWFyY2hQYXJhbXM7XG59XG5cbi8qKlxuICogVHJpbSBleGNlc3Mgd2hpdGVzcGFjZSBvZmYgdGhlIGJlZ2lubmluZyBhbmQgZW5kIG9mIGEgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBUaGUgU3RyaW5nIHRvIHRyaW1cbiAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBTdHJpbmcgZnJlZWQgb2YgZXhjZXNzIHdoaXRlc3BhY2VcbiAqL1xuZnVuY3Rpb24gdHJpbShzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzKi8sICcnKS5yZXBsYWNlKC9cXHMqJC8sICcnKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgd2UncmUgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnRcbiAqXG4gKiBUaGlzIGFsbG93cyBheGlvcyB0byBydW4gaW4gYSB3ZWIgd29ya2VyLCBhbmQgcmVhY3QtbmF0aXZlLlxuICogQm90aCBlbnZpcm9ubWVudHMgc3VwcG9ydCBYTUxIdHRwUmVxdWVzdCwgYnV0IG5vdCBmdWxseSBzdGFuZGFyZCBnbG9iYWxzLlxuICpcbiAqIHdlYiB3b3JrZXJzOlxuICogIHR5cGVvZiB3aW5kb3cgLT4gdW5kZWZpbmVkXG4gKiAgdHlwZW9mIGRvY3VtZW50IC0+IHVuZGVmaW5lZFxuICpcbiAqIHJlYWN0LW5hdGl2ZTpcbiAqICB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAtPiB1bmRlZmluZWRcbiAqL1xuZnVuY3Rpb24gaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmXG4gICAgdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgPT09ICdmdW5jdGlvbidcbiAgKTtcbn1cblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYW4gQXJyYXkgb3IgYW4gT2JqZWN0IGludm9raW5nIGEgZnVuY3Rpb24gZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiBgb2JqYCBpcyBhbiBBcnJheSBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGluZGV4LCBhbmQgY29tcGxldGUgYXJyYXkgZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiAnb2JqJyBpcyBhbiBPYmplY3QgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBrZXksIGFuZCBjb21wbGV0ZSBvYmplY3QgZm9yIGVhY2ggcHJvcGVydHkuXG4gKlxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IG9iaiBUaGUgb2JqZWN0IHRvIGl0ZXJhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBjYWxsYmFjayB0byBpbnZva2UgZm9yIGVhY2ggaXRlbVxuICovXG5mdW5jdGlvbiBmb3JFYWNoKG9iaiwgZm4pIHtcbiAgLy8gRG9uJ3QgYm90aGVyIGlmIG5vIHZhbHVlIHByb3ZpZGVkXG4gIGlmIChvYmogPT09IG51bGwgfHwgdHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBGb3JjZSBhbiBhcnJheSBpZiBub3QgYWxyZWFkeSBzb21ldGhpbmcgaXRlcmFibGVcbiAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnICYmICFpc0FycmF5KG9iaikpIHtcbiAgICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgICBvYmogPSBbb2JqXTtcbiAgfVxuXG4gIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgYXJyYXkgdmFsdWVzXG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBvYmoubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBmbi5jYWxsKG51bGwsIG9ialtpXSwgaSwgb2JqKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIG9iamVjdCBrZXlzXG4gICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgICAgZm4uY2FsbChudWxsLCBvYmpba2V5XSwga2V5LCBvYmopO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEFjY2VwdHMgdmFyYXJncyBleHBlY3RpbmcgZWFjaCBhcmd1bWVudCB0byBiZSBhbiBvYmplY3QsIHRoZW5cbiAqIGltbXV0YWJseSBtZXJnZXMgdGhlIHByb3BlcnRpZXMgb2YgZWFjaCBvYmplY3QgYW5kIHJldHVybnMgcmVzdWx0LlxuICpcbiAqIFdoZW4gbXVsdGlwbGUgb2JqZWN0cyBjb250YWluIHRoZSBzYW1lIGtleSB0aGUgbGF0ZXIgb2JqZWN0IGluXG4gKiB0aGUgYXJndW1lbnRzIGxpc3Qgd2lsbCB0YWtlIHByZWNlZGVuY2UuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiBgYGBqc1xuICogdmFyIHJlc3VsdCA9IG1lcmdlKHtmb286IDEyM30sIHtmb286IDQ1Nn0pO1xuICogY29uc29sZS5sb2cocmVzdWx0LmZvbyk7IC8vIG91dHB1dHMgNDU2XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqMSBPYmplY3QgdG8gbWVyZ2VcbiAqIEByZXR1cm5zIHtPYmplY3R9IFJlc3VsdCBvZiBhbGwgbWVyZ2UgcHJvcGVydGllc1xuICovXG5mdW5jdGlvbiBtZXJnZSgvKiBvYmoxLCBvYmoyLCBvYmozLCAuLi4gKi8pIHtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuICAgIGlmICh0eXBlb2YgcmVzdWx0W2tleV0gPT09ICdvYmplY3QnICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXN1bHRba2V5XSA9IG1lcmdlKHJlc3VsdFtrZXldLCB2YWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRba2V5XSA9IHZhbDtcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBpID0gMCwgbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBmb3JFYWNoKGFyZ3VtZW50c1tpXSwgYXNzaWduVmFsdWUpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRXh0ZW5kcyBvYmplY3QgYSBieSBtdXRhYmx5IGFkZGluZyB0byBpdCB0aGUgcHJvcGVydGllcyBvZiBvYmplY3QgYi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYSBUaGUgb2JqZWN0IHRvIGJlIGV4dGVuZGVkXG4gKiBAcGFyYW0ge09iamVjdH0gYiBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tXG4gKiBAcGFyYW0ge09iamVjdH0gdGhpc0FyZyBUaGUgb2JqZWN0IHRvIGJpbmQgZnVuY3Rpb24gdG9cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHJlc3VsdGluZyB2YWx1ZSBvZiBvYmplY3QgYVxuICovXG5mdW5jdGlvbiBleHRlbmQoYSwgYiwgdGhpc0FyZykge1xuICBmb3JFYWNoKGIsIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHRoaXNBcmcgJiYgdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYVtrZXldID0gYmluZCh2YWwsIHRoaXNBcmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhW2tleV0gPSB2YWw7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpc0FycmF5OiBpc0FycmF5LFxuICBpc0FycmF5QnVmZmVyOiBpc0FycmF5QnVmZmVyLFxuICBpc0Zvcm1EYXRhOiBpc0Zvcm1EYXRhLFxuICBpc0FycmF5QnVmZmVyVmlldzogaXNBcnJheUJ1ZmZlclZpZXcsXG4gIGlzU3RyaW5nOiBpc1N0cmluZyxcbiAgaXNOdW1iZXI6IGlzTnVtYmVyLFxuICBpc09iamVjdDogaXNPYmplY3QsXG4gIGlzVW5kZWZpbmVkOiBpc1VuZGVmaW5lZCxcbiAgaXNEYXRlOiBpc0RhdGUsXG4gIGlzRmlsZTogaXNGaWxlLFxuICBpc0Jsb2I6IGlzQmxvYixcbiAgaXNGdW5jdGlvbjogaXNGdW5jdGlvbixcbiAgaXNTdHJlYW06IGlzU3RyZWFtLFxuICBpc1VSTFNlYXJjaFBhcmFtczogaXNVUkxTZWFyY2hQYXJhbXMsXG4gIGlzU3RhbmRhcmRCcm93c2VyRW52OiBpc1N0YW5kYXJkQnJvd3NlckVudixcbiAgZm9yRWFjaDogZm9yRWFjaCxcbiAgbWVyZ2U6IG1lcmdlLFxuICBleHRlbmQ6IGV4dGVuZCxcbiAgdHJpbTogdHJpbVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuXHR0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6XG5cdHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG5cdChnbG9iYWwuQnJvd3NlclNwcml0ZVN5bWJvbCA9IGZhY3RvcnkoKSk7XG59KHRoaXMsIChmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxudmFyIFNwcml0ZVN5bWJvbCA9IGZ1bmN0aW9uIFNwcml0ZVN5bWJvbChyZWYpIHtcbiAgdmFyIGlkID0gcmVmLmlkO1xuICB2YXIgdmlld0JveCA9IHJlZi52aWV3Qm94O1xuICB2YXIgY29udGVudCA9IHJlZi5jb250ZW50O1xuXG4gIHRoaXMuaWQgPSBpZDtcbiAgdGhpcy52aWV3Qm94ID0gdmlld0JveDtcbiAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbn07XG5cbi8qKlxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5TcHJpdGVTeW1ib2wucHJvdG90eXBlLnN0cmluZ2lmeSA9IGZ1bmN0aW9uIHN0cmluZ2lmeSAoKSB7XG4gIHJldHVybiB0aGlzLmNvbnRlbnQ7XG59O1xuXG4vKipcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuU3ByaXRlU3ltYm9sLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nICgpIHtcbiAgcmV0dXJuIHRoaXMuc3RyaW5naWZ5KCk7XG59O1xuXG5TcHJpdGVTeW1ib2wucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiBkZXN0cm95ICgpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICBbJ2lkJywgJ3ZpZXdCb3gnLCAnY29udGVudCddLmZvckVhY2goZnVuY3Rpb24gKHByb3ApIHsgcmV0dXJuIGRlbGV0ZSB0aGlzJDFbcHJvcF07IH0pO1xufTtcblxudmFyIGFycmF5RnJvbSA9IGZ1bmN0aW9uIChhcnJheUxpa2UpIHtcbiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFycmF5TGlrZSwgMCk7XG59O1xuXG52YXIgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuXG52YXIgYnJvd3NlciA9IHtcbiAgaXNDaHJvbWU6IC9jaHJvbWUvaS50ZXN0KHVhKSxcbiAgaXNGaXJlZm94OiAvZmlyZWZveC9pLnRlc3QodWEpLFxuICBpc0lFOiAvbXNpZS9pLnRlc3QodWEpLFxuICBpc0VkZ2U6IC9lZGdlL2kudGVzdCh1YSlcbn07XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7Kn0gZGF0YVxuICovXG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IFt1cmxdIElmIG5vdCBwcm92aWRlZCAtIGN1cnJlbnQgVVJMIHdpbGwgYmUgdXNlZFxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5cbi8qIGdsb2JhbCBhbmd1bGFyICovXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWVcbiAqL1xuXG52YXIgZGVmYXVsdFNlbGVjdG9yID0gJ2xpbmVhckdyYWRpZW50LCByYWRpYWxHcmFkaWVudCwgcGF0dGVybic7XG5cbi8qKlxuICogQHBhcmFtIHtFbGVtZW50fSBzdmdcbiAqIEBwYXJhbSB7c3RyaW5nfSBbc2VsZWN0b3JdXG4gKiBAcmV0dXJuIHtFbGVtZW50fVxuICovXG52YXIgbW92ZUdyYWRpZW50c091dHNpZGVTeW1ib2wgPSBmdW5jdGlvbiAoc3ZnLCBzZWxlY3Rvcikge1xuICBpZiAoIHNlbGVjdG9yID09PSB2b2lkIDAgKSBzZWxlY3RvciA9IGRlZmF1bHRTZWxlY3RvcjtcblxuICBhcnJheUZyb20oc3ZnLnF1ZXJ5U2VsZWN0b3JBbGwoJ3N5bWJvbCcpKS5mb3JFYWNoKGZ1bmN0aW9uIChzeW1ib2wpIHtcbiAgICBhcnJheUZyb20oc3ltYm9sLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKS5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICBzeW1ib2wucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobm9kZSwgc3ltYm9sKTtcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBzdmc7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7T2JqZWN0fSBhdHRyc1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG52YXIgb2JqZWN0VG9BdHRyc1N0cmluZyA9IGZ1bmN0aW9uIChhdHRycykge1xuICByZXR1cm4gT2JqZWN0LmtleXMoYXR0cnMpLm1hcChmdW5jdGlvbiAoYXR0cikge1xuICAgIHZhciB2YWx1ZSA9IGF0dHJzW2F0dHJdLnRvU3RyaW5nKCkucmVwbGFjZSgvXCIvZywgJyZxdW90OycpO1xuICAgIHJldHVybiAoYXR0ciArIFwiPVxcXCJcIiArIHZhbHVlICsgXCJcXFwiXCIpO1xuICB9KS5qb2luKCcgJyk7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb250ZW50XG4gKiBAcmV0dXJuIHtFbGVtZW50fVxuICovXG52YXIgcGFyc2UgPSBmdW5jdGlvbiAoY29udGVudCkge1xuICB2YXIgaGFzSW1wb3J0Tm9kZSA9ICEhZG9jdW1lbnQuaW1wb3J0Tm9kZTtcbiAgdmFyIGRvYyA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoY29udGVudCwgJ2ltYWdlL3N2Zyt4bWwnKS5kb2N1bWVudEVsZW1lbnQ7XG5cbiAgLyoqXG4gICAqIEZpeCBmb3IgYnJvd3NlciB3aGljaCBhcmUgdGhyb3dpbmcgV3JvbmdEb2N1bWVudEVycm9yXG4gICAqIGlmIHlvdSBpbnNlcnQgYW4gZWxlbWVudCB3aGljaCBpcyBub3QgcGFydCBvZiB0aGUgZG9jdW1lbnRcbiAgICogQHNlZSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83OTg2NTE5LzQ2MjQ0MDNcbiAgICovXG4gIGlmIChoYXNJbXBvcnROb2RlKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmltcG9ydE5vZGUoZG9jLCB0cnVlKTtcbiAgfVxuXG4gIHJldHVybiBkb2M7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7Tm9kZUxpc3R8Tm9kZX0gbm9kZXNcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2Nsb25lPXRydWVdXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cblxudmFyIGNvbW1vbmpzR2xvYmFsID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB7fTtcblxuXG5cblxuXG5mdW5jdGlvbiBjcmVhdGVDb21tb25qc01vZHVsZShmbiwgbW9kdWxlKSB7XG5cdHJldHVybiBtb2R1bGUgPSB7IGV4cG9ydHM6IHt9IH0sIGZuKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMpLCBtb2R1bGUuZXhwb3J0cztcbn1cblxudmFyIG5hbWVzcGFjZXNfMSA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUsIGV4cG9ydHMpIHtcbnZhciBuYW1lc3BhY2VzID0ge1xuICBzdmc6IHtcbiAgICBuYW1lOiAneG1sbnMnLFxuICAgIHVyaTogJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xuICB9LFxuICB4bGluazoge1xuICAgIG5hbWU6ICd4bWxuczp4bGluaycsXG4gICAgdXJpOiAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaydcbiAgfVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gbmFtZXNwYWNlcztcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xufSk7XG5cbi8qKlxuICogTGlzdCBvZiBTVkcgYXR0cmlidXRlcyB0byB1cGRhdGUgdXJsKCkgdGFyZ2V0IGluIHRoZW1cbiAqL1xudmFyIGF0dExpc3QgPSBbXG4gICdjbGlwUGF0aCcsXG4gICdjb2xvclByb2ZpbGUnLFxuICAnc3JjJyxcbiAgJ2N1cnNvcicsXG4gICdmaWxsJyxcbiAgJ2ZpbHRlcicsXG4gICdtYXJrZXInLFxuICAnbWFya2VyU3RhcnQnLFxuICAnbWFya2VyTWlkJyxcbiAgJ21hcmtlckVuZCcsXG4gICdtYXNrJyxcbiAgJ3N0cm9rZScsXG4gICdzdHlsZSdcbl07XG5cbnZhciBhdHRTZWxlY3RvciA9IGF0dExpc3QubWFwKGZ1bmN0aW9uIChhdHRyKSB7IHJldHVybiAoXCJbXCIgKyBhdHRyICsgXCJdXCIpOyB9KS5qb2luKCcsJyk7XG5cbi8qKlxuICogVXBkYXRlIFVSTHMgaW4gc3ZnIGltYWdlIChsaWtlIGBmaWxsPVwidXJsKC4uLilcImApIGFuZCB1cGRhdGUgcmVmZXJlbmNpbmcgZWxlbWVudHNcbiAqIEBwYXJhbSB7RWxlbWVudH0gc3ZnXG4gKiBAcGFyYW0ge05vZGVMaXN0fSByZWZlcmVuY2VzXG4gKiBAcGFyYW0ge3N0cmluZ3xSZWdFeHB9IHN0YXJ0c1dpdGhcbiAqIEBwYXJhbSB7c3RyaW5nfSByZXBsYWNlV2l0aFxuICogQHJldHVybiB7dm9pZH1cbiAqXG4gKiBAZXhhbXBsZVxuICogY29uc3Qgc3ByaXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc3ZnLnNwcml0ZScpO1xuICogY29uc3QgdXNhZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgndXNlJyk7XG4gKiB1cGRhdGVVcmxzKHNwcml0ZSwgdXNhZ2VzLCAnIycsICdwcmVmaXgjJyk7XG4gKi9cblxudmFyIGluZGV4ID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSwgZXhwb3J0cykge1xuKGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XG4gICAgaWYgKHR5cGVvZiB1bmRlZmluZWQgPT09ICdmdW5jdGlvbicgJiYgdW5kZWZpbmVkLmFtZCkge1xuICAgICAgICB1bmRlZmluZWQoZmFjdG9yeSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG4gICAgfVxufShjb21tb25qc0dsb2JhbCwgZnVuY3Rpb24gKCkge1xuXG5mdW5jdGlvbiBpc01lcmdlYWJsZU9iamVjdCh2YWwpIHtcbiAgICB2YXIgbm9uTnVsbE9iamVjdCA9IHZhbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0JztcblxuICAgIHJldHVybiBub25OdWxsT2JqZWN0XG4gICAgICAgICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWwpICE9PSAnW29iamVjdCBSZWdFeHBdJ1xuICAgICAgICAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsKSAhPT0gJ1tvYmplY3QgRGF0ZV0nXG59XG5cbmZ1bmN0aW9uIGVtcHR5VGFyZ2V0KHZhbCkge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHZhbCkgPyBbXSA6IHt9XG59XG5cbmZ1bmN0aW9uIGNsb25lSWZOZWNlc3NhcnkodmFsdWUsIG9wdGlvbnNBcmd1bWVudCkge1xuICAgIHZhciBjbG9uZSA9IG9wdGlvbnNBcmd1bWVudCAmJiBvcHRpb25zQXJndW1lbnQuY2xvbmUgPT09IHRydWU7XG4gICAgcmV0dXJuIChjbG9uZSAmJiBpc01lcmdlYWJsZU9iamVjdCh2YWx1ZSkpID8gZGVlcG1lcmdlKGVtcHR5VGFyZ2V0KHZhbHVlKSwgdmFsdWUsIG9wdGlvbnNBcmd1bWVudCkgOiB2YWx1ZVxufVxuXG5mdW5jdGlvbiBkZWZhdWx0QXJyYXlNZXJnZSh0YXJnZXQsIHNvdXJjZSwgb3B0aW9uc0FyZ3VtZW50KSB7XG4gICAgdmFyIGRlc3RpbmF0aW9uID0gdGFyZ2V0LnNsaWNlKCk7XG4gICAgc291cmNlLmZvckVhY2goZnVuY3Rpb24oZSwgaSkge1xuICAgICAgICBpZiAodHlwZW9mIGRlc3RpbmF0aW9uW2ldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgZGVzdGluYXRpb25baV0gPSBjbG9uZUlmTmVjZXNzYXJ5KGUsIG9wdGlvbnNBcmd1bWVudCk7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNNZXJnZWFibGVPYmplY3QoZSkpIHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uW2ldID0gZGVlcG1lcmdlKHRhcmdldFtpXSwgZSwgb3B0aW9uc0FyZ3VtZW50KTtcbiAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQuaW5kZXhPZihlKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uLnB1c2goY2xvbmVJZk5lY2Vzc2FyeShlLCBvcHRpb25zQXJndW1lbnQpKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBkZXN0aW5hdGlvblxufVxuXG5mdW5jdGlvbiBtZXJnZU9iamVjdCh0YXJnZXQsIHNvdXJjZSwgb3B0aW9uc0FyZ3VtZW50KSB7XG4gICAgdmFyIGRlc3RpbmF0aW9uID0ge307XG4gICAgaWYgKGlzTWVyZ2VhYmxlT2JqZWN0KHRhcmdldCkpIHtcbiAgICAgICAgT2JqZWN0LmtleXModGFyZ2V0KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uW2tleV0gPSBjbG9uZUlmTmVjZXNzYXJ5KHRhcmdldFtrZXldLCBvcHRpb25zQXJndW1lbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgaWYgKCFpc01lcmdlYWJsZU9iamVjdChzb3VyY2Vba2V5XSkgfHwgIXRhcmdldFtrZXldKSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbltrZXldID0gY2xvbmVJZk5lY2Vzc2FyeShzb3VyY2Vba2V5XSwgb3B0aW9uc0FyZ3VtZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uW2tleV0gPSBkZWVwbWVyZ2UodGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldLCBvcHRpb25zQXJndW1lbnQpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGRlc3RpbmF0aW9uXG59XG5cbmZ1bmN0aW9uIGRlZXBtZXJnZSh0YXJnZXQsIHNvdXJjZSwgb3B0aW9uc0FyZ3VtZW50KSB7XG4gICAgdmFyIGFycmF5ID0gQXJyYXkuaXNBcnJheShzb3VyY2UpO1xuICAgIHZhciBvcHRpb25zID0gb3B0aW9uc0FyZ3VtZW50IHx8IHsgYXJyYXlNZXJnZTogZGVmYXVsdEFycmF5TWVyZ2UgfTtcbiAgICB2YXIgYXJyYXlNZXJnZSA9IG9wdGlvbnMuYXJyYXlNZXJnZSB8fCBkZWZhdWx0QXJyYXlNZXJnZTtcblxuICAgIGlmIChhcnJheSkge1xuICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh0YXJnZXQpID8gYXJyYXlNZXJnZSh0YXJnZXQsIHNvdXJjZSwgb3B0aW9uc0FyZ3VtZW50KSA6IGNsb25lSWZOZWNlc3Nhcnkoc291cmNlLCBvcHRpb25zQXJndW1lbnQpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG1lcmdlT2JqZWN0KHRhcmdldCwgc291cmNlLCBvcHRpb25zQXJndW1lbnQpXG4gICAgfVxufVxuXG5kZWVwbWVyZ2UuYWxsID0gZnVuY3Rpb24gZGVlcG1lcmdlQWxsKGFycmF5LCBvcHRpb25zQXJndW1lbnQpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXkpIHx8IGFycmF5Lmxlbmd0aCA8IDIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdmaXJzdCBhcmd1bWVudCBzaG91bGQgYmUgYW4gYXJyYXkgd2l0aCBhdCBsZWFzdCB0d28gZWxlbWVudHMnKVxuICAgIH1cblxuICAgIC8vIHdlIGFyZSBzdXJlIHRoZXJlIGFyZSBhdCBsZWFzdCAyIHZhbHVlcywgc28gaXQgaXMgc2FmZSB0byBoYXZlIG5vIGluaXRpYWwgdmFsdWVcbiAgICByZXR1cm4gYXJyYXkucmVkdWNlKGZ1bmN0aW9uKHByZXYsIG5leHQpIHtcbiAgICAgICAgcmV0dXJuIGRlZXBtZXJnZShwcmV2LCBuZXh0LCBvcHRpb25zQXJndW1lbnQpXG4gICAgfSlcbn07XG5cbnJldHVybiBkZWVwbWVyZ2VcblxufSkpO1xufSk7XG5cbnZhciBzdmcgPSBuYW1lc3BhY2VzXzEuc3ZnO1xudmFyIHhsaW5rID0gbmFtZXNwYWNlc18xLnhsaW5rO1xuXG52YXIgZGVmYXVsdEF0dHJzID0ge307XG5kZWZhdWx0QXR0cnNbc3ZnLm5hbWVdID0gc3ZnLnVyaTtcbmRlZmF1bHRBdHRyc1t4bGluay5uYW1lXSA9IHhsaW5rLnVyaTtcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvbnRlbnRdXG4gKiBAcGFyYW0ge09iamVjdH0gW2F0dHJpYnV0ZXNdXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbnZhciB3cmFwSW5TdmdTdHJpbmcgPSBmdW5jdGlvbiAoY29udGVudCwgYXR0cmlidXRlcykge1xuICBpZiAoIGNvbnRlbnQgPT09IHZvaWQgMCApIGNvbnRlbnQgPSAnJztcblxuICB2YXIgYXR0cnMgPSBpbmRleChkZWZhdWx0QXR0cnMsIGF0dHJpYnV0ZXMgfHwge30pO1xuICB2YXIgYXR0cnNSZW5kZXJlZCA9IG9iamVjdFRvQXR0cnNTdHJpbmcoYXR0cnMpO1xuICByZXR1cm4gKFwiPHN2ZyBcIiArIGF0dHJzUmVuZGVyZWQgKyBcIj5cIiArIGNvbnRlbnQgKyBcIjwvc3ZnPlwiKTtcbn07XG5cbnZhciBCcm93c2VyU3ByaXRlU3ltYm9sID0gKGZ1bmN0aW9uIChTcHJpdGVTeW1ib2wkJDEpIHtcbiAgZnVuY3Rpb24gQnJvd3NlclNwcml0ZVN5bWJvbCAoKSB7XG4gICAgU3ByaXRlU3ltYm9sJCQxLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBpZiAoIFNwcml0ZVN5bWJvbCQkMSApIEJyb3dzZXJTcHJpdGVTeW1ib2wuX19wcm90b19fID0gU3ByaXRlU3ltYm9sJCQxO1xuICBCcm93c2VyU3ByaXRlU3ltYm9sLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIFNwcml0ZVN5bWJvbCQkMSAmJiBTcHJpdGVTeW1ib2wkJDEucHJvdG90eXBlICk7XG4gIEJyb3dzZXJTcHJpdGVTeW1ib2wucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQnJvd3NlclNwcml0ZVN5bWJvbDtcblxuICB2YXIgcHJvdG90eXBlQWNjZXNzb3JzID0geyBpc01vdW50ZWQ6IHt9IH07XG5cbiAgcHJvdG90eXBlQWNjZXNzb3JzLmlzTW91bnRlZC5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICEhdGhpcy5ub2RlO1xuICB9O1xuXG4gIEJyb3dzZXJTcHJpdGVTeW1ib2wucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiBkZXN0cm95ICgpIHtcbiAgICBpZiAodGhpcy5pc01vdW50ZWQpIHtcbiAgICAgIHRoaXMudW5tb3VudCgpO1xuICAgIH1cbiAgICBTcHJpdGVTeW1ib2wkJDEucHJvdG90eXBlLmRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtFbGVtZW50fHN0cmluZ30gdGFyZ2V0XG4gICAqIEByZXR1cm4ge0VsZW1lbnR9XG4gICAqL1xuICBCcm93c2VyU3ByaXRlU3ltYm9sLnByb3RvdHlwZS5tb3VudCA9IGZ1bmN0aW9uIG1vdW50ICh0YXJnZXQpIHtcbiAgICBpZiAodGhpcy5pc01vdW50ZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLm5vZGU7XG4gICAgfVxuXG4gICAgdmFyIG1vdW50VGFyZ2V0ID0gdHlwZW9mIHRhcmdldCA9PT0gJ3N0cmluZycgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCkgOiB0YXJnZXQ7XG4gICAgdmFyIG5vZGUgPSB0aGlzLnJlbmRlcigpO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG5cbiAgICBtb3VudFRhcmdldC5hcHBlbmRDaGlsZChub2RlKTtcblxuICAgIC8vIFRPRE8gY2FjaGUgbW92ZWQgbm9kZXMgc29tZXdoZXJlIGFuZCBjbGVhbnVwIG9uIGRlc3Ryb3koKVxuICAgIGlmIChicm93c2VyLmlzRmlyZWZveCkge1xuICAgICAgbW92ZUdyYWRpZW50c091dHNpZGVTeW1ib2wobW91bnRUYXJnZXQpO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtFbGVtZW50fVxuICAgKi9cbiAgQnJvd3NlclNwcml0ZVN5bWJvbC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyICgpIHtcbiAgICB2YXIgY29udGVudCA9IHRoaXMuc3RyaW5naWZ5KCk7XG4gICAgcmV0dXJuIHBhcnNlKHdyYXBJblN2Z1N0cmluZyhjb250ZW50KSkuY2hpbGROb2Rlc1swXTtcbiAgfTtcblxuICBCcm93c2VyU3ByaXRlU3ltYm9sLnByb3RvdHlwZS51bm1vdW50ID0gZnVuY3Rpb24gdW5tb3VudCAoKSB7XG4gICAgdGhpcy5ub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5ub2RlKTtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyggQnJvd3NlclNwcml0ZVN5bWJvbC5wcm90b3R5cGUsIHByb3RvdHlwZUFjY2Vzc29ycyApO1xuXG4gIHJldHVybiBCcm93c2VyU3ByaXRlU3ltYm9sO1xufShTcHJpdGVTeW1ib2wpKTtcblxucmV0dXJuIEJyb3dzZXJTcHJpdGVTeW1ib2w7XG5cbn0pKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdmctYmFrZXItcnVudGltZS9icm93c2VyLXN5bWJvbC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuXHR0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6XG5cdHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG5cdChnbG9iYWwuQnJvd3NlclNwcml0ZSA9IGZhY3RvcnkoKSk7XG59KHRoaXMsIChmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxudmFyIGNvbW1vbmpzR2xvYmFsID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB7fTtcblxuXG5cblxuXG5mdW5jdGlvbiBjcmVhdGVDb21tb25qc01vZHVsZShmbiwgbW9kdWxlKSB7XG5cdHJldHVybiBtb2R1bGUgPSB7IGV4cG9ydHM6IHt9IH0sIGZuKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMpLCBtb2R1bGUuZXhwb3J0cztcbn1cblxudmFyIGluZGV4ID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSwgZXhwb3J0cykge1xuKGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XG4gICAgaWYgKHR5cGVvZiB1bmRlZmluZWQgPT09ICdmdW5jdGlvbicgJiYgdW5kZWZpbmVkLmFtZCkge1xuICAgICAgICB1bmRlZmluZWQoZmFjdG9yeSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG4gICAgfVxufShjb21tb25qc0dsb2JhbCwgZnVuY3Rpb24gKCkge1xuXG5mdW5jdGlvbiBpc01lcmdlYWJsZU9iamVjdCh2YWwpIHtcbiAgICB2YXIgbm9uTnVsbE9iamVjdCA9IHZhbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0JztcblxuICAgIHJldHVybiBub25OdWxsT2JqZWN0XG4gICAgICAgICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWwpICE9PSAnW29iamVjdCBSZWdFeHBdJ1xuICAgICAgICAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsKSAhPT0gJ1tvYmplY3QgRGF0ZV0nXG59XG5cbmZ1bmN0aW9uIGVtcHR5VGFyZ2V0KHZhbCkge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHZhbCkgPyBbXSA6IHt9XG59XG5cbmZ1bmN0aW9uIGNsb25lSWZOZWNlc3NhcnkodmFsdWUsIG9wdGlvbnNBcmd1bWVudCkge1xuICAgIHZhciBjbG9uZSA9IG9wdGlvbnNBcmd1bWVudCAmJiBvcHRpb25zQXJndW1lbnQuY2xvbmUgPT09IHRydWU7XG4gICAgcmV0dXJuIChjbG9uZSAmJiBpc01lcmdlYWJsZU9iamVjdCh2YWx1ZSkpID8gZGVlcG1lcmdlKGVtcHR5VGFyZ2V0KHZhbHVlKSwgdmFsdWUsIG9wdGlvbnNBcmd1bWVudCkgOiB2YWx1ZVxufVxuXG5mdW5jdGlvbiBkZWZhdWx0QXJyYXlNZXJnZSh0YXJnZXQsIHNvdXJjZSwgb3B0aW9uc0FyZ3VtZW50KSB7XG4gICAgdmFyIGRlc3RpbmF0aW9uID0gdGFyZ2V0LnNsaWNlKCk7XG4gICAgc291cmNlLmZvckVhY2goZnVuY3Rpb24oZSwgaSkge1xuICAgICAgICBpZiAodHlwZW9mIGRlc3RpbmF0aW9uW2ldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgZGVzdGluYXRpb25baV0gPSBjbG9uZUlmTmVjZXNzYXJ5KGUsIG9wdGlvbnNBcmd1bWVudCk7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNNZXJnZWFibGVPYmplY3QoZSkpIHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uW2ldID0gZGVlcG1lcmdlKHRhcmdldFtpXSwgZSwgb3B0aW9uc0FyZ3VtZW50KTtcbiAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQuaW5kZXhPZihlKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uLnB1c2goY2xvbmVJZk5lY2Vzc2FyeShlLCBvcHRpb25zQXJndW1lbnQpKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBkZXN0aW5hdGlvblxufVxuXG5mdW5jdGlvbiBtZXJnZU9iamVjdCh0YXJnZXQsIHNvdXJjZSwgb3B0aW9uc0FyZ3VtZW50KSB7XG4gICAgdmFyIGRlc3RpbmF0aW9uID0ge307XG4gICAgaWYgKGlzTWVyZ2VhYmxlT2JqZWN0KHRhcmdldCkpIHtcbiAgICAgICAgT2JqZWN0LmtleXModGFyZ2V0KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uW2tleV0gPSBjbG9uZUlmTmVjZXNzYXJ5KHRhcmdldFtrZXldLCBvcHRpb25zQXJndW1lbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgaWYgKCFpc01lcmdlYWJsZU9iamVjdChzb3VyY2Vba2V5XSkgfHwgIXRhcmdldFtrZXldKSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbltrZXldID0gY2xvbmVJZk5lY2Vzc2FyeShzb3VyY2Vba2V5XSwgb3B0aW9uc0FyZ3VtZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uW2tleV0gPSBkZWVwbWVyZ2UodGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldLCBvcHRpb25zQXJndW1lbnQpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGRlc3RpbmF0aW9uXG59XG5cbmZ1bmN0aW9uIGRlZXBtZXJnZSh0YXJnZXQsIHNvdXJjZSwgb3B0aW9uc0FyZ3VtZW50KSB7XG4gICAgdmFyIGFycmF5ID0gQXJyYXkuaXNBcnJheShzb3VyY2UpO1xuICAgIHZhciBvcHRpb25zID0gb3B0aW9uc0FyZ3VtZW50IHx8IHsgYXJyYXlNZXJnZTogZGVmYXVsdEFycmF5TWVyZ2UgfTtcbiAgICB2YXIgYXJyYXlNZXJnZSA9IG9wdGlvbnMuYXJyYXlNZXJnZSB8fCBkZWZhdWx0QXJyYXlNZXJnZTtcblxuICAgIGlmIChhcnJheSkge1xuICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh0YXJnZXQpID8gYXJyYXlNZXJnZSh0YXJnZXQsIHNvdXJjZSwgb3B0aW9uc0FyZ3VtZW50KSA6IGNsb25lSWZOZWNlc3Nhcnkoc291cmNlLCBvcHRpb25zQXJndW1lbnQpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG1lcmdlT2JqZWN0KHRhcmdldCwgc291cmNlLCBvcHRpb25zQXJndW1lbnQpXG4gICAgfVxufVxuXG5kZWVwbWVyZ2UuYWxsID0gZnVuY3Rpb24gZGVlcG1lcmdlQWxsKGFycmF5LCBvcHRpb25zQXJndW1lbnQpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXkpIHx8IGFycmF5Lmxlbmd0aCA8IDIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdmaXJzdCBhcmd1bWVudCBzaG91bGQgYmUgYW4gYXJyYXkgd2l0aCBhdCBsZWFzdCB0d28gZWxlbWVudHMnKVxuICAgIH1cblxuICAgIC8vIHdlIGFyZSBzdXJlIHRoZXJlIGFyZSBhdCBsZWFzdCAyIHZhbHVlcywgc28gaXQgaXMgc2FmZSB0byBoYXZlIG5vIGluaXRpYWwgdmFsdWVcbiAgICByZXR1cm4gYXJyYXkucmVkdWNlKGZ1bmN0aW9uKHByZXYsIG5leHQpIHtcbiAgICAgICAgcmV0dXJuIGRlZXBtZXJnZShwcmV2LCBuZXh0LCBvcHRpb25zQXJndW1lbnQpXG4gICAgfSlcbn07XG5cbnJldHVybiBkZWVwbWVyZ2VcblxufSkpO1xufSk7XG5cbi8vICAgICAgXG4vLyBBbiBldmVudCBoYW5kbGVyIGNhbiB0YWtlIGFuIG9wdGlvbmFsIGV2ZW50IGFyZ3VtZW50XG4vLyBhbmQgc2hvdWxkIG5vdCByZXR1cm4gYSB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4vLyBBbiBhcnJheSBvZiBhbGwgY3VycmVudGx5IHJlZ2lzdGVyZWQgZXZlbnQgaGFuZGxlcnMgZm9yIGEgdHlwZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbi8vIEEgbWFwIG9mIGV2ZW50IHR5cGVzIGFuZCB0aGVpciBjb3JyZXNwb25kaW5nIGV2ZW50IGhhbmRsZXJzLlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBcblxuLyoqIE1pdHQ6IFRpbnkgKH4yMDBiKSBmdW5jdGlvbmFsIGV2ZW50IGVtaXR0ZXIgLyBwdWJzdWIuXG4gKiAgQG5hbWUgbWl0dFxuICogIEByZXR1cm5zIHtNaXR0fVxuICovXG5mdW5jdGlvbiBtaXR0KGFsbCAgICAgICAgICAgICAgICAgKSB7XG5cdGFsbCA9IGFsbCB8fCBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG5cdHJldHVybiB7XG5cdFx0LyoqXG5cdFx0ICogUmVnaXN0ZXIgYW4gZXZlbnQgaGFuZGxlciBmb3IgdGhlIGdpdmVuIHR5cGUuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0gIHtTdHJpbmd9IHR5cGVcdFR5cGUgb2YgZXZlbnQgdG8gbGlzdGVuIGZvciwgb3IgYFwiKlwiYCBmb3IgYWxsIGV2ZW50c1xuXHRcdCAqIEBwYXJhbSAge0Z1bmN0aW9ufSBoYW5kbGVyIEZ1bmN0aW9uIHRvIGNhbGwgaW4gcmVzcG9uc2UgdG8gZ2l2ZW4gZXZlbnRcblx0XHQgKiBAbWVtYmVyT2YgbWl0dFxuXHRcdCAqL1xuXHRcdG9uOiBmdW5jdGlvbiBvbih0eXBlICAgICAgICAsIGhhbmRsZXIgICAgICAgICAgICAgICkge1xuXHRcdFx0KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpO1xuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBSZW1vdmUgYW4gZXZlbnQgaGFuZGxlciBmb3IgdGhlIGdpdmVuIHR5cGUuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0gIHtTdHJpbmd9IHR5cGVcdFR5cGUgb2YgZXZlbnQgdG8gdW5yZWdpc3RlciBgaGFuZGxlcmAgZnJvbSwgb3IgYFwiKlwiYFxuXHRcdCAqIEBwYXJhbSAge0Z1bmN0aW9ufSBoYW5kbGVyIEhhbmRsZXIgZnVuY3Rpb24gdG8gcmVtb3ZlXG5cdFx0ICogQG1lbWJlck9mIG1pdHRcblx0XHQgKi9cblx0XHRvZmY6IGZ1bmN0aW9uIG9mZih0eXBlICAgICAgICAsIGhhbmRsZXIgICAgICAgICAgICAgICkge1xuXHRcdFx0aWYgKGFsbFt0eXBlXSkge1xuXHRcdFx0XHRhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogSW52b2tlIGFsbCBoYW5kbGVycyBmb3IgdGhlIGdpdmVuIHR5cGUuXG5cdFx0ICogSWYgcHJlc2VudCwgYFwiKlwiYCBoYW5kbGVycyBhcmUgaW52b2tlZCBhZnRlciB0eXBlLW1hdGNoZWQgaGFuZGxlcnMuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge1N0cmluZ30gdHlwZSAgVGhlIGV2ZW50IHR5cGUgdG8gaW52b2tlXG5cdFx0ICogQHBhcmFtIHtBbnl9IFtldnRdICBBbnkgdmFsdWUgKG9iamVjdCBpcyByZWNvbW1lbmRlZCBhbmQgcG93ZXJmdWwpLCBwYXNzZWQgdG8gZWFjaCBoYW5kbGVyXG5cdFx0ICogQG1lbWJlcm9mIG1pdHRcblx0XHQgKi9cblx0XHRlbWl0OiBmdW5jdGlvbiBlbWl0KHR5cGUgICAgICAgICwgZXZ0ICAgICApIHtcblx0XHRcdChhbGxbdHlwZV0gfHwgW10pLm1hcChmdW5jdGlvbiAoaGFuZGxlcikgeyBoYW5kbGVyKGV2dCk7IH0pO1xuXHRcdFx0KGFsbFsnKiddIHx8IFtdKS5tYXAoZnVuY3Rpb24gKGhhbmRsZXIpIHsgaGFuZGxlcih0eXBlLCBldnQpOyB9KTtcblx0XHR9XG5cdH07XG59XG5cbnZhciBuYW1lc3BhY2VzXzEgPSBjcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbiAobW9kdWxlLCBleHBvcnRzKSB7XG52YXIgbmFtZXNwYWNlcyA9IHtcbiAgc3ZnOiB7XG4gICAgbmFtZTogJ3htbG5zJyxcbiAgICB1cmk6ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcbiAgfSxcbiAgeGxpbms6IHtcbiAgICBuYW1lOiAneG1sbnM6eGxpbmsnLFxuICAgIHVyaTogJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnXG4gIH1cbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IG5hbWVzcGFjZXM7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbn0pO1xuXG4vKipcbiAqIEBwYXJhbSB7T2JqZWN0fSBhdHRyc1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG52YXIgb2JqZWN0VG9BdHRyc1N0cmluZyA9IGZ1bmN0aW9uIChhdHRycykge1xuICByZXR1cm4gT2JqZWN0LmtleXMoYXR0cnMpLm1hcChmdW5jdGlvbiAoYXR0cikge1xuICAgIHZhciB2YWx1ZSA9IGF0dHJzW2F0dHJdLnRvU3RyaW5nKCkucmVwbGFjZSgvXCIvZywgJyZxdW90OycpO1xuICAgIHJldHVybiAoYXR0ciArIFwiPVxcXCJcIiArIHZhbHVlICsgXCJcXFwiXCIpO1xuICB9KS5qb2luKCcgJyk7XG59O1xuXG52YXIgc3ZnID0gbmFtZXNwYWNlc18xLnN2ZztcbnZhciB4bGluayA9IG5hbWVzcGFjZXNfMS54bGluaztcblxudmFyIGRlZmF1bHRBdHRycyA9IHt9O1xuZGVmYXVsdEF0dHJzW3N2Zy5uYW1lXSA9IHN2Zy51cmk7XG5kZWZhdWx0QXR0cnNbeGxpbmsubmFtZV0gPSB4bGluay51cmk7XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb250ZW50XVxuICogQHBhcmFtIHtPYmplY3R9IFthdHRyaWJ1dGVzXVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG52YXIgd3JhcEluU3ZnU3RyaW5nID0gZnVuY3Rpb24gKGNvbnRlbnQsIGF0dHJpYnV0ZXMpIHtcbiAgaWYgKCBjb250ZW50ID09PSB2b2lkIDAgKSBjb250ZW50ID0gJyc7XG5cbiAgdmFyIGF0dHJzID0gaW5kZXgoZGVmYXVsdEF0dHJzLCBhdHRyaWJ1dGVzIHx8IHt9KTtcbiAgdmFyIGF0dHJzUmVuZGVyZWQgPSBvYmplY3RUb0F0dHJzU3RyaW5nKGF0dHJzKTtcbiAgcmV0dXJuIChcIjxzdmcgXCIgKyBhdHRyc1JlbmRlcmVkICsgXCI+XCIgKyBjb250ZW50ICsgXCI8L3N2Zz5cIik7XG59O1xuXG52YXIgc3ZnJDEgPSBuYW1lc3BhY2VzXzEuc3ZnO1xudmFyIHhsaW5rJDEgPSBuYW1lc3BhY2VzXzEueGxpbms7XG5cbnZhciBkZWZhdWx0Q29uZmlnID0ge1xuICBhdHRyczogKCBvYmogPSB7XG4gICAgc3R5bGU6IFsncG9zaXRpb246IGFic29sdXRlJywgJ3dpZHRoOiAwJywgJ2hlaWdodDogMCddLmpvaW4oJzsgJylcbiAgfSwgb2JqW3N2ZyQxLm5hbWVdID0gc3ZnJDEudXJpLCBvYmpbeGxpbmskMS5uYW1lXSA9IHhsaW5rJDEudXJpLCBvYmogKVxufTtcbnZhciBvYmo7XG5cbnZhciBTcHJpdGUgPSBmdW5jdGlvbiBTcHJpdGUoY29uZmlnKSB7XG4gIHRoaXMuY29uZmlnID0gaW5kZXgoZGVmYXVsdENvbmZpZywgY29uZmlnIHx8IHt9KTtcbiAgdGhpcy5zeW1ib2xzID0gW107XG59O1xuXG4vKipcbiAqIEFkZCBuZXcgc3ltYm9sLiBJZiBzeW1ib2wgd2l0aCB0aGUgc2FtZSBpZCBleGlzdHMgaXQgd2lsbCBiZSByZXBsYWNlZC5cbiAqIEBwYXJhbSB7U3ByaXRlU3ltYm9sfSBzeW1ib2xcbiAqIEByZXR1cm4ge2Jvb2xlYW59IGB0cnVlYCAtIHN5bWJvbCB3YXMgYWRkZWQsIGBmYWxzZWAgLSByZXBsYWNlZFxuICovXG5TcHJpdGUucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIGFkZCAoc3ltYm9sKSB7XG4gIHZhciByZWYgPSB0aGlzO1xuICAgIHZhciBzeW1ib2xzID0gcmVmLnN5bWJvbHM7XG4gIHZhciBleGlzdGluZyA9IHRoaXMuZmluZChzeW1ib2wuaWQpO1xuXG4gIGlmIChleGlzdGluZykge1xuICAgIHN5bWJvbHNbc3ltYm9scy5pbmRleE9mKGV4aXN0aW5nKV0gPSBzeW1ib2w7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3ltYm9scy5wdXNoKHN5bWJvbCk7XG4gIHJldHVybiB0cnVlO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgc3ltYm9sICYgZGVzdHJveSBpdFxuICogQHBhcmFtIHtzdHJpbmd9IGlkXG4gKiBAcmV0dXJuIHtib29sZWFufSBgdHJ1ZWAgLSBzeW1ib2wgd2FzIGZvdW5kICYgc3VjY2Vzc2Z1bGx5IGRlc3Ryb3llZCwgYGZhbHNlYCAtIG90aGVyd2lzZVxuICovXG5TcHJpdGUucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSAoaWQpIHtcbiAgdmFyIHJlZiA9IHRoaXM7XG4gICAgdmFyIHN5bWJvbHMgPSByZWYuc3ltYm9scztcbiAgdmFyIHN5bWJvbCA9IHRoaXMuZmluZChpZCk7XG5cbiAgaWYgKHN5bWJvbCkge1xuICAgIHN5bWJvbHMuc3BsaWNlKHN5bWJvbHMuaW5kZXhPZihzeW1ib2wpLCAxKTtcbiAgICBzeW1ib2wuZGVzdHJveSgpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gaWRcbiAqIEByZXR1cm4ge1Nwcml0ZVN5bWJvbHxudWxsfVxuICovXG5TcHJpdGUucHJvdG90eXBlLmZpbmQgPSBmdW5jdGlvbiBmaW5kIChpZCkge1xuICByZXR1cm4gdGhpcy5zeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAocykgeyByZXR1cm4gcy5pZCA9PT0gaWQ7IH0pWzBdIHx8IG51bGw7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBpZFxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuU3ByaXRlLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiBoYXMgKGlkKSB7XG4gIHJldHVybiB0aGlzLmZpbmQoaWQpICE9PSBudWxsO1xufTtcblxuLyoqXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cblNwcml0ZS5wcm90b3R5cGUuc3RyaW5naWZ5ID0gZnVuY3Rpb24gc3RyaW5naWZ5ICgpIHtcbiAgdmFyIHJlZiA9IHRoaXMuY29uZmlnO1xuICAgIHZhciBhdHRycyA9IHJlZi5hdHRycztcbiAgdmFyIHN0cmluZ2lmaWVkU3ltYm9scyA9IHRoaXMuc3ltYm9scy5tYXAoZnVuY3Rpb24gKHMpIHsgcmV0dXJuIHMuc3RyaW5naWZ5KCk7IH0pLmpvaW4oJycpO1xuICByZXR1cm4gd3JhcEluU3ZnU3RyaW5nKHN0cmluZ2lmaWVkU3ltYm9scywgYXR0cnMpO1xufTtcblxuLyoqXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cblNwcml0ZS5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyAoKSB7XG4gIHJldHVybiB0aGlzLnN0cmluZ2lmeSgpO1xufTtcblxuU3ByaXRlLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gZGVzdHJveSAoKSB7XG4gIHRoaXMuc3ltYm9scy5mb3JFYWNoKGZ1bmN0aW9uIChzKSB7IHJldHVybiBzLmRlc3Ryb3koKTsgfSk7XG59O1xuXG52YXIgZGVmYXVsdENvbmZpZyQxID0ge1xuICAvKipcbiAgICogU2hvdWxkIGZvbGxvd2luZyBvcHRpb25zIGJlIGF1dG9tYXRpY2FsbHkgY29uZmlndXJlZDpcbiAgICogLSBgc3luY1VybHNXaXRoQmFzZVRhZ2BcbiAgICogLSBgbG9jYXRpb25DaGFuZ2VBbmd1bGFyRW1pdHRlcmBcbiAgICogLSBgbW92ZUdyYWRpZW50c091dHNpZGVTeW1ib2xgXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgYXV0b0NvbmZpZ3VyZTogdHJ1ZSxcblxuICAvKipcbiAgICogRGVmYXVsdCBtb3VudGluZyBzZWxlY3RvclxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgbW91bnRUbzogJ2JvZHknLFxuXG4gIC8qKlxuICAgKiBGaXggZGlzYXBwZWFyaW5nIFNWRyBlbGVtZW50cyB3aGVuIDxiYXNlIGhyZWY+IGV4aXN0cy5cbiAgICogRXhlY3V0ZXMgd2hlbiBzcHJpdGUgbW91bnRlZC5cbiAgICogQHNlZSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xODI2NTMzNi83OTYxNTJcbiAgICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vZXZlcmRpbWVuc2lvbi9hbmd1bGFyLXN2Zy1iYXNlLWZpeFxuICAgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIuanMvaXNzdWVzLzg5MzQjaXNzdWVjb21tZW50LTU2NTY4NDY2XG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgc3luY1VybHNXaXRoQmFzZVRhZzogZmFsc2UsXG5cbiAgLyoqXG4gICAqIFNob3VsZCBzcHJpdGUgbGlzdGVuIGN1c3RvbSBsb2NhdGlvbiBjaGFuZ2UgZXZlbnRcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICBsaXN0ZW5Mb2NhdGlvbkNoYW5nZUV2ZW50OiB0cnVlLFxuXG4gIC8qKlxuICAgKiBDdXN0b20gd2luZG93IGV2ZW50IG5hbWUgd2hpY2ggc2hvdWxkIGJlIGVtaXR0ZWQgdG8gdXBkYXRlIHNwcml0ZSB1cmxzXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBsb2NhdGlvbkNoYW5nZUV2ZW50OiAnbG9jYXRpb25DaGFuZ2UnLFxuXG4gIC8qKlxuICAgKiBFbWl0IGxvY2F0aW9uIGNoYW5nZSBldmVudCBpbiBBbmd1bGFyIGF1dG9tYXRpY2FsbHlcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICBsb2NhdGlvbkNoYW5nZUFuZ3VsYXJFbWl0dGVyOiBmYWxzZSxcblxuICAvKipcbiAgICogU2VsZWN0b3IgdG8gZmluZCBzeW1ib2xzIHVzYWdlcyB3aGVuIHVwZGF0aW5nIHNwcml0ZSB1cmxzXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICB1c2FnZXNUb1VwZGF0ZTogJ3VzZVsqfGhyZWZdJyxcblxuICAvKipcbiAgICogRml4IEZpcmVmb3ggYnVnIHdoZW4gZ3JhZGllbnRzIGFuZCBwYXR0ZXJucyBkb24ndCB3b3JrIGlmIHRoZXkgYXJlIHdpdGhpbiBhIHN5bWJvbC5cbiAgICogRXhlY3V0ZXMgd2hlbiBzcHJpdGUgaXMgcmVuZGVyZWQsIGJ1dCBub3QgbW91bnRlZC5cbiAgICogQHNlZSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0zMDY2NzRcbiAgICogQHNlZSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0zNTM1NzVcbiAgICogQHNlZSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xMjM1MzY0XG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgbW92ZUdyYWRpZW50c091dHNpZGVTeW1ib2w6IGZhbHNlXG59O1xuXG52YXIgYXJyYXlGcm9tID0gZnVuY3Rpb24gKGFycmF5TGlrZSkge1xuICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJyYXlMaWtlLCAwKTtcbn07XG5cbnZhciB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG5cbnZhciBicm93c2VyID0ge1xuICBpc0Nocm9tZTogL2Nocm9tZS9pLnRlc3QodWEpLFxuICBpc0ZpcmVmb3g6IC9maXJlZm94L2kudGVzdCh1YSksXG4gIGlzSUU6IC9tc2llL2kudGVzdCh1YSksXG4gIGlzRWRnZTogL2VkZ2UvaS50ZXN0KHVhKVxufTtcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHBhcmFtIHsqfSBkYXRhXG4gKi9cbnZhciBkaXNwYXRjaEV2ZW50ID0gZnVuY3Rpb24gKG5hbWUsIGRhdGEpIHtcbiAgdmFyIGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50Jyk7XG4gIGV2ZW50LmluaXRDdXN0b21FdmVudChuYW1lLCBmYWxzZSwgZmFsc2UsIGRhdGEpO1xuICB3aW5kb3cuZGlzcGF0Y2hFdmVudChldmVudCk7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBbdXJsXSBJZiBub3QgcHJvdmlkZWQgLSBjdXJyZW50IFVSTCB3aWxsIGJlIHVzZWRcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xudmFyIGdldFVybFdpdGhvdXRGcmFnbWVudCA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgcmV0dXJuICh1cmwgfHwgd2luZG93LmxvY2F0aW9uLmhyZWYpLnNwbGl0KCcjJylbMF07XG59O1xuXG4vKiBnbG9iYWwgYW5ndWxhciAqL1xuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lXG4gKi9cbnZhciBsb2NhdGlvbkNoYW5nZUFuZ3VsYXJFbWl0dGVyID0gZnVuY3Rpb24gKGV2ZW50TmFtZSkge1xuICBhbmd1bGFyLm1vZHVsZSgnbmcnKS5ydW4oWyckcm9vdFNjb3BlJywgZnVuY3Rpb24gKCRyb290U2NvcGUpIHtcbiAgICAkcm9vdFNjb3BlLiRvbignJGxvY2F0aW9uQ2hhbmdlU3VjY2VzcycsIGZ1bmN0aW9uIChlLCBuZXdVcmwsIG9sZFVybCkge1xuICAgICAgZGlzcGF0Y2hFdmVudChldmVudE5hbWUsIHsgb2xkVXJsOiBvbGRVcmwsIG5ld1VybDogbmV3VXJsIH0pO1xuICAgIH0pO1xuICB9XSk7XG59O1xuXG52YXIgZGVmYXVsdFNlbGVjdG9yID0gJ2xpbmVhckdyYWRpZW50LCByYWRpYWxHcmFkaWVudCwgcGF0dGVybic7XG5cbi8qKlxuICogQHBhcmFtIHtFbGVtZW50fSBzdmdcbiAqIEBwYXJhbSB7c3RyaW5nfSBbc2VsZWN0b3JdXG4gKiBAcmV0dXJuIHtFbGVtZW50fVxuICovXG52YXIgbW92ZUdyYWRpZW50c091dHNpZGVTeW1ib2wgPSBmdW5jdGlvbiAoc3ZnLCBzZWxlY3Rvcikge1xuICBpZiAoIHNlbGVjdG9yID09PSB2b2lkIDAgKSBzZWxlY3RvciA9IGRlZmF1bHRTZWxlY3RvcjtcblxuICBhcnJheUZyb20oc3ZnLnF1ZXJ5U2VsZWN0b3JBbGwoJ3N5bWJvbCcpKS5mb3JFYWNoKGZ1bmN0aW9uIChzeW1ib2wpIHtcbiAgICBhcnJheUZyb20oc3ltYm9sLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKS5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICBzeW1ib2wucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobm9kZSwgc3ltYm9sKTtcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBzdmc7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb250ZW50XG4gKiBAcmV0dXJuIHtFbGVtZW50fVxuICovXG52YXIgcGFyc2UgPSBmdW5jdGlvbiAoY29udGVudCkge1xuICB2YXIgaGFzSW1wb3J0Tm9kZSA9ICEhZG9jdW1lbnQuaW1wb3J0Tm9kZTtcbiAgdmFyIGRvYyA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoY29udGVudCwgJ2ltYWdlL3N2Zyt4bWwnKS5kb2N1bWVudEVsZW1lbnQ7XG5cbiAgLyoqXG4gICAqIEZpeCBmb3IgYnJvd3NlciB3aGljaCBhcmUgdGhyb3dpbmcgV3JvbmdEb2N1bWVudEVycm9yXG4gICAqIGlmIHlvdSBpbnNlcnQgYW4gZWxlbWVudCB3aGljaCBpcyBub3QgcGFydCBvZiB0aGUgZG9jdW1lbnRcbiAgICogQHNlZSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83OTg2NTE5LzQ2MjQ0MDNcbiAgICovXG4gIGlmIChoYXNJbXBvcnROb2RlKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmltcG9ydE5vZGUoZG9jLCB0cnVlKTtcbiAgfVxuXG4gIHJldHVybiBkb2M7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7Tm9kZUxpc3R9IG5vZGVzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbbWF0Y2hlcl1cbiAqIEByZXR1cm4ge0F0dHJbXX1cbiAqL1xuZnVuY3Rpb24gc2VsZWN0QXR0cmlidXRlcyhub2RlcywgbWF0Y2hlcikge1xuICB2YXIgYXR0cnMgPSBhcnJheUZyb20obm9kZXMpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBub2RlKSB7XG4gICAgaWYgKCFub2RlLmF0dHJpYnV0ZXMpIHtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfVxuXG4gICAgdmFyIGFycmF5ZmllZCA9IGFycmF5RnJvbShub2RlLmF0dHJpYnV0ZXMpO1xuICAgIHZhciBtYXRjaGVkID0gbWF0Y2hlciA/IGFycmF5ZmllZC5maWx0ZXIobWF0Y2hlcikgOiBhcnJheWZpZWQ7XG4gICAgcmV0dXJuIGFjYy5jb25jYXQobWF0Y2hlZCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gYXR0cnM7XG59XG5cbi8qKlxuICogQHBhcmFtIHtOb2RlTGlzdHxOb2RlfSBub2Rlc1xuICogQHBhcmFtIHtib29sZWFufSBbY2xvbmU9dHJ1ZV1cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuXG52YXIgeExpbmtOUyA9IG5hbWVzcGFjZXNfMS54bGluay51cmk7XG52YXIgeExpbmtBdHRyTmFtZSA9ICd4bGluazpocmVmJztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZWxlc3MtZXNjYXBlXG52YXIgc3BlY2lhbFVybENoYXJzUGF0dGVybiA9IC9bKCl7fXxcXFxcXFxeflxcW1xcXWBcIjw+XS9nO1xuXG5mdW5jdGlvbiBlbmNvZGVyKHVybCkge1xuICByZXR1cm4gdXJsLnJlcGxhY2Uoc3BlY2lhbFVybENoYXJzUGF0dGVybiwgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgcmV0dXJuIChcIiVcIiArIChtYXRjaFswXS5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpKSk7XG4gIH0pO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7Tm9kZUxpc3R9IG5vZGVzXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RhcnRzV2l0aFxuICogQHBhcmFtIHtzdHJpbmd9IHJlcGxhY2VXaXRoXG4gKiBAcmV0dXJuIHtOb2RlTGlzdH1cbiAqL1xuZnVuY3Rpb24gdXBkYXRlUmVmZXJlbmNlcyhub2Rlcywgc3RhcnRzV2l0aCwgcmVwbGFjZVdpdGgpIHtcbiAgYXJyYXlGcm9tKG5vZGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgdmFyIGhyZWYgPSBub2RlLmdldEF0dHJpYnV0ZSh4TGlua0F0dHJOYW1lKTtcbiAgICBpZiAoaHJlZiAmJiBocmVmLmluZGV4T2Yoc3RhcnRzV2l0aCkgPT09IDApIHtcbiAgICAgIHZhciBuZXdVcmwgPSBocmVmLnJlcGxhY2Uoc3RhcnRzV2l0aCwgcmVwbGFjZVdpdGgpO1xuICAgICAgbm9kZS5zZXRBdHRyaWJ1dGVOUyh4TGlua05TLCB4TGlua0F0dHJOYW1lLCBuZXdVcmwpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIG5vZGVzO1xufVxuXG4vKipcbiAqIExpc3Qgb2YgU1ZHIGF0dHJpYnV0ZXMgdG8gdXBkYXRlIHVybCgpIHRhcmdldCBpbiB0aGVtXG4gKi9cbnZhciBhdHRMaXN0ID0gW1xuICAnY2xpcFBhdGgnLFxuICAnY29sb3JQcm9maWxlJyxcbiAgJ3NyYycsXG4gICdjdXJzb3InLFxuICAnZmlsbCcsXG4gICdmaWx0ZXInLFxuICAnbWFya2VyJyxcbiAgJ21hcmtlclN0YXJ0JyxcbiAgJ21hcmtlck1pZCcsXG4gICdtYXJrZXJFbmQnLFxuICAnbWFzaycsXG4gICdzdHJva2UnLFxuICAnc3R5bGUnXG5dO1xuXG52YXIgYXR0U2VsZWN0b3IgPSBhdHRMaXN0Lm1hcChmdW5jdGlvbiAoYXR0cikgeyByZXR1cm4gKFwiW1wiICsgYXR0ciArIFwiXVwiKTsgfSkuam9pbignLCcpO1xuXG4vKipcbiAqIFVwZGF0ZSBVUkxzIGluIHN2ZyBpbWFnZSAobGlrZSBgZmlsbD1cInVybCguLi4pXCJgKSBhbmQgdXBkYXRlIHJlZmVyZW5jaW5nIGVsZW1lbnRzXG4gKiBAcGFyYW0ge0VsZW1lbnR9IHN2Z1xuICogQHBhcmFtIHtOb2RlTGlzdH0gcmVmZXJlbmNlc1xuICogQHBhcmFtIHtzdHJpbmd8UmVnRXhwfSBzdGFydHNXaXRoXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVwbGFjZVdpdGhcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKlxuICogQGV4YW1wbGVcbiAqIGNvbnN0IHNwcml0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3N2Zy5zcHJpdGUnKTtcbiAqIGNvbnN0IHVzYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3VzZScpO1xuICogdXBkYXRlVXJscyhzcHJpdGUsIHVzYWdlcywgJyMnLCAncHJlZml4IycpO1xuICovXG52YXIgdXBkYXRlVXJscyA9IGZ1bmN0aW9uIChzdmcsIHJlZmVyZW5jZXMsIHN0YXJ0c1dpdGgsIHJlcGxhY2VXaXRoKSB7XG4gIHZhciBzdGFydHNXaXRoRW5jb2RlZCA9IGVuY29kZXIoc3RhcnRzV2l0aCk7XG4gIHZhciByZXBsYWNlV2l0aEVuY29kZWQgPSBlbmNvZGVyKHJlcGxhY2VXaXRoKTtcblxuICB2YXIgbm9kZXMgPSBzdmcucXVlcnlTZWxlY3RvckFsbChhdHRTZWxlY3Rvcik7XG4gIHZhciBhdHRycyA9IHNlbGVjdEF0dHJpYnV0ZXMobm9kZXMsIGZ1bmN0aW9uIChyZWYpIHtcbiAgICB2YXIgbG9jYWxOYW1lID0gcmVmLmxvY2FsTmFtZTtcbiAgICB2YXIgdmFsdWUgPSByZWYudmFsdWU7XG5cbiAgICByZXR1cm4gYXR0TGlzdC5pbmRleE9mKGxvY2FsTmFtZSkgIT09IC0xICYmIHZhbHVlLmluZGV4T2YoKFwidXJsKFwiICsgc3RhcnRzV2l0aEVuY29kZWQpKSAhPT0gLTE7XG4gIH0pO1xuXG4gIGF0dHJzLmZvckVhY2goZnVuY3Rpb24gKGF0dHIpIHsgcmV0dXJuIGF0dHIudmFsdWUgPSBhdHRyLnZhbHVlLnJlcGxhY2Uoc3RhcnRzV2l0aEVuY29kZWQsIHJlcGxhY2VXaXRoRW5jb2RlZCk7IH0pO1xuICB1cGRhdGVSZWZlcmVuY2VzKHJlZmVyZW5jZXMsIHN0YXJ0c1dpdGhFbmNvZGVkLCByZXBsYWNlV2l0aEVuY29kZWQpO1xufTtcblxuLyoqXG4gKiBJbnRlcm5hbCBlbWl0dGVyIGV2ZW50c1xuICogQGVudW1cbiAqIEBwcml2YXRlXG4gKi9cbnZhciBFdmVudHMgPSB7XG4gIE1PVU5UOiAnbW91bnQnXG59O1xuXG52YXIgQnJvd3NlclNwcml0ZSA9IChmdW5jdGlvbiAoU3ByaXRlJCQxKSB7XG4gIGZ1bmN0aW9uIEJyb3dzZXJTcHJpdGUoY2ZnKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG4gICAgaWYgKCBjZmcgPT09IHZvaWQgMCApIGNmZyA9IHt9O1xuXG4gICAgU3ByaXRlJCQxLmNhbGwodGhpcywgaW5kZXgoZGVmYXVsdENvbmZpZyQxLCBjZmcpKTtcblxuICAgIHZhciBlbWl0dGVyID0gbWl0dCgpO1xuICAgIHRoaXMuX2VtaXR0ZXIgPSBlbWl0dGVyO1xuICAgIHRoaXMubm9kZSA9IG51bGw7XG5cbiAgICB2YXIgcmVmID0gdGhpcztcbiAgICB2YXIgY29uZmlnID0gcmVmLmNvbmZpZztcblxuICAgIGlmIChjb25maWcuYXV0b0NvbmZpZ3VyZSkge1xuICAgICAgdGhpcy5fYXV0b0NvbmZpZ3VyZShjZmcpO1xuICAgIH1cblxuICAgIGlmIChjb25maWcuc3luY1VybHNXaXRoQmFzZVRhZykge1xuICAgICAgdmFyIGJhc2VVcmwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYmFzZScpWzBdLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgICAgZW1pdHRlci5vbihFdmVudHMuTU9VTlQsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMkMS51cGRhdGVVcmxzKCcjJywgYmFzZVVybCk7IH0pO1xuICAgIH1cblxuICAgIHZhciBoYW5kbGVMb2NhdGlvbkNoYW5nZSA9IHRoaXMuX2hhbmRsZUxvY2F0aW9uQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5faGFuZGxlTG9jYXRpb25DaGFuZ2UgPSBoYW5kbGVMb2NhdGlvbkNoYW5nZTtcblxuICAgIC8vIFByb3ZpZGUgd2F5IHRvIHVwZGF0ZSBzcHJpdGUgdXJscyBleHRlcm5hbGx5IHZpYSBkaXNwYXRjaGluZyBjdXN0b20gd2luZG93IGV2ZW50XG4gICAgaWYgKGNvbmZpZy5saXN0ZW5Mb2NhdGlvbkNoYW5nZUV2ZW50KSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihjb25maWcubG9jYXRpb25DaGFuZ2VFdmVudCwgaGFuZGxlTG9jYXRpb25DaGFuZ2UpO1xuICAgIH1cblxuICAgIC8vIEVtaXQgbG9jYXRpb24gY2hhbmdlIGV2ZW50IGluIEFuZ3VsYXIgYXV0b21hdGljYWxseVxuICAgIGlmIChjb25maWcubG9jYXRpb25DaGFuZ2VBbmd1bGFyRW1pdHRlcikge1xuICAgICAgbG9jYXRpb25DaGFuZ2VBbmd1bGFyRW1pdHRlcihjb25maWcubG9jYXRpb25DaGFuZ2VFdmVudCk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5tb3ZlR3JhZGllbnRzT3V0c2lkZVN5bWJvbCkge1xuICAgICAgZW1pdHRlci5vbihFdmVudHMuTU9VTlQsIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIG1vdmVHcmFkaWVudHNPdXRzaWRlU3ltYm9sKG5vZGUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKCBTcHJpdGUkJDEgKSBCcm93c2VyU3ByaXRlLl9fcHJvdG9fXyA9IFNwcml0ZSQkMTtcbiAgQnJvd3NlclNwcml0ZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBTcHJpdGUkJDEgJiYgU3ByaXRlJCQxLnByb3RvdHlwZSApO1xuICBCcm93c2VyU3ByaXRlLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEJyb3dzZXJTcHJpdGU7XG5cbiAgdmFyIHByb3RvdHlwZUFjY2Vzc29ycyA9IHsgaXNNb3VudGVkOiB7fSB9O1xuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgcHJvdG90eXBlQWNjZXNzb3JzLmlzTW91bnRlZC5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICEhdGhpcy5ub2RlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBBdXRvbWF0aWNhbGx5IGNvbmZpZ3VyZSBmb2xsb3dpbmcgb3B0aW9uc1xuICAgKiAtIGBzeW5jVXJsc1dpdGhCYXNlVGFnYFxuICAgKiAtIGBsb2NhdGlvbkNoYW5nZUFuZ3VsYXJFbWl0dGVyYFxuICAgKiAtIGBtb3ZlR3JhZGllbnRzT3V0c2lkZVN5bWJvbGBcbiAgICogQHBhcmFtIHtPYmplY3R9IGNmZ1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgQnJvd3NlclNwcml0ZS5wcm90b3R5cGUuX2F1dG9Db25maWd1cmUgPSBmdW5jdGlvbiBfYXV0b0NvbmZpZ3VyZSAoY2ZnKSB7XG4gICAgdmFyIHJlZiA9IHRoaXM7XG4gICAgdmFyIGNvbmZpZyA9IHJlZi5jb25maWc7XG5cbiAgICBpZiAodHlwZW9mIGNmZy5zeW5jVXJsc1dpdGhCYXNlVGFnID09PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnLnN5bmNVcmxzV2l0aEJhc2VUYWcgPSB0eXBlb2YgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2Jhc2UnKVswXSAhPT0gJ3VuZGVmaW5lZCc7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjZmcubG9jYXRpb25DaGFuZ2VBbmd1bGFyRW1pdHRlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZy5sb2NhdGlvbkNoYW5nZUFuZ3VsYXJFbWl0dGVyID0gJ2FuZ3VsYXInIGluIHdpbmRvdztcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNmZy5tb3ZlR3JhZGllbnRzT3V0c2lkZVN5bWJvbCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZy5tb3ZlR3JhZGllbnRzT3V0c2lkZVN5bWJvbCA9IGJyb3dzZXIuaXNGaXJlZm94O1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnRcbiAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50LmRldGFpbFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnQuZGV0YWlsLm9sZFVybFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnQuZGV0YWlsLm5ld1VybFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgQnJvd3NlclNwcml0ZS5wcm90b3R5cGUuX2hhbmRsZUxvY2F0aW9uQ2hhbmdlID0gZnVuY3Rpb24gX2hhbmRsZUxvY2F0aW9uQ2hhbmdlIChldmVudCkge1xuICAgIHZhciByZWYgPSBldmVudC5kZXRhaWw7XG4gICAgdmFyIG9sZFVybCA9IHJlZi5vbGRVcmw7XG4gICAgdmFyIG5ld1VybCA9IHJlZi5uZXdVcmw7XG4gICAgdGhpcy51cGRhdGVVcmxzKG9sZFVybCwgbmV3VXJsKTtcbiAgfTtcblxuICAvKipcbiAgICogQWRkIG5ldyBzeW1ib2wuIElmIHN5bWJvbCB3aXRoIHRoZSBzYW1lIGlkIGV4aXN0cyBpdCB3aWxsIGJlIHJlcGxhY2VkLlxuICAgKiBJZiBzcHJpdGUgYWxyZWFkeSBtb3VudGVkIC0gYHN5bWJvbC5tb3VudChzcHJpdGUubm9kZSlgIHdpbGwgYmUgY2FsbGVkLlxuICAgKiBAcGFyYW0ge0Jyb3dzZXJTcHJpdGVTeW1ib2x9IHN5bWJvbFxuICAgKiBAcmV0dXJuIHtib29sZWFufSBgdHJ1ZWAgLSBzeW1ib2wgd2FzIGFkZGVkLCBgZmFsc2VgIC0gcmVwbGFjZWRcbiAgICovXG4gIEJyb3dzZXJTcHJpdGUucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIGFkZCAoc3ltYm9sKSB7XG4gICAgdmFyIGlzTmV3U3ltYm9sID0gU3ByaXRlJCQxLnByb3RvdHlwZS5hZGQuY2FsbCh0aGlzLCBzeW1ib2wpO1xuXG4gICAgaWYgKHRoaXMuaXNNb3VudGVkICYmIGlzTmV3U3ltYm9sKSB7XG4gICAgICBzeW1ib2wubW91bnQodGhpcy5ub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaXNOZXdTeW1ib2w7XG4gIH07XG5cbiAgQnJvd3NlclNwcml0ZS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uIGRlc3Ryb3kgKCkge1xuICAgIHZhciByZWYgPSB0aGlzO1xuICAgIHZhciBjb25maWcgPSByZWYuY29uZmlnO1xuICAgIHZhciBzeW1ib2xzID0gcmVmLnN5bWJvbHM7XG4gICAgdmFyIF9lbWl0dGVyID0gcmVmLl9lbWl0dGVyO1xuXG4gICAgc3ltYm9scy5mb3JFYWNoKGZ1bmN0aW9uIChzKSB7IHJldHVybiBzLmRlc3Ryb3koKTsgfSk7XG5cbiAgICBfZW1pdHRlci5vZmYoJyonKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihjb25maWcubG9jYXRpb25DaGFuZ2VFdmVudCwgdGhpcy5faGFuZGxlTG9jYXRpb25DaGFuZ2UpO1xuXG4gICAgaWYgKHRoaXMuaXNNb3VudGVkKSB7XG4gICAgICB0aGlzLnVubW91bnQoKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RWxlbWVudHxzdHJpbmd9IFt0YXJnZXRdXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3ByZXBlbmQ9ZmFsc2VdXG4gICAqIEByZXR1cm4ge0VsZW1lbnR9IHJlbmRlcmVkIHNwcml0ZSBub2RlXG4gICAqIEBmaXJlcyBFdmVudHMjTU9VTlRcbiAgICovXG4gIEJyb3dzZXJTcHJpdGUucHJvdG90eXBlLm1vdW50ID0gZnVuY3Rpb24gbW91bnQgKHRhcmdldCwgcHJlcGVuZCkge1xuICAgIGlmICggcHJlcGVuZCA9PT0gdm9pZCAwICkgcHJlcGVuZCA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMuaXNNb3VudGVkKSB7XG4gICAgICByZXR1cm4gdGhpcy5ub2RlO1xuICAgIH1cblxuICAgIHZhciBtb3VudFRhcmdldCA9IHRhcmdldCB8fCB0aGlzLmNvbmZpZy5tb3VudFRvO1xuICAgIHZhciBwYXJlbnQgPSB0eXBlb2YgbW91bnRUYXJnZXQgPT09ICdzdHJpbmcnID8gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihtb3VudFRhcmdldCkgOiBtb3VudFRhcmdldDtcbiAgICB2YXIgbm9kZSA9IHRoaXMucmVuZGVyKCk7XG5cbiAgICBpZiAocHJlcGVuZCAmJiBwYXJlbnQuY2hpbGROb2Rlc1swXSkge1xuICAgICAgcGFyZW50Lmluc2VydEJlZm9yZShub2RlLCBwYXJlbnQuY2hpbGROb2Rlc1swXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChub2RlKTtcbiAgICB9XG5cbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMuX2VtaXR0ZXIuZW1pdChFdmVudHMuTU9VTlQsIG5vZGUpO1xuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH07XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge0VsZW1lbnR9XG4gICAqL1xuICBCcm93c2VyU3ByaXRlLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIgKCkge1xuICAgIHJldHVybiBwYXJzZSh0aGlzLnN0cmluZ2lmeSgpKTtcbiAgfTtcblxuICAvKipcbiAgICogRGV0YWNoIHNwcml0ZSBmcm9tIHRoZSBET01cbiAgICovXG4gIEJyb3dzZXJTcHJpdGUucHJvdG90eXBlLnVubW91bnQgPSBmdW5jdGlvbiB1bm1vdW50ICgpIHtcbiAgICB0aGlzLm5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLm5vZGUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBVcGRhdGUgVVJMcyBpbiBzcHJpdGUgYW5kIHVzYWdlIGVsZW1lbnRzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvbGRVcmxcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5ld1VybFxuICAgKiBAcmV0dXJuIHtib29sZWFufSBgdHJ1ZWAgLSBVUkxzIHdhcyB1cGRhdGVkLCBgZmFsc2VgIC0gc3ByaXRlIGlzIG5vdCBtb3VudGVkXG4gICAqL1xuICBCcm93c2VyU3ByaXRlLnByb3RvdHlwZS51cGRhdGVVcmxzID0gZnVuY3Rpb24gdXBkYXRlVXJscyQxIChvbGRVcmwsIG5ld1VybCkge1xuICAgIGlmICghdGhpcy5pc01vdW50ZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgdXNhZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLmNvbmZpZy51c2FnZXNUb1VwZGF0ZSk7XG5cbiAgICB1cGRhdGVVcmxzKFxuICAgICAgdGhpcy5ub2RlLFxuICAgICAgdXNhZ2VzLFxuICAgICAgKChnZXRVcmxXaXRob3V0RnJhZ21lbnQob2xkVXJsKSkgKyBcIiNcIiksXG4gICAgICAoKGdldFVybFdpdGhvdXRGcmFnbWVudChuZXdVcmwpKSArIFwiI1wiKVxuICAgICk7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyggQnJvd3NlclNwcml0ZS5wcm90b3R5cGUsIHByb3RvdHlwZUFjY2Vzc29ycyApO1xuXG4gIHJldHVybiBCcm93c2VyU3ByaXRlO1xufShTcHJpdGUpKTtcblxudmFyIHJlYWR5JDEgPSBjcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbiAobW9kdWxlKSB7XG4vKiFcbiAgKiBkb21yZWFkeSAoYykgRHVzdGluIERpYXogMjAxNCAtIExpY2Vuc2UgTUlUXG4gICovXG4hZnVuY3Rpb24gKG5hbWUsIGRlZmluaXRpb24pIHtcblxuICB7IG1vZHVsZS5leHBvcnRzID0gZGVmaW5pdGlvbigpOyB9XG5cbn0oJ2RvbXJlYWR5JywgZnVuY3Rpb24gKCkge1xuXG4gIHZhciBmbnMgPSBbXSwgbGlzdGVuZXJcbiAgICAsIGRvYyA9IGRvY3VtZW50XG4gICAgLCBoYWNrID0gZG9jLmRvY3VtZW50RWxlbWVudC5kb1Njcm9sbFxuICAgICwgZG9tQ29udGVudExvYWRlZCA9ICdET01Db250ZW50TG9hZGVkJ1xuICAgICwgbG9hZGVkID0gKGhhY2sgPyAvXmxvYWRlZHxeYy8gOiAvXmxvYWRlZHxeaXxeYy8pLnRlc3QoZG9jLnJlYWR5U3RhdGUpO1xuXG5cbiAgaWYgKCFsb2FkZWQpXG4gIHsgZG9jLmFkZEV2ZW50TGlzdGVuZXIoZG9tQ29udGVudExvYWRlZCwgbGlzdGVuZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoZG9tQ29udGVudExvYWRlZCwgbGlzdGVuZXIpO1xuICAgIGxvYWRlZCA9IDE7XG4gICAgd2hpbGUgKGxpc3RlbmVyID0gZm5zLnNoaWZ0KCkpIHsgbGlzdGVuZXIoKTsgfVxuICB9KTsgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoZm4pIHtcbiAgICBsb2FkZWQgPyBzZXRUaW1lb3V0KGZuLCAwKSA6IGZucy5wdXNoKGZuKTtcbiAgfVxuXG59KTtcbn0pO1xuXG52YXIgc3ByaXRlID0gbmV3IEJyb3dzZXJTcHJpdGUoKTtcblxudmFyIGxvYWRTcHJpdGUgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBzdmcgPSBzcHJpdGUubW91bnQoZG9jdW1lbnQuYm9keSwgdHJ1ZSk7XG5cbiAgLy8gOldPUktBUk9VTkQ6XG4gIC8vIElFIGRvZXNuJ3QgZXZhbHVhdGUgPHN0eWxlPiB0YWdzIGluIFNWR3MgdGhhdCBhcmUgZHluYW1pY2FsbHkgYWRkZWQgdG8gdGhlIHBhZ2UuXG4gIC8vIFRoaXMgdHJpY2sgd2lsbCB0cmlnZ2VyIElFIHRvIHJlYWQgYW5kIHVzZSBhbnkgZXhpc3RpbmcgU1ZHIDxzdHlsZT4gdGFncy5cbiAgLy9cbiAgLy8gUmVmZXJlbmNlOiBodHRwczovL2dpdGh1Yi5jb20vaWNvbmljL1NWR0luamVjdG9yL2lzc3Vlcy8yM1xuICB2YXIgdWEgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCB8fCAnJztcbiAgaWYgKHVhLmluZGV4T2YoJ1RyaWRlbnQnKSA+IDAgfHwgdWEuaW5kZXhPZignRWRnZS8nKSA+IDApIHtcbiAgICB2YXIgc3R5bGVzID0gc3ZnLnF1ZXJ5U2VsZWN0b3JBbGwoJ3N0eWxlJyk7XG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBzdHlsZXMubGVuZ3RoOyBpIDwgbDsgaSArPSAxKSB7XG4gICAgICBzdHlsZXNbaV0udGV4dENvbnRlbnQgKz0gJyc7XG4gICAgfVxuICB9XG59O1xuXG5pZiAoZG9jdW1lbnQuYm9keSkge1xuICBsb2FkU3ByaXRlKCk7XG59IGVsc2Uge1xuICByZWFkeSQxKGxvYWRTcHJpdGUpO1xufVxuXG5yZXR1cm4gc3ByaXRlO1xuXG59KSkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc3ZnLXNwcml0ZS1sb2FkZXIvcnVudGltZS9icm93c2VyLXNwcml0ZS5idWlsZC5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL2F4aW9zJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgbm9ybWFsaXplSGVhZGVyTmFtZSA9IHJlcXVpcmUoJy4vaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lJyk7XG5cbnZhciBQUk9URUNUSU9OX1BSRUZJWCA9IC9eXFwpXFxdXFx9Jyw/XFxuLztcbnZhciBERUZBVUxUX0NPTlRFTlRfVFlQRSA9IHtcbiAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG59O1xuXG5mdW5jdGlvbiBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgdmFsdWUpIHtcbiAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzKSAmJiB1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzWydDb250ZW50LVR5cGUnXSkpIHtcbiAgICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9IHZhbHVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldERlZmF1bHRBZGFwdGVyKCkge1xuICB2YXIgYWRhcHRlcjtcbiAgaWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBGb3IgYnJvd3NlcnMgdXNlIFhIUiBhZGFwdGVyXG4gICAgYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcnMveGhyJyk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gRm9yIG5vZGUgdXNlIEhUVFAgYWRhcHRlclxuICAgIGFkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXJzL2h0dHAnKTtcbiAgfVxuICByZXR1cm4gYWRhcHRlcjtcbn1cblxudmFyIGRlZmF1bHRzID0ge1xuICBhZGFwdGVyOiBnZXREZWZhdWx0QWRhcHRlcigpLFxuXG4gIHRyYW5zZm9ybVJlcXVlc3Q6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXF1ZXN0KGRhdGEsIGhlYWRlcnMpIHtcbiAgICBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsICdDb250ZW50LVR5cGUnKTtcbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNBcnJheUJ1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNTdHJlYW0oZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzRmlsZShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCbG9iKGRhdGEpXG4gICAgKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzQXJyYXlCdWZmZXJWaWV3KGRhdGEpKSB7XG4gICAgICByZXR1cm4gZGF0YS5idWZmZXI7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhkYXRhKSkge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD11dGYtOCcpO1xuICAgICAgcmV0dXJuIGRhdGEudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzT2JqZWN0KGRhdGEpKSB7XG4gICAgICBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtOCcpO1xuICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgdHJhbnNmb3JtUmVzcG9uc2U6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXNwb25zZShkYXRhKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgZGF0YSA9IGRhdGEucmVwbGFjZShQUk9URUNUSU9OX1BSRUZJWCwgJycpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICB9IGNhdGNoIChlKSB7IC8qIElnbm9yZSAqLyB9XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICB0aW1lb3V0OiAwLFxuXG4gIHhzcmZDb29raWVOYW1lOiAnWFNSRi1UT0tFTicsXG4gIHhzcmZIZWFkZXJOYW1lOiAnWC1YU1JGLVRPS0VOJyxcblxuICBtYXhDb250ZW50TGVuZ3RoOiAtMSxcblxuICB2YWxpZGF0ZVN0YXR1czogZnVuY3Rpb24gdmFsaWRhdGVTdGF0dXMoc3RhdHVzKSB7XG4gICAgcmV0dXJuIHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgMzAwO1xuICB9XG59O1xuXG5kZWZhdWx0cy5oZWFkZXJzID0ge1xuICBjb21tb246IHtcbiAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKidcbiAgfVxufTtcblxudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCddLCBmdW5jdGlvbiBmb3JFYWNoTWVodG9kTm9EYXRhKG1ldGhvZCkge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB7fTtcbn0pO1xuXG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB1dGlscy5tZXJnZShERUZBVUxUX0NPTlRFTlRfVFlQRSk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBkZWZhdWx0cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9kZWZhdWx0cy5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYmluZChmbiwgdGhpc0FyZykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcCgpIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07XG4gICAgfVxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9iaW5kLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgc2V0dGxlID0gcmVxdWlyZSgnLi8uLi9jb3JlL3NldHRsZScpO1xudmFyIGJ1aWxkVVJMID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2J1aWxkVVJMJyk7XG52YXIgcGFyc2VIZWFkZXJzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL3BhcnNlSGVhZGVycycpO1xudmFyIGlzVVJMU2FtZU9yaWdpbiA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9pc1VSTFNhbWVPcmlnaW4nKTtcbnZhciBjcmVhdGVFcnJvciA9IHJlcXVpcmUoJy4uL2NvcmUvY3JlYXRlRXJyb3InKTtcbnZhciBidG9hID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5idG9hICYmIHdpbmRvdy5idG9hLmJpbmQod2luZG93KSkgfHwgcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2J0b2EnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB4aHJBZGFwdGVyKGNvbmZpZykge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gZGlzcGF0Y2hYaHJSZXF1ZXN0KHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IGNvbmZpZy5kYXRhO1xuICAgIHZhciByZXF1ZXN0SGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzO1xuXG4gICAgaWYgKHV0aWxzLmlzRm9ybURhdGEocmVxdWVzdERhdGEpKSB7XG4gICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddOyAvLyBMZXQgdGhlIGJyb3dzZXIgc2V0IGl0XG4gICAgfVxuXG4gICAgdmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICB2YXIgbG9hZEV2ZW50ID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSc7XG4gICAgdmFyIHhEb21haW4gPSBmYWxzZTtcblxuICAgIC8vIEZvciBJRSA4LzkgQ09SUyBzdXBwb3J0XG4gICAgLy8gT25seSBzdXBwb3J0cyBQT1NUIGFuZCBHRVQgY2FsbHMgYW5kIGRvZXNuJ3QgcmV0dXJucyB0aGUgcmVzcG9uc2UgaGVhZGVycy5cbiAgICAvLyBET04nVCBkbyB0aGlzIGZvciB0ZXN0aW5nIGIvYyBYTUxIdHRwUmVxdWVzdCBpcyBtb2NrZWQsIG5vdCBYRG9tYWluUmVxdWVzdC5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICd0ZXN0JyAmJlxuICAgICAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICB3aW5kb3cuWERvbWFpblJlcXVlc3QgJiYgISgnd2l0aENyZWRlbnRpYWxzJyBpbiByZXF1ZXN0KSAmJlxuICAgICAgICAhaXNVUkxTYW1lT3JpZ2luKGNvbmZpZy51cmwpKSB7XG4gICAgICByZXF1ZXN0ID0gbmV3IHdpbmRvdy5YRG9tYWluUmVxdWVzdCgpO1xuICAgICAgbG9hZEV2ZW50ID0gJ29ubG9hZCc7XG4gICAgICB4RG9tYWluID0gdHJ1ZTtcbiAgICAgIHJlcXVlc3Qub25wcm9ncmVzcyA9IGZ1bmN0aW9uIGhhbmRsZVByb2dyZXNzKCkge307XG4gICAgICByZXF1ZXN0Lm9udGltZW91dCA9IGZ1bmN0aW9uIGhhbmRsZVRpbWVvdXQoKSB7fTtcbiAgICB9XG5cbiAgICAvLyBIVFRQIGJhc2ljIGF1dGhlbnRpY2F0aW9uXG4gICAgaWYgKGNvbmZpZy5hdXRoKSB7XG4gICAgICB2YXIgdXNlcm5hbWUgPSBjb25maWcuYXV0aC51c2VybmFtZSB8fCAnJztcbiAgICAgIHZhciBwYXNzd29yZCA9IGNvbmZpZy5hdXRoLnBhc3N3b3JkIHx8ICcnO1xuICAgICAgcmVxdWVzdEhlYWRlcnMuQXV0aG9yaXphdGlvbiA9ICdCYXNpYyAnICsgYnRvYSh1c2VybmFtZSArICc6JyArIHBhc3N3b3JkKTtcbiAgICB9XG5cbiAgICByZXF1ZXN0Lm9wZW4oY29uZmlnLm1ldGhvZC50b1VwcGVyQ2FzZSgpLCBidWlsZFVSTChjb25maWcudXJsLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplciksIHRydWUpO1xuXG4gICAgLy8gU2V0IHRoZSByZXF1ZXN0IHRpbWVvdXQgaW4gTVNcbiAgICByZXF1ZXN0LnRpbWVvdXQgPSBjb25maWcudGltZW91dDtcblxuICAgIC8vIExpc3RlbiBmb3IgcmVhZHkgc3RhdGVcbiAgICByZXF1ZXN0W2xvYWRFdmVudF0gPSBmdW5jdGlvbiBoYW5kbGVMb2FkKCkge1xuICAgICAgaWYgKCFyZXF1ZXN0IHx8IChyZXF1ZXN0LnJlYWR5U3RhdGUgIT09IDQgJiYgIXhEb21haW4pKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gVGhlIHJlcXVlc3QgZXJyb3JlZCBvdXQgYW5kIHdlIGRpZG4ndCBnZXQgYSByZXNwb25zZSwgdGhpcyB3aWxsIGJlXG4gICAgICAvLyBoYW5kbGVkIGJ5IG9uZXJyb3IgaW5zdGVhZFxuICAgICAgLy8gV2l0aCBvbmUgZXhjZXB0aW9uOiByZXF1ZXN0IHRoYXQgdXNpbmcgZmlsZTogcHJvdG9jb2wsIG1vc3QgYnJvd3NlcnNcbiAgICAgIC8vIHdpbGwgcmV0dXJuIHN0YXR1cyBhcyAwIGV2ZW4gdGhvdWdoIGl0J3MgYSBzdWNjZXNzZnVsIHJlcXVlc3RcbiAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMCAmJiAhKHJlcXVlc3QucmVzcG9uc2VVUkwgJiYgcmVxdWVzdC5yZXNwb25zZVVSTC5pbmRleE9mKCdmaWxlOicpID09PSAwKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFByZXBhcmUgdGhlIHJlc3BvbnNlXG4gICAgICB2YXIgcmVzcG9uc2VIZWFkZXJzID0gJ2dldEFsbFJlc3BvbnNlSGVhZGVycycgaW4gcmVxdWVzdCA/IHBhcnNlSGVhZGVycyhyZXF1ZXN0LmdldEFsbFJlc3BvbnNlSGVhZGVycygpKSA6IG51bGw7XG4gICAgICB2YXIgcmVzcG9uc2VEYXRhID0gIWNvbmZpZy5yZXNwb25zZVR5cGUgfHwgY29uZmlnLnJlc3BvbnNlVHlwZSA9PT0gJ3RleHQnID8gcmVxdWVzdC5yZXNwb25zZVRleHQgOiByZXF1ZXN0LnJlc3BvbnNlO1xuICAgICAgdmFyIHJlc3BvbnNlID0ge1xuICAgICAgICBkYXRhOiByZXNwb25zZURhdGEsXG4gICAgICAgIC8vIElFIHNlbmRzIDEyMjMgaW5zdGVhZCBvZiAyMDQgKGh0dHBzOi8vZ2l0aHViLmNvbS9temFicmlza2llL2F4aW9zL2lzc3Vlcy8yMDEpXG4gICAgICAgIHN0YXR1czogcmVxdWVzdC5zdGF0dXMgPT09IDEyMjMgPyAyMDQgOiByZXF1ZXN0LnN0YXR1cyxcbiAgICAgICAgc3RhdHVzVGV4dDogcmVxdWVzdC5zdGF0dXMgPT09IDEyMjMgPyAnTm8gQ29udGVudCcgOiByZXF1ZXN0LnN0YXR1c1RleHQsXG4gICAgICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgICAgICAgY29uZmlnOiBjb25maWcsXG4gICAgICAgIHJlcXVlc3Q6IHJlcXVlc3RcbiAgICAgIH07XG5cbiAgICAgIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSBsb3cgbGV2ZWwgbmV0d29yayBlcnJvcnNcbiAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbiBoYW5kbGVFcnJvcigpIHtcbiAgICAgIC8vIFJlYWwgZXJyb3JzIGFyZSBoaWRkZW4gZnJvbSB1cyBieSB0aGUgYnJvd3NlclxuICAgICAgLy8gb25lcnJvciBzaG91bGQgb25seSBmaXJlIGlmIGl0J3MgYSBuZXR3b3JrIGVycm9yXG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ05ldHdvcmsgRXJyb3InLCBjb25maWcpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSB0aW1lb3V0XG4gICAgcmVxdWVzdC5vbnRpbWVvdXQgPSBmdW5jdGlvbiBoYW5kbGVUaW1lb3V0KCkge1xuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKCd0aW1lb3V0IG9mICcgKyBjb25maWcudGltZW91dCArICdtcyBleGNlZWRlZCcsIGNvbmZpZywgJ0VDT05OQUJPUlRFRCcpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgIC8vIFRoaXMgaXMgb25seSBkb25lIGlmIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50LlxuICAgIC8vIFNwZWNpZmljYWxseSBub3QgaWYgd2UncmUgaW4gYSB3ZWIgd29ya2VyLCBvciByZWFjdC1uYXRpdmUuXG4gICAgaWYgKHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkpIHtcbiAgICAgIHZhciBjb29raWVzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2Nvb2tpZXMnKTtcblxuICAgICAgLy8gQWRkIHhzcmYgaGVhZGVyXG4gICAgICB2YXIgeHNyZlZhbHVlID0gKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMgfHwgaXNVUkxTYW1lT3JpZ2luKGNvbmZpZy51cmwpKSAmJiBjb25maWcueHNyZkNvb2tpZU5hbWUgP1xuICAgICAgICAgIGNvb2tpZXMucmVhZChjb25maWcueHNyZkNvb2tpZU5hbWUpIDpcbiAgICAgICAgICB1bmRlZmluZWQ7XG5cbiAgICAgIGlmICh4c3JmVmFsdWUpIHtcbiAgICAgICAgcmVxdWVzdEhlYWRlcnNbY29uZmlnLnhzcmZIZWFkZXJOYW1lXSA9IHhzcmZWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBZGQgaGVhZGVycyB0byB0aGUgcmVxdWVzdFxuICAgIGlmICgnc2V0UmVxdWVzdEhlYWRlcicgaW4gcmVxdWVzdCkge1xuICAgICAgdXRpbHMuZm9yRWFjaChyZXF1ZXN0SGVhZGVycywgZnVuY3Rpb24gc2V0UmVxdWVzdEhlYWRlcih2YWwsIGtleSkge1xuICAgICAgICBpZiAodHlwZW9mIHJlcXVlc3REYXRhID09PSAndW5kZWZpbmVkJyAmJiBrZXkudG9Mb3dlckNhc2UoKSA9PT0gJ2NvbnRlbnQtdHlwZScpIHtcbiAgICAgICAgICAvLyBSZW1vdmUgQ29udGVudC1UeXBlIGlmIGRhdGEgaXMgdW5kZWZpbmVkXG4gICAgICAgICAgZGVsZXRlIHJlcXVlc3RIZWFkZXJzW2tleV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gT3RoZXJ3aXNlIGFkZCBoZWFkZXIgdG8gdGhlIHJlcXVlc3RcbiAgICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoa2V5LCB2YWwpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBBZGQgd2l0aENyZWRlbnRpYWxzIHRvIHJlcXVlc3QgaWYgbmVlZGVkXG4gICAgaWYgKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMpIHtcbiAgICAgIHJlcXVlc3Qud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBBZGQgcmVzcG9uc2VUeXBlIHRvIHJlcXVlc3QgaWYgbmVlZGVkXG4gICAgaWYgKGNvbmZpZy5yZXNwb25zZVR5cGUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJlcXVlc3QucmVzcG9uc2VUeXBlID0gY29uZmlnLnJlc3BvbnNlVHlwZTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKHJlcXVlc3QucmVzcG9uc2VUeXBlICE9PSAnanNvbicpIHtcbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIHByb2dyZXNzIGlmIG5lZWRlZFxuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIC8vIE5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCB1cGxvYWQgZXZlbnRzXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25VcGxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJyAmJiByZXF1ZXN0LnVwbG9hZCkge1xuICAgICAgcmVxdWVzdC51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25VcGxvYWRQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgICAgLy8gSGFuZGxlIGNhbmNlbGxhdGlvblxuICAgICAgY29uZmlnLmNhbmNlbFRva2VuLnByb21pc2UudGhlbihmdW5jdGlvbiBvbkNhbmNlbGVkKGNhbmNlbCkge1xuICAgICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0LmFib3J0KCk7XG4gICAgICAgIHJlamVjdChjYW5jZWwpO1xuICAgICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHJlcXVlc3REYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlcXVlc3REYXRhID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBTZW5kIHRoZSByZXF1ZXN0XG4gICAgcmVxdWVzdC5zZW5kKHJlcXVlc3REYXRhKTtcbiAgfSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2FkYXB0ZXJzL3hoci5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBlbmhhbmNlRXJyb3IgPSByZXF1aXJlKCcuL2VuaGFuY2VFcnJvcicpO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgbWVzc2FnZSwgY29uZmlnLCBlcnJvciBjb2RlLCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIGVycm9yIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuIEAgQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgY3JlYXRlZCBlcnJvci5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGVFcnJvcihtZXNzYWdlLCBjb25maWcsIGNvZGUsIHJlc3BvbnNlKSB7XG4gIHZhciBlcnJvciA9IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgcmV0dXJuIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXNwb25zZSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvY3JlYXRlRXJyb3IuanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQ2FuY2VsKHZhbHVlKSB7XG4gIHJldHVybiAhISh2YWx1ZSAmJiB2YWx1ZS5fX0NBTkNFTF9fKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL2lzQ2FuY2VsLmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBBIGBDYW5jZWxgIGlzIGFuIG9iamVjdCB0aGF0IGlzIHRocm93biB3aGVuIGFuIG9wZXJhdGlvbiBpcyBjYW5jZWxlZC5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7c3RyaW5nPX0gbWVzc2FnZSBUaGUgbWVzc2FnZS5cbiAqL1xuZnVuY3Rpb24gQ2FuY2VsKG1lc3NhZ2UpIHtcbiAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbn1cblxuQ2FuY2VsLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gJ0NhbmNlbCcgKyAodGhpcy5tZXNzYWdlID8gJzogJyArIHRoaXMubWVzc2FnZSA6ICcnKTtcbn07XG5cbkNhbmNlbC5wcm90b3R5cGUuX19DQU5DRUxfXyA9IHRydWU7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FuY2VsO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWwuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnO1xyXG5cclxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcclxuZyA9IChmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gdGhpcztcclxufSkoKTtcclxuXHJcbnRyeSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXHJcblx0ZyA9IGcgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpIHx8ICgxLGV2YWwpKFwidGhpc1wiKTtcclxufSBjYXRjaChlKSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcclxuXHRpZih0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKVxyXG5cdFx0ZyA9IHdpbmRvdztcclxufVxyXG5cclxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxyXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xyXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGc7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi9zdmcnKVxyXG5pbXBvcnQgJy4uL3N0eWxlL3N0eWxlLnN0eWwnO1xyXG5pbXBvcnQgYXV0b0NvbXBsZXRlIGZyb20nLi9tb2R1bGVzL2F1dG9jb21wbGV0ZSc7XHJcbmltcG9ydCB0eXBlIGZyb20gJy4vbW9kdWxlcy90eXBlJ1xyXG5pbXBvcnQgbWFrZU1hcCBmcm9tICcuL21vZHVsZXMvbWFwJztcclxuaW1wb3J0IGFkZEhlYXJ0IGZyb20gJy4vbW9kdWxlcy9oZWFydCdcclxuXHJcbmNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZHJlc3MnKTtcclxuY29uc3QgbG5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xuZycpO1xyXG5jb25zdCBsYXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGF0Jyk7XHJcbmNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gnKTtcclxuY29uc3QgbWFwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcC1jb250YWluZXInKTtcclxuY29uc3QgaGVhcnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZm9ybS5oZWFydCcpXHJcbmNvbnN0IGhlYXJ0TGlzdCA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGhlYXJ0cyk7XHJcblxyXG5hdXRvQ29tcGxldGUoaW5wdXQsIGxhdCwgbG5nKTtcclxuXHJcbnR5cGUoc2VhcmNoKVxyXG5cclxubWFrZU1hcChtYXApXHJcblxyXG5oZWFydExpc3QubWFwKCBoZWFydCA9PiB7XHJcbiAgICBoZWFydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZEhlYXJ0KVxyXG59KVxyXG5cclxuXHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcHVibGljL2pzL2FwcC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvc3R5bGUvc3R5bGUuc3R5bFxuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZnVuY3Rpb24gYXV0b2NvbXBsZXRlKGlucHV0LCBsYXRJbnB1dCwgbG5nSW5wdXQpe1xyXG4gICAgaWYoIWlucHV0KSByZXR1cm47XHJcbiAgICBjb25zdCBkcm9wZG93biA9IG5ldyBnb29nbGUubWFwcy5wbGFjZXMuQXV0b2NvbXBsZXRlKGlucHV0KVxyXG5cclxuICAgIGRyb3Bkb3duLmFkZExpc3RlbmVyKCdwbGFjZV9jaGFuZ2VkJywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBsYWNlID0gZHJvcGRvd24uZ2V0UGxhY2UoKTtcclxuICAgICAgICBsYXRJbnB1dC52YWx1ZSA9IHBsYWNlLmdlb21ldHJ5LmxvY2F0aW9uLmxhdCgpO1xyXG4gICAgICAgIGxuZ0lucHV0LnZhbHVlID0gcGxhY2UuZ2VvbWV0cnkubG9jYXRpb24ubG5nKCk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGlucHV0KVxyXG5cclxuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcclxuICAgICAgICAgICAgaWYoZS5rZXlDb2RlID09PSAxMykgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGF1dG9jb21wbGV0ZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcHVibGljL2pzL21vZHVsZXMvYXV0b2NvbXBsZXRlLmpzIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IGRvbXB1cmlmeSBmcm9tICdkb21wdXJpZnknO1xyXG5cclxuZnVuY3Rpb24gc2VhcmNoUmVzdWx0cyhzdG9yZXMpe1xyXG4gIHJldHVybiBzdG9yZXMubWFwKHN0b3JlID0+IHtcclxuICAgIHJldHVybiBgXHJcbiAgICAgIDxhIGhyZWY9XCIvc3RvcmUvJHtzdG9yZS5zbHVnfVwiIGNsYXNzPVwic2VhcmNoX19yZXN1bHRcIj5cclxuICAgICAgICA8c3Ryb25nPiR7c3RvcmUubmFtZX08L3N0cm9uZz5cclxuICAgICAgPC9hPlxyXG4gICAgYFxyXG4gIH0pLmpvaW4oJycpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHR5cGUoc2VhcmNoKXtcclxuICBpZighc2VhcmNoKSByZXR1cm47XHJcblxyXG4gIGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0W25hbWU9J3NlYXJjaCddXCIpO1xyXG4gIGNvbnN0IHNlYXJjaFJlc3VsdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hfX3Jlc3VsdHMnKTtcclxuXHJcblxyXG4gIHNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcclxuICAgIGlmKCF0aGlzLnZhbHVlKXtcclxuICAgICAgc2VhcmNoUmVzdWx0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHNlYXJjaFJlc3VsdC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHJcbiAgICBheGlvc1xyXG4gICAgICAuZ2V0KGAvYXBpL3NlYXJjaD9xPSR7dGhpcy52YWx1ZX1gKVxyXG4gICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIGlmKHJlcy5kYXRhLmxlbmd0aCl7XHJcbiAgICAgICAgICBzZWFyY2hSZXN1bHQuaW5uZXJIVE1MID0gZG9tcHVyaWZ5LnNhbml0aXplKHNlYXJjaFJlc3VsdHMocmVzLmRhdGEpKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2VhcmNoUmVzdWx0LmlubmVySFRNTCA9IGRvbXB1cmlmeS5zYW5pdGl6ZShgPGRpdiBjbGFzcz1cInNlYXJjaF9fcmVzdWx0XCI+IE5vIHJlc3VsdHMgZm9yICR7dGhpcy52YWx1ZX08L2Rpdj5gKVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSlcclxuICB9KVxyXG5cclxuICBzZWFyY2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB7XHJcbiAgICBpZiAoIVszOCwgNDAsIDEzXS5pbmNsdWRlcyhlLmtleUNvZGUpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGFjdGl2ZUNsYXNzID0gJ3NlYXJjaF9fcmVzdWx0LS1hY3RpdmUnO1xyXG4gICAgY29uc3QgY3VycmVudCA9IHNlYXJjaC5xdWVyeVNlbGVjdG9yKGAuJHthY3RpdmVDbGFzc31gKTtcclxuICAgIGNvbnN0IGl0ZW1zID0gc2VhcmNoLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWFyY2hfX3Jlc3VsdCcpO1xyXG4gICAgbGV0IG5leHQ7XHJcbiAgICBpZiAoZS5rZXlDb2RlID09PSA0MCAmJiBjdXJyZW50KSB7XHJcbiAgICAgIG5leHQgPSBjdXJyZW50Lm5leHRFbGVtZW50U2libGluZyB8fCBpdGVtc1swXTtcclxuICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSA0MCkge1xyXG4gICAgICBuZXh0ID0gaXRlbXNbMF07XHJcbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMzggJiYgY3VycmVudCkge1xyXG4gICAgICBuZXh0ID0gY3VycmVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nIHx8IGl0ZW1zW2l0ZW1zLmxlbmd0aCAtIDFdXHJcbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMzgpIHtcclxuICAgICAgbmV4dCA9IGl0ZW1zW2l0ZW1zLmxlbmd0aCAtIDFdO1xyXG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDEzICYmIGN1cnJlbnQuaHJlZikge1xyXG4gICAgICB3aW5kb3cubG9jYXRpb24gPSBjdXJyZW50LmhyZWY7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChjdXJyZW50KSB7XHJcbiAgICAgIGN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZShhY3RpdmVDbGFzcyk7XHJcbiAgICB9XHJcbiAgICBuZXh0LmNsYXNzTGlzdC5hZGQoYWN0aXZlQ2xhc3MpO1xyXG4gIH0pO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHB1YmxpYy9qcy9tb2R1bGVzL3R5cGUuanMiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBiaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2JpbmQnKTtcbnZhciBBeGlvcyA9IHJlcXVpcmUoJy4vY29yZS9BeGlvcycpO1xudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi9kZWZhdWx0cycpO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBkZWZhdWx0Q29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKiBAcmV0dXJuIHtBeGlvc30gQSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqL1xuZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdENvbmZpZykge1xuICB2YXIgY29udGV4dCA9IG5ldyBBeGlvcyhkZWZhdWx0Q29uZmlnKTtcbiAgdmFyIGluc3RhbmNlID0gYmluZChBeGlvcy5wcm90b3R5cGUucmVxdWVzdCwgY29udGV4dCk7XG5cbiAgLy8gQ29weSBheGlvcy5wcm90b3R5cGUgdG8gaW5zdGFuY2VcbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBBeGlvcy5wcm90b3R5cGUsIGNvbnRleHQpO1xuXG4gIC8vIENvcHkgY29udGV4dCB0byBpbnN0YW5jZVxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIGNvbnRleHQpO1xuXG4gIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8gQ3JlYXRlIHRoZSBkZWZhdWx0IGluc3RhbmNlIHRvIGJlIGV4cG9ydGVkXG52YXIgYXhpb3MgPSBjcmVhdGVJbnN0YW5jZShkZWZhdWx0cyk7XG5cbi8vIEV4cG9zZSBBeGlvcyBjbGFzcyB0byBhbGxvdyBjbGFzcyBpbmhlcml0YW5jZVxuYXhpb3MuQXhpb3MgPSBBeGlvcztcblxuLy8gRmFjdG9yeSBmb3IgY3JlYXRpbmcgbmV3IGluc3RhbmNlc1xuYXhpb3MuY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGluc3RhbmNlQ29uZmlnKSB7XG4gIHJldHVybiBjcmVhdGVJbnN0YW5jZSh1dGlscy5tZXJnZShkZWZhdWx0cywgaW5zdGFuY2VDb25maWcpKTtcbn07XG5cbi8vIEV4cG9zZSBDYW5jZWwgJiBDYW5jZWxUb2tlblxuYXhpb3MuQ2FuY2VsID0gcmVxdWlyZSgnLi9jYW5jZWwvQ2FuY2VsJyk7XG5heGlvcy5DYW5jZWxUb2tlbiA9IHJlcXVpcmUoJy4vY2FuY2VsL0NhbmNlbFRva2VuJyk7XG5heGlvcy5pc0NhbmNlbCA9IHJlcXVpcmUoJy4vY2FuY2VsL2lzQ2FuY2VsJyk7XG5cbi8vIEV4cG9zZSBhbGwvc3ByZWFkXG5heGlvcy5hbGwgPSBmdW5jdGlvbiBhbGwocHJvbWlzZXMpIHtcbiAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbn07XG5heGlvcy5zcHJlYWQgPSByZXF1aXJlKCcuL2hlbHBlcnMvc3ByZWFkJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYXhpb3M7XG5cbi8vIEFsbG93IHVzZSBvZiBkZWZhdWx0IGltcG9ydCBzeW50YXggaW4gVHlwZVNjcmlwdFxubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGF4aW9zO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2F4aW9zLmpzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4vLi4vZGVmYXVsdHMnKTtcbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciBJbnRlcmNlcHRvck1hbmFnZXIgPSByZXF1aXJlKCcuL0ludGVyY2VwdG9yTWFuYWdlcicpO1xudmFyIGRpc3BhdGNoUmVxdWVzdCA9IHJlcXVpcmUoJy4vZGlzcGF0Y2hSZXF1ZXN0Jyk7XG52YXIgaXNBYnNvbHV0ZVVSTCA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9pc0Fic29sdXRlVVJMJyk7XG52YXIgY29tYmluZVVSTHMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvY29tYmluZVVSTHMnKTtcblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gaW5zdGFuY2VDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqL1xuZnVuY3Rpb24gQXhpb3MoaW5zdGFuY2VDb25maWcpIHtcbiAgdGhpcy5kZWZhdWx0cyA9IGluc3RhbmNlQ29uZmlnO1xuICB0aGlzLmludGVyY2VwdG9ycyA9IHtcbiAgICByZXF1ZXN0OiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKCksXG4gICAgcmVzcG9uc2U6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKVxuICB9O1xufVxuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyBzcGVjaWZpYyBmb3IgdGhpcyByZXF1ZXN0IChtZXJnZWQgd2l0aCB0aGlzLmRlZmF1bHRzKVxuICovXG5BeGlvcy5wcm90b3R5cGUucmVxdWVzdCA9IGZ1bmN0aW9uIHJlcXVlc3QoY29uZmlnKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAvLyBBbGxvdyBmb3IgYXhpb3MoJ2V4YW1wbGUvdXJsJ1ssIGNvbmZpZ10pIGEgbGEgZmV0Y2ggQVBJXG4gIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgIGNvbmZpZyA9IHV0aWxzLm1lcmdlKHtcbiAgICAgIHVybDogYXJndW1lbnRzWzBdXG4gICAgfSwgYXJndW1lbnRzWzFdKTtcbiAgfVxuXG4gIGNvbmZpZyA9IHV0aWxzLm1lcmdlKGRlZmF1bHRzLCB0aGlzLmRlZmF1bHRzLCB7IG1ldGhvZDogJ2dldCcgfSwgY29uZmlnKTtcblxuICAvLyBTdXBwb3J0IGJhc2VVUkwgY29uZmlnXG4gIGlmIChjb25maWcuYmFzZVVSTCAmJiAhaXNBYnNvbHV0ZVVSTChjb25maWcudXJsKSkge1xuICAgIGNvbmZpZy51cmwgPSBjb21iaW5lVVJMcyhjb25maWcuYmFzZVVSTCwgY29uZmlnLnVybCk7XG4gIH1cblxuICAvLyBIb29rIHVwIGludGVyY2VwdG9ycyBtaWRkbGV3YXJlXG4gIHZhciBjaGFpbiA9IFtkaXNwYXRjaFJlcXVlc3QsIHVuZGVmaW5lZF07XG4gIHZhciBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKGNvbmZpZyk7XG5cbiAgdGhpcy5pbnRlcmNlcHRvcnMucmVxdWVzdC5mb3JFYWNoKGZ1bmN0aW9uIHVuc2hpZnRSZXF1ZXN0SW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgY2hhaW4udW5zaGlmdChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgfSk7XG5cbiAgdGhpcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UuZm9yRWFjaChmdW5jdGlvbiBwdXNoUmVzcG9uc2VJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICBjaGFpbi5wdXNoKGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICB9KTtcblxuICB3aGlsZSAoY2hhaW4ubGVuZ3RoKSB7XG4gICAgcHJvbWlzZSA9IHByb21pc2UudGhlbihjaGFpbi5zaGlmdCgpLCBjaGFpbi5zaGlmdCgpKTtcbiAgfVxuXG4gIHJldHVybiBwcm9taXNlO1xufTtcblxuLy8gUHJvdmlkZSBhbGlhc2VzIGZvciBzdXBwb3J0ZWQgcmVxdWVzdCBtZXRob2RzXG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odXJsLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHV0aWxzLm1lcmdlKGNvbmZpZyB8fCB7fSwge1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICB1cmw6IHVybFxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1dGlscy5tZXJnZShjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmwsXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfSkpO1xuICB9O1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQXhpb3M7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9BeGlvcy5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgbm9ybWFsaXplZE5hbWUpIHtcbiAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLCBmdW5jdGlvbiBwcm9jZXNzSGVhZGVyKHZhbHVlLCBuYW1lKSB7XG4gICAgaWYgKG5hbWUgIT09IG5vcm1hbGl6ZWROYW1lICYmIG5hbWUudG9VcHBlckNhc2UoKSA9PT0gbm9ybWFsaXplZE5hbWUudG9VcHBlckNhc2UoKSkge1xuICAgICAgaGVhZGVyc1tub3JtYWxpemVkTmFtZV0gPSB2YWx1ZTtcbiAgICAgIGRlbGV0ZSBoZWFkZXJzW25hbWVdO1xuICAgIH1cbiAgfSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZS5qc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY3JlYXRlRXJyb3IgPSByZXF1aXJlKCcuL2NyZWF0ZUVycm9yJyk7XG5cbi8qKlxuICogUmVzb2x2ZSBvciByZWplY3QgYSBQcm9taXNlIGJhc2VkIG9uIHJlc3BvbnNlIHN0YXR1cy5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZXNvbHZlIEEgZnVuY3Rpb24gdGhhdCByZXNvbHZlcyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdCBBIGZ1bmN0aW9uIHRoYXQgcmVqZWN0cyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7b2JqZWN0fSByZXNwb25zZSBUaGUgcmVzcG9uc2UuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgcmVzcG9uc2UpIHtcbiAgdmFyIHZhbGlkYXRlU3RhdHVzID0gcmVzcG9uc2UuY29uZmlnLnZhbGlkYXRlU3RhdHVzO1xuICAvLyBOb3RlOiBzdGF0dXMgaXMgbm90IGV4cG9zZWQgYnkgWERvbWFpblJlcXVlc3RcbiAgaWYgKCFyZXNwb25zZS5zdGF0dXMgfHwgIXZhbGlkYXRlU3RhdHVzIHx8IHZhbGlkYXRlU3RhdHVzKHJlc3BvbnNlLnN0YXR1cykpIHtcbiAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgfSBlbHNlIHtcbiAgICByZWplY3QoY3JlYXRlRXJyb3IoXG4gICAgICAnUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgY29kZSAnICsgcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgcmVzcG9uc2UuY29uZmlnLFxuICAgICAgbnVsbCxcbiAgICAgIHJlc3BvbnNlXG4gICAgKSk7XG4gIH1cbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9zZXR0bGUuanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVcGRhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIGNvbmZpZywgZXJyb3IgY29kZSwgYW5kIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7RXJyb3J9IGVycm9yIFRoZSBlcnJvciB0byB1cGRhdGUuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuIEAgQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgZXJyb3IuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZW5oYW5jZUVycm9yKGVycm9yLCBjb25maWcsIGNvZGUsIHJlc3BvbnNlKSB7XG4gIGVycm9yLmNvbmZpZyA9IGNvbmZpZztcbiAgaWYgKGNvZGUpIHtcbiAgICBlcnJvci5jb2RlID0gY29kZTtcbiAgfVxuICBlcnJvci5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICByZXR1cm4gZXJyb3I7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZW5oYW5jZUVycm9yLmpzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuZnVuY3Rpb24gZW5jb2RlKHZhbCkge1xuICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHZhbCkuXG4gICAgcmVwbGFjZSgvJTQwL2dpLCAnQCcpLlxuICAgIHJlcGxhY2UoLyUzQS9naSwgJzonKS5cbiAgICByZXBsYWNlKC8lMjQvZywgJyQnKS5cbiAgICByZXBsYWNlKC8lMkMvZ2ksICcsJykuXG4gICAgcmVwbGFjZSgvJTIwL2csICcrJykuXG4gICAgcmVwbGFjZSgvJTVCL2dpLCAnWycpLlxuICAgIHJlcGxhY2UoLyU1RC9naSwgJ10nKTtcbn1cblxuLyoqXG4gKiBCdWlsZCBhIFVSTCBieSBhcHBlbmRpbmcgcGFyYW1zIHRvIHRoZSBlbmRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBiYXNlIG9mIHRoZSB1cmwgKGUuZy4sIGh0dHA6Ly93d3cuZ29vZ2xlLmNvbSlcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcGFyYW1zXSBUaGUgcGFyYW1zIHRvIGJlIGFwcGVuZGVkXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZm9ybWF0dGVkIHVybFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJ1aWxkVVJMKHVybCwgcGFyYW1zLCBwYXJhbXNTZXJpYWxpemVyKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICBpZiAoIXBhcmFtcykge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB2YXIgc2VyaWFsaXplZFBhcmFtcztcbiAgaWYgKHBhcmFtc1NlcmlhbGl6ZXIpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zU2VyaWFsaXplcihwYXJhbXMpO1xuICB9IGVsc2UgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKHBhcmFtcykpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zLnRvU3RyaW5nKCk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHBhcnRzID0gW107XG5cbiAgICB1dGlscy5mb3JFYWNoKHBhcmFtcywgZnVuY3Rpb24gc2VyaWFsaXplKHZhbCwga2V5KSB7XG4gICAgICBpZiAodmFsID09PSBudWxsIHx8IHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHV0aWxzLmlzQXJyYXkodmFsKSkge1xuICAgICAgICBrZXkgPSBrZXkgKyAnW10nO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXV0aWxzLmlzQXJyYXkodmFsKSkge1xuICAgICAgICB2YWwgPSBbdmFsXTtcbiAgICAgIH1cblxuICAgICAgdXRpbHMuZm9yRWFjaCh2YWwsIGZ1bmN0aW9uIHBhcnNlVmFsdWUodikge1xuICAgICAgICBpZiAodXRpbHMuaXNEYXRlKHYpKSB7XG4gICAgICAgICAgdiA9IHYudG9JU09TdHJpbmcoKTtcbiAgICAgICAgfSBlbHNlIGlmICh1dGlscy5pc09iamVjdCh2KSkge1xuICAgICAgICAgIHYgPSBKU09OLnN0cmluZ2lmeSh2KTtcbiAgICAgICAgfVxuICAgICAgICBwYXJ0cy5wdXNoKGVuY29kZShrZXkpICsgJz0nICsgZW5jb2RlKHYpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcnRzLmpvaW4oJyYnKTtcbiAgfVxuXG4gIGlmIChzZXJpYWxpemVkUGFyYW1zKSB7XG4gICAgdXJsICs9ICh1cmwuaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJykgKyBzZXJpYWxpemVkUGFyYW1zO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idWlsZFVSTC5qc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbi8qKlxuICogUGFyc2UgaGVhZGVycyBpbnRvIGFuIG9iamVjdFxuICpcbiAqIGBgYFxuICogRGF0ZTogV2VkLCAyNyBBdWcgMjAxNCAwODo1ODo0OSBHTVRcbiAqIENvbnRlbnQtVHlwZTogYXBwbGljYXRpb24vanNvblxuICogQ29ubmVjdGlvbjoga2VlcC1hbGl2ZVxuICogVHJhbnNmZXItRW5jb2Rpbmc6IGNodW5rZWRcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBoZWFkZXJzIEhlYWRlcnMgbmVlZGluZyB0byBiZSBwYXJzZWRcbiAqIEByZXR1cm5zIHtPYmplY3R9IEhlYWRlcnMgcGFyc2VkIGludG8gYW4gb2JqZWN0XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcGFyc2VIZWFkZXJzKGhlYWRlcnMpIHtcbiAgdmFyIHBhcnNlZCA9IHt9O1xuICB2YXIga2V5O1xuICB2YXIgdmFsO1xuICB2YXIgaTtcblxuICBpZiAoIWhlYWRlcnMpIHsgcmV0dXJuIHBhcnNlZDsgfVxuXG4gIHV0aWxzLmZvckVhY2goaGVhZGVycy5zcGxpdCgnXFxuJyksIGZ1bmN0aW9uIHBhcnNlcihsaW5lKSB7XG4gICAgaSA9IGxpbmUuaW5kZXhPZignOicpO1xuICAgIGtleSA9IHV0aWxzLnRyaW0obGluZS5zdWJzdHIoMCwgaSkpLnRvTG93ZXJDYXNlKCk7XG4gICAgdmFsID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cihpICsgMSkpO1xuXG4gICAgaWYgKGtleSkge1xuICAgICAgcGFyc2VkW2tleV0gPSBwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldICsgJywgJyArIHZhbCA6IHZhbDtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBwYXJzZWQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvcGFyc2VIZWFkZXJzLmpzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoXG4gIHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkgP1xuXG4gIC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBoYXZlIGZ1bGwgc3VwcG9ydCBvZiB0aGUgQVBJcyBuZWVkZWQgdG8gdGVzdFxuICAvLyB3aGV0aGVyIHRoZSByZXF1ZXN0IFVSTCBpcyBvZiB0aGUgc2FtZSBvcmlnaW4gYXMgY3VycmVudCBsb2NhdGlvbi5cbiAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICB2YXIgbXNpZSA9IC8obXNpZXx0cmlkZW50KS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgdmFyIHVybFBhcnNpbmdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIHZhciBvcmlnaW5VUkw7XG5cbiAgICAvKipcbiAgICAqIFBhcnNlIGEgVVJMIHRvIGRpc2NvdmVyIGl0J3MgY29tcG9uZW50c1xuICAgICpcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSB1cmwgVGhlIFVSTCB0byBiZSBwYXJzZWRcbiAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgKi9cbiAgICBmdW5jdGlvbiByZXNvbHZlVVJMKHVybCkge1xuICAgICAgdmFyIGhyZWYgPSB1cmw7XG5cbiAgICAgIGlmIChtc2llKSB7XG4gICAgICAgIC8vIElFIG5lZWRzIGF0dHJpYnV0ZSBzZXQgdHdpY2UgdG8gbm9ybWFsaXplIHByb3BlcnRpZXNcbiAgICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG4gICAgICAgIGhyZWYgPSB1cmxQYXJzaW5nTm9kZS5ocmVmO1xuICAgICAgfVxuXG4gICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcblxuICAgICAgLy8gdXJsUGFyc2luZ05vZGUgcHJvdmlkZXMgdGhlIFVybFV0aWxzIGludGVyZmFjZSAtIGh0dHA6Ly91cmwuc3BlYy53aGF0d2cub3JnLyN1cmx1dGlsc1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaHJlZjogdXJsUGFyc2luZ05vZGUuaHJlZixcbiAgICAgICAgcHJvdG9jb2w6IHVybFBhcnNpbmdOb2RlLnByb3RvY29sID8gdXJsUGFyc2luZ05vZGUucHJvdG9jb2wucmVwbGFjZSgvOiQvLCAnJykgOiAnJyxcbiAgICAgICAgaG9zdDogdXJsUGFyc2luZ05vZGUuaG9zdCxcbiAgICAgICAgc2VhcmNoOiB1cmxQYXJzaW5nTm9kZS5zZWFyY2ggPyB1cmxQYXJzaW5nTm9kZS5zZWFyY2gucmVwbGFjZSgvXlxcPy8sICcnKSA6ICcnLFxuICAgICAgICBoYXNoOiB1cmxQYXJzaW5nTm9kZS5oYXNoID8gdXJsUGFyc2luZ05vZGUuaGFzaC5yZXBsYWNlKC9eIy8sICcnKSA6ICcnLFxuICAgICAgICBob3N0bmFtZTogdXJsUGFyc2luZ05vZGUuaG9zdG5hbWUsXG4gICAgICAgIHBvcnQ6IHVybFBhcnNpbmdOb2RlLnBvcnQsXG4gICAgICAgIHBhdGhuYW1lOiAodXJsUGFyc2luZ05vZGUucGF0aG5hbWUuY2hhckF0KDApID09PSAnLycpID9cbiAgICAgICAgICAgICAgICAgIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lIDpcbiAgICAgICAgICAgICAgICAgICcvJyArIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lXG4gICAgICB9O1xuICAgIH1cblxuICAgIG9yaWdpblVSTCA9IHJlc29sdmVVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuXG4gICAgLyoqXG4gICAgKiBEZXRlcm1pbmUgaWYgYSBVUkwgc2hhcmVzIHRoZSBzYW1lIG9yaWdpbiBhcyB0aGUgY3VycmVudCBsb2NhdGlvblxuICAgICpcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSByZXF1ZXN0VVJMIFRoZSBVUkwgdG8gdGVzdFxuICAgICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4sIG90aGVyd2lzZSBmYWxzZVxuICAgICovXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbihyZXF1ZXN0VVJMKSB7XG4gICAgICB2YXIgcGFyc2VkID0gKHV0aWxzLmlzU3RyaW5nKHJlcXVlc3RVUkwpKSA/IHJlc29sdmVVUkwocmVxdWVzdFVSTCkgOiByZXF1ZXN0VVJMO1xuICAgICAgcmV0dXJuIChwYXJzZWQucHJvdG9jb2wgPT09IG9yaWdpblVSTC5wcm90b2NvbCAmJlxuICAgICAgICAgICAgcGFyc2VkLmhvc3QgPT09IG9yaWdpblVSTC5ob3N0KTtcbiAgICB9O1xuICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnZzICh3ZWIgd29ya2VycywgcmVhY3QtbmF0aXZlKSBsYWNrIG5lZWRlZCBzdXBwb3J0LlxuICAoZnVuY3Rpb24gbm9uU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4oKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICB9KSgpXG4pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luLmpzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbi8vIGJ0b2EgcG9seWZpbGwgZm9yIElFPDEwIGNvdXJ0ZXN5IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXZpZGNoYW1iZXJzL0Jhc2U2NC5qc1xuXG52YXIgY2hhcnMgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz0nO1xuXG5mdW5jdGlvbiBFKCkge1xuICB0aGlzLm1lc3NhZ2UgPSAnU3RyaW5nIGNvbnRhaW5zIGFuIGludmFsaWQgY2hhcmFjdGVyJztcbn1cbkUucHJvdG90eXBlID0gbmV3IEVycm9yO1xuRS5wcm90b3R5cGUuY29kZSA9IDU7XG5FLnByb3RvdHlwZS5uYW1lID0gJ0ludmFsaWRDaGFyYWN0ZXJFcnJvcic7XG5cbmZ1bmN0aW9uIGJ0b2EoaW5wdXQpIHtcbiAgdmFyIHN0ciA9IFN0cmluZyhpbnB1dCk7XG4gIHZhciBvdXRwdXQgPSAnJztcbiAgZm9yIChcbiAgICAvLyBpbml0aWFsaXplIHJlc3VsdCBhbmQgY291bnRlclxuICAgIHZhciBibG9jaywgY2hhckNvZGUsIGlkeCA9IDAsIG1hcCA9IGNoYXJzO1xuICAgIC8vIGlmIHRoZSBuZXh0IHN0ciBpbmRleCBkb2VzIG5vdCBleGlzdDpcbiAgICAvLyAgIGNoYW5nZSB0aGUgbWFwcGluZyB0YWJsZSB0byBcIj1cIlxuICAgIC8vICAgY2hlY2sgaWYgZCBoYXMgbm8gZnJhY3Rpb25hbCBkaWdpdHNcbiAgICBzdHIuY2hhckF0KGlkeCB8IDApIHx8IChtYXAgPSAnPScsIGlkeCAlIDEpO1xuICAgIC8vIFwiOCAtIGlkeCAlIDEgKiA4XCIgZ2VuZXJhdGVzIHRoZSBzZXF1ZW5jZSAyLCA0LCA2LCA4XG4gICAgb3V0cHV0ICs9IG1hcC5jaGFyQXQoNjMgJiBibG9jayA+PiA4IC0gaWR4ICUgMSAqIDgpXG4gICkge1xuICAgIGNoYXJDb2RlID0gc3RyLmNoYXJDb2RlQXQoaWR4ICs9IDMgLyA0KTtcbiAgICBpZiAoY2hhckNvZGUgPiAweEZGKSB7XG4gICAgICB0aHJvdyBuZXcgRSgpO1xuICAgIH1cbiAgICBibG9jayA9IGJsb2NrIDw8IDggfCBjaGFyQ29kZTtcbiAgfVxuICByZXR1cm4gb3V0cHV0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJ0b2E7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idG9hLmpzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoXG4gIHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkgP1xuXG4gIC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBzdXBwb3J0IGRvY3VtZW50LmNvb2tpZVxuICAoZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgIHJldHVybiB7XG4gICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUobmFtZSwgdmFsdWUsIGV4cGlyZXMsIHBhdGgsIGRvbWFpbiwgc2VjdXJlKSB7XG4gICAgICAgIHZhciBjb29raWUgPSBbXTtcbiAgICAgICAgY29va2llLnB1c2gobmFtZSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpO1xuXG4gICAgICAgIGlmICh1dGlscy5pc051bWJlcihleHBpcmVzKSkge1xuICAgICAgICAgIGNvb2tpZS5wdXNoKCdleHBpcmVzPScgKyBuZXcgRGF0ZShleHBpcmVzKS50b0dNVFN0cmluZygpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhwYXRoKSkge1xuICAgICAgICAgIGNvb2tpZS5wdXNoKCdwYXRoPScgKyBwYXRoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhkb21haW4pKSB7XG4gICAgICAgICAgY29va2llLnB1c2goJ2RvbWFpbj0nICsgZG9tYWluKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZWN1cmUgPT09IHRydWUpIHtcbiAgICAgICAgICBjb29raWUucHVzaCgnc2VjdXJlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBjb29raWUuam9pbignOyAnKTtcbiAgICAgIH0sXG5cbiAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQobmFtZSkge1xuICAgICAgICB2YXIgbWF0Y2ggPSBkb2N1bWVudC5jb29raWUubWF0Y2gobmV3IFJlZ0V4cCgnKF58O1xcXFxzKikoJyArIG5hbWUgKyAnKT0oW147XSopJykpO1xuICAgICAgICByZXR1cm4gKG1hdGNoID8gZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoWzNdKSA6IG51bGwpO1xuICAgICAgfSxcblxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUobmFtZSkge1xuICAgICAgICB0aGlzLndyaXRlKG5hbWUsICcnLCBEYXRlLm5vdygpIC0gODY0MDAwMDApO1xuICAgICAgfVxuICAgIH07XG4gIH0pKCkgOlxuXG4gIC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudiAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cbiAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKCkge30sXG4gICAgICByZWFkOiBmdW5jdGlvbiByZWFkKCkgeyByZXR1cm4gbnVsbDsgfSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9KSgpXG4pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29va2llcy5qc1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIEludGVyY2VwdG9yTWFuYWdlcigpIHtcbiAgdGhpcy5oYW5kbGVycyA9IFtdO1xufVxuXG4vKipcbiAqIEFkZCBhIG5ldyBpbnRlcmNlcHRvciB0byB0aGUgc3RhY2tcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdWxmaWxsZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgdGhlbmAgZm9yIGEgYFByb21pc2VgXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3RlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGByZWplY3RgIGZvciBhIGBQcm9taXNlYFxuICpcbiAqIEByZXR1cm4ge051bWJlcn0gQW4gSUQgdXNlZCB0byByZW1vdmUgaW50ZXJjZXB0b3IgbGF0ZXJcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS51c2UgPSBmdW5jdGlvbiB1c2UoZnVsZmlsbGVkLCByZWplY3RlZCkge1xuICB0aGlzLmhhbmRsZXJzLnB1c2goe1xuICAgIGZ1bGZpbGxlZDogZnVsZmlsbGVkLFxuICAgIHJlamVjdGVkOiByZWplY3RlZFxuICB9KTtcbiAgcmV0dXJuIHRoaXMuaGFuZGxlcnMubGVuZ3RoIC0gMTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGFuIGludGVyY2VwdG9yIGZyb20gdGhlIHN0YWNrXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGlkIFRoZSBJRCB0aGF0IHdhcyByZXR1cm5lZCBieSBgdXNlYFxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmVqZWN0ID0gZnVuY3Rpb24gZWplY3QoaWQpIHtcbiAgaWYgKHRoaXMuaGFuZGxlcnNbaWRdKSB7XG4gICAgdGhpcy5oYW5kbGVyc1tpZF0gPSBudWxsO1xuICB9XG59O1xuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBhbGwgdGhlIHJlZ2lzdGVyZWQgaW50ZXJjZXB0b3JzXG4gKlxuICogVGhpcyBtZXRob2QgaXMgcGFydGljdWxhcmx5IHVzZWZ1bCBmb3Igc2tpcHBpbmcgb3ZlciBhbnlcbiAqIGludGVyY2VwdG9ycyB0aGF0IG1heSBoYXZlIGJlY29tZSBgbnVsbGAgY2FsbGluZyBgZWplY3RgLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBjYWxsIGZvciBlYWNoIGludGVyY2VwdG9yXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIGZvckVhY2goZm4pIHtcbiAgdXRpbHMuZm9yRWFjaCh0aGlzLmhhbmRsZXJzLCBmdW5jdGlvbiBmb3JFYWNoSGFuZGxlcihoKSB7XG4gICAgaWYgKGggIT09IG51bGwpIHtcbiAgICAgIGZuKGgpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEludGVyY2VwdG9yTWFuYWdlcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0ludGVyY2VwdG9yTWFuYWdlci5qc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgdHJhbnNmb3JtRGF0YSA9IHJlcXVpcmUoJy4vdHJhbnNmb3JtRGF0YScpO1xudmFyIGlzQ2FuY2VsID0gcmVxdWlyZSgnLi4vY2FuY2VsL2lzQ2FuY2VsJyk7XG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuLi9kZWZhdWx0cycpO1xuXG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gKi9cbmZ1bmN0aW9uIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKSB7XG4gIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICBjb25maWcuY2FuY2VsVG9rZW4udGhyb3dJZlJlcXVlc3RlZCgpO1xuICB9XG59XG5cbi8qKlxuICogRGlzcGF0Y2ggYSByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXIgdXNpbmcgdGhlIGNvbmZpZ3VyZWQgYWRhcHRlci5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIFRoZSBjb25maWcgdGhhdCBpcyB0byBiZSB1c2VkIGZvciB0aGUgcmVxdWVzdFxuICogQHJldHVybnMge1Byb21pc2V9IFRoZSBQcm9taXNlIHRvIGJlIGZ1bGZpbGxlZFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRpc3BhdGNoUmVxdWVzdChjb25maWcpIHtcbiAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gIC8vIEVuc3VyZSBoZWFkZXJzIGV4aXN0XG4gIGNvbmZpZy5oZWFkZXJzID0gY29uZmlnLmhlYWRlcnMgfHwge307XG5cbiAgLy8gVHJhbnNmb3JtIHJlcXVlc3QgZGF0YVxuICBjb25maWcuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgY29uZmlnLmRhdGEsXG4gICAgY29uZmlnLmhlYWRlcnMsXG4gICAgY29uZmlnLnRyYW5zZm9ybVJlcXVlc3RcbiAgKTtcblxuICAvLyBGbGF0dGVuIGhlYWRlcnNcbiAgY29uZmlnLmhlYWRlcnMgPSB1dGlscy5tZXJnZShcbiAgICBjb25maWcuaGVhZGVycy5jb21tb24gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnNbY29uZmlnLm1ldGhvZF0gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnMgfHwge31cbiAgKTtcblxuICB1dGlscy5mb3JFYWNoKFxuICAgIFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJywgJ2NvbW1vbiddLFxuICAgIGZ1bmN0aW9uIGNsZWFuSGVhZGVyQ29uZmlnKG1ldGhvZCkge1xuICAgICAgZGVsZXRlIGNvbmZpZy5oZWFkZXJzW21ldGhvZF07XG4gICAgfVxuICApO1xuXG4gIHZhciBhZGFwdGVyID0gY29uZmlnLmFkYXB0ZXIgfHwgZGVmYXVsdHMuYWRhcHRlcjtcblxuICByZXR1cm4gYWRhcHRlcihjb25maWcpLnRoZW4oZnVuY3Rpb24gb25BZGFwdGVyUmVzb2x1dGlvbihyZXNwb25zZSkge1xuICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgcmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgICByZXNwb25zZS5kYXRhLFxuICAgICAgcmVzcG9uc2UuaGVhZGVycyxcbiAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZVxuICAgICk7XG5cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH0sIGZ1bmN0aW9uIG9uQWRhcHRlclJlamVjdGlvbihyZWFzb24pIHtcbiAgICBpZiAoIWlzQ2FuY2VsKHJlYXNvbikpIHtcbiAgICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcbiAgICAgIGlmIChyZWFzb24gJiYgcmVhc29uLnJlc3BvbnNlKSB7XG4gICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSxcbiAgICAgICAgICByZWFzb24ucmVzcG9uc2UuaGVhZGVycyxcbiAgICAgICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2VcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVhc29uKTtcbiAgfSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZGlzcGF0Y2hSZXF1ZXN0LmpzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuLyoqXG4gKiBUcmFuc2Zvcm0gdGhlIGRhdGEgZm9yIGEgcmVxdWVzdCBvciBhIHJlc3BvbnNlXG4gKlxuICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBkYXRhIFRoZSBkYXRhIHRvIGJlIHRyYW5zZm9ybWVkXG4gKiBAcGFyYW0ge0FycmF5fSBoZWFkZXJzIFRoZSBoZWFkZXJzIGZvciB0aGUgcmVxdWVzdCBvciByZXNwb25zZVxuICogQHBhcmFtIHtBcnJheXxGdW5jdGlvbn0gZm5zIEEgc2luZ2xlIGZ1bmN0aW9uIG9yIEFycmF5IG9mIGZ1bmN0aW9uc1xuICogQHJldHVybnMgeyp9IFRoZSByZXN1bHRpbmcgdHJhbnNmb3JtZWQgZGF0YVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRyYW5zZm9ybURhdGEoZGF0YSwgaGVhZGVycywgZm5zKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICB1dGlscy5mb3JFYWNoKGZucywgZnVuY3Rpb24gdHJhbnNmb3JtKGZuKSB7XG4gICAgZGF0YSA9IGZuKGRhdGEsIGhlYWRlcnMpO1xuICB9KTtcblxuICByZXR1cm4gZGF0YTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS90cmFuc2Zvcm1EYXRhLmpzXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgVVJMIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0Fic29sdXRlVVJMKHVybCkge1xuICAvLyBBIFVSTCBpcyBjb25zaWRlcmVkIGFic29sdXRlIGlmIGl0IGJlZ2lucyB3aXRoIFwiPHNjaGVtZT46Ly9cIiBvciBcIi8vXCIgKHByb3RvY29sLXJlbGF0aXZlIFVSTCkuXG4gIC8vIFJGQyAzOTg2IGRlZmluZXMgc2NoZW1lIG5hbWUgYXMgYSBzZXF1ZW5jZSBvZiBjaGFyYWN0ZXJzIGJlZ2lubmluZyB3aXRoIGEgbGV0dGVyIGFuZCBmb2xsb3dlZFxuICAvLyBieSBhbnkgY29tYmluYXRpb24gb2YgbGV0dGVycywgZGlnaXRzLCBwbHVzLCBwZXJpb2QsIG9yIGh5cGhlbi5cbiAgcmV0dXJuIC9eKFthLXpdW2EtelxcZFxcK1xcLVxcLl0qOik/XFwvXFwvL2kudGVzdCh1cmwpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwuanNcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IFVSTCBieSBjb21iaW5pbmcgdGhlIHNwZWNpZmllZCBVUkxzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVUkwgVGhlIGJhc2UgVVJMXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVsYXRpdmVVUkwgVGhlIHJlbGF0aXZlIFVSTFxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGNvbWJpbmVkIFVSTFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNvbWJpbmVVUkxzKGJhc2VVUkwsIHJlbGF0aXZlVVJMKSB7XG4gIHJldHVybiBiYXNlVVJMLnJlcGxhY2UoL1xcLyskLywgJycpICsgJy8nICsgcmVsYXRpdmVVUkwucmVwbGFjZSgvXlxcLysvLCAnJyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29tYmluZVVSTHMuanNcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIENhbmNlbCA9IHJlcXVpcmUoJy4vQ2FuY2VsJyk7XG5cbi8qKlxuICogQSBgQ2FuY2VsVG9rZW5gIGlzIGFuIG9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIHRvIHJlcXVlc3QgY2FuY2VsbGF0aW9uIG9mIGFuIG9wZXJhdGlvbi5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGV4ZWN1dG9yIFRoZSBleGVjdXRvciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gQ2FuY2VsVG9rZW4oZXhlY3V0b3IpIHtcbiAgaWYgKHR5cGVvZiBleGVjdXRvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2V4ZWN1dG9yIG11c3QgYmUgYSBmdW5jdGlvbi4nKTtcbiAgfVxuXG4gIHZhciByZXNvbHZlUHJvbWlzZTtcbiAgdGhpcy5wcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gcHJvbWlzZUV4ZWN1dG9yKHJlc29sdmUpIHtcbiAgICByZXNvbHZlUHJvbWlzZSA9IHJlc29sdmU7XG4gIH0pO1xuXG4gIHZhciB0b2tlbiA9IHRoaXM7XG4gIGV4ZWN1dG9yKGZ1bmN0aW9uIGNhbmNlbChtZXNzYWdlKSB7XG4gICAgaWYgKHRva2VuLnJlYXNvbikge1xuICAgICAgLy8gQ2FuY2VsbGF0aW9uIGhhcyBhbHJlYWR5IGJlZW4gcmVxdWVzdGVkXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdG9rZW4ucmVhc29uID0gbmV3IENhbmNlbChtZXNzYWdlKTtcbiAgICByZXNvbHZlUHJvbWlzZSh0b2tlbi5yZWFzb24pO1xuICB9KTtcbn1cblxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICovXG5DYW5jZWxUb2tlbi5wcm90b3R5cGUudGhyb3dJZlJlcXVlc3RlZCA9IGZ1bmN0aW9uIHRocm93SWZSZXF1ZXN0ZWQoKSB7XG4gIGlmICh0aGlzLnJlYXNvbikge1xuICAgIHRocm93IHRoaXMucmVhc29uO1xuICB9XG59O1xuXG4vKipcbiAqIFJldHVybnMgYW4gb2JqZWN0IHRoYXQgY29udGFpbnMgYSBuZXcgYENhbmNlbFRva2VuYCBhbmQgYSBmdW5jdGlvbiB0aGF0LCB3aGVuIGNhbGxlZCxcbiAqIGNhbmNlbHMgdGhlIGBDYW5jZWxUb2tlbmAuXG4gKi9cbkNhbmNlbFRva2VuLnNvdXJjZSA9IGZ1bmN0aW9uIHNvdXJjZSgpIHtcbiAgdmFyIGNhbmNlbDtcbiAgdmFyIHRva2VuID0gbmV3IENhbmNlbFRva2VuKGZ1bmN0aW9uIGV4ZWN1dG9yKGMpIHtcbiAgICBjYW5jZWwgPSBjO1xuICB9KTtcbiAgcmV0dXJuIHtcbiAgICB0b2tlbjogdG9rZW4sXG4gICAgY2FuY2VsOiBjYW5jZWxcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FuY2VsVG9rZW47XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbFRva2VuLmpzXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogU3ludGFjdGljIHN1Z2FyIGZvciBpbnZva2luZyBhIGZ1bmN0aW9uIGFuZCBleHBhbmRpbmcgYW4gYXJyYXkgZm9yIGFyZ3VtZW50cy5cbiAqXG4gKiBDb21tb24gdXNlIGNhc2Ugd291bGQgYmUgdG8gdXNlIGBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHlgLlxuICpcbiAqICBgYGBqc1xuICogIGZ1bmN0aW9uIGYoeCwgeSwgeikge31cbiAqICB2YXIgYXJncyA9IFsxLCAyLCAzXTtcbiAqICBmLmFwcGx5KG51bGwsIGFyZ3MpO1xuICogIGBgYFxuICpcbiAqIFdpdGggYHNwcmVhZGAgdGhpcyBleGFtcGxlIGNhbiBiZSByZS13cml0dGVuLlxuICpcbiAqICBgYGBqc1xuICogIHNwcmVhZChmdW5jdGlvbih4LCB5LCB6KSB7fSkoWzEsIDIsIDNdKTtcbiAqICBgYGBcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNwcmVhZChjYWxsYmFjaykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcChhcnIpIHtcbiAgICByZXR1cm4gY2FsbGJhY2suYXBwbHkobnVsbCwgYXJyKTtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9zcHJlYWQuanNcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIjsoZnVuY3Rpb24oZmFjdG9yeSkge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICAvKiBnbG9iYWwgd2luZG93OiBmYWxzZSwgZGVmaW5lOiBmYWxzZSwgbW9kdWxlOiBmYWxzZSAqL1xuICAgIHZhciByb290ID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogd2luZG93O1xuXG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgICBkZWZpbmUoZnVuY3Rpb24oKXsgcmV0dXJuIGZhY3Rvcnkocm9vdCk7IH0pO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJvb3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJvb3QuRE9NUHVyaWZ5ID0gZmFjdG9yeShyb290KTtcbiAgICB9XG59KGZ1bmN0aW9uIGZhY3Rvcnkod2luZG93KSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIERPTVB1cmlmeSA9IGZ1bmN0aW9uKHdpbmRvdykge1xuICAgICAgICByZXR1cm4gZmFjdG9yeSh3aW5kb3cpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBWZXJzaW9uIGxhYmVsLCBleHBvc2VkIGZvciBlYXNpZXIgY2hlY2tzXG4gICAgICogaWYgRE9NUHVyaWZ5IGlzIHVwIHRvIGRhdGUgb3Igbm90XG4gICAgICovXG4gICAgRE9NUHVyaWZ5LnZlcnNpb24gPSAnMC44LjUnO1xuXG4gICAgLyoqXG4gICAgICogQXJyYXkgb2YgZWxlbWVudHMgdGhhdCBET01QdXJpZnkgcmVtb3ZlZCBkdXJpbmcgc2FuaXRhdGlvbi5cbiAgICAgKiBFbXB0eSBpZiBub3RoaW5nIHdhcyByZW1vdmVkLlxuICAgICAqL1xuICAgIERPTVB1cmlmeS5yZW1vdmVkID0gW107XG5cbiAgICBpZiAoIXdpbmRvdyB8fCAhd2luZG93LmRvY3VtZW50IHx8IHdpbmRvdy5kb2N1bWVudC5ub2RlVHlwZSAhPT0gOSkge1xuICAgICAgICAvLyBub3QgcnVubmluZyBpbiBhIGJyb3dzZXIsIHByb3ZpZGUgYSBmYWN0b3J5IGZ1bmN0aW9uXG4gICAgICAgIC8vIHNvIHRoYXQgeW91IGNhbiBwYXNzIHlvdXIgb3duIFdpbmRvd1xuICAgICAgICBET01QdXJpZnkuaXNTdXBwb3J0ZWQgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIERPTVB1cmlmeTtcbiAgICB9XG5cbiAgICB2YXIgZG9jdW1lbnQgPSB3aW5kb3cuZG9jdW1lbnQ7XG4gICAgdmFyIG9yaWdpbmFsRG9jdW1lbnQgPSBkb2N1bWVudDtcbiAgICB2YXIgRG9jdW1lbnRGcmFnbWVudCA9IHdpbmRvdy5Eb2N1bWVudEZyYWdtZW50O1xuICAgIHZhciBIVE1MVGVtcGxhdGVFbGVtZW50ID0gd2luZG93LkhUTUxUZW1wbGF0ZUVsZW1lbnQ7XG4gICAgdmFyIE5vZGUgPSB3aW5kb3cuTm9kZTtcbiAgICB2YXIgTm9kZUZpbHRlciA9IHdpbmRvdy5Ob2RlRmlsdGVyO1xuICAgIHZhciBOYW1lZE5vZGVNYXAgPSB3aW5kb3cuTmFtZWROb2RlTWFwIHx8IHdpbmRvdy5Nb3pOYW1lZEF0dHJNYXA7XG4gICAgdmFyIFRleHQgPSB3aW5kb3cuVGV4dDtcbiAgICB2YXIgQ29tbWVudCA9IHdpbmRvdy5Db21tZW50O1xuICAgIHZhciBET01QYXJzZXIgPSB3aW5kb3cuRE9NUGFyc2VyO1xuXG4gICAgLy8gQXMgcGVyIGlzc3VlICM0NywgdGhlIHdlYi1jb21wb25lbnRzIHJlZ2lzdHJ5IGlzIGluaGVyaXRlZCBieSBhXG4gICAgLy8gbmV3IGRvY3VtZW50IGNyZWF0ZWQgdmlhIGNyZWF0ZUhUTUxEb2N1bWVudC4gQXMgcGVyIHRoZSBzcGVjXG4gICAgLy8gKGh0dHA6Ly93M2MuZ2l0aHViLmlvL3dlYmNvbXBvbmVudHMvc3BlYy9jdXN0b20vI2NyZWF0aW5nLWFuZC1wYXNzaW5nLXJlZ2lzdHJpZXMpXG4gICAgLy8gYSBuZXcgZW1wdHkgcmVnaXN0cnkgaXMgdXNlZCB3aGVuIGNyZWF0aW5nIGEgdGVtcGxhdGUgY29udGVudHMgb3duZXJcbiAgICAvLyBkb2N1bWVudCwgc28gd2UgdXNlIHRoYXQgYXMgb3VyIHBhcmVudCBkb2N1bWVudCB0byBlbnN1cmUgbm90aGluZ1xuICAgIC8vIGlzIGluaGVyaXRlZC5cbiAgICBpZiAodHlwZW9mIEhUTUxUZW1wbGF0ZUVsZW1lbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdmFyIHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgICAgICAgaWYgKHRlbXBsYXRlLmNvbnRlbnQgJiYgdGVtcGxhdGUuY29udGVudC5vd25lckRvY3VtZW50KSB7XG4gICAgICAgICAgICBkb2N1bWVudCA9IHRlbXBsYXRlLmNvbnRlbnQub3duZXJEb2N1bWVudDtcbiAgICAgICAgfVxuICAgIH1cbiAgICB2YXIgaW1wbGVtZW50YXRpb24gPSBkb2N1bWVudC5pbXBsZW1lbnRhdGlvbjtcbiAgICB2YXIgY3JlYXRlTm9kZUl0ZXJhdG9yID0gZG9jdW1lbnQuY3JlYXRlTm9kZUl0ZXJhdG9yO1xuICAgIHZhciBnZXRFbGVtZW50c0J5VGFnTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lO1xuICAgIHZhciBjcmVhdGVEb2N1bWVudEZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudDtcbiAgICB2YXIgaW1wb3J0Tm9kZSA9IG9yaWdpbmFsRG9jdW1lbnQuaW1wb3J0Tm9kZTtcblxuICAgIHZhciBob29rcyA9IHt9O1xuXG4gICAgLyoqXG4gICAgICogRXhwb3NlIHdoZXRoZXIgdGhpcyBicm93c2VyIHN1cHBvcnRzIHJ1bm5pbmcgdGhlIGZ1bGwgRE9NUHVyaWZ5LlxuICAgICAqL1xuICAgIERPTVB1cmlmeS5pc1N1cHBvcnRlZCA9XG4gICAgICAgIHR5cGVvZiBpbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50TW9kZSAhPT0gOTtcblxuICAgIC8qIEFkZCBwcm9wZXJ0aWVzIHRvIGEgbG9va3VwIHRhYmxlICovXG4gICAgdmFyIF9hZGRUb1NldCA9IGZ1bmN0aW9uKHNldCwgYXJyYXkpIHtcbiAgICAgICAgdmFyIGwgPSBhcnJheS5sZW5ndGg7XG4gICAgICAgIHdoaWxlIChsLS0pIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgYXJyYXlbbF0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgYXJyYXlbbF0gPSBhcnJheVtsXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0W2FycmF5W2xdXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNldDtcbiAgICB9O1xuXG4gICAgLyogU2hhbGxvdyBjbG9uZSBhbiBvYmplY3QgKi9cbiAgICB2YXIgX2Nsb25lT2JqID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgICAgIHZhciBuZXdPYmplY3QgPSB7fTtcbiAgICAgICAgdmFyIHByb3BlcnR5O1xuICAgICAgICBmb3IgKHByb3BlcnR5IGluIG9iamVjdCkge1xuICAgICAgICAgICAgaWYgKG9iamVjdC5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcbiAgICAgICAgICAgICAgICBuZXdPYmplY3RbcHJvcGVydHldID0gb2JqZWN0W3Byb3BlcnR5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3T2JqZWN0O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBXZSBjb25zaWRlciB0aGUgZWxlbWVudHMgYW5kIGF0dHJpYnV0ZXMgYmVsb3cgdG8gYmUgc2FmZS4gSWRlYWxseVxuICAgICAqIGRvbid0IGFkZCBhbnkgbmV3IG9uZXMgYnV0IGZlZWwgZnJlZSB0byByZW1vdmUgdW53YW50ZWQgb25lcy5cbiAgICAgKi9cblxuICAgIC8qIGFsbG93ZWQgZWxlbWVudCBuYW1lcyAqL1xuICAgIHZhciBBTExPV0VEX1RBR1MgPSBudWxsO1xuICAgIHZhciBERUZBVUxUX0FMTE9XRURfVEFHUyA9IF9hZGRUb1NldCh7fSwgW1xuXG4gICAgICAgIC8vIEhUTUxcbiAgICAgICAgJ2EnLCdhYmJyJywnYWNyb255bScsJ2FkZHJlc3MnLCdhcmVhJywnYXJ0aWNsZScsJ2FzaWRlJywnYXVkaW8nLCdiJyxcbiAgICAgICAgJ2JkaScsJ2JkbycsJ2JpZycsJ2JsaW5rJywnYmxvY2txdW90ZScsJ2JvZHknLCdicicsJ2J1dHRvbicsJ2NhbnZhcycsXG4gICAgICAgICdjYXB0aW9uJywnY2VudGVyJywnY2l0ZScsJ2NvZGUnLCdjb2wnLCdjb2xncm91cCcsJ2NvbnRlbnQnLCdkYXRhJyxcbiAgICAgICAgJ2RhdGFsaXN0JywnZGQnLCdkZWNvcmF0b3InLCdkZWwnLCdkZXRhaWxzJywnZGZuJywnZGlyJywnZGl2JywnZGwnLCdkdCcsXG4gICAgICAgICdlbGVtZW50JywnZW0nLCdmaWVsZHNldCcsJ2ZpZ2NhcHRpb24nLCdmaWd1cmUnLCdmb250JywnZm9vdGVyJywnZm9ybScsXG4gICAgICAgICdoMScsJ2gyJywnaDMnLCdoNCcsJ2g1JywnaDYnLCdoZWFkJywnaGVhZGVyJywnaGdyb3VwJywnaHInLCdodG1sJywnaScsXG4gICAgICAgICdpbWcnLCdpbnB1dCcsJ2lucycsJ2tiZCcsJ2xhYmVsJywnbGVnZW5kJywnbGknLCdtYWluJywnbWFwJywnbWFyaycsXG4gICAgICAgICdtYXJxdWVlJywnbWVudScsJ21lbnVpdGVtJywnbWV0ZXInLCduYXYnLCdub2JyJywnb2wnLCdvcHRncm91cCcsXG4gICAgICAgICdvcHRpb24nLCdvdXRwdXQnLCdwJywncHJlJywncHJvZ3Jlc3MnLCdxJywncnAnLCdydCcsJ3J1YnknLCdzJywnc2FtcCcsXG4gICAgICAgICdzZWN0aW9uJywnc2VsZWN0Jywnc2hhZG93Jywnc21hbGwnLCdzb3VyY2UnLCdzcGFjZXInLCdzcGFuJywnc3RyaWtlJyxcbiAgICAgICAgJ3N0cm9uZycsJ3N0eWxlJywnc3ViJywnc3VtbWFyeScsJ3N1cCcsJ3RhYmxlJywndGJvZHknLCd0ZCcsJ3RlbXBsYXRlJyxcbiAgICAgICAgJ3RleHRhcmVhJywndGZvb3QnLCd0aCcsJ3RoZWFkJywndGltZScsJ3RyJywndHJhY2snLCd0dCcsJ3UnLCd1bCcsJ3ZhcicsXG4gICAgICAgICd2aWRlbycsJ3dicicsXG5cbiAgICAgICAgLy8gU1ZHXG4gICAgICAgICdzdmcnLCdhbHRnbHlwaCcsJ2FsdGdseXBoZGVmJywnYWx0Z2x5cGhpdGVtJywnYW5pbWF0ZWNvbG9yJyxcbiAgICAgICAgJ2FuaW1hdGVtb3Rpb24nLCdhbmltYXRldHJhbnNmb3JtJywnY2lyY2xlJywnY2xpcHBhdGgnLCdkZWZzJywnZGVzYycsXG4gICAgICAgICdlbGxpcHNlJywnZmlsdGVyJywnZm9udCcsJ2cnLCdnbHlwaCcsJ2dseXBocmVmJywnaGtlcm4nLCdpbWFnZScsJ2xpbmUnLFxuICAgICAgICAnbGluZWFyZ3JhZGllbnQnLCdtYXJrZXInLCdtYXNrJywnbWV0YWRhdGEnLCdtcGF0aCcsJ3BhdGgnLCdwYXR0ZXJuJyxcbiAgICAgICAgJ3BvbHlnb24nLCdwb2x5bGluZScsJ3JhZGlhbGdyYWRpZW50JywncmVjdCcsJ3N0b3AnLCdzd2l0Y2gnLCdzeW1ib2wnLFxuICAgICAgICAndGV4dCcsJ3RleHRwYXRoJywndGl0bGUnLCd0cmVmJywndHNwYW4nLCd2aWV3Jywndmtlcm4nLFxuXG4gICAgICAgIC8vIFNWRyBGaWx0ZXJzXG4gICAgICAgICdmZUJsZW5kJywnZmVDb2xvck1hdHJpeCcsJ2ZlQ29tcG9uZW50VHJhbnNmZXInLCdmZUNvbXBvc2l0ZScsXG4gICAgICAgICdmZUNvbnZvbHZlTWF0cml4JywnZmVEaWZmdXNlTGlnaHRpbmcnLCdmZURpc3BsYWNlbWVudE1hcCcsXG4gICAgICAgICdmZUZsb29kJywnZmVGdW5jQScsJ2ZlRnVuY0InLCdmZUZ1bmNHJywnZmVGdW5jUicsJ2ZlR2F1c3NpYW5CbHVyJyxcbiAgICAgICAgJ2ZlTWVyZ2UnLCdmZU1lcmdlTm9kZScsJ2ZlTW9ycGhvbG9neScsJ2ZlT2Zmc2V0JyxcbiAgICAgICAgJ2ZlU3BlY3VsYXJMaWdodGluZycsJ2ZlVGlsZScsJ2ZlVHVyYnVsZW5jZScsXG5cbiAgICAgICAgLy9NYXRoTUxcbiAgICAgICAgJ21hdGgnLCdtZW5jbG9zZScsJ21lcnJvcicsJ21mZW5jZWQnLCdtZnJhYycsJ21nbHlwaCcsJ21pJywnbWxhYmVsZWR0cicsXG4gICAgICAgICdtbXVsaXNjcmlwdHMnLCdtbicsJ21vJywnbW92ZXInLCdtcGFkZGVkJywnbXBoYW50b20nLCdtcm9vdCcsJ21yb3cnLFxuICAgICAgICAnbXMnLCdtcHNwYWNlJywnbXNxcnQnLCdteXN0eWxlJywnbXN1YicsJ21zdXAnLCdtc3Vic3VwJywnbXRhYmxlJywnbXRkJyxcbiAgICAgICAgJ210ZXh0JywnbXRyJywnbXVuZGVyJywnbXVuZGVyb3ZlcicsXG5cbiAgICAgICAgLy9UZXh0XG4gICAgICAgICcjdGV4dCdcbiAgICBdKTtcblxuICAgIC8qIEFsbG93ZWQgYXR0cmlidXRlIG5hbWVzICovXG4gICAgdmFyIEFMTE9XRURfQVRUUiA9IG51bGw7XG4gICAgdmFyIERFRkFVTFRfQUxMT1dFRF9BVFRSID0gX2FkZFRvU2V0KHt9LCBbXG5cbiAgICAgICAgLy8gSFRNTFxuICAgICAgICAnYWNjZXB0JywnYWN0aW9uJywnYWxpZ24nLCdhbHQnLCdhdXRvY29tcGxldGUnLCdiYWNrZ3JvdW5kJywnYmdjb2xvcicsXG4gICAgICAgICdib3JkZXInLCdjZWxscGFkZGluZycsJ2NlbGxzcGFjaW5nJywnY2hlY2tlZCcsJ2NpdGUnLCdjbGFzcycsJ2NsZWFyJywnY29sb3InLFxuICAgICAgICAnY29scycsJ2NvbHNwYW4nLCdjb29yZHMnLCdkYXRldGltZScsJ2RlZmF1bHQnLCdkaXInLCdkaXNhYmxlZCcsXG4gICAgICAgICdkb3dubG9hZCcsJ2VuY3R5cGUnLCdmYWNlJywnZm9yJywnaGVhZGVycycsJ2hlaWdodCcsJ2hpZGRlbicsJ2hpZ2gnLCdocmVmJyxcbiAgICAgICAgJ2hyZWZsYW5nJywnaWQnLCdpc21hcCcsJ2xhYmVsJywnbGFuZycsJ2xpc3QnLCdsb29wJywgJ2xvdycsJ21heCcsXG4gICAgICAgICdtYXhsZW5ndGgnLCdtZWRpYScsJ21ldGhvZCcsJ21pbicsJ211bHRpcGxlJywnbmFtZScsJ25vc2hhZGUnLCdub3ZhbGlkYXRlJyxcbiAgICAgICAgJ25vd3JhcCcsJ29wZW4nLCdvcHRpbXVtJywncGF0dGVybicsJ3BsYWNlaG9sZGVyJywncG9zdGVyJywncHJlbG9hZCcsJ3B1YmRhdGUnLFxuICAgICAgICAncmFkaW9ncm91cCcsJ3JlYWRvbmx5JywncmVsJywncmVxdWlyZWQnLCdyZXYnLCdyZXZlcnNlZCcsJ3Jvd3MnLFxuICAgICAgICAncm93c3BhbicsJ3NwZWxsY2hlY2snLCdzY29wZScsJ3NlbGVjdGVkJywnc2hhcGUnLCdzaXplJywnc3BhbicsXG4gICAgICAgICdzcmNsYW5nJywnc3RhcnQnLCdzcmMnLCdzdGVwJywnc3R5bGUnLCdzdW1tYXJ5JywndGFiaW5kZXgnLCd0aXRsZScsXG4gICAgICAgICd0eXBlJywndXNlbWFwJywndmFsaWduJywndmFsdWUnLCd3aWR0aCcsJ3htbG5zJyxcblxuICAgICAgICAvLyBTVkdcbiAgICAgICAgJ2FjY2VudC1oZWlnaHQnLCdhY2N1bXVsYXRlJywnYWRkaXRpdml2ZScsJ2FsaWdubWVudC1iYXNlbGluZScsXG4gICAgICAgICdhc2NlbnQnLCdhdHRyaWJ1dGVuYW1lJywnYXR0cmlidXRldHlwZScsJ2F6aW11dGgnLCdiYXNlZnJlcXVlbmN5JyxcbiAgICAgICAgJ2Jhc2VsaW5lLXNoaWZ0JywnYmVnaW4nLCdiaWFzJywnYnknLCdjbGlwJywnY2xpcC1wYXRoJywnY2xpcC1ydWxlJyxcbiAgICAgICAgJ2NvbG9yJywnY29sb3ItaW50ZXJwb2xhdGlvbicsJ2NvbG9yLWludGVycG9sYXRpb24tZmlsdGVycycsJ2NvbG9yLXByb2ZpbGUnLFxuICAgICAgICAnY29sb3ItcmVuZGVyaW5nJywnY3gnLCdjeScsJ2QnLCdkeCcsJ2R5JywnZGlmZnVzZWNvbnN0YW50JywnZGlyZWN0aW9uJyxcbiAgICAgICAgJ2Rpc3BsYXknLCdkaXZpc29yJywnZHVyJywnZWRnZW1vZGUnLCdlbGV2YXRpb24nLCdlbmQnLCdmaWxsJywnZmlsbC1vcGFjaXR5JyxcbiAgICAgICAgJ2ZpbGwtcnVsZScsJ2ZpbHRlcicsJ2Zsb29kLWNvbG9yJywnZmxvb2Qtb3BhY2l0eScsJ2ZvbnQtZmFtaWx5JywnZm9udC1zaXplJyxcbiAgICAgICAgJ2ZvbnQtc2l6ZS1hZGp1c3QnLCdmb250LXN0cmV0Y2gnLCdmb250LXN0eWxlJywnZm9udC12YXJpYW50JywnZm9udC13ZWlnaHQnLFxuICAgICAgICAnZngnLCAnZnknLCdnMScsJ2cyJywnZ2x5cGgtbmFtZScsJ2dseXBocmVmJywnZ3JhZGllbnR1bml0cycsJ2dyYWRpZW50dHJhbnNmb3JtJyxcbiAgICAgICAgJ2ltYWdlLXJlbmRlcmluZycsJ2luJywnaW4yJywnaycsJ2sxJywnazInLCdrMycsJ2s0Jywna2VybmluZycsJ2tleXBvaW50cycsXG4gICAgICAgICdrZXlzcGxpbmVzJywna2V5dGltZXMnLCdsZW5ndGhhZGp1c3QnLCdsZXR0ZXItc3BhY2luZycsJ2tlcm5lbG1hdHJpeCcsXG4gICAgICAgICdrZXJuZWx1bml0bGVuZ3RoJywnbGlnaHRpbmctY29sb3InLCdsb2NhbCcsJ21hcmtlci1lbmQnLCdtYXJrZXItbWlkJyxcbiAgICAgICAgJ21hcmtlci1zdGFydCcsJ21hcmtlcmhlaWdodCcsJ21hcmtlcnVuaXRzJywnbWFya2Vyd2lkdGgnLCdtYXNrY29udGVudHVuaXRzJyxcbiAgICAgICAgJ21hc2t1bml0cycsJ21heCcsJ21hc2snLCdtb2RlJywnbWluJywnbnVtb2N0YXZlcycsJ29mZnNldCcsJ29wZXJhdG9yJyxcbiAgICAgICAgJ29wYWNpdHknLCdvcmRlcicsJ29yaWVudCcsJ29yaWVudGF0aW9uJywnb3JpZ2luJywnb3ZlcmZsb3cnLCdwYWludC1vcmRlcicsXG4gICAgICAgICdwYXRoJywncGF0aGxlbmd0aCcsJ3BhdHRlcm5jb250ZW50dW5pdHMnLCdwYXR0ZXJudHJhbnNmb3JtJywncGF0dGVybnVuaXRzJyxcbiAgICAgICAgJ3BvaW50cycsJ3ByZXNlcnZlYWxwaGEnLCdyJywncngnLCdyeScsJ3JhZGl1cycsJ3JlZngnLCdyZWZ5JywncmVwZWF0Y291bnQnLFxuICAgICAgICAncmVwZWF0ZHVyJywncmVzdGFydCcsJ3Jlc3VsdCcsJ3JvdGF0ZScsJ3NjYWxlJywnc2VlZCcsJ3NoYXBlLXJlbmRlcmluZycsXG4gICAgICAgICdzcGVjdWxhcmNvbnN0YW50Jywnc3BlY3VsYXJleHBvbmVudCcsJ3NwcmVhZG1ldGhvZCcsJ3N0ZGRldmlhdGlvbicsJ3N0aXRjaHRpbGVzJyxcbiAgICAgICAgJ3N0b3AtY29sb3InLCdzdG9wLW9wYWNpdHknLCdzdHJva2UtZGFzaGFycmF5Jywnc3Ryb2tlLWRhc2hvZmZzZXQnLCdzdHJva2UtbGluZWNhcCcsXG4gICAgICAgICdzdHJva2UtbGluZWpvaW4nLCdzdHJva2UtbWl0ZXJsaW1pdCcsJ3N0cm9rZS1vcGFjaXR5Jywnc3Ryb2tlJywnc3Ryb2tlLXdpZHRoJyxcbiAgICAgICAgJ3N1cmZhY2VzY2FsZScsJ3RhcmdldHgnLCd0YXJnZXR5JywndHJhbnNmb3JtJywndGV4dC1hbmNob3InLCd0ZXh0LWRlY29yYXRpb24nLFxuICAgICAgICAndGV4dC1yZW5kZXJpbmcnLCd0ZXh0bGVuZ3RoJywndTEnLCd1MicsJ3VuaWNvZGUnLCd2YWx1ZXMnLCd2aWV3Ym94JyxcbiAgICAgICAgJ3Zpc2liaWxpdHknLCd2ZXJ0LWFkdi15JywndmVydC1vcmlnaW4teCcsJ3ZlcnQtb3JpZ2luLXknLCd3b3JkLXNwYWNpbmcnLFxuICAgICAgICAnd3JhcCcsJ3dyaXRpbmctbW9kZScsJ3hjaGFubmVsc2VsZWN0b3InLCd5Y2hhbm5lbHNlbGVjdG9yJywneCcsJ3gxJywneDInLFxuICAgICAgICAneScsJ3kxJywneTInLCd6Jywnem9vbWFuZHBhbicsXG5cbiAgICAgICAgLy8gTWF0aE1MXG4gICAgICAgICdhY2NlbnQnLCdhY2NlbnR1bmRlcicsJ2JldmVsbGVkJywnY2xvc2UnLCdjb2x1bW5zYWxpZ24nLCdjb2x1bW5saW5lcycsXG4gICAgICAgICdjb2x1bW5zcGFuJywnZGVub21hbGlnbicsJ2RlcHRoJywnZGlzcGxheScsJ2Rpc3BsYXlzdHlsZScsJ2ZlbmNlJyxcbiAgICAgICAgJ2ZyYW1lJywnbGFyZ2VvcCcsJ2xlbmd0aCcsJ2xpbmV0aGlja25lc3MnLCdsc3BhY2UnLCdscXVvdGUnLFxuICAgICAgICAnbWF0aGJhY2tncm91bmQnLCdtYXRoY29sb3InLCdtYXRoc2l6ZScsJ21hdGh2YXJpYW50JywnbWF4c2l6ZScsXG4gICAgICAgICdtaW5zaXplJywnbW92YWJsZWxpbWl0cycsJ25vdGF0aW9uJywnbnVtYWxpZ24nLCdvcGVuJywncm93YWxpZ24nLFxuICAgICAgICAncm93bGluZXMnLCdyb3dzcGFjaW5nJywncm93c3BhbicsJ3JzcGFjZScsJ3JxdW90ZScsJ3NjcmlwdGxldmVsJyxcbiAgICAgICAgJ3NjcmlwdG1pbnNpemUnLCdzY3JpcHRzaXplbXVsdGlwbGllcicsJ3NlbGVjdGlvbicsJ3NlcGFyYXRvcicsXG4gICAgICAgICdzZXBhcmF0b3JzJywnc3RyZXRjaHknLCdzdWJzY3JpcHRzaGlmdCcsJ3N1cHNjcmlwdHNoaWZ0Jywnc3ltbWV0cmljJyxcbiAgICAgICAgJ3ZvZmZzZXQnLFxuXG4gICAgICAgIC8vIFhNTFxuICAgICAgICAneGxpbms6aHJlZicsJ3htbDppZCcsJ3hsaW5rOnRpdGxlJywneG1sOnNwYWNlJywneG1sbnM6eGxpbmsnXG4gICAgXSk7XG5cbiAgICAvKiBFeHBsaWNpdGx5IGZvcmJpZGRlbiB0YWdzIChvdmVycmlkZXMgQUxMT1dFRF9UQUdTL0FERF9UQUdTKSAqL1xuICAgIHZhciBGT1JCSURfVEFHUyA9IG51bGw7XG5cbiAgICAvKiBFeHBsaWNpdGx5IGZvcmJpZGRlbiBhdHRyaWJ1dGVzIChvdmVycmlkZXMgQUxMT1dFRF9BVFRSL0FERF9BVFRSKSAqL1xuICAgIHZhciBGT1JCSURfQVRUUiA9IG51bGw7XG5cbiAgICAvKiBEZWNpZGUgaWYgY3VzdG9tIGRhdGEgYXR0cmlidXRlcyBhcmUgb2theSAqL1xuICAgIHZhciBBTExPV19EQVRBX0FUVFIgPSB0cnVlO1xuXG4gICAgLyogRGVjaWRlIGlmIHVua25vd24gcHJvdG9jb2xzIGFyZSBva2F5ICovXG4gICAgdmFyIEFMTE9XX1VOS05PV05fUFJPVE9DT0xTID0gZmFsc2U7XG5cbiAgICAvKiBPdXRwdXQgc2hvdWxkIGJlIHNhZmUgZm9yIGpRdWVyeSdzICQoKSBmYWN0b3J5PyAqL1xuICAgIHZhciBTQUZFX0ZPUl9KUVVFUlkgPSBmYWxzZTtcblxuICAgIC8qIE91dHB1dCBzaG91bGQgYmUgc2FmZSBmb3IgY29tbW9uIHRlbXBsYXRlIGVuZ2luZXMuXG4gICAgICogVGhpcyBtZWFucywgRE9NUHVyaWZ5IHJlbW92ZXMgZGF0YSBhdHRyaWJ1dGVzLCBtdXN0YWNoZXMgYW5kIEVSQlxuICAgICAqL1xuICAgIHZhciBTQUZFX0ZPUl9URU1QTEFURVMgPSBmYWxzZTtcblxuICAgIC8qIFNwZWNpZnkgdGVtcGxhdGUgZGV0ZWN0aW9uIHJlZ2V4IGZvciBTQUZFX0ZPUl9URU1QTEFURVMgbW9kZSAqL1xuICAgIHZhciBNVVNUQUNIRV9FWFBSID0gL1xce1xce1tcXHNcXFNdKnxbXFxzXFxTXSpcXH1cXH0vZ207XG4gICAgdmFyIEVSQl9FWFBSID0gLzwlW1xcc1xcU10qfFtcXHNcXFNdKiU+L2dtO1xuXG4gICAgLyogRGVjaWRlIGlmIGRvY3VtZW50IHdpdGggPGh0bWw+Li4uIHNob3VsZCBiZSByZXR1cm5lZCAqL1xuICAgIHZhciBXSE9MRV9ET0NVTUVOVCA9IGZhbHNlO1xuXG4gICAgLyogRGVjaWRlIGlmIGEgRE9NIGBIVE1MQm9keUVsZW1lbnRgIHNob3VsZCBiZSByZXR1cm5lZCwgaW5zdGVhZCBvZiBhIGh0bWwgc3RyaW5nLlxuICAgICAqIElmIGBXSE9MRV9ET0NVTUVOVGAgaXMgZW5hYmxlZCBhIGBIVE1MSHRtbEVsZW1lbnRgIHdpbGwgYmUgcmV0dXJuZWQgaW5zdGVhZFxuICAgICAqL1xuICAgIHZhciBSRVRVUk5fRE9NID0gZmFsc2U7XG5cbiAgICAvKiBEZWNpZGUgaWYgYSBET00gYERvY3VtZW50RnJhZ21lbnRgIHNob3VsZCBiZSByZXR1cm5lZCwgaW5zdGVhZCBvZiBhIGh0bWwgc3RyaW5nICovXG4gICAgdmFyIFJFVFVSTl9ET01fRlJBR01FTlQgPSBmYWxzZTtcblxuICAgIC8qIElmIGBSRVRVUk5fRE9NYCBvciBgUkVUVVJOX0RPTV9GUkFHTUVOVGAgaXMgZW5hYmxlZCwgZGVjaWRlIGlmIHRoZSByZXR1cm5lZCBET01cbiAgICAgKiBgTm9kZWAgaXMgaW1wb3J0ZWQgaW50byB0aGUgY3VycmVudCBgRG9jdW1lbnRgLiBJZiB0aGlzIGZsYWcgaXMgbm90IGVuYWJsZWQgdGhlXG4gICAgICogYE5vZGVgIHdpbGwgYmVsb25nIChpdHMgb3duZXJEb2N1bWVudCkgdG8gYSBmcmVzaCBgSFRNTERvY3VtZW50YCwgY3JlYXRlZCBieVxuICAgICAqIERPTVB1cmlmeS4gKi9cbiAgICB2YXIgUkVUVVJOX0RPTV9JTVBPUlQgPSBmYWxzZTtcblxuICAgIC8qIE91dHB1dCBzaG91bGQgYmUgZnJlZSBmcm9tIERPTSBjbG9iYmVyaW5nIGF0dGFja3M/ICovXG4gICAgdmFyIFNBTklUSVpFX0RPTSA9IHRydWU7XG5cbiAgICAvKiBLZWVwIGVsZW1lbnQgY29udGVudCB3aGVuIHJlbW92aW5nIGVsZW1lbnQ/ICovXG4gICAgdmFyIEtFRVBfQ09OVEVOVCA9IHRydWU7XG5cbiAgICAvKiBUYWdzIHRvIGlnbm9yZSBjb250ZW50IG9mIHdoZW4gS0VFUF9DT05URU5UIGlzIHRydWUgKi9cbiAgICB2YXIgRk9SQklEX0NPTlRFTlRTID0gX2FkZFRvU2V0KHt9LCBbXG4gICAgICAgICdhdWRpbycsICdoZWFkJywgJ21hdGgnLCAnc2NyaXB0JywgJ3N0eWxlJywgJ3N2ZycsICd2aWRlbydcbiAgICBdKTtcblxuICAgIC8qIFRhZ3MgdGhhdCBhcmUgc2FmZSBmb3IgZGF0YTogVVJJcyAqL1xuICAgIHZhciBEQVRBX1VSSV9UQUdTID0gX2FkZFRvU2V0KHt9LCBbXG4gICAgICAgICdhdWRpbycsICd2aWRlbycsICdpbWcnLCAnc291cmNlJ1xuICAgIF0pO1xuXG4gICAgLyogQXR0cmlidXRlcyBzYWZlIGZvciB2YWx1ZXMgbGlrZSBcImphdmFzY3JpcHQ6XCIgKi9cbiAgICB2YXIgVVJJX1NBRkVfQVRUUklCVVRFUyA9IF9hZGRUb1NldCh7fSwgW1xuICAgICAgICAnYWx0JywnY2xhc3MnLCdmb3InLCdpZCcsJ2xhYmVsJywnbmFtZScsJ3BhdHRlcm4nLCdwbGFjZWhvbGRlcicsXG4gICAgICAgICdzdW1tYXJ5JywndGl0bGUnLCd2YWx1ZScsJ3N0eWxlJywneG1sbnMnXG4gICAgXSk7XG5cbiAgICAvKiBLZWVwIGEgcmVmZXJlbmNlIHRvIGNvbmZpZyB0byBwYXNzIHRvIGhvb2tzICovXG4gICAgdmFyIENPTkZJRyA9IG51bGw7XG5cbiAgICAvKiBJZGVhbGx5LCBkbyBub3QgdG91Y2ggYW55dGhpbmcgYmVsb3cgdGhpcyBsaW5lICovXG4gICAgLyogX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXyAqL1xuXG4gICAgdmFyIGZvcm1FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuXG4gICAgLyoqXG4gICAgICogX3BhcnNlQ29uZmlnXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIG9wdGlvbmFsIGNvbmZpZyBsaXRlcmFsXG4gICAgICovXG4gICAgdmFyIF9wYXJzZUNvbmZpZyA9IGZ1bmN0aW9uKGNmZykge1xuICAgICAgICAvKiBTaGllbGQgY29uZmlndXJhdGlvbiBvYmplY3QgZnJvbSB0YW1wZXJpbmcgKi9cbiAgICAgICAgaWYgKHR5cGVvZiBjZmcgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBjZmcgPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIFNldCBjb25maWd1cmF0aW9uIHBhcmFtZXRlcnMgKi9cbiAgICAgICAgQUxMT1dFRF9UQUdTID0gJ0FMTE9XRURfVEFHUycgaW4gY2ZnID9cbiAgICAgICAgICAgIF9hZGRUb1NldCh7fSwgY2ZnLkFMTE9XRURfVEFHUykgOiBERUZBVUxUX0FMTE9XRURfVEFHUztcbiAgICAgICAgQUxMT1dFRF9BVFRSID0gJ0FMTE9XRURfQVRUUicgaW4gY2ZnID9cbiAgICAgICAgICAgIF9hZGRUb1NldCh7fSwgY2ZnLkFMTE9XRURfQVRUUikgOiBERUZBVUxUX0FMTE9XRURfQVRUUjtcbiAgICAgICAgRk9SQklEX1RBR1MgPSAnRk9SQklEX1RBR1MnIGluIGNmZyA/XG4gICAgICAgICAgICBfYWRkVG9TZXQoe30sIGNmZy5GT1JCSURfVEFHUykgOiB7fTtcbiAgICAgICAgRk9SQklEX0FUVFIgPSAnRk9SQklEX0FUVFInIGluIGNmZyA/XG4gICAgICAgICAgICBfYWRkVG9TZXQoe30sIGNmZy5GT1JCSURfQVRUUikgOiB7fTtcbiAgICAgICAgQUxMT1dfREFUQV9BVFRSICAgICA9IGNmZy5BTExPV19EQVRBX0FUVFIgICAgICE9PSBmYWxzZTsgLy8gRGVmYXVsdCB0cnVlXG4gICAgICAgIEFMTE9XX1VOS05PV05fUFJPVE9DT0xTID0gY2ZnLkFMTE9XX1VOS05PV05fUFJPVE9DT0xTIHx8IGZhbHNlOyAvLyBEZWZhdWx0IGZhbHNlXG4gICAgICAgIFNBRkVfRk9SX0pRVUVSWSAgICAgPSBjZmcuU0FGRV9GT1JfSlFVRVJZICAgICB8fCAgZmFsc2U7IC8vIERlZmF1bHQgZmFsc2VcbiAgICAgICAgU0FGRV9GT1JfVEVNUExBVEVTICA9IGNmZy5TQUZFX0ZPUl9URU1QTEFURVMgIHx8ICBmYWxzZTsgLy8gRGVmYXVsdCBmYWxzZVxuICAgICAgICBXSE9MRV9ET0NVTUVOVCAgICAgID0gY2ZnLldIT0xFX0RPQ1VNRU5UICAgICAgfHwgIGZhbHNlOyAvLyBEZWZhdWx0IGZhbHNlXG4gICAgICAgIFJFVFVSTl9ET00gICAgICAgICAgPSBjZmcuUkVUVVJOX0RPTSAgICAgICAgICB8fCAgZmFsc2U7IC8vIERlZmF1bHQgZmFsc2VcbiAgICAgICAgUkVUVVJOX0RPTV9GUkFHTUVOVCA9IGNmZy5SRVRVUk5fRE9NX0ZSQUdNRU5UIHx8ICBmYWxzZTsgLy8gRGVmYXVsdCBmYWxzZVxuICAgICAgICBSRVRVUk5fRE9NX0lNUE9SVCAgID0gY2ZnLlJFVFVSTl9ET01fSU1QT1JUICAgfHwgIGZhbHNlOyAvLyBEZWZhdWx0IGZhbHNlXG4gICAgICAgIFNBTklUSVpFX0RPTSAgICAgICAgPSBjZmcuU0FOSVRJWkVfRE9NICAgICAgICAhPT0gZmFsc2U7IC8vIERlZmF1bHQgdHJ1ZVxuICAgICAgICBLRUVQX0NPTlRFTlQgICAgICAgID0gY2ZnLktFRVBfQ09OVEVOVCAgICAgICAgIT09IGZhbHNlOyAvLyBEZWZhdWx0IHRydWVcblxuICAgICAgICBpZiAoU0FGRV9GT1JfVEVNUExBVEVTKSB7XG4gICAgICAgICAgICBBTExPV19EQVRBX0FUVFIgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChSRVRVUk5fRE9NX0ZSQUdNRU5UKSB7XG4gICAgICAgICAgICBSRVRVUk5fRE9NID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIE1lcmdlIGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVycyAqL1xuICAgICAgICBpZiAoY2ZnLkFERF9UQUdTKSB7XG4gICAgICAgICAgICBpZiAoQUxMT1dFRF9UQUdTID09PSBERUZBVUxUX0FMTE9XRURfVEFHUykge1xuICAgICAgICAgICAgICAgIEFMTE9XRURfVEFHUyA9IF9jbG9uZU9iaihBTExPV0VEX1RBR1MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX2FkZFRvU2V0KEFMTE9XRURfVEFHUywgY2ZnLkFERF9UQUdTKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2ZnLkFERF9BVFRSKSB7XG4gICAgICAgICAgICBpZiAoQUxMT1dFRF9BVFRSID09PSBERUZBVUxUX0FMTE9XRURfQVRUUikge1xuICAgICAgICAgICAgICAgIEFMTE9XRURfQVRUUiA9IF9jbG9uZU9iaihBTExPV0VEX0FUVFIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX2FkZFRvU2V0KEFMTE9XRURfQVRUUiwgY2ZnLkFERF9BVFRSKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2ZnLkFERF9VUklfU0FGRV9BVFRSKSB7XG4gICAgICAgICAgICBfYWRkVG9TZXQoVVJJX1NBRkVfQVRUUklCVVRFUywgY2ZnLkFERF9VUklfU0FGRV9BVFRSKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIEFkZCAjdGV4dCBpbiBjYXNlIEtFRVBfQ09OVEVOVCBpcyBzZXQgdG8gdHJ1ZSAqL1xuICAgICAgICBpZiAoS0VFUF9DT05URU5UKSB7IEFMTE9XRURfVEFHU1snI3RleHQnXSA9IHRydWU7IH1cblxuICAgICAgICAvLyBQcmV2ZW50IGZ1cnRoZXIgbWFuaXB1bGF0aW9uIG9mIGNvbmZpZ3VyYXRpb24uXG4gICAgICAgIC8vIE5vdCBhdmFpbGFibGUgaW4gSUU4LCBTYWZhcmkgNSwgZXRjLlxuICAgICAgICBpZiAoT2JqZWN0ICYmICdmcmVlemUnIGluIE9iamVjdCkgeyBPYmplY3QuZnJlZXplKGNmZyk7IH1cblxuICAgICAgICBDT05GSUcgPSBjZmc7XG4gICAgfTtcblxuICAgLyoqXG4gICAgICogX2ZvcmNlUmVtb3ZlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIGEgRE9NIG5vZGVcbiAgICAgKi9cbiAgICB2YXIgX2ZvcmNlUmVtb3ZlID0gZnVuY3Rpb24obm9kZSkge1xuICAgICAgICBET01QdXJpZnkucmVtb3ZlZC5wdXNoKHtlbGVtZW50OiBub2RlfSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIG5vZGUub3V0ZXJIVE1MID0gJyc7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAvKipcbiAgICAgKiBfcmVtb3ZlQXR0cmlidXRlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIGFuIEF0dHJpYnV0ZSBuYW1lXG4gICAgICogQHBhcmFtICBhIERPTSBub2RlXG4gICAgICovXG4gICAgdmFyIF9yZW1vdmVBdHRyaWJ1dGUgPSBmdW5jdGlvbihuYW1lLCBub2RlKSB7XG4gICAgICAgIERPTVB1cmlmeS5yZW1vdmVkLnB1c2goe1xuICAgICAgICAgICAgYXR0cmlidXRlOiBub2RlLmdldEF0dHJpYnV0ZU5vZGUobmFtZSksXG4gICAgICAgICAgICBmcm9tOiBub2RlXG4gICAgICAgIH0pO1xuICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgICB9O1xuXG4gICAvKipcbiAgICAgKiBfaW5pdERvY3VtZW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0gIGEgc3RyaW5nIG9mIGRpcnR5IG1hcmt1cFxuICAgICAqIEByZXR1cm4gYSBET00sIGZpbGxlZCB3aXRoIHRoZSBkaXJ0eSBtYXJrdXBcbiAgICAgKi9cbiAgICB2YXIgX2luaXREb2N1bWVudCA9IGZ1bmN0aW9uKGRpcnR5KSB7XG4gICAgICAgIC8qIENyZWF0ZSBhIEhUTUwgZG9jdW1lbnQgdXNpbmcgRE9NUGFyc2VyICovXG4gICAgICAgIHZhciBkb2MsIGJvZHk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBkb2MgPSBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKGRpcnR5LCAndGV4dC9odG1sJyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9XG5cbiAgICAgICAgLyogU29tZSBicm93c2VycyB0aHJvdywgc29tZSBicm93c2VycyByZXR1cm4gbnVsbCBmb3IgdGhlIGNvZGUgYWJvdmVcbiAgICAgICAgICAgRE9NUGFyc2VyIHdpdGggdGV4dC9odG1sIHN1cHBvcnQgaXMgb25seSBpbiB2ZXJ5IHJlY2VudCBicm93c2Vycy5cbiAgICAgICAgICAgU2VlICMxNTkgd2h5IHRoZSBjaGVjayBoZXJlIGlzIGV4dHJhLXRob3JvdWdoICovXG4gICAgICAgIGlmICghZG9jIHx8ICFkb2MuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICAgICAgICBkb2MgPSBpbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoJycpO1xuICAgICAgICAgICAgYm9keSA9IGRvYy5ib2R5O1xuICAgICAgICAgICAgYm9keS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGJvZHkucGFyZW50Tm9kZS5maXJzdEVsZW1lbnRDaGlsZCk7XG4gICAgICAgICAgICBib2R5Lm91dGVySFRNTCA9IGRpcnR5O1xuICAgICAgICB9XG5cbiAgICAgICAgLyogV29yayBvbiB3aG9sZSBkb2N1bWVudCBvciBqdXN0IGl0cyBib2R5ICovXG4gICAgICAgIGlmICh0eXBlb2YgZG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICByZXR1cm4gZG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKFxuICAgICAgICAgICAgICAgIFdIT0xFX0RPQ1VNRU5UID8gJ2h0bWwnIDogJ2JvZHknKVswXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZ2V0RWxlbWVudHNCeVRhZ05hbWUuY2FsbChkb2MsXG4gICAgICAgICAgICBXSE9MRV9ET0NVTUVOVCA/ICdodG1sJyA6ICdib2R5JylbMF07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIF9jcmVhdGVJdGVyYXRvclxuICAgICAqXG4gICAgICogQHBhcmFtICBkb2N1bWVudC9mcmFnbWVudCB0byBjcmVhdGUgaXRlcmF0b3IgZm9yXG4gICAgICogQHJldHVybiBpdGVyYXRvciBpbnN0YW5jZVxuICAgICAqL1xuICAgIHZhciBfY3JlYXRlSXRlcmF0b3IgPSBmdW5jdGlvbihyb290KSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVOb2RlSXRlcmF0b3IuY2FsbChyb290Lm93bmVyRG9jdW1lbnQgfHwgcm9vdCxcbiAgICAgICAgICAgIHJvb3QsXG4gICAgICAgICAgICBOb2RlRmlsdGVyLlNIT1dfRUxFTUVOVFxuICAgICAgICAgICAgfCBOb2RlRmlsdGVyLlNIT1dfQ09NTUVOVFxuICAgICAgICAgICAgfCBOb2RlRmlsdGVyLlNIT1dfVEVYVCxcbiAgICAgICAgICAgIGZ1bmN0aW9uKCkgeyByZXR1cm4gTm9kZUZpbHRlci5GSUxURVJfQUNDRVBUOyB9LFxuICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogX2lzQ2xvYmJlcmVkXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIGVsZW1lbnQgdG8gY2hlY2sgZm9yIGNsb2JiZXJpbmcgYXR0YWNrc1xuICAgICAqIEByZXR1cm4gdHJ1ZSBpZiBjbG9iYmVyZWQsIGZhbHNlIGlmIHNhZmVcbiAgICAgKi9cbiAgICB2YXIgX2lzQ2xvYmJlcmVkID0gZnVuY3Rpb24oZWxtKSB7XG4gICAgICAgIGlmIChlbG0gaW5zdGFuY2VvZiBUZXh0IHx8IGVsbSBpbnN0YW5jZW9mIENvbW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoICB0eXBlb2YgZWxtLm5vZGVOYW1lICE9PSAnc3RyaW5nJ1xuICAgICAgICAgICB8fCB0eXBlb2YgZWxtLnRleHRDb250ZW50ICE9PSAnc3RyaW5nJ1xuICAgICAgICAgICB8fCB0eXBlb2YgZWxtLnJlbW92ZUNoaWxkICE9PSAnZnVuY3Rpb24nXG4gICAgICAgICAgIHx8ICEoZWxtLmF0dHJpYnV0ZXMgaW5zdGFuY2VvZiBOYW1lZE5vZGVNYXApXG4gICAgICAgICAgIHx8IHR5cGVvZiBlbG0ucmVtb3ZlQXR0cmlidXRlICE9PSAnZnVuY3Rpb24nXG4gICAgICAgICAgIHx8IHR5cGVvZiBlbG0uc2V0QXR0cmlidXRlICE9PSAnZnVuY3Rpb24nXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBfaXNOb2RlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gb2JqZWN0IHRvIGNoZWNrIHdoZXRoZXIgaXQncyBhIERPTSBub2RlXG4gICAgICogQHJldHVybiB0cnVlIGlzIG9iamVjdCBpcyBhIERPTSBub2RlXG4gICAgICovXG4gICAgdmFyIF9pc05vZGUgPSBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIHR5cGVvZiBOb2RlID09PSBcIm9iamVjdFwiID8gb2JqIGluc3RhbmNlb2YgTm9kZSA6IG9ialxuICAgICAgICAgICAgICAgICYmIHR5cGVvZiBvYmogPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iai5ub2RlVHlwZSA9PT0gXCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICYmIHR5cGVvZiBvYmoubm9kZU5hbWU9PT1cInN0cmluZ1wiXG4gICAgICAgICk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIF9zYW5pdGl6ZUVsZW1lbnRzXG4gICAgICpcbiAgICAgKiBAcHJvdGVjdCBub2RlTmFtZVxuICAgICAqIEBwcm90ZWN0IHRleHRDb250ZW50XG4gICAgICogQHByb3RlY3QgcmVtb3ZlQ2hpbGRcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIG5vZGUgdG8gY2hlY2sgZm9yIHBlcm1pc3Npb24gdG8gZXhpc3RcbiAgICAgKiBAcmV0dXJuICB0cnVlIGlmIG5vZGUgd2FzIGtpbGxlZCwgZmFsc2UgaWYgbGVmdCBhbGl2ZVxuICAgICAqL1xuICAgIHZhciBfc2FuaXRpemVFbGVtZW50cyA9IGZ1bmN0aW9uKGN1cnJlbnROb2RlKSB7XG4gICAgICAgIHZhciB0YWdOYW1lLCBjb250ZW50O1xuICAgICAgICAvKiBFeGVjdXRlIGEgaG9vayBpZiBwcmVzZW50ICovXG4gICAgICAgIF9leGVjdXRlSG9vaygnYmVmb3JlU2FuaXRpemVFbGVtZW50cycsIGN1cnJlbnROb2RlLCBudWxsKTtcblxuICAgICAgICAvKiBDaGVjayBpZiBlbGVtZW50IGlzIGNsb2JiZXJlZCBvciBjYW4gY2xvYmJlciAqL1xuICAgICAgICBpZiAoX2lzQ2xvYmJlcmVkKGN1cnJlbnROb2RlKSkge1xuICAgICAgICAgICAgX2ZvcmNlUmVtb3ZlKGN1cnJlbnROb2RlKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogTm93IGxldCdzIGNoZWNrIHRoZSBlbGVtZW50J3MgdHlwZSBhbmQgbmFtZSAqL1xuICAgICAgICB0YWdOYW1lID0gY3VycmVudE5vZGUubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAvKiBFeGVjdXRlIGEgaG9vayBpZiBwcmVzZW50ICovXG4gICAgICAgIF9leGVjdXRlSG9vaygndXBvblNhbml0aXplRWxlbWVudCcsIGN1cnJlbnROb2RlLCB7XG4gICAgICAgICAgICB0YWdOYW1lOiB0YWdOYW1lLFxuICAgICAgICAgICAgYWxsb3dlZFRhZ3M6IEFMTE9XRURfVEFHU1xuICAgICAgICB9KTtcblxuICAgICAgICAvKiBSZW1vdmUgZWxlbWVudCBpZiBhbnl0aGluZyBmb3JiaWRzIGl0cyBwcmVzZW5jZSAqL1xuICAgICAgICBpZiAoIUFMTE9XRURfVEFHU1t0YWdOYW1lXSB8fCBGT1JCSURfVEFHU1t0YWdOYW1lXSkge1xuICAgICAgICAgICAgLyogS2VlcCBjb250ZW50IGV4Y2VwdCBmb3IgYmxhY2stbGlzdGVkIGVsZW1lbnRzICovXG4gICAgICAgICAgICBpZiAoS0VFUF9DT05URU5UICYmICFGT1JCSURfQ09OVEVOVFNbdGFnTmFtZV1cbiAgICAgICAgICAgICAgICAgICAgJiYgdHlwZW9mIGN1cnJlbnROb2RlLmluc2VydEFkamFjZW50SFRNTCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnROb2RlLmluc2VydEFkamFjZW50SFRNTCgnQWZ0ZXJFbmQnLCBjdXJyZW50Tm9kZS5pbm5lckhUTUwpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfZm9yY2VSZW1vdmUoY3VycmVudE5vZGUpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKiBDb252ZXJ0IG1hcmt1cCB0byBjb3ZlciBqUXVlcnkgYmVoYXZpb3IgKi9cbiAgICAgICAgaWYgKFNBRkVfRk9SX0pRVUVSWSAmJiAhY3VycmVudE5vZGUuZmlyc3RFbGVtZW50Q2hpbGQgJiZcbiAgICAgICAgICAgICAgICAoIWN1cnJlbnROb2RlLmNvbnRlbnQgfHwgIWN1cnJlbnROb2RlLmNvbnRlbnQuZmlyc3RFbGVtZW50Q2hpbGQpICYmXG4gICAgICAgICAgICAgICAgLzwvZy50ZXN0KGN1cnJlbnROb2RlLnRleHRDb250ZW50KSkge1xuICAgICAgICAgICAgRE9NUHVyaWZ5LnJlbW92ZWQucHVzaCh7ZWxlbWVudDogY3VycmVudE5vZGUuY2xvbmVOb2RlKCl9KTtcbiAgICAgICAgICAgIGN1cnJlbnROb2RlLmlubmVySFRNTCA9IGN1cnJlbnROb2RlLnRleHRDb250ZW50LnJlcGxhY2UoLzwvZywgJyZsdDsnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIFNhbml0aXplIGVsZW1lbnQgY29udGVudCB0byBiZSB0ZW1wbGF0ZS1zYWZlICovXG4gICAgICAgIGlmIChTQUZFX0ZPUl9URU1QTEFURVMgJiYgY3VycmVudE5vZGUubm9kZVR5cGUgPT09IDMpIHtcbiAgICAgICAgICAgIC8qIEdldCB0aGUgZWxlbWVudCdzIHRleHQgY29udGVudCAqL1xuICAgICAgICAgICAgY29udGVudCA9IGN1cnJlbnROb2RlLnRleHRDb250ZW50O1xuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQucmVwbGFjZShNVVNUQUNIRV9FWFBSLCAnICcpO1xuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQucmVwbGFjZShFUkJfRVhQUiwgJyAnKTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50Tm9kZS50ZXh0Q29udGVudCAhPT0gY29udGVudCkge1xuICAgICAgICAgICAgICAgIERPTVB1cmlmeS5yZW1vdmVkLnB1c2goe2VsZW1lbnQ6IGN1cnJlbnROb2RlLmNsb25lTm9kZSgpfSk7XG4gICAgICAgICAgICAgICAgY3VycmVudE5vZGUudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyogRXhlY3V0ZSBhIGhvb2sgaWYgcHJlc2VudCAqL1xuICAgICAgICBfZXhlY3V0ZUhvb2soJ2FmdGVyU2FuaXRpemVFbGVtZW50cycsIGN1cnJlbnROb2RlLCBudWxsKTtcblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIHZhciBEQVRBX0FUVFIgPSAvXmRhdGEtW1xcLVxcdy5cXHUwMEI3LVxcdUZGRkZdLztcbiAgICB2YXIgSVNfQUxMT1dFRF9VUkkgPSAvXig/Oig/Oig/OmZ8aHQpdHBzP3xtYWlsdG98dGVsKTp8W15hLXpdfFthLXorLlxcLV0rKD86W15hLXorLlxcLTpdfCQpKS9pO1xuICAgIHZhciBJU19TQ1JJUFRfT1JfREFUQSA9IC9eKD86XFx3K3NjcmlwdHxkYXRhKTovaTtcbiAgICAvKiBUaGlzIG5lZWRzIHRvIGJlIGV4dGVuc2l2ZSB0aGFua3MgdG8gV2Via2l0L0JsaW5rJ3MgYmVoYXZpb3IgKi9cbiAgICB2YXIgQVRUUl9XSElURVNQQUNFID0gL1tcXHgwMC1cXHgyMFxceEEwXFx1MTY4MFxcdTE4MEVcXHUyMDAwLVxcdTIwMjlcXHUyMDVmXFx1MzAwMF0vZztcblxuICAgIC8qKlxuICAgICAqIF9zYW5pdGl6ZUF0dHJpYnV0ZXNcbiAgICAgKlxuICAgICAqIEBwcm90ZWN0IGF0dHJpYnV0ZXNcbiAgICAgKiBAcHJvdGVjdCBub2RlTmFtZVxuICAgICAqIEBwcm90ZWN0IHJlbW92ZUF0dHJpYnV0ZVxuICAgICAqIEBwcm90ZWN0IHNldEF0dHJpYnV0ZVxuICAgICAqXG4gICAgICogQHBhcmFtICAgbm9kZSB0byBzYW5pdGl6ZVxuICAgICAqIEByZXR1cm4gIHZvaWRcbiAgICAgKi9cbiAgICB2YXIgX3Nhbml0aXplQXR0cmlidXRlcyA9IGZ1bmN0aW9uKGN1cnJlbnROb2RlKSB7XG4gICAgICAgIHZhciBhdHRyLCBuYW1lLCB2YWx1ZSwgbGNOYW1lLCBpZEF0dHIsIGF0dHJpYnV0ZXMsIGhvb2tFdmVudCwgbDtcbiAgICAgICAgLyogRXhlY3V0ZSBhIGhvb2sgaWYgcHJlc2VudCAqL1xuICAgICAgICBfZXhlY3V0ZUhvb2soJ2JlZm9yZVNhbml0aXplQXR0cmlidXRlcycsIGN1cnJlbnROb2RlLCBudWxsKTtcblxuICAgICAgICBhdHRyaWJ1dGVzID0gY3VycmVudE5vZGUuYXR0cmlidXRlcztcblxuICAgICAgICAvKiBDaGVjayBpZiB3ZSBoYXZlIGF0dHJpYnV0ZXM7IGlmIG5vdCB3ZSBtaWdodCBoYXZlIGEgdGV4dCBub2RlICovXG4gICAgICAgIGlmICghYXR0cmlidXRlcykgeyByZXR1cm47IH1cblxuICAgICAgICBob29rRXZlbnQgPSB7XG4gICAgICAgICAgICBhdHRyTmFtZTogJycsXG4gICAgICAgICAgICBhdHRyVmFsdWU6ICcnLFxuICAgICAgICAgICAga2VlcEF0dHI6IHRydWUsXG4gICAgICAgICAgICBhbGxvd2VkQXR0cmlidXRlczogQUxMT1dFRF9BVFRSXG4gICAgICAgIH07XG4gICAgICAgIGwgPSBhdHRyaWJ1dGVzLmxlbmd0aDtcblxuICAgICAgICAvKiBHbyBiYWNrd2FyZHMgb3ZlciBhbGwgYXR0cmlidXRlczsgc2FmZWx5IHJlbW92ZSBiYWQgb25lcyAqL1xuICAgICAgICB3aGlsZSAobC0tKSB7XG4gICAgICAgICAgICBhdHRyID0gYXR0cmlidXRlc1tsXTtcbiAgICAgICAgICAgIG5hbWUgPSBhdHRyLm5hbWU7XG4gICAgICAgICAgICB2YWx1ZSA9IGF0dHIudmFsdWUudHJpbSgpO1xuICAgICAgICAgICAgbGNOYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgICAgICAvKiBFeGVjdXRlIGEgaG9vayBpZiBwcmVzZW50ICovXG4gICAgICAgICAgICBob29rRXZlbnQuYXR0ck5hbWUgPSBsY05hbWU7XG4gICAgICAgICAgICBob29rRXZlbnQuYXR0clZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICBob29rRXZlbnQua2VlcEF0dHIgPSB0cnVlO1xuICAgICAgICAgICAgX2V4ZWN1dGVIb29rKCd1cG9uU2FuaXRpemVBdHRyaWJ1dGUnLCBjdXJyZW50Tm9kZSwgaG9va0V2ZW50ICk7XG4gICAgICAgICAgICB2YWx1ZSA9IGhvb2tFdmVudC5hdHRyVmFsdWU7XG5cbiAgICAgICAgICAgIC8qIFJlbW92ZSBhdHRyaWJ1dGUgKi9cbiAgICAgICAgICAgIC8vIFNhZmFyaSAoaU9TICsgTWFjKSwgbGFzdCB0ZXN0ZWQgdjguMC41LCBjcmFzaGVzIGlmIHlvdSB0cnkgdG9cbiAgICAgICAgICAgIC8vIHJlbW92ZSBhIFwibmFtZVwiIGF0dHJpYnV0ZSBmcm9tIGFuIDxpbWc+IHRhZyB0aGF0IGhhcyBhbiBcImlkXCJcbiAgICAgICAgICAgIC8vIGF0dHJpYnV0ZSBhdCB0aGUgdGltZS5cbiAgICAgICAgICAgIGlmIChsY05hbWUgPT09ICduYW1lJyAgJiZcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudE5vZGUubm9kZU5hbWUgPT09ICdJTUcnICYmIGF0dHJpYnV0ZXMuaWQpIHtcbiAgICAgICAgICAgICAgICBpZEF0dHIgPSBhdHRyaWJ1dGVzLmlkO1xuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuYXBwbHkoYXR0cmlidXRlcyk7XG4gICAgICAgICAgICAgICAgX3JlbW92ZUF0dHJpYnV0ZSgnaWQnLCBjdXJyZW50Tm9kZSk7XG4gICAgICAgICAgICAgICAgX3JlbW92ZUF0dHJpYnV0ZShuYW1lLCBjdXJyZW50Tm9kZSk7XG4gICAgICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZXMuaW5kZXhPZihpZEF0dHIpID4gbCkge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50Tm9kZS5zZXRBdHRyaWJ1dGUoJ2lkJywgaWRBdHRyLnZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFRoaXMgYXZvaWRzIGEgY3Jhc2ggaW4gU2FmYXJpIHY5LjAgd2l0aCBkb3VibGUtaWRzLlxuICAgICAgICAgICAgICAgIC8vIFRoZSB0cmljayBpcyB0byBmaXJzdCBzZXQgdGhlIGlkIHRvIGJlIGVtcHR5IGFuZCB0aGVuIHRvXG4gICAgICAgICAgICAgICAgLy8gcmVtb3ZlIHRoZSBhdHRyaXVidXRlXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdpZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudE5vZGUuc2V0QXR0cmlidXRlKG5hbWUsICcnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX3JlbW92ZUF0dHJpYnV0ZShuYW1lLCBjdXJyZW50Tm9kZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qIERpZCB0aGUgaG9va3MgYXBwcm92ZSBvZiB0aGUgYXR0cmlidXRlPyAqL1xuICAgICAgICAgICAgaWYgKCFob29rRXZlbnQua2VlcEF0dHIpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyogTWFrZSBzdXJlIGF0dHJpYnV0ZSBjYW5ub3QgY2xvYmJlciAqL1xuICAgICAgICAgICAgaWYgKFNBTklUSVpFX0RPTSAmJlxuICAgICAgICAgICAgICAgICAgICAobGNOYW1lID09PSAnaWQnIHx8IGxjTmFtZSA9PT0gJ25hbWUnKSAmJlxuICAgICAgICAgICAgICAgICAgICAodmFsdWUgaW4gd2luZG93IHx8IHZhbHVlIGluIGRvY3VtZW50IHx8IHZhbHVlIGluIGZvcm1FbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKiBTYW5pdGl6ZSBhdHRyaWJ1dGUgY29udGVudCB0byBiZSB0ZW1wbGF0ZS1zYWZlICovXG4gICAgICAgICAgICBpZiAoU0FGRV9GT1JfVEVNUExBVEVTKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKE1VU1RBQ0hFX0VYUFIsICcgJyk7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKEVSQl9FWFBSLCAnICcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKiBBbGxvdyB2YWxpZCBkYXRhLSogYXR0cmlidXRlczogQXQgbGVhc3Qgb25lIGNoYXJhY3RlciBhZnRlciBcIi1cIlxuICAgICAgICAgICAgICAgKGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2RvbS5odG1sI2VtYmVkZGluZy1jdXN0b20tbm9uLXZpc2libGUtZGF0YS13aXRoLXRoZS1kYXRhLSotYXR0cmlidXRlcylcbiAgICAgICAgICAgICAgIFhNTC1jb21wYXRpYmxlIChodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9pbmZyYXN0cnVjdHVyZS5odG1sI3htbC1jb21wYXRpYmxlIGFuZCBodHRwOi8vd3d3LnczLm9yZy9UUi94bWwvI2QwZTgwNClcbiAgICAgICAgICAgICAgIFdlIGRvbid0IG5lZWQgdG8gY2hlY2sgdGhlIHZhbHVlOyBpdCdzIGFsd2F5cyBVUkkgc2FmZS4gKi9cbiAgICAgICAgICAgIGlmIChBTExPV19EQVRBX0FUVFIgJiYgREFUQV9BVFRSLnRlc3QobGNOYW1lKSkge1xuICAgICAgICAgICAgICAgIC8vIFRoaXMgYXR0cmlidXRlIGlzIHNhZmVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qIE90aGVyd2lzZSwgY2hlY2sgdGhlIG5hbWUgaXMgcGVybWl0dGVkICovXG4gICAgICAgICAgICBlbHNlIGlmICghQUxMT1dFRF9BVFRSW2xjTmFtZV0gfHwgRk9SQklEX0FUVFJbbGNOYW1lXSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyogQ2hlY2sgdmFsdWUgaXMgc2FmZS4gRmlyc3QsIGlzIGF0dHIgaW5lcnQ/IElmIHNvLCBpcyBzYWZlICovXG4gICAgICAgICAgICBlbHNlIGlmIChVUklfU0FGRV9BVFRSSUJVVEVTW2xjTmFtZV0pIHtcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGF0dHJpYnV0ZSBpcyBzYWZlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKiBDaGVjayBubyBzY3JpcHQsIGRhdGEgb3IgdW5rbm93biBwb3NzaWJseSB1bnNhZmUgVVJJXG4gICAgICAgICAgICAgICB1bmxlc3Mgd2Uga25vdyBVUkkgdmFsdWVzIGFyZSBzYWZlIGZvciB0aGF0IGF0dHJpYnV0ZSAqL1xuICAgICAgICAgICAgZWxzZSBpZiAoSVNfQUxMT1dFRF9VUkkudGVzdCh2YWx1ZS5yZXBsYWNlKEFUVFJfV0hJVEVTUEFDRSwnJykpKSB7XG4gICAgICAgICAgICAgICAgLy8gVGhpcyBhdHRyaWJ1dGUgaXMgc2FmZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyogS2VlcCBpbWFnZSBkYXRhIFVSSXMgYWxpdmUgaWYgc3JjIGlzIGFsbG93ZWQgKi9cbiAgICAgICAgICAgIGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgIGxjTmFtZSA9PT0gJ3NyYycgJiZcbiAgICAgICAgICAgICAgICB2YWx1ZS5pbmRleE9mKCdkYXRhOicpID09PSAwICYmXG4gICAgICAgICAgICAgICAgREFUQV9VUklfVEFHU1tjdXJyZW50Tm9kZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpXSkge1xuICAgICAgICAgICAgICAgIC8vIFRoaXMgYXR0cmlidXRlIGlzIHNhZmVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qIEFsbG93IHVua25vd24gcHJvdG9jb2xzOiBUaGlzIHByb3ZpZGVzIHN1cHBvcnQgZm9yIGxpbmtzIHRoYXRcbiAgICAgICAgICAgICAgIGFyZSBoYW5kbGVkIGJ5IHByb3RvY29sIGhhbmRsZXJzIHdoaWNoIG1heSBiZSB1bmtub3duIGFoZWFkIG9mXG4gICAgICAgICAgICAgICB0aW1lLCBlLmcuIGZiOiwgc3BvdGlmeTogKi9cbiAgICAgICAgICAgIGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgIEFMTE9XX1VOS05PV05fUFJPVE9DT0xTICYmXG4gICAgICAgICAgICAgICAgIUlTX1NDUklQVF9PUl9EQVRBLnRlc3QodmFsdWUucmVwbGFjZShBVFRSX1dISVRFU1BBQ0UsJycpKSkge1xuICAgICAgICAgICAgICAgIC8vIFRoaXMgYXR0cmlidXRlIGlzIHNhZmVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qIENoZWNrIGZvciBiaW5hcnkgYXR0cmlidXRlcyAqL1xuICAgICAgICAgICAgZWxzZSBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICAgICAgLy8gYmluYXJ5IGF0dHJpYnV0ZXMgYXJlIHNhZmUgYXQgdGhpcyBwb2ludFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyogQW55dGhpbmcgZWxzZSwgcHJlc3VtZSB1bnNhZmUsIGRvIG5vdCBhZGQgaXQgYmFjayAqL1xuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qIEhhbmRsZSBpbnZhbGlkIGRhdGEtKiBhdHRyaWJ1dGUgc2V0IGJ5IHRyeS1jYXRjaGluZyBpdCAqL1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjdXJyZW50Tm9kZS5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIERPTVB1cmlmeS5yZW1vdmVkLnBvcCgpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgICAgfVxuXG4gICAgICAgIC8qIEV4ZWN1dGUgYSBob29rIGlmIHByZXNlbnQgKi9cbiAgICAgICAgX2V4ZWN1dGVIb29rKCdhZnRlclNhbml0aXplQXR0cmlidXRlcycsIGN1cnJlbnROb2RlLCBudWxsKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogX3Nhbml0aXplU2hhZG93RE9NXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIGZyYWdtZW50IHRvIGl0ZXJhdGUgb3ZlciByZWN1cnNpdmVseVxuICAgICAqIEByZXR1cm4gdm9pZFxuICAgICAqL1xuICAgIHZhciBfc2FuaXRpemVTaGFkb3dET00gPSBmdW5jdGlvbihmcmFnbWVudCkge1xuICAgICAgICB2YXIgc2hhZG93Tm9kZTtcbiAgICAgICAgdmFyIHNoYWRvd0l0ZXJhdG9yID0gX2NyZWF0ZUl0ZXJhdG9yKGZyYWdtZW50KTtcblxuICAgICAgICAvKiBFeGVjdXRlIGEgaG9vayBpZiBwcmVzZW50ICovXG4gICAgICAgIF9leGVjdXRlSG9vaygnYmVmb3JlU2FuaXRpemVTaGFkb3dET00nLCBmcmFnbWVudCwgbnVsbCk7XG5cbiAgICAgICAgd2hpbGUgKCAoc2hhZG93Tm9kZSA9IHNoYWRvd0l0ZXJhdG9yLm5leHROb2RlKCkpICkge1xuICAgICAgICAgICAgLyogRXhlY3V0ZSBhIGhvb2sgaWYgcHJlc2VudCAqL1xuICAgICAgICAgICAgX2V4ZWN1dGVIb29rKCd1cG9uU2FuaXRpemVTaGFkb3dOb2RlJywgc2hhZG93Tm9kZSwgbnVsbCk7XG5cbiAgICAgICAgICAgIC8qIFNhbml0aXplIHRhZ3MgYW5kIGVsZW1lbnRzICovXG4gICAgICAgICAgICBpZiAoX3Nhbml0aXplRWxlbWVudHMoc2hhZG93Tm9kZSkpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyogRGVlcCBzaGFkb3cgRE9NIGRldGVjdGVkICovXG4gICAgICAgICAgICBpZiAoc2hhZG93Tm9kZS5jb250ZW50IGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudCkge1xuICAgICAgICAgICAgICAgIF9zYW5pdGl6ZVNoYWRvd0RPTShzaGFkb3dOb2RlLmNvbnRlbnQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKiBDaGVjayBhdHRyaWJ1dGVzLCBzYW5pdGl6ZSBpZiBuZWNlc3NhcnkgKi9cbiAgICAgICAgICAgIF9zYW5pdGl6ZUF0dHJpYnV0ZXMoc2hhZG93Tm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKiBFeGVjdXRlIGEgaG9vayBpZiBwcmVzZW50ICovXG4gICAgICAgIF9leGVjdXRlSG9vaygnYWZ0ZXJTYW5pdGl6ZVNoYWRvd0RPTScsIGZyYWdtZW50LCBudWxsKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogX2V4ZWN1dGVIb29rXG4gICAgICogRXhlY3V0ZSB1c2VyIGNvbmZpZ3VyYWJsZSBob29rc1xuICAgICAqXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSBlbnRyeVBvaW50ICBOYW1lIG9mIHRoZSBob29rJ3MgZW50cnkgcG9pbnRcbiAgICAgKiBAcGFyYW0gIHtOb2RlfSBjdXJyZW50Tm9kZVxuICAgICAqL1xuICAgIHZhciBfZXhlY3V0ZUhvb2sgPSBmdW5jdGlvbihlbnRyeVBvaW50LCBjdXJyZW50Tm9kZSwgZGF0YSkge1xuICAgICAgICBpZiAoIWhvb2tzW2VudHJ5UG9pbnRdKSB7IHJldHVybjsgfVxuXG4gICAgICAgIGhvb2tzW2VudHJ5UG9pbnRdLmZvckVhY2goZnVuY3Rpb24oaG9vaykge1xuICAgICAgICAgICAgaG9vay5jYWxsKERPTVB1cmlmeSwgY3VycmVudE5vZGUsIGRhdGEsIENPTkZJRyk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBzYW5pdGl6ZVxuICAgICAqIFB1YmxpYyBtZXRob2QgcHJvdmlkaW5nIGNvcmUgc2FuaXRhdGlvbiBmdW5jdGlvbmFsaXR5XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xOb2RlfSBkaXJ0eSBzdHJpbmcgb3IgRE9NIG5vZGVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlndXJhdGlvbiBvYmplY3RcbiAgICAgKi9cbiAgICBET01QdXJpZnkuc2FuaXRpemUgPSBmdW5jdGlvbihkaXJ0eSwgY2ZnKSB7XG4gICAgICAgIHZhciBib2R5LCBpbXBvcnRlZE5vZGUsIGN1cnJlbnROb2RlLCBvbGROb2RlLCBub2RlSXRlcmF0b3IsIHJldHVybk5vZGU7XG4gICAgICAgIC8qIE1ha2Ugc3VyZSB3ZSBoYXZlIGEgc3RyaW5nIHRvIHNhbml0aXplLlxuICAgICAgICAgICBETyBOT1QgcmV0dXJuIGVhcmx5LCBhcyB0aGlzIHdpbGwgcmV0dXJuIHRoZSB3cm9uZyB0eXBlIGlmXG4gICAgICAgICAgIHRoZSB1c2VyIGhhcyByZXF1ZXN0ZWQgYSBET00gb2JqZWN0IHJhdGhlciB0aGFuIGEgc3RyaW5nICovXG4gICAgICAgIGlmICghZGlydHkpIHtcbiAgICAgICAgICAgIGRpcnR5ID0gJzwhLS0+JztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIFN0cmluZ2lmeSwgaW4gY2FzZSBkaXJ0eSBpcyBhbiBvYmplY3QgKi9cbiAgICAgICAgaWYgKHR5cGVvZiBkaXJ0eSAhPT0gJ3N0cmluZycgJiYgIV9pc05vZGUoZGlydHkpKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGRpcnR5LnRvU3RyaW5nICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigndG9TdHJpbmcgaXMgbm90IGEgZnVuY3Rpb24nKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGlydHkgPSBkaXJ0eS50b1N0cmluZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyogQ2hlY2sgd2UgY2FuIHJ1bi4gT3RoZXJ3aXNlIGZhbGwgYmFjayBvciBpZ25vcmUgKi9cbiAgICAgICAgaWYgKCFET01QdXJpZnkuaXNTdXBwb3J0ZWQpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93LnRvU3RhdGljSFRNTCA9PT0gJ29iamVjdCdcbiAgICAgICAgICAgICAgICB8fCB0eXBlb2Ygd2luZG93LnRvU3RhdGljSFRNTCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZGlydHkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB3aW5kb3cudG9TdGF0aWNIVE1MKGRpcnR5KTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKF9pc05vZGUoZGlydHkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB3aW5kb3cudG9TdGF0aWNIVE1MKGRpcnR5Lm91dGVySFRNTCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRpcnR5O1xuICAgICAgICB9XG5cbiAgICAgICAgLyogQXNzaWduIGNvbmZpZyB2YXJzICovXG4gICAgICAgIF9wYXJzZUNvbmZpZyhjZmcpO1xuXG4gICAgICAgIC8qIENsZWFuIHVwIHJlbW92ZWQgZWxlbWVudHMgKi9cbiAgICAgICAgRE9NUHVyaWZ5LnJlbW92ZWQgPSBbXTtcblxuICAgICAgICBpZiAoZGlydHkgaW5zdGFuY2VvZiBOb2RlKSB7XG4gICAgICAgICAgICAvKiBJZiBkaXJ0eSBpcyBhIERPTSBlbGVtZW50LCBhcHBlbmQgdG8gYW4gZW1wdHkgZG9jdW1lbnQgdG8gYXZvaWRcbiAgICAgICAgICAgICAgIGVsZW1lbnRzIGJlaW5nIHN0cmlwcGVkIGJ5IHRoZSBwYXJzZXIgKi9cbiAgICAgICAgICAgIGJvZHkgPSBfaW5pdERvY3VtZW50KCc8IS0tPicpO1xuICAgICAgICAgICAgaW1wb3J0ZWROb2RlID0gYm9keS5vd25lckRvY3VtZW50LmltcG9ydE5vZGUoZGlydHksIHRydWUpO1xuICAgICAgICAgICAgaWYgKGltcG9ydGVkTm9kZS5ub2RlVHlwZSA9PT0gMSAmJiBpbXBvcnRlZE5vZGUubm9kZU5hbWUgPT09ICdCT0RZJykge1xuICAgICAgICAgICAgICAgIC8qIE5vZGUgaXMgYWxyZWFkeSBhIGJvZHksIHVzZSBhcyBpcyAqL1xuICAgICAgICAgICAgICAgIGJvZHkgPSBpbXBvcnRlZE5vZGU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoIGltcG9ydGVkTm9kZSApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLyogRXhpdCBkaXJlY3RseSBpZiB3ZSBoYXZlIG5vdGhpbmcgdG8gZG8gKi9cbiAgICAgICAgICAgIGlmICghUkVUVVJOX0RPTSAmJiAhV0hPTEVfRE9DVU1FTlQgJiYgZGlydHkuaW5kZXhPZignPCcpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkaXJ0eTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyogSW5pdGlhbGl6ZSB0aGUgZG9jdW1lbnQgdG8gd29yayBvbiAqL1xuICAgICAgICAgICAgYm9keSA9IF9pbml0RG9jdW1lbnQoZGlydHkpO1xuXG4gICAgICAgICAgICAvKiBDaGVjayB3ZSBoYXZlIGEgRE9NIG5vZGUgZnJvbSB0aGUgZGF0YSAqL1xuICAgICAgICAgICAgaWYgKCFib2R5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFJFVFVSTl9ET00gPyBudWxsIDogJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKiBHZXQgbm9kZSBpdGVyYXRvciAqL1xuICAgICAgICBub2RlSXRlcmF0b3IgPSBfY3JlYXRlSXRlcmF0b3IoYm9keSk7XG5cbiAgICAgICAgLyogTm93IHN0YXJ0IGl0ZXJhdGluZyBvdmVyIHRoZSBjcmVhdGVkIGRvY3VtZW50ICovXG4gICAgICAgIHdoaWxlICggKGN1cnJlbnROb2RlID0gbm9kZUl0ZXJhdG9yLm5leHROb2RlKCkpICkge1xuXG4gICAgICAgICAgICAvKiBGaXggSUUncyBzdHJhbmdlIGJlaGF2aW9yIHdpdGggbWFuaXB1bGF0ZWQgdGV4dE5vZGVzICM4OSAqL1xuICAgICAgICAgICAgaWYgKGN1cnJlbnROb2RlLm5vZGVUeXBlID09PSAzICYmIGN1cnJlbnROb2RlID09PSBvbGROb2RlKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qIFNhbml0aXplIHRhZ3MgYW5kIGVsZW1lbnRzICovXG4gICAgICAgICAgICBpZiAoX3Nhbml0aXplRWxlbWVudHMoY3VycmVudE5vZGUpKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qIFNoYWRvdyBET00gZGV0ZWN0ZWQsIHNhbml0aXplIGl0ICovXG4gICAgICAgICAgICBpZiAoY3VycmVudE5vZGUuY29udGVudCBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpIHtcbiAgICAgICAgICAgICAgICBfc2FuaXRpemVTaGFkb3dET00oY3VycmVudE5vZGUuY29udGVudCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qIENoZWNrIGF0dHJpYnV0ZXMsIHNhbml0aXplIGlmIG5lY2Vzc2FyeSAqL1xuICAgICAgICAgICAgX3Nhbml0aXplQXR0cmlidXRlcyhjdXJyZW50Tm9kZSk7XG5cbiAgICAgICAgICAgIG9sZE5vZGUgPSBjdXJyZW50Tm9kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIFJldHVybiBzYW5pdGl6ZWQgc3RyaW5nIG9yIERPTSAqL1xuICAgICAgICBpZiAoUkVUVVJOX0RPTSkge1xuXG4gICAgICAgICAgICBpZiAoUkVUVVJOX0RPTV9GUkFHTUVOVCkge1xuICAgICAgICAgICAgICAgIHJldHVybk5vZGUgPSBjcmVhdGVEb2N1bWVudEZyYWdtZW50LmNhbGwoYm9keS5vd25lckRvY3VtZW50KTtcblxuICAgICAgICAgICAgICAgIHdoaWxlIChib2R5LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuTm9kZS5hcHBlbmRDaGlsZChib2R5LmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuTm9kZSA9IGJvZHk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChSRVRVUk5fRE9NX0lNUE9SVCkge1xuICAgICAgICAgICAgICAgIC8qIGFkb3B0Tm9kZSgpIGlzIG5vdCB1c2VkIGJlY2F1c2UgaW50ZXJuYWwgc3RhdGUgaXMgbm90IHJlc2V0XG4gICAgICAgICAgICAgICAgICAgKGUuZy4gdGhlIHBhc3QgbmFtZXMgbWFwIG9mIGEgSFRNTEZvcm1FbGVtZW50KSwgdGhpcyBpcyBzYWZlXG4gICAgICAgICAgICAgICAgICAgaW4gdGhlb3J5IGJ1dCB3ZSB3b3VsZCByYXRoZXIgbm90IHJpc2sgYW5vdGhlciBhdHRhY2sgdmVjdG9yLlxuICAgICAgICAgICAgICAgICAgIFRoZSBzdGF0ZSB0aGF0IGlzIGNsb25lZCBieSBpbXBvcnROb2RlKCkgaXMgZXhwbGljaXRseSBkZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgYnkgdGhlIHNwZWNzLiAqL1xuICAgICAgICAgICAgICAgIHJldHVybk5vZGUgPSBpbXBvcnROb2RlLmNhbGwob3JpZ2luYWxEb2N1bWVudCwgcmV0dXJuTm9kZSwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiByZXR1cm5Ob2RlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFdIT0xFX0RPQ1VNRU5UID8gYm9keS5vdXRlckhUTUwgOiBib2R5LmlubmVySFRNTDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogYWRkSG9va1xuICAgICAqIFB1YmxpYyBtZXRob2QgdG8gYWRkIERPTVB1cmlmeSBob29rc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGVudHJ5UG9pbnRcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBob29rRnVuY3Rpb25cbiAgICAgKi9cbiAgICBET01QdXJpZnkuYWRkSG9vayA9IGZ1bmN0aW9uKGVudHJ5UG9pbnQsIGhvb2tGdW5jdGlvbikge1xuICAgICAgICBpZiAodHlwZW9mIGhvb2tGdW5jdGlvbiAhPT0gJ2Z1bmN0aW9uJykgeyByZXR1cm47IH1cbiAgICAgICAgaG9va3NbZW50cnlQb2ludF0gPSBob29rc1tlbnRyeVBvaW50XSB8fCBbXTtcbiAgICAgICAgaG9va3NbZW50cnlQb2ludF0ucHVzaChob29rRnVuY3Rpb24pO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiByZW1vdmVIb29rXG4gICAgICogUHVibGljIG1ldGhvZCB0byByZW1vdmUgYSBET01QdXJpZnkgaG9vayBhdCBhIGdpdmVuIGVudHJ5UG9pbnRcbiAgICAgKiAocG9wcyBpdCBmcm9tIHRoZSBzdGFjayBvZiBob29rcyBpZiBtb3JlIGFyZSBwcmVzZW50KVxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGVudHJ5UG9pbnRcbiAgICAgKiBAcmV0dXJuIHZvaWRcbiAgICAgKi9cbiAgICBET01QdXJpZnkucmVtb3ZlSG9vayA9IGZ1bmN0aW9uKGVudHJ5UG9pbnQpIHtcbiAgICAgICAgaWYgKGhvb2tzW2VudHJ5UG9pbnRdKSB7XG4gICAgICAgICAgICBob29rc1tlbnRyeVBvaW50XS5wb3AoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiByZW1vdmVIb29rc1xuICAgICAqIFB1YmxpYyBtZXRob2QgdG8gcmVtb3ZlIGFsbCBET01QdXJpZnkgaG9va3MgYXQgYSBnaXZlbiBlbnRyeVBvaW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IGVudHJ5UG9pbnRcbiAgICAgKiBAcmV0dXJuIHZvaWRcbiAgICAgKi9cbiAgICBET01QdXJpZnkucmVtb3ZlSG9va3MgPSBmdW5jdGlvbihlbnRyeVBvaW50KSB7XG4gICAgICAgIGlmIChob29rc1tlbnRyeVBvaW50XSkge1xuICAgICAgICAgICAgaG9va3NbZW50cnlQb2ludF0gPSBbXTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiByZW1vdmVBbGxIb29rc1xuICAgICAqIFB1YmxpYyBtZXRob2QgdG8gcmVtb3ZlIGFsbCBET01QdXJpZnkgaG9va3NcbiAgICAgKlxuICAgICAqIEByZXR1cm4gdm9pZFxuICAgICAqL1xuICAgIERPTVB1cmlmeS5yZW1vdmVBbGxIb29rcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBob29rcyA9IHt9O1xuICAgIH07XG5cbiAgICByZXR1cm4gRE9NUHVyaWZ5O1xufSkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZG9tcHVyaWZ5L3NyYy9wdXJpZnkuanNcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jb25zdCBtYXBPcHRpb25zID0ge1xyXG4gIGNlbnRlcjoge1xyXG4gICAgbGF0OiA1NS43LCBcclxuICAgIGxuZzogMzcuNlxyXG4gIH0sXHJcbiAgem9vbTogMTBcclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFBsYWNlcyhtYXAsIGxhdCA9IDU1LjcsIGxuZyA9IDM3LjYpe1xyXG4gIGF4aW9zLmdldChgYXBpL3N0b3Jlcy9uZWFyP2xhdD0ke2xhdH0mbG5nPSR7bG5nfWApXHJcbiAgICAgICAudGhlbiggcmVzID0+IHtcclxuICAgICAgICAgY29uc3QgcGxhY2VzID0gcmVzLmRhdGE7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKHBsYWNlcylcclxuICAgICAgICAgaWYoIXBsYWNlcykgcmV0dXJuO1xyXG5cclxuICAgICAgICAgY29uc3QgYm91bmRzID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZ0JvdW5kcygpO1xyXG4gICAgICAgICBjb25zdCBpbmZvV2luZG93ID0gbmV3IGdvb2dsZS5tYXBzLkluZm9XaW5kb3coKTtcclxuXHJcbiAgICAgICAgIGNvbnN0IG1hcmtlcnMgPSBwbGFjZXMubWFwKCBwbGFjZSA9PiB7XHJcbiAgICAgICAgICAgY29uc3QgWyBwbGFjZUxuZywgcGxhY2VMYXQgXSA9IHBsYWNlLmxvY2F0aW9uLmNvb3JkaW5hdGVzO1xyXG4gICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0geyBsYXQ6IHBsYWNlTGF0LCBsbmc6IHBsYWNlTG5nIH07XHJcbiAgICAgICAgICAgYm91bmRzLmV4dGVuZChwb3NpdGlvbik7XHJcbiAgICAgICAgICAgY29uc29sZS5sb2cocG9zaXRpb24pXHJcbiAgICAgICAgICAgY29uc3QgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7IG1hcCwgcG9zaXRpb24gfSk7XHJcbiAgICAgICAgICAgbWFya2VyLnBsYWNlID0gcGxhY2U7XHJcbiAgICAgICAgICAgcmV0dXJuIG1hcmtlcjtcclxuICAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgICAgbWFya2Vycy5mb3JFYWNoKCBtYXJrZXIgPT4gbWFya2VyLmFkZExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgY29uc3QgaHRtbCA9IGA8ZGl2IGNsYXNzPVwicG9wdXBcIj5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiL3N0b3JlLyR7dGhpcy5wbGFjZS5zbHVnfVwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvdXBsb2Fkcy8ke3RoaXMucGxhY2UucGhvdG8gfHwgJ3N0b3JlLnBuZyd9XCIgYWx0PVwiJHt0aGlzLnBsYWNlLm5hbWV9XCIvPlxyXG4gICAgICAgICAgICAgICAgPHA+JHt0aGlzLnBsYWNlLm5hbWV9IC0gJHt0aGlzLnBsYWNlLmxvY2F0aW9uLmFkZHJlc3N9PC9wPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+YFxyXG4gICAgICAgICAgIGluZm9XaW5kb3cuc2V0Q29udGVudChodG1sKTtcclxuICAgICAgICAgICBpbmZvV2luZG93Lm9wZW4obWFwLCB0aGlzKVxyXG4gICAgICAgICB9KSlcclxuXHJcbiAgICAgICAgIG1hcC5zZXRDZW50ZXIoYm91bmRzLmdldENlbnRlcigpKTtcclxuICAgICAgICAgbWFwLmZpdEJvdW5kcyhib3VuZHMpXHJcbiAgICAgICB9KVxyXG59IFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFrZU1hcChtYXBDb250YWluZXIpe1xyXG4gIGlmKCFtYXBDb250YWluZXIpIHJldHVybjtcclxuICBjb25zdCBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKG1hcENvbnRhaW5lciwgbWFwT3B0aW9ucylcclxuICBsb2FkUGxhY2VzKG1hcClcclxuXHJcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImdlb2xvY2F0ZVwiXScpO1xyXG4gIGNvbnN0IGF1dG9jb21wbGV0ZSA9IG5ldyBnb29nbGUubWFwcy5wbGFjZXMuQXV0b2NvbXBsZXRlKGlucHV0KVxyXG4gIGF1dG9jb21wbGV0ZS5hZGRMaXN0ZW5lcigncGxhY2VfY2hhbmdlZCcsICgpID0+IHtcclxuICAgIGNvbnN0IHBsYWNlID0gYXV0b2NvbXBsZXRlLmdldFBsYWNlKCk7XHJcbiAgICBsb2FkUGxhY2VzKG1hcCwgcGxhY2UuZ2VvbWV0cnkubG9jYXRpb24ubGF0KCksIHBsYWNlLmdlb21ldHJ5LmxvY2F0aW9uLmxuZygpKVxyXG4gIH0pXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcHVibGljL2pzL21vZHVsZXMvbWFwLmpzIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZEhlYXJ0KGUpe1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBheGlvc1xyXG4gICAgLnBvc3QodGhpcy5hY3Rpb24pXHJcbiAgICAudGhlbiggcmVzID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmhlYXJ0KVxyXG4gICAgICAgIGNvbnN0IGlzSGVhcnRlZCA9IHRoaXMuaGVhcnQuY2xhc3NMaXN0LnRvZ2dsZSgnaGVhcnRfX2J1dHRvbi0taGVhcnRlZCcpO1xyXG4gICAgICAgIGNvbnN0IGNvdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYXJ0LWNvdW50Jyk7XHJcbiAgICAgICAgY291bnQudGV4dENvbnRlbnQgPSByZXMuZGF0YS5oZWFydHMubGVuZ3RoO1xyXG4gICAgICAgIGlmKGlzSGVhcnRlZCl7XHJcbiAgICAgICAgICAgIHRoaXMuaGVhcnQuY2xhc3NMaXN0LmFkZCgnaGVhcnRfX2J1dHRvbi0tZmxvYXQnKVxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCAoKSA9PiB0aGlzLmhlYXJ0LmNsYXNzTGlzdC5yZW1vdmUoJ2hlYXJ0X19idXR0b24tLWZsb2F0JyksIDI0MDApO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAuY2F0Y2goY29uc29sZS5lcnJvcilcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBwdWJsaWMvanMvbW9kdWxlcy9oZWFydC5qcyIsImltcG9ydCBhZGRJY29uIGZyb20gJy4uL2ltYWdlcy9pY29ucy9hZGQuc3ZnJztcclxuaW1wb3J0IGNvZ0ljb24gZnJvbSAnLi4vaW1hZ2VzL2ljb25zL2NvZy5zdmcnO1xyXG5pbXBvcnQgaGVhcnRJY29uIGZyb20gJy4uL2ltYWdlcy9pY29ucy9oZWFydC5zdmcnO1xyXG5pbXBvcnQgbG9nb0ljb24gZnJvbSAnLi4vaW1hZ2VzL2ljb25zL2xvZ28uc3ZnJztcclxuaW1wb3J0IGxvZ291dEljb24gZnJvbSAnLi4vaW1hZ2VzL2ljb25zL2xvZ291dC5zdmcnO1xyXG5pbXBvcnQgbWFwSWNvbiBmcm9tICcuLi9pbWFnZXMvaWNvbnMvbWFwLnN2Zyc7XHJcbmltcG9ydCBwZW5jaWxJY29uIGZyb20gJy4uL2ltYWdlcy9pY29ucy9wZW5jaWwuc3ZnJztcclxuaW1wb3J0IHJldmlld0ljb24gZnJvbSAnLi4vaW1hZ2VzL2ljb25zL3Jldmlldy5zdmcnO1xyXG5pbXBvcnQgc3RvcmVJY29uIGZyb20gJy4uL2ltYWdlcy9pY29ucy9zdG9yZS5zdmcnO1xyXG5pbXBvcnQgc3RvcmUySWNvbiBmcm9tICcuLi9pbWFnZXMvaWNvbnMvc3RvcmUyLnN2Zyc7XHJcbmltcG9ydCB0YWdJY29uIGZyb20gJy4uL2ltYWdlcy9pY29ucy90YWcuc3ZnJztcclxuaW1wb3J0IHRvcEljb24gZnJvbSAnLi4vaW1hZ2VzL2ljb25zL3RvcC5zdmcnO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBwdWJsaWMvanMvc3ZnLmpzIiwiaW1wb3J0IFNwcml0ZVN5bWJvbCBmcm9tIFwic3ZnLWJha2VyLXJ1bnRpbWUvYnJvd3Nlci1zeW1ib2xcIjtcbmltcG9ydCBzcHJpdGUgZnJvbSBcInN2Zy1zcHJpdGUtbG9hZGVyL3J1bnRpbWUvYnJvd3Nlci1zcHJpdGUuYnVpbGRcIjtcbnZhciBzeW1ib2wgPSBuZXcgU3ByaXRlU3ltYm9sKHtcbiAgXCJpZFwiOiBcImFkZFwiLFxuICBcInVzZVwiOiBcImFkZC11c2FnZVwiLFxuICBcInZpZXdCb3hcIjogXCIwIDAgMTAwIDEwMFwiLFxuICBcImNvbnRlbnRcIjogXCI8c3ltYm9sIHZpZXdCb3g9XFxcIjAgMCAxMDAgMTAwXFxcIiBpZD1cXFwiYWRkXFxcIj48ZyB0cmFuc2Zvcm09XFxcInRyYW5zbGF0ZSgwLC05NTIuMzYyMTgpXFxcIj48cGF0aCBkPVxcXCJNIDEwLjgxMjUgMTAgQSAxLjAwMDA5OTkgMS4wMDAwOTk5IDAgMCAwIDEwIDExIEwgMTAgODkgQSAxLjAwMDA5OTkgMS4wMDAwOTk5IDAgMCAwIDExIDkwIEwgODkgOTAgQSAxLjAwMDA5OTkgMS4wMDAwOTk5IDAgMCAwIDkwIDg5IEwgOTAgMTEgQSAxLjAwMDA5OTkgMS4wMDAwOTk5IDAgMCAwIDg5IDEwIEwgMTEgMTAgQSAxLjAwMDA5OTkgMS4wMDAwOTk5IDAgMCAwIDEwLjgxMjUgMTAgeiBNIDEyIDEyIEwgODggMTIgTCA4OCA4OCBMIDEyIDg4IEwgMTIgMTIgeiBNIDQ5Ljg3NSAyNi45Njg3NSBBIDEuMDAwMDk5OSAxLjAwMDA5OTkgMCAwIDAgNDkgMjggTCA0OSA0OSBMIDI4IDQ5IEEgMS4wMDAwOTk5IDEuMDAwMDk5OSAwIDAgMCAyNy44MTI1IDQ5IEEgMS4wMDQzODQ5IDEuMDA0Mzg0OSAwIDAgMCAyOCA1MSBMIDQ5IDUxIEwgNDkgNzIgQSAxLjAwMDA5OTkgMS4wMDAwOTk5IDAgMSAwIDUxIDcyIEwgNTEgNTEgTCA3MiA1MSBBIDEuMDAwMDk5OSAxLjAwMDA5OTkgMCAxIDAgNzIgNDkgTCA1MSA0OSBMIDUxIDI4IEEgMS4wMDAwOTk5IDEuMDAwMDk5OSAwIDAgMCA0OS44NzUgMjYuOTY4NzUgeiBcXFwiIHRyYW5zZm9ybT1cXFwidHJhbnNsYXRlKDAsOTUyLjM2MjE4KVxcXCIgLz48L2c+PC9zeW1ib2w+XCJcbn0pO1xudmFyIHJlc3VsdCA9IHNwcml0ZS5hZGQoc3ltYm9sKTtcbmV4cG9ydCBkZWZhdWx0IHN5bWJvbFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2ltYWdlcy9pY29ucy9hZGQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgU3ByaXRlU3ltYm9sIGZyb20gXCJzdmctYmFrZXItcnVudGltZS9icm93c2VyLXN5bWJvbFwiO1xuaW1wb3J0IHNwcml0ZSBmcm9tIFwic3ZnLXNwcml0ZS1sb2FkZXIvcnVudGltZS9icm93c2VyLXNwcml0ZS5idWlsZFwiO1xudmFyIHN5bWJvbCA9IG5ldyBTcHJpdGVTeW1ib2woe1xuICBcImlkXCI6IFwiY29nXCIsXG4gIFwidXNlXCI6IFwiY29nLXVzYWdlXCIsXG4gIFwidmlld0JveFwiOiBcIjAgMCAxMDAgMTAwXCIsXG4gIFwiY29udGVudFwiOiBcIjxzeW1ib2wgdmlld0JveD1cXFwiMCAwIDEwMCAxMDBcXFwiIGlkPVxcXCJjb2dcXFwiPjxwYXRoIGQ9XFxcIk04OC45LDU4LjhjLTIuNC0yLjMtMy43LTUuNS0zLjctOC44YzAtMy4zLDEuMy02LjQsMy43LTguOGMwLjQtMC40LDAuOC0wLjcsMS4zLTEuMWMwLjctMC41LDAuOS0xLjQsMC43LTIuMiAgYy0wLjgtMi45LTItNS43LTMuNC04LjNjLTAuNC0wLjctMS4yLTEuMS0yLTFjLTAuNywwLjEtMS4yLDAuMS0xLjcsMC4xYy02LjksMC0xMi41LTUuNi0xMi41LTEyLjRjMC0wLjUsMC0xLjEsMC4xLTEuNyAgYzAuMS0wLjgtMC4zLTEuNi0xLTJjLTIuNi0xLjQtNS40LTIuNi04LjMtMy40Yy0wLjgtMC4yLTEuNywwLjEtMi4yLDAuN2MtMC40LDAuNS0wLjgsMS0xLjEsMS4zYy0yLjQsMi4zLTUuNSwzLjYtOC44LDMuNiAgcy02LjUtMS4zLTguOC0zLjZjLTAuNC0wLjQtMC43LTAuOC0xLjEtMS4zYy0wLjUtMC43LTEuNC0wLjktMi4yLTAuN2MtMi45LDAuOS01LjcsMi04LjMsMy40Yy0wLjcsMC40LTEuMSwxLjItMSwyICBjMC4xLDAuNywwLjEsMS4yLDAuMSwxLjdjMCw2LjktNS42LDEyLjQtMTIuNSwxMi40Yy0wLjUsMC0xLjEsMC0xLjctMC4xYy0wLjgtMC4xLTEuNiwwLjMtMiwxYy0xLjQsMi42LTIuNiw1LjQtMy40LDguMyAgYy0wLjIsMC44LDAsMS43LDAuNywyLjJjMC42LDAuNCwxLDAuOCwxLjMsMS4xYzQuOSw0LjgsNC45LDEyLjcsMCwxNy42Yy0wLjQsMC40LTAuOCwwLjctMS4zLDEuMWMtMC43LDAuNS0wLjksMS40LTAuNywyLjIgIGMwLjksMi45LDIsNS43LDMuNCw4LjNjMC40LDAuNywxLjIsMS4xLDIsMWMwLjctMC4xLDEuMi0wLjEsMS43LTAuMWM2LjksMCwxMi41LDUuNiwxMi41LDEyLjRjMCwwLjUsMCwxLjEtMC4xLDEuNyAgYy0wLjEsMC44LDAuMywxLjYsMSwyYzIuNiwxLjQsNS40LDIuNiw4LjMsMy40YzAuOCwwLjIsMS43LDAsMi4yLTAuN2MwLjQtMC41LDAuOC0xLDEuMS0xLjNjMi40LTIuMyw1LjUtMy42LDguOC0zLjYgIHM2LjUsMS4zLDguOCwzLjZjMC40LDAuNCwwLjcsMC44LDEuMSwxLjNjMC40LDAuNSwxLDAuOCwxLjYsMC44YzAuMiwwLDAuNCwwLDAuNi0wLjFjMi45LTAuOSw1LjctMiw4LjMtMy40YzAuNy0wLjQsMS4xLTEuMiwxLTIgIGMtMC4xLTAuNy0wLjEtMS4yLTAuMS0xLjdjMC02LjksNS42LTEyLjQsMTIuNS0xMi40YzAuNSwwLDEuMSwwLDEuNywwLjFjMC44LDAuMSwxLjYtMC4zLDItMWMxLjQtMi42LDIuNi01LjQsMy40LTguMyAgYzAuMi0wLjgsMC0xLjctMC43LTIuMkM4OS43LDU5LjUsODkuMiw1OS4yLDg4LjksNTguOHogTTg0LjYsNjcuM2MtMC4zLDAtMC42LDAtMC45LDBjLTkuMSwwLTE2LjUsNy40LTE2LjUsMTYuNGMwLDAuMywwLDAuNiwwLDAuOSAgYy0xLjYsMC44LTMuMywxLjUtNS4xLDIuMWMtMC4yLTAuMi0wLjQtMC40LTAuNi0wLjZjLTMuMS0zLjEtNy4yLTQuOC0xMS42LTQuOHMtOC41LDEuNy0xMS42LDQuOGMtMC4yLDAuMi0wLjQsMC40LTAuNiwwLjYgIGMtMS43LTAuNi0zLjQtMS4zLTUuMS0yLjFjMC0wLjMsMC0wLjYsMC0wLjljMC05LjEtNy40LTE2LjQtMTYuNS0xNi40Yy0wLjMsMC0wLjYsMC0wLjksMGMtMC44LTEuNi0xLjUtMy4zLTIuMS01LjEgIGMwLjItMC4yLDAuNC0wLjQsMC42LTAuNmM2LjQtNi40LDYuNC0xNi44LDAtMjMuM2MtMC4yLTAuMi0wLjQtMC40LTAuNi0wLjZjMC42LTEuNywxLjMtMy40LDIuMS01LjFjMC4zLDAsMC42LDAsMC45LDAgIGM5LjEsMCwxNi41LTcuNCwxNi41LTE2LjRjMC0wLjMsMC0wLjYsMC0wLjljMS42LTAuOCwzLjMtMS41LDUuMS0yLjFjMC4yLDAuMiwwLjQsMC40LDAuNiwwLjZjMy4xLDMuMSw3LjIsNC44LDExLjYsNC44ICBzOC41LTEuNywxMS42LTQuOGMwLjItMC4yLDAuNC0wLjQsMC42LTAuNmMxLjcsMC42LDMuNCwxLjMsNS4xLDIuMWMwLDAuMywwLDAuNiwwLDAuOWMwLDkuMSw3LjQsMTYuNCwxNi41LDE2LjRjMC4zLDAsMC42LDAsMC45LDAgIGMwLjgsMS42LDEuNSwzLjMsMi4xLDUuMWMtMC4yLDAuMi0wLjQsMC40LTAuNiwwLjZjLTMuMSwzLjEtNC44LDcuMi00LjgsMTEuNnMxLjcsOC41LDQuOCwxMS42YzAuMiwwLjIsMC40LDAuNCwwLjYsMC42ICBDODYuMSw2NCw4NS40LDY1LjcsODQuNiw2Ny4zeiBNNTAsMjYuMmMtMTMuMSwwLTIzLjgsMTAuNy0yMy44LDIzLjhTMzYuOSw3My44LDUwLDczLjhTNzMuOCw2My4xLDczLjgsNTBTNjMuMSwyNi4yLDUwLDI2LjJ6ICAgTTUwLDY5LjhjLTEwLjksMC0xOS44LTguOS0xOS44LTE5LjhjMC0xMC45LDguOS0xOS44LDE5LjgtMTkuOFM2OS44LDM5LjEsNjkuOCw1MEM2OS44LDYwLjksNjAuOSw2OS44LDUwLDY5Ljh6XFxcIiAvPjwvc3ltYm9sPlwiXG59KTtcbnZhciByZXN1bHQgPSBzcHJpdGUuYWRkKHN5bWJvbCk7XG5leHBvcnQgZGVmYXVsdCBzeW1ib2xcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9pbWFnZXMvaWNvbnMvY29nLnN2Z1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFNwcml0ZVN5bWJvbCBmcm9tIFwic3ZnLWJha2VyLXJ1bnRpbWUvYnJvd3Nlci1zeW1ib2xcIjtcbmltcG9ydCBzcHJpdGUgZnJvbSBcInN2Zy1zcHJpdGUtbG9hZGVyL3J1bnRpbWUvYnJvd3Nlci1zcHJpdGUuYnVpbGRcIjtcbnZhciBzeW1ib2wgPSBuZXcgU3ByaXRlU3ltYm9sKHtcbiAgXCJpZFwiOiBcImhlYXJ0XCIsXG4gIFwidXNlXCI6IFwiaGVhcnQtdXNhZ2VcIixcbiAgXCJ2aWV3Qm94XCI6IFwiMCAwIDEwMCA5MFwiLFxuICBcImNvbnRlbnRcIjogXCI8c3ltYm9sIGNsYXNzPVxcXCJpY29uIGljb24taGVhcnRcXFwiIHZpZXdCb3g9XFxcIjAgMCAxMDAgOTBcXFwiIGlkPVxcXCJoZWFydFxcXCI+PHBhdGggc3R5bGU9XFxcInRleHQtaW5kZW50OjA7dGV4dC10cmFuc2Zvcm06bm9uZTtibG9jay1wcm9ncmVzc2lvbjp0YlxcXCIgZD1cXFwiTTI4LjIxNjYgMTEuMDA0Yy02LjE4NTQgMC0xMi4zNjgyIDIuMzQyLTE3LjA5MzggNy05LjQ1MTIgOS4zMTYtOS40Mzk2IDI0LjQ5IDAgMzMuODEyNWwzNi43NSAzNi4zMTI2YTMuMDAwMyAzLjAwMDMgMCAwIDAgNC4yMTg4IDBDNjQuMzU2MyA3Ni4wNCA3Ni42MDggNjMuOTY4NSA4OC44NzI4IDUxLjg3OWM5LjQ1MTItOS4zMTU4IDkuNDUxMi0yNC41Mjc4IDAtMzMuODQzNy05LjQ1MTItOS4zMTU4LTI0LjczNjItOS4zMTYtMzQuMTg3NSAwTDUwLjAyOSAyMi42MjlsLTQuNzE4Ny00LjYyNWMtNC43MjU2LTQuNjU4LTEwLjkwODQtNy0xNy4wOTM3LTd6bTAgNS45Njg4YzQuNjUyNiAwIDkuMjk2IDEuNzg0NyAxMi44NzUgNS4zMTI1bDYuODEyNCA2LjY4NzVhMy4wMDAzIDMuMDAwMyAwIDAgMCA0LjIxODggMGw2Ljc4MTItNi42NTYzYzcuMTU4Mi03LjA1NTcgMTguNTkyLTcuMDU1NSAyNS43NSAwIDcuMTU4IDcuMDU1NiA3LjE1OCAxOC4yMjU4IDAgMjUuMjgxMy0xMS41NTYyIDExLjM5MS0yMy4xIDIyLjc2NTUtMzQuNjU2MiAzNC4xNTYzTDE1LjM0MTYgNDcuNTY2NmMtNy4xNTM2LTcuMDY0Ny03LjE1OC0xOC4yMjU3IDAtMjUuMjgxMiAzLjU3OS0zLjUyNzggOC4yMjIzLTUuMzEyNSAxMi44NzUtNS4zMTI1elxcXCIgb3ZlcmZsb3c9XFxcInZpc2libGVcXFwiIGNvbG9yPVxcXCIjMDAwXFxcIiAvPjwvc3ltYm9sPlwiXG59KTtcbnZhciByZXN1bHQgPSBzcHJpdGUuYWRkKHN5bWJvbCk7XG5leHBvcnQgZGVmYXVsdCBzeW1ib2xcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9pbWFnZXMvaWNvbnMvaGVhcnQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgU3ByaXRlU3ltYm9sIGZyb20gXCJzdmctYmFrZXItcnVudGltZS9icm93c2VyLXN5bWJvbFwiO1xuaW1wb3J0IHNwcml0ZSBmcm9tIFwic3ZnLXNwcml0ZS1sb2FkZXIvcnVudGltZS9icm93c2VyLXNwcml0ZS5idWlsZFwiO1xudmFyIHN5bWJvbCA9IG5ldyBTcHJpdGVTeW1ib2woe1xuICBcImlkXCI6IFwibG9nb1wiLFxuICBcInVzZVwiOiBcImxvZ28tdXNhZ2VcIixcbiAgXCJ2aWV3Qm94XCI6IFwiMCAwIDYwNiAyMzlcIixcbiAgXCJjb250ZW50XCI6IFwiPHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgNjA2IDIzOVxcXCIgaWQ9XFxcImxvZ29cXFwiPjxkZWZzPjxmaWx0ZXIgeD1cXFwiLTUwJVxcXCIgeT1cXFwiLTUwJVxcXCIgd2lkdGg9XFxcIjIwMCVcXFwiIGhlaWdodD1cXFwiMjAwJVxcXCIgZmlsdGVyVW5pdHM9XFxcIm9iamVjdEJvdW5kaW5nQm94XFxcIiBpZD1cXFwibG9nb19hXFxcIj48ZmVPZmZzZXQgZHg9XFxcIjFcXFwiIGR5PVxcXCIxXFxcIiBpbj1cXFwiU291cmNlQWxwaGFcXFwiIHJlc3VsdD1cXFwic2hhZG93T2Zmc2V0T3V0ZXIxXFxcIj48L2ZlT2Zmc2V0PjxmZUNvbG9yTWF0cml4IHZhbHVlcz1cXFwiMCAwIDAgMCAxIDAgMCAwIDAgMSAwIDAgMCAwIDEgMCAwIDAgMC4zMjMwMDE1ODUgMFxcXCIgaW49XFxcInNoYWRvd09mZnNldE91dGVyMVxcXCIgcmVzdWx0PVxcXCJzaGFkb3dNYXRyaXhPdXRlcjFcXFwiPjwvZmVDb2xvck1hdHJpeD48ZmVNZXJnZT48ZmVNZXJnZU5vZGUgaW49XFxcInNoYWRvd01hdHJpeE91dGVyMVxcXCI+PC9mZU1lcmdlTm9kZT48ZmVNZXJnZU5vZGUgaW49XFxcIlNvdXJjZUdyYXBoaWNcXFwiPjwvZmVNZXJnZU5vZGU+PC9mZU1lcmdlPjwvZmlsdGVyPjwvZGVmcz48ZyBmaWx0ZXI9XFxcInVybCgjbG9nb19hKVxcXCIgZmlsbD1cXFwiI0ZGRlxcXCIgZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIj48cGF0aCBkPVxcXCJNMjkyLjU5NSA0MC4xMjhjNC4zNjggMCAxMC4wOC0uNTYgMTYuMzUyLTEuMzQ0LTEuNzkyIDYuOTQ0LTUuMzc2IDE3LjAyNC04LjUxMiAyNS41MzYtOC4xNzYgMjIuNTEyLTEyLjIwOCAzNC4zODQtMTQuNjcyIDQzLjY4IDMuMzYgNS40ODggNy4zOTIgOC42MjQgMTIuNTQ0IDkuNDA4IDIuMDE2LTEyLjY1NiA1LjI2NC0yNS41MzYgMTEuNzYtNDUuMzYgMy4zNi0xMC4xOTIgOS40MDgtMjYuNTQ0IDEzLjY2NC0zNS4wNTYgNC45MjgtLjU2IDkuODU2LS44OTYgMTQuNTYtLjg5NiAyLjY4OCAwIDYuODMyLjIyNCAxMC42NC41Ni0xLjIzMi02LjgzMi0zLjI0OC0xMS4zMTItOC43MzYtMTEuMzEyLTMuOTIgMC0yOS41NjggMy4xMzYtNDQuOTEyIDMuMTM2LTUuMDQgMC05LjA3Mi0uMzM2LTEwLjk3Ni0xLjIzMi0uNTYgMS4xMi0xLjAwOCAzLjEzNi0xLjAwOCA0LjI1NiAwIDQuODE2IDMuMzYgOC42MjQgOS4yOTYgOC42MjR6bTM5LjI4NjIgNjUuOTY4Yy4xMTIgMi4zNTIgMi40NjQgNy4yOCAzLjQ3MiA3LjI4LjU2IDAgMS42OC0xLjEyIDIuMTI4LTIuMTI4IDYuNzItMTUuNzkyIDE4LjU5Mi0zMi4xNDQgMjkuMjMyLTQwLjA5NiAxLjU2OC0xLjIzMiAzLjkyLTIuNjg4IDQuMzY4LTIuNjg4LjExMiAwIC40NDguMzM2LjQ0OC40NDgtNy4yOCAxNC42NzItMTIuNjU2IDI4Ljc4NC0xMi42NTYgMzMuMTUyIDAgMy40NzIgMy4wMjQgNy4wNTYgNi4wNDggNy4wNTYgMi4zNTIgMCAxMC44NjQtNC4wMzIgMTAuODY0LTUuMTUyIDAtLjMzNi0uMTEyLS42NzItLjc4NC0xLjc5Mi0uMzM2IDAtMS42OC44OTYtMy45Mi44OTYtMS40NTYgMC0xLjc5Mi0uNDQ4LTEuNzkyLTEuOTA0IDAtNi4wNDggMTEuNzYtMjYuODggMjAuOTQ0LTM2Ljk2LTMuMzYtNC4yNTYtOC4yODgtNy4wNTYtMTIuMjA4LTcuMDU2LTYuODMyIDAtMTcuNjk2IDkuMjk2LTMxLjkyIDI3LjQ0IDIuNjg4LTEwLjc1MiA2LjE2LTE5LjA0IDExLjg3Mi0zMC4yNCA1LjI2NC0xMC4zMDQgMTQuNTYtMjIuNTEyIDI1Ljc2LTMzLjkzNi0yLjU3Ni0yLjgtOS40MDgtNS4zNzYtMTQuMTEyLTUuMzc2LTEwLjE5MiAxMS42NDgtMjAuMzg0IDI4Ljc4NC0yNi40MzIgNDQuNTc2LTYuODMyIDE3LjU4NC0xMS4zMTIgMzUuOTUyLTExLjMxMiA0Ni40OHptOTQuNTAyMi00My4zNDRjLTMuMjQ4IDYuNzItNy43MjggMTUuMTItMTAuODY0IDIwLjM4NC04LjA2NCAxMy40NC0xMy40NCAxOS43MTItMTcuODA4IDIwLjYwOC0xLjAwOC0uMzM2LTEuNTY4LTEuMTItMS41NjgtMi42ODggMC0xMy43NzYgMTQuNjcyLTMzLjYgMjYuNjU2LTM1LjUwNC0uMzM2LTIuOC01LjM3Ni04LjA2NC04LjQtOC44NDgtMTIuMDk2LjY3Mi0yOC4yMjQgMjMuNTItMjguMjI0IDQwLjIwOCAwIDcuNzI4IDMuODA4IDEzLjMyOCA5LjI5NiAxMy41NTIgNi45NDQtMS4xMiAxNi44LTEyLjMyIDIyLjg0OC0yNS45ODQtMi44IDcuMjgtNC4yNTYgMTMuMzI4LTQuMjU2IDE3LjQ3MiAwIDUuNiAyLjAxNiA4LjI4OCA2LjA0OCA4LjI4OCAyLjI0IDAgNS40ODgtLjg5NiA3LjI4LTIuMDE2LTIuMDE2LTEuMTItMi45MTItNC4wMzItMi45MTItOC4xNzYgMC03LjYxNiA0LjE0NC0yMC44MzIgMTAuMTkyLTMzLjM3Ni4xMTItMS40NTYtNS4xNTItMy45Mi04LjI4OC0zLjkyem0yMi45MzQgMi4zNTJjLTUuNzEyIDEzLjc3Ni05Ljg1NiAyOC44OTYtOS44NTYgMzYuMTc2IDAgNS4yNjQgOC41MTIgMTEuNjQ4IDE1LjkwNCAxMS44NzIgMi40NjQtLjIyNCAxMC41MjgtNS42IDEyLjIwOC04LjE3Ni0uMTEyLS40NDgtLjQ0OC0xLjEyLS43ODQtMS42OC0zLjEzNiAyLjQ2NC03LjI4IDQuMjU2LTExLjc2IDQuODE2LTIuMzUyLS4zMzYtMy42OTYtMi4xMjgtMy42OTYtNS40ODggMC05LjE4NCA0LjQ4LTIzLjc0NCAxMS44NzItMzguMDggNS4xNTItLjExMiA5Ljc0NC0uODk2IDEzLjMyOC0yLjI0IDAtMS4yMzItLjU2LTIuNDY0LTEuMjMyLTMuMTM2LTMuMTM2LjMzNi02LjI3Mi40NDgtOS4xODQuNDQ4IDMuNjk2LTYuMjcyIDYuNDk2LTEwLjY0IDEwLjk3Ni0xNi4yNC0xLjQ1Ni0xLjY4LTguNjI0LTQuMDMyLTExLjY0OC00LjAzMi0yLjQ2NCAxLjM0NC04Ljk2IDEwLjk3Ni0xMy40NCAxOS44MjQtMy4wMjQtLjExMi02LjYwOC0uNDQ4LTEwLjUyOC0uNjcyIDAgMi4wMTYuNzg0IDUuNzEyIDEuNDU2IDYuNjA4aDYuMzg0em00MC44NTQzLTEzLjg4OGM4LjYyNC01LjYgMTMuNzc2LTE2LjAxNiAxNi4yNC0yOS40NTYtMS45MDQtMy42OTYtOC42MjQtNi42MDgtMTUuNjgtNy4wNTYgMS4wMDggNC4yNTYgMS4zNDQgOC4xNzYgMS4zNDQgMTEuODcyIDAgOC4yODgtMS45MDQgMTUuMjMyLTMuNjk2IDIwLjM4NCAwIDEuNTY4Ljg5NiAzLjQ3MiAxLjc5MiA0LjI1NnptMzkuNzM0IDEyLjIwOGMtLjg5Ni0zLjQ3Mi05LjUyLTEyLjIwOC0xMi44OC0xMy4xMDQtNy44NCAxLjY4LTE0Ljc4NCAxMC4zMDQtMTQuNzg0IDE4LjI1NiAwIDYuMjcyIDMuNDcyIDEyLjc2OCAzLjQ3MiAyMC4zODQtMTIuOTkyLjg5Ni0yMy4wNzIgMTAuNTI4LTIzLjA3MiAyMS45NTIgMS4yMzIgNC4xNDQgNi4zODQgOC40IDEwLjY0IDguNzM2IDExLjk4NC0xLjIzMiAxOS4yNjQtOS4yOTYgMTkuMjY0LTIxLjcyOCAwLTEuNzkyLS4xMTItMi45MTItLjExMi00LjAzMiAwLTEuNjguNTYtMS45MDQgNy41MDQtMy40NzIuMjI0LS4yMjQuNDQ4LS44OTYuNDQ4LTEuNDU2IDAtLjU2IDAtLjY3Mi0uMTEyLS44OTYtMi4zNTIgMC00LjcwNC4xMTItNy44NC4yMjQtLjExMi0uMjI0LS4xMTItLjQ0OC0uMTEyLTEuMzQ0IDAtMTQuMzM2IDMuMjQ4LTIyLjA2NCA5LjE4NC0yMi4wNjQgMS41NjggMCAyLjY4OCAxLjU2OCAyLjY4OCAzLjY5NiAwIDEuNzkyLTEuNzkyIDUuMTUyLTEuNzkyIDYuMDQ4LjExMiAxLjAwOC41NiAxLjU2OCAxLjQ1NiAxLjY4IDIuMzUyIDAgNS43MTItNy4xNjggNi4wNDgtMTIuODh6bS0zNi45NiA1MS4wNzJjLTEuNDU2LTEuMDA4LTIuMjQtMi4zNTItMi4yNC00LjAzMiAwLTUuMTUyIDkuNjMyLTE0Ljg5NiAxNS40NTYtMTUuNjggMCA3LjcyOC02LjA0OCAxNi44LTEzLjIxNiAxOS43MTJ6TTc2LjY0NTUgOTEuNTEyYy0uMjI0LS44OTYtLjMzNi0xLjkwNC0uMzM2LTUuMDQgMC0xNy44MDggMTEuODcyLTU4LjM1MiAyMC4zODQtNzEuOTA0Ljg5NiAyNS44NzIgMy4wMjQgNDYuOTI4IDkuMTg0IDcxLjkwNCAxLjU2OCAzLjEzNiA3LjUwNCA0LjkyOCAxNC4zMzYgNC45MjguNDQ4IDAgMS4wMDggMCAxLjQ1Ni0uMTEyLS4xMTItLjExMi0uMTEyLS4yMjQtLjExMi0uMzM2LjMzNi0xNy45MiAxNC44OTYtNzYuMjcyIDI5LjEyLTgyLjA5Ni0xLjY4LTMuMjQ4LTYuNDk2LTYuODMyLTkuNzQ0LTcuMzkyLTUuNi42NzItMTYuOTEyIDM3LjUyLTI0LjA4IDczLjQ3Mi00LjU5Mi0xNi4xMjgtNS4zNzYtMzEuNDcyLTUuMzc2LTQ3LjcxMiAwLTguMTc2LjU2LTE2LjEyOCAxLjIzMi0xOS43MTItLjY3Mi0yLjAxNi0xMy4zMjgtNi45NDQtMTcuNDcyLTYuOTQ0bC43ODQgNC43MDRjLTkuODU2IDE0LTMwLjI0IDY0LjI4OC0zMC4yNCA3Ny44NCAwIDQuMDMyIDIuMzUyIDUuODI0IDEwLjg2NCA4LjR6bTc0LjIzMDItNC41OTJjMTcuOTItMy44MDggMzAuOC0xOS44MjQgMzAuOC0zOC41MjggMC03LjE2OC0xLjkwNC0xMC41MjgtNS45MzYtMTAuNTI4LS42NzIgMC0xLjM0NC4xMTItMi4wMTYuMTEyLTIuMjQtMy45Mi00LjcwNC02LjcyLTcuMDU2LTcuOTUyLTMuNDcyIDAtNy41MDQgMS41NjgtMTEuNTM2IDQuNTkyLTEwLjUyOCA3LjcyOC0xOC4yNTYgMjIuMTc2LTE4LjI1NiAzNC4xNiAwIDEwLjA4IDUuNDg4IDE3LjI0OCAxNCAxOC4xNDR6bTUuNzEyLTM1LjI4YzMuNjk2LTQuODE2IDguOTYtOS42MzIgMTUuNDU2LTExLjUzNiAxLjAwOCAxLjU2OCAxLjQ1NiAzLjY5NiAxLjQ1NiA3LjUwNCAwIDE3LjQ3Mi05Ljc0NCAzMS44MDgtMjMuMDcyIDM0LjcyLTEuNDU2LS40NDgtMi45MTItNC4zNjgtMi45MTItNy45NTIgMC01LjkzNiAzLjkyLTE1LjkwNCA5LjA3Mi0yMi43MzZ6bTI5LjMxOCAyNi43NjhjMCA0LjM2OCAxLjkwNCA3LjM5MiA2LjYwOCA4Ljg0OCA0LjcwNC02LjM4NCA2LjgzMi0xMC4zMDQgMTIuNTQ0LTE3LjkyIDIuOC0zLjU4NCA4LjczNi0xMC45NzYgMTEuMDg4LTEyLjA5Ni0uMjI0IDIuNDY0LS42NzIgNC4zNjgtMi4zNTIgMTAuOTc2LS44OTYgMy41ODQtMS4yMzIgNi4zODQtMS4yMzIgMTAuNzUyIDAgNC4xNDQgMi40NjQgNy4xNjggNS45MzYgNy4xNjggMy4xMzYgMCAxMS42NDgtOS4yOTYgMTcuMjQ4LTE1LjM0NCAxMy43NzYtMTQuNzg0IDIwLjA0OC0yMy42MzIgMjEuNTA0LTQwLjIwOC0uNDQ4LS4zMzYtMS4zNDQtLjU2LTIuNDY0LS41Ni0yLjU3NiAwLTYuMjcyLjg5Ni03LjE2OCAyLjEyOC0yLjggMTQuNjcyLTQuMTQ0IDIwLjE2LTkuODU2IDI4Ljg5Ni00LjU5MiA3LjA1Ni0xMi4yMDggMTUuNzkyLTEzLjU1MiAxNi4zNTIgMi4wMTYtMTAuNzUyIDUuMzc2LTMzLjgyNCAxMC4xOTItMzkuOTg0LS4zMzYtMS43OTItNC43MDQtMi40NjQtNy42MTYtMi40NjQtLjc4NCAwLTEuNDU2IDAtMS45MDQuMTEyLTIuOTEyIDIuOTEyLTMuOTIgNi45NDQtNC44MTYgOS42MzItMS4yMzIgMy40NzItMi4xMjggNS44MjQtNi44MzIgMTAuMTkyLTMuMzYgMy4xMzYtNy45NTIgOC43MzYtMTIuODggMTUuMjMyIDEuNjgtMTEuMDg4IDIuNjg4LTI2LjMyIDExLjQyNC0zMy4zNzYtLjU2LTEuNjgtNC40OC0yLjgtNy43MjgtMi44LTYuMDQ4IDAtMTAuMzA0IDQuMDMyLTEyLjIwOCAxMC45NzYtMi45MTIgMTAuNTI4LTUuOTM2IDI3LjU1Mi01LjkzNiAzMy40ODh6XFxcIiAvPjxwYXRoIGQ9XFxcIk0yLjU1MiAyMTEuNDcyYzYuMzk2IDEzLjYxMiAxOS41MTYgMjAuOTkyIDM3LjM5MiAyMC45OTIgMzkuMDMyIDAgNzMuMTQ0LTM4LjIxMiA3My4xNDQtODAuODUyIDAtMzEuMzI0LTI0Ljc2NC01Mi42NDQtNTkuNjk2LTUyLjY0NC0yNy43MTYgMC00OC41NDQgMTMuNDQ4LTUyLjgwOCAzMy42MiAxLjMxMiA2LjcyNCA2LjA2OCAxMS40OCAxMC45ODggMTMuMTIgNS4wODQtMTcuMzg0IDE1LjI1Mi0yOS4xOTIgMjguODY0LTM0Ljc2OC00LjU5MiAxNS40MTYtMjguMjA4IDc4LjU1Ni0zNy44ODQgMTAwLjUzMnptNTcuODkyLTEwNC4zMDRjMjMuNzggMCAzOC44NjggMTMuMTIgMzguODY4IDM1LjU4OCAwIDQwLjM0NC0yOS42ODQgNzUuNDQtNjUuMjcyIDc1LjQ0LTUuMDg0IDAtOS42NzYtLjQ5Mi0xMi42MjgtMS40NzYgMC02LjIzMiA1LjI0OC0yMS42NDggMTcuNzEyLTQ5LjM2NCA5Ljg0LTIxLjgxMiAyMC44MjgtNDMuMTMyIDI0LjI3Mi00Ny44ODgtMi4yOTYtMi4xMzItOS4wMi02LjU2LTE4LjUzMi0xMC4wMDQgNC43NTYtMS40NzYgMTAuMDA0LTIuMjk2IDE1LjU4LTIuMjk2em0xMTEuNzY4IDQ0LjkzNmMtNC40MjgtNS41NzYtOS4xODQtOC42OTItMTQuMTA0LTkuMzQ4LTIxLjY0OCAwLTQ2LjI0OCAzMS42NTItNDYuMjQ4IDU4LjU0OCAwIDEzLjEyIDguODU2IDIzLjQ1MiAyMy45NDQgMjUuMDkyIDEwLjMzMi0yLjI5NiAyMi45Ni0xMS42NDQgMzIuOC0yNC42LS44Mi0uOTg0LTEuNjQtMS44MDQtMi43ODgtMi43ODgtNi44ODggNy4zOC0xOC4yMDQgMTkuMTg4LTMwLjAxMiAxOS4xODgtNi4yMzIgMC03LjU0NC03LjU0NC03LjU0NC0xMy4xMiAwLTEuNDc2LjE2NC0yLjk1Mi4xNjQtNC4yNjQgMjcuODgtMTEuMTUyIDQyLjE0OC0yMS44MTIgNDMuNzg4LTQ4LjcwOHptLTExLjMxNiA1LjQxMmMtLjgyIDE0LjkyNC0xMy43NzYgMjguMzcyLTMxLjE2IDM3LjA2NCA1LjI0OC0yMC4zMzYgMTkuMTg4LTM1LjQyNCAzMS4xNi0zNy4wNjR6bTExLjk2OCA1My4xNGMwIDYuMjc4IDEuMzE0IDExLjgyNiAzLjA2NiAxMi45OTQgMS4zMTQuODc2IDMuNTA0IDMuMjEyIDMuOTQyIDQuMjM0LjU4NCAxLjMxNCAyLjc3NCAyLjQ4MiA1LjQwMiAyLjc3NC0uMTQ2LS43My0uMTQ2LS44NzYtLjE0Ni00LjIzNCAwLTEyLjI2NCA0LjM4LTMxLjI0NCAxMi41NTYtNTQuMDIgOS42MzYtMjYuNzE4IDIwLjU4Ni00Ni40MjggMzUuNzctNjQuMzg2LTEuNjA2LTIuNDgyLTExLjY4LTguMzIyLTE2LjM1Mi05LjE5OC0xMC4wNzQgMTIuMjY0LTIwLjU4NiAzNC4wMTgtMzIuNTU4IDY2LjcyMi03LjQ0NiAyMC40NC0xMS42OCAzNi42NDYtMTEuNjggNDUuMTE0em0zNC4yMTY4LTMuMTE4YzAgMTAuOTc0IDExLjcxOCAxNS44MSAxMy41NzggMTUuODEgMS4xMTYgMCAxLjExNi0xLjY3NCAxLjExNi02LjEzOC4xODYtNS4zOTQgMi45NzYtMTMuMzkyIDUuNTgtMjAuMjc0IDYuMzI0LTE2LjM2OCA5LjY3Mi0yOS41NzQgMjEuMDE4LTQyLjIyMi00LjgzNi03LjI1NC0xMy4yMDYtMTEuMzQ2LTE3LjI5OC0xMi4yNzYtMTEuMTYgNS41OC0xNi41NTQgMjQuOTI0LTE3LjY3IDI5Ljc2LTQuODM2IDIyLjMyLTYuMzI0IDMxLjA2Mi02LjMyNCAzNS4zNHptMzUuNTI2LTgwLjcyNGMwIDIuMDQ2IDIuNjA0IDQuNDY0IDUuNTggNS4wMjIgMS44Ni00LjA5MiAxNS40MzgtMjAuNjQ2IDIxLjAxOC0yNS44NTQtMy43Mi01LjU4LTE2Ljc0LTEzLjAyLTIyLjUwNi0xMy4wMi0zLjE2MiA3Ljk5OC01Ljc2NiAyMC4wODgtNS43NjYgMjQuMzY2IDAgMi4wNDYuOTMgNC44MzYgMi4yMzIgNi4xMzgtLjM3MiAxLjQ4OC0uNTU4IDIuNjA0LS41NTggMy4zNDh6bTEuMDQxIDY0LjMyMmMwIDE3LjIyIDExLjY0NCAzMi4zMDggMjYuMDc2IDMzLjYyIDcuMzgtMS4zMTIgMjAuODI4LTEwLjY2IDI4LjA0NC0xOS42OCAwLS45ODQtLjgyLTIuNjI0LTEuNjQtMy4yOC0xMC4xNjggNy41NDQtMjEuOTc2IDEzLjI4NC0yOC4zNzIgMTQuMTA0LTMuOTM2LTEuODA0LTUuOTA0LTcuMDUyLTUuOTA0LTE1LjkwOCAwLTEzLjk0IDUuMDg0LTI3LjA2IDE0LjQzMi0zNy41NTYgNi4wNjgtNi43MjQgMTMuNDQ4LTExLjMxNiAxNy43MTItMTEuMzE2IDIuNDYgMCAzLjc3MiAxLjY0IDMuNzcyIDQuNzU2IDAgNS40MTItMy42MDggMTEuNDgtMTAuOTg4IDE4LjIwNCAxLjgwNCAyLjYyNCA0Ljc1NiA0LjQyOCA3LjM4IDQuNDI4IDYuMjMyIDAgMTIuNDY0LTkuODQgMTIuNDY0LTE5Ljg0NCAwLTEwLjQ5Ni02LjM5Ni0xNi40LTE3LjcxMi0xNi40LTIyLjk2IDAtNDUuMjY0IDI0LjEwOC00NS4yNjQgNDguODcyem02My4wNiAxNy44NzZjMCA5LjY3NiAxMC4zMzIgMTMuOTQgMTEuOTcyIDEzLjk0Ljk4NCAwIC45ODQtMS40NzYuOTg0LTUuNDEyLjE2NC00Ljc1NiAyLjYyNC0xMS44MDggNC45Mi0xNy44NzYgNS41NzYtMTQuNDMyIDguNTI4LTI2LjA3NiAxOC41MzItMzcuMjI4LTQuMjY0LTYuMzk2LTExLjY0NC0xMC4wMDQtMTUuMjUyLTEwLjgyNC05Ljg0IDQuOTItMTQuNTk2IDIxLjk3Ni0xNS41OCAyNi4yNC00LjI2NCAxOS42OC01LjU3NiAyNy4zODgtNS41NzYgMzEuMTZ6bTMxLjMyNC03MS4xNzZjMCAxLjgwNCAyLjI5NiAzLjkzNiA0LjkyIDQuNDI4IDEuNjQtMy42MDggMTMuNjEyLTE4LjIwNCAxOC41MzItMjIuNzk2LTMuMjgtNC45Mi0xNC43Ni0xMS40OC0xOS44NDQtMTEuNDgtMi43ODggNy4wNTItNS4wODQgMTcuNzEyLTUuMDg0IDIxLjQ4NCAwIDEuODA0LjgyIDQuMjY0IDEuOTY4IDUuNDEyLS4zMjggMS4zMTItLjQ5MiAyLjI5Ni0uNDkyIDIuOTUyem0yMS41NjggODcuOTA0YzI2LjI0LTUuNTc2IDQ1LjEtMjkuMDI4IDQ1LjEtNTYuNDE2IDAtMTAuNDk2LTIuNzg4LTE1LjQxNi04LjY5Mi0xNS40MTYtLjk4NCAwLTEuOTY4LjE2NC0yLjk1Mi4xNjQtMy4yOC01Ljc0LTYuODg4LTkuODQtMTAuMzMyLTExLjY0NC01LjA4NCAwLTEwLjk4OCAyLjI5Ni0xNi44OTIgNi43MjQtMTUuNDE2IDExLjMxNi0yNi43MzIgMzIuNDcyLTI2LjczMiA1MC4wMiAwIDE0Ljc2IDguMDM2IDI1LjI1NiAyMC41IDI2LjU2OHptOC4zNjQtNTEuNjZjNS40MTItNy4wNTIgMTMuMTItMTQuMTA0IDIyLjYzMi0xNi44OTIgMS40NzYgMi4yOTYgMi4xMzIgNS40MTIgMi4xMzIgMTAuOTg4IDAgMjUuNTg0LTE0LjI2OCA0Ni41NzYtMzMuNzg0IDUwLjg0LTIuMTMyLS42NTYtNC4yNjQtNi4zOTYtNC4yNjQtMTEuNjQ0IDAtOC42OTIgNS43NC0yMy4yODggMTMuMjg0LTMzLjI5MnptODQuMjE2IDQyLjMxMmM1LjA4NCAzLjQ0NCAxMi42MjggNi4zOTYgMTUuNTggNi4zOTYgMCAwIC42NTYtLjE2NC42NTYtLjY1NiAwLTIuMTMyLTMuNjA4LTUuNzQtMy42MDgtMTUuMDg4IDAtMTcuMjIgMTIuNjI4LTM1LjU4OCAyMC42NjQtNTQuNzc2LTEuOTY4LTIuNDYtOS44NC01LjI0OC0xNS41OC01LjI0OC03LjM4IDcuMDUyLTEwLjgyNCAxNi41NjQtMTIuNzkyIDIxLjk3Ni0zLjYwOCA5LjY3Ni0xMS42NDQgMTkuNjgtMTYuMDcyIDI1Ljc0OC05LjAyIDEyLjMtMTMuNDQ4IDE3LjcxMi0xNi43MjggMTkuMDI0LS4zMjgtLjMyOC0xLjE0OC0xLjMxMi0xLjE0OC0yLjk1MiAwLTUuNzQgNC43NTYtMjAuNjY0IDYuODg4LTI1LjU4NCA5Ljg0LTIzLjI4OCAxOC44Ni0zNS43NTIgMjAuODI4LTM3Ljg4NC0zLjI4LTMuNzcyLTEwLjgyNC01LjA4NC0xNC41OTYtNS4wODQtMTMuNzc2IDEwLjAwNC0yNS40MiAzNy43Mi0yOS4zNTYgNTQuMjg0LS45ODQgNC41OTItMS4zMTIgNy44NzItMS4zMTIgMTMuOTQgMS44MDQgNy43MDggMTAuOTg4IDEyLjQ2NCAxNy44NzYgMTIuNzkyIDEuNDc2LS4xNjQgNC4yNjQtMi4xMzIgNy4wNTItNS4wODQgMy42MDgtNC4yNjQgMTUuNDE2LTIxLjE1NiAxNy4yMi0yMC45OTItLjQ5MiAxLjQ3Ni0uODIgMy40NDQtLjgyIDUuOTA0IDAgMy43NzIgMS4xNDggOS44NCA1LjI0OCAxMy4yODR6bTg3Ljk4OC02MS42NjRjLTEuMzEyLTUuMDg0LTEzLjk0LTE3Ljg3Ni0xOC44Ni0xOS4xODgtMTEuNDggMi40Ni0yMS42NDggMTUuMDg4LTIxLjY0OCAyNi43MzIgMCA5LjE4NCA1LjA4NCAxOC42OTYgNS4wODQgMjkuODQ4LTE5LjAyNCAxLjMxMi0zMy43ODQgMTUuNDE2LTMzLjc4NCAzMi4xNDQgMS44MDQgNi4wNjggOS4zNDggMTIuMyAxNS41OCAxMi43OTIgMTcuNTQ4LTEuODA0IDI4LjIwOC0xMy42MTIgMjguMjA4LTMxLjgxNiAwLTIuNjI0LS4xNjQtNC4yNjQtLjE2NC01LjkwNCAwLTIuNDYuODItMi43ODggMTAuOTg4LTUuMDg0LjMyOC0uMzI4LjY1Ni0xLjMxMi42NTYtMi4xMzIgMC0uODIgMC0uOTg0LS4xNjQtMS4zMTItMy40NDQgMC02Ljg4OC4xNjQtMTEuNDguMzI4LS4xNjQtLjMyOC0uMTY0LS42NTYtLjE2NC0xLjk2OCAwLTIwLjk5MiA0Ljc1Ni0zMi4zMDggMTMuNDQ4LTMyLjMwOCAyLjI5NiAwIDMuOTM2IDIuMjk2IDMuOTM2IDUuNDEyIDAgMi42MjQtMi42MjQgNy41NDQtMi42MjQgOC44NTYuMTY0IDEuNDc2LjgyIDIuMjk2IDIuMTMyIDIuNDYgMy40NDQgMCA4LjM2NC0xMC40OTYgOC44NTYtMTguODZ6bS01NC4xMiA3NC43ODRjLTIuMTMyLTEuNDc2LTMuMjgtMy40NDQtMy4yOC01LjkwNCAwLTcuNTQ0IDE0LjEwNC0yMS44MTIgMjIuNjMyLTIyLjk2IDAgMTEuMzE2LTguODU2IDI0LjYtMTkuMzUyIDI4Ljg2NHptNTYuODI4LTQwLjM0NGMwIDkuNjc2IDQuNTkyIDExLjMxNiAxMC4wMDQgMTIuNzkyIDcuMDUyLTM5LjUyNCAyOS4zNTYtNzYuOTE2IDUxLjgyNC05NS40NDgtLjk4NC01LjQxMi0xMS4zMTYtMTQuNzYtMTguMjA0LTE2LjIzNi0xMi43OTIgOS4zNDgtNDMuNjI0IDgwLjg1Mi00My42MjQgOTguODkyem0tMy42MDggNDMuNDZjNi41NiAwIDguODU2LTEwLjAwNCAxMy45NC0xNS41OC0yLjk1Mi01LjI0OC0xMC4xNjgtMTAuMzMyLTE2LjIzNi0xMC4zMzItNC45MiAwLTcuNzA4IDEyLjYyOC03LjcwOCAxOC4wNCAwIDIuMjk2IDQuOTIgNy44NzIgMTAuMDA0IDcuODcyelxcXCIgLz48L2c+PC9zeW1ib2w+XCJcbn0pO1xudmFyIHJlc3VsdCA9IHNwcml0ZS5hZGQoc3ltYm9sKTtcbmV4cG9ydCBkZWZhdWx0IHN5bWJvbFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2ltYWdlcy9pY29ucy9sb2dvLnN2Z1xuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFNwcml0ZVN5bWJvbCBmcm9tIFwic3ZnLWJha2VyLXJ1bnRpbWUvYnJvd3Nlci1zeW1ib2xcIjtcbmltcG9ydCBzcHJpdGUgZnJvbSBcInN2Zy1zcHJpdGUtbG9hZGVyL3J1bnRpbWUvYnJvd3Nlci1zcHJpdGUuYnVpbGRcIjtcbnZhciBzeW1ib2wgPSBuZXcgU3ByaXRlU3ltYm9sKHtcbiAgXCJpZFwiOiBcImxvZ291dFwiLFxuICBcInVzZVwiOiBcImxvZ291dC11c2FnZVwiLFxuICBcInZpZXdCb3hcIjogXCIwIDAgMTAwIDEwMFwiLFxuICBcImNvbnRlbnRcIjogXCI8c3ltYm9sIHZpZXdCb3g9XFxcIjAgMCAxMDAgMTAwXFxcIiBpZD1cXFwibG9nb3V0XFxcIj48ZyBkaXNwbGF5PVxcXCJub25lXFxcIj48ZyBkaXNwbGF5PVxcXCJpbmxpbmVcXFwiPjxwYXRoIGQ9XFxcIk03NS4zMDksNTYuNDQzYzMuMDY2LTIuMDMyLDYuMTMzLTQuMDY1LDkuMTk5LTYuMDk4Yy0xLjU3OC0zLjg4NC0yLjkzOS03LjkyMy00LjUxOC0xMS44MSAgICBjLTIuOTc1LDIuMjcyLTUuOTQ5LDQuNTQzLTguOTI1LDYuODE0QzcyLjU0OCw0OSw3My44MjUsNTIuNzk0LDc1LjMwOSw1Ni40NDN6XFxcIiAvPjxwYXRoIGQ9XFxcIk02Ni4xMDksNjIuNTM5YzEuMzg1LDMuNDE1LDIuOTYxLDYuNjk0LDUuMTA0LDkuNTdjMy4xODUtMS44MTIsNi4zNjYtMy42MjQsOS41NTEtNS40MzcgICAgYy0yLjI5LTMuMDc0LTMuOTc1LTYuNTgtNS40NTUtMTAuMjI5QzcyLjI0MSw1OC40NzUsNjkuMTc1LDYwLjUwOCw2Ni4xMDksNjIuNTM5elxcXCIgLz48cGF0aCBkPVxcXCJNOTAuMzE0LDYxLjIzNWMtMy4xODQsMS44MTItNi4zNjYsMy42MjQtOS41NTEsNS40MzhjMi4yOSwzLjA3Miw1LjE4OCw1LjcxNCw5LjA5Nyw3LjYzNSAgICBjMy4zOC0xLjY0OSw2Ljc2MS0zLjI5NywxMC4xNC00Ljk0NEM5NS44MzgsNjcuMzE4LDkyLjc1NSw2NC41MDcsOTAuMzE0LDYxLjIzNXpcXFwiIC8+PHBhdGggZD1cXFwiTTcxLjIxMyw3Mi4xMDljLTMuMTg0LDEuODEzLTYuMzY4LDMuNjI1LTkuNTUzLDUuNDM4Yy0xLjk5NC0yLjY3Ny0zLjQ2LTUuNzMxLTQuNzUyLTguOTA5ICAgIGMzLjA2Ni0yLjAzNCw2LjEzNi00LjA2NCw5LjIwMS02LjA5OWMtMS4zODctMy40MTQtMi41ODQtNi45NjMtMy45NzEtMTAuMzc3Yy0yLjk3NSwyLjI3MS01Ljk0OSw0LjU0Mi04LjkyNCw2LjgxMyAgICBjLTEuMjkxLTMuMTgtMi43NTctNi4yMzItNC43NTMtOC45MTFjMi44NTgtMi40OSw1LjcxNi00Ljk4MSw4LjU3NC03LjQ3MWMtMi4xNDQtMi44NzYtNC44NTQtNS4zNDYtOC41MTEtNy4xNDQgICAgYzIuNjYxLTIuNjU1LDUuMzI0LTUuMzA5LDcuOTg4LTcuOTY1YzMuOTA3LDEuOTIyLDYuODA0LDQuNTYyLDkuMDk1LDcuNjM2YzIuODU4LTIuNDkxLDUuNzE2LTQuOTgxLDguNTc0LTcuNDczICAgIGMtMi40MzgtMy4yNzEtNS41MjItNi4wODItOS42ODUtOC4xMjdsLTMuMjQ0LDAuMDI4Yy0yLjY2MiwyLjY1Ni01LjMyNCw1LjMxMi03Ljk4Nyw3Ljk2N2MtMi42NjIsMi42NTUtNS4zMjUsNS4zMS03Ljk4Niw3Ljk2NSAgICBjLTIuNjYyLDIuNjU0LTUuMzI1LDUuMzEtNy45ODYsNy45NjVjMy40MDMsMS42NzMsNS45MjcsMy45NzMsNy45MjIsNi42NDljMS45OTYsMi42NzYsMy40NjIsNS43Myw0Ljc1Myw4LjkwOSAgICBjMS4yOSwzLjE3OSwyLjQwMyw2LjQ4NCwzLjY5NCw5LjY2MmMxLjI5MSwzLjE4MSwyLjc1OCw2LjIzMiw0Ljc1Myw4LjkwOXM0LjUxOCw0Ljk3Nyw3LjkyMyw2LjY0OGwzLjI0Ni0wLjAyOSAgICBjMy4zNzktMS42NDcsNi43NTktMy4yOTYsMTAuMTM2LTQuOTQzQzc2LjA2Niw3Ny40NTYsNzMuMzU1LDc0Ljk4NCw3MS4yMTMsNzIuMTA5elxcXCIgLz48cGF0aCBkPVxcXCJNNjUuNjA4LDM1LjEyMWMtMi44NTYsMi40OTEtNS43MTYsNC45ODEtOC41NzIsNy40NzNjMi4xNDIsMi44NzUsMy43MTcsNi4xNTUsNS4xMDMsOS41NjggICAgYzIuOTc3LTIuMjcxLDUuOTUxLTQuNTQyLDguOTI3LTYuODEyQzY5LjU4NSw0MS42OTksNjcuOSwzOC4xOTQsNjUuNjA4LDM1LjEyMXpcXFwiIC8+PC9nPjxwYXRoIGRpc3BsYXk9XFxcImlubGluZVxcXCIgZD1cXFwiTTEuNDA2LDcyLjY2NGMxLjAwNSwxLjAwNCwyLjAzMSwxLjYwNywyLjI5NCwxLjM0Nmw1NS43OC01NS43ODFjMC4yNjMtMC4yNjEtMC4zNC0xLjI5LTEuMzQ2LTIuMjk0ICAgYy0xLjAwNC0xLjAwNC0yLjAzLTEuNjA2LTIuMjkyLTEuMzQ0TDAuMDYyLDcwLjM3MUMtMC4yMDEsNzAuNjMxLDAuNDAxLDcxLjY2LDEuNDA2LDcyLjY2NHpcXFwiIC8+PC9nPjxnIGRpc3BsYXk9XFxcIm5vbmVcXFwiPjxwYXRoIGRpc3BsYXk9XFxcImlubGluZVxcXCIgZD1cXFwiTTk1LjkzMyw0MC4xMzRoLTMuOTQ3Yy0xLjE2OS02LjU1LTMuNjg3LTExLjg4My04LjE1MS0xMS44ODNIOC45NjVDMi4zNDgsMjguMjUxLDAsMzkuOTY3LDAsNTAgICBzMi4zNDgsMjEuNzQ5LDguOTY1LDIxLjc0OWg3NC44NjljNC40NjUsMCw2Ljk4Mi01LjMzMyw4LjE1MS0xMS44ODRoMy45NDdjMy4wMDMsMCw0LjA2Ny01LjMxNCw0LjA2Ny05Ljg2NSAgIEMxMDAsNDUuNDQ5LDk4LjkzNiw0MC4xMzQsOTUuOTMzLDQwLjEzNHogTTQuMzc0LDM5LjM2NWMwLjcwMS0zLjIzMSwxLjcxLTUuNjkzLDIuODktNi45MTZoMC4wMjVoMC4yNTNIODUuNTFoMC4wMjUgICBjMS4xODEsMS4yMjMsMi4xODksMy42ODQsMi44OTEsNi45MTZINC4zNzR6IE05Mi42MTYsNDUuMTc1Yy0wLjA4MS0xLjA1NS0wLjE5My0yLjEwNS0wLjMzMi0zLjEzNmg0LjQwOWgwLjAxMSAgIGMwLjUzNiwwLjU1NCwwLjk5MiwxLjY3MSwxLjMxLDMuMTM2SDkyLjYxNnpcXFwiIC8+PC9nPjxnIGRpc3BsYXk9XFxcIm5vbmVcXFwiPjxwYXRoIGRpc3BsYXk9XFxcImlubGluZVxcXCIgZD1cXFwiTTk4Ljk0Myw3My4yNzJjMC41OCwwLDEuMDU2LTAuNDc2LDEuMDU2LTEuMDU2di00LjIxOWMwLTAuNTgtMC40NzYtMS4wNTUtMS4wNTYtMS4wNTVIMjguNDAyICAgYy0wLjcwNCwxLjU1NS0yLjI2MSwyLjY0My00LjA3OSwyLjY0M2MtMS44MTcsMC0zLjM3NS0xLjA4OC00LjA3OS0yLjY0M2gtMy41N2wtMC42MTgsMC42MTggICBjLTMuNDk4LDMuNDk3LTUuNDI0LDguMTQ2LTUuNDI0LDEzLjA5M2MwLDQuOTQ3LDEuOTI3LDkuNTk5LDUuNDI0LDEzLjA5NWwwLjYxOCwwLjYxOWgzLjQ5NWMwLjY2NC0xLjY0NywyLjI3LTIuODEzLDQuMTU0LTIuODEzICAgYzEuODg1LDAsMy40OTEsMS4xNjYsNC4xNTQsMi44MTNoNzAuNDY4YzAuNTc4LDAsMS4wNTUtMC40NzYsMS4wNTUtMS4wNTZ2LTQuMjJjMC0wLjU3OS0wLjQ3Ny0xLjA1NS0xLjA1NS0xLjA1NWgtNC4zNCAgIGMtMS4zMzQtMi4yMDUtMi4wNDktNC43NC0yLjA0OS03LjM4NWMwLTIuNjQzLDAuNzE1LTUuMTc3LDIuMDQ5LTcuMzgzaDQuMzM4VjczLjI3MnogTTIzLjUzNiw4OC4wNGgtNC4wODUgICBjLTEuNjE0LTIuMTExLTIuNDg4LTQuNjgyLTIuNDg4LTcuMzg1YzAtMi43MDEsMC44NzQtNS4yNzEsMi40ODktNy4zODNoNC4wODRoNjYuMzRjLTAuNDkxLDEuMTMyLTAuODcsMi4zMTEtMS4xMywzLjUyNUg2MS40MjUgICBjLTAuODczLDAtMS41ODIsMC43MDktMS41ODIsMS41ODJzMC43MDksMS41ODIsMS41ODIsMS41ODJoMjYuOTQ4Yy0wLjAwOCwwLjIzMS0wLjAzNiwwLjQ2MS0wLjAzNiwwLjY5MiAgIGMwLDIuNTg1LDAuNTM4LDUuMDg0LDEuNTM5LDcuMzg0aC02Ni4zNFY4OC4wNHpcXFwiIC8+PHBhdGggZGlzcGxheT1cXFwiaW5saW5lXFxcIiBkPVxcXCJNOTguOTQzLDExLjk2MWMwLjU4LDAsMS4wNTYtMC40NzYsMS4wNTYtMS4wNTZWNi42ODdjMC0wLjU4LTAuNDc2LTEuMDU1LTEuMDU2LTEuMDU1SDI4LjQwMiAgIGMtMC43MDQsMS41NTUtMi4yNjEsMi42NDItNC4wNzksMi42NDJjLTEuODE3LDAtMy4zNzUtMS4wODctNC4wNzktMi42NDJoLTMuNTdMMTYuMDU3LDYuMjVjLTMuNDk3LDMuNDk4LTUuNDI0LDguMTQ3LTUuNDI0LDEzLjA5NSAgIGMwLDQuOTQ2LDEuOTI3LDkuNTk4LDUuNDI0LDEzLjA5NWwwLjYxOCwwLjYxOGgzLjQ5NWMwLjY2NC0xLjY0NywyLjI3LTIuODEzLDQuMTU0LTIuODEzYzEuODg1LDAsMy40OTEsMS4xNjYsNC4xNTQsMi44MTNoNzAuNDY4ICAgYzAuNTc4LDAsMS4wNTUtMC40NzYsMS4wNTUtMS4wNTZ2LTQuMjE5YzAtMC41OC0wLjQ3Ny0xLjA1NS0xLjA1NS0xLjA1NWgtNC4zNGMtMS4zMzQtMi4yMDYtMi4wNDktNC43MzktMi4wNDktNy4zODQgICBjMC0yLjY0NCwwLjcxNS01LjE3OSwyLjA0OS03LjM4NEg5OC45NDN6IE0yMy41MzYsMjYuNzI5aC00LjA4NWMtMS42MTQtMi4xMTItMi40ODgtNC42ODItMi40ODgtNy4zODQgICBjMC0yLjcwMywwLjg3NC01LjI3MSwyLjQ4OS03LjM4NGg0LjA4NGg2Ni4zNGMtMC40OTEsMS4xMy0wLjg3LDIuMzEyLTEuMTMsMy41MjVINjEuNDI1Yy0wLjg3MywwLTEuNTgyLDAuNzA4LTEuNTgyLDEuNTgyICAgczAuNzA5LDEuNTgyLDEuNTgyLDEuNTgyaDI2Ljk0OGMtMC4wMDgsMC4yMzEtMC4wMzYsMC40Ni0wLjAzNiwwLjY5MmMwLDIuNTg1LDAuNTM4LDUuMDgzLDEuNTM5LDcuMzg1TDIzLjUzNiwyNi43MjkgICBMMjMuNTM2LDI2LjcyOXpcXFwiIC8+PHBhdGggZGlzcGxheT1cXFwiaW5saW5lXFxcIiBkPVxcXCJNODMuOTczLDU3LjM4NmMtMS4zMzQtMi4yMDUtMi4wNDktNC43NC0yLjA0OS03LjM4NGMwLTIuNjQ1LDAuNzE1LTUuMTc5LDIuMDQ5LTcuMzg0aDQuMzQgICBjMC41OCwwLDEuMDU1LTAuNDc2LDEuMDU1LTEuMDU2di00LjIxOGMwLTAuNTgtMC40NzUtMS4wNTYtMS4wNTUtMS4wNTZIMTcuODQ2Yy0wLjY2MywxLjY0Ni0yLjI3LDIuODEyLTQuMTU0LDIuODEyICAgYy0xLjg4MywwLTMuNDktMS4xNjYtNC4xNTMtMi44MTJINi4wNDNsLTAuNjE4LDAuNjE4QzEuOTI3LDQwLjQwMywwLDQ1LjA1NSwwLDUwYzAsNC45NDYsMS45MjcsOS41OTksNS40MjUsMTMuMDk2bDAuNjE4LDAuNjE3ICAgaDMuNTdjMC43MDQtMS41NTYsMi4yNjEtMi42NDMsNC4wNzktMi42NDNjMS44MTcsMCwzLjM3NSwxLjA4Nyw0LjA3OSwyLjY0M2g3MC41NDJjMC41OCwwLDEuMDU2LTAuNDc1LDEuMDU2LTEuMDU1di00LjIyICAgYzAtMC41OC0wLjQ3Ni0xLjA1Ni0xLjA1Ni0xLjA1NmgtNC4zNFY1Ny4zODZ6IE03OS4yNDMsNDIuNjE5Yy0xLjAwMSwyLjMtMS41MzksNC43OTktMS41MzksNy4zODMgICBjMCwwLjIzMywwLjAyOCwwLjQ2MywwLjAzNiwwLjY5M0g1MC43OTJjLTAuODc0LDAtMS41ODIsMC43MDktMS41ODIsMS41ODJjMCwwLjg3NCwwLjcwOCwxLjU4MiwxLjU4MiwxLjU4MmgyNy4zMjEgICBjMC4yNiwxLjIxNSwwLjYzOCwyLjM5NiwxLjEzLDMuNTI2SDEyLjkwMkg4LjgxOGMtMS42MTUtMi4xMTItMi40ODktNC42ODEtMi40ODktNy4zODRzMC44NzQtNS4yNzIsMi40ODgtNy4zODRoNC4wODQgICBMNzkuMjQzLDQyLjYxOUw3OS4yNDMsNDIuNjE5elxcXCIgLz48L2c+PGc+PHBhdGggZD1cXFwiTTg0LjkwNCw0My43ODZjLTEuMjgyLTEuOTc0LTMuMjQ5LTMuMzI4LTUuNTM4LTMuODE1Yy0wLjYtMC4xMjctMS4yMTItMC4xOTEtMS44MjEtMC4xOTFjLTEuMzUsMC0yLjY0MiwwLjMxNy0zLjgwMywwLjg3OSAgIGMwLjE2NC0xLjkzMy0wLjMwOC0zLjg1OS0xLjM4Ny01LjUyYy0xLjI4Mi0xLjk3NC0zLjI0OS0zLjMyOS01LjUzOC0zLjgxNWMtMC41OTktMC4xMjctMS4yMTEtMC4xOTItMS44Mi0wLjE5MiAgIGMtMS4xNTIsMC0yLjI2MSwwLjIzNS0zLjI4NSwwLjY1MWw0LjQ5OS0yMS4xNjVjMC40ODYtMi4yODksMC4wNDktNC42MzctMS4yMzMtNi42MVM2MS43MjksMC42OCw1OS40NCwwLjE5NCAgIGMtMi4yOS0wLjQ4Ny00LjYzNy0wLjA0OC02LjYxLDEuMjMzYy0xLjk3MywxLjI4Mi0zLjMyOSwzLjI0OS0zLjgxNSw1LjUzOGwtOC45NzgsNDIuMjM2TDMxLjA2LDYuOTY0ICAgYy0wLjQ4Ni0yLjI4OS0xLjg0Mi00LjI1Ni0zLjgxNS01LjUzOGMtMS45NzQtMS4yODItNC4zMjMtMS43MTktNi42MTEtMS4yMzNjLTIuMjg5LDAuNDg2LTQuMjU1LDEuODQxLTUuNTM4LDMuODE1ICAgYy0xLjI4MiwxLjk3NC0xLjcxOSw0LjMyMS0xLjIzMyw2LjYxbDkuNzM0LDQ1Ljc5N2wtMC4xOTksMy42MDRjLTIuNzgyLDEuMjY4LTQuODM3LDMuOTU2LTUuMTg3LDcuMDc1ICAgYy0wLjAwNSwwLjA0LTAuMDEsMC4wODEtMC4wMTQsMC4xMjJjLTAuMDI2LDAuMjcxLTAuMDQ0LDAuNTQyLTAuMDQ0LDAuODE3YzAsMC4xLDAuMDA2LDAuMjExLDAuMDEzLDAuMzI5ICAgYzAuMDAxLDAuMDI5LDAuMDA0LDAuMDYxLDAuMDA2LDAuMDkxYzAuMDIsMC4yNTYsMC4wNTQsMC41NTEsMC4xMDMsMC44NzhjMC4wMDIsMC4wMTksMC4wMDUsMC4wMzcsMC4wMDgsMC4wNTcgICBjMC4zNzIsMi40ODksMS40Niw2Ljc1MSwyLjE0OCw5LjMyN2MxLjQ3Niw1LjU4MiwzLjIyNCwxMS41MTUsMy43OCwxMy4zODNjMS40MDQsNC40MzEsNi4xNDQsNy45LDEwLjc5Miw3LjloMzEuMTgxICAgYzQuNTc1LDAsOS41NTUtMy4zLDExLjMzOC03LjUxNGwyLjIxOS01LjI0NGMxLjU2Ny0zLjcwNiwyLjg0My05Ljk5NSwyLjg0My0xNC4wMTh2LTYuMTFsMy41NTQtMTYuNzE4ICAgQzg2LjYyMyw0OC4xMDcsODYuMTg2LDQ1Ljc2LDg0LjkwNCw0My43ODZ6IE02Ni4wNCwzNC45ODdjMi43MjIsMC41NzgsNC40NjQsMy4yNjMsMy44ODYsNS45ODRsLTQuMTg5LDE5LjcwNyAgIGMtMS4zNzktMC45MDItMy4wMjQtMS40MzItNC43OTMtMS40MzJoLTUuMjE5bDQuMzMtMjAuMzc0YzAuNDkzLTIuMzE1LDIuNTcxLTMuOTk2LDQuOTQyLTMuOTk2ICAgQzY1LjM0NSwzNC44NzcsNjUuNjk2LDM0LjkxNCw2Ni4wNCwzNC45ODd6IE0xNy41MjYsOS44NDFjLTAuMjc4LTEuMzExLTAuMDI2LTIuNjU4LDAuNzEtMy43OTJzMS44NjUtMS45MTQsMy4xNzYtMi4xOTIgICBjMS4zMTItMC4yOCwyLjY1OC0wLjAyNiwzLjc5MywwLjcxMWMxLjEzNSwwLjczNywxLjkxNCwxLjg2NCwyLjE5MiwzLjE3NWw5Ljk1Nyw0Ni44NDZjMC4xODQsMC44NjUsMC45NDcsMS40ODMsMS44MzEsMS40ODNoMS43MDMgICBjMC44ODQsMCwxLjY0Ny0wLjYxOCwxLjgzMi0xLjQ4M2w5Ljk1OC00Ni44NDZjMC41NzgtMi43MjEsMy4yNjYtNC40NjYsNS45ODQtMy44ODZjMi43MjIsMC41NzgsNC40NjUsMy4yNjMsMy44ODYsNS45ODQgICBsLTUuNjg0LDI2Ljc0MWMtMC4yLDAuNDgzLTAuMzYsMC45ODgtMC40NzIsMS41MTNsLTQuNDk2LDIxLjE1MUgyNy4xOTFsMC4xNTktMi44NzFjMC4wMDktMC4xNjYtMC4wMDQtMC4zMzEtMC4wMzgtMC40OTMgICBMMTcuNTI2LDkuODQxeiBNNzYuMjkyLDg1Ljc4M2wtMi4yMTksNS4yNDRjLTEuMTk5LDIuODM0LTQuODEyLDUuMjI5LTcuODksNS4yMjlIMzUuMDAyYy0zLjAwNiwwLTYuMzE0LTIuNDIxLTcuMjEyLTUuMjU1ICAgYy0xLjQzNi00LjgyOS0zLjQwMS0xMS43NzgtNC42NTktMTYuODMzYy0wLjY4LTIuNzY0LTEuMjM0LTUuMzEyLTEuMjM0LTYuMTMzYzAtMi42NCwyLjQwNS01LjA0NSw1LjA0Ni01LjA0NWgzNCAgIGMyLjc4MywwLDUuMDQ2LDIuMjY0LDUuMDQ2LDUuMDQ1YzAsMi43ODMtMi4yNjMsNS4wNDctNS4wNDYsNS4wNDdINDAuNzc4Yy0wLjM3LDAtMC43MzEsMC4xMDgtMS4wMzksMC4zMTRsLTUuMTg4LDMuNDU4ICAgYy0wLjg2MSwwLjU3My0xLjA5MywxLjczNS0wLjUyLDIuNTk2YzAuNTc0LDAuODYsMS43MzQsMS4wOTQsMi41OTYsMC41Mmw0LjcxNi0zLjE0NGgxOS41OTljMi44ODksMCw1LjQ0Ny0xLjQwNyw3LjA1MS0zLjU2MiAgIGMxLjA3OSwwLjkzMiwyLjM5MywxLjYyLDMuODgzLDEuOTM4YzAuNiwwLjEyNywxLjIxMywwLjE5MSwxLjgyMSwwLjE5MWMxLjg5MSwwLDMuNjctMC42MTksNS4xMzEtMS42NzIgICBDNzguNzMxLDc3LjI4NSw3Ny42MSw4Mi42NjYsNzYuMjkyLDg1Ljc4M3ogTTgyLjQ3NCw0OS42MThsLTMuODMzLDE4LjAzNGMtMC40OTEsMi4zMTUtMi41NywzLjk5Ni00Ljk0MiwzLjk5NiAgIGMtMC4zNDgsMC0wLjY5OS0wLjAzNy0xLjA0Mi0wLjExYy0xLjI4Ni0wLjI3My0yLjM1LTEuMDIxLTMuMDU4LTIuMDE4YzAuMDgzLTAuNDg0LDAuMTM2LTAuOTc4LDAuMTM2LTEuNDg1ICAgYzAtMS4yNTMtMC4yNjgtMi40NDItMC43NDMtMy41MjJsMy42MTItMTYuOTkzYzAuNDkyLTIuMzE1LDIuNTctMy45OTYsNC45NDEtMy45OTZjMC4zNDgsMCwwLjcsMC4wMzcsMS4wNDMsMC4xMSAgIEM4MS4zMSw0NC4yMTIsODMuMDUzLDQ2Ljg5Nyw4Mi40NzQsNDkuNjE4elxcXCIgLz48L2c+PGcgZGlzcGxheT1cXFwibm9uZVxcXCI+PHBhdGggZGlzcGxheT1cXFwiaW5saW5lXFxcIiBkPVxcXCJNOTAuNzY3LDQwLjAxNUgxMDB2LTguODI2aC05LjI0OWMtMC40ODgtMi4wOTMtMS4zMTctNC4wNTUtMi40MjMtNS44MjZsNi41NDYtNi41NDVsLTYuMjQxLTYuMjQgICBsLTYuNTUyLDYuNTUyYy0xLjc3LTEuMS0zLjcyOS0xLjkyNC01LjgyLTIuNDFWNy40NTVoLTguODI0djkuMjY1Yy0yLjA5MiwwLjQ4NS00LjA1MiwxLjMxLTUuODIzLDIuNDExbC02LjU0OS02LjU1bC02LjIzOSw2LjI0MSAgIGw2LjU0Myw2LjU0M2MtMS4xMDcsMS43NzItMS45MzYsMy43MzUtMi40MjUsNS44MjloLTkuMjQxdjguODI2aDkuMjI5YzAuNDg2LDIuMSwxLjMxMiw0LjA3LDIuNDE5LDUuODQ4bC02LjUyMiw2LjUyMmw2LjI0MSw2LjI0ICAgbDYuNTE4LTYuNTE5YzEuNzc4LDEuMTExLDMuNzUsMS45NDIsNS44NTQsMi40MzJ2OS4yMWg4LjgyM3YtOS4yMTJjMi4xMDQtMC40OSw0LjA3NS0xLjMyMiw1Ljg1NC0yLjQzNGw2LjUxOCw2LjUybDYuMjQxLTYuMjQgICBsLTYuNTI2LTYuNTI2Qzg5LjQ1NCw0NC4wODIsOTAuMjgxLDQyLjExNCw5MC43NjcsNDAuMDE1eiBNNzEuODUsNDQuNDU2Yy00Ljg3NSwwLTguODI2LTMuOTUyLTguODI2LTguODI0ICAgYzAtNC44NzUsMy45NTEtOC44MjYsOC44MjYtOC44MjZjNC44NzQsMCw4LjgyMywzLjk1MSw4LjgyMyw4LjgyNkM4MC42NzMsNDAuNTAzLDc2LjcyNCw0NC40NTYsNzEuODUsNDQuNDU2elxcXCIgLz48cGF0aCBkaXNwbGF5PVxcXCJpbmxpbmVcXFwiIGQ9XFxcIk00Ny4wNjQsNjguODA2aDkuMjMzVjU5Ljk4aC05LjI0OWMtMC40ODgtMi4wOTMtMS4zMTgtNC4wNTQtMi40MjMtNS44MjVsNi41NDYtNi41NDVsLTYuMjQtNi4yNCAgIGwtNi41NTMsNi41NTJjLTEuNzctMS4xLTMuNzI5LTEuOTI0LTUuODItMi40MXYtOS4yNjVoLTguODI0djkuMjY1Yy0yLjA5MywwLjQ4NS00LjA1MiwxLjMxLTUuODIzLDIuNDExbC02LjU1LTYuNTVsLTYuMjM5LDYuMjQxICAgbDYuNTQzLDYuNTQyYy0xLjEwNywxLjc3Mi0xLjkzNiwzLjczNS0yLjQyNSw1LjgyOUgwdjguODI1aDkuMjI5YzAuNDg2LDIuMTAxLDEuMzEzLDQuMDcsMi40MTksNS44NDhsLTYuNTIyLDYuNTI0bDYuMjQxLDYuMjM4ICAgbDYuNTE4LTYuNTE3YzEuNzc5LDEuMTEsMy43NSwxLjk0MSw1Ljg1NSwyLjQzdjkuMjExaDguODI0di05LjIxM2MyLjEwMy0wLjQ4OSw0LjA3NS0xLjMyLDUuODU0LTIuNDMzbDYuNTE4LDYuNTE5bDYuMjQtNi4yMzkgICBsLTYuNTI2LTYuNTI2QzQ1Ljc1Miw3Mi44NzQsNDYuNTc5LDcwLjkwNiw0Ny4wNjQsNjguODA2eiBNMjguMTQ3LDczLjI0OGMtNC44NzUsMC04LjgyNi0zLjk1Mi04LjgyNi04LjgyNSAgIGMwLTQuODc1LDMuOTUyLTguODI1LDguODI2LTguODI1YzQuODc0LDAsOC44MjMsMy45NSw4LjgyMyw4LjgyNUMzNi45Nyw2OS4yOTYsMzMuMDIxLDczLjI0OCwyOC4xNDcsNzMuMjQ4elxcXCIgLz48L2c+PGcgZGlzcGxheT1cXFwibm9uZVxcXCI+PGcgZGlzcGxheT1cXFwiaW5saW5lXFxcIj48cG9seWdvbiBwb2ludHM9XFxcIjU3LjM4Nyw0NS42OSAxNS45OTcsODcuMDc3IDEzLjA2NCw5MS45MzYgMTQuNDQ0LDkzLjMxNiAxOS4zMDYsOTAuMzg2IDYwLjY5Myw0OC45OTkgICBcXFwiIC8+PC9nPjxnIGRpc3BsYXk9XFxcImlubGluZVxcXCI+PHBhdGggZD1cXFwiTTk3LjU0Miw4Ljg0MWMtMy4xNDYtMy4xNDQtOC4wNzMtMy4zMzYtMTEuMjE4LTAuMTkzTDYyLjEyNywzMi44NDVjLTAuMjc4LDAuMjgtMC4yNzgsMC43MjksMCwxLjAxICAgIGMwLjgyMSwwLjgyMywwLjgyMSwyLjE1MiwwLDIuOTczYy0wLjgxOCwwLjgyLTIuMTUxLDAuODIzLTIuOTc0LDAuMDAxYy0wLjI3OC0wLjI4LTAuNzI5LTAuMjgtMS4wMS0wLjAwMWwtMi43ODcsMi43ODggICAgYy0wLjIyOSwwLjIzMy0wLjI1OCwwLjU4LTAuMTAyLDAuODUzbDEwLjY1OSwxMC42NjFjMC4yNzUsMC4xNTYsMC42MjMsMC4xMjgsMC44NTUtMC4xMDNsMi43ODctMi43ODcgICAgYzAuMjc3LTAuMjc5LDAuMjc1LTAuNzMtMC4wMDMtMS4wMWMtMC44MjEtMC44MjEtMC44MjEtMi4xNTUsMC0yLjk3NmMwLjgxOS0wLjgyMSwyLjE1NC0wLjgxOCwyLjk3NSwwICAgIGMwLjI3NiwwLjI4MSwwLjcyOSwwLjI4MSwxLjAwOSwwbDI0LjE5Ny0yNC4xOTNDMTAwLjg4MSwxNi45MTQsMTAwLjY4OCwxMS45ODgsOTcuNTQyLDguODQxelxcXCIgLz48L2c+PHBhdGggZGlzcGxheT1cXFwiaW5saW5lXFxcIiBkPVxcXCJNODYuNzc3LDgwLjQ0TDU4LjQyMiw1NC4xbC05LjkyLDkuOTE5bDI3LjIxNywyNy4yMzljMy4wMDMsMy4xMjQsNy44MTMsMy4xMjQsMTAuOTM3LDAuMTIxICAgQzg5LjY2Miw4OC4yNTMsODkuNzgxLDgzLjQ0NSw4Ni43NzcsODAuNDR6IE04NC4wMTEsODguNzNjLTEuNTYsMS42ODYtNC4wODUsMS40NDYtNS43Ny0wLjEyYy0xLjQ0LTEuNDQxLTEuNDQtNC4wODMsMC01LjY0NSAgIGMxLjY4NS0xLjU2Niw0LjIxLTEuNTY2LDUuNzcsMEM4NS41NzQsODQuNTI3LDg1LjU3NCw4Ny4yOTEsODQuMDExLDg4LjczelxcXCIgLz48cGF0aCBkaXNwbGF5PVxcXCJpbmxpbmVcXFwiIGQ9XFxcIk00Mi4zNyw1Ny44NzlsOS42ODktOS42ODhMMzMuMzAyLDMwLjc2N2MtMi43NjItMy4wMDMtMy40ODctNC4yMDUtMi43NjItNy42OTMgICBjMC44NDMtMy44NDcsMC4xNjktMTAuOTA3LTYuMzcyLTE0LjY2OUMxNi42NDksNC4wOCw5LjAyLDguMDQ1LDkuMDIsOC4wNDVMOC40Miw5LjAwOGMwLDAsNi43MzMsNC40NDgsNy41NzQsNC45MjggICBjMC45NjEsMC42MDMsMy44NDUsMy44NDYsMC4zNTgsOS4wMTdjLTMuMzY4LDUuMTcxLTcuMDkxLDMuNDg1LTguMTczLDIuNjQ2Yy0wLjg0MS0wLjQ4Mi03LjU3NC00LjgxMS03LjU3NC00LjgxMWwtMC41OTksMC45NjIgICBjMCwwLTAuNDgzLDkuMDE2LDYuOTY4LDEzLjgyNWMzLjQ4NiwyLjI4Miw3LjIxNiwyLjI4Miw5Ljg2MSwxLjMyMmMyLjY0NS0wLjg0MSw0LjU2NSwwLjEyMiw3LjgxMywzLjI0Nkw0Mi4zNyw1Ny44Nzl6XFxcIiAvPjwvZz48ZyBkaXNwbGF5PVxcXCJub25lXFxcIj48ZyBkaXNwbGF5PVxcXCJpbmxpbmVcXFwiPjxwb2x5Z29uIHBvaW50cz1cXFwiMjguNzU3LDU3LjQ4MyAzMC4yNzQsNTYuNjA4IDQzLjQ1LDQ4Ljk3NCA0My40NzYsNDguOTg4IDY4LjMyNiwzNC42NDcgNjguMzIsMjIuMzYgNy40OTMsNTcuNDQ5IDgyLjE5MywxMDAgICAgIDkyLjQ3NSw5NC4wNyA3My40MzgsODMuMTM4ICAgXFxcIiAvPjxwb2x5Z29uIHBvaW50cz1cXFwiNzAuNDI2LDM1Ljg1OCA3MC40MzksNjQuMzQ4IDgwLjk5Myw3MC4zNTkgODAuOTYsMCA2LjQ2Miw0Mi45NzMgNi40NjgsNTUuNjE1IDcwLjQxOCwxOC43MjggICBcXFwiIC8+PHBvbHlnb24gcG9pbnRzPVxcXCI4My4wOTMsNzMuOTcyIDcwLjQ0MSw2Ni43NjQgNzAuNDQsNjYuNzcxIDY4LjE2Nyw2NS40NjggNDMuNDgzLDUxLjQwNiAzMi45NjIsNTcuNDc5IDkzLjUzOCw5Mi4yNiA5My40OTcsNi4wMDcgICAgIDgzLjA1OSwwLjAxNCAgIFxcXCIgLz48L2c+PC9nPjxnIGRpc3BsYXk9XFxcIm5vbmVcXFwiPjxwYXRoIGRpc3BsYXk9XFxcImlubGluZVxcXCIgZD1cXFwiTTg2LjIwNywxNC44MDNMNzEuNDAzLDBoLTU3LjYxdjk0LjgyN2MwLDIuOTQ4LDMuNzA2LDUuMTczLDguNjIsNS4xNzNjNC45MTUsMCw4LjYyMS0yLjIyNSw4LjYyMS01LjE3MyAgIGwwLDBWMTkuNjhsMTAuMzQ1LDEwLjM0NXY2NC44MDNsMCwwYzAsMi45NDgsMy43MDYsNS4xNzMsOC42MjEsNS4xNzNjNC45MTQsMCw4LjYyLTIuMjI1LDguNjItNS4xNzNWMTMuNzkzSDI3LjU4NnY3Ni44NDggICBjLTEuNDIzLTAuNjIxLTMuMTk2LTAuOTg1LTUuMTczLTAuOTg1Yy0xLjk3NSwwLTMuNzQ5LDAuMzY0LTUuMTcyLDAuOTg1VjMuNDQ4aDUxLjcyNXY5MS4zNzljMCwyLjk0OCwzLjcwNSw1LjE3Myw4LjYyLDUuMTczICAgYzQuOTE0LDAsOC42MjEtMi4yMjUsOC42MjEtNS4xNzNsMCwwVjE0LjgwM3ogTTU1LjE3Miw5MC42NDFjLTEuNDIzLTAuNjIxLTMuMTk3LTAuOTg1LTUuMTcyLTAuOTg1ICAgYy0xLjk3NywwLTMuNzUsMC4zNjQtNS4xNzMsMC45ODVWMzEuMDM0aDEwLjM0NVY5MC42NDF6IE01MCw5Ni41NTJjLTMuMzM4LDAtNS4xNzMtMS4yOTYtNS4xNzMtMS43MjVzMS44MzUtMS43MjQsNS4xNzMtMS43MjQgICBzNS4xNzIsMS4yOTUsNS4xNzIsMS43MjRTNTMuMzM4LDk2LjU1Miw1MCw5Ni41NTJ6IE01NS4xNzIsMjcuNTg2SDQzLjgxN0wzMy40NzMsMTcuMjQxaDIxLjY5OVYyNy41ODZ6IE0yMi40MTMsOTMuMTA0ICAgYzMuMzM4LDAsNS4xNzMsMS4yOTUsNS4xNzMsMS43MjRzLTEuODM1LDEuNzI1LTUuMTczLDEuNzI1cy01LjE3Mi0xLjI5Ni01LjE3Mi0xLjcyNVMxOS4wNzUsOTMuMTA0LDIyLjQxMyw5My4xMDR6IE04Mi43NTksMTYuMjMxICAgdjc0LjQwOWMtMS40MjMtMC42MjEtMy4xOTctMC45ODUtNS4xNzMtMC45ODVzLTMuNzUsMC4zNjQtNS4xNzIsMC45ODVWNS44ODZMODIuNzU5LDE2LjIzMXogTTc3LjU4Niw5Ni41NTIgICBjLTMuMzM4LDAtNS4xNzItMS4yOTYtNS4xNzItMS43MjVzMS44MzQtMS43MjQsNS4xNzItMS43MjRjMy4zMzcsMCw1LjE3MywxLjI5NSw1LjE3MywxLjcyNFM4MC45MjMsOTYuNTUyLDc3LjU4Niw5Ni41NTJ6XFxcIiAvPjwvZz48ZyBkaXNwbGF5PVxcXCJub25lXFxcIj48cGF0aCBkaXNwbGF5PVxcXCJpbmxpbmVcXFwiIGQ9XFxcIk03OS4zODYsMjUuOTU4VjEuODhoLTAuMDAyTDc4LjI5OSwwaC0yLjE3bC0xLjA4NywxLjg4bDAsMHYxLjg2NGMtMTYuNjY5LDEuMzA5LTMzLjQxNiwxLjMwOS01MC4wODUsMCAgIFYxLjg4bDAsMEwyMy44NzEsMGgtMi4xN2wtMS4wODUsMS44OGgtMC4wMDJ2MjQuMDc4aC02LjA4djMuMzc5aDYuMDhWNDQuM0w0Ni45Myw3MC42MTVsLTkuODQ1LDkuODQ0aC05Ljg4M3YzLjM3OWg2LjUwNSAgIEwyMS4xNzYsOTYuMzY5djAuMDAxbC0wLjU2MiwyLjA5NUwyMi4xNSwxMDBsMi4wOTYtMC41NjJ2MC4wMDJsMTUuNjAzLTE1LjYwMmgyMC4zMDRsMTUuNjAzLDE1LjYwMnYtMC4wMDJMNzcuODUsMTAwbDEuNTM2LTEuNTM1ICAgbC0wLjU2Mi0yLjA5NXYtMC4wMDFMNjYuMjkzLDgzLjgzOGg2LjUwNHYtMy4zNzloLTkuODgzbC05Ljg0NC05Ljg0NEw3OS4zODYsNDQuM1YyOS4zMzdoNi4wOHYtMy4zNzlINzkuMzg2eiBNNzUuMDQyLDI2djMuMzM3ICAgdjEwLjY0Yy0xNi4yNzgsNS4yNzUtMzMuODA2LDUuMjc1LTUwLjA4NSwwdi0xMC42NFYyNkM0MS42MjYsMjcuMzEsNTguMzczLDI3LjMxLDc1LjA0MiwyNnogTTU2Ljc3Myw4MC40NTlINDMuMjI3TDUwLDczLjY4NiAgIEw1Ni43NzMsODAuNDU5eiBNNTAsNjcuNTQ1bC02LjYyNi02LjYyN2gxMy4yNTNMNTAsNjcuNTQ1eiBNNDEuNDQzLDU4Ljk4N0wyNy43MDYsNDUuMjVjMTQuNTcxLDQuMTU4LDMwLjAxNyw0LjE1OCw0NC41ODgsMCAgIEw1OC41NTcsNTguOTg3SDQxLjQ0M3pcXFwiIC8+PC9nPjxnIGRpc3BsYXk9XFxcIm5vbmVcXFwiPjxwYXRoIGRpc3BsYXk9XFxcImlubGluZVxcXCIgZD1cXFwiTTk3Ljc1Niw4NC4xMjNMNzEuMTczLDU3LjU0YzMuNzIzLTUuODIyLDUuOTE2LTEyLjcxMiw1LjkxNi0yMC4xMTlDNzcuMDg5LDE2Ljc4Nyw2MC4zMDIsMCwzOS42NjcsMCAgIEMxOS4wMzMsMCwyLjI0NCwxNi43ODcsMi4yNDQsMzcuNDIxYzAsMjAuNjM0LDE2Ljc4OSwzNy40MjcsMzcuNDIzLDM3LjQyN2M1LjAzOSwwLDkuODQtMS4wMTUsMTQuMjMxLTIuODI5TDgxLjg4LDEwMCAgIEw5Ny43NTYsODQuMTIzeiBNMTkuMDg1LDM3LjQyMWMwLTExLjM0OCw5LjIzNC0yMC41OCwyMC41ODItMjAuNThzMjAuNTgsOS4yMzIsMjAuNTgsMjAuNThjMCwxMS4zNTQtOS4yMzIsMjAuNTg2LTIwLjU4LDIwLjU4NiAgIFMxOS4wODUsNDguNzc1LDE5LjA4NSwzNy40MjF6XFxcIiAvPjwvZz48ZyBkaXNwbGF5PVxcXCJub25lXFxcIj48cGF0aCBkaXNwbGF5PVxcXCJpbmxpbmVcXFwiIGQ9XFxcIk05Ni43OTIsNDQuNjZMNTUuMzQxLDMuMjA4Yy0xLjQyNi0xLjQyMi0zLjMyMy0yLjIwNy01LjM0Mi0yLjIwN2MtMi4wMTgsMC0zLjkxNSwwLjc4NS01LjMzOCwyLjIwNyAgIEwzLjIwOSw0NC42NkMxLjc4Myw0Ni4wODUsMSw0Ny45OCwxLDUwLjAwM2MwLDIuMDE2LDAuNzgzLDMuOTE1LDIuMjA5LDUuMzM2TDQ0LjY2LDk2Ljc5MWMxLjQyNCwxLjQyNiwzLjMyMSwyLjIwOCw1LjMzOCwyLjIwOCAgIGMyLjAxOSwwLDMuOTE5LTAuNzgyLDUuMzQyLTIuMjA4TDk2Ljc5Miw1NS4zNEM5OS43MzcsNTIuMzk4LDk5LjczNyw0Ny42MDUsOTYuNzkyLDQ0LjY2eiBNMzcuNzQzLDcxLjIzMyAgIGMtMC41NjUsMC41NTQtMS4wOTcsMS4wNzQtMS42MDIsMS41NzdsLTcuMjMyLTcuMjMyYzAuNTUtMC41NDcsMS4xMDctMS4wOTQsMS42OTQtMS42NjRjNS4xNDctNS4wMjEsMTEuMzEzLTExLjAzNiwxMy40NzctMjMuMDcyICAgYy0wLjUyNSwwLjEyNC0xLjAyMywwLjI2NS0xLjQ4NiwwLjQyM2wtMS45MzYsMC42NjdjLTQuMDY5LDEuNDA1LTUuNDAyLTAuMzQ2LTIuOTY1LTMuODkxbDcuODY0LTExLjQ0MmwwLjAwMi0wLjAwM2w0LjQzLTYuNDQ3ICAgbDQuNDI5LDYuNDUxbDcuODYzLDExLjQ0MmMyLjQzNiwzLjU0MiwxLjEwNCw1LjI5Ni0yLjk2NiwzLjg5MWwtMS45MzItMC42NjdjLTAuNDYzLTAuMTU4LTAuOTYzLTAuMjk5LTEuNDg2LTAuNDIzICAgYzIuMTY0LDEyLjAzNiw4LjMyOSwxOC4wNSwxMy40NzksMjMuMDcyYzAuNTg3LDAuNTcsMS4xNDQsMS4xMTcsMS42OSwxLjY2NGwtNy4yMjksNy4yMzJjLTAuNTA3LTAuNTAzLTEuMDQtMS4wMjMtMS42MDQtMS41NzcgICBjLTMuNzg3LTMuNjkzLTguNjM1LTguNDE5LTEyLjI0Ni0xNS43MjlDNDYuMzc5LDYyLjgxNCw0MS41MzIsNjcuNTQsMzcuNzQzLDcxLjIzM3pcXFwiIC8+PC9nPjxnIGRpc3BsYXk9XFxcIm5vbmVcXFwiPjxnIGRpc3BsYXk9XFxcImlubGluZVxcXCI+PHBhdGggZD1cXFwiTTc5LjgzOSw3OS4yNzloMTAuMjIzdi00LjQxOEwxMDAsODQuODA1bC05LjkzOCw5Ljk0NXYtNC40MThINjUuOTAyQzcxLjI1Miw4Ny41OTQsNzUuOTc3LDgzLjgyMiw3OS44MzksNzkuMjc5elxcXCIgLz48cGF0aCBkPVxcXCJNNDEuMTg2LDIxLjAxNmMtMTQuMjA5LDIuMDEzLTI1LjE1OSwxNC4yNDEtMjUuMTU5LDI4Ljk4N2MwLDEwLjExNCw1LjE1NywxOS4wNDYsMTIuOTcxLDI0LjMxSDEzLjE1MyAgICBjLTUuMTIzLTYuNzY2LTguMTc4LTE1LjE4OS04LjE3OC0yNC4zMWMwLTIwLjY0NywxNS42MDYtMzcuNzEzLDM1LjYzMS00MC4wNDdsLTUuMjQ4LDUuMjQyTDQxLjE4NiwyMS4wMTZ6XFxcIiAvPjxwYXRoIGQ9XFxcIk01LjUzMiw4NC44MDVsLTUuNTIxLTUuNTI1aDQ1LjI5OGMxNi4xNCwwLDI5LjI4Mi0xMy4xMzEsMjkuMjgyLTI5LjI3NmMwLTE0LjQ1MS0xMC41MjktMjYuNDgyLTI0LjMwNy0yOC44NTF2My45OSAgICBsLTkuOTUtOS45NDRsOS45NS05Ljk0N1Y5Ljk5YzE5Ljg5OSwyLjQ1OSwzNS4zNTgsMTkuNDU3LDM1LjM1OCw0MC4wMTNjMCwyMi4yMzctMTguMDk0LDQwLjMyOS00MC4zMzMsNDAuMzI5SDBMNS41MzIsODQuODA1elxcXCIgLz48L2c+PC9nPjxnIGRpc3BsYXk9XFxcIm5vbmVcXFwiPjxnIGRpc3BsYXk9XFxcImlubGluZVxcXCI+PHBhdGggZD1cXFwiTTQ0LjQyNiw1Ny4zMTZsOS4yNTgsOS4yNTV2MTAuMjc2aDEwLjI3M2wzLjAxMiwzLjAxMXYxMC4yNzRoOS44NjdWMTAwaDIzLjE2M1Y4Ny4xMTFMNTcuMzE0LDQ0LjQyNCAgICBjNS45NzUtMTEuNDUxLDQuMTU3LTI1LjkxLTUuNDU5LTM1LjUyOGMtMTEuODYxLTExLjg2MS0zMS4wOTQtMTEuODYxLTQyLjk1OSwwYy0xMS44NjEsMTEuODY1LTExLjg2MSwzMS4wOTgsMCw0Mi45NiAgICBDMTguNTEzLDYxLjQ3MywzMi45NzUsNjMuMjkxLDQ0LjQyNiw1Ny4zMTZ6IE0xOC4xMTMsMTguMTE0YzMuNzYxLTMuNzU1LDkuODUxLTMuNzU1LDEzLjYwNywwYzMuNzYxLDMuNzU5LDMuNzYxLDkuODUxLDAsMTMuNjA2ICAgIGMtMy43NTcsMy43NTktOS44NDcsMy43NTktMTMuNjA3LDBDMTQuMzU5LDI3Ljk2NCwxNC4zNTksMjEuODczLDE4LjExMywxOC4xMTR6XFxcIiAvPjwvZz48L2c+PGcgZGlzcGxheT1cXFwibm9uZVxcXCI+PGcgZGlzcGxheT1cXFwiaW5saW5lXFxcIj48cGF0aCBkPVxcXCJNNTAuMDAxLDIzLjI2N2MtMTEuNzI3LDAtMjEuMjI5LDkuNTAxLTIxLjIyOSwyMS4yMjRjMCwyLjkxOSwwLjU5MSw1LjY5OCwxLjY1Niw4LjIzbDAsMGw5LjU2LDI3Ljg1N2gxOS41NzVsOS42Ny0yNy4xNDYgICAgYzEuMjY4LTIuNzIsMS45OTQtNS43NDIsMS45OTQtOC45NDFDNzEuMjI4LDMyLjc2OCw2MS43MjUsMjMuMjY3LDUwLjAwMSwyMy4yNjd6XFxcIiAvPjxyZWN0IHg9XFxcIjQ3Ljc5XFxcIiB3aWR0aD1cXFwiNC40MTZcXFwiIGhlaWdodD1cXFwiMTcuMzJcXFwiIC8+PHJlY3QgeD1cXFwiMjMuMjU0XFxcIiB5PVxcXCIxMS4yOTlcXFwiIHRyYW5zZm9ybT1cXFwibWF0cml4KDAuNDk5OSAwLjg2NjEgLTAuODY2MSAwLjQ5OTkgMjcuNjU2OSAtMjAuODg2KVxcXCIgd2lkdGg9XFxcIjE3LjMyMVxcXCIgaGVpZ2h0PVxcXCI0LjQxNFxcXCIgLz48cmVjdCB4PVxcXCIxMC4wMTVcXFwiIHk9XFxcIjI0LjUzNlxcXCIgdHJhbnNmb3JtPVxcXCJtYXRyaXgoLTAuODY1OSAtMC41MDAyIDAuNTAwMiAtMC44NjU5IDIxLjQ2OTcgNTkuMjQ0OClcXFwiIHdpZHRoPVxcXCIxNy4zMlxcXCIgaGVpZ2h0PVxcXCI0LjQxN1xcXCIgLz48cG9seWdvbiBwb2ludHM9XFxcIjg3LjcyNCwyMC41MDUgNzIuNzI1LDI5LjE2NCA3NC45MjgsMzIuOTg5IDg5LjkyOSwyNC4zMjQgICBcXFwiIC8+PHJlY3QgeD1cXFwiNjUuODc2XFxcIiB5PVxcXCI0Ljg0NlxcXCIgdHJhbnNmb3JtPVxcXCJtYXRyaXgoMC44NjYzIDAuNDk5NSAtMC40OTk1IDAuODY2MyAxNS44NTA1IC0zMi4yMDU2KVxcXCIgd2lkdGg9XFxcIjQuNDJcXFwiIGhlaWdodD1cXFwiMTcuMzIxXFxcIiAvPjxyZWN0IHg9XFxcIjQwLjcxNFxcXCIgeT1cXFwiODMuMjE5XFxcIiB3aWR0aD1cXFwiMTcuMzIzXFxcIiBoZWlnaHQ9XFxcIjMuODM1XFxcIiAvPjxyZWN0IHg9XFxcIjQwLjcxNFxcXCIgeT1cXFwiODkuNjlcXFwiIHdpZHRoPVxcXCIxNy4zMjNcXFwiIGhlaWdodD1cXFwiMy44MzZcXFwiIC8+PHJlY3QgeD1cXFwiNDMuNjM1XFxcIiB5PVxcXCI5Ni4xNjRcXFwiIHdpZHRoPVxcXCIxMS40NzlcXFwiIGhlaWdodD1cXFwiMy44MzZcXFwiIC8+PC9nPjwvZz48ZyBkaXNwbGF5PVxcXCJub25lXFxcIj48cG9seWdvbiBkaXNwbGF5PVxcXCJpbmxpbmVcXFwiIHBvaW50cz1cXFwiMzcuMzgzLDIzLjUzNSAxOS4zNTUsMjMuNTM1IDM3LjM4Myw1LjUwNyAgXFxcIiAvPjxwYXRoIGRpc3BsYXk9XFxcImlubGluZVxcXCIgZD1cXFwiTTQxLjg5MSwxdjI3LjA0MkgxNC44NDlWOTloNzAuMzAzVjFINDEuODkxeiBNNzMuNzEsODUuMDYzSDI2LjI4OXYtNS43OTlINzMuNzFWODUuMDYzeiBNNzMuNzEsNjguNzYxICAgSDI2LjI4OXYtNS43OTlINzMuNzFWNjguNzYxeiBNNzMuNzEsNTIuMDI4SDI2LjI4OVY0Ni4yM0g3My43MVY1Mi4wMjh6XFxcIiAvPjwvZz48ZyBkaXNwbGF5PVxcXCJub25lXFxcIj48ZyBkaXNwbGF5PVxcXCJpbmxpbmVcXFwiPjxwYXRoIGQ9XFxcIk04MC40MSwzNC40NzJjLTE1LjMzMi05LjIzOS0yNS43OTQtMTEuNS0zMC4xMDktOS44MDVjLTEuNzg1LDAuNy0zLjU2NiwyLjk5Mi01LjQxMSw2LjA0OSAgICBjLTEuOTE3LDMuMTcyLTMuMjk5LDcuOTg2LTIuODY1LDEwLjA1N2MwLjI1NSwxLjIxLDMuNTY0LDkuMTA1LDIyLjI3OSwxOS41NDVjMTIuMTg3LDYuNzk1LDIxLjg2MSw4LjUyMSwyMy41NTMsNy45NTUgICAgYzEuNzIxLTAuNTY4LDQuMDc4LTEuODQ3LDcuMjY1LTYuMzAxQzk4LjA2OCw1Ny44NTIsOTksNTMuMTg4LDk5LDUxLjQwMkM5OSw0OS42MjMsOTIuODIsNDEuOTUsODAuNDEsMzQuNDcyeiBNOTQuNzk3LDUyLjU0OSAgICBjLTEuNzE5LDMuMDU5LTE0LjEzMS0xLjUyMy0yMS43Ny01LjcyOGMtNy42NDMtNC4yMDMtMjMuODUzLTE1LjIxOS0yMC4wNTMtMTkuMjg5YzIuNjcyLTIuODY2LDEzLjkzOCwwLjc2NCwyNi4xNjIsOC40MDMgICAgQzkxLjM2MSw0My41NzQsOTYuNTE4LDQ5LjQ5Niw5NC43OTcsNTIuNTQ5elxcXCIgLz48cGF0aCBkPVxcXCJNNDguNjc3LDUzLjU0NWMtMi42MjQsMC45OTctOS4yNjMsMi4xNTctMTcuNTIyLDIuMTU3Yy05LjIwMSwwLTI0LjQ5MS0yLjE1Ny0yNC40OTEtOC40MDMgICAgYzAtNy4yNDksMjIuNTY3LTEwLjIxNywzMi42MDctOS4yMTRjMC4wOTYtMC43MTcsMC4zMzQtMS43NjcsMC4zMzQtMS43NjdzLTEuNTc2LTAuMTkxLTQuNjc3LTAuMTkxICAgIGMtMjIuNjgsMC0zMC4yMjMsNi40NDQtMzEuNzk5LDguNzg0Yy0xLjU3NiwyLjM0LTIuMTAyLDcuMzk5LTIuMTAyLDEwLjIxOGMwLDIuODE5LTAuNjEsOC41MTYsMy45MTcsMTMuNDY3ICAgIGM1LjEwNyw1LjU4NCwxNi42MTQsNy4yNTYsMjYuMDIsNy4yNTZjOS40MDUsMCwxNi4yMzItMC43NjQsMjUuOTI0LTUuMjU0YzAuNTYtMS4yOTcsMC41NzItMi42OTUsMC41NzItMy4yNDQgICAgQzU3LjQ2MSw2Mi4wMDMsNTEuNjg2LDU0LjU1NSw0OC42NzcsNTMuNTQ1elxcXCIgLz48L2c+PC9nPjxnIGRpc3BsYXk9XFxcIm5vbmVcXFwiPjxwYXRoIGRpc3BsYXk9XFxcImlubGluZVxcXCIgZD1cXFwiTTkwLjQ3OSwzNS43MTRoLTIuODY0TDc3LjM2NCwxOC42MjdjLTAuNjQ0LTEuMDc2LTIuMjA4LTEuOTYtMy40NjItMS45NkgyNi4wOTkgICBjLTEuMjYxLDAtMi44MjIsMC44ODUtMy40NjcsMS45NmwtMTAuMjUsMTcuMDg3SDkuNTE4QzQuMjgxLDM1LjcxNCwwLDQwLjAwMiwwLDQ1LjIzOHYyLjY3OXYyMy44MTJoOS41MTh2MTEuNjA0aDE0LjI5M1Y3MS43MjkgICBoNTIuMzczdjExLjYwNGgxNC4yOTVWNzEuNzI5SDEwMFY0Ny45MTd2LTIuNjc5QzEwMCw0MC4wMDIsOTUuNzE1LDM1LjcxNCw5MC40NzksMzUuNzE0eiBNMjYuODA4LDIxLjk1OGg0Ni4zODRsOS42OSwxNi4xNDMgICBjLTQuNTE0LDEuMzUtMTQuNDM4LDMuNDM4LTMyLjYyNCwzLjQzOGMtMTguMjkyLDAtMjguNDU3LTIuMTM2LTMzLjEwMy0zLjUwN0wyNi44MDgsMjEuOTU4eiBNMTYuNjY2LDU5LjUyMyAgIGMtMy45NDEsMC03LjE0OC0zLjE5Ni03LjE0OC03LjE0YzAtMy45NDUsMy4yMDctNy4xNDYsNy4xNDgtNy4xNDZjMy45NDgsMCw3LjE0NiwzLjIsNy4xNDYsNy4xNDYgICBDMjMuODEyLDU2LjMyNywyMC42MTQsNTkuNTIzLDE2LjY2Niw1OS41MjN6IE02Ni42NjYsNjAuNTc5SDMzLjMzMWMtMC41NzksMC0xLjA1NS0wLjQ3MS0xLjA1NS0xLjA1NiAgIGMwLTAuNTg3LDAuNDc2LTEuMDU1LDEuMDU1LTEuMDU1aDMzLjMzNWMwLjU3OCwwLDEuMDU2LDAuNDY4LDEuMDU2LDEuMDU1QzY3LjcyMiw2MC4xMDgsNjcuMjQ0LDYwLjU3OSw2Ni42NjYsNjAuNTc5eiAgICBNNjYuNjY2LDU1LjgxOUgzMy4zMzFjLTAuNTc5LDAtMS4wNTUtMC40NzQtMS4wNTUtMS4wNTdjMC0wLjU4NCwwLjQ3Ni0xLjA1OSwxLjA1NS0xLjA1OWgzMy4zMzVjMC41NzgsMCwxLjA1NiwwLjQ3NSwxLjA1NiwxLjA1OSAgIEM2Ny43MjIsNTUuMzQ2LDY3LjI0NCw1NS44MTksNjYuNjY2LDU1LjgxOXogTTgzLjMzNCw1OS41MjNjLTMuOTUyLDAtNy4xNDktMy4xOTYtNy4xNDktNy4xNGMwLTMuOTQ1LDMuMTk3LTcuMTQ2LDcuMTQ5LTcuMTQ2ICAgYzMuOTQ4LDAsNy4xNDYsMy4yLDcuMTQ2LDcuMTQ2QzkwLjQ3OSw1Ni4zMjcsODcuMjgyLDU5LjUyMyw4My4zMzQsNTkuNTIzelxcXCIgLz48L2c+PGcgZGlzcGxheT1cXFwibm9uZVxcXCI+PGcgZGlzcGxheT1cXFwiaW5saW5lXFxcIj48Zz48cGF0aCBkPVxcXCJNNzcuNTQ3LDY5Ljk4VjQxLjk2OWMtMS42NTYsMC4xNDYtMy40MzIsMC4yNzktNS4zMjgsMC4zOTd2MjkuNTUzQzc0LjEzNyw3MS4zNDIsNzUuOTIsNzAuNjkzLDc3LjU0Nyw2OS45OHpcXFwiIC8+PC9nPjxnPjxwYXRoIGQ9XFxcIk0yNS41NTMsNDIuMjAyVjcxLjEyYzYuNjEyLDIuMzQ4LDE1LjE4MiwzLjc2OSwyNC41NTIsMy43NjljMi4yMjEsMCw0LjM5My0wLjA4NCw2LjUxLTAuMjM1VjQyLjk0ICAgICBjLTIuMTIzLDAuMDMzLTQuMjkzLDAuMDUxLTYuNTEsMC4wNTFDNDAuODY5LDQyLjk5MSwzMi4zNTksNDIuNjk2LDI1LjU1Myw0Mi4yMDJ6XFxcIiAvPjwvZz48Zz48Zz48cGF0aCBkPVxcXCJNMTcuODk5LDM4LjY3NmM3LjQ0NSwwLjk1OSwxOS40NTEsMS41NDIsMzIuMjA2LDEuNTQyYzEyLjYxMiwwLDI0LjUzOC0wLjU3MiwzMS45OTMtMS41MTMgICAgICBjMC41NDUtNC41NTcsMi42NjItNy41OTEsNS41MzMtNy43NDRDODMuNzUyLDEzLjgxLDY4LjQzLDEsNTAuMTA1LDFDMzEuNzcxLDEsMTYuNDQzLDEzLjgyMywxMi41NzQsMzAuOTg3ICAgICAgQzE1LjMzMSwzMS4yNzQsMTcuMzYzLDM0LjI0NSwxNy44OTksMzguNjc2eiBNNjYuMTgsOS45NjNjMS4yMTEtMS4yNTEsNC40OC0wLjA1LDcuMzAzLDIuNjggICAgICBjMi44MjQsMi43MzEsNC4xMzMsNS45NjEsMi45MjIsNy4yMTRjLTEuMjA5LDEuMjUtNC40OCwwLjA0OS03LjMwNS0yLjY4MkM2Ni4yNzcsMTQuNDQ0LDY0Ljk2OSwxMS4yMTQsNjYuMTgsOS45NjN6XFxcIiAvPjwvZz48L2c+PGc+PGc+PHBhdGggZD1cXFwiTTc1LjAzNSw3My44OTdjLTUuMTg0LDEuNzY5LTExLjQ3MywzLjAyNS0xOC4zNzMsMy41MjJjLTAuMzUsMC4wMjMtMC42OTEsMC4wNTYtMS4wNDEsMC4wNzUgICAgICBjLTAuMjQ4LDAuMDE2LTAuNSwwLjAyMi0wLjc0NiwwLjAzNWMtMC43MDEsMC4wMzYtMS40MDQsMC4wNzEtMi4xMTcsMC4wOTJjLTAuMDM3LDAuMDAxLTAuMDc0LDAuMDAxLTAuMTA5LDAuMDAzICAgICAgYy0wLjg3MywwLjAyMy0xLjc1NiwwLjAzNi0yLjY0NiwwLjAzN2MtMC44OS0wLjAwMS0xLjc3My0wLjAxNC0yLjY0Ni0wLjAzN2MtMC4wMzYtMC4wMDItMC4wNzQtMC4wMDItMC4xMTEtMC4wMDMgICAgICBjLTAuNzE0LTAuMDIxLTEuNDE2LTAuMDU2LTIuMTE3LTAuMDkyYy0wLjI0Ny0wLjAxMy0wLjQ5OS0wLjAyLTAuNzQ1LTAuMDM1Yy0wLjM1MS0wLjAyLTAuNjkzLTAuMDUyLTEuMDQyLTAuMDc1ICAgICAgYy02LjkwMS0wLjQ5Ny0xMy4xODktMS43NTQtMTguMzczLTMuNTIyYy00LTEuMzk1LTcuMzY1LTMuMTMzLTkuOTI3LTUuMTM2bC0wLjMwOS0wLjA3NiAgICAgIGMyLjQ4MiwxMC4wOTUsOS41NjEsMTguNTMxLDE2LjA4NCwyMy45OThjMi4zNjYsMi4yOTUsNC45MDQsNC4xNSw3LjU0OSw1LjIwNGMwLjE3OSwwLjA5MiwwLjM2OSwwLjIwNSwwLjUzOSwwLjI5MSAgICAgIGMxLjYzMSwwLjU1OCw2LjM2NywwLjgzMiwxMS4wOTYsMC44MjFjNC43MywwLjAxMSw5LjQ2NC0wLjI2NCwxMS4wOTUtMC44MjFjMC4xNy0wLjA4NiwwLjM2MS0wLjE5OSwwLjUzOS0wLjI5MSAgICAgIGMyLjY0NS0xLjA1NCw1LjE4NC0yLjkwOSw3LjU0OS01LjIwNGM2LjUyNS01LjQ2NywxMy42MDQtMTMuOTAzLDE2LjA4Ni0yMy45OThsLTAuMzExLDAuMDc2ICAgICAgQzgyLjM5OCw3MC43NjUsNzkuMDMzLDcyLjUwMyw3NS4wMzUsNzMuODk3eiBNNDYuMzM0LDkxLjU5NmMwLDAuNTEyLTAuNDE0LDAuOTI2LTAuOTIzLDAuOTI2cy0wLjkyNC0wLjQxNC0wLjkyNC0wLjkyNnYtNC44MzMgICAgICBjMC0wLjUxMSwwLjQxNS0wLjkyNSwwLjkyNC0wLjkyNXMwLjkyMywwLjQxNCwwLjkyMywwLjkyNVY5MS41OTZ6IE01MC45MjksOTIuOTkzYzAsMC41MTMtMC40MTUsMC45MjctMC45MjQsMC45MjcgICAgICBjLTAuNTEsMC0wLjkyNC0wLjQxNC0wLjkyNC0wLjkyN3YtNi41ODFjMC0wLjUwOSwwLjQxNS0wLjkyNCwwLjkyNC0wLjkyNGMwLjUwOSwwLDAuOTI0LDAuNDE1LDAuOTI0LDAuOTI0VjkyLjk5M3ogICAgICAgTTU1LjUyMyw5MS41OTZjMCwwLjUxMi0wLjQxNiwwLjkyNi0wLjkyNCwwLjkyNmMtMC41MSwwLTAuOTI0LTAuNDE0LTAuOTI0LTAuOTI2di00LjgzM2MwLTAuNTExLDAuNDE0LTAuOTI1LDAuOTI0LTAuOTI1ICAgICAgYzAuNTA4LDAsMC45MjQsMC40MTQsMC45MjQsMC45MjVWOTEuNTk2elxcXCIgLz48L2c+PC9nPjxnPjxnPjxwYXRoIGQ9XFxcIk04Ny44NTQsMzMuNzA1Yy0xLjcyMywwLTMuMTIxLDMuMzEyLTMuMTIxLDcuMzk2YzAsMC4wMTMsMC4wMDIsMC4wMjEsMC4wMDIsMC4wMzRjLTAuNzQ4LDAuMTE4LTEuNTc2LDAuMjMtMi40NTEsMC4zMzkgICAgICB2MjUuOTU4YzMuNjAyLTIuNDExLDUuNjg4LTUuMjU1LDUuNjg4LTguMzA3YzAsMCwzLjAwNC0xNS4zMjcsMy4wMDQtMTguMDI0QzkwLjk3NSwzNy4wMTYsODkuNTc2LDMzLjcwNSw4Ny44NTQsMzMuNzA1eiAgICAgICBNODguMDcsNDEuNTA4Yy0wLjMzNCwwLTAuNjA1LTAuNzc2LTAuNjA1LTEuNzM0czAuMjcxLTEuNzMzLDAuNjA1LTEuNzMzYzAuMzM2LDAsMC42MDcsMC43NzYsMC42MDcsMS43MzMgICAgICBTODguNDA2LDQxLjUwOCw4OC4wNyw0MS41MDh6XFxcIiAvPjwvZz48L2c+PGc+PGc+PHBhdGggZD1cXFwiTTIwLjM1Miw2OC44NjdWNDEuNzVjLTEuOTE4LTAuMTk5LTMuNjM1LTAuNDE1LTUuMDg1LTAuNjQ3YzAtMC4wMDEsMC0wLjAwMSwwLTAuMDAxYzAtNC4wODQtMS4zOTgtNy4zOTYtMy4xMjEtNy4zOTYgICAgICBjLTEuNzIzLDAtMy4xMiwzLjMxMi0zLjEyLDcuMzk2YzAsMy4xNCwzLjIxMywxOC4wMjQsMy4yMTMsMTguMDI0QzEyLjIzOSw2Mi44MDUsMTUuMjc2LDY2LjE4NiwyMC4zNTIsNjguODY3eiBNMTEuODgyLDQxLjUwOCAgICAgIGMtMC4zMzQsMC0wLjYwNi0wLjc3Ni0wLjYwNi0xLjczNHMwLjI3Mi0xLjczMywwLjYwNi0xLjczM3MwLjYwNywwLjc3NiwwLjYwNywxLjczM1MxMi4yMTYsNDEuNTA4LDExLjg4Miw0MS41MDh6XFxcIiAvPjwvZz48L2c+PC9nPjwvZz48ZyBkaXNwbGF5PVxcXCJub25lXFxcIj48ZyBkaXNwbGF5PVxcXCJpbmxpbmVcXFwiPjxwYXRoIGQ9XFxcIk03MC4wMDIsMEgzMGMtMy42ODQsMC02LjY2NiwyLjk4MS02LjY2Niw2LjY2N3Y4Ni42NjdjMCwzLjY4NiwyLjk4MSw2LjY2Nyw2LjY2Niw2LjY2N2g0MCAgICBjMy42ODUsMCw2LjY2Ni0yLjk4MSw2LjY2Ni02LjY2N1Y2LjY2N0M3Ni42NjgsMi45ODEsNzMuNjg3LDAsNzAuMDAyLDB6IE00My4yMjksNi4wNDJoMTMuNTQyYzEuMjExLDAsMi4xODgsMC45ODMsMi4xODgsMi4xODggICAgYzAsMS4yMTEtMC45NzcsMi4xODgtMi4xODgsMi4xODhINDMuMjI5Yy0xLjIxMSwwLTIuMTg4LTAuOTc3LTIuMTg4LTIuMTg4QzQxLjA0Miw3LjAyNCw0Mi4wMTksNi4wNDIsNDMuMjI5LDYuMDQyeiAgICAgTTUwLjAwMSw5My43NDNjLTIuOTgyLDAtNS40MDQtMi40MjItNS40MDQtNS40MWMwLTIuOTgxLDIuNDIxLTUuNDAzLDUuNDA0LTUuNDAzczUuNDA0LDIuNDIyLDUuNDA0LDUuNDAzICAgIEM1NS40MDUsOTEuMzIxLDUyLjk4Myw5My43NDMsNTAuMDAxLDkzLjc0M3ogTTY5LjY2Myw3OC4zMzRIMzAuMzM4di02Mi41aDM5LjMyM3Y2Mi41SDY5LjY2M3pcXFwiIC8+PC9nPjwvZz48ZyBkaXNwbGF5PVxcXCJub25lXFxcIj48ZyBkaXNwbGF5PVxcXCJpbmxpbmVcXFwiPjxwYXRoIGQ9XFxcIk03Mi40MTEsMy4xMzljLTEuNDEyLTEuMTcxLTMuMTY4LTEuNzExLTQuNzAzLTIuMDg0QzY0LjcyNSwwLjMyOCw1My4yMzgsMCw1MC4xNjEsMGgtMC4zMjIgICAgYy0zLjA3NywwLTE0LjU2MiwwLjMyOC0xNy41NDYsMS4wNTVjLTEuNTM2LDAuMzczLTMuMjk1LDAuOTEzLTQuNzAyLDIuMDg0Yy0xLjcwOCwxLjQxNy0yLjU3MywzLjUtMi41NzMsNi4xOTl2ODEuNTkzICAgIGMwLDUuNDk0LDQuNDA0LDcuMDc3LDYuMjk0LDcuNTA0QzMzLjM5OCw5OC45MDIsMzguMjg4LDEwMCw0OS44LDEwMEg1MC4yYzExLjUxMiwwLDE2LjQwMi0xLjA5OCwxOC40ODktMS41NjUgICAgYzEuODktMC40MjcsNi4yOTUtMi4wMSw2LjI5NS03LjUwNFY5LjMzOEM3NC45ODMsNi42NCw3NC4xMTgsNC41NTYsNzIuNDExLDMuMTM5eiBNNjYuNTQyLDUuNjE3YzEuMzIxLDAsMi4zOTIsMS4wNjcsMi4zOTIsMi4zOTUgICAgYzAsMS4zMjEtMS4wNywyLjM5Ni0yLjM5MiwyLjM5NnMtMi4zOTQtMS4wNzYtMi4zOTQtMi4zOTZDNjQuMTQ4LDYuNjg1LDY1LjIyNyw1LjYxNyw2Ni41NDIsNS42MTd6IE00MC43NDUsNy4wMThoMTcuNjc0ICAgIGMwLjU4LDAsMS4wMzgsMC40NjIsMS4wMzgsMS4wMzVzLTAuNDU4LDEuMDM1LTEuMDM4LDEuMDM1SDQwLjc0NWMtMC41NzksMC0xLjAzOC0wLjQ2NS0xLjAzOC0xLjAzNSAgICBDMzkuNzA4LDcuNDgsNDAuMTY3LDcuMDE4LDQwLjc0NSw3LjAxOHogTTUzLjkyMyw5NC4zMzJjLTEuMDAxLDAuMjQxLTMuMDczLDAuMjcxLTMuOTc0LDAuMjcxYy0wLjEwNywwLTAuMTk3LTAuMDAzLTAuMjY1LTAuMDAzICAgIHMtMC4xNjEsMC4wMDMtMC4yNjYsMC4wMDNjLTAuODk3LDAtMi45NzMtMC4wMjktMy45NzUtMC4yNzFjLTEuMzQ1LTAuMzI2LTEuNzYyLTEuODI1LTEuNzYyLTIuMzM1YzAtMC4zNTcsMC0xLjMwNCwxLjQzMi0xLjMwNCAgICBoNC40MWgwLjMyMmg0LjQxYzEuNDMsMCwxLjQzLDAuOTQ2LDEuNDMsMS4zMDRDNTUuNjg1LDkyLjUwNyw1NS4yNjksOTQuMDA2LDUzLjkyMyw5NC4zMzJ6IE02OC42MzQsODYuMTE3aC0zNy41NFYxNC4wNTZINjguNjMgICAgdjcyLjA2Mkg2OC42MzR6XFxcIiAvPjwvZz48L2c+PGcgZGlzcGxheT1cXFwibm9uZVxcXCI+PHBhdGggZGlzcGxheT1cXFwiaW5saW5lXFxcIiBkPVxcXCJNNjcuOTUxLDI4Ljg3MXYyMi4wNWwtMjIuMDUyLTIyLjA1djI1Ljc0NmgtNy4wNDNWMGgtOS4yMzF2NTQuNjE2aC03LjA0N1YwaC05LjIzdjU0LjYxNkg2LjMwNFYxMDAgICBoODcuMzg0VjU0LjYxNmgwLjAwOEw2Ny45NTEsMjguODcxeiBNODkuNTgxLDY1Ljk2Mkg3NS45NDJ2LTcuMjM5aDEzLjYzOVY2NS45NjJ6IE01NC4wOTYsNzAuMDY0aDEzLjY0MnY3LjI0M0g1NC4wOTZWNzAuMDY0eiAgICBNNDUuODkyLDc3LjMwOEgzMi4yNTN2LTcuMjQzaDEzLjYzOFY3Ny4zMDh6IE01NC4wOTYsNjUuOTYydi03LjIzOWgxMy42NDJ2Ny4yMzlINTQuMDk2eiBNNDUuODkyLDU4LjcyM3Y3LjIzOUgzMi4yNTN2LTcuMjM5ICAgSDQ1Ljg5MnogTTI0LjA0OCw1OC43MjN2Ny4yMzlIMTAuNDExdi03LjIzOUgyNC4wNDh6IE0xMC40MTEsNzAuMDY0aDEzLjYzOHY3LjI0M0gxMC40MTFWNzAuMDY0eiBNNzUuOTQyLDc3LjMwOHYtNy4yNDNoMTMuNjM5ICAgdjcuMjQzSDc1Ljk0MnpcXFwiIC8+PC9nPjxnIGRpc3BsYXk9XFxcIm5vbmVcXFwiPjxnIGRpc3BsYXk9XFxcImlubGluZVxcXCI+PHBhdGggZD1cXFwiTTEyLjk2Miw0OC4xNDdWMTAwaDc0LjA3NlY0OC4xNDdIMTIuOTYyeiBNNTMuNzA0LDc2Ljc1MXYxMi4xMzdoLTcuNDA5Vjc2Ljc1MWMtMi4yMDItMS4yODgtMy43MDQtMy42NDYtMy43MDQtNi4zODEgICAgYzAtNC4wODcsMy4zMTMtNy40MDcsNy40MS03LjQwN2M0LjA4NywwLDcuNDA3LDMuMzIsNy40MDcsNy40MDdDNTcuNDA4LDczLjEwNCw1NS45MDMsNzUuNDYzLDUzLjcwNCw3Ni43NTF6XFxcIiAvPjxwYXRoIGQ9XFxcIk0zNS4xOCwyNS45M2MwLjA0LTMuMS0wLjAwMy0xNC44MTUsMTQuODEzLTE0LjgxNWMxNC44MjEsMCwxNC43NzEsMTEuNzYyLDE0LjgxNCwxNC44MTV2MTEuMTFoMTEuMTE4VjI1LjkyNiAgICBjMCwwLTAuMDA3LTI1LjkyNi0yNS45MjUtMjUuOTI2QzI0LjA3NywwLDI0LjA3LDI1LjkyNiwyNC4wNywyNS45MjZWMzcuMDRoMTEuMTFWMjUuOTN6XFxcIiAvPjwvZz48L2c+PC9zeW1ib2w+XCJcbn0pO1xudmFyIHJlc3VsdCA9IHNwcml0ZS5hZGQoc3ltYm9sKTtcbmV4cG9ydCBkZWZhdWx0IHN5bWJvbFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2ltYWdlcy9pY29ucy9sb2dvdXQuc3ZnXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgU3ByaXRlU3ltYm9sIGZyb20gXCJzdmctYmFrZXItcnVudGltZS9icm93c2VyLXN5bWJvbFwiO1xuaW1wb3J0IHNwcml0ZSBmcm9tIFwic3ZnLXNwcml0ZS1sb2FkZXIvcnVudGltZS9icm93c2VyLXNwcml0ZS5idWlsZFwiO1xudmFyIHN5bWJvbCA9IG5ldyBTcHJpdGVTeW1ib2woe1xuICBcImlkXCI6IFwibWFwXCIsXG4gIFwidXNlXCI6IFwibWFwLXVzYWdlXCIsXG4gIFwidmlld0JveFwiOiBcIjAgMCAxMDAgMTAwXCIsXG4gIFwiY29udGVudFwiOiBcIjxzeW1ib2wgdmlld0JveD1cXFwiMCAwIDEwMCAxMDBcXFwiIGlkPVxcXCJtYXBcXFwiPjxnIHRyYW5zZm9ybT1cXFwidHJhbnNsYXRlKDAsLTk1Mi4zNjIxOClcXFwiPjxwYXRoIGQ9XFxcIk0gNTAgNyBDIDM0LjU0Nzg2MSA3IDIyIDE5LjU0Nzg2IDIyIDM1IEMgMjIgNDAuNTcwNDEgMjMuNjM4MTUxIDQ1Ljc2MjI2IDI2LjQzNzUgNTAuMTI1IEwgNDEuODEyNSA3NC4wOTM3NSBDIDQwLjIzMTE2NCA3NC41MzAwOCAzOC43NzMzNDMgNzUuMDc1ODc0IDM3LjUgNzUuNzUgQyAzNC4yMzc3MTYgNzcuNDc3MSAzMiA4MC4wMDQzIDMyIDgzIEMgMzIgODUuOTk1NyAzNC4yMzc3MTYgODguNTIyOSAzNy41IDkwLjI1IEMgNDAuNzYyMjg0IDkxLjk3NzEgNDUuMTYyNTIxIDkzIDUwIDkzIEMgNTQuODM3NDc5IDkzIDU5LjIzNzcxNiA5MS45NzcxIDYyLjUgOTAuMjUgQyA2NS43NjIyODQgODguNTIyOSA2OCA4NS45OTU3IDY4IDgzIEMgNjggODAuMDA0MyA2NS43NjIyODQgNzcuNDc3MSA2Mi41IDc1Ljc1IEMgNjEuMjMwNDQ1IDc1LjA3Nzg3OSA1OS43NjMwMTIgNzQuNTMxMTc1IDU4LjE4NzUgNzQuMDkzNzUgTCA3My41NjI1IDUwLjEyNSBDIDc2LjM2MTg1NCA0NS43NjIzNiA3OCA0MC41NzA0MiA3OCAzNSBDIDc4IDE5LjU0Nzg2IDY1LjQ1MjEzOSA3IDUwIDcgeiBNIDUwIDkgQyA2NC4zNzEyNjEgOSA3NiAyMC42Mjg3NCA3NiAzNSBDIDc2IDQwLjE3ODE4IDc0LjQ3NjI0NiA0NC45Nzc0IDcxLjg3NSA0OS4wMzEyNSBMIDUwIDgzLjEyNSBMIDI4LjEyNSA0OS4wMzEyNSBDIDI1LjUyMzc0OSA0NC45NzczIDI0IDQwLjE3ODE5IDI0IDM1IEMgMjQgMjAuNjI4NzQgMzUuNjI4NzM5IDkgNTAgOSB6IE0gNTAgMjQgQyA0My45MzY3IDI0IDM5IDI4LjkzNjggMzkgMzUgQyAzOSA0MS4wNjMyIDQzLjkzNjcgNDYgNTAgNDYgQyA1Ni4wNjMzIDQ2IDYxIDQxLjA2MzIgNjEgMzUgQyA2MSAyOC45MzY4IDU2LjA2MzMgMjQgNTAgMjQgeiBNIDUwIDI2IEMgNTQuOTgyNCAyNiA1OSAzMC4wMTc2IDU5IDM1IEMgNTkgMzkuOTgyNCA1NC45ODI0IDQ0IDUwIDQ0IEMgNDUuMDE3NiA0NCA0MSAzOS45ODI0IDQxIDM1IEMgNDEgMzAuMDE3NiA0NS4wMTc2IDI2IDUwIDI2IHogTSA0Mi45Njg3NSA3NS44NzUgTCA0OS4xNTYyNSA4NS41MzEyNSBBIDEuMDAwMSAxLjAwMDEgMCAwIDAgNTAuODQzNzUgODUuNTMxMjUgTCA1Ny4wMzEyNSA3NS44NzUgQyA1OC43MzIwNDQgNzYuMzAyOTQ5IDYwLjI3Nzc1IDc2Ljg1MTExOCA2MS41NjI1IDc3LjUzMTI1IEMgNjQuNDUzMDA2IDc5LjA2MTU1IDY2IDgxLjAyNTEgNjYgODMgQyA2NiA4NC45NzQ4IDY0LjQ1MzAwNiA4Ni45Mzg1NSA2MS41NjI1IDg4LjQ2ODc1IEMgNTguNjcxOTk0IDg5Ljk5OTA1IDU0LjU1MTM2IDkxIDUwIDkxIEMgNDUuNDQ4NjQgOTEgNDEuMzI4MDA2IDg5Ljk5OTA1IDM4LjQzNzUgODguNDY4NzUgQyAzNS41NDY5OTQgODYuOTM4NTUgMzQgODQuOTc0OCAzNCA4MyBDIDM0IDgxLjAyNTEgMzUuNTQ2OTk0IDc5LjA2MTU1IDM4LjQzNzUgNzcuNTMxMjUgQyAzOS43MjMwNjUgNzYuODUwNjg3IDQxLjI2NjE5NSA3Ni4zMDMxMDUgNDIuOTY4NzUgNzUuODc1IHogXFxcIiB0cmFuc2Zvcm09XFxcInRyYW5zbGF0ZSgwLDk1Mi4zNjIxOClcXFwiIC8+PC9nPjwvc3ltYm9sPlwiXG59KTtcbnZhciByZXN1bHQgPSBzcHJpdGUuYWRkKHN5bWJvbCk7XG5leHBvcnQgZGVmYXVsdCBzeW1ib2xcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9pbWFnZXMvaWNvbnMvbWFwLnN2Z1xuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFNwcml0ZVN5bWJvbCBmcm9tIFwic3ZnLWJha2VyLXJ1bnRpbWUvYnJvd3Nlci1zeW1ib2xcIjtcbmltcG9ydCBzcHJpdGUgZnJvbSBcInN2Zy1zcHJpdGUtbG9hZGVyL3J1bnRpbWUvYnJvd3Nlci1zcHJpdGUuYnVpbGRcIjtcbnZhciBzeW1ib2wgPSBuZXcgU3ByaXRlU3ltYm9sKHtcbiAgXCJpZFwiOiBcInBlbmNpbFwiLFxuICBcInVzZVwiOiBcInBlbmNpbC11c2FnZVwiLFxuICBcInZpZXdCb3hcIjogXCIwIDAgMTAwIDEwMFwiLFxuICBcImNvbnRlbnRcIjogXCI8c3ltYm9sIHZpZXdCb3g9XFxcIjAgMCAxMDAgMTAwXFxcIiBpZD1cXFwicGVuY2lsXFxcIj48Zz48cGF0aCBkPVxcXCJNODguNSwyMy42TDc2LjQsMTEuNWMtMS0xLTIuMy0xLjUtMy43LTEuNWMtMS40LDAtMi43LDAuNS0zLjcsMS41bC04LDhsMTkuNSwxOS41bDgtOEM5MC41LDI5LDkwLjUsMjUuNyw4OC41LDIzLjZ6ICAgIE04Ni40LDI5bC02LDZMNjUsMTkuNWw2LTZjMC45LTAuOSwyLjUtMC45LDMuNCwwbDEyLjEsMTIuMUM4Ny40LDI2LjYsODcuNCwyOC4xLDg2LjQsMjl6XFxcIiAvPjxwYXRoIGQ9XFxcIk01NS4xLDI1LjRMMTEuOSw2OC42Yy0wLjcsMC43LTEuMSwxLjYtMS4xLDIuNmwtMC43LDE2YzAsMC44LDAuMiwxLjUsMC44LDJjMC41LDAuNSwxLjIsMC44LDEuOSwwLjhjMCwwLDAuMSwwLDAuMSwwICAgbDE2LTAuN2MxLDAsMS45LTAuNSwyLjYtMS4xbDQzLjItNDMuMkw1NS4xLDI1LjR6IE02Mi43LDM3TDIxLjksNzcuOWwtNy42LTcuNmw0MC44LTQwLjhMNjIuNywzN3ogTTEzLjUsNzMuNmwxMi45LDEyLjlsLTEzLjUsMC42ICAgTDEzLjUsNzMuNnogTTI5LjcsODUuN2wtNS44LTUuOGw0MC44LTQwLjhsNS44LDUuOEwyOS43LDg1Ljd6XFxcIiAvPjwvZz48L3N5bWJvbD5cIlxufSk7XG52YXIgcmVzdWx0ID0gc3ByaXRlLmFkZChzeW1ib2wpO1xuZXhwb3J0IGRlZmF1bHQgc3ltYm9sXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvaW1hZ2VzL2ljb25zL3BlbmNpbC5zdmdcbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBTcHJpdGVTeW1ib2wgZnJvbSBcInN2Zy1iYWtlci1ydW50aW1lL2Jyb3dzZXItc3ltYm9sXCI7XG5pbXBvcnQgc3ByaXRlIGZyb20gXCJzdmctc3ByaXRlLWxvYWRlci9ydW50aW1lL2Jyb3dzZXItc3ByaXRlLmJ1aWxkXCI7XG52YXIgc3ltYm9sID0gbmV3IFNwcml0ZVN5bWJvbCh7XG4gIFwiaWRcIjogXCJyZXZpZXdcIixcbiAgXCJ1c2VcIjogXCJyZXZpZXctdXNhZ2VcIixcbiAgXCJ2aWV3Qm94XCI6IFwiMCAwIDEwMCAxMDBcIixcbiAgXCJjb250ZW50XCI6IFwiPHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgMTAwIDEwMFxcXCIgaWQ9XFxcInJldmlld1xcXCI+PHRpdGxlPkFydGJvYXJkPC90aXRsZT48ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz48ZyBzdHJva2U9XFxcIm5vbmVcXFwiIHN0cm9rZS13aWR0aD1cXFwiMVxcXCIgZmlsbD1cXFwibm9uZVxcXCIgZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIj48ZyBzdHJva2U9XFxcIiNmZmZmZmZcXFwiIHN0cm9rZS13aWR0aD1cXFwiNC41XFxcIj48ZyB0cmFuc2Zvcm09XFxcInRyYW5zbGF0ZSg1LjAwMDAwMCwgMTAuMDAwMDAwKVxcXCI+PHBhdGggZD1cXFwiTTgyLjcwMzEyMDksMC44MiBMNy43MDEzNjI1NiwwLjgyIEMzLjU1ODgyMzU4LDAuODIgMC4yMDQsNC4xNzgzNDAxNyAwLjIwNCw4LjMyMDg3OTE1IEwwLjIwNCw1Ny4wOTI0MTgyIEMwLjIwNCw2MS4yMzQ5NTcyIDMuNTYyMzQwMTcsNjQuNTkzMjk3NCA3LjcwMTM2MjU2LDY0LjU5MzI5NzQgTDYwLjMzNzYzMDMsNjQuNTkzMjk3NCBMNzUuMTk4NzI1MSw3OS40NTQzOTIyIEw3NS4xOTg3MjUxLDY0LjU5MzI5NzQgTDgyLjcwMzEyMDksNjQuNTkzMjk3NCBDODYuODQ1NjU5OCw2NC41OTMyOTc0IDkwLjIwNCw2MS4yMzQ5NTcyIDkwLjIwNCw1Ny4wOTI0MTgyIEw5MC4yMDQsOC4zMjA4NzkxNSBDOTAuMjA0LDQuMTc4MzQwMTcgODYuODQ1NjU5OCwwLjgyIDgyLjcwMzEyMDksMC44MiBMODIuNzAzMTIwOSwwLjgyIFogTTMwLjU1NTY1ODcsMzYuNDY3NjM4IEMyOC40ODQzODkyLDM2LjQ2NzYzOCAyNi44MDY5Nzc0LDM0Ljc5MDIyNjIgMjYuODA2OTc3NCwzMi43MTg5NTY3IEMyNi44MDY5Nzc0LDMwLjY0NzY4NzMgMjguNDg0Mzg5MiwyOC45NzAyNzU1IDMwLjU1NTY1ODcsMjguOTcwMjc1NSBDMzIuNjI2OTI4MSwyOC45NzAyNzU1IDM0LjMwNDMzOTksMzAuNjUxMjAzOCAzNC4zMDQzMzk5LDMyLjcxODk1NjcgQzM0LjMwNDMzOTksMzQuNzg2NzA5NiAzMi42MjY5MjgxLDM2LjQ2NzYzOCAzMC41NTU2NTg3LDM2LjQ2NzYzOCBMMzAuNTU1NjU4NywzNi40Njc2MzggWiBNNDUuMjAyMjQxNywzNi40Njc2MzggQzQzLjEzMDk3MjIsMzYuNDY3NjM4IDQxLjQ1MzU2MDQsMzQuNzkwMjI2MiA0MS40NTM1NjA0LDMyLjcxODk1NjcgQzQxLjQ1MzU2MDQsMzAuNjQ3Njg3MyA0My4xMzA5NzIyLDI4Ljk3MDI3NTUgNDUuMjAyMjQxNywyOC45NzAyNzU1IEM0Ny4yNzM1MTEyLDI4Ljk3MDI3NTUgNDguOTUwOTIzLDMwLjY1MTIwMzggNDguOTUwOTIzLDMyLjcxODk1NjcgQzQ4Ljk1MDkyMywzNC43ODY3MDk2IDQ3LjI3MzUxMTIsMzYuNDY3NjM4IDQ1LjIwMjI0MTcsMzYuNDY3NjM4IEw0NS4yMDIyNDE3LDM2LjQ2NzYzOCBaIE02MC4yMDA0ODM0LDM2LjQ2NzYzOCBDNTguMTI5MjEzOSwzNi40Njc2MzggNTYuNDUxODAyMSwzNC43OTAyMjYyIDU2LjQ1MTgwMjEsMzIuNzE4OTU2NyBDNTYuNDUxODAyMSwzMC42NDc2ODczIDU4LjEyOTIxMzksMjguOTcwMjc1NSA2MC4yMDA0ODM0LDI4Ljk3MDI3NTUgQzYyLjI3MTc1MjksMjguOTcwMjc1NSA2My45NDkxNjQ3LDMwLjY1MTIwMzggNjMuOTQ5MTY0NywzMi43MTg5NTY3IEM2My45NDkxNjQ3LDM0Ljc4NjcwOTYgNjIuMjcxNzUyOSwzNi40Njc2MzggNjAuMjAwNDgzNCwzNi40Njc2MzggTDYwLjIwMDQ4MzQsMzYuNDY3NjM4IFpcXFwiIC8+PC9nPjwvZz48L2c+PC9zeW1ib2w+XCJcbn0pO1xudmFyIHJlc3VsdCA9IHNwcml0ZS5hZGQoc3ltYm9sKTtcbmV4cG9ydCBkZWZhdWx0IHN5bWJvbFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2ltYWdlcy9pY29ucy9yZXZpZXcuc3ZnXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgU3ByaXRlU3ltYm9sIGZyb20gXCJzdmctYmFrZXItcnVudGltZS9icm93c2VyLXN5bWJvbFwiO1xuaW1wb3J0IHNwcml0ZSBmcm9tIFwic3ZnLXNwcml0ZS1sb2FkZXIvcnVudGltZS9icm93c2VyLXNwcml0ZS5idWlsZFwiO1xudmFyIHN5bWJvbCA9IG5ldyBTcHJpdGVTeW1ib2woe1xuICBcImlkXCI6IFwic3RvcmVcIixcbiAgXCJ1c2VcIjogXCJzdG9yZS11c2FnZVwiLFxuICBcInZpZXdCb3hcIjogXCIwIDAgNTEyIDUxMlwiLFxuICBcImNvbnRlbnRcIjogXCI8c3ltYm9sIHZpZXdCb3g9XFxcIjAgMCA1MTIgNTEyXFxcIiBpZD1cXFwic3RvcmVcXFwiPjxnPjxwYXRoIGQ9XFxcIk00NjksNDkzLjZWMTg4YzM1LjUtMTAuOSw0My43LTQ1LDM3LjctNjguOUw0NzUuMywySDM2LjdMNS4yLDExOS4zQy0wLjcsMTQzLDcuOSwxNzcuMSw0MywxODh2MzA1LjZIMlY1MTBoNTA4di0xNi40SDQ2OXogICAgTTQ1Mi42LDE3NC4xYy0yMi42LDAtNDEtMTguNC00MS00MXYtMzIuOGg3My4xbDYuMiwyMi45QzQ5Ni43LDE0NCw0ODMuOSwxNzQuMSw0NTIuNiwxNzQuMXogTTExNi43LDEwMC4zaDgxLjl2MzIuOCAgIGMwLDIyLjYtMTguNCw0MS00MSw0MWMtMjIuNiwwLTQxLTE4LjQtNDEtNDFWMTAwLjN6IE0yMTUsMTAwLjNIMjk3djMyLjhjMCwyMi42LTE4LjQsNDEtNDEsNDFjLTIyLjYsMC00MS0xOC40LTQxLTQxVjEwMC4zeiAgICBNMzEzLjQsMTAwLjNoODEuOXYzMi44YzAsMjIuNi0xOC40LDQxLTQxLDQxYy0yMi42LDAtNDEtMTguNC00MS00MVYxMDAuM3ogTTQ5LjMsMTguNGg0MTMuNWwxNy42LDY1LjVIMzEuN0w0OS4zLDE4LjR6ICAgIE0yMS4xLDEyMy40bDYuMi0yMy4xaDczLjF2MzIuOGMwLDIyLjYtMTguNCw0MS00MSw0MUMyOCwxNzQuMSwxNS4zLDE0My4xLDIxLjEsMTIzLjR6IE0yOTcsNDkzLjZ2LTIxM2gxMTQuN3YyMTNIMjk3eiAgICBNNDUyLjYsNDkzLjZoLTI0LjZWMjY0LjJIMjgwLjZ2MjI5LjRINTkuNFYxOTAuNWMyMC44LDAsMzkuMS0xMS4yLDQ5LjItMjcuOGMxMCwxNi43LDI4LjMsMjcuOCw0OS4yLDI3LjggICBjMjAuOCwwLDM5LjEtMTEuMiw0OS4yLTI3LjhjMTAsMTYuNywyOC4zLDI3LjgsNDkuMiwyNy44YzIwLjgsMCwzOS4xLTExLjIsNDkuMi0yNy44YzEwLDE2LjcsMjguMywyNy44LDQ5LjIsMjcuOCAgIGMyMC44LDAsMzkuMS0xMS4yLDQ5LjItMjcuOGMxMCwxNi43LDI4LjMsMjcuOCw0OS4yLDI3LjhWNDkzLjZ6XFxcIiAvPjxwYXRoIGQ9XFxcIk04My45LDQ2OWgxNjMuOVYzMDUuMkg4My45VjQ2OXogTTEwMC4zLDM5NS4zaDU3LjR2NTcuNGgtNTcuNFYzOTUuM3ogTTE3NC4xLDQ1Mi42di01Ny40aDU3LjR2NTcuNEgxNzQuMXogTTIzMS40LDM3OC45ICAgaC01Ny40di01Ny40aDU3LjRWMzc4Ljl6IE0xNTcuNywzMjEuNXY1Ny40aC01Ny40di01Ny40SDE1Ny43elxcXCIgLz48cmVjdCB4PVxcXCIxNjUuOVxcXCIgeT1cXFwiMjMxLjRcXFwiIHdpZHRoPVxcXCIxNi40XFxcIiBoZWlnaHQ9XFxcIjE2LjRcXFwiIC8+PHJlY3QgeD1cXFwiMTMzLjFcXFwiIHk9XFxcIjIzMS40XFxcIiB3aWR0aD1cXFwiMTYuNFxcXCIgaGVpZ2h0PVxcXCIxNi40XFxcIiAvPjxyZWN0IHg9XFxcIjE5OC42XFxcIiB5PVxcXCIyMzEuNFxcXCIgd2lkdGg9XFxcIjE2LjRcXFwiIGhlaWdodD1cXFwiMTYuNFxcXCIgLz48L2c+PC9zeW1ib2w+XCJcbn0pO1xudmFyIHJlc3VsdCA9IHNwcml0ZS5hZGQoc3ltYm9sKTtcbmV4cG9ydCBkZWZhdWx0IHN5bWJvbFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2ltYWdlcy9pY29ucy9zdG9yZS5zdmdcbi8vIG1vZHVsZSBpZCA9IDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBTcHJpdGVTeW1ib2wgZnJvbSBcInN2Zy1iYWtlci1ydW50aW1lL2Jyb3dzZXItc3ltYm9sXCI7XG5pbXBvcnQgc3ByaXRlIGZyb20gXCJzdmctc3ByaXRlLWxvYWRlci9ydW50aW1lL2Jyb3dzZXItc3ByaXRlLmJ1aWxkXCI7XG52YXIgc3ltYm9sID0gbmV3IFNwcml0ZVN5bWJvbCh7XG4gIFwiaWRcIjogXCJzdG9yZTJcIixcbiAgXCJ1c2VcIjogXCJzdG9yZTItdXNhZ2VcIixcbiAgXCJ2aWV3Qm94XCI6IFwiMCAwIDczIDczXCIsXG4gIFwiY29udGVudFwiOiBcIjxzeW1ib2wgdmlld0JveD1cXFwiMCAwIDczIDczXFxcIiBpZD1cXFwic3RvcmUyXFxcIj48Zz48cGF0aCBkPVxcXCJNNzIuNSwxNC4zYzAtMC42LTAuMy0xLjItMC44LTEuNkw1NS40LDAuOWMtMC4zLTAuMi0wLjgtMC40LTEuMi0wLjRIMTguN2MtMC40LDAtMC44LDAuMS0xLjIsMC40TDEuMywxMi43ICAgYy0wLjUsMC40LTAuOCwxLTAuOCwxLjZjMCwwLDAsNy4yLDAsNy4yYzAsMS44LDAuNiwzLjUsMS43LDQuOHY0NC4yYzAsMS4xLDAuOSwyLDIsMmg2NC42YzEuMSwwLDItMC45LDItMlYyNi4zICAgYzEuMS0xLjMsMS43LTMsMS43LTQuOEM3Mi41LDIxLjUsNzIuNSwxNC4zLDcyLjUsMTQuM3ogTTUzLjYsNC41bDEwLjgsNy44SDYwbC03LjItNy44SDUzLjZ6IE01Ny4yLDE2LjN2NS4yYzAsMi0xLjYsMy43LTMuNywzLjcgICBjLTIsMC0zLjctMS42LTMuNy0zLjd2LTUuMkg1Ny4yeiBNNDcuNSw0LjVsNy4yLDcuOGgtNS41bC0zLjYtNy44SDQ3LjV6IE0zOC41LDQuNWgyLjZsMy42LDcuOGgtNi4yVjQuNXogTTM4LjUsMTYuM2g3LjN2NS4yICAgYzAsMi0xLjYsMy43LTMuNywzLjdjLTIsMC0zLjctMS42LTMuNy0zLjdWMTYuM3ogTTMxLjksNC41aDIuNnY3LjhoLTYuMkwzMS45LDQuNXogTTM0LjUsMTYuM3Y1LjJjMCwyLTEuNiwzLjctMy43LDMuNyAgIGMtMiwwLTMuNy0xLjYtMy43LTMuN3YtNS4ySDM0LjV6IE0yNS41LDQuNWgxLjlsLTMuNiw3LjhoLTUuNUwyNS41LDQuNXogTTIzLjIsMTYuM3Y1LjJjMCwyLTEuNiwzLjctMy43LDMuN2MtMiwwLTMuNy0xLjYtMy43LTMuNyAgIHYtNS4ySDIzLjJ6IE0xOS40LDQuNWgwLjdMMTMsMTIuM0g4LjZMMTkuNCw0LjV6IE00LjUsMjEuNXYtNS4yaDcuM3Y1LjJjMCwyLTEuNiwzLjctMy43LDMuN0M2LjEsMjUuMiw0LjUsMjMuNSw0LjUsMjEuNXogICAgTTMxLjksNjguNUgxNS40VjM2aDE2LjVWNjguNXogTTY2LjgsNjguNUgzNS45VjM0YzAtMS4xLTAuOS0yLTItMkgxMy40Yy0xLjEsMC0yLDAuOS0yLDJ2MzQuNUg2LjJWMjguOWMwLjYsMC4yLDEuMywwLjMsMiwwLjMgICBjMi4yLDAsNC4zLTEsNS43LTIuNWMxLjQsMS41LDMuNCwyLjUsNS43LDIuNWMyLjIsMCw0LjMtMSw1LjctMi41YzEuNCwxLjUsMy40LDIuNSw1LjcsMi41czQuMy0xLDUuNy0yLjVjMS40LDEuNSwzLjQsMi41LDUuNywyLjUgICBjMi4yLDAsNC4zLTEsNS43LTIuNWMxLjQsMS41LDMuNCwyLjUsNS43LDIuNWMyLjIsMCw0LjMtMSw1LjctMi41YzEuNCwxLjUsMy40LDIuNSw1LjcsMi41YzAuNywwLDEuMy0wLjEsMi0wLjNWNjguNXogTTY4LjUsMjEuNSAgIGMwLDItMS42LDMuNy0zLjcsMy43Yy0yLDAtMy43LTEuNi0zLjctMy43di01LjJoNy4zVjIxLjV6XFxcIiAvPjxwYXRoIGQ9XFxcIk02MC42LDM3LjRINDIuNGMtMS4xLDAtMiwwLjktMiwydjE1LjJjMCwxLjEsMC45LDIsMiwyaDE4LjJjMS4xLDAsMi0wLjksMi0yVjM5LjRDNjIuNiwzOC4zLDYxLjcsMzcuNCw2MC42LDM3LjR6ICAgIE01OC42LDUyLjZINDQuNFY0MS40aDE0LjJWNTIuNnpcXFwiIC8+PC9nPjwvc3ltYm9sPlwiXG59KTtcbnZhciByZXN1bHQgPSBzcHJpdGUuYWRkKHN5bWJvbCk7XG5leHBvcnQgZGVmYXVsdCBzeW1ib2xcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9pbWFnZXMvaWNvbnMvc3RvcmUyLnN2Z1xuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFNwcml0ZVN5bWJvbCBmcm9tIFwic3ZnLWJha2VyLXJ1bnRpbWUvYnJvd3Nlci1zeW1ib2xcIjtcbmltcG9ydCBzcHJpdGUgZnJvbSBcInN2Zy1zcHJpdGUtbG9hZGVyL3J1bnRpbWUvYnJvd3Nlci1zcHJpdGUuYnVpbGRcIjtcbnZhciBzeW1ib2wgPSBuZXcgU3ByaXRlU3ltYm9sKHtcbiAgXCJpZFwiOiBcInRhZ1wiLFxuICBcInVzZVwiOiBcInRhZy11c2FnZVwiLFxuICBcInZpZXdCb3hcIjogXCIwIDAgMTAwIDEwMFwiLFxuICBcImNvbnRlbnRcIjogXCI8c3ltYm9sIHZpZXdCb3g9XFxcIjAgMCAxMDAgMTAwXFxcIiBpZD1cXFwidGFnXFxcIj48ZyB0cmFuc2Zvcm09XFxcInRyYW5zbGF0ZSgwLC05NTIuMzYyMTgpXFxcIj48cGF0aCBkPVxcXCJtIDU0LjgxMjUsNyBjIC0wLjE4OTIxLDAuMDQyNjA4IC0wLjM2NTMzMiwwLjE0MTY3NzIgLTAuNSwwLjI4MTI1IGwgLTQ2LDQ1IEMgNy41Mzc1Njc2LDUzLjAzOTM1IDcsNTQuMTcwMDUgNyw1NS41MzEyNSBjIDAsMS4yNjk2IDAuNTEzNTA3MSwyLjM4ODQ1IDEuMjgxMjUsMy4xNTYyNSBsIDMzLDMzIEMgNDEuOTc3NDQyLDkyLjM4MzggNDIuODkyNzU3LDkzIDQ0LDkzIGMgMS4xNTM3NTMsMCAyLjAzMDc5MywtMC42NTMxNSAyLjY4NzUsLTEuMjgxMjUgbCA0NiwtNDQgQyA5Mi44ODI0MzgsNDcuNTM0MTk1IDkyLjk5Nzk4Niw0Ny4yNjg0MzUgOTMsNDcgTCA5Myw4IEMgOTIuOTk5OTQ4LDcuNDc2NDE1NSA5Mi41MjM1ODQsNy4wMDAwNTI0IDkyLDcgTCA1NSw3IGMgLTAuMDYyMzIsLTAuMDA1ODcgLTAuMTI1MTg0LC0wLjAwNTg3IC0wLjE4NzUsMCB6IE0gNTUuMzc1LDkgOTEsOSA5MSw0Ni41NjI1IDQ1LjMxMjUsOTAuMjUgQyA0NC44MzMwNDcsOTAuNzA4NiA0NC4zMzY5NjcsOTEgNDQsOTEgNDMuNjE2NTIzLDkxIDQzLjIxMzI1OCw5MC43NzU4NSA0Mi43MTg3NSw5MC4yODEyNSBsIC0zMywtMzMgQyA5LjMzODgzMjksNTYuOTAxMzUgOSw1Ni4yMjA3NSA5LDU1LjUzMTI1IDksNTQuNjY5MTUgOS4yOTQ4NTI0LDU0LjA3MTYgOS42ODc1LDUzLjY4NzUgeiBNIDc1LDE3IGMgLTQuNDA2NDM1LDAgLTgsMy41OTM1NyAtOCw4IDAsNC40MDY0NCAzLjU5MzU2Niw4IDgsOCA0LjQwNjQzNSwwIDgsLTMuNTkzNTYgOCwtOCAwLC00LjQwNjQzIC0zLjU5MzU2NSwtOCAtOCwtOCB6IG0gMCwyIGMgMy4zMjU1NTQsMCA2LDIuNjc0NDUgNiw2IDAsMy4zMjU1NSAtMi42NzQ0NDUsNiAtNiw2IC0zLjMyNTU1NCwwIC02LC0yLjY3NDQ1IC02LC02IDAsLTMuMzI1NTUgMi42NzQ0NDYsLTYgNiwtNiB6XFxcIiB0cmFuc2Zvcm09XFxcInRyYW5zbGF0ZSgwLDk1Mi4zNjIxOClcXFwiIG1hcmtlcj1cXFwibm9uZVxcXCIgdmlzaWJpbGl0eT1cXFwidmlzaWJsZVxcXCIgZGlzcGxheT1cXFwiaW5saW5lXFxcIiBvdmVyZmxvdz1cXFwidmlzaWJsZVxcXCIgLz48L2c+PC9zeW1ib2w+XCJcbn0pO1xudmFyIHJlc3VsdCA9IHNwcml0ZS5hZGQoc3ltYm9sKTtcbmV4cG9ydCBkZWZhdWx0IHN5bWJvbFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2ltYWdlcy9pY29ucy90YWcuc3ZnXG4vLyBtb2R1bGUgaWQgPSA0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgU3ByaXRlU3ltYm9sIGZyb20gXCJzdmctYmFrZXItcnVudGltZS9icm93c2VyLXN5bWJvbFwiO1xuaW1wb3J0IHNwcml0ZSBmcm9tIFwic3ZnLXNwcml0ZS1sb2FkZXIvcnVudGltZS9icm93c2VyLXNwcml0ZS5idWlsZFwiO1xudmFyIHN5bWJvbCA9IG5ldyBTcHJpdGVTeW1ib2woe1xuICBcImlkXCI6IFwidG9wXCIsXG4gIFwidXNlXCI6IFwidG9wLXVzYWdlXCIsXG4gIFwidmlld0JveFwiOiBcIjAgMCA2MiA2MlwiLFxuICBcImNvbnRlbnRcIjogXCI8c3ltYm9sIHZpZXdCb3g9XFxcIjAgMCA2MiA2MlxcXCIgaWQ9XFxcInRvcFxcXCI+PGc+PGc+PHBhdGggZD1cXFwiTTMxLDM5LjFjLTEuOSwwLTMuOC0wLjUtNS41LTEuNUMxNy4yLDMyLjcsMTIsMjMuNywxMiwxNFYwaDM4djE0YzAsOS42LTUuMiwxOC43LTEzLjUsMjMuNkMzNC44LDM4LjYsMzIuOSwzOS4xLDMxLDM5LjF6ICAgICBNMTQsMnYxMmMwLDguOSw0LjgsMTcuMywxMi41LDIxLjhjMi44LDEuNiw2LjIsMS42LDksMEM0My4yLDMxLjMsNDgsMjMsNDgsMTRWMkgxNHpcXFwiIC8+PC9nPjxnPjxwYXRoIGQ9XFxcIk00Myw1NEgxOXYtNmgyNFY1NHogTTIxLDUyaDIwdi0ySDIxVjUyelxcXCIgLz48L2c+PGc+PHBhdGggZD1cXFwiTTQ1LDYySDE3VjUyaDI4VjYyeiBNMTksNjBoMjR2LTZIMTlWNjB6XFxcIiAvPjwvZz48Zz48cGF0aCBkPVxcXCJNMzUsNTBoLThWMzYuMmwxLjMsMC40YzEuOCwwLjYsMy42LDAuNiw1LjQsMGwxLjMtMC40VjUweiBNMjksNDhoNHYtOS4xYy0xLjMsMC4yLTIuNywwLjItNCwwVjQ4elxcXCIgLz48L2c+PGc+PGc+PHBhdGggZD1cXFwiTTE5LjksMzAuN0wxNi42LDI5QzcuNiwyNC4zLDIsMTUuMSwyLDVWNGgxMnYxMGMwLDQuOCwxLjQsOS41LDMuOSwxMy42TDE5LjksMzAuN3ogTTQsNmMwLjMsNy44LDQuMiwxNC45LDEwLjQsMTkuMyAgICAgQzEyLjgsMjEuOCwxMiwxNy45LDEyLDE0VjZINHpcXFwiIC8+PC9nPjxnPjxwYXRoIGQ9XFxcIk00Mi4xLDMwLjdsMi0zLjFDNDYuNiwyMy41LDQ4LDE4LjgsNDgsMTRWNGgxMnYxYzAsMTAuMS01LjYsMTkuMy0xNC42LDI0TDQyLjEsMzAuN3ogTTUwLDZ2OGMwLDMuOS0wLjgsNy44LTIuNSwxMS4zICAgICBDNTMuOCwyMC45LDU3LjcsMTMuOCw1OCw2SDUwelxcXCIgLz48L2c+PC9nPjxnPjxwYXRoIGQ9XFxcIk0zOS4zLDI5LjJsLTguMy02bC04LjMsNmwzLjItOS43bC04LjMtNmgxMC4yTDMxLDMuOGwzLjIsOS43aDEwLjJsLTguMyw2TDM5LjMsMjkuMnogTTMxLDIwLjdsNC41LDMuMmwtMS43LTUuMmw0LjUtMy4yICAgIGgtNS41TDMxLDEwLjJsLTEuNyw1LjJoLTUuNWw0LjUsMy4yTDI2LjUsMjRMMzEsMjAuN3pcXFwiIC8+PC9nPjwvZz48L3N5bWJvbD5cIlxufSk7XG52YXIgcmVzdWx0ID0gc3ByaXRlLmFkZChzeW1ib2wpO1xuZXhwb3J0IGRlZmF1bHQgc3ltYm9sXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvaW1hZ2VzL2ljb25zL3RvcC5zdmdcbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBOzs7OztBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDMVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDN1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDeHlCQTs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDNUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN2TEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNoTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuQkE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBTkE7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDdkJBOzs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFkQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDaEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ25EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNwRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNuRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDbkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDbkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzlFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDeERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3IxQkE7QUFDQTtBQS9DQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUxBO0FBQ0E7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQVRBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN2REE7QUFDQTtBQUhBO0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7O0FDakJBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7QUNaQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNUQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNUQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNUQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNUQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNUQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNUQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNUQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNUQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNUQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNUQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNUQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBIiwic291cmNlUm9vdCI6IiJ9