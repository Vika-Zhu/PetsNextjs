"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/Breeds/page",{

/***/ "(app-pages-browser)/./app/components/GelleryBreeds/GalleryBreeds.tsx":
/*!********************************************************!*\
  !*** ./app/components/GelleryBreeds/GalleryBreeds.tsx ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GalleryBreeds: function() { return /* binding */ GalleryBreeds; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _app_GlobalRedux_filterGallerySlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/GlobalRedux/filterGallerySlice */ \"(app-pages-browser)/./app/GlobalRedux/filterGallerySlice.ts\");\n/* __next_internal_client_entry_do_not_use__ GalleryBreeds auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction galleryItem(item) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"gallery__item\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: item.image.url,\n                alt: \"\"\n            }, void 0, false, {\n                fileName: \"/Users/admin/Desktop/PetsPawNextRepo/PetsPawNextjs/app/components/GelleryBreeds/GalleryBreeds.tsx\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/InfoBreeds?breed_id=\".concat(item.id),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"item-btn btn\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: item.name\n                    }, void 0, false, {\n                        fileName: \"/Users/admin/Desktop/PetsPawNextRepo/PetsPawNextjs/app/components/GelleryBreeds/GalleryBreeds.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/admin/Desktop/PetsPawNextRepo/PetsPawNextjs/app/components/GelleryBreeds/GalleryBreeds.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/admin/Desktop/PetsPawNextRepo/PetsPawNextjs/app/components/GelleryBreeds/GalleryBreeds.tsx\",\n                lineNumber: 15,\n                columnNumber: 13\n            }, this)\n        ]\n    }, item.id + \"galleryItem\", true, {\n        fileName: \"/Users/admin/Desktop/PetsPawNextRepo/PetsPawNextjs/app/components/GelleryBreeds/GalleryBreeds.tsx\",\n        lineNumber: 13,\n        columnNumber: 10\n    }, this);\n}\nfunction GalleryBreeds(galleryItems) {\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        dispatch((0,_app_GlobalRedux_filterGallerySlice__WEBPACK_IMPORTED_MODULE_4__.reset)());\n    }, []);\n    return galleryItems.length ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"gallery breeds__gallery\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"gallery__items\",\n            children: galleryItems.map(galleryItem)\n        }, void 0, false, {\n            fileName: \"/Users/admin/Desktop/PetsPawNextRepo/PetsPawNextjs/app/components/GelleryBreeds/GalleryBreeds.tsx\",\n            lineNumber: 33,\n            columnNumber: 17\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/admin/Desktop/PetsPawNextRepo/PetsPawNextjs/app/components/GelleryBreeds/GalleryBreeds.tsx\",\n        lineNumber: 32,\n        columnNumber: 13\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"lds-roller\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"/Users/admin/Desktop/PetsPawNextRepo/PetsPawNextjs/app/components/GelleryBreeds/GalleryBreeds.tsx\",\n                lineNumber: 39,\n                columnNumber: 18\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"/Users/admin/Desktop/PetsPawNextRepo/PetsPawNextjs/app/components/GelleryBreeds/GalleryBreeds.tsx\",\n                lineNumber: 39,\n                columnNumber: 29\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"/Users/admin/Desktop/PetsPawNextRepo/PetsPawNextjs/app/components/GelleryBreeds/GalleryBreeds.tsx\",\n                lineNumber: 39,\n                columnNumber: 40\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"/Users/admin/Desktop/PetsPawNextRepo/PetsPawNextjs/app/components/GelleryBreeds/GalleryBreeds.tsx\",\n                lineNumber: 39,\n                columnNumber: 51\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"/Users/admin/Desktop/PetsPawNextRepo/PetsPawNextjs/app/components/GelleryBreeds/GalleryBreeds.tsx\",\n                lineNumber: 39,\n                columnNumber: 62\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"/Users/admin/Desktop/PetsPawNextRepo/PetsPawNextjs/app/components/GelleryBreeds/GalleryBreeds.tsx\",\n                lineNumber: 39,\n                columnNumber: 73\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"/Users/admin/Desktop/PetsPawNextRepo/PetsPawNextjs/app/components/GelleryBreeds/GalleryBreeds.tsx\",\n                lineNumber: 39,\n                columnNumber: 84\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"/Users/admin/Desktop/PetsPawNextRepo/PetsPawNextjs/app/components/GelleryBreeds/GalleryBreeds.tsx\",\n                lineNumber: 39,\n                columnNumber: 95\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/admin/Desktop/PetsPawNextRepo/PetsPawNextjs/app/components/GelleryBreeds/GalleryBreeds.tsx\",\n        lineNumber: 38,\n        columnNumber: 13\n    }, this);\n}\n_s(GalleryBreeds, \"rAh3tY+Iv6hWC9AI4Dm+rCbkwNE=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch\n    ];\n});\n_c = GalleryBreeds;\nvar _c;\n$RefreshReg$(_c, \"GalleryBreeds\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0dlbGxlcnlCcmVlZHMvR2FsbGVyeUJyZWVkcy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUc0QjtBQUN1QjtBQUNDO0FBRWlCO0FBR3JFLFNBQVNLLFlBQVlDLElBQVE7SUFDekIscUJBQ0ssOERBQUNDO1FBQW9DQyxXQUFZOzswQkFDOUMsOERBQUNDO2dCQUFJQyxLQUFLSixLQUFLSyxLQUFLLENBQUNDLEdBQUc7Z0JBQUVDLEtBQUk7Ozs7OzswQkFDOUIsOERBQUNiLGtEQUFJQTtnQkFBQ2MsTUFBTSx3QkFBZ0MsT0FBUlIsS0FBS1MsRUFBRTswQkFDdkMsNEVBQUNSO29CQUFJQyxXQUFVOzhCQUNYLDRFQUFDRDtrQ0FBS0QsS0FBS1UsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FKZFYsS0FBS1MsRUFBRSxHQUFHOzs7OztBQVEvQjtBQUVPLFNBQVNFLGNBQWNDLFlBQWdCOztJQUMxQyxNQUFNQyxXQUFXaEIsd0RBQVdBO0lBRTVCRCxnREFBU0EsQ0FBQztRQUNOaUIsU0FBU2YsMEVBQUtBO0lBQ2xCLEdBQUcsRUFBRTtJQUVMLE9BQ0tjLGFBQWFFLE1BQU0saUJBQ2hCLDhEQUFDYjtRQUFJQyxXQUFVO2tCQUNYLDRFQUFDRDtZQUFJQyxXQUFVO3NCQUNWVSxhQUFhRyxHQUFHLENBQUNoQjs7Ozs7Ozs7Ozs2QkFJMUIsOERBQUNFO1FBQUlDLFdBQVU7OzBCQUNWLDhEQUFDRDs7Ozs7MEJBQVUsOERBQUNBOzs7OzswQkFBVSw4REFBQ0E7Ozs7OzBCQUFVLDhEQUFDQTs7Ozs7MEJBQVUsOERBQUNBOzs7OzswQkFBVSw4REFBQ0E7Ozs7OzBCQUFVLDhEQUFDQTs7Ozs7MEJBQVUsOERBQUNBOzs7Ozs7Ozs7OztBQUcvRjtHQW5CZ0JVOztRQUNLZCxvREFBV0E7OztLQURoQmMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvR2VsbGVyeUJyZWVkcy9HYWxsZXJ5QnJlZWRzLnRzeD9kZTI0Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7dXNlU2VsZWN0b3IsIHVzZURpc3BhdGNofSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IHNlbGVjdFVwbG9hZERhdGFPcmRlciwgc2VsZWN0QnJlZWRGaWx0ZXIsIHNlbGVjdEltYWdlQ291bnQsIHNlbGVjdFR5cGVJbWFnZSB9IGZyb20gJ0AvYXBwL0dsb2JhbFJlZHV4L2ZpbHRlckdhbGxlcnlTbGljZSc7XG5pbXBvcnQgeyB0ZXh0QWRkLCByZXNldH0gZnJvbSAnQC9hcHAvR2xvYmFsUmVkdXgvZmlsdGVyR2FsbGVyeVNsaWNlJztcblxuXG5mdW5jdGlvbiBnYWxsZXJ5SXRlbShpdGVtOmFueSl7XG4gICAgcmV0dXJuKCAgXG4gICAgICAgICA8ZGl2IGtleSA9IHtpdGVtLmlkICsgJ2dhbGxlcnlJdGVtJ30gY2xhc3NOYW1lID0gXCJnYWxsZXJ5X19pdGVtXCIgPiBcbiAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLmltYWdlLnVybH0gYWx0PVwiXCIvPlxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC9JbmZvQnJlZWRzP2JyZWVkX2lkPSR7aXRlbS5pZH1gfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tYnRuIGJ0blwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PntpdGVtLm5hbWV9PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2Pilcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEdhbGxlcnlCcmVlZHMoZ2FsbGVyeUl0ZW1zOmFueSl7XG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZGlzcGF0Y2gocmVzZXQoKSk7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuKFxuICAgICAgICAgZ2FsbGVyeUl0ZW1zLmxlbmd0aCA/IFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnYWxsZXJ5IGJyZWVkc19fZ2FsbGVyeVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FsbGVyeV9faXRlbXNcIj5cbiAgICAgICAgICAgICAgICAgICAge2dhbGxlcnlJdGVtcy5tYXAoZ2FsbGVyeUl0ZW0pfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgOiBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGRzLXJvbGxlclwiPlxuICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcbiAgICAiXSwibmFtZXMiOlsiTGluayIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlRGlzcGF0Y2giLCJyZXNldCIsImdhbGxlcnlJdGVtIiwiaXRlbSIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImltYWdlIiwidXJsIiwiYWx0IiwiaHJlZiIsImlkIiwibmFtZSIsIkdhbGxlcnlCcmVlZHMiLCJnYWxsZXJ5SXRlbXMiLCJkaXNwYXRjaCIsImxlbmd0aCIsIm1hcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/GelleryBreeds/GalleryBreeds.tsx\n"));

/***/ })

});