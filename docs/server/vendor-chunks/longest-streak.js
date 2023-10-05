"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/longest-streak";
exports.ids = ["vendor-chunks/longest-streak"];
exports.modules = {

/***/ "(rsc)/./node_modules/longest-streak/index.js":
/*!**********************************************!*\
  !*** ./node_modules/longest-streak/index.js ***!
  \**********************************************/
/***/ ((module) => {

eval("\nmodule.exports = longestStreak;\n// Get the count of the longest repeating streak of `character` in `value`.\nfunction longestStreak(value, character) {\n    var count = 0;\n    var maximum = 0;\n    var expected;\n    var index;\n    if (typeof character !== \"string\" || character.length !== 1) {\n        throw new Error(\"Expected character\");\n    }\n    value = String(value);\n    index = value.indexOf(character);\n    expected = index;\n    while(index !== -1){\n        count++;\n        if (index === expected) {\n            if (count > maximum) {\n                maximum = count;\n            }\n        } else {\n            count = 1;\n        }\n        expected = index + 1;\n        index = value.indexOf(character, expected);\n    }\n    return maximum;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbG9uZ2VzdC1zdHJlYWsvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFFQUEsT0FBT0MsT0FBTyxHQUFHQztBQUVqQiwyRUFBMkU7QUFDM0UsU0FBU0EsY0FBY0MsS0FBSyxFQUFFQyxTQUFTO0lBQ3JDLElBQUlDLFFBQVE7SUFDWixJQUFJQyxVQUFVO0lBQ2QsSUFBSUM7SUFDSixJQUFJQztJQUVKLElBQUksT0FBT0osY0FBYyxZQUFZQSxVQUFVSyxNQUFNLEtBQUssR0FBRztRQUMzRCxNQUFNLElBQUlDLE1BQU07SUFDbEI7SUFFQVAsUUFBUVEsT0FBT1I7SUFDZkssUUFBUUwsTUFBTVMsT0FBTyxDQUFDUjtJQUN0QkcsV0FBV0M7SUFFWCxNQUFPQSxVQUFVLENBQUMsRUFBRztRQUNuQkg7UUFFQSxJQUFJRyxVQUFVRCxVQUFVO1lBQ3RCLElBQUlGLFFBQVFDLFNBQVM7Z0JBQ25CQSxVQUFVRDtZQUNaO1FBQ0YsT0FBTztZQUNMQSxRQUFRO1FBQ1Y7UUFFQUUsV0FBV0MsUUFBUTtRQUNuQkEsUUFBUUwsTUFBTVMsT0FBTyxDQUFDUixXQUFXRztJQUNuQztJQUVBLE9BQU9EO0FBQ1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibG9nLXN0YXJ0ZXItdHlwZXNjcmlwdC8uL25vZGVfbW9kdWxlcy9sb25nZXN0LXN0cmVhay9pbmRleC5qcz9mNmJiIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxvbmdlc3RTdHJlYWtcblxuLy8gR2V0IHRoZSBjb3VudCBvZiB0aGUgbG9uZ2VzdCByZXBlYXRpbmcgc3RyZWFrIG9mIGBjaGFyYWN0ZXJgIGluIGB2YWx1ZWAuXG5mdW5jdGlvbiBsb25nZXN0U3RyZWFrKHZhbHVlLCBjaGFyYWN0ZXIpIHtcbiAgdmFyIGNvdW50ID0gMFxuICB2YXIgbWF4aW11bSA9IDBcbiAgdmFyIGV4cGVjdGVkXG4gIHZhciBpbmRleFxuXG4gIGlmICh0eXBlb2YgY2hhcmFjdGVyICE9PSAnc3RyaW5nJyB8fCBjaGFyYWN0ZXIubGVuZ3RoICE9PSAxKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBjaGFyYWN0ZXInKVxuICB9XG5cbiAgdmFsdWUgPSBTdHJpbmcodmFsdWUpXG4gIGluZGV4ID0gdmFsdWUuaW5kZXhPZihjaGFyYWN0ZXIpXG4gIGV4cGVjdGVkID0gaW5kZXhcblxuICB3aGlsZSAoaW5kZXggIT09IC0xKSB7XG4gICAgY291bnQrK1xuXG4gICAgaWYgKGluZGV4ID09PSBleHBlY3RlZCkge1xuICAgICAgaWYgKGNvdW50ID4gbWF4aW11bSkge1xuICAgICAgICBtYXhpbXVtID0gY291bnRcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY291bnQgPSAxXG4gICAgfVxuXG4gICAgZXhwZWN0ZWQgPSBpbmRleCArIDFcbiAgICBpbmRleCA9IHZhbHVlLmluZGV4T2YoY2hhcmFjdGVyLCBleHBlY3RlZClcbiAgfVxuXG4gIHJldHVybiBtYXhpbXVtXG59XG4iXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImxvbmdlc3RTdHJlYWsiLCJ2YWx1ZSIsImNoYXJhY3RlciIsImNvdW50IiwibWF4aW11bSIsImV4cGVjdGVkIiwiaW5kZXgiLCJsZW5ndGgiLCJFcnJvciIsIlN0cmluZyIsImluZGV4T2YiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/longest-streak/index.js\n");

/***/ })

};
;