/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/generic/utils.ts":
/*!******************************!*\
  !*** ./src/generic/utils.ts ***!
  \******************************/
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


/***/ }),

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
/* harmony import */ var _generic_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../generic/utils */ "./src/generic/utils.ts");

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
            (0,_generic_utils__WEBPACK_IMPORTED_MODULE_0__.postMessage)('csv-file:read', value);
        }
    });
};


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGx1Z2luLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxpQkFBaUIsNEJBQTRCO0FBQ25GO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxpQkFBaUIsNEJBQTRCO0FBQ2pGO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckI0RDtBQUNMO0FBQ3ZELGlFQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDREQUEwQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixvRUFBbUI7QUFDbkM7QUFDQTtBQUNBLGdCQUFnQiw0REFBMEI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDckJGLGlFQUFlLGVBQWU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsZUFBZTtBQUNuQztBQUNBO0FBQ0Esd0JBQXdCLHdCQUF3QixzQkFBc0I7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQmdEO0FBQ2xEO0FBQ08sbUNBQW1DO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDTyw4QkFBOEI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDJEQUFXO0FBQ3ZCO0FBQ0EsS0FBSztBQUNMOzs7Ozs7O1VDbEJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOaUM7QUFDakMsd0RBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YWJsZTJoZWF0bWFwLy4vc3JjL2dlbmVyaWMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vdGFibGUyaGVhdG1hcC8uL3NyYy9wbHVnaW4vbWFpbi50cyIsIndlYnBhY2s6Ly90YWJsZTJoZWF0bWFwLy4vc3JjL3BsdWdpbi9vbm1lc3NhZ2UvY3JlYXRlLXNoYXBlcy50cyIsIndlYnBhY2s6Ly90YWJsZTJoZWF0bWFwLy4vc3JjL3BsdWdpbi9vbm1lc3NhZ2UvY3N2LWZpbGUudHMiLCJ3ZWJwYWNrOi8vdGFibGUyaGVhdG1hcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90YWJsZTJoZWF0bWFwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90YWJsZTJoZWF0bWFwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGFibGUyaGVhdG1hcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RhYmxlMmhlYXRtYXAvLi9zcmMvcGx1Z2luLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBwb3N0TWVzc2FnZShuYW1lLCB2YWx1ZSkge1xyXG4gICAgLyogZmlndXJlcyBvdXQgaW4gd2hpY2ggdGhyZWFkIHRoZSBzY3JpcHQgaXMgcnVubmluZyBiYXNlZCBvbiB3aGljaCBnbG9iYWwgdmFyaWFibGUgaXMgYXZhaWxhYmxlICovXHJcbiAgICBsZXQgb3JpZ2luO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBpZiAoZmlnbWEpXHJcbiAgICAgICAgICAgIG9yaWdpbiA9ICdwbHVnaW4nOyAvKiBpdCdzIGluIHRoZSBwbHVnaW4gdGhyZWFkICovXHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyKSB7IH1cclxuICAgIHRyeSB7XHJcbiAgICAgICAgaWYgKHBhcmVudClcclxuICAgICAgICAgICAgb3JpZ2luID0gJ3VpJzsgLyogaXQncyBpbiB0aGUgdWkgdGhyZWFkICovXHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyKSB7IH1cclxuICAgIC8qIHNlbmRzIHRoZSBtZXNzYWdlIHZpYSBmaWdtYSBnbG9iYWwgb2JqZWN0LCBpZiBpdHMgaW4gdGhlIHBsdWdpbiB0aHJlYWQgKi9cclxuICAgIGlmIChvcmlnaW4gPT0gJ3BsdWdpbicpIHtcclxuICAgICAgICByZXR1cm4gZmlnbWEudWkucG9zdE1lc3NhZ2UoeyBwbHVnaW5NZXNzYWdlOiB7IG5hbWU6IG5hbWUsIHZhbHVlOiB2YWx1ZSB9IH0pO1xyXG4gICAgfVxyXG4gICAgLyogc2VuZHMgdGhlIG1lc3NhZ2UgdmlhIHBhcmVudCAvIHdpbmRvdyBnbG9iYWwgb2JqZWN0LCBpZiBpdHMgaW4gdGhlIHVpIHRocmVhZCAqL1xyXG4gICAgZWxzZSBpZiAob3JpZ2luID09ICd1aScpIHtcclxuICAgICAgICByZXR1cm4gcGFyZW50LnBvc3RNZXNzYWdlKHsgcGx1Z2luTWVzc2FnZTogeyBuYW1lOiBuYW1lLCB2YWx1ZTogdmFsdWUgfSB9LCBcIipcIik7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IGNyZWF0ZVNoYXBlc0hhbmRsZXIgZnJvbSAnLi9vbm1lc3NhZ2UvY3JlYXRlLXNoYXBlcyc7XHJcbmltcG9ydCAqIGFzIGNzdkZpbGVIYW5kbGVyIGZyb20gJy4vb25tZXNzYWdlL2Nzdi1maWxlJztcclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG4gICAgLy8gVGhpcyBzaG93cyB0aGUgSFRNTCBwYWdlIGluIFwidWkuaHRtbFwiLlxyXG4gICAgZmlnbWEuc2hvd1VJKF9faHRtbF9fKTtcclxuICAgIGZpZ21hLnVpLnJlc2l6ZSg1MDAsIDYwMCk7XHJcbiAgICAvLyBCeSBkZWZhdWx0LCByZWFkIGxvY2FsIHNhdmVkIGNzdlxyXG4gICAgY3N2RmlsZUhhbmRsZXIuY3N2RmlsZVJlYWQoKTtcclxuICAgIC8vIENhbGxzIHRvIFwicGFyZW50LnBvc3RNZXNzYWdlXCIgZnJvbSBVSVxyXG4gICAgZmlnbWEudWkub25tZXNzYWdlID0gKG1zZykgPT4ge1xyXG4gICAgICAgIHN3aXRjaCAobXNnLm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSAnY3JlYXRlLXNoYXBlcyc6XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVTaGFwZXNIYW5kbGVyKG1zZyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnY3N2LWZpbGU6c2F2ZSc6XHJcbiAgICAgICAgICAgICAgICBjc3ZGaWxlSGFuZGxlci5jc3ZGaWxlU2F2ZShtc2cpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnT3V0cm8gZXZlbnRvJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgKG1zZywgZGF0YSA9IHt9KSA9PiB7XHJcbiAgICAvLyBPbmUgd2F5IG9mIGRpc3Rpbmd1aXNoaW5nIGJldHdlZW4gZGlmZmVyZW50IHR5cGVzIG9mIG1lc3NhZ2VzIHNlbnQgZnJvbVxyXG4gICAgLy8geW91ciBIVE1MIHBhZ2UgaXMgdG8gdXNlIGFuIG9iamVjdCB3aXRoIGEgXCJ0eXBlXCIgcHJvcGVydHkgbGlrZSB0aGlzLlxyXG4gICAgY29uc29sZS5sb2coJ2NyZWF0ZS1zaGFwZXMnKTtcclxuICAgIGNvbnN0IG5vZGVzID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1zZy52YWx1ZTsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgcmVjdCA9IGZpZ21hLmNyZWF0ZVJlY3RhbmdsZSgpO1xyXG4gICAgICAgIHJlY3QueCA9IGkgKiAxNTA7XHJcbiAgICAgICAgcmVjdC5maWxscyA9IFt7IHR5cGU6ICdTT0xJRCcsIGNvbG9yOiB7IHI6IDEsIGc6IDAuNSwgYjogMCB9IH1dO1xyXG4gICAgICAgIGZpZ21hLmN1cnJlbnRQYWdlLmFwcGVuZENoaWxkKHJlY3QpO1xyXG4gICAgICAgIG5vZGVzLnB1c2gocmVjdCk7XHJcbiAgICB9XHJcbiAgICBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24gPSBub2RlcztcclxuICAgIGZpZ21hLnZpZXdwb3J0LnNjcm9sbEFuZFpvb21JbnRvVmlldyhub2Rlcyk7XHJcbiAgICAvLyBNYWtlIHN1cmUgdG8gY2xvc2UgdGhlIHBsdWdpbiB3aGVuIHlvdSdyZSBkb25lLiBPdGhlcndpc2UgdGhlIHBsdWdpbiB3aWxsXHJcbiAgICAvLyBrZWVwIHJ1bm5pbmcsIHdoaWNoIHNob3dzIHRoZSBjYW5jZWwgYnV0dG9uIGF0IHRoZSBib3R0b20gb2YgdGhlIHNjcmVlbi5cclxuICAgIGZpZ21hLmNsb3NlUGx1Z2luKCk7XHJcbn07XHJcbiIsImltcG9ydCB7IHBvc3RNZXNzYWdlIH0gZnJvbSBcIi4uLy4uL2dlbmVyaWMvdXRpbHNcIjtcclxuLy8gc2F2ZXMgYSBjc3YgbG9jYWxseSBmcm9tIHRoZSBVSVxyXG5leHBvcnQgY29uc3QgY3N2RmlsZVNhdmUgPSAobXNnLCBkYXRhID0ge30pID0+IHtcclxuICAgIC8vIHNhdmUgLmNzdiBjb250ZW50cyBpbiB0aGUgbG9jYWwgc3RvcmFnZVxyXG4gICAgZmlnbWEuY2xpZW50U3RvcmFnZS5zZXRBc3luYygnY3N2LWZpbGUnLCBtc2cudmFsdWUpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdDU1Ygc2F2ZWQgbG9jYWxseSB1bmRlciBrZXkgXCJjc3YtbG9jYWxcIi4nKTtcclxuICAgICAgICBjc3ZGaWxlUmVhZCgpO1xyXG4gICAgfSk7XHJcbn07XHJcbi8vIGxvYWRzIHRoZSBjc3YgYW5kIHBhc3NlcyB0byBVSSAgICAgXHJcbmV4cG9ydCBjb25zdCBjc3ZGaWxlUmVhZCA9IChkYXRhID0ge30pID0+IHtcclxuICAgIGxldCB2YWx1ZSA9ICcnO1xyXG4gICAgZmlnbWEuY2xpZW50U3RvcmFnZS5nZXRBc3luYygnY3N2LWZpbGUnKS50aGVuKChjb250ZW50cykgPT4ge1xyXG4gICAgICAgIGlmIChjb250ZW50cykge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IGNvbnRlbnRzO1xyXG4gICAgICAgICAgICBwb3N0TWVzc2FnZSgnY3N2LWZpbGU6cmVhZCcsIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgbWFpbiBmcm9tICcuL3BsdWdpbi9tYWluJztcclxubWFpbigpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=