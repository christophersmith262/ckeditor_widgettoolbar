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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/src/Collections/ToolbarCollection.js":
/*!*************************************************!*\
  !*** ./js/src/Collections/ToolbarCollection.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _Backbone = __webpack_require__(/*! Backbone */ \"Backbone\");\n\nvar _Backbone2 = _interopRequireDefault(_Backbone);\n\nvar _ToolbarModel = __webpack_require__(/*! ../Models/ToolbarModel */ \"./js/src/Models/ToolbarModel.js\");\n\nvar _ToolbarModel2 = _interopRequireDefault(_ToolbarModel);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar ToolbarCollection = _Backbone2.default.Collection.extend({\n\n  model: _ToolbarModel2.default\n\n});\n\nexports.default = ToolbarCollection;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9zcmMvQ29sbGVjdGlvbnMvVG9vbGJhckNvbGxlY3Rpb24uanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vanMvc3JjL0NvbGxlY3Rpb25zL1Rvb2xiYXJDb2xsZWN0aW9uLmpzP2RlOWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhY2tib25lIGZyb20gJ0JhY2tib25lJztcbmltcG9ydCBUb29sYmFyTW9kZWwgZnJvbSAnLi4vTW9kZWxzL1Rvb2xiYXJNb2RlbCc7XG5cbmNvbnN0IFRvb2xiYXJDb2xsZWN0aW9uID0gQmFja2JvbmUuQ29sbGVjdGlvbi5leHRlbmQoe1xuXG4gIG1vZGVsOiBUb29sYmFyTW9kZWwsXG5cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBUb29sYmFyQ29sbGVjdGlvbjtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./js/src/Collections/ToolbarCollection.js\n");

/***/ }),

/***/ "./js/src/Models/ToolbarModel.js":
/*!***************************************!*\
  !*** ./js/src/Models/ToolbarModel.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _Backbone = __webpack_require__(/*! Backbone */ \"Backbone\");\n\nvar _Backbone2 = _interopRequireDefault(_Backbone);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar ToolbarModel = _Backbone2.default.Model.extend({\n\n  defaults: {\n    sticky: false,\n    active: false,\n    showLabel: false,\n    showActions: false\n  },\n\n  /**\n   * {@inheritdoc}\n   */\n  set: function set(attributes, options) {\n    var thisModel = this;\n\n    // If this model is being made sticky, all other models must be made\n    // unsticky.\n    if (attributes.sticky === true) {\n      this.collection.each(function (model) {\n        if (model.cid != thisModel.cid) {\n          model.set({ sticky: false });\n        }\n      });\n      attributes.active = true;\n    }\n\n    var stickyModel = this.collection.findWhere({ sticky: true });\n    if (!stickyModel) {\n      stickyModel = this;\n    }\n    if (attributes.active === true) {\n      this.collection.each(function (model) {\n        if (model.cid != thisModel.cid && model.cid != stickyModel.cid) {\n          model.set({ active: false });\n        }\n      });\n    }\n\n    return _Backbone2.default.Model.prototype.set.call(this, attributes, options);\n  }\n\n});\n\nexports.default = ToolbarModel;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9zcmMvTW9kZWxzL1Rvb2xiYXJNb2RlbC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9qcy9zcmMvTW9kZWxzL1Rvb2xiYXJNb2RlbC5qcz8yODRlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYWNrYm9uZSBmcm9tICdCYWNrYm9uZSc7XG5cbmNvbnN0IFRvb2xiYXJNb2RlbCA9IEJhY2tib25lLk1vZGVsLmV4dGVuZCh7XG5cbiAgZGVmYXVsdHM6IHtcbiAgICBzdGlja3k6IGZhbHNlLFxuICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgc2hvd0xhYmVsOiBmYWxzZSxcbiAgICBzaG93QWN0aW9uczogZmFsc2UsXG4gIH0sXG5cbiAgLyoqXG4gICAqIHtAaW5oZXJpdGRvY31cbiAgICovXG4gIHNldDogZnVuY3Rpb24oYXR0cmlidXRlcywgb3B0aW9ucykge1xuICAgIHZhciB0aGlzTW9kZWwgPSB0aGlzO1xuXG4gICAgLy8gSWYgdGhpcyBtb2RlbCBpcyBiZWluZyBtYWRlIHN0aWNreSwgYWxsIG90aGVyIG1vZGVscyBtdXN0IGJlIG1hZGVcbiAgICAvLyB1bnN0aWNreS5cbiAgICBpZiAoYXR0cmlidXRlcy5zdGlja3kgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuY29sbGVjdGlvbi5lYWNoKGZ1bmN0aW9uKG1vZGVsKSB7XG4gICAgICAgIGlmIChtb2RlbC5jaWQgIT0gdGhpc01vZGVsLmNpZCkge1xuICAgICAgICAgIG1vZGVsLnNldCh7IHN0aWNreTogZmFsc2UgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgYXR0cmlidXRlcy5hY3RpdmUgPSB0cnVlO1xuICAgIH1cblxuICAgIHZhciBzdGlja3lNb2RlbCA9IHRoaXMuY29sbGVjdGlvbi5maW5kV2hlcmUoeyBzdGlja3k6IHRydWUgfSk7XG4gICAgaWYgKCFzdGlja3lNb2RlbCkge1xuICAgICAgc3RpY2t5TW9kZWwgPSB0aGlzO1xuICAgIH1cbiAgICBpZiAoYXR0cmlidXRlcy5hY3RpdmUgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuY29sbGVjdGlvbi5lYWNoKGZ1bmN0aW9uKG1vZGVsKSB7XG4gICAgICAgIGlmIChtb2RlbC5jaWQgICE9IHRoaXNNb2RlbC5jaWQgJiYgbW9kZWwuY2lkICE9IHN0aWNreU1vZGVsLmNpZCkge1xuICAgICAgICAgIG1vZGVsLnNldCh7IGFjdGl2ZTogZmFsc2UgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBCYWNrYm9uZS5Nb2RlbC5wcm90b3R5cGUuc2V0LmNhbGwodGhpcywgYXR0cmlidXRlcywgb3B0aW9ucyk7XG4gIH1cblxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFRvb2xiYXJNb2RlbDtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFNQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXhDQTtBQUNBO0FBMENBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./js/src/Models/ToolbarModel.js\n");

