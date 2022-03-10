/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/meows.ttf */ \"./src/assets/fonts/meows.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\r\\n  font-family: Meows;\\r\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n}\\r\\n\\r\\nbody {\\r\\n  color: #6a515e;\\r\\n  background-color: #fef8f8;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  height: 100vh;\\r\\n}\\r\\n\\r\\n* {\\r\\n  font-family: Meows, sans-serif;\\r\\n  box-sizing: border-box;\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\nul {\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\nnav {\\r\\n  color: inherit;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  box-shadow: 0 2px #00000017;\\r\\n}\\r\\n\\r\\nnav > a {\\r\\n  color: inherit;\\r\\n  text-decoration: none;\\r\\n  font-size: 3rem;\\r\\n  padding: 8px 0;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  padding: 8px;\\r\\n  box-shadow: 0 -2px #00000017;\\r\\n}\\r\\n\\r\\nfooter h2 {\\r\\n  font-weight: 400;\\r\\n  font-size: 1rem;\\r\\n}\\r\\n\\r\\nmain {\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n  width: 70%;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  flex: 1;\\r\\n  align-self: center;\\r\\n  color: inherit;\\r\\n}\\r\\n\\r\\nmain > div {\\r\\n  width: calc(33.33% - 2rem);\\r\\n  margin: 1rem;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  position: relative;\\r\\n  border-radius: 40px;\\r\\n  height: 300px;\\r\\n  min-width: 260px;\\r\\n  max-width: 300px;\\r\\n  color: inherit;\\r\\n  border: 1px solid #6a515e;\\r\\n  overflow: hidden;\\r\\n}\\r\\n\\r\\nmain > div:nth-child(1),\\r\\nmain > div:nth-child(2),\\r\\nmain > div:nth-child(3) {\\r\\n  margin-bottom: 0;\\r\\n}\\r\\n\\r\\n.card > img {\\r\\n  border-radius: 40px;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  object-fit: cover;\\r\\n}\\r\\n\\r\\n.card * {\\r\\n  color: inherit;\\r\\n  font-weight: bold;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.card__arc {\\r\\n  width: 80px;\\r\\n  height: 80px;\\r\\n  position: absolute;\\r\\n  bottom: 100%;\\r\\n  right: 0;\\r\\n}\\r\\n\\r\\n.more {\\r\\n  max-height: 0;\\r\\n  overflow: hidden;\\r\\n  transition: max-height 0.2s ease-in-out;\\r\\n}\\r\\n\\r\\n.details:hover .more {\\r\\n  max-height: 500px;\\r\\n  transition: max-height 0.2s ease-in-out;\\r\\n}\\r\\n\\r\\n.card-back-drop {\\r\\n  position: absolute;\\r\\n  bottom: 0;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  border-radius: 40px;\\r\\n  background-color: #6a515e00;\\r\\n  pointer-events: none;\\r\\n  transition: background-color 0.2s ease-in-out;\\r\\n}\\r\\n\\r\\n.card-back-drop:hover {\\r\\n  background-color: #6a515e6b;\\r\\n}\\r\\n\\r\\n.details {\\r\\n  position: absolute;\\r\\n  bottom: 0;\\r\\n  width: 100%;\\r\\n  background: #fff;\\r\\n  border-radius: 40px 0 38px 38px;\\r\\n  padding: 1rem;\\r\\n  pointer-events: auto;\\r\\n}\\r\\n\\r\\n.description {\\r\\n  text-align: center;\\r\\n  font-size: 0.8rem;\\r\\n  padding-bottom: 4px;\\r\\n  text-overflow: ellipsis;\\r\\n  display: -webkit-box;\\r\\n  line-height: 16px;\\r\\n  max-height: 32px;\\r\\n  -webkit-line-clamp: 2;\\r\\n  -webkit-box-orient: vertical;\\r\\n  overflow: hidden;\\r\\n  margin: 8px;\\r\\n}\\r\\n\\r\\n.more > .btns > a {\\r\\n  color: #6a515e;\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\n.popup-container {\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  height: 100vh;\\r\\n  width: 100vw;\\r\\n  padding: 20px;\\r\\n}\\r\\n\\r\\n.popup {\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n  justify-content: space-around;\\r\\n  align-items: center;\\r\\n  padding: 15px;\\r\\n  background-color: white;\\r\\n  border-radius: 10px;\\r\\n  margin: auto;\\r\\n  border: 3px solid black;\\r\\n  max-height: 100%;\\r\\n}\\r\\n\\r\\n.popup-top-bar {\\r\\n  display: flex;\\r\\n  width: 100%;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.popup h2 {\\r\\n  font-size: 4rem;\\r\\n  font-weight: normal;\\r\\n  margin-left: calc(50% - 60px);\\r\\n}\\r\\n\\r\\n.close-button {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.popup-content {\\r\\n  max-height: 50vh;\\r\\n  overflow: auto;\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n  justify-content: space-around;\\r\\n  overflow-x: hidden;\\r\\n}\\r\\n\\r\\n.popup-image {\\r\\n  max-width: 40%;\\r\\n  min-width: 300px;\\r\\n  flex: 1;\\r\\n}\\r\\n\\r\\n.popup-image img {\\r\\n  max-width: 100%;\\r\\n  max-height: 50vh;\\r\\n  align-self: center;\\r\\n}\\r\\n\\r\\n.popup-txt {\\r\\n  text-align: center;\\r\\n  flex: 1;\\r\\n  width: 90%;\\r\\n  max-height: 200px;\\r\\n}\\r\\n\\r\\n.popup h3 {\\r\\n  font-size: 3rem;\\r\\n  font-weight: normal;\\r\\n}\\r\\n\\r\\n.popup-txt p {\\r\\n  font-size: 2rem;\\r\\n}\\r\\n\\r\\n.loader {\\r\\n  font-weight: bold;\\r\\n  animation: opacity-change 1s infinite;\\r\\n}\\r\\n\\r\\n@keyframes spin {\\r\\n  0% { transform: rotate(0deg); }\\r\\n  100% { transform: rotate(360deg); }\\r\\n}\\r\\n\\r\\n@keyframes opacity-change {\\r\\n  0% { opacity: 0; }\\r\\n  100% { opacity: 1; }\\r\\n}\\r\\n\\r\\n.popup-comment-section {\\r\\n  width: 100%;\\r\\n  max-height: calc(100vh - 50vh - 110px);\\r\\n}\\r\\n\\r\\n.display-comments {\\r\\n  text-align: end;\\r\\n}\\r\\n\\r\\n.comments {\\r\\n  text-align: center;\\r\\n  max-height: 20vh;\\r\\n  overflow: auto;\\r\\n  display: flex;\\r\\n  flex-direction: column-reverse;\\r\\n}\\r\\n\\r\\n.comment {\\r\\n  padding: 30px 60px;\\r\\n}\\r\\n\\r\\n.comment-info {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.username {\\r\\n  font-size: 1.5rem;\\r\\n}\\r\\n\\r\\n.time {\\r\\n  font-size: 0.8rem;\\r\\n}\\r\\n\\r\\n.comment-txt {\\r\\n  font-size: 1.3rem;\\r\\n}\\r\\n\\r\\n.add-comment {\\r\\n  padding: 5px;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  flex-wrap: wrap;\\r\\n}\\r\\n\\r\\n.username-input {\\r\\n  padding: 5px;\\r\\n}\\r\\n\\r\\n.comment-input {\\r\\n  padding: 5px;\\r\\n  min-width: 50%;\\r\\n  margin: 0 10px;\\r\\n}\\r\\n\\r\\n.add-comment-btn {\\r\\n  min-width: 120px;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-demo/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-demo/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_strings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/strings.js */ \"./src/modules/strings.js\");\n/* harmony import */ var _modules_get_items_list_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/get_items_list.js */ \"./src/modules/get_items_list.js\");\n/* harmony import */ var _modules_Comment_popup_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/Comment_popup.js */ \"./src/modules/Comment_popup.js\");\n/* harmony import */ var _modules_add_like_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/add_like.js */ \"./src/modules/add_like.js\");\n/* harmony import */ var _modules_get_like__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/get_like */ \"./src/modules/get_like.js\");\n\n\n\n\n\n\n\nlet catList = [];\nlet likesList = [];\n\nwindow.addEventListener('load', async () => {\n  await (0,_modules_get_items_list_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_modules_strings_js__WEBPACK_IMPORTED_MODULE_1__.customBinRequestDataURL).then((list) => {\n    catList = list;\n\n    catList.forEach((listItem) => {\n      document.querySelector('main').innerHTML += `<div class=\"card\" id=\"cat-${listItem.id}\">\n      <img src=\"${listItem.image}\" alt=\"\">\n      <div class='card-back-drop'>\n        <div class=\"details\">\n          <svg class=\"card__arc\" xmlns=\"http://www.w3.org/2000/svg\"><path fill= \"#fff\"; d=\"M 40 80 c 22 0 40 -22 40 -40 v 40 Z\"/></svg>    \n          <h3>${listItem.name} (${listItem.role})</h3>\n          <div class=\"more\">\n            <div class=\"description\">${listItem.description}</div>\n            <div class=\"btns\">\n              <a href='#cat-${listItem.id}'>Like <sup class='likes'>0</sup></a>\n              <a href='#comment-${listItem.id}'>Comment</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>`;\n    });\n  });\n\n  await (0,_modules_get_like__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_modules_strings_js__WEBPACK_IMPORTED_MODULE_1__.likesApiURL).then((list) => {\n    likesList = list;\n    likesList.forEach((cat) => {\n      document.querySelector(`#${cat.item_id} .likes`).innerHTML = `${cat.likes}`;\n    });\n  });\n});\n\nwindow.addEventListener('popstate', async () => {\n  const hashValue = window.location.hash;\n\n  if (window.location.hash.match('#comment-')) {\n    const index = parseInt(hashValue.substring(9), 10);\n    (0,_modules_Comment_popup_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(catList[index - 1]);\n  } else if (window.location.hash.match('#cat-')) {\n    const index = parseInt(hashValue.substring(5), 10);\n    if (likesList[index - 1]) {\n      document.querySelector(`#${likesList[index - 1].item_id} .likes`).classList.add('loader');\n      if (await (0,_modules_add_like_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_modules_strings_js__WEBPACK_IMPORTED_MODULE_1__.likesApiURL, hashValue.substring(1))) {\n        likesList[index - 1].likes += 1;\n      }\n      document.querySelector(`#${likesList[index - 1].item_id} .likes`).classList.remove('loader');\n      document.querySelector(`#${likesList[index - 1].item_id} .likes`).innerHTML = likesList[index - 1].likes;\n    } else {\n      console.log(await (0,_modules_add_like_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_modules_strings_js__WEBPACK_IMPORTED_MODULE_1__.likesApiURL, hashValue.substring(1)));\n    }\n  }\n});\n\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ }),

