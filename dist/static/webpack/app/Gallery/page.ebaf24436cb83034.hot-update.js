"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/Gallery/page",{

/***/ "(app-pages-browser)/./app/components/Gallery/Gallery.tsx":
/*!********************************************!*\
  !*** ./app/components/Gallery/Gallery.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Gallery: function() { return /* binding */ Gallery; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _app_GlobalRedux_filterGallerySlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/GlobalRedux/filterGallerySlice */ \"(app-pages-browser)/./app/GlobalRedux/filterGallerySlice.ts\");\n/* __next_internal_client_entry_do_not_use__ Gallery auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction galleryItem(item, handleFavoriteToggle) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"gallery__item\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: item.url,\n                alt: \"\"\n            }, void 0, false, {\n                fileName: \"/Users/admin/Desktop/PetsPawNextRepo/PetsPawNextjs/app/components/Gallery/Gallery.tsx\",\n                lineNumber: 11,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"gallery_btn-favorite svg \".concat(item.isFavorite ? \"delete-favourite\" : \"\"),\n                onClick: ()=>handleFavoriteToggle(item.id, item.isFavorite)\n            }, void 0, false, {\n                fileName: \"/Users/admin/Desktop/PetsPawNextRepo/PetsPawNextjs/app/components/Gallery/Gallery.tsx\",\n                lineNumber: 12,\n                columnNumber: 13\n            }, this)\n        ]\n    }, item.id + \"galleryItem\", true, {\n        fileName: \"/Users/admin/Desktop/PetsPawNextRepo/PetsPawNextjs/app/components/Gallery/Gallery.tsx\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, this);\n}\nfunction Gallery(galleryItems, handleFavoriteToggle) {\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        dispatch((0,_app_GlobalRedux_filterGallerySlice__WEBPACK_IMPORTED_MODULE_3__.reset)());\n    }, []);\n    return galleryItems.length ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"gallery breeds__gallery\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"gallery__items\",\n            children: galleryItems.map((item)=>galleryItem(item, handleFavoriteToggle))\n        }, void 0, false, {\n            fileName: \"/Users/admin/Desktop/PetsPawNextRepo/PetsPawNextjs/app/components/Gallery/Gallery.tsx\",\n            lineNumber: 28,\n            columnNumber: 17\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/admin/Desktop/PetsPawNextRepo/PetsPawNextjs/app/components/Gallery/Gallery.tsx\",\n        lineNumber: 27,\n        columnNumber: 13\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"lds-roller\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"/Users/admin/Desktop/PetsPawNextRepo/PetsPawNextjs/app/components/Gallery/Gallery.tsx\",\n                lineNumber: 35,\n                columnNumber: 17\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"/Users/admin/Desktop/PetsPawNextRepo/PetsPawNextjs/app/components/Gallery/Gallery.tsx\",\n                lineNumber: 35,\n                columnNumber: 28\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"/Users/admin/Desktop/PetsPawNextRepo/PetsPawNextjs/app/components/Gallery/Gallery.tsx\",\n                lineNumber: 35,\n                columnNumber: 39\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"/Users/admin/Desktop/PetsPawNextRepo/PetsPawNextjs/app/components/Gallery/Gallery.tsx\",\n                lineNumber: 35,\n                columnNumber: 50\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"/Users/admin/Desktop/PetsPawNextRepo/PetsPawNextjs/app/components/Gallery/Gallery.tsx\",\n                lineNumber: 35,\n                columnNumber: 61\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"/Users/admin/Desktop/PetsPawNextRepo/PetsPawNextjs/app/components/Gallery/Gallery.tsx\",\n                lineNumber: 35,\n                columnNumber: 72\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"/Users/admin/Desktop/PetsPawNextRepo/PetsPawNextjs/app/components/Gallery/Gallery.tsx\",\n                lineNumber: 35,\n                columnNumber: 83\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"/Users/admin/Desktop/PetsPawNextRepo/PetsPawNextjs/app/components/Gallery/Gallery.tsx\",\n                lineNumber: 35,\n                columnNumber: 94\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/admin/Desktop/PetsPawNextRepo/PetsPawNextjs/app/components/Gallery/Gallery.tsx\",\n        lineNumber: 34,\n        columnNumber: 13\n    }, this);\n}\n_s(Gallery, \"rAh3tY+Iv6hWC9AI4Dm+rCbkwNE=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch\n    ];\n});\n_c = Gallery;\nvar _c;\n$RefreshReg$(_c, \"Gallery\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0dhbGxlcnkvR2FsbGVyeS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFeUM7QUFDQTtBQUNvQjtBQUc3RCxTQUFTSSxZQUFZQyxJQUFRLEVBQUVDLG9CQUF3QjtJQUNuRCxxQkFDSSw4REFBQ0M7UUFBb0NDLFdBQVk7OzBCQUM3Qyw4REFBQ0M7Z0JBQUlDLEtBQUtMLEtBQUtNLEdBQUc7Z0JBQUVDLEtBQUk7Ozs7OzswQkFDeEIsOERBQUNDO2dCQUFPTCxXQUFXLDRCQUFzRSxPQUExQ0gsS0FBS1MsVUFBVSxHQUFHLHFCQUFxQjtnQkFBS0MsU0FBUyxJQUFNVCxxQkFBc0JELEtBQUtXLEVBQUUsRUFBRVgsS0FBS1MsVUFBVTs7Ozs7OztPQUZoSlQsS0FBS1csRUFBRSxHQUFHOzs7OztBQUs5QjtBQUVPLFNBQVNDLFFBQVFDLFlBQWdCLEVBQUVaLG9CQUF5Qjs7SUFDL0QsTUFBTWEsV0FBV2pCLHdEQUFXQTtJQUU1QkQsZ0RBQVNBLENBQUM7UUFDTmtCLFNBQVNoQiwwRUFBS0E7SUFDbEIsR0FBRyxFQUFFO0lBR0wsT0FDSWUsYUFBYUUsTUFBTSxpQkFDZiw4REFBQ2I7UUFBSUMsV0FBVTtrQkFDWCw0RUFBQ0Q7WUFBSUMsV0FBVTtzQkFDVlUsYUFBYUcsR0FBRyxDQUFDLENBQUNoQixPQUFhRCxZQUFZQyxNQUFNQzs7Ozs7Ozs7Ozs2QkFLMUQsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDRDs7Ozs7MEJBQVUsOERBQUNBOzs7OzswQkFBVSw4REFBQ0E7Ozs7OzBCQUFVLDhEQUFDQTs7Ozs7MEJBQVUsOERBQUNBOzs7OzswQkFBVSw4REFBQ0E7Ozs7OzBCQUFVLDhEQUFDQTs7Ozs7MEJBQVUsOERBQUNBOzs7Ozs7Ozs7OztBQUc5RjtHQXJCZ0JVOztRQUNLZixvREFBV0E7OztLQURoQmUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvR2FsbGVyeS9HYWxsZXJ5LnRzeD9kYTlmIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyByZXNldCB9IGZyb20gJ0AvYXBwL0dsb2JhbFJlZHV4L2ZpbHRlckdhbGxlcnlTbGljZSc7XG5cblxuZnVuY3Rpb24gZ2FsbGVyeUl0ZW0oaXRlbTphbnksIGhhbmRsZUZhdm9yaXRlVG9nZ2xlOmFueSl7XG4gICAgcmV0dXJuKCAgXG4gICAgICAgIDxkaXYga2V5ID0ge2l0ZW0uaWQgKyAnZ2FsbGVyeUl0ZW0nfSBjbGFzc05hbWUgPSBcImdhbGxlcnlfX2l0ZW1cIiA+IFxuICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW0udXJsfSBhbHQ9XCJcIi8+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YGdhbGxlcnlfYnRuLWZhdm9yaXRlIHN2ZyAke2l0ZW0uaXNGYXZvcml0ZSA/ICdkZWxldGUtZmF2b3VyaXRlJyA6ICcnfWB9b25DbGljaz17KCkgPT4gaGFuZGxlRmF2b3JpdGVUb2dnbGUgKGl0ZW0uaWQsIGl0ZW0uaXNGYXZvcml0ZSl9PjwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBHYWxsZXJ5KGdhbGxlcnlJdGVtczphbnksIGhhbmRsZUZhdm9yaXRlVG9nZ2xlOiBhbnkpe1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHJlc2V0KCkpO1xuICAgIH0sIFtdKTtcblxuXG4gICAgcmV0dXJuKFxuICAgICAgICBnYWxsZXJ5SXRlbXMubGVuZ3RoID8gXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbGxlcnkgYnJlZWRzX19nYWxsZXJ5XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnYWxsZXJ5X19pdGVtc1wiPlxuICAgICAgICAgICAgICAgICAgICB7Z2FsbGVyeUl0ZW1zLm1hcCgoaXRlbTphbnkpID0+IGdhbGxlcnlJdGVtKGl0ZW0sIGhhbmRsZUZhdm9yaXRlVG9nZ2xlKSl9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA6IFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZHMtcm9sbGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdj48L2Rpdj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+ICAgIFxuICAgICk7XG59O1xuICAgICJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZURpc3BhdGNoIiwicmVzZXQiLCJnYWxsZXJ5SXRlbSIsIml0ZW0iLCJoYW5kbGVGYXZvcml0ZVRvZ2dsZSIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsInVybCIsImFsdCIsImJ1dHRvbiIsImlzRmF2b3JpdGUiLCJvbkNsaWNrIiwiaWQiLCJHYWxsZXJ5IiwiZ2FsbGVyeUl0ZW1zIiwiZGlzcGF0Y2giLCJsZW5ndGgiLCJtYXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Gallery/Gallery.tsx\n"));

/***/ })

});