"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/trim-trailing-lines";
exports.ids = ["vendor-chunks/trim-trailing-lines"];
exports.modules = {

/***/ "(rsc)/./node_modules/trim-trailing-lines/index.js":
/*!***************************************************!*\
  !*** ./node_modules/trim-trailing-lines/index.js ***!
  \***************************************************/
/***/ ((module) => {

eval("\nmodule.exports = trimTrailingLines;\nvar line = \"\\n\";\n// Remove final newline characters from `value`.\nfunction trimTrailingLines(value) {\n    var val = String(value);\n    var index = val.length;\n    while(val.charAt(--index) === line){\n    // Empty\n    }\n    return val.slice(0, index + 1);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvdHJpbS10cmFpbGluZy1saW5lcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUVBQSxPQUFPQyxPQUFPLEdBQUdDO0FBRWpCLElBQUlDLE9BQU87QUFFWCxnREFBZ0Q7QUFDaEQsU0FBU0Qsa0JBQWtCRSxLQUFLO0lBQzlCLElBQUlDLE1BQU1DLE9BQU9GO0lBQ2pCLElBQUlHLFFBQVFGLElBQUlHLE1BQU07SUFFdEIsTUFBT0gsSUFBSUksTUFBTSxDQUFDLEVBQUVGLFdBQVdKLEtBQU07SUFDbkMsUUFBUTtJQUNWO0lBRUEsT0FBT0UsSUFBSUssS0FBSyxDQUFDLEdBQUdILFFBQVE7QUFDOUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibG9nLXN0YXJ0ZXItdHlwZXNjcmlwdC8uL25vZGVfbW9kdWxlcy90cmltLXRyYWlsaW5nLWxpbmVzL2luZGV4LmpzPzM1OGEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gdHJpbVRyYWlsaW5nTGluZXNcblxudmFyIGxpbmUgPSAnXFxuJ1xuXG4vLyBSZW1vdmUgZmluYWwgbmV3bGluZSBjaGFyYWN0ZXJzIGZyb20gYHZhbHVlYC5cbmZ1bmN0aW9uIHRyaW1UcmFpbGluZ0xpbmVzKHZhbHVlKSB7XG4gIHZhciB2YWwgPSBTdHJpbmcodmFsdWUpXG4gIHZhciBpbmRleCA9IHZhbC5sZW5ndGhcblxuICB3aGlsZSAodmFsLmNoYXJBdCgtLWluZGV4KSA9PT0gbGluZSkge1xuICAgIC8vIEVtcHR5XG4gIH1cblxuICByZXR1cm4gdmFsLnNsaWNlKDAsIGluZGV4ICsgMSlcbn1cbiJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwidHJpbVRyYWlsaW5nTGluZXMiLCJsaW5lIiwidmFsdWUiLCJ2YWwiLCJTdHJpbmciLCJpbmRleCIsImxlbmd0aCIsImNoYXJBdCIsInNsaWNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/trim-trailing-lines/index.js\n");

/***/ })

};
;