/***/ "./src/modules/Comment_popup.js":
/*!**************************************!*\
  !*** ./src/modules/Comment_popup.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ popupWindow)\n/* harmony export */ });\n/* harmony import */ var _fetch_comments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch_comments.js */ \"./src/modules/fetch_comments.js\");\n/* harmony import */ var _comments_counter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comments_counter.js */ \"./src/modules/comments_counter.js\");\n\r\n\r\n\r\nasync function popupWindow(item) {\r\n  const popupContainer = document.createElement('div');\r\n  popupContainer.classList.add('popup-container');\r\n\r\n  popupContainer.innerHTML = `<div class=\"popup\">\r\n    \r\n    <div class=\"popup-top-bar\">\r\n      <h2>${item.name}</h2>\r\n      <a class=\"close-button\">X</a>\r\n    </div>\r\n    <div class=\"popup-content\">\r\n      <div class=\"popup-image\">\r\n        <img src=\"${item.image}\"></img>\r\n      </div>\r\n      <div class=\"popup-txt\">\r\n        <h3>${item.role}</h3>\r\n        <ul class=\"skill-list\">${item.skils.map((element) => `<li>${element}</li>`).join('')}</ul>\r\n        <p>${item.description}</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"popup-comment-section\">\r\n      <div class=\"display-comments\">\r\n        <a class=\"comment-counter\">0 Comments</a>\r\n        <div class=\"comments\">\r\n          \r\n        </div>\r\n      </div>\r\n      <div class=\"add-comment\">\r\n        <input type=\"text\" class=\"username-input\"></input>\r\n        <input type=\"text\" class=\"comment-input\"></input>\r\n        <button type=\"submit\" class=\"add-comment-btn\">Comment</button>\r\n      </div>\r\n    </div>\r\n  </div>`;\r\n\r\n  document.querySelector('body').appendChild(popupContainer);\r\n\r\n  const comments = await (0,_fetch_comments_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(item.id);\r\n  let numComments = (0,_comments_counter_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(comments);\r\n  document.querySelector('.comment-counter').innerHTML = `${numComments} Comments`;\r\n  document.querySelector('.comments').innerHTML = `${\r\n    comments.slice().reverse().map((comment) => `<div class=\"comment\">\r\n    <div class=\"comment-info\">\r\n      <a class=\"username\">${comment.username}:</a>\r\n      <p class=\"time\">Created on: ${comment.creation_date}</p>\r\n    </div>\r\n    <p class=\"comment-txt\">${comment.comment}</p>\r\n  </div>`).join('')}`;\r\n\r\n  document.querySelector('.add-comment-btn').addEventListener('click', () => {\r\n    const commentUser = document.querySelector('.username-input');\r\n    const commentText = document.querySelector('.comment-input');\r\n\r\n    (0,_fetch_comments_js__WEBPACK_IMPORTED_MODULE_0__.addComments)(`cat-${item.id}`, commentUser.value, commentText.value);\r\n    const commentsDiv = document.querySelector('.comments');\r\n    const newElem = document.createElement('div');\r\n    newElem.classList.add('comment');\r\n\r\n    let month = 0;\r\n    if (new Date().getMonth() + 1 < 10) {\r\n      month = `0${new Date().getMonth() + 1}`;\r\n    } else {\r\n      month = new Date().getMonth() + 1;\r\n    }\r\n\r\n    let day = 0;\r\n    if (new Date().getDate() < 10) {\r\n      day = `0${new Date().getDate()}`;\r\n    } else {\r\n      day = new Date().getDate();\r\n    }\r\n\r\n    newElem.innerHTML += `\r\n    <div class=\"comment-info\">\r\n      <a class=\"username\">${commentUser.value}:</a>\r\n      <p class=\"time\">Created on: ${new Date().getFullYear()}-${month}-${day}</p>\r\n    </div>\r\n    <p class=\"comment-txt\">${commentText.value}</p>`;\r\n\r\n    commentsDiv.prepend(newElem);\r\n\r\n    numComments += 1;\r\n    document.querySelector('.comment-counter').innerHTML = `${numComments} Comments`;\r\n\r\n    commentUser.value = '';\r\n    commentText.value = '';\r\n    commentsDiv.scrollTop = 0;\r\n  });\r\n\r\n  popupContainer.addEventListener('click', (e) => {\r\n    if (e.target === popupContainer || e.target === popupContainer.querySelector('.close-button')) {\r\n      popupContainer.remove();\r\n    }\r\n  });\r\n}\n\n//# sourceURL=webpack://webpack-demo/./src/modules/Comment_popup.js?");

