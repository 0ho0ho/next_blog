"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/unist-util-visit";
exports.ids = ["vendor-chunks/unist-util-visit"];
exports.modules = {

/***/ "(rsc)/./node_modules/unist-util-visit/index.js":
/*!************************************************!*\
  !*** ./node_modules/unist-util-visit/index.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nmodule.exports = visit;\nvar visitParents = __webpack_require__(/*! unist-util-visit-parents */ \"(rsc)/./node_modules/unist-util-visit-parents/index.js\");\nvar CONTINUE = visitParents.CONTINUE;\nvar SKIP = visitParents.SKIP;\nvar EXIT = visitParents.EXIT;\nvisit.CONTINUE = CONTINUE;\nvisit.SKIP = SKIP;\nvisit.EXIT = EXIT;\nfunction visit(tree, test, visitor, reverse) {\n    if (typeof test === \"function\" && typeof visitor !== \"function\") {\n        reverse = visitor;\n        visitor = test;\n        test = null;\n    }\n    visitParents(tree, test, overload, reverse);\n    function overload(node, parents) {\n        var parent = parents[parents.length - 1];\n        var index = parent ? parent.children.indexOf(node) : null;\n        return visitor(node, index, parent);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC12aXNpdC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUVBQSxPQUFPQyxPQUFPLEdBQUdDO0FBRWpCLElBQUlDLGVBQWVDLG1CQUFPQSxDQUFDO0FBRTNCLElBQUlDLFdBQVdGLGFBQWFFLFFBQVE7QUFDcEMsSUFBSUMsT0FBT0gsYUFBYUcsSUFBSTtBQUM1QixJQUFJQyxPQUFPSixhQUFhSSxJQUFJO0FBRTVCTCxNQUFNRyxRQUFRLEdBQUdBO0FBQ2pCSCxNQUFNSSxJQUFJLEdBQUdBO0FBQ2JKLE1BQU1LLElBQUksR0FBR0E7QUFFYixTQUFTTCxNQUFNTSxJQUFJLEVBQUVDLElBQUksRUFBRUMsT0FBTyxFQUFFQyxPQUFPO0lBQ3pDLElBQUksT0FBT0YsU0FBUyxjQUFjLE9BQU9DLFlBQVksWUFBWTtRQUMvREMsVUFBVUQ7UUFDVkEsVUFBVUQ7UUFDVkEsT0FBTztJQUNUO0lBRUFOLGFBQWFLLE1BQU1DLE1BQU1HLFVBQVVEO0lBRW5DLFNBQVNDLFNBQVNDLElBQUksRUFBRUMsT0FBTztRQUM3QixJQUFJQyxTQUFTRCxPQUFPLENBQUNBLFFBQVFFLE1BQU0sR0FBRyxFQUFFO1FBQ3hDLElBQUlDLFFBQVFGLFNBQVNBLE9BQU9HLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDTixRQUFRO1FBQ3JELE9BQU9ILFFBQVFHLE1BQU1JLE9BQU9GO0lBQzlCO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibG9nLXN0YXJ0ZXItdHlwZXNjcmlwdC8uL25vZGVfbW9kdWxlcy91bmlzdC11dGlsLXZpc2l0L2luZGV4LmpzPzhjMGMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gdmlzaXRcblxudmFyIHZpc2l0UGFyZW50cyA9IHJlcXVpcmUoJ3VuaXN0LXV0aWwtdmlzaXQtcGFyZW50cycpXG5cbnZhciBDT05USU5VRSA9IHZpc2l0UGFyZW50cy5DT05USU5VRVxudmFyIFNLSVAgPSB2aXNpdFBhcmVudHMuU0tJUFxudmFyIEVYSVQgPSB2aXNpdFBhcmVudHMuRVhJVFxuXG52aXNpdC5DT05USU5VRSA9IENPTlRJTlVFXG52aXNpdC5TS0lQID0gU0tJUFxudmlzaXQuRVhJVCA9IEVYSVRcblxuZnVuY3Rpb24gdmlzaXQodHJlZSwgdGVzdCwgdmlzaXRvciwgcmV2ZXJzZSkge1xuICBpZiAodHlwZW9mIHRlc3QgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZpc2l0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICByZXZlcnNlID0gdmlzaXRvclxuICAgIHZpc2l0b3IgPSB0ZXN0XG4gICAgdGVzdCA9IG51bGxcbiAgfVxuXG4gIHZpc2l0UGFyZW50cyh0cmVlLCB0ZXN0LCBvdmVybG9hZCwgcmV2ZXJzZSlcblxuICBmdW5jdGlvbiBvdmVybG9hZChub2RlLCBwYXJlbnRzKSB7XG4gICAgdmFyIHBhcmVudCA9IHBhcmVudHNbcGFyZW50cy5sZW5ndGggLSAxXVxuICAgIHZhciBpbmRleCA9IHBhcmVudCA/IHBhcmVudC5jaGlsZHJlbi5pbmRleE9mKG5vZGUpIDogbnVsbFxuICAgIHJldHVybiB2aXNpdG9yKG5vZGUsIGluZGV4LCBwYXJlbnQpXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwidmlzaXQiLCJ2aXNpdFBhcmVudHMiLCJyZXF1aXJlIiwiQ09OVElOVUUiLCJTS0lQIiwiRVhJVCIsInRyZWUiLCJ0ZXN0IiwidmlzaXRvciIsInJldmVyc2UiLCJvdmVybG9hZCIsIm5vZGUiLCJwYXJlbnRzIiwicGFyZW50IiwibGVuZ3RoIiwiaW5kZXgiLCJjaGlsZHJlbiIsImluZGV4T2YiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/unist-util-visit/index.js\n");

/***/ })

};
;