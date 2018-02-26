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

        this.selector = {
            $menu: $('.header'),
            $topTitle: $('.screen__text h1'),
            $topSubTItle: $('.screen__text p'),
            $scr_sun: $('#scr_sun'),
            $scr_cloud: $('#scr_cloud'),
            $scr_cloud_r: $('#scr_cloud_r'),
            $scr_cloud_l: $('#scr_cloud_l'),
            $scr_b_small: $('.scr_b_small'),
            $scr_b_big: $('.scr_b_big'),
            $scr_m_right: $('#scr_m_right'),
            $scr_m_left: $('.fs-dec-1'),
            $scr_ground: $('#first_stage_svg'),
            $scr_truck: $('#scr_truck'),
            $scr_snow: $('.fs-dec-3'),

            $st_second_text: $('.screen-second .text-block > *')

        };

        // initialize after construction
        this.init();
    }

    _createClass(Home, [{
        key: 'console',
        value: function (_console) {
            function console() {
                return _console.apply(this, arguments);
            }

            console.toString = function () {
                return _console.toString();
            };

            return console;
        }(function () {

            console.log('console');
        })
    }, {
        key: 'fullpagescroll',
        value: function fullpagescroll() {
            var _this = this;

            var scrollFlag = true;

            $('#fullpage').fullpage({
                // paddingTop: '100px',
                onLeave: function onLeave(index, nextIndex, direction) {

                    if (index == 1 && direction == 'down' && scrollFlag) {

                        var tm = new TimelineLite({ onComplete: function onComplete() {
                                _this.citiesTabParallaxAnimation();
                            } });

                        tm.to($('#smartDot'), 1, {
                            scale: 400,
                            ease: Expo.easeOut
                        }).add(function () {
                            return scrollFlag = false;
                        }).add(function () {
                            return $('#scrollDown').addClass('active');
                        }).to($('.screen-second .text-block > *'), 0, {
                            opacity: 0,
                            y: -15
                        }).to($('#smartDot'), 1, {
                            scale: 0,
                            top: "auto",
                            bottom: "30px",
                            left: "30px",
                            ease: Expo.easeOut
                        }).staggerTo($('.screen-second .text-block > *'), 1, {
                            opacity: 1,
                            y: 0,
                            ease: Expo.easeInOut
                        }, 0.1, "-=1").from($('.decor_truck'), 1.5, {
                            x: -300,
                            ease: Expo.easeInOut
                        }, "-=1.7");
                    } else if (index == 1 && direction == 'up') {
                        _this.bannerAnimation();
                    }
                }
            });
        }
    }, {
        key: 'bannerAnimation',
        value: function bannerAnimation() {
            var _this2 = this;

            if (!$('body').hasClass('load')) {
                $('body').addClass('load');
            }
            var tm = new TimelineLite({ onComplete: function onComplete() {
                    _this2.parallaxAnimation();
                    _this2.fullScreenDotApped();
                    $('body').addClass('mainAnimationOver');
                    _this2.fullpagescroll();
                } });
            tm.from(this.selector.$scr_ground, 2, { bottom: -500, ease: Expo.easeOut }, "time-one").from(this.selector.$menu, .5, { top: -10, autoAlpha: 0, ease: Expo.easeOut }, "time-one+=.5").from(this.selector.$topTitle, 2, { top: -40, autoAlpha: 0, ease: Expo.easeOut }, "time-one+=.3").from(this.selector.$topSubTItle, 2, { top: -40, autoAlpha: 0, ease: Expo.easeOut }, "time-one+=.6").from(this.selector.$scr_m_right, 2.7, { xPercent: "200%", ease: Expo.easeInOut }, "time-one").from(this.selector.$scr_m_left, 2.7, { xPercent: "-200%", ease: Expo.easeInOut }, "time-one").from(this.selector.$scr_sun, 4, { attr: { cx: 1500, cy: 300 }, autoAlpha: 0, ease: Expo.easeInOut }, "time-one+=1").from(this.selector.$scr_cloud, 4, { x: 100, y: 60, autoAlpha: 0, ease: Expo.easeInOut }, "time-one+=1.2").from(this.selector.$scr_cloud_r, 4, { xPercent: "-100%", autoAlpha: 0, ease: Expo.easeInOut }, "time-one+=.4").from(this.selector.$scr_cloud_l, 4, { xPercent: "-100%", autoAlpha: 0, ease: Expo.easeInOut }, "time-one+=.4").from(this.selector.$scr_b_small, 4, { left: -50, autoAlpha: 0, ease: Expo.easeInOut }, "time-one+=.2").from(this.selector.$scr_truck, 4, { xPercent: "-400%", zIndex: 100, ease: Expo.easeInOut }, "time-one+=.2").from(this.selector.$scr_b_big, 3, { left: -50, autoAlpha: 0, ease: Expo.easeInOut }, "time-one+=1.2").from(this.selector.$scr_snow, 1, { autoAlpha: 0, ease: Expo.easeInOut }, "-=2");
        }
    }, {
        key: 'parallaxAnimation',
        value: function parallaxAnimation() {
            var _this3 = this;

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

            var update = function update() {
                var dx = mouse.x - cx;
                var dy = mouse.y - cy;

                TweenLite.to(_this3.selector.$scr_sun, .5, {
                    x: dx / 10,
                    y: dy / 15,
                    ease: Power1.easeOut
                });
                TweenLite.to(_this3.selector.$scr_cloud, .5, {
                    x: dx / 14,
                    y: dy / 15,
                    ease: Power1.easeOut
                });
                TweenLite.to(_this3.selector.$scr_b_small, .5, {
                    x: dx / 10,
                    y: dy / 15,
                    ease: Power1.easeOut
                });
                TweenLite.to(_this3.selector.$scr_b_big, .5, {
                    x: dx / 20,
                    y: dy / 15,
                    ease: Power1.easeOut
                });
                TweenLite.to(_this3.selector.$scr_m_left, .5, {
                    x: dx / 40,
                    y: dy / 30,
                    ease: Power1.easeOut
                });
                TweenLite.to(_this3.selector.$scr_m_right, .5, {
                    x: dx / 40,
                    y: dy / 30,
                    ease: Power1.easeOut
                });
                TweenLite.to(_this3.selector.$scr_snow, .5, {
                    x: dx / 40,
                    y: dy / 30,
                    ease: Power1.easeOut
                });
                TweenLite.to(_this3.selector.$scr_cloud_r, .5, {
                    x: dx / 10,
                    y: dy / 15,
                    ease: Power1.easeOut
                });
                TweenLite.to(_this3.selector.$scr_cloud_l, .5, {
                    x: dx / 14,
                    y: dy / 15,
                    ease: Power1.easeOut
                });
            };
        }
    }, {
        key: 'fullScreenDotApped',
        value: function fullScreenDotApped() {
            var $dot = $('.dot-first a');
            var smartDot = $('<div/>', {
                id: 'smartDot',
                css: {
                    position: "fixed",
                    top: $dot.offset().top,
                    left: $dot.offset().left
                }
            });
            $('body').append(smartDot);
        }
    }, {
        key: 'citiesTabParallaxAnimation',
        value: function citiesTabParallaxAnimation() {
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

            var update = function update() {
                var dx = mouse.x - cx;
                var dy = mouse.y - cy;

                TweenLite.to($('.canada_bg, .america_bg, .mexica_bg'), .5, {
                    x: dx / 40,
                    y: dy / 70,
                    ease: Power1.easeOut
                });
                TweenLite.to($('.canada_clouds, .america_clouds_sun, .mexica_clouds'), .5, {
                    x: dx / 30,
                    y: dy / 70,
                    ease: Power1.easeOut
                });
                TweenLite.to($('.canada_forest, .america_buildings, .mexica_buildings'), .5, {
                    x: dx / 20,
                    y: dy / 70,
                    ease: Power1.easeOut
                });
                TweenLite.to($('.canada_ground, .america_ground, .mexica_ground'), .5, {
                    x: dx / 50,
                    y: dy / 50,
                    ease: Power1.easeOut
                });
                TweenLite.to($('.canada_truck, .america_truck, .mexica_truck'), .5, {
                    x: dx / 50,
                    y: dy / 60,
                    ease: Power1.easeOut
                });
            };
        }
    }, {
        key: 'tabSwith',
        value: function tabSwith() {
            $('.tabs-nav').find('li').on('click', function () {
                var _this4 = this;

                var index = $(this).index();
                var tl = new TimelineLite();
                if (!$(this).hasClass('active')) {
                    tl.to($('.cities-tab .decor_tabs_wrapper'), .5, {
                        opacity: 0,
                        x: 50,
                        ease: Power1.easeOut
                    }).to($('.decor_truck'), .1, {
                        opacity: 0,
                        ease: Power1.easeOut
                    }, "-=.5").add(function () {
                        checkTab();
                    }).to($('.decor_truck'), 0, {
                        x: -300,
                        opacity: 0
                    }, "-=1").to($('.cities-tab .decor_tabs_wrapper'), .5, {
                        opacity: 1,
                        x: 0,
                        ease: Power1.easeOut
                    }).to($('.decor_truck'), 2, {
                        opacity: 1,
                        x: 0,
                        ease: Expo.easeOut
                    }, "-=.5");
                }

                var checkTab = function checkTab() {
                    $(_this4).addClass('active').siblings().removeClass('active');
                    $('.cities-tabs-wrapper').find('.cities-tab').eq(index).addClass('active').siblings().removeClass('active');

                    var elem = $('.tabs-nav').find('li.active');
                    var offsetLeft = elem.offset().left;
                    var elemWidthHalf = elem.innerWidth() / 7;

                    $('.tabs-label').css({
                        left: offsetLeft + elemWidthHalf
                    });
                };
            });
        }
    }, {
        key: 'checkTsbLabel',
        value: function checkTsbLabel() {
            var elem = $('.tabs-nav').find('li.active');
            var offsetLeft = elem.offset().left;
            var elemWidthHalf = elem.innerWidth() / 7;

            $('.tabs-label').css({
                left: offsetLeft + elemWidthHalf
            });
        }
    }, {
        key: 'scrollDownArrow',
        value: function scrollDownArrow() {
            $(document).on('click', '#scrollDown', function () {
                $.fn.fullpage.moveSectionDown();
            });
        }
    }, {
        key: 'modalInit',
        value: function modalInit() {

            $('[data-target="modal"]').click(function (event) {
                event.preventDefault();

                var current = $(this).data('modal');

                alert(current);
            });

            //     $('#overlay').fadeIn(400,
            //         function () {
            //             $('#modal_form')
            //                 .css('display', 'block')
            //                 .animate({opacity: 1, top: '50%'}, 200);
            //         });
            // });
            //
            // $('#modal_close, #overlay').click(function () {
            //     $('#modal_form')
            //         .animate({opacity: 0, top: '45%'}, 200,
            //             function () {
            //                 $(this).css('display', 'none');
            //                 $('#overlay').fadeOut(400);
            //             }
            //         );
            // });
        }
    }, {
        key: 'openMobMrnu',
        value: function openMobMrnu() {
            $('.mob-menu-trigger').on('click', function () {

                var tm = new TimelineLite();

                tm.to($('.header-nav'), .5, {
                    left: 0,
                    ease: Expo.easeOut
                }).add(function () {
                    $('.header').addClass('mob-menu-open');
                });
            });
        }
    }, {
        key: 'closeMobMenu',
        value: function closeMobMenu() {
            $('.mob-close-menu').on('click', function (e) {
                e.preventDefault();
                var tm = new TimelineLite();
                tm.to($('.header-nav'), 0, {
                    left: -380,
                    ease: Expo.easeOut
                }).add(function () {
                    $('.header').removeClass('mob-menu-open');
                });
            });
        }

        /**
         * Initialize Home page scripts.
         */

    }, {
        key: 'init',
        value: function init() {
            this.bannerAnimation();
            this.tabSwith();
            this.scrollDownArrow();
            this.checkTsbLabel();
            this.modalInit();
            this.openMobMrnu();
            this.closeMobMenu();
        }
    }]);

    return Home;
}();

exports.default = Home;

/***/ })
],[3]);
//# sourceMappingURL=index.js.map