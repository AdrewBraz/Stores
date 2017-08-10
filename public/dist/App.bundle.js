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
/* 0 */,
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

var _autocomplete = __webpack_require__(18);

var _autocomplete2 = _interopRequireDefault(_autocomplete);

var _type = __webpack_require__(32);

var _type2 = _interopRequireDefault(_type);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(5);


var input = document.getElementById('address');
var lng = document.getElementById('lng');
var lat = document.getElementById('lat');
var search = document.querySelector('.search');

(0, _autocomplete2.default)(input, lat, lng);

(0, _type2.default)(search);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__(52);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__(52);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__(52);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__(52);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__(52);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__(52);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__(52);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__(52);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__(52);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__(52);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__(52);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__(52);
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
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(26);

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
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(24);
var normalizeHeaderName = __webpack_require__(36);

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
    adapter = __webpack_require__(28);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(28);
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(27)))

/***/ }),
/* 26 */
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
/* 27 */
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
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(24);
var settle = __webpack_require__(37);
var buildURL = __webpack_require__(39);
var parseHeaders = __webpack_require__(40);
var isURLSameOrigin = __webpack_require__(41);
var createError = __webpack_require__(29);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(42);

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
      var cookies = __webpack_require__(43);

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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(27)))

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(38);

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
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 31 */
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
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = type;

var _axios = __webpack_require__(33);

var _axios2 = _interopRequireDefault(_axios);

var _dompurify = __webpack_require__(51);

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
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(34);

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(24);
var bind = __webpack_require__(26);
var Axios = __webpack_require__(35);
var defaults = __webpack_require__(25);

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
axios.Cancel = __webpack_require__(31);
axios.CancelToken = __webpack_require__(49);
axios.isCancel = __webpack_require__(30);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(50);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(25);
var utils = __webpack_require__(24);
var InterceptorManager = __webpack_require__(44);
var dispatchRequest = __webpack_require__(45);
var isAbsoluteURL = __webpack_require__(47);
var combineURLs = __webpack_require__(48);

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
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(24);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(29);

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
/* 38 */
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
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(24);

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
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(24);

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
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(24);

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
/* 42 */
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
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(24);

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
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(24);

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
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(24);
var transformData = __webpack_require__(46);
var isCancel = __webpack_require__(30);
var defaults = __webpack_require__(25);

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
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(24);

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
/* 47 */
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
/* 48 */
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
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(31);

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
/* 50 */
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
/* 51 */
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
/* 52 */
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

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwLmJ1bmRsZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBhZmQ3NTIxNjhjNDI1ZjBkYzE5NSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3ZnLXNwcml0ZS1sb2FkZXIvcnVudGltZS9icm93c2VyLXNwcml0ZS5idWlsZC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy9wdWJsaWMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9zdHlsZS9zdHlsZS5zdHlsIiwid2VicGFjazovLy9wdWJsaWMvanMvc3ZnLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZXMvaWNvbnMvYWRkLnN2ZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2VzL2ljb25zL2NvZy5zdmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlcy9pY29ucy9oZWFydC5zdmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlcy9pY29ucy9sb2dvLnN2ZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2VzL2ljb25zL2xvZ291dC5zdmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlcy9pY29ucy9tYXAuc3ZnIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZXMvaWNvbnMvcGVuY2lsLnN2ZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2VzL2ljb25zL3Jldmlldy5zdmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlcy9pY29ucy9zdG9yZS5zdmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlcy9pY29ucy9zdG9yZTIuc3ZnIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZXMvaWNvbnMvdGFnLnN2ZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2VzL2ljb25zL3RvcC5zdmciLCJ3ZWJwYWNrOi8vL3B1YmxpYy9qcy9tb2R1bGVzL2F1dG9jb21wbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvZGVmYXVsdHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2JpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2FkYXB0ZXJzL3hoci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvY3JlYXRlRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvaXNDYW5jZWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsLmpzIiwid2VicGFjazovLy9wdWJsaWMvanMvbW9kdWxlcy90eXBlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2F4aW9zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9BeGlvcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvc2V0dGxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9lbmhhbmNlRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2J1aWxkVVJMLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9wYXJzZUhlYWRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnRvYS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29va2llcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvSW50ZXJjZXB0b3JNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9kaXNwYXRjaFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3RyYW5zZm9ybURhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2NvbWJpbmVVUkxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbFRva2VuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9zcHJlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RvbXB1cmlmeS9zcmMvcHVyaWZ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdmctYmFrZXItcnVudGltZS9icm93c2VyLXN5bWJvbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBhZmQ3NTIxNjhjNDI1ZjBkYzE5NSIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG5cdHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpIDpcblx0dHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKGZhY3RvcnkpIDpcblx0KGdsb2JhbC5Ccm93c2VyU3ByaXRlID0gZmFjdG9yeSgpKTtcbn0odGhpcywgKGZ1bmN0aW9uICgpIHsgJ3VzZSBzdHJpY3QnO1xuXG52YXIgY29tbW9uanNHbG9iYWwgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDogdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHt9O1xuXG5cblxuXG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZuLCBtb2R1bGUpIHtcblx0cmV0dXJuIG1vZHVsZSA9IHsgZXhwb3J0czoge30gfSwgZm4obW9kdWxlLCBtb2R1bGUuZXhwb3J0cyksIG1vZHVsZS5leHBvcnRzO1xufVxuXG52YXIgaW5kZXggPSBjcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbiAobW9kdWxlLCBleHBvcnRzKSB7XG4oZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcbiAgICBpZiAodHlwZW9mIHVuZGVmaW5lZCA9PT0gJ2Z1bmN0aW9uJyAmJiB1bmRlZmluZWQuYW1kKSB7XG4gICAgICAgIHVuZGVmaW5lZChmYWN0b3J5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcbiAgICB9XG59KGNvbW1vbmpzR2xvYmFsLCBmdW5jdGlvbiAoKSB7XG5cbmZ1bmN0aW9uIGlzTWVyZ2VhYmxlT2JqZWN0KHZhbCkge1xuICAgIHZhciBub25OdWxsT2JqZWN0ID0gdmFsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnO1xuXG4gICAgcmV0dXJuIG5vbk51bGxPYmplY3RcbiAgICAgICAgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbCkgIT09ICdbb2JqZWN0IFJlZ0V4cF0nXG4gICAgICAgICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWwpICE9PSAnW29iamVjdCBEYXRlXSdcbn1cblxuZnVuY3Rpb24gZW1wdHlUYXJnZXQodmFsKSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsKSA/IFtdIDoge31cbn1cblxuZnVuY3Rpb24gY2xvbmVJZk5lY2Vzc2FyeSh2YWx1ZSwgb3B0aW9uc0FyZ3VtZW50KSB7XG4gICAgdmFyIGNsb25lID0gb3B0aW9uc0FyZ3VtZW50ICYmIG9wdGlvbnNBcmd1bWVudC5jbG9uZSA9PT0gdHJ1ZTtcbiAgICByZXR1cm4gKGNsb25lICYmIGlzTWVyZ2VhYmxlT2JqZWN0KHZhbHVlKSkgPyBkZWVwbWVyZ2UoZW1wdHlUYXJnZXQodmFsdWUpLCB2YWx1ZSwgb3B0aW9uc0FyZ3VtZW50KSA6IHZhbHVlXG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRBcnJheU1lcmdlKHRhcmdldCwgc291cmNlLCBvcHRpb25zQXJndW1lbnQpIHtcbiAgICB2YXIgZGVzdGluYXRpb24gPSB0YXJnZXQuc2xpY2UoKTtcbiAgICBzb3VyY2UuZm9yRWFjaChmdW5jdGlvbihlLCBpKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGVzdGluYXRpb25baV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbltpXSA9IGNsb25lSWZOZWNlc3NhcnkoZSwgb3B0aW9uc0FyZ3VtZW50KTtcbiAgICAgICAgfSBlbHNlIGlmIChpc01lcmdlYWJsZU9iamVjdChlKSkge1xuICAgICAgICAgICAgZGVzdGluYXRpb25baV0gPSBkZWVwbWVyZ2UodGFyZ2V0W2ldLCBlLCBvcHRpb25zQXJndW1lbnQpO1xuICAgICAgICB9IGVsc2UgaWYgKHRhcmdldC5pbmRleE9mKGUpID09PSAtMSkge1xuICAgICAgICAgICAgZGVzdGluYXRpb24ucHVzaChjbG9uZUlmTmVjZXNzYXJ5KGUsIG9wdGlvbnNBcmd1bWVudCkpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGRlc3RpbmF0aW9uXG59XG5cbmZ1bmN0aW9uIG1lcmdlT2JqZWN0KHRhcmdldCwgc291cmNlLCBvcHRpb25zQXJndW1lbnQpIHtcbiAgICB2YXIgZGVzdGluYXRpb24gPSB7fTtcbiAgICBpZiAoaXNNZXJnZWFibGVPYmplY3QodGFyZ2V0KSkge1xuICAgICAgICBPYmplY3Qua2V5cyh0YXJnZXQpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgZGVzdGluYXRpb25ba2V5XSA9IGNsb25lSWZOZWNlc3NhcnkodGFyZ2V0W2tleV0sIG9wdGlvbnNBcmd1bWVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBpZiAoIWlzTWVyZ2VhYmxlT2JqZWN0KHNvdXJjZVtrZXldKSB8fCAhdGFyZ2V0W2tleV0pIHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uW2tleV0gPSBjbG9uZUlmTmVjZXNzYXJ5KHNvdXJjZVtrZXldLCBvcHRpb25zQXJndW1lbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGVzdGluYXRpb25ba2V5XSA9IGRlZXBtZXJnZSh0YXJnZXRba2V5XSwgc291cmNlW2tleV0sIG9wdGlvbnNBcmd1bWVudCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZGVzdGluYXRpb25cbn1cblxuZnVuY3Rpb24gZGVlcG1lcmdlKHRhcmdldCwgc291cmNlLCBvcHRpb25zQXJndW1lbnQpIHtcbiAgICB2YXIgYXJyYXkgPSBBcnJheS5pc0FycmF5KHNvdXJjZSk7XG4gICAgdmFyIG9wdGlvbnMgPSBvcHRpb25zQXJndW1lbnQgfHwgeyBhcnJheU1lcmdlOiBkZWZhdWx0QXJyYXlNZXJnZSB9O1xuICAgIHZhciBhcnJheU1lcmdlID0gb3B0aW9ucy5hcnJheU1lcmdlIHx8IGRlZmF1bHRBcnJheU1lcmdlO1xuXG4gICAgaWYgKGFycmF5KSB7XG4gICAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KHRhcmdldCkgPyBhcnJheU1lcmdlKHRhcmdldCwgc291cmNlLCBvcHRpb25zQXJndW1lbnQpIDogY2xvbmVJZk5lY2Vzc2FyeShzb3VyY2UsIG9wdGlvbnNBcmd1bWVudClcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbWVyZ2VPYmplY3QodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnNBcmd1bWVudClcbiAgICB9XG59XG5cbmRlZXBtZXJnZS5hbGwgPSBmdW5jdGlvbiBkZWVwbWVyZ2VBbGwoYXJyYXksIG9wdGlvbnNBcmd1bWVudCkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShhcnJheSkgfHwgYXJyYXkubGVuZ3RoIDwgMikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ZpcnN0IGFyZ3VtZW50IHNob3VsZCBiZSBhbiBhcnJheSB3aXRoIGF0IGxlYXN0IHR3byBlbGVtZW50cycpXG4gICAgfVxuXG4gICAgLy8gd2UgYXJlIHN1cmUgdGhlcmUgYXJlIGF0IGxlYXN0IDIgdmFsdWVzLCBzbyBpdCBpcyBzYWZlIHRvIGhhdmUgbm8gaW5pdGlhbCB2YWx1ZVxuICAgIHJldHVybiBhcnJheS5yZWR1Y2UoZnVuY3Rpb24ocHJldiwgbmV4dCkge1xuICAgICAgICByZXR1cm4gZGVlcG1lcmdlKHByZXYsIG5leHQsIG9wdGlvbnNBcmd1bWVudClcbiAgICB9KVxufTtcblxucmV0dXJuIGRlZXBtZXJnZVxuXG59KSk7XG59KTtcblxuLy8gICAgICBcbi8vIEFuIGV2ZW50IGhhbmRsZXIgY2FuIHRha2UgYW4gb3B0aW9uYWwgZXZlbnQgYXJndW1lbnRcbi8vIGFuZCBzaG91bGQgbm90IHJldHVybiBhIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbi8vIEFuIGFycmF5IG9mIGFsbCBjdXJyZW50bHkgcmVnaXN0ZXJlZCBldmVudCBoYW5kbGVycyBmb3IgYSB0eXBlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuLy8gQSBtYXAgb2YgZXZlbnQgdHlwZXMgYW5kIHRoZWlyIGNvcnJlc3BvbmRpbmcgZXZlbnQgaGFuZGxlcnMuXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIFxuXG4vKiogTWl0dDogVGlueSAofjIwMGIpIGZ1bmN0aW9uYWwgZXZlbnQgZW1pdHRlciAvIHB1YnN1Yi5cbiAqICBAbmFtZSBtaXR0XG4gKiAgQHJldHVybnMge01pdHR9XG4gKi9cbmZ1bmN0aW9uIG1pdHQoYWxsICAgICAgICAgICAgICAgICApIHtcblx0YWxsID0gYWxsIHx8IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cblx0cmV0dXJuIHtcblx0XHQvKipcblx0XHQgKiBSZWdpc3RlciBhbiBldmVudCBoYW5kbGVyIGZvciB0aGUgZ2l2ZW4gdHlwZS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSAge1N0cmluZ30gdHlwZVx0VHlwZSBvZiBldmVudCB0byBsaXN0ZW4gZm9yLCBvciBgXCIqXCJgIGZvciBhbGwgZXZlbnRzXG5cdFx0ICogQHBhcmFtICB7RnVuY3Rpb259IGhhbmRsZXIgRnVuY3Rpb24gdG8gY2FsbCBpbiByZXNwb25zZSB0byBnaXZlbiBldmVudFxuXHRcdCAqIEBtZW1iZXJPZiBtaXR0XG5cdFx0ICovXG5cdFx0b246IGZ1bmN0aW9uIG9uKHR5cGUgICAgICAgICwgaGFuZGxlciAgICAgICAgICAgICAgKSB7XG5cdFx0XHQoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcik7XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIFJlbW92ZSBhbiBldmVudCBoYW5kbGVyIGZvciB0aGUgZ2l2ZW4gdHlwZS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSAge1N0cmluZ30gdHlwZVx0VHlwZSBvZiBldmVudCB0byB1bnJlZ2lzdGVyIGBoYW5kbGVyYCBmcm9tLCBvciBgXCIqXCJgXG5cdFx0ICogQHBhcmFtICB7RnVuY3Rpb259IGhhbmRsZXIgSGFuZGxlciBmdW5jdGlvbiB0byByZW1vdmVcblx0XHQgKiBAbWVtYmVyT2YgbWl0dFxuXHRcdCAqL1xuXHRcdG9mZjogZnVuY3Rpb24gb2ZmKHR5cGUgICAgICAgICwgaGFuZGxlciAgICAgICAgICAgICAgKSB7XG5cdFx0XHRpZiAoYWxsW3R5cGVdKSB7XG5cdFx0XHRcdGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBJbnZva2UgYWxsIGhhbmRsZXJzIGZvciB0aGUgZ2l2ZW4gdHlwZS5cblx0XHQgKiBJZiBwcmVzZW50LCBgXCIqXCJgIGhhbmRsZXJzIGFyZSBpbnZva2VkIGFmdGVyIHR5cGUtbWF0Y2hlZCBoYW5kbGVycy5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlICBUaGUgZXZlbnQgdHlwZSB0byBpbnZva2Vcblx0XHQgKiBAcGFyYW0ge0FueX0gW2V2dF0gIEFueSB2YWx1ZSAob2JqZWN0IGlzIHJlY29tbWVuZGVkIGFuZCBwb3dlcmZ1bCksIHBhc3NlZCB0byBlYWNoIGhhbmRsZXJcblx0XHQgKiBAbWVtYmVyb2YgbWl0dFxuXHRcdCAqL1xuXHRcdGVtaXQ6IGZ1bmN0aW9uIGVtaXQodHlwZSAgICAgICAgLCBldnQgICAgICkge1xuXHRcdFx0KGFsbFt0eXBlXSB8fCBbXSkubWFwKGZ1bmN0aW9uIChoYW5kbGVyKSB7IGhhbmRsZXIoZXZ0KTsgfSk7XG5cdFx0XHQoYWxsWycqJ10gfHwgW10pLm1hcChmdW5jdGlvbiAoaGFuZGxlcikgeyBoYW5kbGVyKHR5cGUsIGV2dCk7IH0pO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIG5hbWVzcGFjZXNfMSA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUsIGV4cG9ydHMpIHtcbnZhciBuYW1lc3BhY2VzID0ge1xuICBzdmc6IHtcbiAgICBuYW1lOiAneG1sbnMnLFxuICAgIHVyaTogJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xuICB9LFxuICB4bGluazoge1xuICAgIG5hbWU6ICd4bWxuczp4bGluaycsXG4gICAgdXJpOiAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaydcbiAgfVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gbmFtZXNwYWNlcztcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xufSk7XG5cbi8qKlxuICogQHBhcmFtIHtPYmplY3R9IGF0dHJzXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbnZhciBvYmplY3RUb0F0dHJzU3RyaW5nID0gZnVuY3Rpb24gKGF0dHJzKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhhdHRycykubWFwKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgdmFyIHZhbHVlID0gYXR0cnNbYXR0cl0udG9TdHJpbmcoKS5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7Jyk7XG4gICAgcmV0dXJuIChhdHRyICsgXCI9XFxcIlwiICsgdmFsdWUgKyBcIlxcXCJcIik7XG4gIH0pLmpvaW4oJyAnKTtcbn07XG5cbnZhciBzdmcgPSBuYW1lc3BhY2VzXzEuc3ZnO1xudmFyIHhsaW5rID0gbmFtZXNwYWNlc18xLnhsaW5rO1xuXG52YXIgZGVmYXVsdEF0dHJzID0ge307XG5kZWZhdWx0QXR0cnNbc3ZnLm5hbWVdID0gc3ZnLnVyaTtcbmRlZmF1bHRBdHRyc1t4bGluay5uYW1lXSA9IHhsaW5rLnVyaTtcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvbnRlbnRdXG4gKiBAcGFyYW0ge09iamVjdH0gW2F0dHJpYnV0ZXNdXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbnZhciB3cmFwSW5TdmdTdHJpbmcgPSBmdW5jdGlvbiAoY29udGVudCwgYXR0cmlidXRlcykge1xuICBpZiAoIGNvbnRlbnQgPT09IHZvaWQgMCApIGNvbnRlbnQgPSAnJztcblxuICB2YXIgYXR0cnMgPSBpbmRleChkZWZhdWx0QXR0cnMsIGF0dHJpYnV0ZXMgfHwge30pO1xuICB2YXIgYXR0cnNSZW5kZXJlZCA9IG9iamVjdFRvQXR0cnNTdHJpbmcoYXR0cnMpO1xuICByZXR1cm4gKFwiPHN2ZyBcIiArIGF0dHJzUmVuZGVyZWQgKyBcIj5cIiArIGNvbnRlbnQgKyBcIjwvc3ZnPlwiKTtcbn07XG5cbnZhciBzdmckMSA9IG5hbWVzcGFjZXNfMS5zdmc7XG52YXIgeGxpbmskMSA9IG5hbWVzcGFjZXNfMS54bGluaztcblxudmFyIGRlZmF1bHRDb25maWcgPSB7XG4gIGF0dHJzOiAoIG9iaiA9IHtcbiAgICBzdHlsZTogWydwb3NpdGlvbjogYWJzb2x1dGUnLCAnd2lkdGg6IDAnLCAnaGVpZ2h0OiAwJ10uam9pbignOyAnKVxuICB9LCBvYmpbc3ZnJDEubmFtZV0gPSBzdmckMS51cmksIG9ialt4bGluayQxLm5hbWVdID0geGxpbmskMS51cmksIG9iaiApXG59O1xudmFyIG9iajtcblxudmFyIFNwcml0ZSA9IGZ1bmN0aW9uIFNwcml0ZShjb25maWcpIHtcbiAgdGhpcy5jb25maWcgPSBpbmRleChkZWZhdWx0Q29uZmlnLCBjb25maWcgfHwge30pO1xuICB0aGlzLnN5bWJvbHMgPSBbXTtcbn07XG5cbi8qKlxuICogQWRkIG5ldyBzeW1ib2wuIElmIHN5bWJvbCB3aXRoIHRoZSBzYW1lIGlkIGV4aXN0cyBpdCB3aWxsIGJlIHJlcGxhY2VkLlxuICogQHBhcmFtIHtTcHJpdGVTeW1ib2x9IHN5bWJvbFxuICogQHJldHVybiB7Ym9vbGVhbn0gYHRydWVgIC0gc3ltYm9sIHdhcyBhZGRlZCwgYGZhbHNlYCAtIHJlcGxhY2VkXG4gKi9cblNwcml0ZS5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gYWRkIChzeW1ib2wpIHtcbiAgdmFyIHJlZiA9IHRoaXM7XG4gICAgdmFyIHN5bWJvbHMgPSByZWYuc3ltYm9scztcbiAgdmFyIGV4aXN0aW5nID0gdGhpcy5maW5kKHN5bWJvbC5pZCk7XG5cbiAgaWYgKGV4aXN0aW5nKSB7XG4gICAgc3ltYm9sc1tzeW1ib2xzLmluZGV4T2YoZXhpc3RpbmcpXSA9IHN5bWJvbDtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzeW1ib2xzLnB1c2goc3ltYm9sKTtcbiAgcmV0dXJuIHRydWU7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBzeW1ib2wgJiBkZXN0cm95IGl0XG4gKiBAcGFyYW0ge3N0cmluZ30gaWRcbiAqIEByZXR1cm4ge2Jvb2xlYW59IGB0cnVlYCAtIHN5bWJvbCB3YXMgZm91bmQgJiBzdWNjZXNzZnVsbHkgZGVzdHJveWVkLCBgZmFsc2VgIC0gb3RoZXJ3aXNlXG4gKi9cblNwcml0ZS5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlIChpZCkge1xuICB2YXIgcmVmID0gdGhpcztcbiAgICB2YXIgc3ltYm9scyA9IHJlZi5zeW1ib2xzO1xuICB2YXIgc3ltYm9sID0gdGhpcy5maW5kKGlkKTtcblxuICBpZiAoc3ltYm9sKSB7XG4gICAgc3ltYm9scy5zcGxpY2Uoc3ltYm9scy5pbmRleE9mKHN5bWJvbCksIDEpO1xuICAgIHN5bWJvbC5kZXN0cm95KCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBpZFxuICogQHJldHVybiB7U3ByaXRlU3ltYm9sfG51bGx9XG4gKi9cblNwcml0ZS5wcm90b3R5cGUuZmluZCA9IGZ1bmN0aW9uIGZpbmQgKGlkKSB7XG4gIHJldHVybiB0aGlzLnN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzKSB7IHJldHVybiBzLmlkID09PSBpZDsgfSlbMF0gfHwgbnVsbDtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGlkXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5TcHJpdGUucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uIGhhcyAoaWQpIHtcbiAgcmV0dXJuIHRoaXMuZmluZChpZCkgIT09IG51bGw7XG59O1xuXG4vKipcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuU3ByaXRlLnByb3RvdHlwZS5zdHJpbmdpZnkgPSBmdW5jdGlvbiBzdHJpbmdpZnkgKCkge1xuICB2YXIgcmVmID0gdGhpcy5jb25maWc7XG4gICAgdmFyIGF0dHJzID0gcmVmLmF0dHJzO1xuICB2YXIgc3RyaW5naWZpZWRTeW1ib2xzID0gdGhpcy5zeW1ib2xzLm1hcChmdW5jdGlvbiAocykgeyByZXR1cm4gcy5zdHJpbmdpZnkoKTsgfSkuam9pbignJyk7XG4gIHJldHVybiB3cmFwSW5TdmdTdHJpbmcoc3RyaW5naWZpZWRTeW1ib2xzLCBhdHRycyk7XG59O1xuXG4vKipcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuU3ByaXRlLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nICgpIHtcbiAgcmV0dXJuIHRoaXMuc3RyaW5naWZ5KCk7XG59O1xuXG5TcHJpdGUucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiBkZXN0cm95ICgpIHtcbiAgdGhpcy5zeW1ib2xzLmZvckVhY2goZnVuY3Rpb24gKHMpIHsgcmV0dXJuIHMuZGVzdHJveSgpOyB9KTtcbn07XG5cbnZhciBkZWZhdWx0Q29uZmlnJDEgPSB7XG4gIC8qKlxuICAgKiBTaG91bGQgZm9sbG93aW5nIG9wdGlvbnMgYmUgYXV0b21hdGljYWxseSBjb25maWd1cmVkOlxuICAgKiAtIGBzeW5jVXJsc1dpdGhCYXNlVGFnYFxuICAgKiAtIGBsb2NhdGlvbkNoYW5nZUFuZ3VsYXJFbWl0dGVyYFxuICAgKiAtIGBtb3ZlR3JhZGllbnRzT3V0c2lkZVN5bWJvbGBcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICBhdXRvQ29uZmlndXJlOiB0cnVlLFxuXG4gIC8qKlxuICAgKiBEZWZhdWx0IG1vdW50aW5nIHNlbGVjdG9yXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBtb3VudFRvOiAnYm9keScsXG5cbiAgLyoqXG4gICAqIEZpeCBkaXNhcHBlYXJpbmcgU1ZHIGVsZW1lbnRzIHdoZW4gPGJhc2UgaHJlZj4gZXhpc3RzLlxuICAgKiBFeGVjdXRlcyB3aGVuIHNwcml0ZSBtb3VudGVkLlxuICAgKiBAc2VlIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE4MjY1MzM2Lzc5NjE1MlxuICAgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9ldmVyZGltZW5zaW9uL2FuZ3VsYXItc3ZnLWJhc2UtZml4XG4gICAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci5qcy9pc3N1ZXMvODkzNCNpc3N1ZWNvbW1lbnQtNTY1Njg0NjZcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICBzeW5jVXJsc1dpdGhCYXNlVGFnOiBmYWxzZSxcblxuICAvKipcbiAgICogU2hvdWxkIHNwcml0ZSBsaXN0ZW4gY3VzdG9tIGxvY2F0aW9uIGNoYW5nZSBldmVudFxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIGxpc3RlbkxvY2F0aW9uQ2hhbmdlRXZlbnQ6IHRydWUsXG5cbiAgLyoqXG4gICAqIEN1c3RvbSB3aW5kb3cgZXZlbnQgbmFtZSB3aGljaCBzaG91bGQgYmUgZW1pdHRlZCB0byB1cGRhdGUgc3ByaXRlIHVybHNcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGxvY2F0aW9uQ2hhbmdlRXZlbnQ6ICdsb2NhdGlvbkNoYW5nZScsXG5cbiAgLyoqXG4gICAqIEVtaXQgbG9jYXRpb24gY2hhbmdlIGV2ZW50IGluIEFuZ3VsYXIgYXV0b21hdGljYWxseVxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIGxvY2F0aW9uQ2hhbmdlQW5ndWxhckVtaXR0ZXI6IGZhbHNlLFxuXG4gIC8qKlxuICAgKiBTZWxlY3RvciB0byBmaW5kIHN5bWJvbHMgdXNhZ2VzIHdoZW4gdXBkYXRpbmcgc3ByaXRlIHVybHNcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIHVzYWdlc1RvVXBkYXRlOiAndXNlWyp8aHJlZl0nLFxuXG4gIC8qKlxuICAgKiBGaXggRmlyZWZveCBidWcgd2hlbiBncmFkaWVudHMgYW5kIHBhdHRlcm5zIGRvbid0IHdvcmsgaWYgdGhleSBhcmUgd2l0aGluIGEgc3ltYm9sLlxuICAgKiBFeGVjdXRlcyB3aGVuIHNwcml0ZSBpcyByZW5kZXJlZCwgYnV0IG5vdCBtb3VudGVkLlxuICAgKiBAc2VlIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTMwNjY3NFxuICAgKiBAc2VlIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTM1MzU3NVxuICAgKiBAc2VlIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTEyMzUzNjRcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICBtb3ZlR3JhZGllbnRzT3V0c2lkZVN5bWJvbDogZmFsc2Vcbn07XG5cbnZhciBhcnJheUZyb20gPSBmdW5jdGlvbiAoYXJyYXlMaWtlKSB7XG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcnJheUxpa2UsIDApO1xufTtcblxudmFyIHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcblxudmFyIGJyb3dzZXIgPSB7XG4gIGlzQ2hyb21lOiAvY2hyb21lL2kudGVzdCh1YSksXG4gIGlzRmlyZWZveDogL2ZpcmVmb3gvaS50ZXN0KHVhKSxcbiAgaXNJRTogL21zaWUvaS50ZXN0KHVhKSxcbiAgaXNFZGdlOiAvZWRnZS9pLnRlc3QodWEpXG59O1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0geyp9IGRhdGFcbiAqL1xudmFyIGRpc3BhdGNoRXZlbnQgPSBmdW5jdGlvbiAobmFtZSwgZGF0YSkge1xuICB2YXIgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcbiAgZXZlbnQuaW5pdEN1c3RvbUV2ZW50KG5hbWUsIGZhbHNlLCBmYWxzZSwgZGF0YSk7XG4gIHdpbmRvdy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IFt1cmxdIElmIG5vdCBwcm92aWRlZCAtIGN1cnJlbnQgVVJMIHdpbGwgYmUgdXNlZFxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG52YXIgZ2V0VXJsV2l0aG91dEZyYWdtZW50ID0gZnVuY3Rpb24gKHVybCkge1xuICByZXR1cm4gKHVybCB8fCB3aW5kb3cubG9jYXRpb24uaHJlZikuc3BsaXQoJyMnKVswXTtcbn07XG5cbi8qIGdsb2JhbCBhbmd1bGFyICovXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWVcbiAqL1xudmFyIGxvY2F0aW9uQ2hhbmdlQW5ndWxhckVtaXR0ZXIgPSBmdW5jdGlvbiAoZXZlbnROYW1lKSB7XG4gIGFuZ3VsYXIubW9kdWxlKCduZycpLnJ1bihbJyRyb290U2NvcGUnLCBmdW5jdGlvbiAoJHJvb3RTY29wZSkge1xuICAgICRyb290U2NvcGUuJG9uKCckbG9jYXRpb25DaGFuZ2VTdWNjZXNzJywgZnVuY3Rpb24gKGUsIG5ld1VybCwgb2xkVXJsKSB7XG4gICAgICBkaXNwYXRjaEV2ZW50KGV2ZW50TmFtZSwgeyBvbGRVcmw6IG9sZFVybCwgbmV3VXJsOiBuZXdVcmwgfSk7XG4gICAgfSk7XG4gIH1dKTtcbn07XG5cbnZhciBkZWZhdWx0U2VsZWN0b3IgPSAnbGluZWFyR3JhZGllbnQsIHJhZGlhbEdyYWRpZW50LCBwYXR0ZXJuJztcblxuLyoqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IHN2Z1xuICogQHBhcmFtIHtzdHJpbmd9IFtzZWxlY3Rvcl1cbiAqIEByZXR1cm4ge0VsZW1lbnR9XG4gKi9cbnZhciBtb3ZlR3JhZGllbnRzT3V0c2lkZVN5bWJvbCA9IGZ1bmN0aW9uIChzdmcsIHNlbGVjdG9yKSB7XG4gIGlmICggc2VsZWN0b3IgPT09IHZvaWQgMCApIHNlbGVjdG9yID0gZGVmYXVsdFNlbGVjdG9yO1xuXG4gIGFycmF5RnJvbShzdmcucXVlcnlTZWxlY3RvckFsbCgnc3ltYm9sJykpLmZvckVhY2goZnVuY3Rpb24gKHN5bWJvbCkge1xuICAgIGFycmF5RnJvbShzeW1ib2wucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgIHN5bWJvbC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShub2RlLCBzeW1ib2wpO1xuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIHN2Zztcbn07XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbnRlbnRcbiAqIEByZXR1cm4ge0VsZW1lbnR9XG4gKi9cbnZhciBwYXJzZSA9IGZ1bmN0aW9uIChjb250ZW50KSB7XG4gIHZhciBoYXNJbXBvcnROb2RlID0gISFkb2N1bWVudC5pbXBvcnROb2RlO1xuICB2YXIgZG9jID0gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhjb250ZW50LCAnaW1hZ2Uvc3ZnK3htbCcpLmRvY3VtZW50RWxlbWVudDtcblxuICAvKipcbiAgICogRml4IGZvciBicm93c2VyIHdoaWNoIGFyZSB0aHJvd2luZyBXcm9uZ0RvY3VtZW50RXJyb3JcbiAgICogaWYgeW91IGluc2VydCBhbiBlbGVtZW50IHdoaWNoIGlzIG5vdCBwYXJ0IG9mIHRoZSBkb2N1bWVudFxuICAgKiBAc2VlIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzc5ODY1MTkvNDYyNDQwM1xuICAgKi9cbiAgaWYgKGhhc0ltcG9ydE5vZGUpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuaW1wb3J0Tm9kZShkb2MsIHRydWUpO1xuICB9XG5cbiAgcmV0dXJuIGRvYztcbn07XG5cbi8qKlxuICogQHBhcmFtIHtOb2RlTGlzdH0gbm9kZXNcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFttYXRjaGVyXVxuICogQHJldHVybiB7QXR0cltdfVxuICovXG5mdW5jdGlvbiBzZWxlY3RBdHRyaWJ1dGVzKG5vZGVzLCBtYXRjaGVyKSB7XG4gIHZhciBhdHRycyA9IGFycmF5RnJvbShub2RlcykucmVkdWNlKGZ1bmN0aW9uIChhY2MsIG5vZGUpIHtcbiAgICBpZiAoIW5vZGUuYXR0cmlidXRlcykge1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9XG5cbiAgICB2YXIgYXJyYXlmaWVkID0gYXJyYXlGcm9tKG5vZGUuYXR0cmlidXRlcyk7XG4gICAgdmFyIG1hdGNoZWQgPSBtYXRjaGVyID8gYXJyYXlmaWVkLmZpbHRlcihtYXRjaGVyKSA6IGFycmF5ZmllZDtcbiAgICByZXR1cm4gYWNjLmNvbmNhdChtYXRjaGVkKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiBhdHRycztcbn1cblxuLyoqXG4gKiBAcGFyYW0ge05vZGVMaXN0fE5vZGV9IG5vZGVzXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtjbG9uZT10cnVlXVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5cbnZhciB4TGlua05TID0gbmFtZXNwYWNlc18xLnhsaW5rLnVyaTtcbnZhciB4TGlua0F0dHJOYW1lID0gJ3hsaW5rOmhyZWYnO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1lc2NhcGVcbnZhciBzcGVjaWFsVXJsQ2hhcnNQYXR0ZXJuID0gL1soKXt9fFxcXFxcXF5+XFxbXFxdYFwiPD5dL2c7XG5cbmZ1bmN0aW9uIGVuY29kZXIodXJsKSB7XG4gIHJldHVybiB1cmwucmVwbGFjZShzcGVjaWFsVXJsQ2hhcnNQYXR0ZXJuLCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICByZXR1cm4gKFwiJVwiICsgKG1hdGNoWzBdLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCkpKTtcbiAgfSk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtOb2RlTGlzdH0gbm9kZXNcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdGFydHNXaXRoXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVwbGFjZVdpdGhcbiAqIEByZXR1cm4ge05vZGVMaXN0fVxuICovXG5mdW5jdGlvbiB1cGRhdGVSZWZlcmVuY2VzKG5vZGVzLCBzdGFydHNXaXRoLCByZXBsYWNlV2l0aCkge1xuICBhcnJheUZyb20obm9kZXMpLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcbiAgICB2YXIgaHJlZiA9IG5vZGUuZ2V0QXR0cmlidXRlKHhMaW5rQXR0ck5hbWUpO1xuICAgIGlmIChocmVmICYmIGhyZWYuaW5kZXhPZihzdGFydHNXaXRoKSA9PT0gMCkge1xuICAgICAgdmFyIG5ld1VybCA9IGhyZWYucmVwbGFjZShzdGFydHNXaXRoLCByZXBsYWNlV2l0aCk7XG4gICAgICBub2RlLnNldEF0dHJpYnV0ZU5TKHhMaW5rTlMsIHhMaW5rQXR0ck5hbWUsIG5ld1VybCk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gbm9kZXM7XG59XG5cbi8qKlxuICogTGlzdCBvZiBTVkcgYXR0cmlidXRlcyB0byB1cGRhdGUgdXJsKCkgdGFyZ2V0IGluIHRoZW1cbiAqL1xudmFyIGF0dExpc3QgPSBbXG4gICdjbGlwUGF0aCcsXG4gICdjb2xvclByb2ZpbGUnLFxuICAnc3JjJyxcbiAgJ2N1cnNvcicsXG4gICdmaWxsJyxcbiAgJ2ZpbHRlcicsXG4gICdtYXJrZXInLFxuICAnbWFya2VyU3RhcnQnLFxuICAnbWFya2VyTWlkJyxcbiAgJ21hcmtlckVuZCcsXG4gICdtYXNrJyxcbiAgJ3N0cm9rZScsXG4gICdzdHlsZSdcbl07XG5cbnZhciBhdHRTZWxlY3RvciA9IGF0dExpc3QubWFwKGZ1bmN0aW9uIChhdHRyKSB7IHJldHVybiAoXCJbXCIgKyBhdHRyICsgXCJdXCIpOyB9KS5qb2luKCcsJyk7XG5cbi8qKlxuICogVXBkYXRlIFVSTHMgaW4gc3ZnIGltYWdlIChsaWtlIGBmaWxsPVwidXJsKC4uLilcImApIGFuZCB1cGRhdGUgcmVmZXJlbmNpbmcgZWxlbWVudHNcbiAqIEBwYXJhbSB7RWxlbWVudH0gc3ZnXG4gKiBAcGFyYW0ge05vZGVMaXN0fSByZWZlcmVuY2VzXG4gKiBAcGFyYW0ge3N0cmluZ3xSZWdFeHB9IHN0YXJ0c1dpdGhcbiAqIEBwYXJhbSB7c3RyaW5nfSByZXBsYWNlV2l0aFxuICogQHJldHVybiB7dm9pZH1cbiAqXG4gKiBAZXhhbXBsZVxuICogY29uc3Qgc3ByaXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc3ZnLnNwcml0ZScpO1xuICogY29uc3QgdXNhZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgndXNlJyk7XG4gKiB1cGRhdGVVcmxzKHNwcml0ZSwgdXNhZ2VzLCAnIycsICdwcmVmaXgjJyk7XG4gKi9cbnZhciB1cGRhdGVVcmxzID0gZnVuY3Rpb24gKHN2ZywgcmVmZXJlbmNlcywgc3RhcnRzV2l0aCwgcmVwbGFjZVdpdGgpIHtcbiAgdmFyIHN0YXJ0c1dpdGhFbmNvZGVkID0gZW5jb2RlcihzdGFydHNXaXRoKTtcbiAgdmFyIHJlcGxhY2VXaXRoRW5jb2RlZCA9IGVuY29kZXIocmVwbGFjZVdpdGgpO1xuXG4gIHZhciBub2RlcyA9IHN2Zy5xdWVyeVNlbGVjdG9yQWxsKGF0dFNlbGVjdG9yKTtcbiAgdmFyIGF0dHJzID0gc2VsZWN0QXR0cmlidXRlcyhub2RlcywgZnVuY3Rpb24gKHJlZikge1xuICAgIHZhciBsb2NhbE5hbWUgPSByZWYubG9jYWxOYW1lO1xuICAgIHZhciB2YWx1ZSA9IHJlZi52YWx1ZTtcblxuICAgIHJldHVybiBhdHRMaXN0LmluZGV4T2YobG9jYWxOYW1lKSAhPT0gLTEgJiYgdmFsdWUuaW5kZXhPZigoXCJ1cmwoXCIgKyBzdGFydHNXaXRoRW5jb2RlZCkpICE9PSAtMTtcbiAgfSk7XG5cbiAgYXR0cnMuZm9yRWFjaChmdW5jdGlvbiAoYXR0cikgeyByZXR1cm4gYXR0ci52YWx1ZSA9IGF0dHIudmFsdWUucmVwbGFjZShzdGFydHNXaXRoRW5jb2RlZCwgcmVwbGFjZVdpdGhFbmNvZGVkKTsgfSk7XG4gIHVwZGF0ZVJlZmVyZW5jZXMocmVmZXJlbmNlcywgc3RhcnRzV2l0aEVuY29kZWQsIHJlcGxhY2VXaXRoRW5jb2RlZCk7XG59O1xuXG4vKipcbiAqIEludGVybmFsIGVtaXR0ZXIgZXZlbnRzXG4gKiBAZW51bVxuICogQHByaXZhdGVcbiAqL1xudmFyIEV2ZW50cyA9IHtcbiAgTU9VTlQ6ICdtb3VudCdcbn07XG5cbnZhciBCcm93c2VyU3ByaXRlID0gKGZ1bmN0aW9uIChTcHJpdGUkJDEpIHtcbiAgZnVuY3Rpb24gQnJvd3NlclNwcml0ZShjZmcpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcbiAgICBpZiAoIGNmZyA9PT0gdm9pZCAwICkgY2ZnID0ge307XG5cbiAgICBTcHJpdGUkJDEuY2FsbCh0aGlzLCBpbmRleChkZWZhdWx0Q29uZmlnJDEsIGNmZykpO1xuXG4gICAgdmFyIGVtaXR0ZXIgPSBtaXR0KCk7XG4gICAgdGhpcy5fZW1pdHRlciA9IGVtaXR0ZXI7XG4gICAgdGhpcy5ub2RlID0gbnVsbDtcblxuICAgIHZhciByZWYgPSB0aGlzO1xuICAgIHZhciBjb25maWcgPSByZWYuY29uZmlnO1xuXG4gICAgaWYgKGNvbmZpZy5hdXRvQ29uZmlndXJlKSB7XG4gICAgICB0aGlzLl9hdXRvQ29uZmlndXJlKGNmZyk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5zeW5jVXJsc1dpdGhCYXNlVGFnKSB7XG4gICAgICB2YXIgYmFzZVVybCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdiYXNlJylbMF0uZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgICBlbWl0dGVyLm9uKEV2ZW50cy5NT1VOVCwgZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcyQxLnVwZGF0ZVVybHMoJyMnLCBiYXNlVXJsKTsgfSk7XG4gICAgfVxuXG4gICAgdmFyIGhhbmRsZUxvY2F0aW9uQ2hhbmdlID0gdGhpcy5faGFuZGxlTG9jYXRpb25DaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9oYW5kbGVMb2NhdGlvbkNoYW5nZSA9IGhhbmRsZUxvY2F0aW9uQ2hhbmdlO1xuXG4gICAgLy8gUHJvdmlkZSB3YXkgdG8gdXBkYXRlIHNwcml0ZSB1cmxzIGV4dGVybmFsbHkgdmlhIGRpc3BhdGNoaW5nIGN1c3RvbSB3aW5kb3cgZXZlbnRcbiAgICBpZiAoY29uZmlnLmxpc3RlbkxvY2F0aW9uQ2hhbmdlRXZlbnQpIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKGNvbmZpZy5sb2NhdGlvbkNoYW5nZUV2ZW50LCBoYW5kbGVMb2NhdGlvbkNoYW5nZSk7XG4gICAgfVxuXG4gICAgLy8gRW1pdCBsb2NhdGlvbiBjaGFuZ2UgZXZlbnQgaW4gQW5ndWxhciBhdXRvbWF0aWNhbGx5XG4gICAgaWYgKGNvbmZpZy5sb2NhdGlvbkNoYW5nZUFuZ3VsYXJFbWl0dGVyKSB7XG4gICAgICBsb2NhdGlvbkNoYW5nZUFuZ3VsYXJFbWl0dGVyKGNvbmZpZy5sb2NhdGlvbkNoYW5nZUV2ZW50KTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLm1vdmVHcmFkaWVudHNPdXRzaWRlU3ltYm9sKSB7XG4gICAgICBlbWl0dGVyLm9uKEV2ZW50cy5NT1VOVCwgZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgbW92ZUdyYWRpZW50c091dHNpZGVTeW1ib2wobm9kZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBpZiAoIFNwcml0ZSQkMSApIEJyb3dzZXJTcHJpdGUuX19wcm90b19fID0gU3ByaXRlJCQxO1xuICBCcm93c2VyU3ByaXRlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIFNwcml0ZSQkMSAmJiBTcHJpdGUkJDEucHJvdG90eXBlICk7XG4gIEJyb3dzZXJTcHJpdGUucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQnJvd3NlclNwcml0ZTtcblxuICB2YXIgcHJvdG90eXBlQWNjZXNzb3JzID0geyBpc01vdW50ZWQ6IHt9IH07XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBwcm90b3R5cGVBY2Nlc3NvcnMuaXNNb3VudGVkLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gISF0aGlzLm5vZGU7XG4gIH07XG5cbiAgLyoqXG4gICAqIEF1dG9tYXRpY2FsbHkgY29uZmlndXJlIGZvbGxvd2luZyBvcHRpb25zXG4gICAqIC0gYHN5bmNVcmxzV2l0aEJhc2VUYWdgXG4gICAqIC0gYGxvY2F0aW9uQ2hhbmdlQW5ndWxhckVtaXR0ZXJgXG4gICAqIC0gYG1vdmVHcmFkaWVudHNPdXRzaWRlU3ltYm9sYFxuICAgKiBAcGFyYW0ge09iamVjdH0gY2ZnXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBCcm93c2VyU3ByaXRlLnByb3RvdHlwZS5fYXV0b0NvbmZpZ3VyZSA9IGZ1bmN0aW9uIF9hdXRvQ29uZmlndXJlIChjZmcpIHtcbiAgICB2YXIgcmVmID0gdGhpcztcbiAgICB2YXIgY29uZmlnID0gcmVmLmNvbmZpZztcblxuICAgIGlmICh0eXBlb2YgY2ZnLnN5bmNVcmxzV2l0aEJhc2VUYWcgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWcuc3luY1VybHNXaXRoQmFzZVRhZyA9IHR5cGVvZiBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYmFzZScpWzBdICE9PSAndW5kZWZpbmVkJztcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNmZy5sb2NhdGlvbkNoYW5nZUFuZ3VsYXJFbWl0dGVyID09PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnLmxvY2F0aW9uQ2hhbmdlQW5ndWxhckVtaXR0ZXIgPSAnYW5ndWxhcicgaW4gd2luZG93O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY2ZnLm1vdmVHcmFkaWVudHNPdXRzaWRlU3ltYm9sID09PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnLm1vdmVHcmFkaWVudHNPdXRzaWRlU3ltYm9sID0gYnJvd3Nlci5pc0ZpcmVmb3g7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnQuZGV0YWlsXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudC5kZXRhaWwub2xkVXJsXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudC5kZXRhaWwubmV3VXJsXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBCcm93c2VyU3ByaXRlLnByb3RvdHlwZS5faGFuZGxlTG9jYXRpb25DaGFuZ2UgPSBmdW5jdGlvbiBfaGFuZGxlTG9jYXRpb25DaGFuZ2UgKGV2ZW50KSB7XG4gICAgdmFyIHJlZiA9IGV2ZW50LmRldGFpbDtcbiAgICB2YXIgb2xkVXJsID0gcmVmLm9sZFVybDtcbiAgICB2YXIgbmV3VXJsID0gcmVmLm5ld1VybDtcbiAgICB0aGlzLnVwZGF0ZVVybHMob2xkVXJsLCBuZXdVcmwpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBBZGQgbmV3IHN5bWJvbC4gSWYgc3ltYm9sIHdpdGggdGhlIHNhbWUgaWQgZXhpc3RzIGl0IHdpbGwgYmUgcmVwbGFjZWQuXG4gICAqIElmIHNwcml0ZSBhbHJlYWR5IG1vdW50ZWQgLSBgc3ltYm9sLm1vdW50KHNwcml0ZS5ub2RlKWAgd2lsbCBiZSBjYWxsZWQuXG4gICAqIEBwYXJhbSB7QnJvd3NlclNwcml0ZVN5bWJvbH0gc3ltYm9sXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IGB0cnVlYCAtIHN5bWJvbCB3YXMgYWRkZWQsIGBmYWxzZWAgLSByZXBsYWNlZFxuICAgKi9cbiAgQnJvd3NlclNwcml0ZS5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gYWRkIChzeW1ib2wpIHtcbiAgICB2YXIgaXNOZXdTeW1ib2wgPSBTcHJpdGUkJDEucHJvdG90eXBlLmFkZC5jYWxsKHRoaXMsIHN5bWJvbCk7XG5cbiAgICBpZiAodGhpcy5pc01vdW50ZWQgJiYgaXNOZXdTeW1ib2wpIHtcbiAgICAgIHN5bWJvbC5tb3VudCh0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBpc05ld1N5bWJvbDtcbiAgfTtcblxuICBCcm93c2VyU3ByaXRlLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gZGVzdHJveSAoKSB7XG4gICAgdmFyIHJlZiA9IHRoaXM7XG4gICAgdmFyIGNvbmZpZyA9IHJlZi5jb25maWc7XG4gICAgdmFyIHN5bWJvbHMgPSByZWYuc3ltYm9scztcbiAgICB2YXIgX2VtaXR0ZXIgPSByZWYuX2VtaXR0ZXI7XG5cbiAgICBzeW1ib2xzLmZvckVhY2goZnVuY3Rpb24gKHMpIHsgcmV0dXJuIHMuZGVzdHJveSgpOyB9KTtcblxuICAgIF9lbWl0dGVyLm9mZignKicpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKGNvbmZpZy5sb2NhdGlvbkNoYW5nZUV2ZW50LCB0aGlzLl9oYW5kbGVMb2NhdGlvbkNoYW5nZSk7XG5cbiAgICBpZiAodGhpcy5pc01vdW50ZWQpIHtcbiAgICAgIHRoaXMudW5tb3VudCgpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtFbGVtZW50fHN0cmluZ30gW3RhcmdldF1cbiAgICogQHBhcmFtIHtib29sZWFufSBbcHJlcGVuZD1mYWxzZV1cbiAgICogQHJldHVybiB7RWxlbWVudH0gcmVuZGVyZWQgc3ByaXRlIG5vZGVcbiAgICogQGZpcmVzIEV2ZW50cyNNT1VOVFxuICAgKi9cbiAgQnJvd3NlclNwcml0ZS5wcm90b3R5cGUubW91bnQgPSBmdW5jdGlvbiBtb3VudCAodGFyZ2V0LCBwcmVwZW5kKSB7XG4gICAgaWYgKCBwcmVwZW5kID09PSB2b2lkIDAgKSBwcmVwZW5kID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5pc01vdW50ZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLm5vZGU7XG4gICAgfVxuXG4gICAgdmFyIG1vdW50VGFyZ2V0ID0gdGFyZ2V0IHx8IHRoaXMuY29uZmlnLm1vdW50VG87XG4gICAgdmFyIHBhcmVudCA9IHR5cGVvZiBtb3VudFRhcmdldCA9PT0gJ3N0cmluZycgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG1vdW50VGFyZ2V0KSA6IG1vdW50VGFyZ2V0O1xuICAgIHZhciBub2RlID0gdGhpcy5yZW5kZXIoKTtcblxuICAgIGlmIChwcmVwZW5kICYmIHBhcmVudC5jaGlsZE5vZGVzWzBdKSB7XG4gICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKG5vZGUsIHBhcmVudC5jaGlsZE5vZGVzWzBdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFyZW50LmFwcGVuZENoaWxkKG5vZGUpO1xuICAgIH1cblxuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5fZW1pdHRlci5lbWl0KEV2ZW50cy5NT1VOVCwgbm9kZSk7XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfTtcblxuICAvKipcbiAgICogQHJldHVybiB7RWxlbWVudH1cbiAgICovXG4gIEJyb3dzZXJTcHJpdGUucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIHBhcnNlKHRoaXMuc3RyaW5naWZ5KCkpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBEZXRhY2ggc3ByaXRlIGZyb20gdGhlIERPTVxuICAgKi9cbiAgQnJvd3NlclNwcml0ZS5wcm90b3R5cGUudW5tb3VudCA9IGZ1bmN0aW9uIHVubW91bnQgKCkge1xuICAgIHRoaXMubm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMubm9kZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBVUkxzIGluIHNwcml0ZSBhbmQgdXNhZ2UgZWxlbWVudHNcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9sZFVybFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmV3VXJsXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IGB0cnVlYCAtIFVSTHMgd2FzIHVwZGF0ZWQsIGBmYWxzZWAgLSBzcHJpdGUgaXMgbm90IG1vdW50ZWRcbiAgICovXG4gIEJyb3dzZXJTcHJpdGUucHJvdG90eXBlLnVwZGF0ZVVybHMgPSBmdW5jdGlvbiB1cGRhdGVVcmxzJDEgKG9sZFVybCwgbmV3VXJsKSB7XG4gICAgaWYgKCF0aGlzLmlzTW91bnRlZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciB1c2FnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuY29uZmlnLnVzYWdlc1RvVXBkYXRlKTtcblxuICAgIHVwZGF0ZVVybHMoXG4gICAgICB0aGlzLm5vZGUsXG4gICAgICB1c2FnZXMsXG4gICAgICAoKGdldFVybFdpdGhvdXRGcmFnbWVudChvbGRVcmwpKSArIFwiI1wiKSxcbiAgICAgICgoZ2V0VXJsV2l0aG91dEZyYWdtZW50KG5ld1VybCkpICsgXCIjXCIpXG4gICAgKTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKCBCcm93c2VyU3ByaXRlLnByb3RvdHlwZSwgcHJvdG90eXBlQWNjZXNzb3JzICk7XG5cbiAgcmV0dXJuIEJyb3dzZXJTcHJpdGU7XG59KFNwcml0ZSkpO1xuXG52YXIgcmVhZHkkMSA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUpIHtcbi8qIVxuICAqIGRvbXJlYWR5IChjKSBEdXN0aW4gRGlheiAyMDE0IC0gTGljZW5zZSBNSVRcbiAgKi9cbiFmdW5jdGlvbiAobmFtZSwgZGVmaW5pdGlvbikge1xuXG4gIHsgbW9kdWxlLmV4cG9ydHMgPSBkZWZpbml0aW9uKCk7IH1cblxufSgnZG9tcmVhZHknLCBmdW5jdGlvbiAoKSB7XG5cbiAgdmFyIGZucyA9IFtdLCBsaXN0ZW5lclxuICAgICwgZG9jID0gZG9jdW1lbnRcbiAgICAsIGhhY2sgPSBkb2MuZG9jdW1lbnRFbGVtZW50LmRvU2Nyb2xsXG4gICAgLCBkb21Db250ZW50TG9hZGVkID0gJ0RPTUNvbnRlbnRMb2FkZWQnXG4gICAgLCBsb2FkZWQgPSAoaGFjayA/IC9ebG9hZGVkfF5jLyA6IC9ebG9hZGVkfF5pfF5jLykudGVzdChkb2MucmVhZHlTdGF0ZSk7XG5cblxuICBpZiAoIWxvYWRlZClcbiAgeyBkb2MuYWRkRXZlbnRMaXN0ZW5lcihkb21Db250ZW50TG9hZGVkLCBsaXN0ZW5lciA9IGZ1bmN0aW9uICgpIHtcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcihkb21Db250ZW50TG9hZGVkLCBsaXN0ZW5lcik7XG4gICAgbG9hZGVkID0gMTtcbiAgICB3aGlsZSAobGlzdGVuZXIgPSBmbnMuc2hpZnQoKSkgeyBsaXN0ZW5lcigpOyB9XG4gIH0pOyB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChmbikge1xuICAgIGxvYWRlZCA/IHNldFRpbWVvdXQoZm4sIDApIDogZm5zLnB1c2goZm4pO1xuICB9XG5cbn0pO1xufSk7XG5cbnZhciBzcHJpdGUgPSBuZXcgQnJvd3NlclNwcml0ZSgpO1xuXG52YXIgbG9hZFNwcml0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHN2ZyA9IHNwcml0ZS5tb3VudChkb2N1bWVudC5ib2R5LCB0cnVlKTtcblxuICAvLyA6V09SS0FST1VORDpcbiAgLy8gSUUgZG9lc24ndCBldmFsdWF0ZSA8c3R5bGU+IHRhZ3MgaW4gU1ZHcyB0aGF0IGFyZSBkeW5hbWljYWxseSBhZGRlZCB0byB0aGUgcGFnZS5cbiAgLy8gVGhpcyB0cmljayB3aWxsIHRyaWdnZXIgSUUgdG8gcmVhZCBhbmQgdXNlIGFueSBleGlzdGluZyBTVkcgPHN0eWxlPiB0YWdzLlxuICAvL1xuICAvLyBSZWZlcmVuY2U6IGh0dHBzOi8vZ2l0aHViLmNvbS9pY29uaWMvU1ZHSW5qZWN0b3IvaXNzdWVzLzIzXG4gIHZhciB1YSA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50IHx8ICcnO1xuICBpZiAodWEuaW5kZXhPZignVHJpZGVudCcpID4gMCB8fCB1YS5pbmRleE9mKCdFZGdlLycpID4gMCkge1xuICAgIHZhciBzdHlsZXMgPSBzdmcucXVlcnlTZWxlY3RvckFsbCgnc3R5bGUnKTtcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IHN0eWxlcy5sZW5ndGg7IGkgPCBsOyBpICs9IDEpIHtcbiAgICAgIHN0eWxlc1tpXS50ZXh0Q29udGVudCArPSAnJztcbiAgICB9XG4gIH1cbn07XG5cbmlmIChkb2N1bWVudC5ib2R5KSB7XG4gIGxvYWRTcHJpdGUoKTtcbn0gZWxzZSB7XG4gIHJlYWR5JDEobG9hZFNwcml0ZSk7XG59XG5cbnJldHVybiBzcHJpdGU7XG5cbn0pKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdmctc3ByaXRlLWxvYWRlci9ydW50aW1lL2Jyb3dzZXItc3ByaXRlLmJ1aWxkLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnO1xyXG5cclxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcclxuZyA9IChmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gdGhpcztcclxufSkoKTtcclxuXHJcbnRyeSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXHJcblx0ZyA9IGcgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpIHx8ICgxLGV2YWwpKFwidGhpc1wiKTtcclxufSBjYXRjaChlKSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcclxuXHRpZih0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKVxyXG5cdFx0ZyA9IHdpbmRvdztcclxufVxyXG5cclxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxyXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xyXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGc7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuL3N2ZycpXHJcbmltcG9ydCAnLi4vc3R5bGUvc3R5bGUuc3R5bCc7XHJcbmltcG9ydCBhdXRvQ29tcGxldGUgZnJvbScuL21vZHVsZXMvYXV0b2NvbXBsZXRlJztcclxuaW1wb3J0IHR5cGUgZnJvbSAnLi9tb2R1bGVzL3R5cGUnXHJcblxyXG5jb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRyZXNzJyk7XHJcbmNvbnN0IGxuZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsbmcnKTtcclxuY29uc3QgbGF0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xhdCcpO1xyXG5jb25zdCBzZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoJyk7XHJcblxyXG5cclxuYXV0b0NvbXBsZXRlKGlucHV0LCBsYXQsIGxuZyk7XHJcblxyXG50eXBlKHNlYXJjaClcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcHVibGljL2pzL2FwcC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvc3R5bGUvc3R5bGUuc3R5bFxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgYWRkSWNvbiBmcm9tICcuLi9pbWFnZXMvaWNvbnMvYWRkLnN2Zyc7XHJcbmltcG9ydCBjb2dJY29uIGZyb20gJy4uL2ltYWdlcy9pY29ucy9jb2cuc3ZnJztcclxuaW1wb3J0IGhlYXJ0SWNvbiBmcm9tICcuLi9pbWFnZXMvaWNvbnMvaGVhcnQuc3ZnJztcclxuaW1wb3J0IGxvZ29JY29uIGZyb20gJy4uL2ltYWdlcy9pY29ucy9sb2dvLnN2Zyc7XHJcbmltcG9ydCBsb2dvdXRJY29uIGZyb20gJy4uL2ltYWdlcy9pY29ucy9sb2dvdXQuc3ZnJztcclxuaW1wb3J0IG1hcEljb24gZnJvbSAnLi4vaW1hZ2VzL2ljb25zL21hcC5zdmcnO1xyXG5pbXBvcnQgcGVuY2lsSWNvbiBmcm9tICcuLi9pbWFnZXMvaWNvbnMvcGVuY2lsLnN2Zyc7XHJcbmltcG9ydCByZXZpZXdJY29uIGZyb20gJy4uL2ltYWdlcy9pY29ucy9yZXZpZXcuc3ZnJztcclxuaW1wb3J0IHN0b3JlSWNvbiBmcm9tICcuLi9pbWFnZXMvaWNvbnMvc3RvcmUuc3ZnJztcclxuaW1wb3J0IHN0b3JlMkljb24gZnJvbSAnLi4vaW1hZ2VzL2ljb25zL3N0b3JlMi5zdmcnO1xyXG5pbXBvcnQgdGFnSWNvbiBmcm9tICcuLi9pbWFnZXMvaWNvbnMvdGFnLnN2Zyc7XHJcbmltcG9ydCB0b3BJY29uIGZyb20gJy4uL2ltYWdlcy9pY29ucy90b3Auc3ZnJztcclxuXHJcblxyXG5cclxuXHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcHVibGljL2pzL3N2Zy5qcyIsImltcG9ydCBTcHJpdGVTeW1ib2wgZnJvbSBcInN2Zy1iYWtlci1ydW50aW1lL2Jyb3dzZXItc3ltYm9sXCI7XG5pbXBvcnQgc3ByaXRlIGZyb20gXCJzdmctc3ByaXRlLWxvYWRlci9ydW50aW1lL2Jyb3dzZXItc3ByaXRlLmJ1aWxkXCI7XG52YXIgc3ltYm9sID0gbmV3IFNwcml0ZVN5bWJvbCh7XG4gIFwiaWRcIjogXCJhZGRcIixcbiAgXCJ1c2VcIjogXCJhZGQtdXNhZ2VcIixcbiAgXCJ2aWV3Qm94XCI6IFwiMCAwIDEwMCAxMDBcIixcbiAgXCJjb250ZW50XCI6IFwiPHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgMTAwIDEwMFxcXCIgaWQ9XFxcImFkZFxcXCI+PGcgdHJhbnNmb3JtPVxcXCJ0cmFuc2xhdGUoMCwtOTUyLjM2MjE4KVxcXCI+PHBhdGggZD1cXFwiTSAxMC44MTI1IDEwIEEgMS4wMDAwOTk5IDEuMDAwMDk5OSAwIDAgMCAxMCAxMSBMIDEwIDg5IEEgMS4wMDAwOTk5IDEuMDAwMDk5OSAwIDAgMCAxMSA5MCBMIDg5IDkwIEEgMS4wMDAwOTk5IDEuMDAwMDk5OSAwIDAgMCA5MCA4OSBMIDkwIDExIEEgMS4wMDAwOTk5IDEuMDAwMDk5OSAwIDAgMCA4OSAxMCBMIDExIDEwIEEgMS4wMDAwOTk5IDEuMDAwMDk5OSAwIDAgMCAxMC44MTI1IDEwIHogTSAxMiAxMiBMIDg4IDEyIEwgODggODggTCAxMiA4OCBMIDEyIDEyIHogTSA0OS44NzUgMjYuOTY4NzUgQSAxLjAwMDA5OTkgMS4wMDAwOTk5IDAgMCAwIDQ5IDI4IEwgNDkgNDkgTCAyOCA0OSBBIDEuMDAwMDk5OSAxLjAwMDA5OTkgMCAwIDAgMjcuODEyNSA0OSBBIDEuMDA0Mzg0OSAxLjAwNDM4NDkgMCAwIDAgMjggNTEgTCA0OSA1MSBMIDQ5IDcyIEEgMS4wMDAwOTk5IDEuMDAwMDk5OSAwIDEgMCA1MSA3MiBMIDUxIDUxIEwgNzIgNTEgQSAxLjAwMDA5OTkgMS4wMDAwOTk5IDAgMSAwIDcyIDQ5IEwgNTEgNDkgTCA1MSAyOCBBIDEuMDAwMDk5OSAxLjAwMDA5OTkgMCAwIDAgNDkuODc1IDI2Ljk2ODc1IHogXFxcIiB0cmFuc2Zvcm09XFxcInRyYW5zbGF0ZSgwLDk1Mi4zNjIxOClcXFwiIC8+PC9nPjwvc3ltYm9sPlwiXG59KTtcbnZhciByZXN1bHQgPSBzcHJpdGUuYWRkKHN5bWJvbCk7XG5leHBvcnQgZGVmYXVsdCBzeW1ib2xcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9pbWFnZXMvaWNvbnMvYWRkLnN2Z1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgU3ByaXRlU3ltYm9sIGZyb20gXCJzdmctYmFrZXItcnVudGltZS9icm93c2VyLXN5bWJvbFwiO1xuaW1wb3J0IHNwcml0ZSBmcm9tIFwic3ZnLXNwcml0ZS1sb2FkZXIvcnVudGltZS9icm93c2VyLXNwcml0ZS5idWlsZFwiO1xudmFyIHN5bWJvbCA9IG5ldyBTcHJpdGVTeW1ib2woe1xuICBcImlkXCI6IFwiY29nXCIsXG4gIFwidXNlXCI6IFwiY29nLXVzYWdlXCIsXG4gIFwidmlld0JveFwiOiBcIjAgMCAxMDAgMTAwXCIsXG4gIFwiY29udGVudFwiOiBcIjxzeW1ib2wgdmlld0JveD1cXFwiMCAwIDEwMCAxMDBcXFwiIGlkPVxcXCJjb2dcXFwiPjxwYXRoIGQ9XFxcIk04OC45LDU4LjhjLTIuNC0yLjMtMy43LTUuNS0zLjctOC44YzAtMy4zLDEuMy02LjQsMy43LTguOGMwLjQtMC40LDAuOC0wLjcsMS4zLTEuMWMwLjctMC41LDAuOS0xLjQsMC43LTIuMiAgYy0wLjgtMi45LTItNS43LTMuNC04LjNjLTAuNC0wLjctMS4yLTEuMS0yLTFjLTAuNywwLjEtMS4yLDAuMS0xLjcsMC4xYy02LjksMC0xMi41LTUuNi0xMi41LTEyLjRjMC0wLjUsMC0xLjEsMC4xLTEuNyAgYzAuMS0wLjgtMC4zLTEuNi0xLTJjLTIuNi0xLjQtNS40LTIuNi04LjMtMy40Yy0wLjgtMC4yLTEuNywwLjEtMi4yLDAuN2MtMC40LDAuNS0wLjgsMS0xLjEsMS4zYy0yLjQsMi4zLTUuNSwzLjYtOC44LDMuNiAgcy02LjUtMS4zLTguOC0zLjZjLTAuNC0wLjQtMC43LTAuOC0xLjEtMS4zYy0wLjUtMC43LTEuNC0wLjktMi4yLTAuN2MtMi45LDAuOS01LjcsMi04LjMsMy40Yy0wLjcsMC40LTEuMSwxLjItMSwyICBjMC4xLDAuNywwLjEsMS4yLDAuMSwxLjdjMCw2LjktNS42LDEyLjQtMTIuNSwxMi40Yy0wLjUsMC0xLjEsMC0xLjctMC4xYy0wLjgtMC4xLTEuNiwwLjMtMiwxYy0xLjQsMi42LTIuNiw1LjQtMy40LDguMyAgYy0wLjIsMC44LDAsMS43LDAuNywyLjJjMC42LDAuNCwxLDAuOCwxLjMsMS4xYzQuOSw0LjgsNC45LDEyLjcsMCwxNy42Yy0wLjQsMC40LTAuOCwwLjctMS4zLDEuMWMtMC43LDAuNS0wLjksMS40LTAuNywyLjIgIGMwLjksMi45LDIsNS43LDMuNCw4LjNjMC40LDAuNywxLjIsMS4xLDIsMWMwLjctMC4xLDEuMi0wLjEsMS43LTAuMWM2LjksMCwxMi41LDUuNiwxMi41LDEyLjRjMCwwLjUsMCwxLjEtMC4xLDEuNyAgYy0wLjEsMC44LDAuMywxLjYsMSwyYzIuNiwxLjQsNS40LDIuNiw4LjMsMy40YzAuOCwwLjIsMS43LDAsMi4yLTAuN2MwLjQtMC41LDAuOC0xLDEuMS0xLjNjMi40LTIuMyw1LjUtMy42LDguOC0zLjYgIHM2LjUsMS4zLDguOCwzLjZjMC40LDAuNCwwLjcsMC44LDEuMSwxLjNjMC40LDAuNSwxLDAuOCwxLjYsMC44YzAuMiwwLDAuNCwwLDAuNi0wLjFjMi45LTAuOSw1LjctMiw4LjMtMy40YzAuNy0wLjQsMS4xLTEuMiwxLTIgIGMtMC4xLTAuNy0wLjEtMS4yLTAuMS0xLjdjMC02LjksNS42LTEyLjQsMTIuNS0xMi40YzAuNSwwLDEuMSwwLDEuNywwLjFjMC44LDAuMSwxLjYtMC4zLDItMWMxLjQtMi42LDIuNi01LjQsMy40LTguMyAgYzAuMi0wLjgsMC0xLjctMC43LTIuMkM4OS43LDU5LjUsODkuMiw1OS4yLDg4LjksNTguOHogTTg0LjYsNjcuM2MtMC4zLDAtMC42LDAtMC45LDBjLTkuMSwwLTE2LjUsNy40LTE2LjUsMTYuNGMwLDAuMywwLDAuNiwwLDAuOSAgYy0xLjYsMC44LTMuMywxLjUtNS4xLDIuMWMtMC4yLTAuMi0wLjQtMC40LTAuNi0wLjZjLTMuMS0zLjEtNy4yLTQuOC0xMS42LTQuOHMtOC41LDEuNy0xMS42LDQuOGMtMC4yLDAuMi0wLjQsMC40LTAuNiwwLjYgIGMtMS43LTAuNi0zLjQtMS4zLTUuMS0yLjFjMC0wLjMsMC0wLjYsMC0wLjljMC05LjEtNy40LTE2LjQtMTYuNS0xNi40Yy0wLjMsMC0wLjYsMC0wLjksMGMtMC44LTEuNi0xLjUtMy4zLTIuMS01LjEgIGMwLjItMC4yLDAuNC0wLjQsMC42LTAuNmM2LjQtNi40LDYuNC0xNi44LDAtMjMuM2MtMC4yLTAuMi0wLjQtMC40LTAuNi0wLjZjMC42LTEuNywxLjMtMy40LDIuMS01LjFjMC4zLDAsMC42LDAsMC45LDAgIGM5LjEsMCwxNi41LTcuNCwxNi41LTE2LjRjMC0wLjMsMC0wLjYsMC0wLjljMS42LTAuOCwzLjMtMS41LDUuMS0yLjFjMC4yLDAuMiwwLjQsMC40LDAuNiwwLjZjMy4xLDMuMSw3LjIsNC44LDExLjYsNC44ICBzOC41LTEuNywxMS42LTQuOGMwLjItMC4yLDAuNC0wLjQsMC42LTAuNmMxLjcsMC42LDMuNCwxLjMsNS4xLDIuMWMwLDAuMywwLDAuNiwwLDAuOWMwLDkuMSw3LjQsMTYuNCwxNi41LDE2LjRjMC4zLDAsMC42LDAsMC45LDAgIGMwLjgsMS42LDEuNSwzLjMsMi4xLDUuMWMtMC4yLDAuMi0wLjQsMC40LTAuNiwwLjZjLTMuMSwzLjEtNC44LDcuMi00LjgsMTEuNnMxLjcsOC41LDQuOCwxMS42YzAuMiwwLjIsMC40LDAuNCwwLjYsMC42ICBDODYuMSw2NCw4NS40LDY1LjcsODQuNiw2Ny4zeiBNNTAsMjYuMmMtMTMuMSwwLTIzLjgsMTAuNy0yMy44LDIzLjhTMzYuOSw3My44LDUwLDczLjhTNzMuOCw2My4xLDczLjgsNTBTNjMuMSwyNi4yLDUwLDI2LjJ6ICAgTTUwLDY5LjhjLTEwLjksMC0xOS44LTguOS0xOS44LTE5LjhjMC0xMC45LDguOS0xOS44LDE5LjgtMTkuOFM2OS44LDM5LjEsNjkuOCw1MEM2OS44LDYwLjksNjAuOSw2OS44LDUwLDY5Ljh6XFxcIiAvPjwvc3ltYm9sPlwiXG59KTtcbnZhciByZXN1bHQgPSBzcHJpdGUuYWRkKHN5bWJvbCk7XG5leHBvcnQgZGVmYXVsdCBzeW1ib2xcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9pbWFnZXMvaWNvbnMvY29nLnN2Z1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgU3ByaXRlU3ltYm9sIGZyb20gXCJzdmctYmFrZXItcnVudGltZS9icm93c2VyLXN5bWJvbFwiO1xuaW1wb3J0IHNwcml0ZSBmcm9tIFwic3ZnLXNwcml0ZS1sb2FkZXIvcnVudGltZS9icm93c2VyLXNwcml0ZS5idWlsZFwiO1xudmFyIHN5bWJvbCA9IG5ldyBTcHJpdGVTeW1ib2woe1xuICBcImlkXCI6IFwiaGVhcnRcIixcbiAgXCJ1c2VcIjogXCJoZWFydC11c2FnZVwiLFxuICBcInZpZXdCb3hcIjogXCIwIDAgMTAwIDkwXCIsXG4gIFwiY29udGVudFwiOiBcIjxzeW1ib2wgY2xhc3M9XFxcImljb24gaWNvbi1oZWFydFxcXCIgdmlld0JveD1cXFwiMCAwIDEwMCA5MFxcXCIgaWQ9XFxcImhlYXJ0XFxcIj48cGF0aCBzdHlsZT1cXFwidGV4dC1pbmRlbnQ6MDt0ZXh0LXRyYW5zZm9ybTpub25lO2Jsb2NrLXByb2dyZXNzaW9uOnRiXFxcIiBkPVxcXCJNMjguMjE2NiAxMS4wMDRjLTYuMTg1NCAwLTEyLjM2ODIgMi4zNDItMTcuMDkzOCA3LTkuNDUxMiA5LjMxNi05LjQzOTYgMjQuNDkgMCAzMy44MTI1bDM2Ljc1IDM2LjMxMjZhMy4wMDAzIDMuMDAwMyAwIDAgMCA0LjIxODggMEM2NC4zNTYzIDc2LjA0IDc2LjYwOCA2My45Njg1IDg4Ljg3MjggNTEuODc5YzkuNDUxMi05LjMxNTggOS40NTEyLTI0LjUyNzggMC0zMy44NDM3LTkuNDUxMi05LjMxNTgtMjQuNzM2Mi05LjMxNi0zNC4xODc1IDBMNTAuMDI5IDIyLjYyOWwtNC43MTg3LTQuNjI1Yy00LjcyNTYtNC42NTgtMTAuOTA4NC03LTE3LjA5MzctN3ptMCA1Ljk2ODhjNC42NTI2IDAgOS4yOTYgMS43ODQ3IDEyLjg3NSA1LjMxMjVsNi44MTI0IDYuNjg3NWEzLjAwMDMgMy4wMDAzIDAgMCAwIDQuMjE4OCAwbDYuNzgxMi02LjY1NjNjNy4xNTgyLTcuMDU1NyAxOC41OTItNy4wNTU1IDI1Ljc1IDAgNy4xNTggNy4wNTU2IDcuMTU4IDE4LjIyNTggMCAyNS4yODEzLTExLjU1NjIgMTEuMzkxLTIzLjEgMjIuNzY1NS0zNC42NTYyIDM0LjE1NjNMMTUuMzQxNiA0Ny41NjY2Yy03LjE1MzYtNy4wNjQ3LTcuMTU4LTE4LjIyNTcgMC0yNS4yODEyIDMuNTc5LTMuNTI3OCA4LjIyMjMtNS4zMTI1IDEyLjg3NS01LjMxMjV6XFxcIiBvdmVyZmxvdz1cXFwidmlzaWJsZVxcXCIgY29sb3I9XFxcIiMwMDBcXFwiIC8+PC9zeW1ib2w+XCJcbn0pO1xudmFyIHJlc3VsdCA9IHNwcml0ZS5hZGQoc3ltYm9sKTtcbmV4cG9ydCBkZWZhdWx0IHN5bWJvbFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2ltYWdlcy9pY29ucy9oZWFydC5zdmdcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFNwcml0ZVN5bWJvbCBmcm9tIFwic3ZnLWJha2VyLXJ1bnRpbWUvYnJvd3Nlci1zeW1ib2xcIjtcbmltcG9ydCBzcHJpdGUgZnJvbSBcInN2Zy1zcHJpdGUtbG9hZGVyL3J1bnRpbWUvYnJvd3Nlci1zcHJpdGUuYnVpbGRcIjtcbnZhciBzeW1ib2wgPSBuZXcgU3ByaXRlU3ltYm9sKHtcbiAgXCJpZFwiOiBcImxvZ29cIixcbiAgXCJ1c2VcIjogXCJsb2dvLXVzYWdlXCIsXG4gIFwidmlld0JveFwiOiBcIjAgMCA2MDYgMjM5XCIsXG4gIFwiY29udGVudFwiOiBcIjxzeW1ib2wgdmlld0JveD1cXFwiMCAwIDYwNiAyMzlcXFwiIGlkPVxcXCJsb2dvXFxcIj48ZGVmcz48ZmlsdGVyIHg9XFxcIi01MCVcXFwiIHk9XFxcIi01MCVcXFwiIHdpZHRoPVxcXCIyMDAlXFxcIiBoZWlnaHQ9XFxcIjIwMCVcXFwiIGZpbHRlclVuaXRzPVxcXCJvYmplY3RCb3VuZGluZ0JveFxcXCIgaWQ9XFxcImxvZ29fYVxcXCI+PGZlT2Zmc2V0IGR4PVxcXCIxXFxcIiBkeT1cXFwiMVxcXCIgaW49XFxcIlNvdXJjZUFscGhhXFxcIiByZXN1bHQ9XFxcInNoYWRvd09mZnNldE91dGVyMVxcXCI+PC9mZU9mZnNldD48ZmVDb2xvck1hdHJpeCB2YWx1ZXM9XFxcIjAgMCAwIDAgMSAwIDAgMCAwIDEgMCAwIDAgMCAxIDAgMCAwIDAuMzIzMDAxNTg1IDBcXFwiIGluPVxcXCJzaGFkb3dPZmZzZXRPdXRlcjFcXFwiIHJlc3VsdD1cXFwic2hhZG93TWF0cml4T3V0ZXIxXFxcIj48L2ZlQ29sb3JNYXRyaXg+PGZlTWVyZ2U+PGZlTWVyZ2VOb2RlIGluPVxcXCJzaGFkb3dNYXRyaXhPdXRlcjFcXFwiPjwvZmVNZXJnZU5vZGU+PGZlTWVyZ2VOb2RlIGluPVxcXCJTb3VyY2VHcmFwaGljXFxcIj48L2ZlTWVyZ2VOb2RlPjwvZmVNZXJnZT48L2ZpbHRlcj48L2RlZnM+PGcgZmlsdGVyPVxcXCJ1cmwoI2xvZ29fYSlcXFwiIGZpbGw9XFxcIiNGRkZcXFwiIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCI+PHBhdGggZD1cXFwiTTI5Mi41OTUgNDAuMTI4YzQuMzY4IDAgMTAuMDgtLjU2IDE2LjM1Mi0xLjM0NC0xLjc5MiA2Ljk0NC01LjM3NiAxNy4wMjQtOC41MTIgMjUuNTM2LTguMTc2IDIyLjUxMi0xMi4yMDggMzQuMzg0LTE0LjY3MiA0My42OCAzLjM2IDUuNDg4IDcuMzkyIDguNjI0IDEyLjU0NCA5LjQwOCAyLjAxNi0xMi42NTYgNS4yNjQtMjUuNTM2IDExLjc2LTQ1LjM2IDMuMzYtMTAuMTkyIDkuNDA4LTI2LjU0NCAxMy42NjQtMzUuMDU2IDQuOTI4LS41NiA5Ljg1Ni0uODk2IDE0LjU2LS44OTYgMi42ODggMCA2LjgzMi4yMjQgMTAuNjQuNTYtMS4yMzItNi44MzItMy4yNDgtMTEuMzEyLTguNzM2LTExLjMxMi0zLjkyIDAtMjkuNTY4IDMuMTM2LTQ0LjkxMiAzLjEzNi01LjA0IDAtOS4wNzItLjMzNi0xMC45NzYtMS4yMzItLjU2IDEuMTItMS4wMDggMy4xMzYtMS4wMDggNC4yNTYgMCA0LjgxNiAzLjM2IDguNjI0IDkuMjk2IDguNjI0em0zOS4yODYyIDY1Ljk2OGMuMTEyIDIuMzUyIDIuNDY0IDcuMjggMy40NzIgNy4yOC41NiAwIDEuNjgtMS4xMiAyLjEyOC0yLjEyOCA2LjcyLTE1Ljc5MiAxOC41OTItMzIuMTQ0IDI5LjIzMi00MC4wOTYgMS41NjgtMS4yMzIgMy45Mi0yLjY4OCA0LjM2OC0yLjY4OC4xMTIgMCAuNDQ4LjMzNi40NDguNDQ4LTcuMjggMTQuNjcyLTEyLjY1NiAyOC43ODQtMTIuNjU2IDMzLjE1MiAwIDMuNDcyIDMuMDI0IDcuMDU2IDYuMDQ4IDcuMDU2IDIuMzUyIDAgMTAuODY0LTQuMDMyIDEwLjg2NC01LjE1MiAwLS4zMzYtLjExMi0uNjcyLS43ODQtMS43OTItLjMzNiAwLTEuNjguODk2LTMuOTIuODk2LTEuNDU2IDAtMS43OTItLjQ0OC0xLjc5Mi0xLjkwNCAwLTYuMDQ4IDExLjc2LTI2Ljg4IDIwLjk0NC0zNi45Ni0zLjM2LTQuMjU2LTguMjg4LTcuMDU2LTEyLjIwOC03LjA1Ni02LjgzMiAwLTE3LjY5NiA5LjI5Ni0zMS45MiAyNy40NCAyLjY4OC0xMC43NTIgNi4xNi0xOS4wNCAxMS44NzItMzAuMjQgNS4yNjQtMTAuMzA0IDE0LjU2LTIyLjUxMiAyNS43Ni0zMy45MzYtMi41NzYtMi44LTkuNDA4LTUuMzc2LTE0LjExMi01LjM3Ni0xMC4xOTIgMTEuNjQ4LTIwLjM4NCAyOC43ODQtMjYuNDMyIDQ0LjU3Ni02LjgzMiAxNy41ODQtMTEuMzEyIDM1Ljk1Mi0xMS4zMTIgNDYuNDh6bTk0LjUwMjItNDMuMzQ0Yy0zLjI0OCA2LjcyLTcuNzI4IDE1LjEyLTEwLjg2NCAyMC4zODQtOC4wNjQgMTMuNDQtMTMuNDQgMTkuNzEyLTE3LjgwOCAyMC42MDgtMS4wMDgtLjMzNi0xLjU2OC0xLjEyLTEuNTY4LTIuNjg4IDAtMTMuNzc2IDE0LjY3Mi0zMy42IDI2LjY1Ni0zNS41MDQtLjMzNi0yLjgtNS4zNzYtOC4wNjQtOC40LTguODQ4LTEyLjA5Ni42NzItMjguMjI0IDIzLjUyLTI4LjIyNCA0MC4yMDggMCA3LjcyOCAzLjgwOCAxMy4zMjggOS4yOTYgMTMuNTUyIDYuOTQ0LTEuMTIgMTYuOC0xMi4zMiAyMi44NDgtMjUuOTg0LTIuOCA3LjI4LTQuMjU2IDEzLjMyOC00LjI1NiAxNy40NzIgMCA1LjYgMi4wMTYgOC4yODggNi4wNDggOC4yODggMi4yNCAwIDUuNDg4LS44OTYgNy4yOC0yLjAxNi0yLjAxNi0xLjEyLTIuOTEyLTQuMDMyLTIuOTEyLTguMTc2IDAtNy42MTYgNC4xNDQtMjAuODMyIDEwLjE5Mi0zMy4zNzYuMTEyLTEuNDU2LTUuMTUyLTMuOTItOC4yODgtMy45MnptMjIuOTM0IDIuMzUyYy01LjcxMiAxMy43NzYtOS44NTYgMjguODk2LTkuODU2IDM2LjE3NiAwIDUuMjY0IDguNTEyIDExLjY0OCAxNS45MDQgMTEuODcyIDIuNDY0LS4yMjQgMTAuNTI4LTUuNiAxMi4yMDgtOC4xNzYtLjExMi0uNDQ4LS40NDgtMS4xMi0uNzg0LTEuNjgtMy4xMzYgMi40NjQtNy4yOCA0LjI1Ni0xMS43NiA0LjgxNi0yLjM1Mi0uMzM2LTMuNjk2LTIuMTI4LTMuNjk2LTUuNDg4IDAtOS4xODQgNC40OC0yMy43NDQgMTEuODcyLTM4LjA4IDUuMTUyLS4xMTIgOS43NDQtLjg5NiAxMy4zMjgtMi4yNCAwLTEuMjMyLS41Ni0yLjQ2NC0xLjIzMi0zLjEzNi0zLjEzNi4zMzYtNi4yNzIuNDQ4LTkuMTg0LjQ0OCAzLjY5Ni02LjI3MiA2LjQ5Ni0xMC42NCAxMC45NzYtMTYuMjQtMS40NTYtMS42OC04LjYyNC00LjAzMi0xMS42NDgtNC4wMzItMi40NjQgMS4zNDQtOC45NiAxMC45NzYtMTMuNDQgMTkuODI0LTMuMDI0LS4xMTItNi42MDgtLjQ0OC0xMC41MjgtLjY3MiAwIDIuMDE2Ljc4NCA1LjcxMiAxLjQ1NiA2LjYwOGg2LjM4NHptNDAuODU0My0xMy44ODhjOC42MjQtNS42IDEzLjc3Ni0xNi4wMTYgMTYuMjQtMjkuNDU2LTEuOTA0LTMuNjk2LTguNjI0LTYuNjA4LTE1LjY4LTcuMDU2IDEuMDA4IDQuMjU2IDEuMzQ0IDguMTc2IDEuMzQ0IDExLjg3MiAwIDguMjg4LTEuOTA0IDE1LjIzMi0zLjY5NiAyMC4zODQgMCAxLjU2OC44OTYgMy40NzIgMS43OTIgNC4yNTZ6bTM5LjczNCAxMi4yMDhjLS44OTYtMy40NzItOS41Mi0xMi4yMDgtMTIuODgtMTMuMTA0LTcuODQgMS42OC0xNC43ODQgMTAuMzA0LTE0Ljc4NCAxOC4yNTYgMCA2LjI3MiAzLjQ3MiAxMi43NjggMy40NzIgMjAuMzg0LTEyLjk5Mi44OTYtMjMuMDcyIDEwLjUyOC0yMy4wNzIgMjEuOTUyIDEuMjMyIDQuMTQ0IDYuMzg0IDguNCAxMC42NCA4LjczNiAxMS45ODQtMS4yMzIgMTkuMjY0LTkuMjk2IDE5LjI2NC0yMS43MjggMC0xLjc5Mi0uMTEyLTIuOTEyLS4xMTItNC4wMzIgMC0xLjY4LjU2LTEuOTA0IDcuNTA0LTMuNDcyLjIyNC0uMjI0LjQ0OC0uODk2LjQ0OC0xLjQ1NiAwLS41NiAwLS42NzItLjExMi0uODk2LTIuMzUyIDAtNC43MDQuMTEyLTcuODQuMjI0LS4xMTItLjIyNC0uMTEyLS40NDgtLjExMi0xLjM0NCAwLTE0LjMzNiAzLjI0OC0yMi4wNjQgOS4xODQtMjIuMDY0IDEuNTY4IDAgMi42ODggMS41NjggMi42ODggMy42OTYgMCAxLjc5Mi0xLjc5MiA1LjE1Mi0xLjc5MiA2LjA0OC4xMTIgMS4wMDguNTYgMS41NjggMS40NTYgMS42OCAyLjM1MiAwIDUuNzEyLTcuMTY4IDYuMDQ4LTEyLjg4em0tMzYuOTYgNTEuMDcyYy0xLjQ1Ni0xLjAwOC0yLjI0LTIuMzUyLTIuMjQtNC4wMzIgMC01LjE1MiA5LjYzMi0xNC44OTYgMTUuNDU2LTE1LjY4IDAgNy43MjgtNi4wNDggMTYuOC0xMy4yMTYgMTkuNzEyek03Ni42NDU1IDkxLjUxMmMtLjIyNC0uODk2LS4zMzYtMS45MDQtLjMzNi01LjA0IDAtMTcuODA4IDExLjg3Mi01OC4zNTIgMjAuMzg0LTcxLjkwNC44OTYgMjUuODcyIDMuMDI0IDQ2LjkyOCA5LjE4NCA3MS45MDQgMS41NjggMy4xMzYgNy41MDQgNC45MjggMTQuMzM2IDQuOTI4LjQ0OCAwIDEuMDA4IDAgMS40NTYtLjExMi0uMTEyLS4xMTItLjExMi0uMjI0LS4xMTItLjMzNi4zMzYtMTcuOTIgMTQuODk2LTc2LjI3MiAyOS4xMi04Mi4wOTYtMS42OC0zLjI0OC02LjQ5Ni02LjgzMi05Ljc0NC03LjM5Mi01LjYuNjcyLTE2LjkxMiAzNy41Mi0yNC4wOCA3My40NzItNC41OTItMTYuMTI4LTUuMzc2LTMxLjQ3Mi01LjM3Ni00Ny43MTIgMC04LjE3Ni41Ni0xNi4xMjggMS4yMzItMTkuNzEyLS42NzItMi4wMTYtMTMuMzI4LTYuOTQ0LTE3LjQ3Mi02Ljk0NGwuNzg0IDQuNzA0Yy05Ljg1NiAxNC0zMC4yNCA2NC4yODgtMzAuMjQgNzcuODQgMCA0LjAzMiAyLjM1MiA1LjgyNCAxMC44NjQgOC40em03NC4yMzAyLTQuNTkyYzE3LjkyLTMuODA4IDMwLjgtMTkuODI0IDMwLjgtMzguNTI4IDAtNy4xNjgtMS45MDQtMTAuNTI4LTUuOTM2LTEwLjUyOC0uNjcyIDAtMS4zNDQuMTEyLTIuMDE2LjExMi0yLjI0LTMuOTItNC43MDQtNi43Mi03LjA1Ni03Ljk1Mi0zLjQ3MiAwLTcuNTA0IDEuNTY4LTExLjUzNiA0LjU5Mi0xMC41MjggNy43MjgtMTguMjU2IDIyLjE3Ni0xOC4yNTYgMzQuMTYgMCAxMC4wOCA1LjQ4OCAxNy4yNDggMTQgMTguMTQ0em01LjcxMi0zNS4yOGMzLjY5Ni00LjgxNiA4Ljk2LTkuNjMyIDE1LjQ1Ni0xMS41MzYgMS4wMDggMS41NjggMS40NTYgMy42OTYgMS40NTYgNy41MDQgMCAxNy40NzItOS43NDQgMzEuODA4LTIzLjA3MiAzNC43Mi0xLjQ1Ni0uNDQ4LTIuOTEyLTQuMzY4LTIuOTEyLTcuOTUyIDAtNS45MzYgMy45Mi0xNS45MDQgOS4wNzItMjIuNzM2em0yOS4zMTggMjYuNzY4YzAgNC4zNjggMS45MDQgNy4zOTIgNi42MDggOC44NDggNC43MDQtNi4zODQgNi44MzItMTAuMzA0IDEyLjU0NC0xNy45MiAyLjgtMy41ODQgOC43MzYtMTAuOTc2IDExLjA4OC0xMi4wOTYtLjIyNCAyLjQ2NC0uNjcyIDQuMzY4LTIuMzUyIDEwLjk3Ni0uODk2IDMuNTg0LTEuMjMyIDYuMzg0LTEuMjMyIDEwLjc1MiAwIDQuMTQ0IDIuNDY0IDcuMTY4IDUuOTM2IDcuMTY4IDMuMTM2IDAgMTEuNjQ4LTkuMjk2IDE3LjI0OC0xNS4zNDQgMTMuNzc2LTE0Ljc4NCAyMC4wNDgtMjMuNjMyIDIxLjUwNC00MC4yMDgtLjQ0OC0uMzM2LTEuMzQ0LS41Ni0yLjQ2NC0uNTYtMi41NzYgMC02LjI3Mi44OTYtNy4xNjggMi4xMjgtMi44IDE0LjY3Mi00LjE0NCAyMC4xNi05Ljg1NiAyOC44OTYtNC41OTIgNy4wNTYtMTIuMjA4IDE1Ljc5Mi0xMy41NTIgMTYuMzUyIDIuMDE2LTEwLjc1MiA1LjM3Ni0zMy44MjQgMTAuMTkyLTM5Ljk4NC0uMzM2LTEuNzkyLTQuNzA0LTIuNDY0LTcuNjE2LTIuNDY0LS43ODQgMC0xLjQ1NiAwLTEuOTA0LjExMi0yLjkxMiAyLjkxMi0zLjkyIDYuOTQ0LTQuODE2IDkuNjMyLTEuMjMyIDMuNDcyLTIuMTI4IDUuODI0LTYuODMyIDEwLjE5Mi0zLjM2IDMuMTM2LTcuOTUyIDguNzM2LTEyLjg4IDE1LjIzMiAxLjY4LTExLjA4OCAyLjY4OC0yNi4zMiAxMS40MjQtMzMuMzc2LS41Ni0xLjY4LTQuNDgtMi44LTcuNzI4LTIuOC02LjA0OCAwLTEwLjMwNCA0LjAzMi0xMi4yMDggMTAuOTc2LTIuOTEyIDEwLjUyOC01LjkzNiAyNy41NTItNS45MzYgMzMuNDg4elxcXCIgLz48cGF0aCBkPVxcXCJNMi41NTIgMjExLjQ3MmM2LjM5NiAxMy42MTIgMTkuNTE2IDIwLjk5MiAzNy4zOTIgMjAuOTkyIDM5LjAzMiAwIDczLjE0NC0zOC4yMTIgNzMuMTQ0LTgwLjg1MiAwLTMxLjMyNC0yNC43NjQtNTIuNjQ0LTU5LjY5Ni01Mi42NDQtMjcuNzE2IDAtNDguNTQ0IDEzLjQ0OC01Mi44MDggMzMuNjIgMS4zMTIgNi43MjQgNi4wNjggMTEuNDggMTAuOTg4IDEzLjEyIDUuMDg0LTE3LjM4NCAxNS4yNTItMjkuMTkyIDI4Ljg2NC0zNC43NjgtNC41OTIgMTUuNDE2LTI4LjIwOCA3OC41NTYtMzcuODg0IDEwMC41MzJ6bTU3Ljg5Mi0xMDQuMzA0YzIzLjc4IDAgMzguODY4IDEzLjEyIDM4Ljg2OCAzNS41ODggMCA0MC4zNDQtMjkuNjg0IDc1LjQ0LTY1LjI3MiA3NS40NC01LjA4NCAwLTkuNjc2LS40OTItMTIuNjI4LTEuNDc2IDAtNi4yMzIgNS4yNDgtMjEuNjQ4IDE3LjcxMi00OS4zNjQgOS44NC0yMS44MTIgMjAuODI4LTQzLjEzMiAyNC4yNzItNDcuODg4LTIuMjk2LTIuMTMyLTkuMDItNi41Ni0xOC41MzItMTAuMDA0IDQuNzU2LTEuNDc2IDEwLjAwNC0yLjI5NiAxNS41OC0yLjI5NnptMTExLjc2OCA0NC45MzZjLTQuNDI4LTUuNTc2LTkuMTg0LTguNjkyLTE0LjEwNC05LjM0OC0yMS42NDggMC00Ni4yNDggMzEuNjUyLTQ2LjI0OCA1OC41NDggMCAxMy4xMiA4Ljg1NiAyMy40NTIgMjMuOTQ0IDI1LjA5MiAxMC4zMzItMi4yOTYgMjIuOTYtMTEuNjQ0IDMyLjgtMjQuNi0uODItLjk4NC0xLjY0LTEuODA0LTIuNzg4LTIuNzg4LTYuODg4IDcuMzgtMTguMjA0IDE5LjE4OC0zMC4wMTIgMTkuMTg4LTYuMjMyIDAtNy41NDQtNy41NDQtNy41NDQtMTMuMTIgMC0xLjQ3Ni4xNjQtMi45NTIuMTY0LTQuMjY0IDI3Ljg4LTExLjE1MiA0Mi4xNDgtMjEuODEyIDQzLjc4OC00OC43MDh6bS0xMS4zMTYgNS40MTJjLS44MiAxNC45MjQtMTMuNzc2IDI4LjM3Mi0zMS4xNiAzNy4wNjQgNS4yNDgtMjAuMzM2IDE5LjE4OC0zNS40MjQgMzEuMTYtMzcuMDY0em0xMS45NjggNTMuMTRjMCA2LjI3OCAxLjMxNCAxMS44MjYgMy4wNjYgMTIuOTk0IDEuMzE0Ljg3NiAzLjUwNCAzLjIxMiAzLjk0MiA0LjIzNC41ODQgMS4zMTQgMi43NzQgMi40ODIgNS40MDIgMi43NzQtLjE0Ni0uNzMtLjE0Ni0uODc2LS4xNDYtNC4yMzQgMC0xMi4yNjQgNC4zOC0zMS4yNDQgMTIuNTU2LTU0LjAyIDkuNjM2LTI2LjcxOCAyMC41ODYtNDYuNDI4IDM1Ljc3LTY0LjM4Ni0xLjYwNi0yLjQ4Mi0xMS42OC04LjMyMi0xNi4zNTItOS4xOTgtMTAuMDc0IDEyLjI2NC0yMC41ODYgMzQuMDE4LTMyLjU1OCA2Ni43MjItNy40NDYgMjAuNDQtMTEuNjggMzYuNjQ2LTExLjY4IDQ1LjExNHptMzQuMjE2OC0zLjExOGMwIDEwLjk3NCAxMS43MTggMTUuODEgMTMuNTc4IDE1LjgxIDEuMTE2IDAgMS4xMTYtMS42NzQgMS4xMTYtNi4xMzguMTg2LTUuMzk0IDIuOTc2LTEzLjM5MiA1LjU4LTIwLjI3NCA2LjMyNC0xNi4zNjggOS42NzItMjkuNTc0IDIxLjAxOC00Mi4yMjItNC44MzYtNy4yNTQtMTMuMjA2LTExLjM0Ni0xNy4yOTgtMTIuMjc2LTExLjE2IDUuNTgtMTYuNTU0IDI0LjkyNC0xNy42NyAyOS43Ni00LjgzNiAyMi4zMi02LjMyNCAzMS4wNjItNi4zMjQgMzUuMzR6bTM1LjUyNi04MC43MjRjMCAyLjA0NiAyLjYwNCA0LjQ2NCA1LjU4IDUuMDIyIDEuODYtNC4wOTIgMTUuNDM4LTIwLjY0NiAyMS4wMTgtMjUuODU0LTMuNzItNS41OC0xNi43NC0xMy4wMi0yMi41MDYtMTMuMDItMy4xNjIgNy45OTgtNS43NjYgMjAuMDg4LTUuNzY2IDI0LjM2NiAwIDIuMDQ2LjkzIDQuODM2IDIuMjMyIDYuMTM4LS4zNzIgMS40ODgtLjU1OCAyLjYwNC0uNTU4IDMuMzQ4em0xLjA0MSA2NC4zMjJjMCAxNy4yMiAxMS42NDQgMzIuMzA4IDI2LjA3NiAzMy42MiA3LjM4LTEuMzEyIDIwLjgyOC0xMC42NiAyOC4wNDQtMTkuNjggMC0uOTg0LS44Mi0yLjYyNC0xLjY0LTMuMjgtMTAuMTY4IDcuNTQ0LTIxLjk3NiAxMy4yODQtMjguMzcyIDE0LjEwNC0zLjkzNi0xLjgwNC01LjkwNC03LjA1Mi01LjkwNC0xNS45MDggMC0xMy45NCA1LjA4NC0yNy4wNiAxNC40MzItMzcuNTU2IDYuMDY4LTYuNzI0IDEzLjQ0OC0xMS4zMTYgMTcuNzEyLTExLjMxNiAyLjQ2IDAgMy43NzIgMS42NCAzLjc3MiA0Ljc1NiAwIDUuNDEyLTMuNjA4IDExLjQ4LTEwLjk4OCAxOC4yMDQgMS44MDQgMi42MjQgNC43NTYgNC40MjggNy4zOCA0LjQyOCA2LjIzMiAwIDEyLjQ2NC05Ljg0IDEyLjQ2NC0xOS44NDQgMC0xMC40OTYtNi4zOTYtMTYuNC0xNy43MTItMTYuNC0yMi45NiAwLTQ1LjI2NCAyNC4xMDgtNDUuMjY0IDQ4Ljg3MnptNjMuMDYgMTcuODc2YzAgOS42NzYgMTAuMzMyIDEzLjk0IDExLjk3MiAxMy45NC45ODQgMCAuOTg0LTEuNDc2Ljk4NC01LjQxMi4xNjQtNC43NTYgMi42MjQtMTEuODA4IDQuOTItMTcuODc2IDUuNTc2LTE0LjQzMiA4LjUyOC0yNi4wNzYgMTguNTMyLTM3LjIyOC00LjI2NC02LjM5Ni0xMS42NDQtMTAuMDA0LTE1LjI1Mi0xMC44MjQtOS44NCA0LjkyLTE0LjU5NiAyMS45NzYtMTUuNTggMjYuMjQtNC4yNjQgMTkuNjgtNS41NzYgMjcuMzg4LTUuNTc2IDMxLjE2em0zMS4zMjQtNzEuMTc2YzAgMS44MDQgMi4yOTYgMy45MzYgNC45MiA0LjQyOCAxLjY0LTMuNjA4IDEzLjYxMi0xOC4yMDQgMTguNTMyLTIyLjc5Ni0zLjI4LTQuOTItMTQuNzYtMTEuNDgtMTkuODQ0LTExLjQ4LTIuNzg4IDcuMDUyLTUuMDg0IDE3LjcxMi01LjA4NCAyMS40ODQgMCAxLjgwNC44MiA0LjI2NCAxLjk2OCA1LjQxMi0uMzI4IDEuMzEyLS40OTIgMi4yOTYtLjQ5MiAyLjk1MnptMjEuNTY4IDg3LjkwNGMyNi4yNC01LjU3NiA0NS4xLTI5LjAyOCA0NS4xLTU2LjQxNiAwLTEwLjQ5Ni0yLjc4OC0xNS40MTYtOC42OTItMTUuNDE2LS45ODQgMC0xLjk2OC4xNjQtMi45NTIuMTY0LTMuMjgtNS43NC02Ljg4OC05Ljg0LTEwLjMzMi0xMS42NDQtNS4wODQgMC0xMC45ODggMi4yOTYtMTYuODkyIDYuNzI0LTE1LjQxNiAxMS4zMTYtMjYuNzMyIDMyLjQ3Mi0yNi43MzIgNTAuMDIgMCAxNC43NiA4LjAzNiAyNS4yNTYgMjAuNSAyNi41Njh6bTguMzY0LTUxLjY2YzUuNDEyLTcuMDUyIDEzLjEyLTE0LjEwNCAyMi42MzItMTYuODkyIDEuNDc2IDIuMjk2IDIuMTMyIDUuNDEyIDIuMTMyIDEwLjk4OCAwIDI1LjU4NC0xNC4yNjggNDYuNTc2LTMzLjc4NCA1MC44NC0yLjEzMi0uNjU2LTQuMjY0LTYuMzk2LTQuMjY0LTExLjY0NCAwLTguNjkyIDUuNzQtMjMuMjg4IDEzLjI4NC0zMy4yOTJ6bTg0LjIxNiA0Mi4zMTJjNS4wODQgMy40NDQgMTIuNjI4IDYuMzk2IDE1LjU4IDYuMzk2IDAgMCAuNjU2LS4xNjQuNjU2LS42NTYgMC0yLjEzMi0zLjYwOC01Ljc0LTMuNjA4LTE1LjA4OCAwLTE3LjIyIDEyLjYyOC0zNS41ODggMjAuNjY0LTU0Ljc3Ni0xLjk2OC0yLjQ2LTkuODQtNS4yNDgtMTUuNTgtNS4yNDgtNy4zOCA3LjA1Mi0xMC44MjQgMTYuNTY0LTEyLjc5MiAyMS45NzYtMy42MDggOS42NzYtMTEuNjQ0IDE5LjY4LTE2LjA3MiAyNS43NDgtOS4wMiAxMi4zLTEzLjQ0OCAxNy43MTItMTYuNzI4IDE5LjAyNC0uMzI4LS4zMjgtMS4xNDgtMS4zMTItMS4xNDgtMi45NTIgMC01Ljc0IDQuNzU2LTIwLjY2NCA2Ljg4OC0yNS41ODQgOS44NC0yMy4yODggMTguODYtMzUuNzUyIDIwLjgyOC0zNy44ODQtMy4yOC0zLjc3Mi0xMC44MjQtNS4wODQtMTQuNTk2LTUuMDg0LTEzLjc3NiAxMC4wMDQtMjUuNDIgMzcuNzItMjkuMzU2IDU0LjI4NC0uOTg0IDQuNTkyLTEuMzEyIDcuODcyLTEuMzEyIDEzLjk0IDEuODA0IDcuNzA4IDEwLjk4OCAxMi40NjQgMTcuODc2IDEyLjc5MiAxLjQ3Ni0uMTY0IDQuMjY0LTIuMTMyIDcuMDUyLTUuMDg0IDMuNjA4LTQuMjY0IDE1LjQxNi0yMS4xNTYgMTcuMjItMjAuOTkyLS40OTIgMS40NzYtLjgyIDMuNDQ0LS44MiA1LjkwNCAwIDMuNzcyIDEuMTQ4IDkuODQgNS4yNDggMTMuMjg0em04Ny45ODgtNjEuNjY0Yy0xLjMxMi01LjA4NC0xMy45NC0xNy44NzYtMTguODYtMTkuMTg4LTExLjQ4IDIuNDYtMjEuNjQ4IDE1LjA4OC0yMS42NDggMjYuNzMyIDAgOS4xODQgNS4wODQgMTguNjk2IDUuMDg0IDI5Ljg0OC0xOS4wMjQgMS4zMTItMzMuNzg0IDE1LjQxNi0zMy43ODQgMzIuMTQ0IDEuODA0IDYuMDY4IDkuMzQ4IDEyLjMgMTUuNTggMTIuNzkyIDE3LjU0OC0xLjgwNCAyOC4yMDgtMTMuNjEyIDI4LjIwOC0zMS44MTYgMC0yLjYyNC0uMTY0LTQuMjY0LS4xNjQtNS45MDQgMC0yLjQ2LjgyLTIuNzg4IDEwLjk4OC01LjA4NC4zMjgtLjMyOC42NTYtMS4zMTIuNjU2LTIuMTMyIDAtLjgyIDAtLjk4NC0uMTY0LTEuMzEyLTMuNDQ0IDAtNi44ODguMTY0LTExLjQ4LjMyOC0uMTY0LS4zMjgtLjE2NC0uNjU2LS4xNjQtMS45NjggMC0yMC45OTIgNC43NTYtMzIuMzA4IDEzLjQ0OC0zMi4zMDggMi4yOTYgMCAzLjkzNiAyLjI5NiAzLjkzNiA1LjQxMiAwIDIuNjI0LTIuNjI0IDcuNTQ0LTIuNjI0IDguODU2LjE2NCAxLjQ3Ni44MiAyLjI5NiAyLjEzMiAyLjQ2IDMuNDQ0IDAgOC4zNjQtMTAuNDk2IDguODU2LTE4Ljg2em0tNTQuMTIgNzQuNzg0Yy0yLjEzMi0xLjQ3Ni0zLjI4LTMuNDQ0LTMuMjgtNS45MDQgMC03LjU0NCAxNC4xMDQtMjEuODEyIDIyLjYzMi0yMi45NiAwIDExLjMxNi04Ljg1NiAyNC42LTE5LjM1MiAyOC44NjR6bTU2LjgyOC00MC4zNDRjMCA5LjY3NiA0LjU5MiAxMS4zMTYgMTAuMDA0IDEyLjc5MiA3LjA1Mi0zOS41MjQgMjkuMzU2LTc2LjkxNiA1MS44MjQtOTUuNDQ4LS45ODQtNS40MTItMTEuMzE2LTE0Ljc2LTE4LjIwNC0xNi4yMzYtMTIuNzkyIDkuMzQ4LTQzLjYyNCA4MC44NTItNDMuNjI0IDk4Ljg5MnptLTMuNjA4IDQzLjQ2YzYuNTYgMCA4Ljg1Ni0xMC4wMDQgMTMuOTQtMTUuNTgtMi45NTItNS4yNDgtMTAuMTY4LTEwLjMzMi0xNi4yMzYtMTAuMzMyLTQuOTIgMC03LjcwOCAxMi42MjgtNy43MDggMTguMDQgMCAyLjI5NiA0LjkyIDcuODcyIDEwLjAwNCA3Ljg3MnpcXFwiIC8+PC9nPjwvc3ltYm9sPlwiXG59KTtcbnZhciByZXN1bHQgPSBzcHJpdGUuYWRkKHN5bWJvbCk7XG5leHBvcnQgZGVmYXVsdCBzeW1ib2xcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9pbWFnZXMvaWNvbnMvbG9nby5zdmdcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFNwcml0ZVN5bWJvbCBmcm9tIFwic3ZnLWJha2VyLXJ1bnRpbWUvYnJvd3Nlci1zeW1ib2xcIjtcbmltcG9ydCBzcHJpdGUgZnJvbSBcInN2Zy1zcHJpdGUtbG9hZGVyL3J1bnRpbWUvYnJvd3Nlci1zcHJpdGUuYnVpbGRcIjtcbnZhciBzeW1ib2wgPSBuZXcgU3ByaXRlU3ltYm9sKHtcbiAgXCJpZFwiOiBcImxvZ291dFwiLFxuICBcInVzZVwiOiBcImxvZ291dC11c2FnZVwiLFxuICBcInZpZXdCb3hcIjogXCIwIDAgMTAwIDEwMFwiLFxuICBcImNvbnRlbnRcIjogXCI8c3ltYm9sIHZpZXdCb3g9XFxcIjAgMCAxMDAgMTAwXFxcIiBpZD1cXFwibG9nb3V0XFxcIj48ZyBkaXNwbGF5PVxcXCJub25lXFxcIj48ZyBkaXNwbGF5PVxcXCJpbmxpbmVcXFwiPjxwYXRoIGQ9XFxcIk03NS4zMDksNTYuNDQzYzMuMDY2LTIuMDMyLDYuMTMzLTQuMDY1LDkuMTk5LTYuMDk4Yy0xLjU3OC0zLjg4NC0yLjkzOS03LjkyMy00LjUxOC0xMS44MSAgICBjLTIuOTc1LDIuMjcyLTUuOTQ5LDQuNTQzLTguOTI1LDYuODE0QzcyLjU0OCw0OSw3My44MjUsNTIuNzk0LDc1LjMwOSw1Ni40NDN6XFxcIiAvPjxwYXRoIGQ9XFxcIk02Ni4xMDksNjIuNTM5YzEuMzg1LDMuNDE1LDIuOTYxLDYuNjk0LDUuMTA0LDkuNTdjMy4xODUtMS44MTIsNi4zNjYtMy42MjQsOS41NTEtNS40MzcgICAgYy0yLjI5LTMuMDc0LTMuOTc1LTYuNTgtNS40NTUtMTAuMjI5QzcyLjI0MSw1OC40NzUsNjkuMTc1LDYwLjUwOCw2Ni4xMDksNjIuNTM5elxcXCIgLz48cGF0aCBkPVxcXCJNOTAuMzE0LDYxLjIzNWMtMy4xODQsMS44MTItNi4zNjYsMy42MjQtOS41NTEsNS40MzhjMi4yOSwzLjA3Miw1LjE4OCw1LjcxNCw5LjA5Nyw3LjYzNSAgICBjMy4zOC0xLjY0OSw2Ljc2MS0zLjI5NywxMC4xNC00Ljk0NEM5NS44MzgsNjcuMzE4LDkyLjc1NSw2NC41MDcsOTAuMzE0LDYxLjIzNXpcXFwiIC8+PHBhdGggZD1cXFwiTTcxLjIxMyw3Mi4xMDljLTMuMTg0LDEuODEzLTYuMzY4LDMuNjI1LTkuNTUzLDUuNDM4Yy0xLjk5NC0yLjY3Ny0zLjQ2LTUuNzMxLTQuNzUyLTguOTA5ICAgIGMzLjA2Ni0yLjAzNCw2LjEzNi00LjA2NCw5LjIwMS02LjA5OWMtMS4zODctMy40MTQtMi41ODQtNi45NjMtMy45NzEtMTAuMzc3Yy0yLjk3NSwyLjI3MS01Ljk0OSw0LjU0Mi04LjkyNCw2LjgxMyAgICBjLTEuMjkxLTMuMTgtMi43NTctNi4yMzItNC43NTMtOC45MTFjMi44NTgtMi40OSw1LjcxNi00Ljk4MSw4LjU3NC03LjQ3MWMtMi4xNDQtMi44NzYtNC44NTQtNS4zNDYtOC41MTEtNy4xNDQgICAgYzIuNjYxLTIuNjU1LDUuMzI0LTUuMzA5LDcuOTg4LTcuOTY1YzMuOTA3LDEuOTIyLDYuODA0LDQuNTYyLDkuMDk1LDcuNjM2YzIuODU4LTIuNDkxLDUuNzE2LTQuOTgxLDguNTc0LTcuNDczICAgIGMtMi40MzgtMy4yNzEtNS41MjItNi4wODItOS42ODUtOC4xMjdsLTMuMjQ0LDAuMDI4Yy0yLjY2MiwyLjY1Ni01LjMyNCw1LjMxMi03Ljk4Nyw3Ljk2N2MtMi42NjIsMi42NTUtNS4zMjUsNS4zMS03Ljk4Niw3Ljk2NSAgICBjLTIuNjYyLDIuNjU0LTUuMzI1LDUuMzEtNy45ODYsNy45NjVjMy40MDMsMS42NzMsNS45MjcsMy45NzMsNy45MjIsNi42NDljMS45OTYsMi42NzYsMy40NjIsNS43Myw0Ljc1Myw4LjkwOSAgICBjMS4yOSwzLjE3OSwyLjQwMyw2LjQ4NCwzLjY5NCw5LjY2MmMxLjI5MSwzLjE4MSwyLjc1OCw2LjIzMiw0Ljc1Myw4LjkwOXM0LjUxOCw0Ljk3Nyw3LjkyMyw2LjY0OGwzLjI0Ni0wLjAyOSAgICBjMy4zNzktMS42NDcsNi43NTktMy4yOTYsMTAuMTM2LTQuOTQzQzc2LjA2Niw3Ny40NTYsNzMuMzU1LDc0Ljk4NCw3MS4yMTMsNzIuMTA5elxcXCIgLz48cGF0aCBkPVxcXCJNNjUuNjA4LDM1LjEyMWMtMi44NTYsMi40OTEtNS43MTYsNC45ODEtOC41NzIsNy40NzNjMi4xNDIsMi44NzUsMy43MTcsNi4xNTUsNS4xMDMsOS41NjggICAgYzIuOTc3LTIuMjcxLDUuOTUxLTQuNTQyLDguOTI3LTYuODEyQzY5LjU4NSw0MS42OTksNjcuOSwzOC4xOTQsNjUuNjA4LDM1LjEyMXpcXFwiIC8+PC9nPjxwYXRoIGRpc3BsYXk9XFxcImlubGluZVxcXCIgZD1cXFwiTTEuNDA2LDcyLjY2NGMxLjAwNSwxLjAwNCwyLjAzMSwxLjYwNywyLjI5NCwxLjM0Nmw1NS43OC01NS43ODFjMC4yNjMtMC4yNjEtMC4zNC0xLjI5LTEuMzQ2LTIuMjk0ICAgYy0xLjAwNC0xLjAwNC0yLjAzLTEuNjA2LTIuMjkyLTEuMzQ0TDAuMDYyLDcwLjM3MUMtMC4yMDEsNzAuNjMxLDAuNDAxLDcxLjY2LDEuNDA2LDcyLjY2NHpcXFwiIC8+PC9nPjxnIGRpc3BsYXk9XFxcIm5vbmVcXFwiPjxwYXRoIGRpc3BsYXk9XFxcImlubGluZVxcXCIgZD1cXFwiTTk1LjkzMyw0MC4xMzRoLTMuOTQ3Yy0xLjE2OS02LjU1LTMuNjg3LTExLjg4My04LjE1MS0xMS44ODNIOC45NjVDMi4zNDgsMjguMjUxLDAsMzkuOTY3LDAsNTAgICBzMi4zNDgsMjEuNzQ5LDguOTY1LDIxLjc0OWg3NC44NjljNC40NjUsMCw2Ljk4Mi01LjMzMyw4LjE1MS0xMS44ODRoMy45NDdjMy4wMDMsMCw0LjA2Ny01LjMxNCw0LjA2Ny05Ljg2NSAgIEMxMDAsNDUuNDQ5LDk4LjkzNiw0MC4xMzQsOTUuOTMzLDQwLjEzNHogTTQuMzc0LDM5LjM2NWMwLjcwMS0zLjIzMSwxLjcxLTUuNjkzLDIuODktNi45MTZoMC4wMjVoMC4yNTNIODUuNTFoMC4wMjUgICBjMS4xODEsMS4yMjMsMi4xODksMy42ODQsMi44OTEsNi45MTZINC4zNzR6IE05Mi42MTYsNDUuMTc1Yy0wLjA4MS0xLjA1NS0wLjE5My0yLjEwNS0wLjMzMi0zLjEzNmg0LjQwOWgwLjAxMSAgIGMwLjUzNiwwLjU1NCwwLjk5MiwxLjY3MSwxLjMxLDMuMTM2SDkyLjYxNnpcXFwiIC8+PC9nPjxnIGRpc3BsYXk9XFxcIm5vbmVcXFwiPjxwYXRoIGRpc3BsYXk9XFxcImlubGluZVxcXCIgZD1cXFwiTTk4Ljk0Myw3My4yNzJjMC41OCwwLDEuMDU2LTAuNDc2LDEuMDU2LTEuMDU2di00LjIxOWMwLTAuNTgtMC40NzYtMS4wNTUtMS4wNTYtMS4wNTVIMjguNDAyICAgYy0wLjcwNCwxLjU1NS0yLjI2MSwyLjY0My00LjA3OSwyLjY0M2MtMS44MTcsMC0zLjM3NS0xLjA4OC00LjA3OS0yLjY0M2gtMy41N2wtMC42MTgsMC42MTggICBjLTMuNDk4LDMuNDk3LTUuNDI0LDguMTQ2LTUuNDI0LDEzLjA5M2MwLDQuOTQ3LDEuOTI3LDkuNTk5LDUuNDI0LDEzLjA5NWwwLjYxOCwwLjYxOWgzLjQ5NWMwLjY2NC0xLjY0NywyLjI3LTIuODEzLDQuMTU0LTIuODEzICAgYzEuODg1LDAsMy40OTEsMS4xNjYsNC4xNTQsMi44MTNoNzAuNDY4YzAuNTc4LDAsMS4wNTUtMC40NzYsMS4wNTUtMS4wNTZ2LTQuMjJjMC0wLjU3OS0wLjQ3Ny0xLjA1NS0xLjA1NS0xLjA1NWgtNC4zNCAgIGMtMS4zMzQtMi4yMDUtMi4wNDktNC43NC0yLjA0OS03LjM4NWMwLTIuNjQzLDAuNzE1LTUuMTc3LDIuMDQ5LTcuMzgzaDQuMzM4VjczLjI3MnogTTIzLjUzNiw4OC4wNGgtNC4wODUgICBjLTEuNjE0LTIuMTExLTIuNDg4LTQuNjgyLTIuNDg4LTcuMzg1YzAtMi43MDEsMC44NzQtNS4yNzEsMi40ODktNy4zODNoNC4wODRoNjYuMzRjLTAuNDkxLDEuMTMyLTAuODcsMi4zMTEtMS4xMywzLjUyNUg2MS40MjUgICBjLTAuODczLDAtMS41ODIsMC43MDktMS41ODIsMS41ODJzMC43MDksMS41ODIsMS41ODIsMS41ODJoMjYuOTQ4Yy0wLjAwOCwwLjIzMS0wLjAzNiwwLjQ2MS0wLjAzNiwwLjY5MiAgIGMwLDIuNTg1LDAuNTM4LDUuMDg0LDEuNTM5LDcuMzg0aC02Ni4zNFY4OC4wNHpcXFwiIC8+PHBhdGggZGlzcGxheT1cXFwiaW5saW5lXFxcIiBkPVxcXCJNOTguOTQzLDExLjk2MWMwLjU4LDAsMS4wNTYtMC40NzYsMS4wNTYtMS4wNTZWNi42ODdjMC0wLjU4LTAuNDc2LTEuMDU1LTEuMDU2LTEuMDU1SDI4LjQwMiAgIGMtMC43MDQsMS41NTUtMi4yNjEsMi42NDItNC4wNzksMi42NDJjLTEuODE3LDAtMy4zNzUtMS4wODctNC4wNzktMi42NDJoLTMuNTdMMTYuMDU3LDYuMjVjLTMuNDk3LDMuNDk4LTUuNDI0LDguMTQ3LTUuNDI0LDEzLjA5NSAgIGMwLDQuOTQ2LDEuOTI3LDkuNTk4LDUuNDI0LDEzLjA5NWwwLjYxOCwwLjYxOGgzLjQ5NWMwLjY2NC0xLjY0NywyLjI3LTIuODEzLDQuMTU0LTIuODEzYzEuODg1LDAsMy40OTEsMS4xNjYsNC4xNTQsMi44MTNoNzAuNDY4ICAgYzAuNTc4LDAsMS4wNTUtMC40NzYsMS4wNTUtMS4wNTZ2LTQuMjE5YzAtMC41OC0wLjQ3Ny0xLjA1NS0xLjA1NS0xLjA1NWgtNC4zNGMtMS4zMzQtMi4yMDYtMi4wNDktNC43MzktMi4wNDktNy4zODQgICBjMC0yLjY0NCwwLjcxNS01LjE3OSwyLjA0OS03LjM4NEg5OC45NDN6IE0yMy41MzYsMjYuNzI5aC00LjA4NWMtMS42MTQtMi4xMTItMi40ODgtNC42ODItMi40ODgtNy4zODQgICBjMC0yLjcwMywwLjg3NC01LjI3MSwyLjQ4OS03LjM4NGg0LjA4NGg2Ni4zNGMtMC40OTEsMS4xMy0wLjg3LDIuMzEyLTEuMTMsMy41MjVINjEuNDI1Yy0wLjg3MywwLTEuNTgyLDAuNzA4LTEuNTgyLDEuNTgyICAgczAuNzA5LDEuNTgyLDEuNTgyLDEuNTgyaDI2Ljk0OGMtMC4wMDgsMC4yMzEtMC4wMzYsMC40Ni0wLjAzNiwwLjY5MmMwLDIuNTg1LDAuNTM4LDUuMDgzLDEuNTM5LDcuMzg1TDIzLjUzNiwyNi43MjkgICBMMjMuNTM2LDI2LjcyOXpcXFwiIC8+PHBhdGggZGlzcGxheT1cXFwiaW5saW5lXFxcIiBkPVxcXCJNODMuOTczLDU3LjM4NmMtMS4zMzQtMi4yMDUtMi4wNDktNC43NC0yLjA0OS03LjM4NGMwLTIuNjQ1LDAuNzE1LTUuMTc5LDIuMDQ5LTcuMzg0aDQuMzQgICBjMC41OCwwLDEuMDU1LTAuNDc2LDEuMDU1LTEuMDU2di00LjIxOGMwLTAuNTgtMC40NzUtMS4wNTYtMS4wNTUtMS4wNTZIMTcuODQ2Yy0wLjY2MywxLjY0Ni0yLjI3LDIuODEyLTQuMTU0LDIuODEyICAgYy0xLjg4MywwLTMuNDktMS4xNjYtNC4xNTMtMi44MTJINi4wNDNsLTAuNjE4LDAuNjE4QzEuOTI3LDQwLjQwMywwLDQ1LjA1NSwwLDUwYzAsNC45NDYsMS45MjcsOS41OTksNS40MjUsMTMuMDk2bDAuNjE4LDAuNjE3ICAgaDMuNTdjMC43MDQtMS41NTYsMi4yNjEtMi42NDMsNC4wNzktMi42NDNjMS44MTcsMCwzLjM3NSwxLjA4Nyw0LjA3OSwyLjY0M2g3MC41NDJjMC41OCwwLDEuMDU2LTAuNDc1LDEuMDU2LTEuMDU1di00LjIyICAgYzAtMC41OC0wLjQ3Ni0xLjA1Ni0xLjA1Ni0xLjA1NmgtNC4zNFY1Ny4zODZ6IE03OS4yNDMsNDIuNjE5Yy0xLjAwMSwyLjMtMS41MzksNC43OTktMS41MzksNy4zODMgICBjMCwwLjIzMywwLjAyOCwwLjQ2MywwLjAzNiwwLjY5M0g1MC43OTJjLTAuODc0LDAtMS41ODIsMC43MDktMS41ODIsMS41ODJjMCwwLjg3NCwwLjcwOCwxLjU4MiwxLjU4MiwxLjU4MmgyNy4zMjEgICBjMC4yNiwxLjIxNSwwLjYzOCwyLjM5NiwxLjEzLDMuNTI2SDEyLjkwMkg4LjgxOGMtMS42MTUtMi4xMTItMi40ODktNC42ODEtMi40ODktNy4zODRzMC44NzQtNS4yNzIsMi40ODgtNy4zODRoNC4wODQgICBMNzkuMjQzLDQyLjYxOUw3OS4yNDMsNDIuNjE5elxcXCIgLz48L2c+PGc+PHBhdGggZD1cXFwiTTg0LjkwNCw0My43ODZjLTEuMjgyLTEuOTc0LTMuMjQ5LTMuMzI4LTUuNTM4LTMuODE1Yy0wLjYtMC4xMjctMS4yMTItMC4xOTEtMS44MjEtMC4xOTFjLTEuMzUsMC0yLjY0MiwwLjMxNy0zLjgwMywwLjg3OSAgIGMwLjE2NC0xLjkzMy0wLjMwOC0zLjg1OS0xLjM4Ny01LjUyYy0xLjI4Mi0xLjk3NC0zLjI0OS0zLjMyOS01LjUzOC0zLjgxNWMtMC41OTktMC4xMjctMS4yMTEtMC4xOTItMS44Mi0wLjE5MiAgIGMtMS4xNTIsMC0yLjI2MSwwLjIzNS0zLjI4NSwwLjY1MWw0LjQ5OS0yMS4xNjVjMC40ODYtMi4yODksMC4wNDktNC42MzctMS4yMzMtNi42MVM2MS43MjksMC42OCw1OS40NCwwLjE5NCAgIGMtMi4yOS0wLjQ4Ny00LjYzNy0wLjA0OC02LjYxLDEuMjMzYy0xLjk3MywxLjI4Mi0zLjMyOSwzLjI0OS0zLjgxNSw1LjUzOGwtOC45NzgsNDIuMjM2TDMxLjA2LDYuOTY0ICAgYy0wLjQ4Ni0yLjI4OS0xLjg0Mi00LjI1Ni0zLjgxNS01LjUzOGMtMS45NzQtMS4yODItNC4zMjMtMS43MTktNi42MTEtMS4yMzNjLTIuMjg5LDAuNDg2LTQuMjU1LDEuODQxLTUuNTM4LDMuODE1ICAgYy0xLjI4MiwxLjk3NC0xLjcxOSw0LjMyMS0xLjIzMyw2LjYxbDkuNzM0LDQ1Ljc5N2wtMC4xOTksMy42MDRjLTIuNzgyLDEuMjY4LTQuODM3LDMuOTU2LTUuMTg3LDcuMDc1ICAgYy0wLjAwNSwwLjA0LTAuMDEsMC4wODEtMC4wMTQsMC4xMjJjLTAuMDI2LDAuMjcxLTAuMDQ0LDAuNTQyLTAuMDQ0LDAuODE3YzAsMC4xLDAuMDA2LDAuMjExLDAuMDEzLDAuMzI5ICAgYzAuMDAxLDAuMDI5LDAuMDA0LDAuMDYxLDAuMDA2LDAuMDkxYzAuMDIsMC4yNTYsMC4wNTQsMC41NTEsMC4xMDMsMC44NzhjMC4wMDIsMC4wMTksMC4wMDUsMC4wMzcsMC4wMDgsMC4wNTcgICBjMC4zNzIsMi40ODksMS40Niw2Ljc1MSwyLjE0OCw5LjMyN2MxLjQ3Niw1LjU4MiwzLjIyNCwxMS41MTUsMy43OCwxMy4zODNjMS40MDQsNC40MzEsNi4xNDQsNy45LDEwLjc5Miw3LjloMzEuMTgxICAgYzQuNTc1LDAsOS41NTUtMy4zLDExLjMzOC03LjUxNGwyLjIxOS01LjI0NGMxLjU2Ny0zLjcwNiwyLjg0My05Ljk5NSwyLjg0My0xNC4wMTh2LTYuMTFsMy41NTQtMTYuNzE4ICAgQzg2LjYyMyw0OC4xMDcsODYuMTg2LDQ1Ljc2LDg0LjkwNCw0My43ODZ6IE02Ni4wNCwzNC45ODdjMi43MjIsMC41NzgsNC40NjQsMy4yNjMsMy44ODYsNS45ODRsLTQuMTg5LDE5LjcwNyAgIGMtMS4zNzktMC45MDItMy4wMjQtMS40MzItNC43OTMtMS40MzJoLTUuMjE5bDQuMzMtMjAuMzc0YzAuNDkzLTIuMzE1LDIuNTcxLTMuOTk2LDQuOTQyLTMuOTk2ICAgQzY1LjM0NSwzNC44NzcsNjUuNjk2LDM0LjkxNCw2Ni4wNCwzNC45ODd6IE0xNy41MjYsOS44NDFjLTAuMjc4LTEuMzExLTAuMDI2LTIuNjU4LDAuNzEtMy43OTJzMS44NjUtMS45MTQsMy4xNzYtMi4xOTIgICBjMS4zMTItMC4yOCwyLjY1OC0wLjAyNiwzLjc5MywwLjcxMWMxLjEzNSwwLjczNywxLjkxNCwxLjg2NCwyLjE5MiwzLjE3NWw5Ljk1Nyw0Ni44NDZjMC4xODQsMC44NjUsMC45NDcsMS40ODMsMS44MzEsMS40ODNoMS43MDMgICBjMC44ODQsMCwxLjY0Ny0wLjYxOCwxLjgzMi0xLjQ4M2w5Ljk1OC00Ni44NDZjMC41NzgtMi43MjEsMy4yNjYtNC40NjYsNS45ODQtMy44ODZjMi43MjIsMC41NzgsNC40NjUsMy4yNjMsMy44ODYsNS45ODQgICBsLTUuNjg0LDI2Ljc0MWMtMC4yLDAuNDgzLTAuMzYsMC45ODgtMC40NzIsMS41MTNsLTQuNDk2LDIxLjE1MUgyNy4xOTFsMC4xNTktMi44NzFjMC4wMDktMC4xNjYtMC4wMDQtMC4zMzEtMC4wMzgtMC40OTMgICBMMTcuNTI2LDkuODQxeiBNNzYuMjkyLDg1Ljc4M2wtMi4yMTksNS4yNDRjLTEuMTk5LDIuODM0LTQuODEyLDUuMjI5LTcuODksNS4yMjlIMzUuMDAyYy0zLjAwNiwwLTYuMzE0LTIuNDIxLTcuMjEyLTUuMjU1ICAgYy0xLjQzNi00LjgyOS0zLjQwMS0xMS43NzgtNC42NTktMTYuODMzYy0wLjY4LTIuNzY0LTEuMjM0LTUuMzEyLTEuMjM0LTYuMTMzYzAtMi42NCwyLjQwNS01LjA0NSw1LjA0Ni01LjA0NWgzNCAgIGMyLjc4MywwLDUuMDQ2LDIuMjY0LDUuMDQ2LDUuMDQ1YzAsMi43ODMtMi4yNjMsNS4wNDctNS4wNDYsNS4wNDdINDAuNzc4Yy0wLjM3LDAtMC43MzEsMC4xMDgtMS4wMzksMC4zMTRsLTUuMTg4LDMuNDU4ICAgYy0wLjg2MSwwLjU3My0xLjA5MywxLjczNS0wLjUyLDIuNTk2YzAuNTc0LDAuODYsMS43MzQsMS4wOTQsMi41OTYsMC41Mmw0LjcxNi0zLjE0NGgxOS41OTljMi44ODksMCw1LjQ0Ny0xLjQwNyw3LjA1MS0zLjU2MiAgIGMxLjA3OSwwLjkzMiwyLjM5MywxLjYyLDMuODgzLDEuOTM4YzAuNiwwLjEyNywxLjIxMywwLjE5MSwxLjgyMSwwLjE5MWMxLjg5MSwwLDMuNjctMC42MTksNS4xMzEtMS42NzIgICBDNzguNzMxLDc3LjI4NSw3Ny42MSw4Mi42NjYsNzYuMjkyLDg1Ljc4M3ogTTgyLjQ3NCw0OS42MThsLTMuODMzLDE4LjAzNGMtMC40OTEsMi4zMTUtMi41NywzLjk5Ni00Ljk0MiwzLjk5NiAgIGMtMC4zNDgsMC0wLjY5OS0wLjAzNy0xLjA0Mi0wLjExYy0xLjI4Ni0wLjI3My0yLjM1LTEuMDIxLTMuMDU4LTIuMDE4YzAuMDgzLTAuNDg0LDAuMTM2LTAuOTc4LDAuMTM2LTEuNDg1ICAgYzAtMS4yNTMtMC4yNjgtMi40NDItMC43NDMtMy41MjJsMy42MTItMTYuOTkzYzAuNDkyLTIuMzE1LDIuNTctMy45OTYsNC45NDEtMy45OTZjMC4zNDgsMCwwLjcsMC4wMzcsMS4wNDMsMC4xMSAgIEM4MS4zMSw0NC4yMTIsODMuMDUzLDQ2Ljg5Nyw4Mi40NzQsNDkuNjE4elxcXCIgLz48L2c+PGcgZGlzcGxheT1cXFwibm9uZVxcXCI+PHBhdGggZGlzcGxheT1cXFwiaW5saW5lXFxcIiBkPVxcXCJNOTAuNzY3LDQwLjAxNUgxMDB2LTguODI2aC05LjI0OWMtMC40ODgtMi4wOTMtMS4zMTctNC4wNTUtMi40MjMtNS44MjZsNi41NDYtNi41NDVsLTYuMjQxLTYuMjQgICBsLTYuNTUyLDYuNTUyYy0xLjc3LTEuMS0zLjcyOS0xLjkyNC01LjgyLTIuNDFWNy40NTVoLTguODI0djkuMjY1Yy0yLjA5MiwwLjQ4NS00LjA1MiwxLjMxLTUuODIzLDIuNDExbC02LjU0OS02LjU1bC02LjIzOSw2LjI0MSAgIGw2LjU0Myw2LjU0M2MtMS4xMDcsMS43NzItMS45MzYsMy43MzUtMi40MjUsNS44MjloLTkuMjQxdjguODI2aDkuMjI5YzAuNDg2LDIuMSwxLjMxMiw0LjA3LDIuNDE5LDUuODQ4bC02LjUyMiw2LjUyMmw2LjI0MSw2LjI0ICAgbDYuNTE4LTYuNTE5YzEuNzc4LDEuMTExLDMuNzUsMS45NDIsNS44NTQsMi40MzJ2OS4yMWg4LjgyM3YtOS4yMTJjMi4xMDQtMC40OSw0LjA3NS0xLjMyMiw1Ljg1NC0yLjQzNGw2LjUxOCw2LjUybDYuMjQxLTYuMjQgICBsLTYuNTI2LTYuNTI2Qzg5LjQ1NCw0NC4wODIsOTAuMjgxLDQyLjExNCw5MC43NjcsNDAuMDE1eiBNNzEuODUsNDQuNDU2Yy00Ljg3NSwwLTguODI2LTMuOTUyLTguODI2LTguODI0ICAgYzAtNC44NzUsMy45NTEtOC44MjYsOC44MjYtOC44MjZjNC44NzQsMCw4LjgyMywzLjk1MSw4LjgyMyw4LjgyNkM4MC42NzMsNDAuNTAzLDc2LjcyNCw0NC40NTYsNzEuODUsNDQuNDU2elxcXCIgLz48cGF0aCBkaXNwbGF5PVxcXCJpbmxpbmVcXFwiIGQ9XFxcIk00Ny4wNjQsNjguODA2aDkuMjMzVjU5Ljk4aC05LjI0OWMtMC40ODgtMi4wOTMtMS4zMTgtNC4wNTQtMi40MjMtNS44MjVsNi41NDYtNi41NDVsLTYuMjQtNi4yNCAgIGwtNi41NTMsNi41NTJjLTEuNzctMS4xLTMuNzI5LTEuOTI0LTUuODItMi40MXYtOS4yNjVoLTguODI0djkuMjY1Yy0yLjA5MywwLjQ4NS00LjA1MiwxLjMxLTUuODIzLDIuNDExbC02LjU1LTYuNTVsLTYuMjM5LDYuMjQxICAgbDYuNTQzLDYuNTQyYy0xLjEwNywxLjc3Mi0xLjkzNiwzLjczNS0yLjQyNSw1LjgyOUgwdjguODI1aDkuMjI5YzAuNDg2LDIuMTAxLDEuMzEzLDQuMDcsMi40MTksNS44NDhsLTYuNTIyLDYuNTI0bDYuMjQxLDYuMjM4ICAgbDYuNTE4LTYuNTE3YzEuNzc5LDEuMTEsMy43NSwxLjk0MSw1Ljg1NSwyLjQzdjkuMjExaDguODI0di05LjIxM2MyLjEwMy0wLjQ4OSw0LjA3NS0xLjMyLDUuODU0LTIuNDMzbDYuNTE4LDYuNTE5bDYuMjQtNi4yMzkgICBsLTYuNTI2LTYuNTI2QzQ1Ljc1Miw3Mi44NzQsNDYuNTc5LDcwLjkwNiw0Ny4wNjQsNjguODA2eiBNMjguMTQ3LDczLjI0OGMtNC44NzUsMC04LjgyNi0zLjk1Mi04LjgyNi04LjgyNSAgIGMwLTQuODc1LDMuOTUyLTguODI1LDguODI2LTguODI1YzQuODc0LDAsOC44MjMsMy45NSw4LjgyMyw4LjgyNUMzNi45Nyw2OS4yOTYsMzMuMDIxLDczLjI0OCwyOC4xNDcsNzMuMjQ4elxcXCIgLz48L2c+PGcgZGlzcGxheT1cXFwibm9uZVxcXCI+PGcgZGlzcGxheT1cXFwiaW5saW5lXFxcIj48cG9seWdvbiBwb2ludHM9XFxcIjU3LjM4Nyw0NS42OSAxNS45OTcsODcuMDc3IDEzLjA2NCw5MS45MzYgMTQuNDQ0LDkzLjMxNiAxOS4zMDYsOTAuMzg2IDYwLjY5Myw0OC45OTkgICBcXFwiIC8+PC9nPjxnIGRpc3BsYXk9XFxcImlubGluZVxcXCI+PHBhdGggZD1cXFwiTTk3LjU0Miw4Ljg0MWMtMy4xNDYtMy4xNDQtOC4wNzMtMy4zMzYtMTEuMjE4LTAuMTkzTDYyLjEyNywzMi44NDVjLTAuMjc4LDAuMjgtMC4yNzgsMC43MjksMCwxLjAxICAgIGMwLjgyMSwwLjgyMywwLjgyMSwyLjE1MiwwLDIuOTczYy0wLjgxOCwwLjgyLTIuMTUxLDAuODIzLTIuOTc0LDAuMDAxYy0wLjI3OC0wLjI4LTAuNzI5LTAuMjgtMS4wMS0wLjAwMWwtMi43ODcsMi43ODggICAgYy0wLjIyOSwwLjIzMy0wLjI1OCwwLjU4LTAuMTAyLDAuODUzbDEwLjY1OSwxMC42NjFjMC4yNzUsMC4xNTYsMC42MjMsMC4xMjgsMC44NTUtMC4xMDNsMi43ODctMi43ODcgICAgYzAuMjc3LTAuMjc5LDAuMjc1LTAuNzMtMC4wMDMtMS4wMWMtMC44MjEtMC44MjEtMC44MjEtMi4xNTUsMC0yLjk3NmMwLjgxOS0wLjgyMSwyLjE1NC0wLjgxOCwyLjk3NSwwICAgIGMwLjI3NiwwLjI4MSwwLjcyOSwwLjI4MSwxLjAwOSwwbDI0LjE5Ny0yNC4xOTNDMTAwLjg4MSwxNi45MTQsMTAwLjY4OCwxMS45ODgsOTcuNTQyLDguODQxelxcXCIgLz48L2c+PHBhdGggZGlzcGxheT1cXFwiaW5saW5lXFxcIiBkPVxcXCJNODYuNzc3LDgwLjQ0TDU4LjQyMiw1NC4xbC05LjkyLDkuOTE5bDI3LjIxNywyNy4yMzljMy4wMDMsMy4xMjQsNy44MTMsMy4xMjQsMTAuOTM3LDAuMTIxICAgQzg5LjY2Miw4OC4yNTMsODkuNzgxLDgzLjQ0NSw4Ni43NzcsODAuNDR6IE04NC4wMTEsODguNzNjLTEuNTYsMS42ODYtNC4wODUsMS40NDYtNS43Ny0wLjEyYy0xLjQ0LTEuNDQxLTEuNDQtNC4wODMsMC01LjY0NSAgIGMxLjY4NS0xLjU2Niw0LjIxLTEuNTY2LDUuNzcsMEM4NS41NzQsODQuNTI3LDg1LjU3NCw4Ny4yOTEsODQuMDExLDg4LjczelxcXCIgLz48cGF0aCBkaXNwbGF5PVxcXCJpbmxpbmVcXFwiIGQ9XFxcIk00Mi4zNyw1Ny44NzlsOS42ODktOS42ODhMMzMuMzAyLDMwLjc2N2MtMi43NjItMy4wMDMtMy40ODctNC4yMDUtMi43NjItNy42OTMgICBjMC44NDMtMy44NDcsMC4xNjktMTAuOTA3LTYuMzcyLTE0LjY2OUMxNi42NDksNC4wOCw5LjAyLDguMDQ1LDkuMDIsOC4wNDVMOC40Miw5LjAwOGMwLDAsNi43MzMsNC40NDgsNy41NzQsNC45MjggICBjMC45NjEsMC42MDMsMy44NDUsMy44NDYsMC4zNTgsOS4wMTdjLTMuMzY4LDUuMTcxLTcuMDkxLDMuNDg1LTguMTczLDIuNjQ2Yy0wLjg0MS0wLjQ4Mi03LjU3NC00LjgxMS03LjU3NC00LjgxMWwtMC41OTksMC45NjIgICBjMCwwLTAuNDgzLDkuMDE2LDYuOTY4LDEzLjgyNWMzLjQ4NiwyLjI4Miw3LjIxNiwyLjI4Miw5Ljg2MSwxLjMyMmMyLjY0NS0wLjg0MSw0LjU2NSwwLjEyMiw3LjgxMywzLjI0Nkw0Mi4zNyw1Ny44Nzl6XFxcIiAvPjwvZz48ZyBkaXNwbGF5PVxcXCJub25lXFxcIj48ZyBkaXNwbGF5PVxcXCJpbmxpbmVcXFwiPjxwb2x5Z29uIHBvaW50cz1cXFwiMjguNzU3LDU3LjQ4MyAzMC4yNzQsNTYuNjA4IDQzLjQ1LDQ4Ljk3NCA0My40NzYsNDguOTg4IDY4LjMyNiwzNC42NDcgNjguMzIsMjIuMzYgNy40OTMsNTcuNDQ5IDgyLjE5MywxMDAgICAgIDkyLjQ3NSw5NC4wNyA3My40MzgsODMuMTM4ICAgXFxcIiAvPjxwb2x5Z29uIHBvaW50cz1cXFwiNzAuNDI2LDM1Ljg1OCA3MC40MzksNjQuMzQ4IDgwLjk5Myw3MC4zNTkgODAuOTYsMCA2LjQ2Miw0Mi45NzMgNi40NjgsNTUuNjE1IDcwLjQxOCwxOC43MjggICBcXFwiIC8+PHBvbHlnb24gcG9pbnRzPVxcXCI4My4wOTMsNzMuOTcyIDcwLjQ0MSw2Ni43NjQgNzAuNDQsNjYuNzcxIDY4LjE2Nyw2NS40NjggNDMuNDgzLDUxLjQwNiAzMi45NjIsNTcuNDc5IDkzLjUzOCw5Mi4yNiA5My40OTcsNi4wMDcgICAgIDgzLjA1OSwwLjAxNCAgIFxcXCIgLz48L2c+PC9nPjxnIGRpc3BsYXk9XFxcIm5vbmVcXFwiPjxwYXRoIGRpc3BsYXk9XFxcImlubGluZVxcXCIgZD1cXFwiTTg2LjIwNywxNC44MDNMNzEuNDAzLDBoLTU3LjYxdjk0LjgyN2MwLDIuOTQ4LDMuNzA2LDUuMTczLDguNjIsNS4xNzNjNC45MTUsMCw4LjYyMS0yLjIyNSw4LjYyMS01LjE3MyAgIGwwLDBWMTkuNjhsMTAuMzQ1LDEwLjM0NXY2NC44MDNsMCwwYzAsMi45NDgsMy43MDYsNS4xNzMsOC42MjEsNS4xNzNjNC45MTQsMCw4LjYyLTIuMjI1LDguNjItNS4xNzNWMTMuNzkzSDI3LjU4NnY3Ni44NDggICBjLTEuNDIzLTAuNjIxLTMuMTk2LTAuOTg1LTUuMTczLTAuOTg1Yy0xLjk3NSwwLTMuNzQ5LDAuMzY0LTUuMTcyLDAuOTg1VjMuNDQ4aDUxLjcyNXY5MS4zNzljMCwyLjk0OCwzLjcwNSw1LjE3Myw4LjYyLDUuMTczICAgYzQuOTE0LDAsOC42MjEtMi4yMjUsOC42MjEtNS4xNzNsMCwwVjE0LjgwM3ogTTU1LjE3Miw5MC42NDFjLTEuNDIzLTAuNjIxLTMuMTk3LTAuOTg1LTUuMTcyLTAuOTg1ICAgYy0xLjk3NywwLTMuNzUsMC4zNjQtNS4xNzMsMC45ODVWMzEuMDM0aDEwLjM0NVY5MC42NDF6IE01MCw5Ni41NTJjLTMuMzM4LDAtNS4xNzMtMS4yOTYtNS4xNzMtMS43MjVzMS44MzUtMS43MjQsNS4xNzMtMS43MjQgICBzNS4xNzIsMS4yOTUsNS4xNzIsMS43MjRTNTMuMzM4LDk2LjU1Miw1MCw5Ni41NTJ6IE01NS4xNzIsMjcuNTg2SDQzLjgxN0wzMy40NzMsMTcuMjQxaDIxLjY5OVYyNy41ODZ6IE0yMi40MTMsOTMuMTA0ICAgYzMuMzM4LDAsNS4xNzMsMS4yOTUsNS4xNzMsMS43MjRzLTEuODM1LDEuNzI1LTUuMTczLDEuNzI1cy01LjE3Mi0xLjI5Ni01LjE3Mi0xLjcyNVMxOS4wNzUsOTMuMTA0LDIyLjQxMyw5My4xMDR6IE04Mi43NTksMTYuMjMxICAgdjc0LjQwOWMtMS40MjMtMC42MjEtMy4xOTctMC45ODUtNS4xNzMtMC45ODVzLTMuNzUsMC4zNjQtNS4xNzIsMC45ODVWNS44ODZMODIuNzU5LDE2LjIzMXogTTc3LjU4Niw5Ni41NTIgICBjLTMuMzM4LDAtNS4xNzItMS4yOTYtNS4xNzItMS43MjVzMS44MzQtMS43MjQsNS4xNzItMS43MjRjMy4zMzcsMCw1LjE3MywxLjI5NSw1LjE3MywxLjcyNFM4MC45MjMsOTYuNTUyLDc3LjU4Niw5Ni41NTJ6XFxcIiAvPjwvZz48ZyBkaXNwbGF5PVxcXCJub25lXFxcIj48cGF0aCBkaXNwbGF5PVxcXCJpbmxpbmVcXFwiIGQ9XFxcIk03OS4zODYsMjUuOTU4VjEuODhoLTAuMDAyTDc4LjI5OSwwaC0yLjE3bC0xLjA4NywxLjg4bDAsMHYxLjg2NGMtMTYuNjY5LDEuMzA5LTMzLjQxNiwxLjMwOS01MC4wODUsMCAgIFYxLjg4bDAsMEwyMy44NzEsMGgtMi4xN2wtMS4wODUsMS44OGgtMC4wMDJ2MjQuMDc4aC02LjA4djMuMzc5aDYuMDhWNDQuM0w0Ni45Myw3MC42MTVsLTkuODQ1LDkuODQ0aC05Ljg4M3YzLjM3OWg2LjUwNSAgIEwyMS4xNzYsOTYuMzY5djAuMDAxbC0wLjU2MiwyLjA5NUwyMi4xNSwxMDBsMi4wOTYtMC41NjJ2MC4wMDJsMTUuNjAzLTE1LjYwMmgyMC4zMDRsMTUuNjAzLDE1LjYwMnYtMC4wMDJMNzcuODUsMTAwbDEuNTM2LTEuNTM1ICAgbC0wLjU2Mi0yLjA5NXYtMC4wMDFMNjYuMjkzLDgzLjgzOGg2LjUwNHYtMy4zNzloLTkuODgzbC05Ljg0NC05Ljg0NEw3OS4zODYsNDQuM1YyOS4zMzdoNi4wOHYtMy4zNzlINzkuMzg2eiBNNzUuMDQyLDI2djMuMzM3ICAgdjEwLjY0Yy0xNi4yNzgsNS4yNzUtMzMuODA2LDUuMjc1LTUwLjA4NSwwdi0xMC42NFYyNkM0MS42MjYsMjcuMzEsNTguMzczLDI3LjMxLDc1LjA0MiwyNnogTTU2Ljc3Myw4MC40NTlINDMuMjI3TDUwLDczLjY4NiAgIEw1Ni43NzMsODAuNDU5eiBNNTAsNjcuNTQ1bC02LjYyNi02LjYyN2gxMy4yNTNMNTAsNjcuNTQ1eiBNNDEuNDQzLDU4Ljk4N0wyNy43MDYsNDUuMjVjMTQuNTcxLDQuMTU4LDMwLjAxNyw0LjE1OCw0NC41ODgsMCAgIEw1OC41NTcsNTguOTg3SDQxLjQ0M3pcXFwiIC8+PC9nPjxnIGRpc3BsYXk9XFxcIm5vbmVcXFwiPjxwYXRoIGRpc3BsYXk9XFxcImlubGluZVxcXCIgZD1cXFwiTTk3Ljc1Niw4NC4xMjNMNzEuMTczLDU3LjU0YzMuNzIzLTUuODIyLDUuOTE2LTEyLjcxMiw1LjkxNi0yMC4xMTlDNzcuMDg5LDE2Ljc4Nyw2MC4zMDIsMCwzOS42NjcsMCAgIEMxOS4wMzMsMCwyLjI0NCwxNi43ODcsMi4yNDQsMzcuNDIxYzAsMjAuNjM0LDE2Ljc4OSwzNy40MjcsMzcuNDIzLDM3LjQyN2M1LjAzOSwwLDkuODQtMS4wMTUsMTQuMjMxLTIuODI5TDgxLjg4LDEwMCAgIEw5Ny43NTYsODQuMTIzeiBNMTkuMDg1LDM3LjQyMWMwLTExLjM0OCw5LjIzNC0yMC41OCwyMC41ODItMjAuNThzMjAuNTgsOS4yMzIsMjAuNTgsMjAuNThjMCwxMS4zNTQtOS4yMzIsMjAuNTg2LTIwLjU4LDIwLjU4NiAgIFMxOS4wODUsNDguNzc1LDE5LjA4NSwzNy40MjF6XFxcIiAvPjwvZz48ZyBkaXNwbGF5PVxcXCJub25lXFxcIj48cGF0aCBkaXNwbGF5PVxcXCJpbmxpbmVcXFwiIGQ9XFxcIk05Ni43OTIsNDQuNjZMNTUuMzQxLDMuMjA4Yy0xLjQyNi0xLjQyMi0zLjMyMy0yLjIwNy01LjM0Mi0yLjIwN2MtMi4wMTgsMC0zLjkxNSwwLjc4NS01LjMzOCwyLjIwNyAgIEwzLjIwOSw0NC42NkMxLjc4Myw0Ni4wODUsMSw0Ny45OCwxLDUwLjAwM2MwLDIuMDE2LDAuNzgzLDMuOTE1LDIuMjA5LDUuMzM2TDQ0LjY2LDk2Ljc5MWMxLjQyNCwxLjQyNiwzLjMyMSwyLjIwOCw1LjMzOCwyLjIwOCAgIGMyLjAxOSwwLDMuOTE5LTAuNzgyLDUuMzQyLTIuMjA4TDk2Ljc5Miw1NS4zNEM5OS43MzcsNTIuMzk4LDk5LjczNyw0Ny42MDUsOTYuNzkyLDQ0LjY2eiBNMzcuNzQzLDcxLjIzMyAgIGMtMC41NjUsMC41NTQtMS4wOTcsMS4wNzQtMS42MDIsMS41NzdsLTcuMjMyLTcuMjMyYzAuNTUtMC41NDcsMS4xMDctMS4wOTQsMS42OTQtMS42NjRjNS4xNDctNS4wMjEsMTEuMzEzLTExLjAzNiwxMy40NzctMjMuMDcyICAgYy0wLjUyNSwwLjEyNC0xLjAyMywwLjI2NS0xLjQ4NiwwLjQyM2wtMS45MzYsMC42NjdjLTQuMDY5LDEuNDA1LTUuNDAyLTAuMzQ2LTIuOTY1LTMuODkxbDcuODY0LTExLjQ0MmwwLjAwMi0wLjAwM2w0LjQzLTYuNDQ3ICAgbDQuNDI5LDYuNDUxbDcuODYzLDExLjQ0MmMyLjQzNiwzLjU0MiwxLjEwNCw1LjI5Ni0yLjk2NiwzLjg5MWwtMS45MzItMC42NjdjLTAuNDYzLTAuMTU4LTAuOTYzLTAuMjk5LTEuNDg2LTAuNDIzICAgYzIuMTY0LDEyLjAzNiw4LjMyOSwxOC4wNSwxMy40NzksMjMuMDcyYzAuNTg3LDAuNTcsMS4xNDQsMS4xMTcsMS42OSwxLjY2NGwtNy4yMjksNy4yMzJjLTAuNTA3LTAuNTAzLTEuMDQtMS4wMjMtMS42MDQtMS41NzcgICBjLTMuNzg3LTMuNjkzLTguNjM1LTguNDE5LTEyLjI0Ni0xNS43MjlDNDYuMzc5LDYyLjgxNCw0MS41MzIsNjcuNTQsMzcuNzQzLDcxLjIzM3pcXFwiIC8+PC9nPjxnIGRpc3BsYXk9XFxcIm5vbmVcXFwiPjxnIGRpc3BsYXk9XFxcImlubGluZVxcXCI+PHBhdGggZD1cXFwiTTc5LjgzOSw3OS4yNzloMTAuMjIzdi00LjQxOEwxMDAsODQuODA1bC05LjkzOCw5Ljk0NXYtNC40MThINjUuOTAyQzcxLjI1Miw4Ny41OTQsNzUuOTc3LDgzLjgyMiw3OS44MzksNzkuMjc5elxcXCIgLz48cGF0aCBkPVxcXCJNNDEuMTg2LDIxLjAxNmMtMTQuMjA5LDIuMDEzLTI1LjE1OSwxNC4yNDEtMjUuMTU5LDI4Ljk4N2MwLDEwLjExNCw1LjE1NywxOS4wNDYsMTIuOTcxLDI0LjMxSDEzLjE1MyAgICBjLTUuMTIzLTYuNzY2LTguMTc4LTE1LjE4OS04LjE3OC0yNC4zMWMwLTIwLjY0NywxNS42MDYtMzcuNzEzLDM1LjYzMS00MC4wNDdsLTUuMjQ4LDUuMjQyTDQxLjE4NiwyMS4wMTZ6XFxcIiAvPjxwYXRoIGQ9XFxcIk01LjUzMiw4NC44MDVsLTUuNTIxLTUuNTI1aDQ1LjI5OGMxNi4xNCwwLDI5LjI4Mi0xMy4xMzEsMjkuMjgyLTI5LjI3NmMwLTE0LjQ1MS0xMC41MjktMjYuNDgyLTI0LjMwNy0yOC44NTF2My45OSAgICBsLTkuOTUtOS45NDRsOS45NS05Ljk0N1Y5Ljk5YzE5Ljg5OSwyLjQ1OSwzNS4zNTgsMTkuNDU3LDM1LjM1OCw0MC4wMTNjMCwyMi4yMzctMTguMDk0LDQwLjMyOS00MC4zMzMsNDAuMzI5SDBMNS41MzIsODQuODA1elxcXCIgLz48L2c+PC9nPjxnIGRpc3BsYXk9XFxcIm5vbmVcXFwiPjxnIGRpc3BsYXk9XFxcImlubGluZVxcXCI+PHBhdGggZD1cXFwiTTQ0LjQyNiw1Ny4zMTZsOS4yNTgsOS4yNTV2MTAuMjc2aDEwLjI3M2wzLjAxMiwzLjAxMXYxMC4yNzRoOS44NjdWMTAwaDIzLjE2M1Y4Ny4xMTFMNTcuMzE0LDQ0LjQyNCAgICBjNS45NzUtMTEuNDUxLDQuMTU3LTI1LjkxLTUuNDU5LTM1LjUyOGMtMTEuODYxLTExLjg2MS0zMS4wOTQtMTEuODYxLTQyLjk1OSwwYy0xMS44NjEsMTEuODY1LTExLjg2MSwzMS4wOTgsMCw0Mi45NiAgICBDMTguNTEzLDYxLjQ3MywzMi45NzUsNjMuMjkxLDQ0LjQyNiw1Ny4zMTZ6IE0xOC4xMTMsMTguMTE0YzMuNzYxLTMuNzU1LDkuODUxLTMuNzU1LDEzLjYwNywwYzMuNzYxLDMuNzU5LDMuNzYxLDkuODUxLDAsMTMuNjA2ICAgIGMtMy43NTcsMy43NTktOS44NDcsMy43NTktMTMuNjA3LDBDMTQuMzU5LDI3Ljk2NCwxNC4zNTksMjEuODczLDE4LjExMywxOC4xMTR6XFxcIiAvPjwvZz48L2c+PGcgZGlzcGxheT1cXFwibm9uZVxcXCI+PGcgZGlzcGxheT1cXFwiaW5saW5lXFxcIj48cGF0aCBkPVxcXCJNNTAuMDAxLDIzLjI2N2MtMTEuNzI3LDAtMjEuMjI5LDkuNTAxLTIxLjIyOSwyMS4yMjRjMCwyLjkxOSwwLjU5MSw1LjY5OCwxLjY1Niw4LjIzbDAsMGw5LjU2LDI3Ljg1N2gxOS41NzVsOS42Ny0yNy4xNDYgICAgYzEuMjY4LTIuNzIsMS45OTQtNS43NDIsMS45OTQtOC45NDFDNzEuMjI4LDMyLjc2OCw2MS43MjUsMjMuMjY3LDUwLjAwMSwyMy4yNjd6XFxcIiAvPjxyZWN0IHg9XFxcIjQ3Ljc5XFxcIiB3aWR0aD1cXFwiNC40MTZcXFwiIGhlaWdodD1cXFwiMTcuMzJcXFwiIC8+PHJlY3QgeD1cXFwiMjMuMjU0XFxcIiB5PVxcXCIxMS4yOTlcXFwiIHRyYW5zZm9ybT1cXFwibWF0cml4KDAuNDk5OSAwLjg2NjEgLTAuODY2MSAwLjQ5OTkgMjcuNjU2OSAtMjAuODg2KVxcXCIgd2lkdGg9XFxcIjE3LjMyMVxcXCIgaGVpZ2h0PVxcXCI0LjQxNFxcXCIgLz48cmVjdCB4PVxcXCIxMC4wMTVcXFwiIHk9XFxcIjI0LjUzNlxcXCIgdHJhbnNmb3JtPVxcXCJtYXRyaXgoLTAuODY1OSAtMC41MDAyIDAuNTAwMiAtMC44NjU5IDIxLjQ2OTcgNTkuMjQ0OClcXFwiIHdpZHRoPVxcXCIxNy4zMlxcXCIgaGVpZ2h0PVxcXCI0LjQxN1xcXCIgLz48cG9seWdvbiBwb2ludHM9XFxcIjg3LjcyNCwyMC41MDUgNzIuNzI1LDI5LjE2NCA3NC45MjgsMzIuOTg5IDg5LjkyOSwyNC4zMjQgICBcXFwiIC8+PHJlY3QgeD1cXFwiNjUuODc2XFxcIiB5PVxcXCI0Ljg0NlxcXCIgdHJhbnNmb3JtPVxcXCJtYXRyaXgoMC44NjYzIDAuNDk5NSAtMC40OTk1IDAuODY2MyAxNS44NTA1IC0zMi4yMDU2KVxcXCIgd2lkdGg9XFxcIjQuNDJcXFwiIGhlaWdodD1cXFwiMTcuMzIxXFxcIiAvPjxyZWN0IHg9XFxcIjQwLjcxNFxcXCIgeT1cXFwiODMuMjE5XFxcIiB3aWR0aD1cXFwiMTcuMzIzXFxcIiBoZWlnaHQ9XFxcIjMuODM1XFxcIiAvPjxyZWN0IHg9XFxcIjQwLjcxNFxcXCIgeT1cXFwiODkuNjlcXFwiIHdpZHRoPVxcXCIxNy4zMjNcXFwiIGhlaWdodD1cXFwiMy44MzZcXFwiIC8+PHJlY3QgeD1cXFwiNDMuNjM1XFxcIiB5PVxcXCI5Ni4xNjRcXFwiIHdpZHRoPVxcXCIxMS40NzlcXFwiIGhlaWdodD1cXFwiMy44MzZcXFwiIC8+PC9nPjwvZz48ZyBkaXNwbGF5PVxcXCJub25lXFxcIj48cG9seWdvbiBkaXNwbGF5PVxcXCJpbmxpbmVcXFwiIHBvaW50cz1cXFwiMzcuMzgzLDIzLjUzNSAxOS4zNTUsMjMuNTM1IDM3LjM4Myw1LjUwNyAgXFxcIiAvPjxwYXRoIGRpc3BsYXk9XFxcImlubGluZVxcXCIgZD1cXFwiTTQxLjg5MSwxdjI3LjA0MkgxNC44NDlWOTloNzAuMzAzVjFINDEuODkxeiBNNzMuNzEsODUuMDYzSDI2LjI4OXYtNS43OTlINzMuNzFWODUuMDYzeiBNNzMuNzEsNjguNzYxICAgSDI2LjI4OXYtNS43OTlINzMuNzFWNjguNzYxeiBNNzMuNzEsNTIuMDI4SDI2LjI4OVY0Ni4yM0g3My43MVY1Mi4wMjh6XFxcIiAvPjwvZz48ZyBkaXNwbGF5PVxcXCJub25lXFxcIj48ZyBkaXNwbGF5PVxcXCJpbmxpbmVcXFwiPjxwYXRoIGQ9XFxcIk04MC40MSwzNC40NzJjLTE1LjMzMi05LjIzOS0yNS43OTQtMTEuNS0zMC4xMDktOS44MDVjLTEuNzg1LDAuNy0zLjU2NiwyLjk5Mi01LjQxMSw2LjA0OSAgICBjLTEuOTE3LDMuMTcyLTMuMjk5LDcuOTg2LTIuODY1LDEwLjA1N2MwLjI1NSwxLjIxLDMuNTY0LDkuMTA1LDIyLjI3OSwxOS41NDVjMTIuMTg3LDYuNzk1LDIxLjg2MSw4LjUyMSwyMy41NTMsNy45NTUgICAgYzEuNzIxLTAuNTY4LDQuMDc4LTEuODQ3LDcuMjY1LTYuMzAxQzk4LjA2OCw1Ny44NTIsOTksNTMuMTg4LDk5LDUxLjQwMkM5OSw0OS42MjMsOTIuODIsNDEuOTUsODAuNDEsMzQuNDcyeiBNOTQuNzk3LDUyLjU0OSAgICBjLTEuNzE5LDMuMDU5LTE0LjEzMS0xLjUyMy0yMS43Ny01LjcyOGMtNy42NDMtNC4yMDMtMjMuODUzLTE1LjIxOS0yMC4wNTMtMTkuMjg5YzIuNjcyLTIuODY2LDEzLjkzOCwwLjc2NCwyNi4xNjIsOC40MDMgICAgQzkxLjM2MSw0My41NzQsOTYuNTE4LDQ5LjQ5Niw5NC43OTcsNTIuNTQ5elxcXCIgLz48cGF0aCBkPVxcXCJNNDguNjc3LDUzLjU0NWMtMi42MjQsMC45OTctOS4yNjMsMi4xNTctMTcuNTIyLDIuMTU3Yy05LjIwMSwwLTI0LjQ5MS0yLjE1Ny0yNC40OTEtOC40MDMgICAgYzAtNy4yNDksMjIuNTY3LTEwLjIxNywzMi42MDctOS4yMTRjMC4wOTYtMC43MTcsMC4zMzQtMS43NjcsMC4zMzQtMS43NjdzLTEuNTc2LTAuMTkxLTQuNjc3LTAuMTkxICAgIGMtMjIuNjgsMC0zMC4yMjMsNi40NDQtMzEuNzk5LDguNzg0Yy0xLjU3NiwyLjM0LTIuMTAyLDcuMzk5LTIuMTAyLDEwLjIxOGMwLDIuODE5LTAuNjEsOC41MTYsMy45MTcsMTMuNDY3ICAgIGM1LjEwNyw1LjU4NCwxNi42MTQsNy4yNTYsMjYuMDIsNy4yNTZjOS40MDUsMCwxNi4yMzItMC43NjQsMjUuOTI0LTUuMjU0YzAuNTYtMS4yOTcsMC41NzItMi42OTUsMC41NzItMy4yNDQgICAgQzU3LjQ2MSw2Mi4wMDMsNTEuNjg2LDU0LjU1NSw0OC42NzcsNTMuNTQ1elxcXCIgLz48L2c+PC9nPjxnIGRpc3BsYXk9XFxcIm5vbmVcXFwiPjxwYXRoIGRpc3BsYXk9XFxcImlubGluZVxcXCIgZD1cXFwiTTkwLjQ3OSwzNS43MTRoLTIuODY0TDc3LjM2NCwxOC42MjdjLTAuNjQ0LTEuMDc2LTIuMjA4LTEuOTYtMy40NjItMS45NkgyNi4wOTkgICBjLTEuMjYxLDAtMi44MjIsMC44ODUtMy40NjcsMS45NmwtMTAuMjUsMTcuMDg3SDkuNTE4QzQuMjgxLDM1LjcxNCwwLDQwLjAwMiwwLDQ1LjIzOHYyLjY3OXYyMy44MTJoOS41MTh2MTEuNjA0aDE0LjI5M1Y3MS43MjkgICBoNTIuMzczdjExLjYwNGgxNC4yOTVWNzEuNzI5SDEwMFY0Ny45MTd2LTIuNjc5QzEwMCw0MC4wMDIsOTUuNzE1LDM1LjcxNCw5MC40NzksMzUuNzE0eiBNMjYuODA4LDIxLjk1OGg0Ni4zODRsOS42OSwxNi4xNDMgICBjLTQuNTE0LDEuMzUtMTQuNDM4LDMuNDM4LTMyLjYyNCwzLjQzOGMtMTguMjkyLDAtMjguNDU3LTIuMTM2LTMzLjEwMy0zLjUwN0wyNi44MDgsMjEuOTU4eiBNMTYuNjY2LDU5LjUyMyAgIGMtMy45NDEsMC03LjE0OC0zLjE5Ni03LjE0OC03LjE0YzAtMy45NDUsMy4yMDctNy4xNDYsNy4xNDgtNy4xNDZjMy45NDgsMCw3LjE0NiwzLjIsNy4xNDYsNy4xNDYgICBDMjMuODEyLDU2LjMyNywyMC42MTQsNTkuNTIzLDE2LjY2Niw1OS41MjN6IE02Ni42NjYsNjAuNTc5SDMzLjMzMWMtMC41NzksMC0xLjA1NS0wLjQ3MS0xLjA1NS0xLjA1NiAgIGMwLTAuNTg3LDAuNDc2LTEuMDU1LDEuMDU1LTEuMDU1aDMzLjMzNWMwLjU3OCwwLDEuMDU2LDAuNDY4LDEuMDU2LDEuMDU1QzY3LjcyMiw2MC4xMDgsNjcuMjQ0LDYwLjU3OSw2Ni42NjYsNjAuNTc5eiAgICBNNjYuNjY2LDU1LjgxOUgzMy4zMzFjLTAuNTc5LDAtMS4wNTUtMC40NzQtMS4wNTUtMS4wNTdjMC0wLjU4NCwwLjQ3Ni0xLjA1OSwxLjA1NS0xLjA1OWgzMy4zMzVjMC41NzgsMCwxLjA1NiwwLjQ3NSwxLjA1NiwxLjA1OSAgIEM2Ny43MjIsNTUuMzQ2LDY3LjI0NCw1NS44MTksNjYuNjY2LDU1LjgxOXogTTgzLjMzNCw1OS41MjNjLTMuOTUyLDAtNy4xNDktMy4xOTYtNy4xNDktNy4xNGMwLTMuOTQ1LDMuMTk3LTcuMTQ2LDcuMTQ5LTcuMTQ2ICAgYzMuOTQ4LDAsNy4xNDYsMy4yLDcuMTQ2LDcuMTQ2QzkwLjQ3OSw1Ni4zMjcsODcuMjgyLDU5LjUyMyw4My4zMzQsNTkuNTIzelxcXCIgLz48L2c+PGcgZGlzcGxheT1cXFwibm9uZVxcXCI+PGcgZGlzcGxheT1cXFwiaW5saW5lXFxcIj48Zz48cGF0aCBkPVxcXCJNNzcuNTQ3LDY5Ljk4VjQxLjk2OWMtMS42NTYsMC4xNDYtMy40MzIsMC4yNzktNS4zMjgsMC4zOTd2MjkuNTUzQzc0LjEzNyw3MS4zNDIsNzUuOTIsNzAuNjkzLDc3LjU0Nyw2OS45OHpcXFwiIC8+PC9nPjxnPjxwYXRoIGQ9XFxcIk0yNS41NTMsNDIuMjAyVjcxLjEyYzYuNjEyLDIuMzQ4LDE1LjE4MiwzLjc2OSwyNC41NTIsMy43NjljMi4yMjEsMCw0LjM5My0wLjA4NCw2LjUxLTAuMjM1VjQyLjk0ICAgICBjLTIuMTIzLDAuMDMzLTQuMjkzLDAuMDUxLTYuNTEsMC4wNTFDNDAuODY5LDQyLjk5MSwzMi4zNTksNDIuNjk2LDI1LjU1Myw0Mi4yMDJ6XFxcIiAvPjwvZz48Zz48Zz48cGF0aCBkPVxcXCJNMTcuODk5LDM4LjY3NmM3LjQ0NSwwLjk1OSwxOS40NTEsMS41NDIsMzIuMjA2LDEuNTQyYzEyLjYxMiwwLDI0LjUzOC0wLjU3MiwzMS45OTMtMS41MTMgICAgICBjMC41NDUtNC41NTcsMi42NjItNy41OTEsNS41MzMtNy43NDRDODMuNzUyLDEzLjgxLDY4LjQzLDEsNTAuMTA1LDFDMzEuNzcxLDEsMTYuNDQzLDEzLjgyMywxMi41NzQsMzAuOTg3ICAgICAgQzE1LjMzMSwzMS4yNzQsMTcuMzYzLDM0LjI0NSwxNy44OTksMzguNjc2eiBNNjYuMTgsOS45NjNjMS4yMTEtMS4yNTEsNC40OC0wLjA1LDcuMzAzLDIuNjggICAgICBjMi44MjQsMi43MzEsNC4xMzMsNS45NjEsMi45MjIsNy4yMTRjLTEuMjA5LDEuMjUtNC40OCwwLjA0OS03LjMwNS0yLjY4MkM2Ni4yNzcsMTQuNDQ0LDY0Ljk2OSwxMS4yMTQsNjYuMTgsOS45NjN6XFxcIiAvPjwvZz48L2c+PGc+PGc+PHBhdGggZD1cXFwiTTc1LjAzNSw3My44OTdjLTUuMTg0LDEuNzY5LTExLjQ3MywzLjAyNS0xOC4zNzMsMy41MjJjLTAuMzUsMC4wMjMtMC42OTEsMC4wNTYtMS4wNDEsMC4wNzUgICAgICBjLTAuMjQ4LDAuMDE2LTAuNSwwLjAyMi0wLjc0NiwwLjAzNWMtMC43MDEsMC4wMzYtMS40MDQsMC4wNzEtMi4xMTcsMC4wOTJjLTAuMDM3LDAuMDAxLTAuMDc0LDAuMDAxLTAuMTA5LDAuMDAzICAgICAgYy0wLjg3MywwLjAyMy0xLjc1NiwwLjAzNi0yLjY0NiwwLjAzN2MtMC44OS0wLjAwMS0xLjc3My0wLjAxNC0yLjY0Ni0wLjAzN2MtMC4wMzYtMC4wMDItMC4wNzQtMC4wMDItMC4xMTEtMC4wMDMgICAgICBjLTAuNzE0LTAuMDIxLTEuNDE2LTAuMDU2LTIuMTE3LTAuMDkyYy0wLjI0Ny0wLjAxMy0wLjQ5OS0wLjAyLTAuNzQ1LTAuMDM1Yy0wLjM1MS0wLjAyLTAuNjkzLTAuMDUyLTEuMDQyLTAuMDc1ICAgICAgYy02LjkwMS0wLjQ5Ny0xMy4xODktMS43NTQtMTguMzczLTMuNTIyYy00LTEuMzk1LTcuMzY1LTMuMTMzLTkuOTI3LTUuMTM2bC0wLjMwOS0wLjA3NiAgICAgIGMyLjQ4MiwxMC4wOTUsOS41NjEsMTguNTMxLDE2LjA4NCwyMy45OThjMi4zNjYsMi4yOTUsNC45MDQsNC4xNSw3LjU0OSw1LjIwNGMwLjE3OSwwLjA5MiwwLjM2OSwwLjIwNSwwLjUzOSwwLjI5MSAgICAgIGMxLjYzMSwwLjU1OCw2LjM2NywwLjgzMiwxMS4wOTYsMC44MjFjNC43MywwLjAxMSw5LjQ2NC0wLjI2NCwxMS4wOTUtMC44MjFjMC4xNy0wLjA4NiwwLjM2MS0wLjE5OSwwLjUzOS0wLjI5MSAgICAgIGMyLjY0NS0xLjA1NCw1LjE4NC0yLjkwOSw3LjU0OS01LjIwNGM2LjUyNS01LjQ2NywxMy42MDQtMTMuOTAzLDE2LjA4Ni0yMy45OThsLTAuMzExLDAuMDc2ICAgICAgQzgyLjM5OCw3MC43NjUsNzkuMDMzLDcyLjUwMyw3NS4wMzUsNzMuODk3eiBNNDYuMzM0LDkxLjU5NmMwLDAuNTEyLTAuNDE0LDAuOTI2LTAuOTIzLDAuOTI2cy0wLjkyNC0wLjQxNC0wLjkyNC0wLjkyNnYtNC44MzMgICAgICBjMC0wLjUxMSwwLjQxNS0wLjkyNSwwLjkyNC0wLjkyNXMwLjkyMywwLjQxNCwwLjkyMywwLjkyNVY5MS41OTZ6IE01MC45MjksOTIuOTkzYzAsMC41MTMtMC40MTUsMC45MjctMC45MjQsMC45MjcgICAgICBjLTAuNTEsMC0wLjkyNC0wLjQxNC0wLjkyNC0wLjkyN3YtNi41ODFjMC0wLjUwOSwwLjQxNS0wLjkyNCwwLjkyNC0wLjkyNGMwLjUwOSwwLDAuOTI0LDAuNDE1LDAuOTI0LDAuOTI0VjkyLjk5M3ogICAgICAgTTU1LjUyMyw5MS41OTZjMCwwLjUxMi0wLjQxNiwwLjkyNi0wLjkyNCwwLjkyNmMtMC41MSwwLTAuOTI0LTAuNDE0LTAuOTI0LTAuOTI2di00LjgzM2MwLTAuNTExLDAuNDE0LTAuOTI1LDAuOTI0LTAuOTI1ICAgICAgYzAuNTA4LDAsMC45MjQsMC40MTQsMC45MjQsMC45MjVWOTEuNTk2elxcXCIgLz48L2c+PC9nPjxnPjxnPjxwYXRoIGQ9XFxcIk04Ny44NTQsMzMuNzA1Yy0xLjcyMywwLTMuMTIxLDMuMzEyLTMuMTIxLDcuMzk2YzAsMC4wMTMsMC4wMDIsMC4wMjEsMC4wMDIsMC4wMzRjLTAuNzQ4LDAuMTE4LTEuNTc2LDAuMjMtMi40NTEsMC4zMzkgICAgICB2MjUuOTU4YzMuNjAyLTIuNDExLDUuNjg4LTUuMjU1LDUuNjg4LTguMzA3YzAsMCwzLjAwNC0xNS4zMjcsMy4wMDQtMTguMDI0QzkwLjk3NSwzNy4wMTYsODkuNTc2LDMzLjcwNSw4Ny44NTQsMzMuNzA1eiAgICAgICBNODguMDcsNDEuNTA4Yy0wLjMzNCwwLTAuNjA1LTAuNzc2LTAuNjA1LTEuNzM0czAuMjcxLTEuNzMzLDAuNjA1LTEuNzMzYzAuMzM2LDAsMC42MDcsMC43NzYsMC42MDcsMS43MzMgICAgICBTODguNDA2LDQxLjUwOCw4OC4wNyw0MS41MDh6XFxcIiAvPjwvZz48L2c+PGc+PGc+PHBhdGggZD1cXFwiTTIwLjM1Miw2OC44NjdWNDEuNzVjLTEuOTE4LTAuMTk5LTMuNjM1LTAuNDE1LTUuMDg1LTAuNjQ3YzAtMC4wMDEsMC0wLjAwMSwwLTAuMDAxYzAtNC4wODQtMS4zOTgtNy4zOTYtMy4xMjEtNy4zOTYgICAgICBjLTEuNzIzLDAtMy4xMiwzLjMxMi0zLjEyLDcuMzk2YzAsMy4xNCwzLjIxMywxOC4wMjQsMy4yMTMsMTguMDI0QzEyLjIzOSw2Mi44MDUsMTUuMjc2LDY2LjE4NiwyMC4zNTIsNjguODY3eiBNMTEuODgyLDQxLjUwOCAgICAgIGMtMC4zMzQsMC0wLjYwNi0wLjc3Ni0wLjYwNi0xLjczNHMwLjI3Mi0xLjczMywwLjYwNi0xLjczM3MwLjYwNywwLjc3NiwwLjYwNywxLjczM1MxMi4yMTYsNDEuNTA4LDExLjg4Miw0MS41MDh6XFxcIiAvPjwvZz48L2c+PC9nPjwvZz48ZyBkaXNwbGF5PVxcXCJub25lXFxcIj48ZyBkaXNwbGF5PVxcXCJpbmxpbmVcXFwiPjxwYXRoIGQ9XFxcIk03MC4wMDIsMEgzMGMtMy42ODQsMC02LjY2NiwyLjk4MS02LjY2Niw2LjY2N3Y4Ni42NjdjMCwzLjY4NiwyLjk4MSw2LjY2Nyw2LjY2Niw2LjY2N2g0MCAgICBjMy42ODUsMCw2LjY2Ni0yLjk4MSw2LjY2Ni02LjY2N1Y2LjY2N0M3Ni42NjgsMi45ODEsNzMuNjg3LDAsNzAuMDAyLDB6IE00My4yMjksNi4wNDJoMTMuNTQyYzEuMjExLDAsMi4xODgsMC45ODMsMi4xODgsMi4xODggICAgYzAsMS4yMTEtMC45NzcsMi4xODgtMi4xODgsMi4xODhINDMuMjI5Yy0xLjIxMSwwLTIuMTg4LTAuOTc3LTIuMTg4LTIuMTg4QzQxLjA0Miw3LjAyNCw0Mi4wMTksNi4wNDIsNDMuMjI5LDYuMDQyeiAgICAgTTUwLjAwMSw5My43NDNjLTIuOTgyLDAtNS40MDQtMi40MjItNS40MDQtNS40MWMwLTIuOTgxLDIuNDIxLTUuNDAzLDUuNDA0LTUuNDAzczUuNDA0LDIuNDIyLDUuNDA0LDUuNDAzICAgIEM1NS40MDUsOTEuMzIxLDUyLjk4Myw5My43NDMsNTAuMDAxLDkzLjc0M3ogTTY5LjY2Myw3OC4zMzRIMzAuMzM4di02Mi41aDM5LjMyM3Y2Mi41SDY5LjY2M3pcXFwiIC8+PC9nPjwvZz48ZyBkaXNwbGF5PVxcXCJub25lXFxcIj48ZyBkaXNwbGF5PVxcXCJpbmxpbmVcXFwiPjxwYXRoIGQ9XFxcIk03Mi40MTEsMy4xMzljLTEuNDEyLTEuMTcxLTMuMTY4LTEuNzExLTQuNzAzLTIuMDg0QzY0LjcyNSwwLjMyOCw1My4yMzgsMCw1MC4xNjEsMGgtMC4zMjIgICAgYy0zLjA3NywwLTE0LjU2MiwwLjMyOC0xNy41NDYsMS4wNTVjLTEuNTM2LDAuMzczLTMuMjk1LDAuOTEzLTQuNzAyLDIuMDg0Yy0xLjcwOCwxLjQxNy0yLjU3MywzLjUtMi41NzMsNi4xOTl2ODEuNTkzICAgIGMwLDUuNDk0LDQuNDA0LDcuMDc3LDYuMjk0LDcuNTA0QzMzLjM5OCw5OC45MDIsMzguMjg4LDEwMCw0OS44LDEwMEg1MC4yYzExLjUxMiwwLDE2LjQwMi0xLjA5OCwxOC40ODktMS41NjUgICAgYzEuODktMC40MjcsNi4yOTUtMi4wMSw2LjI5NS03LjUwNFY5LjMzOEM3NC45ODMsNi42NCw3NC4xMTgsNC41NTYsNzIuNDExLDMuMTM5eiBNNjYuNTQyLDUuNjE3YzEuMzIxLDAsMi4zOTIsMS4wNjcsMi4zOTIsMi4zOTUgICAgYzAsMS4zMjEtMS4wNywyLjM5Ni0yLjM5MiwyLjM5NnMtMi4zOTQtMS4wNzYtMi4zOTQtMi4zOTZDNjQuMTQ4LDYuNjg1LDY1LjIyNyw1LjYxNyw2Ni41NDIsNS42MTd6IE00MC43NDUsNy4wMThoMTcuNjc0ICAgIGMwLjU4LDAsMS4wMzgsMC40NjIsMS4wMzgsMS4wMzVzLTAuNDU4LDEuMDM1LTEuMDM4LDEuMDM1SDQwLjc0NWMtMC41NzksMC0xLjAzOC0wLjQ2NS0xLjAzOC0xLjAzNSAgICBDMzkuNzA4LDcuNDgsNDAuMTY3LDcuMDE4LDQwLjc0NSw3LjAxOHogTTUzLjkyMyw5NC4zMzJjLTEuMDAxLDAuMjQxLTMuMDczLDAuMjcxLTMuOTc0LDAuMjcxYy0wLjEwNywwLTAuMTk3LTAuMDAzLTAuMjY1LTAuMDAzICAgIHMtMC4xNjEsMC4wMDMtMC4yNjYsMC4wMDNjLTAuODk3LDAtMi45NzMtMC4wMjktMy45NzUtMC4yNzFjLTEuMzQ1LTAuMzI2LTEuNzYyLTEuODI1LTEuNzYyLTIuMzM1YzAtMC4zNTcsMC0xLjMwNCwxLjQzMi0xLjMwNCAgICBoNC40MWgwLjMyMmg0LjQxYzEuNDMsMCwxLjQzLDAuOTQ2LDEuNDMsMS4zMDRDNTUuNjg1LDkyLjUwNyw1NS4yNjksOTQuMDA2LDUzLjkyMyw5NC4zMzJ6IE02OC42MzQsODYuMTE3aC0zNy41NFYxNC4wNTZINjguNjMgICAgdjcyLjA2Mkg2OC42MzR6XFxcIiAvPjwvZz48L2c+PGcgZGlzcGxheT1cXFwibm9uZVxcXCI+PHBhdGggZGlzcGxheT1cXFwiaW5saW5lXFxcIiBkPVxcXCJNNjcuOTUxLDI4Ljg3MXYyMi4wNWwtMjIuMDUyLTIyLjA1djI1Ljc0NmgtNy4wNDNWMGgtOS4yMzF2NTQuNjE2aC03LjA0N1YwaC05LjIzdjU0LjYxNkg2LjMwNFYxMDAgICBoODcuMzg0VjU0LjYxNmgwLjAwOEw2Ny45NTEsMjguODcxeiBNODkuNTgxLDY1Ljk2Mkg3NS45NDJ2LTcuMjM5aDEzLjYzOVY2NS45NjJ6IE01NC4wOTYsNzAuMDY0aDEzLjY0MnY3LjI0M0g1NC4wOTZWNzAuMDY0eiAgICBNNDUuODkyLDc3LjMwOEgzMi4yNTN2LTcuMjQzaDEzLjYzOFY3Ny4zMDh6IE01NC4wOTYsNjUuOTYydi03LjIzOWgxMy42NDJ2Ny4yMzlINTQuMDk2eiBNNDUuODkyLDU4LjcyM3Y3LjIzOUgzMi4yNTN2LTcuMjM5ICAgSDQ1Ljg5MnogTTI0LjA0OCw1OC43MjN2Ny4yMzlIMTAuNDExdi03LjIzOUgyNC4wNDh6IE0xMC40MTEsNzAuMDY0aDEzLjYzOHY3LjI0M0gxMC40MTFWNzAuMDY0eiBNNzUuOTQyLDc3LjMwOHYtNy4yNDNoMTMuNjM5ICAgdjcuMjQzSDc1Ljk0MnpcXFwiIC8+PC9nPjxnIGRpc3BsYXk9XFxcIm5vbmVcXFwiPjxnIGRpc3BsYXk9XFxcImlubGluZVxcXCI+PHBhdGggZD1cXFwiTTEyLjk2Miw0OC4xNDdWMTAwaDc0LjA3NlY0OC4xNDdIMTIuOTYyeiBNNTMuNzA0LDc2Ljc1MXYxMi4xMzdoLTcuNDA5Vjc2Ljc1MWMtMi4yMDItMS4yODgtMy43MDQtMy42NDYtMy43MDQtNi4zODEgICAgYzAtNC4wODcsMy4zMTMtNy40MDcsNy40MS03LjQwN2M0LjA4NywwLDcuNDA3LDMuMzIsNy40MDcsNy40MDdDNTcuNDA4LDczLjEwNCw1NS45MDMsNzUuNDYzLDUzLjcwNCw3Ni43NTF6XFxcIiAvPjxwYXRoIGQ9XFxcIk0zNS4xOCwyNS45M2MwLjA0LTMuMS0wLjAwMy0xNC44MTUsMTQuODEzLTE0LjgxNWMxNC44MjEsMCwxNC43NzEsMTEuNzYyLDE0LjgxNCwxNC44MTV2MTEuMTFoMTEuMTE4VjI1LjkyNiAgICBjMCwwLTAuMDA3LTI1LjkyNi0yNS45MjUtMjUuOTI2QzI0LjA3NywwLDI0LjA3LDI1LjkyNiwyNC4wNywyNS45MjZWMzcuMDRoMTEuMTFWMjUuOTN6XFxcIiAvPjwvZz48L2c+PC9zeW1ib2w+XCJcbn0pO1xudmFyIHJlc3VsdCA9IHNwcml0ZS5hZGQoc3ltYm9sKTtcbmV4cG9ydCBkZWZhdWx0IHN5bWJvbFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2ltYWdlcy9pY29ucy9sb2dvdXQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgU3ByaXRlU3ltYm9sIGZyb20gXCJzdmctYmFrZXItcnVudGltZS9icm93c2VyLXN5bWJvbFwiO1xuaW1wb3J0IHNwcml0ZSBmcm9tIFwic3ZnLXNwcml0ZS1sb2FkZXIvcnVudGltZS9icm93c2VyLXNwcml0ZS5idWlsZFwiO1xudmFyIHN5bWJvbCA9IG5ldyBTcHJpdGVTeW1ib2woe1xuICBcImlkXCI6IFwibWFwXCIsXG4gIFwidXNlXCI6IFwibWFwLXVzYWdlXCIsXG4gIFwidmlld0JveFwiOiBcIjAgMCAxMDAgMTAwXCIsXG4gIFwiY29udGVudFwiOiBcIjxzeW1ib2wgdmlld0JveD1cXFwiMCAwIDEwMCAxMDBcXFwiIGlkPVxcXCJtYXBcXFwiPjxnIHRyYW5zZm9ybT1cXFwidHJhbnNsYXRlKDAsLTk1Mi4zNjIxOClcXFwiPjxwYXRoIGQ9XFxcIk0gNTAgNyBDIDM0LjU0Nzg2MSA3IDIyIDE5LjU0Nzg2IDIyIDM1IEMgMjIgNDAuNTcwNDEgMjMuNjM4MTUxIDQ1Ljc2MjI2IDI2LjQzNzUgNTAuMTI1IEwgNDEuODEyNSA3NC4wOTM3NSBDIDQwLjIzMTE2NCA3NC41MzAwOCAzOC43NzMzNDMgNzUuMDc1ODc0IDM3LjUgNzUuNzUgQyAzNC4yMzc3MTYgNzcuNDc3MSAzMiA4MC4wMDQzIDMyIDgzIEMgMzIgODUuOTk1NyAzNC4yMzc3MTYgODguNTIyOSAzNy41IDkwLjI1IEMgNDAuNzYyMjg0IDkxLjk3NzEgNDUuMTYyNTIxIDkzIDUwIDkzIEMgNTQuODM3NDc5IDkzIDU5LjIzNzcxNiA5MS45NzcxIDYyLjUgOTAuMjUgQyA2NS43NjIyODQgODguNTIyOSA2OCA4NS45OTU3IDY4IDgzIEMgNjggODAuMDA0MyA2NS43NjIyODQgNzcuNDc3MSA2Mi41IDc1Ljc1IEMgNjEuMjMwNDQ1IDc1LjA3Nzg3OSA1OS43NjMwMTIgNzQuNTMxMTc1IDU4LjE4NzUgNzQuMDkzNzUgTCA3My41NjI1IDUwLjEyNSBDIDc2LjM2MTg1NCA0NS43NjIzNiA3OCA0MC41NzA0MiA3OCAzNSBDIDc4IDE5LjU0Nzg2IDY1LjQ1MjEzOSA3IDUwIDcgeiBNIDUwIDkgQyA2NC4zNzEyNjEgOSA3NiAyMC42Mjg3NCA3NiAzNSBDIDc2IDQwLjE3ODE4IDc0LjQ3NjI0NiA0NC45Nzc0IDcxLjg3NSA0OS4wMzEyNSBMIDUwIDgzLjEyNSBMIDI4LjEyNSA0OS4wMzEyNSBDIDI1LjUyMzc0OSA0NC45NzczIDI0IDQwLjE3ODE5IDI0IDM1IEMgMjQgMjAuNjI4NzQgMzUuNjI4NzM5IDkgNTAgOSB6IE0gNTAgMjQgQyA0My45MzY3IDI0IDM5IDI4LjkzNjggMzkgMzUgQyAzOSA0MS4wNjMyIDQzLjkzNjcgNDYgNTAgNDYgQyA1Ni4wNjMzIDQ2IDYxIDQxLjA2MzIgNjEgMzUgQyA2MSAyOC45MzY4IDU2LjA2MzMgMjQgNTAgMjQgeiBNIDUwIDI2IEMgNTQuOTgyNCAyNiA1OSAzMC4wMTc2IDU5IDM1IEMgNTkgMzkuOTgyNCA1NC45ODI0IDQ0IDUwIDQ0IEMgNDUuMDE3NiA0NCA0MSAzOS45ODI0IDQxIDM1IEMgNDEgMzAuMDE3NiA0NS4wMTc2IDI2IDUwIDI2IHogTSA0Mi45Njg3NSA3NS44NzUgTCA0OS4xNTYyNSA4NS41MzEyNSBBIDEuMDAwMSAxLjAwMDEgMCAwIDAgNTAuODQzNzUgODUuNTMxMjUgTCA1Ny4wMzEyNSA3NS44NzUgQyA1OC43MzIwNDQgNzYuMzAyOTQ5IDYwLjI3Nzc1IDc2Ljg1MTExOCA2MS41NjI1IDc3LjUzMTI1IEMgNjQuNDUzMDA2IDc5LjA2MTU1IDY2IDgxLjAyNTEgNjYgODMgQyA2NiA4NC45NzQ4IDY0LjQ1MzAwNiA4Ni45Mzg1NSA2MS41NjI1IDg4LjQ2ODc1IEMgNTguNjcxOTk0IDg5Ljk5OTA1IDU0LjU1MTM2IDkxIDUwIDkxIEMgNDUuNDQ4NjQgOTEgNDEuMzI4MDA2IDg5Ljk5OTA1IDM4LjQzNzUgODguNDY4NzUgQyAzNS41NDY5OTQgODYuOTM4NTUgMzQgODQuOTc0OCAzNCA4MyBDIDM0IDgxLjAyNTEgMzUuNTQ2OTk0IDc5LjA2MTU1IDM4LjQzNzUgNzcuNTMxMjUgQyAzOS43MjMwNjUgNzYuODUwNjg3IDQxLjI2NjE5NSA3Ni4zMDMxMDUgNDIuOTY4NzUgNzUuODc1IHogXFxcIiB0cmFuc2Zvcm09XFxcInRyYW5zbGF0ZSgwLDk1Mi4zNjIxOClcXFwiIC8+PC9nPjwvc3ltYm9sPlwiXG59KTtcbnZhciByZXN1bHQgPSBzcHJpdGUuYWRkKHN5bWJvbCk7XG5leHBvcnQgZGVmYXVsdCBzeW1ib2xcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9pbWFnZXMvaWNvbnMvbWFwLnN2Z1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFNwcml0ZVN5bWJvbCBmcm9tIFwic3ZnLWJha2VyLXJ1bnRpbWUvYnJvd3Nlci1zeW1ib2xcIjtcbmltcG9ydCBzcHJpdGUgZnJvbSBcInN2Zy1zcHJpdGUtbG9hZGVyL3J1bnRpbWUvYnJvd3Nlci1zcHJpdGUuYnVpbGRcIjtcbnZhciBzeW1ib2wgPSBuZXcgU3ByaXRlU3ltYm9sKHtcbiAgXCJpZFwiOiBcInBlbmNpbFwiLFxuICBcInVzZVwiOiBcInBlbmNpbC11c2FnZVwiLFxuICBcInZpZXdCb3hcIjogXCIwIDAgMTAwIDEwMFwiLFxuICBcImNvbnRlbnRcIjogXCI8c3ltYm9sIHZpZXdCb3g9XFxcIjAgMCAxMDAgMTAwXFxcIiBpZD1cXFwicGVuY2lsXFxcIj48Zz48cGF0aCBkPVxcXCJNODguNSwyMy42TDc2LjQsMTEuNWMtMS0xLTIuMy0xLjUtMy43LTEuNWMtMS40LDAtMi43LDAuNS0zLjcsMS41bC04LDhsMTkuNSwxOS41bDgtOEM5MC41LDI5LDkwLjUsMjUuNyw4OC41LDIzLjZ6ICAgIE04Ni40LDI5bC02LDZMNjUsMTkuNWw2LTZjMC45LTAuOSwyLjUtMC45LDMuNCwwbDEyLjEsMTIuMUM4Ny40LDI2LjYsODcuNCwyOC4xLDg2LjQsMjl6XFxcIiAvPjxwYXRoIGQ9XFxcIk01NS4xLDI1LjRMMTEuOSw2OC42Yy0wLjcsMC43LTEuMSwxLjYtMS4xLDIuNmwtMC43LDE2YzAsMC44LDAuMiwxLjUsMC44LDJjMC41LDAuNSwxLjIsMC44LDEuOSwwLjhjMCwwLDAuMSwwLDAuMSwwICAgbDE2LTAuN2MxLDAsMS45LTAuNSwyLjYtMS4xbDQzLjItNDMuMkw1NS4xLDI1LjR6IE02Mi43LDM3TDIxLjksNzcuOWwtNy42LTcuNmw0MC44LTQwLjhMNjIuNywzN3ogTTEzLjUsNzMuNmwxMi45LDEyLjlsLTEzLjUsMC42ICAgTDEzLjUsNzMuNnogTTI5LjcsODUuN2wtNS44LTUuOGw0MC44LTQwLjhsNS44LDUuOEwyOS43LDg1Ljd6XFxcIiAvPjwvZz48L3N5bWJvbD5cIlxufSk7XG52YXIgcmVzdWx0ID0gc3ByaXRlLmFkZChzeW1ib2wpO1xuZXhwb3J0IGRlZmF1bHQgc3ltYm9sXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvaW1hZ2VzL2ljb25zL3BlbmNpbC5zdmdcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBTcHJpdGVTeW1ib2wgZnJvbSBcInN2Zy1iYWtlci1ydW50aW1lL2Jyb3dzZXItc3ltYm9sXCI7XG5pbXBvcnQgc3ByaXRlIGZyb20gXCJzdmctc3ByaXRlLWxvYWRlci9ydW50aW1lL2Jyb3dzZXItc3ByaXRlLmJ1aWxkXCI7XG52YXIgc3ltYm9sID0gbmV3IFNwcml0ZVN5bWJvbCh7XG4gIFwiaWRcIjogXCJyZXZpZXdcIixcbiAgXCJ1c2VcIjogXCJyZXZpZXctdXNhZ2VcIixcbiAgXCJ2aWV3Qm94XCI6IFwiMCAwIDEwMCAxMDBcIixcbiAgXCJjb250ZW50XCI6IFwiPHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgMTAwIDEwMFxcXCIgaWQ9XFxcInJldmlld1xcXCI+PHRpdGxlPkFydGJvYXJkPC90aXRsZT48ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz48ZyBzdHJva2U9XFxcIm5vbmVcXFwiIHN0cm9rZS13aWR0aD1cXFwiMVxcXCIgZmlsbD1cXFwibm9uZVxcXCIgZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIj48ZyBzdHJva2U9XFxcIiNmZmZmZmZcXFwiIHN0cm9rZS13aWR0aD1cXFwiNC41XFxcIj48ZyB0cmFuc2Zvcm09XFxcInRyYW5zbGF0ZSg1LjAwMDAwMCwgMTAuMDAwMDAwKVxcXCI+PHBhdGggZD1cXFwiTTgyLjcwMzEyMDksMC44MiBMNy43MDEzNjI1NiwwLjgyIEMzLjU1ODgyMzU4LDAuODIgMC4yMDQsNC4xNzgzNDAxNyAwLjIwNCw4LjMyMDg3OTE1IEwwLjIwNCw1Ny4wOTI0MTgyIEMwLjIwNCw2MS4yMzQ5NTcyIDMuNTYyMzQwMTcsNjQuNTkzMjk3NCA3LjcwMTM2MjU2LDY0LjU5MzI5NzQgTDYwLjMzNzYzMDMsNjQuNTkzMjk3NCBMNzUuMTk4NzI1MSw3OS40NTQzOTIyIEw3NS4xOTg3MjUxLDY0LjU5MzI5NzQgTDgyLjcwMzEyMDksNjQuNTkzMjk3NCBDODYuODQ1NjU5OCw2NC41OTMyOTc0IDkwLjIwNCw2MS4yMzQ5NTcyIDkwLjIwNCw1Ny4wOTI0MTgyIEw5MC4yMDQsOC4zMjA4NzkxNSBDOTAuMjA0LDQuMTc4MzQwMTcgODYuODQ1NjU5OCwwLjgyIDgyLjcwMzEyMDksMC44MiBMODIuNzAzMTIwOSwwLjgyIFogTTMwLjU1NTY1ODcsMzYuNDY3NjM4IEMyOC40ODQzODkyLDM2LjQ2NzYzOCAyNi44MDY5Nzc0LDM0Ljc5MDIyNjIgMjYuODA2OTc3NCwzMi43MTg5NTY3IEMyNi44MDY5Nzc0LDMwLjY0NzY4NzMgMjguNDg0Mzg5MiwyOC45NzAyNzU1IDMwLjU1NTY1ODcsMjguOTcwMjc1NSBDMzIuNjI2OTI4MSwyOC45NzAyNzU1IDM0LjMwNDMzOTksMzAuNjUxMjAzOCAzNC4zMDQzMzk5LDMyLjcxODk1NjcgQzM0LjMwNDMzOTksMzQuNzg2NzA5NiAzMi42MjY5MjgxLDM2LjQ2NzYzOCAzMC41NTU2NTg3LDM2LjQ2NzYzOCBMMzAuNTU1NjU4NywzNi40Njc2MzggWiBNNDUuMjAyMjQxNywzNi40Njc2MzggQzQzLjEzMDk3MjIsMzYuNDY3NjM4IDQxLjQ1MzU2MDQsMzQuNzkwMjI2MiA0MS40NTM1NjA0LDMyLjcxODk1NjcgQzQxLjQ1MzU2MDQsMzAuNjQ3Njg3MyA0My4xMzA5NzIyLDI4Ljk3MDI3NTUgNDUuMjAyMjQxNywyOC45NzAyNzU1IEM0Ny4yNzM1MTEyLDI4Ljk3MDI3NTUgNDguOTUwOTIzLDMwLjY1MTIwMzggNDguOTUwOTIzLDMyLjcxODk1NjcgQzQ4Ljk1MDkyMywzNC43ODY3MDk2IDQ3LjI3MzUxMTIsMzYuNDY3NjM4IDQ1LjIwMjI0MTcsMzYuNDY3NjM4IEw0NS4yMDIyNDE3LDM2LjQ2NzYzOCBaIE02MC4yMDA0ODM0LDM2LjQ2NzYzOCBDNTguMTI5MjEzOSwzNi40Njc2MzggNTYuNDUxODAyMSwzNC43OTAyMjYyIDU2LjQ1MTgwMjEsMzIuNzE4OTU2NyBDNTYuNDUxODAyMSwzMC42NDc2ODczIDU4LjEyOTIxMzksMjguOTcwMjc1NSA2MC4yMDA0ODM0LDI4Ljk3MDI3NTUgQzYyLjI3MTc1MjksMjguOTcwMjc1NSA2My45NDkxNjQ3LDMwLjY1MTIwMzggNjMuOTQ5MTY0NywzMi43MTg5NTY3IEM2My45NDkxNjQ3LDM0Ljc4NjcwOTYgNjIuMjcxNzUyOSwzNi40Njc2MzggNjAuMjAwNDgzNCwzNi40Njc2MzggTDYwLjIwMDQ4MzQsMzYuNDY3NjM4IFpcXFwiIC8+PC9nPjwvZz48L2c+PC9zeW1ib2w+XCJcbn0pO1xudmFyIHJlc3VsdCA9IHNwcml0ZS5hZGQoc3ltYm9sKTtcbmV4cG9ydCBkZWZhdWx0IHN5bWJvbFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2ltYWdlcy9pY29ucy9yZXZpZXcuc3ZnXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgU3ByaXRlU3ltYm9sIGZyb20gXCJzdmctYmFrZXItcnVudGltZS9icm93c2VyLXN5bWJvbFwiO1xuaW1wb3J0IHNwcml0ZSBmcm9tIFwic3ZnLXNwcml0ZS1sb2FkZXIvcnVudGltZS9icm93c2VyLXNwcml0ZS5idWlsZFwiO1xudmFyIHN5bWJvbCA9IG5ldyBTcHJpdGVTeW1ib2woe1xuICBcImlkXCI6IFwic3RvcmVcIixcbiAgXCJ1c2VcIjogXCJzdG9yZS11c2FnZVwiLFxuICBcInZpZXdCb3hcIjogXCIwIDAgNTEyIDUxMlwiLFxuICBcImNvbnRlbnRcIjogXCI8c3ltYm9sIHZpZXdCb3g9XFxcIjAgMCA1MTIgNTEyXFxcIiBpZD1cXFwic3RvcmVcXFwiPjxnPjxwYXRoIGQ9XFxcIk00NjksNDkzLjZWMTg4YzM1LjUtMTAuOSw0My43LTQ1LDM3LjctNjguOUw0NzUuMywySDM2LjdMNS4yLDExOS4zQy0wLjcsMTQzLDcuOSwxNzcuMSw0MywxODh2MzA1LjZIMlY1MTBoNTA4di0xNi40SDQ2OXogICAgTTQ1Mi42LDE3NC4xYy0yMi42LDAtNDEtMTguNC00MS00MXYtMzIuOGg3My4xbDYuMiwyMi45QzQ5Ni43LDE0NCw0ODMuOSwxNzQuMSw0NTIuNiwxNzQuMXogTTExNi43LDEwMC4zaDgxLjl2MzIuOCAgIGMwLDIyLjYtMTguNCw0MS00MSw0MWMtMjIuNiwwLTQxLTE4LjQtNDEtNDFWMTAwLjN6IE0yMTUsMTAwLjNIMjk3djMyLjhjMCwyMi42LTE4LjQsNDEtNDEsNDFjLTIyLjYsMC00MS0xOC40LTQxLTQxVjEwMC4zeiAgICBNMzEzLjQsMTAwLjNoODEuOXYzMi44YzAsMjIuNi0xOC40LDQxLTQxLDQxYy0yMi42LDAtNDEtMTguNC00MS00MVYxMDAuM3ogTTQ5LjMsMTguNGg0MTMuNWwxNy42LDY1LjVIMzEuN0w0OS4zLDE4LjR6ICAgIE0yMS4xLDEyMy40bDYuMi0yMy4xaDczLjF2MzIuOGMwLDIyLjYtMTguNCw0MS00MSw0MUMyOCwxNzQuMSwxNS4zLDE0My4xLDIxLjEsMTIzLjR6IE0yOTcsNDkzLjZ2LTIxM2gxMTQuN3YyMTNIMjk3eiAgICBNNDUyLjYsNDkzLjZoLTI0LjZWMjY0LjJIMjgwLjZ2MjI5LjRINTkuNFYxOTAuNWMyMC44LDAsMzkuMS0xMS4yLDQ5LjItMjcuOGMxMCwxNi43LDI4LjMsMjcuOCw0OS4yLDI3LjggICBjMjAuOCwwLDM5LjEtMTEuMiw0OS4yLTI3LjhjMTAsMTYuNywyOC4zLDI3LjgsNDkuMiwyNy44YzIwLjgsMCwzOS4xLTExLjIsNDkuMi0yNy44YzEwLDE2LjcsMjguMywyNy44LDQ5LjIsMjcuOCAgIGMyMC44LDAsMzkuMS0xMS4yLDQ5LjItMjcuOGMxMCwxNi43LDI4LjMsMjcuOCw0OS4yLDI3LjhWNDkzLjZ6XFxcIiAvPjxwYXRoIGQ9XFxcIk04My45LDQ2OWgxNjMuOVYzMDUuMkg4My45VjQ2OXogTTEwMC4zLDM5NS4zaDU3LjR2NTcuNGgtNTcuNFYzOTUuM3ogTTE3NC4xLDQ1Mi42di01Ny40aDU3LjR2NTcuNEgxNzQuMXogTTIzMS40LDM3OC45ICAgaC01Ny40di01Ny40aDU3LjRWMzc4Ljl6IE0xNTcuNywzMjEuNXY1Ny40aC01Ny40di01Ny40SDE1Ny43elxcXCIgLz48cmVjdCB4PVxcXCIxNjUuOVxcXCIgeT1cXFwiMjMxLjRcXFwiIHdpZHRoPVxcXCIxNi40XFxcIiBoZWlnaHQ9XFxcIjE2LjRcXFwiIC8+PHJlY3QgeD1cXFwiMTMzLjFcXFwiIHk9XFxcIjIzMS40XFxcIiB3aWR0aD1cXFwiMTYuNFxcXCIgaGVpZ2h0PVxcXCIxNi40XFxcIiAvPjxyZWN0IHg9XFxcIjE5OC42XFxcIiB5PVxcXCIyMzEuNFxcXCIgd2lkdGg9XFxcIjE2LjRcXFwiIGhlaWdodD1cXFwiMTYuNFxcXCIgLz48L2c+PC9zeW1ib2w+XCJcbn0pO1xudmFyIHJlc3VsdCA9IHNwcml0ZS5hZGQoc3ltYm9sKTtcbmV4cG9ydCBkZWZhdWx0IHN5bWJvbFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2ltYWdlcy9pY29ucy9zdG9yZS5zdmdcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBTcHJpdGVTeW1ib2wgZnJvbSBcInN2Zy1iYWtlci1ydW50aW1lL2Jyb3dzZXItc3ltYm9sXCI7XG5pbXBvcnQgc3ByaXRlIGZyb20gXCJzdmctc3ByaXRlLWxvYWRlci9ydW50aW1lL2Jyb3dzZXItc3ByaXRlLmJ1aWxkXCI7XG52YXIgc3ltYm9sID0gbmV3IFNwcml0ZVN5bWJvbCh7XG4gIFwiaWRcIjogXCJzdG9yZTJcIixcbiAgXCJ1c2VcIjogXCJzdG9yZTItdXNhZ2VcIixcbiAgXCJ2aWV3Qm94XCI6IFwiMCAwIDczIDczXCIsXG4gIFwiY29udGVudFwiOiBcIjxzeW1ib2wgdmlld0JveD1cXFwiMCAwIDczIDczXFxcIiBpZD1cXFwic3RvcmUyXFxcIj48Zz48cGF0aCBkPVxcXCJNNzIuNSwxNC4zYzAtMC42LTAuMy0xLjItMC44LTEuNkw1NS40LDAuOWMtMC4zLTAuMi0wLjgtMC40LTEuMi0wLjRIMTguN2MtMC40LDAtMC44LDAuMS0xLjIsMC40TDEuMywxMi43ICAgYy0wLjUsMC40LTAuOCwxLTAuOCwxLjZjMCwwLDAsNy4yLDAsNy4yYzAsMS44LDAuNiwzLjUsMS43LDQuOHY0NC4yYzAsMS4xLDAuOSwyLDIsMmg2NC42YzEuMSwwLDItMC45LDItMlYyNi4zICAgYzEuMS0xLjMsMS43LTMsMS43LTQuOEM3Mi41LDIxLjUsNzIuNSwxNC4zLDcyLjUsMTQuM3ogTTUzLjYsNC41bDEwLjgsNy44SDYwbC03LjItNy44SDUzLjZ6IE01Ny4yLDE2LjN2NS4yYzAsMi0xLjYsMy43LTMuNywzLjcgICBjLTIsMC0zLjctMS42LTMuNy0zLjd2LTUuMkg1Ny4yeiBNNDcuNSw0LjVsNy4yLDcuOGgtNS41bC0zLjYtNy44SDQ3LjV6IE0zOC41LDQuNWgyLjZsMy42LDcuOGgtNi4yVjQuNXogTTM4LjUsMTYuM2g3LjN2NS4yICAgYzAsMi0xLjYsMy43LTMuNywzLjdjLTIsMC0zLjctMS42LTMuNy0zLjdWMTYuM3ogTTMxLjksNC41aDIuNnY3LjhoLTYuMkwzMS45LDQuNXogTTM0LjUsMTYuM3Y1LjJjMCwyLTEuNiwzLjctMy43LDMuNyAgIGMtMiwwLTMuNy0xLjYtMy43LTMuN3YtNS4ySDM0LjV6IE0yNS41LDQuNWgxLjlsLTMuNiw3LjhoLTUuNUwyNS41LDQuNXogTTIzLjIsMTYuM3Y1LjJjMCwyLTEuNiwzLjctMy43LDMuN2MtMiwwLTMuNy0xLjYtMy43LTMuNyAgIHYtNS4ySDIzLjJ6IE0xOS40LDQuNWgwLjdMMTMsMTIuM0g4LjZMMTkuNCw0LjV6IE00LjUsMjEuNXYtNS4yaDcuM3Y1LjJjMCwyLTEuNiwzLjctMy43LDMuN0M2LjEsMjUuMiw0LjUsMjMuNSw0LjUsMjEuNXogICAgTTMxLjksNjguNUgxNS40VjM2aDE2LjVWNjguNXogTTY2LjgsNjguNUgzNS45VjM0YzAtMS4xLTAuOS0yLTItMkgxMy40Yy0xLjEsMC0yLDAuOS0yLDJ2MzQuNUg2LjJWMjguOWMwLjYsMC4yLDEuMywwLjMsMiwwLjMgICBjMi4yLDAsNC4zLTEsNS43LTIuNWMxLjQsMS41LDMuNCwyLjUsNS43LDIuNWMyLjIsMCw0LjMtMSw1LjctMi41YzEuNCwxLjUsMy40LDIuNSw1LjcsMi41czQuMy0xLDUuNy0yLjVjMS40LDEuNSwzLjQsMi41LDUuNywyLjUgICBjMi4yLDAsNC4zLTEsNS43LTIuNWMxLjQsMS41LDMuNCwyLjUsNS43LDIuNWMyLjIsMCw0LjMtMSw1LjctMi41YzEuNCwxLjUsMy40LDIuNSw1LjcsMi41YzAuNywwLDEuMy0wLjEsMi0wLjNWNjguNXogTTY4LjUsMjEuNSAgIGMwLDItMS42LDMuNy0zLjcsMy43Yy0yLDAtMy43LTEuNi0zLjctMy43di01LjJoNy4zVjIxLjV6XFxcIiAvPjxwYXRoIGQ9XFxcIk02MC42LDM3LjRINDIuNGMtMS4xLDAtMiwwLjktMiwydjE1LjJjMCwxLjEsMC45LDIsMiwyaDE4LjJjMS4xLDAsMi0wLjksMi0yVjM5LjRDNjIuNiwzOC4zLDYxLjcsMzcuNCw2MC42LDM3LjR6ICAgIE01OC42LDUyLjZINDQuNFY0MS40aDE0LjJWNTIuNnpcXFwiIC8+PC9nPjwvc3ltYm9sPlwiXG59KTtcbnZhciByZXN1bHQgPSBzcHJpdGUuYWRkKHN5bWJvbCk7XG5leHBvcnQgZGVmYXVsdCBzeW1ib2xcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9pbWFnZXMvaWNvbnMvc3RvcmUyLnN2Z1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFNwcml0ZVN5bWJvbCBmcm9tIFwic3ZnLWJha2VyLXJ1bnRpbWUvYnJvd3Nlci1zeW1ib2xcIjtcbmltcG9ydCBzcHJpdGUgZnJvbSBcInN2Zy1zcHJpdGUtbG9hZGVyL3J1bnRpbWUvYnJvd3Nlci1zcHJpdGUuYnVpbGRcIjtcbnZhciBzeW1ib2wgPSBuZXcgU3ByaXRlU3ltYm9sKHtcbiAgXCJpZFwiOiBcInRhZ1wiLFxuICBcInVzZVwiOiBcInRhZy11c2FnZVwiLFxuICBcInZpZXdCb3hcIjogXCIwIDAgMTAwIDEwMFwiLFxuICBcImNvbnRlbnRcIjogXCI8c3ltYm9sIHZpZXdCb3g9XFxcIjAgMCAxMDAgMTAwXFxcIiBpZD1cXFwidGFnXFxcIj48ZyB0cmFuc2Zvcm09XFxcInRyYW5zbGF0ZSgwLC05NTIuMzYyMTgpXFxcIj48cGF0aCBkPVxcXCJtIDU0LjgxMjUsNyBjIC0wLjE4OTIxLDAuMDQyNjA4IC0wLjM2NTMzMiwwLjE0MTY3NzIgLTAuNSwwLjI4MTI1IGwgLTQ2LDQ1IEMgNy41Mzc1Njc2LDUzLjAzOTM1IDcsNTQuMTcwMDUgNyw1NS41MzEyNSBjIDAsMS4yNjk2IDAuNTEzNTA3MSwyLjM4ODQ1IDEuMjgxMjUsMy4xNTYyNSBsIDMzLDMzIEMgNDEuOTc3NDQyLDkyLjM4MzggNDIuODkyNzU3LDkzIDQ0LDkzIGMgMS4xNTM3NTMsMCAyLjAzMDc5MywtMC42NTMxNSAyLjY4NzUsLTEuMjgxMjUgbCA0NiwtNDQgQyA5Mi44ODI0MzgsNDcuNTM0MTk1IDkyLjk5Nzk4Niw0Ny4yNjg0MzUgOTMsNDcgTCA5Myw4IEMgOTIuOTk5OTQ4LDcuNDc2NDE1NSA5Mi41MjM1ODQsNy4wMDAwNTI0IDkyLDcgTCA1NSw3IGMgLTAuMDYyMzIsLTAuMDA1ODcgLTAuMTI1MTg0LC0wLjAwNTg3IC0wLjE4NzUsMCB6IE0gNTUuMzc1LDkgOTEsOSA5MSw0Ni41NjI1IDQ1LjMxMjUsOTAuMjUgQyA0NC44MzMwNDcsOTAuNzA4NiA0NC4zMzY5NjcsOTEgNDQsOTEgNDMuNjE2NTIzLDkxIDQzLjIxMzI1OCw5MC43NzU4NSA0Mi43MTg3NSw5MC4yODEyNSBsIC0zMywtMzMgQyA5LjMzODgzMjksNTYuOTAxMzUgOSw1Ni4yMjA3NSA5LDU1LjUzMTI1IDksNTQuNjY5MTUgOS4yOTQ4NTI0LDU0LjA3MTYgOS42ODc1LDUzLjY4NzUgeiBNIDc1LDE3IGMgLTQuNDA2NDM1LDAgLTgsMy41OTM1NyAtOCw4IDAsNC40MDY0NCAzLjU5MzU2Niw4IDgsOCA0LjQwNjQzNSwwIDgsLTMuNTkzNTYgOCwtOCAwLC00LjQwNjQzIC0zLjU5MzU2NSwtOCAtOCwtOCB6IG0gMCwyIGMgMy4zMjU1NTQsMCA2LDIuNjc0NDUgNiw2IDAsMy4zMjU1NSAtMi42NzQ0NDUsNiAtNiw2IC0zLjMyNTU1NCwwIC02LC0yLjY3NDQ1IC02LC02IDAsLTMuMzI1NTUgMi42NzQ0NDYsLTYgNiwtNiB6XFxcIiB0cmFuc2Zvcm09XFxcInRyYW5zbGF0ZSgwLDk1Mi4zNjIxOClcXFwiIG1hcmtlcj1cXFwibm9uZVxcXCIgdmlzaWJpbGl0eT1cXFwidmlzaWJsZVxcXCIgZGlzcGxheT1cXFwiaW5saW5lXFxcIiBvdmVyZmxvdz1cXFwidmlzaWJsZVxcXCIgLz48L2c+PC9zeW1ib2w+XCJcbn0pO1xudmFyIHJlc3VsdCA9IHNwcml0ZS5hZGQoc3ltYm9sKTtcbmV4cG9ydCBkZWZhdWx0IHN5bWJvbFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2ltYWdlcy9pY29ucy90YWcuc3ZnXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgU3ByaXRlU3ltYm9sIGZyb20gXCJzdmctYmFrZXItcnVudGltZS9icm93c2VyLXN5bWJvbFwiO1xuaW1wb3J0IHNwcml0ZSBmcm9tIFwic3ZnLXNwcml0ZS1sb2FkZXIvcnVudGltZS9icm93c2VyLXNwcml0ZS5idWlsZFwiO1xudmFyIHN5bWJvbCA9IG5ldyBTcHJpdGVTeW1ib2woe1xuICBcImlkXCI6IFwidG9wXCIsXG4gIFwidXNlXCI6IFwidG9wLXVzYWdlXCIsXG4gIFwidmlld0JveFwiOiBcIjAgMCA2MiA2MlwiLFxuICBcImNvbnRlbnRcIjogXCI8c3ltYm9sIHZpZXdCb3g9XFxcIjAgMCA2MiA2MlxcXCIgaWQ9XFxcInRvcFxcXCI+PGc+PGc+PHBhdGggZD1cXFwiTTMxLDM5LjFjLTEuOSwwLTMuOC0wLjUtNS41LTEuNUMxNy4yLDMyLjcsMTIsMjMuNywxMiwxNFYwaDM4djE0YzAsOS42LTUuMiwxOC43LTEzLjUsMjMuNkMzNC44LDM4LjYsMzIuOSwzOS4xLDMxLDM5LjF6ICAgICBNMTQsMnYxMmMwLDguOSw0LjgsMTcuMywxMi41LDIxLjhjMi44LDEuNiw2LjIsMS42LDksMEM0My4yLDMxLjMsNDgsMjMsNDgsMTRWMkgxNHpcXFwiIC8+PC9nPjxnPjxwYXRoIGQ9XFxcIk00Myw1NEgxOXYtNmgyNFY1NHogTTIxLDUyaDIwdi0ySDIxVjUyelxcXCIgLz48L2c+PGc+PHBhdGggZD1cXFwiTTQ1LDYySDE3VjUyaDI4VjYyeiBNMTksNjBoMjR2LTZIMTlWNjB6XFxcIiAvPjwvZz48Zz48cGF0aCBkPVxcXCJNMzUsNTBoLThWMzYuMmwxLjMsMC40YzEuOCwwLjYsMy42LDAuNiw1LjQsMGwxLjMtMC40VjUweiBNMjksNDhoNHYtOS4xYy0xLjMsMC4yLTIuNywwLjItNCwwVjQ4elxcXCIgLz48L2c+PGc+PGc+PHBhdGggZD1cXFwiTTE5LjksMzAuN0wxNi42LDI5QzcuNiwyNC4zLDIsMTUuMSwyLDVWNGgxMnYxMGMwLDQuOCwxLjQsOS41LDMuOSwxMy42TDE5LjksMzAuN3ogTTQsNmMwLjMsNy44LDQuMiwxNC45LDEwLjQsMTkuMyAgICAgQzEyLjgsMjEuOCwxMiwxNy45LDEyLDE0VjZINHpcXFwiIC8+PC9nPjxnPjxwYXRoIGQ9XFxcIk00Mi4xLDMwLjdsMi0zLjFDNDYuNiwyMy41LDQ4LDE4LjgsNDgsMTRWNGgxMnYxYzAsMTAuMS01LjYsMTkuMy0xNC42LDI0TDQyLjEsMzAuN3ogTTUwLDZ2OGMwLDMuOS0wLjgsNy44LTIuNSwxMS4zICAgICBDNTMuOCwyMC45LDU3LjcsMTMuOCw1OCw2SDUwelxcXCIgLz48L2c+PC9nPjxnPjxwYXRoIGQ9XFxcIk0zOS4zLDI5LjJsLTguMy02bC04LjMsNmwzLjItOS43bC04LjMtNmgxMC4yTDMxLDMuOGwzLjIsOS43aDEwLjJsLTguMyw2TDM5LjMsMjkuMnogTTMxLDIwLjdsNC41LDMuMmwtMS43LTUuMmw0LjUtMy4yICAgIGgtNS41TDMxLDEwLjJsLTEuNyw1LjJoLTUuNWw0LjUsMy4yTDI2LjUsMjRMMzEsMjAuN3pcXFwiIC8+PC9nPjwvZz48L3N5bWJvbD5cIlxufSk7XG52YXIgcmVzdWx0ID0gc3ByaXRlLmFkZChzeW1ib2wpO1xuZXhwb3J0IGRlZmF1bHQgc3ltYm9sXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvaW1hZ2VzL2ljb25zL3RvcC5zdmdcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImZ1bmN0aW9uIGF1dG9jb21wbGV0ZShpbnB1dCwgbGF0SW5wdXQsIGxuZ0lucHV0KXtcclxuICAgIGlmKCFpbnB1dCkgcmV0dXJuO1xyXG4gICAgY29uc3QgZHJvcGRvd24gPSBuZXcgZ29vZ2xlLm1hcHMucGxhY2VzLkF1dG9jb21wbGV0ZShpbnB1dClcclxuXHJcbiAgICBkcm9wZG93bi5hZGRMaXN0ZW5lcigncGxhY2VfY2hhbmdlZCcsICgpID0+IHtcclxuICAgICAgICBjb25zdCBwbGFjZSA9IGRyb3Bkb3duLmdldFBsYWNlKCk7XHJcbiAgICAgICAgbGF0SW5wdXQudmFsdWUgPSBwbGFjZS5nZW9tZXRyeS5sb2NhdGlvbi5sYXQoKTtcclxuICAgICAgICBsbmdJbnB1dC52YWx1ZSA9IHBsYWNlLmdlb21ldHJ5LmxvY2F0aW9uLmxuZygpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhpbnB1dClcclxuXHJcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGUua2V5Q29kZSA9PT0gMTMpIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhdXRvY29tcGxldGU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHB1YmxpYy9qcy9tb2R1bGVzL2F1dG9jb21wbGV0ZS5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJpbmQgPSByZXF1aXJlKCcuL2hlbHBlcnMvYmluZCcpO1xuXG4vKmdsb2JhbCB0b1N0cmluZzp0cnVlKi9cblxuLy8gdXRpbHMgaXMgYSBsaWJyYXJ5IG9mIGdlbmVyaWMgaGVscGVyIGZ1bmN0aW9ucyBub24tc3BlY2lmaWMgdG8gYXhpb3NcblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlcih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZvcm1EYXRhXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gRm9ybURhdGEsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Zvcm1EYXRhKHZhbCkge1xuICByZXR1cm4gKHR5cGVvZiBGb3JtRGF0YSAhPT0gJ3VuZGVmaW5lZCcpICYmICh2YWwgaW5zdGFuY2VvZiBGb3JtRGF0YSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlclZpZXcodmFsKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmICgodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJykgJiYgKEFycmF5QnVmZmVyLmlzVmlldykpIHtcbiAgICByZXN1bHQgPSBBcnJheUJ1ZmZlci5pc1ZpZXcodmFsKTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSAodmFsKSAmJiAodmFsLmJ1ZmZlcikgJiYgKHZhbC5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcik7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmluZ1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyaW5nLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJpbmcodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnc3RyaW5nJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIE51bWJlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgTnVtYmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNOdW1iZXIodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnbnVtYmVyJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyB1bmRlZmluZWRcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdW5kZWZpbmVkLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBPYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBPYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIERhdGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIERhdGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0RhdGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IERhdGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZpbGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZpbGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0ZpbGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZpbGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEJsb2JcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEJsb2IsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Jsb2IodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEJsb2JdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGdW5jdGlvbiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJlYW1cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmVhbSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyZWFtKHZhbCkge1xuICByZXR1cm4gaXNPYmplY3QodmFsKSAmJiBpc0Z1bmN0aW9uKHZhbC5waXBlKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1VSTFNlYXJjaFBhcmFtcyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiBVUkxTZWFyY2hQYXJhbXMgIT09ICd1bmRlZmluZWQnICYmIHZhbCBpbnN0YW5jZW9mIFVSTFNlYXJjaFBhcmFtcztcbn1cblxuLyoqXG4gKiBUcmltIGV4Y2VzcyB3aGl0ZXNwYWNlIG9mZiB0aGUgYmVnaW5uaW5nIGFuZCBlbmQgb2YgYSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIFRoZSBTdHJpbmcgdG8gdHJpbVxuICogQHJldHVybnMge1N0cmluZ30gVGhlIFN0cmluZyBmcmVlZCBvZiBleGNlc3Mgd2hpdGVzcGFjZVxuICovXG5mdW5jdGlvbiB0cmltKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMqLywgJycpLnJlcGxhY2UoL1xccyokLywgJycpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiB3ZSdyZSBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudFxuICpcbiAqIFRoaXMgYWxsb3dzIGF4aW9zIHRvIHJ1biBpbiBhIHdlYiB3b3JrZXIsIGFuZCByZWFjdC1uYXRpdmUuXG4gKiBCb3RoIGVudmlyb25tZW50cyBzdXBwb3J0IFhNTEh0dHBSZXF1ZXN0LCBidXQgbm90IGZ1bGx5IHN0YW5kYXJkIGdsb2JhbHMuXG4gKlxuICogd2ViIHdvcmtlcnM6XG4gKiAgdHlwZW9mIHdpbmRvdyAtPiB1bmRlZmluZWRcbiAqICB0eXBlb2YgZG9jdW1lbnQgLT4gdW5kZWZpbmVkXG4gKlxuICogcmVhY3QtbmF0aXZlOlxuICogIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IC0+IHVuZGVmaW5lZFxuICovXG5mdW5jdGlvbiBpc1N0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgcmV0dXJuIChcbiAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCA9PT0gJ2Z1bmN0aW9uJ1xuICApO1xufVxuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBhbiBBcnJheSBvciBhbiBPYmplY3QgaW52b2tpbmcgYSBmdW5jdGlvbiBmb3IgZWFjaCBpdGVtLlxuICpcbiAqIElmIGBvYmpgIGlzIGFuIEFycmF5IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwgaW5kZXgsIGFuZCBjb21wbGV0ZSBhcnJheSBmb3IgZWFjaCBpdGVtLlxuICpcbiAqIElmICdvYmonIGlzIGFuIE9iamVjdCBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGtleSwgYW5kIGNvbXBsZXRlIG9iamVjdCBmb3IgZWFjaCBwcm9wZXJ0eS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdHxBcnJheX0gb2JqIFRoZSBvYmplY3QgdG8gaXRlcmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGNhbGxiYWNrIHRvIGludm9rZSBmb3IgZWFjaCBpdGVtXG4gKi9cbmZ1bmN0aW9uIGZvckVhY2gob2JqLCBmbikge1xuICAvLyBEb24ndCBib3RoZXIgaWYgbm8gdmFsdWUgcHJvdmlkZWRcbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIEZvcmNlIGFuIGFycmF5IGlmIG5vdCBhbHJlYWR5IHNvbWV0aGluZyBpdGVyYWJsZVxuICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcgJiYgIWlzQXJyYXkob2JqKSkge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIG9iaiA9IFtvYmpdO1xuICB9XG5cbiAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBhcnJheSB2YWx1ZXNcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IG9iai5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2ldLCBpLCBvYmopO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgb2JqZWN0IGtleXNcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgICBmbi5jYWxsKG51bGwsIG9ialtrZXldLCBrZXksIG9iaik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQWNjZXB0cyB2YXJhcmdzIGV4cGVjdGluZyBlYWNoIGFyZ3VtZW50IHRvIGJlIGFuIG9iamVjdCwgdGhlblxuICogaW1tdXRhYmx5IG1lcmdlcyB0aGUgcHJvcGVydGllcyBvZiBlYWNoIG9iamVjdCBhbmQgcmV0dXJucyByZXN1bHQuXG4gKlxuICogV2hlbiBtdWx0aXBsZSBvYmplY3RzIGNvbnRhaW4gdGhlIHNhbWUga2V5IHRoZSBsYXRlciBvYmplY3QgaW5cbiAqIHRoZSBhcmd1bWVudHMgbGlzdCB3aWxsIHRha2UgcHJlY2VkZW5jZS5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqIGBgYGpzXG4gKiB2YXIgcmVzdWx0ID0gbWVyZ2Uoe2ZvbzogMTIzfSwge2ZvbzogNDU2fSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQuZm9vKTsgLy8gb3V0cHV0cyA0NTZcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmoxIE9iamVjdCB0byBtZXJnZVxuICogQHJldHVybnMge09iamVjdH0gUmVzdWx0IG9mIGFsbCBtZXJnZSBwcm9wZXJ0aWVzXG4gKi9cbmZ1bmN0aW9uIG1lcmdlKC8qIG9iajEsIG9iajIsIG9iajMsIC4uLiAqLykge1xuICB2YXIgcmVzdWx0ID0ge307XG4gIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHR5cGVvZiByZXN1bHRba2V5XSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gbWVyZ2UocmVzdWx0W2tleV0sIHZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdFtrZXldID0gdmFsO1xuICAgIH1cbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwLCBsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGZvckVhY2goYXJndW1lbnRzW2ldLCBhc3NpZ25WYWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBFeHRlbmRzIG9iamVjdCBhIGJ5IG11dGFibHkgYWRkaW5nIHRvIGl0IHRoZSBwcm9wZXJ0aWVzIG9mIG9iamVjdCBiLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhIFRoZSBvYmplY3QgdG8gYmUgZXh0ZW5kZWRcbiAqIEBwYXJhbSB7T2JqZWN0fSBiIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb21cbiAqIEBwYXJhbSB7T2JqZWN0fSB0aGlzQXJnIFRoZSBvYmplY3QgdG8gYmluZCBmdW5jdGlvbiB0b1xuICogQHJldHVybiB7T2JqZWN0fSBUaGUgcmVzdWx0aW5nIHZhbHVlIG9mIG9iamVjdCBhXG4gKi9cbmZ1bmN0aW9uIGV4dGVuZChhLCBiLCB0aGlzQXJnKSB7XG4gIGZvckVhY2goYiwgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodGhpc0FyZyAmJiB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhW2tleV0gPSBiaW5kKHZhbCwgdGhpc0FyZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFba2V5XSA9IHZhbDtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gYTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGlzQXJyYXk6IGlzQXJyYXksXG4gIGlzQXJyYXlCdWZmZXI6IGlzQXJyYXlCdWZmZXIsXG4gIGlzRm9ybURhdGE6IGlzRm9ybURhdGEsXG4gIGlzQXJyYXlCdWZmZXJWaWV3OiBpc0FycmF5QnVmZmVyVmlldyxcbiAgaXNTdHJpbmc6IGlzU3RyaW5nLFxuICBpc051bWJlcjogaXNOdW1iZXIsXG4gIGlzT2JqZWN0OiBpc09iamVjdCxcbiAgaXNVbmRlZmluZWQ6IGlzVW5kZWZpbmVkLFxuICBpc0RhdGU6IGlzRGF0ZSxcbiAgaXNGaWxlOiBpc0ZpbGUsXG4gIGlzQmxvYjogaXNCbG9iLFxuICBpc0Z1bmN0aW9uOiBpc0Z1bmN0aW9uLFxuICBpc1N0cmVhbTogaXNTdHJlYW0sXG4gIGlzVVJMU2VhcmNoUGFyYW1zOiBpc1VSTFNlYXJjaFBhcmFtcyxcbiAgaXNTdGFuZGFyZEJyb3dzZXJFbnY6IGlzU3RhbmRhcmRCcm93c2VyRW52LFxuICBmb3JFYWNoOiBmb3JFYWNoLFxuICBtZXJnZTogbWVyZ2UsXG4gIGV4dGVuZDogZXh0ZW5kLFxuICB0cmltOiB0cmltXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBub3JtYWxpemVIZWFkZXJOYW1lID0gcmVxdWlyZSgnLi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUnKTtcblxudmFyIFBST1RFQ1RJT05fUFJFRklYID0gL15cXClcXF1cXH0nLD9cXG4vO1xudmFyIERFRkFVTFRfQ09OVEVOVF9UWVBFID0ge1xuICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbn07XG5cbmZ1bmN0aW9uIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCB2YWx1ZSkge1xuICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnMpICYmIHV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddKSkge1xuICAgIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gdmFsdWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGVmYXVsdEFkYXB0ZXIoKSB7XG4gIHZhciBhZGFwdGVyO1xuICBpZiAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIEZvciBicm93c2VycyB1c2UgWEhSIGFkYXB0ZXJcbiAgICBhZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVycy94aHInKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBGb3Igbm9kZSB1c2UgSFRUUCBhZGFwdGVyXG4gICAgYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcnMvaHR0cCcpO1xuICB9XG4gIHJldHVybiBhZGFwdGVyO1xufVxuXG52YXIgZGVmYXVsdHMgPSB7XG4gIGFkYXB0ZXI6IGdldERlZmF1bHRBZGFwdGVyKCksXG5cbiAgdHJhbnNmb3JtUmVxdWVzdDogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlcXVlc3QoZGF0YSwgaGVhZGVycykge1xuICAgIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgJ0NvbnRlbnQtVHlwZScpO1xuICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0FycmF5QnVmZmVyKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc1N0cmVhbShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNGaWxlKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0Jsb2IoZGF0YSlcbiAgICApIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNBcnJheUJ1ZmZlclZpZXcoZGF0YSkpIHtcbiAgICAgIHJldHVybiBkYXRhLmJ1ZmZlcjtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKGRhdGEpKSB7XG4gICAgICBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PXV0Zi04Jyk7XG4gICAgICByZXR1cm4gZGF0YS50b1N0cmluZygpO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNPYmplY3QoZGF0YSkpIHtcbiAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04Jyk7XG4gICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICB0cmFuc2Zvcm1SZXNwb25zZTogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlc3BvbnNlKGRhdGEpIHtcbiAgICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICBkYXRhID0gZGF0YS5yZXBsYWNlKFBST1RFQ1RJT05fUFJFRklYLCAnJyk7XG4gICAgICB0cnkge1xuICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHsgLyogSWdub3JlICovIH1cbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuXG4gIHRpbWVvdXQ6IDAsXG5cbiAgeHNyZkNvb2tpZU5hbWU6ICdYU1JGLVRPS0VOJyxcbiAgeHNyZkhlYWRlck5hbWU6ICdYLVhTUkYtVE9LRU4nLFxuXG4gIG1heENvbnRlbnRMZW5ndGg6IC0xLFxuXG4gIHZhbGlkYXRlU3RhdHVzOiBmdW5jdGlvbiB2YWxpZGF0ZVN0YXR1cyhzdGF0dXMpIHtcbiAgICByZXR1cm4gc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCAzMDA7XG4gIH1cbn07XG5cbmRlZmF1bHRzLmhlYWRlcnMgPSB7XG4gIGNvbW1vbjoge1xuICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJ1xuICB9XG59O1xuXG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJ10sIGZ1bmN0aW9uIGZvckVhY2hNZWh0b2ROb0RhdGEobWV0aG9kKSB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHt9O1xufSk7XG5cbnV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHV0aWxzLm1lcmdlKERFRkFVTFRfQ09OVEVOVF9UWVBFKTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlZmF1bHRzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2RlZmF1bHRzLmpzXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYmluZChmbiwgdGhpc0FyZykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcCgpIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07XG4gICAgfVxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9iaW5kLmpzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciBzZXR0bGUgPSByZXF1aXJlKCcuLy4uL2NvcmUvc2V0dGxlJyk7XG52YXIgYnVpbGRVUkwgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvYnVpbGRVUkwnKTtcbnZhciBwYXJzZUhlYWRlcnMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvcGFyc2VIZWFkZXJzJyk7XG52YXIgaXNVUkxTYW1lT3JpZ2luID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbicpO1xudmFyIGNyZWF0ZUVycm9yID0gcmVxdWlyZSgnLi4vY29yZS9jcmVhdGVFcnJvcicpO1xudmFyIGJ0b2EgPSAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmJ0b2EgJiYgd2luZG93LmJ0b2EuYmluZCh3aW5kb3cpKSB8fCByZXF1aXJlKCcuLy4uL2hlbHBlcnMvYnRvYScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHhockFkYXB0ZXIoY29uZmlnKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiBkaXNwYXRjaFhoclJlcXVlc3QocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0gY29uZmlnLmRhdGE7XG4gICAgdmFyIHJlcXVlc3RIZWFkZXJzID0gY29uZmlnLmhlYWRlcnM7XG5cbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShyZXF1ZXN0RGF0YSkpIHtcbiAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1snQ29udGVudC1UeXBlJ107IC8vIExldCB0aGUgYnJvd3NlciBzZXQgaXRcbiAgICB9XG5cbiAgICB2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIHZhciBsb2FkRXZlbnQgPSAnb25yZWFkeXN0YXRlY2hhbmdlJztcbiAgICB2YXIgeERvbWFpbiA9IGZhbHNlO1xuXG4gICAgLy8gRm9yIElFIDgvOSBDT1JTIHN1cHBvcnRcbiAgICAvLyBPbmx5IHN1cHBvcnRzIFBPU1QgYW5kIEdFVCBjYWxscyBhbmQgZG9lc24ndCByZXR1cm5zIHRoZSByZXNwb25zZSBoZWFkZXJzLlxuICAgIC8vIERPTidUIGRvIHRoaXMgZm9yIHRlc3RpbmcgYi9jIFhNTEh0dHBSZXF1ZXN0IGlzIG1vY2tlZCwgbm90IFhEb21haW5SZXF1ZXN0LlxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Rlc3QnICYmXG4gICAgICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIHdpbmRvdy5YRG9tYWluUmVxdWVzdCAmJiAhKCd3aXRoQ3JlZGVudGlhbHMnIGluIHJlcXVlc3QpICYmXG4gICAgICAgICFpc1VSTFNhbWVPcmlnaW4oY29uZmlnLnVybCkpIHtcbiAgICAgIHJlcXVlc3QgPSBuZXcgd2luZG93LlhEb21haW5SZXF1ZXN0KCk7XG4gICAgICBsb2FkRXZlbnQgPSAnb25sb2FkJztcbiAgICAgIHhEb21haW4gPSB0cnVlO1xuICAgICAgcmVxdWVzdC5vbnByb2dyZXNzID0gZnVuY3Rpb24gaGFuZGxlUHJvZ3Jlc3MoKSB7fTtcbiAgICAgIHJlcXVlc3Qub250aW1lb3V0ID0gZnVuY3Rpb24gaGFuZGxlVGltZW91dCgpIHt9O1xuICAgIH1cblxuICAgIC8vIEhUVFAgYmFzaWMgYXV0aGVudGljYXRpb25cbiAgICBpZiAoY29uZmlnLmF1dGgpIHtcbiAgICAgIHZhciB1c2VybmFtZSA9IGNvbmZpZy5hdXRoLnVzZXJuYW1lIHx8ICcnO1xuICAgICAgdmFyIHBhc3N3b3JkID0gY29uZmlnLmF1dGgucGFzc3dvcmQgfHwgJyc7XG4gICAgICByZXF1ZXN0SGVhZGVycy5BdXRob3JpemF0aW9uID0gJ0Jhc2ljICcgKyBidG9hKHVzZXJuYW1lICsgJzonICsgcGFzc3dvcmQpO1xuICAgIH1cblxuICAgIHJlcXVlc3Qub3Blbihjb25maWcubWV0aG9kLnRvVXBwZXJDYXNlKCksIGJ1aWxkVVJMKGNvbmZpZy51cmwsIGNvbmZpZy5wYXJhbXMsIGNvbmZpZy5wYXJhbXNTZXJpYWxpemVyKSwgdHJ1ZSk7XG5cbiAgICAvLyBTZXQgdGhlIHJlcXVlc3QgdGltZW91dCBpbiBNU1xuICAgIHJlcXVlc3QudGltZW91dCA9IGNvbmZpZy50aW1lb3V0O1xuXG4gICAgLy8gTGlzdGVuIGZvciByZWFkeSBzdGF0ZVxuICAgIHJlcXVlc3RbbG9hZEV2ZW50XSA9IGZ1bmN0aW9uIGhhbmRsZUxvYWQoKSB7XG4gICAgICBpZiAoIXJlcXVlc3QgfHwgKHJlcXVlc3QucmVhZHlTdGF0ZSAhPT0gNCAmJiAheERvbWFpbikpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBUaGUgcmVxdWVzdCBlcnJvcmVkIG91dCBhbmQgd2UgZGlkbid0IGdldCBhIHJlc3BvbnNlLCB0aGlzIHdpbGwgYmVcbiAgICAgIC8vIGhhbmRsZWQgYnkgb25lcnJvciBpbnN0ZWFkXG4gICAgICAvLyBXaXRoIG9uZSBleGNlcHRpb246IHJlcXVlc3QgdGhhdCB1c2luZyBmaWxlOiBwcm90b2NvbCwgbW9zdCBicm93c2Vyc1xuICAgICAgLy8gd2lsbCByZXR1cm4gc3RhdHVzIGFzIDAgZXZlbiB0aG91Z2ggaXQncyBhIHN1Y2Nlc3NmdWwgcmVxdWVzdFxuICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAwICYmICEocmVxdWVzdC5yZXNwb25zZVVSTCAmJiByZXF1ZXN0LnJlc3BvbnNlVVJMLmluZGV4T2YoJ2ZpbGU6JykgPT09IDApKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gUHJlcGFyZSB0aGUgcmVzcG9uc2VcbiAgICAgIHZhciByZXNwb25zZUhlYWRlcnMgPSAnZ2V0QWxsUmVzcG9uc2VIZWFkZXJzJyBpbiByZXF1ZXN0ID8gcGFyc2VIZWFkZXJzKHJlcXVlc3QuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpIDogbnVsbDtcbiAgICAgIHZhciByZXNwb25zZURhdGEgPSAhY29uZmlnLnJlc3BvbnNlVHlwZSB8fCBjb25maWcucmVzcG9uc2VUeXBlID09PSAndGV4dCcgPyByZXF1ZXN0LnJlc3BvbnNlVGV4dCA6IHJlcXVlc3QucmVzcG9uc2U7XG4gICAgICB2YXIgcmVzcG9uc2UgPSB7XG4gICAgICAgIGRhdGE6IHJlc3BvbnNlRGF0YSxcbiAgICAgICAgLy8gSUUgc2VuZHMgMTIyMyBpbnN0ZWFkIG9mIDIwNCAoaHR0cHM6Ly9naXRodWIuY29tL216YWJyaXNraWUvYXhpb3MvaXNzdWVzLzIwMSlcbiAgICAgICAgc3RhdHVzOiByZXF1ZXN0LnN0YXR1cyA9PT0gMTIyMyA/IDIwNCA6IHJlcXVlc3Quc3RhdHVzLFxuICAgICAgICBzdGF0dXNUZXh0OiByZXF1ZXN0LnN0YXR1cyA9PT0gMTIyMyA/ICdObyBDb250ZW50JyA6IHJlcXVlc3Quc3RhdHVzVGV4dCxcbiAgICAgICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICAgICAgICBjb25maWc6IGNvbmZpZyxcbiAgICAgICAgcmVxdWVzdDogcmVxdWVzdFxuICAgICAgfTtcblxuICAgICAgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgcmVzcG9uc2UpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIGxvdyBsZXZlbCBuZXR3b3JrIGVycm9yc1xuICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uIGhhbmRsZUVycm9yKCkge1xuICAgICAgLy8gUmVhbCBlcnJvcnMgYXJlIGhpZGRlbiBmcm9tIHVzIGJ5IHRoZSBicm93c2VyXG4gICAgICAvLyBvbmVycm9yIHNob3VsZCBvbmx5IGZpcmUgaWYgaXQncyBhIG5ldHdvcmsgZXJyb3JcbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcignTmV0d29yayBFcnJvcicsIGNvbmZpZykpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIHRpbWVvdXRcbiAgICByZXF1ZXN0Lm9udGltZW91dCA9IGZ1bmN0aW9uIGhhbmRsZVRpbWVvdXQoKSB7XG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ3RpbWVvdXQgb2YgJyArIGNvbmZpZy50aW1lb3V0ICsgJ21zIGV4Y2VlZGVkJywgY29uZmlnLCAnRUNPTk5BQk9SVEVEJykpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gQWRkIHhzcmYgaGVhZGVyXG4gICAgLy8gVGhpcyBpcyBvbmx5IGRvbmUgaWYgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnQuXG4gICAgLy8gU3BlY2lmaWNhbGx5IG5vdCBpZiB3ZSdyZSBpbiBhIHdlYiB3b3JrZXIsIG9yIHJlYWN0LW5hdGl2ZS5cbiAgICBpZiAodXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSkge1xuICAgICAgdmFyIGNvb2tpZXMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvY29va2llcycpO1xuXG4gICAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAgIHZhciB4c3JmVmFsdWUgPSAoY29uZmlnLndpdGhDcmVkZW50aWFscyB8fCBpc1VSTFNhbWVPcmlnaW4oY29uZmlnLnVybCkpICYmIGNvbmZpZy54c3JmQ29va2llTmFtZSA/XG4gICAgICAgICAgY29va2llcy5yZWFkKGNvbmZpZy54c3JmQ29va2llTmFtZSkgOlxuICAgICAgICAgIHVuZGVmaW5lZDtcblxuICAgICAgaWYgKHhzcmZWYWx1ZSkge1xuICAgICAgICByZXF1ZXN0SGVhZGVyc1tjb25maWcueHNyZkhlYWRlck5hbWVdID0geHNyZlZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFkZCBoZWFkZXJzIHRvIHRoZSByZXF1ZXN0XG4gICAgaWYgKCdzZXRSZXF1ZXN0SGVhZGVyJyBpbiByZXF1ZXN0KSB7XG4gICAgICB1dGlscy5mb3JFYWNoKHJlcXVlc3RIZWFkZXJzLCBmdW5jdGlvbiBzZXRSZXF1ZXN0SGVhZGVyKHZhbCwga2V5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgcmVxdWVzdERhdGEgPT09ICd1bmRlZmluZWQnICYmIGtleS50b0xvd2VyQ2FzZSgpID09PSAnY29udGVudC10eXBlJykge1xuICAgICAgICAgIC8vIFJlbW92ZSBDb250ZW50LVR5cGUgaWYgZGF0YSBpcyB1bmRlZmluZWRcbiAgICAgICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNba2V5XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBPdGhlcndpc2UgYWRkIGhlYWRlciB0byB0aGUgcmVxdWVzdFxuICAgICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihrZXksIHZhbCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEFkZCB3aXRoQ3JlZGVudGlhbHMgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoY29uZmlnLndpdGhDcmVkZW50aWFscykge1xuICAgICAgcmVxdWVzdC53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIEFkZCByZXNwb25zZVR5cGUgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSBjb25maWcucmVzcG9uc2VUeXBlO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAocmVxdWVzdC5yZXNwb25zZVR5cGUgIT09ICdqc29uJykge1xuICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgcHJvZ3Jlc3MgaWYgbmVlZGVkXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25Eb3dubG9hZFByb2dyZXNzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgLy8gTm90IGFsbCBicm93c2VycyBzdXBwb3J0IHVwbG9hZCBldmVudHNcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5vblVwbG9hZFByb2dyZXNzID09PSAnZnVuY3Rpb24nICYmIHJlcXVlc3QudXBsb2FkKSB7XG4gICAgICByZXF1ZXN0LnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vblVwbG9hZFByb2dyZXNzKTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgICAvLyBIYW5kbGUgY2FuY2VsbGF0aW9uXG4gICAgICBjb25maWcuY2FuY2VsVG9rZW4ucHJvbWlzZS50aGVuKGZ1bmN0aW9uIG9uQ2FuY2VsZWQoY2FuY2VsKSB7XG4gICAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcXVlc3QuYWJvcnQoKTtcbiAgICAgICAgcmVqZWN0KGNhbmNlbCk7XG4gICAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAocmVxdWVzdERhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVxdWVzdERhdGEgPSBudWxsO1xuICAgIH1cblxuICAgIC8vIFNlbmQgdGhlIHJlcXVlc3RcbiAgICByZXF1ZXN0LnNlbmQocmVxdWVzdERhdGEpO1xuICB9KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYWRhcHRlcnMveGhyLmpzXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBlbmhhbmNlRXJyb3IgPSByZXF1aXJlKCcuL2VuaGFuY2VFcnJvcicpO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgbWVzc2FnZSwgY29uZmlnLCBlcnJvciBjb2RlLCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIGVycm9yIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuIEAgQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgY3JlYXRlZCBlcnJvci5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGVFcnJvcihtZXNzYWdlLCBjb25maWcsIGNvZGUsIHJlc3BvbnNlKSB7XG4gIHZhciBlcnJvciA9IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgcmV0dXJuIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXNwb25zZSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvY3JlYXRlRXJyb3IuanNcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0NhbmNlbCh2YWx1ZSkge1xuICByZXR1cm4gISEodmFsdWUgJiYgdmFsdWUuX19DQU5DRUxfXyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9pc0NhbmNlbC5qc1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEEgYENhbmNlbGAgaXMgYW4gb2JqZWN0IHRoYXQgaXMgdGhyb3duIHdoZW4gYW4gb3BlcmF0aW9uIGlzIGNhbmNlbGVkLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtzdHJpbmc9fSBtZXNzYWdlIFRoZSBtZXNzYWdlLlxuICovXG5mdW5jdGlvbiBDYW5jZWwobWVzc2FnZSkge1xuICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xufVxuXG5DYW5jZWwucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiAnQ2FuY2VsJyArICh0aGlzLm1lc3NhZ2UgPyAnOiAnICsgdGhpcy5tZXNzYWdlIDogJycpO1xufTtcblxuQ2FuY2VsLnByb3RvdHlwZS5fX0NBTkNFTF9fID0gdHJ1ZTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW5jZWw7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbC5qc1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IGRvbXB1cmlmeSBmcm9tICdkb21wdXJpZnknO1xyXG5cclxuZnVuY3Rpb24gc2VhcmNoUmVzdWx0cyhzdG9yZXMpe1xyXG4gIHJldHVybiBzdG9yZXMubWFwKHN0b3JlID0+IHtcclxuICAgIHJldHVybiBgXHJcbiAgICAgIDxhIGhyZWY9XCIvc3RvcmUvJHtzdG9yZS5zbHVnfVwiIGNsYXNzPVwic2VhcmNoX19yZXN1bHRcIj5cclxuICAgICAgICA8c3Ryb25nPiR7c3RvcmUubmFtZX08L3N0cm9uZz5cclxuICAgICAgPC9hPlxyXG4gICAgYFxyXG4gIH0pLmpvaW4oJycpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHR5cGUoc2VhcmNoKXtcclxuICBpZighc2VhcmNoKSByZXR1cm47XHJcblxyXG4gIGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0W25hbWU9J3NlYXJjaCddXCIpO1xyXG4gIGNvbnN0IHNlYXJjaFJlc3VsdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hfX3Jlc3VsdHMnKTtcclxuXHJcblxyXG4gIHNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcclxuICAgIGlmKCF0aGlzLnZhbHVlKXtcclxuICAgICAgc2VhcmNoUmVzdWx0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHNlYXJjaFJlc3VsdC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHJcbiAgICBheGlvc1xyXG4gICAgICAuZ2V0KGAvYXBpL3NlYXJjaD9xPSR7dGhpcy52YWx1ZX1gKVxyXG4gICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIGlmKHJlcy5kYXRhLmxlbmd0aCl7XHJcbiAgICAgICAgICBzZWFyY2hSZXN1bHQuaW5uZXJIVE1MID0gZG9tcHVyaWZ5LnNhbml0aXplKHNlYXJjaFJlc3VsdHMocmVzLmRhdGEpKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2VhcmNoUmVzdWx0LmlubmVySFRNTCA9IGRvbXB1cmlmeS5zYW5pdGl6ZShgPGRpdiBjbGFzcz1cInNlYXJjaF9fcmVzdWx0XCI+IE5vIHJlc3VsdHMgZm9yICR7dGhpcy52YWx1ZX08L2Rpdj5gKVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSlcclxuICB9KVxyXG5cclxuICBzZWFyY2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB7XHJcbiAgICBpZiAoIVszOCwgNDAsIDEzXS5pbmNsdWRlcyhlLmtleUNvZGUpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGFjdGl2ZUNsYXNzID0gJ3NlYXJjaF9fcmVzdWx0LS1hY3RpdmUnO1xyXG4gICAgY29uc3QgY3VycmVudCA9IHNlYXJjaC5xdWVyeVNlbGVjdG9yKGAuJHthY3RpdmVDbGFzc31gKTtcclxuICAgIGNvbnN0IGl0ZW1zID0gc2VhcmNoLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWFyY2hfX3Jlc3VsdCcpO1xyXG4gICAgbGV0IG5leHQ7XHJcbiAgICBpZiAoZS5rZXlDb2RlID09PSA0MCAmJiBjdXJyZW50KSB7XHJcbiAgICAgIG5leHQgPSBjdXJyZW50Lm5leHRFbGVtZW50U2libGluZyB8fCBpdGVtc1swXTtcclxuICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSA0MCkge1xyXG4gICAgICBuZXh0ID0gaXRlbXNbMF07XHJcbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMzggJiYgY3VycmVudCkge1xyXG4gICAgICBuZXh0ID0gY3VycmVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nIHx8IGl0ZW1zW2l0ZW1zLmxlbmd0aCAtIDFdXHJcbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMzgpIHtcclxuICAgICAgbmV4dCA9IGl0ZW1zW2l0ZW1zLmxlbmd0aCAtIDFdO1xyXG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDEzICYmIGN1cnJlbnQuaHJlZikge1xyXG4gICAgICB3aW5kb3cubG9jYXRpb24gPSBjdXJyZW50LmhyZWY7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChjdXJyZW50KSB7XHJcbiAgICAgIGN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZShhY3RpdmVDbGFzcyk7XHJcbiAgICB9XHJcbiAgICBuZXh0LmNsYXNzTGlzdC5hZGQoYWN0aXZlQ2xhc3MpO1xyXG4gIH0pO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHB1YmxpYy9qcy9tb2R1bGVzL3R5cGUuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL2F4aW9zJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xudmFyIGJpbmQgPSByZXF1aXJlKCcuL2hlbHBlcnMvYmluZCcpO1xudmFyIEF4aW9zID0gcmVxdWlyZSgnLi9jb3JlL0F4aW9zJyk7XG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuL2RlZmF1bHRzJyk7XG5cbi8qKlxuICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGRlZmF1bHRDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqIEByZXR1cm4ge0F4aW9zfSBBIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICovXG5mdW5jdGlvbiBjcmVhdGVJbnN0YW5jZShkZWZhdWx0Q29uZmlnKSB7XG4gIHZhciBjb250ZXh0ID0gbmV3IEF4aW9zKGRlZmF1bHRDb25maWcpO1xuICB2YXIgaW5zdGFuY2UgPSBiaW5kKEF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0LCBjb250ZXh0KTtcblxuICAvLyBDb3B5IGF4aW9zLnByb3RvdHlwZSB0byBpbnN0YW5jZVxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIEF4aW9zLnByb3RvdHlwZSwgY29udGV4dCk7XG5cbiAgLy8gQ29weSBjb250ZXh0IHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyBDcmVhdGUgdGhlIGRlZmF1bHQgaW5zdGFuY2UgdG8gYmUgZXhwb3J0ZWRcbnZhciBheGlvcyA9IGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRzKTtcblxuLy8gRXhwb3NlIEF4aW9zIGNsYXNzIHRvIGFsbG93IGNsYXNzIGluaGVyaXRhbmNlXG5heGlvcy5BeGlvcyA9IEF4aW9zO1xuXG4vLyBGYWN0b3J5IGZvciBjcmVhdGluZyBuZXcgaW5zdGFuY2VzXG5heGlvcy5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaW5zdGFuY2VDb25maWcpIHtcbiAgcmV0dXJuIGNyZWF0ZUluc3RhbmNlKHV0aWxzLm1lcmdlKGRlZmF1bHRzLCBpbnN0YW5jZUNvbmZpZykpO1xufTtcblxuLy8gRXhwb3NlIENhbmNlbCAmIENhbmNlbFRva2VuXG5heGlvcy5DYW5jZWwgPSByZXF1aXJlKCcuL2NhbmNlbC9DYW5jZWwnKTtcbmF4aW9zLkNhbmNlbFRva2VuID0gcmVxdWlyZSgnLi9jYW5jZWwvQ2FuY2VsVG9rZW4nKTtcbmF4aW9zLmlzQ2FuY2VsID0gcmVxdWlyZSgnLi9jYW5jZWwvaXNDYW5jZWwnKTtcblxuLy8gRXhwb3NlIGFsbC9zcHJlYWRcbmF4aW9zLmFsbCA9IGZ1bmN0aW9uIGFsbChwcm9taXNlcykge1xuICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xufTtcbmF4aW9zLnNwcmVhZCA9IHJlcXVpcmUoJy4vaGVscGVycy9zcHJlYWQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBheGlvcztcblxuLy8gQWxsb3cgdXNlIG9mIGRlZmF1bHQgaW1wb3J0IHN5bnRheCBpbiBUeXBlU2NyaXB0XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gYXhpb3M7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYXhpb3MuanNcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi8uLi9kZWZhdWx0cycpO1xudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIEludGVyY2VwdG9yTWFuYWdlciA9IHJlcXVpcmUoJy4vSW50ZXJjZXB0b3JNYW5hZ2VyJyk7XG52YXIgZGlzcGF0Y2hSZXF1ZXN0ID0gcmVxdWlyZSgnLi9kaXNwYXRjaFJlcXVlc3QnKTtcbnZhciBpc0Fic29sdXRlVVJMID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwnKTtcbnZhciBjb21iaW5lVVJMcyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9jb21iaW5lVVJMcycpO1xuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBpbnN0YW5jZUNvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICovXG5mdW5jdGlvbiBBeGlvcyhpbnN0YW5jZUNvbmZpZykge1xuICB0aGlzLmRlZmF1bHRzID0gaW5zdGFuY2VDb25maWc7XG4gIHRoaXMuaW50ZXJjZXB0b3JzID0ge1xuICAgIHJlcXVlc3Q6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKSxcbiAgICByZXNwb25zZTogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpXG4gIH07XG59XG5cbi8qKlxuICogRGlzcGF0Y2ggYSByZXF1ZXN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHNwZWNpZmljIGZvciB0aGlzIHJlcXVlc3QgKG1lcmdlZCB3aXRoIHRoaXMuZGVmYXVsdHMpXG4gKi9cbkF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0ID0gZnVuY3Rpb24gcmVxdWVzdChjb25maWcpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIC8vIEFsbG93IGZvciBheGlvcygnZXhhbXBsZS91cmwnWywgY29uZmlnXSkgYSBsYSBmZXRjaCBBUElcbiAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uZmlnID0gdXRpbHMubWVyZ2Uoe1xuICAgICAgdXJsOiBhcmd1bWVudHNbMF1cbiAgICB9LCBhcmd1bWVudHNbMV0pO1xuICB9XG5cbiAgY29uZmlnID0gdXRpbHMubWVyZ2UoZGVmYXVsdHMsIHRoaXMuZGVmYXVsdHMsIHsgbWV0aG9kOiAnZ2V0JyB9LCBjb25maWcpO1xuXG4gIC8vIFN1cHBvcnQgYmFzZVVSTCBjb25maWdcbiAgaWYgKGNvbmZpZy5iYXNlVVJMICYmICFpc0Fic29sdXRlVVJMKGNvbmZpZy51cmwpKSB7XG4gICAgY29uZmlnLnVybCA9IGNvbWJpbmVVUkxzKGNvbmZpZy5iYXNlVVJMLCBjb25maWcudXJsKTtcbiAgfVxuXG4gIC8vIEhvb2sgdXAgaW50ZXJjZXB0b3JzIG1pZGRsZXdhcmVcbiAgdmFyIGNoYWluID0gW2Rpc3BhdGNoUmVxdWVzdCwgdW5kZWZpbmVkXTtcbiAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoY29uZmlnKTtcblxuICB0aGlzLmludGVyY2VwdG9ycy5yZXF1ZXN0LmZvckVhY2goZnVuY3Rpb24gdW5zaGlmdFJlcXVlc3RJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICBjaGFpbi51bnNoaWZ0KGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICB9KTtcblxuICB0aGlzLmludGVyY2VwdG9ycy5yZXNwb25zZS5mb3JFYWNoKGZ1bmN0aW9uIHB1c2hSZXNwb25zZUludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgIGNoYWluLnB1c2goaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gIH0pO1xuXG4gIHdoaWxlIChjaGFpbi5sZW5ndGgpIHtcbiAgICBwcm9taXNlID0gcHJvbWlzZS50aGVuKGNoYWluLnNoaWZ0KCksIGNoYWluLnNoaWZ0KCkpO1xuICB9XG5cbiAgcmV0dXJuIHByb21pc2U7XG59O1xuXG4vLyBQcm92aWRlIGFsaWFzZXMgZm9yIHN1cHBvcnRlZCByZXF1ZXN0IG1ldGhvZHNcbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih1cmwsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXRpbHMubWVyZ2UoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIHVybDogdXJsXG4gICAgfSkpO1xuICB9O1xufSk7XG5cbnV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odXJsLCBkYXRhLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHV0aWxzLm1lcmdlKGNvbmZpZyB8fCB7fSwge1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICB1cmw6IHVybCxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KSk7XG4gIH07XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBBeGlvcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zLmpzXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCBub3JtYWxpemVkTmFtZSkge1xuICB1dGlscy5mb3JFYWNoKGhlYWRlcnMsIGZ1bmN0aW9uIHByb2Nlc3NIZWFkZXIodmFsdWUsIG5hbWUpIHtcbiAgICBpZiAobmFtZSAhPT0gbm9ybWFsaXplZE5hbWUgJiYgbmFtZS50b1VwcGVyQ2FzZSgpID09PSBub3JtYWxpemVkTmFtZS50b1VwcGVyQ2FzZSgpKSB7XG4gICAgICBoZWFkZXJzW25vcm1hbGl6ZWROYW1lXSA9IHZhbHVlO1xuICAgICAgZGVsZXRlIGhlYWRlcnNbbmFtZV07XG4gICAgfVxuICB9KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lLmpzXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBjcmVhdGVFcnJvciA9IHJlcXVpcmUoJy4vY3JlYXRlRXJyb3InKTtcblxuLyoqXG4gKiBSZXNvbHZlIG9yIHJlamVjdCBhIFByb21pc2UgYmFzZWQgb24gcmVzcG9uc2Ugc3RhdHVzLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlc29sdmUgQSBmdW5jdGlvbiB0aGF0IHJlc29sdmVzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0IEEgZnVuY3Rpb24gdGhhdCByZWplY3RzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtvYmplY3R9IHJlc3BvbnNlIFRoZSByZXNwb25zZS5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSkge1xuICB2YXIgdmFsaWRhdGVTdGF0dXMgPSByZXNwb25zZS5jb25maWcudmFsaWRhdGVTdGF0dXM7XG4gIC8vIE5vdGU6IHN0YXR1cyBpcyBub3QgZXhwb3NlZCBieSBYRG9tYWluUmVxdWVzdFxuICBpZiAoIXJlc3BvbnNlLnN0YXR1cyB8fCAhdmFsaWRhdGVTdGF0dXMgfHwgdmFsaWRhdGVTdGF0dXMocmVzcG9uc2Uuc3RhdHVzKSkge1xuICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICB9IGVsc2Uge1xuICAgIHJlamVjdChjcmVhdGVFcnJvcihcbiAgICAgICdSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyBjb2RlICcgKyByZXNwb25zZS5zdGF0dXMsXG4gICAgICByZXNwb25zZS5jb25maWcsXG4gICAgICBudWxsLFxuICAgICAgcmVzcG9uc2VcbiAgICApKTtcbiAgfVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3NldHRsZS5qc1xuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFVwZGF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgY29uZmlnLCBlcnJvciBjb2RlLCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtFcnJvcn0gZXJyb3IgVGhlIGVycm9yIHRvIHVwZGF0ZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXG4gQCBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBlcnJvci5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlbmhhbmNlRXJyb3IoZXJyb3IsIGNvbmZpZywgY29kZSwgcmVzcG9uc2UpIHtcbiAgZXJyb3IuY29uZmlnID0gY29uZmlnO1xuICBpZiAoY29kZSkge1xuICAgIGVycm9yLmNvZGUgPSBjb2RlO1xuICB9XG4gIGVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gIHJldHVybiBlcnJvcjtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9lbmhhbmNlRXJyb3IuanNcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5mdW5jdGlvbiBlbmNvZGUodmFsKSB7XG4gIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQodmFsKS5cbiAgICByZXBsYWNlKC8lNDAvZ2ksICdAJykuXG4gICAgcmVwbGFjZSgvJTNBL2dpLCAnOicpLlxuICAgIHJlcGxhY2UoLyUyNC9nLCAnJCcpLlxuICAgIHJlcGxhY2UoLyUyQy9naSwgJywnKS5cbiAgICByZXBsYWNlKC8lMjAvZywgJysnKS5cbiAgICByZXBsYWNlKC8lNUIvZ2ksICdbJykuXG4gICAgcmVwbGFjZSgvJTVEL2dpLCAnXScpO1xufVxuXG4vKipcbiAqIEJ1aWxkIGEgVVJMIGJ5IGFwcGVuZGluZyBwYXJhbXMgdG8gdGhlIGVuZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIGJhc2Ugb2YgdGhlIHVybCAoZS5nLiwgaHR0cDovL3d3dy5nb29nbGUuY29tKVxuICogQHBhcmFtIHtvYmplY3R9IFtwYXJhbXNdIFRoZSBwYXJhbXMgdG8gYmUgYXBwZW5kZWRcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBmb3JtYXR0ZWQgdXJsXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYnVpbGRVUkwodXJsLCBwYXJhbXMsIHBhcmFtc1NlcmlhbGl6ZXIpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIGlmICghcGFyYW1zKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHZhciBzZXJpYWxpemVkUGFyYW1zO1xuICBpZiAocGFyYW1zU2VyaWFsaXplcikge1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJhbXNTZXJpYWxpemVyKHBhcmFtcyk7XG4gIH0gZWxzZSBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMocGFyYW1zKSkge1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJhbXMudG9TdHJpbmcoKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgcGFydHMgPSBbXTtcblxuICAgIHV0aWxzLmZvckVhY2gocGFyYW1zLCBmdW5jdGlvbiBzZXJpYWxpemUodmFsLCBrZXkpIHtcbiAgICAgIGlmICh2YWwgPT09IG51bGwgfHwgdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodXRpbHMuaXNBcnJheSh2YWwpKSB7XG4gICAgICAgIGtleSA9IGtleSArICdbXSc7XG4gICAgICB9XG5cbiAgICAgIGlmICghdXRpbHMuaXNBcnJheSh2YWwpKSB7XG4gICAgICAgIHZhbCA9IFt2YWxdO1xuICAgICAgfVxuXG4gICAgICB1dGlscy5mb3JFYWNoKHZhbCwgZnVuY3Rpb24gcGFyc2VWYWx1ZSh2KSB7XG4gICAgICAgIGlmICh1dGlscy5pc0RhdGUodikpIHtcbiAgICAgICAgICB2ID0gdi50b0lTT1N0cmluZygpO1xuICAgICAgICB9IGVsc2UgaWYgKHV0aWxzLmlzT2JqZWN0KHYpKSB7XG4gICAgICAgICAgdiA9IEpTT04uc3RyaW5naWZ5KHYpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnRzLnB1c2goZW5jb2RlKGtleSkgKyAnPScgKyBlbmNvZGUodikpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFydHMuam9pbignJicpO1xuICB9XG5cbiAgaWYgKHNlcmlhbGl6ZWRQYXJhbXMpIHtcbiAgICB1cmwgKz0gKHVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKSArIHNlcmlhbGl6ZWRQYXJhbXM7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2J1aWxkVVJMLmpzXG4vLyBtb2R1bGUgaWQgPSAzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuLyoqXG4gKiBQYXJzZSBoZWFkZXJzIGludG8gYW4gb2JqZWN0XG4gKlxuICogYGBgXG4gKiBEYXRlOiBXZWQsIDI3IEF1ZyAyMDE0IDA4OjU4OjQ5IEdNVFxuICogQ29udGVudC1UeXBlOiBhcHBsaWNhdGlvbi9qc29uXG4gKiBDb25uZWN0aW9uOiBrZWVwLWFsaXZlXG4gKiBUcmFuc2Zlci1FbmNvZGluZzogY2h1bmtlZFxuICogYGBgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGhlYWRlcnMgSGVhZGVycyBuZWVkaW5nIHRvIGJlIHBhcnNlZFxuICogQHJldHVybnMge09iamVjdH0gSGVhZGVycyBwYXJzZWQgaW50byBhbiBvYmplY3RcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJzZUhlYWRlcnMoaGVhZGVycykge1xuICB2YXIgcGFyc2VkID0ge307XG4gIHZhciBrZXk7XG4gIHZhciB2YWw7XG4gIHZhciBpO1xuXG4gIGlmICghaGVhZGVycykgeyByZXR1cm4gcGFyc2VkOyB9XG5cbiAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLnNwbGl0KCdcXG4nKSwgZnVuY3Rpb24gcGFyc2VyKGxpbmUpIHtcbiAgICBpID0gbGluZS5pbmRleE9mKCc6Jyk7XG4gICAga2V5ID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cigwLCBpKSkudG9Mb3dlckNhc2UoKTtcbiAgICB2YWwgPSB1dGlscy50cmltKGxpbmUuc3Vic3RyKGkgKyAxKSk7XG5cbiAgICBpZiAoa2V5KSB7XG4gICAgICBwYXJzZWRba2V5XSA9IHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gKyAnLCAnICsgdmFsIDogdmFsO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9wYXJzZUhlYWRlcnMuanNcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XG5cbiAgLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIGhhdmUgZnVsbCBzdXBwb3J0IG9mIHRoZSBBUElzIG5lZWRlZCB0byB0ZXN0XG4gIC8vIHdoZXRoZXIgdGhlIHJlcXVlc3QgVVJMIGlzIG9mIHRoZSBzYW1lIG9yaWdpbiBhcyBjdXJyZW50IGxvY2F0aW9uLlxuICAoZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgIHZhciBtc2llID0gLyhtc2llfHRyaWRlbnQpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICB2YXIgdXJsUGFyc2luZ05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgdmFyIG9yaWdpblVSTDtcblxuICAgIC8qKlxuICAgICogUGFyc2UgYSBVUkwgdG8gZGlzY292ZXIgaXQncyBjb21wb25lbnRzXG4gICAgKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHVybCBUaGUgVVJMIHRvIGJlIHBhcnNlZFxuICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAqL1xuICAgIGZ1bmN0aW9uIHJlc29sdmVVUkwodXJsKSB7XG4gICAgICB2YXIgaHJlZiA9IHVybDtcblxuICAgICAgaWYgKG1zaWUpIHtcbiAgICAgICAgLy8gSUUgbmVlZHMgYXR0cmlidXRlIHNldCB0d2ljZSB0byBub3JtYWxpemUgcHJvcGVydGllc1xuICAgICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcbiAgICAgICAgaHJlZiA9IHVybFBhcnNpbmdOb2RlLmhyZWY7XG4gICAgICB9XG5cbiAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuXG4gICAgICAvLyB1cmxQYXJzaW5nTm9kZSBwcm92aWRlcyB0aGUgVXJsVXRpbHMgaW50ZXJmYWNlIC0gaHR0cDovL3VybC5zcGVjLndoYXR3Zy5vcmcvI3VybHV0aWxzXG4gICAgICByZXR1cm4ge1xuICAgICAgICBocmVmOiB1cmxQYXJzaW5nTm9kZS5ocmVmLFxuICAgICAgICBwcm90b2NvbDogdXJsUGFyc2luZ05vZGUucHJvdG9jb2wgPyB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbC5yZXBsYWNlKC86JC8sICcnKSA6ICcnLFxuICAgICAgICBob3N0OiB1cmxQYXJzaW5nTm9kZS5ob3N0LFxuICAgICAgICBzZWFyY2g6IHVybFBhcnNpbmdOb2RlLnNlYXJjaCA/IHVybFBhcnNpbmdOb2RlLnNlYXJjaC5yZXBsYWNlKC9eXFw/LywgJycpIDogJycsXG4gICAgICAgIGhhc2g6IHVybFBhcnNpbmdOb2RlLmhhc2ggPyB1cmxQYXJzaW5nTm9kZS5oYXNoLnJlcGxhY2UoL14jLywgJycpIDogJycsXG4gICAgICAgIGhvc3RuYW1lOiB1cmxQYXJzaW5nTm9kZS5ob3N0bmFtZSxcbiAgICAgICAgcG9ydDogdXJsUGFyc2luZ05vZGUucG9ydCxcbiAgICAgICAgcGF0aG5hbWU6ICh1cmxQYXJzaW5nTm9kZS5wYXRobmFtZS5jaGFyQXQoMCkgPT09ICcvJykgP1xuICAgICAgICAgICAgICAgICAgdXJsUGFyc2luZ05vZGUucGF0aG5hbWUgOlxuICAgICAgICAgICAgICAgICAgJy8nICsgdXJsUGFyc2luZ05vZGUucGF0aG5hbWVcbiAgICAgIH07XG4gICAgfVxuXG4gICAgb3JpZ2luVVJMID0gcmVzb2x2ZVVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG5cbiAgICAvKipcbiAgICAqIERldGVybWluZSBpZiBhIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luIGFzIHRoZSBjdXJyZW50IGxvY2F0aW9uXG4gICAgKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHJlcXVlc3RVUkwgVGhlIFVSTCB0byB0ZXN0XG4gICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiBVUkwgc2hhcmVzIHRoZSBzYW1lIG9yaWdpbiwgb3RoZXJ3aXNlIGZhbHNlXG4gICAgKi9cbiAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKHJlcXVlc3RVUkwpIHtcbiAgICAgIHZhciBwYXJzZWQgPSAodXRpbHMuaXNTdHJpbmcocmVxdWVzdFVSTCkpID8gcmVzb2x2ZVVSTChyZXF1ZXN0VVJMKSA6IHJlcXVlc3RVUkw7XG4gICAgICByZXR1cm4gKHBhcnNlZC5wcm90b2NvbCA9PT0gb3JpZ2luVVJMLnByb3RvY29sICYmXG4gICAgICAgICAgICBwYXJzZWQuaG9zdCA9PT0gb3JpZ2luVVJMLmhvc3QpO1xuICAgIH07XG4gIH0pKCkgOlxuXG4gIC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudnMgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gIChmdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbigpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gIH0pKClcbik7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc1VSTFNhbWVPcmlnaW4uanNcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuLy8gYnRvYSBwb2x5ZmlsbCBmb3IgSUU8MTAgY291cnRlc3kgaHR0cHM6Ly9naXRodWIuY29tL2RhdmlkY2hhbWJlcnMvQmFzZTY0LmpzXG5cbnZhciBjaGFycyA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvPSc7XG5cbmZ1bmN0aW9uIEUoKSB7XG4gIHRoaXMubWVzc2FnZSA9ICdTdHJpbmcgY29udGFpbnMgYW4gaW52YWxpZCBjaGFyYWN0ZXInO1xufVxuRS5wcm90b3R5cGUgPSBuZXcgRXJyb3I7XG5FLnByb3RvdHlwZS5jb2RlID0gNTtcbkUucHJvdG90eXBlLm5hbWUgPSAnSW52YWxpZENoYXJhY3RlckVycm9yJztcblxuZnVuY3Rpb24gYnRvYShpbnB1dCkge1xuICB2YXIgc3RyID0gU3RyaW5nKGlucHV0KTtcbiAgdmFyIG91dHB1dCA9ICcnO1xuICBmb3IgKFxuICAgIC8vIGluaXRpYWxpemUgcmVzdWx0IGFuZCBjb3VudGVyXG4gICAgdmFyIGJsb2NrLCBjaGFyQ29kZSwgaWR4ID0gMCwgbWFwID0gY2hhcnM7XG4gICAgLy8gaWYgdGhlIG5leHQgc3RyIGluZGV4IGRvZXMgbm90IGV4aXN0OlxuICAgIC8vICAgY2hhbmdlIHRoZSBtYXBwaW5nIHRhYmxlIHRvIFwiPVwiXG4gICAgLy8gICBjaGVjayBpZiBkIGhhcyBubyBmcmFjdGlvbmFsIGRpZ2l0c1xuICAgIHN0ci5jaGFyQXQoaWR4IHwgMCkgfHwgKG1hcCA9ICc9JywgaWR4ICUgMSk7XG4gICAgLy8gXCI4IC0gaWR4ICUgMSAqIDhcIiBnZW5lcmF0ZXMgdGhlIHNlcXVlbmNlIDIsIDQsIDYsIDhcbiAgICBvdXRwdXQgKz0gbWFwLmNoYXJBdCg2MyAmIGJsb2NrID4+IDggLSBpZHggJSAxICogOClcbiAgKSB7XG4gICAgY2hhckNvZGUgPSBzdHIuY2hhckNvZGVBdChpZHggKz0gMyAvIDQpO1xuICAgIGlmIChjaGFyQ29kZSA+IDB4RkYpIHtcbiAgICAgIHRocm93IG5ldyBFKCk7XG4gICAgfVxuICAgIGJsb2NrID0gYmxvY2sgPDwgOCB8IGNoYXJDb2RlO1xuICB9XG4gIHJldHVybiBvdXRwdXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYnRvYTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2J0b2EuanNcbi8vIG1vZHVsZSBpZCA9IDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XG5cbiAgLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIHN1cHBvcnQgZG9jdW1lbnQuY29va2llXG4gIChmdW5jdGlvbiBzdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZShuYW1lLCB2YWx1ZSwgZXhwaXJlcywgcGF0aCwgZG9tYWluLCBzZWN1cmUpIHtcbiAgICAgICAgdmFyIGNvb2tpZSA9IFtdO1xuICAgICAgICBjb29raWUucHVzaChuYW1lICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSk7XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzTnVtYmVyKGV4cGlyZXMpKSB7XG4gICAgICAgICAgY29va2llLnB1c2goJ2V4cGlyZXM9JyArIG5ldyBEYXRlKGV4cGlyZXMpLnRvR01UU3RyaW5nKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHBhdGgpKSB7XG4gICAgICAgICAgY29va2llLnB1c2goJ3BhdGg9JyArIHBhdGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGRvbWFpbikpIHtcbiAgICAgICAgICBjb29raWUucHVzaCgnZG9tYWluPScgKyBkb21haW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlY3VyZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGNvb2tpZS5wdXNoKCdzZWN1cmUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGNvb2tpZS5qb2luKCc7ICcpO1xuICAgICAgfSxcblxuICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZChuYW1lKSB7XG4gICAgICAgIHZhciBtYXRjaCA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaChuZXcgUmVnRXhwKCcoXnw7XFxcXHMqKSgnICsgbmFtZSArICcpPShbXjtdKiknKSk7XG4gICAgICAgIHJldHVybiAobWF0Y2ggPyBkZWNvZGVVUklDb21wb25lbnQobWF0Y2hbM10pIDogbnVsbCk7XG4gICAgICB9LFxuXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZShuYW1lKSB7XG4gICAgICAgIHRoaXMud3JpdGUobmFtZSwgJycsIERhdGUubm93KCkgLSA4NjQwMDAwMCk7XG4gICAgICB9XG4gICAgfTtcbiAgfSkoKSA6XG5cbiAgLy8gTm9uIHN0YW5kYXJkIGJyb3dzZXIgZW52ICh3ZWIgd29ya2VycywgcmVhY3QtbmF0aXZlKSBsYWNrIG5lZWRlZCBzdXBwb3J0LlxuICAoZnVuY3Rpb24gbm9uU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgIHJldHVybiB7XG4gICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUoKSB7fSxcbiAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQoKSB7IHJldHVybiBudWxsOyB9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH0pKClcbik7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb29raWVzLmpzXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuZnVuY3Rpb24gSW50ZXJjZXB0b3JNYW5hZ2VyKCkge1xuICB0aGlzLmhhbmRsZXJzID0gW107XG59XG5cbi8qKlxuICogQWRkIGEgbmV3IGludGVyY2VwdG9yIHRvIHRoZSBzdGFja1xuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bGZpbGxlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGB0aGVuYCBmb3IgYSBgUHJvbWlzZWBcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHJlamVjdGAgZm9yIGEgYFByb21pc2VgXG4gKlxuICogQHJldHVybiB7TnVtYmVyfSBBbiBJRCB1c2VkIHRvIHJlbW92ZSBpbnRlcmNlcHRvciBsYXRlclxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLnVzZSA9IGZ1bmN0aW9uIHVzZShmdWxmaWxsZWQsIHJlamVjdGVkKSB7XG4gIHRoaXMuaGFuZGxlcnMucHVzaCh7XG4gICAgZnVsZmlsbGVkOiBmdWxmaWxsZWQsXG4gICAgcmVqZWN0ZWQ6IHJlamVjdGVkXG4gIH0pO1xuICByZXR1cm4gdGhpcy5oYW5kbGVycy5sZW5ndGggLSAxO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYW4gaW50ZXJjZXB0b3IgZnJvbSB0aGUgc3RhY2tcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gaWQgVGhlIElEIHRoYXQgd2FzIHJldHVybmVkIGJ5IGB1c2VgXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZWplY3QgPSBmdW5jdGlvbiBlamVjdChpZCkge1xuICBpZiAodGhpcy5oYW5kbGVyc1tpZF0pIHtcbiAgICB0aGlzLmhhbmRsZXJzW2lkXSA9IG51bGw7XG4gIH1cbn07XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFsbCB0aGUgcmVnaXN0ZXJlZCBpbnRlcmNlcHRvcnNcbiAqXG4gKiBUaGlzIG1ldGhvZCBpcyBwYXJ0aWN1bGFybHkgdXNlZnVsIGZvciBza2lwcGluZyBvdmVyIGFueVxuICogaW50ZXJjZXB0b3JzIHRoYXQgbWF5IGhhdmUgYmVjb21lIGBudWxsYCBjYWxsaW5nIGBlamVjdGAuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGNhbGwgZm9yIGVhY2ggaW50ZXJjZXB0b3JcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gZm9yRWFjaChmbikge1xuICB1dGlscy5mb3JFYWNoKHRoaXMuaGFuZGxlcnMsIGZ1bmN0aW9uIGZvckVhY2hIYW5kbGVyKGgpIHtcbiAgICBpZiAoaCAhPT0gbnVsbCkge1xuICAgICAgZm4oaCk7XG4gICAgfVxuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSW50ZXJjZXB0b3JNYW5hZ2VyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvSW50ZXJjZXB0b3JNYW5hZ2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciB0cmFuc2Zvcm1EYXRhID0gcmVxdWlyZSgnLi90cmFuc2Zvcm1EYXRhJyk7XG52YXIgaXNDYW5jZWwgPSByZXF1aXJlKCcuLi9jYW5jZWwvaXNDYW5jZWwnKTtcbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4uL2RlZmF1bHRzJyk7XG5cbi8qKlxuICogVGhyb3dzIGEgYENhbmNlbGAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqL1xuZnVuY3Rpb24gdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpIHtcbiAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgIGNvbmZpZy5jYW5jZWxUb2tlbi50aHJvd0lmUmVxdWVzdGVkKCk7XG4gIH1cbn1cblxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3QgdG8gdGhlIHNlcnZlciB1c2luZyB0aGUgY29uZmlndXJlZCBhZGFwdGVyLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyB0aGF0IGlzIHRvIGJlIHVzZWQgZm9yIHRoZSByZXF1ZXN0XG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gVGhlIFByb21pc2UgdG8gYmUgZnVsZmlsbGVkXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGlzcGF0Y2hSZXF1ZXN0KGNvbmZpZykge1xuICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgLy8gRW5zdXJlIGhlYWRlcnMgZXhpc3RcbiAgY29uZmlnLmhlYWRlcnMgPSBjb25maWcuaGVhZGVycyB8fCB7fTtcblxuICAvLyBUcmFuc2Zvcm0gcmVxdWVzdCBkYXRhXG4gIGNvbmZpZy5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICBjb25maWcuZGF0YSxcbiAgICBjb25maWcuaGVhZGVycyxcbiAgICBjb25maWcudHJhbnNmb3JtUmVxdWVzdFxuICApO1xuXG4gIC8vIEZsYXR0ZW4gaGVhZGVyc1xuICBjb25maWcuaGVhZGVycyA9IHV0aWxzLm1lcmdlKFxuICAgIGNvbmZpZy5oZWFkZXJzLmNvbW1vbiB8fCB7fSxcbiAgICBjb25maWcuaGVhZGVyc1tjb25maWcubWV0aG9kXSB8fCB7fSxcbiAgICBjb25maWcuaGVhZGVycyB8fCB7fVxuICApO1xuXG4gIHV0aWxzLmZvckVhY2goXG4gICAgWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAncG9zdCcsICdwdXQnLCAncGF0Y2gnLCAnY29tbW9uJ10sXG4gICAgZnVuY3Rpb24gY2xlYW5IZWFkZXJDb25maWcobWV0aG9kKSB7XG4gICAgICBkZWxldGUgY29uZmlnLmhlYWRlcnNbbWV0aG9kXTtcbiAgICB9XG4gICk7XG5cbiAgdmFyIGFkYXB0ZXIgPSBjb25maWcuYWRhcHRlciB8fCBkZWZhdWx0cy5hZGFwdGVyO1xuXG4gIHJldHVybiBhZGFwdGVyKGNvbmZpZykudGhlbihmdW5jdGlvbiBvbkFkYXB0ZXJSZXNvbHV0aW9uKHJlc3BvbnNlKSB7XG4gICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcbiAgICByZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICAgIHJlc3BvbnNlLmRhdGEsXG4gICAgICByZXNwb25zZS5oZWFkZXJzLFxuICAgICAgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlXG4gICAgKTtcblxuICAgIHJldHVybiByZXNwb25zZTtcbiAgfSwgZnVuY3Rpb24gb25BZGFwdGVyUmVqZWN0aW9uKHJlYXNvbikge1xuICAgIGlmICghaXNDYW5jZWwocmVhc29uKSkge1xuICAgICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gICAgICAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuICAgICAgaWYgKHJlYXNvbiAmJiByZWFzb24ucmVzcG9uc2UpIHtcbiAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhLFxuICAgICAgICAgIHJlYXNvbi5yZXNwb25zZS5oZWFkZXJzLFxuICAgICAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZWFzb24pO1xuICB9KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9kaXNwYXRjaFJlcXVlc3QuanNcbi8vIG1vZHVsZSBpZCA9IDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG4vKipcbiAqIFRyYW5zZm9ybSB0aGUgZGF0YSBmb3IgYSByZXF1ZXN0IG9yIGEgcmVzcG9uc2VcbiAqXG4gKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IGRhdGEgVGhlIGRhdGEgdG8gYmUgdHJhbnNmb3JtZWRcbiAqIEBwYXJhbSB7QXJyYXl9IGhlYWRlcnMgVGhlIGhlYWRlcnMgZm9yIHRoZSByZXF1ZXN0IG9yIHJlc3BvbnNlXG4gKiBAcGFyYW0ge0FycmF5fEZ1bmN0aW9ufSBmbnMgQSBzaW5nbGUgZnVuY3Rpb24gb3IgQXJyYXkgb2YgZnVuY3Rpb25zXG4gKiBAcmV0dXJucyB7Kn0gVGhlIHJlc3VsdGluZyB0cmFuc2Zvcm1lZCBkYXRhXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdHJhbnNmb3JtRGF0YShkYXRhLCBoZWFkZXJzLCBmbnMpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIHV0aWxzLmZvckVhY2goZm5zLCBmdW5jdGlvbiB0cmFuc2Zvcm0oZm4pIHtcbiAgICBkYXRhID0gZm4oZGF0YSwgaGVhZGVycyk7XG4gIH0pO1xuXG4gIHJldHVybiBkYXRhO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3RyYW5zZm9ybURhdGEuanNcbi8vIG1vZHVsZSBpZCA9IDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBVUkwgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQWJzb2x1dGVVUkwodXJsKSB7XG4gIC8vIEEgVVJMIGlzIGNvbnNpZGVyZWQgYWJzb2x1dGUgaWYgaXQgYmVnaW5zIHdpdGggXCI8c2NoZW1lPjovL1wiIG9yIFwiLy9cIiAocHJvdG9jb2wtcmVsYXRpdmUgVVJMKS5cbiAgLy8gUkZDIDM5ODYgZGVmaW5lcyBzY2hlbWUgbmFtZSBhcyBhIHNlcXVlbmNlIG9mIGNoYXJhY3RlcnMgYmVnaW5uaW5nIHdpdGggYSBsZXR0ZXIgYW5kIGZvbGxvd2VkXG4gIC8vIGJ5IGFueSBjb21iaW5hdGlvbiBvZiBsZXR0ZXJzLCBkaWdpdHMsIHBsdXMsIHBlcmlvZCwgb3IgaHlwaGVuLlxuICByZXR1cm4gL14oW2Etel1bYS16XFxkXFwrXFwtXFwuXSo6KT9cXC9cXC8vaS50ZXN0KHVybCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTC5qc1xuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgVVJMIGJ5IGNvbWJpbmluZyB0aGUgc3BlY2lmaWVkIFVSTHNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVSTCBUaGUgYmFzZSBVUkxcbiAqIEBwYXJhbSB7c3RyaW5nfSByZWxhdGl2ZVVSTCBUaGUgcmVsYXRpdmUgVVJMXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY29tYmluZWQgVVJMXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY29tYmluZVVSTHMoYmFzZVVSTCwgcmVsYXRpdmVVUkwpIHtcbiAgcmV0dXJuIGJhc2VVUkwucmVwbGFjZSgvXFwvKyQvLCAnJykgKyAnLycgKyByZWxhdGl2ZVVSTC5yZXBsYWNlKC9eXFwvKy8sICcnKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb21iaW5lVVJMcy5qc1xuLy8gbW9kdWxlIGlkID0gNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQ2FuY2VsID0gcmVxdWlyZSgnLi9DYW5jZWwnKTtcblxuLyoqXG4gKiBBIGBDYW5jZWxUb2tlbmAgaXMgYW4gb2JqZWN0IHRoYXQgY2FuIGJlIHVzZWQgdG8gcmVxdWVzdCBjYW5jZWxsYXRpb24gb2YgYW4gb3BlcmF0aW9uLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gZXhlY3V0b3IgVGhlIGV4ZWN1dG9yIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBDYW5jZWxUb2tlbihleGVjdXRvcikge1xuICBpZiAodHlwZW9mIGV4ZWN1dG9yICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZXhlY3V0b3IgbXVzdCBiZSBhIGZ1bmN0aW9uLicpO1xuICB9XG5cbiAgdmFyIHJlc29sdmVQcm9taXNlO1xuICB0aGlzLnByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiBwcm9taXNlRXhlY3V0b3IocmVzb2x2ZSkge1xuICAgIHJlc29sdmVQcm9taXNlID0gcmVzb2x2ZTtcbiAgfSk7XG5cbiAgdmFyIHRva2VuID0gdGhpcztcbiAgZXhlY3V0b3IoZnVuY3Rpb24gY2FuY2VsKG1lc3NhZ2UpIHtcbiAgICBpZiAodG9rZW4ucmVhc29uKSB7XG4gICAgICAvLyBDYW5jZWxsYXRpb24gaGFzIGFscmVhZHkgYmVlbiByZXF1ZXN0ZWRcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0b2tlbi5yZWFzb24gPSBuZXcgQ2FuY2VsKG1lc3NhZ2UpO1xuICAgIHJlc29sdmVQcm9taXNlKHRva2VuLnJlYXNvbik7XG4gIH0pO1xufVxuXG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gKi9cbkNhbmNlbFRva2VuLnByb3RvdHlwZS50aHJvd0lmUmVxdWVzdGVkID0gZnVuY3Rpb24gdGhyb3dJZlJlcXVlc3RlZCgpIHtcbiAgaWYgKHRoaXMucmVhc29uKSB7XG4gICAgdGhyb3cgdGhpcy5yZWFzb247XG4gIH1cbn07XG5cbi8qKlxuICogUmV0dXJucyBhbiBvYmplY3QgdGhhdCBjb250YWlucyBhIG5ldyBgQ2FuY2VsVG9rZW5gIGFuZCBhIGZ1bmN0aW9uIHRoYXQsIHdoZW4gY2FsbGVkLFxuICogY2FuY2VscyB0aGUgYENhbmNlbFRva2VuYC5cbiAqL1xuQ2FuY2VsVG9rZW4uc291cmNlID0gZnVuY3Rpb24gc291cmNlKCkge1xuICB2YXIgY2FuY2VsO1xuICB2YXIgdG9rZW4gPSBuZXcgQ2FuY2VsVG9rZW4oZnVuY3Rpb24gZXhlY3V0b3IoYykge1xuICAgIGNhbmNlbCA9IGM7XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIHRva2VuOiB0b2tlbixcbiAgICBjYW5jZWw6IGNhbmNlbFxuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW5jZWxUb2tlbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsVG9rZW4uanNcbi8vIG1vZHVsZSBpZCA9IDQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBTeW50YWN0aWMgc3VnYXIgZm9yIGludm9raW5nIGEgZnVuY3Rpb24gYW5kIGV4cGFuZGluZyBhbiBhcnJheSBmb3IgYXJndW1lbnRzLlxuICpcbiAqIENvbW1vbiB1c2UgY2FzZSB3b3VsZCBiZSB0byB1c2UgYEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseWAuXG4gKlxuICogIGBgYGpzXG4gKiAgZnVuY3Rpb24gZih4LCB5LCB6KSB7fVxuICogIHZhciBhcmdzID0gWzEsIDIsIDNdO1xuICogIGYuYXBwbHkobnVsbCwgYXJncyk7XG4gKiAgYGBgXG4gKlxuICogV2l0aCBgc3ByZWFkYCB0aGlzIGV4YW1wbGUgY2FuIGJlIHJlLXdyaXR0ZW4uXG4gKlxuICogIGBgYGpzXG4gKiAgc3ByZWFkKGZ1bmN0aW9uKHgsIHksIHopIHt9KShbMSwgMiwgM10pO1xuICogIGBgYFxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3ByZWFkKGNhbGxiYWNrKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKGFycikge1xuICAgIHJldHVybiBjYWxsYmFjay5hcHBseShudWxsLCBhcnIpO1xuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3NwcmVhZC5qc1xuLy8gbW9kdWxlIGlkID0gNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiOyhmdW5jdGlvbihmYWN0b3J5KSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIC8qIGdsb2JhbCB3aW5kb3c6IGZhbHNlLCBkZWZpbmU6IGZhbHNlLCBtb2R1bGU6IGZhbHNlICovXG4gICAgdmFyIHJvb3QgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiB3aW5kb3c7XG5cbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIGRlZmluZShmdW5jdGlvbigpeyByZXR1cm4gZmFjdG9yeShyb290KTsgfSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3Rvcnkocm9vdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcm9vdC5ET01QdXJpZnkgPSBmYWN0b3J5KHJvb3QpO1xuICAgIH1cbn0oZnVuY3Rpb24gZmFjdG9yeSh3aW5kb3cpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgRE9NUHVyaWZ5ID0gZnVuY3Rpb24od2luZG93KSB7XG4gICAgICAgIHJldHVybiBmYWN0b3J5KHdpbmRvdyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFZlcnNpb24gbGFiZWwsIGV4cG9zZWQgZm9yIGVhc2llciBjaGVja3NcbiAgICAgKiBpZiBET01QdXJpZnkgaXMgdXAgdG8gZGF0ZSBvciBub3RcbiAgICAgKi9cbiAgICBET01QdXJpZnkudmVyc2lvbiA9ICcwLjguNSc7XG5cbiAgICAvKipcbiAgICAgKiBBcnJheSBvZiBlbGVtZW50cyB0aGF0IERPTVB1cmlmeSByZW1vdmVkIGR1cmluZyBzYW5pdGF0aW9uLlxuICAgICAqIEVtcHR5IGlmIG5vdGhpbmcgd2FzIHJlbW92ZWQuXG4gICAgICovXG4gICAgRE9NUHVyaWZ5LnJlbW92ZWQgPSBbXTtcblxuICAgIGlmICghd2luZG93IHx8ICF3aW5kb3cuZG9jdW1lbnQgfHwgd2luZG93LmRvY3VtZW50Lm5vZGVUeXBlICE9PSA5KSB7XG4gICAgICAgIC8vIG5vdCBydW5uaW5nIGluIGEgYnJvd3NlciwgcHJvdmlkZSBhIGZhY3RvcnkgZnVuY3Rpb25cbiAgICAgICAgLy8gc28gdGhhdCB5b3UgY2FuIHBhc3MgeW91ciBvd24gV2luZG93XG4gICAgICAgIERPTVB1cmlmeS5pc1N1cHBvcnRlZCA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gRE9NUHVyaWZ5O1xuICAgIH1cblxuICAgIHZhciBkb2N1bWVudCA9IHdpbmRvdy5kb2N1bWVudDtcbiAgICB2YXIgb3JpZ2luYWxEb2N1bWVudCA9IGRvY3VtZW50O1xuICAgIHZhciBEb2N1bWVudEZyYWdtZW50ID0gd2luZG93LkRvY3VtZW50RnJhZ21lbnQ7XG4gICAgdmFyIEhUTUxUZW1wbGF0ZUVsZW1lbnQgPSB3aW5kb3cuSFRNTFRlbXBsYXRlRWxlbWVudDtcbiAgICB2YXIgTm9kZSA9IHdpbmRvdy5Ob2RlO1xuICAgIHZhciBOb2RlRmlsdGVyID0gd2luZG93Lk5vZGVGaWx0ZXI7XG4gICAgdmFyIE5hbWVkTm9kZU1hcCA9IHdpbmRvdy5OYW1lZE5vZGVNYXAgfHwgd2luZG93Lk1vek5hbWVkQXR0ck1hcDtcbiAgICB2YXIgVGV4dCA9IHdpbmRvdy5UZXh0O1xuICAgIHZhciBDb21tZW50ID0gd2luZG93LkNvbW1lbnQ7XG4gICAgdmFyIERPTVBhcnNlciA9IHdpbmRvdy5ET01QYXJzZXI7XG5cbiAgICAvLyBBcyBwZXIgaXNzdWUgIzQ3LCB0aGUgd2ViLWNvbXBvbmVudHMgcmVnaXN0cnkgaXMgaW5oZXJpdGVkIGJ5IGFcbiAgICAvLyBuZXcgZG9jdW1lbnQgY3JlYXRlZCB2aWEgY3JlYXRlSFRNTERvY3VtZW50LiBBcyBwZXIgdGhlIHNwZWNcbiAgICAvLyAoaHR0cDovL3czYy5naXRodWIuaW8vd2ViY29tcG9uZW50cy9zcGVjL2N1c3RvbS8jY3JlYXRpbmctYW5kLXBhc3NpbmctcmVnaXN0cmllcylcbiAgICAvLyBhIG5ldyBlbXB0eSByZWdpc3RyeSBpcyB1c2VkIHdoZW4gY3JlYXRpbmcgYSB0ZW1wbGF0ZSBjb250ZW50cyBvd25lclxuICAgIC8vIGRvY3VtZW50LCBzbyB3ZSB1c2UgdGhhdCBhcyBvdXIgcGFyZW50IGRvY3VtZW50IHRvIGVuc3VyZSBub3RoaW5nXG4gICAgLy8gaXMgaW5oZXJpdGVkLlxuICAgIGlmICh0eXBlb2YgSFRNTFRlbXBsYXRlRWxlbWVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB2YXIgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAgICAgICBpZiAodGVtcGxhdGUuY29udGVudCAmJiB0ZW1wbGF0ZS5jb250ZW50Lm93bmVyRG9jdW1lbnQpIHtcbiAgICAgICAgICAgIGRvY3VtZW50ID0gdGVtcGxhdGUuY29udGVudC5vd25lckRvY3VtZW50O1xuICAgICAgICB9XG4gICAgfVxuICAgIHZhciBpbXBsZW1lbnRhdGlvbiA9IGRvY3VtZW50LmltcGxlbWVudGF0aW9uO1xuICAgIHZhciBjcmVhdGVOb2RlSXRlcmF0b3IgPSBkb2N1bWVudC5jcmVhdGVOb2RlSXRlcmF0b3I7XG4gICAgdmFyIGdldEVsZW1lbnRzQnlUYWdOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWU7XG4gICAgdmFyIGNyZWF0ZURvY3VtZW50RnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50O1xuICAgIHZhciBpbXBvcnROb2RlID0gb3JpZ2luYWxEb2N1bWVudC5pbXBvcnROb2RlO1xuXG4gICAgdmFyIGhvb2tzID0ge307XG5cbiAgICAvKipcbiAgICAgKiBFeHBvc2Ugd2hldGhlciB0aGlzIGJyb3dzZXIgc3VwcG9ydHMgcnVubmluZyB0aGUgZnVsbCBET01QdXJpZnkuXG4gICAgICovXG4gICAgRE9NUHVyaWZ5LmlzU3VwcG9ydGVkID1cbiAgICAgICAgdHlwZW9mIGltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRNb2RlICE9PSA5O1xuXG4gICAgLyogQWRkIHByb3BlcnRpZXMgdG8gYSBsb29rdXAgdGFibGUgKi9cbiAgICB2YXIgX2FkZFRvU2V0ID0gZnVuY3Rpb24oc2V0LCBhcnJheSkge1xuICAgICAgICB2YXIgbCA9IGFycmF5Lmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKGwtLSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBhcnJheVtsXSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBhcnJheVtsXSA9IGFycmF5W2xdLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRbYXJyYXlbbF1dID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2V0O1xuICAgIH07XG5cbiAgICAvKiBTaGFsbG93IGNsb25lIGFuIG9iamVjdCAqL1xuICAgIHZhciBfY2xvbmVPYmogPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICAgICAgdmFyIG5ld09iamVjdCA9IHt9O1xuICAgICAgICB2YXIgcHJvcGVydHk7XG4gICAgICAgIGZvciAocHJvcGVydHkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgICBpZiAob2JqZWN0Lmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xuICAgICAgICAgICAgICAgIG5ld09iamVjdFtwcm9wZXJ0eV0gPSBvYmplY3RbcHJvcGVydHldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdPYmplY3Q7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFdlIGNvbnNpZGVyIHRoZSBlbGVtZW50cyBhbmQgYXR0cmlidXRlcyBiZWxvdyB0byBiZSBzYWZlLiBJZGVhbGx5XG4gICAgICogZG9uJ3QgYWRkIGFueSBuZXcgb25lcyBidXQgZmVlbCBmcmVlIHRvIHJlbW92ZSB1bndhbnRlZCBvbmVzLlxuICAgICAqL1xuXG4gICAgLyogYWxsb3dlZCBlbGVtZW50IG5hbWVzICovXG4gICAgdmFyIEFMTE9XRURfVEFHUyA9IG51bGw7XG4gICAgdmFyIERFRkFVTFRfQUxMT1dFRF9UQUdTID0gX2FkZFRvU2V0KHt9LCBbXG5cbiAgICAgICAgLy8gSFRNTFxuICAgICAgICAnYScsJ2FiYnInLCdhY3JvbnltJywnYWRkcmVzcycsJ2FyZWEnLCdhcnRpY2xlJywnYXNpZGUnLCdhdWRpbycsJ2InLFxuICAgICAgICAnYmRpJywnYmRvJywnYmlnJywnYmxpbmsnLCdibG9ja3F1b3RlJywnYm9keScsJ2JyJywnYnV0dG9uJywnY2FudmFzJyxcbiAgICAgICAgJ2NhcHRpb24nLCdjZW50ZXInLCdjaXRlJywnY29kZScsJ2NvbCcsJ2NvbGdyb3VwJywnY29udGVudCcsJ2RhdGEnLFxuICAgICAgICAnZGF0YWxpc3QnLCdkZCcsJ2RlY29yYXRvcicsJ2RlbCcsJ2RldGFpbHMnLCdkZm4nLCdkaXInLCdkaXYnLCdkbCcsJ2R0JyxcbiAgICAgICAgJ2VsZW1lbnQnLCdlbScsJ2ZpZWxkc2V0JywnZmlnY2FwdGlvbicsJ2ZpZ3VyZScsJ2ZvbnQnLCdmb290ZXInLCdmb3JtJyxcbiAgICAgICAgJ2gxJywnaDInLCdoMycsJ2g0JywnaDUnLCdoNicsJ2hlYWQnLCdoZWFkZXInLCdoZ3JvdXAnLCdocicsJ2h0bWwnLCdpJyxcbiAgICAgICAgJ2ltZycsJ2lucHV0JywnaW5zJywna2JkJywnbGFiZWwnLCdsZWdlbmQnLCdsaScsJ21haW4nLCdtYXAnLCdtYXJrJyxcbiAgICAgICAgJ21hcnF1ZWUnLCdtZW51JywnbWVudWl0ZW0nLCdtZXRlcicsJ25hdicsJ25vYnInLCdvbCcsJ29wdGdyb3VwJyxcbiAgICAgICAgJ29wdGlvbicsJ291dHB1dCcsJ3AnLCdwcmUnLCdwcm9ncmVzcycsJ3EnLCdycCcsJ3J0JywncnVieScsJ3MnLCdzYW1wJyxcbiAgICAgICAgJ3NlY3Rpb24nLCdzZWxlY3QnLCdzaGFkb3cnLCdzbWFsbCcsJ3NvdXJjZScsJ3NwYWNlcicsJ3NwYW4nLCdzdHJpa2UnLFxuICAgICAgICAnc3Ryb25nJywnc3R5bGUnLCdzdWInLCdzdW1tYXJ5Jywnc3VwJywndGFibGUnLCd0Ym9keScsJ3RkJywndGVtcGxhdGUnLFxuICAgICAgICAndGV4dGFyZWEnLCd0Zm9vdCcsJ3RoJywndGhlYWQnLCd0aW1lJywndHInLCd0cmFjaycsJ3R0JywndScsJ3VsJywndmFyJyxcbiAgICAgICAgJ3ZpZGVvJywnd2JyJyxcblxuICAgICAgICAvLyBTVkdcbiAgICAgICAgJ3N2ZycsJ2FsdGdseXBoJywnYWx0Z2x5cGhkZWYnLCdhbHRnbHlwaGl0ZW0nLCdhbmltYXRlY29sb3InLFxuICAgICAgICAnYW5pbWF0ZW1vdGlvbicsJ2FuaW1hdGV0cmFuc2Zvcm0nLCdjaXJjbGUnLCdjbGlwcGF0aCcsJ2RlZnMnLCdkZXNjJyxcbiAgICAgICAgJ2VsbGlwc2UnLCdmaWx0ZXInLCdmb250JywnZycsJ2dseXBoJywnZ2x5cGhyZWYnLCdoa2VybicsJ2ltYWdlJywnbGluZScsXG4gICAgICAgICdsaW5lYXJncmFkaWVudCcsJ21hcmtlcicsJ21hc2snLCdtZXRhZGF0YScsJ21wYXRoJywncGF0aCcsJ3BhdHRlcm4nLFxuICAgICAgICAncG9seWdvbicsJ3BvbHlsaW5lJywncmFkaWFsZ3JhZGllbnQnLCdyZWN0Jywnc3RvcCcsJ3N3aXRjaCcsJ3N5bWJvbCcsXG4gICAgICAgICd0ZXh0JywndGV4dHBhdGgnLCd0aXRsZScsJ3RyZWYnLCd0c3BhbicsJ3ZpZXcnLCd2a2VybicsXG5cbiAgICAgICAgLy8gU1ZHIEZpbHRlcnNcbiAgICAgICAgJ2ZlQmxlbmQnLCdmZUNvbG9yTWF0cml4JywnZmVDb21wb25lbnRUcmFuc2ZlcicsJ2ZlQ29tcG9zaXRlJyxcbiAgICAgICAgJ2ZlQ29udm9sdmVNYXRyaXgnLCdmZURpZmZ1c2VMaWdodGluZycsJ2ZlRGlzcGxhY2VtZW50TWFwJyxcbiAgICAgICAgJ2ZlRmxvb2QnLCdmZUZ1bmNBJywnZmVGdW5jQicsJ2ZlRnVuY0cnLCdmZUZ1bmNSJywnZmVHYXVzc2lhbkJsdXInLFxuICAgICAgICAnZmVNZXJnZScsJ2ZlTWVyZ2VOb2RlJywnZmVNb3JwaG9sb2d5JywnZmVPZmZzZXQnLFxuICAgICAgICAnZmVTcGVjdWxhckxpZ2h0aW5nJywnZmVUaWxlJywnZmVUdXJidWxlbmNlJyxcblxuICAgICAgICAvL01hdGhNTFxuICAgICAgICAnbWF0aCcsJ21lbmNsb3NlJywnbWVycm9yJywnbWZlbmNlZCcsJ21mcmFjJywnbWdseXBoJywnbWknLCdtbGFiZWxlZHRyJyxcbiAgICAgICAgJ21tdWxpc2NyaXB0cycsJ21uJywnbW8nLCdtb3ZlcicsJ21wYWRkZWQnLCdtcGhhbnRvbScsJ21yb290JywnbXJvdycsXG4gICAgICAgICdtcycsJ21wc3BhY2UnLCdtc3FydCcsJ215c3R5bGUnLCdtc3ViJywnbXN1cCcsJ21zdWJzdXAnLCdtdGFibGUnLCdtdGQnLFxuICAgICAgICAnbXRleHQnLCdtdHInLCdtdW5kZXInLCdtdW5kZXJvdmVyJyxcblxuICAgICAgICAvL1RleHRcbiAgICAgICAgJyN0ZXh0J1xuICAgIF0pO1xuXG4gICAgLyogQWxsb3dlZCBhdHRyaWJ1dGUgbmFtZXMgKi9cbiAgICB2YXIgQUxMT1dFRF9BVFRSID0gbnVsbDtcbiAgICB2YXIgREVGQVVMVF9BTExPV0VEX0FUVFIgPSBfYWRkVG9TZXQoe30sIFtcblxuICAgICAgICAvLyBIVE1MXG4gICAgICAgICdhY2NlcHQnLCdhY3Rpb24nLCdhbGlnbicsJ2FsdCcsJ2F1dG9jb21wbGV0ZScsJ2JhY2tncm91bmQnLCdiZ2NvbG9yJyxcbiAgICAgICAgJ2JvcmRlcicsJ2NlbGxwYWRkaW5nJywnY2VsbHNwYWNpbmcnLCdjaGVja2VkJywnY2l0ZScsJ2NsYXNzJywnY2xlYXInLCdjb2xvcicsXG4gICAgICAgICdjb2xzJywnY29sc3BhbicsJ2Nvb3JkcycsJ2RhdGV0aW1lJywnZGVmYXVsdCcsJ2RpcicsJ2Rpc2FibGVkJyxcbiAgICAgICAgJ2Rvd25sb2FkJywnZW5jdHlwZScsJ2ZhY2UnLCdmb3InLCdoZWFkZXJzJywnaGVpZ2h0JywnaGlkZGVuJywnaGlnaCcsJ2hyZWYnLFxuICAgICAgICAnaHJlZmxhbmcnLCdpZCcsJ2lzbWFwJywnbGFiZWwnLCdsYW5nJywnbGlzdCcsJ2xvb3AnLCAnbG93JywnbWF4JyxcbiAgICAgICAgJ21heGxlbmd0aCcsJ21lZGlhJywnbWV0aG9kJywnbWluJywnbXVsdGlwbGUnLCduYW1lJywnbm9zaGFkZScsJ25vdmFsaWRhdGUnLFxuICAgICAgICAnbm93cmFwJywnb3BlbicsJ29wdGltdW0nLCdwYXR0ZXJuJywncGxhY2Vob2xkZXInLCdwb3N0ZXInLCdwcmVsb2FkJywncHViZGF0ZScsXG4gICAgICAgICdyYWRpb2dyb3VwJywncmVhZG9ubHknLCdyZWwnLCdyZXF1aXJlZCcsJ3JldicsJ3JldmVyc2VkJywncm93cycsXG4gICAgICAgICdyb3dzcGFuJywnc3BlbGxjaGVjaycsJ3Njb3BlJywnc2VsZWN0ZWQnLCdzaGFwZScsJ3NpemUnLCdzcGFuJyxcbiAgICAgICAgJ3NyY2xhbmcnLCdzdGFydCcsJ3NyYycsJ3N0ZXAnLCdzdHlsZScsJ3N1bW1hcnknLCd0YWJpbmRleCcsJ3RpdGxlJyxcbiAgICAgICAgJ3R5cGUnLCd1c2VtYXAnLCd2YWxpZ24nLCd2YWx1ZScsJ3dpZHRoJywneG1sbnMnLFxuXG4gICAgICAgIC8vIFNWR1xuICAgICAgICAnYWNjZW50LWhlaWdodCcsJ2FjY3VtdWxhdGUnLCdhZGRpdGl2aXZlJywnYWxpZ25tZW50LWJhc2VsaW5lJyxcbiAgICAgICAgJ2FzY2VudCcsJ2F0dHJpYnV0ZW5hbWUnLCdhdHRyaWJ1dGV0eXBlJywnYXppbXV0aCcsJ2Jhc2VmcmVxdWVuY3knLFxuICAgICAgICAnYmFzZWxpbmUtc2hpZnQnLCdiZWdpbicsJ2JpYXMnLCdieScsJ2NsaXAnLCdjbGlwLXBhdGgnLCdjbGlwLXJ1bGUnLFxuICAgICAgICAnY29sb3InLCdjb2xvci1pbnRlcnBvbGF0aW9uJywnY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzJywnY29sb3ItcHJvZmlsZScsXG4gICAgICAgICdjb2xvci1yZW5kZXJpbmcnLCdjeCcsJ2N5JywnZCcsJ2R4JywnZHknLCdkaWZmdXNlY29uc3RhbnQnLCdkaXJlY3Rpb24nLFxuICAgICAgICAnZGlzcGxheScsJ2Rpdmlzb3InLCdkdXInLCdlZGdlbW9kZScsJ2VsZXZhdGlvbicsJ2VuZCcsJ2ZpbGwnLCdmaWxsLW9wYWNpdHknLFxuICAgICAgICAnZmlsbC1ydWxlJywnZmlsdGVyJywnZmxvb2QtY29sb3InLCdmbG9vZC1vcGFjaXR5JywnZm9udC1mYW1pbHknLCdmb250LXNpemUnLFxuICAgICAgICAnZm9udC1zaXplLWFkanVzdCcsJ2ZvbnQtc3RyZXRjaCcsJ2ZvbnQtc3R5bGUnLCdmb250LXZhcmlhbnQnLCdmb250LXdlaWdodCcsXG4gICAgICAgICdmeCcsICdmeScsJ2cxJywnZzInLCdnbHlwaC1uYW1lJywnZ2x5cGhyZWYnLCdncmFkaWVudHVuaXRzJywnZ3JhZGllbnR0cmFuc2Zvcm0nLFxuICAgICAgICAnaW1hZ2UtcmVuZGVyaW5nJywnaW4nLCdpbjInLCdrJywnazEnLCdrMicsJ2szJywnazQnLCdrZXJuaW5nJywna2V5cG9pbnRzJyxcbiAgICAgICAgJ2tleXNwbGluZXMnLCdrZXl0aW1lcycsJ2xlbmd0aGFkanVzdCcsJ2xldHRlci1zcGFjaW5nJywna2VybmVsbWF0cml4JyxcbiAgICAgICAgJ2tlcm5lbHVuaXRsZW5ndGgnLCdsaWdodGluZy1jb2xvcicsJ2xvY2FsJywnbWFya2VyLWVuZCcsJ21hcmtlci1taWQnLFxuICAgICAgICAnbWFya2VyLXN0YXJ0JywnbWFya2VyaGVpZ2h0JywnbWFya2VydW5pdHMnLCdtYXJrZXJ3aWR0aCcsJ21hc2tjb250ZW50dW5pdHMnLFxuICAgICAgICAnbWFza3VuaXRzJywnbWF4JywnbWFzaycsJ21vZGUnLCdtaW4nLCdudW1vY3RhdmVzJywnb2Zmc2V0Jywnb3BlcmF0b3InLFxuICAgICAgICAnb3BhY2l0eScsJ29yZGVyJywnb3JpZW50Jywnb3JpZW50YXRpb24nLCdvcmlnaW4nLCdvdmVyZmxvdycsJ3BhaW50LW9yZGVyJyxcbiAgICAgICAgJ3BhdGgnLCdwYXRobGVuZ3RoJywncGF0dGVybmNvbnRlbnR1bml0cycsJ3BhdHRlcm50cmFuc2Zvcm0nLCdwYXR0ZXJudW5pdHMnLFxuICAgICAgICAncG9pbnRzJywncHJlc2VydmVhbHBoYScsJ3InLCdyeCcsJ3J5JywncmFkaXVzJywncmVmeCcsJ3JlZnknLCdyZXBlYXRjb3VudCcsXG4gICAgICAgICdyZXBlYXRkdXInLCdyZXN0YXJ0JywncmVzdWx0Jywncm90YXRlJywnc2NhbGUnLCdzZWVkJywnc2hhcGUtcmVuZGVyaW5nJyxcbiAgICAgICAgJ3NwZWN1bGFyY29uc3RhbnQnLCdzcGVjdWxhcmV4cG9uZW50Jywnc3ByZWFkbWV0aG9kJywnc3RkZGV2aWF0aW9uJywnc3RpdGNodGlsZXMnLFxuICAgICAgICAnc3RvcC1jb2xvcicsJ3N0b3Atb3BhY2l0eScsJ3N0cm9rZS1kYXNoYXJyYXknLCdzdHJva2UtZGFzaG9mZnNldCcsJ3N0cm9rZS1saW5lY2FwJyxcbiAgICAgICAgJ3N0cm9rZS1saW5lam9pbicsJ3N0cm9rZS1taXRlcmxpbWl0Jywnc3Ryb2tlLW9wYWNpdHknLCdzdHJva2UnLCdzdHJva2Utd2lkdGgnLFxuICAgICAgICAnc3VyZmFjZXNjYWxlJywndGFyZ2V0eCcsJ3RhcmdldHknLCd0cmFuc2Zvcm0nLCd0ZXh0LWFuY2hvcicsJ3RleHQtZGVjb3JhdGlvbicsXG4gICAgICAgICd0ZXh0LXJlbmRlcmluZycsJ3RleHRsZW5ndGgnLCd1MScsJ3UyJywndW5pY29kZScsJ3ZhbHVlcycsJ3ZpZXdib3gnLFxuICAgICAgICAndmlzaWJpbGl0eScsJ3ZlcnQtYWR2LXknLCd2ZXJ0LW9yaWdpbi14JywndmVydC1vcmlnaW4teScsJ3dvcmQtc3BhY2luZycsXG4gICAgICAgICd3cmFwJywnd3JpdGluZy1tb2RlJywneGNoYW5uZWxzZWxlY3RvcicsJ3ljaGFubmVsc2VsZWN0b3InLCd4JywneDEnLCd4MicsXG4gICAgICAgICd5JywneTEnLCd5MicsJ3onLCd6b29tYW5kcGFuJyxcblxuICAgICAgICAvLyBNYXRoTUxcbiAgICAgICAgJ2FjY2VudCcsJ2FjY2VudHVuZGVyJywnYmV2ZWxsZWQnLCdjbG9zZScsJ2NvbHVtbnNhbGlnbicsJ2NvbHVtbmxpbmVzJyxcbiAgICAgICAgJ2NvbHVtbnNwYW4nLCdkZW5vbWFsaWduJywnZGVwdGgnLCdkaXNwbGF5JywnZGlzcGxheXN0eWxlJywnZmVuY2UnLFxuICAgICAgICAnZnJhbWUnLCdsYXJnZW9wJywnbGVuZ3RoJywnbGluZXRoaWNrbmVzcycsJ2xzcGFjZScsJ2xxdW90ZScsXG4gICAgICAgICdtYXRoYmFja2dyb3VuZCcsJ21hdGhjb2xvcicsJ21hdGhzaXplJywnbWF0aHZhcmlhbnQnLCdtYXhzaXplJyxcbiAgICAgICAgJ21pbnNpemUnLCdtb3ZhYmxlbGltaXRzJywnbm90YXRpb24nLCdudW1hbGlnbicsJ29wZW4nLCdyb3dhbGlnbicsXG4gICAgICAgICdyb3dsaW5lcycsJ3Jvd3NwYWNpbmcnLCdyb3dzcGFuJywncnNwYWNlJywncnF1b3RlJywnc2NyaXB0bGV2ZWwnLFxuICAgICAgICAnc2NyaXB0bWluc2l6ZScsJ3NjcmlwdHNpemVtdWx0aXBsaWVyJywnc2VsZWN0aW9uJywnc2VwYXJhdG9yJyxcbiAgICAgICAgJ3NlcGFyYXRvcnMnLCdzdHJldGNoeScsJ3N1YnNjcmlwdHNoaWZ0Jywnc3Vwc2NyaXB0c2hpZnQnLCdzeW1tZXRyaWMnLFxuICAgICAgICAndm9mZnNldCcsXG5cbiAgICAgICAgLy8gWE1MXG4gICAgICAgICd4bGluazpocmVmJywneG1sOmlkJywneGxpbms6dGl0bGUnLCd4bWw6c3BhY2UnLCd4bWxuczp4bGluaydcbiAgICBdKTtcblxuICAgIC8qIEV4cGxpY2l0bHkgZm9yYmlkZGVuIHRhZ3MgKG92ZXJyaWRlcyBBTExPV0VEX1RBR1MvQUREX1RBR1MpICovXG4gICAgdmFyIEZPUkJJRF9UQUdTID0gbnVsbDtcblxuICAgIC8qIEV4cGxpY2l0bHkgZm9yYmlkZGVuIGF0dHJpYnV0ZXMgKG92ZXJyaWRlcyBBTExPV0VEX0FUVFIvQUREX0FUVFIpICovXG4gICAgdmFyIEZPUkJJRF9BVFRSID0gbnVsbDtcblxuICAgIC8qIERlY2lkZSBpZiBjdXN0b20gZGF0YSBhdHRyaWJ1dGVzIGFyZSBva2F5ICovXG4gICAgdmFyIEFMTE9XX0RBVEFfQVRUUiA9IHRydWU7XG5cbiAgICAvKiBEZWNpZGUgaWYgdW5rbm93biBwcm90b2NvbHMgYXJlIG9rYXkgKi9cbiAgICB2YXIgQUxMT1dfVU5LTk9XTl9QUk9UT0NPTFMgPSBmYWxzZTtcblxuICAgIC8qIE91dHB1dCBzaG91bGQgYmUgc2FmZSBmb3IgalF1ZXJ5J3MgJCgpIGZhY3Rvcnk/ICovXG4gICAgdmFyIFNBRkVfRk9SX0pRVUVSWSA9IGZhbHNlO1xuXG4gICAgLyogT3V0cHV0IHNob3VsZCBiZSBzYWZlIGZvciBjb21tb24gdGVtcGxhdGUgZW5naW5lcy5cbiAgICAgKiBUaGlzIG1lYW5zLCBET01QdXJpZnkgcmVtb3ZlcyBkYXRhIGF0dHJpYnV0ZXMsIG11c3RhY2hlcyBhbmQgRVJCXG4gICAgICovXG4gICAgdmFyIFNBRkVfRk9SX1RFTVBMQVRFUyA9IGZhbHNlO1xuXG4gICAgLyogU3BlY2lmeSB0ZW1wbGF0ZSBkZXRlY3Rpb24gcmVnZXggZm9yIFNBRkVfRk9SX1RFTVBMQVRFUyBtb2RlICovXG4gICAgdmFyIE1VU1RBQ0hFX0VYUFIgPSAvXFx7XFx7W1xcc1xcU10qfFtcXHNcXFNdKlxcfVxcfS9nbTtcbiAgICB2YXIgRVJCX0VYUFIgPSAvPCVbXFxzXFxTXSp8W1xcc1xcU10qJT4vZ207XG5cbiAgICAvKiBEZWNpZGUgaWYgZG9jdW1lbnQgd2l0aCA8aHRtbD4uLi4gc2hvdWxkIGJlIHJldHVybmVkICovXG4gICAgdmFyIFdIT0xFX0RPQ1VNRU5UID0gZmFsc2U7XG5cbiAgICAvKiBEZWNpZGUgaWYgYSBET00gYEhUTUxCb2R5RWxlbWVudGAgc2hvdWxkIGJlIHJldHVybmVkLCBpbnN0ZWFkIG9mIGEgaHRtbCBzdHJpbmcuXG4gICAgICogSWYgYFdIT0xFX0RPQ1VNRU5UYCBpcyBlbmFibGVkIGEgYEhUTUxIdG1sRWxlbWVudGAgd2lsbCBiZSByZXR1cm5lZCBpbnN0ZWFkXG4gICAgICovXG4gICAgdmFyIFJFVFVSTl9ET00gPSBmYWxzZTtcblxuICAgIC8qIERlY2lkZSBpZiBhIERPTSBgRG9jdW1lbnRGcmFnbWVudGAgc2hvdWxkIGJlIHJldHVybmVkLCBpbnN0ZWFkIG9mIGEgaHRtbCBzdHJpbmcgKi9cbiAgICB2YXIgUkVUVVJOX0RPTV9GUkFHTUVOVCA9IGZhbHNlO1xuXG4gICAgLyogSWYgYFJFVFVSTl9ET01gIG9yIGBSRVRVUk5fRE9NX0ZSQUdNRU5UYCBpcyBlbmFibGVkLCBkZWNpZGUgaWYgdGhlIHJldHVybmVkIERPTVxuICAgICAqIGBOb2RlYCBpcyBpbXBvcnRlZCBpbnRvIHRoZSBjdXJyZW50IGBEb2N1bWVudGAuIElmIHRoaXMgZmxhZyBpcyBub3QgZW5hYmxlZCB0aGVcbiAgICAgKiBgTm9kZWAgd2lsbCBiZWxvbmcgKGl0cyBvd25lckRvY3VtZW50KSB0byBhIGZyZXNoIGBIVE1MRG9jdW1lbnRgLCBjcmVhdGVkIGJ5XG4gICAgICogRE9NUHVyaWZ5LiAqL1xuICAgIHZhciBSRVRVUk5fRE9NX0lNUE9SVCA9IGZhbHNlO1xuXG4gICAgLyogT3V0cHV0IHNob3VsZCBiZSBmcmVlIGZyb20gRE9NIGNsb2JiZXJpbmcgYXR0YWNrcz8gKi9cbiAgICB2YXIgU0FOSVRJWkVfRE9NID0gdHJ1ZTtcblxuICAgIC8qIEtlZXAgZWxlbWVudCBjb250ZW50IHdoZW4gcmVtb3ZpbmcgZWxlbWVudD8gKi9cbiAgICB2YXIgS0VFUF9DT05URU5UID0gdHJ1ZTtcblxuICAgIC8qIFRhZ3MgdG8gaWdub3JlIGNvbnRlbnQgb2Ygd2hlbiBLRUVQX0NPTlRFTlQgaXMgdHJ1ZSAqL1xuICAgIHZhciBGT1JCSURfQ09OVEVOVFMgPSBfYWRkVG9TZXQoe30sIFtcbiAgICAgICAgJ2F1ZGlvJywgJ2hlYWQnLCAnbWF0aCcsICdzY3JpcHQnLCAnc3R5bGUnLCAnc3ZnJywgJ3ZpZGVvJ1xuICAgIF0pO1xuXG4gICAgLyogVGFncyB0aGF0IGFyZSBzYWZlIGZvciBkYXRhOiBVUklzICovXG4gICAgdmFyIERBVEFfVVJJX1RBR1MgPSBfYWRkVG9TZXQoe30sIFtcbiAgICAgICAgJ2F1ZGlvJywgJ3ZpZGVvJywgJ2ltZycsICdzb3VyY2UnXG4gICAgXSk7XG5cbiAgICAvKiBBdHRyaWJ1dGVzIHNhZmUgZm9yIHZhbHVlcyBsaWtlIFwiamF2YXNjcmlwdDpcIiAqL1xuICAgIHZhciBVUklfU0FGRV9BVFRSSUJVVEVTID0gX2FkZFRvU2V0KHt9LCBbXG4gICAgICAgICdhbHQnLCdjbGFzcycsJ2ZvcicsJ2lkJywnbGFiZWwnLCduYW1lJywncGF0dGVybicsJ3BsYWNlaG9sZGVyJyxcbiAgICAgICAgJ3N1bW1hcnknLCd0aXRsZScsJ3ZhbHVlJywnc3R5bGUnLCd4bWxucydcbiAgICBdKTtcblxuICAgIC8qIEtlZXAgYSByZWZlcmVuY2UgdG8gY29uZmlnIHRvIHBhc3MgdG8gaG9va3MgKi9cbiAgICB2YXIgQ09ORklHID0gbnVsbDtcblxuICAgIC8qIElkZWFsbHksIGRvIG5vdCB0b3VjaCBhbnl0aGluZyBiZWxvdyB0aGlzIGxpbmUgKi9cbiAgICAvKiBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fICovXG5cbiAgICB2YXIgZm9ybUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG5cbiAgICAvKipcbiAgICAgKiBfcGFyc2VDb25maWdcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgb3B0aW9uYWwgY29uZmlnIGxpdGVyYWxcbiAgICAgKi9cbiAgICB2YXIgX3BhcnNlQ29uZmlnID0gZnVuY3Rpb24oY2ZnKSB7XG4gICAgICAgIC8qIFNoaWVsZCBjb25maWd1cmF0aW9uIG9iamVjdCBmcm9tIHRhbXBlcmluZyAqL1xuICAgICAgICBpZiAodHlwZW9mIGNmZyAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGNmZyA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgLyogU2V0IGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVycyAqL1xuICAgICAgICBBTExPV0VEX1RBR1MgPSAnQUxMT1dFRF9UQUdTJyBpbiBjZmcgP1xuICAgICAgICAgICAgX2FkZFRvU2V0KHt9LCBjZmcuQUxMT1dFRF9UQUdTKSA6IERFRkFVTFRfQUxMT1dFRF9UQUdTO1xuICAgICAgICBBTExPV0VEX0FUVFIgPSAnQUxMT1dFRF9BVFRSJyBpbiBjZmcgP1xuICAgICAgICAgICAgX2FkZFRvU2V0KHt9LCBjZmcuQUxMT1dFRF9BVFRSKSA6IERFRkFVTFRfQUxMT1dFRF9BVFRSO1xuICAgICAgICBGT1JCSURfVEFHUyA9ICdGT1JCSURfVEFHUycgaW4gY2ZnID9cbiAgICAgICAgICAgIF9hZGRUb1NldCh7fSwgY2ZnLkZPUkJJRF9UQUdTKSA6IHt9O1xuICAgICAgICBGT1JCSURfQVRUUiA9ICdGT1JCSURfQVRUUicgaW4gY2ZnID9cbiAgICAgICAgICAgIF9hZGRUb1NldCh7fSwgY2ZnLkZPUkJJRF9BVFRSKSA6IHt9O1xuICAgICAgICBBTExPV19EQVRBX0FUVFIgICAgID0gY2ZnLkFMTE9XX0RBVEFfQVRUUiAgICAgIT09IGZhbHNlOyAvLyBEZWZhdWx0IHRydWVcbiAgICAgICAgQUxMT1dfVU5LTk9XTl9QUk9UT0NPTFMgPSBjZmcuQUxMT1dfVU5LTk9XTl9QUk9UT0NPTFMgfHwgZmFsc2U7IC8vIERlZmF1bHQgZmFsc2VcbiAgICAgICAgU0FGRV9GT1JfSlFVRVJZICAgICA9IGNmZy5TQUZFX0ZPUl9KUVVFUlkgICAgIHx8ICBmYWxzZTsgLy8gRGVmYXVsdCBmYWxzZVxuICAgICAgICBTQUZFX0ZPUl9URU1QTEFURVMgID0gY2ZnLlNBRkVfRk9SX1RFTVBMQVRFUyAgfHwgIGZhbHNlOyAvLyBEZWZhdWx0IGZhbHNlXG4gICAgICAgIFdIT0xFX0RPQ1VNRU5UICAgICAgPSBjZmcuV0hPTEVfRE9DVU1FTlQgICAgICB8fCAgZmFsc2U7IC8vIERlZmF1bHQgZmFsc2VcbiAgICAgICAgUkVUVVJOX0RPTSAgICAgICAgICA9IGNmZy5SRVRVUk5fRE9NICAgICAgICAgIHx8ICBmYWxzZTsgLy8gRGVmYXVsdCBmYWxzZVxuICAgICAgICBSRVRVUk5fRE9NX0ZSQUdNRU5UID0gY2ZnLlJFVFVSTl9ET01fRlJBR01FTlQgfHwgIGZhbHNlOyAvLyBEZWZhdWx0IGZhbHNlXG4gICAgICAgIFJFVFVSTl9ET01fSU1QT1JUICAgPSBjZmcuUkVUVVJOX0RPTV9JTVBPUlQgICB8fCAgZmFsc2U7IC8vIERlZmF1bHQgZmFsc2VcbiAgICAgICAgU0FOSVRJWkVfRE9NICAgICAgICA9IGNmZy5TQU5JVElaRV9ET00gICAgICAgICE9PSBmYWxzZTsgLy8gRGVmYXVsdCB0cnVlXG4gICAgICAgIEtFRVBfQ09OVEVOVCAgICAgICAgPSBjZmcuS0VFUF9DT05URU5UICAgICAgICAhPT0gZmFsc2U7IC8vIERlZmF1bHQgdHJ1ZVxuXG4gICAgICAgIGlmIChTQUZFX0ZPUl9URU1QTEFURVMpIHtcbiAgICAgICAgICAgIEFMTE9XX0RBVEFfQVRUUiA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFJFVFVSTl9ET01fRlJBR01FTlQpIHtcbiAgICAgICAgICAgIFJFVFVSTl9ET00gPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogTWVyZ2UgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzICovXG4gICAgICAgIGlmIChjZmcuQUREX1RBR1MpIHtcbiAgICAgICAgICAgIGlmIChBTExPV0VEX1RBR1MgPT09IERFRkFVTFRfQUxMT1dFRF9UQUdTKSB7XG4gICAgICAgICAgICAgICAgQUxMT1dFRF9UQUdTID0gX2Nsb25lT2JqKEFMTE9XRURfVEFHUyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfYWRkVG9TZXQoQUxMT1dFRF9UQUdTLCBjZmcuQUREX1RBR1MpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjZmcuQUREX0FUVFIpIHtcbiAgICAgICAgICAgIGlmIChBTExPV0VEX0FUVFIgPT09IERFRkFVTFRfQUxMT1dFRF9BVFRSKSB7XG4gICAgICAgICAgICAgICAgQUxMT1dFRF9BVFRSID0gX2Nsb25lT2JqKEFMTE9XRURfQVRUUik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfYWRkVG9TZXQoQUxMT1dFRF9BVFRSLCBjZmcuQUREX0FUVFIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjZmcuQUREX1VSSV9TQUZFX0FUVFIpIHtcbiAgICAgICAgICAgIF9hZGRUb1NldChVUklfU0FGRV9BVFRSSUJVVEVTLCBjZmcuQUREX1VSSV9TQUZFX0FUVFIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogQWRkICN0ZXh0IGluIGNhc2UgS0VFUF9DT05URU5UIGlzIHNldCB0byB0cnVlICovXG4gICAgICAgIGlmIChLRUVQX0NPTlRFTlQpIHsgQUxMT1dFRF9UQUdTWycjdGV4dCddID0gdHJ1ZTsgfVxuXG4gICAgICAgIC8vIFByZXZlbnQgZnVydGhlciBtYW5pcHVsYXRpb24gb2YgY29uZmlndXJhdGlvbi5cbiAgICAgICAgLy8gTm90IGF2YWlsYWJsZSBpbiBJRTgsIFNhZmFyaSA1LCBldGMuXG4gICAgICAgIGlmIChPYmplY3QgJiYgJ2ZyZWV6ZScgaW4gT2JqZWN0KSB7IE9iamVjdC5mcmVlemUoY2ZnKTsgfVxuXG4gICAgICAgIENPTkZJRyA9IGNmZztcbiAgICB9O1xuXG4gICAvKipcbiAgICAgKiBfZm9yY2VSZW1vdmVcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgYSBET00gbm9kZVxuICAgICAqL1xuICAgIHZhciBfZm9yY2VSZW1vdmUgPSBmdW5jdGlvbihub2RlKSB7XG4gICAgICAgIERPTVB1cmlmeS5yZW1vdmVkLnB1c2goe2VsZW1lbnQ6IG5vZGV9KTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgbm9kZS5vdXRlckhUTUwgPSAnJztcbiAgICAgICAgfVxuICAgIH07XG5cbiAgIC8qKlxuICAgICAqIF9yZW1vdmVBdHRyaWJ1dGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgYW4gQXR0cmlidXRlIG5hbWVcbiAgICAgKiBAcGFyYW0gIGEgRE9NIG5vZGVcbiAgICAgKi9cbiAgICB2YXIgX3JlbW92ZUF0dHJpYnV0ZSA9IGZ1bmN0aW9uKG5hbWUsIG5vZGUpIHtcbiAgICAgICAgRE9NUHVyaWZ5LnJlbW92ZWQucHVzaCh7XG4gICAgICAgICAgICBhdHRyaWJ1dGU6IG5vZGUuZ2V0QXR0cmlidXRlTm9kZShuYW1lKSxcbiAgICAgICAgICAgIGZyb206IG5vZGVcbiAgICAgICAgfSk7XG4gICAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICAgIH07XG5cbiAgIC8qKlxuICAgICAqIF9pbml0RG9jdW1lbnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgYSBzdHJpbmcgb2YgZGlydHkgbWFya3VwXG4gICAgICogQHJldHVybiBhIERPTSwgZmlsbGVkIHdpdGggdGhlIGRpcnR5IG1hcmt1cFxuICAgICAqL1xuICAgIHZhciBfaW5pdERvY3VtZW50ID0gZnVuY3Rpb24oZGlydHkpIHtcbiAgICAgICAgLyogQ3JlYXRlIGEgSFRNTCBkb2N1bWVudCB1c2luZyBET01QYXJzZXIgKi9cbiAgICAgICAgdmFyIGRvYywgYm9keTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGRvYyA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoZGlydHksICd0ZXh0L2h0bWwnKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge31cblxuICAgICAgICAvKiBTb21lIGJyb3dzZXJzIHRocm93LCBzb21lIGJyb3dzZXJzIHJldHVybiBudWxsIGZvciB0aGUgY29kZSBhYm92ZVxuICAgICAgICAgICBET01QYXJzZXIgd2l0aCB0ZXh0L2h0bWwgc3VwcG9ydCBpcyBvbmx5IGluIHZlcnkgcmVjZW50IGJyb3dzZXJzLlxuICAgICAgICAgICBTZWUgIzE1OSB3aHkgdGhlIGNoZWNrIGhlcmUgaXMgZXh0cmEtdGhvcm91Z2ggKi9cbiAgICAgICAgaWYgKCFkb2MgfHwgIWRvYy5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGRvYyA9IGltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudCgnJyk7XG4gICAgICAgICAgICBib2R5ID0gZG9jLmJvZHk7XG4gICAgICAgICAgICBib2R5LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYm9keS5wYXJlbnROb2RlLmZpcnN0RWxlbWVudENoaWxkKTtcbiAgICAgICAgICAgIGJvZHkub3V0ZXJIVE1MID0gZGlydHk7XG4gICAgICAgIH1cblxuICAgICAgICAvKiBXb3JrIG9uIHdob2xlIGRvY3VtZW50IG9yIGp1c3QgaXRzIGJvZHkgKi9cbiAgICAgICAgaWYgKHR5cGVvZiBkb2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybiBkb2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXG4gICAgICAgICAgICAgICAgV0hPTEVfRE9DVU1FTlQgPyAnaHRtbCcgOiAnYm9keScpWzBdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBnZXRFbGVtZW50c0J5VGFnTmFtZS5jYWxsKGRvYyxcbiAgICAgICAgICAgIFdIT0xFX0RPQ1VNRU5UID8gJ2h0bWwnIDogJ2JvZHknKVswXTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogX2NyZWF0ZUl0ZXJhdG9yXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIGRvY3VtZW50L2ZyYWdtZW50IHRvIGNyZWF0ZSBpdGVyYXRvciBmb3JcbiAgICAgKiBAcmV0dXJuIGl0ZXJhdG9yIGluc3RhbmNlXG4gICAgICovXG4gICAgdmFyIF9jcmVhdGVJdGVyYXRvciA9IGZ1bmN0aW9uKHJvb3QpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZU5vZGVJdGVyYXRvci5jYWxsKHJvb3Qub3duZXJEb2N1bWVudCB8fCByb290LFxuICAgICAgICAgICAgcm9vdCxcbiAgICAgICAgICAgIE5vZGVGaWx0ZXIuU0hPV19FTEVNRU5UXG4gICAgICAgICAgICB8IE5vZGVGaWx0ZXIuU0hPV19DT01NRU5UXG4gICAgICAgICAgICB8IE5vZGVGaWx0ZXIuU0hPV19URVhULFxuICAgICAgICAgICAgZnVuY3Rpb24oKSB7IHJldHVybiBOb2RlRmlsdGVyLkZJTFRFUl9BQ0NFUFQ7IH0sXG4gICAgICAgICAgICBmYWxzZVxuICAgICAgICApO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBfaXNDbG9iYmVyZWRcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgZWxlbWVudCB0byBjaGVjayBmb3IgY2xvYmJlcmluZyBhdHRhY2tzXG4gICAgICogQHJldHVybiB0cnVlIGlmIGNsb2JiZXJlZCwgZmFsc2UgaWYgc2FmZVxuICAgICAqL1xuICAgIHZhciBfaXNDbG9iYmVyZWQgPSBmdW5jdGlvbihlbG0pIHtcbiAgICAgICAgaWYgKGVsbSBpbnN0YW5jZW9mIFRleHQgfHwgZWxtIGluc3RhbmNlb2YgQ29tbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICggIHR5cGVvZiBlbG0ubm9kZU5hbWUgIT09ICdzdHJpbmcnXG4gICAgICAgICAgIHx8IHR5cGVvZiBlbG0udGV4dENvbnRlbnQgIT09ICdzdHJpbmcnXG4gICAgICAgICAgIHx8IHR5cGVvZiBlbG0ucmVtb3ZlQ2hpbGQgIT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgfHwgIShlbG0uYXR0cmlidXRlcyBpbnN0YW5jZW9mIE5hbWVkTm9kZU1hcClcbiAgICAgICAgICAgfHwgdHlwZW9mIGVsbS5yZW1vdmVBdHRyaWJ1dGUgIT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgfHwgdHlwZW9mIGVsbS5zZXRBdHRyaWJ1dGUgIT09ICdmdW5jdGlvbidcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIF9pc05vZGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSBvYmplY3QgdG8gY2hlY2sgd2hldGhlciBpdCdzIGEgRE9NIG5vZGVcbiAgICAgKiBAcmV0dXJuIHRydWUgaXMgb2JqZWN0IGlzIGEgRE9NIG5vZGVcbiAgICAgKi9cbiAgICB2YXIgX2lzTm9kZSA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgdHlwZW9mIE5vZGUgPT09IFwib2JqZWN0XCIgPyBvYmogaW5zdGFuY2VvZiBOb2RlIDogb2JqXG4gICAgICAgICAgICAgICAgJiYgdHlwZW9mIG9iaiA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqLm5vZGVUeXBlID09PSBcIm51bWJlclwiXG4gICAgICAgICAgICAgICAgJiYgdHlwZW9mIG9iai5ub2RlTmFtZT09PVwic3RyaW5nXCJcbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogX3Nhbml0aXplRWxlbWVudHNcbiAgICAgKlxuICAgICAqIEBwcm90ZWN0IG5vZGVOYW1lXG4gICAgICogQHByb3RlY3QgdGV4dENvbnRlbnRcbiAgICAgKiBAcHJvdGVjdCByZW1vdmVDaGlsZFxuICAgICAqXG4gICAgICogQHBhcmFtICAgbm9kZSB0byBjaGVjayBmb3IgcGVybWlzc2lvbiB0byBleGlzdFxuICAgICAqIEByZXR1cm4gIHRydWUgaWYgbm9kZSB3YXMga2lsbGVkLCBmYWxzZSBpZiBsZWZ0IGFsaXZlXG4gICAgICovXG4gICAgdmFyIF9zYW5pdGl6ZUVsZW1lbnRzID0gZnVuY3Rpb24oY3VycmVudE5vZGUpIHtcbiAgICAgICAgdmFyIHRhZ05hbWUsIGNvbnRlbnQ7XG4gICAgICAgIC8qIEV4ZWN1dGUgYSBob29rIGlmIHByZXNlbnQgKi9cbiAgICAgICAgX2V4ZWN1dGVIb29rKCdiZWZvcmVTYW5pdGl6ZUVsZW1lbnRzJywgY3VycmVudE5vZGUsIG51bGwpO1xuXG4gICAgICAgIC8qIENoZWNrIGlmIGVsZW1lbnQgaXMgY2xvYmJlcmVkIG9yIGNhbiBjbG9iYmVyICovXG4gICAgICAgIGlmIChfaXNDbG9iYmVyZWQoY3VycmVudE5vZGUpKSB7XG4gICAgICAgICAgICBfZm9yY2VSZW1vdmUoY3VycmVudE5vZGUpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKiBOb3cgbGV0J3MgY2hlY2sgdGhlIGVsZW1lbnQncyB0eXBlIGFuZCBuYW1lICovXG4gICAgICAgIHRhZ05hbWUgPSBjdXJyZW50Tm9kZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgIC8qIEV4ZWN1dGUgYSBob29rIGlmIHByZXNlbnQgKi9cbiAgICAgICAgX2V4ZWN1dGVIb29rKCd1cG9uU2FuaXRpemVFbGVtZW50JywgY3VycmVudE5vZGUsIHtcbiAgICAgICAgICAgIHRhZ05hbWU6IHRhZ05hbWUsXG4gICAgICAgICAgICBhbGxvd2VkVGFnczogQUxMT1dFRF9UQUdTXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8qIFJlbW92ZSBlbGVtZW50IGlmIGFueXRoaW5nIGZvcmJpZHMgaXRzIHByZXNlbmNlICovXG4gICAgICAgIGlmICghQUxMT1dFRF9UQUdTW3RhZ05hbWVdIHx8IEZPUkJJRF9UQUdTW3RhZ05hbWVdKSB7XG4gICAgICAgICAgICAvKiBLZWVwIGNvbnRlbnQgZXhjZXB0IGZvciBibGFjay1saXN0ZWQgZWxlbWVudHMgKi9cbiAgICAgICAgICAgIGlmIChLRUVQX0NPTlRFTlQgJiYgIUZPUkJJRF9DT05URU5UU1t0YWdOYW1lXVxuICAgICAgICAgICAgICAgICAgICAmJiB0eXBlb2YgY3VycmVudE5vZGUuaW5zZXJ0QWRqYWNlbnRIVE1MID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudE5vZGUuaW5zZXJ0QWRqYWNlbnRIVE1MKCdBZnRlckVuZCcsIGN1cnJlbnROb2RlLmlubmVySFRNTCk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF9mb3JjZVJlbW92ZShjdXJyZW50Tm9kZSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIENvbnZlcnQgbWFya3VwIHRvIGNvdmVyIGpRdWVyeSBiZWhhdmlvciAqL1xuICAgICAgICBpZiAoU0FGRV9GT1JfSlFVRVJZICYmICFjdXJyZW50Tm9kZS5maXJzdEVsZW1lbnRDaGlsZCAmJlxuICAgICAgICAgICAgICAgICghY3VycmVudE5vZGUuY29udGVudCB8fCAhY3VycmVudE5vZGUuY29udGVudC5maXJzdEVsZW1lbnRDaGlsZCkgJiZcbiAgICAgICAgICAgICAgICAvPC9nLnRlc3QoY3VycmVudE5vZGUudGV4dENvbnRlbnQpKSB7XG4gICAgICAgICAgICBET01QdXJpZnkucmVtb3ZlZC5wdXNoKHtlbGVtZW50OiBjdXJyZW50Tm9kZS5jbG9uZU5vZGUoKX0pO1xuICAgICAgICAgICAgY3VycmVudE5vZGUuaW5uZXJIVE1MID0gY3VycmVudE5vZGUudGV4dENvbnRlbnQucmVwbGFjZSgvPC9nLCAnJmx0OycpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogU2FuaXRpemUgZWxlbWVudCBjb250ZW50IHRvIGJlIHRlbXBsYXRlLXNhZmUgKi9cbiAgICAgICAgaWYgKFNBRkVfRk9SX1RFTVBMQVRFUyAmJiBjdXJyZW50Tm9kZS5ub2RlVHlwZSA9PT0gMykge1xuICAgICAgICAgICAgLyogR2V0IHRoZSBlbGVtZW50J3MgdGV4dCBjb250ZW50ICovXG4gICAgICAgICAgICBjb250ZW50ID0gY3VycmVudE5vZGUudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5yZXBsYWNlKE1VU1RBQ0hFX0VYUFIsICcgJyk7XG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5yZXBsYWNlKEVSQl9FWFBSLCAnICcpO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnROb2RlLnRleHRDb250ZW50ICE9PSBjb250ZW50KSB7XG4gICAgICAgICAgICAgICAgRE9NUHVyaWZ5LnJlbW92ZWQucHVzaCh7ZWxlbWVudDogY3VycmVudE5vZGUuY2xvbmVOb2RlKCl9KTtcbiAgICAgICAgICAgICAgICBjdXJyZW50Tm9kZS50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKiBFeGVjdXRlIGEgaG9vayBpZiBwcmVzZW50ICovXG4gICAgICAgIF9leGVjdXRlSG9vaygnYWZ0ZXJTYW5pdGl6ZUVsZW1lbnRzJywgY3VycmVudE5vZGUsIG51bGwpO1xuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgdmFyIERBVEFfQVRUUiA9IC9eZGF0YS1bXFwtXFx3LlxcdTAwQjctXFx1RkZGRl0vO1xuICAgIHZhciBJU19BTExPV0VEX1VSSSA9IC9eKD86KD86KD86ZnxodCl0cHM/fG1haWx0b3x0ZWwpOnxbXmEtel18W2EteisuXFwtXSsoPzpbXmEteisuXFwtOl18JCkpL2k7XG4gICAgdmFyIElTX1NDUklQVF9PUl9EQVRBID0gL14oPzpcXHcrc2NyaXB0fGRhdGEpOi9pO1xuICAgIC8qIFRoaXMgbmVlZHMgdG8gYmUgZXh0ZW5zaXZlIHRoYW5rcyB0byBXZWJraXQvQmxpbmsncyBiZWhhdmlvciAqL1xuICAgIHZhciBBVFRSX1dISVRFU1BBQ0UgPSAvW1xceDAwLVxceDIwXFx4QTBcXHUxNjgwXFx1MTgwRVxcdTIwMDAtXFx1MjAyOVxcdTIwNWZcXHUzMDAwXS9nO1xuXG4gICAgLyoqXG4gICAgICogX3Nhbml0aXplQXR0cmlidXRlc1xuICAgICAqXG4gICAgICogQHByb3RlY3QgYXR0cmlidXRlc1xuICAgICAqIEBwcm90ZWN0IG5vZGVOYW1lXG4gICAgICogQHByb3RlY3QgcmVtb3ZlQXR0cmlidXRlXG4gICAgICogQHByb3RlY3Qgc2V0QXR0cmlidXRlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICBub2RlIHRvIHNhbml0aXplXG4gICAgICogQHJldHVybiAgdm9pZFxuICAgICAqL1xuICAgIHZhciBfc2FuaXRpemVBdHRyaWJ1dGVzID0gZnVuY3Rpb24oY3VycmVudE5vZGUpIHtcbiAgICAgICAgdmFyIGF0dHIsIG5hbWUsIHZhbHVlLCBsY05hbWUsIGlkQXR0ciwgYXR0cmlidXRlcywgaG9va0V2ZW50LCBsO1xuICAgICAgICAvKiBFeGVjdXRlIGEgaG9vayBpZiBwcmVzZW50ICovXG4gICAgICAgIF9leGVjdXRlSG9vaygnYmVmb3JlU2FuaXRpemVBdHRyaWJ1dGVzJywgY3VycmVudE5vZGUsIG51bGwpO1xuXG4gICAgICAgIGF0dHJpYnV0ZXMgPSBjdXJyZW50Tm9kZS5hdHRyaWJ1dGVzO1xuXG4gICAgICAgIC8qIENoZWNrIGlmIHdlIGhhdmUgYXR0cmlidXRlczsgaWYgbm90IHdlIG1pZ2h0IGhhdmUgYSB0ZXh0IG5vZGUgKi9cbiAgICAgICAgaWYgKCFhdHRyaWJ1dGVzKSB7IHJldHVybjsgfVxuXG4gICAgICAgIGhvb2tFdmVudCA9IHtcbiAgICAgICAgICAgIGF0dHJOYW1lOiAnJyxcbiAgICAgICAgICAgIGF0dHJWYWx1ZTogJycsXG4gICAgICAgICAgICBrZWVwQXR0cjogdHJ1ZSxcbiAgICAgICAgICAgIGFsbG93ZWRBdHRyaWJ1dGVzOiBBTExPV0VEX0FUVFJcbiAgICAgICAgfTtcbiAgICAgICAgbCA9IGF0dHJpYnV0ZXMubGVuZ3RoO1xuXG4gICAgICAgIC8qIEdvIGJhY2t3YXJkcyBvdmVyIGFsbCBhdHRyaWJ1dGVzOyBzYWZlbHkgcmVtb3ZlIGJhZCBvbmVzICovXG4gICAgICAgIHdoaWxlIChsLS0pIHtcbiAgICAgICAgICAgIGF0dHIgPSBhdHRyaWJ1dGVzW2xdO1xuICAgICAgICAgICAgbmFtZSA9IGF0dHIubmFtZTtcbiAgICAgICAgICAgIHZhbHVlID0gYXR0ci52YWx1ZS50cmltKCk7XG4gICAgICAgICAgICBsY05hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICAgIC8qIEV4ZWN1dGUgYSBob29rIGlmIHByZXNlbnQgKi9cbiAgICAgICAgICAgIGhvb2tFdmVudC5hdHRyTmFtZSA9IGxjTmFtZTtcbiAgICAgICAgICAgIGhvb2tFdmVudC5hdHRyVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIGhvb2tFdmVudC5rZWVwQXR0ciA9IHRydWU7XG4gICAgICAgICAgICBfZXhlY3V0ZUhvb2soJ3Vwb25TYW5pdGl6ZUF0dHJpYnV0ZScsIGN1cnJlbnROb2RlLCBob29rRXZlbnQgKTtcbiAgICAgICAgICAgIHZhbHVlID0gaG9va0V2ZW50LmF0dHJWYWx1ZTtcblxuICAgICAgICAgICAgLyogUmVtb3ZlIGF0dHJpYnV0ZSAqL1xuICAgICAgICAgICAgLy8gU2FmYXJpIChpT1MgKyBNYWMpLCBsYXN0IHRlc3RlZCB2OC4wLjUsIGNyYXNoZXMgaWYgeW91IHRyeSB0b1xuICAgICAgICAgICAgLy8gcmVtb3ZlIGEgXCJuYW1lXCIgYXR0cmlidXRlIGZyb20gYW4gPGltZz4gdGFnIHRoYXQgaGFzIGFuIFwiaWRcIlxuICAgICAgICAgICAgLy8gYXR0cmlidXRlIGF0IHRoZSB0aW1lLlxuICAgICAgICAgICAgaWYgKGxjTmFtZSA9PT0gJ25hbWUnICAmJlxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50Tm9kZS5ub2RlTmFtZSA9PT0gJ0lNRycgJiYgYXR0cmlidXRlcy5pZCkge1xuICAgICAgICAgICAgICAgIGlkQXR0ciA9IGF0dHJpYnV0ZXMuaWQ7XG4gICAgICAgICAgICAgICAgYXR0cmlidXRlcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5hcHBseShhdHRyaWJ1dGVzKTtcbiAgICAgICAgICAgICAgICBfcmVtb3ZlQXR0cmlidXRlKCdpZCcsIGN1cnJlbnROb2RlKTtcbiAgICAgICAgICAgICAgICBfcmVtb3ZlQXR0cmlidXRlKG5hbWUsIGN1cnJlbnROb2RlKTtcbiAgICAgICAgICAgICAgICBpZiAoYXR0cmlidXRlcy5pbmRleE9mKGlkQXR0cikgPiBsKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnROb2RlLnNldEF0dHJpYnV0ZSgnaWQnLCBpZEF0dHIudmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gVGhpcyBhdm9pZHMgYSBjcmFzaCBpbiBTYWZhcmkgdjkuMCB3aXRoIGRvdWJsZS1pZHMuXG4gICAgICAgICAgICAgICAgLy8gVGhlIHRyaWNrIGlzIHRvIGZpcnN0IHNldCB0aGUgaWQgdG8gYmUgZW1wdHkgYW5kIHRoZW4gdG9cbiAgICAgICAgICAgICAgICAvLyByZW1vdmUgdGhlIGF0dHJpdWJ1dGVcbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ2lkJykge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50Tm9kZS5zZXRBdHRyaWJ1dGUobmFtZSwgJycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfcmVtb3ZlQXR0cmlidXRlKG5hbWUsIGN1cnJlbnROb2RlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyogRGlkIHRoZSBob29rcyBhcHByb3ZlIG9mIHRoZSBhdHRyaWJ1dGU/ICovXG4gICAgICAgICAgICBpZiAoIWhvb2tFdmVudC5rZWVwQXR0cikge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKiBNYWtlIHN1cmUgYXR0cmlidXRlIGNhbm5vdCBjbG9iYmVyICovXG4gICAgICAgICAgICBpZiAoU0FOSVRJWkVfRE9NICYmXG4gICAgICAgICAgICAgICAgICAgIChsY05hbWUgPT09ICdpZCcgfHwgbGNOYW1lID09PSAnbmFtZScpICYmXG4gICAgICAgICAgICAgICAgICAgICh2YWx1ZSBpbiB3aW5kb3cgfHwgdmFsdWUgaW4gZG9jdW1lbnQgfHwgdmFsdWUgaW4gZm9ybUVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qIFNhbml0aXplIGF0dHJpYnV0ZSBjb250ZW50IHRvIGJlIHRlbXBsYXRlLXNhZmUgKi9cbiAgICAgICAgICAgIGlmIChTQUZFX0ZPUl9URU1QTEFURVMpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoTVVTVEFDSEVfRVhQUiwgJyAnKTtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoRVJCX0VYUFIsICcgJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qIEFsbG93IHZhbGlkIGRhdGEtKiBhdHRyaWJ1dGVzOiBBdCBsZWFzdCBvbmUgY2hhcmFjdGVyIGFmdGVyIFwiLVwiXG4gICAgICAgICAgICAgICAoaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvZG9tLmh0bWwjZW1iZWRkaW5nLWN1c3RvbS1ub24tdmlzaWJsZS1kYXRhLXdpdGgtdGhlLWRhdGEtKi1hdHRyaWJ1dGVzKVxuICAgICAgICAgICAgICAgWE1MLWNvbXBhdGlibGUgKGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2luZnJhc3RydWN0dXJlLmh0bWwjeG1sLWNvbXBhdGlibGUgYW5kIGh0dHA6Ly93d3cudzMub3JnL1RSL3htbC8jZDBlODA0KVxuICAgICAgICAgICAgICAgV2UgZG9uJ3QgbmVlZCB0byBjaGVjayB0aGUgdmFsdWU7IGl0J3MgYWx3YXlzIFVSSSBzYWZlLiAqL1xuICAgICAgICAgICAgaWYgKEFMTE9XX0RBVEFfQVRUUiAmJiBEQVRBX0FUVFIudGVzdChsY05hbWUpKSB7XG4gICAgICAgICAgICAgICAgLy8gVGhpcyBhdHRyaWJ1dGUgaXMgc2FmZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyogT3RoZXJ3aXNlLCBjaGVjayB0aGUgbmFtZSBpcyBwZXJtaXR0ZWQgKi9cbiAgICAgICAgICAgIGVsc2UgaWYgKCFBTExPV0VEX0FUVFJbbGNOYW1lXSB8fCBGT1JCSURfQVRUUltsY05hbWVdKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKiBDaGVjayB2YWx1ZSBpcyBzYWZlLiBGaXJzdCwgaXMgYXR0ciBpbmVydD8gSWYgc28sIGlzIHNhZmUgKi9cbiAgICAgICAgICAgIGVsc2UgaWYgKFVSSV9TQUZFX0FUVFJJQlVURVNbbGNOYW1lXSkge1xuICAgICAgICAgICAgICAgIC8vIFRoaXMgYXR0cmlidXRlIGlzIHNhZmVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qIENoZWNrIG5vIHNjcmlwdCwgZGF0YSBvciB1bmtub3duIHBvc3NpYmx5IHVuc2FmZSBVUklcbiAgICAgICAgICAgICAgIHVubGVzcyB3ZSBrbm93IFVSSSB2YWx1ZXMgYXJlIHNhZmUgZm9yIHRoYXQgYXR0cmlidXRlICovXG4gICAgICAgICAgICBlbHNlIGlmIChJU19BTExPV0VEX1VSSS50ZXN0KHZhbHVlLnJlcGxhY2UoQVRUUl9XSElURVNQQUNFLCcnKSkpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGF0dHJpYnV0ZSBpcyBzYWZlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKiBLZWVwIGltYWdlIGRhdGEgVVJJcyBhbGl2ZSBpZiBzcmMgaXMgYWxsb3dlZCAqL1xuICAgICAgICAgICAgZWxzZSBpZiAoXG4gICAgICAgICAgICAgICAgbGNOYW1lID09PSAnc3JjJyAmJlxuICAgICAgICAgICAgICAgIHZhbHVlLmluZGV4T2YoJ2RhdGE6JykgPT09IDAgJiZcbiAgICAgICAgICAgICAgICBEQVRBX1VSSV9UQUdTW2N1cnJlbnROb2RlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCldKSB7XG4gICAgICAgICAgICAgICAgLy8gVGhpcyBhdHRyaWJ1dGUgaXMgc2FmZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyogQWxsb3cgdW5rbm93biBwcm90b2NvbHM6IFRoaXMgcHJvdmlkZXMgc3VwcG9ydCBmb3IgbGlua3MgdGhhdFxuICAgICAgICAgICAgICAgYXJlIGhhbmRsZWQgYnkgcHJvdG9jb2wgaGFuZGxlcnMgd2hpY2ggbWF5IGJlIHVua25vd24gYWhlYWQgb2ZcbiAgICAgICAgICAgICAgIHRpbWUsIGUuZy4gZmI6LCBzcG90aWZ5OiAqL1xuICAgICAgICAgICAgZWxzZSBpZiAoXG4gICAgICAgICAgICAgICAgQUxMT1dfVU5LTk9XTl9QUk9UT0NPTFMgJiZcbiAgICAgICAgICAgICAgICAhSVNfU0NSSVBUX09SX0RBVEEudGVzdCh2YWx1ZS5yZXBsYWNlKEFUVFJfV0hJVEVTUEFDRSwnJykpKSB7XG4gICAgICAgICAgICAgICAgLy8gVGhpcyBhdHRyaWJ1dGUgaXMgc2FmZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyogQ2hlY2sgZm9yIGJpbmFyeSBhdHRyaWJ1dGVzICovXG4gICAgICAgICAgICBlbHNlIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAvLyBiaW5hcnkgYXR0cmlidXRlcyBhcmUgc2FmZSBhdCB0aGlzIHBvaW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKiBBbnl0aGluZyBlbHNlLCBwcmVzdW1lIHVuc2FmZSwgZG8gbm90IGFkZCBpdCBiYWNrICovXG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyogSGFuZGxlIGludmFsaWQgZGF0YS0qIGF0dHJpYnV0ZSBzZXQgYnkgdHJ5LWNhdGNoaW5nIGl0ICovXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnROb2RlLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgRE9NUHVyaWZ5LnJlbW92ZWQucG9wKCk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgICB9XG5cbiAgICAgICAgLyogRXhlY3V0ZSBhIGhvb2sgaWYgcHJlc2VudCAqL1xuICAgICAgICBfZXhlY3V0ZUhvb2soJ2FmdGVyU2FuaXRpemVBdHRyaWJ1dGVzJywgY3VycmVudE5vZGUsIG51bGwpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBfc2FuaXRpemVTaGFkb3dET01cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgZnJhZ21lbnQgdG8gaXRlcmF0ZSBvdmVyIHJlY3Vyc2l2ZWx5XG4gICAgICogQHJldHVybiB2b2lkXG4gICAgICovXG4gICAgdmFyIF9zYW5pdGl6ZVNoYWRvd0RPTSA9IGZ1bmN0aW9uKGZyYWdtZW50KSB7XG4gICAgICAgIHZhciBzaGFkb3dOb2RlO1xuICAgICAgICB2YXIgc2hhZG93SXRlcmF0b3IgPSBfY3JlYXRlSXRlcmF0b3IoZnJhZ21lbnQpO1xuXG4gICAgICAgIC8qIEV4ZWN1dGUgYSBob29rIGlmIHByZXNlbnQgKi9cbiAgICAgICAgX2V4ZWN1dGVIb29rKCdiZWZvcmVTYW5pdGl6ZVNoYWRvd0RPTScsIGZyYWdtZW50LCBudWxsKTtcblxuICAgICAgICB3aGlsZSAoIChzaGFkb3dOb2RlID0gc2hhZG93SXRlcmF0b3IubmV4dE5vZGUoKSkgKSB7XG4gICAgICAgICAgICAvKiBFeGVjdXRlIGEgaG9vayBpZiBwcmVzZW50ICovXG4gICAgICAgICAgICBfZXhlY3V0ZUhvb2soJ3Vwb25TYW5pdGl6ZVNoYWRvd05vZGUnLCBzaGFkb3dOb2RlLCBudWxsKTtcblxuICAgICAgICAgICAgLyogU2FuaXRpemUgdGFncyBhbmQgZWxlbWVudHMgKi9cbiAgICAgICAgICAgIGlmIChfc2FuaXRpemVFbGVtZW50cyhzaGFkb3dOb2RlKSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKiBEZWVwIHNoYWRvdyBET00gZGV0ZWN0ZWQgKi9cbiAgICAgICAgICAgIGlmIChzaGFkb3dOb2RlLmNvbnRlbnQgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50KSB7XG4gICAgICAgICAgICAgICAgX3Nhbml0aXplU2hhZG93RE9NKHNoYWRvd05vZGUuY29udGVudCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qIENoZWNrIGF0dHJpYnV0ZXMsIHNhbml0aXplIGlmIG5lY2Vzc2FyeSAqL1xuICAgICAgICAgICAgX3Nhbml0aXplQXR0cmlidXRlcyhzaGFkb3dOb2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIEV4ZWN1dGUgYSBob29rIGlmIHByZXNlbnQgKi9cbiAgICAgICAgX2V4ZWN1dGVIb29rKCdhZnRlclNhbml0aXplU2hhZG93RE9NJywgZnJhZ21lbnQsIG51bGwpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBfZXhlY3V0ZUhvb2tcbiAgICAgKiBFeGVjdXRlIHVzZXIgY29uZmlndXJhYmxlIGhvb2tzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IGVudHJ5UG9pbnQgIE5hbWUgb2YgdGhlIGhvb2sncyBlbnRyeSBwb2ludFxuICAgICAqIEBwYXJhbSAge05vZGV9IGN1cnJlbnROb2RlXG4gICAgICovXG4gICAgdmFyIF9leGVjdXRlSG9vayA9IGZ1bmN0aW9uKGVudHJ5UG9pbnQsIGN1cnJlbnROb2RlLCBkYXRhKSB7XG4gICAgICAgIGlmICghaG9va3NbZW50cnlQb2ludF0pIHsgcmV0dXJuOyB9XG5cbiAgICAgICAgaG9va3NbZW50cnlQb2ludF0uZm9yRWFjaChmdW5jdGlvbihob29rKSB7XG4gICAgICAgICAgICBob29rLmNhbGwoRE9NUHVyaWZ5LCBjdXJyZW50Tm9kZSwgZGF0YSwgQ09ORklHKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIHNhbml0aXplXG4gICAgICogUHVibGljIG1ldGhvZCBwcm92aWRpbmcgY29yZSBzYW5pdGF0aW9uIGZ1bmN0aW9uYWxpdHlcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfE5vZGV9IGRpcnR5IHN0cmluZyBvciBET00gbm9kZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWd1cmF0aW9uIG9iamVjdFxuICAgICAqL1xuICAgIERPTVB1cmlmeS5zYW5pdGl6ZSA9IGZ1bmN0aW9uKGRpcnR5LCBjZmcpIHtcbiAgICAgICAgdmFyIGJvZHksIGltcG9ydGVkTm9kZSwgY3VycmVudE5vZGUsIG9sZE5vZGUsIG5vZGVJdGVyYXRvciwgcmV0dXJuTm9kZTtcbiAgICAgICAgLyogTWFrZSBzdXJlIHdlIGhhdmUgYSBzdHJpbmcgdG8gc2FuaXRpemUuXG4gICAgICAgICAgIERPIE5PVCByZXR1cm4gZWFybHksIGFzIHRoaXMgd2lsbCByZXR1cm4gdGhlIHdyb25nIHR5cGUgaWZcbiAgICAgICAgICAgdGhlIHVzZXIgaGFzIHJlcXVlc3RlZCBhIERPTSBvYmplY3QgcmF0aGVyIHRoYW4gYSBzdHJpbmcgKi9cbiAgICAgICAgaWYgKCFkaXJ0eSkge1xuICAgICAgICAgICAgZGlydHkgPSAnPCEtLT4nO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogU3RyaW5naWZ5LCBpbiBjYXNlIGRpcnR5IGlzIGFuIG9iamVjdCAqL1xuICAgICAgICBpZiAodHlwZW9mIGRpcnR5ICE9PSAnc3RyaW5nJyAmJiAhX2lzTm9kZShkaXJ0eSkpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZGlydHkudG9TdHJpbmcgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCd0b1N0cmluZyBpcyBub3QgYSBmdW5jdGlvbicpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkaXJ0eSA9IGRpcnR5LnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKiBDaGVjayB3ZSBjYW4gcnVuLiBPdGhlcndpc2UgZmFsbCBiYWNrIG9yIGlnbm9yZSAqL1xuICAgICAgICBpZiAoIURPTVB1cmlmeS5pc1N1cHBvcnRlZCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cudG9TdGF0aWNIVE1MID09PSAnb2JqZWN0J1xuICAgICAgICAgICAgICAgIHx8IHR5cGVvZiB3aW5kb3cudG9TdGF0aWNIVE1MID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkaXJ0eSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy50b1N0YXRpY0hUTUwoZGlydHkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoX2lzTm9kZShkaXJ0eSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy50b1N0YXRpY0hUTUwoZGlydHkub3V0ZXJIVE1MKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGlydHk7XG4gICAgICAgIH1cblxuICAgICAgICAvKiBBc3NpZ24gY29uZmlnIHZhcnMgKi9cbiAgICAgICAgX3BhcnNlQ29uZmlnKGNmZyk7XG5cbiAgICAgICAgLyogQ2xlYW4gdXAgcmVtb3ZlZCBlbGVtZW50cyAqL1xuICAgICAgICBET01QdXJpZnkucmVtb3ZlZCA9IFtdO1xuXG4gICAgICAgIGlmIChkaXJ0eSBpbnN0YW5jZW9mIE5vZGUpIHtcbiAgICAgICAgICAgIC8qIElmIGRpcnR5IGlzIGEgRE9NIGVsZW1lbnQsIGFwcGVuZCB0byBhbiBlbXB0eSBkb2N1bWVudCB0byBhdm9pZFxuICAgICAgICAgICAgICAgZWxlbWVudHMgYmVpbmcgc3RyaXBwZWQgYnkgdGhlIHBhcnNlciAqL1xuICAgICAgICAgICAgYm9keSA9IF9pbml0RG9jdW1lbnQoJzwhLS0+Jyk7XG4gICAgICAgICAgICBpbXBvcnRlZE5vZGUgPSBib2R5Lm93bmVyRG9jdW1lbnQuaW1wb3J0Tm9kZShkaXJ0eSwgdHJ1ZSk7XG4gICAgICAgICAgICBpZiAoaW1wb3J0ZWROb2RlLm5vZGVUeXBlID09PSAxICYmIGltcG9ydGVkTm9kZS5ub2RlTmFtZSA9PT0gJ0JPRFknKSB7XG4gICAgICAgICAgICAgICAgLyogTm9kZSBpcyBhbHJlYWR5IGEgYm9keSwgdXNlIGFzIGlzICovXG4gICAgICAgICAgICAgICAgYm9keSA9IGltcG9ydGVkTm9kZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYm9keS5hcHBlbmRDaGlsZCggaW1wb3J0ZWROb2RlICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvKiBFeGl0IGRpcmVjdGx5IGlmIHdlIGhhdmUgbm90aGluZyB0byBkbyAqL1xuICAgICAgICAgICAgaWYgKCFSRVRVUk5fRE9NICYmICFXSE9MRV9ET0NVTUVOVCAmJiBkaXJ0eS5pbmRleE9mKCc8JykgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRpcnR5O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKiBJbml0aWFsaXplIHRoZSBkb2N1bWVudCB0byB3b3JrIG9uICovXG4gICAgICAgICAgICBib2R5ID0gX2luaXREb2N1bWVudChkaXJ0eSk7XG5cbiAgICAgICAgICAgIC8qIENoZWNrIHdlIGhhdmUgYSBET00gbm9kZSBmcm9tIHRoZSBkYXRhICovXG4gICAgICAgICAgICBpZiAoIWJvZHkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUkVUVVJOX0RPTSA/IG51bGwgOiAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qIEdldCBub2RlIGl0ZXJhdG9yICovXG4gICAgICAgIG5vZGVJdGVyYXRvciA9IF9jcmVhdGVJdGVyYXRvcihib2R5KTtcblxuICAgICAgICAvKiBOb3cgc3RhcnQgaXRlcmF0aW5nIG92ZXIgdGhlIGNyZWF0ZWQgZG9jdW1lbnQgKi9cbiAgICAgICAgd2hpbGUgKCAoY3VycmVudE5vZGUgPSBub2RlSXRlcmF0b3IubmV4dE5vZGUoKSkgKSB7XG5cbiAgICAgICAgICAgIC8qIEZpeCBJRSdzIHN0cmFuZ2UgYmVoYXZpb3Igd2l0aCBtYW5pcHVsYXRlZCB0ZXh0Tm9kZXMgIzg5ICovXG4gICAgICAgICAgICBpZiAoY3VycmVudE5vZGUubm9kZVR5cGUgPT09IDMgJiYgY3VycmVudE5vZGUgPT09IG9sZE5vZGUpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyogU2FuaXRpemUgdGFncyBhbmQgZWxlbWVudHMgKi9cbiAgICAgICAgICAgIGlmIChfc2FuaXRpemVFbGVtZW50cyhjdXJyZW50Tm9kZSkpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyogU2hhZG93IERPTSBkZXRlY3RlZCwgc2FuaXRpemUgaXQgKi9cbiAgICAgICAgICAgIGlmIChjdXJyZW50Tm9kZS5jb250ZW50IGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudCkge1xuICAgICAgICAgICAgICAgIF9zYW5pdGl6ZVNoYWRvd0RPTShjdXJyZW50Tm9kZS5jb250ZW50KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyogQ2hlY2sgYXR0cmlidXRlcywgc2FuaXRpemUgaWYgbmVjZXNzYXJ5ICovXG4gICAgICAgICAgICBfc2FuaXRpemVBdHRyaWJ1dGVzKGN1cnJlbnROb2RlKTtcblxuICAgICAgICAgICAgb2xkTm9kZSA9IGN1cnJlbnROb2RlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogUmV0dXJuIHNhbml0aXplZCBzdHJpbmcgb3IgRE9NICovXG4gICAgICAgIGlmIChSRVRVUk5fRE9NKSB7XG5cbiAgICAgICAgICAgIGlmIChSRVRVUk5fRE9NX0ZSQUdNRU5UKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuTm9kZSA9IGNyZWF0ZURvY3VtZW50RnJhZ21lbnQuY2FsbChib2R5Lm93bmVyRG9jdW1lbnQpO1xuXG4gICAgICAgICAgICAgICAgd2hpbGUgKGJvZHkuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5Ob2RlLmFwcGVuZENoaWxkKGJvZHkuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm5Ob2RlID0gYm9keTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFJFVFVSTl9ET01fSU1QT1JUKSB7XG4gICAgICAgICAgICAgICAgLyogYWRvcHROb2RlKCkgaXMgbm90IHVzZWQgYmVjYXVzZSBpbnRlcm5hbCBzdGF0ZSBpcyBub3QgcmVzZXRcbiAgICAgICAgICAgICAgICAgICAoZS5nLiB0aGUgcGFzdCBuYW1lcyBtYXAgb2YgYSBIVE1MRm9ybUVsZW1lbnQpLCB0aGlzIGlzIHNhZmVcbiAgICAgICAgICAgICAgICAgICBpbiB0aGVvcnkgYnV0IHdlIHdvdWxkIHJhdGhlciBub3QgcmlzayBhbm90aGVyIGF0dGFjayB2ZWN0b3IuXG4gICAgICAgICAgICAgICAgICAgVGhlIHN0YXRlIHRoYXQgaXMgY2xvbmVkIGJ5IGltcG9ydE5vZGUoKSBpcyBleHBsaWNpdGx5IGRlZmluZWRcbiAgICAgICAgICAgICAgICAgICBieSB0aGUgc3BlY3MuICovXG4gICAgICAgICAgICAgICAgcmV0dXJuTm9kZSA9IGltcG9ydE5vZGUuY2FsbChvcmlnaW5hbERvY3VtZW50LCByZXR1cm5Ob2RlLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJldHVybk5vZGU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gV0hPTEVfRE9DVU1FTlQgPyBib2R5Lm91dGVySFRNTCA6IGJvZHkuaW5uZXJIVE1MO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBhZGRIb29rXG4gICAgICogUHVibGljIG1ldGhvZCB0byBhZGQgRE9NUHVyaWZ5IGhvb2tzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZW50cnlQb2ludFxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGhvb2tGdW5jdGlvblxuICAgICAqL1xuICAgIERPTVB1cmlmeS5hZGRIb29rID0gZnVuY3Rpb24oZW50cnlQb2ludCwgaG9va0Z1bmN0aW9uKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaG9va0Z1bmN0aW9uICE9PSAnZnVuY3Rpb24nKSB7IHJldHVybjsgfVxuICAgICAgICBob29rc1tlbnRyeVBvaW50XSA9IGhvb2tzW2VudHJ5UG9pbnRdIHx8IFtdO1xuICAgICAgICBob29rc1tlbnRyeVBvaW50XS5wdXNoKGhvb2tGdW5jdGlvbik7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIHJlbW92ZUhvb2tcbiAgICAgKiBQdWJsaWMgbWV0aG9kIHRvIHJlbW92ZSBhIERPTVB1cmlmeSBob29rIGF0IGEgZ2l2ZW4gZW50cnlQb2ludFxuICAgICAqIChwb3BzIGl0IGZyb20gdGhlIHN0YWNrIG9mIGhvb2tzIGlmIG1vcmUgYXJlIHByZXNlbnQpXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZW50cnlQb2ludFxuICAgICAqIEByZXR1cm4gdm9pZFxuICAgICAqL1xuICAgIERPTVB1cmlmeS5yZW1vdmVIb29rID0gZnVuY3Rpb24oZW50cnlQb2ludCkge1xuICAgICAgICBpZiAoaG9va3NbZW50cnlQb2ludF0pIHtcbiAgICAgICAgICAgIGhvb2tzW2VudHJ5UG9pbnRdLnBvcCgpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIHJlbW92ZUhvb2tzXG4gICAgICogUHVibGljIG1ldGhvZCB0byByZW1vdmUgYWxsIERPTVB1cmlmeSBob29rcyBhdCBhIGdpdmVuIGVudHJ5UG9pbnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gZW50cnlQb2ludFxuICAgICAqIEByZXR1cm4gdm9pZFxuICAgICAqL1xuICAgIERPTVB1cmlmeS5yZW1vdmVIb29rcyA9IGZ1bmN0aW9uKGVudHJ5UG9pbnQpIHtcbiAgICAgICAgaWYgKGhvb2tzW2VudHJ5UG9pbnRdKSB7XG4gICAgICAgICAgICBob29rc1tlbnRyeVBvaW50XSA9IFtdO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIHJlbW92ZUFsbEhvb2tzXG4gICAgICogUHVibGljIG1ldGhvZCB0byByZW1vdmUgYWxsIERPTVB1cmlmeSBob29rc1xuICAgICAqXG4gICAgICogQHJldHVybiB2b2lkXG4gICAgICovXG4gICAgRE9NUHVyaWZ5LnJlbW92ZUFsbEhvb2tzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGhvb2tzID0ge307XG4gICAgfTtcblxuICAgIHJldHVybiBET01QdXJpZnk7XG59KSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kb21wdXJpZnkvc3JjL3B1cmlmeS5qc1xuLy8gbW9kdWxlIGlkID0gNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcblx0dHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOlxuXHR0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxuXHQoZ2xvYmFsLkJyb3dzZXJTcHJpdGVTeW1ib2wgPSBmYWN0b3J5KCkpO1xufSh0aGlzLCAoZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7XG5cbnZhciBTcHJpdGVTeW1ib2wgPSBmdW5jdGlvbiBTcHJpdGVTeW1ib2wocmVmKSB7XG4gIHZhciBpZCA9IHJlZi5pZDtcbiAgdmFyIHZpZXdCb3ggPSByZWYudmlld0JveDtcbiAgdmFyIGNvbnRlbnQgPSByZWYuY29udGVudDtcblxuICB0aGlzLmlkID0gaWQ7XG4gIHRoaXMudmlld0JveCA9IHZpZXdCb3g7XG4gIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG59O1xuXG4vKipcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuU3ByaXRlU3ltYm9sLnByb3RvdHlwZS5zdHJpbmdpZnkgPSBmdW5jdGlvbiBzdHJpbmdpZnkgKCkge1xuICByZXR1cm4gdGhpcy5jb250ZW50O1xufTtcblxuLyoqXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cblNwcml0ZVN5bWJvbC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyAoKSB7XG4gIHJldHVybiB0aGlzLnN0cmluZ2lmeSgpO1xufTtcblxuU3ByaXRlU3ltYm9sLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gZGVzdHJveSAoKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgWydpZCcsICd2aWV3Qm94JywgJ2NvbnRlbnQnXS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wKSB7IHJldHVybiBkZWxldGUgdGhpcyQxW3Byb3BdOyB9KTtcbn07XG5cbnZhciBhcnJheUZyb20gPSBmdW5jdGlvbiAoYXJyYXlMaWtlKSB7XG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcnJheUxpa2UsIDApO1xufTtcblxudmFyIHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcblxudmFyIGJyb3dzZXIgPSB7XG4gIGlzQ2hyb21lOiAvY2hyb21lL2kudGVzdCh1YSksXG4gIGlzRmlyZWZveDogL2ZpcmVmb3gvaS50ZXN0KHVhKSxcbiAgaXNJRTogL21zaWUvaS50ZXN0KHVhKSxcbiAgaXNFZGdlOiAvZWRnZS9pLnRlc3QodWEpXG59O1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0geyp9IGRhdGFcbiAqL1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBbdXJsXSBJZiBub3QgcHJvdmlkZWQgLSBjdXJyZW50IFVSTCB3aWxsIGJlIHVzZWRcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuXG4vKiBnbG9iYWwgYW5ndWxhciAqL1xuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lXG4gKi9cblxudmFyIGRlZmF1bHRTZWxlY3RvciA9ICdsaW5lYXJHcmFkaWVudCwgcmFkaWFsR3JhZGllbnQsIHBhdHRlcm4nO1xuXG4vKipcbiAqIEBwYXJhbSB7RWxlbWVudH0gc3ZnXG4gKiBAcGFyYW0ge3N0cmluZ30gW3NlbGVjdG9yXVxuICogQHJldHVybiB7RWxlbWVudH1cbiAqL1xudmFyIG1vdmVHcmFkaWVudHNPdXRzaWRlU3ltYm9sID0gZnVuY3Rpb24gKHN2Zywgc2VsZWN0b3IpIHtcbiAgaWYgKCBzZWxlY3RvciA9PT0gdm9pZCAwICkgc2VsZWN0b3IgPSBkZWZhdWx0U2VsZWN0b3I7XG5cbiAgYXJyYXlGcm9tKHN2Zy5xdWVyeVNlbGVjdG9yQWxsKCdzeW1ib2wnKSkuZm9yRWFjaChmdW5jdGlvbiAoc3ltYm9sKSB7XG4gICAgYXJyYXlGcm9tKHN5bWJvbC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSkuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgc3ltYm9sLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5vZGUsIHN5bWJvbCk7XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gc3ZnO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge09iamVjdH0gYXR0cnNcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xudmFyIG9iamVjdFRvQXR0cnNTdHJpbmcgPSBmdW5jdGlvbiAoYXR0cnMpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKGF0dHJzKS5tYXAoZnVuY3Rpb24gKGF0dHIpIHtcbiAgICB2YXIgdmFsdWUgPSBhdHRyc1thdHRyXS50b1N0cmluZygpLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKTtcbiAgICByZXR1cm4gKGF0dHIgKyBcIj1cXFwiXCIgKyB2YWx1ZSArIFwiXFxcIlwiKTtcbiAgfSkuam9pbignICcpO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gY29udGVudFxuICogQHJldHVybiB7RWxlbWVudH1cbiAqL1xudmFyIHBhcnNlID0gZnVuY3Rpb24gKGNvbnRlbnQpIHtcbiAgdmFyIGhhc0ltcG9ydE5vZGUgPSAhIWRvY3VtZW50LmltcG9ydE5vZGU7XG4gIHZhciBkb2MgPSBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKGNvbnRlbnQsICdpbWFnZS9zdmcreG1sJykuZG9jdW1lbnRFbGVtZW50O1xuXG4gIC8qKlxuICAgKiBGaXggZm9yIGJyb3dzZXIgd2hpY2ggYXJlIHRocm93aW5nIFdyb25nRG9jdW1lbnRFcnJvclxuICAgKiBpZiB5b3UgaW5zZXJ0IGFuIGVsZW1lbnQgd2hpY2ggaXMgbm90IHBhcnQgb2YgdGhlIGRvY3VtZW50XG4gICAqIEBzZWUgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzk4NjUxOS80NjI0NDAzXG4gICAqL1xuICBpZiAoaGFzSW1wb3J0Tm9kZSkge1xuICAgIHJldHVybiBkb2N1bWVudC5pbXBvcnROb2RlKGRvYywgdHJ1ZSk7XG4gIH1cblxuICByZXR1cm4gZG9jO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge05vZGVMaXN0fE5vZGV9IG5vZGVzXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtjbG9uZT10cnVlXVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5cbnZhciBjb21tb25qc0dsb2JhbCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDoge307XG5cblxuXG5cblxuZnVuY3Rpb24gY3JlYXRlQ29tbW9uanNNb2R1bGUoZm4sIG1vZHVsZSkge1xuXHRyZXR1cm4gbW9kdWxlID0geyBleHBvcnRzOiB7fSB9LCBmbihtb2R1bGUsIG1vZHVsZS5leHBvcnRzKSwgbW9kdWxlLmV4cG9ydHM7XG59XG5cbnZhciBuYW1lc3BhY2VzXzEgPSBjcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbiAobW9kdWxlLCBleHBvcnRzKSB7XG52YXIgbmFtZXNwYWNlcyA9IHtcbiAgc3ZnOiB7XG4gICAgbmFtZTogJ3htbG5zJyxcbiAgICB1cmk6ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcbiAgfSxcbiAgeGxpbms6IHtcbiAgICBuYW1lOiAneG1sbnM6eGxpbmsnLFxuICAgIHVyaTogJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnXG4gIH1cbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IG5hbWVzcGFjZXM7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbn0pO1xuXG4vKipcbiAqIExpc3Qgb2YgU1ZHIGF0dHJpYnV0ZXMgdG8gdXBkYXRlIHVybCgpIHRhcmdldCBpbiB0aGVtXG4gKi9cbnZhciBhdHRMaXN0ID0gW1xuICAnY2xpcFBhdGgnLFxuICAnY29sb3JQcm9maWxlJyxcbiAgJ3NyYycsXG4gICdjdXJzb3InLFxuICAnZmlsbCcsXG4gICdmaWx0ZXInLFxuICAnbWFya2VyJyxcbiAgJ21hcmtlclN0YXJ0JyxcbiAgJ21hcmtlck1pZCcsXG4gICdtYXJrZXJFbmQnLFxuICAnbWFzaycsXG4gICdzdHJva2UnLFxuICAnc3R5bGUnXG5dO1xuXG52YXIgYXR0U2VsZWN0b3IgPSBhdHRMaXN0Lm1hcChmdW5jdGlvbiAoYXR0cikgeyByZXR1cm4gKFwiW1wiICsgYXR0ciArIFwiXVwiKTsgfSkuam9pbignLCcpO1xuXG4vKipcbiAqIFVwZGF0ZSBVUkxzIGluIHN2ZyBpbWFnZSAobGlrZSBgZmlsbD1cInVybCguLi4pXCJgKSBhbmQgdXBkYXRlIHJlZmVyZW5jaW5nIGVsZW1lbnRzXG4gKiBAcGFyYW0ge0VsZW1lbnR9IHN2Z1xuICogQHBhcmFtIHtOb2RlTGlzdH0gcmVmZXJlbmNlc1xuICogQHBhcmFtIHtzdHJpbmd8UmVnRXhwfSBzdGFydHNXaXRoXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVwbGFjZVdpdGhcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKlxuICogQGV4YW1wbGVcbiAqIGNvbnN0IHNwcml0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3N2Zy5zcHJpdGUnKTtcbiAqIGNvbnN0IHVzYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3VzZScpO1xuICogdXBkYXRlVXJscyhzcHJpdGUsIHVzYWdlcywgJyMnLCAncHJlZml4IycpO1xuICovXG5cbnZhciBpbmRleCA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUsIGV4cG9ydHMpIHtcbihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuICAgIGlmICh0eXBlb2YgdW5kZWZpbmVkID09PSAnZnVuY3Rpb24nICYmIHVuZGVmaW5lZC5hbWQpIHtcbiAgICAgICAgdW5kZWZpbmVkKGZhY3RvcnkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICAgIH1cbn0oY29tbW9uanNHbG9iYWwsIGZ1bmN0aW9uICgpIHtcblxuZnVuY3Rpb24gaXNNZXJnZWFibGVPYmplY3QodmFsKSB7XG4gICAgdmFyIG5vbk51bGxPYmplY3QgPSB2YWwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCc7XG5cbiAgICByZXR1cm4gbm9uTnVsbE9iamVjdFxuICAgICAgICAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsKSAhPT0gJ1tvYmplY3QgUmVnRXhwXSdcbiAgICAgICAgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbCkgIT09ICdbb2JqZWN0IERhdGVdJ1xufVxuXG5mdW5jdGlvbiBlbXB0eVRhcmdldCh2YWwpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWwpID8gW10gOiB7fVxufVxuXG5mdW5jdGlvbiBjbG9uZUlmTmVjZXNzYXJ5KHZhbHVlLCBvcHRpb25zQXJndW1lbnQpIHtcbiAgICB2YXIgY2xvbmUgPSBvcHRpb25zQXJndW1lbnQgJiYgb3B0aW9uc0FyZ3VtZW50LmNsb25lID09PSB0cnVlO1xuICAgIHJldHVybiAoY2xvbmUgJiYgaXNNZXJnZWFibGVPYmplY3QodmFsdWUpKSA/IGRlZXBtZXJnZShlbXB0eVRhcmdldCh2YWx1ZSksIHZhbHVlLCBvcHRpb25zQXJndW1lbnQpIDogdmFsdWVcbn1cblxuZnVuY3Rpb24gZGVmYXVsdEFycmF5TWVyZ2UodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnNBcmd1bWVudCkge1xuICAgIHZhciBkZXN0aW5hdGlvbiA9IHRhcmdldC5zbGljZSgpO1xuICAgIHNvdXJjZS5mb3JFYWNoKGZ1bmN0aW9uKGUsIGkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkZXN0aW5hdGlvbltpXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uW2ldID0gY2xvbmVJZk5lY2Vzc2FyeShlLCBvcHRpb25zQXJndW1lbnQpO1xuICAgICAgICB9IGVsc2UgaWYgKGlzTWVyZ2VhYmxlT2JqZWN0KGUpKSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbltpXSA9IGRlZXBtZXJnZSh0YXJnZXRbaV0sIGUsIG9wdGlvbnNBcmd1bWVudCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0LmluZGV4T2YoZSkgPT09IC0xKSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbi5wdXNoKGNsb25lSWZOZWNlc3NhcnkoZSwgb3B0aW9uc0FyZ3VtZW50KSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZGVzdGluYXRpb25cbn1cblxuZnVuY3Rpb24gbWVyZ2VPYmplY3QodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnNBcmd1bWVudCkge1xuICAgIHZhciBkZXN0aW5hdGlvbiA9IHt9O1xuICAgIGlmIChpc01lcmdlYWJsZU9iamVjdCh0YXJnZXQpKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHRhcmdldCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbltrZXldID0gY2xvbmVJZk5lY2Vzc2FyeSh0YXJnZXRba2V5XSwgb3B0aW9uc0FyZ3VtZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGlmICghaXNNZXJnZWFibGVPYmplY3Qoc291cmNlW2tleV0pIHx8ICF0YXJnZXRba2V5XSkge1xuICAgICAgICAgICAgZGVzdGluYXRpb25ba2V5XSA9IGNsb25lSWZOZWNlc3Nhcnkoc291cmNlW2tleV0sIG9wdGlvbnNBcmd1bWVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbltrZXldID0gZGVlcG1lcmdlKHRhcmdldFtrZXldLCBzb3VyY2Vba2V5XSwgb3B0aW9uc0FyZ3VtZW50KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBkZXN0aW5hdGlvblxufVxuXG5mdW5jdGlvbiBkZWVwbWVyZ2UodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnNBcmd1bWVudCkge1xuICAgIHZhciBhcnJheSA9IEFycmF5LmlzQXJyYXkoc291cmNlKTtcbiAgICB2YXIgb3B0aW9ucyA9IG9wdGlvbnNBcmd1bWVudCB8fCB7IGFycmF5TWVyZ2U6IGRlZmF1bHRBcnJheU1lcmdlIH07XG4gICAgdmFyIGFycmF5TWVyZ2UgPSBvcHRpb25zLmFycmF5TWVyZ2UgfHwgZGVmYXVsdEFycmF5TWVyZ2U7XG5cbiAgICBpZiAoYXJyYXkpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodGFyZ2V0KSA/IGFycmF5TWVyZ2UodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnNBcmd1bWVudCkgOiBjbG9uZUlmTmVjZXNzYXJ5KHNvdXJjZSwgb3B0aW9uc0FyZ3VtZW50KVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBtZXJnZU9iamVjdCh0YXJnZXQsIHNvdXJjZSwgb3B0aW9uc0FyZ3VtZW50KVxuICAgIH1cbn1cblxuZGVlcG1lcmdlLmFsbCA9IGZ1bmN0aW9uIGRlZXBtZXJnZUFsbChhcnJheSwgb3B0aW9uc0FyZ3VtZW50KSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5KSB8fCBhcnJheS5sZW5ndGggPCAyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZmlyc3QgYXJndW1lbnQgc2hvdWxkIGJlIGFuIGFycmF5IHdpdGggYXQgbGVhc3QgdHdvIGVsZW1lbnRzJylcbiAgICB9XG5cbiAgICAvLyB3ZSBhcmUgc3VyZSB0aGVyZSBhcmUgYXQgbGVhc3QgMiB2YWx1ZXMsIHNvIGl0IGlzIHNhZmUgdG8gaGF2ZSBubyBpbml0aWFsIHZhbHVlXG4gICAgcmV0dXJuIGFycmF5LnJlZHVjZShmdW5jdGlvbihwcmV2LCBuZXh0KSB7XG4gICAgICAgIHJldHVybiBkZWVwbWVyZ2UocHJldiwgbmV4dCwgb3B0aW9uc0FyZ3VtZW50KVxuICAgIH0pXG59O1xuXG5yZXR1cm4gZGVlcG1lcmdlXG5cbn0pKTtcbn0pO1xuXG52YXIgc3ZnID0gbmFtZXNwYWNlc18xLnN2ZztcbnZhciB4bGluayA9IG5hbWVzcGFjZXNfMS54bGluaztcblxudmFyIGRlZmF1bHRBdHRycyA9IHt9O1xuZGVmYXVsdEF0dHJzW3N2Zy5uYW1lXSA9IHN2Zy51cmk7XG5kZWZhdWx0QXR0cnNbeGxpbmsubmFtZV0gPSB4bGluay51cmk7XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb250ZW50XVxuICogQHBhcmFtIHtPYmplY3R9IFthdHRyaWJ1dGVzXVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG52YXIgd3JhcEluU3ZnU3RyaW5nID0gZnVuY3Rpb24gKGNvbnRlbnQsIGF0dHJpYnV0ZXMpIHtcbiAgaWYgKCBjb250ZW50ID09PSB2b2lkIDAgKSBjb250ZW50ID0gJyc7XG5cbiAgdmFyIGF0dHJzID0gaW5kZXgoZGVmYXVsdEF0dHJzLCBhdHRyaWJ1dGVzIHx8IHt9KTtcbiAgdmFyIGF0dHJzUmVuZGVyZWQgPSBvYmplY3RUb0F0dHJzU3RyaW5nKGF0dHJzKTtcbiAgcmV0dXJuIChcIjxzdmcgXCIgKyBhdHRyc1JlbmRlcmVkICsgXCI+XCIgKyBjb250ZW50ICsgXCI8L3N2Zz5cIik7XG59O1xuXG52YXIgQnJvd3NlclNwcml0ZVN5bWJvbCA9IChmdW5jdGlvbiAoU3ByaXRlU3ltYm9sJCQxKSB7XG4gIGZ1bmN0aW9uIEJyb3dzZXJTcHJpdGVTeW1ib2wgKCkge1xuICAgIFNwcml0ZVN5bWJvbCQkMS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgaWYgKCBTcHJpdGVTeW1ib2wkJDEgKSBCcm93c2VyU3ByaXRlU3ltYm9sLl9fcHJvdG9fXyA9IFNwcml0ZVN5bWJvbCQkMTtcbiAgQnJvd3NlclNwcml0ZVN5bWJvbC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBTcHJpdGVTeW1ib2wkJDEgJiYgU3ByaXRlU3ltYm9sJCQxLnByb3RvdHlwZSApO1xuICBCcm93c2VyU3ByaXRlU3ltYm9sLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEJyb3dzZXJTcHJpdGVTeW1ib2w7XG5cbiAgdmFyIHByb3RvdHlwZUFjY2Vzc29ycyA9IHsgaXNNb3VudGVkOiB7fSB9O1xuXG4gIHByb3RvdHlwZUFjY2Vzc29ycy5pc01vdW50ZWQuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAhIXRoaXMubm9kZTtcbiAgfTtcblxuICBCcm93c2VyU3ByaXRlU3ltYm9sLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gZGVzdHJveSAoKSB7XG4gICAgaWYgKHRoaXMuaXNNb3VudGVkKSB7XG4gICAgICB0aGlzLnVubW91bnQoKTtcbiAgICB9XG4gICAgU3ByaXRlU3ltYm9sJCQxLnByb3RvdHlwZS5kZXN0cm95LmNhbGwodGhpcyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RWxlbWVudHxzdHJpbmd9IHRhcmdldFxuICAgKiBAcmV0dXJuIHtFbGVtZW50fVxuICAgKi9cbiAgQnJvd3NlclNwcml0ZVN5bWJvbC5wcm90b3R5cGUubW91bnQgPSBmdW5jdGlvbiBtb3VudCAodGFyZ2V0KSB7XG4gICAgaWYgKHRoaXMuaXNNb3VudGVkKSB7XG4gICAgICByZXR1cm4gdGhpcy5ub2RlO1xuICAgIH1cblxuICAgIHZhciBtb3VudFRhcmdldCA9IHR5cGVvZiB0YXJnZXQgPT09ICdzdHJpbmcnID8gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpIDogdGFyZ2V0O1xuICAgIHZhciBub2RlID0gdGhpcy5yZW5kZXIoKTtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuXG4gICAgbW91bnRUYXJnZXQuYXBwZW5kQ2hpbGQobm9kZSk7XG5cbiAgICAvLyBUT0RPIGNhY2hlIG1vdmVkIG5vZGVzIHNvbWV3aGVyZSBhbmQgY2xlYW51cCBvbiBkZXN0cm95KClcbiAgICBpZiAoYnJvd3Nlci5pc0ZpcmVmb3gpIHtcbiAgICAgIG1vdmVHcmFkaWVudHNPdXRzaWRlU3ltYm9sKG1vdW50VGFyZ2V0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfTtcblxuICAvKipcbiAgICogQHJldHVybiB7RWxlbWVudH1cbiAgICovXG4gIEJyb3dzZXJTcHJpdGVTeW1ib2wucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlciAoKSB7XG4gICAgdmFyIGNvbnRlbnQgPSB0aGlzLnN0cmluZ2lmeSgpO1xuICAgIHJldHVybiBwYXJzZSh3cmFwSW5TdmdTdHJpbmcoY29udGVudCkpLmNoaWxkTm9kZXNbMF07XG4gIH07XG5cbiAgQnJvd3NlclNwcml0ZVN5bWJvbC5wcm90b3R5cGUudW5tb3VudCA9IGZ1bmN0aW9uIHVubW91bnQgKCkge1xuICAgIHRoaXMubm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMubm9kZSk7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoIEJyb3dzZXJTcHJpdGVTeW1ib2wucHJvdG90eXBlLCBwcm90b3R5cGVBY2Nlc3NvcnMgKTtcblxuICByZXR1cm4gQnJvd3NlclNwcml0ZVN5bWJvbDtcbn0oU3ByaXRlU3ltYm9sKSk7XG5cbnJldHVybiBCcm93c2VyU3ByaXRlU3ltYm9sO1xuXG59KSkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc3ZnLWJha2VyLXJ1bnRpbWUvYnJvd3Nlci1zeW1ib2wuanNcbi8vIG1vZHVsZSBpZCA9IDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBOzs7OztBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3h5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUpBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7OztBQ2JBOzs7Ozs7Ozs7QUNBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7O0FDWkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDVEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDVEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDVEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDVEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDVEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDVEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDVEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDVEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDVEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDVEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDVEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQzVGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDdkxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDaExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBZEE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDaEVBOzs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDbkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3BGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ25FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNuRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDOUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN4REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDbjRCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9