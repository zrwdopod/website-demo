require("source-map-support").install();
module.exports =
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
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

  /*! 京东移动前端构建器 | MIT License | 站点建设中 */

  'use strict';

  var _this2 = this;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  __webpack_require__(65);

  var _lodash = __webpack_require__(76);

  var _lodash2 = _interopRequireDefault(_lodash);

  var _fs = __webpack_require__(12);

  var _fs2 = _interopRequireDefault(_fs);

  var _path = __webpack_require__(13);

  var _path2 = _interopRequireDefault(_path);

  var _express = __webpack_require__(11);

  var _express2 = _interopRequireDefault(_express);

  var _reactDomServer = __webpack_require__(78);

  var _reactDomServer2 = _interopRequireDefault(_reactDomServer);

  var _Router = __webpack_require__(17);

  var _Router2 = _interopRequireDefault(_Router);

  var server = global.server = (0, _express2['default'])();

  server.set('port', process.env.PORT || 5000);
  server.use(_express2['default']['static'](_path2['default'].join(__dirname, 'public')));

  //
  // 注册API中间件
  // -----------------------------------------------------------------------------
  server.use('/api/content', __webpack_require__(18));

  //
  // 注册服务端渲染中间件
  // -----------------------------------------------------------------------------

  // 模板文件读取
  var templateFile = _path2['default'].join(__dirname, 'templates/index.html');
  var template = _lodash2['default'].template(_fs2['default'].readFileSync(templateFile, 'utf8'));

  server.get('*', function callee$0$0(req, res, next) {
    return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
      var _this = this;

      while (1) switch (context$1$0.prev = context$1$0.next) {
        case 0:
          context$1$0.prev = 0;
          context$1$0.next = 3;
          return regeneratorRuntime.awrap((function callee$1$0() {
            var statusCode, data, css, context, html;
            return regeneratorRuntime.async(function callee$1$0$(context$2$0) {
              while (1) switch (context$2$0.prev = context$2$0.next) {
                case 0:
                  statusCode = 200;
                  data = { title: '', description: '', css: '', body: '' };
                  css = [];
                  context = {
                    onInsertCss: function onInsertCss(value) {
                      return css.push(value);
                    },
                    onSetTitle: function onSetTitle(value) {
                      return data.title = value;
                    },
                    onSetMeta: function onSetMeta(key, value) {
                      return data[key] = value;
                    },
                    onPageNotFound: function onPageNotFound() {
                      return statusCode = 404;
                    }
                  };
                  context$2$0.next = 6;
                  return regeneratorRuntime.awrap(_Router2['default'].dispatch({ path: req.path, context: context }, function (state, component) {
                    data.body = _reactDomServer2['default'].renderToString(component);
                    data.css = css.join('');
                  }));

                case 6:
                  html = template(data);

                  res.status(statusCode).send(html);

                case 8:
                case 'end':
                  return context$2$0.stop();
              }
            }, null, _this);
          })());

        case 3:
          context$1$0.next = 8;
          break;

        case 5:
          context$1$0.prev = 5;
          context$1$0.t0 = context$1$0['catch'](0);

          next(context$1$0.t0);

        case 8:
        case 'end':
          return context$1$0.stop();
      }
    }, null, _this2, [[0, 5]]);
  });

  //
  // 启动服务器
  // -----------------------------------------------------------------------------

  server.listen(server.get('port'), function () {
    if (process.send) {
      process.send('online');
    } else {
      console.log('The server is running at http://localhost:' + server.get('port'));
    }
  });

  // 服务端渲染时路由

