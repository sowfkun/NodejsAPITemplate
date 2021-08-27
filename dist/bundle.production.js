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

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("helmet");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("morgan");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "rotating-file-stream":
/*!***************************************!*\
  !*** external "rotating-file-stream" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("rotating-file-stream");

/***/ }),

/***/ "./index.mjs":
/*!*******************!*\
  !*** ./index.mjs ***!
  \*******************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! helmet */ \"helmet\");\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! morgan */ \"morgan\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var rotating_file_stream__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rotating-file-stream */ \"rotating-file-stream\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var _src_models_db_config_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/models/db.config.mjs */ \"./src/models/db.config.mjs\");\n/* harmony import */ var _src_routes_router_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/routes/router.mjs */ \"./src/routes/router.mjs\");\n/*\r\n * import libs\r\n */\n\n\n\n\n\n\n\n(0,dotenv__WEBPACK_IMPORTED_MODULE_6__.config)();\n/*\r\n * run database connection\r\n */\n\n\n(0,_src_models_db_config_mjs__WEBPACK_IMPORTED_MODULE_7__.default)();\n/*\r\n * import components\r\n */\n\n\n/*\r\n * defined variable\r\n */\n\nconst port = process.env.PORT || 3000;\nconst isProduction = process.env.NODE_ENVIRONMENT === 'production';\n\nconst __dirname = path__WEBPACK_IMPORTED_MODULE_5__.resolve();\n\nconst app = express__WEBPACK_IMPORTED_MODULE_0__();\napp.enable('trust proxy');\n/*\r\n * use middleware\r\n */\n\nconst accessLogStream = rotating_file_stream__WEBPACK_IMPORTED_MODULE_4__.createStream('access.log', {\n  interval: '1d',\n  // rotate daily\n  path: path__WEBPACK_IMPORTED_MODULE_5__.join(__dirname, 'logs')\n});\napp.use(isProduction ? morgan__WEBPACK_IMPORTED_MODULE_2__('combined', {\n  stream: accessLogStream\n}) : morgan__WEBPACK_IMPORTED_MODULE_2__('tiny'));\napp.use(helmet__WEBPACK_IMPORTED_MODULE_1__());\napp.use(cors__WEBPACK_IMPORTED_MODULE_3__());\napp.use((0,express__WEBPACK_IMPORTED_MODULE_0__.json)());\n/*\r\n * defined route\r\n */\n\napp.use('/api', _src_routes_router_mjs__WEBPACK_IMPORTED_MODULE_8__.default);\napp.get('/', (req, res) => {\n  res.status(404).json({\n    message: '404, Page not Found!'\n  });\n});\napp.get('*', (req, res) => {\n  res.status(404).json({\n    message: '404, Page not Found!'\n  });\n});\n/*\r\n * run server\r\n */\n\napp.listen(port, () => {\n  console.log(`Server is listening on port ${port}`);\n});\n\n//# sourceURL=webpack://nodejs_template/./index.mjs?");

/***/ }),

/***/ "./src/controllers/product.controller.mjs":
/*!************************************************!*\
  !*** ./src/controllers/product.controller.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models_example_model_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/example.model.mjs */ \"./src/models/example.model.mjs\");\n\nconst productController = {};\n\nproductController.getAllProducts = async (req, res) => {\n  try {\n    /*\r\n     * query database\r\n     */\n    const drinks = await _models_example_model_mjs__WEBPACK_IMPORTED_MODULE_0__.default.find();\n    /*\r\n     * send data\r\n     */\n\n    res.status(200).json({\n      products: drinks\n    });\n  } catch (error) {\n    /*\r\n     * catch error\r\n     */\n    console.log(error);\n    res.status(500).json({\n      message: 'HTTP 500 Internal server error'\n    });\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (productController);\n\n//# sourceURL=webpack://nodejs_template/./src/controllers/product.controller.mjs?");

/***/ }),

/***/ "./src/models/db.config.mjs":
/*!**********************************!*\
  !*** ./src/models/db.config.mjs ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n\n\nconst ConnectDatabase = () => {\n  const mongoUrl = process.env.MONGO_URL;\n  mongoose__WEBPACK_IMPORTED_MODULE_0__.Promise = global.Promise;\n  mongoose__WEBPACK_IMPORTED_MODULE_0__.connect(mongoUrl, {\n    useNewUrlParser: true,\n    useUnifiedTopology: true\n  }).then(() => {\n    console.log('Successfully connected to database');\n  }).catch(() => {\n    console.log('Could not connect to database');\n    process.exit();\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConnectDatabase);\n\n//# sourceURL=webpack://nodejs_template/./src/models/db.config.mjs?");

/***/ }),

/***/ "./src/models/example.model.mjs":
/*!**************************************!*\
  !*** ./src/models/example.model.mjs ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nconst drinkSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n  drink_id: {\n    type: String,\n    required: [true, 'drink_id is required']\n  },\n  category_id: {\n    type: String,\n    required: [true, 'category_id is required']\n  },\n  name: {\n    type: String,\n    required: [true, 'name is required']\n  },\n  price: {\n    type: Object,\n    required: [true, 'name is required'],\n    properties: {\n      size_m: {\n        type: Number\n      },\n      size_l: {\n        type: Number,\n        required: [true, 'name is required']\n      }\n    }\n  },\n  status: {\n    type: String,\n    enum: ['active', 'inactive']\n  },\n  img: {\n    type: String,\n    require: [true, 'img is required']\n  },\n  topping: {\n    type: Boolean,\n    require: [true, 'topping is required']\n  }\n});\nconst Drink = mongoose__WEBPACK_IMPORTED_MODULE_0__.model('Drink', drinkSchema, 'drink');\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Drink);\n\n//# sourceURL=webpack://nodejs_template/./src/models/example.model.mjs?");

/***/ }),

/***/ "./src/routes/product.router.mjs":
/*!***************************************!*\
  !*** ./src/routes/product.router.mjs ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var _controllers_product_controller_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/product.controller.mjs */ \"./src/controllers/product.controller.mjs\");\n\nconst productRoutes = new express__WEBPACK_IMPORTED_MODULE_0__.Router();\n/*\r\n * controller\r\n */\n\n\n/*\r\n * define route\r\n */\n\nproductRoutes.get('/', _controllers_product_controller_mjs__WEBPACK_IMPORTED_MODULE_1__.default.getAllProducts);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (productRoutes);\n\n//# sourceURL=webpack://nodejs_template/./src/routes/product.router.mjs?");

/***/ }),

/***/ "./src/routes/router.mjs":
/*!*******************************!*\
  !*** ./src/routes/router.mjs ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var _product_router_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product.router.mjs */ \"./src/routes/product.router.mjs\");\n\nconst rootRoute = express__WEBPACK_IMPORTED_MODULE_0__();\n/*\r\n * import routes\r\n */\n\n\n/*\r\n * use routes\r\n */\n\nrootRoute.use('/products', _product_router_mjs__WEBPACK_IMPORTED_MODULE_1__.default);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rootRoute);\n\n//# sourceURL=webpack://nodejs_template/./src/routes/router.mjs?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.mjs");
/******/ 	
/******/ })()
;