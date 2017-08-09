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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 1 */
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 2 */
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(4);

var _svg = __webpack_require__(5);

var _svg2 = _interopRequireDefault(_svg);

var _autocomplete = __webpack_require__(18);

var _autocomplete2 = _interopRequireDefault(_autocomplete);

var _bling = __webpack_require__(19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var input = document.getElementById('address');
var lng = document.getElementById('lng');
var lat = document.getElementById('lat');

(0, _autocomplete2.default)(input, lat, lng);

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _add = __webpack_require__(6);

var _add2 = _interopRequireDefault(_add);

var _cog = __webpack_require__(7);

var _cog2 = _interopRequireDefault(_cog);

var _heart = __webpack_require__(8);

var _heart2 = _interopRequireDefault(_heart);

var _logo = __webpack_require__(9);

var _logo2 = _interopRequireDefault(_logo);

var _logout = __webpack_require__(10);

var _logout2 = _interopRequireDefault(_logout);

var _map = __webpack_require__(11);

var _map2 = _interopRequireDefault(_map);

var _pencil = __webpack_require__(12);

var _pencil2 = _interopRequireDefault(_pencil);

var _review = __webpack_require__(13);

var _review2 = _interopRequireDefault(_review);

var _store = __webpack_require__(14);

var _store2 = _interopRequireDefault(_store);

var _store3 = __webpack_require__(15);

var _store4 = _interopRequireDefault(_store3);

var _tag = __webpack_require__(16);

var _tag2 = _interopRequireDefault(_tag);

var _top = __webpack_require__(17);

var _top2 = _interopRequireDefault(_top);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__(1);
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
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__(1);
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
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__(1);
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
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__(1);
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
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__(1);
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
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__(1);
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
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__(1);
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
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__(1);
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
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__(1);
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
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__(1);
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
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__(1);
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
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__);


var symbol = new __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default.a({
  "id": "top",
  "use": "top-usage",
  "viewBox": "0 0 62 62",
  "content": "<symbol viewBox=\"0 0 62 62\" id=\"top\"><g><g><path d=\"M31,39.1c-1.9,0-3.8-0.5-5.5-1.5C17.2,32.7,12,23.7,12,14V0h38v14c0,9.6-5.2,18.7-13.5,23.6C34.8,38.6,32.9,39.1,31,39.1z     M14,2v12c0,8.9,4.8,17.3,12.5,21.8c2.8,1.6,6.2,1.6,9,0C43.2,31.3,48,23,48,14V2H14z\" /></g><g><path d=\"M43,54H19v-6h24V54z M21,52h20v-2H21V52z\" /></g><g><path d=\"M45,62H17V52h28V62z M19,60h24v-6H19V60z\" /></g><g><path d=\"M35,50h-8V36.2l1.3,0.4c1.8,0.6,3.6,0.6,5.4,0l1.3-0.4V50z M29,48h4v-9.1c-1.3,0.2-2.7,0.2-4,0V48z\" /></g><g><g><path d=\"M19.9,30.7L16.6,29C7.6,24.3,2,15.1,2,5V4h12v10c0,4.8,1.4,9.5,3.9,13.6L19.9,30.7z M4,6c0.3,7.8,4.2,14.9,10.4,19.3     C12.8,21.8,12,17.9,12,14V6H4z\" /></g><g><path d=\"M42.1,30.7l2-3.1C46.6,23.5,48,18.8,48,14V4h12v1c0,10.1-5.6,19.3-14.6,24L42.1,30.7z M50,6v8c0,3.9-0.8,7.8-2.5,11.3     C53.8,20.9,57.7,13.8,58,6H50z\" /></g></g><g><path d=\"M39.3,29.2l-8.3-6l-8.3,6l3.2-9.7l-8.3-6h10.2L31,3.8l3.2,9.7h10.2l-8.3,6L39.3,29.2z M31,20.7l4.5,3.2l-1.7-5.2l4.5-3.2    h-5.5L31,10.2l-1.7,5.2h-5.5l4.5,3.2L26.5,24L31,20.7z\" /></g></g></symbol>"
});
var result = __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 18 */
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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// based on https://gist.github.com/paulirish/12fb951a8b893a454b32

var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

Node.prototype.on = window.on = function (name, fn) {
  this.addEventListener(name, fn);
};

NodeList.prototype.__proto__ = Array.prototype; // eslint-disable-line

NodeList.prototype.on = NodeList.prototype.addEventListener = function (name, fn) {
  this.forEach(function (elem) {
    elem.on(name, fn);
  });
};

