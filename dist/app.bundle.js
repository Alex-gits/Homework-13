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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _newsService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newsService */ \"./newsService.js\");\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ \"./ui.js\");\n// Домашнее задание\n// Переписать News App на модули с использованием webpack. NewsService должен быть отдельным модулем, функции отвечающие за работу с UI также должны быть в отдельном модуле, http функция должна быть в отдельном модуле.\n\n\nvar newsService = Object(_newsService__WEBPACK_IMPORTED_MODULE_0__[\"newsServiceModule\"])();\nvar form = document.forms['newsControls'];\nvar countrySelect = form['country'];\nvar searchInput = form['search'];\ndocument.addEventListener('DOMContentLoaded', function () {\n  M.AutoInit();\n  Object(_ui__WEBPACK_IMPORTED_MODULE_1__[\"showLoader\"])();\n  loadNews();\n  newsService.source(_ui__WEBPACK_IMPORTED_MODULE_1__[\"createSourceOptions\"]);\n});\nform.addEventListener('submit', function (e) {\n  e.preventDefault();\n  Object(_ui__WEBPACK_IMPORTED_MODULE_1__[\"showLoader\"])();\n\n  if (searchInput.value) {\n    newsService.everything(searchInput.value, onGetResponse);\n  } else {\n    newsService.topHeadlines(countrySelect.value, onGetResponse);\n  }\n});\n\nfunction loadNews() {\n  newsService.topHeadlines(countrySelect.value, onGetResponse);\n}\n\nfunction onGetResponse(err, res) {\n  Object(_ui__WEBPACK_IMPORTED_MODULE_1__[\"hideLoader\"])();\n\n  if (err) {\n    console.warn(err);\n    return;\n  }\n\n  if (!res.articles.length) {\n    M.toast({\n      html: 'Новости по вашему запросу не найдены!'\n    });\n    return;\n  }\n\n  Object(_ui__WEBPACK_IMPORTED_MODULE_1__[\"renderNews\"])(res.articles);\n}\n\n//# sourceURL=webpack:///./app.js?");

/***/ }),

/***/ "./http.js":
/*!*****************!*\
  !*** ./http.js ***!
  \*****************/
/*! exports provided: customHttp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"customHttp\", function() { return customHttp; });\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n// Аякс-запросы\nfunction customHttp() {\n  return {\n    get: function get(url, cb) {\n      try {\n        var xhr = new XMLHttpRequest();\n        xhr.open('GET', url);\n        xhr.addEventListener('load', function () {\n          if (Math.floor(xhr.status / 100) !== 2) {\n            cb(\"Error. Status code: \".concat(xhr.status), xhr);\n            return;\n          }\n\n          var response = JSON.parse(xhr.responseText);\n          cb(null, response);\n        });\n        xhr.addEventListener('error', function () {\n          cb(\"Error. Status code: \".concat(xhr.status), xhr);\n        });\n        xhr.send();\n      } catch (error) {\n        cb(error);\n      }\n    },\n    post: function post(url, body, headers, cb) {\n      try {\n        var xhr = new XMLHttpRequest();\n        xhr.open('POST', url);\n        xhr.addEventListener('load', function () {\n          if (Math.floor(xhr.status / 100) !== 2) {\n            cb(\"Error. Status code: \".concat(xhr.status), xhr);\n            return;\n          }\n\n          var response = JSON.parse(xhr.responseText);\n          cb(null, response);\n        });\n        xhr.addEventListener('error', function () {\n          cb(\"Error. Status code: \".concat(xhr.status), xhr);\n        });\n\n        if (headers) {\n          Object.entries(headers).forEach(function (_ref) {\n            var _ref2 = _slicedToArray(_ref, 2),\n                key = _ref2[0],\n                value = _ref2[1];\n\n            xhr.setRequestHeader(key, value);\n          });\n        }\n\n        xhr.send(JSON.stringify(body));\n      } catch (error) {\n        cb(error);\n      }\n    }\n  };\n}\n\n//# sourceURL=webpack:///./http.js?");

/***/ }),

/***/ "./newsService.js":
/*!************************!*\
  !*** ./newsService.js ***!
  \************************/
