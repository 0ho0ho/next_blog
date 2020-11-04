webpackHotUpdate_N_E("pages/index",{

/***/ "./components/post-preview.tsx":
/*!*************************************!*\
  !*** ./components/post-preview.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _date_formatter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date-formatter */ \"./components/date-formatter.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/younghokim/workspace/github/blog/components/post-preview.tsx\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar PostPreview = function PostPreview(_ref) {\n  var title = _ref.title,\n      date = _ref.date,\n      excerpt = _ref.excerpt,\n      slug = _ref.slug;\n  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    as: \"/posts/\".concat(slug),\n    href: \"/posts/[slug]\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 5\n    }\n  }, __jsx(\"a\", {\n    className: \"hover:shadow-medium transition-shadow duration-200 w-2/3 m-auto\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"p-6\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 9\n    }\n  }, __jsx(\"h3\", {\n    className: \"text-2xl mb-2 leading-snug font-medium text-gray-800\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 11\n    }\n  }, __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 13\n    }\n  }, title)), __jsx(\"p\", {\n    className: \"text-sm mb-2 text-gray-700 font-normal\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 11\n    }\n  }, excerpt), __jsx(\"div\", {\n    className: \"text-sm text-gray-700\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 11\n    }\n  }, __jsx(_date_formatter__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    dateString: date,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }\n  })))));\n};\n\n_c = PostPreview;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostPreview);\n\nvar _c;\n\n$RefreshReg$(_c, \"PostPreview\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wb3N0LXByZXZpZXcudHN4P2NhNjciXSwibmFtZXMiOlsiUG9zdFByZXZpZXciLCJ0aXRsZSIsImRhdGUiLCJleGNlcnB0Iiwic2x1ZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUVBOztBQVVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQTJDO0FBQUEsTUFBeENDLEtBQXdDLFFBQXhDQSxLQUF3QztBQUFBLE1BQWpDQyxJQUFpQyxRQUFqQ0EsSUFBaUM7QUFBQSxNQUEzQkMsT0FBMkIsUUFBM0JBLE9BQTJCO0FBQUEsTUFBbEJDLElBQWtCLFFBQWxCQSxJQUFrQjtBQUM3RCxTQUNFLE1BQUMsZ0RBQUQ7QUFBTSxNQUFFLG1CQUFZQSxJQUFaLENBQVI7QUFBNEIsUUFBSSxFQUFDLGVBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxpRUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsc0RBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSUgsS0FBSixDQURGLENBREYsRUFJRTtBQUFHLGFBQVMsRUFBQyx3Q0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXVERSxPQUF2RCxDQUpGLEVBS0U7QUFBSyxhQUFTLEVBQUMsdUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsdURBQUQ7QUFBZSxjQUFVLEVBQUVELElBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUxGLENBREYsQ0FERixDQURGO0FBZUQsQ0FoQkQ7O0tBQU1GLFc7QUFrQlNBLDBFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9wb3N0LXByZXZpZXcudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERhdGVGb3JtYXR0ZXIgZnJvbSBcIi4vZGF0ZS1mb3JtYXR0ZXJcIjtcbmltcG9ydCBDb3ZlckltYWdlIGZyb20gXCIuL2NvdmVyLWltYWdlXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGNvdmVySW1hZ2U6IHN0cmluZztcbiAgZGF0ZTogc3RyaW5nO1xuICBleGNlcnB0OiBzdHJpbmc7XG4gIHNsdWc6IHN0cmluZztcbn07XG5cbmNvbnN0IFBvc3RQcmV2aWV3ID0gKHsgdGl0bGUsIGRhdGUsIGV4Y2VycHQsIHNsdWcgfTogUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TGluayBhcz17YC9wb3N0cy8ke3NsdWd9YH0gaHJlZj1cIi9wb3N0cy9bc2x1Z11cIj5cbiAgICAgIDxhIGNsYXNzTmFtZT1cImhvdmVyOnNoYWRvdy1tZWRpdW0gdHJhbnNpdGlvbi1zaGFkb3cgZHVyYXRpb24tMjAwIHctMi8zIG0tYXV0b1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNlwiPlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBtYi0yIGxlYWRpbmctc251ZyBmb250LW1lZGl1bSB0ZXh0LWdyYXktODAwXCI+XG4gICAgICAgICAgICA8cD57dGl0bGV9PC9wPlxuICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBtYi0yIHRleHQtZ3JheS03MDAgZm9udC1ub3JtYWxcIj57ZXhjZXJwdH08L3A+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS03MDBcIj5cbiAgICAgICAgICAgIDxEYXRlRm9ybWF0dGVyIGRhdGVTdHJpbmc9e2RhdGV9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9hPlxuICAgIDwvTGluaz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RQcmV2aWV3O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/post-preview.tsx\n");

/***/ })

})