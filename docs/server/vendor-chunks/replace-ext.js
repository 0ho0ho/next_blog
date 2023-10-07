"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/replace-ext";
exports.ids = ["vendor-chunks/replace-ext"];
exports.modules = {

/***/ "(rsc)/./node_modules/replace-ext/index.js":
/*!*******************************************!*\
  !*** ./node_modules/replace-ext/index.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar path = __webpack_require__(/*! path */ \"path\");\nfunction replaceExt(npath, ext) {\n    if (typeof npath !== \"string\") {\n        return npath;\n    }\n    if (npath.length === 0) {\n        return npath;\n    }\n    var nFileName = path.basename(npath, path.extname(npath)) + ext;\n    return path.join(path.dirname(npath), nFileName);\n}\nmodule.exports = replaceExt;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvcmVwbGFjZS1leHQvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFFQSxJQUFJQSxPQUFPQyxtQkFBT0EsQ0FBQztBQUVuQixTQUFTQyxXQUFXQyxLQUFLLEVBQUVDLEdBQUc7SUFDNUIsSUFBSSxPQUFPRCxVQUFVLFVBQVU7UUFDN0IsT0FBT0E7SUFDVDtJQUVBLElBQUlBLE1BQU1FLE1BQU0sS0FBSyxHQUFHO1FBQ3RCLE9BQU9GO0lBQ1Q7SUFFQSxJQUFJRyxZQUFZTixLQUFLTyxRQUFRLENBQUNKLE9BQU9ILEtBQUtRLE9BQU8sQ0FBQ0wsVUFBVUM7SUFDNUQsT0FBT0osS0FBS1MsSUFBSSxDQUFDVCxLQUFLVSxPQUFPLENBQUNQLFFBQVFHO0FBQ3hDO0FBRUFLLE9BQU9DLE9BQU8sR0FBR1YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibG9nLXN0YXJ0ZXItdHlwZXNjcmlwdC8uL25vZGVfbW9kdWxlcy9yZXBsYWNlLWV4dC9pbmRleC5qcz82NTIzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5cbmZ1bmN0aW9uIHJlcGxhY2VFeHQobnBhdGgsIGV4dCkge1xuICBpZiAodHlwZW9mIG5wYXRoICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBucGF0aDtcbiAgfVxuXG4gIGlmIChucGF0aC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gbnBhdGg7XG4gIH1cblxuICB2YXIgbkZpbGVOYW1lID0gcGF0aC5iYXNlbmFtZShucGF0aCwgcGF0aC5leHRuYW1lKG5wYXRoKSkgKyBleHQ7XG4gIHJldHVybiBwYXRoLmpvaW4ocGF0aC5kaXJuYW1lKG5wYXRoKSwgbkZpbGVOYW1lKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSByZXBsYWNlRXh0O1xuIl0sIm5hbWVzIjpbInBhdGgiLCJyZXF1aXJlIiwicmVwbGFjZUV4dCIsIm5wYXRoIiwiZXh0IiwibGVuZ3RoIiwibkZpbGVOYW1lIiwiYmFzZW5hbWUiLCJleHRuYW1lIiwiam9pbiIsImRpcm5hbWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/replace-ext/index.js\n");

/***/ })

};
;