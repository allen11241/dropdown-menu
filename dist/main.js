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

/***/ "./dist/main-page.js":
/*!***************************!*\
  !*** ./dist/main-page.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst NUM_DROPDOWN_ITEMS = 3;\nconst NUM_NAV_ITEMS = 5;\n\nfunction createDropdownMenu() {\n    const container = document.querySelector('.content')\n    container.appendChild(createHeader());\n    container.appendChild(createNavBar());\n    container.appendChild(createBody());\n    container.appendChild(createFooter());\n}\n\nfunction createHeader() {\n    const header = document.createElement('div');\n    header.classList.add('header');\n    header.textContent = 'header';\n    return header;\n}\n\nfunction createNavBar() {\n    const navBar = document.createElement('div');\n    navBar.classList.add('nav-bar');\n    for(let i=0; i < NUM_NAV_ITEMS; i++) {\n        navBar.appendChild(createNavItem(i))\n    }\n    navBar.appendChild(createMenuIcon());\n    return navBar;\n}\n\nfunction createBody() {\n    const body = document.createElement('div');\n    body.classList.add('body');\n    body.textContent = 'body';\n    body.appendChild(createParagraph());\n    return body;\n}\n\nfunction createFooter() {\n    const footer = document.createElement('div');\n    footer.classList.add('footer');\n    footer.textContent = 'footer';\n    return footer;\n}\n\nfunction createNavItem(number) {\n    const item = document.createElement('div');\n    item.classList.add('nav-item');\n    item.textContent = 'item ' + number;\n    item.appendChild(createDropdownContent());\n    return item;\n}\n\nfunction createDropdownContent() {\n    const dropdownContent = document.createElement('div');\n    dropdownContent.classList.add('dropdown-content');\n    for(let i=0; i < NUM_DROPDOWN_ITEMS; i++) {\n        dropdownContent.appendChild(createDropdownItem(i));\n    }\n    return dropdownContent;\n}\n\nfunction createMenuIcon() {\n    const icon = document.createElement('a');\n    icon.href = '#';\n    icon.classList.add('menu-icon');\n    icon.addEventListener('click', function() {\n        alert('click')\n    })\n    return icon;\n}\n\nfunction createDropdownItem(number) {\n    const dropdownItem = document.createElement('a');\n    dropdownItem.href = '#';\n    dropdownItem.textContent = 'sub-item ' + number;\n    return dropdownItem;\n}\n\nfunction createParagraph() {\n    const p = document.createElement('div');\n    p.classList.add('p');\n    p.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';\n    return p;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createDropdownMenu);\n\n//# sourceURL=webpack://dropdown-menu/./dist/main-page.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dist_main_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dist/main-page */ \"./dist/main-page.js\");\n\n\n\n(0,_dist_main_page__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://dropdown-menu/./src/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;