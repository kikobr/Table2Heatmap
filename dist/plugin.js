/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/plugin/main.ts":
/*!****************************!*\
  !*** ./src/plugin/main.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _onmessage_create_shapes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onmessage/create-shapes */ "./src/plugin/onmessage/create-shapes.ts");
/* harmony import */ var _onmessage_csv_file__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onmessage/csv-file */ "./src/plugin/onmessage/csv-file.ts");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
    // This shows the HTML page in "ui.html".
    figma.showUI(__html__);
    figma.ui.resize(500, 600);
    // By default, read local saved csv
    _onmessage_csv_file__WEBPACK_IMPORTED_MODULE_1__.csvFileRead();
    // Calls to "parent.postMessage" from UI
    figma.ui.onmessage = (msg) => {
        switch (msg.name) {
            case 'create-shapes':
                (0,_onmessage_create_shapes__WEBPACK_IMPORTED_MODULE_0__["default"])(msg);
                break;
            case 'csv-file:save':
                _onmessage_csv_file__WEBPACK_IMPORTED_MODULE_1__.csvFileSave(msg);
                break;
            default:
                console.log('Outro evento');
        }
    };
});


/***/ }),

/***/ "./src/plugin/onmessage/create-shapes.ts":
/*!***********************************************!*\
  !*** ./src/plugin/onmessage/create-shapes.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((msg, data = {}) => {
    // One way of distinguishing between different types of messages sent from
    // your HTML page is to use an object with a "type" property like this.
    console.log('create-shapes');
    const nodes = [];
    for (let i = 0; i < msg.value; i++) {
        const rect = figma.createRectangle();
        rect.x = i * 150;
        rect.fills = [{ type: 'SOLID', color: { r: 1, g: 0.5, b: 0 } }];
        figma.currentPage.appendChild(rect);
        nodes.push(rect);
    }
    figma.currentPage.selection = nodes;
    figma.viewport.scrollAndZoomIntoView(nodes);
    // Make sure to close the plugin when you're done. Otherwise the plugin will
    // keep running, which shows the cancel button at the bottom of the screen.
    figma.closePlugin();
});


/***/ }),

/***/ "./src/plugin/onmessage/csv-file.ts":
/*!******************************************!*\
  !*** ./src/plugin/onmessage/csv-file.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   csvFileRead: () => (/* binding */ csvFileRead),
/* harmony export */   csvFileSave: () => (/* binding */ csvFileSave)
/* harmony export */ });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.ts");

// saves a csv locally from the UI
const csvFileSave = (msg, data = {}) => {
    // save .csv contents in the local storage
    figma.clientStorage.setAsync('csv-file', msg.value).then(() => {
        console.log('CSV saved locally under key "csv-local".');
        csvFileRead();
    });
};
// loads the csv and passes to UI     
const csvFileRead = (data = {}) => {
    let value = '';
    figma.clientStorage.getAsync('csv-file').then((contents) => {
        if (contents) {
            value = contents;
            (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.postMessage)('csv-file:read', value);
        }
    });
};


/***/ }),

/***/ "./src/utils/utils.ts":
/*!****************************!*\
  !*** ./src/utils/utils.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   postMessage: () => (/* binding */ postMessage)
/* harmony export */ });
function postMessage(name, value) {
    /* figures out in which thread the script is running based on which global variable is available */
    let origin;
    try {
        if (figma)
            origin = 'plugin'; /* it's in the plugin thread */
    }
    catch (err) { }
    try {
        if (parent)
            origin = 'ui'; /* it's in the ui thread */
    }
    catch (err) { }
    /* sends the message via figma global object, if its in the plugin thread */
    if (origin == 'plugin') {
        return figma.ui.postMessage({ pluginMessage: { name: name, value: value } });
    }
    /* sends the message via parent / window global object, if its in the ui thread */
    else if (origin == 'ui') {
        return parent.postMessage({ pluginMessage: { name: name, value: value } }, "*");
    }
}


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/plugin.ts ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _plugin_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plugin/main */ "./src/plugin/main.ts");

