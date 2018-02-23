webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _arguments = arguments;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Commonly used constants and functions.
 *
 * @module Helpers
 */

/**
 * Cache body DOM element.
 *
 * @constant
 * @type {jQuery}
 */
var $body = exports.$body = $('body');

/**
 * Cache document.
 *
 * @constant
 * @type {jQuery}
 */
var $document = exports.$document = $(document);

/**
 * Cache window.
 *
 * @constant
 * @type {jQuery}
 */
var $window = exports.$window = $(window);

/**
 * Cache header.
 *
 * @constant
 * @type {jQuery}
 */
var $header = exports.$header = $('header');

/**
 * Cache footer.
 *
 * @constant
 * @type {jQuery}
 */
var $footer = exports.$footer = $('footer');

/**
 * Elements for cross-browser window scroll.
 *
 * @constant
 * @type {jQuery}
 */
var $scrolledElements = exports.$scrolledElements = $('html, body');

/**
 * Window width.
 *
 * @constant
 * @type {Number}
 */
var winWidth = exports.winWidth = $window.width();

/**
 * Detect current page.
 *
 * @constant
 * @type {String}
 */
var currentPage = exports.currentPage = $body.find('main').data('page');

/**
 * Toggle class on specified element on click.
 *
 * @param {jQuery} clickHandler
 * @param {jQuery} element
 * @param {String} [className='active']
 */
var toggleClass = exports.toggleClass = function toggleClass(clickHandler, element) {
  var className = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : css.active;

  clickHandler.on('click tap', function () {
    return element.toggleClass(className);
  });
};

/**
 * Check if element is in viewport.
 *
 * @param {jQuery} $element
 * @param {Boolean} [fullyInView = false] - element should be fully in viewport?
 * @param {Number} [offsetTop = 0]
 * @returns {Boolean}
 */
var isScrolledIntoView = exports.isScrolledIntoView = function isScrolledIntoView($element) {
  var offsetTop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var fullyInView = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var pageTop = $window.scrollTop();
  var pageBottom = pageTop + $window.height();
  var elementTop = $element.offset().top;
  var elementBottom = elementTop + $element.height();

  if (fullyInView) return pageTop < elementTop && pageBottom > elementBottom;

  return elementTop + offsetTop <= pageBottom && elementBottom >= pageTop;
};

/**
 * Check specified item to be target of the event.
 *
 * @param {Object} e - Event object.
 * @param {jQuery} item - Item to compare with.
 * @returns {Boolean} - Indicate whether clicked target is the specified item or not.
 */
var checkClosest = exports.checkClosest = function checkClosest(e, item) {
  return $(e.target).closest(item).length > 0;
};

/**
 * Match media device indicator.
 */

var Resp = exports.Resp = function () {
  function Resp() {
    _classCallCheck(this, Resp);
  }

  _createClass(Resp, null, [{
    key: 'currWidth',

    /**
     * Get window's current width.
     *
     * @get
     * @static
     * @return {Number}
     */
    get: function get() {
      return window.innerWidth;
    }

    /**
     * Detect touch events.
     *
     * @get
     * @static
     * @return {Boolean}
     */

  }, {
    key: 'isTouch',
    get: function get() {
      return 'ontouchstart' in window;
    }

    /**
     * Detect desktop device.
     *
     * @get
     * @static
     * @return {Boolean}
     */

  }, {
    key: 'isDesk',
    get: function get() {
      return window.matchMedia('(min-width: 1280px)').matches;
    }

    /**
     * Detect tablet device.
     *
     * @get
     * @static
     * @return {Boolean}
     */

  }, {
    key: 'isTablet',
    get: function get() {
      return window.matchMedia('(min-width: 768px) and (max-width: 1279px)').matches;
    }

    /**
     * Detect mobile device.
     *
     * @get
     * @static
     * @return {Boolean}
     */

  }, {
    key: 'isMobile',
    get: function get() {
      return window.matchMedia('(max-width: 767px)').matches;
    }
  }]);

  return Resp;
}();

/**
 * Css class names.
 *
 * @constant
 * @type {Object}
 */


var css = exports.css = {
  active: 'active'
};

/**
 * Generate string of random letters.
 *
 * @param {Number} length
 */
var randomString = exports.randomString = function randomString() {
  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
  return Math.random().toString(36).substr(2, length > 10 ? length : 10);
};