/***/ },
/* 1 */
/***/ function(module, exports) {

  module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

  /*! 京东移动前端构建器 | MIT License | 站点建设中 */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _fbjsLibInvariant = __webpack_require__(69);

  var _fbjsLibInvariant2 = _interopRequireDefault(_fbjsLibInvariant);

  var _fbjsLibExecutionEnvironment = __webpack_require__(5);

  var count = 0;

  function withStyles(styles) {
    return function (ComposedComponent) {
      return (function () {
        _createClass(WithStyles, null, [{
          key: 'contextTypes',
          value: {
            onInsertCss: _react.PropTypes.func
          },
          enumerable: true
        }]);

        function WithStyles() {
          _classCallCheck(this, WithStyles);

          this.refCount = 0;
          ComposedComponent.prototype.renderCss = (function (css) {
            var style = undefined;
            if (_fbjsLibExecutionEnvironment.canUseDOM) {
              if (this.styleId && (style = document.getElementById(this.styleId))) {
                if ('textContent' in style) {
                  style.textContent = css;
                } else {
                  style.styleSheet.cssText = css;
                }
              } else {
                this.styleId = 'dynamic-css-' + count++;
                style = document.createElement('style');
                style.setAttribute('id', this.styleId);
                style.setAttribute('type', 'text/css');

                if ('textContent' in style) {
                  style.textContent = css;
                } else {
                  style.styleSheet.cssText = css;
                }

                document.getElementsByTagName('head')[0].appendChild(style);
                this.refCount++;
              }
            } else {
              this.context.onInsertCss(css);
            }
          }).bind(this);
        }

        _createClass(WithStyles, [{
          key: 'componentWillMount',
          value: function componentWillMount() {
            if (_fbjsLibExecutionEnvironment.canUseDOM) {
              (0, _fbjsLibInvariant2['default'])(styles.use, 'style-loader必须被配置成有引用计数器的API.');
              styles.use();
            } else {
              this.context.onInsertCss(styles.toString());
            }
          }
        }, {
          key: 'componentWillUnmount',
          value: function componentWillUnmount() {
            styles.unuse();
            if (this.styleId) {
              this.refCount--;
              if (this.refCount < 1) {
                var style = document.getElementById(this.styleId);
                if (style) {
                  style.parentNode.removeChild(style);
                }
              }
            }
          }
        }, {
          key: 'render',
          value: function render() {
            return _react2['default'].createElement(ComposedComponent, this.props);
          }
        }]);

        return WithStyles;
      })();
    };
  }

  exports['default'] = withStyles;
  module.exports = exports['default'];

/***/ },
/* 3 */
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
/* 4 */
/***/ function(module, exports, __webpack_require__) {

  /*! 京东移动前端构建器 | MIT License | 站点建设中 */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _coreDispatcherJs = __webpack_require__(9);

  var _coreDispatcherJs2 = _interopRequireDefault(_coreDispatcherJs);

  var _constantsFluxCRUDConstants = __webpack_require__(8);

  var _constantsFluxCRUDConstants2 = _interopRequireDefault(_constantsFluxCRUDConstants);

  var FluxCRUDActions = {

    /**
     * @param  {string} text
     */
    create: function create(text) {
      _coreDispatcherJs2['default'].dispatch({
        actionType: _constantsFluxCRUDConstants2['default'].FLUX_CRUD_CREATE,
        text: text
      });
    },

    /**
     * @param  {string} id
     * @param  {string} text
     */
    updateText: function updateText(id, text) {
      _coreDispatcherJs2['default'].dispatch({
        actionType: _constantsFluxCRUDConstants2['default'].FLUX_CRUD_UPDATE_TEXT,
        id: id,
        text: text
      });
    },

    /**
     * 切换完成状态
     * @param  {object} fluxCRUD
     */
    toggleComplete: function toggleComplete(fluxCRUD) {
      var id = fluxCRUD.id;
      var actionType = fluxCRUD.complete ? _constantsFluxCRUDConstants2['default'].FLUX_CRUD_UNDO_COMPLETE : _constantsFluxCRUDConstants2['default'].FLUX_CRUD_COMPLETE;

      _coreDispatcherJs2['default'].dispatch({
        actionType: actionType,
        id: id
      });
    },

    /**
     * 标记所有为完成
     */
    toggleCompleteAll: function toggleCompleteAll() {
      _coreDispatcherJs2['default'].dispatch({
        actionType: _constantsFluxCRUDConstants2['default'].FLUX_CRUD_TOGGLE_COMPLETE_ALL
      });
    },

    /**
     * @param  {string} id
     */
    destroy: function destroy(id) {
      _coreDispatcherJs2['default'].dispatch({
        actionType: _constantsFluxCRUDConstants2['default'].FLUX_CRUD_DESTROY,
        id: id
      });
    },

    /**
     * 删除所有选中
     */
    destroyCompleted: function destroyCompleted() {
      _coreDispatcherJs2['default'].dispatch({
        actionType: _constantsFluxCRUDConstants2['default'].FLUX_CRUD_DESTROY_COMPLETED
      });
    }

  };

  exports['default'] = FluxCRUDActions;
  module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports) {

  module.exports = require("fbjs/lib/ExecutionEnvironment");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

  /*! 京东移动前端构建器 | MIT License | 站点建设中 */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _this = this;

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _coreLocation = __webpack_require__(30);

  var _coreLocation2 = _interopRequireDefault(_coreLocation);

  function isLeftClickEvent(event) {
    return event.button === 0;
  }

  function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
  }

  var RouteLink = (function () {
    function RouteLink() {
      _classCallCheck(this, RouteLink);
    }

    _createClass(RouteLink, [{
      key: 'render',
      value: function render() {
        var _props = this.props;
        var to = _props.to;
        var children = _props.children;

        var props = _objectWithoutProperties(_props, ['to', 'children']);

        return _react2['default'].createElement(
          'a',
          _extends({ onClick: Link.handleClick.bind(this) }, props),
          children
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        to: _react.PropTypes.string.isRequired,
        children: _react.PropTypes.element.isRequired,
        state: _react.PropTypes.object,
        onClick: _react.PropTypes.func
      },
      enumerable: true
    }, {
      key: 'handleClick',
      value: function value(event) {
        var allowTransition = true;
        var clickResult;

        if (_this.props && _this.props.onClick) {
          clickResult = _this.props.onClick(event);
        }

        if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
          return;
        }

        if (clickResult === false || event.defaultPrevented === true) {
          allowTransition = false;
        }

        event.preventDefault();

        if (allowTransition) {
          var link = event.currentTarget;
          _coreLocation2['default'].pushState(_this.props && _this.props.state || null, _this.props && _this.props.to || link.pathname + link.search);
        }
      },
      enumerable: true
    }]);

    return RouteLink;
  })();

  exports['default'] = RouteLink;
  module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

  /*! 京东移动前端构建器 | MIT License | 站点建设中 */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _FluxCRUDTextInputCss = __webpack_require__(50);

  var _FluxCRUDTextInputCss2 = _interopRequireDefault(_FluxCRUDTextInputCss);

  var _decoratorsWithStyles = __webpack_require__(2);

  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);

  var ReactPropTypes = _react2['default'].PropTypes;

  var ENTER_KEY_CODE = 13;

  var FluxCRUDTextInput = (function (_React$Component) {
    _inherits(FluxCRUDTextInput, _React$Component);

    _createClass(FluxCRUDTextInput, null, [{
      key: 'propTypes',
      value: {
        className: ReactPropTypes.string,
        id: ReactPropTypes.string,
        placeholder: ReactPropTypes.string,
        onSave: ReactPropTypes.func.isRequired,
        value: ReactPropTypes.string
      },
      enumerable: true
    }]);

    function FluxCRUDTextInput() {
      var _this = this;

      _classCallCheck(this, _FluxCRUDTextInput);

      _get(Object.getPrototypeOf(_FluxCRUDTextInput.prototype), 'constructor', this).call(this);

      this._onChange = function (event) {
        _this.setState({
          value: event.target.value
        });
      };

      this._onKeyDown = function (event) {
        if (event.keyCode === ENTER_KEY_CODE) {
          _this._save();
        }
      };

      this.state = {
        value: ''
      };
    }

    _createClass(FluxCRUDTextInput, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.state = {
          value: this.props.value || ''
        };
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {}

      /**
       * @return {object}
       */
    }, {
      key: 'render',
      value: function render() {
        return _react2['default'].createElement('input', {
          className: this.props.className,
          id: this.props.id,
          placeholder: this.props.placeholder,
          onBlur: this._save.bind(this),
          onChange: this._onChange.bind(this),
          onKeyDown: this._onKeyDown.bind(this),
          value: this.state.value,
          autoFocus: true
        });
      }

      /**
       * 调用从父组件传过来的onSave回调,
       * 这样自定义的回调使得FluxCRUDTextInput可以被任意形式复用
       */
    }, {
      key: '_save',
      value: function _save() {
        this.props.onSave(this.state.value);
        this.state.value = '';
      }

      /**
       * @param {object} event
       */
    }]);

    var _FluxCRUDTextInput = FluxCRUDTextInput;
    FluxCRUDTextInput = (0, _decoratorsWithStyles2['default'])(_FluxCRUDTextInputCss2['default'])(FluxCRUDTextInput) || FluxCRUDTextInput;
    return FluxCRUDTextInput;
  })(_react2['default'].Component);

  exports['default'] = FluxCRUDTextInput;
  module.exports = exports['default'];

  /**
   * @param  {object} event
   */

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

  /*! 京东移动前端构建器 | MIT License | 站点建设中 */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _fbjsLibKeyMirror = __webpack_require__(70);

  var _fbjsLibKeyMirror2 = _interopRequireDefault(_fbjsLibKeyMirror);

  exports['default'] = (0, _fbjsLibKeyMirror2['default'])({
    FLUX_CRUD_CREATE: null,
    FLUX_CRUD_COMPLETE: null,
    FLUX_CRUD_DESTROY: null,
    FLUX_CRUD_DESTROY_COMPLETED: null,
    FLUX_CRUD_TOGGLE_COMPLETE_ALL: null,
    FLUX_CRUD_UNDO_COMPLETE: null,
    FLUX_CRUD_UPDATE_TEXT: null
  });
  module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

  /*! 京东移动前端构建器 | MIT License | 站点建设中 */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _flux = __webpack_require__(71);

  var dispatcher = new _flux.Dispatcher();

  exports['default'] = dispatcher;
  module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports) {

  module.exports = require("classnames");

/***/ },
/* 11 */
/***/ function(module, exports) {

  module.exports = require("express");

/***/ },
/* 12 */
/***/ function(module, exports) {

  module.exports = require("fs");

/***/ },
/* 13 */
/***/ function(module, exports) {

  module.exports = require("path");

/***/ },
/* 14 */
/***/ function(module, exports) {

  /**
   * React Routing | http://www.kriasoft.com/react-routing
   * Copyright (c) Konstantin Tarkus <hello@tarkus.me> | The MIT License
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var Match = function Match(route, path, keys, match) {
    _classCallCheck(this, Match);

    this.route = route;
    this.path = path;
    this.params = Object.create(null);
    for (var i = 1; i < match.length; i++) {
      this.params[keys[i - 1].name] = decodeParam(match[i]);
    }
  };

  function decodeParam(val) {
    if (!(typeof val === 'string' || val instanceof String)) {
      return val;
    }

    try {
      return decodeURIComponent(val);
    } catch (e) {
      var err = new TypeError('Failed to decode param \'' + val + '\'');
      err.status = 400;
      throw err;
    }
  }

  exports['default'] = Match;
  module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Routing | http://www.kriasoft.com/react-routing
   * Copyright (c) Konstantin Tarkus <hello@tarkus.me> | The MIT License
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _pathToRegexp = __webpack_require__(62);

  var _pathToRegexp2 = _interopRequireDefault(_pathToRegexp);

  var _Match = __webpack_require__(14);

  var _Match2 = _interopRequireDefault(_Match);

  var Route = (function () {
    function Route(path, handlers) {
      _classCallCheck(this, Route);

      this.path = path;
      this.handlers = handlers;
      this.regExp = (0, _pathToRegexp2['default'])(path, this.keys = []);
    }

    _createClass(Route, [{
      key: 'match',
      value: function match(path) {
        var match = this.regExp.exec(path);
        return match ? new _Match2['default'](this, path, this.keys, match) : null;
      }
    }]);

    return Route;
  })();

  exports['default'] = Route;
  module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Routing | http://www.kriasoft.com/react-routing
   * Copyright (c) Konstantin Tarkus <hello@tarkus.me> | The MIT License
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _Route = __webpack_require__(15);

  var _Route2 = _interopRequireDefault(_Route);

  var emptyFunction = function emptyFunction() {};

  var Router = (function () {

    /**
     * Creates a new instance of the `Router` class.
     */

    function Router(initialize) {
      _classCallCheck(this, Router);

      this.routes = [];
      this.events = Object.create(null);

      if (typeof initialize === 'function') {
        initialize(this.on.bind(this));
      }
    }

    /**
     * Adds a new route to the routing table or registers an event listener.
     *
     * @param {String} path A string in the Express format, an array of strings, or a regular expression.
     * @param {Function|Array} handlers Asynchronous route handler function(s).
     */

    _createClass(Router, [{
      key: 'on',
      value: function on(path) {
        for (var _len = arguments.length, handlers = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          handlers[_key - 1] = arguments[_key];
        }

        if (path === 'error') {
          this.events[path] = handlers[0];
        } else {
          this.routes.push(new _Route2['default'](path, handlers));
        }
      }
    }, {
      key: 'dispatch',
      value: function dispatch(state, cb) {
        var routes, handlers, value, result, done, next;
        return regeneratorRuntime.async(function dispatch$(context$2$0) {
          while (1) switch (context$2$0.prev = context$2$0.next) {
            case 0:
              next = function next() {
                var _handlers$next;

                var _value, _value2, match, handler;

                return regeneratorRuntime.async(function next$(context$3$0) {
                  while (1) switch (context$3$0.prev = context$3$0.next) {
                    case 0:
                      if (!((_handlers$next = handlers.next(), value = _handlers$next.value, done = _handlers$next.done, _handlers$next) && !done)) {
                        context$3$0.next = 16;
                        break;
                      }

                      _value = value;
                      _value2 = _slicedToArray(_value, 2);
                      match = _value2[0];
                      handler = _value2[1];

                      state.params = match.params;

                      if (!(handler.length > 1)) {
                        context$3$0.next = 12;
                        break;
                      }

                      context$3$0.next = 9;
                      return regeneratorRuntime.awrap(handler(state, next));

                    case 9:
                      context$3$0.t0 = context$3$0.sent;
                      context$3$0.next = 15;
                      break;

                    case 12:
                      context$3$0.next = 14;
                      return regeneratorRuntime.awrap(handler(state));

                    case 14:
                      context$3$0.t0 = context$3$0.sent;

                    case 15:
                      return context$3$0.abrupt('return', context$3$0.t0);

                    case 16:
                    case 'end':
                      return context$3$0.stop();
                  }
                }, null, this);
              };

              if (typeof state === 'string' || state instanceof String) {
                state = { path: state };
              }
              cb = cb || emptyFunction;
              routes = this.routes;
              handlers = regeneratorRuntime.mark(function callee$2$0() {
                var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, route, match, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, handler;

                return regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
                  while (1) switch (context$3$0.prev = context$3$0.next) {
                    case 0:
                      _iteratorNormalCompletion = true;
                      _didIteratorError = false;
                      _iteratorError = undefined;
                      context$3$0.prev = 3;
                      _iterator = routes[Symbol.iterator]();

                    case 5:
                      if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                        context$3$0.next = 38;
                        break;
                      }

                      route = _step.value;
                      match = route.match(state.path);

                      if (!match) {
                        context$3$0.next = 35;
                        break;
                      }

                      _iteratorNormalCompletion2 = true;
                      _didIteratorError2 = false;
                      _iteratorError2 = undefined;
                      context$3$0.prev = 12;
                      _iterator2 = match.route.handlers[Symbol.iterator]();

                    case 14:
                      if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                        context$3$0.next = 21;
                        break;
                      }

                      handler = _step2.value;
                      context$3$0.next = 18;
                      return [match, handler];

                    case 18:
                      _iteratorNormalCompletion2 = true;
                      context$3$0.next = 14;
                      break;

                    case 21:
                      context$3$0.next = 27;
                      break;

                    case 23:
                      context$3$0.prev = 23;
                      context$3$0.t0 = context$3$0['catch'](12);
                      _didIteratorError2 = true;
                      _iteratorError2 = context$3$0.t0;

                    case 27:
                      context$3$0.prev = 27;
                      context$3$0.prev = 28;

                      if (!_iteratorNormalCompletion2 && _iterator2['return']) {
                        _iterator2['return']();
                      }

                    case 30:
                      context$3$0.prev = 30;

                      if (!_didIteratorError2) {
                        context$3$0.next = 33;
                        break;
                      }

                      throw _iteratorError2;

                    case 33:
                      return context$3$0.finish(30);

                    case 34:
                      return context$3$0.finish(27);

                    case 35:
                      _iteratorNormalCompletion = true;
                      context$3$0.next = 5;
                      break;

                    case 38:
                      context$3$0.next = 44;
                      break;

                    case 40:
                      context$3$0.prev = 40;
                      context$3$0.t1 = context$3$0['catch'](3);
                      _didIteratorError = true;
                      _iteratorError = context$3$0.t1;

                    case 44:
                      context$3$0.prev = 44;
                      context$3$0.prev = 45;

                      if (!_iteratorNormalCompletion && _iterator['return']) {
                        _iterator['return']();
                      }

                    case 47:
                      context$3$0.prev = 47;

                      if (!_didIteratorError) {
                        context$3$0.next = 50;
                        break;
                      }

                      throw _iteratorError;

                    case 50:
                      return context$3$0.finish(47);

                    case 51:
                      return context$3$0.finish(44);

                    case 52:
                    case 'end':
                      return context$3$0.stop();
                  }
                }, callee$2$0, this, [[3, 40, 44, 52], [12, 23, 27, 35], [28,, 30, 34], [45,, 47, 51]]);
              })();
              value = undefined, result = undefined, done = false;

            case 6:
              if (done) {
                context$2$0.next = 16;
                break;
              }

              context$2$0.next = 9;
              return regeneratorRuntime.awrap(next());

            case 9:
              result = context$2$0.sent;

              if (!result) {
                context$2$0.next = 14;
                break;
              }

              state.statusCode = 200;
              cb(state, result);
              return context$2$0.abrupt('return');

            case 14:
              context$2$0.next = 6;
              break;

            case 16:
              if (!this.events.error) {
                context$2$0.next = 32;
                break;
              }

              context$2$0.prev = 17;

              state.statusCode = 404;
              context$2$0.next = 21;
              return regeneratorRuntime.awrap(this.events.error(state, new Error('Cannot found a route matching \'' + state.path + '\'.')));

            case 21:
              result = context$2$0.sent;

              cb(state, result);
              context$2$0.next = 32;
              break;

            case 25:
              context$2$0.prev = 25;
              context$2$0.t0 = context$2$0['catch'](17);

              state.statusCode = 500;
              context$2$0.next = 30;
              return regeneratorRuntime.awrap(this.events.error(state, context$2$0.t0));

            case 30:
              result = context$2$0.sent;

              cb(state, result);

            case 32:
            case 'end':
              return context$2$0.stop();
          }
        }, null, this, [[17, 25]]);
      }
    }]);

    return Router;
  })();

  exports['default'] = Router;
  module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

  /*! 京东移动前端构建器 | MIT License | 站点建设中 */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _this = this;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _reactRoutingSrcRouter = __webpack_require__(16);

  var _reactRoutingSrcRouter2 = _interopRequireDefault(_reactRoutingSrcRouter);

  var _coreHttpClient = __webpack_require__(29);

  var _coreHttpClient2 = _interopRequireDefault(_coreHttpClient);

  var _componentsApp = __webpack_require__(19);

  var _componentsApp2 = _interopRequireDefault(_componentsApp);

  var _pagesIndexPage = __webpack_require__(37);

  var _pagesIndexPage2 = _interopRequireDefault(_pagesIndexPage);

  var _pagesContentPage = __webpack_require__(34);

  var _pagesContentPage2 = _interopRequireDefault(_pagesContentPage);

  var _pagesContactPage = __webpack_require__(33);

  var _pagesContactPage2 = _interopRequireDefault(_pagesContactPage);

  var _pagesLoginPage = __webpack_require__(38);

  var _pagesLoginPage2 = _interopRequireDefault(_pagesLoginPage);

  var _pagesRegisterPage = __webpack_require__(40);

  var _pagesRegisterPage2 = _interopRequireDefault(_pagesRegisterPage);

  var _pagesNotFoundPage = __webpack_require__(39);

  var _pagesNotFoundPage2 = _interopRequireDefault(_pagesNotFoundPage);

  var _pagesErrorPage = __webpack_require__(35);

  var _pagesErrorPage2 = _interopRequireDefault(_pagesErrorPage);

  var _pagesFluxCRUDPage = __webpack_require__(36);

  var _pagesFluxCRUDPage2 = _interopRequireDefault(_pagesFluxCRUDPage);

  // 路由规则
  var router = new _reactRoutingSrcRouter2['default'](function (on) {

    on('*', function callee$1$0(state, next) {
      var component;
      return regeneratorRuntime.async(function callee$1$0$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            context$2$0.next = 2;
            return regeneratorRuntime.awrap(next());

          case 2:
            component = context$2$0.sent;
            return context$2$0.abrupt('return', component && _react2['default'].createElement(
              _componentsApp2['default'],
              { context: state.context },
              component
            ));

          case 4:
          case 'end':
            return context$2$0.stop();
        }
      }, null, _this);
    });

    // 本地测试用Index路由
    on('/home/zengruiwen/WebstormProjects/JDM/build/templates/index.html', function callee$1$0() {
      return regeneratorRuntime.async(function callee$1$0$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            return context$2$0.abrupt('return', _react2['default'].createElement(_pagesIndexPage2['default'], null));

          case 1:
          case 'end':
            return context$2$0.stop();
        }
      }, null, _this);
    });

    on('/JDM/build/templates/index.html', function callee$1$0() {
      return regeneratorRuntime.async(function callee$1$0$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            return context$2$0.abrupt('return', _react2['default'].createElement(_pagesIndexPage2['default'], null));

          case 1:
          case 'end':
            return context$2$0.stop();
        }
      }, null, _this);
    });

    // 纯本地应用路由，比如要在cordova中打包Index路由
    on('/android_asset/www/index.html', function callee$1$0() {
      return regeneratorRuntime.async(function callee$1$0$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            return context$2$0.abrupt('return', _react2['default'].createElement(_pagesIndexPage2['default'], null));

          case 1:
          case 'end':
            return context$2$0.stop();
        }
      }, null, _this);
    });

    on('/android_asset/www/templates/index.html', function callee$1$0() {
      return regeneratorRuntime.async(function callee$1$0$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            return context$2$0.abrupt('return', _react2['default'].createElement(_pagesIndexPage2['default'], null));

          case 1:
          case 'end':
            return context$2$0.stop();
        }
      }, null, _this);
    });

    on('/index.html', function callee$1$0() {
      return regeneratorRuntime.async(function callee$1$0$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            return context$2$0.abrupt('return', _react2['default'].createElement(_pagesIndexPage2['default'], null));

          case 1:
          case 'end':
            return context$2$0.stop();
        }
      }, null, _this);
    });

    // 项目路由
    on('/', function callee$1$0() {
      return regeneratorRuntime.async(function callee$1$0$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            return context$2$0.abrupt('return', _react2['default'].createElement(_pagesIndexPage2['default'], null));

          case 1:
          case 'end':
            return context$2$0.stop();
        }
      }, null, _this);
    });

    on('/contact', function callee$1$0() {
      return regeneratorRuntime.async(function callee$1$0$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            return context$2$0.abrupt('return', _react2['default'].createElement(_pagesContactPage2['default'], null));

          case 1:
          case 'end':
            return context$2$0.stop();
        }
      }, null, _this);
    });

    on('/login', function callee$1$0() {
      return regeneratorRuntime.async(function callee$1$0$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            return context$2$0.abrupt('return', _react2['default'].createElement(_pagesLoginPage2['default'], null));

          case 1:
          case 'end':
            return context$2$0.stop();
        }
      }, null, _this);
    });

    on('/register', function callee$1$0() {
      return regeneratorRuntime.async(function callee$1$0$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            return context$2$0.abrupt('return', _react2['default'].createElement(_pagesRegisterPage2['default'], null));

          case 1:
          case 'end':
            return context$2$0.stop();
        }
      }, null, _this);
    });

    on('/fluxCRUD', function callee$1$0() {
      return regeneratorRuntime.async(function callee$1$0$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            return context$2$0.abrupt('return', _react2['default'].createElement(_pagesFluxCRUDPage2['default'], null));

          case 1:
          case 'end':
            return context$2$0.stop();
        }
      }, null, _this);
    });

    // AJAX请求资源
    on('*', function callee$1$0(state) {
      var content;
      return regeneratorRuntime.async(function callee$1$0$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            context$2$0.next = 2;
            return regeneratorRuntime.awrap(_coreHttpClient2['default'].get('/api/content?path=' + state.path));

          case 2:
            content = context$2$0.sent;
            return context$2$0.abrupt('return', content && _react2['default'].createElement(_pagesContentPage2['default'], content));

          case 4:
          case 'end':
            return context$2$0.stop();
        }
      }, null, _this);
    });

    on('error', function (state, error) {
      return state.statusCode === 404 ? _react2['default'].createElement(
        _componentsApp2['default'],
        { context: state.context, error: error },
        _react2['default'].createElement(_pagesNotFoundPage2['default'], null)
      ) : _react2['default'].createElement(
        _componentsApp2['default'],
        { context: state.context, error: error },
        _react2['default'].createElement(_pagesErrorPage2['default'], null)
      );
    });
  });

  exports['default'] = router;
  module.exports = exports['default'];

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

  /*! 京东移动前端构建器 | MIT License | 站点建设中 */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _this = this;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _path = __webpack_require__(13);

  var _express = __webpack_require__(11);

  var _jade = __webpack_require__(75);

  var _jade2 = _interopRequireDefault(_jade);

  var _frontMatter = __webpack_require__(72);

  var _frontMatter2 = _interopRequireDefault(_frontMatter);

  var _utilsFs = __webpack_require__(42);

  var _utilsFs2 = _interopRequireDefault(_utilsFs);

  // 可以是HTML/Jade/Markdown内容模板目录
  var CONTENT_DIR = (0, _path.join)(__dirname, './content');

  // 从内容模板中提取元数据，生成HTML
  var parseJade = function parseJade(path, jadeContent) {
    var fmContent = (0, _frontMatter2['default'])(jadeContent);
    var htmlContent = _jade2['default'].render(fmContent.body);
    return Object.assign({ path: path, content: htmlContent }, fmContent.attributes);
  };

  var router = new _express.Router();

  router.get('/', function callee$0$0(req, res, next) {
    var path, fileName, source, content;
    return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
      while (1) switch (context$1$0.prev = context$1$0.next) {
        case 0:
          context$1$0.prev = 0;
          path = req.query.path;

          if (!(!path || path === 'undefined')) {
            context$1$0.next = 5;
            break;
          }

          res.status(400).send({ error: '\'path\'请求参数不能为空.' });
          return context$1$0.abrupt('return');

        case 5:
          fileName = (0, _path.join)(CONTENT_DIR, (path === '/' ? '/index' : path) + '.jade');
          context$1$0.next = 8;
          return regeneratorRuntime.awrap(_utilsFs2['default'].exists(fileName));

        case 8:
          if (context$1$0.sent) {
            context$1$0.next = 10;
            break;
          }

          fileName = (0, _path.join)(CONTENT_DIR, path + '/index.jade');

        case 10:
          context$1$0.next = 12;
          return regeneratorRuntime.awrap(_utilsFs2['default'].exists(fileName));

        case 12:
          if (context$1$0.sent) {
            context$1$0.next = 16;
            break;
          }

          res.status(404).send({ error: '未找到页面\'' + path + '\'' });
          context$1$0.next = 21;
          break;

        case 16:
          context$1$0.next = 18;
          return regeneratorRuntime.awrap(_utilsFs2['default'].readFile(fileName, { encoding: 'utf8' }));

        case 18:
          source = context$1$0.sent;
          content = parseJade(path, source);

          res.status(200).send(content);

        case 21:
          context$1$0.next = 26;
          break;

        case 23:
          context$1$0.prev = 23;
          context$1$0.t0 = context$1$0['catch'](0);

          next(context$1$0.t0);

        case 26:
        case 'end':
          return context$1$0.stop();
      }
    }, null, _this, [[0, 23]]);
  });

  exports['default'] = router;
  module.exports = exports['default'];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

  /*! 京东移动前端构建器 | MIT License | 站点建设中 */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _AppCss = __webpack_require__(43);

  var _AppCss2 = _interopRequireDefault(_AppCss);

  var _decoratorsWithContext = __webpack_require__(31);

  var _decoratorsWithContext2 = _interopRequireDefault(_decoratorsWithContext);

  var _decoratorsWithStyles = __webpack_require__(2);

  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);

  var _Header = __webpack_require__(27);

  var _Header2 = _interopRequireDefault(_Header);

  var _Feedback = __webpack_require__(20);

  var _Feedback2 = _interopRequireDefault(_Feedback);

  var _Footer = __webpack_require__(26);

  var _Footer2 = _interopRequireDefault(_Footer);

  var App = (function () {
    function App() {
      _classCallCheck(this, _App);
    }

    _createClass(App, [{
      key: 'render',
      value: function render() {
        return !this.props.error ? _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(_Header2['default'], null),
          this.props.children,
          _react2['default'].createElement(_Feedback2['default'], null),
          _react2['default'].createElement(_Footer2['default'], null)
        ) : this.props.children;
      }
    }], [{
      key: 'propTypes',
      value: {
        children: _react.PropTypes.element.isRequired,
        error: _react.PropTypes.object
      },
      enumerable: true
    }]);

    var _App = App;
    App = (0, _decoratorsWithStyles2['default'])(_AppCss2['default'])(App) || App;
    App = (0, _decoratorsWithContext2['default'])(App) || App;
    return App;
  })();

  exports['default'] = App;
  module.exports = exports['default'];

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

  /*! 京东移动前端构建器 | MIT License | 站点建设中 */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _FeedbackCss = __webpack_require__(44);

  var _FeedbackCss2 = _interopRequireDefault(_FeedbackCss);

  var _decoratorsWithStyles = __webpack_require__(2);

  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);

  var Feedback = (function () {
    function Feedback() {
      _classCallCheck(this, _Feedback);
    }

    _createClass(Feedback, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          { className: 'Feedback' },
          _react2['default'].createElement(
            'div',
            { className: 'Feedback-container' },
            _react2['default'].createElement(
              'a',
              { className: 'Feedback-link', href: 'https://gitter.im/zrwdopod/jdm', target: '_blank' },
              '咨询问题'
            ),
            _react2['default'].createElement(
              'span',
              { className: 'Feedback-spacer' },
              '|'
            ),
            _react2['default'].createElement(
              'a',
              { className: 'Feedback-link', href: 'https://github.com/zrwdopod/jdm/issues/new', target: '_blank' },
              '提交BUG'
            )
          )
        );
      }
    }]);

    var _Feedback = Feedback;
    Feedback = (0, _decoratorsWithStyles2['default'])(_FeedbackCss2['default'])(Feedback) || Feedback;
    return Feedback;
  })();

  exports['default'] = Feedback;
  module.exports = exports['default'];

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

  /*! 京东移动前端构建器 | MIT License | 站点建设中 */

  /**
   * 这个组件被定义成一个控制器视图，监听FluxCRUDStore变化，并透传数据给其子组件
   *
   */
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _actionsFluxCRUDActions = __webpack_require__(4);

  var _actionsFluxCRUDActions2 = _interopRequireDefault(_actionsFluxCRUDActions);

  var _storesFluxCRUDStore = __webpack_require__(41);

  var _storesFluxCRUDStore2 = _interopRequireDefault(_storesFluxCRUDStore);

  var _FluxCRUDHeader = __webpack_require__(23);

  var _FluxCRUDHeader2 = _interopRequireDefault(_FluxCRUDHeader);

  var _FluxCRUDMainSection = __webpack_require__(25);

  var _FluxCRUDMainSection2 = _interopRequireDefault(_FluxCRUDMainSection);

  var _FluxCRUDFooter = __webpack_require__(22);

  var _FluxCRUDFooter2 = _interopRequireDefault(_FluxCRUDFooter);

  var _FluxCRUDCss = __webpack_require__(45);

  var _FluxCRUDCss2 = _interopRequireDefault(_FluxCRUDCss);

  var _decoratorsWithStyles = __webpack_require__(2);

  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);

  /**
   * 从FluxCRUDStore中获取最新数据
   */
  function getFluxCRUDState() {
    return {
      allFluxCRUDs: _storesFluxCRUDStore2['default'].getAll(),
      areAllComplete: _storesFluxCRUDStore2['default'].areAllComplete()
    };
  }

  var FluxCRUD = (function (_Component) {
    _inherits(FluxCRUD, _Component);

    function FluxCRUD() {
      _classCallCheck(this, _FluxCRUD);

      _get(Object.getPrototypeOf(_FluxCRUD.prototype), 'constructor', this).call(this);
      this.state = getFluxCRUDState();
    }

    /**
     * FluxCRUDStore的change事件处理函数
     */

    _createClass(FluxCRUD, [{
      key: '_onChange',
      value: function _onChange() {
        this.setState(getFluxCRUDState());
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        // 注册FluxCRUDStore变化后的处理函数
        _storesFluxCRUDStore2['default'].addChangeListener(this._onChange.bind(this));
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        // 移除FluxCRUDStore变化后的处理函数
        _storesFluxCRUDStore2['default'].removeChangeListener(this._onChange.bind(this));
      }

      /**
       * @return {object}
       */
    }, {
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          { className: 'flux-crud' },
          _react2['default'].createElement(_FluxCRUDHeader2['default'], null),
          _react2['default'].createElement(_FluxCRUDMainSection2['default'], {
            allFluxCRUDs: this.state.allFluxCRUDs,
            areAllComplete: this.state.areAllComplete
          }),
          _react2['default'].createElement(_FluxCRUDFooter2['default'], { allFluxCRUDs: this.state.allFluxCRUDs })
        );
      }
    }]);

    var _FluxCRUD = FluxCRUD;
    FluxCRUD = (0, _decoratorsWithStyles2['default'])(_FluxCRUDCss2['default'])(FluxCRUD) || FluxCRUD;
    return FluxCRUD;
  })(_react.Component);

  exports['default'] = FluxCRUD;
  module.exports = exports['default'];

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

  /*! 京东移动前端构建器 | MIT License | 站点建设中 */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _actionsFluxCRUDActions = __webpack_require__(4);

  var _actionsFluxCRUDActions2 = _interopRequireDefault(_actionsFluxCRUDActions);

  var _FluxCRUDFooterCss = __webpack_require__(46);

  var _FluxCRUDFooterCss2 = _interopRequireDefault(_FluxCRUDFooterCss);

  var _decoratorsWithStyles = __webpack_require__(2);

  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);

  var ReactPropTypes = _react2['default'].PropTypes;

  var FluxCRUDFooter = (function (_Component) {
    _inherits(FluxCRUDFooter, _Component);

    _createClass(FluxCRUDFooter, null, [{
      key: 'propTypes',

      /**
       * 约束prop数据类型
       */
      value: {
        allFluxCRUDs: ReactPropTypes.object.isRequired
      },

      /**
       * 构造函数
       */
      enumerable: true
    }]);

    function FluxCRUDFooter() {
      _classCallCheck(this, _FluxCRUDFooter);

      _get(Object.getPrototypeOf(_FluxCRUDFooter.prototype), 'constructor', this).call(this);
    }

    /**
     * 渲染虚拟DOM
     * @return {object}
     */

    _createClass(FluxCRUDFooter, [{
      key: 'render',
      value: function render() {
        var allFluxCRUDs = this.props.allFluxCRUDs;
        var total = Object.keys(allFluxCRUDs).length;

        if (total === 0) {
          return null;
        }

        var completed = 0;
        for (var key in allFluxCRUDs) {
          if (allFluxCRUDs[key].complete) {
            completed++;
          }
        }

        var itemsLeft = total - completed;
        var itemsLeftPhrase = '个';
        itemsLeftPhrase += '剩余';

        // 如果有选中则显示删除按钮
        var clearCompletedButton;
        if (completed) {
          clearCompletedButton = _react2['default'].createElement(
            'button',
            {
              className: 'clear-completed',
              onClick: this._onClearCompletedClick.bind(this) },
            '清除选中 (',
            completed,
            ')'
          );
        }

        return _react2['default'].createElement(
          'footer',
          { className: 'footer' },
          _react2['default'].createElement(
            'span',
            { className: 'count' },
            _react2['default'].createElement(
              'strong',
              null,
              itemsLeft
            ),
            itemsLeftPhrase
          ),
          clearCompletedButton
        );
      }

      /**
       * 删除所有选中todos的事件处理函数
       */
    }, {
      key: '_onClearCompletedClick',
      value: function _onClearCompletedClick() {
        _actionsFluxCRUDActions2['default'].destroyCompleted();
      }
    }]);

    var _FluxCRUDFooter = FluxCRUDFooter;
    FluxCRUDFooter = (0, _decoratorsWithStyles2['default'])(_FluxCRUDFooterCss2['default'])(FluxCRUDFooter) || FluxCRUDFooter;
    return FluxCRUDFooter;
  })(_react.Component);

  exports['default'] = FluxCRUDFooter;
  module.exports = exports['default'];

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

  /*! 京东移动前端构建器 | MIT License | 站点建设中 */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _actionsFluxCRUDActions = __webpack_require__(4);

  var _actionsFluxCRUDActions2 = _interopRequireDefault(_actionsFluxCRUDActions);

  var _FluxCRUDTextInput = __webpack_require__(7);

  var _FluxCRUDTextInput2 = _interopRequireDefault(_FluxCRUDTextInput);

  var _FluxCRUDHeaderCss = __webpack_require__(47);

  var _FluxCRUDHeaderCss2 = _interopRequireDefault(_FluxCRUDHeaderCss);

  var _decoratorsWithStyles = __webpack_require__(2);

  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);

  var FluxCRUDHeader = (function (_Component) {
    _inherits(FluxCRUDHeader, _Component);

    function FluxCRUDHeader() {
      _classCallCheck(this, _FluxCRUDHeader);

      _get(Object.getPrototypeOf(_FluxCRUDHeader.prototype), 'constructor', this).apply(this, arguments);

      this._onSave = function (text) {
        if (text.trim()) {
          _actionsFluxCRUDActions2['default'].create(text);
        }
      };
    }

    _createClass(FluxCRUDHeader, [{
      key: 'render',

      /**
       * @return {object}
       */
      value: function render() {
        return _react2['default'].createElement(
          'header',
          { className: 'header' },
          _react2['default'].createElement(_FluxCRUDTextInput2['default'], {
            className: 'new',
            placeholder: '输入内容回车',
            onSave: this._onSave
          })
        );
      }

      /**
       * 提供给FluxCRUDTextInput调用的保存事件处理函数
       * 这样定义使得FluxCRUDTextInput以不同方式多处应用
       * @param {string} text
       */
    }]);

    var _FluxCRUDHeader = FluxCRUDHeader;
    FluxCRUDHeader = (0, _decoratorsWithStyles2['default'])(_FluxCRUDHeaderCss2['default'])(FluxCRUDHeader) || FluxCRUDHeader;
    return FluxCRUDHeader;
  })(_react.Component);

  exports['default'] = FluxCRUDHeader;
  module.exports = exports['default'];

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

  /*! 京东移动前端构建器 | MIT License | 站点建设中 */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _actionsFluxCRUDActions = __webpack_require__(4);

  var _actionsFluxCRUDActions2 = _interopRequireDefault(_actionsFluxCRUDActions);

  var _FluxCRUDTextInput = __webpack_require__(7);

  var _FluxCRUDTextInput2 = _interopRequireDefault(_FluxCRUDTextInput);

  var _classnames = __webpack_require__(10);

  var _classnames2 = _interopRequireDefault(_classnames);

  var _FluxCRUDItemCss = __webpack_require__(48);

  var _FluxCRUDItemCss2 = _interopRequireDefault(_FluxCRUDItemCss);

  var _decoratorsWithStyles = __webpack_require__(2);

  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);

  var ReactPropTypes = _react2['default'].PropTypes;

  var FluxCRUDItem = (function (_Component) {
    _inherits(FluxCRUDItem, _Component);

    _createClass(FluxCRUDItem, null, [{
      key: 'propTypes',
      value: {
        todo: ReactPropTypes.object.isRequired
      },
      enumerable: true
    }]);

    function FluxCRUDItem() {
      var _this = this;

      _classCallCheck(this, _FluxCRUDItem);

      _get(Object.getPrototypeOf(_FluxCRUDItem.prototype), 'constructor', this).call(this);

      this._onSave = function (text) {
        _actionsFluxCRUDActions2['default'].updateText(_this.props.todo.id, text);
        _this.setState({ isEditing: false });
      };

      this.state = {
        isEditing: false
      };
    }

    /**
     * @return {object}
     */

    _createClass(FluxCRUDItem, [{
      key: 'render',
      value: function render() {
        var todo = this.props.todo;

        var input = undefined;
        if (this.state.isEditing) {
          input = _react2['default'].createElement(_FluxCRUDTextInput2['default'], {
            className: 'edit',
            onSave: this._onSave,
            value: todo.text
          });
        }
        // 编辑状态时列表项设置‘editing’到class属性,当被标记为完成时设置'completed'
        // 注意'completed'时一个class,而'complete'是状态值
        // 这样区分开命名在view执行toggleComplete和destroyCompleted时候非常重要
        return _react2['default'].createElement(
          'li',
          {
            className: (0, _classnames2['default'])({
              'completed': todo.complete,
              'editing': this.state.isEditing
            }),
            key: todo.id },
          _react2['default'].createElement(
            'div',
            { className: 'view' },
            _react2['default'].createElement('input', {
              className: 'toggle',
              type: 'checkbox',
              checked: todo.complete,
              onChange: this._onToggleComplete.bind(this)
            }),
            _react2['default'].createElement(
              'label',
              { onDoubleClick: this._onDoubleClick.bind(this) },
              todo.text
            ),
            _react2['default'].createElement('button', { className: 'destroy', onClick: this._onDestroyClick.bind(this) })
          ),
          input
        );
      }
    }, {
      key: '_onToggleComplete',
      value: function _onToggleComplete() {
        _actionsFluxCRUDActions2['default'].toggleComplete(this.props.todo);
      }
    }, {
      key: '_onDoubleClick',
      value: function _onDoubleClick() {
        this.setState({ isEditing: true });
      }

      /**
       * 提供给FluxCRUDTextInput调用的保存事件处理函数
       * 这样定义使得FluxCRUDTextInput以不同方式多处应用
       * @param  {string} text
       */
    }, {
      key: '_onDestroyClick',
      value: function _onDestroyClick() {
        _actionsFluxCRUDActions2['default'].destroy(this.props.todo.id);
      }
    }]);

    var _FluxCRUDItem = FluxCRUDItem;
    FluxCRUDItem = (0, _decoratorsWithStyles2['default'])(_FluxCRUDItemCss2['default'])(FluxCRUDItem) || FluxCRUDItem;
    return FluxCRUDItem;
  })(_react.Component);

  exports['default'] = FluxCRUDItem;
  module.exports = exports['default'];

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

  /*! 京东移动前端构建器 | MIT License | 站点建设中 */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _actionsFluxCRUDActions = __webpack_require__(4);

  var _actionsFluxCRUDActions2 = _interopRequireDefault(_actionsFluxCRUDActions);

  var _FluxCRUDItem = __webpack_require__(24);

  var _FluxCRUDItem2 = _interopRequireDefault(_FluxCRUDItem);

  var _FluxCRUDMainSectionCss = __webpack_require__(49);

  var _FluxCRUDMainSectionCss2 = _interopRequireDefault(_FluxCRUDMainSectionCss);

  var _decoratorsWithStyles = __webpack_require__(2);

  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);

  var ReactPropTypes = _react2['default'].PropTypes;

  var FluxCRUDMainSection = (function (_Component) {
    _inherits(FluxCRUDMainSection, _Component);

    function FluxCRUDMainSection() {
      _classCallCheck(this, _FluxCRUDMainSection);

      _get(Object.getPrototypeOf(_FluxCRUDMainSection.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(FluxCRUDMainSection, [{
      key: 'render',

      /**
       * @return {object}
       */
      value: function render() {
        // todos中没有值的时候渲染空的DOM，即隐藏这个section
        if (Object.keys(this.props.allFluxCRUDs).length < 1) {
          return null;
        }

        var allFluxCRUDs = this.props.allFluxCRUDs;
        var todos = [];

        for (var key in allFluxCRUDs) {
          todos.push(_react2['default'].createElement(_FluxCRUDItem2['default'], { key: key, todo: allFluxCRUDs[key] }));
        }

        return _react2['default'].createElement(
          'section',
          { className: 'main' },
          _react2['default'].createElement('input', {
            className: 'toggle-all',
            id: 'toggle-all',
            type: 'checkbox',
            onChange: this._onToggleCompleteAll,
            checked: this.props.areAllComplete ? 'checked' : ''
          }),
          _react2['default'].createElement(
            'label',
            { htmlFor: 'toggle-all' },
            '全选'
          ),
          _react2['default'].createElement(
            'ul',
            { className: 'list' },
            todos
          )
        );
      }

      /**
       * 所有todos都完成的事件的处理函数
       */
    }, {
      key: '_onToggleCompleteAll',
      value: function _onToggleCompleteAll() {
        _actionsFluxCRUDActions2['default'].toggleCompleteAll();
      }
    }], [{
      key: 'propTypes',
      value: {
        allFluxCRUDs: ReactPropTypes.object.isRequired,
        areAllComplete: ReactPropTypes.bool.isRequired
      },
      enumerable: true
    }]);

    var _FluxCRUDMainSection = FluxCRUDMainSection;
    FluxCRUDMainSection = (0, _decoratorsWithStyles2['default'])(_FluxCRUDMainSectionCss2['default'])(FluxCRUDMainSection) || FluxCRUDMainSection;
    return FluxCRUDMainSection;
  })(_react.Component);

  exports['default'] = FluxCRUDMainSection;
  module.exports = exports['default'];

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

  /*! 京东移动前端构建器 | MIT License | 站点建设中 */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _FooterCss = __webpack_require__(51);

  var _FooterCss2 = _interopRequireDefault(_FooterCss);

  var _decoratorsWithViewport = __webpack_require__(32);

  var _decoratorsWithViewport2 = _interopRequireDefault(_decoratorsWithViewport);

  var _decoratorsWithStyles = __webpack_require__(2);

  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);

  var _RouteLink = __webpack_require__(6);

  var _RouteLink2 = _interopRequireDefault(_RouteLink);

  var Footer = (function () {
    function Footer() {
      _classCallCheck(this, _Footer);
    }

    _createClass(Footer, [{
      key: 'render',
      value: function render() {
        // CSS渲染示例
        var _props$viewport = this.props.viewport;
        var width = _props$viewport.width;
        var height = _props$viewport.height;

        this.renderCss('.Footer-viewport:after {content:\' ' + width + 'x' + height + '\';}');

        return _react2['default'].createElement(
          'div',
          { className: 'Footer' },
          _react2['default'].createElement(
            'div',
            { className: 'Footer-container' },
            _react2['default'].createElement(
              'span',
              { className: 'Footer-text' },
              '© 京东成都研究院'
            ),
            _react2['default'].createElement(
              'span',
              { className: 'Footer-spacer' },
              '·'
            ),
            _react2['default'].createElement(
              'a',
              { className: 'Footer-link', href: '/', onClick: _RouteLink2['default'].handleClick },
              '首页'
            ),
            _react2['default'].createElement(
              'span',
              { className: 'Footer-spacer' },
              '·'
            ),
            _react2['default'].createElement(
              'a',
              { className: 'Footer-link', href: '/privacy', onClick: _RouteLink2['default'].handleClick },
              '隐私'
            ),
            _react2['default'].createElement(
              'span',
              { className: 'Footer-spacer' },
              '·'
            ),
            _react2['default'].createElement(
              'a',
              { className: 'Footer-link', href: '/not-found', onClick: _RouteLink2['default'].handleClick },
              '404页'
            ),
            _react2['default'].createElement(
              'span',
              { className: 'Footer-spacer' },
              ' | '
            ),
            _react2['default'].createElement(
              'span',
              { ref: 'viewport', className: 'Footer-viewport Footer-text Footer-text--muted' },
              '窗口分辨率:'
            )
          )
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        viewport: _react.PropTypes.shape({
          width: _react.PropTypes.number.isRequired,
          height: _react.PropTypes.number.isRequired
        }).isRequired
      },
      enumerable: true
    }]);

    var _Footer = Footer;
    Footer = (0, _decoratorsWithStyles2['default'])(_FooterCss2['default'])(Footer) || Footer;
    Footer = (0, _decoratorsWithViewport2['default'])(Footer) || Footer;
    return Footer;
  })();

  exports['default'] = Footer;
  module.exports = exports['default'];

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

  /*! 京东移动前端构建器 | MIT License | 站点建设中 */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _HeaderCss = __webpack_require__(52);

  var _HeaderCss2 = _interopRequireDefault(_HeaderCss);

  var _decoratorsWithStyles = __webpack_require__(2);

  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);

  var _RouteLink = __webpack_require__(6);

  var _RouteLink2 = _interopRequireDefault(_RouteLink);

  var _Navigation = __webpack_require__(28);

  var _Navigation2 = _interopRequireDefault(_Navigation);

  var Header = (function () {
    function Header() {
      _classCallCheck(this, _Header);
    }

    _createClass(Header, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          { className: 'Header' },
          _react2['default'].createElement(
            'div',
            { className: 'Header-container' },
            _react2['default'].createElement(
              'a',
              { className: 'Header-brand', href: '/', onClick: _RouteLink2['default'].handleClick },
              _react2['default'].createElement('img', { className: 'Header-brandImg', src: __webpack_require__(64), width: '38', height: '38', alt: 'React' }),
              _react2['default'].createElement(
                'span',
                { className: 'Header-brandTxt' },
                '京东移动前端'
              )
            ),
            _react2['default'].createElement(_Navigation2['default'], { className: 'Navigation' }),
            _react2['default'].createElement(
              'div',
              { className: 'Header-banner' },
              _react2['default'].createElement(
                'h1',
                { className: 'Header-bannerTitle' },
                'JDM'
              ),
              _react2['default'].createElement(
                'p',
                { className: 'Header-bannerDesc' },
                '前端组件化 前端工程化 JS,CSS,HTML依赖管理 ES6 打包 压缩混淆 React 虚拟DOM 前端路由 单页面应用'
              )
            )
          )
        );
      }
    }]);

    var _Header = Header;
    Header = (0, _decoratorsWithStyles2['default'])(_HeaderCss2['default'])(Header) || Header;
    return Header;
  })();

  exports['default'] = Header;
  module.exports = exports['default'];

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

  /*! 京东移动前端构建器 | MIT License | 站点建设中 */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _classnames = __webpack_require__(10);

  var _classnames2 = _interopRequireDefault(_classnames);

  var _NavigationCss = __webpack_require__(53);

  var _NavigationCss2 = _interopRequireDefault(_NavigationCss);

  var _decoratorsWithStyles = __webpack_require__(2);

  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);

  var _RouteLink = __webpack_require__(6);

  var _RouteLink2 = _interopRequireDefault(_RouteLink);

  var Navigation = (function () {
    function Navigation() {
      _classCallCheck(this, _Navigation);
    }

    _createClass(Navigation, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          { className: (0, _classnames2['default'])(this.props.className, 'Navigation'), role: 'navigation' },
          _react2['default'].createElement(
            'a',
            { className: 'Navigation-link', href: '/fluxCRUD', onClick: _RouteLink2['default'].handleClick },
            'FluxCRUD'
          ),
          _react2['default'].createElement(
            'a',
            { className: 'Navigation-link', href: '/about', onClick: _RouteLink2['default'].handleClick },
            '关于'
          ),
          _react2['default'].createElement(
            'a',
            { className: 'Navigation-link', href: '/contact', onClick: _RouteLink2['default'].handleClick },
            '联系我们'
          ),
          _react2['default'].createElement(
            'span',
            { className: 'Navigation-spacer' },
            ' | '
          ),
          _react2['default'].createElement(
            'a',
            { className: 'Navigation-link', href: '/login', onClick: _RouteLink2['default'].handleClick },
            '登录'
          ),
          _react2['default'].createElement(
            'span',
            { className: 'Navigation-spacer' },
            'or'
          ),
          _react2['default'].createElement(
            'a',
            { className: 'Navigation-link', href: '/register', onClick: _RouteLink2['default'].handleClick },
            '注册'
          )
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        className: _react.PropTypes.string
      },
      enumerable: true
    }]);

    var _Navigation = Navigation;
    Navigation = (0, _decoratorsWithStyles2['default'])(_NavigationCss2['default'])(Navigation) || Navigation;
    return Navigation;
  })();

  exports['default'] = Navigation;
  module.exports = exports['default'];

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

  /*! 京东移动前端构建器 | MIT License | 站点建设中 */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _superagent = __webpack_require__(79);

  var _superagent2 = _interopRequireDefault(_superagent);

  var _fbjsLibExecutionEnvironment = __webpack_require__(5);

  var _fbjsLibExecutionEnvironment2 = _interopRequireDefault(_fbjsLibExecutionEnvironment);

  var getUrl = function getUrl(path) {
    return path.startsWith('http') ? path : _fbjsLibExecutionEnvironment2['default'].canUseDOM ? path : process.env.WEBSITE_HOSTNAME ? 'http://' + process.env.WEBSITE_HOSTNAME + path : 'http://127.0.0.1:' + global.server.get('port') + path;
  };

  var HttpClient = {

    get: function get(path) {
      return new Promise(function (resolve, reject) {
        _superagent2['default'].get(getUrl(path)).accept('application/json').end(function (err, res) {
          if (err) {
            if (err.status === 404) {
              resolve(null);
            } else {
              reject(err);
            }
          } else {
            resolve(res.body);
          }
        });
      });
    }

  };

  exports['default'] = HttpClient;
  module.exports = exports['default'];

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

  /*! 京东移动前端构建器 | MIT License | 站点建设中 */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _fbjsLibExecutionEnvironment = __webpack_require__(5);

  var _historyLibCreateBrowserHistory = __webpack_require__(73);

  var _historyLibCreateBrowserHistory2 = _interopRequireDefault(_historyLibCreateBrowserHistory);

  var _historyLibUseQueries = __webpack_require__(74);

  var _historyLibUseQueries2 = _interopRequireDefault(_historyLibUseQueries);

  var location = _fbjsLibExecutionEnvironment.canUseDOM ? (0, _historyLibUseQueries2['default'])(_historyLibCreateBrowserHistory2['default'])() : {};

  exports['default'] = location;
  module.exports = exports['default'];

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

  /*! 京东移动前端构建器 | MIT License | 站点建设中 */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _fbjsLibEmptyFunction = __webpack_require__(68);

  var _fbjsLibEmptyFunction2 = _interopRequireDefault(_fbjsLibEmptyFunction);

  function withContext(ComposedComponent) {
    return (function () {
      function WithContext() {
        _classCallCheck(this, WithContext);
      }

      _createClass(WithContext, [{
        key: 'getChildContext',
        value: function getChildContext() {
          var context = this.props.context;
          return {
            onInsertCss: context.onInsertCss || _fbjsLibEmptyFunction2['default'],
            onSetTitle: context.onSetTitle || _fbjsLibEmptyFunction2['default'],
            onSetMeta: context.onSetMeta || _fbjsLibEmptyFunction2['default'],
            onPageNotFound: context.onPageNotFound || _fbjsLibEmptyFunction2['default']
          };
        }
      }, {
        key: 'render',
        value: function render() {
          var _props = this.props;
          var context = _props.context;

          var other = _objectWithoutProperties(_props, ['context']);

          return _react2['default'].createElement(ComposedComponent, other);
        }
      }], [{
        key: 'propTypes',
        value: {
          context: _react.PropTypes.shape({
            onInsertCss: _react.PropTypes.func,
            onSetTitle: _react.PropTypes.func,
            onSetMeta: _react.PropTypes.func,
            onPageNotFound: _react.PropTypes.func
          })
        },
        enumerable: true
      }, {
        key: 'childContextTypes',
        value: {
          onInsertCss: _react.PropTypes.func.isRequired,
          onSetTitle: _react.PropTypes.func.isRequired,
          onSetMeta: _react.PropTypes.func.isRequired,
          onPageNotFound: _react.PropTypes.func.isRequired
        },
        enumerable: true
      }]);

      return WithContext;
    })();
  }

  exports['default'] = withContext;
  module.exports = exports['default'];

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

  /*! 京东移动前端构建器 | MIT License | 站点建设中 */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _eventemitter3 = __webpack_require__(66);

  var _eventemitter32 = _interopRequireDefault(_eventemitter3);

  var _fbjsLibExecutionEnvironment = __webpack_require__(5);

  var EE = undefined;
  var viewport = { width: 1366, height: 768 }; // 服务器渲染的默认窗口大小
  var RESIZE_EVENT = 'resize';

  function handleWindowResize() {
    if (viewport.width !== window.innerWidth || viewport.height !== window.innerHeight) {
      viewport = { width: window.innerWidth, height: window.innerHeight };
      EE.emit(RESIZE_EVENT, viewport);
    }
  }

  function withViewport(ComposedComponent) {
    return (function (_Component) {
      _inherits(WithViewport, _Component);

      function WithViewport() {
        _classCallCheck(this, WithViewport);

        _get(Object.getPrototypeOf(WithViewport.prototype), 'constructor', this).call(this);

        this.state = {
          viewport: _fbjsLibExecutionEnvironment.canUseDOM ? { width: window.innerWidth, height: window.innerHeight } : viewport
        };
      }

      _createClass(WithViewport, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
          if (!EE) {
            EE = new _eventemitter32['default']();
            window.addEventListener('resize', handleWindowResize);
            window.addEventListener('orientationchange', handleWindowResize);
          }
          EE.on(RESIZE_EVENT, this.handleResize, this);
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          EE.removeListener(RESIZE_EVENT, this.handleResize, this);
          if (!EE.listeners(RESIZE_EVENT, true)) {
            window.removeEventListener('resize', handleWindowResize);
            window.removeEventListener('orientationchange', handleWindowResize);
            EE = null;
          }
        }
      }, {
        key: 'render',
        value: function render() {
          return _react2['default'].createElement(ComposedComponent, _extends({}, this.props, { viewport: this.state.viewport }));
        }
      }, {
        key: 'handleResize',
        value: function handleResize(value) {
          this.setState({ viewport: value });
        }
      }]);

      return WithViewport;
    })(_react.Component);
  }

  exports['default'] = withViewport;
  module.exports = exports['default'];

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

  /*! 京东移动前端构建器 | MIT License | 站点建设中 */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _ContactPageCss = __webpack_require__(54);

  var _ContactPageCss2 = _interopRequireDefault(_ContactPageCss);

  var _decoratorsWithStyles = __webpack_require__(2);

  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);

  var ContactPage = (function () {
    function ContactPage() {
      _classCallCheck(this, _ContactPage);
    }

    _createClass(ContactPage, [{
      key: 'render',
      value: function render() {
        var title = '联系我们';
        this.context.onSetTitle(title);
        return _react2['default'].createElement(
          'div',
          { className: 'ContactPage' },
          _react2['default'].createElement(
            'div',
            { className: 'ContactPage-container' },
            _react2['default'].createElement(
              'h1',
              null,
              title
            ),
            _react2['default'].createElement(
              'p',
              null,
              '联系我们'
            ),
            _react2['default'].createElement(
              'p',
              null,
              '联系我们'
            ),
            _react2['default'].createElement(
              'p',
              null,
              '联系我们'
            ),
            _react2['default'].createElement(
              'p',
              null,
              '联系我们'
            ),
            _react2['default'].createElement(
              'p',
              null,
              '联系我们'
            ),
            _react2['default'].createElement(
              'p',
              null,
              '联系我们'
            ),
            _react2['default'].createElement(
              'p',
              null,
              '联系我们'
            ),
            _react2['default'].createElement(
              'p',
              null,
              '联系我们'
            ),
            _react2['default'].createElement(
              'p',
              null,
              '联系我们'
            ),
            _react2['default'].createElement(
              'p',
              null,
              '联系我们'
            ),
            _react2['default'].createElement(
              'p',
              null,
              '联系我们'
            ),
            _react2['default'].createElement(
              'p',
              null,
              '联系我们'
            ),
            _react2['default'].createElement(
              'p',
              null,
              '联系我们'
            ),
            _react2['default'].createElement(
              'p',
              null,
              '联系我们'
            ),
            _react2['default'].createElement(
              'p',
              null,
              '联系我们'
            ),
            _react2['default'].createElement(
              'p',
              null,
              '联系我们'
            ),
            _react2['default'].createElement(
              'p',
              null,
              '联系我们'
            )
          )
        );
      }
    }], [{
      key: 'contextTypes',
      value: {
        onSetTitle: _react.PropTypes.func.isRequired
      },
      enumerable: true
    }]);

    var _ContactPage = ContactPage;
    ContactPage = (0, _decoratorsWithStyles2['default'])(_ContactPageCss2['default'])(ContactPage) || ContactPage;
    return ContactPage;
  })();

  exports['default'] = ContactPage;
  module.exports = exports['default'];

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

  /*! 京东移动前端构建器 | MIT License | 站点建设中 */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _ContentPageCss = __webpack_require__(55);

  var _ContentPageCss2 = _interopRequireDefault(_ContentPageCss);

  var _decoratorsWithStyles = __webpack_require__(2);

  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);

  var ContentPage = (function () {
    function ContentPage() {
      _classCallCheck(this, _ContentPage);
    }

    _createClass(ContentPage, [{
      key: 'render',
      value: function render() {
        this.context.onSetTitle(this.props.title);
        return _react2['default'].createElement(
          'div',
          { className: 'ContentPage' },
          _react2['default'].createElement(
            'div',
            { className: 'ContentPage-container' },
            this.props.path === '/' ? null : _react2['default'].createElement(
              'h1',
              null,
              this.props.title
            ),
            _react2['default'].createElement('div', { dangerouslySetInnerHTML: { __html: this.props.content || '' } })
          )
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        path: _react.PropTypes.string.isRequired,
        content: _react.PropTypes.string.isRequired,
        title: _react.PropTypes.string
      },
      enumerable: true
    }, {
      key: 'contextTypes',
      value: {
        onSetTitle: _react.PropTypes.func.isRequired
      },
      enumerable: true
    }]);

    var _ContentPage = ContentPage;
    ContentPage = (0, _decoratorsWithStyles2['default'])(_ContentPageCss2['default'])(ContentPage) || ContentPage;
    return ContentPage;
  })();

  exports['default'] = ContentPage;
  module.exports = exports['default'];

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

  /*! 京东移动前端构建器 | MIT License | 站点建设中 */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _decoratorsWithStyles = __webpack_require__(2);

  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);

  var _ErrorPageCss = __webpack_require__(56);

  var _ErrorPageCss2 = _interopRequireDefault(_ErrorPageCss);

  var ErrorPage = (function () {
    function ErrorPage() {
      _classCallCheck(this, _ErrorPage);
    }

    _createClass(ErrorPage, [{
      key: 'render',
      value: function render() {
        var title = 'Error';
        this.context.onSetTitle(title);
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            title
          ),
          _react2['default'].createElement(
            'p',
            null,
            '抱歉,出错了！'
          )
        );
      }
    }], [{
      key: 'contextTypes',
      value: {
        onSetTitle: _react.PropTypes.func.isRequired,
        onPageNotFound: _react.PropTypes.func.isRequired
      },
      enumerable: true
    }]);

    var _ErrorPage = ErrorPage;
    ErrorPage = (0, _decoratorsWithStyles2['default'])(_ErrorPageCss2['default'])(ErrorPage) || ErrorPage;
    return ErrorPage;
  })();

  exports['default'] = ErrorPage;
  module.exports = exports['default'];

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

  /*! 京东移动前端构建器 | MIT License | 站点建设中 */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _FluxCRUDPageCss = __webpack_require__(57);

  var _FluxCRUDPageCss2 = _interopRequireDefault(_FluxCRUDPageCss);

  var _decoratorsWithStyles = __webpack_require__(2);

  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);

  var _componentsFluxCRUDFluxCRUD = __webpack_require__(21);

  var _componentsFluxCRUDFluxCRUD2 = _interopRequireDefault(_componentsFluxCRUDFluxCRUD);

  var FluxCRUDPage = (function () {
    function FluxCRUDPage() {
      _classCallCheck(this, _FluxCRUDPage);
    }

    _createClass(FluxCRUDPage, [{
      key: 'render',
      value: function render() {
        var title = 'FluxCRUD';
        this.context.onSetTitle(title);
        return _react2['default'].createElement(
          'div',
          { className: 'FluxCRUDPage' },
          _react2['default'].createElement(
            'div',
            { className: 'FluxCRUDPage-container' },
            _react2['default'].createElement(
              'h1',
              null,
              title
            ),
            _react2['default'].createElement(
              'p',
              null,
              'Flux通信实现的增删改查操作'
            ),
            _react2['default'].createElement(_componentsFluxCRUDFluxCRUD2['default'], null)
          )
        );
      }
    }], [{
      key: 'contextTypes',
      value: {
        onSetTitle: _react.PropTypes.func.isRequired
      },
      enumerable: true
    }]);

    var _FluxCRUDPage = FluxCRUDPage;
    FluxCRUDPage = (0, _decoratorsWithStyles2['default'])(_FluxCRUDPageCss2['default'])(FluxCRUDPage) || FluxCRUDPage;
    return FluxCRUDPage;
  })();

  exports['default'] = FluxCRUDPage;
  module.exports = exports['default'];

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

  /*! 京东移动前端构建器 | MIT License | 站点建设中 */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _IndexPageCss = __webpack_require__(58);

  var _IndexPageCss2 = _interopRequireDefault(_IndexPageCss);

  var _decoratorsWithStyles = __webpack_require__(2);

  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);

  var IndexPage = (function () {
    function IndexPage() {
      _classCallCheck(this, _IndexPage);
    }

    _createClass(IndexPage, [{
      key: 'render',
      value: function render() {
        var title = '首页';
        this.context.onSetTitle(title);
        return _react2['default'].createElement(
          'div',
          { className: 'IndexPage' },
          _react2['default'].createElement(
            'div',
            { className: 'IndexPage-container' },
            _react2['default'].createElement(
              'h1',
              null,
              title
            ),
            _react2['default'].createElement(
              'p',
              null,
              '首页'
            ),
            _react2['default'].createElement(
              'p',
              null,
              '首页'
            ),
            _react2['default'].createElement(
              'p',
              null,
              '首页'
            ),
            _react2['default'].createElement(
              'p',
              null,
              '首页'
            ),
            _react2['default'].createElement(
              'p',
              null,
              '首页'
            ),
            _react2['default'].createElement(
              'p',
              null,
              '首页'
            ),
            _react2['default'].createElement(
              'p',
              null,
              '首页'
            ),
            _react2['default'].createElement(
              'p',
              null,
              '首页'
            ),
            _react2['default'].createElement(
              'p',
              null,
              '首页'
            ),
            _react2['default'].createElement(
              'p',
              null,
              '首页'
            ),
            _react2['default'].createElement(
              'p',
              null,
              '首页'
            ),
            _react2['default'].createElement(
              'p',
              null,
              '首页'
            ),
            _react2['default'].createElement(
              'p',
              null,
              '首页'
            ),
            _react2['default'].createElement(
              'p',
              null,
              '首页'
            ),
            _react2['default'].createElement(
              'p',
              null,
              '首页'
            ),
            _react2['default'].createElement(
              'p',
              null,
              '首页'
            ),
            _react2['default'].createElement(
              'p',
              null,
              '首页'
            )
          )
        );
      }
    }], [{
      key: 'contextTypes',
      value: {
        onSetTitle: _react.PropTypes.func.isRequired
      },
      enumerable: true
    }]);

    var _IndexPage = IndexPage;
    IndexPage = (0, _decoratorsWithStyles2['default'])(_IndexPageCss2['default'])(IndexPage) || IndexPage;
    return IndexPage;
  })();

  exports['default'] = IndexPage;
  module.exports = exports['default'];

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

  /*! 京东移动前端构建器 | MIT License | 站点建设中 */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _LoginPageCss = __webpack_require__(59);

  var _LoginPageCss2 = _interopRequireDefault(_LoginPageCss);

  var _decoratorsWithStyles = __webpack_require__(2);

  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);

  var LoginPage = (function () {
    function LoginPage() {
      _classCallCheck(this, _LoginPage);
    }

    _createClass(LoginPage, [{
      key: 'render',
      value: function render() {
        var title = '登录';
        this.context.onSetTitle(title);
        return _react2['default'].createElement(
          'div',
          { className: 'LoginPage' },
          _react2['default'].createElement(
            'div',
            { className: 'LoginPage-container' },
            _react2['default'].createElement(
              'h1',
              null,
              title
            ),
            _react2['default'].createElement(
              'p',
              null,
              '登录登录登录登录登录登录登录登录登录登录登录登录登录登录登录'
            )
          )
        );
      }
    }], [{
      key: 'contextTypes',
      value: {
        onSetTitle: _react.PropTypes.func.isRequired
      },
      enumerable: true
    }]);

    var _LoginPage = LoginPage;
    LoginPage = (0, _decoratorsWithStyles2['default'])(_LoginPageCss2['default'])(LoginPage) || LoginPage;
    return LoginPage;
  })();

  exports['default'] = LoginPage;
  module.exports = exports['default'];

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

  /*! 京东移动前端构建器 | MIT License | 站点建设中 */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _decoratorsWithStyles = __webpack_require__(2);

  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);

  var _NotFoundPageCss = __webpack_require__(60);

  var _NotFoundPageCss2 = _interopRequireDefault(_NotFoundPageCss);

  var NotFoundPage = (function () {
    function NotFoundPage() {
      _classCallCheck(this, _NotFoundPage);
    }

    _createClass(NotFoundPage, [{
      key: 'render',
      value: function render() {
        var title = '未找到页面';
        this.context.onSetTitle(title);
        this.context.onPageNotFound();
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            title
          ),
          _react2['default'].createElement(
            'p',
            null,
            '抱歉, 页面不存在.'
          )
        );
      }
    }], [{
      key: 'contextTypes',
      value: {
        onSetTitle: _react.PropTypes.func.isRequired,
        onPageNotFound: _react.PropTypes.func.isRequired
      },
      enumerable: true
    }]);

    var _NotFoundPage = NotFoundPage;
    NotFoundPage = (0, _decoratorsWithStyles2['default'])(_NotFoundPageCss2['default'])(NotFoundPage) || NotFoundPage;
    return NotFoundPage;
  })();

  exports['default'] = NotFoundPage;
  module.exports = exports['default'];

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

  /*! 京东移动前端构建器 | MIT License | 站点建设中 */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _decoratorsWithStyles = __webpack_require__(2);

  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);

  var _RegisterPageCss = __webpack_require__(61);

  var _RegisterPageCss2 = _interopRequireDefault(_RegisterPageCss);

  var RegisterPage = (function () {
    function RegisterPage() {
      _classCallCheck(this, _RegisterPage);
    }

    _createClass(RegisterPage, [{
      key: 'render',
      value: function render() {
        var title = '注册';
        this.context.onSetTitle(title);
        return _react2['default'].createElement(
          'div',
          { className: 'RegisterPage' },
          _react2['default'].createElement(
            'div',
            { className: 'RegisterPage-container' },
            _react2['default'].createElement(
              'h1',
              null,
              title
            ),
            _react2['default'].createElement(
              'p',
              null,
              '注册注册注册注册注册注册注册注册注册注册注册注册'
            )
          )
        );
      }
    }], [{
      key: 'contextTypes',
      value: {
        onSetTitle: _react.PropTypes.func.isRequired
      },
      enumerable: true
    }]);

    var _RegisterPage = RegisterPage;
    RegisterPage = (0, _decoratorsWithStyles2['default'])(_RegisterPageCss2['default'])(RegisterPage) || RegisterPage;
    return RegisterPage;
  })();

  exports['default'] = RegisterPage;
  module.exports = exports['default'];

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

  /*! 京东移动前端构建器 | MIT License | 站点建设中 */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _coreDispatcherJs = __webpack_require__(9);

  var _coreDispatcherJs2 = _interopRequireDefault(_coreDispatcherJs);

  var _events = __webpack_require__(67);

  var _constantsFluxCRUDConstants = __webpack_require__(8);

  var _constantsFluxCRUDConstants2 = _interopRequireDefault(_constantsFluxCRUDConstants);

  var _objectAssign = __webpack_require__(77);

  var _objectAssign2 = _interopRequireDefault(_objectAssign);

  var CHANGE_EVENT = 'change';

  var _fluxCRUDs = {};

  /**
   * 新增一个项
   * @param  {string} 新增项的文本
   */
  function create(text) {
    // AJAX去持久数据暂时没有提供
    // 服务端存储
    // 当前时间戳和一个随机数组成的id
    var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    _fluxCRUDs[id] = {
      id: id,
      complete: false,
      text: text
    };
  }

  /**
   * 更新
   * @param  {string} id
   * @param {object} 只更新包含数据的对象
   *     updated.
   */
  function update(id, updates) {
    _fluxCRUDs[id] = (0, _objectAssign2['default'])({}, _fluxCRUDs[id], updates);
  }

  /**
   * 用同一个对象更新所有项
   * @param  {object} 只更新包含数据的对象
   *     updated.
   */
  function updateAll(updates) {
    for (var id in _fluxCRUDs) {
      update(id, updates);
    }
  }

  /**
   * 删除一项
   * @param  {string} id
   */
  function destroy(id) {
    delete _fluxCRUDs[id];
  }

  /**
   * 删除所有选中项
   */
  function destroyCompleted() {
    for (var id in _fluxCRUDs) {
      if (_fluxCRUDs[id].complete) {
        destroy(id);
      }
    }
  }

  var FluxCRUDStore = (0, _objectAssign2['default'])({}, _events.EventEmitter.prototype, {

    /**
     * 检测所有剩余项是否标记为完成状态
     * @return {boolean}
     */
    areAllComplete: function areAllComplete() {
      for (var id in _fluxCRUDs) {
        if (!_fluxCRUDs[id].complete) {
          return false;
        }
      }
      return true;
    },

    /**
     * 获取全部集合
     * @return {object}
     */
    getAll: function getAll() {
      return _fluxCRUDs;
    },

    emitChange: function emitChange() {
      this.emit(CHANGE_EVENT);
    },

    /**
     * @param {function} callback
     */
    addChangeListener: function addChangeListener(callback) {
      this.on(CHANGE_EVENT, callback);
    },

    /**
     * @param {function} callback
     */
    removeChangeListener: function removeChangeListener(callback) {
      this.removeListener(CHANGE_EVENT, callback);
    }
  });

  // 注册所有动作的处理函数
  _coreDispatcherJs2['default'].register(function (action) {
    var text;

    switch (action.actionType) {
      case _constantsFluxCRUDConstants2['default'].FLUX_CRUD_CREATE:
        text = action.text.trim();
        if (text !== '') {
          create(text);
          FluxCRUDStore.emitChange();
        }
        break;

      case _constantsFluxCRUDConstants2['default'].FLUX_CRUD_TOGGLE_COMPLETE_ALL:
        if (FluxCRUDStore.areAllComplete()) {
          updateAll({ complete: false });
        } else {
          updateAll({ complete: true });
        }
        FluxCRUDStore.emitChange();
        break;

      case _constantsFluxCRUDConstants2['default'].FLUX_CRUD_UNDO_COMPLETE:
        update(action.id, { complete: false });
        FluxCRUDStore.emitChange();
        break;

      case _constantsFluxCRUDConstants2['default'].FLUX_CRUD_COMPLETE:
        update(action.id, { complete: true });
        FluxCRUDStore.emitChange();
        break;

      case _constantsFluxCRUDConstants2['default'].FLUX_CRUD_UPDATE_TEXT:
        text = action.text.trim();
        if (text !== '') {
          update(action.id, { text: text });
          FluxCRUDStore.emitChange();
        }
        break;

      case _constantsFluxCRUDConstants2['default'].FLUX_CRUD_DESTROY:
        destroy(action.id);
        FluxCRUDStore.emitChange();
        break;

      case _constantsFluxCRUDConstants2['default'].FLUX_CRUD_DESTROY_COMPLETED:
        destroyCompleted();
        FluxCRUDStore.emitChange();
        break;

      default:
      // no op
    }
  });

  exports['default'] = FluxCRUDStore;
  module.exports = exports['default'];

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

  /*! 京东移动前端构建器 | MIT License | 站点建设中 */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _fs = __webpack_require__(12);

  var _fs2 = _interopRequireDefault(_fs);

  var exists = function exists(filename) {
    return new Promise(function (resolve) {
      _fs2['default'].exists(filename, resolve);
    });
  };

  var readFile = function readFile(filename) {
    return new Promise(function (resolve, reject) {
      _fs2['default'].readFile(filename, 'utf8', function (err, data) {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  };

  exports['default'] = { exists: exists, readFile: readFile };
  module.exports = exports['default'];

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(3)();
  // imports


  // module
  exports.push([module.id, "/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background-color:transparent}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:700}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{height:auto}input[type=search]{-webkit-appearance:textfield;box-sizing:content-box}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:700}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}\n\n/*! 京东移动前端构建器 | MIT License | 站点建设中 */html{color:#222;font-weight:100;font-size:1em;font-family:Segoe UI,HelveticaNeue-Light,sans-serif;line-height:1.375}::-moz-selection{background:#b3d4fc;text-shadow:none}::selection{background:#b3d4fc;text-shadow:none}hr{display:block;height:1px;border:0;border-top:1px solid #ccc;margin:1em 0;padding:0}audio,canvas,iframe,img,svg,video{vertical-align:middle}fieldset{border:0;margin:0;padding:0}textarea{resize:vertical}.browserupgrade{margin:.2em 0;background:#ccc;color:#000;padding:.2em 0}@media print{*,:after,:before{background:transparent!important;color:#000!important;box-shadow:none!important;text-shadow:none!important}a,a:visited{text-decoration:underline}a[href]:after{content:\" (\" attr(href) \")\"}abbr[title]:after{content:\" (\" attr(title) \")\"}a[href^=\"#\"]:after,a[href^=\"javascript:\"]:after{content:\"\"}blockquote,pre{border:1px solid #999;page-break-inside:avoid}thead{display:table-header-group}img,tr{page-break-inside:avoid}img{max-width:100%!important}h2,h3,p{orphans:3;widows:3}h2,h3{page-break-after:avoid}}", ""]);

  // exports


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(3)();
  // imports


  // module
  exports.push([module.id, ".Feedback{background:#f5f5f5;color:#333}.Feedback-container{margin:0 auto;padding:20px 8px;max-width:750pt;text-align:center;font-size:1.5em}.Feedback-link,.Feedback-link:active,.Feedback-link:hover,.Feedback-link:visited{color:#333;text-decoration:none}.Feedback-link:hover{text-decoration:underline}.Feedback-spacer{padding-right:15px;padding-left:15px}", ""]);

  // exports


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(3)();
  // imports


  // module
  exports.push([module.id, ".flux-crud button{margin:0;padding:0;border:0;background:none;font-size:100%;vertical-align:baseline;font-family:inherit;color:inherit;-webkit-appearance:none;-ms-appearance:none;-o-appearance:none;-moz-appearance:none;appearance:none}.flux-crud button,input[type=checkbox]{outline:0}.flux-crud .hidden{display:none}.flux-crud hr{margin:20px 0;border:0;border-top:1px dashed #c5c5c5;border-bottom:1px dashed #f7f7f7}", ""]);

  // exports


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(3)();
  // imports


  // module
  exports.push([module.id, ".flux-crud .clear-completed{float:right;position:relative;line-height:20px;text-decoration:none;background:#000;background:rgba(0,0,0,.1);font-size:11px;padding:0 10px;border-radius:3px;box-shadow:0 -1px 0 0 rgba(0,0,0,.2)}.flux-crud .clear-completed:hover{background:#000;background:rgba(0,0,0,.15);box-shadow:0 -1px 0 0 rgba(0,0,0,.3)}.flux-crud .footer{color:#777;padding:0 15px;position:absolute;right:0;left:0;height:20px;z-index:1;text-align:center}.flux-crud .footer:before{content:'';position:absolute;right:0;bottom:31px;left:0;height:50px;z-index:-1;box-shadow:0 1px 1px rgba(0,0,0,.3),0 6px 0 -3px hsla(0,0%,100%,.8),0 7px 1px -3px rgba(0,0,0,.3),0 43px 0 -6px hsla(0,0%,100%,.8),0 44px 2px -6px rgba(0,0,0,.2)}.flux-crud .count{float:left;text-align:left}", ""]);

  // exports


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(3)();
  // imports


  // module
  exports.push([module.id, ".flux-crud .header{padding-top:15px;border-radius:inherit}.flux-crud .new{position:relative;margin:0;width:100%;font-size:24px;font-family:inherit;line-height:1.4em;border:0;outline:0;color:inherit;padding:6px;border:1px solid #999;box-shadow:inset 0 -1px 5px 0 rgba(0,0,0,.2);-ms-box-sizing:border-box;-o-box-sizing:border-box;box-sizing:border-box;-webkit-font-smoothing:antialiased;-moz-font-smoothing:antialiased;-ms-font-smoothing:antialiased;-o-font-smoothing:antialiased;font-smoothing:antialiased;padding:1pc 1pc 1pc 60px;border:none;background:#000;background:rgba(0,0,0,.02);z-index:2;box-shadow:none}", ""]);

  // exports


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(3)();
  // imports


  // module
  exports.push([module.id, ".flux-crud .edit{position:relative;margin:0;width:100%;font-size:24px;font-family:inherit;line-height:1.4em;border:0;outline:0;color:inherit;padding:6px;border:1px solid #999;box-shadow:inset 0 -1px 5px 0 rgba(0,0,0,.2);-ms-box-sizing:border-box;-o-box-sizing:border-box;box-sizing:border-box;-webkit-font-smoothing:antialiased;-moz-font-smoothing:antialiased;-ms-font-smoothing:antialiased;-o-font-smoothing:antialiased;font-smoothing:antialiased}.flux-crud .list li.editing .view{display:none}.flux-crud .list li .destroy{display:none;position:absolute;top:0;right:10px;bottom:0;width:40px;height:40px;margin:auto 0;font-size:22px;color:#a88a8a;-webkit-transition:all .2s;transition:all .2s}.flux-crud .list li .destroy:hover{text-shadow:0 0 1px #000,0 0 10px hsla(0,45%,60%,.8);-webkit-transform:scale(1.3);-ms-transform:scale(1.3);transform:scale(1.3)}.flux-crud .list li .destroy:after{content:'\\2716'}.flux-crud .list li:hover .destroy{display:block}", ""]);

  // exports


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(3)();
  // imports


  // module
  exports.push([module.id, ".flux-crud .main{position:relative;z-index:2;border-top:1px dotted #adadad}.flux-crud label[for=toggle-all]{display:none}.flux-crud .toggle-all{position:absolute;top:-42px;left:-4px;width:40px;text-align:center;border:none}.flux-crud .toggle-all:before{content:'\\BB';font-size:28px;color:#d9d9d9;padding:0 25px 7px}.flux-crud .toggle-all:checked:before{color:#737373}.flux-crud .list{margin:0;padding:0;list-style:none}.flux-crud .list li{position:relative;font-size:24px;border-bottom:1px dotted #ccc}.flux-crud .list li:last-child{border-bottom:none}.flux-crud .list li.editing{border-bottom:none;padding:0}.flux-crud .list li.editing .edit{display:block;width:506px;padding:13px 17px 9pt;margin:0 0 0 43px}.flux-crud .list li label{white-space:pre;word-break:break-all;padding:15px 60px 15px 15px;margin-left:45px;display:block;line-height:1.2;-webkit-transition:color .4s;transition:color .4s}.flux-crud .list li.completed label{color:#a9a9a9;text-decoration:line-through}.flux-crud .list li .edit{display:none}.flux-crud .list li.editing:last-child{margin-bottom:-1px}.flux-crud .list li .toggle{text-align:center;width:40px;height:auto;position:absolute;top:0;bottom:0;margin:auto 0;border:none;-webkit-appearance:none;-ms-appearance:none;-o-appearance:none;-moz-appearance:none;appearance:none}.flux-crud .list li .toggle:after{content:'\\2714';line-height:43px;font-size:20px;color:#d9d9d9;text-shadow:0 -1px 0 #bfbfbf}.flux-crud .list li .toggle:checked:after{color:#85ada7;text-shadow:0 1px 0 #669991;bottom:1px;position:relative}@media screen and (-webkit-min-device-pixel-ratio:0){.flux-crud .list li .toggle,.flux-crud .toggle-all{background:none}.flux-crud .list li .toggle{height:40px}.flux-crud .toggle-all{top:-56px;left:-15px;width:65px;height:41px;-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);-webkit-appearance:none;-moz-appearance:none;appearance:none}}", ""]);

  // exports


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(3)();
  // imports


  // module
  exports.push([module.id, "", ""]);

  // exports


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(3)();
  // imports


  // module
  exports.push([module.id, ".Footer{background:#333;color:#fff}.Footer-container{margin:0 auto;padding:20px 15px;max-width:750pt;text-align:center}.Footer-text{color:#fff;color:hsla(0,0%,100%,.5)}.Footer-spacer,.Footer-text--muted{color:#fff;color:hsla(0,0%,100%,.3)}.Footer-link,.Footer-text{padding:2px 5px;font-size:1em}.Footer-link,.Footer-link:active,.Footer-link:visited{color:#fff;color:hsla(0,0%,100%,.6);text-decoration:none}.Footer-link:hover{color:#fff}", ""]);

  // exports


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(3)();
  // imports


  // module
  exports.push([module.id, ".Header{background:#555;color:#fff}.Header-container{margin:0 auto;padding:20px 0;max-width:750pt}.Header-brand{color:#e48b93;text-decoration:none;font-size:1.75em}.Header-brandTxt{margin-left:10px}.Header-banner{text-align:center}.Header-bannerTitle{margin:0;padding:10px;font-weight:400;font-size:4em;line-height:1em}.Header-bannerDesc{padding:0;color:#fff;color:hsla(0,0%,100%,.5);font-size:1.25em;margin:0}", ""]);

  // exports


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(3)();
  // imports


  // module
  exports.push([module.id, ".Navigation{float:right;margin-top:6px}.Navigation-link{display:inline-block;padding:3px 8px;text-decoration:none;font-size:1.125em}.Navigation-link,.Navigation-link:active,.Navigation-link:visited{color:#c6c6c6;color:hsla(0,0%,78%,.6)}.Navigation-link:hover{color:#c6c6c6}.Navigation-link--highlight{margin-right:8px;margin-left:8px;border-radius:3px;background:#000;background:rgba(0,0,0,.15);color:#fff}.Navigation-link--highlight:hover{background:#000;background:rgba(0,0,0,.3)}.Navigation-spacer{color:#fff;color:hsla(0,0%,100%,.3)}", ""]);

  // exports


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(3)();
  // imports


  // module
  exports.push([module.id, ".ContactPage-container{margin:0 auto;padding:0 0 40px;max-width:750pt}", ""]);

  // exports


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(3)();
  // imports


  // module
  exports.push([module.id, ".ContentPage-container{margin:0 auto;padding:0 0 40px;max-width:750pt}", ""]);

  // exports


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(3)();
  // imports


  // module
  exports.push([module.id, "*{margin:0;line-height:1.2}html{display:table;width:100%;height:100%;color:#888;text-align:center;font-family:sans-serif}body{display:table-cell;margin:2em auto;vertical-align:middle}h1{color:#555;font-weight:400;font-size:2em}p{margin:0 auto;width:280px}@media only screen and (max-width:280px){body,p{width:95%}h1{font-size:1.5em;margin:0 0 .3em}}", ""]);

  // exports


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(3)();
  // imports


  // module
  exports.push([module.id, ".FluxCRUDPage-container{margin:0 auto;padding:0 0 40px;max-width:750pt}", ""]);

  // exports


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(3)();
  // imports


  // module
  exports.push([module.id, ".IndexPage-container{margin:0 auto;padding:0 0 40px;max-width:750pt}", ""]);

  // exports


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(3)();
  // imports


  // module
  exports.push([module.id, ".LoginPage-container{margin:0 auto;padding:0 0 40px;max-width:750pt}", ""]);

  // exports


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(3)();
  // imports


  // module
  exports.push([module.id, "*{margin:0;line-height:1.2}html{display:table;width:100%;height:100%;color:#888;text-align:center;font-family:sans-serif}body{display:table-cell;margin:2em auto;vertical-align:middle}h1{color:#555;font-weight:400;font-size:2em}p{margin:0 auto;width:280px}@media only screen and (max-width:280px){body,p{width:95%}h1{font-size:1.5em;margin:0 0 .3em}}", ""]);

  // exports


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(3)();
  // imports


  // module
  exports.push([module.id, ".RegisterPage-container{margin:0 auto;padding:0 0 40px;max-width:750pt}", ""]);

  // exports


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

  var isarray = __webpack_require__(63)

  /**
   * Expose `pathToRegexp`.
   */
  module.exports = pathToRegexp
  module.exports.parse = parse
  module.exports.compile = compile
  module.exports.tokensToFunction = tokensToFunction
  module.exports.tokensToRegExp = tokensToRegExp

  /**
   * The main path matching regexp utility.
   *
   * @type {RegExp}
   */
  var PATH_REGEXP = new RegExp([
    // Match escaped characters that would otherwise appear in future matches.
    // This allows the user to escape special characters that won't transform.
    '(\\\\.)',
    // Match Express-style parameters and un-named parameters with a prefix
    // and optional suffixes. Matches appear as:
    //
    // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
    // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
    // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
    '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))'
  ].join('|'), 'g')

  /**
   * Parse a string for the raw tokens.
   *
   * @param  {String} str
   * @return {Array}
   */
  function parse (str) {
    var tokens = []
    var key = 0
    var index = 0
    var path = ''
    var res

    while ((res = PATH_REGEXP.exec(str)) != null) {
      var m = res[0]
      var escaped = res[1]
      var offset = res.index
      path += str.slice(index, offset)
      index = offset + m.length

      // Ignore already escaped sequences.
      if (escaped) {
        path += escaped[1]
        continue
      }

      // Push the current path onto the tokens.
      if (path) {
        tokens.push(path)
        path = ''
      }

      var prefix = res[2]
      var name = res[3]
      var capture = res[4]
      var group = res[5]
      var suffix = res[6]
      var asterisk = res[7]

      var repeat = suffix === '+' || suffix === '*'
      var optional = suffix === '?' || suffix === '*'
      var delimiter = prefix || '/'
      var pattern = capture || group || (asterisk ? '.*' : '[^' + delimiter + ']+?')

      tokens.push({
        name: name || key++,
        prefix: prefix || '',
        delimiter: delimiter,
        optional: optional,
        repeat: repeat,
        pattern: escapeGroup(pattern)
      })
    }

    // Match any characters still remaining.
    if (index < str.length) {
      path += str.substr(index)
    }

    // If the path exists, push it onto the end.
    if (path) {
      tokens.push(path)
    }

    return tokens
  }

  /**
   * Compile a string to a template function for the path.
   *
   * @param  {String}   str
   * @return {Function}
   */
  function compile (str) {
    return tokensToFunction(parse(str))
  }

  /**
   * Expose a method for transforming tokens into the path function.
   */
  function tokensToFunction (tokens) {
    // Compile all the tokens into regexps.
    var matches = new Array(tokens.length)

    // Compile all the patterns before compilation.
    for (var i = 0; i < tokens.length; i++) {
      if (typeof tokens[i] === 'object') {
        matches[i] = new RegExp('^' + tokens[i].pattern + '$')
      }
    }

    return function (obj) {
      var path = ''
      var data = obj || {}

      for (var i = 0; i < tokens.length; i++) {
        var token = tokens[i]

        if (typeof token === 'string') {
          path += token

          continue
        }

        var value = data[token.name]
        var segment

        if (value == null) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to be defined')
          }
        }

        if (isarray(value)) {
          if (!token.repeat) {
            throw new TypeError('Expected "' + token.name + '" to not repeat, but received "' + value + '"')
          }

          if (value.length === 0) {
            if (token.optional) {
              continue
            } else {
              throw new TypeError('Expected "' + token.name + '" to not be empty')
            }
          }

          for (var j = 0; j < value.length; j++) {
            segment = encodeURIComponent(value[j])

            if (!matches[i].test(segment)) {
              throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
            }

            path += (j === 0 ? token.prefix : token.delimiter) + segment
          }

          continue
        }

        segment = encodeURIComponent(value)

        if (!matches[i].test(segment)) {
          throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
        }

        path += token.prefix + segment
      }

      return path
    }
  }

  /**
   * Escape a regular expression string.
   *
   * @param  {String} str
   * @return {String}
   */
  function escapeString (str) {
    return str.replace(/([.+*?=^!:${}()[\]|\/])/g, '\\$1')
  }

  /**
   * Escape the capturing group by escaping special characters and meaning.
   *
   * @param  {String} group
   * @return {String}
   */
  function escapeGroup (group) {
    return group.replace(/([=!:$\/()])/g, '\\$1')
  }

  /**
   * Attach the keys as a property of the regexp.
   *
   * @param  {RegExp} re
   * @param  {Array}  keys
   * @return {RegExp}
   */
  function attachKeys (re, keys) {
    re.keys = keys
    return re
  }

  /**
   * Get the flags for a regexp from the options.
   *
   * @param  {Object} options
   * @return {String}
   */
  function flags (options) {
    return options.sensitive ? '' : 'i'
  }

  /**
   * Pull out keys from a regexp.
   *
   * @param  {RegExp} path
   * @param  {Array}  keys
   * @return {RegExp}
   */
  function regexpToRegexp (path, keys) {
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g)

    if (groups) {
      for (var i = 0; i < groups.length; i++) {
        keys.push({
          name: i,
          prefix: null,
          delimiter: null,
          optional: false,
          repeat: false,
          pattern: null
        })
      }
    }

    return attachKeys(path, keys)
  }

  /**
   * Transform an array into a regexp.
   *
   * @param  {Array}  path
   * @param  {Array}  keys
   * @param  {Object} options
   * @return {RegExp}
   */
  function arrayToRegexp (path, keys, options) {
    var parts = []

    for (var i = 0; i < path.length; i++) {
      parts.push(pathToRegexp(path[i], keys, options).source)
    }

    var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))

    return attachKeys(regexp, keys)
  }

  /**
   * Create a path regexp from string input.
   *
   * @param  {String} path
   * @param  {Array}  keys
   * @param  {Object} options
   * @return {RegExp}
   */
  function stringToRegexp (path, keys, options) {
    var tokens = parse(path)
    var re = tokensToRegExp(tokens, options)

    // Attach keys back to the regexp.
    for (var i = 0; i < tokens.length; i++) {
      if (typeof tokens[i] !== 'string') {
        keys.push(tokens[i])
      }
    }

    return attachKeys(re, keys)
  }

  /**
   * Expose a function for taking tokens and returning a RegExp.
   *
   * @param  {Array}  tokens
   * @param  {Array}  keys
   * @param  {Object} options
   * @return {RegExp}
   */
  function tokensToRegExp (tokens, options) {
    options = options || {}

    var strict = options.strict
    var end = options.end !== false
    var route = ''
    var lastToken = tokens[tokens.length - 1]
    var endsWithSlash = typeof lastToken === 'string' && /\/$/.test(lastToken)

    // Iterate over the tokens and create our regexp string.
    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i]

      if (typeof token === 'string') {
        route += escapeString(token)
      } else {
        var prefix = escapeString(token.prefix)
        var capture = token.pattern

        if (token.repeat) {
          capture += '(?:' + prefix + capture + ')*'
        }

        if (token.optional) {
          if (prefix) {
            capture = '(?:' + prefix + '(' + capture + '))?'
          } else {
            capture = '(' + capture + ')?'
          }
        } else {
          capture = prefix + '(' + capture + ')'
        }

        route += capture
      }
    }

    // In non-strict mode we allow a slash at the end of match. If the path to
    // match already ends with a slash, we remove it for consistency. The slash
    // is valid at the end of a path match, not in the middle. This is important
    // in non-ending mode, where "/test/" shouldn't match "/test//route".
    if (!strict) {
      route = (endsWithSlash ? route.slice(0, -2) : route) + '(?:\\/(?=$))?'
    }

    if (end) {
      route += '$'
    } else {
      // In non-ending mode, we need the capturing groups to match as much as
      // possible by using a positive lookahead to the end or next path segment.
      route += strict && endsWithSlash ? '' : '(?=\\/|$)'
    }

    return new RegExp('^' + route, flags(options))
  }

  /**
   * Normalize the given path string, returning a regular expression.
   *
   * An empty array can be passed in for the keys, which will hold the
   * placeholder key descriptions. For example, using `/user/:id`, `keys` will
   * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
   *
   * @param  {(String|RegExp|Array)} path
   * @param  {Array}                 [keys]
   * @param  {Object}                [options]
   * @return {RegExp}
   */
  function pathToRegexp (path, keys, options) {
    keys = keys || []

    if (!isarray(keys)) {
      options = keys
      keys = []
    } else if (!options) {
      options = {}
    }

    if (path instanceof RegExp) {
      return regexpToRegexp(path, keys, options)
    }

    if (isarray(path)) {
      return arrayToRegexp(path, keys, options)
    }

    return stringToRegexp(path, keys, options)
  }


