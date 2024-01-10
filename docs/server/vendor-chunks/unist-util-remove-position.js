"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/unist-util-remove-position";
exports.ids = ["vendor-chunks/unist-util-remove-position"];
exports.modules = {

/***/ "(rsc)/./node_modules/unist-util-remove-position/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/unist-util-remove-position/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar visit = __webpack_require__(/*! unist-util-visit */ \"(rsc)/./node_modules/unist-util-visit/index.js\");\nmodule.exports = removePosition;\nfunction removePosition(node, force) {\n    visit(node, force ? hard : soft);\n    return node;\n}\nfunction hard(node) {\n    delete node.position;\n}\nfunction soft(node) {\n    node.position = undefined;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC1yZW1vdmUtcG9zaXRpb24vaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFFQSxJQUFJQSxRQUFRQyxtQkFBT0EsQ0FBQztBQUVwQkMsT0FBT0MsT0FBTyxHQUFHQztBQUVqQixTQUFTQSxlQUFlQyxJQUFJLEVBQUVDLEtBQUs7SUFDakNOLE1BQU1LLE1BQU1DLFFBQVFDLE9BQU9DO0lBQzNCLE9BQU9IO0FBQ1Q7QUFFQSxTQUFTRSxLQUFLRixJQUFJO0lBQ2hCLE9BQU9BLEtBQUtJLFFBQVE7QUFDdEI7QUFFQSxTQUFTRCxLQUFLSCxJQUFJO0lBQ2hCQSxLQUFLSSxRQUFRLEdBQUdDO0FBQ2xCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmxvZy1zdGFydGVyLXR5cGVzY3JpcHQvLi9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC1yZW1vdmUtcG9zaXRpb24vaW5kZXguanM/NTRiYSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxudmFyIHZpc2l0ID0gcmVxdWlyZSgndW5pc3QtdXRpbC12aXNpdCcpXG5cbm1vZHVsZS5leHBvcnRzID0gcmVtb3ZlUG9zaXRpb25cblxuZnVuY3Rpb24gcmVtb3ZlUG9zaXRpb24obm9kZSwgZm9yY2UpIHtcbiAgdmlzaXQobm9kZSwgZm9yY2UgPyBoYXJkIDogc29mdClcbiAgcmV0dXJuIG5vZGVcbn1cblxuZnVuY3Rpb24gaGFyZChub2RlKSB7XG4gIGRlbGV0ZSBub2RlLnBvc2l0aW9uXG59XG5cbmZ1bmN0aW9uIHNvZnQobm9kZSkge1xuICBub2RlLnBvc2l0aW9uID0gdW5kZWZpbmVkXG59XG4iXSwibmFtZXMiOlsidmlzaXQiLCJyZXF1aXJlIiwibW9kdWxlIiwiZXhwb3J0cyIsInJlbW92ZVBvc2l0aW9uIiwibm9kZSIsImZvcmNlIiwiaGFyZCIsInNvZnQiLCJwb3NpdGlvbiIsInVuZGVmaW5lZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/unist-util-remove-position/index.js\n");

/***/ })

};
;