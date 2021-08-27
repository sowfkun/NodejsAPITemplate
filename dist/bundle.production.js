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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! helmet */ \"helmet\");\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! morgan */ \"morgan\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var rotating_file_stream__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rotating-file-stream */ \"rotating-file-stream\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var _src_models_db_config_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/models/db.config.mjs */ \"./src/models/db.config.mjs\");\n/* harmony import */ var _src_routes_router_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/routes/router.mjs */ \"./src/routes/router.mjs\");\n// import libs\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,dotenv__WEBPACK_IMPORTED_MODULE_6__.config)();\r\n\r\n// run database connection\r\n\r\n(0,_src_models_db_config_mjs__WEBPACK_IMPORTED_MODULE_7__.default)();\r\n\r\n// import components\r\n\r\n\r\n// defined variable\r\nconst port = process.env.PORT || 3000;\r\nconst isProduction = process.env.NODE_ENVIRONMENT === 'production';\r\nconst __dirname = path__WEBPACK_IMPORTED_MODULE_5__.resolve();\r\n\r\nconst app = express__WEBPACK_IMPORTED_MODULE_0__();\r\napp.enable('trust proxy');\r\n// use middleware\r\nconst accessLogStream = rotating_file_stream__WEBPACK_IMPORTED_MODULE_4__.createStream('access.log', {\r\n  interval: '1d', // rotate daily\r\n  path: path__WEBPACK_IMPORTED_MODULE_5__.join(__dirname, 'logs'),\r\n});\r\napp.use(\r\n  isProduction\r\n    ? morgan__WEBPACK_IMPORTED_MODULE_2__('combined', { stream: accessLogStream })\r\n    : morgan__WEBPACK_IMPORTED_MODULE_2__('tiny'),\r\n);\r\n\r\napp.use(helmet__WEBPACK_IMPORTED_MODULE_1__());\r\napp.use(cors__WEBPACK_IMPORTED_MODULE_3__());\r\napp.use((0,express__WEBPACK_IMPORTED_MODULE_0__.json)());\r\n\r\n// defined root route\r\napp.use('/api', _src_routes_router_mjs__WEBPACK_IMPORTED_MODULE_8__.default);\r\n\r\napp.get('/', (req, res) => {\r\n  res.status(404).json({\r\n    message: '404, Page not Found!',\r\n  });\r\n});\r\n\r\napp.get('*', (req, res) => {\r\n  res.status(404).json({\r\n    message: '404, Page not Found!',\r\n  });\r\n});\r\n\r\n// run server\r\napp.listen(port, () => {\r\n  console.log(`Server is listening on port ${port}`);\r\n});\r\n\n\n//# sourceURL=webpack://nodejs_template/./index.mjs?");

/***/ }),

/***/ "./src/controllers/product.controller.mjs":
/*!************************************************!*\
  !*** ./src/controllers/product.controller.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models_example_model_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/example.model.mjs */ \"./src/models/example.model.mjs\");\n\r\nconst productController = {};\r\n\r\nproductController.getAllProducts = async (req, res) => {\r\n  try {\r\n    const drinks = await _models_example_model_mjs__WEBPACK_IMPORTED_MODULE_0__.default.find();\r\n    res.status(200).json({ products: drinks });\r\n  } catch (error) {\r\n    console.log(error);\r\n    res.status(500).json({ message: 'HTTP 500 Internal server error' });\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (productController);\r\n\n\n//# sourceURL=webpack://nodejs_template/./src/controllers/product.controller.mjs?");

/***/ }),

/***/ "./src/models/db.config.mjs":
/*!**********************************!*\
  !*** ./src/models/db.config.mjs ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n\r\n\r\nconst ConnectDatabase = () => {\r\n  const mongoUrl = process.env.MONGO_URL;\r\n  mongoose__WEBPACK_IMPORTED_MODULE_0__.Promise = global.Promise;\r\n  mongoose__WEBPACK_IMPORTED_MODULE_0__.connect(mongoUrl, {\r\n      useNewUrlParser: true,\r\n      useUnifiedTopology: true,\r\n    })\r\n    .then(() => {\r\n      console.log('Successfully connected to database');\r\n    })\r\n    .catch(() => {\r\n      console.log('Could not connect to database');\r\n      process.exit();\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConnectDatabase);\r\n\n\n//# sourceURL=webpack://nodejs_template/./src/models/db.config.mjs?");

/***/ }),

/***/ "./src/models/example.model.mjs":
/*!**************************************!*\
  !*** ./src/models/example.model.mjs ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n\r\n\r\nconst drinkSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\r\n  drink_id: {\r\n    type: String,\r\n    required: [true, 'drink_id is required'],\r\n  },\r\n  category_id: {\r\n    type: String,\r\n    required: [true, 'category_id is required'],\r\n  },\r\n  name: {\r\n    type: String,\r\n    required: [true, 'name is required'],\r\n  },\r\n  price: {\r\n    type: Object,\r\n    required: [true, 'name is required'],\r\n    properties: {\r\n      size_m: {\r\n        type: Number,\r\n      },\r\n      size_l: {\r\n        type: Number,\r\n        required: [true, 'name is required'],\r\n      },\r\n    },\r\n  },\r\n  status: {\r\n    type: String,\r\n    enum: ['active', 'inactive'],\r\n  },\r\n  img: {\r\n    type: String,\r\n    require: [true, 'img is required'],\r\n  },\r\n  topping: {\r\n    type: Boolean,\r\n    require: [true, 'topping is required'],\r\n  },\r\n});\r\nconst Drink = mongoose__WEBPACK_IMPORTED_MODULE_0__.model('Drink', drinkSchema, 'drink');\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Drink);\r\n\n\n//# sourceURL=webpack://nodejs_template/./src/models/example.model.mjs?");

/***/ }),

/***/ "./src/routes/product.router.mjs":
/*!***************************************!*\
  !*** ./src/routes/product.router.mjs ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var _controllers_product_controller_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/product.controller.mjs */ \"./src/controllers/product.controller.mjs\");\n\r\n\r\n// import all controllers\r\n\r\n// import SessionController from './app/controllers/SessionController';\r\n\r\nconst productRoutes = new express__WEBPACK_IMPORTED_MODULE_0__.Router();\r\n\r\n// Add routes\r\nproductRoutes.get('/', _controllers_product_controller_mjs__WEBPACK_IMPORTED_MODULE_1__.default.getAllProducts);\r\n// routes.post('/', SessionController.store);\r\n// routes.put('/', SessionController.store);\r\n// routes.delete('/', SessionController.store);\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (productRoutes);\r\n\n\n//# sourceURL=webpack://nodejs_template/./src/routes/product.router.mjs?");

/***/ }),

/***/ "./src/routes/router.mjs":
/*!*******************************!*\
  !*** ./src/routes/router.mjs ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var _product_router_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product.router.mjs */ \"./src/routes/product.router.mjs\");\n\r\n\r\n// import routes\r\n\r\n\r\nconst rootRoute = express__WEBPACK_IMPORTED_MODULE_0__();\r\n\r\nrootRoute.use('/products', _product_router_mjs__WEBPACK_IMPORTED_MODULE_1__.default);\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rootRoute);\r\n\n\n//# sourceURL=webpack://nodejs_template/./src/routes/router.mjs?");

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