/***/ }),

/***/ "./js/src/ToolbarManager.js":
/*!**********************************!*\
  !*** ./js/src/ToolbarManager.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _ToolbarCollection = __webpack_require__(/*! ./Collections/ToolbarCollection */ \"./js/src/Collections/ToolbarCollection.js\");\n\nvar _ToolbarCollection2 = _interopRequireDefault(_ToolbarCollection);\n\nvar _ToolbarView = __webpack_require__(/*! ./Views/ToolbarView */ \"./js/src/Views/ToolbarView.js\");\n\nvar _ToolbarView2 = _interopRequireDefault(_ToolbarView);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar ToolbarManager = function () {\n  function ToolbarManager() {\n    _classCallCheck(this, ToolbarManager);\n\n    this.collection = new _ToolbarCollection2.default();\n  }\n\n  _createClass(ToolbarManager, [{\n    key: 'add',\n    value: function add(el, model) {\n      model = this.collection.add(model);\n\n      var toolbar = new _ToolbarView2.default({\n        el: el,\n        model: model\n      });\n\n      toolbar.render();\n\n      return toolbar;\n    }\n  }]);\n\n  return ToolbarManager;\n}();\n\nexports.default = ToolbarManager;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9zcmMvVG9vbGJhck1hbmFnZXIuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vanMvc3JjL1Rvb2xiYXJNYW5hZ2VyLmpzPzljODciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRvb2xiYXJDb2xsZWN0aW9uIGZyb20gJy4vQ29sbGVjdGlvbnMvVG9vbGJhckNvbGxlY3Rpb24nO1xuaW1wb3J0IFRvb2xiYXJWaWV3IGZyb20gJy4vVmlld3MvVG9vbGJhclZpZXcnO1xuXG5jbGFzcyBUb29sYmFyTWFuYWdlciB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jb2xsZWN0aW9uID0gbmV3IFRvb2xiYXJDb2xsZWN0aW9uKCk7XG4gIH1cblxuICBhZGQoZWwsIG1vZGVsKSB7XG4gICAgbW9kZWwgPSB0aGlzLmNvbGxlY3Rpb24uYWRkKG1vZGVsKTtcblxuICAgIGNvbnN0IHRvb2xiYXIgPSBuZXcgVG9vbGJhclZpZXcoe1xuICAgICAgZWw6IGVsLFxuICAgICAgbW9kZWw6IG1vZGVsXG4gICAgfSk7XG5cbiAgICB0b29sYmFyLnJlbmRlcigpO1xuXG4gICAgcmV0dXJuIHRvb2xiYXI7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBUb29sYmFyTWFuYWdlcjtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7O0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBSUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/src/ToolbarManager.js\n");

