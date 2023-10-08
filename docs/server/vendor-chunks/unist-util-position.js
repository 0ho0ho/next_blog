"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/unist-util-position";
exports.ids = ["vendor-chunks/unist-util-position"];
exports.modules = {

/***/ "(rsc)/./node_modules/unist-util-position/index.js":
/*!***************************************************!*\
  !*** ./node_modules/unist-util-position/index.js ***!
  \***************************************************/
/***/ ((module) => {

eval("\nvar start = factory(\"start\");\nvar end = factory(\"end\");\nmodule.exports = position;\nposition.start = start;\nposition.end = end;\nfunction position(node) {\n    return {\n        start: start(node),\n        end: end(node)\n    };\n}\nfunction factory(type) {\n    point.displayName = type;\n    return point;\n    function point(node) {\n        var point = node && node.position && node.position[type] || {};\n        return {\n            line: point.line || null,\n            column: point.column || null,\n            offset: isNaN(point.offset) ? null : point.offset\n        };\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC1wb3NpdGlvbi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUVBLElBQUlBLFFBQVFDLFFBQVE7QUFDcEIsSUFBSUMsTUFBTUQsUUFBUTtBQUVsQkUsT0FBT0MsT0FBTyxHQUFHQztBQUVqQkEsU0FBU0wsS0FBSyxHQUFHQTtBQUNqQkssU0FBU0gsR0FBRyxHQUFHQTtBQUVmLFNBQVNHLFNBQVNDLElBQUk7SUFDcEIsT0FBTztRQUFDTixPQUFPQSxNQUFNTTtRQUFPSixLQUFLQSxJQUFJSTtJQUFLO0FBQzVDO0FBRUEsU0FBU0wsUUFBUU0sSUFBSTtJQUNuQkMsTUFBTUMsV0FBVyxHQUFHRjtJQUVwQixPQUFPQztJQUVQLFNBQVNBLE1BQU1GLElBQUk7UUFDakIsSUFBSUUsUUFBUSxRQUFTRixLQUFLRCxRQUFRLElBQUlDLEtBQUtELFFBQVEsQ0FBQ0UsS0FBSyxJQUFLLENBQUM7UUFFL0QsT0FBTztZQUNMRyxNQUFNRixNQUFNRSxJQUFJLElBQUk7WUFDcEJDLFFBQVFILE1BQU1HLE1BQU0sSUFBSTtZQUN4QkMsUUFBUUMsTUFBTUwsTUFBTUksTUFBTSxJQUFJLE9BQU9KLE1BQU1JLE1BQU07UUFDbkQ7SUFDRjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmxvZy1zdGFydGVyLXR5cGVzY3JpcHQvLi9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC1wb3NpdGlvbi9pbmRleC5qcz83ZGJkIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG52YXIgc3RhcnQgPSBmYWN0b3J5KCdzdGFydCcpXG52YXIgZW5kID0gZmFjdG9yeSgnZW5kJylcblxubW9kdWxlLmV4cG9ydHMgPSBwb3NpdGlvblxuXG5wb3NpdGlvbi5zdGFydCA9IHN0YXJ0XG5wb3NpdGlvbi5lbmQgPSBlbmRcblxuZnVuY3Rpb24gcG9zaXRpb24obm9kZSkge1xuICByZXR1cm4ge3N0YXJ0OiBzdGFydChub2RlKSwgZW5kOiBlbmQobm9kZSl9XG59XG5cbmZ1bmN0aW9uIGZhY3RvcnkodHlwZSkge1xuICBwb2ludC5kaXNwbGF5TmFtZSA9IHR5cGVcblxuICByZXR1cm4gcG9pbnRcblxuICBmdW5jdGlvbiBwb2ludChub2RlKSB7XG4gICAgdmFyIHBvaW50ID0gKG5vZGUgJiYgbm9kZS5wb3NpdGlvbiAmJiBub2RlLnBvc2l0aW9uW3R5cGVdKSB8fCB7fVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGxpbmU6IHBvaW50LmxpbmUgfHwgbnVsbCxcbiAgICAgIGNvbHVtbjogcG9pbnQuY29sdW1uIHx8IG51bGwsXG4gICAgICBvZmZzZXQ6IGlzTmFOKHBvaW50Lm9mZnNldCkgPyBudWxsIDogcG9pbnQub2Zmc2V0XG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOlsic3RhcnQiLCJmYWN0b3J5IiwiZW5kIiwibW9kdWxlIiwiZXhwb3J0cyIsInBvc2l0aW9uIiwibm9kZSIsInR5cGUiLCJwb2ludCIsImRpc3BsYXlOYW1lIiwibGluZSIsImNvbHVtbiIsIm9mZnNldCIsImlzTmFOIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/unist-util-position/index.js\n");

/***/ })

};
;