webpackHotUpdate_N_E("pages/posts/[slug]",{

/***/ "./components/header.tsx":
false,

/***/ "./pages/posts/[slug].tsx":
/*!********************************!*\
  !*** ./pages/posts/[slug].tsx ***!
  \********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/error */ \"./node_modules/next/error.js\");\n/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/container */ \"./components/container.tsx\");\n/* harmony import */ var _components_post_body__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/post-body */ \"./components/post-body.tsx\");\n/* harmony import */ var _components_post_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/post-header */ \"./components/post-header.tsx\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/layout */ \"./components/layout.tsx\");\n/* harmony import */ var _components_post_title__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/post-title */ \"./components/post-title.tsx\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/younghokim/workspace/github/blog/pages/posts/[slug].tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\nvar Post = function Post(_ref) {\n  _s();\n\n  var post = _ref.post,\n      morePosts = _ref.morePosts,\n      preview = _ref.preview;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n\n  if (!router.isFallback && !(post === null || post === void 0 ? void 0 : post.slug)) {\n    return __jsx(next_error__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      statusCode: 404,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 12\n      }\n    });\n  }\n\n  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    preview: preview,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 5\n    }\n  }, __jsx(_components_container__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }\n  }, router.isFallback ? __jsx(_components_post_title__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 11\n    }\n  }, \"Loading\\u2026\") : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"article\", {\n    className: \"mb-32\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 15\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 17\n    }\n  }, post.title, \" | Next.js Blog Example with\"), __jsx(\"meta\", {\n    property: \"og:image\",\n    content: post.ogImage.url,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 17\n    }\n  })), __jsx(_components_post_header__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    title: post.title,\n    coverImage: post.coverImage,\n    date: post.date,\n    author: post.author,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 15\n    }\n  }), __jsx(_components_post_body__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    content: post.content,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 15\n    }\n  })))));\n};\n\n_s(Post, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"]];\n});\n\n_c = Post;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\n\nvar _c;\n\n$RefreshReg$(_c, \"Post\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvW3NsdWddLnRzeD8xYTUyIl0sIm5hbWVzIjpbIlBvc3QiLCJwb3N0IiwibW9yZVBvc3RzIiwicHJldmlldyIsInJvdXRlciIsInVzZVJvdXRlciIsImlzRmFsbGJhY2siLCJzbHVnIiwidGl0bGUiLCJvZ0ltYWdlIiwidXJsIiwiY292ZXJJbWFnZSIsImRhdGUiLCJhdXRob3IiLCJjb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQVVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQXlDO0FBQUE7O0FBQUEsTUFBdENDLElBQXNDLFFBQXRDQSxJQUFzQztBQUFBLE1BQWhDQyxTQUFnQyxRQUFoQ0EsU0FBZ0M7QUFBQSxNQUFyQkMsT0FBcUIsUUFBckJBLE9BQXFCO0FBQ3BELE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBQ0EsTUFBSSxDQUFDRCxNQUFNLENBQUNFLFVBQVIsSUFBc0IsRUFBQ0wsSUFBRCxhQUFDQSxJQUFELHVCQUFDQSxJQUFJLENBQUVNLElBQVAsQ0FBMUIsRUFBdUM7QUFDckMsV0FBTyxNQUFDLGlEQUFEO0FBQVcsZ0JBQVUsRUFBRSxHQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQVA7QUFDRDs7QUFDRCxTQUNFLE1BQUMsMERBQUQ7QUFBUSxXQUFPLEVBQUVKLE9BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0MsTUFBTSxDQUFDRSxVQUFQLEdBQ0MsTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURELEdBR0MsbUVBQ0U7QUFBUyxhQUFTLEVBQUMsT0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0wsSUFBSSxDQUFDTyxLQURSLGlDQURGLEVBSUU7QUFBTSxZQUFRLEVBQUMsVUFBZjtBQUEwQixXQUFPLEVBQUVQLElBQUksQ0FBQ1EsT0FBTCxDQUFhQyxHQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsQ0FERixFQU9FLE1BQUMsK0RBQUQ7QUFDRSxTQUFLLEVBQUVULElBQUksQ0FBQ08sS0FEZDtBQUVFLGNBQVUsRUFBRVAsSUFBSSxDQUFDVSxVQUZuQjtBQUdFLFFBQUksRUFBRVYsSUFBSSxDQUFDVyxJQUhiO0FBSUUsVUFBTSxFQUFFWCxJQUFJLENBQUNZLE1BSmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBGLEVBYUUsTUFBQyw2REFBRDtBQUFVLFdBQU8sRUFBRVosSUFBSSxDQUFDYSxPQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBYkYsQ0FERixDQUpKLENBREYsQ0FERjtBQTJCRCxDQWhDRDs7R0FBTWQsSTtVQUNXSyxxRDs7O0tBRFhMLEk7O0FBa0NTQSxtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL3Bvc3RzL1tzbHVnXS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBFcnJvclBhZ2UgZnJvbSAnbmV4dC9lcnJvcidcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb250YWluZXInXG5pbXBvcnQgUG9zdEJvZHkgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9wb3N0LWJvZHknXG5pbXBvcnQgUG9zdEhlYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL3Bvc3QtaGVhZGVyJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xheW91dCdcbmltcG9ydCB7IGdldFBvc3RCeVNsdWcsIGdldEFsbFBvc3RzIH0gZnJvbSAnLi4vLi4vbGliL2FwaSdcbmltcG9ydCBQb3N0VGl0bGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9wb3N0LXRpdGxlJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IG1hcmtkb3duVG9IdG1sIGZyb20gJy4uLy4uL2xpYi9tYXJrZG93blRvSHRtbCdcbmltcG9ydCBQb3N0VHlwZSBmcm9tICcuLi8uLi90eXBlcy9wb3N0J1xuXG50eXBlIFByb3BzID0ge1xuICBwb3N0OiBQb3N0VHlwZVxuICBtb3JlUG9zdHM6IFBvc3RUeXBlW11cbiAgcHJldmlldz86IGJvb2xlYW5cbn1cblxuY29uc3QgUG9zdCA9ICh7IHBvc3QsIG1vcmVQb3N0cywgcHJldmlldyB9OiBQcm9wcykgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBpZiAoIXJvdXRlci5pc0ZhbGxiYWNrICYmICFwb3N0Py5zbHVnKSB7XG4gICAgcmV0dXJuIDxFcnJvclBhZ2Ugc3RhdHVzQ29kZT17NDA0fSAvPlxuICB9XG4gIHJldHVybiAoXG4gICAgPExheW91dCBwcmV2aWV3PXtwcmV2aWV3fT5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIHtyb3V0ZXIuaXNGYWxsYmFjayA/IChcbiAgICAgICAgICA8UG9zdFRpdGxlPkxvYWRpbmfigKY8L1Bvc3RUaXRsZT5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwibWItMzJcIj5cbiAgICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPlxuICAgICAgICAgICAgICAgICAge3Bvc3QudGl0bGV9IHwgTmV4dC5qcyBCbG9nIEV4YW1wbGUgd2l0aFxuICAgICAgICAgICAgICAgIDwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9e3Bvc3Qub2dJbWFnZS51cmx9IC8+XG4gICAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgICAgPFBvc3RIZWFkZXJcbiAgICAgICAgICAgICAgICB0aXRsZT17cG9zdC50aXRsZX1cbiAgICAgICAgICAgICAgICBjb3ZlckltYWdlPXtwb3N0LmNvdmVySW1hZ2V9XG4gICAgICAgICAgICAgICAgZGF0ZT17cG9zdC5kYXRlfVxuICAgICAgICAgICAgICAgIGF1dGhvcj17cG9zdC5hdXRob3J9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxQb3N0Qm9keSBjb250ZW50PXtwb3N0LmNvbnRlbnR9IC8+XG4gICAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0XG5cbnR5cGUgUGFyYW1zID0ge1xuICBwYXJhbXM6IHtcbiAgICBzbHVnOiBzdHJpbmdcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfTogUGFyYW1zKSB7XG4gIGNvbnN0IHBvc3QgPSBnZXRQb3N0QnlTbHVnKHBhcmFtcy5zbHVnLCBbXG4gICAgJ3RpdGxlJyxcbiAgICAnZGF0ZScsXG4gICAgJ3NsdWcnLFxuICAgICdhdXRob3InLFxuICAgICdjb250ZW50JyxcbiAgICAnb2dJbWFnZScsXG4gICAgJ2NvdmVySW1hZ2UnLFxuICBdKVxuICBjb25zdCBjb250ZW50ID0gYXdhaXQgbWFya2Rvd25Ub0h0bWwocG9zdC5jb250ZW50IHx8ICcnKVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3Q6IHtcbiAgICAgICAgLi4ucG9zdCxcbiAgICAgICAgY29udGVudCxcbiAgICAgIH0sXG4gICAgfSxcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIGNvbnN0IHBvc3RzID0gZ2V0QWxsUG9zdHMoWydzbHVnJ10pXG5cbiAgcmV0dXJuIHtcbiAgICBwYXRoczogcG9zdHMubWFwKChwb3N0cykgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgc2x1ZzogcG9zdHMuc2x1ZyxcbiAgICAgICAgfSxcbiAgICAgIH1cbiAgICB9KSxcbiAgICBmYWxsYmFjazogZmFsc2UsXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/posts/[slug].tsx\n");

/***/ })

})