/***/ },
/* 63 */
/***/ function(module, exports) {

  module.exports = Array.isArray || function (arr) {
    return Object.prototype.toString.call(arr) == '[object Array]';
  };


/***/ },
/* 64 */
/***/ function(module, exports) {

  module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAIAAAAnX375AAAACXBIWXMAABcSAAAXEgFnn9JSAAAAB3RJTUUH3wkGAjkACsdgIwAABEtJREFUWMPtl11sk1UYx59z3o+e9u3a2rWCW7svUAe4MbOgFxoIRrjQGIzxAtQLSNgWhRBiREBNBL2QRE00CogXM0aRREk0GDQhYkLizCKZQEJS9gGjC2xru9G+Xfu2fd9zzuPFJmHJso3FEi/2XJ6cc37n+fo/OQQR4d4ahXtui8hF5CLy/4dU57Pp1q20280YY5ZVyE1aPm+aWUqpruter9cwDObSfT4fYy4AIITMchuZU/Asy7o6eL23t6++tjZv5S2riCjNjCkkr62tC1YGvV6fy6ULLgDkd8ePM8Y6Oto1TVu4l5lsDiX29w0kkqnlDfUtLc2G1+s4TjqdAQBKqZWbGB8vcocrirJ+/Xpp27Pw5vZy4Oo108zGh4YeX9N6+vSv/QMDgUDA4zFaWlankklCqWEYPp+PMUYJ6b8SqwxVPr1x4+w+zIE8dernv86fb2/bXlNTg4ixWOzwkS8ikUhTU3Mg4FdVVVVVBLCLxe6uPza/tKU6EpkzbGQBw6ur688LFy8mEslVTU0Bf2BkKO6tMJ7btIkxNp/jZGHzUko5euPG0T1vLq2ufnbnjrr6epi1Su+6SWZ8q4NkywsvBhVY2tBQdikwsxNnfvs9fH+YNDe5N2wol/pkMiYAOA6/cXN43/63mEsbHh4ZTyX9fv9dx2eeueScx+PxdMYMhUJDQ0MSkQKEQ+EVKxvLIngAoKpqNBpNZ8y+vv6VKxqFEMHgfRMTuTLKupSy5+8LkUj1urVPImA0GjEMw3GchRTetMAiIheyVCKUUI9nao1zWShIj0dTFG5mVb+vVCi4GANCHM5VBKKpyDlyIYtFQgnRXUTXsFRybqW1UCUICQDUzW530TSktKzM2XOp4z8Yjzajw6PvvCFy+fjb7+vRiKdpxfj3P3pWNRZ6B6p2tqXPnqve/RoA9G99dfmxT61rg6mvT8hSiRCgjC1p22Zd6cv8csaz+hFXTYTqesVjrdTjniGXKFHm8kTIyN7dNz85Yt8ciR/4YNnhj6iup06crPvwPS0YzMd6hz/+3B5NhF/ZPHbiJFEUlALzlqu+xtP4MFCau3BJmCbVNN+6JxJffhU9sF8LVRI3mzmXVNcRERAAQPV6iapgySG6DgAgJHW7AUCt8IpcrvbQwfjed0Gh3jWtgMgeXDbR3YPFIqDMnj3nbnzIVRdFzhXDY12Ojf90+s4JOg05eqxTq66SUiQ6v8lfjmW6uhs+O3Rt9/6Ro5004B/YvivR+e31fQerXt9BNS34/DNLtr1MKAFCnETygV0d0uF6OFy1Z5edSOZ6LvmfWktc7qXtW4uD8Wn1g3eYnUghop0as1NjiCi5QERhFezk2NSG0QQiStuRDp9cEVYBpRQle/IgSolSSsdxMqYoFnl2AhGlbUvHuU0hi9+gReR/hBRCCCHKjZyq2FKpNDkuOOeIKIRgjCmKUkbkVMf8qxGISCktr5f30v4BZR1Xx7BD++gAAAAASUVORK5CYII="

/***/ },
/* 65 */
/***/ function(module, exports) {

  module.exports = require("babel/polyfill");

/***/ },
/* 66 */
/***/ function(module, exports) {

  module.exports = require("eventemitter3");

/***/ },
/* 67 */
/***/ function(module, exports) {

  module.exports = require("events");

/***/ },
/* 68 */
/***/ function(module, exports) {

  module.exports = require("fbjs/lib/emptyFunction");

/***/ },
/* 69 */
/***/ function(module, exports) {

  module.exports = require("fbjs/lib/invariant");

/***/ },
/* 70 */
/***/ function(module, exports) {

  module.exports = require("fbjs/lib/keyMirror");

/***/ },
/* 71 */
/***/ function(module, exports) {

  module.exports = require("flux");

/***/ },
/* 72 */
/***/ function(module, exports) {

  module.exports = require("front-matter");

/***/ },
/* 73 */
/***/ function(module, exports) {

  module.exports = require("history/lib/createBrowserHistory");

/***/ },
/* 74 */
/***/ function(module, exports) {

  module.exports = require("history/lib/useQueries");

/***/ },
/* 75 */
/***/ function(module, exports) {

  module.exports = require("jade");

/***/ },
/* 76 */
/***/ function(module, exports) {

  module.exports = require("lodash");

/***/ },
/* 77 */
/***/ function(module, exports) {

  module.exports = require("object-assign");

/***/ },
/* 78 */
/***/ function(module, exports) {

  module.exports = require("react-dom/server");

/***/ },
/* 79 */
/***/ function(module, exports) {

  module.exports = require("superagent");

/***/ }
/******/ ]);
//# sourceMappingURL=server.js.map