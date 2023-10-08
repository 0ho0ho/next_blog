"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/ccount";
exports.ids = ["vendor-chunks/ccount"];
exports.modules = {

/***/ "(rsc)/./node_modules/ccount/index.js":
/*!**************************************!*\
  !*** ./node_modules/ccount/index.js ***!
  \**************************************/
/***/ ((module) => {

eval("\nmodule.exports = ccount;\nfunction ccount(value, character) {\n    var val = String(value);\n    var count = 0;\n    var index;\n    if (typeof character !== \"string\" || character.length !== 1) {\n        throw new Error(\"Expected character\");\n    }\n    index = val.indexOf(character);\n    while(index !== -1){\n        count++;\n        index = val.indexOf(character, index + 1);\n    }\n    return count;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvY2NvdW50L2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBRUFBLE9BQU9DLE9BQU8sR0FBR0M7QUFFakIsU0FBU0EsT0FBT0MsS0FBSyxFQUFFQyxTQUFTO0lBQzlCLElBQUlDLE1BQU1DLE9BQU9IO0lBQ2pCLElBQUlJLFFBQVE7SUFDWixJQUFJQztJQUVKLElBQUksT0FBT0osY0FBYyxZQUFZQSxVQUFVSyxNQUFNLEtBQUssR0FBRztRQUMzRCxNQUFNLElBQUlDLE1BQU07SUFDbEI7SUFFQUYsUUFBUUgsSUFBSU0sT0FBTyxDQUFDUDtJQUVwQixNQUFPSSxVQUFVLENBQUMsRUFBRztRQUNuQkQ7UUFDQUMsUUFBUUgsSUFBSU0sT0FBTyxDQUFDUCxXQUFXSSxRQUFRO0lBQ3pDO0lBRUEsT0FBT0Q7QUFDVCIsInNvdXJjZXMiOlsid2VicGFjazovL2Jsb2ctc3RhcnRlci10eXBlc2NyaXB0Ly4vbm9kZV9tb2R1bGVzL2Njb3VudC9pbmRleC5qcz80MzcyIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNjb3VudFxuXG5mdW5jdGlvbiBjY291bnQodmFsdWUsIGNoYXJhY3Rlcikge1xuICB2YXIgdmFsID0gU3RyaW5nKHZhbHVlKVxuICB2YXIgY291bnQgPSAwXG4gIHZhciBpbmRleFxuXG4gIGlmICh0eXBlb2YgY2hhcmFjdGVyICE9PSAnc3RyaW5nJyB8fCBjaGFyYWN0ZXIubGVuZ3RoICE9PSAxKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBjaGFyYWN0ZXInKVxuICB9XG5cbiAgaW5kZXggPSB2YWwuaW5kZXhPZihjaGFyYWN0ZXIpXG5cbiAgd2hpbGUgKGluZGV4ICE9PSAtMSkge1xuICAgIGNvdW50KytcbiAgICBpbmRleCA9IHZhbC5pbmRleE9mKGNoYXJhY3RlciwgaW5kZXggKyAxKVxuICB9XG5cbiAgcmV0dXJuIGNvdW50XG59XG4iXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImNjb3VudCIsInZhbHVlIiwiY2hhcmFjdGVyIiwidmFsIiwiU3RyaW5nIiwiY291bnQiLCJpbmRleCIsImxlbmd0aCIsIkVycm9yIiwiaW5kZXhPZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/ccount/index.js\n");

/***/ })

};
;