/***/ }),

/***/ "./js/src/Views/ActionButtonView.js":
/*!******************************************!*\
  !*** ./js/src/Views/ActionButtonView.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _Backbone = __webpack_require__(/*! Backbone */ \"Backbone\");\n\nvar _Backbone2 = _interopRequireDefault(_Backbone);\n\nvar _jquery = __webpack_require__(/*! jquery */ \"jquery\");\n\nvar _jquery2 = _interopRequireDefault(_jquery);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar ActionButtonView = _Backbone2.default.View.extend({\n\n  /**\n   * {@inheritdoc}\n   */\n  initialize: function initialize(options) {\n    _Backbone2.default.View.prototype.initialize.call(this, options);\n    this.action = options.action;\n  },\n\n  template: '<li class=\"toolbar-action\"></li>',\n\n  events: {\n    \"click a\": \"execute\"\n  },\n\n  render: function render() {\n    this.$el.html((0, _jquery2.default)('<a href=\"#\" title=\"' + this.action.label + '\" class=\"toolbar-action__button\">' + this.action.icon + '</a>'));\n\n    return this;\n  },\n\n  execute: function execute() {\n    this.action.callback();\n  }\n\n});\n\nexports.default = ActionButtonView;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9zcmMvVmlld3MvQWN0aW9uQnV0dG9uVmlldy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9qcy9zcmMvVmlld3MvQWN0aW9uQnV0dG9uVmlldy5qcz9lZjE3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYWNrYm9uZSBmcm9tICdCYWNrYm9uZSc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5jb25zdCBBY3Rpb25CdXR0b25WaWV3ID0gQmFja2JvbmUuVmlldy5leHRlbmQoe1xuXG4gIC8qKlxuICAgKiB7QGluaGVyaXRkb2N9XG4gICAqL1xuICBpbml0aWFsaXplOiBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgQmFja2JvbmUuVmlldy5wcm90b3R5cGUuaW5pdGlhbGl6ZS5jYWxsKHRoaXMsIG9wdGlvbnMpO1xuICAgIHRoaXMuYWN0aW9uID0gb3B0aW9ucy5hY3Rpb247XG4gIH0sXG5cbiAgdGVtcGxhdGU6ICc8bGkgY2xhc3M9XCJ0b29sYmFyLWFjdGlvblwiPjwvbGk+JyxcblxuICBldmVudHM6IHtcbiAgICBcImNsaWNrIGFcIjogXCJleGVjdXRlXCIsXG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLiRlbC5odG1sKCQoJzxhIGhyZWY9XCIjXCIgdGl0bGU9XCInXG4gICAgICAgICsgdGhpcy5hY3Rpb24ubGFiZWxcbiAgICAgICAgKyAnXCIgY2xhc3M9XCJ0b29sYmFyLWFjdGlvbl9fYnV0dG9uXCI+J1xuICAgICAgICArIHRoaXMuYWN0aW9uLmljb25cbiAgICAgICAgKyAnPC9hPicpKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIGV4ZWN1dGU6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuYWN0aW9uLmNhbGxiYWNrKCk7XG4gIH1cblxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEFjdGlvbkJ1dHRvblZpZXc7XG4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE3QkE7QUFDQTtBQStCQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./js/src/Views/ActionButtonView.js\n");

/***/ }),

