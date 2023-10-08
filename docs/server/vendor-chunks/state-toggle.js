"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/state-toggle";
exports.ids = ["vendor-chunks/state-toggle"];
exports.modules = {

/***/ "(rsc)/./node_modules/state-toggle/index.js":
/*!********************************************!*\
  !*** ./node_modules/state-toggle/index.js ***!
  \********************************************/
/***/ ((module) => {

eval("\nmodule.exports = factory;\n// Construct a state `toggler`: a function which inverses `property` in context\n// based on its current value.\n// The by `toggler` returned function restores that value.\nfunction factory(key, state, ctx) {\n    return enter;\n    function enter() {\n        var context = ctx || this;\n        var current = context[key];\n        context[key] = !state;\n        return exit;\n        function exit() {\n            context[key] = current;\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvc3RhdGUtdG9nZ2xlL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBRUFBLE9BQU9DLE9BQU8sR0FBR0M7QUFFakIsK0VBQStFO0FBQy9FLDhCQUE4QjtBQUM5QiwwREFBMEQ7QUFDMUQsU0FBU0EsUUFBUUMsR0FBRyxFQUFFQyxLQUFLLEVBQUVDLEdBQUc7SUFDOUIsT0FBT0M7SUFFUCxTQUFTQTtRQUNQLElBQUlDLFVBQVVGLE9BQU8sSUFBSTtRQUN6QixJQUFJRyxVQUFVRCxPQUFPLENBQUNKLElBQUk7UUFFMUJJLE9BQU8sQ0FBQ0osSUFBSSxHQUFHLENBQUNDO1FBRWhCLE9BQU9LO1FBRVAsU0FBU0E7WUFDUEYsT0FBTyxDQUFDSixJQUFJLEdBQUdLO1FBQ2pCO0lBQ0Y7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2Jsb2ctc3RhcnRlci10eXBlc2NyaXB0Ly4vbm9kZV9tb2R1bGVzL3N0YXRlLXRvZ2dsZS9pbmRleC5qcz8xNjZkIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnlcblxuLy8gQ29uc3RydWN0IGEgc3RhdGUgYHRvZ2dsZXJgOiBhIGZ1bmN0aW9uIHdoaWNoIGludmVyc2VzIGBwcm9wZXJ0eWAgaW4gY29udGV4dFxuLy8gYmFzZWQgb24gaXRzIGN1cnJlbnQgdmFsdWUuXG4vLyBUaGUgYnkgYHRvZ2dsZXJgIHJldHVybmVkIGZ1bmN0aW9uIHJlc3RvcmVzIHRoYXQgdmFsdWUuXG5mdW5jdGlvbiBmYWN0b3J5KGtleSwgc3RhdGUsIGN0eCkge1xuICByZXR1cm4gZW50ZXJcblxuICBmdW5jdGlvbiBlbnRlcigpIHtcbiAgICB2YXIgY29udGV4dCA9IGN0eCB8fCB0aGlzXG4gICAgdmFyIGN1cnJlbnQgPSBjb250ZXh0W2tleV1cblxuICAgIGNvbnRleHRba2V5XSA9ICFzdGF0ZVxuXG4gICAgcmV0dXJuIGV4aXRcblxuICAgIGZ1bmN0aW9uIGV4aXQoKSB7XG4gICAgICBjb250ZXh0W2tleV0gPSBjdXJyZW50XG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImZhY3RvcnkiLCJrZXkiLCJzdGF0ZSIsImN0eCIsImVudGVyIiwiY29udGV4dCIsImN1cnJlbnQiLCJleGl0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/state-toggle/index.js\n");

/***/ })

};
;