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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/src/plugins/widgettoolbar/plugin.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/src/plugins/widgettoolbar/plugin.js":
/*!************************************************!*\
  !*** ./js/src/plugins/widgettoolbar/plugin.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**\n                                                                                                                                                                                                                                                                   * @file\n                                                                                                                                                                                                                                                                   * A modern widget toolbar for CKEditor.\n                                                                                                                                                                                                                                                                   *\n                                                                                                                                                                                                                                                                   * @ignore\n                                                                                                                                                                                                                                                                   */\n\nvar _ckeditor = __webpack_require__(/*! ckeditor */ \"ckeditor\");\n\nvar _ckeditor2 = _interopRequireDefault(_ckeditor);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar pluginDefinition = {\n  icons: null,\n  hidpi: false\n};\n\nif (Drupal.ckeditor_widgettoolbar) {\n  pluginDefinition = _extends({}, pluginDefinition, {\n    beforeInit: function beforeInit(editor) {\n      editor.widgetToolbars = new Drupal.ckeditor_widgettoolbar.ToolbarManager();\n    }\n  });\n}\n\n_ckeditor2.default.plugins.add('widgettoolbar', pluginDefinition);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9zcmMvcGx1Z2lucy93aWRnZXR0b29sYmFyL3BsdWdpbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9qcy9zcmMvcGx1Z2lucy93aWRnZXR0b29sYmFyL3BsdWdpbi5qcz80NWNhIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGZpbGVcbiAqIEEgbW9kZXJuIHdpZGdldCB0b29sYmFyIGZvciBDS0VkaXRvci5cbiAqXG4gKiBAaWdub3JlXG4gKi9cblxuaW1wb3J0IENLRURJVE9SIGZyb20gJ2NrZWRpdG9yJztcblxudmFyIHBsdWdpbkRlZmluaXRpb24gPSB7XG4gIGljb25zOiBudWxsLFxuICBoaWRwaTogZmFsc2UsXG59XG5cbmlmIChEcnVwYWwuY2tlZGl0b3Jfd2lkZ2V0dG9vbGJhcikge1xuICBwbHVnaW5EZWZpbml0aW9uID0geyAuLi5wbHVnaW5EZWZpbml0aW9uLFxuICAgIGJlZm9yZUluaXQ6IGZ1bmN0aW9uKGVkaXRvcikge1xuICAgICAgZWRpdG9yLndpZGdldFRvb2xiYXJzID0gbmV3IERydXBhbC5ja2VkaXRvcl93aWRnZXR0b29sYmFyLlRvb2xiYXJNYW5hZ2VyKCk7XG4gICAgfSxcbiAgfTtcbn1cblxuQ0tFRElUT1IucGx1Z2lucy5hZGQoJ3dpZGdldHRvb2xiYXInLCBwbHVnaW5EZWZpbml0aW9uKTtcbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7OztBQU9BO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./js/src/plugins/widgettoolbar/plugin.js\n");

/***/ }),

/***/ "ckeditor":
/*!***************************!*\
  !*** external "CKEDITOR" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = CKEDITOR;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2tlZGl0b3IuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJDS0VESVRPUlwiPzc5NmQiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBDS0VESVRPUjsiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///ckeditor\n");

/***/ })

/******/ });