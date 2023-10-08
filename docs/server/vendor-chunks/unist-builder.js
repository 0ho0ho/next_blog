"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/unist-builder";
exports.ids = ["vendor-chunks/unist-builder"];
exports.modules = {

/***/ "(rsc)/./node_modules/unist-builder/index.js":
/*!*********************************************!*\
  !*** ./node_modules/unist-builder/index.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar assign = __webpack_require__(/*! object-assign */ \"(rsc)/./node_modules/object-assign/index.js\");\nmodule.exports = u;\nfunction u(type, props, value) {\n    var node;\n    if ((value === null || value === undefined) && (typeof props !== \"object\" || Array.isArray(props))) {\n        value = props;\n        props = {};\n    }\n    node = assign({\n        type: String(type)\n    }, props);\n    if (Array.isArray(value)) {\n        node.children = value;\n    } else if (value !== null && value !== undefined) {\n        node.value = String(value);\n    }\n    return node;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvdW5pc3QtYnVpbGRlci9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUVBLElBQUlBLFNBQVNDLG1CQUFPQSxDQUFDO0FBRXJCQyxPQUFPQyxPQUFPLEdBQUdDO0FBRWpCLFNBQVNBLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxLQUFLO0lBQzNCLElBQUlDO0lBRUosSUFDRSxDQUFDRCxVQUFVLFFBQVFBLFVBQVVFLFNBQVEsS0FDcEMsUUFBT0gsVUFBVSxZQUFZSSxNQUFNQyxPQUFPLENBQUNMLE1BQUssR0FDakQ7UUFDQUMsUUFBUUQ7UUFDUkEsUUFBUSxDQUFDO0lBQ1g7SUFFQUUsT0FBT1IsT0FBTztRQUFDSyxNQUFNTyxPQUFPUDtJQUFLLEdBQUdDO0lBRXBDLElBQUlJLE1BQU1DLE9BQU8sQ0FBQ0osUUFBUTtRQUN4QkMsS0FBS0ssUUFBUSxHQUFHTjtJQUNsQixPQUFPLElBQUlBLFVBQVUsUUFBUUEsVUFBVUUsV0FBVztRQUNoREQsS0FBS0QsS0FBSyxHQUFHSyxPQUFPTDtJQUN0QjtJQUVBLE9BQU9DO0FBQ1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibG9nLXN0YXJ0ZXItdHlwZXNjcmlwdC8uL25vZGVfbW9kdWxlcy91bmlzdC1idWlsZGVyL2luZGV4LmpzPzRlZjQiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbnZhciBhc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJylcblxubW9kdWxlLmV4cG9ydHMgPSB1XG5cbmZ1bmN0aW9uIHUodHlwZSwgcHJvcHMsIHZhbHVlKSB7XG4gIHZhciBub2RlXG5cbiAgaWYgKFxuICAgICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSAmJlxuICAgICh0eXBlb2YgcHJvcHMgIT09ICdvYmplY3QnIHx8IEFycmF5LmlzQXJyYXkocHJvcHMpKVxuICApIHtcbiAgICB2YWx1ZSA9IHByb3BzXG4gICAgcHJvcHMgPSB7fVxuICB9XG5cbiAgbm9kZSA9IGFzc2lnbih7dHlwZTogU3RyaW5nKHR5cGUpfSwgcHJvcHMpXG5cbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgbm9kZS5jaGlsZHJlbiA9IHZhbHVlXG4gIH0gZWxzZSBpZiAodmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgIG5vZGUudmFsdWUgPSBTdHJpbmcodmFsdWUpXG4gIH1cblxuICByZXR1cm4gbm9kZVxufVxuIl0sIm5hbWVzIjpbImFzc2lnbiIsInJlcXVpcmUiLCJtb2R1bGUiLCJleHBvcnRzIiwidSIsInR5cGUiLCJwcm9wcyIsInZhbHVlIiwibm9kZSIsInVuZGVmaW5lZCIsIkFycmF5IiwiaXNBcnJheSIsIlN0cmluZyIsImNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/unist-builder/index.js\n");

/***/ })

};
;