"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/hast-util-whitespace";
exports.ids = ["vendor-chunks/hast-util-whitespace"];
exports.modules = {

/***/ "(rsc)/./node_modules/hast-util-whitespace/index.js":
/*!****************************************************!*\
  !*** ./node_modules/hast-util-whitespace/index.js ***!
  \****************************************************/
/***/ ((module) => {

eval("\nmodule.exports = interElementWhiteSpace;\n// HTML white-space expression.\n// See <https://html.spec.whatwg.org/#space-character>.\nvar re = /[ \\t\\n\\f\\r]/g;\nfunction interElementWhiteSpace(node) {\n    var value;\n    if (node && typeof node === \"object\" && node.type === \"text\") {\n        value = node.value || \"\";\n    } else if (typeof node === \"string\") {\n        value = node;\n    } else {\n        return false;\n    }\n    return value.replace(re, \"\") === \"\";\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvaGFzdC11dGlsLXdoaXRlc3BhY2UvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFFQUEsT0FBT0MsT0FBTyxHQUFHQztBQUVqQiwrQkFBK0I7QUFDL0IsdURBQXVEO0FBQ3ZELElBQUlDLEtBQUs7QUFFVCxTQUFTRCx1QkFBdUJFLElBQUk7SUFDbEMsSUFBSUM7SUFFSixJQUFJRCxRQUFRLE9BQU9BLFNBQVMsWUFBWUEsS0FBS0UsSUFBSSxLQUFLLFFBQVE7UUFDNURELFFBQVFELEtBQUtDLEtBQUssSUFBSTtJQUN4QixPQUFPLElBQUksT0FBT0QsU0FBUyxVQUFVO1FBQ25DQyxRQUFRRDtJQUNWLE9BQU87UUFDTCxPQUFPO0lBQ1Q7SUFFQSxPQUFPQyxNQUFNRSxPQUFPLENBQUNKLElBQUksUUFBUTtBQUNuQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Jsb2ctc3RhcnRlci10eXBlc2NyaXB0Ly4vbm9kZV9tb2R1bGVzL2hhc3QtdXRpbC13aGl0ZXNwYWNlL2luZGV4LmpzP2M2YjUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gaW50ZXJFbGVtZW50V2hpdGVTcGFjZVxuXG4vLyBIVE1MIHdoaXRlLXNwYWNlIGV4cHJlc3Npb24uXG4vLyBTZWUgPGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvI3NwYWNlLWNoYXJhY3Rlcj4uXG52YXIgcmUgPSAvWyBcXHRcXG5cXGZcXHJdL2dcblxuZnVuY3Rpb24gaW50ZXJFbGVtZW50V2hpdGVTcGFjZShub2RlKSB7XG4gIHZhciB2YWx1ZVxuXG4gIGlmIChub2RlICYmIHR5cGVvZiBub2RlID09PSAnb2JqZWN0JyAmJiBub2RlLnR5cGUgPT09ICd0ZXh0Jykge1xuICAgIHZhbHVlID0gbm9kZS52YWx1ZSB8fCAnJ1xuICB9IGVsc2UgaWYgKHR5cGVvZiBub2RlID09PSAnc3RyaW5nJykge1xuICAgIHZhbHVlID0gbm9kZVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIHZhbHVlLnJlcGxhY2UocmUsICcnKSA9PT0gJydcbn1cbiJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiaW50ZXJFbGVtZW50V2hpdGVTcGFjZSIsInJlIiwibm9kZSIsInZhbHVlIiwidHlwZSIsInJlcGxhY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/hast-util-whitespace/index.js\n");

/***/ })

};
;