/***/ }),

/***/ "./src/modules/add_like.js":
/*!*********************************!*\
  !*** ./src/modules/add_like.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst addLike = async (url, itemId) => {\n  const response = await fetch(url, {\n    method: 'POST',\n    body: JSON.stringify({\n      item_id: itemId,\n    }),\n    headers: {\n      'Content-Type': 'application/json',\n    },\n  });\n\n  if (response.status === 201) {\n    const responseJson = await response.text();\n    if (responseJson === 'Created') {\n      return true;\n    }\n  }\n  return false;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addLike);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/add_like.js?");

/***/ }),

/***/ "./src/modules/comments_counter.js":
/*!*****************************************!*\
  !*** ./src/modules/comments_counter.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CCounter)\n/* harmony export */ });\nfunction CCounter(arr) {\r\n  if (arr !== undefined) {\r\n    return arr.length;\r\n  }\r\n  throw new Error('Undefined Number of comments');\r\n}\n\n//# sourceURL=webpack://webpack-demo/./src/modules/comments_counter.js?");

/***/ }),

/***/ "./src/modules/fetch_comments.js":
/*!***************************************!*\
  !*** ./src/modules/fetch_comments.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getComments\": () => (/* binding */ getComments),\n/* harmony export */   \"addComments\": () => (/* binding */ addComments)\n/* harmony export */ });\n/* harmony import */ var _strings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./strings.js */ \"./src/modules/strings.js\");\n\r\n\r\nconst getComments = async (id) => {\r\n  const response = await fetch(`${_strings_js__WEBPACK_IMPORTED_MODULE_0__.commentApiULR}?item_id=cat-${id}`, {\r\n    method: 'GET',\r\n    headers: {\r\n      'Content-Type': 'application/json',\r\n    },\r\n  });\r\n  if (response.status === 200) {\r\n    const responseJson = await response.json();\r\n    return responseJson;\r\n  }\r\n\r\n  return [];\r\n};\r\n\r\nconst addComments = async (id, inputUser, inputComment) => {\r\n  const response = await fetch(_strings_js__WEBPACK_IMPORTED_MODULE_0__.commentApiULR, {\r\n    method: 'POST',\r\n    headers: {\r\n      'Content-Type': 'application/json',\r\n    },\r\n    body: JSON.stringify({\r\n      item_id: id,\r\n      username: inputUser,\r\n      comment: inputComment,\r\n    }),\r\n  });\r\n  if (response.status !== 201) {\r\n    return false;\r\n  } return true;\r\n};\r\n\r\n\n\n//# sourceURL=webpack://webpack-demo/./src/modules/fetch_comments.js?");