(0,_plugin_main__WEBPACK_IMPORTED_MODULE_0__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGx1Z2luLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEQ7QUFDTDtBQUN2RCxpRUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw0REFBMEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isb0VBQW1CO0FBQ25DO0FBQ0E7QUFDQSxnQkFBZ0IsNERBQTBCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3JCRixpRUFBZSxlQUFlO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGVBQWU7QUFDbkM7QUFDQTtBQUNBLHdCQUF3Qix3QkFBd0Isc0JBQXNCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakI4QztBQUNoRDtBQUNPLG1DQUFtQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ08sOEJBQThCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSx5REFBVztBQUN2QjtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7O0FDbEJPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsaUJBQWlCLDRCQUE0QjtBQUNuRjtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsaUJBQWlCLDRCQUE0QjtBQUNqRjtBQUNBOzs7Ozs7O1VDckJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOaUM7QUFDakMsd0RBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YWJsZTJoZWF0bWFwLy4vc3JjL3BsdWdpbi9tYWluLnRzIiwid2VicGFjazovL3RhYmxlMmhlYXRtYXAvLi9zcmMvcGx1Z2luL29ubWVzc2FnZS9jcmVhdGUtc2hhcGVzLnRzIiwid2VicGFjazovL3RhYmxlMmhlYXRtYXAvLi9zcmMvcGx1Z2luL29ubWVzc2FnZS9jc3YtZmlsZS50cyIsIndlYnBhY2s6Ly90YWJsZTJoZWF0bWFwLy4vc3JjL3V0aWxzL3V0aWxzLnRzIiwid2VicGFjazovL3RhYmxlMmhlYXRtYXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGFibGUyaGVhdG1hcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGFibGUyaGVhdG1hcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RhYmxlMmhlYXRtYXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90YWJsZTJoZWF0bWFwLy4vc3JjL3BsdWdpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3JlYXRlU2hhcGVzSGFuZGxlciBmcm9tICcuL29ubWVzc2FnZS9jcmVhdGUtc2hhcGVzJztcclxuaW1wb3J0ICogYXMgY3N2RmlsZUhhbmRsZXIgZnJvbSAnLi9vbm1lc3NhZ2UvY3N2LWZpbGUnO1xyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgICAvLyBUaGlzIHNob3dzIHRoZSBIVE1MIHBhZ2UgaW4gXCJ1aS5odG1sXCIuXHJcbiAgICBmaWdtYS5zaG93VUkoX19odG1sX18pO1xyXG4gICAgZmlnbWEudWkucmVzaXplKDUwMCwgNjAwKTtcclxuICAgIC8vIEJ5IGRlZmF1bHQsIHJlYWQgbG9jYWwgc2F2ZWQgY3N2XHJcbiAgICBjc3ZGaWxlSGFuZGxlci5jc3ZGaWxlUmVhZCgpO1xyXG4gICAgLy8gQ2FsbHMgdG8gXCJwYXJlbnQucG9zdE1lc3NhZ2VcIiBmcm9tIFVJXHJcbiAgICBmaWdtYS51aS5vbm1lc3NhZ2UgPSAobXNnKSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChtc2cubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlICdjcmVhdGUtc2hhcGVzJzpcclxuICAgICAgICAgICAgICAgIGNyZWF0ZVNoYXBlc0hhbmRsZXIobXNnKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdjc3YtZmlsZTpzYXZlJzpcclxuICAgICAgICAgICAgICAgIGNzdkZpbGVIYW5kbGVyLmNzdkZpbGVTYXZlKG1zZyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdPdXRybyBldmVudG8nKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCAobXNnLCBkYXRhID0ge30pID0+IHtcclxuICAgIC8vIE9uZSB3YXkgb2YgZGlzdGluZ3Vpc2hpbmcgYmV0d2VlbiBkaWZmZXJlbnQgdHlwZXMgb2YgbWVzc2FnZXMgc2VudCBmcm9tXHJcbiAgICAvLyB5b3VyIEhUTUwgcGFnZSBpcyB0byB1c2UgYW4gb2JqZWN0IHdpdGggYSBcInR5cGVcIiBwcm9wZXJ0eSBsaWtlIHRoaXMuXHJcbiAgICBjb25zb2xlLmxvZygnY3JlYXRlLXNoYXBlcycpO1xyXG4gICAgY29uc3Qgbm9kZXMgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXNnLnZhbHVlOyBpKyspIHtcclxuICAgICAgICBjb25zdCByZWN0ID0gZmlnbWEuY3JlYXRlUmVjdGFuZ2xlKCk7XHJcbiAgICAgICAgcmVjdC54ID0gaSAqIDE1MDtcclxuICAgICAgICByZWN0LmZpbGxzID0gW3sgdHlwZTogJ1NPTElEJywgY29sb3I6IHsgcjogMSwgZzogMC41LCBiOiAwIH0gfV07XHJcbiAgICAgICAgZmlnbWEuY3VycmVudFBhZ2UuYXBwZW5kQ2hpbGQocmVjdCk7XHJcbiAgICAgICAgbm9kZXMucHVzaChyZWN0KTtcclxuICAgIH1cclxuICAgIGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbiA9IG5vZGVzO1xyXG4gICAgZmlnbWEudmlld3BvcnQuc2Nyb2xsQW5kWm9vbUludG9WaWV3KG5vZGVzKTtcclxuICAgIC8vIE1ha2Ugc3VyZSB0byBjbG9zZSB0aGUgcGx1Z2luIHdoZW4geW91J3JlIGRvbmUuIE90aGVyd2lzZSB0aGUgcGx1Z2luIHdpbGxcclxuICAgIC8vIGtlZXAgcnVubmluZywgd2hpY2ggc2hvd3MgdGhlIGNhbmNlbCBidXR0b24gYXQgdGhlIGJvdHRvbSBvZiB0aGUgc2NyZWVuLlxyXG4gICAgZmlnbWEuY2xvc2VQbHVnaW4oKTtcclxufTtcclxuIiwiaW1wb3J0IHsgcG9zdE1lc3NhZ2UgfSBmcm9tIFwiLi4vLi4vdXRpbHMvdXRpbHNcIjtcclxuLy8gc2F2ZXMgYSBjc3YgbG9jYWxseSBmcm9tIHRoZSBVSVxyXG5leHBvcnQgY29uc3QgY3N2RmlsZVNhdmUgPSAobXNnLCBkYXRhID0ge30pID0+IHtcclxuICAgIC8vIHNhdmUgLmNzdiBjb250ZW50cyBpbiB0aGUgbG9jYWwgc3RvcmFnZVxyXG4gICAgZmlnbWEuY2xpZW50U3RvcmFnZS5zZXRBc3luYygnY3N2LWZpbGUnLCBtc2cudmFsdWUpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdDU1Ygc2F2ZWQgbG9jYWxseSB1bmRlciBrZXkgXCJjc3YtbG9jYWxcIi4nKTtcclxuICAgICAgICBjc3ZGaWxlUmVhZCgpO1xyXG4gICAgfSk7XHJcbn07XHJcbi8vIGxvYWRzIHRoZSBjc3YgYW5kIHBhc3NlcyB0byBVSSAgICAgXHJcbmV4cG9ydCBjb25zdCBjc3ZGaWxlUmVhZCA9IChkYXRhID0ge30pID0+IHtcclxuICAgIGxldCB2YWx1ZSA9ICcnO1xyXG4gICAgZmlnbWEuY2xpZW50U3RvcmFnZS5nZXRBc3luYygnY3N2LWZpbGUnKS50aGVuKChjb250ZW50cykgPT4ge1xyXG4gICAgICAgIGlmIChjb250ZW50cykge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IGNvbnRlbnRzO1xyXG4gICAgICAgICAgICBwb3N0TWVzc2FnZSgnY3N2LWZpbGU6cmVhZCcsIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufTtcclxuIiwiZXhwb3J0IGZ1bmN0aW9uIHBvc3RNZXNzYWdlKG5hbWUsIHZhbHVlKSB7XHJcbiAgICAvKiBmaWd1cmVzIG91dCBpbiB3aGljaCB0aHJlYWQgdGhlIHNjcmlwdCBpcyBydW5uaW5nIGJhc2VkIG9uIHdoaWNoIGdsb2JhbCB2YXJpYWJsZSBpcyBhdmFpbGFibGUgKi9cclxuICAgIGxldCBvcmlnaW47XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGlmIChmaWdtYSlcclxuICAgICAgICAgICAgb3JpZ2luID0gJ3BsdWdpbic7IC8qIGl0J3MgaW4gdGhlIHBsdWdpbiB0aHJlYWQgKi9cclxuICAgIH1cclxuICAgIGNhdGNoIChlcnIpIHsgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBpZiAocGFyZW50KVxyXG4gICAgICAgICAgICBvcmlnaW4gPSAndWknOyAvKiBpdCdzIGluIHRoZSB1aSB0aHJlYWQgKi9cclxuICAgIH1cclxuICAgIGNhdGNoIChlcnIpIHsgfVxyXG4gICAgLyogc2VuZHMgdGhlIG1lc3NhZ2UgdmlhIGZpZ21hIGdsb2JhbCBvYmplY3QsIGlmIGl0cyBpbiB0aGUgcGx1Z2luIHRocmVhZCAqL1xyXG4gICAgaWYgKG9yaWdpbiA9PSAncGx1Z2luJykge1xyXG4gICAgICAgIHJldHVybiBmaWdtYS51aS5wb3N0TWVzc2FnZSh7IHBsdWdpbk1lc3NhZ2U6IHsgbmFtZTogbmFtZSwgdmFsdWU6IHZhbHVlIH0gfSk7XHJcbiAgICB9XHJcbiAgICAvKiBzZW5kcyB0aGUgbWVzc2FnZSB2aWEgcGFyZW50IC8gd2luZG93IGdsb2JhbCBvYmplY3QsIGlmIGl0cyBpbiB0aGUgdWkgdGhyZWFkICovXHJcbiAgICBlbHNlIGlmIChvcmlnaW4gPT0gJ3VpJykge1xyXG4gICAgICAgIHJldHVybiBwYXJlbnQucG9zdE1lc3NhZ2UoeyBwbHVnaW5NZXNzYWdlOiB7IG5hbWU6IG5hbWUsIHZhbHVlOiB2YWx1ZSB9IH0sIFwiKlwiKTtcclxuICAgIH1cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBtYWluIGZyb20gJy4vcGx1Z2luL21haW4nO1xyXG5tYWluKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==