var randomDigit = exports.randomDigit = function randomDigit(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

/**
 * Returns a function, that, as long as it continues to be invoked, will not be triggered.
 *
 * @param {Function} func
 * @param {Object} context
 * @param {Number} wait
 * @param {Boolean} [immediate]
 * @returns {Function}
 */
var debounce = exports.debounce = function debounce(func, context, wait, immediate) {
  var timeout = void 0;

  return function () {
    var args = _arguments;

    var later = function later() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

/**
 * Throttle function.
 *
 * @param {Function} fn
 * @param {Number} [threshold]
 * @param {Object} [scope]
 * @returns {Function}
 */
var throttle = exports.throttle = function throttle(fn) {
  var threshold = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 250;
  var scope = arguments[2];

  var last = void 0,
      deferTimer = void 0;

  return function () {
    var context = scope || this;
    var now = +new Date();
    var args = arguments;

    if (last && now < last + threshold) {
      clearTimeout(deferTimer);
      deferTimer = setTimeout(function () {
        last = now;
        fn.apply(context, args);
      }, threshold);
    } else {
      last = now;
      fn.apply(context, args);
    }
  };
};

/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * App entry point.
 *
 * @module App
 */

/** Import initialized-by-default modules/libs */

__webpack_require__(4);

__webpack_require__(5);

var _Home = __webpack_require__(7);

var _Home2 = _interopRequireDefault(_Home);

var _helpers = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Run appropriate scripts for each page.
 **/


/** Import page controllers */
switch (_helpers.currentPage) {
  /** Home page */
  case 'home':
    new _Home2.default();break;

  /** No page found */
  default:
    console.warn('Undefined page');
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Website's common scripts (example).
 *
 * @module Common
 */

var Common = exports.Common = function () {
  /**
   * Cache data, make preparations and initialize common scripts.
   */
  function Common() {
    _classCallCheck(this, Common);

    this.messages = {
      constructor: 'Common.js: constructor()...',
      init: 'Common.js: init()...',
      example: 'Common.js: example()...'
    };

    console.log(this.messages.constructor);

    // initialize after construction
    this.init();
  }

  /**
   * Example method.
   */


  _createClass(Common, [{
    key: 'example',
    value: function example() {
      console.log(this.messages.example);
    }
  }, {
    key: 'init',


    /**
     * Initialize common scripts.
     */
    value: function init() {
      console.log(this.messages.init);
      this.example();
    }
  }]);

  return Common;
}();

/** Export initialized common scripts by default */


exports.default = new Common();

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PublicAPI = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Website's public API (example).
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Make some functions and methods accessible in global scope.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @module PublicAPI
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _Timer = __webpack_require__(6);

var _Timer2 = _interopRequireDefault(_Timer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PublicAPI = exports.PublicAPI = function () {
  function PublicAPI() {
    _classCallCheck(this, PublicAPI);
  }

  _createClass(PublicAPI, null, [{
    key: 'Timer',

    /**
     * Some of 'Timer' module public methods.
     *
     * PublicAPI.timer.init() - initialize timer
     * PublicAPI.timer.stop() - stop timer
     *
     * @return {{init: Function, stop: Function}}
     */
    get: function get() {
      return {
        init: _Timer2.default.startTimer.bind(_Timer2.default),
        stop: _Timer2.default.stopTimer.bind(_Timer2.default)
      };
    }
  }]);

  return PublicAPI;
}();

/** Expose Public API */


exports.default = window.PublicAPI = PublicAPI;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Example component (delete on prod)
 *
 * @module Timer
 */

var Timer = exports.Timer = function Timer() {
  var _this = this;

  _classCallCheck(this, Timer);

  this._counter = 1;
  this._timerInterval = null;

  this.setTimer = function (time) {
    _this._counter = time;
  };

  this.startTimer = function () {
    _this._timerInterval = setInterval(function () {
      return console.log("Timer: " + _this._counter++);
    }, 1000);
  };

  this.stopTimer = function () {
    clearInterval(_this._timerInterval);
  };
}
/**
 * @private
 * @type {Number}
 */


/**
 * @private
 * @type {Null|Number}
 */


/**
 * Set current time
 *
 * @public
 * @this Timer
 * @param {Number} time
 */


/**
 * Start countdown
 *
 * @public
 * @this Timer
 */


/**
 * Stop countdown
 *
 * @public
 * @this Timer
 */
;

exports.default = new Timer();

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Home page scripts.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @module Home
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _helpers = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Home = function () {
  /**
   * Cache data, make preparations and initialize page scripts.
   */
  function Home() {
    _classCallCheck(this, Home);

    this.message = function () {
      var message = 'Home page scripts initialized on';

      if (_helpers.Resp.isDesk) {
        return message + ' Desktop';
      } else if (_helpers.Resp.isTablet) {
        return message + ' Tablet';
      } else if (_helpers.Resp.isMobile) {
        return message + ' Mobile';
      }
    }();

    console.log((0, _helpers.randomDigit)(2, 9));

    // initialize after construction
    this.init();
  }

  /**
   * Example method.
   */


  _createClass(Home, [{
    key: 'example',
    value: function example() {
      console.log(this.message);
    }
  }, {
    key: 'fullpagescroll',
    value: function fullpagescroll() {
      $('#fullpage').fullpage();
    }
  }, {
    key: 'bannerAnimation',
    value: function bannerAnimation() {
      $('body').addClass('load');

      // top text animation
      var $menu = $('.header'),
          $topTitle = $('.screen-first__text h1'),
          $topSubTItle = $('.screen-first__text p'),
          $decor_1 = $('.decor-1'),
          $decor_2 = $('.decor-2'),
          $decor_3 = $('.decor-3'),
          $decor_4 = $('.decor-4'),
          $decor_5 = $('.decor-5'),
          $decor_6 = $('.decor-6'),
          $decor_7 = $('.decor-7'),
          $decor_8 = $('.decor-8');

      var tm = new TimelineLite({ onComplete: this.parallaxAnimation });

      tm.from($decor_7, 1, { bottom: -240, ease: Expo.easeOut }, "time-one").from($menu, .5, { top: -10, autoAlpha: 0, ease: Expo.easeOut }, "time-one+=.5").from($topTitle, 1.25, { top: -40, autoAlpha: 0, ease: Expo.easeOut }, "time-one+=.3").from($topSubTItle, 1.25, { top: -40, autoAlpha: 0, ease: Expo.easeOut }, "time-one+=.6").from($decor_5, 2.7, { right: -740, autoAlpha: 0, ease: Expo.easeInOut }, "time-one").from($decor_6, 2.7, { left: -1040, autoAlpha: 0, ease: Expo.easeInOut }, "time-one").from($decor_1, 2.5, { bottom: 200, autoAlpha: 0, ease: Expo.easeInOut }, "time-one+=1").from($decor_2, 3, { left: -100, autoAlpha: 0, ease: Expo.easeInOut }, "time-one+=1.2").from($decor_3, 3, { left: -50, autoAlpha: 0, ease: Expo.easeInOut }, "time-one+=1.2").from($decor_8, 4, { left: -300, ease: Expo.easeInOut }, "time-one+=1").from($decor_4, 3, { left: -50, autoAlpha: 0, ease: Expo.easeInOut }, "time-one+=1.2");
    }
  }, {
    key: 'parallaxAnimation',
    value: function parallaxAnimation() {
      var request = null;
      var mouse = { x: 0, y: 0 };
      var cx = window.innerWidth / 2;
      var cy = window.innerHeight / 2;

      $('body').on('mousemove', function (event) {
        mouse.x = event.pageX;
        mouse.y = event.pageY;
        cancelAnimationFrame(request);
        request = requestAnimationFrame(update);
      });

      function update() {
        var dx = mouse.x - cx;
        var dy = mouse.y - cy;

        TweenLite.to($('.decor-1'), 0, {
          x: dx / 10,
          y: dy / 12,
          ease: Power1.easeOut
        });

        TweenLite.to($('.decor-2'), 0, {
          x: dx / 14,
          y: dy / 12,
          ease: Power1.easeOut
        });

        TweenLite.to($('.decor-3'), 0, {
          x: dx / 10,
          y: dy / 12,
          ease: Power1.easeOut
        });

        TweenLite.to($('.decor-4'), 0, {
          x: dx / 20,
          y: dy / 12,
          ease: Power1.easeOut
        });

        TweenLite.to($('.decor-6'), 0, {
          x: dx / 40,
          y: dy / 20,
          ease: Power1.easeOut
        });

        TweenLite.to($('.decor-5'), 0, {
          x: dx / 40,
          y: dy / 20,
          ease: Power1.easeOut
        });
      }
    }

    /**
     * Initialize Home page scripts.
     */

  }, {
    key: 'init',
    value: function init() {
      this.example();
      // this.fullpagescroll();
      this.bannerAnimation();
    }
  }]);

  return Home;
}();

exports.default = Home;

/***/ })
],[3]);
//# sourceMappingURL=index.js.map