/***/ }),

/***/ "./src/modules/get_items_list.js":
/*!***************************************!*\
  !*** ./src/modules/get_items_list.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getItemsList = async (url) => {\r\n  const response = await fetch(url, {\r\n    method: 'GET',\r\n  });\r\n  const responseJson = await response.json();\r\n  return responseJson;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getItemsList);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/get_items_list.js?");

/***/ }),

/***/ "./src/modules/get_like.js":
/*!*********************************!*\
  !*** ./src/modules/get_like.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getLikes = async (url) => {\n  const response = await fetch(url);\n  if (response.status !== 200) {\n    return [];\n  }\n  const responseJSON = await response.json();\n  return responseJSON;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getLikes);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/get_like.js?");

/***/ }),

/***/ "./src/modules/strings.js":
/*!********************************!*\
  !*** ./src/modules/strings.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"customBinId\": () => (/* binding */ customBinId),\n/* harmony export */   \"customBinBaseURL\": () => (/* binding */ customBinBaseURL),\n/* harmony export */   \"customBinRequestDataURL\": () => (/* binding */ customBinRequestDataURL),\n/* harmony export */   \"involvementApiId\": () => (/* binding */ involvementApiId),\n/* harmony export */   \"involvementApiBaseURL\": () => (/* binding */ involvementApiBaseURL),\n/* harmony export */   \"likesApiURL\": () => (/* binding */ likesApiURL),\n/* harmony export */   \"commentApiULR\": () => (/* binding */ commentApiULR)\n/* harmony export */ });\nconst customBinId = '935e9eb10381';\r\nconst customBinBaseURL = 'https://json.extendsclass.com/bin/';\r\nconst customBinRequestDataURL = `${customBinBaseURL}${customBinId}`;\r\n\r\nconst involvementApiId = '90OCSQzkw8DWo0wOR3li';\r\nconst involvementApiBaseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';\r\nconst likesApiURL = `${involvementApiBaseURL}apps/${involvementApiId}/likes`;\r\nconst commentApiULR = `${involvementApiBaseURL}apps/${involvementApiId}/comments`;\n\n//# sourceURL=webpack://webpack-demo/./src/modules/strings.js?");

/***/ }),

/***/ "./src/assets/fonts/meows.ttf":
/*!************************************!*\
  !*** ./src/assets/fonts/meows.ttf ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8eaa7eb79f1926228f3d.ttf\";\n\n//# sourceURL=webpack://webpack-demo/./src/assets/fonts/meows.ttf?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;