webpackHotUpdate_N_E("pages/index",{

/***/ "./components/insta.jsx":
/*!******************************!*\
  !*** ./components/insta.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/config */ \"./node_modules/next/dist/next-server/lib/runtime-config.js\");\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/younghokim/workspace/github/blog/components/insta.jsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar _getConfig = next_config__WEBPACK_IMPORTED_MODULE_2___default()(),\n    publicRuntimeConfig = _getConfig.publicRuntimeConfig;\n\nvar Insta = function Insta() {\n  _s();\n\n  console.log(1, publicRuntimeConfig.ACCESS_TOKEN);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var feed = new Instafeed({\n      accessToken: publicRuntimeConfig.ACCESS_TOKEN,\n      template: '<a href=\"{{link}}\"><img style=\"width: 100px; height: 100px; display: inline-block;\" src={{image}} /></a>'\n    });\n    feed.run();\n  }, []);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }\n  }, __jsx(\"script\", {\n    src: \"https://cdn.jsdelivr.net/gh/stevenschobert/instafeed.js@2.0.0rc1/src/instafeed.min.js\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    id: \"instafeed\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(Insta, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = Insta;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Insta);\n\nvar _c;\n\n$RefreshReg$(_c, \"Insta\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pbnN0YS5qc3g/MDQ3MCJdLCJuYW1lcyI6WyJnZXRDb25maWciLCJwdWJsaWNSdW50aW1lQ29uZmlnIiwiSW5zdGEiLCJjb25zb2xlIiwibG9nIiwiQUNDRVNTX1RPS0VOIiwidXNlRWZmZWN0IiwiZmVlZCIsIkluc3RhZmVlZCIsImFjY2Vzc1Rva2VuIiwidGVtcGxhdGUiLCJydW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7aUJBR2dDQSxrREFBUyxFO0lBQWpDQyxtQixjQUFBQSxtQjs7QUFFUixJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQ2xCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxDQUFaLEVBQWVILG1CQUFtQixDQUFDSSxZQUFuQztBQUNBQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxJQUFJLEdBQUcsSUFBSUMsU0FBSixDQUFjO0FBQ3pCQyxpQkFBVyxFQUFFUixtQkFBbUIsQ0FBQ0ksWUFEUjtBQUV6QkssY0FBUSxFQUFFO0FBRmUsS0FBZCxDQUFiO0FBSUFILFFBQUksQ0FBQ0ksR0FBTDtBQUNELEdBTlEsRUFNTixFQU5NLENBQVQ7QUFRQSxTQUNFLG1FQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVEsT0FBRyxFQUFDLHVGQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBSUU7QUFBSyxNQUFFLEVBQUMsV0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsQ0FERjtBQVNELENBbkJEOztHQUFNVCxLOztLQUFBQSxLO0FBcUJTQSxvRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvaW5zdGEuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgZ2V0Q29uZmlnIGZyb20gJ25leHQvY29uZmlnJ1xuXG5cbmNvbnN0IHsgcHVibGljUnVudGltZUNvbmZpZyB9ID0gZ2V0Q29uZmlnKCk7XG5cbmNvbnN0IEluc3RhID0gKCkgPT4ge1xuICBjb25zb2xlLmxvZygxLCBwdWJsaWNSdW50aW1lQ29uZmlnLkFDQ0VTU19UT0tFTik7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmVlZCA9IG5ldyBJbnN0YWZlZWQoe1xuICAgICAgYWNjZXNzVG9rZW46IHB1YmxpY1J1bnRpbWVDb25maWcuQUNDRVNTX1RPS0VOLFxuICAgICAgdGVtcGxhdGU6ICc8YSBocmVmPVwie3tsaW5rfX1cIj48aW1nIHN0eWxlPVwid2lkdGg6IDEwMHB4OyBoZWlnaHQ6IDEwMHB4OyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XCIgc3JjPXt7aW1hZ2V9fSAvPjwvYT4nXG4gICAgfSk7XG4gICAgZmVlZC5ydW4oKTtcbiAgfSwgW10pO1xuICBcbiAgcmV0dXJuKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvc3RldmVuc2Nob2JlcnQvaW5zdGFmZWVkLmpzQDIuMC4wcmMxL3NyYy9pbnN0YWZlZWQubWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2IGlkPVwiaW5zdGFmZWVkXCI+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5zdGE7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/insta.jsx\n");

/***/ }),

/***/ "./node_modules/process/browser.js":
false

})