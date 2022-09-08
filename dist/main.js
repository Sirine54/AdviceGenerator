/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("\r\n/////DOM ////////////\r\nconst num = document.getElementById('number');\r\nconst btn = document.getElementById('btn');\r\nconst quote= document.getElementById('quote');\r\n\r\nfunction adviceGenerator(){\r\nfetch('https://api.adviceslip.com/advice')\r\n.then(res=>res.json())\r\n.then(data=>{\r\n    console.log(data.slip.advice)\r\n    quote.innerHTML=data.slip.advice;\r\n    console.log(data.slip.id)\r\n    num.innerHTML=data.slip.id;\r\n}).catch(()=>{\r\n   quote.innerHTML=\"No internet connection,Try later\"\r\n})\r\n}\r\n\r\nadviceGenerator()\r\n\r\nbtn.addEventListener('click',adviceGenerator);\n\n//# sourceURL=webpack://advice-generator-app-main/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;