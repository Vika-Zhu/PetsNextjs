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

/***/ "(app-pages-browser)/./app/components/SubHeader/SubHeader.tsx":
/*!************************************************!*\
  !*** ./app/components/SubHeader/SubHeader.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SubHeader: function() { return /* binding */ SubHeader; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ SubHeader auto */ \nvar _s = $RefreshSig$();\n\nfunction SubHeader(props) {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"sub-header\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"sub-header__btn sub-header__btn-back svg\",\n                onClick: ()=>router.back()\n            }, void 0, false, {\n                fileName: \"/Users/admin/Desktop/PetsPawNextRepo/PetsPawNextjs/app/components/SubHeader/SubHeader.tsx\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"sub-header__badge \".concat(props.tabname === \"BREEDS\" ? \"badge-breeds\" : \"\"),\n                children: props.text || props.tabname\n            }, void 0, false, {\n                fileName: \"/Users/admin/Desktop/PetsPawNextRepo/PetsPawNextjs/app/components/SubHeader/SubHeader.tsx\",\n                lineNumber: 12,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/admin/Desktop/PetsPawNextRepo/PetsPawNextjs/app/components/SubHeader/SubHeader.tsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n_s(SubHeader, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = SubHeader;\nvar _c;\n$RefreshReg$(_c, \"SubHeader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1N1YkhlYWRlci9TdWJIZWFkZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUUyQztBQUVwQyxTQUFTQyxVQUFVQyxLQUFTOztJQUMvQixNQUFNQyxTQUFTSCwwREFBU0E7SUFFeEIscUJBQ0EsOERBQUNJO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDRDtnQkFBSUMsV0FBVTtnQkFBMkNDLFNBQVMsSUFBTUgsT0FBT0ksSUFBSTs7Ozs7OzBCQUVwRiw4REFBQ0g7Z0JBQUlDLFdBQVcscUJBQXNFLE9BQWpESCxNQUFNTSxPQUFPLEtBQUssV0FBVyxpQkFBaUI7MEJBQzlFTixNQUFNTyxJQUFJLElBQUlQLE1BQU1NLE9BQU87Ozs7Ozs7Ozs7OztBQUl4QztHQVpnQlA7O1FBQ0dELHNEQUFTQTs7O0tBRFpDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL1N1YkhlYWRlci9TdWJIZWFkZXIudHN4P2JlYWMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nXG5cbmV4cG9ydCBmdW5jdGlvbiBTdWJIZWFkZXIocHJvcHM6YW55KXtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICAgIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Yi1oZWFkZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWItaGVhZGVyX19idG4gc3ViLWhlYWRlcl9fYnRuLWJhY2sgc3ZnXCIgb25DbGljaz17KCkgPT4gcm91dGVyLmJhY2soKX0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHN1Yi1oZWFkZXJfX2JhZGdlICR7cHJvcHMudGFibmFtZSA9PT0gJ0JSRUVEUycgPyBcImJhZGdlLWJyZWVkc1wiIDogXCJcIn1gfT5cbiAgICAgICAgICAgIHtwcm9wcy50ZXh0IHx8IHByb3BzLnRhYm5hbWV9XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIClcbn1cbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJTdWJIZWFkZXIiLCJwcm9wcyIsInJvdXRlciIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJiYWNrIiwidGFibmFtZSIsInRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/SubHeader/SubHeader.tsx\n"));

/***/ })

});