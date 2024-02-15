"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/Voting/page",{

/***/ "(app-pages-browser)/./app/Voting/page.tsx":
/*!*****************************!*\
  !*** ./app/Voting/page.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_MainLeft_MainLeft__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MainLeft/MainLeft */ \"(app-pages-browser)/./app/components/MainLeft/MainLeft.tsx\");\n/* harmony import */ var _components_RightHeader_RightHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/RightHeader/RightHeader */ \"(app-pages-browser)/./app/components/RightHeader/RightHeader.tsx\");\n/* harmony import */ var _components_SubHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SubHeader */ \"(app-pages-browser)/./app/components/SubHeader/index.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _servises_cats_api_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/servises/cats-api-client */ \"(app-pages-browser)/./app/servises/cats-api-client.ts\");\n/* harmony import */ var _components_VoteButtons_VoteButtons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/VoteButtons/VoteButtons */ \"(app-pages-browser)/./app/components/VoteButtons/VoteButtons.tsx\");\n/* harmony import */ var _components_LogsList_LogsList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/LogsList/LogsList */ \"(app-pages-browser)/./app/components/LogsList/LogsList.tsx\");\n/* harmony import */ var _GlobalRedux_filterGallerySlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../GlobalRedux/filterGallerySlice */ \"(app-pages-browser)/./app/GlobalRedux/filterGallerySlice.ts\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/es/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const tabname = \"VOTING\";\n    const [imageCat, setImageCat] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({});\n    const [votedResults, setVotedResults] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const isModalHomeOpen = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector)(_GlobalRedux_filterGallerySlice__WEBPACK_IMPORTED_MODULE_8__.selectIsModalHomeOpen);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        (0,_servises_cats_api_client__WEBPACK_IMPORTED_MODULE_5__.gatImageCat)().then((res)=>{\n            setImageCat(res[0]);\n        });\n        (0,_servises_cats_api_client__WEBPACK_IMPORTED_MODULE_5__.getVoted)().then((res)=>{\n            setVotedResults(res);\n        });\n    }, []);\n    const handleVote = (voteValue)=>{\n        (0,_servises_cats_api_client__WEBPACK_IMPORTED_MODULE_5__.submitVote)(imageCat.id, voteValue).then(()=>{\n            (0,_servises_cats_api_client__WEBPACK_IMPORTED_MODULE_5__.getVoted)().then((res)=>{\n                setVotedResults(res);\n                (0,_servises_cats_api_client__WEBPACK_IMPORTED_MODULE_5__.gatImageCat)().then((newImage)=>{\n                    setImageCat(newImage[0]);\n                });\n            });\n        });\n    };\n    const handleSaveFavorites = ()=>{\n        (0,_servises_cats_api_client__WEBPACK_IMPORTED_MODULE_5__.saveFavorites)(imageCat.id);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"main\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container right-blok\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"main__row\",\n                children: [\n                    (0,_components_MainLeft_MainLeft__WEBPACK_IMPORTED_MODULE_1__.MainLeft)(),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"main-right\",\n                        children: [\n                            (0,_components_RightHeader_RightHeader__WEBPACK_IMPORTED_MODULE_2__.RightHeader)(),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"right__content voting\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"content__header\",\n                                        children: (0,_components_SubHeader__WEBPACK_IMPORTED_MODULE_3__.SubHeader)({\n                                            tabname\n                                        })\n                                    }, void 0, false, {\n                                        fileName: \"/Users/admin/Desktop/PetsPawNextRepo/PetsPawNextjs/app/Voting/page.tsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"voting__foto\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: imageCat.url,\n                                            alt: \"\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/admin/Desktop/PetsPawNextRepo/PetsPawNextjs/app/Voting/page.tsx\",\n                                            lineNumber: 58,\n                                            columnNumber: 29\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/admin/Desktop/PetsPawNextRepo/PetsPawNextjs/app/Voting/page.tsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 25\n                                    }, this),\n                                    (0,_components_VoteButtons_VoteButtons__WEBPACK_IMPORTED_MODULE_6__.VoteButtons)(handleVote, handleSaveFavorites),\n                                    (0,_components_LogsList_LogsList__WEBPACK_IMPORTED_MODULE_7__.LogsList)(votedResults)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/admin/Desktop/PetsPawNextRepo/PetsPawNextjs/app/Voting/page.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/admin/Desktop/PetsPawNextRepo/PetsPawNextjs/app/Voting/page.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 17\n                    }, this),\n                    isModalHomeOpenModalHome()\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/admin/Desktop/PetsPawNextRepo/PetsPawNextjs/app/Voting/page.tsx\",\n                lineNumber: 49,\n                columnNumber: 13\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/admin/Desktop/PetsPawNextRepo/PetsPawNextjs/app/Voting/page.tsx\",\n            lineNumber: 48,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/admin/Desktop/PetsPawNextRepo/PetsPawNextjs/app/Voting/page.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"tDnAOtzxXJSWnYBz5SMSBRbwz8E=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9Wb3RpbmcvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFd0Q7QUFDUztBQUNoQjtBQUVMO0FBQ2U7QUFDUztBQUNpQjtBQUMxQjtBQUNlO0FBQ2hDO0FBRzNCLFNBQVNhOztJQUNwQixNQUFNQyxVQUFVO0lBQ2hCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHWiwrQ0FBUUEsQ0FBTSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ2EsY0FBY0MsZ0JBQWdCLEdBQUdkLCtDQUFRQSxDQUFDLEVBQUU7SUFDbkQsTUFBTWUsa0JBQWtCUCx3REFBV0EsQ0FBQ0Qsa0ZBQXFCQTtJQUV6RFIsZ0RBQVNBLENBQUM7UUFDTkUsc0VBQVdBLEdBQUdlLElBQUksQ0FBQyxDQUFDQztZQUNsQkwsWUFBWUssR0FBRyxDQUFDLEVBQUU7UUFDcEI7UUFDQWIsbUVBQVFBLEdBQUdZLElBQUksQ0FBQyxDQUFDQztZQUNiSCxnQkFBZ0JHO1FBQ3BCO0lBQ0osR0FBRyxFQUFFO0lBRUwsTUFBTUMsYUFBYSxDQUFDQztRQUNoQmhCLHFFQUFVQSxDQUFDUSxTQUFTUyxFQUFFLEVBQUVELFdBQVdILElBQUksQ0FBQztZQUNwQ1osbUVBQVFBLEdBQUdZLElBQUksQ0FBQyxDQUFDQztnQkFDYkgsZ0JBQWdCRztnQkFDaEJoQixzRUFBV0EsR0FBR2UsSUFBSSxDQUFDLENBQUNLO29CQUNoQlQsWUFBWVMsUUFBUSxDQUFDLEVBQUU7Z0JBQzNCO1lBQ0o7UUFDSjtJQUNKO0lBRUEsTUFBTUMsc0JBQXNCO1FBQ3hCakIsd0VBQWFBLENBQUNNLFNBQVNTLEVBQUU7SUFDN0I7SUFFRixxQkFDRSw4REFBQ0c7UUFBS0MsV0FBVTtrQkFDWiw0RUFBQ0M7WUFBSUQsV0FBVTtzQkFDWCw0RUFBQ0M7Z0JBQUlELFdBQVU7O29CQUNWNUIsdUVBQVFBO2tDQUNULDhEQUFDNkI7d0JBQUlELFdBQVU7OzRCQUNWM0IsZ0ZBQVdBOzBDQUNaLDhEQUFDNEI7Z0NBQUlELFdBQVU7O2tEQUNYLDhEQUFDQzt3Q0FBSUQsV0FBVTtrREFDZDFCLGdFQUFTQSxDQUFDOzRDQUFDWTt3Q0FBTzs7Ozs7O2tEQUVuQiw4REFBQ2U7d0NBQUlELFdBQVU7a0RBQ1gsNEVBQUNFOzRDQUFJQyxLQUFLaEIsU0FBU2lCLEdBQUc7NENBQUVDLEtBQUk7Ozs7Ozs7Ozs7O29DQUUvQjNCLGdGQUFXQSxDQUFDZ0IsWUFBWUk7b0NBQ3hCaEIsdUVBQVFBLENBQUNPOzs7Ozs7Ozs7Ozs7O29CQUdqQmlCOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtqQjtHQXJEd0JyQjs7UUFJSUQsb0RBQVdBOzs7S0FKZkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL1ZvdGluZy9wYWdlLnRzeD85YzEwIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0e01haW5MZWZ0fSBmcm9tICcuLi9jb21wb25lbnRzL01haW5MZWZ0L01haW5MZWZ0JztcbmltcG9ydHtSaWdodEhlYWRlcn0gZnJvbSAnLi4vY29tcG9uZW50cy9SaWdodEhlYWRlci9SaWdodEhlYWRlcic7XG5pbXBvcnR7U3ViSGVhZGVyfSBmcm9tICcuLi9jb21wb25lbnRzL1N1YkhlYWRlcic7XG5pbXBvcnR7TW9kYWxIb21lfSBmcm9tICcuLi9jb21wb25lbnRzL01vZGFsSG9tZS9Nb2RhbEhvbWUnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGdhdEltYWdlQ2F0ICB9IGZyb20gJy4uL3NlcnZpc2VzL2NhdHMtYXBpLWNsaWVudCc7XG5pbXBvcnQgeyBWb3RlQnV0dG9ucyB9IGZyb20gJy4uL2NvbXBvbmVudHMvVm90ZUJ1dHRvbnMvVm90ZUJ1dHRvbnMnO1xuaW1wb3J0IHsgc3VibWl0Vm90ZSwgZ2V0Vm90ZWQsIHNhdmVGYXZvcml0ZXMgfSBmcm9tICdAL2FwcC9zZXJ2aXNlcy9jYXRzLWFwaS1jbGllbnQnO1xuaW1wb3J0IHsgTG9nc0xpc3QgfSBmcm9tICcuLi9jb21wb25lbnRzL0xvZ3NMaXN0L0xvZ3NMaXN0JztcbmltcG9ydCB7IHNlbGVjdElzTW9kYWxIb21lT3BlbiB9IGZyb20gJy4uL0dsb2JhbFJlZHV4L2ZpbHRlckdhbGxlcnlTbGljZSc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICAgIGNvbnN0IHRhYm5hbWUgPSBcIlZPVElOR1wiO1xuICAgIGNvbnN0IFtpbWFnZUNhdCwgc2V0SW1hZ2VDYXRdID0gdXNlU3RhdGU8YW55Pih7fSk7XG4gICAgY29uc3QgW3ZvdGVkUmVzdWx0cywgc2V0Vm90ZWRSZXN1bHRzXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBpc01vZGFsSG9tZU9wZW4gPSB1c2VTZWxlY3RvcihzZWxlY3RJc01vZGFsSG9tZU9wZW4pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZ2F0SW1hZ2VDYXQoKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICBzZXRJbWFnZUNhdChyZXNbMF0pO1xuICAgICAgICB9KTtcbiAgICAgICAgZ2V0Vm90ZWQoKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIHNldFZvdGVkUmVzdWx0cyhyZXMpO1xuICAgICAgICB9KTtcbiAgICB9LCBbXSk7XG5cbiAgICBjb25zdCBoYW5kbGVWb3RlID0gKHZvdGVWYWx1ZTogbnVtYmVyKSA9PiB7XG4gICAgICAgIHN1Ym1pdFZvdGUoaW1hZ2VDYXQuaWQsIHZvdGVWYWx1ZSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBnZXRWb3RlZCgpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIHNldFZvdGVkUmVzdWx0cyhyZXMpO1xuICAgICAgICAgICAgICAgIGdhdEltYWdlQ2F0KCkudGhlbigobmV3SW1hZ2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0SW1hZ2VDYXQobmV3SW1hZ2VbMF0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZVNhdmVGYXZvcml0ZXMgPSAoKSA9PiB7XG4gICAgICAgIHNhdmVGYXZvcml0ZXMoaW1hZ2VDYXQuaWQpXG4gICAgfTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcmlnaHQtYmxva1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluX19yb3dcIj5cbiAgICAgICAgICAgICAgICB7TWFpbkxlZnQoKX1cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAge1JpZ2h0SGVhZGVyKCl9XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRfX2NvbnRlbnQgdm90aW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2hlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge1N1YkhlYWRlcih7dGFibmFtZX0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZvdGluZ19fZm90b1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZUNhdC51cmx9IGFsdD1cIlwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAge1ZvdGVCdXR0b25zKGhhbmRsZVZvdGUsIGhhbmRsZVNhdmVGYXZvcml0ZXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAge0xvZ3NMaXN0KHZvdGVkUmVzdWx0cyl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHtpc01vZGFsSG9tZU9wZW5Nb2RhbEhvbWUoKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L21haW4+XG4gIClcbn0iXSwibmFtZXMiOlsiTWFpbkxlZnQiLCJSaWdodEhlYWRlciIsIlN1YkhlYWRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZ2F0SW1hZ2VDYXQiLCJWb3RlQnV0dG9ucyIsInN1Ym1pdFZvdGUiLCJnZXRWb3RlZCIsInNhdmVGYXZvcml0ZXMiLCJMb2dzTGlzdCIsInNlbGVjdElzTW9kYWxIb21lT3BlbiIsInVzZVNlbGVjdG9yIiwiSG9tZSIsInRhYm5hbWUiLCJpbWFnZUNhdCIsInNldEltYWdlQ2F0Iiwidm90ZWRSZXN1bHRzIiwic2V0Vm90ZWRSZXN1bHRzIiwiaXNNb2RhbEhvbWVPcGVuIiwidGhlbiIsInJlcyIsImhhbmRsZVZvdGUiLCJ2b3RlVmFsdWUiLCJpZCIsIm5ld0ltYWdlIiwiaGFuZGxlU2F2ZUZhdm9yaXRlcyIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJpbWciLCJzcmMiLCJ1cmwiLCJhbHQiLCJpc01vZGFsSG9tZU9wZW5Nb2RhbEhvbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/Voting/page.tsx\n"));

/***/ })

});