"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/InfoBreeds/page",{

/***/ "(app-pages-browser)/./app/servises/cats-api-client.ts":
/*!*****************************************!*\
  !*** ./app/servises/cats-api-client.ts ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   checkIfInFavoritesApi: function() { return /* binding */ checkIfInFavoritesApi; },\n/* harmony export */   deleteFavorite: function() { return /* binding */ deleteFavorite; },\n/* harmony export */   gatImageCat: function() { return /* binding */ gatImageCat; },\n/* harmony export */   getBreeds: function() { return /* binding */ getBreeds; },\n/* harmony export */   getBreedsInfo: function() { return /* binding */ getBreedsInfo; },\n/* harmony export */   getFavorites: function() { return /* binding */ getFavorites; },\n/* harmony export */   getImages: function() { return /* binding */ getImages; },\n/* harmony export */   getInfoBreedGallery: function() { return /* binding */ getInfoBreedGallery; },\n/* harmony export */   getVoted: function() { return /* binding */ getVoted; },\n/* harmony export */   saveFavorites: function() { return /* binding */ saveFavorites; },\n/* harmony export */   submitVote: function() { return /* binding */ submitVote; },\n/* harmony export */   uploadImage: function() { return /* binding */ uploadImage; }\n/* harmony export */ });\nlet myHeaders = new Headers();\nmyHeaders.append(\"Content-Type\", \"application/json\");\nmyHeaders.append(\"x-api-key\", \"live_wiK6XvXiiaaWkigPGBlpfIWQm8GcUQoZ231HgSqBokFzek6teWQFhAKHurcR0agm\");\nlet myHeaders2 = new Headers();\nmyHeaders2.append(\"x-api-key\", \"live_wiK6XvXiiaaWkigPGBlpfIWQm8GcUQoZ231HgSqBokFzek6teWQFhAKHurcR0agm\");\nlet requestOptions = {\n    method: \"GET\",\n    headers: myHeaders,\n    redirect: \"follow\"\n};\nconst getBreeds = (imageCount, uploadDataSort)=>{\n    const apiUrl = \"https://api.thecatapi.com/v1/breeds?limit=\".concat(imageCount, \"&order=\").concat(uploadDataSort);\n    return fetch(apiUrl, requestOptions).then((response)=>response.json()).catch((error)=>console.log(\"error\", error));\n};\nconst getImages = (props)=>{\n    const { breedFilter, imageCount, uploadDataSort, typeImage } = props;\n    const apiUrl = \"https://api.thecatapi.com/v1/images/search?breed_ids=\".concat(breedFilter, \"&limit=\").concat(imageCount, \"&order=\").concat(uploadDataSort, \"&mime_types=\").concat(typeImage);\n    return fetch(apiUrl, requestOptions).then((response)=>response.json()).catch((error)=>console.log(\"error\", error));\n};\nconst getBreedsInfo = (breedId)=>{\n    const apiUrl = \"https://api.thecatapi.com/v1/breeds/\".concat(breedId);\n    return fetch(apiUrl, requestOptions).then((response)=>response.json()).catch((error)=>console.log(\"error\", error));\n};\nconst getInfoBreedGallery = (queryParams)=>{\n    const { breedName } = queryParams;\n    const apiUrl = \"https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=\".concat(breedName);\n    return fetch(apiUrl, requestOptions).then((response)=>response.json()).catch((error)=>console.log(\"error\", error));\n};\nconst gatImageCat = ()=>{\n    const apiUrl = \"https://api.thecatapi.com/v1/images/search\";\n    return fetch(apiUrl, requestOptions).then((response)=>response.json()).catch((error)=>console.log(\"error\", error));\n};\nconst submitVote = (imageID, value)=>{\n    const apiUrl = \"https://api.thecatapi.com/v1/votes\";\n    const requestOptionsPost = {\n        method: \"POST\",\n        headers: myHeaders,\n        redirect: \"follow\",\n        body: JSON.stringify({\n            image_id: imageID,\n            sub_id: \"optional_unique_user_id\",\n            value: value\n        })\n    };\n    return fetch(apiUrl, requestOptionsPost).then((response)=>response.json()).catch((error)=>console.log(\"error\", error));\n};\nconst getVoted = ()=>{\n    const apiUrl = \"https://api.thecatapi.com/v1/votes\";\n    return fetch(apiUrl, requestOptions).then((response)=>response.json()).catch((error)=>console.log(\"error\", error));\n};\nconst saveFavorites = (imageID)=>{\n    const apiUrl = \"https://api.thecatapi.com/v1/favourites\";\n    const requestOptionsPost = {\n        method: \"POST\",\n        headers: myHeaders,\n        redirect: \"follow\",\n        body: JSON.stringify({\n            image_id: imageID,\n            sub_id: \"user-007\"\n        })\n    };\n    return fetch(apiUrl, requestOptionsPost).then((response)=>response.json()).catch((error)=>console.log(\"error\", error));\n};\nconst getFavorites = ()=>{\n    const apiUrl = \"https://api.thecatapi.com/v1/favourites\";\n    return fetch(apiUrl, requestOptions).then((response)=>response.json()).catch((error)=>console.log(\"error\", error));\n};\nconst checkIfInFavoritesApi = (imageId)=>{\n    const apiUrl = \"https://api.thecatapi.com/v1/favourites/\".concat(imageId);\n    return fetch(apiUrl, requestOptions).then((response)=>response.json()).then((data)=>data.length > 0).catch((error)=>{\n        console.log(\"error\", error);\n        return false;\n    });\n};\nconst deleteFavorite = (favoriteID)=>{\n    const apiUrl = \"https://api.thecatapi.com/v1/favourites/\".concat(favoriteID);\n    const requestOptionsPost = {\n        method: \"DELETE\",\n        headers: myHeaders\n    };\n    return fetch(apiUrl, requestOptionsPost).then((response)=>response.json()).catch((error)=>console.log(\"error\", error));\n};\nconst uploadImage = async (selectedFile)=>{\n    const apiUrl = \"https://api.thecatapi.com/v1/images/upload\";\n    let data = new FormData();\n    data.append(\"file\", selectedFile);\n    data.append(\"sub_id\", \"my_id_007\");\n    data.append(\"breed_id\", \"test\");\n    const requestOptionsPost = {\n        method: \"POST\",\n        headers: myHeaders2,\n        redirect: \"follow\",\n        body: data\n    };\n    return await fetch(apiUrl, requestOptionsPost);\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9zZXJ2aXNlcy9jYXRzLWFwaS1jbGllbnQudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsWUFBWSxJQUFJQztBQUNwQkQsVUFBVUUsTUFBTSxDQUFDLGdCQUFnQjtBQUNqQ0YsVUFBVUUsTUFBTSxDQUFDLGFBQWE7QUFFOUIsSUFBSUMsYUFBYSxJQUFJRjtBQUNyQkUsV0FBV0QsTUFBTSxDQUFDLGFBQWE7QUFFL0IsSUFBSUUsaUJBQXFCO0lBQ3ZCQyxRQUFRO0lBQ1JDLFNBQVNOO0lBQ1RPLFVBQVU7QUFDWjtBQUVPLE1BQU1DLFlBQVksQ0FBQ0MsWUFBZ0JDO0lBQ3hDLE1BQU1DLFNBQVMsNkNBQWlFRCxPQUFwQkQsWUFBVyxXQUF3QixPQUFmQztJQUVoRixPQUFPRSxNQUFNRCxRQUFRUCxnQkFDcEJTLElBQUksQ0FBQ0MsQ0FBQUEsV0FBWUEsU0FBU0MsSUFBSSxJQUM5QkMsS0FBSyxDQUFDQyxDQUFBQSxRQUFTQyxRQUFRQyxHQUFHLENBQUMsU0FBU0Y7QUFDdkMsRUFBQztBQUVNLE1BQU1HLFlBQVksQ0FBQ0M7SUFDeEIsTUFBTSxFQUFFQyxXQUFXLEVBQUViLFVBQVUsRUFBRUMsY0FBYyxFQUFFYSxTQUFTLEVBQUMsR0FBR0Y7SUFDOUQsTUFBTVYsU0FBUyx3REFBNkVGLE9BQXJCYSxhQUFZLFdBQTZCWixPQUFwQkQsWUFBVyxXQUFzQ2MsT0FBN0JiLGdCQUFlLGdCQUF3QixPQUFWYTtJQUU3SSxPQUFPWCxNQUFNRCxRQUFRUCxnQkFDcEJTLElBQUksQ0FBQ0MsQ0FBQUEsV0FBWUEsU0FBU0MsSUFBSSxJQUM5QkMsS0FBSyxDQUFDQyxDQUFBQSxRQUFTQyxRQUFRQyxHQUFHLENBQUMsU0FBU0Y7QUFDdkMsRUFBRTtBQUVLLE1BQU1PLGdCQUFnQixDQUFDQztJQUM1QixNQUFNZCxTQUFTLHVDQUErQyxPQUFSYztJQUV0RCxPQUFPYixNQUFNRCxRQUFRUCxnQkFDcEJTLElBQUksQ0FB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QUFBLFdBQVlBLFNBQVNDLElBQUksSUFDOUJDLEtBQUssQ0FBQ0MsQ0FBQUEsUUFBU0MsUUFBUUMsR0FBRyxDQUFDLFNBQVNGO0FBRXpDLEVBQUU7QUFHSyxNQUFNK0IsY0FBYyxPQUFPQztJQUNoQyxNQUFNdEMsU0FBUztJQUVmLElBQUlpQyxPQUFPLElBQUlNO0lBQ2ZOLEtBQUsxQyxNQUFNLENBQUMsUUFBUStDO0lBQ3BCTCxLQUFLMUMsTUFBTSxDQUFDLFVBQVU7SUFDdEIwQyxLQUFLMUMsTUFBTSxDQUFDLFlBQVk7SUFFeEIsTUFBTStCLHFCQUFxQjtRQUN6QjVCLFFBQVE7UUFDUkMsU0FBU0g7UUFDVEksVUFBVTtRQUNWMkIsTUFBS1U7SUFFUDtJQUNBLE9BQU8sTUFBTWhDLE1BQU1ELFFBQVFzQjtBQUM3QixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9zZXJ2aXNlcy9jYXRzLWFwaS1jbGllbnQudHM/YTk1NiJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgbXlIZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbm15SGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xubXlIZWFkZXJzLmFwcGVuZChcIngtYXBpLWtleVwiLCBcImxpdmVfd2lLNlh2WGlpYWFXa2lnUEdCbHBmSVdRbThHY1VRb1oyMzFIZ1NxQm9rRnplazZ0ZVdRRmhBS0h1cmNSMGFnbVwiKTtcblxubGV0IG15SGVhZGVyczIgPSBuZXcgSGVhZGVycygpO1xubXlIZWFkZXJzMi5hcHBlbmQoXCJ4LWFwaS1rZXlcIiwgXCJsaXZlX3dpSzZYdlhpaWFhV2tpZ1BHQmxwZklXUW04R2NVUW9aMjMxSGdTcUJva0Z6ZWs2dGVXUUZoQUtIdXJjUjBhZ21cIik7XG5cbmxldCByZXF1ZXN0T3B0aW9uczphbnkgPSB7XG4gIG1ldGhvZDogJ0dFVCcsXG4gIGhlYWRlcnM6IG15SGVhZGVycyxcbiAgcmVkaXJlY3Q6ICdmb2xsb3cnXG59O1xuXG5leHBvcnQgY29uc3QgZ2V0QnJlZWRzID0gKGltYWdlQ291bnQ6YW55LCB1cGxvYWREYXRhU29ydDphbnkpID0+IHtcbiAgY29uc3QgYXBpVXJsID0gYGh0dHBzOi8vYXBpLnRoZWNhdGFwaS5jb20vdjEvYnJlZWRzP2xpbWl0PSR7aW1hZ2VDb3VudH0mb3JkZXI9JHt1cGxvYWREYXRhU29ydH1gO1xuXG4gIHJldHVybiBmZXRjaChhcGlVcmwsIHJlcXVlc3RPcHRpb25zKVxuICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZygnZXJyb3InLCBlcnJvcikpO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0SW1hZ2VzID0gKHByb3BzOmFueSkgPT4ge1xuICBjb25zdCB7IGJyZWVkRmlsdGVyLCBpbWFnZUNvdW50LCB1cGxvYWREYXRhU29ydCwgdHlwZUltYWdlfSA9IHByb3BzO1xuICBjb25zdCBhcGlVcmwgPSBgaHR0cHM6Ly9hcGkudGhlY2F0YXBpLmNvbS92MS9pbWFnZXMvc2VhcmNoP2JyZWVkX2lkcz0ke2JyZWVkRmlsdGVyfSZsaW1pdD0ke2ltYWdlQ291bnR9Jm9yZGVyPSR7dXBsb2FkRGF0YVNvcnR9Jm1pbWVfdHlwZXM9JHt0eXBlSW1hZ2V9YFxuXG4gIHJldHVybiBmZXRjaChhcGlVcmwsIHJlcXVlc3RPcHRpb25zKVxuICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZygnZXJyb3InLCBlcnJvcikpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEJyZWVkc0luZm8gPSAoYnJlZWRJZDphbnkpID0+IHtcbiAgY29uc3QgYXBpVXJsID0gYGh0dHBzOi8vYXBpLnRoZWNhdGFwaS5jb20vdjEvYnJlZWRzLyR7YnJlZWRJZH1gXG5cbiAgcmV0dXJuIGZldGNoKGFwaVVybCwgcmVxdWVzdE9wdGlvbnMpXG4gIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKCdlcnJvcicsIGVycm9yKSk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0SW5mb0JyZWVkR2FsbGVyeSA9IChxdWVyeVBhcmFtczphbnkpID0+IHtcbiAgY29uc3Qge2JyZWVkTmFtZX0gPSBxdWVyeVBhcmFtcztcbiAgY29uc3QgYXBpVXJsID0gYGh0dHBzOi8vYXBpLnRoZWNhdGFwaS5jb20vdjEvaW1hZ2VzL3NlYXJjaD9saW1pdD0xMCZicmVlZF9pZHM9JHticmVlZE5hbWV9YFxuXG4gIHJldHVybiBmZXRjaChhcGlVcmwsIHJlcXVlc3RPcHRpb25zKVxuICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZygnZXJyb3InLCBlcnJvcikpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdhdEltYWdlQ2F0ID0gKCkgPT4ge1xuICBjb25zdCBhcGlVcmwgPSBgaHR0cHM6Ly9hcGkudGhlY2F0YXBpLmNvbS92MS9pbWFnZXMvc2VhcmNoYDtcblxuICByZXR1cm4gZmV0Y2goYXBpVXJsLCByZXF1ZXN0T3B0aW9ucylcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKCdlcnJvcicsIGVycm9yKSk7XG59XG5cbmV4cG9ydCBjb25zdCBzdWJtaXRWb3RlID0gKGltYWdlSUQ6YW55LCB2YWx1ZTphbnkpID0+IHtcbiAgY29uc3QgYXBpVXJsID0gJ2h0dHBzOi8vYXBpLnRoZWNhdGFwaS5jb20vdjEvdm90ZXMnO1xuXG4gIGNvbnN0IHJlcXVlc3RPcHRpb25zUG9zdCA9IHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiBteUhlYWRlcnMsXG4gICAgcmVkaXJlY3Q6ICdmb2xsb3cnIGFzIFJlcXVlc3RSZWRpcmVjdCxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBpbWFnZV9pZDogaW1hZ2VJRCxcbiAgICAgIHN1Yl9pZDogJ29wdGlvbmFsX3VuaXF1ZV91c2VyX2lkJyxcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICB9KSxcbiAgfTtcblxuICByZXR1cm4gZmV0Y2goYXBpVXJsLCByZXF1ZXN0T3B0aW9uc1Bvc3QpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZygnZXJyb3InLCBlcnJvcikpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFZvdGVkID0gKCkgPT4ge1xuICBjb25zdCBhcGlVcmwgPSBgaHR0cHM6Ly9hcGkudGhlY2F0YXBpLmNvbS92MS92b3Rlc2A7XG5cbiAgcmV0dXJuIGZldGNoKGFwaVVybCwgcmVxdWVzdE9wdGlvbnMpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZygnZXJyb3InLCBlcnJvcikpO1xufVxuXG5cbmV4cG9ydCBjb25zdCBzYXZlRmF2b3JpdGVzID0gKGltYWdlSUQ6YW55KSA9PiB7XG4gIGNvbnN0IGFwaVVybCA9ICdodHRwczovL2FwaS50aGVjYXRhcGkuY29tL3YxL2Zhdm91cml0ZXMnO1xuXG4gIGNvbnN0IHJlcXVlc3RPcHRpb25zUG9zdCA9IHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiBteUhlYWRlcnMsXG4gICAgcmVkaXJlY3Q6ICdmb2xsb3cnIGFzIFJlcXVlc3RSZWRpcmVjdCxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBpbWFnZV9pZDogaW1hZ2VJRCxcbiAgICAgIHN1Yl9pZDogJ3VzZXItMDA3J1xuICAgIH0pLFxuICB9O1xuICByZXR1cm4gZmV0Y2goYXBpVXJsLCByZXF1ZXN0T3B0aW9uc1Bvc3QpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZygnZXJyb3InLCBlcnJvcikpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEZhdm9yaXRlcyA9ICgpID0+IHtcbiAgY29uc3QgYXBpVXJsID0gYGh0dHBzOi8vYXBpLnRoZWNhdGFwaS5jb20vdjEvZmF2b3VyaXRlc2A7XG5cbiAgcmV0dXJuIGZldGNoKGFwaVVybCwgcmVxdWVzdE9wdGlvbnMpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZygnZXJyb3InLCBlcnJvcikpO1xufVxuXG5leHBvcnQgY29uc3QgY2hlY2tJZkluRmF2b3JpdGVzQXBpID0gKGltYWdlSWQ6YW55KSA9PiB7XG4gIGNvbnN0IGFwaVVybCA9IGBodHRwczovL2FwaS50aGVjYXRhcGkuY29tL3YxL2Zhdm91cml0ZXMvJHtpbWFnZUlkfWA7XG5cbiAgcmV0dXJuIGZldGNoKGFwaVVybCwgcmVxdWVzdE9wdGlvbnMpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKGRhdGEgPT4gZGF0YS5sZW5ndGggPiAwKVxuICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnZXJyb3InLCBlcnJvcilcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGNvbnN0IGRlbGV0ZUZhdm9yaXRlID0gKGZhdm9yaXRlSUQ6YW55KSA9PiB7XG4gIGNvbnN0IGFwaVVybCA9IGBodHRwczovL2FwaS50aGVjYXRhcGkuY29tL3YxL2Zhdm91cml0ZXMvJHtmYXZvcml0ZUlEfWA7XG5cbiAgY29uc3QgcmVxdWVzdE9wdGlvbnNQb3N0ID0ge1xuICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgaGVhZGVyczogbXlIZWFkZXJzLFxuICB9O1xuXG4gIHJldHVybiBmZXRjaChhcGlVcmwsIHJlcXVlc3RPcHRpb25zUG9zdClcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKCdlcnJvcicsIGVycm9yKSk7XG4gICAgXG59O1xuXG5cbmV4cG9ydCBjb25zdCB1cGxvYWRJbWFnZSA9IGFzeW5jIChzZWxlY3RlZEZpbGU6YW55KSA9PiB7XG4gIGNvbnN0IGFwaVVybCA9ICdodHRwczovL2FwaS50aGVjYXRhcGkuY29tL3YxL2ltYWdlcy91cGxvYWQnO1xuICBcbiAgbGV0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgZGF0YS5hcHBlbmQoJ2ZpbGUnLCBzZWxlY3RlZEZpbGUpO1xuICBkYXRhLmFwcGVuZCgnc3ViX2lkJywgJ215X2lkXzAwNycpO1xuICBkYXRhLmFwcGVuZCgnYnJlZWRfaWQnLCAndGVzdCcpO1xuXG4gIGNvbnN0IHJlcXVlc3RPcHRpb25zUG9zdCA9IHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiBteUhlYWRlcnMyLFxuICAgIHJlZGlyZWN0OiAnZm9sbG93JyBhcyBSZXF1ZXN0UmVkaXJlY3QsXG4gICAgYm9keTpkYXRhIFxuICAgIFxuICB9O1xuICByZXR1cm4gYXdhaXQgZmV0Y2goYXBpVXJsLCByZXF1ZXN0T3B0aW9uc1Bvc3QpXG59O1xuIl0sIm5hbWVzIjpbIm15SGVhZGVycyIsIkhlYWRlcnMiLCJhcHBlbmQiLCJteUhlYWRlcnMyIiwicmVxdWVzdE9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwicmVkaXJlY3QiLCJnZXRCcmVlZHMiLCJpbWFnZUNvdW50IiwidXBsb2FkRGF0YVNvcnQiLCJhcGlVcmwiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImdldEltYWdlcyIsInByb3BzIiwiYnJlZWRGaWx0ZXIiLCJ0eXBlSW1hZ2UiLCJnZXRCcmVlZHNJbmZvIiwiYnJlZWRJZCIsImdldEluZm9CcmVlZEdhbGxlcnkiLCJxdWVyeVBhcmFtcyIsImJyZWVkTmFtZSIsImdhdEltYWdlQ2F0Iiwic3VibWl0Vm90ZSIsImltYWdlSUQiLCJ2YWx1ZSIsInJlcXVlc3RPcHRpb25zUG9zdCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaW1hZ2VfaWQiLCJzdWJfaWQiLCJnZXRWb3RlZCIsInNhdmVGYXZvcml0ZXMiLCJnZXRGYXZvcml0ZXMiLCJjaGVja0lmSW5GYXZvcml0ZXNBcGkiLCJpbWFnZUlkIiwiZGF0YSIsImxlbmd0aCIsImRlbGV0ZUZhdm9yaXRlIiwiZmF2b3JpdGVJRCIsInVwbG9hZEltYWdlIiwic2VsZWN0ZWRGaWxlIiwiRm9ybURhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/servises/cats-api-client.ts\n"));

/***/ })

});