exports.$ = $;
exports.$$ = $$;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwLmJ1bmRsZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA4MzRhMmJhZDYwNzRlYjJiOGZiZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3ZnLWJha2VyLXJ1bnRpbWUvYnJvd3Nlci1zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N2Zy1zcHJpdGUtbG9hZGVyL3J1bnRpbWUvYnJvd3Nlci1zcHJpdGUuYnVpbGQuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vcHVibGljL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvc3R5bGUvc3R5bGUuc3R5bCIsIndlYnBhY2s6Ly8vcHVibGljL2pzL3N2Zy5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2VzL2ljb25zL2FkZC5zdmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlcy9pY29ucy9jb2cuc3ZnIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZXMvaWNvbnMvaGVhcnQuc3ZnIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZXMvaWNvbnMvbG9nby5zdmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlcy9pY29ucy9sb2dvdXQuc3ZnIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZXMvaWNvbnMvbWFwLnN2ZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2VzL2ljb25zL3BlbmNpbC5zdmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlcy9pY29ucy9yZXZpZXcuc3ZnIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZXMvaWNvbnMvc3RvcmUuc3ZnIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZXMvaWNvbnMvc3RvcmUyLnN2ZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2VzL2ljb25zL3RhZy5zdmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlcy9pY29ucy90b3Auc3ZnIiwid2VicGFjazovLy9wdWJsaWMvanMvbW9kdWxlcy9hdXRvY29tcGxldGUuanMiLCJ3ZWJwYWNrOi8vL3B1YmxpYy9qcy9tb2R1bGVzL2JsaW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDgzNGEyYmFkNjA3NGViMmI4ZmJlIiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcblx0dHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOlxuXHR0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxuXHQoZ2xvYmFsLkJyb3dzZXJTcHJpdGVTeW1ib2wgPSBmYWN0b3J5KCkpO1xufSh0aGlzLCAoZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7XG5cbnZhciBTcHJpdGVTeW1ib2wgPSBmdW5jdGlvbiBTcHJpdGVTeW1ib2wocmVmKSB7XG4gIHZhciBpZCA9IHJlZi5pZDtcbiAgdmFyIHZpZXdCb3ggPSByZWYudmlld0JveDtcbiAgdmFyIGNvbnRlbnQgPSByZWYuY29udGVudDtcblxuICB0aGlzLmlkID0gaWQ7XG4gIHRoaXMudmlld0JveCA9IHZpZXdCb3g7XG4gIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG59O1xuXG4vKipcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuU3ByaXRlU3ltYm9sLnByb3RvdHlwZS5zdHJpbmdpZnkgPSBmdW5jdGlvbiBzdHJpbmdpZnkgKCkge1xuICByZXR1cm4gdGhpcy5jb250ZW50O1xufTtcblxuLyoqXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cblNwcml0ZVN5bWJvbC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyAoKSB7XG4gIHJldHVybiB0aGlzLnN0cmluZ2lmeSgpO1xufTtcblxuU3ByaXRlU3ltYm9sLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gZGVzdHJveSAoKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgWydpZCcsICd2aWV3Qm94JywgJ2NvbnRlbnQnXS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wKSB7IHJldHVybiBkZWxldGUgdGhpcyQxW3Byb3BdOyB9KTtcbn07XG5cbnZhciBhcnJheUZyb20gPSBmdW5jdGlvbiAoYXJyYXlMaWtlKSB7XG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcnJheUxpa2UsIDApO1xufTtcblxudmFyIHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcblxudmFyIGJyb3dzZXIgPSB7XG4gIGlzQ2hyb21lOiAvY2hyb21lL2kudGVzdCh1YSksXG4gIGlzRmlyZWZveDogL2ZpcmVmb3gvaS50ZXN0KHVhKSxcbiAgaXNJRTogL21zaWUvaS50ZXN0KHVhKSxcbiAgaXNFZGdlOiAvZWRnZS9pLnRlc3QodWEpXG59O1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0geyp9IGRhdGFcbiAqL1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBbdXJsXSBJZiBub3QgcHJvdmlkZWQgLSBjdXJyZW50IFVSTCB3aWxsIGJlIHVzZWRcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuXG4vKiBnbG9iYWwgYW5ndWxhciAqL1xuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lXG4gKi9cblxudmFyIGRlZmF1bHRTZWxlY3RvciA9ICdsaW5lYXJHcmFkaWVudCwgcmFkaWFsR3JhZGllbnQsIHBhdHRlcm4nO1xuXG4vKipcbiAqIEBwYXJhbSB7RWxlbWVudH0gc3ZnXG4gKiBAcGFyYW0ge3N0cmluZ30gW3NlbGVjdG9yXVxuICogQHJldHVybiB7RWxlbWVudH1cbiAqL1xudmFyIG1vdmVHcmFkaWVudHNPdXRzaWRlU3ltYm9sID0gZnVuY3Rpb24gKHN2Zywgc2VsZWN0b3IpIHtcbiAgaWYgKCBzZWxlY3RvciA9PT0gdm9pZCAwICkgc2VsZWN0b3IgPSBkZWZhdWx0U2VsZWN0b3I7XG5cbiAgYXJyYXlGcm9tKHN2Zy5xdWVyeVNlbGVjdG9yQWxsKCdzeW1ib2wnKSkuZm9yRWFjaChmdW5jdGlvbiAoc3ltYm9sKSB7XG4gICAgYXJyYXlGcm9tKHN5bWJvbC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSkuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgc3ltYm9sLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5vZGUsIHN5bWJvbCk7XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gc3ZnO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge09iamVjdH0gYXR0cnNcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xudmFyIG9iamVjdFRvQXR0cnNTdHJpbmcgPSBmdW5jdGlvbiAoYXR0cnMpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKGF0dHJzKS5tYXAoZnVuY3Rpb24gKGF0dHIpIHtcbiAgICB2YXIgdmFsdWUgPSBhdHRyc1thdHRyXS50b1N0cmluZygpLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKTtcbiAgICByZXR1cm4gKGF0dHIgKyBcIj1cXFwiXCIgKyB2YWx1ZSArIFwiXFxcIlwiKTtcbiAgfSkuam9pbignICcpO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gY29udGVudFxuICogQHJldHVybiB7RWxlbWVudH1cbiAqL1xudmFyIHBhcnNlID0gZnVuY3Rpb24gKGNvbnRlbnQpIHtcbiAgdmFyIGhhc0ltcG9ydE5vZGUgPSAhIWRvY3VtZW50LmltcG9ydE5vZGU7XG4gIHZhciBkb2MgPSBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKGNvbnRlbnQsICdpbWFnZS9zdmcreG1sJykuZG9jdW1lbnRFbGVtZW50O1xuXG4gIC8qKlxuICAgKiBGaXggZm9yIGJyb3dzZXIgd2hpY2ggYXJlIHRocm93aW5nIFdyb25nRG9jdW1lbnRFcnJvclxuICAgKiBpZiB5b3UgaW5zZXJ0IGFuIGVsZW1lbnQgd2hpY2ggaXMgbm90IHBhcnQgb2YgdGhlIGRvY3VtZW50XG4gICAqIEBzZWUgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzk4NjUxOS80NjI0NDAzXG4gICAqL1xuICBpZiAoaGFzSW1wb3J0Tm9kZSkge1xuICAgIHJldHVybiBkb2N1bWVudC5pbXBvcnROb2RlKGRvYywgdHJ1ZSk7XG4gIH1cblxuICByZXR1cm4gZG9jO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge05vZGVMaXN0fE5vZGV9IG5vZGVzXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtjbG9uZT10cnVlXVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5cbnZhciBjb21tb25qc0dsb2JhbCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDoge307XG5cblxuXG5cblxuZnVuY3Rpb24gY3JlYXRlQ29tbW9uanNNb2R1bGUoZm4sIG1vZHVsZSkge1xuXHRyZXR1cm4gbW9kdWxlID0geyBleHBvcnRzOiB7fSB9LCBmbihtb2R1bGUsIG1vZHVsZS5leHBvcnRzKSwgbW9kdWxlLmV4cG9ydHM7XG59XG5cbnZhciBuYW1lc3BhY2VzXzEgPSBjcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbiAobW9kdWxlLCBleHBvcnRzKSB7XG52YXIgbmFtZXNwYWNlcyA9IHtcbiAgc3ZnOiB7XG4gICAgbmFtZTogJ3htbG5zJyxcbiAgICB1cmk6ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcbiAgfSxcbiAgeGxpbms6IHtcbiAgICBuYW1lOiAneG1sbnM6eGxpbmsnLFxuICAgIHVyaTogJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnXG4gIH1cbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IG5hbWVzcGFjZXM7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbn0pO1xuXG4vKipcbiAqIExpc3Qgb2YgU1ZHIGF0dHJpYnV0ZXMgdG8gdXBkYXRlIHVybCgpIHRhcmdldCBpbiB0aGVtXG4gKi9cbnZhciBhdHRMaXN0ID0gW1xuICAnY2xpcFBhdGgnLFxuICAnY29sb3JQcm9maWxlJyxcbiAgJ3NyYycsXG4gICdjdXJzb3InLFxuICAnZmlsbCcsXG4gICdmaWx0ZXInLFxuICAnbWFya2VyJyxcbiAgJ21hcmtlclN0YXJ0JyxcbiAgJ21hcmtlck1pZCcsXG4gICdtYXJrZXJFbmQnLFxuICAnbWFzaycsXG4gICdzdHJva2UnLFxuICAnc3R5bGUnXG5dO1xuXG52YXIgYXR0U2VsZWN0b3IgPSBhdHRMaXN0Lm1hcChmdW5jdGlvbiAoYXR0cikgeyByZXR1cm4gKFwiW1wiICsgYXR0ciArIFwiXVwiKTsgfSkuam9pbignLCcpO1xuXG4vKipcbiAqIFVwZGF0ZSBVUkxzIGluIHN2ZyBpbWFnZSAobGlrZSBgZmlsbD1cInVybCguLi4pXCJgKSBhbmQgdXBkYXRlIHJlZmVyZW5jaW5nIGVsZW1lbnRzXG4gKiBAcGFyYW0ge0VsZW1lbnR9IHN2Z1xuICogQHBhcmFtIHtOb2RlTGlzdH0gcmVmZXJlbmNlc1xuICogQHBhcmFtIHtzdHJpbmd8UmVnRXhwfSBzdGFydHNXaXRoXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVwbGFjZVdpdGhcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKlxuICogQGV4YW1wbGVcbiAqIGNvbnN0IHNwcml0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3N2Zy5zcHJpdGUnKTtcbiAqIGNvbnN0IHVzYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3VzZScpO1xuICogdXBkYXRlVXJscyhzcHJpdGUsIHVzYWdlcywgJyMnLCAncHJlZml4IycpO1xuICovXG5cbnZhciBpbmRleCA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUsIGV4cG9ydHMpIHtcbihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuICAgIGlmICh0eXBlb2YgdW5kZWZpbmVkID09PSAnZnVuY3Rpb24nICYmIHVuZGVmaW5lZC5hbWQpIHtcbiAgICAgICAgdW5kZWZpbmVkKGZhY3RvcnkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICAgIH1cbn0oY29tbW9uanNHbG9iYWwsIGZ1bmN0aW9uICgpIHtcblxuZnVuY3Rpb24gaXNNZXJnZWFibGVPYmplY3QodmFsKSB7XG4gICAgdmFyIG5vbk51bGxPYmplY3QgPSB2YWwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCc7XG5cbiAgICByZXR1cm4gbm9uTnVsbE9iamVjdFxuICAgICAgICAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsKSAhPT0gJ1tvYmplY3QgUmVnRXhwXSdcbiAgICAgICAgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbCkgIT09ICdbb2JqZWN0IERhdGVdJ1xufVxuXG5mdW5jdGlvbiBlbXB0eVRhcmdldCh2YWwpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWwpID8gW10gOiB7fVxufVxuXG5mdW5jdGlvbiBjbG9uZUlmTmVjZXNzYXJ5KHZhbHVlLCBvcHRpb25zQXJndW1lbnQpIHtcbiAgICB2YXIgY2xvbmUgPSBvcHRpb25zQXJndW1lbnQgJiYgb3B0aW9uc0FyZ3VtZW50LmNsb25lID09PSB0cnVlO1xuICAgIHJldHVybiAoY2xvbmUgJiYgaXNNZXJnZWFibGVPYmplY3QodmFsdWUpKSA/IGRlZXBtZXJnZShlbXB0eVRhcmdldCh2YWx1ZSksIHZhbHVlLCBvcHRpb25zQXJndW1lbnQpIDogdmFsdWVcbn1cblxuZnVuY3Rpb24gZGVmYXVsdEFycmF5TWVyZ2UodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnNBcmd1bWVudCkge1xuICAgIHZhciBkZXN0aW5hdGlvbiA9IHRhcmdldC5zbGljZSgpO1xuICAgIHNvdXJjZS5mb3JFYWNoKGZ1bmN0aW9uKGUsIGkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkZXN0aW5hdGlvbltpXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uW2ldID0gY2xvbmVJZk5lY2Vzc2FyeShlLCBvcHRpb25zQXJndW1lbnQpO1xuICAgICAgICB9IGVsc2UgaWYgKGlzTWVyZ2VhYmxlT2JqZWN0KGUpKSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbltpXSA9IGRlZXBtZXJnZSh0YXJnZXRbaV0sIGUsIG9wdGlvbnNBcmd1bWVudCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0LmluZGV4T2YoZSkgPT09IC0xKSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbi5wdXNoKGNsb25lSWZOZWNlc3NhcnkoZSwgb3B0aW9uc0FyZ3VtZW50KSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZGVzdGluYXRpb25cbn1cblxuZnVuY3Rpb24gbWVyZ2VPYmplY3QodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnNBcmd1bWVudCkge1xuICAgIHZhciBkZXN0aW5hdGlvbiA9IHt9O1xuICAgIGlmIChpc01lcmdlYWJsZU9iamVjdCh0YXJnZXQpKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHRhcmdldCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbltrZXldID0gY2xvbmVJZk5lY2Vzc2FyeSh0YXJnZXRba2V5XSwgb3B0aW9uc0FyZ3VtZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGlmICghaXNNZXJnZWFibGVPYmplY3Qoc291cmNlW2tleV0pIHx8ICF0YXJnZXRba2V5XSkge1xuICAgICAgICAgICAgZGVzdGluYXRpb25ba2V5XSA9IGNsb25lSWZOZWNlc3Nhcnkoc291cmNlW2tleV0sIG9wdGlvbnNBcmd1bWVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbltrZXldID0gZGVlcG1lcmdlKHRhcmdldFtrZXldLCBzb3VyY2Vba2V5XSwgb3B0aW9uc0FyZ3VtZW50KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBkZXN0aW5hdGlvblxufVxuXG5mdW5jdGlvbiBkZWVwbWVyZ2UodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnNBcmd1bWVudCkge1xuICAgIHZhciBhcnJheSA9IEFycmF5LmlzQXJyYXkoc291cmNlKTtcbiAgICB2YXIgb3B0aW9ucyA9IG9wdGlvbnNBcmd1bWVudCB8fCB7IGFycmF5TWVyZ2U6IGRlZmF1bHRBcnJheU1lcmdlIH07XG4gICAgdmFyIGFycmF5TWVyZ2UgPSBvcHRpb25zLmFycmF5TWVyZ2UgfHwgZGVmYXVsdEFycmF5TWVyZ2U7XG5cbiAgICBpZiAoYXJyYXkpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodGFyZ2V0KSA/IGFycmF5TWVyZ2UodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnNBcmd1bWVudCkgOiBjbG9uZUlmTmVjZXNzYXJ5KHNvdXJjZSwgb3B0aW9uc0FyZ3VtZW50KVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBtZXJnZU9iamVjdCh0YXJnZXQsIHNvdXJjZSwgb3B0aW9uc0FyZ3VtZW50KVxuICAgIH1cbn1cblxuZGVlcG1lcmdlLmFsbCA9IGZ1bmN0aW9uIGRlZXBtZXJnZUFsbChhcnJheSwgb3B0aW9uc0FyZ3VtZW50KSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5KSB8fCBhcnJheS5sZW5ndGggPCAyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZmlyc3QgYXJndW1lbnQgc2hvdWxkIGJlIGFuIGFycmF5IHdpdGggYXQgbGVhc3QgdHdvIGVsZW1lbnRzJylcbiAgICB9XG5cbiAgICAvLyB3ZSBhcmUgc3VyZSB0aGVyZSBhcmUgYXQgbGVhc3QgMiB2YWx1ZXMsIHNvIGl0IGlzIHNhZmUgdG8gaGF2ZSBubyBpbml0aWFsIHZhbHVlXG4gICAgcmV0dXJuIGFycmF5LnJlZHVjZShmdW5jdGlvbihwcmV2LCBuZXh0KSB7XG4gICAgICAgIHJldHVybiBkZWVwbWVyZ2UocHJldiwgbmV4dCwgb3B0aW9uc0FyZ3VtZW50KVxuICAgIH0pXG59O1xuXG5yZXR1cm4gZGVlcG1lcmdlXG5cbn0pKTtcbn0pO1xuXG52YXIgc3ZnID0gbmFtZXNwYWNlc18xLnN2ZztcbnZhciB4bGluayA9IG5hbWVzcGFjZXNfMS54bGluaztcblxudmFyIGRlZmF1bHRBdHRycyA9IHt9O1xuZGVmYXVsdEF0dHJzW3N2Zy5uYW1lXSA9IHN2Zy51cmk7XG5kZWZhdWx0QXR0cnNbeGxpbmsubmFtZV0gPSB4bGluay51cmk7XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb250ZW50XVxuICogQHBhcmFtIHtPYmplY3R9IFthdHRyaWJ1dGVzXVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG52YXIgd3JhcEluU3ZnU3RyaW5nID0gZnVuY3Rpb24gKGNvbnRlbnQsIGF0dHJpYnV0ZXMpIHtcbiAgaWYgKCBjb250ZW50ID09PSB2b2lkIDAgKSBjb250ZW50ID0gJyc7XG5cbiAgdmFyIGF0dHJzID0gaW5kZXgoZGVmYXVsdEF0dHJzLCBhdHRyaWJ1dGVzIHx8IHt9KTtcbiAgdmFyIGF0dHJzUmVuZGVyZWQgPSBvYmplY3RUb0F0dHJzU3RyaW5nKGF0dHJzKTtcbiAgcmV0dXJuIChcIjxzdmcgXCIgKyBhdHRyc1JlbmRlcmVkICsgXCI+XCIgKyBjb250ZW50ICsgXCI8L3N2Zz5cIik7XG59O1xuXG52YXIgQnJvd3NlclNwcml0ZVN5bWJvbCA9IChmdW5jdGlvbiAoU3ByaXRlU3ltYm9sJCQxKSB7XG4gIGZ1bmN0aW9uIEJyb3dzZXJTcHJpdGVTeW1ib2wgKCkge1xuICAgIFNwcml0ZVN5bWJvbCQkMS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgaWYgKCBTcHJpdGVTeW1ib2wkJDEgKSBCcm93c2VyU3ByaXRlU3ltYm9sLl9fcHJvdG9fXyA9IFNwcml0ZVN5bWJvbCQkMTtcbiAgQnJvd3NlclNwcml0ZVN5bWJvbC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBTcHJpdGVTeW1ib2wkJDEgJiYgU3ByaXRlU3ltYm9sJCQxLnByb3RvdHlwZSApO1xuICBCcm93c2VyU3ByaXRlU3ltYm9sLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEJyb3dzZXJTcHJpdGVTeW1ib2w7XG5cbiAgdmFyIHByb3RvdHlwZUFjY2Vzc29ycyA9IHsgaXNNb3VudGVkOiB7fSB9O1xuXG4gIHByb3RvdHlwZUFjY2Vzc29ycy5pc01vdW50ZWQuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAhIXRoaXMubm9kZTtcbiAgfTtcblxuICBCcm93c2VyU3ByaXRlU3ltYm9sLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gZGVzdHJveSAoKSB7XG4gICAgaWYgKHRoaXMuaXNNb3VudGVkKSB7XG4gICAgICB0aGlzLnVubW91bnQoKTtcbiAgICB9XG4gICAgU3ByaXRlU3ltYm9sJCQxLnByb3RvdHlwZS5kZXN0cm95LmNhbGwodGhpcyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RWxlbWVudHxzdHJpbmd9IHRhcmdldFxuICAgKiBAcmV0dXJuIHtFbGVtZW50fVxuICAgKi9cbiAgQnJvd3NlclNwcml0ZVN5bWJvbC5wcm90b3R5cGUubW91bnQgPSBmdW5jdGlvbiBtb3VudCAodGFyZ2V0KSB7XG4gICAgaWYgKHRoaXMuaXNNb3VudGVkKSB7XG4gICAgICByZXR1cm4gdGhpcy5ub2RlO1xuICAgIH1cblxuICAgIHZhciBtb3VudFRhcmdldCA9IHR5cGVvZiB0YXJnZXQgPT09ICdzdHJpbmcnID8gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpIDogdGFyZ2V0O1xuICAgIHZhciBub2RlID0gdGhpcy5yZW5kZXIoKTtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuXG4gICAgbW91bnRUYXJnZXQuYXBwZW5kQ2hpbGQobm9kZSk7XG5cbiAgICAvLyBUT0RPIGNhY2hlIG1vdmVkIG5vZGVzIHNvbWV3aGVyZSBhbmQgY2xlYW51cCBvbiBkZXN0cm95KClcbiAgICBpZiAoYnJvd3Nlci5pc0ZpcmVmb3gpIHtcbiAgICAgIG1vdmVHcmFkaWVudHNPdXRzaWRlU3ltYm9sKG1vdW50VGFyZ2V0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfTtcblxuICAvKipcbiAgICogQHJldHVybiB7RWxlbWVudH1cbiAgICovXG4gIEJyb3dzZXJTcHJpdGVTeW1ib2wucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlciAoKSB7XG4gICAgdmFyIGNvbnRlbnQgPSB0aGlzLnN0cmluZ2lmeSgpO1xuICAgIHJldHVybiBwYXJzZSh3cmFwSW5TdmdTdHJpbmcoY29udGVudCkpLmNoaWxkTm9kZXNbMF07XG4gIH07XG5cbiAgQnJvd3NlclNwcml0ZVN5bWJvbC5wcm90b3R5cGUudW5tb3VudCA9IGZ1bmN0aW9uIHVubW91bnQgKCkge1xuICAgIHRoaXMubm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMubm9kZSk7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoIEJyb3dzZXJTcHJpdGVTeW1ib2wucHJvdG90eXBlLCBwcm90b3R5cGVBY2Nlc3NvcnMgKTtcblxuICByZXR1cm4gQnJvd3NlclNwcml0ZVN5bWJvbDtcbn0oU3ByaXRlU3ltYm9sKSk7XG5cbnJldHVybiBCcm93c2VyU3ByaXRlU3ltYm9sO1xuXG59KSkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc3ZnLWJha2VyLXJ1bnRpbWUvYnJvd3Nlci1zeW1ib2wuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcblx0dHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOlxuXHR0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxuXHQoZ2xvYmFsLkJyb3dzZXJTcHJpdGUgPSBmYWN0b3J5KCkpO1xufSh0aGlzLCAoZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7XG5cbnZhciBjb21tb25qc0dsb2JhbCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDoge307XG5cblxuXG5cblxuZnVuY3Rpb24gY3JlYXRlQ29tbW9uanNNb2R1bGUoZm4sIG1vZHVsZSkge1xuXHRyZXR1cm4gbW9kdWxlID0geyBleHBvcnRzOiB7fSB9LCBmbihtb2R1bGUsIG1vZHVsZS5leHBvcnRzKSwgbW9kdWxlLmV4cG9ydHM7XG59XG5cbnZhciBpbmRleCA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUsIGV4cG9ydHMpIHtcbihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuICAgIGlmICh0eXBlb2YgdW5kZWZpbmVkID09PSAnZnVuY3Rpb24nICYmIHVuZGVmaW5lZC5hbWQpIHtcbiAgICAgICAgdW5kZWZpbmVkKGZhY3RvcnkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICAgIH1cbn0oY29tbW9uanNHbG9iYWwsIGZ1bmN0aW9uICgpIHtcblxuZnVuY3Rpb24gaXNNZXJnZWFibGVPYmplY3QodmFsKSB7XG4gICAgdmFyIG5vbk51bGxPYmplY3QgPSB2YWwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCc7XG5cbiAgICByZXR1cm4gbm9uTnVsbE9iamVjdFxuICAgICAgICAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsKSAhPT0gJ1tvYmplY3QgUmVnRXhwXSdcbiAgICAgICAgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbCkgIT09ICdbb2JqZWN0IERhdGVdJ1xufVxuXG5mdW5jdGlvbiBlbXB0eVRhcmdldCh2YWwpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWwpID8gW10gOiB7fVxufVxuXG5mdW5jdGlvbiBjbG9uZUlmTmVjZXNzYXJ5KHZhbHVlLCBvcHRpb25zQXJndW1lbnQpIHtcbiAgICB2YXIgY2xvbmUgPSBvcHRpb25zQXJndW1lbnQgJiYgb3B0aW9uc0FyZ3VtZW50LmNsb25lID09PSB0cnVlO1xuICAgIHJldHVybiAoY2xvbmUgJiYgaXNNZXJnZWFibGVPYmplY3QodmFsdWUpKSA/IGRlZXBtZXJnZShlbXB0eVRhcmdldCh2YWx1ZSksIHZhbHVlLCBvcHRpb25zQXJndW1lbnQpIDogdmFsdWVcbn1cblxuZnVuY3Rpb24gZGVmYXVsdEFycmF5TWVyZ2UodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnNBcmd1bWVudCkge1xuICAgIHZhciBkZXN0aW5hdGlvbiA9IHRhcmdldC5zbGljZSgpO1xuICAgIHNvdXJjZS5mb3JFYWNoKGZ1bmN0aW9uKGUsIGkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkZXN0aW5hdGlvbltpXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uW2ldID0gY2xvbmVJZk5lY2Vzc2FyeShlLCBvcHRpb25zQXJndW1lbnQpO1xuICAgICAgICB9IGVsc2UgaWYgKGlzTWVyZ2VhYmxlT2JqZWN0KGUpKSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbltpXSA9IGRlZXBtZXJnZSh0YXJnZXRbaV0sIGUsIG9wdGlvbnNBcmd1bWVudCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0LmluZGV4T2YoZSkgPT09IC0xKSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbi5wdXNoKGNsb25lSWZOZWNlc3NhcnkoZSwgb3B0aW9uc0FyZ3VtZW50KSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZGVzdGluYXRpb25cbn1cblxuZnVuY3Rpb24gbWVyZ2VPYmplY3QodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnNBcmd1bWVudCkge1xuICAgIHZhciBkZXN0aW5hdGlvbiA9IHt9O1xuICAgIGlmIChpc01lcmdlYWJsZU9iamVjdCh0YXJnZXQpKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHRhcmdldCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbltrZXldID0gY2xvbmVJZk5lY2Vzc2FyeSh0YXJnZXRba2V5XSwgb3B0aW9uc0FyZ3VtZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGlmICghaXNNZXJnZWFibGVPYmplY3Qoc291cmNlW2tleV0pIHx8ICF0YXJnZXRba2V5XSkge1xuICAgICAgICAgICAgZGVzdGluYXRpb25ba2V5XSA9IGNsb25lSWZOZWNlc3Nhcnkoc291cmNlW2tleV0sIG9wdGlvbnNBcmd1bWVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbltrZXldID0gZGVlcG1lcmdlKHRhcmdldFtrZXldLCBzb3VyY2Vba2V5XSwgb3B0aW9uc0FyZ3VtZW50KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBkZXN0aW5hdGlvblxufVxuXG5mdW5jdGlvbiBkZWVwbWVyZ2UodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnNBcmd1bWVudCkge1xuICAgIHZhciBhcnJheSA9IEFycmF5LmlzQXJyYXkoc291cmNlKTtcbiAgICB2YXIgb3B0aW9ucyA9IG9wdGlvbnNBcmd1bWVudCB8fCB7IGFycmF5TWVyZ2U6IGRlZmF1bHRBcnJheU1lcmdlIH07XG4gICAgdmFyIGFycmF5TWVyZ2UgPSBvcHRpb25zLmFycmF5TWVyZ2UgfHwgZGVmYXVsdEFycmF5TWVyZ2U7XG5cbiAgICBpZiAoYXJyYXkpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodGFyZ2V0KSA/IGFycmF5TWVyZ2UodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnNBcmd1bWVudCkgOiBjbG9uZUlmTmVjZXNzYXJ5KHNvdXJjZSwgb3B0aW9uc0FyZ3VtZW50KVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBtZXJnZU9iamVjdCh0YXJnZXQsIHNvdXJjZSwgb3B0aW9uc0FyZ3VtZW50KVxuICAgIH1cbn1cblxuZGVlcG1lcmdlLmFsbCA9IGZ1bmN0aW9uIGRlZXBtZXJnZUFsbChhcnJheSwgb3B0aW9uc0FyZ3VtZW50KSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5KSB8fCBhcnJheS5sZW5ndGggPCAyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZmlyc3QgYXJndW1lbnQgc2hvdWxkIGJlIGFuIGFycmF5IHdpdGggYXQgbGVhc3QgdHdvIGVsZW1lbnRzJylcbiAgICB9XG5cbiAgICAvLyB3ZSBhcmUgc3VyZSB0aGVyZSBhcmUgYXQgbGVhc3QgMiB2YWx1ZXMsIHNvIGl0IGlzIHNhZmUgdG8gaGF2ZSBubyBpbml0aWFsIHZhbHVlXG4gICAgcmV0dXJuIGFycmF5LnJlZHVjZShmdW5jdGlvbihwcmV2LCBuZXh0KSB7XG4gICAgICAgIHJldHVybiBkZWVwbWVyZ2UocHJldiwgbmV4dCwgb3B0aW9uc0FyZ3VtZW50KVxuICAgIH0pXG59O1xuXG5yZXR1cm4gZGVlcG1lcmdlXG5cbn0pKTtcbn0pO1xuXG4vLyAgICAgIFxuLy8gQW4gZXZlbnQgaGFuZGxlciBjYW4gdGFrZSBhbiBvcHRpb25hbCBldmVudCBhcmd1bWVudFxuLy8gYW5kIHNob3VsZCBub3QgcmV0dXJuIGEgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuLy8gQW4gYXJyYXkgb2YgYWxsIGN1cnJlbnRseSByZWdpc3RlcmVkIGV2ZW50IGhhbmRsZXJzIGZvciBhIHR5cGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4vLyBBIG1hcCBvZiBldmVudCB0eXBlcyBhbmQgdGhlaXIgY29ycmVzcG9uZGluZyBldmVudCBoYW5kbGVycy5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgXG5cbi8qKiBNaXR0OiBUaW55ICh+MjAwYikgZnVuY3Rpb25hbCBldmVudCBlbWl0dGVyIC8gcHVic3ViLlxuICogIEBuYW1lIG1pdHRcbiAqICBAcmV0dXJucyB7TWl0dH1cbiAqL1xuZnVuY3Rpb24gbWl0dChhbGwgICAgICAgICAgICAgICAgICkge1xuXHRhbGwgPSBhbGwgfHwgT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuXHRyZXR1cm4ge1xuXHRcdC8qKlxuXHRcdCAqIFJlZ2lzdGVyIGFuIGV2ZW50IGhhbmRsZXIgZm9yIHRoZSBnaXZlbiB0eXBlLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtICB7U3RyaW5nfSB0eXBlXHRUeXBlIG9mIGV2ZW50IHRvIGxpc3RlbiBmb3IsIG9yIGBcIipcImAgZm9yIGFsbCBldmVudHNcblx0XHQgKiBAcGFyYW0gIHtGdW5jdGlvbn0gaGFuZGxlciBGdW5jdGlvbiB0byBjYWxsIGluIHJlc3BvbnNlIHRvIGdpdmVuIGV2ZW50XG5cdFx0ICogQG1lbWJlck9mIG1pdHRcblx0XHQgKi9cblx0XHRvbjogZnVuY3Rpb24gb24odHlwZSAgICAgICAgLCBoYW5kbGVyICAgICAgICAgICAgICApIHtcblx0XHRcdChhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKTtcblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogUmVtb3ZlIGFuIGV2ZW50IGhhbmRsZXIgZm9yIHRoZSBnaXZlbiB0eXBlLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtICB7U3RyaW5nfSB0eXBlXHRUeXBlIG9mIGV2ZW50IHRvIHVucmVnaXN0ZXIgYGhhbmRsZXJgIGZyb20sIG9yIGBcIipcImBcblx0XHQgKiBAcGFyYW0gIHtGdW5jdGlvbn0gaGFuZGxlciBIYW5kbGVyIGZ1bmN0aW9uIHRvIHJlbW92ZVxuXHRcdCAqIEBtZW1iZXJPZiBtaXR0XG5cdFx0ICovXG5cdFx0b2ZmOiBmdW5jdGlvbiBvZmYodHlwZSAgICAgICAgLCBoYW5kbGVyICAgICAgICAgICAgICApIHtcblx0XHRcdGlmIChhbGxbdHlwZV0pIHtcblx0XHRcdFx0YWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIEludm9rZSBhbGwgaGFuZGxlcnMgZm9yIHRoZSBnaXZlbiB0eXBlLlxuXHRcdCAqIElmIHByZXNlbnQsIGBcIipcImAgaGFuZGxlcnMgYXJlIGludm9rZWQgYWZ0ZXIgdHlwZS1tYXRjaGVkIGhhbmRsZXJzLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgIFRoZSBldmVudCB0eXBlIHRvIGludm9rZVxuXHRcdCAqIEBwYXJhbSB7QW55fSBbZXZ0XSAgQW55IHZhbHVlIChvYmplY3QgaXMgcmVjb21tZW5kZWQgYW5kIHBvd2VyZnVsKSwgcGFzc2VkIHRvIGVhY2ggaGFuZGxlclxuXHRcdCAqIEBtZW1iZXJvZiBtaXR0XG5cdFx0ICovXG5cdFx0ZW1pdDogZnVuY3Rpb24gZW1pdCh0eXBlICAgICAgICAsIGV2dCAgICAgKSB7XG5cdFx0XHQoYWxsW3R5cGVdIHx8IFtdKS5tYXAoZnVuY3Rpb24gKGhhbmRsZXIpIHsgaGFuZGxlcihldnQpOyB9KTtcblx0XHRcdChhbGxbJyonXSB8fCBbXSkubWFwKGZ1bmN0aW9uIChoYW5kbGVyKSB7IGhhbmRsZXIodHlwZSwgZXZ0KTsgfSk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgbmFtZXNwYWNlc18xID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSwgZXhwb3J0cykge1xudmFyIG5hbWVzcGFjZXMgPSB7XG4gIHN2Zzoge1xuICAgIG5hbWU6ICd4bWxucycsXG4gICAgdXJpOiAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG4gIH0sXG4gIHhsaW5rOiB7XG4gICAgbmFtZTogJ3htbG5zOnhsaW5rJyxcbiAgICB1cmk6ICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJ1xuICB9XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBuYW1lc3BhY2VzO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG59KTtcblxuLyoqXG4gKiBAcGFyYW0ge09iamVjdH0gYXR0cnNcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xudmFyIG9iamVjdFRvQXR0cnNTdHJpbmcgPSBmdW5jdGlvbiAoYXR0cnMpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKGF0dHJzKS5tYXAoZnVuY3Rpb24gKGF0dHIpIHtcbiAgICB2YXIgdmFsdWUgPSBhdHRyc1thdHRyXS50b1N0cmluZygpLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKTtcbiAgICByZXR1cm4gKGF0dHIgKyBcIj1cXFwiXCIgKyB2YWx1ZSArIFwiXFxcIlwiKTtcbiAgfSkuam9pbignICcpO1xufTtcblxudmFyIHN2ZyA9IG5hbWVzcGFjZXNfMS5zdmc7XG52YXIgeGxpbmsgPSBuYW1lc3BhY2VzXzEueGxpbms7XG5cbnZhciBkZWZhdWx0QXR0cnMgPSB7fTtcbmRlZmF1bHRBdHRyc1tzdmcubmFtZV0gPSBzdmcudXJpO1xuZGVmYXVsdEF0dHJzW3hsaW5rLm5hbWVdID0geGxpbmsudXJpO1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29udGVudF1cbiAqIEBwYXJhbSB7T2JqZWN0fSBbYXR0cmlidXRlc11cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xudmFyIHdyYXBJblN2Z1N0cmluZyA9IGZ1bmN0aW9uIChjb250ZW50LCBhdHRyaWJ1dGVzKSB7XG4gIGlmICggY29udGVudCA9PT0gdm9pZCAwICkgY29udGVudCA9ICcnO1xuXG4gIHZhciBhdHRycyA9IGluZGV4KGRlZmF1bHRBdHRycywgYXR0cmlidXRlcyB8fCB7fSk7XG4gIHZhciBhdHRyc1JlbmRlcmVkID0gb2JqZWN0VG9BdHRyc1N0cmluZyhhdHRycyk7XG4gIHJldHVybiAoXCI8c3ZnIFwiICsgYXR0cnNSZW5kZXJlZCArIFwiPlwiICsgY29udGVudCArIFwiPC9zdmc+XCIpO1xufTtcblxudmFyIHN2ZyQxID0gbmFtZXNwYWNlc18xLnN2ZztcbnZhciB4bGluayQxID0gbmFtZXNwYWNlc18xLnhsaW5rO1xuXG52YXIgZGVmYXVsdENvbmZpZyA9IHtcbiAgYXR0cnM6ICggb2JqID0ge1xuICAgIHN0eWxlOiBbJ3Bvc2l0aW9uOiBhYnNvbHV0ZScsICd3aWR0aDogMCcsICdoZWlnaHQ6IDAnXS5qb2luKCc7ICcpXG4gIH0sIG9ialtzdmckMS5uYW1lXSA9IHN2ZyQxLnVyaSwgb2JqW3hsaW5rJDEubmFtZV0gPSB4bGluayQxLnVyaSwgb2JqIClcbn07XG52YXIgb2JqO1xuXG52YXIgU3ByaXRlID0gZnVuY3Rpb24gU3ByaXRlKGNvbmZpZykge1xuICB0aGlzLmNvbmZpZyA9IGluZGV4KGRlZmF1bHRDb25maWcsIGNvbmZpZyB8fCB7fSk7XG4gIHRoaXMuc3ltYm9scyA9IFtdO1xufTtcblxuLyoqXG4gKiBBZGQgbmV3IHN5bWJvbC4gSWYgc3ltYm9sIHdpdGggdGhlIHNhbWUgaWQgZXhpc3RzIGl0IHdpbGwgYmUgcmVwbGFjZWQuXG4gKiBAcGFyYW0ge1Nwcml0ZVN5bWJvbH0gc3ltYm9sXG4gKiBAcmV0dXJuIHtib29sZWFufSBgdHJ1ZWAgLSBzeW1ib2wgd2FzIGFkZGVkLCBgZmFsc2VgIC0gcmVwbGFjZWRcbiAqL1xuU3ByaXRlLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiBhZGQgKHN5bWJvbCkge1xuICB2YXIgcmVmID0gdGhpcztcbiAgICB2YXIgc3ltYm9scyA9IHJlZi5zeW1ib2xzO1xuICB2YXIgZXhpc3RpbmcgPSB0aGlzLmZpbmQoc3ltYm9sLmlkKTtcblxuICBpZiAoZXhpc3RpbmcpIHtcbiAgICBzeW1ib2xzW3N5bWJvbHMuaW5kZXhPZihleGlzdGluZyldID0gc3ltYm9sO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN5bWJvbHMucHVzaChzeW1ib2wpO1xuICByZXR1cm4gdHJ1ZTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIHN5bWJvbCAmIGRlc3Ryb3kgaXRcbiAqIEBwYXJhbSB7c3RyaW5nfSBpZFxuICogQHJldHVybiB7Ym9vbGVhbn0gYHRydWVgIC0gc3ltYm9sIHdhcyBmb3VuZCAmIHN1Y2Nlc3NmdWxseSBkZXN0cm95ZWQsIGBmYWxzZWAgLSBvdGhlcndpc2VcbiAqL1xuU3ByaXRlLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUgKGlkKSB7XG4gIHZhciByZWYgPSB0aGlzO1xuICAgIHZhciBzeW1ib2xzID0gcmVmLnN5bWJvbHM7XG4gIHZhciBzeW1ib2wgPSB0aGlzLmZpbmQoaWQpO1xuXG4gIGlmIChzeW1ib2wpIHtcbiAgICBzeW1ib2xzLnNwbGljZShzeW1ib2xzLmluZGV4T2Yoc3ltYm9sKSwgMSk7XG4gICAgc3ltYm9sLmRlc3Ryb3koKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGlkXG4gKiBAcmV0dXJuIHtTcHJpdGVTeW1ib2x8bnVsbH1cbiAqL1xuU3ByaXRlLnByb3RvdHlwZS5maW5kID0gZnVuY3Rpb24gZmluZCAoaWQpIHtcbiAgcmV0dXJuIHRoaXMuc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHMpIHsgcmV0dXJuIHMuaWQgPT09IGlkOyB9KVswXSB8fCBudWxsO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gaWRcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cblNwcml0ZS5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24gaGFzIChpZCkge1xuICByZXR1cm4gdGhpcy5maW5kKGlkKSAhPT0gbnVsbDtcbn07XG5cbi8qKlxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5TcHJpdGUucHJvdG90eXBlLnN0cmluZ2lmeSA9IGZ1bmN0aW9uIHN0cmluZ2lmeSAoKSB7XG4gIHZhciByZWYgPSB0aGlzLmNvbmZpZztcbiAgICB2YXIgYXR0cnMgPSByZWYuYXR0cnM7XG4gIHZhciBzdHJpbmdpZmllZFN5bWJvbHMgPSB0aGlzLnN5bWJvbHMubWFwKGZ1bmN0aW9uIChzKSB7IHJldHVybiBzLnN0cmluZ2lmeSgpOyB9KS5qb2luKCcnKTtcbiAgcmV0dXJuIHdyYXBJblN2Z1N0cmluZyhzdHJpbmdpZmllZFN5bWJvbHMsIGF0dHJzKTtcbn07XG5cbi8qKlxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5TcHJpdGUucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcgKCkge1xuICByZXR1cm4gdGhpcy5zdHJpbmdpZnkoKTtcbn07XG5cblNwcml0ZS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uIGRlc3Ryb3kgKCkge1xuICB0aGlzLnN5bWJvbHMuZm9yRWFjaChmdW5jdGlvbiAocykgeyByZXR1cm4gcy5kZXN0cm95KCk7IH0pO1xufTtcblxudmFyIGRlZmF1bHRDb25maWckMSA9IHtcbiAgLyoqXG4gICAqIFNob3VsZCBmb2xsb3dpbmcgb3B0aW9ucyBiZSBhdXRvbWF0aWNhbGx5IGNvbmZpZ3VyZWQ6XG4gICAqIC0gYHN5bmNVcmxzV2l0aEJhc2VUYWdgXG4gICAqIC0gYGxvY2F0aW9uQ2hhbmdlQW5ndWxhckVtaXR0ZXJgXG4gICAqIC0gYG1vdmVHcmFkaWVudHNPdXRzaWRlU3ltYm9sYFxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIGF1dG9Db25maWd1cmU6IHRydWUsXG5cbiAgLyoqXG4gICAqIERlZmF1bHQgbW91bnRpbmcgc2VsZWN0b3JcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIG1vdW50VG86ICdib2R5JyxcblxuICAvKipcbiAgICogRml4IGRpc2FwcGVhcmluZyBTVkcgZWxlbWVudHMgd2hlbiA8YmFzZSBocmVmPiBleGlzdHMuXG4gICAqIEV4ZWN1dGVzIHdoZW4gc3ByaXRlIG1vdW50ZWQuXG4gICAqIEBzZWUgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTgyNjUzMzYvNzk2MTUyXG4gICAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2V2ZXJkaW1lbnNpb24vYW5ndWxhci1zdmctYmFzZS1maXhcbiAgICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyLmpzL2lzc3Vlcy84OTM0I2lzc3VlY29tbWVudC01NjU2ODQ2NlxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIHN5bmNVcmxzV2l0aEJhc2VUYWc6IGZhbHNlLFxuXG4gIC8qKlxuICAgKiBTaG91bGQgc3ByaXRlIGxpc3RlbiBjdXN0b20gbG9jYXRpb24gY2hhbmdlIGV2ZW50XG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgbGlzdGVuTG9jYXRpb25DaGFuZ2VFdmVudDogdHJ1ZSxcblxuICAvKipcbiAgICogQ3VzdG9tIHdpbmRvdyBldmVudCBuYW1lIHdoaWNoIHNob3VsZCBiZSBlbWl0dGVkIHRvIHVwZGF0ZSBzcHJpdGUgdXJsc1xuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgbG9jYXRpb25DaGFuZ2VFdmVudDogJ2xvY2F0aW9uQ2hhbmdlJyxcblxuICAvKipcbiAgICogRW1pdCBsb2NhdGlvbiBjaGFuZ2UgZXZlbnQgaW4gQW5ndWxhciBhdXRvbWF0aWNhbGx5XG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgbG9jYXRpb25DaGFuZ2VBbmd1bGFyRW1pdHRlcjogZmFsc2UsXG5cbiAgLyoqXG4gICAqIFNlbGVjdG9yIHRvIGZpbmQgc3ltYm9scyB1c2FnZXMgd2hlbiB1cGRhdGluZyBzcHJpdGUgdXJsc1xuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgdXNhZ2VzVG9VcGRhdGU6ICd1c2VbKnxocmVmXScsXG5cbiAgLyoqXG4gICAqIEZpeCBGaXJlZm94IGJ1ZyB3aGVuIGdyYWRpZW50cyBhbmQgcGF0dGVybnMgZG9uJ3Qgd29yayBpZiB0aGV5IGFyZSB3aXRoaW4gYSBzeW1ib2wuXG4gICAqIEV4ZWN1dGVzIHdoZW4gc3ByaXRlIGlzIHJlbmRlcmVkLCBidXQgbm90IG1vdW50ZWQuXG4gICAqIEBzZWUgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MzA2Njc0XG4gICAqIEBzZWUgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MzUzNTc1XG4gICAqIEBzZWUgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTIzNTM2NFxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIG1vdmVHcmFkaWVudHNPdXRzaWRlU3ltYm9sOiBmYWxzZVxufTtcblxudmFyIGFycmF5RnJvbSA9IGZ1bmN0aW9uIChhcnJheUxpa2UpIHtcbiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFycmF5TGlrZSwgMCk7XG59O1xuXG52YXIgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuXG52YXIgYnJvd3NlciA9IHtcbiAgaXNDaHJvbWU6IC9jaHJvbWUvaS50ZXN0KHVhKSxcbiAgaXNGaXJlZm94OiAvZmlyZWZveC9pLnRlc3QodWEpLFxuICBpc0lFOiAvbXNpZS9pLnRlc3QodWEpLFxuICBpc0VkZ2U6IC9lZGdlL2kudGVzdCh1YSlcbn07XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7Kn0gZGF0YVxuICovXG52YXIgZGlzcGF0Y2hFdmVudCA9IGZ1bmN0aW9uIChuYW1lLCBkYXRhKSB7XG4gIHZhciBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpO1xuICBldmVudC5pbml0Q3VzdG9tRXZlbnQobmFtZSwgZmFsc2UsIGZhbHNlLCBkYXRhKTtcbiAgd2luZG93LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gW3VybF0gSWYgbm90IHByb3ZpZGVkIC0gY3VycmVudCBVUkwgd2lsbCBiZSB1c2VkXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbnZhciBnZXRVcmxXaXRob3V0RnJhZ21lbnQgPSBmdW5jdGlvbiAodXJsKSB7XG4gIHJldHVybiAodXJsIHx8IHdpbmRvdy5sb2NhdGlvbi5ocmVmKS5zcGxpdCgnIycpWzBdO1xufTtcblxuLyogZ2xvYmFsIGFuZ3VsYXIgKi9cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZVxuICovXG52YXIgbG9jYXRpb25DaGFuZ2VBbmd1bGFyRW1pdHRlciA9IGZ1bmN0aW9uIChldmVudE5hbWUpIHtcbiAgYW5ndWxhci5tb2R1bGUoJ25nJykucnVuKFsnJHJvb3RTY29wZScsIGZ1bmN0aW9uICgkcm9vdFNjb3BlKSB7XG4gICAgJHJvb3RTY29wZS4kb24oJyRsb2NhdGlvbkNoYW5nZVN1Y2Nlc3MnLCBmdW5jdGlvbiAoZSwgbmV3VXJsLCBvbGRVcmwpIHtcbiAgICAgIGRpc3BhdGNoRXZlbnQoZXZlbnROYW1lLCB7IG9sZFVybDogb2xkVXJsLCBuZXdVcmw6IG5ld1VybCB9KTtcbiAgICB9KTtcbiAgfV0pO1xufTtcblxudmFyIGRlZmF1bHRTZWxlY3RvciA9ICdsaW5lYXJHcmFkaWVudCwgcmFkaWFsR3JhZGllbnQsIHBhdHRlcm4nO1xuXG4vKipcbiAqIEBwYXJhbSB7RWxlbWVudH0gc3ZnXG4gKiBAcGFyYW0ge3N0cmluZ30gW3NlbGVjdG9yXVxuICogQHJldHVybiB7RWxlbWVudH1cbiAqL1xudmFyIG1vdmVHcmFkaWVudHNPdXRzaWRlU3ltYm9sID0gZnVuY3Rpb24gKHN2Zywgc2VsZWN0b3IpIHtcbiAgaWYgKCBzZWxlY3RvciA9PT0gdm9pZCAwICkgc2VsZWN0b3IgPSBkZWZhdWx0U2VsZWN0b3I7XG5cbiAgYXJyYXlGcm9tKHN2Zy5xdWVyeVNlbGVjdG9yQWxsKCdzeW1ib2wnKSkuZm9yRWFjaChmdW5jdGlvbiAoc3ltYm9sKSB7XG4gICAgYXJyYXlGcm9tKHN5bWJvbC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSkuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgc3ltYm9sLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5vZGUsIHN5bWJvbCk7XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gc3ZnO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gY29udGVudFxuICogQHJldHVybiB7RWxlbWVudH1cbiAqL1xudmFyIHBhcnNlID0gZnVuY3Rpb24gKGNvbnRlbnQpIHtcbiAgdmFyIGhhc0ltcG9ydE5vZGUgPSAhIWRvY3VtZW50LmltcG9ydE5vZGU7XG4gIHZhciBkb2MgPSBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKGNvbnRlbnQsICdpbWFnZS9zdmcreG1sJykuZG9jdW1lbnRFbGVtZW50O1xuXG4gIC8qKlxuICAgKiBGaXggZm9yIGJyb3dzZXIgd2hpY2ggYXJlIHRocm93aW5nIFdyb25nRG9jdW1lbnRFcnJvclxuICAgKiBpZiB5b3UgaW5zZXJ0IGFuIGVsZW1lbnQgd2hpY2ggaXMgbm90IHBhcnQgb2YgdGhlIGRvY3VtZW50XG4gICAqIEBzZWUgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzk4NjUxOS80NjI0NDAzXG4gICAqL1xuICBpZiAoaGFzSW1wb3J0Tm9kZSkge1xuICAgIHJldHVybiBkb2N1bWVudC5pbXBvcnROb2RlKGRvYywgdHJ1ZSk7XG4gIH1cblxuICByZXR1cm4gZG9jO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge05vZGVMaXN0fSBub2Rlc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gW21hdGNoZXJdXG4gKiBAcmV0dXJuIHtBdHRyW119XG4gKi9cbmZ1bmN0aW9uIHNlbGVjdEF0dHJpYnV0ZXMobm9kZXMsIG1hdGNoZXIpIHtcbiAgdmFyIGF0dHJzID0gYXJyYXlGcm9tKG5vZGVzKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgbm9kZSkge1xuICAgIGlmICghbm9kZS5hdHRyaWJ1dGVzKSB7XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH1cblxuICAgIHZhciBhcnJheWZpZWQgPSBhcnJheUZyb20obm9kZS5hdHRyaWJ1dGVzKTtcbiAgICB2YXIgbWF0Y2hlZCA9IG1hdGNoZXIgPyBhcnJheWZpZWQuZmlsdGVyKG1hdGNoZXIpIDogYXJyYXlmaWVkO1xuICAgIHJldHVybiBhY2MuY29uY2F0KG1hdGNoZWQpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIGF0dHJzO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7Tm9kZUxpc3R8Tm9kZX0gbm9kZXNcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2Nsb25lPXRydWVdXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cblxudmFyIHhMaW5rTlMgPSBuYW1lc3BhY2VzXzEueGxpbmsudXJpO1xudmFyIHhMaW5rQXR0ck5hbWUgPSAneGxpbms6aHJlZic7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2VsZXNzLWVzY2FwZVxudmFyIHNwZWNpYWxVcmxDaGFyc1BhdHRlcm4gPSAvWygpe318XFxcXFxcXn5cXFtcXF1gXCI8Pl0vZztcblxuZnVuY3Rpb24gZW5jb2Rlcih1cmwpIHtcbiAgcmV0dXJuIHVybC5yZXBsYWNlKHNwZWNpYWxVcmxDaGFyc1BhdHRlcm4sIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgIHJldHVybiAoXCIlXCIgKyAobWF0Y2hbMF0uY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKSkpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge05vZGVMaXN0fSBub2Rlc1xuICogQHBhcmFtIHtzdHJpbmd9IHN0YXJ0c1dpdGhcbiAqIEBwYXJhbSB7c3RyaW5nfSByZXBsYWNlV2l0aFxuICogQHJldHVybiB7Tm9kZUxpc3R9XG4gKi9cbmZ1bmN0aW9uIHVwZGF0ZVJlZmVyZW5jZXMobm9kZXMsIHN0YXJ0c1dpdGgsIHJlcGxhY2VXaXRoKSB7XG4gIGFycmF5RnJvbShub2RlcykuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgIHZhciBocmVmID0gbm9kZS5nZXRBdHRyaWJ1dGUoeExpbmtBdHRyTmFtZSk7XG4gICAgaWYgKGhyZWYgJiYgaHJlZi5pbmRleE9mKHN0YXJ0c1dpdGgpID09PSAwKSB7XG4gICAgICB2YXIgbmV3VXJsID0gaHJlZi5yZXBsYWNlKHN0YXJ0c1dpdGgsIHJlcGxhY2VXaXRoKTtcbiAgICAgIG5vZGUuc2V0QXR0cmlidXRlTlMoeExpbmtOUywgeExpbmtBdHRyTmFtZSwgbmV3VXJsKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBub2Rlcztcbn1cblxuLyoqXG4gKiBMaXN0IG9mIFNWRyBhdHRyaWJ1dGVzIHRvIHVwZGF0ZSB1cmwoKSB0YXJnZXQgaW4gdGhlbVxuICovXG52YXIgYXR0TGlzdCA9IFtcbiAgJ2NsaXBQYXRoJyxcbiAgJ2NvbG9yUHJvZmlsZScsXG4gICdzcmMnLFxuICAnY3Vyc29yJyxcbiAgJ2ZpbGwnLFxuICAnZmlsdGVyJyxcbiAgJ21hcmtlcicsXG4gICdtYXJrZXJTdGFydCcsXG4gICdtYXJrZXJNaWQnLFxuICAnbWFya2VyRW5kJyxcbiAgJ21hc2snLFxuICAnc3Ryb2tlJyxcbiAgJ3N0eWxlJ1xuXTtcblxudmFyIGF0dFNlbGVjdG9yID0gYXR0TGlzdC5tYXAoZnVuY3Rpb24gKGF0dHIpIHsgcmV0dXJuIChcIltcIiArIGF0dHIgKyBcIl1cIik7IH0pLmpvaW4oJywnKTtcblxuLyoqXG4gKiBVcGRhdGUgVVJMcyBpbiBzdmcgaW1hZ2UgKGxpa2UgYGZpbGw9XCJ1cmwoLi4uKVwiYCkgYW5kIHVwZGF0ZSByZWZlcmVuY2luZyBlbGVtZW50c1xuICogQHBhcmFtIHtFbGVtZW50fSBzdmdcbiAqIEBwYXJhbSB7Tm9kZUxpc3R9IHJlZmVyZW5jZXNcbiAqIEBwYXJhbSB7c3RyaW5nfFJlZ0V4cH0gc3RhcnRzV2l0aFxuICogQHBhcmFtIHtzdHJpbmd9IHJlcGxhY2VXaXRoXG4gKiBAcmV0dXJuIHt2b2lkfVxuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCBzcHJpdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzdmcuc3ByaXRlJyk7XG4gKiBjb25zdCB1c2FnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd1c2UnKTtcbiAqIHVwZGF0ZVVybHMoc3ByaXRlLCB1c2FnZXMsICcjJywgJ3ByZWZpeCMnKTtcbiAqL1xudmFyIHVwZGF0ZVVybHMgPSBmdW5jdGlvbiAoc3ZnLCByZWZlcmVuY2VzLCBzdGFydHNXaXRoLCByZXBsYWNlV2l0aCkge1xuICB2YXIgc3RhcnRzV2l0aEVuY29kZWQgPSBlbmNvZGVyKHN0YXJ0c1dpdGgpO1xuICB2YXIgcmVwbGFjZVdpdGhFbmNvZGVkID0gZW5jb2RlcihyZXBsYWNlV2l0aCk7XG5cbiAgdmFyIG5vZGVzID0gc3ZnLnF1ZXJ5U2VsZWN0b3JBbGwoYXR0U2VsZWN0b3IpO1xuICB2YXIgYXR0cnMgPSBzZWxlY3RBdHRyaWJ1dGVzKG5vZGVzLCBmdW5jdGlvbiAocmVmKSB7XG4gICAgdmFyIGxvY2FsTmFtZSA9IHJlZi5sb2NhbE5hbWU7XG4gICAgdmFyIHZhbHVlID0gcmVmLnZhbHVlO1xuXG4gICAgcmV0dXJuIGF0dExpc3QuaW5kZXhPZihsb2NhbE5hbWUpICE9PSAtMSAmJiB2YWx1ZS5pbmRleE9mKChcInVybChcIiArIHN0YXJ0c1dpdGhFbmNvZGVkKSkgIT09IC0xO1xuICB9KTtcblxuICBhdHRycy5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyKSB7IHJldHVybiBhdHRyLnZhbHVlID0gYXR0ci52YWx1ZS5yZXBsYWNlKHN0YXJ0c1dpdGhFbmNvZGVkLCByZXBsYWNlV2l0aEVuY29kZWQpOyB9KTtcbiAgdXBkYXRlUmVmZXJlbmNlcyhyZWZlcmVuY2VzLCBzdGFydHNXaXRoRW5jb2RlZCwgcmVwbGFjZVdpdGhFbmNvZGVkKTtcbn07XG5cbi8qKlxuICogSW50ZXJuYWwgZW1pdHRlciBldmVudHNcbiAqIEBlbnVtXG4gKiBAcHJpdmF0ZVxuICovXG52YXIgRXZlbnRzID0ge1xuICBNT1VOVDogJ21vdW50J1xufTtcblxudmFyIEJyb3dzZXJTcHJpdGUgPSAoZnVuY3Rpb24gKFNwcml0ZSQkMSkge1xuICBmdW5jdGlvbiBCcm93c2VyU3ByaXRlKGNmZykge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuICAgIGlmICggY2ZnID09PSB2b2lkIDAgKSBjZmcgPSB7fTtcblxuICAgIFNwcml0ZSQkMS5jYWxsKHRoaXMsIGluZGV4KGRlZmF1bHRDb25maWckMSwgY2ZnKSk7XG5cbiAgICB2YXIgZW1pdHRlciA9IG1pdHQoKTtcbiAgICB0aGlzLl9lbWl0dGVyID0gZW1pdHRlcjtcbiAgICB0aGlzLm5vZGUgPSBudWxsO1xuXG4gICAgdmFyIHJlZiA9IHRoaXM7XG4gICAgdmFyIGNvbmZpZyA9IHJlZi5jb25maWc7XG5cbiAgICBpZiAoY29uZmlnLmF1dG9Db25maWd1cmUpIHtcbiAgICAgIHRoaXMuX2F1dG9Db25maWd1cmUoY2ZnKTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLnN5bmNVcmxzV2l0aEJhc2VUYWcpIHtcbiAgICAgIHZhciBiYXNlVXJsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2Jhc2UnKVswXS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICAgIGVtaXR0ZXIub24oRXZlbnRzLk1PVU5ULCBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzJDEudXBkYXRlVXJscygnIycsIGJhc2VVcmwpOyB9KTtcbiAgICB9XG5cbiAgICB2YXIgaGFuZGxlTG9jYXRpb25DaGFuZ2UgPSB0aGlzLl9oYW5kbGVMb2NhdGlvbkNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX2hhbmRsZUxvY2F0aW9uQ2hhbmdlID0gaGFuZGxlTG9jYXRpb25DaGFuZ2U7XG5cbiAgICAvLyBQcm92aWRlIHdheSB0byB1cGRhdGUgc3ByaXRlIHVybHMgZXh0ZXJuYWxseSB2aWEgZGlzcGF0Y2hpbmcgY3VzdG9tIHdpbmRvdyBldmVudFxuICAgIGlmIChjb25maWcubGlzdGVuTG9jYXRpb25DaGFuZ2VFdmVudCkge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoY29uZmlnLmxvY2F0aW9uQ2hhbmdlRXZlbnQsIGhhbmRsZUxvY2F0aW9uQ2hhbmdlKTtcbiAgICB9XG5cbiAgICAvLyBFbWl0IGxvY2F0aW9uIGNoYW5nZSBldmVudCBpbiBBbmd1bGFyIGF1dG9tYXRpY2FsbHlcbiAgICBpZiAoY29uZmlnLmxvY2F0aW9uQ2hhbmdlQW5ndWxhckVtaXR0ZXIpIHtcbiAgICAgIGxvY2F0aW9uQ2hhbmdlQW5ndWxhckVtaXR0ZXIoY29uZmlnLmxvY2F0aW9uQ2hhbmdlRXZlbnQpO1xuICAgIH1cblxuICAgIGlmIChjb25maWcubW92ZUdyYWRpZW50c091dHNpZGVTeW1ib2wpIHtcbiAgICAgIGVtaXR0ZXIub24oRXZlbnRzLk1PVU5ULCBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICBtb3ZlR3JhZGllbnRzT3V0c2lkZVN5bWJvbChub2RlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGlmICggU3ByaXRlJCQxICkgQnJvd3NlclNwcml0ZS5fX3Byb3RvX18gPSBTcHJpdGUkJDE7XG4gIEJyb3dzZXJTcHJpdGUucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggU3ByaXRlJCQxICYmIFNwcml0ZSQkMS5wcm90b3R5cGUgKTtcbiAgQnJvd3NlclNwcml0ZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBCcm93c2VyU3ByaXRlO1xuXG4gIHZhciBwcm90b3R5cGVBY2Nlc3NvcnMgPSB7IGlzTW91bnRlZDoge30gfTtcblxuICAvKipcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIHByb3RvdHlwZUFjY2Vzc29ycy5pc01vdW50ZWQuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAhIXRoaXMubm9kZTtcbiAgfTtcblxuICAvKipcbiAgICogQXV0b21hdGljYWxseSBjb25maWd1cmUgZm9sbG93aW5nIG9wdGlvbnNcbiAgICogLSBgc3luY1VybHNXaXRoQmFzZVRhZ2BcbiAgICogLSBgbG9jYXRpb25DaGFuZ2VBbmd1bGFyRW1pdHRlcmBcbiAgICogLSBgbW92ZUdyYWRpZW50c091dHNpZGVTeW1ib2xgXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjZmdcbiAgICogQHByaXZhdGVcbiAgICovXG4gIEJyb3dzZXJTcHJpdGUucHJvdG90eXBlLl9hdXRvQ29uZmlndXJlID0gZnVuY3Rpb24gX2F1dG9Db25maWd1cmUgKGNmZykge1xuICAgIHZhciByZWYgPSB0aGlzO1xuICAgIHZhciBjb25maWcgPSByZWYuY29uZmlnO1xuXG4gICAgaWYgKHR5cGVvZiBjZmcuc3luY1VybHNXaXRoQmFzZVRhZyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZy5zeW5jVXJsc1dpdGhCYXNlVGFnID0gdHlwZW9mIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdiYXNlJylbMF0gIT09ICd1bmRlZmluZWQnO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY2ZnLmxvY2F0aW9uQ2hhbmdlQW5ndWxhckVtaXR0ZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWcubG9jYXRpb25DaGFuZ2VBbmd1bGFyRW1pdHRlciA9ICdhbmd1bGFyJyBpbiB3aW5kb3c7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjZmcubW92ZUdyYWRpZW50c091dHNpZGVTeW1ib2wgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWcubW92ZUdyYWRpZW50c091dHNpZGVTeW1ib2wgPSBicm93c2VyLmlzRmlyZWZveDtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudC5kZXRhaWxcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50LmRldGFpbC5vbGRVcmxcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50LmRldGFpbC5uZXdVcmxcbiAgICogQHByaXZhdGVcbiAgICovXG4gIEJyb3dzZXJTcHJpdGUucHJvdG90eXBlLl9oYW5kbGVMb2NhdGlvbkNoYW5nZSA9IGZ1bmN0aW9uIF9oYW5kbGVMb2NhdGlvbkNoYW5nZSAoZXZlbnQpIHtcbiAgICB2YXIgcmVmID0gZXZlbnQuZGV0YWlsO1xuICAgIHZhciBvbGRVcmwgPSByZWYub2xkVXJsO1xuICAgIHZhciBuZXdVcmwgPSByZWYubmV3VXJsO1xuICAgIHRoaXMudXBkYXRlVXJscyhvbGRVcmwsIG5ld1VybCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEFkZCBuZXcgc3ltYm9sLiBJZiBzeW1ib2wgd2l0aCB0aGUgc2FtZSBpZCBleGlzdHMgaXQgd2lsbCBiZSByZXBsYWNlZC5cbiAgICogSWYgc3ByaXRlIGFscmVhZHkgbW91bnRlZCAtIGBzeW1ib2wubW91bnQoc3ByaXRlLm5vZGUpYCB3aWxsIGJlIGNhbGxlZC5cbiAgICogQHBhcmFtIHtCcm93c2VyU3ByaXRlU3ltYm9sfSBzeW1ib2xcbiAgICogQHJldHVybiB7Ym9vbGVhbn0gYHRydWVgIC0gc3ltYm9sIHdhcyBhZGRlZCwgYGZhbHNlYCAtIHJlcGxhY2VkXG4gICAqL1xuICBCcm93c2VyU3ByaXRlLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiBhZGQgKHN5bWJvbCkge1xuICAgIHZhciBpc05ld1N5bWJvbCA9IFNwcml0ZSQkMS5wcm90b3R5cGUuYWRkLmNhbGwodGhpcywgc3ltYm9sKTtcblxuICAgIGlmICh0aGlzLmlzTW91bnRlZCAmJiBpc05ld1N5bWJvbCkge1xuICAgICAgc3ltYm9sLm1vdW50KHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGlzTmV3U3ltYm9sO1xuICB9O1xuXG4gIEJyb3dzZXJTcHJpdGUucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiBkZXN0cm95ICgpIHtcbiAgICB2YXIgcmVmID0gdGhpcztcbiAgICB2YXIgY29uZmlnID0gcmVmLmNvbmZpZztcbiAgICB2YXIgc3ltYm9scyA9IHJlZi5zeW1ib2xzO1xuICAgIHZhciBfZW1pdHRlciA9IHJlZi5fZW1pdHRlcjtcblxuICAgIHN5bWJvbHMuZm9yRWFjaChmdW5jdGlvbiAocykgeyByZXR1cm4gcy5kZXN0cm95KCk7IH0pO1xuXG4gICAgX2VtaXR0ZXIub2ZmKCcqJyk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoY29uZmlnLmxvY2F0aW9uQ2hhbmdlRXZlbnQsIHRoaXMuX2hhbmRsZUxvY2F0aW9uQ2hhbmdlKTtcblxuICAgIGlmICh0aGlzLmlzTW91bnRlZCkge1xuICAgICAgdGhpcy51bm1vdW50KCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR8c3RyaW5nfSBbdGFyZ2V0XVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtwcmVwZW5kPWZhbHNlXVxuICAgKiBAcmV0dXJuIHtFbGVtZW50fSByZW5kZXJlZCBzcHJpdGUgbm9kZVxuICAgKiBAZmlyZXMgRXZlbnRzI01PVU5UXG4gICAqL1xuICBCcm93c2VyU3ByaXRlLnByb3RvdHlwZS5tb3VudCA9IGZ1bmN0aW9uIG1vdW50ICh0YXJnZXQsIHByZXBlbmQpIHtcbiAgICBpZiAoIHByZXBlbmQgPT09IHZvaWQgMCApIHByZXBlbmQgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLmlzTW91bnRlZCkge1xuICAgICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgICB9XG5cbiAgICB2YXIgbW91bnRUYXJnZXQgPSB0YXJnZXQgfHwgdGhpcy5jb25maWcubW91bnRUbztcbiAgICB2YXIgcGFyZW50ID0gdHlwZW9mIG1vdW50VGFyZ2V0ID09PSAnc3RyaW5nJyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobW91bnRUYXJnZXQpIDogbW91bnRUYXJnZXQ7XG4gICAgdmFyIG5vZGUgPSB0aGlzLnJlbmRlcigpO1xuXG4gICAgaWYgKHByZXBlbmQgJiYgcGFyZW50LmNoaWxkTm9kZXNbMF0pIHtcbiAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUobm9kZSwgcGFyZW50LmNoaWxkTm9kZXNbMF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgfVxuXG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLl9lbWl0dGVyLmVtaXQoRXZlbnRzLk1PVU5ULCBub2RlKTtcblxuICAgIHJldHVybiBub2RlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtFbGVtZW50fVxuICAgKi9cbiAgQnJvd3NlclNwcml0ZS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyICgpIHtcbiAgICByZXR1cm4gcGFyc2UodGhpcy5zdHJpbmdpZnkoKSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIERldGFjaCBzcHJpdGUgZnJvbSB0aGUgRE9NXG4gICAqL1xuICBCcm93c2VyU3ByaXRlLnByb3RvdHlwZS51bm1vdW50ID0gZnVuY3Rpb24gdW5tb3VudCAoKSB7XG4gICAgdGhpcy5ub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5ub2RlKTtcbiAgfTtcblxuICAvKipcbiAgICogVXBkYXRlIFVSTHMgaW4gc3ByaXRlIGFuZCB1c2FnZSBlbGVtZW50c1xuICAgKiBAcGFyYW0ge3N0cmluZ30gb2xkVXJsXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuZXdVcmxcbiAgICogQHJldHVybiB7Ym9vbGVhbn0gYHRydWVgIC0gVVJMcyB3YXMgdXBkYXRlZCwgYGZhbHNlYCAtIHNwcml0ZSBpcyBub3QgbW91bnRlZFxuICAgKi9cbiAgQnJvd3NlclNwcml0ZS5wcm90b3R5cGUudXBkYXRlVXJscyA9IGZ1bmN0aW9uIHVwZGF0ZVVybHMkMSAob2xkVXJsLCBuZXdVcmwpIHtcbiAgICBpZiAoIXRoaXMuaXNNb3VudGVkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIHVzYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5jb25maWcudXNhZ2VzVG9VcGRhdGUpO1xuXG4gICAgdXBkYXRlVXJscyhcbiAgICAgIHRoaXMubm9kZSxcbiAgICAgIHVzYWdlcyxcbiAgICAgICgoZ2V0VXJsV2l0aG91dEZyYWdtZW50KG9sZFVybCkpICsgXCIjXCIpLFxuICAgICAgKChnZXRVcmxXaXRob3V0RnJhZ21lbnQobmV3VXJsKSkgKyBcIiNcIilcbiAgICApO1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoIEJyb3dzZXJTcHJpdGUucHJvdG90eXBlLCBwcm90b3R5cGVBY2Nlc3NvcnMgKTtcblxuICByZXR1cm4gQnJvd3NlclNwcml0ZTtcbn0oU3ByaXRlKSk7XG5cbnZhciByZWFkeSQxID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSkge1xuLyohXG4gICogZG9tcmVhZHkgKGMpIER1c3RpbiBEaWF6IDIwMTQgLSBMaWNlbnNlIE1JVFxuICAqL1xuIWZ1bmN0aW9uIChuYW1lLCBkZWZpbml0aW9uKSB7XG5cbiAgeyBtb2R1bGUuZXhwb3J0cyA9IGRlZmluaXRpb24oKTsgfVxuXG59KCdkb21yZWFkeScsIGZ1bmN0aW9uICgpIHtcblxuICB2YXIgZm5zID0gW10sIGxpc3RlbmVyXG4gICAgLCBkb2MgPSBkb2N1bWVudFxuICAgICwgaGFjayA9IGRvYy5kb2N1bWVudEVsZW1lbnQuZG9TY3JvbGxcbiAgICAsIGRvbUNvbnRlbnRMb2FkZWQgPSAnRE9NQ29udGVudExvYWRlZCdcbiAgICAsIGxvYWRlZCA9IChoYWNrID8gL15sb2FkZWR8XmMvIDogL15sb2FkZWR8Xml8XmMvKS50ZXN0KGRvYy5yZWFkeVN0YXRlKTtcblxuXG4gIGlmICghbG9hZGVkKVxuICB7IGRvYy5hZGRFdmVudExpc3RlbmVyKGRvbUNvbnRlbnRMb2FkZWQsIGxpc3RlbmVyID0gZnVuY3Rpb24gKCkge1xuICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKGRvbUNvbnRlbnRMb2FkZWQsIGxpc3RlbmVyKTtcbiAgICBsb2FkZWQgPSAxO1xuICAgIHdoaWxlIChsaXN0ZW5lciA9IGZucy5zaGlmdCgpKSB7IGxpc3RlbmVyKCk7IH1cbiAgfSk7IH1cblxuICByZXR1cm4gZnVuY3Rpb24gKGZuKSB7XG4gICAgbG9hZGVkID8gc2V0VGltZW91dChmbiwgMCkgOiBmbnMucHVzaChmbik7XG4gIH1cblxufSk7XG59KTtcblxudmFyIHNwcml0ZSA9IG5ldyBCcm93c2VyU3ByaXRlKCk7XG5cbnZhciBsb2FkU3ByaXRlID0gZnVuY3Rpb24gKCkge1xuICB2YXIgc3ZnID0gc3ByaXRlLm1vdW50KGRvY3VtZW50LmJvZHksIHRydWUpO1xuXG4gIC8vIDpXT1JLQVJPVU5EOlxuICAvLyBJRSBkb2Vzbid0IGV2YWx1YXRlIDxzdHlsZT4gdGFncyBpbiBTVkdzIHRoYXQgYXJlIGR5bmFtaWNhbGx5IGFkZGVkIHRvIHRoZSBwYWdlLlxuICAvLyBUaGlzIHRyaWNrIHdpbGwgdHJpZ2dlciBJRSB0byByZWFkIGFuZCB1c2UgYW55IGV4aXN0aW5nIFNWRyA8c3R5bGU+IHRhZ3MuXG4gIC8vXG4gIC8vIFJlZmVyZW5jZTogaHR0cHM6Ly9naXRodWIuY29tL2ljb25pYy9TVkdJbmplY3Rvci9pc3N1ZXMvMjNcbiAgdmFyIHVhID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQgfHwgJyc7XG4gIGlmICh1YS5pbmRleE9mKCdUcmlkZW50JykgPiAwIHx8IHVhLmluZGV4T2YoJ0VkZ2UvJykgPiAwKSB7XG4gICAgdmFyIHN0eWxlcyA9IHN2Zy5xdWVyeVNlbGVjdG9yQWxsKCdzdHlsZScpO1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gc3R5bGVzLmxlbmd0aDsgaSA8IGw7IGkgKz0gMSkge1xuICAgICAgc3R5bGVzW2ldLnRleHRDb250ZW50ICs9ICcnO1xuICAgIH1cbiAgfVxufTtcblxuaWYgKGRvY3VtZW50LmJvZHkpIHtcbiAgbG9hZFNwcml0ZSgpO1xufSBlbHNlIHtcbiAgcmVhZHkkMShsb2FkU3ByaXRlKTtcbn1cblxucmV0dXJuIHNwcml0ZTtcblxufSkpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3N2Zy1zcHJpdGUtbG9hZGVyL3J1bnRpbWUvYnJvd3Nlci1zcHJpdGUuYnVpbGQuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGc7XHJcblxyXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxyXG5nID0gKGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiB0aGlzO1xyXG59KSgpO1xyXG5cclxudHJ5IHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcclxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsZXZhbCkoXCJ0aGlzXCIpO1xyXG59IGNhdGNoKGUpIHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxyXG5cdGlmKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpXHJcblx0XHRnID0gd2luZG93O1xyXG59XHJcblxyXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXHJcbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXHJcbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZztcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAnLi4vc3R5bGUvc3R5bGUuc3R5bCc7XHJcbmltcG9ydCBzeW1ib2wgZnJvbSAnLi9zdmcnXHJcbmltcG9ydCBhdXRvQ29tcGxldGUgZnJvbScuL21vZHVsZXMvYXV0b2NvbXBsZXRlJyBcclxuaW1wb3J0IHsgJCwgJCQgfSBmcm9tICcuL21vZHVsZXMvYmxpbmcnO1xyXG5cclxuY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkcmVzcycpO1xyXG5jb25zdCBsbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG5nJylcclxuY29uc3QgbGF0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xhdCcpXHJcblxyXG5hdXRvQ29tcGxldGUoaW5wdXQsIGxhdCwgbG5nKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcHVibGljL2pzL2FwcC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvc3R5bGUvc3R5bGUuc3R5bFxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgYWRkSWNvbiBmcm9tICcuLi9pbWFnZXMvaWNvbnMvYWRkLnN2Zyc7XHJcbmltcG9ydCBjb2dJY29uIGZyb20gJy4uL2ltYWdlcy9pY29ucy9jb2cuc3ZnJztcclxuaW1wb3J0IGhlYXJ0SWNvbiBmcm9tICcuLi9pbWFnZXMvaWNvbnMvaGVhcnQuc3ZnJztcclxuaW1wb3J0IGxvZ29JY29uIGZyb20gJy4uL2ltYWdlcy9pY29ucy9sb2dvLnN2Zyc7XHJcbmltcG9ydCBsb2dvdXRJY29uIGZyb20gJy4uL2ltYWdlcy9pY29ucy9sb2dvdXQuc3ZnJztcclxuaW1wb3J0IG1hcEljb24gZnJvbSAnLi4vaW1hZ2VzL2ljb25zL21hcC5zdmcnO1xyXG5pbXBvcnQgcGVuY2lsSWNvbiBmcm9tICcuLi9pbWFnZXMvaWNvbnMvcGVuY2lsLnN2Zyc7XHJcbmltcG9ydCByZXZpZXdJY29uIGZyb20gJy4uL2ltYWdlcy9pY29ucy9yZXZpZXcuc3ZnJztcclxuaW1wb3J0IHN0b3JlSWNvbiBmcm9tICcuLi9pbWFnZXMvaWNvbnMvc3RvcmUuc3ZnJztcclxuaW1wb3J0IHN0b3JlMkljb24gZnJvbSAnLi4vaW1hZ2VzL2ljb25zL3N0b3JlMi5zdmcnO1xyXG5pbXBvcnQgdGFnSWNvbiBmcm9tICcuLi9pbWFnZXMvaWNvbnMvdGFnLnN2Zyc7XHJcbmltcG9ydCB0b3BJY29uIGZyb20gJy4uL2ltYWdlcy9pY29ucy90b3Auc3ZnJztcclxuXHJcblxyXG5cclxuXHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcHVibGljL2pzL3N2Zy5qcyIsImltcG9ydCBTcHJpdGVTeW1ib2wgZnJvbSBcInN2Zy1iYWtlci1ydW50aW1lL2Jyb3dzZXItc3ltYm9sXCI7XG5pbXBvcnQgc3ByaXRlIGZyb20gXCJzdmctc3ByaXRlLWxvYWRlci9ydW50aW1lL2Jyb3dzZXItc3ByaXRlLmJ1aWxkXCI7XG52YXIgc3ltYm9sID0gbmV3IFNwcml0ZVN5bWJvbCh7XG4gIFwiaWRcIjogXCJhZGRcIixcbiAgXCJ1c2VcIjogXCJhZGQtdXNhZ2VcIixcbiAgXCJ2aWV3Qm94XCI6IFwiMCAwIDEwMCAxMDBcIixcbiAgXCJjb250ZW50XCI6IFwiPHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgMTAwIDEwMFxcXCIgaWQ9XFxcImFkZFxcXCI+PGcgdHJhbnNmb3JtPVxcXCJ0cmFuc2xhdGUoMCwtOTUyLjM2MjE4KVxcXCI+PHBhdGggZD1cXFwiTSAxMC44MTI1IDEwIEEgMS4wMDAwOTk5IDEuMDAwMDk5OSAwIDAgMCAxMCAxMSBMIDEwIDg5IEEgMS4wMDAwOTk5IDEuMDAwMDk5OSAwIDAgMCAxMSA5MCBMIDg5IDkwIEEgMS4wMDAwOTk5IDEuMDAwMDk5OSAwIDAgMCA5MCA4OSBMIDkwIDExIEEgMS4wMDAwOTk5IDEuMDAwMDk5OSAwIDAgMCA4OSAxMCBMIDExIDEwIEEgMS4wMDAwOTk5IDEuMDAwMDk5OSAwIDAgMCAxMC44MTI1IDEwIHogTSAxMiAxMiBMIDg4IDEyIEwgODggODggTCAxMiA4OCBMIDEyIDEyIHogTSA0OS44NzUgMjYuOTY4NzUgQSAxLjAwMDA5OTkgMS4wMDAwOTk5IDAgMCAwIDQ5IDI4IEwgNDkgNDkgTCAyOCA0OSBBIDEuMDAwMDk5OSAxLjAwMDA5OTkgMCAwIDAgMjcuODEyNSA0OSBBIDEuMDA0Mzg0OSAxLjAwNDM4NDkgMCAwIDAgMjggNTEgTCA0OSA1MSBMIDQ5IDcyIEEgMS4wMDAwOTk5IDEuMDAwMDk5OSAwIDEgMCA1MSA3MiBMIDUxIDUxIEwgNzIgNTEgQSAxLjAwMDA5OTkgMS4wMDAwOTk5IDAgMSAwIDcyIDQ5IEwgNTEgNDkgTCA1MSAyOCBBIDEuMDAwMDk5OSAxLjAwMDA5OTkgMCAwIDAgNDkuODc1IDI2Ljk2ODc1IHogXFxcIiB0cmFuc2Zvcm09XFxcInRyYW5zbGF0ZSgwLDk1Mi4zNjIxOClcXFwiIC8+PC9nPjwvc3ltYm9sPlwiXG59KTtcbnZhciByZXN1bHQgPSBzcHJpdGUuYWRkKHN5bWJvbCk7XG5leHBvcnQgZGVmYXVsdCBzeW1ib2xcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9pbWFnZXMvaWNvbnMvYWRkLnN2Z1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgU3ByaXRlU3ltYm9sIGZyb20gXCJzdmctYmFrZXItcnVudGltZS9icm93c2VyLXN5bWJvbFwiO1xuaW1wb3J0IHNwcml0ZSBmcm9tIFwic3ZnLXNwcml0ZS1sb2FkZXIvcnVudGltZS9icm93c2VyLXNwcml0ZS5idWlsZFwiO1xudmFyIHN5bWJvbCA9IG5ldyBTcHJpdGVTeW1ib2woe1xuICBcImlkXCI6IFwiY29nXCIsXG4gIFwidXNlXCI6IFwiY29nLXVzYWdlXCIsXG4gIFwidmlld0JveFwiOiBcIjAgMCAxMDAgMTAwXCIsXG4gIFwiY29udGVudFwiOiBcIjxzeW1ib2wgdmlld0JveD1cXFwiMCAwIDEwMCAxMDBcXFwiIGlkPVxcXCJjb2dcXFwiPjxwYXRoIGQ9XFxcIk04OC45LDU4LjhjLTIuNC0yLjMtMy43LTUuNS0zLjctOC44YzAtMy4zLDEuMy02LjQsMy43LTguOGMwLjQtMC40LDAuOC0wLjcsMS4zLTEuMWMwLjctMC41LDAuOS0xLjQsMC43LTIuMiAgYy0wLjgtMi45LTItNS43LTMuNC04LjNjLTAuNC0wLjctMS4yLTEuMS0yLTFjLTAuNywwLjEtMS4yLDAuMS0xLjcsMC4xYy02LjksMC0xMi41LTUuNi0xMi41LTEyLjRjMC0wLjUsMC0xLjEsMC4xLTEuNyAgYzAuMS0wLjgtMC4zLTEuNi0xLTJjLTIuNi0xLjQtNS40LTIuNi04LjMtMy40Yy0wLjgtMC4yLTEuNywwLjEtMi4yLDAuN2MtMC40LDAuNS0wLjgsMS0xLjEsMS4zYy0yLjQsMi4zLTUuNSwzLjYtOC44LDMuNiAgcy02LjUtMS4zLTguOC0zLjZjLTAuNC0wLjQtMC43LTAuOC0xLjEtMS4zYy0wLjUtMC43LTEuNC0wLjktMi4yLTAuN2MtMi45LDAuOS01LjcsMi04LjMsMy40Yy0wLjcsMC40LTEuMSwxLjItMSwyICBjMC4xLDAuNywwLjEsMS4yLDAuMSwxLjdjMCw2LjktNS42LDEyLjQtMTIuNSwxMi40Yy0wLjUsMC0xLjEsMC0xLjctMC4xYy0wLjgtMC4xLTEuNiwwLjMtMiwxYy0xLjQsMi42LTIuNiw1LjQtMy40LDguMyAgYy0wLjIsMC44LDAsMS43LDAuNywyLjJjMC42LDAuNCwxLDAuOCwxLjMsMS4xYzQuOSw0LjgsNC45LDEyLjcsMCwxNy42Yy0wLjQsMC40LTAuOCwwLjctMS4zLDEuMWMtMC43LDAuNS0wLjksMS40LTAuNywyLjIgIGMwLjksMi45LDIsNS43LDMuNCw4LjNjMC40LDAuNywxLjIsMS4xLDIsMWMwLjctMC4xLDEuMi0wLjEsMS43LTAuMWM2LjksMCwxMi41LDUuNiwxMi41LDEyLjRjMCwwLjUsMCwxLjEtMC4xLDEuNyAgYy0wLjEsMC44LDAuMywxLjYsMSwyYzIuNiwxLjQsNS40LDIuNiw4LjMsMy40YzAuOCwwLjIsMS43LDAsMi4yLTAuN2MwLjQtMC41LDAuOC0xLDEuMS0xLjNjMi40LTIuMyw1LjUtMy42LDguOC0zLjYgIHM2LjUsMS4zLDguOCwzLjZjMC40LDAuNCwwLjcsMC44LDEuMSwxLjNjMC40LDAuNSwxLDAuOCwxLjYsMC44YzAuMiwwLDAuNCwwLDAuNi0wLjFjMi45LTAuOSw1LjctMiw4LjMtMy40YzAuNy0wLjQsMS4xLTEuMiwxLTIgIGMtMC4xLTAuNy0wLjEtMS4yLTAuMS0xLjdjMC02LjksNS42LTEyLjQsMTIuNS0xMi40YzAuNSwwLDEuMSwwLDEuNywwLjFjMC44LDAuMSwxLjYtMC4zLDItMWMxLjQtMi42LDIuNi01LjQsMy40LTguMyAgYzAuMi0wLjgsMC0xLjctMC43LTIuMkM4OS43LDU5LjUsODkuMiw1OS4yLDg4LjksNTguOHogTTg0LjYsNjcuM2MtMC4zLDAtMC42LDAtMC45LDBjLTkuMSwwLTE2LjUsNy40LTE2LjUsMTYuNGMwLDAuMywwLDAuNiwwLDAuOSAgYy0xLjYsMC44LTMuMywxLjUtNS4xLDIuMWMtMC4yLTAuMi0wLjQtMC40LTAuNi0wLjZjLTMuMS0zLjEtNy4yLTQuOC0xMS42LTQuOHMtOC41LDEuNy0xMS42LDQuOGMtMC4yLDAuMi0wLjQsMC40LTAuNiwwLjYgIGMtMS43LTAuNi0zLjQtMS4zLTUuMS0yLjFjMC0wLjMsMC0wLjYsMC0wLjljMC05LjEtNy40LTE2LjQtMTYuNS0xNi40Yy0wLjMsMC0wLjYsMC0wLjksMGMtMC44LTEuNi0xLjUtMy4zLTIuMS01LjEgIGMwLjItMC4yLDAuNC0wLjQsMC42LTAuNmM2LjQtNi40LDYuNC0xNi44LDAtMjMuM2MtMC4yLTAuMi0wLjQtMC40LTAuNi0wLjZjMC42LTEuNywxLjMtMy40LDIuMS01LjFjMC4zLDAsMC42LDAsMC45LDAgIGM5LjEsMCwxNi41LTcuNCwxNi41LTE2LjRjMC0wLjMsMC0wLjYsMC0wLjljMS42LTAuOCwzLjMtMS41LDUuMS0yLjFjMC4yLDAuMiwwLjQsMC40LDAuNiwwLjZjMy4xLDMuMSw3LjIsNC44LDExLjYsNC44ICBzOC41LTEuNywxMS42LTQuOGMwLjItMC4yLDAuNC0wLjQsMC42LTAuNmMxLjcsMC42LDMuNCwxLjMsNS4xLDIuMWMwLDAuMywwLDAuNiwwLDAuOWMwLDkuMSw3LjQsMTYuNCwxNi41LDE2LjRjMC4zLDAsMC42LDAsMC45LDAgIGMwLjgsMS42LDEuNSwzLjMsMi4xLDUuMWMtMC4yLDAuMi0wLjQsMC40LTAuNiwwLjZjLTMuMSwzLjEtNC44LDcuMi00LjgsMTEuNnMxLjcsOC41LDQuOCwxMS42YzAuMiwwLjIsMC40LDAuNCwwLjYsMC42ICBDODYuMSw2NCw4NS40LDY1LjcsODQuNiw2Ny4zeiBNNTAsMjYuMmMtMTMuMSwwLTIzLjgsMTAuNy0yMy44LDIzLjhTMzYuOSw3My44LDUwLDczLjhTNzMuOCw2My4xLDczLjgsNTBTNjMuMSwyNi4yLDUwLDI2LjJ6ICAgTTUwLDY5LjhjLTEwLjksMC0xOS44LTguOS0xOS44LTE5LjhjMC0xMC45LDguOS0xOS44LDE5LjgtMTkuOFM2OS44LDM5LjEsNjkuOCw1MEM2OS44LDYwLjksNjAuOSw2OS44LDUwLDY5Ljh6XFxcIiAvPjwvc3ltYm9sPlwiXG59KTtcbnZhciByZXN1bHQgPSBzcHJpdGUuYWRkKHN5bWJvbCk7XG5leHBvcnQgZGVmYXVsdCBzeW1ib2xcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9pbWFnZXMvaWNvbnMvY29nLnN2Z1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgU3ByaXRlU3ltYm9sIGZyb20gXCJzdmctYmFrZXItcnVudGltZS9icm93c2VyLXN5bWJvbFwiO1xuaW1wb3J0IHNwcml0ZSBmcm9tIFwic3ZnLXNwcml0ZS1sb2FkZXIvcnVudGltZS9icm93c2VyLXNwcml0ZS5idWlsZFwiO1xudmFyIHN5bWJvbCA9IG5ldyBTcHJpdGVTeW1ib2woe1xuICBcImlkXCI6IFwiaGVhcnRcIixcbiAgXCJ1c2VcIjogXCJoZWFydC11c2FnZVwiLFxuICBcInZpZXdCb3hcIjogXCIwIDAgMTAwIDkwXCIsXG4gIFwiY29udGVudFwiOiBcIjxzeW1ib2wgY2xhc3M9XFxcImljb24gaWNvbi1oZWFydFxcXCIgdmlld0JveD1cXFwiMCAwIDEwMCA5MFxcXCIgaWQ9XFxcImhlYXJ0XFxcIj48cGF0aCBzdHlsZT1cXFwidGV4dC1pbmRlbnQ6MDt0ZXh0LXRyYW5zZm9ybTpub25lO2Jsb2NrLXByb2dyZXNzaW9uOnRiXFxcIiBkPVxcXCJNMjguMjE2NiAxMS4wMDRjLTYuMTg1NCAwLTEyLjM2ODIgMi4zNDItMTcuMDkzOCA3LTkuNDUxMiA5LjMxNi05LjQzOTYgMjQuNDkgMCAzMy44MTI1bDM2Ljc1IDM2LjMxMjZhMy4wMDAzIDMuMDAwMyAwIDAgMCA0LjIxODggMEM2NC4zNTYzIDc2LjA0IDc2LjYwOCA2My45Njg1IDg4Ljg3MjggNTEuODc5YzkuNDUxMi05LjMxNTggOS40NTEyLTI0LjUyNzggMC0zMy44NDM3LTkuNDUxMi05LjMxNTgtMjQuNzM2Mi05LjMxNi0zNC4xODc1IDBMNTAuMDI5IDIyLjYyOWwtNC43MTg3LTQuNjI1Yy00LjcyNTYtNC42NTgtMTAuOTA4NC03LTE3LjA5MzctN3ptMCA1Ljk2ODhjNC42NTI2IDAgOS4yOTYgMS43ODQ3IDEyLjg3NSA1LjMxMjVsNi44MTI0IDYuNjg3NWEzLjAwMDMgMy4wMDAzIDAgMCAwIDQuMjE4OCAwbDYuNzgxMi02LjY1NjNjNy4xNTgyLTcuMDU1NyAxOC41OTItNy4wNTU1IDI1Ljc1IDAgNy4xNTggNy4wNTU2IDcuMTU4IDE4LjIyNTggMCAyNS4yODEzLTExLjU1NjIgMTEuMzkxLTIzLjEgMjIuNzY1NS0zNC42NTYyIDM0LjE1NjNMMTUuMzQxNiA0Ny41NjY2Yy03LjE1MzYtNy4wNjQ3LTcuMTU4LTE4LjIyNTcgMC0yNS4yODEyIDMuNTc5LTMuNTI3OCA4LjIyMjMtNS4zMTI1IDEyLjg3NS01LjMxMjV6XFxcIiBvdmVyZmxvdz1cXFwidmlzaWJsZVxcXCIgY29sb3I9XFxcIiMwMDBcXFwiIC8+PC9zeW1ib2w+XCJcbn0pO1xudmFyIHJlc3VsdCA9IHNwcml0ZS5hZGQoc3ltYm9sKTtcbmV4cG9ydCBkZWZhdWx0IHN5bWJvbFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2ltYWdlcy9pY29ucy9oZWFydC5zdmdcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFNwcml0ZVN5bWJvbCBmcm9tIFwic3ZnLWJha2VyLXJ1bnRpbWUvYnJvd3Nlci1zeW1ib2xcIjtcbmltcG9ydCBzcHJpdGUgZnJvbSBcInN2Zy1zcHJpdGUtbG9hZGVyL3J1bnRpbWUvYnJvd3Nlci1zcHJpdGUuYnVpbGRcIjtcbnZhciBzeW1ib2wgPSBuZXcgU3ByaXRlU3ltYm9sKHtcbiAgXCJpZFwiOiBcImxvZ29cIixcbiAgXCJ1c2VcIjogXCJsb2dvLXVzYWdlXCIsXG4gIFwidmlld0JveFwiOiBcIjAgMCA2MDYgMjM5XCIsXG4gIFwiY29udGVudFwiOiBcIjxzeW1ib2wgdmlld0JveD1cXFwiMCAwIDYwNiAyMzlcXFwiIGlkPVxcXCJsb2dvXFxcIj48ZGVmcz48ZmlsdGVyIHg9XFxcIi01MCVcXFwiIHk9XFxcIi01MCVcXFwiIHdpZHRoPVxcXCIyMDAlXFxcIiBoZWlnaHQ9XFxcIjIwMCVcXFwiIGZpbHRlclVuaXRzPVxcXCJvYmplY3RCb3VuZGluZ0JveFxcXCIgaWQ9XFxcImxvZ29fYVxcXCI+PGZlT2Zmc2V0IGR4PVxcXCIxXFxcIiBkeT1cXFwiMVxcXCIgaW49XFxcIlNvdXJjZUFscGhhXFxcIiByZXN1bHQ9XFxcInNoYWRvd09mZnNldE91dGVyMVxcXCI+PC9mZU9mZnNldD48ZmVDb2xvck1hdHJpeCB2YWx1ZXM9XFxcIjAgMCAwIDAgMSAwIDAgMCAwIDEgMCAwIDAgMCAxIDAgMCAwIDAuMzIzMDAxNTg1IDBcXFwiIGluPVxcXCJzaGFkb3dPZmZzZXRPdXRlcjFcXFwiIHJlc3VsdD1cXFwic2hhZG93TWF0cml4T3V0ZXIxXFxcIj48L2ZlQ29sb3JNYXRyaXg+PGZlTWVyZ2U+PGZlTWVyZ2VOb2RlIGluPVxcXCJzaGFkb3dNYXRyaXhPdXRlcjFcXFwiPjwvZmVNZXJnZU5vZGU+PGZlTWVyZ2VOb2RlIGluPVxcXCJTb3VyY2VHcmFwaGljXFxcIj48L2ZlTWVyZ2VOb2RlPjwvZmVNZXJnZT48L2ZpbHRlcj48L2RlZnM+PGcgZmlsdGVyPVxcXCJ1cmwoI2xvZ29fYSlcXFwiIGZpbGw9XFxcIiNGRkZcXFwiIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCI+PHBhdGggZD1cXFwiTTI5Mi41OTUgNDAuMTI4YzQuMzY4IDAgMTAuMDgtLjU2IDE2LjM1Mi0xLjM0NC0xLjc5MiA2Ljk0NC01LjM3NiAxNy4wMjQtOC41MTIgMjUuNTM2LTguMTc2IDIyLjUxMi0xMi4yMDggMzQuMzg0LTE0LjY3MiA0My42OCAzLjM2IDUuNDg4IDcuMzkyIDguNjI0IDEyLjU0NCA5LjQwOCAyLjAxNi0xMi42NTYgNS4yNjQtMjUuNTM2IDExLjc2LTQ1LjM2IDMuMzYtMTAuMTkyIDkuNDA4LTI2LjU0NCAxMy42NjQtMzUuMDU2IDQuOTI4LS41NiA5Ljg1Ni0uODk2IDE0LjU2LS44OTYgMi42ODggMCA2LjgzMi4yMjQgMTAuNjQuNTYtMS4yMzItNi44MzItMy4yNDgtMTEuMzEyLTguNzM2LTExLjMxMi0zLjkyIDAtMjkuNTY4IDMuMTM2LTQ0LjkxMiAzLjEzNi01LjA0IDAtOS4wNzItLjMzNi0xMC45NzYtMS4yMzItLjU2IDEuMTItMS4wMDggMy4xMzYtMS4wMDggNC4yNTYgMCA0LjgxNiAzLjM2IDguNjI0IDkuMjk2IDguNjI0em0zOS4yODYyIDY1Ljk2OGMuMTEyIDIuMzUyIDIuNDY0IDcuMjggMy40NzIgNy4yOC41NiAwIDEuNjgtMS4xMiAyLjEyOC0yLjEyOCA2LjcyLTE1Ljc5MiAxOC41OTItMzIuMTQ0IDI5LjIzMi00MC4wOTYgMS41NjgtMS4yMzIgMy45Mi0yLjY4OCA0LjM2OC0yLjY4OC4xMTIgMCAuNDQ4LjMzNi40NDguNDQ4LTcuMjggMTQuNjcyLTEyLjY1NiAyOC43ODQtMTIuNjU2IDMzLjE1MiAwIDMuNDcyIDMuMDI0IDcuMDU2IDYuMDQ4IDcuMDU2IDIuMzUyIDAgMTAuODY0LTQuMDMyIDEwLjg2NC01LjE1MiAwLS4zMzYtLjExMi0uNjcyLS43ODQtMS43OTItLjMzNiAwLTEuNjguODk2LTMuOTIuODk2LTEuNDU2IDAtMS43OTItLjQ0OC0xLjc5Mi0xLjkwNCAwLTYuMDQ4IDExLjc2LTI2Ljg4IDIwLjk0NC0zNi45Ni0zLjM2LTQuMjU2LTguMjg4LTcuMDU2LTEyLjIwOC03LjA1Ni02LjgzMiAwLTE3LjY5NiA5LjI5Ni0zMS45MiAyNy40NCAyLjY4OC0xMC43NTIgNi4xNi0xOS4wNCAxMS44NzItMzAuMjQgNS4yNjQtMTAuMzA0IDE0LjU2LTIyLjUxMiAyNS43Ni0zMy45MzYtMi41NzYtMi44LTkuNDA4LTUuMzc2LTE0LjExMi01LjM3Ni0xMC4xOTIgMTEuNjQ4LTIwLjM4NCAyOC43ODQtMjYuNDMyIDQ0LjU3Ni02LjgzMiAxNy41ODQtMTEuMzEyIDM1Ljk1Mi0xMS4zMTIgNDYuNDh6bTk0LjUwMjItNDMuMzQ0Yy0zLjI0OCA2LjcyLTcuNzI4IDE1LjEyLTEwLjg2NCAyMC4zODQtOC4wNjQgMTMuNDQtMTMuNDQgMTkuNzEyLTE3LjgwOCAyMC42MDgtMS4wMDgtLjMzNi0xLjU2OC0xLjEyLTEuNTY4LTIuNjg4IDAtMTMuNzc2IDE0LjY3Mi0zMy42IDI2LjY1Ni0zNS41MDQtLjMzNi0yLjgtNS4zNzYtOC4wNjQtOC40LTguODQ4LTEyLjA5Ni42NzItMjguMjI0IDIzLjUyLTI4LjIyNCA0MC4yMDggMCA3LjcyOCAzLjgwOCAxMy4zMjggOS4yOTYgMTMuNTUyIDYuOTQ0LTEuMTIgMTYuOC0xMi4zMiAyMi44NDgtMjUuOTg0LTIuOCA3LjI4LTQuMjU2IDEzLjMyOC00LjI1NiAxNy40NzIgMCA1LjYgMi4wMTYgOC4yODggNi4wNDggOC4yODggMi4yNCAwIDUuNDg4LS44OTYgNy4yOC0yLjAxNi0yLjAxNi0xLjEyLTIuOTEyLTQuMDMyLTIuOTEyLTguMTc2IDAtNy42MTYgNC4xNDQtMjAuODMyIDEwLjE5Mi0zMy4zNzYuMTEyLTEuNDU2LTUuMTUyLTMuOTItOC4yODgtMy45MnptMjIuOTM0IDIuMzUyYy01LjcxMiAxMy43NzYtOS44NTYgMjguODk2LTkuODU2IDM2LjE3NiAwIDUuMjY0IDguNTEyIDExLjY0OCAxNS45MDQgMTEuODcyIDIuNDY0LS4yMjQgMTAuNTI4LTUuNiAxMi4yMDgtOC4xNzYtLjExMi0uNDQ4LS40NDgtMS4xMi0uNzg0LTEuNjgtMy4xMzYgMi40NjQtNy4yOCA0LjI1Ni0xMS43NiA0LjgxNi0yLjM1Mi0uMzM2LTMuNjk2LTIuMTI4LTMuNjk2LTUuNDg4IDAtOS4xODQgNC40OC0yMy43NDQgMTEuODcyLTM4LjA4IDUuMTUyLS4xMTIgOS43NDQtLjg5NiAxMy4zMjgtMi4yNCAwLTEuMjMyLS41Ni0yLjQ2NC0xLjIzMi0zLjEzNi0zLjEzNi4zMzYtNi4yNzIuNDQ4LTkuMTg0LjQ0OCAzLjY5Ni02LjI3MiA2LjQ5Ni0xMC42NCAxMC45NzYtMTYuMjQtMS40NTYtMS42OC04LjYyNC00LjAzMi0xMS42NDgtNC4wMzItMi40NjQgMS4zNDQtOC45NiAxMC45NzYtMTMuNDQgMTkuODI0LTMuMDI0LS4xMTItNi42MDgtLjQ0OC0xMC41MjgtLjY3MiAwIDIuMDE2Ljc4NCA1LjcxMiAxLjQ1NiA2LjYwOGg2LjM4NHptNDAuODU0My0xMy44ODhjOC42MjQtNS42IDEzLjc3Ni0xNi4wMTYgMTYuMjQtMjkuNDU2LTEuOTA0LTMuNjk2LTguNjI0LTYuNjA4LTE1LjY4LTcuMDU2IDEuMDA4IDQuMjU2IDEuMzQ0IDguMTc2IDEuMzQ0IDExLjg3MiAwIDguMjg4LTEuOTA0IDE1LjIzMi0zLjY5NiAyMC4zODQgMCAxLjU2OC44OTYgMy40NzIgMS43OTIgNC4yNTZ6bTM5LjczNCAxMi4yMDhjLS44OTYtMy40NzItOS41Mi0xMi4yMDgtMTIuODgtMTMuMTA0LTcuODQgMS42OC0xNC43ODQgMTAuMzA0LTE0Ljc4NCAxOC4yNTYgMCA2LjI3MiAzLjQ3MiAxMi43NjggMy40NzIgMjAuMzg0LTEyLjk5Mi44OTYtMjMuMDcyIDEwLjUyOC0yMy4wNzIgMjEuOTUyIDEuMjMyIDQuMTQ0IDYuMzg0IDguNCAxMC42NCA4LjczNiAxMS45ODQtMS4yMzIgMTkuMjY0LTkuMjk2IDE5LjI2NC0yMS43MjggMC0xLjc5Mi0uMTEyLTIuOTEyLS4xMTItNC4wMzIgMC0xLjY4LjU2LTEuOTA0IDcuNTA0LTMuNDcyLjIyNC0uMjI0LjQ0OC0uODk2LjQ0OC0xLjQ1NiAwLS41NiAwLS42NzItLjExMi0uODk2LTIuMzUyIDAtNC43MDQuMTEyLTcuODQuMjI0LS4xMTItLjIyNC0uMTEyLS40NDgtLjExMi0xLjM0NCAwLTE0LjMzNiAzLjI0OC0yMi4wNjQgOS4xODQtMjIuMDY0IDEuNTY4IDAgMi42ODggMS41NjggMi42ODggMy42OTYgMCAxLjc5Mi0xLjc5MiA1LjE1Mi0xLjc5MiA2LjA0OC4xMTIgMS4wMDguNTYgMS41NjggMS40NTYgMS42OCAyLjM1MiAwIDUuNzEyLTcuMTY4IDYuMDQ4LTEyLjg4em0tMzYuOTYgNTEuMDcyYy0xLjQ1Ni0xLjAwOC0yLjI0LTIuMzUyLTIuMjQtNC4wMzIgMC01LjE1MiA5LjYzMi0xNC44OTYgMTUuNDU2LTE1LjY4IDAgNy43MjgtNi4wNDggMTYuOC0xMy4yMTYgMTkuNzEyek03Ni42NDU1IDkxLjUxMmMtLjIyNC0uODk2LS4zMzYtMS45MDQtLjMzNi01LjA0IDAtMTcuODA4IDExLjg3Mi01OC4zNTIgMjAuMzg0LTcxLjkwNC44OTYgMjUuODcyIDMuMDI0IDQ2LjkyOCA5LjE4NCA3MS45MDQgMS41NjggMy4xMzYgNy41MDQgNC45MjggMTQuMzM2IDQuOTI4LjQ0OCAwIDEuMDA4IDAgMS40NTYtLjExMi0uMTEyLS4xMTItLjExMi0uMjI0LS4xMTItLjMzNi4zMzYtMTcuOTIgMTQuODk2LTc2LjI3MiAyOS4xMi04Mi4wOTYtMS42OC0zLjI0OC02LjQ5Ni02LjgzMi05Ljc0NC03LjM5Mi01LjYuNjcyLTE2LjkxMiAzNy41Mi0yNC4wOCA3My40NzItNC41OTItMTYuMTI4LTUuMzc2LTMxLjQ3Mi01LjM3Ni00Ny43MTIgMC04LjE3Ni41Ni0xNi4xMjggMS4yMzItMTkuNzEyLS42NzItMi4wMTYtMTMuMzI4LTYuOTQ0LTE3LjQ3Mi02Ljk0NGwuNzg0IDQuNzA0Yy05Ljg1NiAxNC0zMC4yNCA2NC4yODgtMzAuMjQgNzcuODQgMCA0LjAzMiAyLjM1MiA1LjgyNCAxMC44NjQgOC40em03NC4yMzAyLTQuNTkyYzE3LjkyLTMuODA4IDMwLjgtMTkuODI0IDMwLjgtMzguNTI4IDAtNy4xNjgtMS45MDQtMTAuNTI4LTUuOTM2LTEwLjUyOC0uNjcyIDAtMS4zNDQuMTEyLTIuMDE2LjExMi0yLjI0LTMuOTItNC43MDQtNi43Mi03LjA1Ni03Ljk1Mi0zLjQ3MiAwLTcuNTA0IDEuNTY4LTExLjUzNiA0LjU5Mi0xMC41MjggNy43MjgtMTguMjU2IDIyLjE3Ni0xOC4yNTYgMzQuMTYgMCAxMC4wOCA1LjQ4OCAxNy4yNDggMTQgMTguMTQ0em01LjcxMi0zNS4yOGMzLjY5Ni00LjgxNiA4Ljk2LTkuNjMyIDE1LjQ1Ni0xMS41MzYgMS4wMDggMS41NjggMS40NTYgMy42OTYgMS40NTYgNy41MDQgMCAxNy40NzItOS43NDQgMzEuODA4LTIzLjA3MiAzNC43Mi0xLjQ1Ni0uNDQ4LTIuOTEyLTQuMzY4LTIuOTEyLTcuOTUyIDAtNS45MzYgMy45Mi0xNS45MDQgOS4wNzItMjIuNzM2em0yOS4zMTggMjYuNzY4YzAgNC4zNjggMS45MDQgNy4zOTIgNi42MDggOC44NDggNC43MDQtNi4zODQgNi44MzItMTAuMzA0IDEyLjU0NC0xNy45MiAyLjgtMy41ODQgOC43MzYtMTAuOTc2IDExLjA4OC0xMi4wOTYtLjIyNCAyLjQ2NC0uNjcyIDQuMzY4LTIuMzUyIDEwLjk3Ni0uODk2IDMuNTg0LTEuMjMyIDYuMzg0LTEuMjMyIDEwLjc1MiAwIDQuMTQ0IDIuNDY0IDcuMTY4IDUuOTM2IDcuMTY4IDMuMTM2IDAgMTEuNjQ4LTkuMjk2IDE3LjI0OC0xNS4zNDQgMTMuNzc2LTE0Ljc4NCAyMC4wNDgtMjMuNjMyIDIxLjUwNC00MC4yMDgtLjQ0OC0uMzM2LTEuMzQ0LS41Ni0yLjQ2NC0uNTYtMi41NzYgMC02LjI3Mi44OTYtNy4xNjggMi4xMjgtMi44IDE0LjY3Mi00LjE0NCAyMC4xNi05Ljg1NiAyOC44OTYtNC41OTIgNy4wNTYtMTIuMjA4IDE1Ljc5Mi0xMy41NTIgMTYuMzUyIDIuMDE2LTEwLjc1MiA1LjM3Ni0zMy44MjQgMTAuMTkyLTM5Ljk4NC0uMzM2LTEuNzkyLTQuNzA0LTIuNDY0LTcuNjE2LTIuNDY0LS43ODQgMC0xLjQ1NiAwLTEuOTA0LjExMi0yLjkxMiAyLjkxMi0zLjkyIDYuOTQ0LTQuODE2IDkuNjMyLTEuMjMyIDMuNDcyLTIuMTI4IDUuODI0LTYuODMyIDEwLjE5Mi0zLjM2IDMuMTM2LTcuOTUyIDguNzM2LTEyLjg4IDE1LjIzMiAxLjY4LTExLjA4OCAyLjY4OC0yNi4zMiAxMS40MjQtMzMuMzc2LS41Ni0xLjY4LTQuNDgtMi44LTcuNzI4LTIuOC02LjA0OCAwLTEwLjMwNCA0LjAzMi0xMi4yMDggMTAuOTc2LTIuOTEyIDEwLjUyOC01LjkzNiAyNy41NTItNS45MzYgMzMuNDg4elxcXCIgLz48cGF0aCBkPVxcXCJNMi41NTIgMjExLjQ3MmM2LjM5NiAxMy42MTIgMTkuNTE2IDIwLjk5MiAzNy4zOTIgMjAuOTkyIDM5LjAzMiAwIDczLjE0NC0zOC4yMTIgNzMuMTQ0LTgwLjg1MiAwLTMxLjMyNC0yNC43NjQtNTIuNjQ0LTU5LjY5Ni01Mi42NDQtMjcuNzE2IDAtNDguNTQ0IDEzLjQ0OC01Mi44MDggMzMuNjIgMS4zMTIgNi43MjQgNi4wNjggMTEuNDggMTAuOTg4IDEzLjEyIDUuMDg0LTE3LjM4NCAxNS4yNTItMjkuMTkyIDI4Ljg2NC0zNC43NjgtNC41OTIgMTUuNDE2LTI4LjIwOCA3OC41NTYtMzcuODg0IDEwMC41MzJ6bTU3Ljg5Mi0xMDQuMzA0YzIzLjc4IDAgMzguODY4IDEzLjEyIDM4Ljg2OCAzNS41ODggMCA0MC4zNDQtMjkuNjg0IDc1LjQ0LTY1LjI3MiA3NS40NC01LjA4NCAwLTkuNjc2LS40OTItMTIuNjI4LTEuNDc2IDAtNi4yMzIgNS4yNDgtMjEuNjQ4IDE3LjcxMi00OS4zNjQgOS44NC0yMS44MTIgMjAuODI4LTQzLjEzMiAyNC4yNzItNDcuODg4LTIuMjk2LTIuMTMyLTkuMDItNi41Ni0xOC41MzItMTAuMDA0IDQuNzU2LTEuNDc2IDEwLjAwNC0yLjI5NiAxNS41OC0yLjI5NnptMTExLjc2OCA0NC45MzZjLTQuNDI4LTUuNTc2LTkuMTg0LTguNjkyLTE0LjEwNC05LjM0OC0yMS42NDggMC00Ni4yNDggMzEuNjUyLTQ2LjI0OCA1OC41NDggMCAxMy4xMiA4Ljg1NiAyMy40NTIgMjMuOTQ0IDI1LjA5MiAxMC4zMzItMi4yOTYgMjIuOTYtMTEuNjQ0IDMyLjgtMjQuNi0uODItLjk4NC0xLjY0LTEuODA0LTIuNzg4LTIuNzg4LTYuODg4IDcuMzgtMTguMjA0IDE5LjE4OC0zMC4wMTIgMTkuMTg4LTYuMjMyIDAtNy41NDQtNy41NDQtNy41NDQtMTMuMTIgMC0xLjQ3Ni4xNjQtMi45NTIuMTY0LTQuMjY0IDI3Ljg4LTExLjE1MiA0Mi4xNDgtMjEuODEyIDQzLjc4OC00OC43MDh6bS0xMS4zMTYgNS40MTJjLS44MiAxNC45MjQtMTMuNzc2IDI4LjM3Mi0zMS4xNiAzNy4wNjQgNS4yNDgtMjAuMzM2IDE5LjE4OC0zNS40MjQgMzEuMTYtMzcuMDY0em0xMS45NjggNTMuMTRjMCA2LjI3OCAxLjMxNCAxMS44MjYgMy4wNjYgMTIuOTk0IDEuMzE0Ljg3NiAzLjUwNCAzLjIxMiAzLjk0MiA0LjIzNC41ODQgMS4zMTQgMi43NzQgMi40ODIgNS40MDIgMi43NzQtLjE0Ni0uNzMtLjE0Ni0uODc2LS4xNDYtNC4yMzQgMC0xMi4yNjQgNC4zOC0zMS4yNDQgMTIuNTU2LTU0LjAyIDkuNjM2LTI2LjcxOCAyMC41ODYtNDYuNDI4IDM1Ljc3LTY0LjM4Ni0xLjYwNi0yLjQ4Mi0xMS42OC04LjMyMi0xNi4zNTItOS4xOTgtMTAuMDc0IDEyLjI2NC0yMC41ODYgMzQuMDE4LTMyLjU1OCA2Ni43MjItNy40NDYgMjAuNDQtMTEuNjggMzYuNjQ2LTExLjY4IDQ1LjExNHptMzQuMjE2OC0zLjExOGMwIDEwLjk3NCAxMS43MTggMTUuODEgMTMuNTc4IDE1LjgxIDEuMTE2IDAgMS4xMTYtMS42NzQgMS4xMTYtNi4xMzguMTg2LTUuMzk0IDIuOTc2LTEzLjM5MiA1LjU4LTIwLjI3NCA2LjMyNC0xNi4zNjggOS42NzItMjkuNTc0IDIxLjAxOC00Mi4yMjItNC44MzYtNy4yNTQtMTMuMjA2LTExLjM0Ni0xNy4yOTgtMTIuMjc2LTExLjE2IDUuNTgtMTYuNTU0IDI0LjkyNC0xNy42NyAyOS43Ni00LjgzNiAyMi4zMi02LjMyNCAzMS4wNjItNi4zMjQgMzUuMzR6bTM1LjUyNi04MC43MjRjMCAyLjA0NiAyLjYwNCA0LjQ2NCA1LjU4IDUuMDIyIDEuODYtNC4wOTIgMTUuNDM4LTIwLjY0NiAyMS4wMTgtMjUuODU0LTMuNzItNS41OC0xNi43NC0xMy4wMi0yMi41MDYtMTMuMDItMy4xNjIgNy45OTgtNS43NjYgMjAuMDg4LTUuNzY2IDI0LjM2NiAwIDIuMDQ2LjkzIDQuODM2IDIuMjMyIDYuMTM4LS4zNzIgMS40ODgtLjU1OCAyLjYwNC0uNTU4IDMuMzQ4em0xLjA0MSA2NC4zMjJjMCAxNy4yMiAxMS42NDQgMzIuMzA4IDI2LjA3NiAzMy42MiA3LjM4LTEuMzEyIDIwLjgyOC0xMC42NiAyOC4wNDQtMTkuNjggMC0uOTg0LS44Mi0yLjYyNC0xLjY0LTMuMjgtMTAuMTY4IDcuNTQ0LTIxLjk3NiAxMy4yODQtMjguMzcyIDE0LjEwNC0zLjkzNi0xLjgwNC01LjkwNC03LjA1Mi01LjkwNC0xNS45MDggMC0xMy45NCA1LjA4NC0yNy4wNiAxNC40MzItMzcuNTU2IDYuMDY4LTYuNzI0IDEzLjQ0OC0xMS4zMTYgMTcuNzEyLTExLjMxNiAyLjQ2IDAgMy43NzIgMS42NCAzLjc3MiA0Ljc1NiAwIDUuNDEyLTMuNjA4IDExLjQ4LTEwLjk4OCAxOC4yMDQgMS44MDQgMi42MjQgNC43NTYgNC40MjggNy4zOCA0LjQyOCA2LjIzMiAwIDEyLjQ2NC05Ljg0IDEyLjQ2NC0xOS44NDQgMC0xMC40OTYtNi4zOTYtMTYuNC0xNy43MTItMTYuNC0yMi45NiAwLTQ1LjI2NCAyNC4xMDgtNDUuMjY0IDQ4Ljg3MnptNjMuMDYgMTcuODc2YzAgOS42NzYgMTAuMzMyIDEzLjk0IDExLjk3MiAxMy45NC45ODQgMCAuOTg0LTEuNDc2Ljk4NC01LjQxMi4xNjQtNC43NTYgMi42MjQtMTEuODA4IDQuOTItMTcuODc2IDUuNTc2LTE0LjQzMiA4LjUyOC0yNi4wNzYgMTguNTMyLTM3LjIyOC00LjI2NC02LjM5Ni0xMS42NDQtMTAuMDA0LTE1LjI1Mi0xMC44MjQtOS44NCA0LjkyLTE0LjU5NiAyMS45NzYtMTUuNTggMjYuMjQtNC4yNjQgMTkuNjgtNS41NzYgMjcuMzg4LTUuNTc2IDMxLjE2em0zMS4zMjQtNzEuMTc2YzAgMS44MDQgMi4yOTYgMy45MzYgNC45MiA0LjQyOCAxLjY0LTMuNjA4IDEzLjYxMi0xOC4yMDQgMTguNTMyLTIyLjc5Ni0zLjI4LTQuOTItMTQuNzYtMTEuNDgtMTkuODQ0LTExLjQ4LTIuNzg4IDcuMDUyLTUuMDg0IDE3LjcxMi01LjA4NCAyMS40ODQgMCAxLjgwNC44MiA0LjI2NCAxLjk2OCA1LjQxMi0uMzI4IDEuMzEyLS40OTIgMi4yOTYtLjQ5MiAyLjk1MnptMjEuNTY4IDg3LjkwNGMyNi4yNC01LjU3NiA0NS4xLTI5LjAyOCA0NS4xLTU2LjQxNiAwLTEwLjQ5Ni0yLjc4OC0xNS40MTYtOC42OTItMTUuNDE2LS45ODQgMC0xLjk2OC4xNjQtMi45NTIuMTY0LTMuMjgtNS43NC02Ljg4OC05Ljg0LTEwLjMzMi0xMS42NDQtNS4wODQgMC0xMC45ODggMi4yOTYtMTYuODkyIDYuNzI0LTE1LjQxNiAxMS4zMTYtMjYuNzMyIDMyLjQ3Mi0yNi43MzIgNTAuMDIgMCAxNC43NiA4LjAzNiAyNS4yNTYgMjAuNSAyNi41Njh6bTguMzY0LTUxLjY2YzUuNDEyLTcuMDUyIDEzLjEyLTE0LjEwNCAyMi42MzItMTYuODkyIDEuNDc2IDIuMjk2IDIuMTMyIDUuNDEyIDIuMTMyIDEwLjk4OCAwIDI1LjU4NC0xNC4yNjggNDYuNTc2LTMzLjc4NCA1MC44NC0yLjEzMi0uNjU2LTQuMjY0LTYuMzk2LTQuMjY0LTExLjY0NCAwLTguNjkyIDUuNzQtMjMuMjg4IDEzLjI4NC0zMy4yOTJ6bTg0LjIxNiA0Mi4zMTJjNS4wODQgMy40NDQgMTIuNjI4IDYuMzk2IDE1LjU4IDYuMzk2IDAgMCAuNjU2LS4xNjQuNjU2LS42NTYgMC0yLjEzMi0zLjYwOC01Ljc0LTMuNjA4LTE1LjA4OCAwLTE3LjIyIDEyLjYyOC0zNS41ODggMjAuNjY0LTU0Ljc3Ni0xLjk2OC0yLjQ2LTkuODQtNS4yNDgtMTUuNTgtNS4yNDgtNy4zOCA3LjA1Mi0xMC44MjQgMTYuNTY0LTEyLjc5MiAyMS45NzYtMy42MDggOS42NzYtMTEuNjQ0IDE5LjY4LTE2LjA3MiAyNS43NDgtOS4wMiAxMi4zLTEzLjQ0OCAxNy43MTItMTYuNzI4IDE5LjAyNC0uMzI4LS4zMjgtMS4xNDgtMS4zMTItMS4xNDgtMi45NTIgMC01Ljc0IDQuNzU2LTIwLjY2NCA2Ljg4OC0yNS41ODQgOS44NC0yMy4yODggMTguODYtMzUuNzUyIDIwLjgyOC0zNy44ODQtMy4yOC0zLjc3Mi0xMC44MjQtNS4wODQtMTQuNTk2LTUuMDg0LTEzLjc3NiAxMC4wMDQtMjUuNDIgMzcuNzItMjkuMzU2IDU0LjI4NC0uOTg0IDQuNTkyLTEuMzEyIDcuODcyLTEuMzEyIDEzLjk0IDEuODA0IDcuNzA4IDEwLjk4OCAxMi40NjQgMTcuODc2IDEyLjc5MiAxLjQ3Ni0uMTY0IDQuMjY0LTIuMTMyIDcuMDUyLTUuMDg0IDMuNjA4LTQuMjY0IDE1LjQxNi0yMS4xNTYgMTcuMjItMjAuOTkyLS40OTIgMS40NzYtLjgyIDMuNDQ0LS44MiA1LjkwNCAwIDMuNzcyIDEuMTQ4IDkuODQgNS4yNDggMTMuMjg0em04Ny45ODgtNjEuNjY0Yy0xLjMxMi01LjA4NC0xMy45NC0xNy44NzYtMTguODYtMTkuMTg4LTExLjQ4IDIuNDYtMjEuNjQ4IDE1LjA4OC0yMS42NDggMjYuNzMyIDAgOS4xODQgNS4wODQgMTguNjk2IDUuMDg0IDI5Ljg0OC0xOS4wMjQgMS4zMTItMzMuNzg0IDE1LjQxNi0zMy43ODQgMzIuMTQ0IDEuODA0IDYuMDY4IDkuMzQ4IDEyLjMgMTUuNTggMTIuNzkyIDE3LjU0OC0xLjgwNCAyOC4yMDgtMTMuNjEyIDI4LjIwOC0zMS44MTYgMC0yLjYyNC0uMTY0LTQuMjY0LS4xNjQtNS45MDQgMC0yLjQ2LjgyLTIuNzg4IDEwLjk4OC01LjA4NC4zMjgtLjMyOC42NTYtMS4zMTIuNjU2LTIuMTMyIDAtLjgyIDAtLjk4NC0uMTY0LTEuMzEyLTMuNDQ0IDAtNi44ODguMTY0LTExLjQ4LjMyOC0uMTY0LS4zMjgtLjE2NC0uNjU2LS4xNjQtMS45NjggMC0yMC45OTIgNC43NTYtMzIuMzA4IDEzLjQ0OC0zMi4zMDggMi4yOTYgMCAzLjkzNiAyLjI5NiAzLjkzNiA1LjQxMiAwIDIuNjI0LTIuNjI0IDcuNTQ0LTIuNjI0IDguODU2LjE2NCAxLjQ3Ni44MiAyLjI5NiAyLjEzMiAyLjQ2IDMuNDQ0IDAgOC4zNjQtMTAuNDk2IDguODU2LTE4Ljg2em0tNTQuMTIgNzQuNzg0Yy0yLjEzMi0xLjQ3Ni0zLjI4LTMuNDQ0LTMuMjgtNS45MDQgMC03LjU0NCAxNC4xMDQtMjEuODEyIDIyLjYzMi0yMi45NiAwIDExLjMxNi04Ljg1NiAyNC42LTE5LjM1MiAyOC44NjR6bTU2LjgyOC00MC4zNDRjMCA5LjY3NiA0LjU5MiAxMS4zMTYgMTAuMDA0IDEyLjc5MiA3LjA1Mi0zOS41MjQgMjkuMzU2LTc2LjkxNiA1MS44MjQtOTUuNDQ4LS45ODQtNS40MTItMTEuMzE2LTE0Ljc2LTE4LjIwNC0xNi4yMzYtMTIuNzkyIDkuMzQ4LTQzLjYyNCA4MC44NTItNDMuNjI0IDk4Ljg5MnptLTMuNjA4IDQzLjQ2YzYuNTYgMCA4Ljg1Ni0xMC4wMDQgMTMuOTQtMTUuNTgtMi45NTItNS4yNDgtMTAuMTY4LTEwLjMzMi0xNi4yMzYtMTAuMzMyLTQuOTIgMC03LjcwOCAxMi42MjgtNy43MDggMTguMDQgMCAyLjI5NiA0LjkyIDcuODcyIDEwLjAwNCA3Ljg3MnpcXFwiIC8+PC9nPjwvc3ltYm9sPlwiXG59KTtcbnZhciByZXN1bHQgPSBzcHJpdGUuYWRkKHN5bWJvbCk7XG5leHBvcnQgZGVmYXVsdCBzeW1ib2xcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9pbWFnZXMvaWNvbnMvbG9nby5zdmdcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFNwcml0ZVN5bWJvbCBmcm9tIFwic3ZnLWJha2VyLXJ1bnRpbWUvYnJvd3Nlci1zeW1ib2xcIjtcbmltcG9ydCBzcHJpdGUgZnJvbSBcInN2Zy1zcHJpdGUtbG9hZGVyL3J1bnRpbWUvYnJvd3Nlci1zcHJpdGUuYnVpbGRcIjtcbnZhciBzeW1ib2wgPSBuZXcgU3ByaXRlU3ltYm9sKHtcbiAgXCJpZFwiOiBcImxvZ291dFwiLFxuICBcInVzZVwiOiBcImxvZ291dC11c2FnZVwiLFxuICBcInZpZXdCb3hcIjogXCIwIDAgMTAwIDEwMFwiLFxuICBcImNvbnRlbnRcIjogXCI8c3ltYm9sIHZpZXdCb3g9XFxcIjAgMCAxMDAgMTAwXFxcIiBpZD1cXFwibG9nb3V0XFxcIj48ZyBkaXNwbGF5PVxcXCJub25lXFxcIj48ZyBkaXNwbGF5PVxcXCJpbmxpbmVcXFwiPjxwYXRoIGQ9XFxcIk03NS4zMDksNTYuNDQzYzMuMDY2LTIuMDMyLDYuMTMzLTQuMDY1LDkuMTk5LTYuMDk4Yy0xLjU3OC0zLjg4NC0yLjkzOS03LjkyMy00LjUxOC0xMS44MSAgICBjLTIuOTc1LDIuMjcyLTUuOTQ5LDQuNTQzLTguOTI1LDYuODE0QzcyLjU0OCw0OSw3My44MjUsNTIuNzk0LDc1LjMwOSw1Ni40NDN6XFxcIiAvPjxwYXRoIGQ9XFxcIk02Ni4xMDksNjIuNTM5YzEuMzg1LDMuNDE1LDIuOTYxLDYuNjk0LDUuMTA0LDkuNTdjMy4xODUtMS44MTIsNi4zNjYtMy42MjQsOS41NTEtNS40MzcgICAgYy0yLjI5LTMuMDc0LTMuOTc1LTYuNTgtNS40NTUtMTAuMjI5QzcyLjI0MSw1OC40NzUsNjkuMTc1LDYwLjUwOCw2Ni4xMDksNjIuNTM5elxcXCIgLz48cGF0aCBkPVxcXCJNOTAuMzE0LDYxLjIzNWMtMy4xODQsMS44MTItNi4zNjYsMy42MjQtOS41NTEsNS40MzhjMi4yOSwzLjA3Miw1LjE4OCw1LjcxNCw5LjA5Nyw3LjYzNSAgICBjMy4zOC0xLjY0OSw2Ljc2MS0zLjI5NywxMC4xNC00Ljk0NEM5NS44MzgsNjcuMzE4LDkyLjc1NSw2NC41MDcsOTAuMzE0LDYxLjIzNXpcXFwiIC8+PHBhdGggZD1cXFwiTTcxLjIxMyw3Mi4xMDljLTMuMTg0LDEuODEzLTYuMzY4LDMuNjI1LTkuNTUzLDUuNDM4Yy0xLjk5NC0yLjY3Ny0zLjQ2LTUuNzMxLTQuNzUyLTguOTA5ICAgIGMzLjA2Ni0yLjAzNCw2LjEzNi00LjA2NCw5LjIwMS02LjA5OWMtMS4zODctMy40MTQtMi41ODQtNi45NjMtMy45NzEtMTAuMzc3Yy0yLjk3NSwyLjI3MS01Ljk0OSw0LjU0Mi04LjkyNCw2LjgxMyAgICBjLTEuMjkxLTMuMTgtMi43NTctNi4yMzItNC43NTMtOC45MTFjMi44NTgtMi40OSw1LjcxNi00Ljk4MSw4LjU3NC03LjQ3MWMtMi4xNDQtMi44NzYtNC44NTQtNS4zNDYtOC41MTEtNy4xNDQgICAgYzIuNjYxLTIuNjU1LDUuMzI0LTUuMzA5LDcuOTg4LTcuOTY1YzMuOTA3LDEuOTIyLDYuODA0LDQuNTYyLDkuMDk1LDcuNjM2YzIuODU4LTIuNDkxLDUuNzE2LTQuOTgxLDguNTc0LTcuNDczICAgIGMtMi40MzgtMy4yNzEtNS41MjItNi4wODItOS42ODUtOC4xMjdsLTMuMjQ0LDAuMDI4Yy0yLjY2MiwyLjY1Ni01LjMyNCw1LjMxMi03Ljk4Nyw3Ljk2N2MtMi42NjIsMi42NTUtNS4zMjUsNS4zMS03Ljk4Niw3Ljk2NSAgICBjLTIuNjYyLDIuNjU0LTUuMzI1LDUuMzEtNy45ODYsNy45NjVjMy40MDMsMS42NzMsNS45MjcsMy45NzMsNy45MjIsNi42NDljMS45OTYsMi42NzYsMy40NjIsNS43Myw0Ljc1Myw4LjkwOSAgICBjMS4yOSwzLjE3OSwyLjQwMyw2LjQ4NCwzLjY5NCw5LjY2MmMxLjI5MSwzLjE4MSwyLjc1OCw2LjIzMiw0Ljc1Myw4LjkwOXM0LjUxOCw0Ljk3Nyw3LjkyMyw2LjY0OGwzLjI0Ni0wLjAyOSAgICBjMy4zNzktMS42NDcsNi43NTktMy4yOTYsMTAuMTM2LTQuOTQzQzc2LjA2Niw3Ny40NTYsNzMuMzU1LDc0Ljk4NCw3MS4yMTMsNzIuMTA5elxcXCIgLz48cGF0aCBkPVxcXCJNNjUuNjA4LDM1LjEyMWMtMi44NTYsMi40OTEtNS43MTYsNC45ODEtOC41NzIsNy40NzNjMi4xNDIsMi44NzUsMy43MTcsNi4xNTUsNS4xMDMsOS41NjggICAgYzIuOTc3LTIuMjcxLDUuOTUxLTQuNTQyLDguOTI3LTYuODEyQzY5LjU4NSw0MS42OTksNjcuOSwzOC4xOTQsNjUuNjA4LDM1LjEyMXpcXFwiIC8+PC9nPjxwYXRoIGRpc3BsYXk9XFxcImlubGluZVxcXCIgZD1cXFwiTTEuNDA2LDcyLjY2NGMxLjAwNSwxLjAwNCwyLjAzMSwxLjYwNywyLjI5NCwxLjM0Nmw1NS43OC01NS43ODFjMC4yNjMtMC4yNjEtMC4zNC0xLjI5LTEuMzQ2LTIuMjk0ICAgYy0xLjAwNC0xLjAwNC0yLjAzLTEuNjA2LTIuMjkyLTEuMzQ0TDAuMDYyLDcwLjM3MUMtMC4yMDEsNzAuNjMxLDAuNDAxLDcxLjY2LDEuNDA2LDcyLjY2NHpcXFwiIC8+PC9nPjxnIGRpc3BsYXk9XFxcIm5vbmVcXFwiPjxwYXRoIGRpc3BsYXk9XFxcImlubGluZVxcXCIgZD1cXFwiTTk1LjkzMyw0MC4xMzRoLTMuOTQ3Yy0xLjE2OS02LjU1LTMuNjg3LTExLjg4My04LjE1MS0xMS44ODNIOC45NjVDMi4zNDgsMjguMjUxLDAsMzkuOTY3LDAsNTAgICBzMi4zNDgsMjEuNzQ5LDguOTY1LDIxLjc0OWg3NC44NjljNC40NjUsMCw2Ljk4Mi01LjMzMyw4LjE1MS0xMS44ODRoMy45NDdjMy4wMDMsMCw0LjA2Ny01LjMxNCw0LjA2Ny05Ljg2NSAgIEMxMDAsNDUuNDQ5LDk4LjkzNiw0MC4xMzQsOTUuOTMzLDQwLjEzNHogTTQuMzc0LDM5LjM2NWMwLjcwMS0zLjIzMSwxLjcxLTUuNjkzLDIuODktNi45MTZoMC4wMjVoMC4yNTNIODUuNTFoMC4wMjUgICBjMS4xODEsMS4yMjMsMi4xODksMy42ODQsMi44OTEsNi45MTZINC4zNzR6IE05Mi42MTYsNDUuMTc1Yy0wLjA4MS0xLjA1NS0wLjE5My0yLjEwNS0wLjMzMi0zLjEzNmg0LjQwOWgwLjAxMSAgIGMwLjUzNiwwLjU1NCwwLjk5MiwxLjY3MSwxLjMxLDMuMTM2SDkyLjYxNnpcXFwiIC8+PC9nPjxnIGRpc3BsYXk9XFxcIm5vbmVcXFwiPjxwYXRoIGRpc3BsYXk9XFxcImlubGluZVxcXCIgZD1cXFwiTTk4Ljk0Myw3My4yNzJjMC41OCwwLDEuMDU2LTAuNDc2LDEuMDU2LTEuMDU2di00LjIxOWMwLTAuNTgtMC40NzYtMS4wNTUtMS4wNTYtMS4wNTVIMjguNDAyICAgYy0wLjcwNCwxLjU1NS0yLjI2MSwyLjY0My00LjA3OSwyLjY0M2MtMS44MTcsMC0zLjM3NS0xLjA4OC00LjA3OS0yLjY0M2gtMy41N2wtMC42MTgsMC42MTggICBjLTMuNDk4LDMuNDk3LTUuNDI0LDguMTQ2LTUuNDI0LDEzLjA5M2MwLDQuOTQ3LDEuOTI3LDkuNTk5LDUuNDI0LDEzLjA5NWwwLjYxOCwwLjYxOWgzLjQ5NWMwLjY2NC0xLjY0NywyLjI3LTIuODEzLDQuMTU0LTIuODEzICAgYzEuODg1LDAsMy40OTEsMS4xNjYsNC4xNTQsMi44MTNoNzAuNDY4YzAuNTc4LDAsMS4wNTUtMC40NzYsMS4wNTUtMS4wNTZ2LTQuMjJjMC0wLjU3OS0wLjQ3Ny0xLjA1NS0xLjA1NS0xLjA1NWgtNC4zNCAgIGMtMS4zMzQtMi4yMDUtMi4wNDktNC43NC0yLjA0OS03LjM4NWMwLTIuNjQzLDAuNzE1LTUuMTc3LDIuMDQ5LTcuMzgzaDQuMzM4VjczLjI3MnogTTIzLjUzNiw4OC4wNGgtNC4wODUgICBjLTEuNjE0LTIuMTExLTIuNDg4LTQuNjgyLTIuNDg4LTcuMzg1YzAtMi43MDEsMC44NzQtNS4yNzEsMi40ODktNy4zODNoNC4wODRoNjYuMzRjLTAuNDkxLDEuMTMyLTAuODcsMi4zMTEtMS4xMywzLjUyNUg2MS40MjUgICBjLTAuODczLDAtMS41ODIsMC43MDktMS41ODIsMS41ODJzMC43MDksMS41ODIsMS41ODIsMS41ODJoMjYuOTQ4Yy0wLjAwOCwwLjIzMS0wLjAzNiwwLjQ2MS0wLjAzNiwwLjY5MiAgIGMwLDIuNTg1LDAuNTM4LDUuMDg0LDEuNTM5LDcuMzg0aC02Ni4zNFY4OC4wNHpcXFwiIC8+PHBhdGggZGlzcGxheT1cXFwiaW5saW5lXFxcIiBkPVxcXCJNOTguOTQzLDExLjk2MWMwLjU4LDAsMS4wNTYtMC40NzYsMS4wNTYtMS4wNTZWNi42ODdjMC0wLjU4LTAuNDc2LTEuMDU1LTEuMDU2LTEuMDU1SDI4LjQwMiAgIGMtMC43MDQsMS41NTUtMi4yNjEsMi42NDItNC4wNzksMi42NDJjLTEuODE3LDAtMy4zNzUtMS4wODctNC4wNzktMi42NDJoLTMuNTdMMTYuMDU3LDYuMjVjLTMuNDk3LDMuNDk4LTUuNDI0LDguMTQ3LTUuNDI0LDEzLjA5NSAgIGMwLDQuOTQ2LDEuOTI3LDkuNTk4LDUuNDI0LDEzLjA5NWwwLjYxOCwwLjYxOGgzLjQ5NWMwLjY2NC0xLjY0NywyLjI3LTIuODEzLDQuMTU0LTIuODEzYzEuODg1LDAsMy40OTEsMS4xNjYsNC4xNTQsMi44MTNoNzAuNDY4ICAgYzAuNTc4LDAsMS4wNTUtMC40NzYsMS4wNTUtMS4wNTZ2LTQuMjE5YzAtMC41OC0wLjQ3Ny0xLjA1NS0xLjA1NS0xLjA1NWgtNC4zNGMtMS4zMzQtMi4yMDYtMi4wNDktNC43MzktMi4wNDktNy4zODQgICBjMC0yLjY0NCwwLjcxNS01LjE3OSwyLjA0OS03LjM4NEg5OC45NDN6IE0yMy41MzYsMjYuNzI5aC00LjA4NWMtMS42MTQtMi4xMTItMi40ODgtNC42ODItMi40ODgtNy4zODQgICBjMC0yLjcwMywwLjg3NC01LjI3MSwyLjQ4OS03LjM4NGg0LjA4NGg2Ni4zNGMtMC40OTEsMS4xMy0wLjg3LDIuMzEyLTEuMTMsMy41MjVINjEuNDI1Yy0wLjg3MywwLTEuNTgyLDAuNzA4LTEuNTgyLDEuNTgyICAgczAuNzA5LDEuNTgyLDEuNTgyLDEuNTgyaDI2Ljk0OGMtMC4wMDgsMC4yMzEtMC4wMzYsMC40Ni0wLjAzNiwwLjY5MmMwLDIuNTg1LDAuNTM4LDUuMDgzLDEuNTM5LDcuMzg1TDIzLjUzNiwyNi43MjkgICBMMjMuNTM2LDI2LjcyOXpcXFwiIC8+PHBhdGggZGlzcGxheT1cXFwiaW5saW5lXFxcIiBkPVxcXCJNODMuOTczLDU3LjM4NmMtMS4zMzQtMi4yMDUtMi4wNDktNC43NC0yLjA0OS03LjM4NGMwLTIuNjQ1LDAuNzE1LTUuMTc5LDIuMDQ5LTcuMzg0aDQuMzQgICBjMC41OCwwLDEuMDU1LTAuNDc2LDEuMDU1LTEuMDU2di00LjIxOGMwLTAuNTgtMC40NzUtMS4wNTYtMS4wNTUtMS4wNTZIMTcuODQ2Yy0wLjY2MywxLjY0Ni0yLjI3LDIuODEyLTQuMTU0LDIuODEyICAgYy0xLjg4MywwLTMuNDktMS4xNjYtNC4xNTMtMi44MTJINi4wNDNsLTAuNjE4LDAuNjE4QzEuOTI3LDQwLjQwMywwLDQ1LjA1NSwwLDUwYzAsNC45NDYsMS45MjcsOS41OTksNS40MjUsMTMuMDk2bDAuNjE4LDAuNjE3ICAgaDMuNTdjMC43MDQtMS41NTYsMi4yNjEtMi42NDMsNC4wNzktMi42NDNjMS44MTcsMCwzLjM3NSwxLjA4Nyw0LjA3OSwyLjY0M2g3MC41NDJjMC41OCwwLDEuMDU2LTAuNDc1LDEuMDU2LTEuMDU1di00LjIyICAgYzAtMC41OC0wLjQ3Ni0xLjA1Ni0xLjA1Ni0xLjA1NmgtNC4zNFY1Ny4zODZ6IE03OS4yNDMsNDIuNjE5Yy0xLjAwMSwyLjMtMS41MzksNC43OTktMS41MzksNy4zODMgICBjMCwwLjIzMywwLjAyOCwwLjQ2MywwLjAzNiwwLjY5M0g1MC43OTJjLTAuODc0LDAtMS41ODIsMC43MDktMS41ODIsMS41ODJjMCwwLjg3NCwwLjcwOCwxLjU4MiwxLjU4MiwxLjU4MmgyNy4zMjEgICBjMC4yNiwxLjIxNSwwLjYzOCwyLjM5NiwxLjEzLDMuNTI2SDEyLjkwMkg4LjgxOGMtMS42MTUtMi4xMTItMi40ODktNC42ODEtMi40ODktNy4zODRzMC44NzQtNS4yNzIsMi40ODgtNy4zODRoNC4wODQgICBMNzkuMjQzLDQyLjYxOUw3OS4yNDMsNDIuNjE5elxcXCIgLz48L2c+PGc+PHBhdGggZD1cXFwiTTg0LjkwNCw0My43ODZjLTEuMjgyLTEuOTc0LTMuMjQ5LTMuMzI4LTUuNTM4LTMuODE1Yy0wLjYtMC4xMjctMS4yMTItMC4xOTEtMS44MjEtMC4xOTFjLTEuMzUsMC0yLjY0MiwwLjMxNy0zLjgwMywwLjg3OSAgIGMwLjE2NC0xLjkzMy0wLjMwOC0zLjg1OS0xLjM4Ny01LjUyYy0xLjI4Mi0xLjk3NC0zLjI0OS0zLjMyOS01LjUzOC0zLjgxNWMtMC41OTktMC4xMjctMS4yMTEtMC4xOTItMS44Mi0wLjE5MiAgIGMtMS4xNTIsMC0yLjI2MSwwLjIzNS0zLjI4NSwwLjY1MWw0LjQ5OS0yMS4xNjVjMC40ODYtMi4yODksMC4wNDktNC42MzctMS4yMzMtNi42MVM2MS43MjksMC42OCw1OS40NCwwLjE5NCAgIGMtMi4yOS0wLjQ4Ny00LjYzNy0wLjA0OC02LjYxLDEuMjMzYy0xLjk3MywxLjI4Mi0zLjMyOSwzLjI0OS0zLjgxNSw1LjUzOGwtOC45NzgsNDIuMjM2TDMxLjA2LDYuOTY0ICAgYy0wLjQ4Ni0yLjI4OS0xLjg0Mi00LjI1Ni0zLjgxNS01LjUzOGMtMS45NzQtMS4yODItNC4zMjMtMS43MTktNi42MTEtMS4yMzNjLTIuMjg5LDAuNDg2LTQuMjU1LDEuODQxLTUuNTM4LDMuODE1ICAgYy0xLjI4MiwxLjk3NC0xLjcxOSw0LjMyMS0xLjIzMyw2LjYxbDkuNzM0LDQ1Ljc5N2wtMC4xOTksMy42MDRjLTIuNzgyLDEuMjY4LTQuODM3LDMuOTU2LTUuMTg3LDcuMDc1ICAgYy0wLjAwNSwwLjA0LTAuMDEsMC4wODEtMC4wMTQsMC4xMjJjLTAuMDI2LDAuMjcxLTAuMDQ0LDAuNTQyLTAuMDQ0LDAuODE3YzAsMC4xLDAuMDA2LDAuMjExLDAuMDEzLDAuMzI5ICAgYzAuMDAxLDAuMDI5LDAuMDA0LDAuMDYxLDAuMDA2LDAuMDkxYzAuMDIsMC4yNTYsMC4wNTQsMC41NTEsMC4xMDMsMC44NzhjMC4wMDIsMC4wMTksMC4wMDUsMC4wMzcsMC4wMDgsMC4wNTcgICBjMC4zNzIsMi40ODksMS40Niw2Ljc1MSwyLjE0OCw5LjMyN2MxLjQ3Niw1LjU4MiwzLjIyNCwxMS41MTUsMy43OCwxMy4zODNjMS40MDQsNC40MzEsNi4xNDQsNy45LDEwLjc5Miw3LjloMzEuMTgxICAgYzQuNTc1LDAsOS41NTUtMy4zLDExLjMzOC03LjUxNGwyLjIxOS01LjI0NGMxLjU2Ny0zLjcwNiwyLjg0My05Ljk5NSwyLjg0My0xNC4wMTh2LTYuMTFsMy41NTQtMTYuNzE4ICAgQzg2LjYyMyw0OC4xMDcsODYuMTg2LDQ1Ljc2LDg0LjkwNCw0My43ODZ6IE02Ni4wNCwzNC45ODdjMi43MjIsMC41NzgsNC40NjQsMy4yNjMsMy44ODYsNS45ODRsLTQuMTg5LDE5LjcwNyAgIGMtMS4zNzktMC45MDItMy4wMjQtMS40MzItNC43OTMtMS40MzJoLTUuMjE5bDQuMzMtMjAuMzc0YzAuNDkzLTIuMzE1LDIuNTcxLTMuOTk2LDQuOTQyLTMuOTk2ICAgQzY1LjM0NSwzNC44NzcsNjUuNjk2LDM0LjkxNCw2Ni4wNCwzNC45ODd6IE0xNy41MjYsOS44NDFjLTAuMjc4LTEuMzExLTAuMDI2LTIuNjU4LDAuNzEtMy43OTJzMS44NjUtMS45MTQsMy4xNzYtMi4xOTIgICBjMS4zMTItMC4yOCwyLjY1OC0wLjAyNiwzLjc5MywwLjcxMWMxLjEzNSwwLjczNywxLjkxNCwxLjg2NCwyLjE5MiwzLjE3NWw5Ljk1Nyw0Ni44NDZjMC4xODQsMC44NjUsMC45NDcsMS40ODMsMS44MzEsMS40ODNoMS43MDMgICBjMC44ODQsMCwxLjY0Ny0wLjYxOCwxLjgzMi0xLjQ4M2w5Ljk1OC00Ni44NDZjMC41NzgtMi43MjEsMy4yNjYtNC40NjYsNS45ODQtMy44ODZjMi43MjIsMC41NzgsNC40NjUsMy4yNjMsMy44ODYsNS45ODQgICBsLTUuNjg0LDI2Ljc0MWMtMC4yLDAuNDgzLTAuMzYsMC45ODgtMC40NzIsMS41MTNsLTQuNDk2LDIxLjE1MUgyNy4xOTFsMC4xNTktMi44NzFjMC4wMDktMC4xNjYtMC4wMDQtMC4zMzEtMC4wMzgtMC40OTMgICBMMTcuNTI2LDkuODQxeiBNNzYuMjkyLDg1Ljc4M2wtMi4yMTksNS4yNDRjLTEuMTk5LDIuODM0LTQuODEyLDUuMjI5LTcuODksNS4yMjlIMzUuMDAyYy0zLjAwNiwwLTYuMzE0LTIuNDIxLTcuMjEyLTUuMjU1ICAgYy0xLjQzNi00LjgyOS0zLjQwMS0xMS43NzgtNC42NTktMTYuODMzYy0wLjY4LTIuNzY0LTEuMjM0LTUuMzEyLTEuMjM0LTYuMTMzYzAtMi42NCwyLjQwNS01LjA0NSw1LjA0Ni01LjA0NWgzNCAgIGMyLjc4MywwLDUuMDQ2LDIuMjY0LDUuMDQ2LDUuMDQ1YzAsMi43ODMtMi4yNjMsNS4wNDctNS4wNDYsNS4wNDdINDAuNzc4Yy0wLjM3LDAtMC43MzEsMC4xMDgtMS4wMzksMC4zMTRsLTUuMTg4LDMuNDU4ICAgYy0wLjg2MSwwLjU3My0xLjA5MywxLjczNS0wLjUyLDIuNTk2YzAuNTc0LDAuODYsMS43MzQsMS4wOTQsMi41OTYsMC41Mmw0LjcxNi0zLjE0NGgxOS41OTljMi44ODksMCw1LjQ0Ny0xLjQwNyw3LjA1MS0zLjU2MiAgIGMxLjA3OSwwLjkzMiwyLjM5MywxLjYyLDMuODgzLDEuOTM4YzAuNiwwLjEyNywxLjIxMywwLjE5MSwxLjgyMSwwLjE5MWMxLjg5MSwwLDMuNjctMC42MTksNS4xMzEtMS42NzIgICBDNzguNzMxLDc3LjI4NSw3Ny42MSw4Mi42NjYsNzYuMjkyLDg1Ljc4M3ogTTgyLjQ3NCw0OS42MThsLTMuODMzLDE4LjAzNGMtMC40OTEsMi4zMTUtMi41NywzLjk5Ni00Ljk0MiwzLjk5NiAgIGMtMC4zNDgsMC0wLjY5OS0wLjAzNy0xLjA0Mi0wLjExYy0xLjI4Ni0wLjI3My0yLjM1LTEuMDIxLTMuMDU4LTIuMDE4YzAuMDgzLTAuNDg0LDAuMTM2LTAuOTc4LDAuMTM2LTEuNDg1ICAgYzAtMS4yNTMtMC4yNjgtMi40NDItMC43NDMtMy41MjJsMy42MTItMTYuOTkzYzAuNDkyLTIuMzE1LDIuNTctMy45OTYsNC45NDEtMy45OTZjMC4zNDgsMCwwLjcsMC4wMzcsMS4wNDMsMC4xMSAgIEM4MS4zMSw0NC4yMTIsODMuMDUzLDQ2Ljg5Nyw4Mi40NzQsNDkuNjE4elxcXCIgLz48L2c+PGcgZGlzcGxheT1cXFwibm9uZVxcXCI+PHBhdGggZGlzcGxheT1cXFwiaW5saW5lXFxcIiBkPVxcXCJNOTAuNzY3LDQwLjAxNUgxMDB2LTguODI2aC05LjI0OWMtMC40ODgtMi4wOTMtMS4zMTctNC4wNTUtMi40MjMtNS44MjZsNi41NDYtNi41NDVsLTYuMjQxLTYuMjQgICBsLTYuNTUyLDYuNTUyYy0xLjc3LTEuMS0zLjcyOS0xLjkyNC01LjgyLTIuNDFWNy40NTVoLTguODI0djkuMjY1Yy0yLjA5MiwwLjQ4NS00LjA1MiwxLjMxLTUuODIzLDIuNDExbC02LjU0OS02LjU1bC02LjIzOSw2LjI0MSAgIGw2LjU0Myw2LjU0M2MtMS4xMDcsMS43NzItMS45MzYsMy43MzUtMi40MjUsNS44MjloLTkuMjQxdjguODI2aDkuMjI5YzAuNDg2LDIuMSwxLjMxMiw0LjA3LDIuNDE5LDUuODQ4bC02LjUyMiw2LjUyMmw2LjI0MSw2LjI0ICAgbDYuNTE4LTYuNTE5YzEuNzc4LDEuMTExLDMuNzUsMS45NDIsNS44NTQsMi40MzJ2OS4yMWg4LjgyM3YtOS4yMTJjMi4xMDQtMC40OSw0LjA3NS0xLjMyMiw1Ljg1NC0yLjQzNGw2LjUxOCw2LjUybDYuMjQxLTYuMjQgICBsLTYuNTI2LTYuNTI2Qzg5LjQ1NCw0NC4wODIsOTAuMjgxLDQyLjExNCw5MC43NjcsNDAuMDE1eiBNNzEuODUsNDQuNDU2Yy00Ljg3NSwwLTguODI2LTMuOTUyLTguODI2LTguODI0ICAgYzAtNC44NzUsMy45NTEtOC44MjYsOC44MjYtOC44MjZjNC44NzQsMCw4LjgyMywzLjk1MSw4LjgyMyw4LjgyNkM4MC42NzMsNDAuNTAzLDc2LjcyNCw0NC40NTYsNzEuODUsNDQuNDU2elxcXCIgLz48cGF0aCBkaXNwbGF5PVxcXCJpbmxpbmVcXFwiIGQ9XFxcIk00Ny4wNjQsNjguODA2aDkuMjMzVjU5Ljk4aC05LjI0OWMtMC40ODgtMi4wOTMtMS4zMTgtNC4wNTQtMi40MjMtNS44MjVsNi41NDYtNi41NDVsLTYuMjQtNi4yNCAgIGwtNi41NTMsNi41NTJjLTEuNzctMS4xLTMuNzI5LTEuOTI0LTUuODItMi40MXYtOS4yNjVoLTguODI0djkuMjY1Yy0yLjA5MywwLjQ4NS00LjA1MiwxLjMxLTUuODIzLDIuNDExbC02LjU1LTYuNTVsLTYuMjM5LDYuMjQxICAgbDYuNTQzLDYuNTQyYy0xLjEwNywxLjc3Mi0xLjkzNiwzLjczNS0yLjQyNSw1LjgyOUgwdjguODI1aDkuMjI5YzAuNDg2LDIuMTAxLDEuMzEzLDQuMDcsMi40MTksNS44NDhsLTYuNTIyLDYuNTI0bDYuMjQxLDYuMjM4ICAgbDYuNTE4LTYuNTE3YzEuNzc5LDEuMTEsMy43NSwxLjk0MSw1Ljg1NSwyLjQzdjkuMjExaDguODI0di05LjIxM2MyLjEwMy0wLjQ4OSw0LjA3NS0xLjMyLDUuODU0LTIuNDMzbDYuNTE4LDYuNTE5bDYuMjQtNi4yMzkgICBsLTYuNTI2LTYuNTI2QzQ1Ljc1Miw3Mi44NzQsNDYuNTc5LDcwLjkwNiw0Ny4wNjQsNjguODA2eiBNMjguMTQ3LDczLjI0OGMtNC44NzUsMC04LjgyNi0zLjk1Mi04LjgyNi04LjgyNSAgIGMwLTQuODc1LDMuOTUyLTguODI1LDguODI2LTguODI1YzQuODc0LDAsOC44MjMsMy45NSw4LjgyMyw4LjgyNUMzNi45Nyw2OS4yOTYsMzMuMDIxLDczLjI0OCwyOC4xNDcsNzMuMjQ4elxcXCIgLz48L2c+PGcgZGlzcGxheT1cXFwibm9uZVxcXCI+PGcgZGlzcGxheT1cXFwiaW5saW5lXFxcIj48cG9seWdvbiBwb2ludHM9XFxcIjU3LjM4Nyw0NS42OSAxNS45OTcsODcuMDc3IDEzLjA2NCw5MS45MzYgMTQuNDQ0LDkzLjMxNiAxOS4zMDYsOTAuMzg2IDYwLjY5Myw0OC45OTkgICBcXFwiIC8+PC9nPjxnIGRpc3BsYXk9XFxcImlubGluZVxcXCI+PHBhdGggZD1cXFwiTTk3LjU0Miw4Ljg0MWMtMy4xNDYtMy4xNDQtOC4wNzMtMy4zMzYtMTEuMjE4LTAuMTkzTDYyLjEyNywzMi44NDVjLTAuMjc4LDAuMjgtMC4yNzgsMC43MjksMCwxLjAxICAgIGMwLjgyMSwwLjgyMywwLjgyMSwyLjE1MiwwLDIuOTczYy0wLjgxOCwwLjgyLTIuMTUxLDAuODIzLTIuOTc0LDAuMDAxYy0wLjI3OC0wLjI4LTAuNzI5LTAuMjgtMS4wMS0wLjAwMWwtMi43ODcsMi43ODggICAgYy0wLjIyOSwwLjIzMy0wLjI1OCwwLjU4LTAuMTAyLDAuODUzbDEwLjY1OSwxMC42NjFjMC4yNzUsMC4xNTYsMC42MjMsMC4xMjgsMC44NTUtMC4xMDNsMi43ODctMi43ODcgICAgYzAuMjc3LTAuMjc5LDAuMjc1LTAuNzMtMC4wMDMtMS4wMWMtMC44MjEtMC44MjEtMC44MjEtMi4xNTUsMC0yLjk3NmMwLjgxOS0wLjgyMSwyLjE1NC0wLjgxOCwyLjk3NSwwICAgIGMwLjI3NiwwLjI4MSwwLjcyOSwwLjI4MSwxLjAwOSwwbDI0LjE5Ny0yNC4xOTNDMTAwLjg4MSwxNi45MTQsMTAwLjY4OCwxMS45ODgsOTcuNTQyLDguODQxelxcXCIgLz48L2c+PHBhdGggZGlzcGxheT1cXFwiaW5saW5lXFxcIiBkPVxcXCJNODYuNzc3LDgwLjQ0TDU4LjQyMiw1NC4xbC05LjkyLDkuOTE5bDI3LjIxNywyNy4yMzljMy4wMDMsMy4xMjQsNy44MTMsMy4xMjQsMTAuOTM3LDAuMTIxICAgQzg5LjY2Miw4OC4yNTMsODkuNzgxLDgzLjQ0NSw4Ni43NzcsODAuNDR6IE04NC4wMTEsODguNzNjLTEuNTYsMS42ODYtNC4wODUsMS40NDYtNS43Ny0wLjEyYy0xLjQ0LTEuNDQxLTEuNDQtNC4wODMsMC01LjY0NSAgIGMxLjY4NS0xLjU2Niw0LjIxLTEuNTY2LDUuNzcsMEM4NS41NzQsODQuNTI3LDg1LjU3NCw4Ny4yOTEsODQuMDExLDg4LjczelxcXCIgLz48cGF0aCBkaXNwbGF5PVxcXCJpbmxpbmVcXFwiIGQ9XFxcIk00Mi4zNyw1Ny44NzlsOS42ODktOS42ODhMMzMuMzAyLDMwLjc2N2MtMi43NjItMy4wMDMtMy40ODctNC4yMDUtMi43NjItNy42OTMgICBjMC44NDMtMy44NDcsMC4xNjktMTAuOTA3LTYuMzcyLTE0LjY2OUMxNi42NDksNC4wOCw5LjAyLDguMDQ1LDkuMDIsOC4wNDVMOC40Miw5LjAwOGMwLDAsNi43MzMsNC40NDgsNy41NzQsNC45MjggICBjMC45NjEsMC42MDMsMy44NDUsMy44NDYsMC4zNTgsOS4wMTdjLTMuMzY4LDUuMTcxLTcuMDkxLDMuNDg1LTguMTczLDIuNjQ2Yy0wLjg0MS0wLjQ4Mi03LjU3NC00LjgxMS03LjU3NC00LjgxMWwtMC41OTksMC45NjIgICBjMCwwLTAuNDgzLDkuMDE2LDYuOTY4LDEzLjgyNWMzLjQ4NiwyLjI4Miw3LjIxNiwyLjI4Miw5Ljg2MSwxLjMyMmMyLjY0NS0wLjg0MSw0LjU2NSwwLjEyMiw3LjgxMywzLjI0Nkw0Mi4zNyw1Ny44Nzl6XFxcIiAvPjwvZz48ZyBkaXNwbGF5PVxcXCJub25lXFxcIj48ZyBkaXNwbGF5PVxcXCJpbmxpbmVcXFwiPjxwb2x5Z29uIHBvaW50cz1cXFwiMjguNzU3LDU3LjQ4MyAzMC4yNzQsNTYuNjA4IDQzLjQ1LDQ4Ljk3NCA0My40NzYsNDguOTg4IDY4LjMyNiwzNC42NDcgNjguMzIsMjIuMzYgNy40OTMsNTcuNDQ5IDgyLjE5MywxMDAgICAgIDkyLjQ3NSw5NC4wNyA3My40MzgsODMuMTM4ICAgXFxcIiAvPjxwb2x5Z29uIHBvaW50cz1cXFwiNzAuNDI2LDM1Ljg1OCA3MC40MzksNjQuMzQ4IDgwLjk5Myw3MC4zNTkgODAuOTYsMCA2LjQ2Miw0Mi45NzMgNi40NjgsNTUuNjE1IDcwLjQxOCwxOC43MjggICBcXFwiIC8+PHBvbHlnb24gcG9pbnRzPVxcXCI4My4wOTMsNzMuOTcyIDcwLjQ0MSw2Ni43NjQgNzAuNDQsNjYuNzcxIDY4LjE2Nyw2NS40NjggNDMuNDgzLDUxLjQwNiAzMi45NjIsNTcuNDc5IDkzLjUzOCw5Mi4yNiA5My40OTcsNi4wMDcgICAgIDgzLjA1OSwwLjAxNCAgIFxcXCIgLz48L2c+PC9nPjxnIGRpc3BsYXk9XFxcIm5vbmVcXFwiPjxwYXRoIGRpc3BsYXk9XFxcImlubGluZVxcXCIgZD1cXFwiTTg2LjIwNywxNC44MDNMNzEuNDAzLDBoLTU3LjYxdjk0LjgyN2MwLDIuOTQ4LDMuNzA2LDUuMTczLDguNjIsNS4xNzNjNC45MTUsMCw4LjYyMS0yLjIyNSw4LjYyMS01LjE3MyAgIGwwLDBWMTkuNjhsMTAuMzQ1LDEwLjM0NXY2NC44MDNsMCwwYzAsMi45NDgsMy43MDYsNS4xNzMsOC42MjEsNS4xNzNjNC45MTQsMCw4LjYyLTIuMjI1LDguNjItNS4xNzNWMTMuNzkzSDI3LjU4NnY3Ni44NDggICBjLTEuNDIzLTAuNjIxLTMuMTk2LTAuOTg1LTUuMTczLTAuOTg1Yy0xLjk3NSwwLTMuNzQ5LDAuMzY0LTUuMTcyLDAuOTg1VjMuNDQ4aDUxLjcyNXY5MS4zNzljMCwyLjk0OCwzLjcwNSw1LjE3Myw4LjYyLDUuMTczICAgYzQuOTE0LDAsOC42MjEtMi4yMjUsOC42MjEtNS4xNzNsMCwwVjE0LjgwM3ogTTU1LjE3Miw5MC42NDFjLTEuNDIzLTAuNjIxLTMuMTk3LTAuOTg1LTUuMTcyLTAuOTg1ICAgYy0xLjk3NywwLTMuNzUsMC4zNjQtNS4xNzMsMC45ODVWMzEuMDM0aDEwLjM0NVY5MC42NDF6IE01MCw5Ni41NTJjLTMuMzM4LDAtNS4xNzMtMS4yOTYtNS4xNzMtMS43MjVzMS44MzUtMS43MjQsNS4xNzMtMS43MjQgICBzNS4xNzIsMS4yOTUsNS4xNzIsMS43MjRTNTMuMzM4LDk2LjU1Miw1MCw5Ni41NTJ6IE01NS4xNzIsMjcuNTg2SDQzLjgxN0wzMy40NzMsMTcuMjQxaDIxLjY5OVYyNy41ODZ6IE0yMi40MTMsOTMuMTA0ICAgYzMuMzM4LDAsNS4xNzMsMS4yOTUsNS4xNzMsMS43MjRzLTEuODM1LDEuNzI1LTUuMTczLDEuNzI1cy01LjE3Mi0xLjI5Ni01LjE3Mi0xLjcyNVMxOS4wNzUsOTMuMTA0LDIyLjQxMyw5My4xMDR6IE04Mi43NTksMTYuMjMxICAgdjc0LjQwOWMtMS40MjMtMC42MjEtMy4xOTctMC45ODUtNS4xNzMtMC45ODVzLTMuNzUsMC4zNjQtNS4xNzIsMC45ODVWNS44ODZMODIuNzU5LDE2LjIzMXogTTc3LjU4Niw5Ni41NTIgICBjLTMuMzM4LDAtNS4xNzItMS4yOTYtNS4xNzItMS43MjVzMS44MzQtMS43MjQsNS4xNzItMS43MjRjMy4zMzcsMCw1LjE3MywxLjI5NSw1LjE3MywxLjcyNFM4MC45MjMsOTYuNTUyLDc3LjU4Niw5Ni41NTJ6XFxcIiAvPjwvZz48ZyBkaXNwbGF5PVxcXCJub25lXFxcIj48cGF0aCBkaXNwbGF5PVxcXCJpbmxpbmVcXFwiIGQ9XFxcIk03OS4zODYsMjUuOTU4VjEuODhoLTAuMDAyTDc4LjI5OSwwaC0yLjE3bC0xLjA4NywxLjg4bDAsMHYxLjg2NGMtMTYuNjY5LDEuMzA5LTMzLjQxNiwxLjMwOS01MC4wODUsMCAgIFYxLjg4bDAsMEwyMy44NzEsMGgtMi4xN2wtMS4wODUsMS44OGgtMC4wMDJ2MjQuMDc4aC02LjA4djMuMzc5aDYuMDhWNDQuM0w0Ni45Myw3MC42MTVsLTkuODQ1LDkuODQ0aC05Ljg4M3YzLjM3OWg2LjUwNSAgIEwyMS4xNzYsOTYuMzY5djAuMDAxbC0wLjU2MiwyLjA5NUwyMi4xNSwxMDBsMi4wOTYtMC41NjJ2MC4wMDJsMTUuNjAzLTE1LjYwMmgyMC4zMDRsMTUuNjAzLDE1LjYwMnYtMC4wMDJMNzcuODUsMTAwbDEuNTM2LTEuNTM1ICAgbC0wLjU2Mi0yLjA5NXYtMC4wMDFMNjYuMjkzLDgzLjgzOGg2LjUwNHYtMy4zNzloLTkuODgzbC05Ljg0NC05Ljg0NEw3OS4zODYsNDQuM1YyOS4zMzdoNi4wOHYtMy4zNzlINzkuMzg2eiBNNzUuMDQyLDI2djMuMzM3ICAgdjEwLjY0Yy0xNi4yNzgsNS4yNzUtMzMuODA2LDUuMjc1LTUwLjA4NSwwdi0xMC42NFYyNkM0MS42MjYsMjcuMzEsNTguMzczLDI3LjMxLDc1LjA0MiwyNnogTTU2Ljc3Myw4MC40NTlINDMuMjI3TDUwLDczLjY4NiAgIEw1Ni43NzMsODAuNDU5eiBNNTAsNjcuNTQ1bC02LjYyNi02LjYyN2gxMy4yNTNMNTAsNjcuNTQ1eiBNNDEuNDQzLDU4Ljk4N0wyNy43MDYsNDUuMjVjMTQuNTcxLDQuMTU4LDMwLjAxNyw0LjE1OCw0NC41ODgsMCAgIEw1OC41NTcsNTguOTg3SDQxLjQ0M3pcXFwiIC8+PC9nPjxnIGRpc3BsYXk9XFxcIm5vbmVcXFwiPjxwYXRoIGRpc3BsYXk9XFxcImlubGluZVxcXCIgZD1cXFwiTTk3Ljc1Niw4NC4xMjNMNzEuMTczLDU3LjU0YzMuNzIzLTUuODIyLDUuOTE2LTEyLjcxMiw1LjkxNi0yMC4xMTlDNzcuMDg5LDE2Ljc4Nyw2MC4zMDIsMCwzOS42NjcsMCAgIEMxOS4wMzMsMCwyLjI0NCwxNi43ODcsMi4yNDQsMzcuNDIxYzAsMjAuNjM0LDE2Ljc4OSwzNy40MjcsMzcuNDIzLDM3LjQyN2M1LjAzOSwwLDkuODQtMS4wMTUsMTQuMjMxLTIuODI5TDgxLjg4LDEwMCAgIEw5Ny43NTYsODQuMTIzeiBNMTkuMDg1LDM3LjQyMWMwLTExLjM0OCw5LjIzNC0yMC41OCwyMC41ODItMjAuNThzMjAuNTgsOS4yMzIsMjAuNTgsMjAuNThjMCwxMS4zNTQtOS4yMzIsMjAuNTg2LTIwLjU4LDIwLjU4NiAgIFMxOS4wODUsNDguNzc1LDE5LjA4NSwzNy40MjF6XFxcIiAvPjwvZz48ZyBkaXNwbGF5PVxcXCJub25lXFxcIj48cGF0aCBkaXNwbGF5PVxcXCJpbmxpbmVcXFwiIGQ9XFxcIk05Ni43OTIsNDQuNjZMNTUuMzQxLDMuMjA4Yy0xLjQyNi0xLjQyMi0zLjMyMy0yLjIwNy01LjM0Mi0yLjIwN2MtMi4wMTgsMC0zLjkxNSwwLjc4NS01LjMzOCwyLjIwNyAgIEwzLjIwOSw0NC42NkMxLjc4Myw0Ni4wODUsMSw0Ny45OCwxLDUwLjAwM2MwLDIuMDE2LDAuNzgzLDMuOTE1LDIuMjA5LDUuMzM2TDQ0LjY2LDk2Ljc5MWMxLjQyNCwxLjQyNiwzLjMyMSwyLjIwOCw1LjMzOCwyLjIwOCAgIGMyLjAxOSwwLDMuOTE5LTAuNzgyLDUuMzQyLTIuMjA4TDk2Ljc5Miw1NS4zNEM5OS43MzcsNTIuMzk4LDk5LjczNyw0Ny42MDUsOTYuNzkyLDQ0LjY2eiBNMzcuNzQzLDcxLjIzMyAgIGMtMC41NjUsMC41NTQtMS4wOTcsMS4wNzQtMS42MDIsMS41NzdsLTcuMjMyLTcuMjMyYzAuNTUtMC41NDcsMS4xMDctMS4wOTQsMS42OTQtMS42NjRjNS4xNDctNS4wMjEsMTEuMzEzLTExLjAzNiwxMy40NzctMjMuMDcyICAgYy0wLjUyNSwwLjEyNC0xLjAyMywwLjI2NS0xLjQ4NiwwLjQyM2wtMS45MzYsMC42NjdjLTQuMDY5LDEuNDA1LTUuNDAyLTAuMzQ2LTIuOTY1LTMuODkxbDcuODY0LTExLjQ0MmwwLjAwMi0wLjAwM2w0LjQzLTYuNDQ3ICAgbDQuNDI5LDYuNDUxbDcuODYzLDExLjQ0MmMyLjQzNiwzLjU0MiwxLjEwNCw1LjI5Ni0yLjk2NiwzLjg5MWwtMS45MzItMC42NjdjLTAuNDYzLTAuMTU4LTAuOTYzLTAuMjk5LTEuNDg2LTAuNDIzICAgYzIuMTY0LDEyLjAzNiw4LjMyOSwxOC4wNSwxMy40NzksMjMuMDcyYzAuNTg3LDAuNTcsMS4xNDQsMS4xMTcsMS42OSwxLjY2NGwtNy4yMjksNy4yMzJjLTAuNTA3LTAuNTAzLTEuMDQtMS4wMjMtMS42MDQtMS41NzcgICBjLTMuNzg3LTMuNjkzLTguNjM1LTguNDE5LTEyLjI0Ni0xNS43MjlDNDYuMzc5LDYyLjgxNCw0MS41MzIsNjcuNTQsMzcuNzQzLDcxLjIzM3pcXFwiIC8+PC9nPjxnIGRpc3BsYXk9XFxcIm5vbmVcXFwiPjxnIGRpc3BsYXk9XFxcImlubGluZVxcXCI+PHBhdGggZD1cXFwiTTc5LjgzOSw3OS4yNzloMTAuMjIzdi00LjQxOEwxMDAsODQuODA1bC05LjkzOCw5Ljk0NXYtNC40MThINjUuOTAyQzcxLjI1Miw4Ny41OTQsNzUuOTc3LDgzLjgyMiw3OS44MzksNzkuMjc5elxcXCIgLz48cGF0aCBkPVxcXCJNNDEuMTg2LDIxLjAxNmMtMTQuMjA5LDIuMDEzLTI1LjE1OSwxNC4yNDEtMjUuMTU5LDI4Ljk4N2MwLDEwLjExNCw1LjE1NywxOS4wNDYsMTIuOTcxLDI0LjMxSDEzLjE1MyAgICBjLTUuMTIzLTYuNzY2LTguMTc4LTE1LjE4OS04LjE3OC0yNC4zMWMwLTIwLjY0NywxNS42MDYtMzcuNzEzLDM1LjYzMS00MC4wNDdsLTUuMjQ4LDUuMjQyTDQxLjE4NiwyMS4wMTZ6XFxcIiAvPjxwYXRoIGQ9XFxcIk01LjUzMiw4NC44MDVsLTUuNTIxLTUuNTI1aDQ1LjI5OGMxNi4xNCwwLDI5LjI4Mi0xMy4xMzEsMjkuMjgyLTI5LjI3NmMwLTE0LjQ1MS0xMC41MjktMjYuNDgyLTI0LjMwNy0yOC44NTF2My45OSAgICBsLTkuOTUtOS45NDRsOS45NS05Ljk0N1Y5Ljk5YzE5Ljg5OSwyLjQ1OSwzNS4zNTgsMTkuNDU3LDM1LjM1OCw0MC4wMTNjMCwyMi4yMzctMTguMDk0LDQwLjMyOS00MC4zMzMsNDAuMzI5SDBMNS41MzIsODQuODA1elxcXCIgLz48L2c+PC9nPjxnIGRpc3BsYXk9XFxcIm5vbmVcXFwiPjxnIGRpc3BsYXk9XFxcImlubGluZVxcXCI+PHBhdGggZD1cXFwiTTQ0LjQyNiw1Ny4zMTZsOS4yNTgsOS4yNTV2MTAuMjc2aDEwLjI3M2wzLjAxMiwzLjAxMXYxMC4yNzRoOS44NjdWMTAwaDIzLjE2M1Y4Ny4xMTFMNTcuMzE0LDQ0LjQyNCAgICBjNS45NzUtMTEuNDUxLDQuMTU3LTI1LjkxLTUuNDU5LTM1LjUyOGMtMTEuODYxLTExLjg2MS0zMS4wOTQtMTEuODYxLTQyLjk1OSwwYy0xMS44NjEsMTEuODY1LTExLjg2MSwzMS4wOTgsMCw0Mi45NiAgICBDMTguNTEzLDYxLjQ3MywzMi45NzUsNjMuMjkxLDQ0LjQyNiw1Ny4zMTZ6IE0xOC4xMTMsMTguMTE0YzMuNzYxLTMuNzU1LDkuODUxLTMuNzU1LDEzLjYwNywwYzMuNzYxLDMuNzU5LDMuNzYxLDkuODUxLDAsMTMuNjA2ICAgIGMtMy43NTcsMy43NTktOS44NDcsMy43NTktMTMuNjA3LDBDMTQuMzU5LDI3Ljk2NCwxNC4zNTksMjEuODczLDE4LjExMywxOC4xMTR6XFxcIiAvPjwvZz48L2c+PGcgZGlzcGxheT1cXFwibm9uZVxcXCI+PGcgZGlzcGxheT1cXFwiaW5saW5lXFxcIj48cGF0aCBkPVxcXCJNNTAuMDAxLDIzLjI2N2MtMTEuNzI3LDAtMjEuMjI5LDkuNTAxLTIxLjIyOSwyMS4yMjRjMCwyLjkxOSwwLjU5MSw1LjY5OCwxLjY1Niw4LjIzbDAsMGw5LjU2LDI3Ljg1N2gxOS41NzVsOS42Ny0yNy4xNDYgICAgYzEuMjY4LTIuNzIsMS45OTQtNS43NDIsMS45OTQtOC45NDFDNzEuMjI4LDMyLjc2OCw2MS43MjUsMjMuMjY3LDUwLjAwMSwyMy4yNjd6XFxcIiAvPjxyZWN0IHg9XFxcIjQ3Ljc5XFxcIiB3aWR0aD1cXFwiNC40MTZcXFwiIGhlaWdodD1cXFwiMTcuMzJcXFwiIC8+PHJlY3QgeD1cXFwiMjMuMjU0XFxcIiB5PVxcXCIxMS4yOTlcXFwiIHRyYW5zZm9ybT1cXFwibWF0cml4KDAuNDk5OSAwLjg2NjEgLTAuODY2MSAwLjQ5OTkgMjcuNjU2OSAtMjAuODg2KVxcXCIgd2lkdGg9XFxcIjE3LjMyMVxcXCIgaGVpZ2h0PVxcXCI0LjQxNFxcXCIgLz48cmVjdCB4PVxcXCIxMC4wMTVcXFwiIHk9XFxcIjI0LjUzNlxcXCIgdHJhbnNmb3JtPVxcXCJtYXRyaXgoLTAuODY1OSAtMC41MDAyIDAuNTAwMiAtMC44NjU5IDIxLjQ2OTcgNTkuMjQ0OClcXFwiIHdpZHRoPVxcXCIxNy4zMlxcXCIgaGVpZ2h0PVxcXCI0LjQxN1xcXCIgLz48cG9seWdvbiBwb2ludHM9XFxcIjg3LjcyNCwyMC41MDUgNzIuNzI1LDI5LjE2NCA3NC45MjgsMzIuOTg5IDg5LjkyOSwyNC4zMjQgICBcXFwiIC8+PHJlY3QgeD1cXFwiNjUuODc2XFxcIiB5PVxcXCI0Ljg0NlxcXCIgdHJhbnNmb3JtPVxcXCJtYXRyaXgoMC44NjYzIDAuNDk5NSAtMC40OTk1IDAuODY2MyAxNS44NTA1IC0zMi4yMDU2KVxcXCIgd2lkdGg9XFxcIjQuNDJcXFwiIGhlaWdodD1cXFwiMTcuMzIxXFxcIiAvPjxyZWN0IHg9XFxcIjQwLjcxNFxcXCIgeT1cXFwiODMuMjE5XFxcIiB3aWR0aD1cXFwiMTcuMzIzXFxcIiBoZWlnaHQ9XFxcIjMuODM1XFxcIiAvPjxyZWN0IHg9XFxcIjQwLjcxNFxcXCIgeT1cXFwiODkuNjlcXFwiIHdpZHRoPVxcXCIxNy4zMjNcXFwiIGhlaWdodD1cXFwiMy44MzZcXFwiIC8+PHJlY3QgeD1cXFwiNDMuNjM1XFxcIiB5PVxcXCI5Ni4xNjRcXFwiIHdpZHRoPVxcXCIxMS40NzlcXFwiIGhlaWdodD1cXFwiMy44MzZcXFwiIC8+PC9nPjwvZz48ZyBkaXNwbGF5PVxcXCJub25lXFxcIj48cG9seWdvbiBkaXNwbGF5PVxcXCJpbmxpbmVcXFwiIHBvaW50cz1cXFwiMzcuMzgzLDIzLjUzNSAxOS4zNTUsMjMuNTM1IDM3LjM4Myw1LjUwNyAgXFxcIiAvPjxwYXRoIGRpc3BsYXk9XFxcImlubGluZVxcXCIgZD1cXFwiTTQxLjg5MSwxdjI3LjA0MkgxNC44NDlWOTloNzAuMzAzVjFINDEuODkxeiBNNzMuNzEsODUuMDYzSDI2LjI4OXYtNS43OTlINzMuNzFWODUuMDYzeiBNNzMuNzEsNjguNzYxICAgSDI2LjI4OXYtNS43OTlINzMuNzFWNjguNzYxeiBNNzMuNzEsNTIuMDI4SDI2LjI4OVY0Ni4yM0g3My43MVY1Mi4wMjh6XFxcIiAvPjwvZz48ZyBkaXNwbGF5PVxcXCJub25lXFxcIj48ZyBkaXNwbGF5PVxcXCJpbmxpbmVcXFwiPjxwYXRoIGQ9XFxcIk04MC40MSwzNC40NzJjLTE1LjMzMi05LjIzOS0yNS43OTQtMTEuNS0zMC4xMDktOS44MDVjLTEuNzg1LDAuNy0zLjU2NiwyLjk5Mi01LjQxMSw2LjA0OSAgICBjLTEuOTE3LDMuMTcyLTMuMjk5LDcuOTg2LTIuODY1LDEwLjA1N2MwLjI1NSwxLjIxLDMuNTY0LDkuMTA1LDIyLjI3OSwxOS41NDVjMTIuMTg3LDYuNzk1LDIxLjg2MSw4LjUyMSwyMy41NTMsNy45NTUgICAgYzEuNzIxLTAuNTY4LDQuMDc4LTEuODQ3LDcuMjY1LTYuMzAxQzk4LjA2OCw1Ny44NTIsOTksNTMuMTg4LDk5LDUxLjQwMkM5OSw0OS42MjMsOTIuODIsNDEuOTUsODAuNDEsMzQuNDcyeiBNOTQuNzk3LDUyLjU0OSAgICBjLTEuNzE5LDMuMDU5LTE0LjEzMS0xLjUyMy0yMS43Ny01LjcyOGMtNy42NDMtNC4yMDMtMjMuODUzLTE1LjIxOS0yMC4wNTMtMTkuMjg5YzIuNjcyLTIuODY2LDEzLjkzOCwwLjc2NCwyNi4xNjIsOC40MDMgICAgQzkxLjM2MSw0My41NzQsOTYuNTE4LDQ5LjQ5Niw5NC43OTcsNTIuNTQ5elxcXCIgLz48cGF0aCBkPVxcXCJNNDguNjc3LDUzLjU0NWMtMi42MjQsMC45OTctOS4yNjMsMi4xNTctMTcuNTIyLDIuMTU3Yy05LjIwMSwwLTI0LjQ5MS0yLjE1Ny0yNC40OTEtOC40MDMgICAgYzAtNy4yNDksMjIuNTY3LTEwLjIxNywzMi42MDctOS4yMTRjMC4wOTYtMC43MTcsMC4zMzQtMS43NjcsMC4zMzQtMS43NjdzLTEuNTc2LTAuMTkxLTQuNjc3LTAuMTkxICAgIGMtMjIuNjgsMC0zMC4yMjMsNi40NDQtMzEuNzk5LDguNzg0Yy0xLjU3NiwyLjM0LTIuMTAyLDcuMzk5LTIuMTAyLDEwLjIxOGMwLDIuODE5LTAuNjEsOC41MTYsMy45MTcsMTMuNDY3ICAgIGM1LjEwNyw1LjU4NCwxNi42MTQsNy4yNTYsMjYuMDIsNy4yNTZjOS40MDUsMCwxNi4yMzItMC43NjQsMjUuOTI0LTUuMjU0YzAuNTYtMS4yOTcsMC41NzItMi42OTUsMC41NzItMy4yNDQgICAgQzU3LjQ2MSw2Mi4wMDMsNTEuNjg2LDU0LjU1NSw0OC42NzcsNTMuNTQ1elxcXCIgLz48L2c+PC9nPjxnIGRpc3BsYXk9XFxcIm5vbmVcXFwiPjxwYXRoIGRpc3BsYXk9XFxcImlubGluZVxcXCIgZD1cXFwiTTkwLjQ3OSwzNS43MTRoLTIuODY0TDc3LjM2NCwxOC42MjdjLTAuNjQ0LTEuMDc2LTIuMjA4LTEuOTYtMy40NjItMS45NkgyNi4wOTkgICBjLTEuMjYxLDAtMi44MjIsMC44ODUtMy40NjcsMS45NmwtMTAuMjUsMTcuMDg3SDkuNTE4QzQuMjgxLDM1LjcxNCwwLDQwLjAwMiwwLDQ1LjIzOHYyLjY3OXYyMy44MTJoOS41MTh2MTEuNjA0aDE0LjI5M1Y3MS43MjkgICBoNTIuMzczdjExLjYwNGgxNC4yOTVWNzEuNzI5SDEwMFY0Ny45MTd2LTIuNjc5QzEwMCw0MC4wMDIsOTUuNzE1LDM1LjcxNCw5MC40NzksMzUuNzE0eiBNMjYuODA4LDIxLjk1OGg0Ni4zODRsOS42OSwxNi4xNDMgICBjLTQuNTE0LDEuMzUtMTQuNDM4LDMuNDM4LTMyLjYyNCwzLjQzOGMtMTguMjkyLDAtMjguNDU3LTIuMTM2LTMzLjEwMy0zLjUwN0wyNi44MDgsMjEuOTU4eiBNMTYuNjY2LDU5LjUyMyAgIGMtMy45NDEsMC03LjE0OC0zLjE5Ni03LjE0OC03LjE0YzAtMy45NDUsMy4yMDctNy4xNDYsNy4xNDgtNy4xNDZjMy45NDgsMCw3LjE0NiwzLjIsNy4xNDYsNy4xNDYgICBDMjMuODEyLDU2LjMyNywyMC42MTQsNTkuNTIzLDE2LjY2Niw1OS41MjN6IE02Ni42NjYsNjAuNTc5SDMzLjMzMWMtMC41NzksMC0xLjA1NS0wLjQ3MS0xLjA1NS0xLjA1NiAgIGMwLTAuNTg3LDAuNDc2LTEuMDU1LDEuMDU1LTEuMDU1aDMzLjMzNWMwLjU3OCwwLDEuMDU2LDAuNDY4LDEuMDU2LDEuMDU1QzY3LjcyMiw2MC4xMDgsNjcuMjQ0LDYwLjU3OSw2Ni42NjYsNjAuNTc5eiAgICBNNjYuNjY2LDU1LjgxOUgzMy4zMzFjLTAuNTc5LDAtMS4wNTUtMC40NzQtMS4wNTUtMS4wNTdjMC0wLjU4NCwwLjQ3Ni0xLjA1OSwxLjA1NS0xLjA1OWgzMy4zMzVjMC41NzgsMCwxLjA1NiwwLjQ3NSwxLjA1NiwxLjA1OSAgIEM2Ny43MjIsNTUuMzQ2LDY3LjI0NCw1NS44MTksNjYuNjY2LDU1LjgxOXogTTgzLjMzNCw1OS41MjNjLTMuOTUyLDAtNy4xNDktMy4xOTYtNy4xNDktNy4xNGMwLTMuOTQ1LDMuMTk3LTcuMTQ2LDcuMTQ5LTcuMTQ2ICAgYzMuOTQ4LDAsNy4xNDYsMy4yLDcuMTQ2LDcuMTQ2QzkwLjQ3OSw1Ni4zMjcsODcuMjgyLDU5LjUyMyw4My4zMzQsNTkuNTIzelxcXCIgLz48L2c+PGcgZGlzcGxheT1cXFwibm9uZVxcXCI+PGcgZGlzcGxheT1cXFwiaW5saW5lXFxcIj48Zz48cGF0aCBkPVxcXCJNNzcuNTQ3LDY5Ljk4VjQxLjk2OWMtMS42NTYsMC4xNDYtMy40MzIsMC4yNzktNS4zMjgsMC4zOTd2MjkuNTUzQzc0LjEzNyw3MS4zNDIsNzUuOTIsNzAuNjkzLDc3LjU0Nyw2OS45OHpcXFwiIC8+PC9nPjxnPjxwYXRoIGQ9XFxcIk0yNS41NTMsNDIuMjAyVjcxLjEyYzYuNjEyLDIuMzQ4LDE1LjE4MiwzLjc2OSwyNC41NTIsMy43NjljMi4yMjEsMCw0LjM5My0wLjA4NCw2LjUxLTAuMjM1VjQyLjk0ICAgICBjLTIuMTIzLDAuMDMzLTQuMjkzLDAuMDUxLTYuNTEsMC4wNTFDNDAuODY5LDQyLjk5MSwzMi4zNTksNDIuNjk2LDI1LjU1Myw0Mi4yMDJ6XFxcIiAvPjwvZz48Zz48Zz48cGF0aCBkPVxcXCJNMTcuODk5LDM4LjY3NmM3LjQ0NSwwLjk1OSwxOS40NTEsMS41NDIsMzIuMjA2LDEuNTQyYzEyLjYxMiwwLDI0LjUzOC0wLjU3MiwzMS45OTMtMS41MTMgICAgICBjMC41NDUtNC41NTcsMi42NjItNy41OTEsNS41MzMtNy43NDRDODMuNzUyLDEzLjgxLDY4LjQzLDEsNTAuMTA1LDFDMzEuNzcxLDEsMTYuNDQzLDEzLjgyMywxMi41NzQsMzAuOTg3ICAgICAgQzE1LjMzMSwzMS4yNzQsMTcuMzYzLDM0LjI0NSwxNy44OTksMzguNjc2eiBNNjYuMTgsOS45NjNjMS4yMTEtMS4yNTEsNC40OC0wLjA1LDcuMzAzLDIuNjggICAgICBjMi44MjQsMi43MzEsNC4xMzMsNS45NjEsMi45MjIsNy4yMTRjLTEuMjA5LDEuMjUtNC40OCwwLjA0OS03LjMwNS0yLjY4MkM2Ni4yNzcsMTQuNDQ0LDY0Ljk2OSwxMS4yMTQsNjYuMTgsOS45NjN6XFxcIiAvPjwvZz48L2c+PGc+PGc+PHBhdGggZD1cXFwiTTc1LjAzNSw3My44OTdjLTUuMTg0LDEuNzY5LTExLjQ3MywzLjAyNS0xOC4zNzMsMy41MjJjLTAuMzUsMC4wMjMtMC42OTEsMC4wNTYtMS4wNDEsMC4wNzUgICAgICBjLTAuMjQ4LDAuMDE2LTAuNSwwLjAyMi0wLjc0NiwwLjAzNWMtMC43MDEsMC4wMzYtMS40MDQsMC4wNzEtMi4xMTcsMC4wOTJjLTAuMDM3LDAuMDAxLTAuMDc0LDAuMDAxLTAuMTA5LDAuMDAzICAgICAgYy0wLjg3MywwLjAyMy0xLjc1NiwwLjAzNi0yLjY0NiwwLjAzN2MtMC44OS0wLjAwMS0xLjc3My0wLjAxNC0yLjY0Ni0wLjAzN2MtMC4wMzYtMC4wMDItMC4wNzQtMC4wMDItMC4xMTEtMC4wMDMgICAgICBjLTAuNzE0LTAuMDIxLTEuNDE2LTAuMDU2LTIuMTE3LTAuMDkyYy0wLjI0Ny0wLjAxMy0wLjQ5OS0wLjAyLTAuNzQ1LTAuMDM1Yy0wLjM1MS0wLjAyLTAuNjkzLTAuMDUyLTEuMDQyLTAuMDc1ICAgICAgYy02LjkwMS0wLjQ5Ny0xMy4xODktMS43NTQtMTguMzczLTMuNTIyYy00LTEuMzk1LTcuMzY1LTMuMTMzLTkuOTI3LTUuMTM2bC0wLjMwOS0wLjA3NiAgICAgIGMyLjQ4MiwxMC4wOTUsOS41NjEsMTguNTMxLDE2LjA4NCwyMy45OThjMi4zNjYsMi4yOTUsNC45MDQsNC4xNSw3LjU0OSw1LjIwNGMwLjE3OSwwLjA5MiwwLjM2OSwwLjIwNSwwLjUzOSwwLjI5MSAgICAgIGMxLjYzMSwwLjU1OCw2LjM2NywwLjgzMiwxMS4wOTYsMC44MjFjNC43MywwLjAxMSw5LjQ2NC0wLjI2NCwxMS4wOTUtMC44MjFjMC4xNy0wLjA4NiwwLjM2MS0wLjE5OSwwLjUzOS0wLjI5MSAgICAgIGMyLjY0NS0xLjA1NCw1LjE4NC0yLjkwOSw3LjU0OS01LjIwNGM2LjUyNS01LjQ2NywxMy42MDQtMTMuOTAzLDE2LjA4Ni0yMy45OThsLTAuMzExLDAuMDc2ICAgICAgQzgyLjM5OCw3MC43NjUsNzkuMDMzLDcyLjUwMyw3NS4wMzUsNzMuODk3eiBNNDYuMzM0LDkxLjU5NmMwLDAuNTEyLTAuNDE0LDAuOTI2LTAuOTIzLDAuOTI2cy0wLjkyNC0wLjQxNC0wLjkyNC0wLjkyNnYtNC44MzMgICAgICBjMC0wLjUxMSwwLjQxNS0wLjkyNSwwLjkyNC0wLjkyNXMwLjkyMywwLjQxNCwwLjkyMywwLjkyNVY5MS41OTZ6IE01MC45MjksOTIuOTkzYzAsMC41MTMtMC40MTUsMC45MjctMC45MjQsMC45MjcgICAgICBjLTAuNTEsMC0wLjkyNC0wLjQxNC0wLjkyNC0wLjkyN3YtNi41ODFjMC0wLjUwOSwwLjQxNS0wLjkyNCwwLjkyNC0wLjkyNGMwLjUwOSwwLDAuOTI0LDAuNDE1LDAuOTI0LDAuOTI0VjkyLjk5M3ogICAgICAgTTU1LjUyMyw5MS41OTZjMCwwLjUxMi0wLjQxNiwwLjkyNi0wLjkyNCwwLjkyNmMtMC41MSwwLTAuOTI0LTAuNDE0LTAuOTI0LTAuOTI2di00LjgzM2MwLTAuNTExLDAuNDE0LTAuOTI1LDAuOTI0LTAuOTI1ICAgICAgYzAuNTA4LDAsMC45MjQsMC40MTQsMC45MjQsMC45MjVWOTEuNTk2elxcXCIgLz48L2c+PC9nPjxnPjxnPjxwYXRoIGQ9XFxcIk04Ny44NTQsMzMuNzA1Yy0xLjcyMywwLTMuMTIxLDMuMzEyLTMuMTIxLDcuMzk2YzAsMC4wMTMsMC4wMDIsMC4wMjEsMC4wMDIsMC4wMzRjLTAuNzQ4LDAuMTE4LTEuNTc2LDAuMjMtMi40NTEsMC4zMzkgICAgICB2MjUuOTU4YzMuNjAyLTIuNDExLDUuNjg4LTUuMjU1LDUuNjg4LTguMzA3YzAsMCwzLjAwNC0xNS4zMjcsMy4wMDQtMTguMDI0QzkwLjk3NSwzNy4wMTYsODkuNTc2LDMzLjcwNSw4Ny44NTQsMzMuNzA1eiAgICAgICBNODguMDcsNDEuNTA4Yy0wLjMzNCwwLTAuNjA1LTAuNzc2LTAuNjA1LTEuNzM0czAuMjcxLTEuNzMzLDAuNjA1LTEuNzMzYzAuMzM2LDAsMC42MDcsMC43NzYsMC42MDcsMS43MzMgICAgICBTODguNDA2LDQxLjUwOCw4OC4wNyw0MS41MDh6XFxcIiAvPjwvZz48L2c+PGc+PGc+PHBhdGggZD1cXFwiTTIwLjM1Miw2OC44NjdWNDEuNzVjLTEuOTE4LTAuMTk5LTMuNjM1LTAuNDE1LTUuMDg1LTAuNjQ3YzAtMC4wMDEsMC0wLjAwMSwwLTAuMDAxYzAtNC4wODQtMS4zOTgtNy4zOTYtMy4xMjEtNy4zOTYgICAgICBjLTEuNzIzLDAtMy4xMiwzLjMxMi0zLjEyLDcuMzk2YzAsMy4xNCwzLjIxMywxOC4wMjQsMy4yMTMsMTguMDI0QzEyLjIzOSw2Mi44MDUsMTUuMjc2LDY2LjE4NiwyMC4zNTIsNjguODY3eiBNMTEuODgyLDQxLjUwOCAgICAgIGMtMC4zMzQsMC0wLjYwNi0wLjc3Ni0wLjYwNi0xLjczNHMwLjI3Mi0xLjczMywwLjYwNi0xLjczM3MwLjYwNywwLjc3NiwwLjYwNywxLjczM1MxMi4yMTYsNDEuNTA4LDExLjg4Miw0MS41MDh6XFxcIiAvPjwvZz48L2c+PC9nPjwvZz48ZyBkaXNwbGF5PVxcXCJub25lXFxcIj48ZyBkaXNwbGF5PVxcXCJpbmxpbmVcXFwiPjxwYXRoIGQ9XFxcIk03MC4wMDIsMEgzMGMtMy42ODQsMC02LjY2NiwyLjk4MS02LjY2Niw2LjY2N3Y4Ni42NjdjMCwzLjY4NiwyLjk4MSw2LjY2Nyw2LjY2Niw2LjY2N2g0MCAgICBjMy42ODUsMCw2LjY2Ni0yLjk4MSw2LjY2Ni02LjY2N1Y2LjY2N0M3Ni42NjgsMi45ODEsNzMuNjg3LDAsNzAuMDAyLDB6IE00My4yMjksNi4wNDJoMTMuNTQyYzEuMjExLDAsMi4xODgsMC45ODMsMi4xODgsMi4xODggICAgYzAsMS4yMTEtMC45NzcsMi4xODgtMi4xODgsMi4xODhINDMuMjI5Yy0xLjIxMSwwLTIuMTg4LTAuOTc3LTIuMTg4LTIuMTg4QzQxLjA0Miw3LjAyNCw0Mi4wMTksNi4wNDIsNDMuMjI5LDYuMDQyeiAgICAgTTUwLjAwMSw5My43NDNjLTIuOTgyLDAtNS40MDQtMi40MjItNS40MDQtNS40MWMwLTIuOTgxLDIuNDIxLTUuNDAzLDUuNDA0LTUuNDAzczUuNDA0LDIuNDIyLDUuNDA0LDUuNDAzICAgIEM1NS40MDUsOTEuMzIxLDUyLjk4Myw5My43NDMsNTAuMDAxLDkzLjc0M3ogTTY5LjY2Myw3OC4zMzRIMzAuMzM4di02Mi41aDM5LjMyM3Y2Mi41SDY5LjY2M3pcXFwiIC8+PC9nPjwvZz48ZyBkaXNwbGF5PVxcXCJub25lXFxcIj48ZyBkaXNwbGF5PVxcXCJpbmxpbmVcXFwiPjxwYXRoIGQ9XFxcIk03Mi40MTEsMy4xMzljLTEuNDEyLTEuMTcxLTMuMTY4LTEuNzExLTQuNzAzLTIuMDg0QzY0LjcyNSwwLjMyOCw1My4yMzgsMCw1MC4xNjEsMGgtMC4zMjIgICAgYy0zLjA3NywwLTE0LjU2MiwwLjMyOC0xNy41NDYsMS4wNTVjLTEuNTM2LDAuMzczLTMuMjk1LDAuOTEzLTQuNzAyLDIuMDg0Yy0xLjcwOCwxLjQxNy0yLjU3MywzLjUtMi41NzMsNi4xOTl2ODEuNTkzICAgIGMwLDUuNDk0LDQuNDA0LDcuMDc3LDYuMjk0LDcuNTA0QzMzLjM5OCw5OC45MDIsMzguMjg4LDEwMCw0OS44LDEwMEg1MC4yYzExLjUxMiwwLDE2LjQwMi0xLjA5OCwxOC40ODktMS41NjUgICAgYzEuODktMC40MjcsNi4yOTUtMi4wMSw2LjI5NS03LjUwNFY5LjMzOEM3NC45ODMsNi42NCw3NC4xMTgsNC41NTYsNzIuNDExLDMuMTM5eiBNNjYuNTQyLDUuNjE3YzEuMzIxLDAsMi4zOTIsMS4wNjcsMi4zOTIsMi4zOTUgICAgYzAsMS4zMjEtMS4wNywyLjM5Ni0yLjM5MiwyLjM5NnMtMi4zOTQtMS4wNzYtMi4zOTQtMi4zOTZDNjQuMTQ4LDYuNjg1LDY1LjIyNyw1LjYxNyw2Ni41NDIsNS42MTd6IE00MC43NDUsNy4wMThoMTcuNjc0ICAgIGMwLjU4LDAsMS4wMzgsMC40NjIsMS4wMzgsMS4wMzVzLTAuNDU4LDEuMDM1LTEuMDM4LDEuMDM1SDQwLjc0NWMtMC41NzksMC0xLjAzOC0wLjQ2NS0xLjAzOC0xLjAzNSAgICBDMzkuNzA4LDcuNDgsNDAuMTY3LDcuMDE4LDQwLjc0NSw3LjAxOHogTTUzLjkyMyw5NC4zMzJjLTEuMDAxLDAuMjQxLTMuMDczLDAuMjcxLTMuOTc0LDAuMjcxYy0wLjEwNywwLTAuMTk3LTAuMDAzLTAuMjY1LTAuMDAzICAgIHMtMC4xNjEsMC4wMDMtMC4yNjYsMC4wMDNjLTAuODk3LDAtMi45NzMtMC4wMjktMy45NzUtMC4yNzFjLTEuMzQ1LTAuMzI2LTEuNzYyLTEuODI1LTEuNzYyLTIuMzM1YzAtMC4zNTcsMC0xLjMwNCwxLjQzMi0xLjMwNCAgICBoNC40MWgwLjMyMmg0LjQxYzEuNDMsMCwxLjQzLDAuOTQ2LDEuNDMsMS4zMDRDNTUuNjg1LDkyLjUwNyw1NS4yNjksOTQuMDA2LDUzLjkyMyw5NC4zMzJ6IE02OC42MzQsODYuMTE3aC0zNy41NFYxNC4wNTZINjguNjMgICAgdjcyLjA2Mkg2OC42MzR6XFxcIiAvPjwvZz48L2c+PGcgZGlzcGxheT1cXFwibm9uZVxcXCI+PHBhdGggZGlzcGxheT1cXFwiaW5saW5lXFxcIiBkPVxcXCJNNjcuOTUxLDI4Ljg3MXYyMi4wNWwtMjIuMDUyLTIyLjA1djI1Ljc0NmgtNy4wNDNWMGgtOS4yMzF2NTQuNjE2aC03LjA0N1YwaC05LjIzdjU0LjYxNkg2LjMwNFYxMDAgICBoODcuMzg0VjU0LjYxNmgwLjAwOEw2Ny45NTEsMjguODcxeiBNODkuNTgxLDY1Ljk2Mkg3NS45NDJ2LTcuMjM5aDEzLjYzOVY2NS45NjJ6IE01NC4wOTYsNzAuMDY0aDEzLjY0MnY3LjI0M0g1NC4wOTZWNzAuMDY0eiAgICBNNDUuODkyLDc3LjMwOEgzMi4yNTN2LTcuMjQzaDEzLjYzOFY3Ny4zMDh6IE01NC4wOTYsNjUuOTYydi03LjIzOWgxMy42NDJ2Ny4yMzlINTQuMDk2eiBNNDUuODkyLDU4LjcyM3Y3LjIzOUgzMi4yNTN2LTcuMjM5ICAgSDQ1Ljg5MnogTTI0LjA0OCw1OC43MjN2Ny4yMzlIMTAuNDExdi03LjIzOUgyNC4wNDh6IE0xMC40MTEsNzAuMDY0aDEzLjYzOHY3LjI0M0gxMC40MTFWNzAuMDY0eiBNNzUuOTQyLDc3LjMwOHYtNy4yNDNoMTMuNjM5ICAgdjcuMjQzSDc1Ljk0MnpcXFwiIC8+PC9nPjxnIGRpc3BsYXk9XFxcIm5vbmVcXFwiPjxnIGRpc3BsYXk9XFxcImlubGluZVxcXCI+PHBhdGggZD1cXFwiTTEyLjk2Miw0OC4xNDdWMTAwaDc0LjA3NlY0OC4xNDdIMTIuOTYyeiBNNTMuNzA0LDc2Ljc1MXYxMi4xMzdoLTcuNDA5Vjc2Ljc1MWMtMi4yMDItMS4yODgtMy43MDQtMy42NDYtMy43MDQtNi4zODEgICAgYzAtNC4wODcsMy4zMTMtNy40MDcsNy40MS03LjQwN2M0LjA4NywwLDcuNDA3LDMuMzIsNy40MDcsNy40MDdDNTcuNDA4LDczLjEwNCw1NS45MDMsNzUuNDYzLDUzLjcwNCw3Ni43NTF6XFxcIiAvPjxwYXRoIGQ9XFxcIk0zNS4xOCwyNS45M2MwLjA0LTMuMS0wLjAwMy0xNC44MTUsMTQuODEzLTE0LjgxNWMxNC44MjEsMCwxNC43NzEsMTEuNzYyLDE0LjgxNCwxNC44MTV2MTEuMTFoMTEuMTE4VjI1LjkyNiAgICBjMCwwLTAuMDA3LTI1LjkyNi0yNS45MjUtMjUuOTI2QzI0LjA3NywwLDI0LjA3LDI1LjkyNiwyNC4wNywyNS45MjZWMzcuMDRoMTEuMTFWMjUuOTN6XFxcIiAvPjwvZz48L2c+PC9zeW1ib2w+XCJcbn0pO1xudmFyIHJlc3VsdCA9IHNwcml0ZS5hZGQoc3ltYm9sKTtcbmV4cG9ydCBkZWZhdWx0IHN5bWJvbFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2ltYWdlcy9pY29ucy9sb2dvdXQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgU3ByaXRlU3ltYm9sIGZyb20gXCJzdmctYmFrZXItcnVudGltZS9icm93c2VyLXN5bWJvbFwiO1xuaW1wb3J0IHNwcml0ZSBmcm9tIFwic3ZnLXNwcml0ZS1sb2FkZXIvcnVudGltZS9icm93c2VyLXNwcml0ZS5idWlsZFwiO1xudmFyIHN5bWJvbCA9IG5ldyBTcHJpdGVTeW1ib2woe1xuICBcImlkXCI6IFwibWFwXCIsXG4gIFwidXNlXCI6IFwibWFwLXVzYWdlXCIsXG4gIFwidmlld0JveFwiOiBcIjAgMCAxMDAgMTAwXCIsXG4gIFwiY29udGVudFwiOiBcIjxzeW1ib2wgdmlld0JveD1cXFwiMCAwIDEwMCAxMDBcXFwiIGlkPVxcXCJtYXBcXFwiPjxnIHRyYW5zZm9ybT1cXFwidHJhbnNsYXRlKDAsLTk1Mi4zNjIxOClcXFwiPjxwYXRoIGQ9XFxcIk0gNTAgNyBDIDM0LjU0Nzg2MSA3IDIyIDE5LjU0Nzg2IDIyIDM1IEMgMjIgNDAuNTcwNDEgMjMuNjM4MTUxIDQ1Ljc2MjI2IDI2LjQzNzUgNTAuMTI1IEwgNDEuODEyNSA3NC4wOTM3NSBDIDQwLjIzMTE2NCA3NC41MzAwOCAzOC43NzMzNDMgNzUuMDc1ODc0IDM3LjUgNzUuNzUgQyAzNC4yMzc3MTYgNzcuNDc3MSAzMiA4MC4wMDQzIDMyIDgzIEMgMzIgODUuOTk1NyAzNC4yMzc3MTYgODguNTIyOSAzNy41IDkwLjI1IEMgNDAuNzYyMjg0IDkxLjk3NzEgNDUuMTYyNTIxIDkzIDUwIDkzIEMgNTQuODM3NDc5IDkzIDU5LjIzNzcxNiA5MS45NzcxIDYyLjUgOTAuMjUgQyA2NS43NjIyODQgODguNTIyOSA2OCA4NS45OTU3IDY4IDgzIEMgNjggODAuMDA0MyA2NS43NjIyODQgNzcuNDc3MSA2Mi41IDc1Ljc1IEMgNjEuMjMwNDQ1IDc1LjA3Nzg3OSA1OS43NjMwMTIgNzQuNTMxMTc1IDU4LjE4NzUgNzQuMDkzNzUgTCA3My41NjI1IDUwLjEyNSBDIDc2LjM2MTg1NCA0NS43NjIzNiA3OCA0MC41NzA0MiA3OCAzNSBDIDc4IDE5LjU0Nzg2IDY1LjQ1MjEzOSA3IDUwIDcgeiBNIDUwIDkgQyA2NC4zNzEyNjEgOSA3NiAyMC42Mjg3NCA3NiAzNSBDIDc2IDQwLjE3ODE4IDc0LjQ3NjI0NiA0NC45Nzc0IDcxLjg3NSA0OS4wMzEyNSBMIDUwIDgzLjEyNSBMIDI4LjEyNSA0OS4wMzEyNSBDIDI1LjUyMzc0OSA0NC45NzczIDI0IDQwLjE3ODE5IDI0IDM1IEMgMjQgMjAuNjI4NzQgMzUuNjI4NzM5IDkgNTAgOSB6IE0gNTAgMjQgQyA0My45MzY3IDI0IDM5IDI4LjkzNjggMzkgMzUgQyAzOSA0MS4wNjMyIDQzLjkzNjcgNDYgNTAgNDYgQyA1Ni4wNjMzIDQ2IDYxIDQxLjA2MzIgNjEgMzUgQyA2MSAyOC45MzY4IDU2LjA2MzMgMjQgNTAgMjQgeiBNIDUwIDI2IEMgNTQuOTgyNCAyNiA1OSAzMC4wMTc2IDU5IDM1IEMgNTkgMzkuOTgyNCA1NC45ODI0IDQ0IDUwIDQ0IEMgNDUuMDE3NiA0NCA0MSAzOS45ODI0IDQxIDM1IEMgNDEgMzAuMDE3NiA0NS4wMTc2IDI2IDUwIDI2IHogTSA0Mi45Njg3NSA3NS44NzUgTCA0OS4xNTYyNSA4NS41MzEyNSBBIDEuMDAwMSAxLjAwMDEgMCAwIDAgNTAuODQzNzUgODUuNTMxMjUgTCA1Ny4wMzEyNSA3NS44NzUgQyA1OC43MzIwNDQgNzYuMzAyOTQ5IDYwLjI3Nzc1IDc2Ljg1MTExOCA2MS41NjI1IDc3LjUzMTI1IEMgNjQuNDUzMDA2IDc5LjA2MTU1IDY2IDgxLjAyNTEgNjYgODMgQyA2NiA4NC45NzQ4IDY0LjQ1MzAwNiA4Ni45Mzg1NSA2MS41NjI1IDg4LjQ2ODc1IEMgNTguNjcxOTk0IDg5Ljk5OTA1IDU0LjU1MTM2IDkxIDUwIDkxIEMgNDUuNDQ4NjQgOTEgNDEuMzI4MDA2IDg5Ljk5OTA1IDM4LjQzNzUgODguNDY4NzUgQyAzNS41NDY5OTQgODYuOTM4NTUgMzQgODQuOTc0OCAzNCA4MyBDIDM0IDgxLjAyNTEgMzUuNTQ2OTk0IDc5LjA2MTU1IDM4LjQzNzUgNzcuNTMxMjUgQyAzOS43MjMwNjUgNzYuODUwNjg3IDQxLjI2NjE5NSA3Ni4zMDMxMDUgNDIuOTY4NzUgNzUuODc1IHogXFxcIiB0cmFuc2Zvcm09XFxcInRyYW5zbGF0ZSgwLDk1Mi4zNjIxOClcXFwiIC8+PC9nPjwvc3ltYm9sPlwiXG59KTtcbnZhciByZXN1bHQgPSBzcHJpdGUuYWRkKHN5bWJvbCk7XG5leHBvcnQgZGVmYXVsdCBzeW1ib2xcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9pbWFnZXMvaWNvbnMvbWFwLnN2Z1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFNwcml0ZVN5bWJvbCBmcm9tIFwic3ZnLWJha2VyLXJ1bnRpbWUvYnJvd3Nlci1zeW1ib2xcIjtcbmltcG9ydCBzcHJpdGUgZnJvbSBcInN2Zy1zcHJpdGUtbG9hZGVyL3J1bnRpbWUvYnJvd3Nlci1zcHJpdGUuYnVpbGRcIjtcbnZhciBzeW1ib2wgPSBuZXcgU3ByaXRlU3ltYm9sKHtcbiAgXCJpZFwiOiBcInBlbmNpbFwiLFxuICBcInVzZVwiOiBcInBlbmNpbC11c2FnZVwiLFxuICBcInZpZXdCb3hcIjogXCIwIDAgMTAwIDEwMFwiLFxuICBcImNvbnRlbnRcIjogXCI8c3ltYm9sIHZpZXdCb3g9XFxcIjAgMCAxMDAgMTAwXFxcIiBpZD1cXFwicGVuY2lsXFxcIj48Zz48cGF0aCBkPVxcXCJNODguNSwyMy42TDc2LjQsMTEuNWMtMS0xLTIuMy0xLjUtMy43LTEuNWMtMS40LDAtMi43LDAuNS0zLjcsMS41bC04LDhsMTkuNSwxOS41bDgtOEM5MC41LDI5LDkwLjUsMjUuNyw4OC41LDIzLjZ6ICAgIE04Ni40LDI5bC02LDZMNjUsMTkuNWw2LTZjMC45LTAuOSwyLjUtMC45LDMuNCwwbDEyLjEsMTIuMUM4Ny40LDI2LjYsODcuNCwyOC4xLDg2LjQsMjl6XFxcIiAvPjxwYXRoIGQ9XFxcIk01NS4xLDI1LjRMMTEuOSw2OC42Yy0wLjcsMC43LTEuMSwxLjYtMS4xLDIuNmwtMC43LDE2YzAsMC44LDAuMiwxLjUsMC44LDJjMC41LDAuNSwxLjIsMC44LDEuOSwwLjhjMCwwLDAuMSwwLDAuMSwwICAgbDE2LTAuN2MxLDAsMS45LTAuNSwyLjYtMS4xbDQzLjItNDMuMkw1NS4xLDI1LjR6IE02Mi43LDM3TDIxLjksNzcuOWwtNy42LTcuNmw0MC44LTQwLjhMNjIuNywzN3ogTTEzLjUsNzMuNmwxMi45LDEyLjlsLTEzLjUsMC42ICAgTDEzLjUsNzMuNnogTTI5LjcsODUuN2wtNS44LTUuOGw0MC44LTQwLjhsNS44LDUuOEwyOS43LDg1Ljd6XFxcIiAvPjwvZz48L3N5bWJvbD5cIlxufSk7XG52YXIgcmVzdWx0ID0gc3ByaXRlLmFkZChzeW1ib2wpO1xuZXhwb3J0IGRlZmF1bHQgc3ltYm9sXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvaW1hZ2VzL2ljb25zL3BlbmNpbC5zdmdcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBTcHJpdGVTeW1ib2wgZnJvbSBcInN2Zy1iYWtlci1ydW50aW1lL2Jyb3dzZXItc3ltYm9sXCI7XG5pbXBvcnQgc3ByaXRlIGZyb20gXCJzdmctc3ByaXRlLWxvYWRlci9ydW50aW1lL2Jyb3dzZXItc3ByaXRlLmJ1aWxkXCI7XG52YXIgc3ltYm9sID0gbmV3IFNwcml0ZVN5bWJvbCh7XG4gIFwiaWRcIjogXCJyZXZpZXdcIixcbiAgXCJ1c2VcIjogXCJyZXZpZXctdXNhZ2VcIixcbiAgXCJ2aWV3Qm94XCI6IFwiMCAwIDEwMCAxMDBcIixcbiAgXCJjb250ZW50XCI6IFwiPHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgMTAwIDEwMFxcXCIgaWQ9XFxcInJldmlld1xcXCI+PHRpdGxlPkFydGJvYXJkPC90aXRsZT48ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz48ZyBzdHJva2U9XFxcIm5vbmVcXFwiIHN0cm9rZS13aWR0aD1cXFwiMVxcXCIgZmlsbD1cXFwibm9uZVxcXCIgZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIj48ZyBzdHJva2U9XFxcIiNmZmZmZmZcXFwiIHN0cm9rZS13aWR0aD1cXFwiNC41XFxcIj48ZyB0cmFuc2Zvcm09XFxcInRyYW5zbGF0ZSg1LjAwMDAwMCwgMTAuMDAwMDAwKVxcXCI+PHBhdGggZD1cXFwiTTgyLjcwMzEyMDksMC44MiBMNy43MDEzNjI1NiwwLjgyIEMzLjU1ODgyMzU4LDAuODIgMC4yMDQsNC4xNzgzNDAxNyAwLjIwNCw4LjMyMDg3OTE1IEwwLjIwNCw1Ny4wOTI0MTgyIEMwLjIwNCw2MS4yMzQ5NTcyIDMuNTYyMzQwMTcsNjQuNTkzMjk3NCA3LjcwMTM2MjU2LDY0LjU5MzI5NzQgTDYwLjMzNzYzMDMsNjQuNTkzMjk3NCBMNzUuMTk4NzI1MSw3OS40NTQzOTIyIEw3NS4xOTg3MjUxLDY0LjU5MzI5NzQgTDgyLjcwMzEyMDksNjQuNTkzMjk3NCBDODYuODQ1NjU5OCw2NC41OTMyOTc0IDkwLjIwNCw2MS4yMzQ5NTcyIDkwLjIwNCw1Ny4wOTI0MTgyIEw5MC4yMDQsOC4zMjA4NzkxNSBDOTAuMjA0LDQuMTc4MzQwMTcgODYuODQ1NjU5OCwwLjgyIDgyLjcwMzEyMDksMC44MiBMODIuNzAzMTIwOSwwLjgyIFogTTMwLjU1NTY1ODcsMzYuNDY3NjM4IEMyOC40ODQzODkyLDM2LjQ2NzYzOCAyNi44MDY5Nzc0LDM0Ljc5MDIyNjIgMjYuODA2OTc3NCwzMi43MTg5NTY3IEMyNi44MDY5Nzc0LDMwLjY0NzY4NzMgMjguNDg0Mzg5MiwyOC45NzAyNzU1IDMwLjU1NTY1ODcsMjguOTcwMjc1NSBDMzIuNjI2OTI4MSwyOC45NzAyNzU1IDM0LjMwNDMzOTksMzAuNjUxMjAzOCAzNC4zMDQzMzk5LDMyLjcxODk1NjcgQzM0LjMwNDMzOTksMzQuNzg2NzA5NiAzMi42MjY5MjgxLDM2LjQ2NzYzOCAzMC41NTU2NTg3LDM2LjQ2NzYzOCBMMzAuNTU1NjU4NywzNi40Njc2MzggWiBNNDUuMjAyMjQxNywzNi40Njc2MzggQzQzLjEzMDk3MjIsMzYuNDY3NjM4IDQxLjQ1MzU2MDQsMzQuNzkwMjI2MiA0MS40NTM1NjA0LDMyLjcxODk1NjcgQzQxLjQ1MzU2MDQsMzAuNjQ3Njg3MyA0My4xMzA5NzIyLDI4Ljk3MDI3NTUgNDUuMjAyMjQxNywyOC45NzAyNzU1IEM0Ny4yNzM1MTEyLDI4Ljk3MDI3NTUgNDguOTUwOTIzLDMwLjY1MTIwMzggNDguOTUwOTIzLDMyLjcxODk1NjcgQzQ4Ljk1MDkyMywzNC43ODY3MDk2IDQ3LjI3MzUxMTIsMzYuNDY3NjM4IDQ1LjIwMjI0MTcsMzYuNDY3NjM4IEw0NS4yMDIyNDE3LDM2LjQ2NzYzOCBaIE02MC4yMDA0ODM0LDM2LjQ2NzYzOCBDNTguMTI5MjEzOSwzNi40Njc2MzggNTYuNDUxODAyMSwzNC43OTAyMjYyIDU2LjQ1MTgwMjEsMzIuNzE4OTU2NyBDNTYuNDUxODAyMSwzMC42NDc2ODczIDU4LjEyOTIxMzksMjguOTcwMjc1NSA2MC4yMDA0ODM0LDI4Ljk3MDI3NTUgQzYyLjI3MTc1MjksMjguOTcwMjc1NSA2My45NDkxNjQ3LDMwLjY1MTIwMzggNjMuOTQ5MTY0NywzMi43MTg5NTY3IEM2My45NDkxNjQ3LDM0Ljc4NjcwOTYgNjIuMjcxNzUyOSwzNi40Njc2MzggNjAuMjAwNDgzNCwzNi40Njc2MzggTDYwLjIwMDQ4MzQsMzYuNDY3NjM4IFpcXFwiIC8+PC9nPjwvZz48L2c+PC9zeW1ib2w+XCJcbn0pO1xudmFyIHJlc3VsdCA9IHNwcml0ZS5hZGQoc3ltYm9sKTtcbmV4cG9ydCBkZWZhdWx0IHN5bWJvbFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2ltYWdlcy9pY29ucy9yZXZpZXcuc3ZnXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgU3ByaXRlU3ltYm9sIGZyb20gXCJzdmctYmFrZXItcnVudGltZS9icm93c2VyLXN5bWJvbFwiO1xuaW1wb3J0IHNwcml0ZSBmcm9tIFwic3ZnLXNwcml0ZS1sb2FkZXIvcnVudGltZS9icm93c2VyLXNwcml0ZS5idWlsZFwiO1xudmFyIHN5bWJvbCA9IG5ldyBTcHJpdGVTeW1ib2woe1xuICBcImlkXCI6IFwic3RvcmVcIixcbiAgXCJ1c2VcIjogXCJzdG9yZS11c2FnZVwiLFxuICBcInZpZXdCb3hcIjogXCIwIDAgNTEyIDUxMlwiLFxuICBcImNvbnRlbnRcIjogXCI8c3ltYm9sIHZpZXdCb3g9XFxcIjAgMCA1MTIgNTEyXFxcIiBpZD1cXFwic3RvcmVcXFwiPjxnPjxwYXRoIGQ9XFxcIk00NjksNDkzLjZWMTg4YzM1LjUtMTAuOSw0My43LTQ1LDM3LjctNjguOUw0NzUuMywySDM2LjdMNS4yLDExOS4zQy0wLjcsMTQzLDcuOSwxNzcuMSw0MywxODh2MzA1LjZIMlY1MTBoNTA4di0xNi40SDQ2OXogICAgTTQ1Mi42LDE3NC4xYy0yMi42LDAtNDEtMTguNC00MS00MXYtMzIuOGg3My4xbDYuMiwyMi45QzQ5Ni43LDE0NCw0ODMuOSwxNzQuMSw0NTIuNiwxNzQuMXogTTExNi43LDEwMC4zaDgxLjl2MzIuOCAgIGMwLDIyLjYtMTguNCw0MS00MSw0MWMtMjIuNiwwLTQxLTE4LjQtNDEtNDFWMTAwLjN6IE0yMTUsMTAwLjNIMjk3djMyLjhjMCwyMi42LTE4LjQsNDEtNDEsNDFjLTIyLjYsMC00MS0xOC40LTQxLTQxVjEwMC4zeiAgICBNMzEzLjQsMTAwLjNoODEuOXYzMi44YzAsMjIuNi0xOC40LDQxLTQxLDQxYy0yMi42LDAtNDEtMTguNC00MS00MVYxMDAuM3ogTTQ5LjMsMTguNGg0MTMuNWwxNy42LDY1LjVIMzEuN0w0OS4zLDE4LjR6ICAgIE0yMS4xLDEyMy40bDYuMi0yMy4xaDczLjF2MzIuOGMwLDIyLjYtMTguNCw0MS00MSw0MUMyOCwxNzQuMSwxNS4zLDE0My4xLDIxLjEsMTIzLjR6IE0yOTcsNDkzLjZ2LTIxM2gxMTQuN3YyMTNIMjk3eiAgICBNNDUyLjYsNDkzLjZoLTI0LjZWMjY0LjJIMjgwLjZ2MjI5LjRINTkuNFYxOTAuNWMyMC44LDAsMzkuMS0xMS4yLDQ5LjItMjcuOGMxMCwxNi43LDI4LjMsMjcuOCw0OS4yLDI3LjggICBjMjAuOCwwLDM5LjEtMTEuMiw0OS4yLTI3LjhjMTAsMTYuNywyOC4zLDI3LjgsNDkuMiwyNy44YzIwLjgsMCwzOS4xLTExLjIsNDkuMi0yNy44YzEwLDE2LjcsMjguMywyNy44LDQ5LjIsMjcuOCAgIGMyMC44LDAsMzkuMS0xMS4yLDQ5LjItMjcuOGMxMCwxNi43LDI4LjMsMjcuOCw0OS4yLDI3LjhWNDkzLjZ6XFxcIiAvPjxwYXRoIGQ9XFxcIk04My45LDQ2OWgxNjMuOVYzMDUuMkg4My45VjQ2OXogTTEwMC4zLDM5NS4zaDU3LjR2NTcuNGgtNTcuNFYzOTUuM3ogTTE3NC4xLDQ1Mi42di01Ny40aDU3LjR2NTcuNEgxNzQuMXogTTIzMS40LDM3OC45ICAgaC01Ny40di01Ny40aDU3LjRWMzc4Ljl6IE0xNTcuNywzMjEuNXY1Ny40aC01Ny40di01Ny40SDE1Ny43elxcXCIgLz48cmVjdCB4PVxcXCIxNjUuOVxcXCIgeT1cXFwiMjMxLjRcXFwiIHdpZHRoPVxcXCIxNi40XFxcIiBoZWlnaHQ9XFxcIjE2LjRcXFwiIC8+PHJlY3QgeD1cXFwiMTMzLjFcXFwiIHk9XFxcIjIzMS40XFxcIiB3aWR0aD1cXFwiMTYuNFxcXCIgaGVpZ2h0PVxcXCIxNi40XFxcIiAvPjxyZWN0IHg9XFxcIjE5OC42XFxcIiB5PVxcXCIyMzEuNFxcXCIgd2lkdGg9XFxcIjE2LjRcXFwiIGhlaWdodD1cXFwiMTYuNFxcXCIgLz48L2c+PC9zeW1ib2w+XCJcbn0pO1xudmFyIHJlc3VsdCA9IHNwcml0ZS5hZGQoc3ltYm9sKTtcbmV4cG9ydCBkZWZhdWx0IHN5bWJvbFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2ltYWdlcy9pY29ucy9zdG9yZS5zdmdcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBTcHJpdGVTeW1ib2wgZnJvbSBcInN2Zy1iYWtlci1ydW50aW1lL2Jyb3dzZXItc3ltYm9sXCI7XG5pbXBvcnQgc3ByaXRlIGZyb20gXCJzdmctc3ByaXRlLWxvYWRlci9ydW50aW1lL2Jyb3dzZXItc3ByaXRlLmJ1aWxkXCI7XG52YXIgc3ltYm9sID0gbmV3IFNwcml0ZVN5bWJvbCh7XG4gIFwiaWRcIjogXCJzdG9yZTJcIixcbiAgXCJ1c2VcIjogXCJzdG9yZTItdXNhZ2VcIixcbiAgXCJ2aWV3Qm94XCI6IFwiMCAwIDczIDczXCIsXG4gIFwiY29udGVudFwiOiBcIjxzeW1ib2wgdmlld0JveD1cXFwiMCAwIDczIDczXFxcIiBpZD1cXFwic3RvcmUyXFxcIj48Zz48cGF0aCBkPVxcXCJNNzIuNSwxNC4zYzAtMC42LTAuMy0xLjItMC44LTEuNkw1NS40LDAuOWMtMC4zLTAuMi0wLjgtMC40LTEuMi0wLjRIMTguN2MtMC40LDAtMC44LDAuMS0xLjIsMC40TDEuMywxMi43ICAgYy0wLjUsMC40LTAuOCwxLTAuOCwxLjZjMCwwLDAsNy4yLDAsNy4yYzAsMS44LDAuNiwzLjUsMS43LDQuOHY0NC4yYzAsMS4xLDAuOSwyLDIsMmg2NC42YzEuMSwwLDItMC45LDItMlYyNi4zICAgYzEuMS0xLjMsMS43LTMsMS43LTQuOEM3Mi41LDIxLjUsNzIuNSwxNC4zLDcyLjUsMTQuM3ogTTUzLjYsNC41bDEwLjgsNy44SDYwbC03LjItNy44SDUzLjZ6IE01Ny4yLDE2LjN2NS4yYzAsMi0xLjYsMy43LTMuNywzLjcgICBjLTIsMC0zLjctMS42LTMuNy0zLjd2LTUuMkg1Ny4yeiBNNDcuNSw0LjVsNy4yLDcuOGgtNS41bC0zLjYtNy44SDQ3LjV6IE0zOC41LDQuNWgyLjZsMy42LDcuOGgtNi4yVjQuNXogTTM4LjUsMTYuM2g3LjN2NS4yICAgYzAsMi0xLjYsMy43LTMuNywzLjdjLTIsMC0zLjctMS42LTMuNy0zLjdWMTYuM3ogTTMxLjksNC41aDIuNnY3LjhoLTYuMkwzMS45LDQuNXogTTM0LjUsMTYuM3Y1LjJjMCwyLTEuNiwzLjctMy43LDMuNyAgIGMtMiwwLTMuNy0xLjYtMy43LTMuN3YtNS4ySDM0LjV6IE0yNS41LDQuNWgxLjlsLTMuNiw3LjhoLTUuNUwyNS41LDQuNXogTTIzLjIsMTYuM3Y1LjJjMCwyLTEuNiwzLjctMy43LDMuN2MtMiwwLTMuNy0xLjYtMy43LTMuNyAgIHYtNS4ySDIzLjJ6IE0xOS40LDQuNWgwLjdMMTMsMTIuM0g4LjZMMTkuNCw0LjV6IE00LjUsMjEuNXYtNS4yaDcuM3Y1LjJjMCwyLTEuNiwzLjctMy43LDMuN0M2LjEsMjUuMiw0LjUsMjMuNSw0LjUsMjEuNXogICAgTTMxLjksNjguNUgxNS40VjM2aDE2LjVWNjguNXogTTY2LjgsNjguNUgzNS45VjM0YzAtMS4xLTAuOS0yLTItMkgxMy40Yy0xLjEsMC0yLDAuOS0yLDJ2MzQuNUg2LjJWMjguOWMwLjYsMC4yLDEuMywwLjMsMiwwLjMgICBjMi4yLDAsNC4zLTEsNS43LTIuNWMxLjQsMS41LDMuNCwyLjUsNS43LDIuNWMyLjIsMCw0LjMtMSw1LjctMi41YzEuNCwxLjUsMy40LDIuNSw1LjcsMi41czQuMy0xLDUuNy0yLjVjMS40LDEuNSwzLjQsMi41LDUuNywyLjUgICBjMi4yLDAsNC4zLTEsNS43LTIuNWMxLjQsMS41LDMuNCwyLjUsNS43LDIuNWMyLjIsMCw0LjMtMSw1LjctMi41YzEuNCwxLjUsMy40LDIuNSw1LjcsMi41YzAuNywwLDEuMy0wLjEsMi0wLjNWNjguNXogTTY4LjUsMjEuNSAgIGMwLDItMS42LDMuNy0zLjcsMy43Yy0yLDAtMy43LTEuNi0zLjctMy43di01LjJoNy4zVjIxLjV6XFxcIiAvPjxwYXRoIGQ9XFxcIk02MC42LDM3LjRINDIuNGMtMS4xLDAtMiwwLjktMiwydjE1LjJjMCwxLjEsMC45LDIsMiwyaDE4LjJjMS4xLDAsMi0wLjksMi0yVjM5LjRDNjIuNiwzOC4zLDYxLjcsMzcuNCw2MC42LDM3LjR6ICAgIE01OC42LDUyLjZINDQuNFY0MS40aDE0LjJWNTIuNnpcXFwiIC8+PC9nPjwvc3ltYm9sPlwiXG59KTtcbnZhciByZXN1bHQgPSBzcHJpdGUuYWRkKHN5bWJvbCk7XG5leHBvcnQgZGVmYXVsdCBzeW1ib2xcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9pbWFnZXMvaWNvbnMvc3RvcmUyLnN2Z1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFNwcml0ZVN5bWJvbCBmcm9tIFwic3ZnLWJha2VyLXJ1bnRpbWUvYnJvd3Nlci1zeW1ib2xcIjtcbmltcG9ydCBzcHJpdGUgZnJvbSBcInN2Zy1zcHJpdGUtbG9hZGVyL3J1bnRpbWUvYnJvd3Nlci1zcHJpdGUuYnVpbGRcIjtcbnZhciBzeW1ib2wgPSBuZXcgU3ByaXRlU3ltYm9sKHtcbiAgXCJpZFwiOiBcInRhZ1wiLFxuICBcInVzZVwiOiBcInRhZy11c2FnZVwiLFxuICBcInZpZXdCb3hcIjogXCIwIDAgMTAwIDEwMFwiLFxuICBcImNvbnRlbnRcIjogXCI8c3ltYm9sIHZpZXdCb3g9XFxcIjAgMCAxMDAgMTAwXFxcIiBpZD1cXFwidGFnXFxcIj48ZyB0cmFuc2Zvcm09XFxcInRyYW5zbGF0ZSgwLC05NTIuMzYyMTgpXFxcIj48cGF0aCBkPVxcXCJtIDU0LjgxMjUsNyBjIC0wLjE4OTIxLDAuMDQyNjA4IC0wLjM2NTMzMiwwLjE0MTY3NzIgLTAuNSwwLjI4MTI1IGwgLTQ2LDQ1IEMgNy41Mzc1Njc2LDUzLjAzOTM1IDcsNTQuMTcwMDUgNyw1NS41MzEyNSBjIDAsMS4yNjk2IDAuNTEzNTA3MSwyLjM4ODQ1IDEuMjgxMjUsMy4xNTYyNSBsIDMzLDMzIEMgNDEuOTc3NDQyLDkyLjM4MzggNDIuODkyNzU3LDkzIDQ0LDkzIGMgMS4xNTM3NTMsMCAyLjAzMDc5MywtMC42NTMxNSAyLjY4NzUsLTEuMjgxMjUgbCA0NiwtNDQgQyA5Mi44ODI0MzgsNDcuNTM0MTk1IDkyLjk5Nzk4Niw0Ny4yNjg0MzUgOTMsNDcgTCA5Myw4IEMgOTIuOTk5OTQ4LDcuNDc2NDE1NSA5Mi41MjM1ODQsNy4wMDAwNTI0IDkyLDcgTCA1NSw3IGMgLTAuMDYyMzIsLTAuMDA1ODcgLTAuMTI1MTg0LC0wLjAwNTg3IC0wLjE4NzUsMCB6IE0gNTUuMzc1LDkgOTEsOSA5MSw0Ni41NjI1IDQ1LjMxMjUsOTAuMjUgQyA0NC44MzMwNDcsOTAuNzA4NiA0NC4zMzY5NjcsOTEgNDQsOTEgNDMuNjE2NTIzLDkxIDQzLjIxMzI1OCw5MC43NzU4NSA0Mi43MTg3NSw5MC4yODEyNSBsIC0zMywtMzMgQyA5LjMzODgzMjksNTYuOTAxMzUgOSw1Ni4yMjA3NSA5LDU1LjUzMTI1IDksNTQuNjY5MTUgOS4yOTQ4NTI0LDU0LjA3MTYgOS42ODc1LDUzLjY4NzUgeiBNIDc1LDE3IGMgLTQuNDA2NDM1LDAgLTgsMy41OTM1NyAtOCw4IDAsNC40MDY0NCAzLjU5MzU2Niw4IDgsOCA0LjQwNjQzNSwwIDgsLTMuNTkzNTYgOCwtOCAwLC00LjQwNjQzIC0zLjU5MzU2NSwtOCAtOCwtOCB6IG0gMCwyIGMgMy4zMjU1NTQsMCA2LDIuNjc0NDUgNiw2IDAsMy4zMjU1NSAtMi42NzQ0NDUsNiAtNiw2IC0zLjMyNTU1NCwwIC02LC0yLjY3NDQ1IC02LC02IDAsLTMuMzI1NTUgMi42NzQ0NDYsLTYgNiwtNiB6XFxcIiB0cmFuc2Zvcm09XFxcInRyYW5zbGF0ZSgwLDk1Mi4zNjIxOClcXFwiIG1hcmtlcj1cXFwibm9uZVxcXCIgdmlzaWJpbGl0eT1cXFwidmlzaWJsZVxcXCIgZGlzcGxheT1cXFwiaW5saW5lXFxcIiBvdmVyZmxvdz1cXFwidmlzaWJsZVxcXCIgLz48L2c+PC9zeW1ib2w+XCJcbn0pO1xudmFyIHJlc3VsdCA9IHNwcml0ZS5hZGQoc3ltYm9sKTtcbmV4cG9ydCBkZWZhdWx0IHN5bWJvbFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2ltYWdlcy9pY29ucy90YWcuc3ZnXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgU3ByaXRlU3ltYm9sIGZyb20gXCJzdmctYmFrZXItcnVudGltZS9icm93c2VyLXN5bWJvbFwiO1xuaW1wb3J0IHNwcml0ZSBmcm9tIFwic3ZnLXNwcml0ZS1sb2FkZXIvcnVudGltZS9icm93c2VyLXNwcml0ZS5idWlsZFwiO1xudmFyIHN5bWJvbCA9IG5ldyBTcHJpdGVTeW1ib2woe1xuICBcImlkXCI6IFwidG9wXCIsXG4gIFwidXNlXCI6IFwidG9wLXVzYWdlXCIsXG4gIFwidmlld0JveFwiOiBcIjAgMCA2MiA2MlwiLFxuICBcImNvbnRlbnRcIjogXCI8c3ltYm9sIHZpZXdCb3g9XFxcIjAgMCA2MiA2MlxcXCIgaWQ9XFxcInRvcFxcXCI+PGc+PGc+PHBhdGggZD1cXFwiTTMxLDM5LjFjLTEuOSwwLTMuOC0wLjUtNS41LTEuNUMxNy4yLDMyLjcsMTIsMjMuNywxMiwxNFYwaDM4djE0YzAsOS42LTUuMiwxOC43LTEzLjUsMjMuNkMzNC44LDM4LjYsMzIuOSwzOS4xLDMxLDM5LjF6ICAgICBNMTQsMnYxMmMwLDguOSw0LjgsMTcuMywxMi41LDIxLjhjMi44LDEuNiw2LjIsMS42LDksMEM0My4yLDMxLjMsNDgsMjMsNDgsMTRWMkgxNHpcXFwiIC8+PC9nPjxnPjxwYXRoIGQ9XFxcIk00Myw1NEgxOXYtNmgyNFY1NHogTTIxLDUyaDIwdi0ySDIxVjUyelxcXCIgLz48L2c+PGc+PHBhdGggZD1cXFwiTTQ1LDYySDE3VjUyaDI4VjYyeiBNMTksNjBoMjR2LTZIMTlWNjB6XFxcIiAvPjwvZz48Zz48cGF0aCBkPVxcXCJNMzUsNTBoLThWMzYuMmwxLjMsMC40YzEuOCwwLjYsMy42LDAuNiw1LjQsMGwxLjMtMC40VjUweiBNMjksNDhoNHYtOS4xYy0xLjMsMC4yLTIuNywwLjItNCwwVjQ4elxcXCIgLz48L2c+PGc+PGc+PHBhdGggZD1cXFwiTTE5LjksMzAuN0wxNi42LDI5QzcuNiwyNC4zLDIsMTUuMSwyLDVWNGgxMnYxMGMwLDQuOCwxLjQsOS41LDMuOSwxMy42TDE5LjksMzAuN3ogTTQsNmMwLjMsNy44LDQuMiwxNC45LDEwLjQsMTkuMyAgICAgQzEyLjgsMjEuOCwxMiwxNy45LDEyLDE0VjZINHpcXFwiIC8+PC9nPjxnPjxwYXRoIGQ9XFxcIk00Mi4xLDMwLjdsMi0zLjFDNDYuNiwyMy41LDQ4LDE4LjgsNDgsMTRWNGgxMnYxYzAsMTAuMS01LjYsMTkuMy0xNC42LDI0TDQyLjEsMzAuN3ogTTUwLDZ2OGMwLDMuOS0wLjgsNy44LTIuNSwxMS4zICAgICBDNTMuOCwyMC45LDU3LjcsMTMuOCw1OCw2SDUwelxcXCIgLz48L2c+PC9nPjxnPjxwYXRoIGQ9XFxcIk0zOS4zLDI5LjJsLTguMy02bC04LjMsNmwzLjItOS43bC04LjMtNmgxMC4yTDMxLDMuOGwzLjIsOS43aDEwLjJsLTguMyw2TDM5LjMsMjkuMnogTTMxLDIwLjdsNC41LDMuMmwtMS43LTUuMmw0LjUtMy4yICAgIGgtNS41TDMxLDEwLjJsLTEuNyw1LjJoLTUuNWw0LjUsMy4yTDI2LjUsMjRMMzEsMjAuN3pcXFwiIC8+PC9nPjwvZz48L3N5bWJvbD5cIlxufSk7XG52YXIgcmVzdWx0ID0gc3ByaXRlLmFkZChzeW1ib2wpO1xuZXhwb3J0IGRlZmF1bHQgc3ltYm9sXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvaW1hZ2VzL2ljb25zL3RvcC5zdmdcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImZ1bmN0aW9uIGF1dG9jb21wbGV0ZShpbnB1dCwgbGF0SW5wdXQsIGxuZ0lucHV0KXtcclxuICAgIGlmKCFpbnB1dCkgcmV0dXJuO1xyXG4gICAgY29uc3QgZHJvcGRvd24gPSBuZXcgZ29vZ2xlLm1hcHMucGxhY2VzLkF1dG9jb21wbGV0ZShpbnB1dClcclxuXHJcbiAgICBkcm9wZG93bi5hZGRMaXN0ZW5lcigncGxhY2VfY2hhbmdlZCcsICgpID0+IHtcclxuICAgICAgICBjb25zdCBwbGFjZSA9IGRyb3Bkb3duLmdldFBsYWNlKCk7XHJcbiAgICAgICAgbGF0SW5wdXQudmFsdWUgPSBwbGFjZS5nZW9tZXRyeS5sb2NhdGlvbi5sYXQoKTtcclxuICAgICAgICBsbmdJbnB1dC52YWx1ZSA9IHBsYWNlLmdlb21ldHJ5LmxvY2F0aW9uLmxuZygpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhpbnB1dClcclxuXHJcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGUua2V5Q29kZSA9PT0gMTMpIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhdXRvY29tcGxldGU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHB1YmxpYy9qcy9tb2R1bGVzL2F1dG9jb21wbGV0ZS5qcyIsIi8vIGJhc2VkIG9uIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL3BhdWxpcmlzaC8xMmZiOTUxYThiODkzYTQ1NGIzMlxyXG5cclxuY29uc3QgJCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IuYmluZChkb2N1bWVudCk7XHJcbmNvbnN0ICQkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbC5iaW5kKGRvY3VtZW50KTtcclxuXHJcbk5vZGUucHJvdG90eXBlLm9uID0gd2luZG93Lm9uID0gZnVuY3Rpb24gKG5hbWUsIGZuKSB7XHJcbiAgdGhpcy5hZGRFdmVudExpc3RlbmVyKG5hbWUsIGZuKTtcclxufTtcclxuXHJcbk5vZGVMaXN0LnByb3RvdHlwZS5fX3Byb3RvX18gPSBBcnJheS5wcm90b3R5cGU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcclxuXHJcbk5vZGVMaXN0LnByb3RvdHlwZS5vbiA9IE5vZGVMaXN0LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gKG5hbWUsIGZuKSB7XHJcbiAgdGhpcy5mb3JFYWNoKChlbGVtKSA9PiB7XHJcbiAgICBlbGVtLm9uKG5hbWUsIGZuKTtcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCB7ICQsICQkIH07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBwdWJsaWMvanMvbW9kdWxlcy9ibGluZy5qcyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBOzs7O0FDN0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDN1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDeHlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ1RBOzs7Ozs7Ozs7QUNBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7O0FDWkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDVEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDVEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDVEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDVEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDVEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDVEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDVEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDVEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDVEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDVEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDVEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7O0EiLCJzb3VyY2VSb290IjoiIn0=