"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/unist-util-is";
exports.ids = ["vendor-chunks/unist-util-is"];
exports.modules = {

/***/ "(rsc)/./node_modules/unist-util-is/convert.js":
/*!***********************************************!*\
  !*** ./node_modules/unist-util-is/convert.js ***!
  \***********************************************/
/***/ ((module) => {

eval("\nmodule.exports = convert;\nfunction convert(test) {\n    if (typeof test === \"string\") {\n        return typeFactory(test);\n    }\n    if (test === null || test === undefined) {\n        return ok;\n    }\n    if (typeof test === \"object\") {\n        return (\"length\" in test ? anyFactory : matchesFactory)(test);\n    }\n    if (typeof test === \"function\") {\n        return test;\n    }\n    throw new Error(\"Expected function, string, or object as test\");\n}\nfunction convertAll(tests) {\n    var results = [];\n    var length = tests.length;\n    var index = -1;\n    while(++index < length){\n        results[index] = convert(tests[index]);\n    }\n    return results;\n}\n// Utility assert each property in `test` is represented in `node`, and each\n// values are strictly equal.\nfunction matchesFactory(test) {\n    return matches;\n    function matches(node) {\n        var key;\n        for(key in test){\n            if (node[key] !== test[key]) {\n                return false;\n            }\n        }\n        return true;\n    }\n}\nfunction anyFactory(tests) {\n    var checks = convertAll(tests);\n    var length = checks.length;\n    return matches;\n    function matches() {\n        var index = -1;\n        while(++index < length){\n            if (checks[index].apply(this, arguments)) {\n                return true;\n            }\n        }\n        return false;\n    }\n}\n// Utility to convert a string into a function which checks a given node’s type\n// for said string.\nfunction typeFactory(test) {\n    return type;\n    function type(node) {\n        return Boolean(node && node.type === test);\n    }\n}\n// Utility to return true.\nfunction ok() {\n    return true;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC1pcy9jb252ZXJ0LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBRUFBLE9BQU9DLE9BQU8sR0FBR0M7QUFFakIsU0FBU0EsUUFBUUMsSUFBSTtJQUNuQixJQUFJLE9BQU9BLFNBQVMsVUFBVTtRQUM1QixPQUFPQyxZQUFZRDtJQUNyQjtJQUVBLElBQUlBLFNBQVMsUUFBUUEsU0FBU0UsV0FBVztRQUN2QyxPQUFPQztJQUNUO0lBRUEsSUFBSSxPQUFPSCxTQUFTLFVBQVU7UUFDNUIsT0FBTyxDQUFDLFlBQVlBLE9BQU9JLGFBQWFDLGNBQWEsRUFBR0w7SUFDMUQ7SUFFQSxJQUFJLE9BQU9BLFNBQVMsWUFBWTtRQUM5QixPQUFPQTtJQUNUO0lBRUEsTUFBTSxJQUFJTSxNQUFNO0FBQ2xCO0FBRUEsU0FBU0MsV0FBV0MsS0FBSztJQUN2QixJQUFJQyxVQUFVLEVBQUU7SUFDaEIsSUFBSUMsU0FBU0YsTUFBTUUsTUFBTTtJQUN6QixJQUFJQyxRQUFRLENBQUM7SUFFYixNQUFPLEVBQUVBLFFBQVFELE9BQVE7UUFDdkJELE9BQU8sQ0FBQ0UsTUFBTSxHQUFHWixRQUFRUyxLQUFLLENBQUNHLE1BQU07SUFDdkM7SUFFQSxPQUFPRjtBQUNUO0FBRUEsNEVBQTRFO0FBQzVFLDZCQUE2QjtBQUM3QixTQUFTSixlQUFlTCxJQUFJO0lBQzFCLE9BQU9ZO0lBRVAsU0FBU0EsUUFBUUMsSUFBSTtRQUNuQixJQUFJQztRQUVKLElBQUtBLE9BQU9kLEtBQU07WUFDaEIsSUFBSWEsSUFBSSxDQUFDQyxJQUFJLEtBQUtkLElBQUksQ0FBQ2MsSUFBSSxFQUFFO2dCQUMzQixPQUFPO1lBQ1Q7UUFDRjtRQUVBLE9BQU87SUFDVDtBQUNGO0FBRUEsU0FBU1YsV0FBV0ksS0FBSztJQUN2QixJQUFJTyxTQUFTUixXQUFXQztJQUN4QixJQUFJRSxTQUFTSyxPQUFPTCxNQUFNO0lBRTFCLE9BQU9FO0lBRVAsU0FBU0E7UUFDUCxJQUFJRCxRQUFRLENBQUM7UUFFYixNQUFPLEVBQUVBLFFBQVFELE9BQVE7WUFDdkIsSUFBSUssTUFBTSxDQUFDSixNQUFNLENBQUNLLEtBQUssQ0FBQyxJQUFJLEVBQUVDLFlBQVk7Z0JBQ3hDLE9BQU87WUFDVDtRQUNGO1FBRUEsT0FBTztJQUNUO0FBQ0Y7QUFFQSwrRUFBK0U7QUFDL0UsbUJBQW1CO0FBQ25CLFNBQVNoQixZQUFZRCxJQUFJO0lBQ3ZCLE9BQU9rQjtJQUVQLFNBQVNBLEtBQUtMLElBQUk7UUFDaEIsT0FBT00sUUFBUU4sUUFBUUEsS0FBS0ssSUFBSSxLQUFLbEI7SUFDdkM7QUFDRjtBQUVBLDBCQUEwQjtBQUMxQixTQUFTRztJQUNQLE9BQU87QUFDVCIsInNvdXJjZXMiOlsid2VicGFjazovL2Jsb2ctc3RhcnRlci10eXBlc2NyaXB0Ly4vbm9kZV9tb2R1bGVzL3VuaXN0LXV0aWwtaXMvY29udmVydC5qcz9kMGMyIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnZlcnRcblxuZnVuY3Rpb24gY29udmVydCh0ZXN0KSB7XG4gIGlmICh0eXBlb2YgdGVzdCA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdHlwZUZhY3RvcnkodGVzdClcbiAgfVxuXG4gIGlmICh0ZXN0ID09PSBudWxsIHx8IHRlc3QgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBva1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0ZXN0ID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiAoJ2xlbmd0aCcgaW4gdGVzdCA/IGFueUZhY3RvcnkgOiBtYXRjaGVzRmFjdG9yeSkodGVzdClcbiAgfVxuXG4gIGlmICh0eXBlb2YgdGVzdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0ZXN0XG4gIH1cblxuICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIGZ1bmN0aW9uLCBzdHJpbmcsIG9yIG9iamVjdCBhcyB0ZXN0Jylcbn1cblxuZnVuY3Rpb24gY29udmVydEFsbCh0ZXN0cykge1xuICB2YXIgcmVzdWx0cyA9IFtdXG4gIHZhciBsZW5ndGggPSB0ZXN0cy5sZW5ndGhcbiAgdmFyIGluZGV4ID0gLTFcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHJlc3VsdHNbaW5kZXhdID0gY29udmVydCh0ZXN0c1tpbmRleF0pXG4gIH1cblxuICByZXR1cm4gcmVzdWx0c1xufVxuXG4vLyBVdGlsaXR5IGFzc2VydCBlYWNoIHByb3BlcnR5IGluIGB0ZXN0YCBpcyByZXByZXNlbnRlZCBpbiBgbm9kZWAsIGFuZCBlYWNoXG4vLyB2YWx1ZXMgYXJlIHN0cmljdGx5IGVxdWFsLlxuZnVuY3Rpb24gbWF0Y2hlc0ZhY3RvcnkodGVzdCkge1xuICByZXR1cm4gbWF0Y2hlc1xuXG4gIGZ1bmN0aW9uIG1hdGNoZXMobm9kZSkge1xuICAgIHZhciBrZXlcblxuICAgIGZvciAoa2V5IGluIHRlc3QpIHtcbiAgICAgIGlmIChub2RlW2tleV0gIT09IHRlc3Rba2V5XSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG59XG5cbmZ1bmN0aW9uIGFueUZhY3RvcnkodGVzdHMpIHtcbiAgdmFyIGNoZWNrcyA9IGNvbnZlcnRBbGwodGVzdHMpXG4gIHZhciBsZW5ndGggPSBjaGVja3MubGVuZ3RoXG5cbiAgcmV0dXJuIG1hdGNoZXNcblxuICBmdW5jdGlvbiBtYXRjaGVzKCkge1xuICAgIHZhciBpbmRleCA9IC0xXG5cbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgaWYgKGNoZWNrc1tpbmRleF0uYXBwbHkodGhpcywgYXJndW1lbnRzKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbi8vIFV0aWxpdHkgdG8gY29udmVydCBhIHN0cmluZyBpbnRvIGEgZnVuY3Rpb24gd2hpY2ggY2hlY2tzIGEgZ2l2ZW4gbm9kZeKAmXMgdHlwZVxuLy8gZm9yIHNhaWQgc3RyaW5nLlxuZnVuY3Rpb24gdHlwZUZhY3RvcnkodGVzdCkge1xuICByZXR1cm4gdHlwZVxuXG4gIGZ1bmN0aW9uIHR5cGUobm9kZSkge1xuICAgIHJldHVybiBCb29sZWFuKG5vZGUgJiYgbm9kZS50eXBlID09PSB0ZXN0KVxuICB9XG59XG5cbi8vIFV0aWxpdHkgdG8gcmV0dXJuIHRydWUuXG5mdW5jdGlvbiBvaygpIHtcbiAgcmV0dXJuIHRydWVcbn1cbiJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiY29udmVydCIsInRlc3QiLCJ0eXBlRmFjdG9yeSIsInVuZGVmaW5lZCIsIm9rIiwiYW55RmFjdG9yeSIsIm1hdGNoZXNGYWN0b3J5IiwiRXJyb3IiLCJjb252ZXJ0QWxsIiwidGVzdHMiLCJyZXN1bHRzIiwibGVuZ3RoIiwiaW5kZXgiLCJtYXRjaGVzIiwibm9kZSIsImtleSIsImNoZWNrcyIsImFwcGx5IiwiYXJndW1lbnRzIiwidHlwZSIsIkJvb2xlYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/unist-util-is/convert.js\n");

/***/ })

};
;