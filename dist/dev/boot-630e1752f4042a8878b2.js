(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["boot"],{

/***/ "9uep":
/*!*************************!*\
  !*** ./src/app/boot.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Note: Browser test is repeated in `index.html` because we want
// the code to run as early as possible.
var isChrome = !!window.chrome &&
    (!!window.chrome.webstore || !!window.chrome.runtime);
if (isChrome) {
    // IMPORTANT: `build/webpack/env-dev.js` uses this chunk name to target source map generation.
    Promise.all(/*! import() | login */[__webpack_require__.e("libs"), __webpack_require__.e("login")]).then(__webpack_require__.bind(null, /*! ./index */ "qgVz"));
}
else {
    console.log("Unsupported browser: ", window.navigator.userAgent);
}


/***/ })

},[["9uep","runtime"]]]);