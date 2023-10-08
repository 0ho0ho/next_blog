"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/markdown-escapes";
exports.ids = ["vendor-chunks/markdown-escapes"];
exports.modules = {

/***/ "(rsc)/./node_modules/markdown-escapes/index.js":
/*!************************************************!*\
  !*** ./node_modules/markdown-escapes/index.js ***!
  \************************************************/
/***/ ((module) => {

eval("\nmodule.exports = escapes;\nvar defaults = [\n    \"\\\\\",\n    \"`\",\n    \"*\",\n    \"{\",\n    \"}\",\n    \"[\",\n    \"]\",\n    \"(\",\n    \")\",\n    \"#\",\n    \"+\",\n    \"-\",\n    \".\",\n    \"!\",\n    \"_\",\n    \">\"\n];\nvar gfm = defaults.concat([\n    \"~\",\n    \"|\"\n]);\nvar commonmark = gfm.concat([\n    \"\\n\",\n    '\"',\n    \"$\",\n    \"%\",\n    \"&\",\n    \"'\",\n    \",\",\n    \"/\",\n    \":\",\n    \";\",\n    \"<\",\n    \"=\",\n    \"?\",\n    \"@\",\n    \"^\"\n]);\nescapes.default = defaults;\nescapes.gfm = gfm;\nescapes.commonmark = commonmark;\n// Get markdown escapes.\nfunction escapes(options) {\n    var settings = options || {};\n    if (settings.commonmark) {\n        return commonmark;\n    }\n    return settings.gfm ? gfm : defaults;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbWFya2Rvd24tZXNjYXBlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUVBQSxPQUFPQyxPQUFPLEdBQUdDO0FBRWpCLElBQUlDLFdBQVc7SUFDYjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtDQUNEO0FBRUQsSUFBSUMsTUFBTUQsU0FBU0UsTUFBTSxDQUFDO0lBQUM7SUFBSztDQUFJO0FBRXBDLElBQUlDLGFBQWFGLElBQUlDLE1BQU0sQ0FBQztJQUMxQjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7Q0FDRDtBQUVESCxRQUFRSyxPQUFPLEdBQUdKO0FBQ2xCRCxRQUFRRSxHQUFHLEdBQUdBO0FBQ2RGLFFBQVFJLFVBQVUsR0FBR0E7QUFFckIsd0JBQXdCO0FBQ3hCLFNBQVNKLFFBQVFNLE9BQU87SUFDdEIsSUFBSUMsV0FBV0QsV0FBVyxDQUFDO0lBRTNCLElBQUlDLFNBQVNILFVBQVUsRUFBRTtRQUN2QixPQUFPQTtJQUNUO0lBRUEsT0FBT0csU0FBU0wsR0FBRyxHQUFHQSxNQUFNRDtBQUM5QiIsInNvdXJjZXMiOlsid2VicGFjazovL2Jsb2ctc3RhcnRlci10eXBlc2NyaXB0Ly4vbm9kZV9tb2R1bGVzL21hcmtkb3duLWVzY2FwZXMvaW5kZXguanM/Y2ZjYSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBlc2NhcGVzXG5cbnZhciBkZWZhdWx0cyA9IFtcbiAgJ1xcXFwnLFxuICAnYCcsXG4gICcqJyxcbiAgJ3snLFxuICAnfScsXG4gICdbJyxcbiAgJ10nLFxuICAnKCcsXG4gICcpJyxcbiAgJyMnLFxuICAnKycsXG4gICctJyxcbiAgJy4nLFxuICAnIScsXG4gICdfJyxcbiAgJz4nXG5dXG5cbnZhciBnZm0gPSBkZWZhdWx0cy5jb25jYXQoWyd+JywgJ3wnXSlcblxudmFyIGNvbW1vbm1hcmsgPSBnZm0uY29uY2F0KFtcbiAgJ1xcbicsXG4gICdcIicsXG4gICckJyxcbiAgJyUnLFxuICAnJicsXG4gIFwiJ1wiLFxuICAnLCcsXG4gICcvJyxcbiAgJzonLFxuICAnOycsXG4gICc8JyxcbiAgJz0nLFxuICAnPycsXG4gICdAJyxcbiAgJ14nXG5dKVxuXG5lc2NhcGVzLmRlZmF1bHQgPSBkZWZhdWx0c1xuZXNjYXBlcy5nZm0gPSBnZm1cbmVzY2FwZXMuY29tbW9ubWFyayA9IGNvbW1vbm1hcmtcblxuLy8gR2V0IG1hcmtkb3duIGVzY2FwZXMuXG5mdW5jdGlvbiBlc2NhcGVzKG9wdGlvbnMpIHtcbiAgdmFyIHNldHRpbmdzID0gb3B0aW9ucyB8fCB7fVxuXG4gIGlmIChzZXR0aW5ncy5jb21tb25tYXJrKSB7XG4gICAgcmV0dXJuIGNvbW1vbm1hcmtcbiAgfVxuXG4gIHJldHVybiBzZXR0aW5ncy5nZm0gPyBnZm0gOiBkZWZhdWx0c1xufVxuIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJlc2NhcGVzIiwiZGVmYXVsdHMiLCJnZm0iLCJjb25jYXQiLCJjb21tb25tYXJrIiwiZGVmYXVsdCIsIm9wdGlvbnMiLCJzZXR0aW5ncyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/markdown-escapes/index.js\n");

/***/ })

};
;