/***/ "./js/src/Views/ToolbarView.js":
/*!*************************************!*\
  !*** ./js/src/Views/ToolbarView.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _Backbone = __webpack_require__(/*! Backbone */ \"Backbone\");\n\nvar _Backbone2 = _interopRequireDefault(_Backbone);\n\nvar _jquery = __webpack_require__(/*! jquery */ \"jquery\");\n\nvar _jquery2 = _interopRequireDefault(_jquery);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar ToolbarView = _Backbone2.default.View.extend({\n\n  /**\n   * {@inheritdoc}\n   */\n  initialize: function initialize(options) {\n    _Backbone2.default.View.prototype.initialize.call(this, options);\n\n    this.actionViews = [];\n    this.listenTo(this.model, 'change:label', this._updateLabelChildren);\n    this.listenTo(this.model, 'change:actions', this._updateActionChildren);\n    this.listenTo(this.model, 'change:active change:showLabel change:showActions', this._updateUi);\n  },\n\n  /**\n   * {@inheritdoc}\n   */\n  remove: function remove() {\n    this._removeActionViews();\n    this.stopListening();\n    this.$toolbarEl.remove();\n    this.model.destroy();\n    return this;\n  },\n\n  render: function render() {\n\n    // Mark the root element so that we know which toolbar to make active.\n    this.$el.addClass('js-toolbar-boundary');\n\n    // Create the view elements.\n    this.$selectableEl = this._findSelectable(this.$el);\n    this.$toolbarEl = (0, _jquery2.default)('<div class=\"toolbar\"></div>');\n    this.$labelEl = (0, _jquery2.default)('<div class=\"toolbar__label\"></div>');\n    this.$actionsEl = (0, _jquery2.default)('<div class=\"toolbar__actions\"></div>');\n    this.$toolbarEl.append(this.$labelEl);\n    this.$toolbarEl.append(this.$actionsEl);\n\n    this.$selectableEl.css({\n      position: 'relative'\n    });\n\n    this.$toolbarEl.css({\n      position: 'absolute',\n      top: 0,\n      left: 0,\n      width: '100%'\n    }).prop('contentEditable', false);\n\n    // Fill the contents of the label and actions elements.\n    this._updateLabelChildren()._updateActionChildren()._updateLabel()._updateActions()._updateUi();\n\n    return this;\n  },\n\n  reposition: function reposition() {\n    return this._updateLabel()._updateActions();\n  },\n\n  _updateLabelChildren: function _updateLabelChildren() {\n    this.$labelEl.html(this.model.get('label'));\n    return this;\n  },\n  _updateActionChildren: function _updateActionChildren() {\n\n    // Remove the existing views that were created.\n    this._removeActionViews();\n\n    // Attach updated action views.\n    var view = this;\n    _.each(this.model.get('actions'), function (action) {\n      var $actionEl = (0, _jquery2.default)(action.view.prototype.template);\n      view.$actionsEl.append($actionEl);\n      var childView = new action.view({\n        el: $actionEl[0],\n        action: action\n      });\n      childView.render();\n      view.actionViews.push(childView);\n    });\n\n    return this;\n  },\n\n\n  _updateUi: function _updateUi() {\n    if (this.model.get('active')) {\n      this.$selectableEl.append(this.$toolbarEl);\n      this.$selectableEl.addClass('js-toolbar-active');\n    } else {\n      this.$toolbarEl.detach();\n      this.$selectableEl.removeClass('js-toolbar-active');\n    }\n    this.$labelEl.css({\n      position: 'absolute',\n      top: 0,\n      left: -(parseInt(this.$selectableEl.css('borderLeft'), 10) + parseInt(this.$selectableEl.css('outlineWidth'), 10)) + 'px'\n    });\n\n    this.$actionsEl.css({\n      position: 'absolute',\n      top: 0,\n      right: -(parseInt(this.$selectableEl.css('borderLeft'), 10) + parseInt(this.$selectableEl.css('outlineWidth'), 10)) + 'px'\n    });\n    return this._updateLabel()._updateActions();\n  },\n\n  _updateLabel: function _updateLabel() {\n    if (this.model.get('showLabel') && this.model.get('active')) {\n      this._showUiElement(this.$labelEl, 'left');\n    } else {\n      this._hideUiElement(this.$labelEl);\n    }\n    return this;\n  },\n\n  _updateActions: function _updateActions() {\n    if (this.model.get('showActions') && !!this.model.get('actions') && this.model.get('active')) {\n      this._showUiElement(this.$actionsEl, 'right');\n    } else {\n      this._hideUiElement(this.$actionsEl);\n    }\n    return this;\n  },\n\n  _showUiElement: function _showUiElement($el, pos) {\n    $el.show();\n\n    if (this.$el.offset().top < $el.outerHeight()) {\n      $el.css({ top: -(parseInt(this.$selectableEl.css('borderTop'), 10) + parseInt(this.$selectableEl.css('outlineWidth'), 10)) + 'px' });\n    } else {\n      $el.css({ top: -$el.outerHeight() - (parseInt(this.$selectableEl.css('borderTop'), 10) + parseInt(this.$selectableEl.css('outlineWidth'), 10)) + 'px' });\n    }\n    return this;\n  },\n\n  _hideUiElement: function _hideUiElement($el) {\n    $el.hide();\n    return this;\n  },\n\n  _findSelectable: function _findSelectable($el) {\n    if ($el.is('.js-toolbar-boundary') && !$el.is(this.$el)) {\n      return (0, _jquery2.default)([]);\n    }\n\n    if ($el.is('.js-toolbar-selectable')) {\n      return $el;\n    }\n\n    if ($el.outerHeight()) {\n      return $el;\n    }\n\n    var view = this;\n    var $result = (0, _jquery2.default)([]);\n    $el.children().each(function () {\n      var $bestMatch = view._findSelectable((0, _jquery2.default)(this));\n\n      if ($bestMatch.is('.js-toolbar-selectable')) {\n        $result = $bestMatch;\n        return false;\n      } else if (!!$bestMatch.outerHeight() && !$result.length) {\n        $result = $bestMatch;\n      }\n    });\n\n    if (!$result.length) {\n      $result = $el;\n    }\n\n    return $result;\n  },\n\n  _removeActionViews: function _removeActionViews() {\n    _.each(this.actionViews, function (view) {\n      view.remove();\n    });\n    this.actionViews = [];\n\n    return this;\n  }\n\n});\n\nexports.default = ToolbarView;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9zcmMvVmlld3MvVG9vbGJhclZpZXcuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vanMvc3JjL1ZpZXdzL1Rvb2xiYXJWaWV3LmpzPzM1M2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhY2tib25lIGZyb20gJ0JhY2tib25lJztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbmNvbnN0IFRvb2xiYXJWaWV3ID0gQmFja2JvbmUuVmlldy5leHRlbmQoe1xuXG4gIC8qKlxuICAgKiB7QGluaGVyaXRkb2N9XG4gICAqL1xuICBpbml0aWFsaXplOiBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgQmFja2JvbmUuVmlldy5wcm90b3R5cGUuaW5pdGlhbGl6ZS5jYWxsKHRoaXMsIG9wdGlvbnMpO1xuXG4gICAgdGhpcy5hY3Rpb25WaWV3cyA9IFtdO1xuICAgIHRoaXMubGlzdGVuVG8odGhpcy5tb2RlbCwgJ2NoYW5nZTpsYWJlbCcsIHRoaXMuX3VwZGF0ZUxhYmVsQ2hpbGRyZW4pO1xuICAgIHRoaXMubGlzdGVuVG8odGhpcy5tb2RlbCwgJ2NoYW5nZTphY3Rpb25zJywgdGhpcy5fdXBkYXRlQWN0aW9uQ2hpbGRyZW4pO1xuICAgIHRoaXMubGlzdGVuVG8odGhpcy5tb2RlbCwgJ2NoYW5nZTphY3RpdmUgY2hhbmdlOnNob3dMYWJlbCBjaGFuZ2U6c2hvd0FjdGlvbnMnLCB0aGlzLl91cGRhdGVVaSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIHtAaW5oZXJpdGRvY31cbiAgICovXG4gIHJlbW92ZTogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fcmVtb3ZlQWN0aW9uVmlld3MoKTtcbiAgICB0aGlzLnN0b3BMaXN0ZW5pbmcoKTtcbiAgICB0aGlzLiR0b29sYmFyRWwucmVtb3ZlKCk7XG4gICAgdGhpcy5tb2RlbC5kZXN0cm95KCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcblxuICAgIC8vIE1hcmsgdGhlIHJvb3QgZWxlbWVudCBzbyB0aGF0IHdlIGtub3cgd2hpY2ggdG9vbGJhciB0byBtYWtlIGFjdGl2ZS5cbiAgICB0aGlzLiRlbC5hZGRDbGFzcygnanMtdG9vbGJhci1ib3VuZGFyeScpO1xuICAgICAgXG4gICAgLy8gQ3JlYXRlIHRoZSB2aWV3IGVsZW1lbnRzLlxuICAgIHRoaXMuJHNlbGVjdGFibGVFbCA9IHRoaXMuX2ZpbmRTZWxlY3RhYmxlKHRoaXMuJGVsKTtcbiAgICB0aGlzLiR0b29sYmFyRWwgPSAkKCc8ZGl2IGNsYXNzPVwidG9vbGJhclwiPjwvZGl2PicpO1xuICAgIHRoaXMuJGxhYmVsRWwgPSAkKCc8ZGl2IGNsYXNzPVwidG9vbGJhcl9fbGFiZWxcIj48L2Rpdj4nKTtcbiAgICB0aGlzLiRhY3Rpb25zRWwgPSAkKCc8ZGl2IGNsYXNzPVwidG9vbGJhcl9fYWN0aW9uc1wiPjwvZGl2PicpO1xuICAgIHRoaXMuJHRvb2xiYXJFbC5hcHBlbmQodGhpcy4kbGFiZWxFbCk7XG4gICAgdGhpcy4kdG9vbGJhckVsLmFwcGVuZCh0aGlzLiRhY3Rpb25zRWwpO1xuXG4gICAgdGhpcy4kc2VsZWN0YWJsZUVsLmNzcyh7XG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICB9KTtcblxuICAgIHRoaXMuJHRvb2xiYXJFbC5jc3Moe1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB0b3A6IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICB9KS5wcm9wKCdjb250ZW50RWRpdGFibGUnLCBmYWxzZSk7XG5cbiAgICAvLyBGaWxsIHRoZSBjb250ZW50cyBvZiB0aGUgbGFiZWwgYW5kIGFjdGlvbnMgZWxlbWVudHMuXG4gICAgdGhpcy5fdXBkYXRlTGFiZWxDaGlsZHJlbigpXG4gICAgICAuX3VwZGF0ZUFjdGlvbkNoaWxkcmVuKClcbiAgICAgIC5fdXBkYXRlTGFiZWwoKVxuICAgICAgLl91cGRhdGVBY3Rpb25zKClcbiAgICAgIC5fdXBkYXRlVWkoKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIHJlcG9zaXRpb246IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl91cGRhdGVMYWJlbCgpLl91cGRhdGVBY3Rpb25zKCk7XG4gIH0sXG5cbiAgX3VwZGF0ZUxhYmVsQ2hpbGRyZW4oKSB7XG4gICAgdGhpcy4kbGFiZWxFbC5odG1sKHRoaXMubW9kZWwuZ2V0KCdsYWJlbCcpKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICBfdXBkYXRlQWN0aW9uQ2hpbGRyZW4oKSB7XG5cbiAgICAvLyBSZW1vdmUgdGhlIGV4aXN0aW5nIHZpZXdzIHRoYXQgd2VyZSBjcmVhdGVkLlxuICAgIHRoaXMuX3JlbW92ZUFjdGlvblZpZXdzKCk7XG5cbiAgICAvLyBBdHRhY2ggdXBkYXRlZCBhY3Rpb24gdmlld3MuXG4gICAgdmFyIHZpZXcgPSB0aGlzO1xuICAgIF8uZWFjaCh0aGlzLm1vZGVsLmdldCgnYWN0aW9ucycpLCBmdW5jdGlvbihhY3Rpb24pIHtcbiAgICAgIHZhciAkYWN0aW9uRWwgPSAkKGFjdGlvbi52aWV3LnByb3RvdHlwZS50ZW1wbGF0ZSk7XG4gICAgICB2aWV3LiRhY3Rpb25zRWwuYXBwZW5kKCRhY3Rpb25FbCk7XG4gICAgICB2YXIgY2hpbGRWaWV3ID0gbmV3IGFjdGlvbi52aWV3KHtcbiAgICAgICAgZWw6ICRhY3Rpb25FbFswXSxcbiAgICAgICAgYWN0aW9uOiBhY3Rpb24sXG4gICAgICB9KTtcbiAgICAgIGNoaWxkVmlldy5yZW5kZXIoKTtcbiAgICAgIHZpZXcuYWN0aW9uVmlld3MucHVzaChjaGlsZFZpZXcpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgX3VwZGF0ZVVpOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5tb2RlbC5nZXQoJ2FjdGl2ZScpKSB7XG4gICAgICB0aGlzLiRzZWxlY3RhYmxlRWwuYXBwZW5kKHRoaXMuJHRvb2xiYXJFbCk7XG4gICAgICB0aGlzLiRzZWxlY3RhYmxlRWwuYWRkQ2xhc3MoJ2pzLXRvb2xiYXItYWN0aXZlJyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy4kdG9vbGJhckVsLmRldGFjaCgpO1xuICAgICAgdGhpcy4kc2VsZWN0YWJsZUVsLnJlbW92ZUNsYXNzKCdqcy10b29sYmFyLWFjdGl2ZScpO1xuICAgIH1cbiAgICB0aGlzLiRsYWJlbEVsLmNzcyh7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHRvcDogMCxcbiAgICAgIGxlZnQ6IC0ocGFyc2VJbnQodGhpcy4kc2VsZWN0YWJsZUVsLmNzcygnYm9yZGVyTGVmdCcpLCAxMCkgKyBwYXJzZUludCh0aGlzLiRzZWxlY3RhYmxlRWwuY3NzKCdvdXRsaW5lV2lkdGgnKSwgMTApKSArICdweCcsXG4gICAgfSk7XG5cbiAgICB0aGlzLiRhY3Rpb25zRWwuY3NzKHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgdG9wOiAwLFxuICAgICAgcmlnaHQ6IC0ocGFyc2VJbnQodGhpcy4kc2VsZWN0YWJsZUVsLmNzcygnYm9yZGVyTGVmdCcpLCAxMCkgKyBwYXJzZUludCh0aGlzLiRzZWxlY3RhYmxlRWwuY3NzKCdvdXRsaW5lV2lkdGgnKSwgMTApKSArICdweCcsXG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuX3VwZGF0ZUxhYmVsKCkuX3VwZGF0ZUFjdGlvbnMoKTtcbiAgfSxcblxuICBfdXBkYXRlTGFiZWw6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLm1vZGVsLmdldCgnc2hvd0xhYmVsJykgJiYgdGhpcy5tb2RlbC5nZXQoJ2FjdGl2ZScpKSB7XG4gICAgICB0aGlzLl9zaG93VWlFbGVtZW50KHRoaXMuJGxhYmVsRWwsICdsZWZ0Jyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5faGlkZVVpRWxlbWVudCh0aGlzLiRsYWJlbEVsKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgX3VwZGF0ZUFjdGlvbnM6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLm1vZGVsLmdldCgnc2hvd0FjdGlvbnMnKSAmJiAhIXRoaXMubW9kZWwuZ2V0KCdhY3Rpb25zJykgJiYgdGhpcy5tb2RlbC5nZXQoJ2FjdGl2ZScpKSB7XG4gICAgICB0aGlzLl9zaG93VWlFbGVtZW50KHRoaXMuJGFjdGlvbnNFbCwgJ3JpZ2h0Jyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5faGlkZVVpRWxlbWVudCh0aGlzLiRhY3Rpb25zRWwpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICBfc2hvd1VpRWxlbWVudDogZnVuY3Rpb24oJGVsLCBwb3MpIHtcbiAgICAkZWwuc2hvdygpO1xuXG4gICAgaWYgKHRoaXMuJGVsLm9mZnNldCgpLnRvcCA8ICRlbC5vdXRlckhlaWdodCgpKSB7XG4gICAgICAkZWwuY3NzKHsgdG9wOiAtKHBhcnNlSW50KHRoaXMuJHNlbGVjdGFibGVFbC5jc3MoJ2JvcmRlclRvcCcpLCAxMCkgKyBwYXJzZUludCh0aGlzLiRzZWxlY3RhYmxlRWwuY3NzKCdvdXRsaW5lV2lkdGgnKSwgMTApKSArICdweCcgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgJGVsLmNzcyh7IHRvcDogLSRlbC5vdXRlckhlaWdodCgpIC0gKHBhcnNlSW50KHRoaXMuJHNlbGVjdGFibGVFbC5jc3MoJ2JvcmRlclRvcCcpLCAxMCkgKyBwYXJzZUludCh0aGlzLiRzZWxlY3RhYmxlRWwuY3NzKCdvdXRsaW5lV2lkdGgnKSwgMTApKSArICdweCcgfSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIF9oaWRlVWlFbGVtZW50OiBmdW5jdGlvbigkZWwpIHtcbiAgICAkZWwuaGlkZSgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG5cbiAgX2ZpbmRTZWxlY3RhYmxlOiBmdW5jdGlvbigkZWwpIHtcbiAgICBpZiAoJGVsLmlzKCcuanMtdG9vbGJhci1ib3VuZGFyeScpICYmICEkZWwuaXModGhpcy4kZWwpKSB7XG4gICAgICByZXR1cm4gJChbXSk7XG4gICAgfVxuXG4gICAgaWYgKCRlbC5pcygnLmpzLXRvb2xiYXItc2VsZWN0YWJsZScpKSB7XG4gICAgICByZXR1cm4gJGVsO1xuICAgIH1cblxuICAgIGlmICgkZWwub3V0ZXJIZWlnaHQoKSkge1xuICAgICAgcmV0dXJuICRlbDtcbiAgICB9XG5cbiAgICB2YXIgdmlldyA9IHRoaXM7XG4gICAgdmFyICRyZXN1bHQgPSAkKFtdKTtcbiAgICAkZWwuY2hpbGRyZW4oKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyICRiZXN0TWF0Y2ggPSB2aWV3Ll9maW5kU2VsZWN0YWJsZSgkKHRoaXMpKTtcblxuICAgICAgaWYgKCRiZXN0TWF0Y2guaXMoJy5qcy10b29sYmFyLXNlbGVjdGFibGUnKSkge1xuICAgICAgICAkcmVzdWx0ID0gJGJlc3RNYXRjaDtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoISEkYmVzdE1hdGNoLm91dGVySGVpZ2h0KCkgJiYgISRyZXN1bHQubGVuZ3RoKSB7XG4gICAgICAgICRyZXN1bHQgPSAkYmVzdE1hdGNoO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKCEkcmVzdWx0Lmxlbmd0aCkge1xuICAgICAgJHJlc3VsdCA9ICRlbDtcbiAgICB9XG5cbiAgICByZXR1cm4gJHJlc3VsdDtcbiAgfSxcblxuICBfcmVtb3ZlQWN0aW9uVmlld3M6IGZ1bmN0aW9uKCkge1xuICAgIF8uZWFjaCh0aGlzLmFjdGlvblZpZXdzLCBmdW5jdGlvbih2aWV3KSB7XG4gICAgICB2aWV3LnJlbW92ZSgpO1xuICAgIH0pO1xuICAgIHRoaXMuYWN0aW9uVmlld3MgPSBbXTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBUb29sYmFyVmlldztcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhNQTtBQUNBO0FBa01BIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./js/src/Views/ToolbarView.js\n");