/*! exports provided: newsServiceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"newsServiceModule\", function() { return newsServiceModule; });\n/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http */ \"./http.js\");\n // Функция для получения массива новостей\n\nvar http = Object(_http__WEBPACK_IMPORTED_MODULE_0__[\"customHttp\"])();\nvar sources = document.querySelector('#sources');\nfunction newsServiceModule() {\n  var apiUrl = 'https://newsapi.org';\n  var apiKey = '9c27b0f722b84da5a08312d2b125351b';\n  var categories = document.querySelector('#categories');\n  return {\n    topHeadlines: function topHeadlines(country, cb) {\n      http.get(\"\".concat(apiUrl, \"/v2/top-headlines?country=\").concat(country, \"&category=\").concat(categories.value, \"&apiKey=\").concat(apiKey), cb);\n    },\n    everything: function everything(text, cb) {\n      http.get(\"\".concat(apiUrl, \"/v2/everything?qInTitle=\").concat(text, \"&sources=\").concat(sources.value, \"&apiKey=\").concat(apiKey), cb);\n    },\n    source: function source(cb) {\n      http.get(\"\".concat(apiUrl, \"/v2/sources?&language=en&apiKey=\").concat(apiKey), cb);\n    }\n  };\n}\n\n//# sourceURL=webpack:///./newsService.js?");

/***/ }),

/***/ "./ui.js":
/*!***************!*\
  !*** ./ui.js ***!
  \***************/
/*! exports provided: createSourceOptions, renderNews, showLoader, hideLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createSourceOptions\", function() { return createSourceOptions; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderNews\", function() { return renderNews; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showLoader\", function() { return showLoader; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hideLoader\", function() { return hideLoader; });\n// Сюда я переместил все функции, которые имзеняют разметку.\nvar newsContainer = document.querySelector('.news-container .row'); // Функция для заполнения селекта новостными ресурсами\n\nfunction createSourceOptions(err, response) {\n  var sourceArray = response.sources;\n\n  for (var i = 0; i <= 15; i++) {\n    var newSourceOption = \"\\n      <option value=\".concat(sourceArray[i].id, \">\").concat(sourceArray[i].name, \"</option>\\n      \");\n    sources.insertAdjacentHTML('beforeend', newSourceOption);\n    M.FormSelect.init(sources, newSourceOption);\n  }\n} // Тимплейт для карточек новостей\n\nfunction newsTemplate(_ref) {\n  var title = _ref.title,\n      urlToImage = _ref.urlToImage,\n      url = _ref.url,\n      description = _ref.description;\n  return \"\\n    <div class=\\\"col s12\\\">\\n      <div class=\\\"card\\\">\\n        <div class=\\\"card-image\\\">\\n          <img src=\\\"\".concat(urlToImage || 'img/empty.jpg', \"\\\">\\n          <span class=\\\"card-title\\\">\").concat(title || '', \"</span>\\n        </div>\\n        <div class=\\\"card-content\\\">\\n          <p>\").concat(description || '', \"</p>\\n        </div>\\n        <div class=\\\"card-action\\\">\\n          <a href=\\\"\").concat(url, \"\\\">Read more</a>\\n        </div>\\n      </div>\\n    </div>\\n    \");\n} // Заполнение карточек новостями\n\n\nfunction renderNews(news) {\n  clearContainer();\n  var fragment = '';\n  news.forEach(function (item) {\n    var template = newsTemplate(item);\n    fragment += template;\n  });\n  newsContainer.insertAdjacentHTML('afterbegin', fragment);\n}\n\nfunction clearContainer() {\n  newsContainer.innerHTML = '';\n} // При изменении формы выводим полученные новости или если новостей нет то выводим уведомление\n// При каждой загрузке новостей показывать прелодер\n\n\nfunction showLoader() {\n  var template = \"\\n    <div class=\\\"progress\\\">\\n      <div class=\\\"indeterminate\\\"></div>\\n    </div>\\n    \";\n  document.body.insertAdjacentHTML('afterbegin', template);\n}\nfunction hideLoader() {\n  var loader = document.querySelector('.progress');\n\n  if (loader) {\n    loader.remove();\n  }\n}\n\n//# sourceURL=webpack:///./ui.js?");

/***/ })

/******/ });