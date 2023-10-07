"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/is-word-character";
exports.ids = ["vendor-chunks/is-word-character"];
exports.modules = {

/***/ "(rsc)/./node_modules/is-word-character/index.js":
/*!*************************************************!*\
  !*** ./node_modules/is-word-character/index.js ***!
  \*************************************************/
/***/ ((module) => {

eval("\nmodule.exports = wordCharacter;\nvar fromCode = String.fromCharCode;\nvar re = /\\w/;\n// Check if the given character code, or the character code at the first\n// character, is a word character.\nfunction wordCharacter(character) {\n    return re.test(typeof character === \"number\" ? fromCode(character) : character.charAt(0));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvaXMtd29yZC1jaGFyYWN0ZXIvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFFQUEsT0FBT0MsT0FBTyxHQUFHQztBQUVqQixJQUFJQyxXQUFXQyxPQUFPQyxZQUFZO0FBQ2xDLElBQUlDLEtBQUs7QUFFVCx3RUFBd0U7QUFDeEUsa0NBQWtDO0FBQ2xDLFNBQVNKLGNBQWNLLFNBQVM7SUFDOUIsT0FBT0QsR0FBR0UsSUFBSSxDQUNaLE9BQU9ELGNBQWMsV0FBV0osU0FBU0ksYUFBYUEsVUFBVUUsTUFBTSxDQUFDO0FBRTNFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmxvZy1zdGFydGVyLXR5cGVzY3JpcHQvLi9ub2RlX21vZHVsZXMvaXMtd29yZC1jaGFyYWN0ZXIvaW5kZXguanM/OTI3NCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSB3b3JkQ2hhcmFjdGVyXG5cbnZhciBmcm9tQ29kZSA9IFN0cmluZy5mcm9tQ2hhckNvZGVcbnZhciByZSA9IC9cXHcvXG5cbi8vIENoZWNrIGlmIHRoZSBnaXZlbiBjaGFyYWN0ZXIgY29kZSwgb3IgdGhlIGNoYXJhY3RlciBjb2RlIGF0IHRoZSBmaXJzdFxuLy8gY2hhcmFjdGVyLCBpcyBhIHdvcmQgY2hhcmFjdGVyLlxuZnVuY3Rpb24gd29yZENoYXJhY3RlcihjaGFyYWN0ZXIpIHtcbiAgcmV0dXJuIHJlLnRlc3QoXG4gICAgdHlwZW9mIGNoYXJhY3RlciA9PT0gJ251bWJlcicgPyBmcm9tQ29kZShjaGFyYWN0ZXIpIDogY2hhcmFjdGVyLmNoYXJBdCgwKVxuICApXG59XG4iXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsIndvcmRDaGFyYWN0ZXIiLCJmcm9tQ29kZSIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsInJlIiwiY2hhcmFjdGVyIiwidGVzdCIsImNoYXJBdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/is-word-character/index.js\n");

/***/ })

};
;