/***/ }),

/***/ "./js/src/index.js":
/*!*************************!*\
  !*** ./js/src/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _ToolbarManager = __webpack_require__(/*! ./ToolbarManager */ \"./js/src/ToolbarManager.js\");\n\nvar _ToolbarManager2 = _interopRequireDefault(_ToolbarManager);\n\nvar _ActionButtonView = __webpack_require__(/*! ./Views/ActionButtonView */ \"./js/src/Views/ActionButtonView.js\");\n\nvar _ActionButtonView2 = _interopRequireDefault(_ActionButtonView);\n\nvar _drupal = __webpack_require__(/*! drupal */ \"drupal\");\n\nvar _drupal2 = _interopRequireDefault(_drupal);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n_drupal2.default.ckeditor_widgettoolbar = {};\n_drupal2.default.ckeditor_widgettoolbar.ToolbarManager = _ToolbarManager2.default;\n_drupal2.default.ckeditor_widgettoolbar.Views = {};\n_drupal2.default.ckeditor_widgettoolbar.Views.ActionButtonView = _ActionButtonView2.default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vanMvc3JjL2luZGV4LmpzPzJhMDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRvb2xiYXJNYW5hZ2VyIGZyb20gJy4vVG9vbGJhck1hbmFnZXInO1xuaW1wb3J0IEFjdGlvbkJ1dHRvblZpZXcgZnJvbSAnLi9WaWV3cy9BY3Rpb25CdXR0b25WaWV3JztcbmltcG9ydCBEcnVwYWwgZnJvbSAnZHJ1cGFsJztcblxuRHJ1cGFsLmNrZWRpdG9yX3dpZGdldHRvb2xiYXIgPSB7fTtcbkRydXBhbC5ja2VkaXRvcl93aWRnZXR0b29sYmFyLlRvb2xiYXJNYW5hZ2VyID0gVG9vbGJhck1hbmFnZXI7XG5EcnVwYWwuY2tlZGl0b3Jfd2lkZ2V0dG9vbGJhci5WaWV3cyA9IHt9O1xuRHJ1cGFsLmNrZWRpdG9yX3dpZGdldHRvb2xiYXIuVmlld3MuQWN0aW9uQnV0dG9uVmlldyA9IEFjdGlvbkJ1dHRvblZpZXc7XG4iXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./js/src/index.js\n");

/***/ }),

/***/ "Backbone":
/*!***************************!*\
  !*** external "Backbone" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = Backbone;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFja2JvbmUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJCYWNrYm9uZVwiPzViYzAiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBCYWNrYm9uZTsiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///Backbone\n");

/***/ }),

/***/ "drupal":
/*!*************************!*\
  !*** external "Drupal" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = Drupal;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJ1cGFsLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiRHJ1cGFsXCI/MTRjZiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IERydXBhbDsiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///drupal\n");

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = jQuery;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianF1ZXJ5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwialF1ZXJ5XCI/Y2QwYyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTsiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///jquery\n");

/***/ })

/******/ });